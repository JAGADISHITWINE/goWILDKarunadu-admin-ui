import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Bookings } from './bookings';
import { AdminShellComponent } from '../shared/admin-shell/admin-shell.component';
import { DropdownManagerService } from '../dropdown-manager/dropdown-manager.service';
import { take } from 'rxjs';

interface Booking {
  id: string;
  customerName: string;
  email: string;
  phone: string;
  trekName: string;
  date: string;
  participants: number;
  amount: number;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed' | 'refunded';
  paymentStatus: 'pending' | 'paid' | 'refunded' | 'partially_refunded' | 'failed';
  bookingDate: string;
  createdAt?: string;
  // optional payment fields populated from admin API
  transactionId?: string | null;
  paymentMethod?: string | null;
  paymentAmount?: number | null;
}

type SortField = 'bookingDate' | 'amount' | 'customerName' | 'trekName' | 'status' | 'paymentStatus' | 'participants';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, AdminShellComponent]
})
export class BookingsComponent implements OnInit {
  searchQuery = '';
  selectedStatus = 'all';
  selectedPayment = 'all';
  bookings: any = [];
  startDate: string = '';
  endDate: string = '';
  activeDatePreset: 'today' | '7d' | '30d' | 'all' = 'all';
  pageSize = 10;
  currentPage = 1;
  sortField: SortField = 'bookingDate';
  sortDirection: 'asc' | 'desc' = 'desc';
  selectedBookingIds = new Set<string>();
  pageSizeOptions = [10, 20, 50];
  selectedBooking: Booking | null = null;
  isDrawerOpen = false;
  showPassModal = false;
  passBooking: Booking | null = null;
  copiedTxnId: string | null = null;

  // ── Manifest & Medical Roster State ──
  showManifestModal = false;
  manifestBooking: Booking | null = null;
  participantsList: any[] = [];
  isSavingParticipants = false;

  // ── Dynamic Dropdown State (Fetched from Backend DB) ──
  refundReasonOptions: string[] = [];
  refundMethodOptions: string[] = [];
  supportedPaymentMethods: string[] = [];
  govtIdTypeOptions: string[] = [];
  bloodGroupOptions: string[] = [];
  dietaryOptions: string[] = [];
  medicalConditionOptions: string[] = [];

  // ── Refund Management State ──
  showRefundModal = false;
  refundBooking: Booking | null = null;
  isProcessingRefund = false;
  refundPolicyMode: 'policy' | 'full' | 'custom' = 'policy';
  refundForm = {
    refundType: 'full' as 'full' | 'partial',
    amount: 0,
    deduction: 0,
    reason: 'Customer Cancellation (Personal Reasons)',
    refundMethod: 'Online Gateway Reversal (Razorpay)',
    refundTxnId: '',
    notifyCustomer: true,
    note: '',
  };

  // ── Payment Edit State ──
  showPaymentEditModal = false;
  paymentEditBooking: Booking | null = null;
  isUpdatingPayment = false;
  paymentEditForm = {
    paymentStatus: 'paid',
    paymentMethod: 'UPI (GPay / PhonePe / Paytm / BHIM)',
    transactionId: '',
    amount: 0
  };

  constructor(
    private bookingService: Bookings,
    private dropdownService: DropdownManagerService
  ) { }

  openPassModal(booking: Booking) {
    this.passBooking = booking;
    this.showPassModal = true;
  }

  closePassModal() {
    this.showPassModal = false;
    this.passBooking = null;
  }

  printPass() {
    window.print();
  }

  // ── Copy Txn ID with visual feedback ──
  copyTxnId(txnId: string, event?: Event) {
    if (event) event.stopPropagation();
    if (!txnId) return;
    navigator.clipboard.writeText(txnId).then(() => {
      this.copiedTxnId = txnId;
      setTimeout(() => {
        if (this.copiedTxnId === txnId) this.copiedTxnId = null;
      }, 2000);
    });
  }

