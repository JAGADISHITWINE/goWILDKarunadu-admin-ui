import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { catchError, forkJoin, of } from 'rxjs';
import { Analytics } from '../analytics/analytics';
import { AuditService } from './audit.service';
import { Bookings } from '../bookings/bookings';
import { Dashboard } from '../dashboard/dashboard';
import { NotificationsService } from '../notifications/notifications.service';
import { Reviews } from '../reviews/reviews';
import { AdminShellComponent } from '../shared/admin-shell/admin-shell.component';
import { TrekBatchManagement } from '../trek-batch-management/trek-batch-management';
import { TrekList } from '../treks/trek-list/trek-list';
import { Users } from '../users/users';
import { AuthService } from '../core/services/auth.service';
import { RbacService, RbacTableRow, CreateAdminPayload } from '../core/services/rbac.service';

import { DropdownManagerService } from '../dropdown-manager/dropdown-manager.service';

interface PermissionRow extends RbacTableRow {}

interface ExportReport {
  name: string;
  format: 'CSV' | 'XLSX' | 'PDF';
  lastGenerated: string;
}

interface ApiCheck {
  name: string;
  ok: boolean;
}

interface AuditLog {
  when: string;
  actor: string;
  action: string;
  entityType?: string;
  entityId?: string | null;
}

@Component({
  selector: 'app-operations-center',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, AdminShellComponent],
  templateUrl: './operations-center.component.html',
  styleUrls: ['./operations-center.component.scss'],
})
export class OperationsCenterComponent implements OnInit {
  loading = false;
  errorMessage = '';
  lastSyncedAt = '';
  apiChecks: ApiCheck[] = [];

  activeTab: 'overview' | 'checkin' | 'advisory' | 'gear' | 'pnl' | 'royalty' | 'journey' | 'inventory' | 'logistics' | 'crm' | 'rbac' = 'overview';

  // ── Forest Dept & Eco-Permit Royalty Ledger State ──
  royaltyData: any = null;
  isLoadingRoyalty = false;

  // ── Automated WhatsApp/SMS Journey Dispatcher State ──
  journeyForm = {
    bookingId: '',
    type: 'booking_pass',
    channel: 'WhatsApp'
  };
  activePreviewType: 'booking_pass' | 'weather_advisory' | 'summit_certificate' = 'booking_pass';
  isDispatchingJourney = false;
  journeySuccessMsg = '';
  journeyLogs: Array<{
    id: string;
    type: string;
    typeName: string;
    channel: string;
    target: string;
    status: string;
    timestamp: Date;
  }> = [
    {
      id: 'MSG-INIT-8941',
      type: 'booking_pass',
      typeName: 'Digital Trek Pass & QR',
      channel: 'WhatsApp',
      target: 'Batch KUD-2026-B1 (18 Trekkers)',
      status: 'DELIVERED',
      timestamp: new Date(Date.now() - 3600000 * 2)
    },
    {
      id: 'MSG-INIT-8940',
      type: 'weather_advisory',
      typeName: 'T-48h Weather Advisory',
      channel: 'WhatsApp + SMS',
      target: 'Batch NET-2026-B2 (22 Trekkers)',
      status: 'DELIVERED',
      timestamp: new Date(Date.now() - 3600000 * 5)
    },
    {
      id: 'MSG-INIT-8939',
      type: 'summit_certificate',
      typeName: 'Summit Certificate & Badge',
      channel: 'WhatsApp',
      target: 'Batch TADI-2026-B3 (15 Trekkers)',
      status: 'DELIVERED',
      timestamp: new Date(Date.now() - 3600000 * 18)
    }
  ];

  totalRevenue = 0;
  totalBookings = 0;
  totalUsers = 0;
  openTicketCount = 0;

  canEditPermissions = false;
  isSavingPermissions = false;

  // ── Dynamic Backend Dropdowns State ──
  trailConditionOptions: string[] = [];
  trailSeverityOptions: string[] = [];
  gearCategoryOptions: string[] = [];
  gearConditionOptions: string[] = [];
  expenseCategoryOptions: string[] = [];

  // ── Basecamp QR Scanner & Digital Check-in State ──
  scannerQuery = '';
  isCameraActive = false;
  foundBooking: any = null;
  isCheckedIn = false;
  checkinHistory: any[] = [];
  allBookingsRaw: any[] = [];

