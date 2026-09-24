import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Analytics } from './analytics';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { AdminShellComponent } from '../shared/admin-shell/admin-shell.component';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, AdminShellComponent],
})
export class AnalyticsComponent implements OnInit, AfterViewInit, OnDestroy {
  totalBookings: number = 0;
  totalRevenue: number = 0;
  averageBookingValue: number = 0;
  monthlyData: any[] = [];
  trekRevenue: any[] = [];
  monthlyGrowth: any = 0;
  monthlyGrowthLabel = 'N/A';
  selectedRange: '3m' | '6m' | '12m' = '12m';

  private revenueChart: Chart | null = null;
  private dataLoaded = false;

  @ViewChild('revenueChart') revenueChartRef?: ElementRef<HTMLCanvasElement>;

  constructor(private analyticService: Analytics) {}

  ngOnInit(): void {
    this.analyticService.getRevenueData().subscribe((res: any) => {
      const data = this.extractAnalyticsData(res);
      this.monthlyData = Array.isArray(data.monthlyData) ? data.monthlyData : [];
      this.trekRevenue = Array.isArray(data.trekRevenue) ? data.trekRevenue : [];

      this.totalBookings = Number(
        data.totalBooking ??
        data.totalBookings ??
        data.total_bookings ??
        0
      );

      this.totalRevenue = Number(
        data.totalRevenue ??
        data.total_revenue ??
        this.monthlyData.reduce((sum: number, row: any) => sum + Number(row?.amount || row?.revenue || 0), 0) ??
        0
      );

      this.averageBookingValue = Number(
        data.averageBookingValue ??
        data.avgBookingValue ??
        data.average_booking_value ??
        (this.totalBookings > 0 ? this.totalRevenue / this.totalBookings : 0)
      );

      this.monthlyGrowth = data.monthlyGrowth ?? data.growth ?? 0;
      this.monthlyGrowthLabel = this.toGrowthLabel(this.monthlyGrowth, this.monthlyData);

      this.dataLoaded = true;
      this.buildChart();
    });
  }

  ngAfterViewInit(): void {
    if (this.dataLoaded) {
      this.buildChart();
    }
  }

  ngOnDestroy(): void {
    this.revenueChart?.destroy();
  }

  // ──────────────── Range filter ────────────────
  get filteredMonthlyData(): any[] {
    if (!this.monthlyData.length) return [];
    const count = this.selectedRange === '3m' ? 3 : this.selectedRange === '6m' ? 6 : 12;
    return this.monthlyData.slice(-count);
  }

  setRange(range: '3m' | '6m' | '12m') {
    this.selectedRange = range;
    this.buildChart();
  }

  // ──────────────── Dynamic max for progress bars ────────────────
  get maxMonthlyAmount(): number {
    if (!this.monthlyData.length) return 1;
    return Math.max(...this.monthlyData.map((d: any) => Number(d?.amount || d?.revenue || 0)), 1);
  }

  getProgressPercent(data: any): number {
    const val = Number(data?.amount || data?.revenue || 0);
    return Math.round((val / this.maxMonthlyAmount) * 100);
  }

  // ──────────────── Chart.js ────────────────
  private buildChart(): void {
    if (!this.revenueChartRef?.nativeElement) return;

    this.revenueChart?.destroy();

    const data = this.filteredMonthlyData;
    if (!data.length) return;

    const labels = data.map((d: any) => d.month || d.label || '');
    const bookings = data.map((d: any) => Number(d.bookings || 0));
    const revenue = data.map((d: any) => Number(d.amount || d.revenue || 0));

    this.revenueChart = new Chart(this.revenueChartRef.nativeElement, {
      type: 'bar',
      data: {
        labels,
        datasets: [
          {
            label: 'Revenue (₹)',
            data: revenue,
            backgroundColor: 'rgba(29, 122, 109, 0.75)',
            borderColor: 'rgba(29, 122, 109, 1)',
            borderWidth: 1,
            borderRadius: 8,
            yAxisID: 'y',
          },
          {
            label: 'Bookings',
            data: bookings,
            type: 'line' as any,
            borderColor: 'rgba(241, 166, 77, 1)',
            backgroundColor: 'rgba(241, 166, 77, 0.15)',
            borderWidth: 2.5,
            pointRadius: 5,
            pointHoverRadius: 7,
            tension: 0.4,
            fill: true,
            yAxisID: 'y1',
          },
        ],
      },
      options: {
        responsive: true,
        interaction: { mode: 'index', intersect: false },
        plugins: {
          legend: { position: 'top' },
          tooltip: {
            callbacks: {
              label: (ctx: import('chart.js').TooltipItem<'bar'>) => {
                const label = ctx.dataset.label || '';
                const value = ctx.parsed.y ?? 0;
                return label.includes('Revenue')
                  ? `${label}: ₹${value.toLocaleString('en-IN')}`
                  : `${label}: ${value}`;
              },
            },
          },
        },
        scales: {
          y: {
            type: 'linear',
            position: 'left',
            ticks: {
              callback: (value: number | string) => `₹${Number(value).toLocaleString('en-IN')}`,
            },
            grid: { color: 'rgba(0,0,0,0.04)' },
          },
          y1: {
            type: 'linear',
            position: 'right',
            grid: { drawOnChartArea: false },
            ticks: { stepSize: 1 },
          },
        },
      },
    });
  }

  // ──────────────── Export ────────────────
  exportReport() {
    const monthlySheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.monthlyData);
    const trekSheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.trekRevenue);

    const workbook: XLSX.WorkBook = {
      Sheets: {
        'Monthly Revenue': monthlySheet,
        'Trek Revenue': trekSheet
      },
      SheetNames: ['Monthly Revenue', 'Trek Revenue']
    };

    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(blob, `Revenue_Report_${new Date().getFullYear()}.xlsx`);
  }

  private toGrowthLabel(rawGrowth: any, monthlyData: any[]): string {
    if (!Array.isArray(monthlyData) || monthlyData.length < 2) return 'N/A';
    const value = String(rawGrowth ?? '').trim();
    if (!value || value === '0%' || value === '0.0%') return 'N/A';
    return value;
  }

  private extractAnalyticsData(res: any): any {
    if (res?.data?.data && typeof res.data.data === 'object') return res.data.data;
    if (res?.data && typeof res.data === 'object') return res.data;
    if (res?.results && typeof res.results === 'object') return res.results;
    return {};
  }
}
