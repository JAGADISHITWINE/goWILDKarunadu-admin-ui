import {
  EncryptionService,
  HttpClient,
  Injectable,
  __spreadProps,
  __spreadValues,
  environment,
  map,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-KQE4QDNK.js";

// src/app/analytics/analytics.ts
var _Analytics = class _Analytics {
  constructor(http, crypto) {
    this.http = http;
    this.crypto = crypto;
    this.API = environment.baseUrl;
  }
  getRevenueData() {
    return this.http.get(`${this.API}/revenue`).pipe(map((res) => {
      const encrypted = typeof res?.data === "string" ? res.data : typeof res?.payload === "string" ? res.payload : null;
      if (encrypted) {
        const decrypted = this.crypto.decrypt(encrypted);
        return __spreadProps(__spreadValues({}, res), {
          data: decrypted
        });
      }
      return res;
    }));
  }
};
_Analytics.\u0275fac = function Analytics_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Analytics)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(EncryptionService));
};
_Analytics.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _Analytics, factory: _Analytics.\u0275fac, providedIn: "root" });
var Analytics = _Analytics;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Analytics, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: EncryptionService }], null);
})();

export {
  Analytics
};
//# sourceMappingURL=chunk-K2U6SD7G.js.map