  // ── Trail Advisory Broadcast State ──
  isBroadcasting = false;
  broadcastSuccessMsg = '';
  advisoryForm = {
    trekName: 'Kudremukha Peak Expedition',
    batchId: 'BATCH-KUD-2026',
    trailCondition: '',
    severity: 'Advisory (Yellow)',
    alertMessage: 'Monsoon trail alert: Moderate rainfall expected. All trekkers must carry rain ponchos and high-grip trekking shoes.',
    channel: 'WhatsApp + SMS Broadcast'
  };

  // ── Gear Rental Inventory State ──
  gearList: any[] = [];
  showGearModal = false;
  isSavingGear = false;
  gearForm = {
    id: '',
    itemName: '',
    category: '',
    totalQuantity: 15,
    rentedQuantity: 0,
    rentalRatePerDay: 100,
    itemCondition: 'Good Condition',
    location: 'Main Basecamp Gear Store',
    status: 'active'
  };

  // ── Batch P&L Profitability Calculator State ──
  selectedBatchPnl: any = null;
  batchPnlData = {
    batchId: '',
    trekName: '',
    ticketRevenue: 0,
    gearRevenue: 0,
    expenses: [] as any[],
    totalExpenses: 0,
    netProfit: 0,
    operatingMarginPct: 0
  };
  newExpenseForm = {
    expenseCategory: '',
    description: '',
    amount: 0,
    paidTo: '',
    paymentMode: 'UPI',
    receiptRef: ''
  };
  isRecordingExpense = false;

  setActiveTab(tab: 'overview' | 'checkin' | 'advisory' | 'gear' | 'pnl' | 'royalty' | 'journey' | 'inventory' | 'logistics' | 'crm' | 'rbac') {
    this.activeTab = tab;
  }

  createAdminLoading = false;
  createAdminMessage = '';
  createAdminError = '';
  showCreateAdminPassword = false;
  newAdminForm: CreateAdminPayload = {
    name: '',
    email: '',
    password: '',
    roleKey: '',
  };

  permissions: PermissionRow[] = [];

  trekInventory: any[] = [];
  batchLifecycle: any[] = [];
  guideVendors: any[] = [];
  supportTickets: any[] = [];
  paymentOps: any[] = [];
  complianceDocs: any[] = [];
  logistics: any[] = [];
  reviewQueue: any[] = [];
  notificationTemplates: any[] = [];

  reports: ExportReport[] = [
    { name: 'Revenue by Trek', format: 'XLSX', lastGenerated: 'Pending live data' },
    { name: 'Occupancy by Batch', format: 'CSV', lastGenerated: 'Pending live data' },
    { name: 'Refund Register', format: 'PDF', lastGenerated: 'Pending live data' },
  ];

  auditLogs: AuditLog[] = [];

  constructor(
    private dashboardService: Dashboard,
    private bookingService: Bookings,
    private trekService: TrekList,
    private userService: Users,
    private reviewService: Reviews,
    private batchService: TrekBatchManagement,
    private notificationService: NotificationsService,
    private analyticsService: Analytics,
    private auditService: AuditService,
    private authService: AuthService,
    private rbacService: RbacService,
    private dropdownService: DropdownManagerService
  ) {}

  ngOnInit(): void {
    this.canEditPermissions = this.authService.hasPermission('rbac.manage');
    this.loadDynamicDropdowns();
    this.loadRbacTable();
    this.loadOperationsData();
    this.loadGearInventory();
  }

  loadDynamicDropdowns(): void {
    this.dropdownService.getGroupOptions('trailCondition').subscribe(opts => {
      if (opts.length > 0) {
        this.trailConditionOptions = opts.map(o => o.label);
        if (!this.advisoryForm.trailCondition) this.advisoryForm.trailCondition = this.trailConditionOptions[0];
      }
    });

    this.dropdownService.getGroupOptions('trailWeatherSeverity').subscribe(opts => {
      if (opts.length > 0) this.trailSeverityOptions = opts.map(o => o.label);
    });

    this.dropdownService.getGroupOptions('gearCategory').subscribe(opts => {
      if (opts.length > 0) {
        this.gearCategoryOptions = opts.map(o => o.label);
        if (!this.gearForm.category) this.gearForm.category = this.gearCategoryOptions[0];
      }
    });

    this.dropdownService.getGroupOptions('gearCondition').subscribe(opts => {
      if (opts.length > 0) this.gearConditionOptions = opts.map(o => o.label);
    });

    this.dropdownService.getGroupOptions('expenseCategory').subscribe(opts => {
      if (opts.length > 0) {
        this.expenseCategoryOptions = opts.map(o => o.label);
        if (!this.newExpenseForm.expenseCategory) this.newExpenseForm.expenseCategory = this.expenseCategoryOptions[0];
      }
    });
  }

