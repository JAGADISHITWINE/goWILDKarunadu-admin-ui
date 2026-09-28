import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class MediaService {
  private readonly imageBaseUrl = (environment.mediaBaseUrl || '').replace(/\/?$/, '/');
  readonly fallbackImage = 'assets/assets/logo.png';

  resolve(src: string | null | undefined, cacheKey?: string | number | null): string {
    if (!src) return this.fallbackImage;
    const value = String(src);
    let resolved: string;
    if (/^(https?:)?\/\//i.test(value)) resolved = value;
    else if (value.startsWith('data:') || value.startsWith('blob:')) resolved = value;
    else resolved = `${this.imageBaseUrl}${value.replace(/^\/+/, '')}`;

    const key = String(cacheKey || '').trim();
    if (!key) return resolved;
    return resolved.includes('?') ? `${resolved}&v=${encodeURIComponent(key)}` : `${resolved}?v=${encodeURIComponent(key)}`;
  }
}
