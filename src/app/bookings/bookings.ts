import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EncryptionService } from '../services/encryption.service';

export interface RefundPayload {
  amount: number;
  reason: string;
  refundMethod: string;
  refundTxnId?: string;
  note?: string;
}

export interface PaymentUpdatePayload {
  paymentStatus: string;
  paymentMethod: string;
  transactionId?: string;
  amount?: number;
}

@Injectable({
  providedIn: 'root',
})
export class Bookings {

  constructor(private http: HttpClient, private crypto: EncryptionService) { }

  private API = environment.baseUrl;

  getBookingData() {
    return this.http.get<{ payload: string }>(`${this.API}/bookingData`).pipe(
      map((res: any) => {
        const decrypted = this.crypto.decrypt(res.data);
        return {
          ...res,
          data: decrypted
        };
      })
    );
  }

  processRefund(bookingId: string, payload: RefundPayload): Observable<any> {
    return this.http.post(`${this.API}/bookings/${bookingId}/refund`, payload);
  }

  updateBookingPayment(bookingId: string, payload: PaymentUpdatePayload): Observable<any> {
    return this.http.put(`${this.API}/bookings/${bookingId}/payment`, payload);
  }

  getPaymentMethods(): Observable<any> {
    return this.http.get(`${this.API}/payments/methods`);
  }

  listRefunds(): Observable<any> {
    return this.http.get(`${this.API}/payments/refunds`);
  }

  reconcilePayments(): Observable<any> {
    return this.http.get(`${this.API}/payments/reconcile`);
  }

  getBookingParticipants(bookingId: string): Observable<any> {
    return this.http.get(`${this.API}/bookings/${bookingId}/participants`);
  }

  saveBookingParticipants(bookingId: string, participants: any[]): Observable<any> {
    return this.http.post(`${this.API}/bookings/${bookingId}/participants`, { participants });
  }

  recordCheckin(payload: any): Observable<any> {
    return this.http.post(`${this.API}/operations/checkin`, payload);
  }

  listGearInventory(): Observable<any> {
    return this.http.get(`${this.API}/operations/gear`);
  }

  upsertGearItem(payload: any): Observable<any> {
    return this.http.post(`${this.API}/operations/gear`, payload);
  }

  getBatchPnl(batchId: string): Observable<any> {
    return this.http.get(`${this.API}/operations/batches/${batchId}/pnl`);
  }

  addBatchExpense(batchId: string, payload: any): Observable<any> {
    return this.http.post(`${this.API}/operations/batches/${batchId}/expenses`, payload);
  }

  broadcastTrailAdvisory(payload: any): Observable<any> {
    return this.http.post(`${this.API}/operations/broadcast/advisory`, payload);
  }

  collectRemainderPayment(payload: any): Observable<any> {
    return this.http.post(`${this.API}/operations/collect-remainder`, payload);
  }

  getForestRoyaltyLedger(): Observable<any> {
    return this.http.get(`${this.API}/operations/royalty-ledger`);
  }

  dispatchJourneyNotification(payload: any): Observable<any> {
    return this.http.post(`${this.API}/operations/journey/dispatch`, payload);
  }

}

