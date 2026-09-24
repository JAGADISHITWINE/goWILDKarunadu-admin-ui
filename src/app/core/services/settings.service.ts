import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface BrandSettings {
  brandName: string;
  brandSubtitle: string;
  brandTagline: string;
  supportPhone: string;
  supportPhoneRaw: string;
  whatsappNumber: string;
  whatsappNumberRaw: string;
  supportEmail: string;
  contactLocation: string;
  legalName: string;
  gstin: string;
  address: string;
  socialFacebook: string;
  socialInstagram: string;
  socialYoutube: string;
  aboutText: string;
  rawSettings?: Record<string, string>;
}

@Injectable({ providedIn: 'root' })
export class SettingsService {
  private readonly API = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getSettings(): Observable<{ success: boolean; data: BrandSettings }> {
    return this.http.get<{ success: boolean; data: BrandSettings }>(`${this.API}/settings`);
  }

  updateSettings(payload: Partial<BrandSettings>): Observable<{ success: boolean; message: string }> {
    return this.http.put<{ success: boolean; message: string }>(`${this.API}/settings`, payload);
  }
}
