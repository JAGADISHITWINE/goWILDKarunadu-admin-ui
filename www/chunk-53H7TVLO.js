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

// src/app/trek-batch-management/trek-batch-management.ts
var _TrekBatchManagement = class _TrekBatchManagement {
  constructor(http, crypto) {
    this.http = http;
    this.crypto = crypto;
    this.API = `${environment.baseUrl}`;
  }
  getTreks() {
    return this.http.get(`${this.API}/treks`).pipe(map((res) => {
      const decrypted = this.crypto.decrypt(res.data);
      return __spreadProps(__spreadValues({}, res), {
        data: decrypted
      });
    }));
  }
  getBatches(trekId) {
    return this.http.get(`${this.API}/treks/${trekId}/batches`).pipe(map((res) => {
      const decrypted = this.crypto.decrypt(res.data);
      return __spreadProps(__spreadValues({}, res), {
        data: decrypted
      });
    }));
  }
  getBatchBookings(batchId) {
    return this.http.get(`${this.API}/batches/${batchId}/bookings`).pipe(map((res) => {
      if (res?.data && typeof res.data === "string") {
        const decrypted = this.crypto.decrypt(res.data);
        return __spreadProps(__spreadValues({}, res), {
          data: decrypted
        });
      }
      return res;
    }));
  }
  stopBooking(batchId) {
    return this.http.patch(`${this.API}/batches/${batchId}/stop-booking`, {});
  }
  resumeBooking(batchId) {
    return this.http.patch(`${this.API}/batches/${batchId}/resume-booking`, {});
  }
  // Use authorized request to fetch the file as blob and trigger download client-side.
  exportBatchBookings(batchId) {
    this.downloadBatchBookings(batchId).subscribe((blob) => {
      this.triggerDownload(blob, "bookings.xlsx");
    });
  }
  exportAllTrekBookings(trekId) {
    this.downloadAllTrekBookings(trekId).subscribe((blob) => {
      this.triggerDownload(blob, "all_bookings.xlsx");
    });
  }
  downloadBatchBookings(batchId) {
    return this.http.get(`${this.API}/batches/${batchId}/export-bookings`, {
      responseType: "blob",
      withCredentials: true
    });
  }
  downloadAllTrekBookings(trekId) {
    return this.http.get(`${this.API}/treks/${trekId}/export-all-bookings`, {
      responseType: "blob",
      withCredentials: true
    });
  }
  triggerDownload(blob, fileName) {
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();
    window.URL.revokeObjectURL(url);
  }
  getCompletionStats() {
    return this.http.get(`${this.API}/bookings/completion-stats`);
  }
  markBatchCompleted(batchId) {
    return this.http.put(`${this.API}/batches/${batchId}/complete`, {});
  }
  runAutoCompleteSweep() {
    return this.http.post(`${this.API}/batches/auto-complete-sweep`, {});
  }
  getAutoCompleteStatus() {
    return this.http.get(`${this.API}/batches/auto-complete-status`);
  }
};
_TrekBatchManagement.\u0275fac = function TrekBatchManagement_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TrekBatchManagement)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(EncryptionService));
};
_TrekBatchManagement.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TrekBatchManagement, factory: _TrekBatchManagement.\u0275fac, providedIn: "root" });
var TrekBatchManagement = _TrekBatchManagement;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrekBatchManagement, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: EncryptionService }], null);
})();

export {
  TrekBatchManagement
};
//# sourceMappingURL=chunk-53H7TVLO.js.map
