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

// src/app/bookings/bookings.ts
var _Bookings = class _Bookings {
  constructor(http, crypto) {
    this.http = http;
    this.crypto = crypto;
    this.API = environment.baseUrl;
  }
  getBookingData() {
    return this.http.get(`${this.API}/bookingData`).pipe(map((res) => {
      const decrypted = this.crypto.decrypt(res.data);
      return __spreadProps(__spreadValues({}, res), {
        data: decrypted
      });
    }));
  }
  processRefund(bookingId, payload) {
    return this.http.post(`${this.API}/bookings/${bookingId}/refund`, payload);
  }
  updateBookingPayment(bookingId, payload) {
    return this.http.put(`${this.API}/bookings/${bookingId}/payment`, payload);
  }
  getPaymentMethods() {
    return this.http.get(`${this.API}/payments/methods`);
  }
  listRefunds() {
    return this.http.get(`${this.API}/payments/refunds`);
  }
  reconcilePayments() {
    return this.http.get(`${this.API}/payments/reconcile`);
  }
  getBookingParticipants(bookingId) {
    return this.http.get(`${this.API}/bookings/${bookingId}/participants`);
  }
  saveBookingParticipants(bookingId, participants) {
    return this.http.post(`${this.API}/bookings/${bookingId}/participants`, { participants });
  }
  recordCheckin(payload) {
    return this.http.post(`${this.API}/operations/checkin`, payload);
  }
  listGearInventory() {
    return this.http.get(`${this.API}/operations/gear`);
  }
  upsertGearItem(payload) {
    return this.http.post(`${this.API}/operations/gear`, payload);
  }
  getBatchPnl(batchId) {
    return this.http.get(`${this.API}/operations/batches/${batchId}/pnl`);
  }
  addBatchExpense(batchId, payload) {
    return this.http.post(`${this.API}/operations/batches/${batchId}/expenses`, payload);
  }
  broadcastTrailAdvisory(payload) {
    return this.http.post(`${this.API}/operations/broadcast/advisory`, payload);
  }
  collectRemainderPayment(payload) {
    return this.http.post(`${this.API}/operations/collect-remainder`, payload);
  }
  getForestRoyaltyLedger() {
    return this.http.get(`${this.API}/operations/royalty-ledger`);
  }
  dispatchJourneyNotification(payload) {
    return this.http.post(`${this.API}/operations/journey/dispatch`, payload);
  }
};
_Bookings.\u0275fac = function Bookings_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Bookings)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(EncryptionService));
};
_Bookings.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _Bookings, factory: _Bookings.\u0275fac, providedIn: "root" });
var Bookings = _Bookings;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Bookings, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: EncryptionService }], null);
})();

export {
  Bookings
};
//# sourceMappingURL=chunk-LO3D7BUV.js.map
