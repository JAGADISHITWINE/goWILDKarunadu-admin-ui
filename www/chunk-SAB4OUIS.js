import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-KQE4QDNK.js";

// src/app/core/services/notification.service.ts
var _NotificationService = class _NotificationService {
  constructor() {
    this.toastEl = null;
    this.hideTimer = null;
  }
  show(message, duration = 3e3) {
    try {
      this.toastEl?.remove();
      if (this.hideTimer)
        clearTimeout(this.hideTimer);
      const el = document.createElement("div");
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
      requestAnimationFrame(() => {
        el.style.opacity = "1";
      });
      this.hideTimer = setTimeout(() => {
        el.style.opacity = "0";
        setTimeout(() => {
          el.remove();
          this.toastEl = null;
        }, 300);
      }, duration);
    } catch (e) {
    }
  }
};
_NotificationService.\u0275fac = function NotificationService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NotificationService)();
};
_NotificationService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotificationService, factory: _NotificationService.\u0275fac, providedIn: "root" });
var NotificationService = _NotificationService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  NotificationService
};
//# sourceMappingURL=chunk-SAB4OUIS.js.map
