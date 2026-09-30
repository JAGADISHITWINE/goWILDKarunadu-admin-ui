import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EncryptionService } from '../services/encryption.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Users {
  constructor(private http: HttpClient, private crypto: EncryptionService) { }

  private API = environment.baseUrl;

  getAllUsers() {
    return this.http.get<{ payload: string }>(`${this.API}/getUsers`).pipe(
      map((res: any) => {
        const decrypted = this.crypto.decrypt(res.data);
        return {
          ...res,
          data: decrypted
        };
      })
    )
  }

  getUserById(userid: any) {
    return this.http.get<{ payload: string }>(`${this.API}/user/${userid}/getUserById`).pipe(
      map((res: any) => {
        const decrypted = this.crypto.decrypt(res.data);
        return {
          ...res,
          data: decrypted
        };
      })
    )
  }

  blockUser(id: any) {
    return this.http.get<{ payload: string }>(`${this.API}/${id}/blockUser`).pipe(
      map((res: any) => {
        const decrypted = this.crypto.decrypt(res.data);
        return {
          ...res,
          data: decrypted
        };
      })
    )
  }

  activateUser(id: any) {
    return this.http.get<{ payload: string }>(`${this.API}/${id}/activateUser`).pipe(
      map((res: any) => {
        const decrypted = this.crypto.decrypt(res.data);
        return {
          ...res,
          data: decrypted
        };
      })
    )
  }

  getUserWallet(userid: string) {
    return this.http.get<{ success: boolean; data: any }>(`${this.API}/user/${userid}/wallet`).pipe(
      map((res: any) => {
        const decrypted = this.crypto.decrypt(res.data);
        return {
          ...res,
          data: (decrypted || {
            balance: 0,
            bonusBalance: 0,
            totalUsableBalance: 0,
            currency: 'INR',
            transactions: []
          }) as UserWalletData
        };
      })
    );
  }

  creditUserWallet(userid: string, payload: { amount: number; bonusAmount?: number; reason: string; referenceId?: string }) {
    return this.http.post<{ success: boolean; message: string; data: any }>(`${this.API}/user/${userid}/wallet/credit`, payload).pipe(
      map((res: any) => {
        const decrypted = this.crypto.decrypt(res.data);
        return {
          ...res,
          data: decrypted as UserWalletData
        };
      })
    );
  }

}

export interface WalletTransaction {
  id: string;
  amount: number;
  bonus_amount: number;
  transaction_type: 'credit' | 'debit';
  reason: string;
  reference_id?: string;
  created_at: string;
}

export interface UserWalletData {
  balance: number;
  bonusBalance: number;
  totalUsableBalance: number;
  currency: string;
  transactions: WalletTransaction[];
}
