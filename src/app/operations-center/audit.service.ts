import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EncryptionService } from '../services/encryption.service';

@Injectable({
  providedIn: 'root',
})
export class AuditService {
  private API = environment.baseUrl;

  constructor(private http: HttpClient, private crypto: EncryptionService) {}

  getAuditLogs(limit = 25) {
    return this.http.get(`${this.API}/audit-logs`, {
      params: { limit: String(limit) }
    }).pipe(
      map((res: any) => {
        const encrypted = typeof res?.data === 'string'
          ? res.data
          : (typeof res?.payload === 'string' ? res.payload : null);

        if (encrypted) {
          const decrypted = this.crypto.decrypt(encrypted);
          return {
            ...res,
            data: decrypted
          };
        }

        return res;
      })
    );
  }
}
