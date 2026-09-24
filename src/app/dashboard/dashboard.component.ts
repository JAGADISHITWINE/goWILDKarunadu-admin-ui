import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Dashboard } from './dashboard';
import { Chart, registerables } from 'chart.js';
import { AdminShellComponent } from '../shared/admin-shell/admin-shell.component';
import { DropdownManagerService } from '../dropdown-manager/dropdown-manager.service';
import { take } from 'rxjs';
import { Analytics } from '../analytics/analytics';

Chart.register(...registerables);

interface StatCard {
  title: string;
  value: string | number;
  change: string;
  changeLabel: string;
  note: string;
  icon: string;
  color: string;
  trend: 'up' | 'down';
  route: string;
  disabled: boolean;
  isCurrency: boolean;
}

interface PeriodComparison {
  current: number;
  previous: number;
}

interface DashboardComparison {
  periodLabel?: string;
  users?: PeriodComparison;
  activeUsers?: PeriodComparison;
  treks?: PeriodComparison;
  bookings?: PeriodComparison;
  revenue?: PeriodComparison;
  blogs?: PeriodComparison;
  comments?: PeriodComparison;
}

type DashboardComparisonKey = Exclude<keyof DashboardComparison, 'periodLabel'>;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminShellComponent,
  ],
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {
  stats: StatCard[] = [];
  periodComparison: DashboardComparison | null = null;
  Total_users!: number;
  Total_active_users!: number;
  Total_trek!: number;
  Total_bookings: any;
  Total_Revenue: any;
  recentBooking: any[] = [];
  @Input() labels: string[] = []; // e.g., ['Jan', 'Feb', 'Mar']
  @Input() bookingsData: number[] = []; // e.g., [10, 20, 15]
  @Input() revenueData: number[] = []; // e.g., [5, 12, 18]

  @ViewChild('bookingsRevenueChart') bookingsRevenueChartRef?: ElementRef<HTMLCanvasElement>;
  @ViewChild('trekRevenueChart') trekRevenueChartRef?: ElementRef<HTMLCanvasElement>;
  @ViewChild('cancellationChart') cancellationChartRef?: ElementRef<HTMLCanvasElement>;
  @ViewChild('growthChart') growthChartRef?: ElementRef<HTMLCanvasElement>;

  monthlyData: any[] = [];
  trekRevenue: any[] = [];
  cancellationData: any[] = [];
  monthlyGrowthLabel = 'N/A';
  private chartInstances: Chart[] = [];
  private viewReady = false;

  quickActions = [
    {
      label: 'Add New Trek',
      icon: 'plus-circle',
      route: '/admin/treks/add',
      color: 'success',
    },
    {
      label: 'View Bookings',
      icon: 'calendar-event',
      route: '/admin/bookings',
      color: 'primary',
    },
    {
      label: 'Write Blog Post',
      icon: 'file-text',
      route: '/admin/blog/editor',
      color: 'warning',
    },
    {
      label: 'Trek & Batch Management',
      icon: 'layers',
      route: '/admin/batch-management',
      color: 'secondary',
    },
    {
      label: 'Operations Center',
      icon: 'clipboard-data',
      route: '/admin/operations',
      color: 'primary',
    },
  ];
  Total_Blog: any;
  Total_comments: any;
  showAllBookings = false;
  searchQuery = '';
  statusFilter = 'all';
  rowOptions: number[] = [];
  bookingStatusOptions: Array<{ value: string; label: string }> = [
    { value: 'all', label: 'All' },
  ];
  pageSize = 0;
  currentPage = 1;

  constructor(
    private router: Router,
    private dashboardService: Dashboard,
    private dropdownService: DropdownManagerService,
    private analyticsService: Analytics,
  ) { }

  ngOnInit() {
    this.loadDropdownOptions();
    this.dashboardService.getDashData().subscribe({
      next: (res: any) => {
      const data = res?.data || {};
      this.periodComparison = data.periodComparison || null;
      this.Total_users = data.totalUsers || 0;
      this.Total_active_users = data.totalactiveUsers || 0;
      this.Total_trek = data.totaltrekCount || 0;
      this.Total_bookings = data.totalbookingCount || 0;
      this.Total_Revenue = data.totalRevenue || 0;
      this.recentBooking = Array.isArray(data.recentBookings) ? data.recentBookings : [];
      this.currentPage = 1;
      this.Total_Blog = data.totalBlog || 0;
      this.Total_comments = data.totalComments || 0;
      this.labels = this.recentBooking.map((r: any) => r.month);
      this.bookingsData = this.recentBooking.map((r: any) => r.bookings);
      this.revenueData = this.recentBooking.map((r: any) => r.revenue);
      this.stats = this.buildStats(data);
      },
      error: () => {
        this.Total_users = 0;
        this.Total_active_users = 0;
        this.Total_trek = 0;
        this.Total_bookings = 0;
        this.Total_Revenue = 0;
        this.recentBooking = [];
        this.periodComparison = null;
        this.stats = [];
        this.monthlyData = [];
        this.trekRevenue = [];
        this.cancellationData = [];
        this.monthlyGrowthLabel = 'N/A';
      }
    });

    this.analyticsService.getRevenueData().subscribe({
      next: (res: any) => {
        const data = this.extractAnalyticsData(res);
        this.monthlyData = Array.isArray(data.monthlyData) ? data.monthlyData : [];
        this.trekRevenue = Array.isArray(data.trekRevenue) ? data.trekRevenue : [];
        this.cancellationData = Array.isArray(data.cancellationData) ? data.cancellationData : [];
        this.monthlyGrowthLabel = this.toGrowthLabel(data.monthlyGrowth, this.monthlyData);
        this.renderCharts();
      },
      error: () => {
        this.monthlyData = [];
        this.trekRevenue = [];
        this.cancellationData = [];
        this.monthlyGrowthLabel = 'N/A';
        this.renderCharts();
      }
    });
  }

  ngAfterViewInit(): void {
    this.viewReady = true;
    this.renderCharts();
  }

  ngOnDestroy(): void {
    this.destroyCharts();
  }

  private buildStats(data: any): StatCard[] {
    const comparison = (key: DashboardComparisonKey): PeriodComparison => {
      const current = Number(this.periodComparison?.[key]?.current ?? 0);
      const previous = Number(this.periodComparison?.[key]?.previous ?? 0);
      return { current, previous };
    };

    return [
      this.createStatCard({
        title: 'Total Bookings',
        value: Number(data.totalbookingCount || 0),
        comparison: comparison('bookings'),
        icon: 'calendar-event',
        color: 'primary',
        route: '/admin/bookings',
        disabled: false,
        isCurrency: false,
      }),
      this.createStatCard({
        title: 'Revenue',
        value: Number(data.totalRevenue || 0),
        comparison: comparison('revenue'),
        icon: 'cash',
        color: 'success',
        route: '/admin/revenue',
        disabled: false,
        isCurrency: true,
      }),
      this.createStatCard({
        title: 'Active Users',
        value: Number(data.totalactiveUsers || 0),
        comparison: comparison('activeUsers'),
        icon: 'person-check',
        color: 'warning',
        route: '/admin/users',
        disabled: false,
        isCurrency: false,
      }),
      this.createStatCard({
        title: 'Total Users',
        value: Number(data.totalUsers || 0),
        comparison: comparison('users'),
        icon: 'people-fill',
        color: 'tertiary',
        route: '/admin/users',
        disabled: false,
        isCurrency: false,
      }),
      this.createStatCard({
        title: 'Total Treks',
        value: Number(data.totaltrekCount || 0),
        comparison: comparison('treks'),
        icon: 'map',
        color: 'secondary',
        route: '/admin/treks/list',
        disabled: false,
        isCurrency: false,
      }),
      this.createStatCard({
        title: 'Blog Posts',
        value: Number(data.totalBlog || 0),
        comparison: comparison('blogs'),
        icon: 'journal-text',
        color: 'medium',
        route: '/admin/blog/posts',
        disabled: false,
        isCurrency: false,
      }),
      this.createStatCard({
        title: 'Pending Reviews',
        value: Number(data.totalComments || 0),
        comparison: comparison('comments'),
        icon: 'star',
        color: 'danger',
        route: '/admin/reviews',
        disabled: false,
        isCurrency: false,
      }),
    ];
  }

  private createStatCard(params: {
    title: string;
    value: number;
    comparison: PeriodComparison;
    icon: string;
    color: string;
    route: string;
    disabled: boolean;
    isCurrency: boolean;
  }): StatCard {
    const delta = params.comparison.current - params.comparison.previous;
    const trend: 'up' | 'down' = delta >= 0 ? 'up' : 'down';
    const percent = params.comparison.previous > 0
      ? (delta / params.comparison.previous) * 100
      : (params.comparison.current > 0 ? 100 : 0);
    const change = `${delta >= 0 ? '+' : ''}${percent.toFixed(1)}%`;
    const noteDelta = delta >= 0 ? '+' : '-';
    const note = params.comparison.current > 0
      ? `${noteDelta}${Math.abs(delta)} this month`
      : 'No activity this month';

    return {
      title: params.title,
      value: params.value,
      change,
      changeLabel: this.periodComparison?.periodLabel || 'vs last month',
      note,
      icon: params.icon,
      color: params.color,
      trend,
      route: params.route,
      disabled: params.disabled,
      isCurrency: params.isCurrency,
    };
  }

  private loadDropdownOptions() {
    this.dropdownService.getGroupOptions('bookingStatus').pipe(take(1)).subscribe((opts) => {
      if (opts.length === 0) return;
      this.bookingStatusOptions = [
        { value: 'all', label: 'All' },
        ...opts.map((opt) => ({ value: opt.value, label: opt.label })),
      ];
    });

    this.dropdownService.getGroupOptions('dashboardRows').pipe(take(1)).subscribe((opts) => {
      const mapped = opts
        .map((opt) => Number(opt.value || opt.label))
        .filter((num) => Number.isFinite(num) && num > 0);

      this.rowOptions = mapped;
      this.pageSize = mapped[0] || 0;
    });
  }

  private extractAnalyticsData(res: any): any {
    if (res?.data?.data && typeof res.data.data === 'object') return res.data.data;
    if (res?.data && typeof res.data === 'object') return res.data;
    if (res?.results && typeof res.results === 'object') return res.results;
    return {};
  }

  private toGrowthLabel(rawGrowth: any, monthlyData: any[]): string {
    if (!Array.isArray(monthlyData) || monthlyData.length < 2) {
      return 'N/A';
    }

    const value = String(rawGrowth ?? '').trim();
    if (!value || value === '0%' || value === '0.0%') {
      return 'N/A';
    }

    return value;
  }

  private renderCharts(): void {
    if (!this.viewReady) return;
    if (!this.bookingsRevenueChartRef || !this.trekRevenueChartRef || !this.cancellationChartRef || !this.growthChartRef) {
      return;
    }

    this.destroyCharts();

    const monthlyLabels = this.monthlyData.map((item) => item.month);
    const bookingCounts = this.monthlyData.map((item) => Number(item.bookings || 0));
    const revenueValues = this.monthlyData.map((item) => Number(item.amount || item.revenue || 0));
    const cancellationLabels = this.cancellationData.map((item) => item.month);
    const cancellationValues = this.cancellationData.map((item) => Number(item.cancellations || 0));
    const topTreks = [...this.trekRevenue]
      .sort((a, b) => Number(b.revenue || 0) - Number(a.revenue || 0))
      .slice(0, 6);

    const bookingsRevenueCtx = this.bookingsRevenueChartRef.nativeElement.getContext('2d');
    const trekRevenueCtx = this.trekRevenueChartRef.nativeElement.getContext('2d');
    const cancellationCtx = this.cancellationChartRef.nativeElement.getContext('2d');
    const growthCtx = this.growthChartRef.nativeElement.getContext('2d');

    if (bookingsRevenueCtx) {
      this.chartInstances.push(new Chart(bookingsRevenueCtx, {
        type: 'line',
        data: {
          labels: monthlyLabels,
          datasets: [
            {
              label: 'Bookings',
              data: bookingCounts,
              borderColor: '#1d7a6d',
              backgroundColor: 'rgba(29, 122, 109, 0.12)',
              tension: 0.35,
              fill: true,
              pointRadius: 3,
            },
            {
              label: 'Revenue',
              data: revenueValues,
              borderColor: '#f1a64d',
              backgroundColor: 'rgba(241, 166, 77, 0.14)',
              tension: 0.35,
              fill: true,
              pointRadius: 3,
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: 'top' },
          },
          scales: {
            y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.06)' } },
            x: { grid: { display: false } }
          }
        }
      }));
    }

    if (trekRevenueCtx) {
      this.chartInstances.push(new Chart(trekRevenueCtx, {
        type: 'bar',
        data: {
          labels: topTreks.map((item) => item.name),
          datasets: [{
            label: 'Revenue',
            data: topTreks.map((item) => Number(item.revenue || 0)),
            backgroundColor: ['#1d7a6d', '#f1a64d', '#8c7ae6', '#2f9d6a', '#d94f41', '#6b7280'],
            borderRadius: 10,
            borderSkipped: false,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          indexAxis: 'y',
          plugins: {
            legend: { display: false },
          },
          scales: {
            x: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.06)' } },
            y: { grid: { display: false } }
          }
        }
      }));
    }

    if (cancellationCtx) {
      this.chartInstances.push(new Chart(cancellationCtx, {
        type: 'doughnut',
        data: {
          labels: cancellationLabels.length ? cancellationLabels : ['No cancellations'],
          datasets: [{
            data: cancellationValues.length ? cancellationValues : [1],
            backgroundColor: cancellationValues.length
              ? ['#d94f41', '#f1a64d', '#1d7a6d', '#6b7280', '#8c7ae6']
              : ['rgba(107,114,128,0.25)'],
            borderWidth: 0,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '68%',
          plugins: {
            legend: { position: 'bottom' }
          }
        }
      }));
    }

    if (growthCtx) {
      const growthPoints = revenueValues.map((value, index) => {
        const previous = index > 0 ? revenueValues[index - 1] : value;
        if (!previous) return 0;
        return ((value - previous) / previous) * 100;
      });

      this.chartInstances.push(new Chart(growthCtx, {
        type: 'line',
        data: {
          labels: monthlyLabels,
          datasets: [{
            label: 'Monthly Growth %',
            data: growthPoints,
            borderColor: '#8c7ae6',
            backgroundColor: 'rgba(140, 122, 230, 0.12)',
            tension: 0.35,
            fill: true,
            pointRadius: 3,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false }
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                callback: (value) => `${value}%`
              },
              grid: { color: 'rgba(0,0,0,0.06)' }
            },
            x: { grid: { display: false } }
          }
        }
      }));
    }
  }

  private destroyCharts(): void {
    this.chartInstances.forEach((instance) => instance.destroy());
    this.chartInstances = [];
  }

  onCardClick(stat: any) {
    if (stat.disabled) {
      return;
    }
    this.router.navigate([stat.route]); // ✅ allowed
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'confirmed':
        return 'success';
      case 'pending':
        return 'warning';
      case 'cancelled':
        return 'danger';
      default:
        return 'medium';
    }
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  openQuickAction(route: string): void {
    if (!route) return;
    this.navigateTo(route);
  }

  viewBooking(id: string) {
    this.router.navigate(['/admin/bookings', id]);
  }

  logout() {
    this.router.navigate(['']);
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('currentUser');
  }

  selectedBookingIndex: number | null = null;
  selectedBooking: any = null;

  toggleDetails(index: number) {
    this.selectedBookingIndex = this.selectedBookingIndex === index ? null : index;
    this.selectedBooking = this.selectedBookingIndex !== null ? this.recentBooking[index] : null;
  }

  openBookingModal(booking: any) {
    this.selectedBooking = booking;
  }

  closeDetails() {
    this.selectedBookingIndex = null;
    this.selectedBooking = null;
  }

  goToBookingsPage() {
    this.closeDetails();
    this.router.navigate(['/admin/bookings']);
  }

  toggleViewAll() {
    this.showAllBookings = !this.showAllBookings;
    this.currentPage = 1;
  }

  get filteredBookings() {
    const q = this.searchQuery.trim().toLowerCase();
    const status = this.statusFilter;
    return this.recentBooking.filter((b: any) => {
      const matchesStatus = status === 'all' ? true : (b.status || '').toLowerCase() === status;
      if (!q) return matchesStatus;
      const haystack = [
        b.id,
        b.customerName,
        b.trekName,
        b.email,
        b.phone,
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();
      return matchesStatus && haystack.includes(q);
    });
  }

  get totalPages() {
    const size = this.effectivePageSize;
    return Math.max(1, Math.ceil(this.filteredBookings.length / size));
  }

  get pagedBookings() {
    const size = this.effectivePageSize;
    const start = (this.currentPage - 1) * size;
    return this.filteredBookings.slice(start, start + size);
  }

  get pageNumbers() {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  setPage(page: number) {
    this.currentPage = Math.min(Math.max(page, 1), this.totalPages);
  }

  prevPage() {
    this.setPage(this.currentPage - 1);
  }

  nextPage() {
    this.setPage(this.currentPage + 1);
  }

  private get effectivePageSize() {
    return this.pageSize > 0 ? this.pageSize : Math.max(1, this.filteredBookings.length);
  }


}
