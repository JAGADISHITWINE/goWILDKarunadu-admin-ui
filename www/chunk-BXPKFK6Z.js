import {
  Injectable,
  environment,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-KQE4QDNK.js";

// src/app/core/media.service.ts
var _MediaService = class _MediaService {
  constructor() {
    this.imageBaseUrl = (environment.mediaBaseUrl || "").replace(/\/?$/, "/");
    this.fallbackImage = "assets/assets/logo.png";
  }
  resolve(src, cacheKey) {
    if (!src)
      return this.fallbackImage;
    const value = String(src);
    let resolved;
    if (/^(https?:)?\/\//i.test(value))
      resolved = value;
    else if (value.startsWith("data:") || value.startsWith("blob:"))
      resolved = value;
    else
      resolved = `${this.imageBaseUrl}${value.replace(/^\/+/, "")}`;
    const key = String(cacheKey || "").trim();
    if (!key)
      return resolved;
    return resolved.includes("?") ? `${resolved}&v=${encodeURIComponent(key)}` : `${resolved}?v=${encodeURIComponent(key)}`;
  }
};
_MediaService.\u0275fac = function MediaService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MediaService)();
};
_MediaService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MediaService, factory: _MediaService.\u0275fac, providedIn: "root" });
var MediaService = _MediaService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MediaService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  MediaService
};
//# sourceMappingURL=chunk-BXPKFK6Z.js.map
