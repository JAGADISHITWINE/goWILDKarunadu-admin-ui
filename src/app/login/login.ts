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
  constructor(private http: HttpClient, private authService: AuthService, private crypto: EncryptionService) { }
  private API = environment.baseUrl;

  auth(data: any) {
    const payload = {
      email: data.email,
      password: data.password
    };
    const encryptedPayload = this.crypto.encrypt(payload);

    return this.http.post<any>(`${this.API}/login`, { encryptedPayload }, { withCredentials: true })
      .pipe(
        map((res: any) => {
          const decrypted = this.crypto.decrypt(res.data);
          return decrypted;
        }),
        tap((res: any) => {
          this.authService.setUser(res.user);
          if (res.token) {
            sessionStorage.setItem('token', res.token);
          }
        })
      );
  }

}
