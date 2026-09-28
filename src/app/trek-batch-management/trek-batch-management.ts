import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EncryptionService } from '../services/encryption.service';
import { AuthService } from '../core/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class TrekBatchManagement {
  private API = `${environment.baseUrl}`;

  constructor(private http: HttpClient, private crypto: EncryptionService) { }

  getTreks() {
    return this.http.get<{ payload: string }>(`${this.API}/treks`).pipe(
      map((res: any) => {
        const decrypted = this.crypto.decrypt(res.data);
        return {
          ...res,
          data: decrypted
        };
      })
    )
  }

  getBatches(trekId: string) {
    return this.http.get<{ payload: string }>(`${this.API}/treks/${trekId}/batches`).pipe(
      map((res: any) => {
        const decrypted = this.crypto.decrypt(res.data);
        return {
          ...res,
          data: decrypted
        };
      })
    )
  }


  getBatchBookings(batchId: string) {
    return this.http.get<{ payload: string }>(`${this.API}/batches/${batchId}/bookings`).pipe(
      map((res: any) => {
        if (res?.data && typeof res.data === 'string') {
          const decrypted = this.crypto.decrypt(res.data);
          return {
            ...res,
            data: decrypted
          };
        }
        return res;
      })
    )
  }



  stopBooking(batchId: string): Observable<any> {
    return this.http.patch(`${this.API}/batches/${batchId}/stop-booking`, {});
  }


  resumeBooking(batchId: string): Observable<any> {
    return this.http.patch(`${this.API}/batches/${batchId}/resume-booking`, {});
  }


  // Use authorized request to fetch the file as blob and trigger download client-side.
  exportBatchBookings(batchId: string): void {
    this.downloadBatchBookings(batchId).subscribe(blob => {
      this.triggerDownload(blob, 'bookings.xlsx');
    });
  }

  exportAllTrekBookings(trekId: string): void {
    this.downloadAllTrekBookings(trekId).subscribe(blob => {
      this.triggerDownload(blob, 'all_bookings.xlsx');
    });
  }

  downloadBatchBookings(batchId: string): Observable<Blob> {
    return this.http.get(`${this.API}/batches/${batchId}/export-bookings`, {
      responseType: 'blob' as 'blob',
      withCredentials: true
    });
  }

  downloadAllTrekBookings(trekId: string){
    return this.http.get(`${this.API}/treks/${trekId}/export-all-bookings`, {
      responseType: 'blob' as 'blob',
      withCredentials: true
    });
  }

  triggerDownload(blob: Blob, fileName: string): void {
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.click();
    window.URL.revokeObjectURL(url);
  }

  getCompletionStats() {
    return this.http.get(`${this.API}/bookings/completion-stats`);
  }

  markBatchCompleted(batchId: string): Observable<any> {
    return this.http.put(`${this.API}/batches/${batchId}/complete`, {});
  }

  runAutoCompleteSweep(): Observable<any> {
    return this.http.post(`${this.API}/batches/auto-complete-sweep`, {});
  }

  getAutoCompleteStatus(): Observable<any> {
    return this.http.get(`${this.API}/batches/auto-complete-status`);
  }
}