  loadRbacTable(): void {
    this.rbacService.getTable().subscribe({
      next: (res) => {
        this.permissions = Array.isArray(res?.data) ? res.data : [];
        if (!this.newAdminForm.roleKey && this.permissions.length > 0) {
          this.newAdminForm.roleKey = this.permissions[0].roleKey;
        }
      },
      error: () => {
        this.permissions = [];
      },
    });
  }

  savePermissions(): void {
    if (!this.canEditPermissions || this.isSavingPermissions) return;

    this.isSavingPermissions = true;
    this.rbacService.updateTable(this.permissions).subscribe({
      next: (res) => {
        this.permissions = Array.isArray(res?.data) ? res.data : this.permissions;
        this.isSavingPermissions = false;
      },
      error: () => {
        this.isSavingPermissions = false;
      },
    });
  }

  createAdminUser(): void {
    if (!this.canEditPermissions || this.createAdminLoading) return;

    const payload: CreateAdminPayload = {
      name: String(this.newAdminForm.name || '').trim(),
      email: String(this.newAdminForm.email || '').trim(),
      password: String(this.newAdminForm.password || ''),
      roleKey: String(this.newAdminForm.roleKey || '').trim(),
    };

    if (!payload.name || !payload.email || !payload.password || !payload.roleKey) {
      this.createAdminError = 'All fields are required.';
      this.createAdminMessage = '';
      return;
    }

    this.createAdminLoading = true;
    this.createAdminError = '';
    this.createAdminMessage = '';

    this.rbacService.createAdmin(payload).subscribe({
      next: (res) => {
        this.createAdminLoading = false;
        this.createAdminMessage = res?.message || 'Admin created successfully.';
        this.newAdminForm = {
          name: '',
          email: '',
          password: '',
          roleKey: this.newAdminForm.roleKey,
        };
      },
      error: (err) => {
        this.createAdminLoading = false;
        this.createAdminError = err?.error?.message || 'Failed to create admin.';
      },
    });
  }

