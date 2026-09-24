import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { TrekBatchManagement } from './trek-batch-management';
import { catchError, finalize, forkJoin, map, of } from 'rxjs';
import { AdminShellComponent } from '../shared/admin-shell/admin-shell.component';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-trek-batch-management',
  templateUrl: './trek-batch-management.component.html',
  styleUrls: ['./trek-batch-management.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule, AdminShellComponent]
})
export class TrekBatchManagementComponent implements OnInit, OnDestroy {

  private autoCompleting = false;

  treks: any[] = [];
  selectedTrek: any = null;
  batches: any[] = [];
  selectedBatch: any = null;
  bookings: any[] = [];

  isLoadingTreks = false;
  isLoadingBatches = false;
  isLoadingBookings = false;
  isLoadingCalendar = false;

  showBatchesModal = false;
  showBookingsModal = false;
  completionStats: any = null;
  batchActionLoadingId: string | null = null;
  isSweeping = false;
  autoCompleteStatus: any = null;

  /** Search query inside the batches modal */
  batchSearchQuery = '';

  /** ── Calendar Mode State ── */
  viewMode: 'treks' | 'calendar' = 'treks';
  calendarCurrentDate = new Date();
  calendarSelectedTrekId = 'all';
  allCalendarBatches: any[] = [];
  calendarDays: Array<{
    date: Date;
    dateKey: string;
    dayNumber: number;
    isCurrentMonth: boolean;
    isToday: boolean;
    batches: any[];
  }> = [];

  readonly weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  constructor(
    private trekMgmtService: TrekBatchManagement,
    public authService: AuthService,
    private router: Router,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.loadTreks();
    this.loadCompletionStats();
    this.loadAutoCompleteStatus();
  }

  setViewMode(mode: 'treks' | 'calendar') {
    this.viewMode = mode;
    if (mode === 'calendar' && this.allCalendarBatches.length === 0) {
      this.loadAllBatchesForCalendar();
    } else if (mode === 'calendar') {
      this.generateCalendarGrid();
    }
  }

  loadAllBatchesForCalendar() {
    if (this.treks.length === 0) return;
    this.isLoadingCalendar = true;
    const reqs = this.treks.map(t =>
      this.trekMgmtService.getBatches(String(t.id)).pipe(
        map((res: any) => {
          if (res?.success && Array.isArray(res.data)) {
            return res.data.map((b: any) => ({
              ...b,
              trek_name: t.name,
              trek_location: t.location,
              trek_difficulty: t.difficulty,
              trek_image_url: t.image_url
            }));
          }
          return [];
        }),
        catchError(() => of([]))
      )
    );

    forkJoin(reqs).pipe(
      finalize(() => {
        this.isLoadingCalendar = false;
        this.generateCalendarGrid();
      })
    ).subscribe({
      next: (results: any) => {
        const arr = Array.isArray(results) ? results : [];
        this.allCalendarBatches = arr.reduce((acc: any[], curr: any) => acc.concat(Array.isArray(curr) ? curr : []), []);
        this.generateCalendarGrid();
      }
    });
  }

  generateCalendarGrid() {
    const year = this.calendarCurrentDate.getFullYear();
    const month = this.calendarCurrentDate.getMonth();

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);

    const startingDayOfWeek = firstDayOfMonth.getDay(); // 0 = Sun, 6 = Sat
    const daysInMonth = lastDayOfMonth.getDate();

    const days: typeof this.calendarDays = [];
    const todayStr = new Date().toDateString();

