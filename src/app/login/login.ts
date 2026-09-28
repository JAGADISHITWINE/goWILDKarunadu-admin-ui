import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../core/services/auth.service';
import { EncryptionService } from '../services/encryption.service';

@Injectable({
  providedIn: 'root',
})
export class Login {
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private crypto: EncryptionService
  ) {}

  private API = environment.baseUrl;

  auth(data: any) {
    const payload = {
      email: data.email?.trim(),
      password: data.password
    };
    const encryptedPayload = this.crypto.encrypt(payload);
    const endpoint = `${this.API}/login`;

    return this.http
      .post<any>(endpoint, { encryptedPayload }, { withCredentials: true })
      .pipe(
        map((res: any) => {
          if (res?.data && typeof res.data === 'string' && res.data.startsWith('U2FsdGVkX1')) {
            const decrypted = this.crypto.decrypt(res.data);
            return decrypted || res;
          }
          if (res?.encryptedPayload && typeof res.encryptedPayload === 'string') {
            const decrypted = this.crypto.decrypt(res.encryptedPayload);
            return decrypted || res;
          }
          if (res?.data && typeof res.data === 'object') {
            const mapped = {
              ...res,
              ...res.data,
              user: res.data.user || res.user
            };
            return mapped;
          }
          return res;
        }),
        tap((res: any) => {
          const user = res?.user || res?.data?.user;
          const token = res?.token || res?.data?.token;
          if (user) {
            this.authService.setUser(user);
          }
          if (token) {
            sessionStorage.setItem('token', token);
            localStorage.setItem('token', token);
          }
        })
      );
  }
}