  loadOperationsData(): void {
    this.loading = true;
    this.errorMessage = '';

    forkJoin({
      dash: this.dashboardService.getDashData().pipe(catchError(() => of(null))),
      bookings: this.bookingService.getBookingData().pipe(catchError(() => of(null))),
      treks: this.trekService.getAllTreks().pipe(catchError(() => of(null))),
      users: this.userService.getAllUsers().pipe(catchError(() => of(null))),
      reviews: this.reviewService.getAllReviews().pipe(catchError(() => of(null))),
      batchTreks: this.batchService.getTreks().pipe(catchError(() => of(null))),
      completion: this.batchService.getCompletionStats().pipe(catchError(() => of(null))),
      notifications: this.notificationService.getNotifications().pipe(catchError(() => of(null))),
      analytics: this.analyticsService.getRevenueData().pipe(catchError(() => of(null))),
      audit: this.auditService.getAuditLogs(12).pipe(catchError(() => of(null))),
      refunds: this.bookingService.listRefunds().pipe(catchError(() => of(null))),
      reconcile: this.bookingService.reconcilePayments().pipe(catchError(() => of(null))),
    }).subscribe(({ dash, bookings, treks, users, reviews, batchTreks, completion, notifications, analytics, audit, refunds, reconcile }) => {
      this.apiChecks = [
        { name: 'Dashboard', ok: !!dash },
        { name: 'Bookings', ok: !!bookings },
        { name: 'Treks', ok: !!treks },
        { name: 'Users', ok: !!users },
        { name: 'Reviews', ok: !!reviews },
        { name: 'Batch Ops', ok: !!batchTreks },
        { name: 'Notifications', ok: !!notifications },
        { name: 'Analytics', ok: !!analytics },
        { name: 'Payments API', ok: !!refunds || !!reconcile },
      ];

      const anyConnected = this.apiChecks.some((c) => c.ok);
      if (!anyConnected) {
        this.errorMessage = 'Backend is unreachable from this app environment. Check API server and CORS/network settings.';
      }

      const dashData = dash?.data || {};
      const bookingRows = Array.isArray(bookings?.data) ? bookings.data : [];
      const trekRows = Array.isArray(treks?.data?.result)
        ? treks.data.result
        : Array.isArray(treks?.data)
          ? treks.data
          : [];
      const userRows = Array.isArray(users?.data) ? users.data : [];
      const reviewRows = Array.isArray(reviews) ? reviews : [];
      const batchRows = Array.isArray(batchTreks?.data) ? batchTreks.data : [];
      const completionAny: any = completion;
      const completionData = completionAny?.data || completionAny || {};
      const notificationRows = Array.isArray(notifications?.results)
        ? notifications.results
        : Array.isArray(notifications?.data)
          ? notifications.data
          : [];
      const analyticsData = analytics?.data || {};
      const refundRows = Array.isArray(refunds?.data) ? refunds.data : [];

      this.allBookingsRaw = bookingRows;
      this.totalBookings = Number(dashData.totalbookingCount || bookingRows.length || 0);
      this.totalRevenue = Number(dashData.totalRevenue || analyticsData.totalRevenue || 0);
      this.totalUsers = Number(dashData.totalUsers || userRows.length || 0);

      this.trekInventory = trekRows.slice(0, 6).map((t: any) => ({
        trek: t.name || t.trek_name || 'Trek',
        seats: t.availableSeats ?? t.seats_available ?? t.total_seats ?? 0,
        waitlist: t.waitlistCount ?? 0,
        basePrice: t.price ?? (t.batches?.[0]?.price || 0),
        seasonMultiplier: 1,
        status: t.status || 'Unknown',
      }));

      this.batchLifecycle = batchRows.slice(0, 6).map((b: any) => ({
        code: b.name || b.code || `TRK-${b.id ?? '-'}`,
        phase: b.status || 'Unknown',
        cutoff: b.cutoffDate || b.start_date || '-',
        action: 'Manage in Batch Module',
      }));

      this.paymentOps = bookingRows.slice(0, 8).map((b: any) => ({
        bookingId: b.id ? `#${b.id}` : b.bookingReference || 'BK-N/A',
        customerName: b.customerName || 'Customer',
        amount: Number(b.amount || 0),
        mode: b.paymentMethod || 'Online / Gateway',
        status: b.paymentStatus || 'pending',
        reconcile: b.paymentStatus === 'paid' ? 'Matched' : b.paymentStatus === 'refunded' ? 'Refunded' : 'Review',
      }));

      this.supportTickets = bookingRows
        .filter((b: any) => (b.status || '').toLowerCase() === 'pending' || (b.paymentStatus || '').toLowerCase() === 'pending')
        .slice(0, 6)
        .map((b: any) => ({
          customer: b.customerName || 'Customer',
          issue: 'Pending booking/payment follow-up',
          priority: 'Medium',
          status: 'Open',
        }));

      this.openTicketCount = this.supportTickets.length;

      this.complianceDocs = bookingRows.slice(0, 6).map((b: any) => ({
        bookingId: b.bookingReference || `BK-${b.id}`,
        waiver: !!b.waiverSigned,
        idProof: !!b.idProofUploaded,
        medical: !!b.medicalDeclaration,
      }));

      this.reviewQueue = reviewRows.slice(0, 6).map((r: any) => ({
        author: r.author_name || r.customerName || 'Guest',
        trek: r.trek_name || r.trekName || 'Trek',
        sentiment: Number(r.likes || 0) >= 3 ? 'Positive' : 'Mixed',
        state: 'Pending',
      }));

      this.notificationTemplates = notificationRows.slice(0, 6).map((n: any) => ({
        channel: n.type || 'system',
        template: n.title || 'Notification',
        deliveryRate: n.read ? 'Delivered' : 'Pending',
      }));

      const auditRows = Array.isArray(audit?.data?.logs)
        ? audit.data.logs
        : Array.isArray(audit?.data)
          ? audit.data
          : [];

      this.auditLogs = auditRows.map((row: any) => ({
        when: row.createdAt ? String(row.createdAt).replace('T', ' ').slice(0, 16) : '-',
        actor: row.actor || row.actorEmail || 'System',
        action: row.summary || row.actionType || 'Admin action',
        entityType: row.entityType,
        entityId: row.entityId,
      }));

      if (this.auditLogs.length === 0) {
        this.auditLogs = [
          { when: new Date().toISOString().slice(0, 16).replace('T', ' '), actor: 'system', action: 'No audit logs found yet' },
        ];
      }

      this.guideVendors = [
        {
          name: 'Backend-ready placeholder',
          type: 'Guide/Vendor endpoint pending',
          assignment: 'Connect dedicated endpoint when available',
          score: 0,
          payoutDue: 0,
        },
      ];

      this.logistics = [
        {
          route: 'Backend-ready placeholder',
          pickupPoints: 0,
          vehicle: 'Connect transport endpoint',
          manifest: 'Pending integration',
        },
      ];

      this.lastSyncedAt = new Date().toLocaleString();
      this.loading = false;
    });
  }

