import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface ReferralSettings {
  baseDiscount: number;
  bonusDiscount: number;
  bonusParticipantThreshold: number;
  freeSlotThreshold: number;
  freeSlotValue: number;
  isEnabled: number | boolean;
  updatedAt?: string;
  updatedBy?: { id: string; name?: string | null; email?: string | null } | null;
}

export interface ReferralSettingsPayload {
  baseDiscount: number;
  bonusDiscount: number;
  bonusParticipantThreshold: number;
  freeSlotThreshold: number;
  freeSlotValue: number;
  isEnabled: boolean;
}

@Injectable({ providedIn: 'root' })
export class ReferralSettingsService {
  private readonly API = `${environment.baseUrl}/referrals/settings`;

  constructor(private http: HttpClient) {}

  getSettings(): Observable<{ success: boolean; data: ReferralSettings }> {
    return this.http.get<{ success: boolean; data: ReferralSettings }>(this.API);
  }

  updateSettings(payload: ReferralSettingsPayload): Observable<{ success: boolean; message: string; data: ReferralSettings }> {
    return this.http.put<{ success: boolean; message: string; data: ReferralSettings }>(this.API, payload);
  }
}
