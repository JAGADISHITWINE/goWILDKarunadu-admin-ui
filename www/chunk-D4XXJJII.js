import {
  Injectable,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-KQE4QDNK.js";

// src/app/core/services/auth.service.ts
var _AuthService = class _AuthService {
  constructor() {
    this.USER_KEY = "currentUser";
    this.TOKEN_KEY = "token";
    this.defaultRouteOrder = [
      { permission: "dashboard.view", route: "/admin/dashboard" },
      { permission: "bookings.view", route: "/admin/bookings" },
      { permission: "treks.view", route: "/admin/treks/list" },
      { permission: "operations.view", route: "/admin/operations" },
      { permission: "referrals.manage", route: "/admin/referrals" },
      { permission: "users.view", route: "/admin/users" },
      { permission: "reviews.view", route: "/admin/reviews" },
      { permission: "blog.manage", route: "/admin/content-pages" },
      { permission: "blog.view", route: "/admin/blog/posts" },
      { permission: "dropdowns.manage", route: "/admin/dropdowns" },
      { permission: "finance.view", route: "/admin/revenue" },
      { permission: "notifications.view", route: "/admin/notifications" }
    ];
    this.cachedUser = null;
  }
  setUser(user) {
    if (!user)
      return;
    const normalized = __spreadProps(__spreadValues({}, user), {
      permissions: Array.isArray(user.permissions) ? user.permissions : []
    });
    this.cachedUser = normalized;
    const json = JSON.stringify(normalized);
    try {
      sessionStorage.setItem(this.USER_KEY, json);
      localStorage.setItem(this.USER_KEY, json);
    } catch {
    }
  }
  getUser() {
    if (this.cachedUser) {
      return this.cachedUser;
    }
    let raw = null;
    try {
      raw = sessionStorage.getItem(this.USER_KEY) || localStorage.getItem(this.USER_KEY);
    } catch {
    }
    if (!raw)
      return null;
    try {
      const parsed = JSON.parse(raw);
      this.cachedUser = __spreadProps(__spreadValues({}, parsed), {
        permissions: Array.isArray(parsed?.permissions) ? parsed.permissions : []
      });
      return this.cachedUser;
    } catch {
      return null;
    }
  }
  clearUser() {
    this.cachedUser = null;
    try {
      sessionStorage.removeItem(this.USER_KEY);
      localStorage.removeItem(this.USER_KEY);
    } catch {
    }
  }
  clearSession() {
    this.clearUser();
    try {
      sessionStorage.removeItem(this.TOKEN_KEY);
      localStorage.removeItem(this.TOKEN_KEY);
      localStorage.removeItem("authToken");
    } catch {
    }
  }
  isAuthenticated() {
    const user = this.getUser();
    let token = null;
    try {
      token = sessionStorage.getItem(this.TOKEN_KEY) || localStorage.getItem(this.TOKEN_KEY) || localStorage.getItem("authToken");
    } catch {
    }
    return !!user && !!token;
  }
  hasPermission(permission) {
    if (!permission)
      return true;
    const user = this.getUser();
    if (!user)
      return false;
    const permissions = user.permissions || [];
    if (permissions.includes(permission))
      return true;
    const role = String(user.role || user.roleName || "").toLowerCase().trim();
    if (role === "super_admin" || role === "superadmin" || role === "admin" || role === "administrator") {
      return true;
    }
    return false;
  }
  getDefaultAuthorizedRoute() {
    const user = this.getUser();
    if (!user)
      return "/";
    for (const candidate of this.defaultRouteOrder) {
      if (this.hasPermission(candidate.permission)) {
        return candidate.route;
      }
    }
    return "/admin/dashboard";
  }
  getDefaultAuthorizedUrlTree(router) {
    return router.parseUrl(this.getDefaultAuthorizedRoute());
  }
};
_AuthService.\u0275fac = function AuthService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AuthService)();
};
_AuthService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
var AuthService = _AuthService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  AuthService
};
//# sourceMappingURL=chunk-D4XXJJII.js.map
