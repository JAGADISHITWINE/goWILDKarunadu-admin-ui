import {
  EncryptionService,
  HttpClient,
  Injectable,
  environment,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-KQE4QDNK.js";

// src/app/reviews/reviews.ts
var _Reviews = class _Reviews {
  constructor(http, crypto) {
    this.http = http;
    this.crypto = crypto;
    this.API = `${environment.baseUrl}`;
  }
  getAllReviews() {
    return this.http.get(`${this.API}/reviews`);
  }
  updateReviewStatus(id, status) {
    return this.http.patch(`${this.API}/reviews/${id}/status`, { status });
  }
  replyToReview(id, reply) {
    return this.http.post(`${this.API}/reviews/${id}/reply`, { reply });
  }
};
_Reviews.\u0275fac = function Reviews_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Reviews)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(EncryptionService));
};
_Reviews.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _Reviews, factory: _Reviews.\u0275fac, providedIn: "root" });
var Reviews = _Reviews;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Reviews, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: EncryptionService }], null);
})();

export {
  Reviews
};
//# sourceMappingURL=chunk-UANI3GZQ.js.map
