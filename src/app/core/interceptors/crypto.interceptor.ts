import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EncryptionService } from '../../services/encryption.service';

@Injectable()
export class CryptoInterceptor implements HttpInterceptor {
  constructor(private crypto: EncryptionService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const isEnabled = (environment as any).enablePayloadEncryption !== false &&
      (window as any)?.__env?.ENABLE_PAYLOAD_ENCRYPTION !== false;
    if (!isEnabled || this.isExcluded(req)) {
      return next.handle(req);
    }

    const request = this.encryptRequest(req);

    return next.handle(request).pipe(
      map((event) => {
        if (event instanceof HttpResponse) {
          try {
            const decryptedEvent = this.decryptResponse(event, request.responseType);
            return decryptedEvent;
          } catch (e) {
            return event;
          }
        }
        return event;
      }),
      catchError((err: unknown) => {
        if (err instanceof HttpErrorResponse) {
          return throwError(() => this.decryptError(err, request.responseType));
        }
        return throwError(() => err);
      })
    );
  }


  private isExcluded(req: HttpRequest<any>): boolean {
    if (req.headers.has('X-Skip-Encryption')) {
      return true;
    }

    const url = req.url || '';

    // Ignore asset / static / i18n requests
    if (url.includes('/assets/') || url.endsWith('.json') || url.endsWith('.svg') || url.endsWith('.png')) {
      return true;
    }

    // Ignore external third-party calls (e.g., AWS, Cloudinary, Razorpay, Google)
    if (url.startsWith('http://') || url.startsWith('https://')) {
      const baseUrl = environment.baseUrl || '';
      const contentBaseUrl = (environment as any).contentBaseUrl || '';
      const mediaBaseUrl = (environment as any).mediaBaseUrl || '';
      const isInternal =
        (baseUrl && url.startsWith(baseUrl)) ||
        (contentBaseUrl && url.startsWith(contentBaseUrl)) ||
        (mediaBaseUrl && url.startsWith(mediaBaseUrl)) ||
        (typeof window !== 'undefined' && window.location && url.startsWith(window.location.origin));
      if (!isInternal) {
        return true;
      }
    }

    // Explicit excluded endpoints that must stay unencrypted
    if (
      url.endsWith('/health') ||
      url.includes('/uploads/') ||
      url.includes('/export') ||
      url.includes('/download')
    ) {
      return true;
    }

    return false;
  }

  private encryptRequest(req: HttpRequest<any>): HttpRequest<any> {
    const body = req.body;

    if (!body) {
      return req;
    }

    if (this.isExcluded(req)) {
      return req;
    }

    if (
      body instanceof FormData ||
      body instanceof Blob ||
      body instanceof ArrayBuffer ||
      (typeof Uint8Array !== 'undefined' && body instanceof Uint8Array)
    ) {
      return req;
    }

    if (typeof body === 'object' && body !== null && 'encryptedPayload' in body) {
      return req;
    }

    const encryptedPayload = this.crypto.encrypt(body);
    return req.clone({
      body: { encryptedPayload },
      headers: req.headers.set('X-Payload-Encrypted', 'true')
    });
  }

  private decryptResponse<T>(event: HttpResponse<T>, responseType: string): HttpResponse<T> {
    if (responseType !== 'json' || !event.body || typeof event.body !== 'object') {
      return event;
    }

    const body = event.body as Record<string, any>;

    // Case 1: Transparent envelope { encryptedPayload: '...' }
    if ('encryptedPayload' in body && typeof body['encryptedPayload'] === 'string') {
      const decrypted = this.crypto.decrypt(body['encryptedPayload']);
      if (decrypted !== null) {
        return event.clone({ body: decrypted as T });
      }
    }

    // Case 2: Legacy controller envelope { data: '<ciphertext>', ... }
    if ('data' in body && typeof body['data'] === 'string' && body['data'].startsWith('U2FsdGVkX1')) {
      const decrypted = this.crypto.decrypt(body['data']);
      if (decrypted !== null) {
        return event.clone({
          body: {
            ...body,
            data: decrypted,
          } as T,
        });
      }
    }

    return event;
  }

  private decryptError(err: HttpErrorResponse, responseType: string): HttpErrorResponse {
    if (responseType !== 'json') {
      return err;
    }

    const errorBody = err.error;
    if (!errorBody || typeof errorBody !== 'object') {
      return err;
    }

    if ('encryptedPayload' in errorBody && typeof errorBody['encryptedPayload'] === 'string') {
      const decrypted = this.crypto.decrypt(errorBody['encryptedPayload']);
      return new HttpErrorResponse({
        error: decrypted,
        headers: err.headers,
        status: err.status,
        statusText: err.statusText,
        url: err.url || undefined,
      });
    }

    if ('data' in errorBody && typeof errorBody['data'] === 'string' && errorBody['data'].startsWith('U2FsdGVkX1')) {
      const decrypted = this.crypto.decrypt(errorBody['data']);
      return new HttpErrorResponse({
        error: {
          ...(errorBody as Record<string, any>),
          data: decrypted,
        },
        headers: err.headers,
        status: err.status,
        statusText: err.statusText,
        url: err.url || undefined,
      });
    }

    return err;
  }
}
