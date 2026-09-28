import {
  EncryptionService,
  HttpClient,
  Injectable,
  catchError,
  environment,
  map,
  of,
  setClassMetadata,
  shareReplay,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-KQE4QDNK.js";

// src/app/dropdown-manager/dropdown-manager.service.ts
var _DropdownManagerService = class _DropdownManagerService {
  constructor(http, crypto) {
    this.http = http;
    this.crypto = crypto;
    this.API = `${environment.baseUrl}/dropdowns`;
    this.groupsCache$ = null;
  }
  getGroups(force = false) {
    if (force || !this.groupsCache$) {
      this.groupsCache$ = this.http.get(this.API).pipe(map((res) => this.normalizeGroups(this.unwrap(res))), catchError(() => of([])), shareReplay(1));
    }
    return this.groupsCache$;
  }
  getManagementGroups() {
    return this.http.get(`${this.API}/manage`).pipe(map((res) => this.normalizeGroups(this.unwrap(res))), catchError(() => of([])));
  }
  getGroupOptions(groupKey, includeInactive = false) {
    return this.getGroups().pipe(map((groups) => {
      const group = groups.find((item) => item.groupKey === groupKey || item.key === groupKey);
      if (!group)
        return [];
      return includeInactive ? group.options : group.options.filter((option) => option.status === "active");
    }), catchError(() => of([])));
  }
  createGroup(payload) {
    return this.http.post(`${this.API}/groups`, payload);
  }
  updateGroup(id, payload) {
    return this.http.put(`${this.API}/groups/${encodeURIComponent(id)}`, payload);
  }
  deleteGroup(id) {
    return this.http.delete(`${this.API}/groups/${encodeURIComponent(id)}`);
  }
  createOption(payload) {
    return this.http.post(`${this.API}/options`, payload);
  }
  updateOption(id, payload) {
    return this.http.put(`${this.API}/options/${encodeURIComponent(id)}`, payload);
  }
  setOptionStatus(groupId, optionId, status) {
    return this.updateOption(optionId, { groupId, status });
  }
  deleteOption(id) {
    return this.http.delete(`${this.API}/options/${encodeURIComponent(id)}`);
  }
  unwrap(response) {
    const raw = response?.data ?? response;
    const decrypted = this.crypto.decrypt(raw);
    return decrypted ?? raw;
  }
  normalizeGroups(input) {
    const rows = Array.isArray(input) ? input : Array.isArray(input?.groups) ? input.groups : [];
    if (!Array.isArray(rows))
      return [];
    return rows.map((group) => ({
      id: String(group.id || group.groupId || "").trim(),
      key: String(group.key || group.groupKey || "").trim(),
      groupKey: String(group.groupKey || group.key || "").trim(),
      label: String(group.label || "").trim(),
      page: String(group.page || "General").trim(),
      status: String(group.status || "active").trim().toLowerCase() === "inactive" ? "inactive" : "active",
      sortOrder: Number(group.sortOrder ?? group.sort_order ?? 0),
      options: Array.isArray(group.options) ? group.options.map((option) => ({
        id: String(option.id || "").trim(),
        label: String(option.label || "").trim(),
        value: String(option.value || option.option_value || "").trim(),
        status: String(option.status || "active").trim().toLowerCase() === "inactive" ? "inactive" : "active",
        sortOrder: Number(option.sortOrder ?? option.sort_order ?? 0),
        createdAt: option.createdAt || option.created_at || null,
        updatedAt: option.updatedAt || option.updated_at || null
      })) : [],
      createdAt: group.createdAt || group.created_at || null,
      updatedAt: group.updatedAt || group.updated_at || null
    })).filter((group) => Boolean(group.id || group.key || group.groupKey));
  }
};
_DropdownManagerService.\u0275fac = function DropdownManagerService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DropdownManagerService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(EncryptionService));
};
_DropdownManagerService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DropdownManagerService, factory: _DropdownManagerService.\u0275fac, providedIn: "root" });
var DropdownManagerService = _DropdownManagerService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownManagerService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: EncryptionService }], null);
})();

export {
  DropdownManagerService
};
//# sourceMappingURL=chunk-2AIND2RX.js.map
