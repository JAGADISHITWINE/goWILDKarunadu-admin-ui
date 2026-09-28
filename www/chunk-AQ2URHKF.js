import {
  EncryptionService,
  HttpClient,
  Injectable,
  __spreadProps,
  __spreadValues,
  catchError,
  environment,
  finalize,
  map,
  of,
  setClassMetadata,
  shareReplay,
  throwError,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-KQE4QDNK.js";

// src/app/dashboard/dashboard.ts
var _Dashboard = class _Dashboard {
  constructor(http, crypto) {
    this.http = http;
    this.crypto = crypto;
    this.API = environment.baseUrl;
    this.cache = null;
    this.cacheAt = 0;
    this.cacheTtlMs = 2e4;
  }
  getDashData(force = false) {
    const now = Date.now();
    if (!force && this.cache && now - this.cacheAt < this.cacheTtlMs) {
      return of(this.cache);
    }
    if (!force && this.inFlight$) {
      return this.inFlight$;
    }
    this.inFlight$ = this.http.get(`${this.API}/dashData`).pipe(map((res) => {
      const encrypted = typeof res?.data === "string" ? res.data : typeof res?.payload === "string" ? res.payload : null;
      if (encrypted) {
        const decrypted = this.crypto.decrypt(encrypted);
        return __spreadProps(__spreadValues({}, res), {
          data: decrypted ?? {}
        });
      }
      return res;
    }), map((res) => __spreadProps(__spreadValues({}, res), {
      data: res?.data?.data || res?.data || {}
    })), map((res) => __spreadProps(__spreadValues({}, res), {
      success: res?.success ?? true
    })), map((res) => {
      this.cache = res;
      this.cacheAt = Date.now();
      return res;
    }), catchError((err) => {
      if (err?.status === 429 && this.cache) {
        return of(this.cache);
      }
      return throwError(() => err);
    }), finalize(() => {
      this.inFlight$ = void 0;
    }), shareReplay(1));
    return this.inFlight$;
  }
};
_Dashboard.\u0275fac = function Dashboard_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Dashboard)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(EncryptionService));
};
_Dashboard.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _Dashboard, factory: _Dashboard.\u0275fac, providedIn: "root" });
var Dashboard = _Dashboard;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dashboard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: EncryptionService }], null);
})();

export {
  Dashboard
};
//# sourceMappingURL=chunk-AQ2URHKF.js.map