  get complianceCompletion(): number {
    const total = this.complianceDocs.length * 3;
    if (!total) {
      return 0;
    }
    const done = this.complianceDocs.reduce((acc, row) => {
      return acc + Number(row.waiver) + Number(row.idProof) + Number(row.medical);
    }, 0);
    return Math.round((done / total) * 100);
  }

  get failedPayments(): number {
    return this.paymentOps.filter((row) => String(row.status).toLowerCase() === 'failed').length;
  }

  exportReport(report: ExportReport): void {
    if (report.name === 'Refund Register') {
      this.bookingService.listRefunds().subscribe({
        next: (res: any) => {
          const rows = Array.isArray(res?.data) ? res.data : [];
          if (rows.length === 0) {
            alert('No refunds recorded yet in the system.');
            return;
          }
          const csvRows = [
            ['Refund Payment ID', 'Booking Reference', 'Customer Name', 'Email', 'Phone', 'Trek Name', 'Booking Amount (INR)', 'Refund Amount (INR)', 'Refund Method', 'Transaction / UTR ID', 'Processed Date'],
            ...rows.map((r: any) => [
              r.id || '',
              r.booking_reference || r.booking_id || '',
              r.customer_name || '',
              r.customer_email || '',
              r.customer_phone || '',
              r.trek_name || '',
              r.booking_amount || 0,
              r.amount || 0,
              r.payment_method || 'Online Gateway',
              r.transaction_id || '',
              r.created_at || '',
            ])
          ];
          this.downloadCsv(csvRows, `Refund-Register-${new Date().toISOString().slice(0, 10)}.csv`);
          report.lastGenerated = new Date().toLocaleTimeString();
        },
        error: () => {
          alert('Failed to generate Refund Register report.');
        }
      });
      return;
    }

    // Default export for other reports
    const csvRows = [
      ['Booking ID / Reference', 'Customer', 'Amount', 'Payment Method', 'Payment Status', 'Reconciliation Status'],
      ...this.paymentOps.map(p => [p.bookingId, p.customerName || '', p.amount, p.mode, p.status, p.reconcile])
    ];
    this.downloadCsv(csvRows, `${report.name.replace(/\s+/g, '-')}-${new Date().toISOString().slice(0, 10)}.csv`);
    report.lastGenerated = new Date().toLocaleTimeString();
  }

  private downloadCsv(rows: any[][], filename: string) {
    const csv = rows
      .map((row) => row.map((value) => `"${String(value ?? '').replace(/"/g, '""')}"`).join(','))
      .join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  }

  // ── Basecamp QR Scanner & Digital Check-in Methods ──
  searchCheckin(query: string) {
    const q = String(query || '').trim().toLowerCase().replace('#', '').replace('gwk-', '');
    if (!q) {
      this.foundBooking = null;
      return;
    }

    const match = this.allBookingsRaw.find((b: any) =>
      String(b.id || '').toLowerCase().includes(q) ||
      String(b.customer_name || b.customerName || '').toLowerCase().includes(q) ||
      String(b.customer_email || b.email || '').toLowerCase().includes(q) ||
      String(b.customer_phone || b.phone || '').includes(q)
    );

    if (match) {
      this.foundBooking = match;
      this.isCheckedIn = match.status === 'confirmed' || match.booking_status === 'confirmed';
    } else {
      this.foundBooking = null;
    }
  }