    // Previous month padding days
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      const d = new Date(year, month - 1, prevMonthLastDay - i);
      const dateKey = this.formatDateKey(d);
      days.push({
        date: d,
        dateKey,
        dayNumber: d.getDate(),
        isCurrentMonth: false,
        isToday: d.toDateString() === todayStr,
        batches: this.getBatchesForDate(d)
      });
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      const d = new Date(year, month, i);
      const dateKey = this.formatDateKey(d);
      days.push({
        date: d,
        dateKey,
        dayNumber: i,
        isCurrentMonth: true,
        isToday: d.toDateString() === todayStr,
        batches: this.getBatchesForDate(d)
      });
    }

    // Next month padding days to complete 35 or 42 grid cells
    const remaining = 7 - (days.length % 7);
    if (remaining < 7) {
      for (let i = 1; i <= remaining; i++) {
        const d = new Date(year, month + 1, i);
        const dateKey = this.formatDateKey(d);
        days.push({
          date: d,
          dateKey,
          dayNumber: i,
          isCurrentMonth: false,
          isToday: d.toDateString() === todayStr,
          batches: this.getBatchesForDate(d)
        });
      }
    }

    this.calendarDays = days;
  }

  private formatDateKey(d: Date): string {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  }

  private getBatchesForDate(d: Date): any[] {
    const targetTime = new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
    return this.allCalendarBatches.filter(b => {
      if (this.calendarSelectedTrekId !== 'all' && String(b.trek_id) !== String(this.calendarSelectedTrekId)) {
        return false;
      }
      const s = new Date(b.start_date);
      const startTime = new Date(s.getFullYear(), s.getMonth(), s.getDate()).getTime();
      const e = new Date(b.end_date || b.start_date);
      const endTime = new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime();
      return targetTime >= startTime && targetTime <= endTime;
    });
  }

  prevMonth() {
    this.calendarCurrentDate = new Date(this.calendarCurrentDate.getFullYear(), this.calendarCurrentDate.getMonth() - 1, 1);
    this.generateCalendarGrid();
  }

  nextMonth() {
    this.calendarCurrentDate = new Date(this.calendarCurrentDate.getFullYear(), this.calendarCurrentDate.getMonth() + 1, 1);
    this.generateCalendarGrid();
  }

  goToToday() {
    this.calendarCurrentDate = new Date();
    this.generateCalendarGrid();
  }

  onCalendarTrekFilterChange() {
    this.generateCalendarGrid();
  }

  get calendarMonthLabel(): string {
    return this.calendarCurrentDate.toLocaleString('default', { month: 'long', year: 'numeric' });
  }

  get calendarMonthBatchesCount(): number {
    const year = this.calendarCurrentDate.getFullYear();
    const month = this.calendarCurrentDate.getMonth();
    return this.allCalendarBatches.filter(b => {
      if (this.calendarSelectedTrekId !== 'all' && String(b.trek_id) !== String(this.calendarSelectedTrekId)) {
        return false;
      }
      const s = new Date(b.start_date);
      return s.getFullYear() === year && s.getMonth() === month;
    }).length;
  }

  get calendarMonthCapacity(): { totalSlots: number, bookedSlots: number, occupancyRate: number } {
    const year = this.calendarCurrentDate.getFullYear();
    const month = this.calendarCurrentDate.getMonth();
    const monthBatches = this.allCalendarBatches.filter(b => {
      if (this.calendarSelectedTrekId !== 'all' && String(b.trek_id) !== String(this.calendarSelectedTrekId)) {
        return false;
      }
      const s = new Date(b.start_date);
      return s.getFullYear() === year && s.getMonth() === month;
    });

    const totalSlots = monthBatches.reduce((sum, b) => sum + Number(b.available_slots || 0), 0);
    const bookedSlots = monthBatches.reduce((sum, b) => sum + Number(b.booked_slots || b.total_participants || 0), 0);
    const occupancyRate = totalSlots > 0 ? Math.round((bookedSlots / totalSlots) * 100) : 0;
    return { totalSlots, bookedSlots, occupancyRate };
  }

  openCalendarBatchDetails(batch: any) {
    const trek = this.treks.find(t => String(t.id) === String(batch.trek_id));
    if (trek) {
      this.selectedTrek = trek;
    } else {
      this.selectedTrek = { name: batch.trek_name || 'Trek Details' };
    }
    this.viewBookings(batch);
  }

  /**
   * Load all treks
   */
  loadTreks() {
    this.isLoadingTreks = true;

    this.trekMgmtService.getTreks().subscribe({
      next: (response) => {
        if (response.success == true) {
          const rows = Array.isArray(response.data) ? response.data : [];
          this.treks = rows.filter((trek: any) => this.shouldShowTrek(trek));
        }
        this.isLoadingTreks = false;
      },
      error: (error) => {
        this.isLoadingTreks = false;
        this.notificationService.show('Failed to load treks', 3500);
      }
    });
  }

  /**
   * View batches for a trek
   */
  viewBatches(trek: any) {
    this.selectedTrek = trek;
    this.isLoadingBatches = true;
    this.showBatchesModal = true;

    this.trekMgmtService.getBatches(String(trek.id || '')).subscribe({
      next: (response) => {
        if (response.success == true) {
          const rows = Array.isArray(response.data) ? response.data : [];
          this.batches = rows.filter((batch: any) => {
            const status = String(batch?.status || '').toLowerCase();
            return status === 'active' || status === 'inactive' || status === 'completed' || status === 'full';
          });
          this.autoCompleteEndedBatches();
        }
        this.isLoadingBatches = false;
      },
      error: (error) => {
        console.error('Load batches error:', error);
        this.isLoadingBatches = false;
        this.notificationService.show('Failed to load batches', 3500);
      }
    });
  }

  /**
   * View bookings for a batch
   */
  viewBookings(batch: any) {
    this.selectedBatch = batch;
    this.isLoadingBookings = true;
    this.showBookingsModal = true;

    this.trekMgmtService.getBatchBookings(String(batch.id || '')).subscribe({
      next: (response) => {
        console.log('Raw bookings response:', response);
        const rows = this.extractBookingRows(response);
        this.bookings = rows.map((booking: any) => this.normalizeBookingRow(booking));
        this.isLoadingBookings = false;
      },
      error: (error) => {
        console.error('Load bookings error:', error);
        this.isLoadingBookings = false;
        this.notificationService.show('Failed to load bookings', 3500);
      }
    });
  }

  /**
   * Toggle booking row expansion to show/hide participant details
   */
  toggleBookingExpand(booking: any) {
    booking.expanded = !booking.expanded;
  }

  /**
   * Stop booking for a batch
   */
  stopBooking(batch: any) {
    if (this.batchActionLoadingId === String(batch?.id || '')) return;

    if (!confirm('Are you sure you want to stop bookings for this batch?\n\nTrek: ' + this.selectedTrek.name + '\nDate: ' + new Date(batch.start_date).toLocaleDateString())) {
      return;
    }

    this.batchActionLoadingId = String(batch.id || '');

    this.trekMgmtService.stopBooking(String(batch.id || '')).pipe(
      finalize(() => {
        this.batchActionLoadingId = null;
      })
    ).subscribe({
      next: (response) => {
        if (response?.success === true) {
          this.notificationService.show('Booking stopped successfully!');
          const nextStatus = String(response?.batch?.status || 'inactive').toLowerCase();
          batch.status = nextStatus;
          this.batches = [...this.batches];
          this.loadTreks();
          return;
        }
        this.notificationService.show(response?.message || 'Failed to stop booking', 3500);
      },
      error: (error) => {
        console.error('Stop booking error:', error);
        this.notificationService.show(error?.error?.message || 'Failed to stop booking', 3500);
      }
    });
  }

  /**
   * Resume booking for a batch
   */
  resumeBooking(batch: any) {
    if (this.batchActionLoadingId === String(batch?.id || '')) return;

    if (!confirm('Resume bookings for this batch?\n\nTrek: ' + this.selectedTrek.name + '\nDate: ' + new Date(batch.start_date).toLocaleDateString())) {
      return;
    }

    this.batchActionLoadingId = String(batch.id || '');

    this.trekMgmtService.resumeBooking(String(batch.id || '')).pipe(
      finalize(() => {
        this.batchActionLoadingId = null;
      })
    ).subscribe({
      next: (response) => {
        if (response?.success === true) {
          this.notificationService.show('Booking resumed successfully!');
          const nextStatus = String(response?.batch?.status || 'active').toLowerCase();
          batch.status = nextStatus;
          this.batches = [...this.batches];
          this.loadTreks();
          return;
        }
        this.notificationService.show(response?.message || 'Failed to resume booking', 3500);
      },
      error: (error) => {
        console.error('Resume booking error:', error);
        this.notificationService.show(error?.error?.message || 'Failed to resume booking', 3500);
      }
    });
  }

  isBatchActionLoading(batch: any): boolean {
    return this.batchActionLoadingId === String(batch?.id || '');
  }

  /** Batches filtered by search query (date or status text) */
  get filteredBatches(): any[] {
    const q = this.batchSearchQuery.trim().toLowerCase();
    if (!q) return this.batches;
    return this.batches.filter(b => {
      const start = String(b.start_date || '').toLowerCase();
      const end   = String(b.end_date   || '').toLowerCase();
      const status = String(b.status    || '').toLowerCase();
      return start.includes(q) || end.includes(q) || status.includes(q);
    });
  }

  /**
   * Returns the percentage of slots filled (0–100), capped at 100.
   * Color thresholds are applied via CSS classes based on the return value.
   */
  getSlotFillPercent(batch: any): number {
    const booked = Number(batch.booked_slots || batch.total_participants || 0);
    const total  = Number(batch.available_slots || 0);
    if (total <= 0) return 0;
    return Math.min(100, Math.round((booked / total) * 100));
  }

  getSlotFillClass(batch: any): string {
    const pct = this.getSlotFillPercent(batch);
    if (pct >= 90) return 'fill-danger';
    if (pct >= 70) return 'fill-warning';
    return 'fill-success';
  }

  /**
   * Download bookings for a batch
   */
  downloadBatchBookings(batch: any) {
    this.trekMgmtService.downloadBatchBookings(String(batch.id || '')).subscribe({
      next: (blob) => {
        const fileName = `${this.selectedTrek.name}_${new Date(batch.start_date).toISOString().split('T')[0]}_Bookings.xlsx`;
        this.trekMgmtService.triggerDownload(blob, fileName);
        this.notificationService.show('Download started!');
      },
      error: (error) => {
        console.error('Download error:', error);
        this.notificationService.show('Failed to download bookings', 3500);
      }
    });
  }

  /**
   * Download all bookings for a trek
   */
  downloadAllTrekBookings(trek: any) {
    this.trekMgmtService.downloadAllTrekBookings(String(trek.id || '')).subscribe({
      next: (blob:any) => {
        const fileName = `${trek.name}_All_Bookings.xlsx`;
        this.trekMgmtService.triggerDownload(blob, fileName);
        this.notificationService.show('Download started!');
      },
      error: (error:any) => {
        console.error('Download error:', error);
        this.notificationService.show('Failed to download all bookings', 3500);
      }
    });
  }

  goToAddTrek(): void {
    this.router.navigate(['/admin/treks/add']);
  }

  /**
   * Close batches modal
   */
  closeBatchesModal() {
    this.showBatchesModal = false;
    this.selectedTrek = null;
    this.batches = [];
  }

  /**
   * Close bookings modal
   */
  closeBookingsModal() {
    this.showBookingsModal = false;
    this.selectedBatch = null;
    this.bookings = [];
  }

  /**
   * Get batch status badge class
   */
  getBatchStatusClass(status: string): string {
    switch (status) {
      case 'active':
        return 'badge-success';
      case 'inactive':
        return 'badge-danger';
      case 'full':
        return 'badge-warning';
      case 'completed':
        return 'badge-secondary';
      default:
        return 'badge-secondary';
    }
  }

  /**
   * Get booking status badge class
   */
  getBookingStatusClass(status: string): string {
    switch (status) {
      case 'confirmed':
        return 'badge-success';
      case 'pending':
        return 'badge-warning';
      case 'cancelled':
        return 'badge-danger';
      case 'completed':
        return 'badge-info';
      default:
        return 'badge-secondary';
    }
  }

  /**
   * Get payment status badge class
   */
  getPaymentStatusClass(status: string): string {
    switch (status) {
      case 'paid':
        return 'badge-success';
      case 'pending':
        return 'badge-warning';
      case 'partial':
        return 'badge-info';
      case 'refunded':
        return 'badge-secondary';
      default:
        return 'badge-secondary';
    }
  }

  ngOnDestroy() {
  }

  loadCompletionStats() {
    this.trekMgmtService.getCompletionStats().subscribe((response: any) => {
      if (response.success) {
        this.completionStats = response.data;
      }
    });
  }

  loadAutoCompleteStatus() {
    this.trekMgmtService.getAutoCompleteStatus().subscribe({
      next: (res: any) => {
        if (res?.success) {
          this.autoCompleteStatus = res.data;
        }
      },
      error: (err) => {
        console.error('Failed to load auto-complete status:', err);
      }
    });
  }

  triggerAutoCompletionSweep() {
    if (this.isSweeping) return;
    this.isSweeping = true;
    this.notificationService.show('Running automated trek completion sweep...');

    this.trekMgmtService.runAutoCompleteSweep().pipe(
      finalize(() => {
        this.isSweeping = false;
      })
    ).subscribe({
      next: (res: any) => {
        if (res?.success) {
          const bCount = res.batches_completed || 0;
          const bkCount = res.bookings_completed || 0;
          this.notificationService.show(
            `Auto-completion finished! ${bCount} batch(es) and ${bkCount} booking(s) marked completed.`
          );
          this.loadTreks();
          this.loadCompletionStats();
          this.loadAutoCompleteStatus();
          if (this.viewMode === 'calendar') {
            this.loadAllBatchesForCalendar();
          }
          if (this.selectedTrek && this.showBatchesModal) {
            this.viewBatches(this.selectedTrek);
          }
        } else {
          this.notificationService.show(res?.message || 'Sweep failed', 3500);
        }
      },
      error: (err) => {
        console.error('Auto-completion sweep error:', err);
        this.notificationService.show('Sweep error: ' + (err?.error?.message || err.message), 3500);
      }
    });
  }

  /**
   * Check if batch has ended
   */
  isBatchEnded(batch: any): boolean {
    if (!batch || !batch.end_date) {
      return false;
    }
    
    const endDate = new Date(batch.end_date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    endDate.setHours(0, 0, 0, 0);
    
    return endDate < today;
  }

  /**
   * Mark batch as completed
   */
  markBatchCompleted(batch: any) {
    if (!confirm(
      `Mark this batch as COMPLETED?\n\n` +
      `Trek: ${this.selectedTrek.name}\n` +
      `Date: ${new Date(batch.start_date).toLocaleDateString()} - ${new Date(batch.end_date).toLocaleDateString()}\n` +
      `Total Bookings: ${batch.total_bookings}\n\n` +
      `This will:\n` +
      `- Mark the batch as completed\n` +
      `- Update all confirmed bookings to completed status\n\n` +
      `Continue?`
    )) {
      return;
    }

    this.trekMgmtService.markBatchCompleted(batch.id).subscribe({
      next: (response: any) => {
        if (response.success) {
          this.notificationService.show(
            `Batch marked as completed! Updated bookings: ${response.updated_bookings || 0}`
          );

          batch.status = 'completed';
          this.viewBatches(this.selectedTrek);
          this.loadCompletionStats();
        }
      },
      error: (error) => {
        console.error('Mark completed error:', error);
        this.notificationService.show('Failed to mark batch as completed', 3500);
      }
    });
  }

  private autoCompleteEndedBatches(): void {
    if (this.autoCompleting || !Array.isArray(this.batches) || this.batches.length === 0) {
      return;
    }

    const endedBatches = this.batches.filter(
      (batch) => this.isBatchEnded(batch) && this.isAutoCompletableStatus(batch.status)
    );

    if (endedBatches.length === 0) {
      return;
    }

    this.autoCompleting = true;
    const requests = endedBatches.map((batch) =>
      this.trekMgmtService.markBatchCompleted(batch.id).pipe(catchError(() => of(null)))
    );

    forkJoin(requests).subscribe({
      next: (responses: any[]) => {
        let hasChanges = false;
        responses.forEach((res, idx) => {
          if (res?.success) {
            endedBatches[idx].status = 'completed';
            hasChanges = true;
          }
        });
        if (hasChanges) {
          this.loadCompletionStats();
        }
      },
      complete: () => {
        this.autoCompleting = false;
      }
    });
  }

  private isAutoCompletableStatus(status: string): boolean {
    const current = String(status || '').toLowerCase();
    return current === 'active' || current === 'inactive' || current === 'full';
  }

  private shouldShowTrek(trek: any): boolean {
    const totalBatches = Number(trek?.total_batches || 0);
    return totalBatches > 0;
  }

  private extractBookingRows(response: any): any[] {
    const data = response?.data;
    if (Array.isArray(data)) return data;
    if (Array.isArray(data?.bookings)) return data.bookings;
    if (Array.isArray(response?.results)) return response.results;
    if (Array.isArray(response?.bookings)) return response.bookings;
    return [];
  }

  private normalizeBookingRow(booking: any): any {
    const totalParticipants = Number(
      booking?.total_participants ??
      booking?.participants_count ??
      booking?.participants ??
      0
    );
    const participants = this.normalizeParticipants(booking);

    return {
      ...booking,
      booking_id: booking?.booking_id || booking?.booking_reference || booking?.bookingReference || `BK-${booking?.id ?? '-'}`,
      name: booking?.name || booking?.customer_name || booking?.customerName || '-',
      email: booking?.email || booking?.customer_email || booking?.customerEmail || '-',
      phone: booking?.phone || booking?.customer_phone || booking?.customerPhone || '-',
      total_participants: totalParticipants,
      total_amount: Number(booking?.total_amount ?? booking?.amount ?? booking?.subtotal ?? 0),
      payment_status: booking?.payment_status || booking?.paymentStatus || 'pending',
      participants,
      expanded: false,
    };
  }

  private normalizeParticipants(booking: any): any[] {
    const sources = [
      booking?.participants,
      booking?.participant_details,
      booking?.participant_data,
      booking?.participants_data,
      booking?.booking_participants,
      booking?.participants_json,
      booking?.participant_list,
    ];

    const parsedRows: any[] = [];
    sources.forEach((source) => {
      const rows = this.parseParticipantsSource(source);
      rows.forEach((row) => {
        parsedRows.push({
          name: row?.name || row?.full_name || row?.participant_name || '-',
          age: row?.age ?? '-',
          gender: row?.gender || '-',
          phone: row?.phone || row?.phone_number || '-',
          idType: row?.id_type || row?.idType || '-',
          idNumber: row?.id_number || row?.idNumber || '-',
          medicalInfo: row?.medical_info || row?.medicalInfo || '-',
          isPrimary: !!(row?.is_primary_contact ?? row?.isPrimary),
        });
      });
    });

    if (parsedRows.length > 0) {
      return parsedRows;
    }

    // Fallback to primary contact details when participant rows are missing.
    const fallbackName = booking?.name || booking?.customer_name || booking?.customerName;
    if (fallbackName) {
      return [{
        name: fallbackName,
        age: booking?.age ?? '-',
        gender: booking?.gender || '-',
        phone: booking?.phone || booking?.customer_phone || booking?.customerPhone || '-',
        idType: booking?.id_type || '-',
        idNumber: booking?.id_number || '-',
        medicalInfo: booking?.medical_info || '-',
        isPrimary: true,
      }];
    }

    return [];
  }

  private parseParticipantsSource(source: any): any[] {
    if (Array.isArray(source)) {
      return source;
    }
    if (typeof source === 'string') {
      try {
        const parsed = JSON.parse(source);
        return Array.isArray(parsed) ? parsed : [];
      } catch {
        return [];
      }
    }
    return [];
  }
}
