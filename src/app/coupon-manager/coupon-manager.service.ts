import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Coupon {
  id: string;
  trekId: string | null;
  trekName: string;
  code: string;
  discountType: 'percentage' | 'flat';
  discountValue: number;
  minBookingAmount: number;
  maxDiscountAmount: number | null;
  startDate: string | null;
  endDate: string | null;
  usageLimit: number | null;
  usageCount: number;
  isActive: number;
  createdAt: string;
  updatedAt: string;
}

export interface CouponPayload {
  trekId: string | null;
  code: string;
  discountType: 'percentage' | 'flat';
  discountValue: number;
  minBookingAmount?: number;
  maxDiscountAmount?: number | null;
  startDate?: string | null;
  endDate?: string | null;
  usageLimit?: number | null;
  isActive?: boolean;
}

export interface CouponUsageLog {
  id: string;
  bookingReference: string;
  customerName: string;
  customerEmail: string;
  trekName: string;
  amount: number;
  usedAt: string;
  status: string;
}

@Injectable({ providedIn: 'root' })
export class CouponManagerService {
  private readonly API = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getCoupons(trekId?: string | null): Observable<{ success: boolean; data: Coupon[] }> {
    const query = trekId ? `?trekId=${encodeURIComponent(trekId)}` : '';
    return this.http.get<{ success: boolean; data: Coupon[] }>(`${this.API}/coupons${query}`);
  }

  getCouponUsage(id: string): Observable<{ success: boolean; data: { coupon: Coupon; usageCount: number; usageLimit: number | null; logs: CouponUsageLog[] } }> {
    return this.http.get<{ success: boolean; data: { coupon: Coupon; usageCount: number; usageLimit: number | null; logs: CouponUsageLog[] } }>(`${this.API}/coupons/${id}/usage`);
  }

  createCoupon(payload: CouponPayload): Observable<{ success: boolean; message: string; data?: any }> {
    return this.http.post<{ success: boolean; message: string; data?: any }>(`${this.API}/coupons`, payload);
  }

  updateCoupon(id: string, payload: Partial<CouponPayload>): Observable<{ success: boolean; message: string }> {
    return this.http.put<{ success: boolean; message: string }>(`${this.API}/coupons/${id}`, payload);
  }

  deleteCoupon(id: string): Observable<{ success: boolean; message: string }> {
    return this.http.delete<{ success: boolean; message: string }>(`${this.API}/coupons/${id}`);
  }
}
