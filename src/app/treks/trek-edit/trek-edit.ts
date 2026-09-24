import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { EncryptionService } from 'src/app/services/encryption.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TrekEdit {
  private API = `${environment.baseUrl}`;

  constructor(private http: HttpClient, private crypto: EncryptionService) { }

  private toTransportString(value: any): string {
    if (value === null || value === undefined) {
      return '';
    }

    if (typeof value === 'string') {
      return value;
    }

    if (typeof value === 'number' || typeof value === 'boolean' || typeof value === 'bigint') {
      return String(value);
    }

    if (value instanceof Date) {
      return value.toISOString();
    }

    if (Array.isArray(value) || typeof value === 'object') {
      return JSON.stringify(value);
    }

    return String(value);
  }

  editTrek(trekId: string) {
    return this.http.get<{ payload: string }>(`${this.API}/getTrekByIdToUpdate/${trekId}`).pipe(
      map((res: any) => {
        const decrypted = this.crypto.decrypt(res.data);
        return {
          ...res,
          data: decrypted
        };
      })
    )
  }

  updateTrek(trekId: string, payload: FormData) {
    const bodyData: Record<string, any> = {};
    const transport = new FormData();

    payload.forEach((value, key) => {
      if (value instanceof Blob) {
        transport.append(key, value);
        return;
      }

      bodyData[key] = this.toTransportString(value);
    });

    const encryptedPayload = this.crypto.encrypt(bodyData);
    transport.append('encryptedPayload', encryptedPayload);

    return this.http.post<any>(
      `${this.API}/treks/${trekId}`,
      transport
    ).pipe(
      map((res: any) => {
        const decrypted = this.crypto.decrypt(res.data);
        return {
          ...res,
          data: decrypted
        };
      })
    );
  }

}
