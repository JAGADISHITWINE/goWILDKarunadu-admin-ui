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

// src/app/users/users.ts
var _Users = class _Users {
  constructor(http, crypto) {
    this.http = http;
    this.crypto = crypto;
    this.API = environment.baseUrl;
  }
  getAllUsers() {
    return this.http.get(`${this.API}/getUsers`).pipe(map((res) => {
      const decrypted = this.crypto.decrypt(res.data);
      return __spreadProps(__spreadValues({}, res), {
        data: decrypted
      });
    }));
  }
  getUserById(userid) {
    return this.http.get(`${this.API}/user/${userid}/getUserById`).pipe(map((res) => {
      const decrypted = this.crypto.decrypt(res.data);
      return __spreadProps(__spreadValues({}, res), {
        data: decrypted
      });
    }));
  }
  blockUser(id) {
    return this.http.get(`${this.API}/${id}/blockUser`).pipe(map((res) => {
      const decrypted = this.crypto.decrypt(res.data);
      return __spreadProps(__spreadValues({}, res), {
        data: decrypted
      });
    }));
  }
  activateUser(id) {
    return this.http.get(`${this.API}/${id}/activateUser`).pipe(map((res) => {
      const decrypted = this.crypto.decrypt(res.data);
      return __spreadProps(__spreadValues({}, res), {
        data: decrypted
      });
    }));
  }
};
_Users.\u0275fac = function Users_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Users)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(EncryptionService));
};
_Users.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _Users, factory: _Users.\u0275fac, providedIn: "root" });
var Users = _Users;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Users, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: EncryptionService }], null);
})();

export {
  Users
};
//# sourceMappingURL=chunk-VISOL5UA.js.map
