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
import { EncryptionService } from '../../services/encryption.service';

@Injectable()
export class CryptoInterceptor implements HttpInterceptor {
  constructor(private crypto: EncryptionService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const request = this.encryptRequest(req);

    return next.handle(request).pipe(
      map((event) => {
        if (event instanceof HttpResponse) {
          return this.decryptResponse(event, request.responseType);
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

  private encryptRequest(req: HttpRequest<any>): HttpRequest<any> {
    const body = req.body;

    if (!body) {
      return req;
    }

    if (req.headers.has('X-Skip-Encryption')) {
      return req;
    }

    if (body instanceof FormData || body instanceof Blob || body instanceof ArrayBuffer) {
      return req;
    }

    if (typeof body === 'object' && body !== null && 'encryptedPayload' in body) {
      return req;
    }

    const encryptedPayload = this.crypto.encrypt(body);
    return req.clone({ body: { encryptedPayload } });
  }

  private decryptResponse<T>(event: HttpResponse<T>, responseType: string): HttpResponse<T> {
    if (responseType !== 'json' || !event.body || typeof event.body !== 'object') {
      return event;
    }

    const body = event.body as Record<string, any>;
    if (!('data' in body)) {
      return event;
    }

    const decrypted = this.crypto.decrypt(body['data']);
    if (decrypted === null) {
      return event;
    }

    return event.clone({
      body: {
        ...body,
        data: decrypted,
      } as T,
    });
  }

  private decryptError(err: HttpErrorResponse, responseType: string): HttpErrorResponse {
    if (responseType !== 'json') {
      return err;
    }

    const errorBody = err.error;
    if (!errorBody || typeof errorBody !== 'object' || !('data' in errorBody)) {
      return err;
    }

    const decrypted = this.crypto.decrypt((errorBody as Record<string, any>)['data']);
    if (decrypted === null) {
      return err;
    }

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
}
