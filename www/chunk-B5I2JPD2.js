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

// src/app/treks/trek-list/trek-list.ts
var _TrekList = class _TrekList {
  constructor(http, crypto) {
    this.http = http;
    this.crypto = crypto;
    this.API = `${environment.baseUrl}`;
  }
  getAllTreks(forceRefresh = false) {
    const url = forceRefresh ? `${this.API}/getAllTreks?_t=${Date.now()}` : `${this.API}/getAllTreks`;
    return this.http.get(url).pipe(map((res) => {
      const decrypted = this.crypto.decrypt(res.data);
      return __spreadProps(__spreadValues({}, res), {
        data: decrypted
      });
    }));
  }
};
_TrekList.\u0275fac = function TrekList_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TrekList)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(EncryptionService));
};
_TrekList.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TrekList, factory: _TrekList.\u0275fac, providedIn: "root" });
var TrekList = _TrekList;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrekList, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: EncryptionService }], null);
})();

export {
  TrekList
};
//# sourceMappingURL=chunk-B5I2JPD2.js.map
