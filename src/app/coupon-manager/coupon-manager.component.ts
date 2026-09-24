import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { forkJoin } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { AdminShellComponent } from '../shared/admin-shell/admin-shell.component';
import { TrekList } from '../treks/trek-list/trek-list';
import { Coupon, CouponManagerService, CouponPayload } from './coupon-manager.service';

interface TrekOption {
  id: string;
  name: string;
}

@Component({
  selector: 'app-coupon-manager',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, AdminShellComponent],
  templateUrl: './coupon-manager.component.html',
  styleUrls: ['./coupon-manager.component.scss']
})
export class CouponManagerComponent implements OnInit {
  loading = false;
  saving = false;
  message = '';
  error = '';

  treks: TrekOption[] = [];
  coupons: Coupon[] = [];

  filterTrekId: string | null = null;

  form: CouponPayload = {
    trekId: null,
    code: '',
    discountType: 'percentage',
    discountValue: 10,
    minBookingAmount: 0,
    maxDiscountAmount: null,
    startDate: null,
    endDate: null,
    usageLimit: null,
    isActive: true,
  };

  editingCouponId: string | null = null;
  selectedUsageCoupon: Coupon | null = null;
  usageLogs: any[] = [];
  loadingUsage = false;

  constructor(
    private trekService: TrekList,
    private couponService: CouponManagerService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadInitial();
  }

  loadInitial(): void {
    this.loading = true;
    this.error = '';

    forkJoin({
      treksRes: this.trekService.getAllTreks(),
      couponsRes: this.couponService.getCoupons(this.filterTrekId),
    }).subscribe({
      next: ({ treksRes, couponsRes }) => {
        this.treks = this.extractTreks(treksRes);
        this.coupons = Array.isArray(couponsRes?.data) ? couponsRes.data : [];
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.error = 'Failed to load coupons';
      }
    });
  }

  loadCoupons(): void {
    this.loading = true;
    this.couponService.getCoupons(this.filterTrekId).subscribe({
      next: (res) => {
        this.coupons = Array.isArray(res?.data) ? res.data : [];
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.error = 'Failed to load coupons';
      }
    });
  }

  applyFilter(): void {
    this.loadCoupons();
  }

  toggleUsageLog(coupon: Coupon): void {
    if (this.selectedUsageCoupon?.id === coupon.id) {
      this.selectedUsageCoupon = null;
      this.usageLogs = [];
      return;
    }

    this.selectedUsageCoupon = coupon;
    this.loadingUsage = true;
    this.usageLogs = [];

    this.couponService.getCouponUsage(coupon.id).subscribe({
      next: (res) => {
        this.usageLogs = res?.data?.logs || [];
        this.loadingUsage = false;
      },
      error: () => {
        this.usageLogs = [];
        this.loadingUsage = false;
      }
    });
  }

  clearForm(): void {
    this.editingCouponId = null;
    this.form = {
      trekId: null,
      code: '',
      discountType: 'percentage',
      discountValue: 10,
      minBookingAmount: 0,
      maxDiscountAmount: null,
      startDate: null,
      endDate: null,
      usageLimit: null,
      isActive: true,
    };
  }

  editCoupon(coupon: Coupon): void {
    this.editingCouponId = coupon.id;
    this.form = {
      trekId: coupon.trekId || null,
      code: coupon.code,
      discountType: coupon.discountType,
      discountValue: Number(coupon.discountValue),
      minBookingAmount: Number(coupon.minBookingAmount || 0),
      maxDiscountAmount: coupon.maxDiscountAmount !== null ? Number(coupon.maxDiscountAmount) : null,
      startDate: coupon.startDate ? this.toDatetimeLocal(coupon.startDate) : null,
      endDate: coupon.endDate ? this.toDatetimeLocal(coupon.endDate) : null,
      usageLimit: coupon.usageLimit !== null ? Number(coupon.usageLimit) : null,
      isActive: coupon.isActive === 1,
    };
  }

  saveCoupon(): void {
    if (!this.form.code || !this.form.discountType || !this.form.discountValue) {
      this.error = 'Please fill required fields (Code, Type, Discount Value)';
      this.message = '';
      return;
    }

    const payload: CouponPayload = {
      ...this.form,
      code: String(this.form.code).trim().toUpperCase(),
      startDate: this.form.startDate || null,
      endDate: this.form.endDate || null,
      maxDiscountAmount: this.form.maxDiscountAmount ?? null,
      usageLimit: this.form.usageLimit ?? null,
      isActive: !!this.form.isActive,
    };

    this.saving = true;
    this.message = '';
    this.error = '';

    const req$ = this.editingCouponId
      ? this.couponService.updateCoupon(this.editingCouponId, payload)
      : this.couponService.createCoupon(payload);

    req$.subscribe({
      next: (res: any) => {
        this.saving = false;
        this.message = res?.message || 'Saved';
        this.clearForm();
        this.loadCoupons();
      },
      error: (err) => {
        this.saving = false;
        this.error = err?.error?.message || 'Failed to save coupon';
      }
    });
  }

  removeCoupon(coupon: Coupon): void {
    if (!confirm(`Delete coupon ${coupon.code}?`)) return;

    this.couponService.deleteCoupon(coupon.id).subscribe({
      next: (res) => {
        this.message = res?.message || 'Deleted';
        this.error = '';
        this.loadCoupons();
      },
      error: (err) => {
        this.error = err?.error?.message || 'Failed to delete coupon';
      }
    });
  }

  private extractTreks(res: any): TrekOption[] {
    const root = res?.data;
    const rows = Array.isArray(root?.result) ? root.result : Array.isArray(root) ? root : [];
    return rows
      .map((t: any) => ({ id: String(t.id || '').trim(), name: String(t.name || t.trek_name || `Trek #${t.id}`) }))
      .filter((t: TrekOption) => Boolean(t.id));
  }

  private toDatetimeLocal(value: string): string {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return '';
    const offset = date.getTimezoneOffset();
    const local = new Date(date.getTime() - offset * 60000);
    return local.toISOString().slice(0, 16);
  }

  /** Returns 'active', 'expired', or 'inactive' for a coupon */
  getCouponStatus(coupon: Coupon): 'active' | 'expired' | 'inactive' {
    if (coupon.endDate) {
      const end = new Date(coupon.endDate);
      if (!isNaN(end.getTime()) && end < new Date()) {
        return 'expired';
      }
    }
    return coupon.isActive ? 'active' : 'inactive';
  }

  /** Returns formatted discount e.g. '10%' or '₹500' */
  formatDiscount(coupon: Coupon): string {
    if (coupon.discountType === 'percentage') {
      return `${coupon.discountValue}%`;
    }
    return `₹${coupon.discountValue}`;
  }

  /** Short date display */
  formatDateShort(value: string | null | undefined): string {
    if (!value) return '—';
    const d = new Date(value);
    if (isNaN(d.getTime())) return '—';
    return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
  }
}

