import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export type CategoryStatus = 'active' | 'inactive';

export interface Category {
  id: string;
  name: string;
  slug: string;
  status: CategoryStatus;
  sortOrder: number;
  createdAt: string | null;
  updatedAt: string | null;
}

export interface CategoryPayload {
  name: string;
  status?: CategoryStatus;
  sortOrder?: number;
}

@Injectable({
  providedIn: 'root'
})
export class CategoryManagerService {
  private readonly API = `${environment.baseUrl}/categories`;

  constructor(private http: HttpClient) {}

  getCategories(includeInactive = false): Observable<{ success: boolean; data: Category[] }> {
    const path = includeInactive ? `${this.API}/manage` : this.API;
    return this.http.get<{ success: boolean; data: Category[] }>(path);
  }

  createCategory(payload: CategoryPayload): Observable<{ success: boolean; message: string; data: Category }> {
    return this.http.post<{ success: boolean; message: string; data: Category }>(this.API, payload);
  }

  updateCategory(id: string, payload: Partial<CategoryPayload>): Observable<{ success: boolean; message: string; data: Category }> {
    return this.http.put<{ success: boolean; message: string; data: Category }>(`${this.API}/${encodeURIComponent(id)}`, payload);
  }

  deleteCategory(id: string): Observable<{ success: boolean; message: string; data?: Category }> {
    return this.http.delete<{ success: boolean; message: string; data?: Category }>(`${this.API}/${encodeURIComponent(id)}`);
  }
}