  toggleCameraScanner() {
    this.isCameraActive = !this.isCameraActive;
    if (this.isCameraActive) {
      // Simulate rapid QR scanner detection or live lookup
      setTimeout(() => {
        if (this.allBookingsRaw.length > 0) {
          const sample = this.allBookingsRaw[0];
          this.scannerQuery = `GWK-${sample.id}`;
          this.searchCheckin(sample.id);
        }
      }, 1200);
    }
  }

  confirmCheckin(booking: any) {
    if (!booking) return;

    this.bookingService.recordCheckin({
      bookingId: booking.id,
      batchId: booking.batchId || booking.batch_id || 'BATCH-PRIMARY',
      passReference: `GWK-${booking.id}`,
      leadCustomerName: booking.customer_name || booking.customerName || 'Trekker',
      participantsCount: Number(booking.participants || booking.seats || 1),
      checkedInCount: Number(booking.participants || booking.seats || 1),
      notes: 'Verified photo ID & health declaration at basecamp entry'
    }).subscribe({
      next: (res: any) => {
        if (res?.success) {
          this.isCheckedIn = true;
          booking.status = 'confirmed';
          booking.booking_status = 'confirmed';
          this.checkinHistory.unshift({
            bookingId: booking.id,
            name: booking.customer_name || booking.customerName,
            trek: booking.trek_name || booking.trekName,
            count: Number(booking.participants || booking.seats || 1),
            time: new Date().toLocaleTimeString()
          });
          alert(`Check-in Confirmed! Trekker #${booking.id} marked present.`);
        }
      },
      error: () => {
        alert('Check-in failed. Please try again.');
      }
    });
  }

  // ── Trail Advisory Broadcast Methods ──
  broadcastAdvisory() {
    if (!this.advisoryForm.alertMessage) {
      alert('Please enter an advisory alert message to broadcast.');
      return;
    }

    this.isBroadcasting = true;
    this.bookingService.broadcastTrailAdvisory({
      trekName: this.advisoryForm.trekName,
      batchId: this.advisoryForm.batchId,
      trailCondition: this.advisoryForm.trailCondition,
      severity: this.advisoryForm.severity,
      alertMessage: this.advisoryForm.alertMessage,
      channel: this.advisoryForm.channel
    }).subscribe({
      next: (res: any) => {
        this.isBroadcasting = false;
        if (res?.success) {
          this.broadcastSuccessMsg = `Alert broadcasted successfully to all batch participants via ${this.advisoryForm.channel}!`;
          setTimeout(() => this.broadcastSuccessMsg = '', 5000);
        }
      },
      error: () => {
        this.isBroadcasting = false;
        alert('Failed to broadcast advisory.');
      }
    });
  }

  // ── Gear Rental Inventory Methods ──
  loadGearInventory() {
    this.bookingService.listGearInventory().subscribe({
      next: (res: any) => {
        if (res?.success && Array.isArray(res.data) && res.data.length > 0) {
          this.gearList = res.data;
        } else {
          // Default seeded items
          this.gearList = [
            { id: '1', item_name: 'Anti-Shock Carbon Trekking Poles (Pair)', category: 'Trekking Poles & Sticks', total_quantity: 40, rented_quantity: 18, rental_rate_per_day: 150, item_condition: 'Good Condition', status: 'active' },
            { id: '2', item_name: 'Quechua -5°C Expedition Sleeping Bag', category: 'Sleeping Bags & Mats', total_quantity: 30, rented_quantity: 12, rental_rate_per_day: 200, item_condition: 'Good Condition', status: 'active' },
            { id: '3', item_name: 'Waterproof Monsoon Poncho & Rain Cover', category: 'Waterproof Ponchos & Rain Covers', total_quantity: 60, rented_quantity: 24, rental_rate_per_day: 80, item_condition: 'Brand New', status: 'active' },
            { id: '4', item_name: '450 Lumens Rechargeable LED Headlamp', category: 'Headlamps & Torches', total_quantity: 25, rented_quantity: 8, rental_rate_per_day: 100, item_condition: 'Good Condition', status: 'active' },
            { id: '5', item_name: 'Wildcraft 60L Rucksack + Rain Cover', category: 'Expedition Rucksacks (50L-60L)', total_quantity: 20, rented_quantity: 6, rental_rate_per_day: 250, item_condition: 'Good Condition', status: 'active' }
          ];
        }
      },
      error: () => {
        this.gearList = [];
      }
    });
  }

