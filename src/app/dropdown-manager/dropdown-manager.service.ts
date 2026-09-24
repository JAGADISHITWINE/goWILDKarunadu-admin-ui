import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EncryptionService } from '../services/encryption.service';

export type DropdownOptionStatus = 'active' | 'inactive';
export type DropdownGroupStatus = 'active' | 'inactive';

export interface DropdownOption {
  id: string;
  label: string;
  value: string;
  status: DropdownOptionStatus;
  sortOrder: number;
  createdAt: string | null;
  updatedAt: string | null;
}

export interface DropdownGroup {
  id: string;
  key: string;
  groupKey: string;
  label: string;
  page: string;
  status: DropdownGroupStatus;
  sortOrder: number;
  options: DropdownOption[];
  createdAt: string | null;
  updatedAt: string | null;
}

export interface DropdownGroupPayload {
  groupKey: string;
  label: string;
  page: string;
  status?: DropdownGroupStatus;
  sortOrder?: number;
  options?: Array<{
    label: string;
    optionValue?: string;
    status?: DropdownOptionStatus;
    sortOrder?: number;
  } | string>;
}

export interface DropdownOptionPayload {
  groupId: string;
  label: string;
  optionValue?: string;
  status?: DropdownOptionStatus;
  sortOrder?: number;
}

@Injectable({
  providedIn: 'root'
})
export class DropdownManagerService {
  private readonly API = `${environment.baseUrl}/dropdowns`;

  constructor(private http: HttpClient, private crypto: EncryptionService) {}

  getGroups(): Observable<DropdownGroup[]> {
    return this.http.get<any>(this.API).pipe(
      map((res) => this.normalizeGroups(this.unwrap(res))),
      catchError(() => of([]))
    );
  }

  getManagementGroups(): Observable<DropdownGroup[]> {
    return this.http.get<any>(`${this.API}/manage`).pipe(
      map((res) => this.normalizeGroups(this.unwrap(res))),
      catchError(() => of([]))
    );
  }

  getGroupOptions(groupKey: string, includeInactive = false): Observable<DropdownOption[]> {
    return this.getGroups().pipe(
      map((groups) => {
        const group = groups.find((item) => item.groupKey === groupKey || item.key === groupKey);
        if (!group) return [];
        return includeInactive ? group.options : group.options.filter((option) => option.status === 'active');
      }),
      catchError(() => of([]))
    );
  }

  createGroup(payload: DropdownGroupPayload): Observable<any> {
    return this.http.post<any>(`${this.API}/groups`, payload);
  }

  updateGroup(id: string, payload: Partial<DropdownGroupPayload>): Observable<any> {
    return this.http.put<any>(`${this.API}/groups/${encodeURIComponent(id)}`, payload);
  }

  deleteGroup(id: string): Observable<any> {
    return this.http.delete<any>(`${this.API}/groups/${encodeURIComponent(id)}`);
  }

  createOption(payload: DropdownOptionPayload): Observable<any> {
    return this.http.post<any>(`${this.API}/options`, payload);
  }

  updateOption(id: string, payload: Partial<DropdownOptionPayload>): Observable<any> {
    return this.http.put<any>(`${this.API}/options/${encodeURIComponent(id)}`, payload);
  }

  setOptionStatus(groupId: string, optionId: string, status: DropdownOptionStatus): Observable<any> {
    return this.updateOption(optionId, { groupId, status });
  }

  deleteOption(id: string): Observable<any> {
    return this.http.delete<any>(`${this.API}/options/${encodeURIComponent(id)}`);
  }

  private unwrap(response: any): any {
    const raw = response?.data ?? response;
    const decrypted = this.crypto.decrypt(raw);
    return decrypted ?? raw;
  }

  private normalizeGroups(input: any): DropdownGroup[] {
    const rows = Array.isArray(input) ? input : Array.isArray(input?.groups) ? input.groups : [];
    if (!Array.isArray(rows)) return [];

    return rows
      .map((group: any) => ({
        id: String(group.id || group.groupId || '').trim(),
        key: String(group.key || group.groupKey || '').trim(),
        groupKey: String(group.groupKey || group.key || '').trim(),
        label: String(group.label || '').trim(),
        page: String(group.page || 'General').trim(),
        status: (String(group.status || 'active').trim().toLowerCase() === 'inactive'
          ? 'inactive'
          : 'active') as DropdownGroupStatus,
        sortOrder: Number(group.sortOrder ?? group.sort_order ?? 0),
        options: Array.isArray(group.options)
          ? group.options.map((option: any) => ({
              id: String(option.id || '').trim(),
              label: String(option.label || '').trim(),
              value: String(option.value || option.option_value || '').trim(),
              status: (String(option.status || 'active').trim().toLowerCase() === 'inactive'
                ? 'inactive'
                : 'active') as DropdownOptionStatus,
              sortOrder: Number(option.sortOrder ?? option.sort_order ?? 0),
              createdAt: option.createdAt || option.created_at || null,
              updatedAt: option.updatedAt || option.updated_at || null,
            }))
          : [],
        createdAt: group.createdAt || group.created_at || null,
        updatedAt: group.updatedAt || group.updated_at || null,
      }))
      .filter((group: DropdownGroup) => Boolean(group.id || group.key || group.groupKey));
  }
}