  // ── Send Payment Link via WhatsApp ──
  sendPaymentLinkWhatsApp(booking: Booking, event?: Event) {
    if (event) event.stopPropagation();
    let rawPhone = String(booking?.phone || '').replace(/\D/g, '');
    if (!rawPhone || rawPhone.length < 7) {
      alert('No valid phone number for customer.');
      return;
    }
    if (rawPhone.length === 10) rawPhone = '91' + rawPhone;

    const text = encodeURIComponent(
      `Hi ${booking.customerName},\n\nGreetings from *goWILD™ Karunadu*!\n\n` +
      `Here are your booking & payment details for *${booking.trekName}*:\n` +
      `• Booking Reference: *#${booking.id}*\n` +
      `• Date: *${this.formatDate(booking.date)}*\n` +
      `• Participants: *${booking.participants}*\n` +
      `• Total Amount: *₹${booking.amount}*\n` +
      `• Payment Status: *${(booking.paymentStatus || 'Pending').toUpperCase()}*\n\n` +
      `Please complete your payment confirmation to secure your trek permit slots. Reply to this message for any assistance or custom payment arrangements.`
    );
    window.open(`https://wa.me/${rawPhone}?text=${text}`, '_blank');
  }

  // ── Professional Refund & Cancellation Policy Engine ──
  getDaysUntilTrek(booking: Booking): number {
    const dStr = booking?.date ? booking.date.split('-')[0].trim() : '';
    const trekDate = new Date(dStr || booking.bookingDate);
    if (isNaN(trekDate.getTime())) return 15;
    const diffTime = trekDate.getTime() - new Date().getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  getPolicyRefundPercentage(booking: Booking): number {
    const days = this.getDaysUntilTrek(booking);
    if (days >= 15) return 90; // 10% platform/forest booking fee
    if (days >= 7) return 50;  // 50% refund
    return 0; // 0% standard under 7 days
  }

  openRefundModal(booking: Booking) {
    this.refundBooking = booking;
    const total = Number(booking.amount || 0);
    const policyPct = this.getPolicyRefundPercentage(booking);
    const policyRefund = Math.round((total * policyPct) / 100);

    this.refundPolicyMode = 'policy';
    this.refundForm = {
      refundType: policyPct === 100 ? 'full' : 'partial',
      amount: policyRefund,
      deduction: total - policyRefund,
      reason: 'Customer Cancellation (Personal Reasons)',
      refundMethod: 'Online Gateway Reversal (Razorpay)',
      refundTxnId: 'REF-' + Date.now().toString().slice(-6),
      notifyCustomer: true,
      note: `Standard policy applied: ${policyPct}% refundable (${this.getDaysUntilTrek(booking)} days before departure).`
    };
    this.showRefundModal = true;
  }

  closeRefundModal() {
    this.showRefundModal = false;
    this.refundBooking = null;
    this.isProcessingRefund = false;
  }

  applyPolicyMode(mode: 'policy' | 'full' | 'custom') {
    if (!this.refundBooking) return;
    this.refundPolicyMode = mode;
    const total = Number(this.refundBooking.amount || 0);

    if (mode === 'full') {
      this.refundForm.refundType = 'full';
      this.refundForm.amount = total;
      this.refundForm.deduction = 0;
      this.refundForm.note = '100% Full refund authorized (Special waiver / Organiser cancellation).';
    } else if (mode === 'policy') {
      const policyPct = this.getPolicyRefundPercentage(this.refundBooking);
      const policyRefund = Math.round((total * policyPct) / 100);
      this.refundForm.refundType = policyPct === 100 ? 'full' : 'partial';
      this.refundForm.amount = policyRefund;
      this.refundForm.deduction = total - policyRefund;
      this.refundForm.note = `Standard policy applied: ${policyPct}% refundable (${this.getDaysUntilTrek(this.refundBooking)} days before departure).`;
    }
  }

  onCustomAmountChange() {
    if (!this.refundBooking) return;
    const total = Number(this.refundBooking.amount || 0);
    this.refundForm.amount = Math.min(total, Math.max(0, Number(this.refundForm.amount || 0)));
    this.refundForm.deduction = total - this.refundForm.amount;
    this.refundForm.refundType = this.refundForm.amount >= total ? 'full' : 'partial';
  }

  getPaymentMethodIcon(method?: string | null): string {
    const m = String(method || '').toLowerCase();
    if (m.includes('upi') || m.includes('gpay') || m.includes('phonepe') || m.includes('paytm')) return 'bi-qr-code';
    if (m.includes('card') || m.includes('visa') || m.includes('mastercard')) return 'bi-credit-card';
    if (m.includes('net') || m.includes('bank') || m.includes('neft') || m.includes('rtgs')) return 'bi-bank';
    if (m.includes('cash') || m.includes('offline') || m.includes('basecamp')) return 'bi-cash-stack';
    return 'bi-wallet2';
  }

  getFareBreakdown(totalAmount: number) {
    const total = Number(totalAmount || 0);
    const permitFee = 200;
    const taxableBase = Math.max(0, (total - permitFee) / 1.05);
    const gst5 = Math.round(taxableBase * 0.05);
    const baseFare = Math.round(taxableBase);
    return {
      baseFare,
      permitFee: total > permitFee ? permitFee : 0,
      gst5,
      total
    };
  }

  generateMockUtr() {
    const prefixes = ['UPI/529', 'HDFC/N', 'ICIC/R', 'pay_'];
    const randPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const randDigits = Math.floor(100000000 + Math.random() * 900000000);
    this.paymentEditForm.transactionId = `${randPrefix}${randDigits}`;
  }

  generateRefundRef() {
    this.refundForm.refundTxnId = `REF-GWK-${Date.now().toString().slice(-6)}-${Math.floor(100 + Math.random() * 900)}`;
  }

  onRefundTypeChange() {
    if (!this.refundBooking) return;
    if (this.refundForm.refundType === 'full') {
      this.refundForm.amount = Number(this.refundBooking.amount || 0);
    }
  }

  submitRefund() {
    if (!this.refundBooking || this.refundForm.amount <= 0) return;
    this.isProcessingRefund = true;

    this.bookingService.processRefund(this.refundBooking.id, {
      amount: this.refundForm.amount,
      reason: this.refundForm.reason,
      refundMethod: this.refundForm.refundMethod,
      refundTxnId: this.refundForm.refundTxnId,
      note: this.refundForm.note
    }).subscribe({
      next: (res: any) => {
        this.isProcessingRefund = false;
        if (res?.success) {
          const updated = res.data;
          // Update in memory
          if (this.refundBooking) {
            this.refundBooking.paymentStatus = updated.paymentStatus;
            this.refundBooking.status = updated.bookingStatus;
          }
          if (this.selectedBooking && this.selectedBooking.id === updated.bookingId) {
            this.selectedBooking.paymentStatus = updated.paymentStatus;
            this.selectedBooking.status = updated.bookingStatus;
          }
          this.closeRefundModal();
          alert(`Refund of ₹${updated.amount} processed successfully! Reference: ${updated.refundTxnId}`);
        }
      },
      error: (err: any) => {
        this.isProcessingRefund = false;
        alert(err?.error?.message || 'Failed to process refund. Please try again.');
      }
    });
  }

  // ── Payment Edit Handlers ──
  openPaymentEditModal(booking: Booking) {
    this.paymentEditBooking = booking;
    this.paymentEditForm = {
      paymentStatus: booking.paymentStatus || 'paid',
      paymentMethod: booking.paymentMethod || 'UPI (GPay / PhonePe / Paytm)',
      transactionId: booking.transactionId || 'TXN-' + Date.now().toString().slice(-6),
      amount: Number(booking.amount || 0)
    };
    this.showPaymentEditModal = true;
  }

  closePaymentEditModal() {
    this.showPaymentEditModal = false;
    this.paymentEditBooking = null;
    this.isUpdatingPayment = false;
  }

  submitPaymentUpdate() {
    if (!this.paymentEditBooking) return;
    this.isUpdatingPayment = true;

    this.bookingService.updateBookingPayment(this.paymentEditBooking.id, {
      paymentStatus: this.paymentEditForm.paymentStatus,
      paymentMethod: this.paymentEditForm.paymentMethod,
      transactionId: this.paymentEditForm.transactionId,
      amount: this.paymentEditForm.amount
    }).subscribe({
      next: (res: any) => {
        this.isUpdatingPayment = false;
        if (res?.success) {
          const updated = res.data;
          if (this.paymentEditBooking) {
            this.paymentEditBooking.paymentStatus = updated.paymentStatus;
            this.paymentEditBooking.paymentMethod = updated.paymentMethod;
            this.paymentEditBooking.transactionId = updated.transactionId;
          }
          if (this.selectedBooking && this.selectedBooking.id === updated.bookingId) {
            this.selectedBooking.paymentStatus = updated.paymentStatus;
            this.selectedBooking.paymentMethod = updated.paymentMethod;
            this.selectedBooking.transactionId = updated.transactionId;
          }
          this.closePaymentEditModal();
          alert('Payment details updated successfully!');
        }
      },
      error: (err: any) => {
        this.isUpdatingPayment = false;
        alert(err?.error?.message || 'Failed to update payment details.');
      }
    });
  }

  // ── Forest Dept Manifest & Medical Roster Handlers ──
  openManifestModal(booking: Booking) {
    this.manifestBooking = booking;
    this.showManifestModal = true;
    this.participantsList = [];

    this.bookingService.getBookingParticipants(booking.id).subscribe({
      next: (res: any) => {
        if (res?.success && Array.isArray(res.data) && res.data.length > 0) {
          this.participantsList = res.data;
        } else {
          // Initialize rows matching participants count
          const count = Math.max(1, Number(booking.participants || 1));
          this.participantsList = Array.from({ length: count }, (_, idx) => ({
            id: null,
            fullName: idx === 0 ? booking.customerName : `Trekker ${idx + 1}`,
            age: 24,
            gender: 'Male',
            govtIdType: this.govtIdTypeOptions[0] || 'Aadhaar Card',
            govtIdNumber: '',
            bloodGroup: this.bloodGroupOptions[0] || 'O+',
            medicalConditions: this.medicalConditionOptions[0] || 'None / Fit to Trek',
            emergencyContactName: booking.customerName,
            emergencyContactPhone: booking.phone || '',
            dietaryPreference: this.dietaryOptions[0] || 'Vegetarian',
            checkedIn: false
          }));
        }
      },
      error: () => {
        // Fallback default row
        this.participantsList = [{
          id: null,
          fullName: booking.customerName,
          age: 24,
          gender: 'Male',
          govtIdType: 'Aadhaar Card',
          govtIdNumber: '',
          bloodGroup: 'O+',
          medicalConditions: 'None / Fit to Trek',
          emergencyContactName: booking.customerName,
          emergencyContactPhone: booking.phone || '',
          dietaryPreference: 'Vegetarian',
          checkedIn: false
        }];
      }
    });
  }

  closeManifestModal() {
    this.showManifestModal = false;
    this.manifestBooking = null;
    this.participantsList = [];
    this.isSavingParticipants = false;
  }

  addParticipantRow() {
    if (!this.manifestBooking) return;
    this.participantsList.push({
      id: null,
      fullName: `Trekker ${this.participantsList.length + 1}`,
      age: 22,
      gender: 'Male',
      govtIdType: this.govtIdTypeOptions[0] || 'Aadhaar Card',
      govtIdNumber: '',
      bloodGroup: this.bloodGroupOptions[0] || 'O+',
      medicalConditions: this.medicalConditionOptions[0] || 'None / Fit to Trek',
      emergencyContactName: this.manifestBooking.customerName,
      emergencyContactPhone: this.manifestBooking.phone || '',
      dietaryPreference: this.dietaryOptions[0] || 'Vegetarian',
      checkedIn: false
    });
  }

  removeParticipantRow(index: number) {
    if (this.participantsList.length <= 1) {
      alert('Manifest must contain at least 1 lead participant.');
      return;
    }
    this.participantsList.splice(index, 1);
  }

  saveManifest() {
    if (!this.manifestBooking) return;
    this.isSavingParticipants = true;

    this.bookingService.saveBookingParticipants(this.manifestBooking.id, this.participantsList).subscribe({
      next: (res: any) => {
        this.isSavingParticipants = false;
        if (res?.success) {
          alert('Forest Department Entry Manifest & Medical Roster saved successfully!');
          this.closeManifestModal();
        }
      },
      error: (err: any) => {
        this.isSavingParticipants = false;
        alert(err?.error?.message || 'Failed to save participant manifest.');
      }
    });
  }

  printManifest() {
    window.print();
  }

  ngOnInit() {
    this.loadDropdownOptions();
    this.bookingService.getBookingData().subscribe((res: any) => {
      if (res.success == true) {
        this.bookings = Array.isArray(res.data) ? res.data : [];
        this.currentPage = 1;
        this.selectedBookingIds.clear();
      }
    });
  }

  statusOptions = [
    { value: 'all', label: 'All' }
  ];

  private loadDropdownOptions() {
    this.dropdownService.getGroupOptions('bookingStatus').pipe(take(1)).subscribe((opts) => {
      if (opts.length > 0) {
        this.statusOptions = [
          { value: 'all', label: 'All' },
          ...opts.map((opt) => ({ value: opt.value, label: opt.label }))
        ];
      }
    });

    this.dropdownService.getGroupOptions('refundReason').pipe(take(1)).subscribe((opts) => {
      if (opts.length > 0) this.refundReasonOptions = opts.map(o => o.label);
    });

    this.dropdownService.getGroupOptions('refundChannel').pipe(take(1)).subscribe((opts) => {
      if (opts.length > 0) this.refundMethodOptions = opts.map(o => o.label);
    });

    this.dropdownService.getGroupOptions('paymentMethod').pipe(take(1)).subscribe((opts) => {
      if (opts.length > 0) this.supportedPaymentMethods = opts.map(o => o.label);
    });

    this.dropdownService.getGroupOptions('govtIdType').pipe(take(1)).subscribe((opts) => {
      if (opts.length > 0) this.govtIdTypeOptions = opts.map(o => o.label);
    });

    this.dropdownService.getGroupOptions('bloodGroup').pipe(take(1)).subscribe((opts) => {
      if (opts.length > 0) this.bloodGroupOptions = opts.map(o => o.label);
    });

    this.dropdownService.getGroupOptions('dietaryPreference').pipe(take(1)).subscribe((opts) => {
      if (opts.length > 0) this.dietaryOptions = opts.map(o => o.label);
    });

    this.dropdownService.getGroupOptions('trekMedicalConditions').pipe(take(1)).subscribe((opts) => {
      if (opts.length > 0) this.medicalConditionOptions = opts.map(o => o.label);
    });
  }
  setDatePreset(preset: 'today' | '7d' | '30d' | 'all') {
    this.activeDatePreset = preset;
    const now = new Date();
    const fmt = (d: Date) => d.toISOString().split('T')[0];

    if (preset === 'today') {
      this.startDate = fmt(now);
      this.endDate = fmt(now);
    } else if (preset === '7d') {
      const past = new Date();
      past.setDate(now.getDate() - 7);
      this.startDate = fmt(past);
      this.endDate = fmt(now);
    } else if (preset === '30d') {
      const past = new Date();
      past.setDate(now.getDate() - 30);
      this.startDate = fmt(past);
      this.endDate = fmt(now);
    } else {
      this.startDate = '';
      this.endDate = '';
    }
  }



  get filteredBookings(): Booking[] {
    let list = [...this.bookings];

    // Status filter
    if (this.selectedStatus !== 'all') {
      list = list.filter(b => b.status === this.selectedStatus);
    }

    // Payment filter
    if (this.selectedPayment !== 'all') {
      list = list.filter(b => b.paymentStatus === this.selectedPayment);
    }

    // Search filter
    if (this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase();
      list = list.filter(b =>
        b.customerName.toLowerCase().includes(q) ||
        b.email.toLowerCase().includes(q) ||
        b.phone.includes(q) ||
        b.trekName.toLowerCase().includes(q)
      );
    }

    // Date range filter
    if (this.startDate || this.endDate) {
      const start = this.startDate ? new Date(this.startDate) : null;
      const end = this.endDate ? new Date(this.endDate) : null;
      list = list.filter(b => {
        const booking = this.getSortDate(b);
        if (!booking) return false;
        if (start && booking < start) return false;
        if (end) {
          const endOfDay = new Date(end);
          endOfDay.setHours(23, 59, 59, 999);
          if (booking > endOfDay) return false;
        }
        return true;
      });
    }

    list.sort((a, b) => this.compareBookings(a, b));

    return list;
  }

  get pagedBookings(): Booking[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredBookings.slice(start, start + this.pageSize);
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.filteredBookings.length / this.pageSize));
  }

  get selectedCount(): number {
    return this.selectedBookingIds.size;
  }

  get isAllVisibleSelected(): boolean {
    const visibleIds = this.pagedBookings.map((booking) => booking.id);
    return visibleIds.length > 0 && visibleIds.every((id) => this.selectedBookingIds.has(id));
  }

  get statusBreakdown() {
    const tally = { confirmed: 0, pending: 0, cancelled: 0 };
    this.filteredBookings.forEach((booking) => {
      if (booking.status in tally) {
        tally[booking.status as keyof typeof tally] += 1;
      }
    });
    return tally;
  }

  get paymentBreakdown() {
    const tally = { paid: 0, pending: 0 };
    this.filteredBookings.forEach((booking) => {
      if (booking.paymentStatus in tally) {
        tally[booking.paymentStatus as keyof typeof tally] += 1;
      }
    });
    return tally;
  }

  get pageLabel(): string {
    if (this.filteredBookings.length === 0) return '0 of 0';
    const start = (this.currentPage - 1) * this.pageSize + 1;
    const end = Math.min(this.currentPage * this.pageSize, this.filteredBookings.length);
    return `${start}-${end} of ${this.filteredBookings.length}`;
  }

  get pageNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, index) => index + 1);
  }

  setSort(field: SortField) {
    if (this.sortField === field) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = field;
      this.sortDirection = 'desc';
    }
    this.currentPage = 1;
  }

  sortIcon(field: SortField): string {
    if (this.sortField !== field) return 'bi-arrow-down-up';
    return this.sortDirection === 'asc' ? 'bi-sort-up' : 'bi-sort-down';
  }

  changePage(page: number) {
    this.currentPage = Math.min(Math.max(page, 1), this.totalPages);
  }

  prevPage() {
    this.changePage(this.currentPage - 1);
  }

  nextPage() {
    this.changePage(this.currentPage + 1);
  }

  onPageSizeChange() {
    this.currentPage = 1;
  }

  resetFilters() {
    this.searchQuery = '';
    this.selectedStatus = 'all';
    this.selectedPayment = 'all';
    this.startDate = '';
    this.endDate = '';
    this.sortField = 'bookingDate';
    this.sortDirection = 'desc';
    this.currentPage = 1;
    this.selectedBookingIds.clear();
  }

  toggleVisibleSelection() {
    if (this.isAllVisibleSelected) {
      this.pagedBookings.forEach((booking) => this.selectedBookingIds.delete(booking.id));
      return;
    }
    this.pagedBookings.forEach((booking) => this.selectedBookingIds.add(booking.id));
  }

  toggleBookingSelection(bookingId: string) {
    if (this.selectedBookingIds.has(bookingId)) {
      this.selectedBookingIds.delete(bookingId);
    } else {
      this.selectedBookingIds.add(bookingId);
    }
  }

  openDrawer(booking: Booking) {
    this.selectedBooking = booking;
    this.isDrawerOpen = true;
  }

  closeDrawer() {
    this.selectedBooking = null;
    this.isDrawerOpen = false;
  }

  updateSelectedStatus(status: 'pending' | 'confirmed' | 'cancelled') {
    if (this.selectedBookingIds.size === 0) return;
    this.bookings = this.bookings.map((booking: Booking) => {
      if (this.selectedBookingIds.has(booking.id)) {
        return { ...booking, status };
      }
      return booking;
    });
  }

  exportSelected() {
    const rows = this.filteredBookings.filter((booking) => this.selectedBookingIds.has(booking.id));
    this.exportRows(rows.length > 0 ? rows : this.filteredBookings, rows.length > 0 ? 'selected' : 'filtered');
  }

  exportVisible() {
    this.exportRows(this.pagedBookings, 'visible');
  }

  copySelectedIds() {
    const ids = Array.from(this.selectedBookingIds);
    if (ids.length === 0 || !navigator?.clipboard) return;
    navigator.clipboard.writeText(ids.join('\n')).catch(() => {});
  }

  private exportRows(rows: Booking[], label: string) {
    if (!rows.length) return;
    const csvRows = [
      ['Booking ID', 'Customer', 'Email', 'Phone', 'Trek', 'Date', 'Participants', 'Amount', 'Status', 'Payment Status', 'Booked On'],
      ...rows.map((row) => [
        row.id,
        row.customerName,
        row.email,
        row.phone,
        row.trekName,
        this.formatDate(row.date),
        row.participants,
        row.amount,
        row.status,
        row.paymentStatus,
        this.formatDate(row.bookingDate),
      ]),
    ];

    const csv = csvRows
      .map((row) => row.map((value) => `"${String(value ?? '').replace(/"/g, '""')}"`).join(','))
      .join('\n');

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `bookings-${label}-${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  }

  formatDate(dateStr?: string | null): string {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return Number.isNaN(date.getTime()) ? dateStr : date.toISOString().split('T')[0];
  }

  private getSortDate(booking: Booking): Date | null {
    const value = booking.createdAt || booking.bookingDate;
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? null : date;
  }

  private compareBookings(a: Booking, b: Booking): number {
    const direction = this.sortDirection === 'asc' ? 1 : -1;
    const fields: Record<SortField, (booking: Booking) => string | number | Date | null> = {
      bookingDate: (booking) => this.getSortDate(booking),
      amount: (booking) => Number(booking.amount || 0),
      customerName: (booking) => (booking.customerName || '').toLowerCase(),
      trekName: (booking) => (booking.trekName || '').toLowerCase(),
      status: (booking) => (booking.status || '').toLowerCase(),
      paymentStatus: (booking) => (booking.paymentStatus || '').toLowerCase(),
      participants: (booking) => Number(booking.participants || 0),
    };

    const left = fields[this.sortField](a);
    const right = fields[this.sortField](b);

    if (left instanceof Date && right instanceof Date) {
      return (left.getTime() - right.getTime()) * direction;
    }

    if (typeof left === 'number' && typeof right === 'number') {
      return (left - right) * direction;
    }

    const leftText = String(left ?? '');
    const rightText = String(right ?? '');
    return leftText.localeCompare(rightText) * direction;
  }

  // Status and payment badge colors
  getStatusColor(status: string) {
    if (status === 'confirmed' || status === 'completed') return 'success';
    if (status === 'pending') return 'warning';
    if (status === 'refunded') return 'danger';
    return 'danger';
  }

  getPaymentColor(status: string) {
    if (status === 'paid') return 'success';
    if (status === 'refunded') return 'danger';
    if (status === 'partially_refunded') return 'warning';
    return 'warning';
  }
}