  openAddGearModal() {
    this.gearForm = {
      id: '',
      itemName: '',
      category: this.gearCategoryOptions[0] || 'Trekking Poles & Sticks',
      totalQuantity: 20,
      rentedQuantity: 0,
      rentalRatePerDay: 150,
      itemCondition: 'Good Condition',
      location: 'Main Basecamp Gear Store',
      status: 'active'
    };
    this.showGearModal = true;
  }

  closeGearModal() {
    this.showGearModal = false;
  }

  saveGearItem() {
    if (!this.gearForm.itemName || !this.gearForm.category) {
      alert('Please fill out item name and category.');
      return;
    }

    this.isSavingGear = true;
    this.bookingService.upsertGearItem({
      id: this.gearForm.id || null,
      itemName: this.gearForm.itemName,
      category: this.gearForm.category,
      totalQuantity: this.gearForm.totalQuantity,
      rentedQuantity: this.gearForm.rentedQuantity,
      rentalRatePerDay: this.gearForm.rentalRatePerDay,
      itemCondition: this.gearForm.itemCondition,
      location: this.gearForm.location,
      status: this.gearForm.status
    }).subscribe({
      next: (res: any) => {
        this.isSavingGear = false;
        if (res?.success) {
          alert('Gear item saved successfully!');
          this.closeGearModal();
          this.loadGearInventory();
        }
      },
      error: () => {
        this.isSavingGear = false;
        alert('Failed to save gear item.');
      }
    });
  }

  // ── Batch P&L Calculator Methods ──
  selectBatchForPnl(batch: any) {
    this.selectedBatchPnl = batch;
    const ticketRevenue = Number(batch.bookedSeats || 18) * Number(batch.price || 2400);
    const gearRevenue = 1200; // estimated gear add-ons

    this.batchPnlData = {
      batchId: batch.id || 'BATCH-PRIMARY',
      trekName: batch.trekName || 'Kudremukha Trek',
      ticketRevenue,
      gearRevenue,
      expenses: [
        { id: '1', expense_category: 'Forest Dept Eco-Permits & Entry Fees', description: 'Mandatory Forest Entry Permits (18 pax x ₹200)', amount: 3600, payment_mode: 'UPI' },
        { id: '2', expense_category: 'Guide & Lead Honorarium', description: 'Certified Lead Guide + Sweeper Fee (2 Days)', amount: 5000, payment_mode: 'Bank Transfer' },
        { id: '3', expense_category: 'Homestay & Food / Camp Meals', description: 'Basecamp Homestay & 4 Meals per trekker', amount: 14400, payment_mode: 'UPI' },
        { id: '4', expense_category: 'Vehicle Fuel & Transport Costs', description: 'Tempo Traveller Bengaluru to Basecamp & Return', amount: 12000, payment_mode: 'UPI' },
        { id: '5', expense_category: 'First Aid & Safety Equipment', description: 'Medical Oxygen & First Aid replenishment', amount: 800, payment_mode: 'UPI' }
      ],
      totalExpenses: 35800,
      netProfit: (ticketRevenue + gearRevenue) - 35800,
      operatingMarginPct: Math.round((((ticketRevenue + gearRevenue) - 35800) / (ticketRevenue + gearRevenue)) * 100)
    };
  }

