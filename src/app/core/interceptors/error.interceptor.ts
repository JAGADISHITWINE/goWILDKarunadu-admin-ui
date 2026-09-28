import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NotificationService } from '../services/notification.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  // guard to prevent multiple session-expired modals from stacking
  private static sessionExpiredModalShown = false;

  constructor(
    private router: Router,
    private auth: AuthService,
    private notify: NotificationService,
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const url = (req.url || '').toLowerCase();
    const isAuthRoute = url.includes('/login') || url.includes('/logout') || url.includes('/forgot-password') || url.includes('/register');

    return next.handle(req).pipe(
      catchError((err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401 && !isAuthRoute) {
            const hadToken = !!(sessionStorage.getItem('token') || localStorage.getItem('token') || localStorage.getItem('authToken'));
            if (hadToken) {
              this.auth.clearSession();
              try { this.notify.show('Your session has expired. Please login again.'); } catch {}

              if (!ErrorInterceptor.sessionExpiredModalShown) {
                ErrorInterceptor.sessionExpiredModalShown = true;
                setTimeout(() => {
                  ErrorInterceptor.sessionExpiredModalShown = false;
                  try { this.router.navigate(['/login']); } catch { try { this.router.navigate(['']); } catch {} }
                }, 1500);
              }
            }
          }
        }
        return throwError(() => err);
      })
    );
  }
}
