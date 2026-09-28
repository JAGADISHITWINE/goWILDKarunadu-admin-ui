import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private toastEl: HTMLDivElement | null = null;
  private hideTimer: any = null;

  show(message: string, duration = 3000) {
    try {
      // Remove any existing toast
      this.toastEl?.remove();
      if (this.hideTimer) clearTimeout(this.hideTimer);

      const el = document.createElement('div');
      el.textContent = message;
      el.style.cssText = `
        position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%);
        background: #1d1b18; color: #fff; padding: 12px 24px;
        border-radius: 8px; font-size: 14px; font-family: Manrope, sans-serif;
        z-index: 99999; box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        opacity: 0; transition: opacity 0.25s ease;
        max-width: 480px; text-align: center; pointer-events: none;
      `;
      document.body.appendChild(el);
      this.toastEl = el;

      // Animate in
      requestAnimationFrame(() => { el.style.opacity = '1'; });

      this.hideTimer = setTimeout(() => {
        el.style.opacity = '0';
        setTimeout(() => { el.remove(); this.toastEl = null; }, 300);
      }, duration);
    } catch (e) {
    }
  }
}