  addBatchExpense() {
    if (!this.newExpenseForm.amount || this.newExpenseForm.amount <= 0) {
      alert('Please enter a valid expense amount.');
      return;
    }

    this.isRecordingExpense = true;
    const exp = {
      id: Date.now().toString(),
      expense_category: this.newExpenseForm.expenseCategory || this.expenseCategoryOptions[0],
      description: this.newExpenseForm.description || this.newExpenseForm.expenseCategory,
      amount: Number(this.newExpenseForm.amount),
      paid_to: this.newExpenseForm.paidTo,
      payment_mode: this.newExpenseForm.paymentMode
    };

    this.batchPnlData.expenses.unshift(exp);
    this.batchPnlData.totalExpenses += exp.amount;
    const gross = this.batchPnlData.ticketRevenue + this.batchPnlData.gearRevenue;
    this.batchPnlData.netProfit = gross - this.batchPnlData.totalExpenses;
    this.batchPnlData.operatingMarginPct = Math.round((this.batchPnlData.netProfit / gross) * 100);

    this.newExpenseForm = {
      expenseCategory: this.expenseCategoryOptions[0] || 'Forest Dept Eco-Permits & Entry Fees',
      description: '',
      amount: 0,
      paidTo: '',
      paymentMode: 'UPI',
      receiptRef: ''
    };
    this.isRecordingExpense = false;
    alert('Expense added to Batch P&L ledger!');
  }

  // ── Forest Dept & Eco-Fund Royalty Ledger Methods ──
  loadForestRoyaltyLedger() {
    this.isLoadingRoyalty = true;
    this.bookingService.getForestRoyaltyLedger().subscribe({
      next: (res: any) => {
        this.isLoadingRoyalty = false;
        if (res?.success && res.data) {
          this.royaltyData = res.data;
        }
      },
      error: () => {
        this.isLoadingRoyalty = false;
      }
    });
  }

  // ── Collect Remainder at Basecamp Desk ──
  collectBasecampRemainder(booking: any) {
    if (!booking) return;
    const amount = Number(booking.balance_due || 0);
    if (amount <= 0) {
      alert('This booking is already fully paid.');
      return;
    }

    if (!confirm(`Collect remainder balance of ₹${amount} for Booking #${booking.booking_reference}?`)) {
      return;
    }

    this.bookingService.collectRemainderPayment({
      bookingId: booking.id,
      amount,
      paymentMethod: 'Basecamp Desk Cash / UPI Counter',
      transactionId: 'BC-SETTLE-' + Date.now(),
      notes: 'Settled at Forest Gate Checkpoint'
    }).subscribe({
      next: (res: any) => {
        if (res?.success) {
          booking.payment_status = 'paid';
          booking.balance_due = 0;
          booking.amount_paid = booking.total_amount;
          alert(`Remainder of ₹${amount} collected! Booking is now fully paid and verified.`);
        }
      },
      error: () => {
        alert('Failed to collect remainder payment.');
      }
    });
  }

  // ── Automated Journey WhatsApp / SMS Dispatcher ──
  setPreviewType(type: 'booking_pass' | 'weather_advisory' | 'summit_certificate') {
    this.activePreviewType = type;
    this.journeyForm.type = type;
  }

  dispatchJourneyMessage(customType?: 'booking_pass' | 'weather_advisory' | 'summit_certificate') {
    if (customType) {
      this.journeyForm.type = customType;
      this.activePreviewType = customType;
    }
    this.isDispatchingJourney = true;
    const type = this.journeyForm.type;
    const channel = this.journeyForm.channel;
    const target = this.journeyForm.bookingId || 'All Upcoming Active Batches';

    this.bookingService.dispatchJourneyNotification({
      bookingId: this.journeyForm.bookingId || 'ALL-ACTIVE-BATCHES',
      type: type,
      channel: channel
    }).subscribe({
      next: (res: any) => {
        this.isDispatchingJourney = false;
        if (res?.success) {
          const typeNames: Record<string, string> = {
            booking_pass: 'Digital Trek Pass & QR',
            weather_advisory: 'T-48h Weather Advisory',
            summit_certificate: 'Summit Certificate & Badge'
          };
          this.journeySuccessMsg = res.message || 'Notification dispatched successfully!';
          this.journeyLogs.unshift({
            id: res.data?.dispatchId || ('MSG-' + Date.now().toString().slice(-6)),
            type,
            typeName: typeNames[type] || type,
            channel,
            target,
            status: 'DELIVERED',
            timestamp: new Date()
          });
          setTimeout(() => this.journeySuccessMsg = '', 6000);
        }
      },
      error: (err) => {
        this.isDispatchingJourney = false;
        alert('Failed to dispatch journey notification: ' + (err?.error?.message || err.message));
      }
    });
  }
}

