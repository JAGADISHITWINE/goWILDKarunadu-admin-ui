import {
  NotificationService
} from "./chunk-SAB4OUIS.js";
import {
  AuthService
} from "./chunk-D4XXJJII.js";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  EncryptionService,
  HTTP_INTERCEPTORS,
  HttpErrorResponse,
  HttpResponse,
  Injectable,
  PreloadAllModules,
  Router,
  RouterOutlet,
  __spreadProps,
  __spreadValues,
  bootstrapApplication,
  catchError,
  environment,
  map,
  provideBrowserGlobalErrorListeners,
  provideHttpClient,
  provideRouter,
  provideZoneChangeDetection,
  setClassMetadata,
  throwError,
  withInterceptorsFromDi,
  withPreloading,
  withRouterConfig,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject
} from "./chunk-KQE4QDNK.js";

// src/app/app.component.ts
var _AppComponent = class _AppComponent {
  constructor() {
  }
  ngOnInit() {
  }
  ngOnDestroy() {
  }
};
_AppComponent.\u0275fac = function AppComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppComponent)();
};
_AppComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "app-root"]], template: function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "router-outlet");
    \u0275\u0275elementEnd();
  }
}, dependencies: [RouterOutlet], encapsulation: 2 });
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", standalone: true, imports: [RouterOutlet], schemas: [CUSTOM_ELEMENTS_SCHEMA], template: '<div class="app-root">\n  <router-outlet></router-outlet>\n</div>\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 11 });
})();

// src/app/core/guards/auth-guard.ts
var _AuthGuard = class _AuthGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate(next, _state) {
    const isAuth = this.authService.isAuthenticated();
    if (!isAuth) {
      return this.router.parseUrl("/");
    }
    const requiredPermission = next.data?.["permission"];
    if (requiredPermission && !this.authService.hasPermission(requiredPermission)) {
      return this.authService.getDefaultAuthorizedUrlTree(this.router);
    }
    return true;
  }
  forceLogout() {
    this.authService.clearSession();
    this.router.navigate([""]);
  }
};
_AuthGuard.\u0275fac = function AuthGuard_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AuthGuard)(\u0275\u0275inject(AuthService), \u0275\u0275inject(Router));
};
_AuthGuard.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthGuard, factory: _AuthGuard.\u0275fac, providedIn: "root" });
var AuthGuard = _AuthGuard;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthGuard, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: AuthService }, { type: Router }], null);
})();

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    loadChildren: () => import("./login-module-ITA3YP4O.js").then((m) => m.LoginModule)
  },
  {
    path: "login",
    loadChildren: () => import("./login-module-ITA3YP4O.js").then((m) => m.LoginModule)
  },
  {
    path: "admin",
    pathMatch: "full",
    redirectTo: "admin/dashboard"
  },
  {
    path: "admin/dashboard",
    canActivate: [AuthGuard],
    data: { permission: "dashboard.view" },
    loadChildren: () => import("./dashboard-module-67XML4P4.js").then((m) => m.DashboardModule)
  },
  {
    path: "admin/treks/list",
    canActivate: [AuthGuard],
    data: { permission: "treks.view" },
    loadChildren: () => import("./trek-list-module-5XQP4UCY.js").then((m) => m.TrekListModule)
  },
  {
    path: "admin/treks/add",
    canActivate: [AuthGuard],
    data: { permission: "treks.manage" },
    loadChildren: () => import("./trek-add-module-CO7ZCUOQ.js").then((m) => m.TrekAddModule)
  },
  {
    path: "admin/treks/edit",
    canActivate: [AuthGuard],
    data: { permission: "treks.manage" },
    loadChildren: () => import("./trek-edit-module-YVDOYRDM.js").then((m) => m.TrekEditModule)
  },
  {
    path: "admin/bookings",
    canActivate: [AuthGuard],
    data: { permission: "bookings.view" },
    loadChildren: () => import("./bookings-module-OBIMQ5IN.js").then((m) => m.BookingsModule)
  },
  {
    path: "admin/users",
    canActivate: [AuthGuard],
    data: { permission: "users.view" },
    loadChildren: () => import("./users-module-V4KSDH4H.js").then((m) => m.UsersModule)
  },
  {
    path: "admin/reviews",
    canActivate: [AuthGuard],
    data: { permission: "reviews.view" },
    loadChildren: () => import("./reviews-module-YBBBNEVL.js").then((m) => m.ReviewsModule)
  },
  {
    path: "admin/blog/posts",
    canActivate: [AuthGuard],
    data: { permission: "blog.view" },
    loadChildren: () => import("./posts-list-module-ZB2NZDQT.js").then((m) => m.PostsListModule)
  },
  {
    path: "admin/blog/editor",
    canActivate: [AuthGuard],
    data: { permission: "blog.manage" },
    loadChildren: () => import("./post-editor-module-WIW5SRQX.js").then((m) => m.PostEditorModule)
  },
  {
    path: "admin/content-pages",
    canActivate: [AuthGuard],
    data: { permission: "blog.manage" },
    loadChildren: () => import("./static-pages-module-2P2NCABD.js").then((m) => m.StaticPagesModule)
  },
  {
    path: "admin/revenue",
    canActivate: [AuthGuard],
    data: { permission: "finance.view" },
    loadChildren: () => import("./analytics-module-3XVTWS4N.js").then((m) => m.AnalyticsModule)
  },
  {
    path: "admin/trek-details",
    canActivate: [AuthGuard],
    data: { permission: "treks.view" },
    loadChildren: () => import("./tour-details-module-CHW77DB6.js").then((m) => m.TourDetailsModule)
  },
  {
    path: "admin/batch-management",
    canActivate: [AuthGuard],
    data: { permission: "bookings.manage" },
    loadChildren: () => import("./trek-batch-management-module-6ADJR6PX.js").then((m) => m.TrekBatchManagementModule)
  },
  {
    path: "admin/operations",
    canActivate: [AuthGuard],
    data: { permission: "operations.view" },
    loadChildren: () => import("./operations-center-module-H332XHWW.js").then((m) => m.OperationsCenterModule)
  },
  {
    path: "admin/notifications",
    canActivate: [AuthGuard],
    data: { permission: "notifications.view" },
    loadChildren: () => import("./notifications.module-G77FNCJX.js").then((m) => m.NotificationsModule)
  },
  {
    path: "admin/dropdowns",
    canActivate: [AuthGuard],
    data: { permission: "dropdowns.manage" },
    loadChildren: () => import("./dropdown-manager.module-JLYJCXE2.js").then((m) => m.DropdownManagerModule)
  },
  {
    path: "admin/categories",
    canActivate: [AuthGuard],
    data: { permission: "dropdowns.manage" },
    loadChildren: () => import("./category-manager.module-JPBF3LLU.js").then((m) => m.CategoryManagerModule)
  },
  {
    path: "admin/referrals",
    canActivate: [AuthGuard],
    data: { permission: "referrals.manage" },
    loadChildren: () => import("./referral-settings.module-KEBIRDHF.js").then((m) => m.ReferralSettingsModule)
  },
  {
    path: "admin/coupons",
    canActivate: [AuthGuard],
    data: { permission: "treks.manage" },
    loadChildren: () => import("./coupon-manager.module-2TYX4QAA.js").then((m) => m.CouponManagerModule)
  },
  {
    path: "admin/settings",
    canActivate: [AuthGuard],
    data: { permission: "dashboard.view" },
    loadChildren: () => import("./settings.module-HZBBJQUD.js").then((m) => m.SettingsModule)
  },
  {
    path: "**",
    redirectTo: ""
  }
];

// src/app/core/interceptors/auth.interceptor.ts
var _AuthInterceptor = class _AuthInterceptor {
  constructor(auth) {
    this.auth = auth;
  }
  intercept(req, next) {
    let cloned = req.clone({ withCredentials: true });
    const token = sessionStorage.getItem("token") || localStorage.getItem("token") || sessionStorage.getItem("authToken") || localStorage.getItem("authToken");
    if (token) {
      cloned = cloned.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(cloned);
  }
};
_AuthInterceptor.\u0275fac = function AuthInterceptor_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AuthInterceptor)(\u0275\u0275inject(AuthService));
};
_AuthInterceptor.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthInterceptor, factory: _AuthInterceptor.\u0275fac });
var AuthInterceptor = _AuthInterceptor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthInterceptor, [{
    type: Injectable
  }], () => [{ type: AuthService }], null);
})();

// src/app/core/interceptors/error.interceptor.ts
var _ErrorInterceptor = class _ErrorInterceptor {
  constructor(router, auth, notify) {
    this.router = router;
    this.auth = auth;
    this.notify = notify;
  }
  intercept(req, next) {
    const url = (req.url || "").toLowerCase();
    const isAuthRoute = url.includes("/login") || url.includes("/logout") || url.includes("/forgot-password") || url.includes("/register");
    return next.handle(req).pipe(catchError((err) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401 && !isAuthRoute) {
          const hadToken = !!(sessionStorage.getItem("token") || localStorage.getItem("token") || localStorage.getItem("authToken"));
          if (hadToken) {
            this.auth.clearSession();
            try {
              this.notify.show("Your session has expired. Please login again.");
            } catch {
            }
            if (!_ErrorInterceptor.sessionExpiredModalShown) {
              _ErrorInterceptor.sessionExpiredModalShown = true;
              setTimeout(() => {
                _ErrorInterceptor.sessionExpiredModalShown = false;
                try {
                  this.router.navigate(["/login"]);
                } catch {
                  try {
                    this.router.navigate([""]);
                  } catch {
                  }
                }
              }, 1500);
            }
          }
        }
      }
      return throwError(() => err);
    }));
  }
};
_ErrorInterceptor.sessionExpiredModalShown = false;
_ErrorInterceptor.\u0275fac = function ErrorInterceptor_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ErrorInterceptor)(\u0275\u0275inject(Router), \u0275\u0275inject(AuthService), \u0275\u0275inject(NotificationService));
};
_ErrorInterceptor.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ErrorInterceptor, factory: _ErrorInterceptor.\u0275fac });
var ErrorInterceptor = _ErrorInterceptor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ErrorInterceptor, [{
    type: Injectable
  }], () => [{ type: Router }, { type: AuthService }, { type: NotificationService }], null);
})();

// src/app/core/interceptors/crypto.interceptor.ts
var _CryptoInterceptor = class _CryptoInterceptor {
  constructor(crypto) {
    this.crypto = crypto;
  }
  intercept(req, next) {
    const isEnabled = environment.enablePayloadEncryption !== false && window?.__env?.ENABLE_PAYLOAD_ENCRYPTION !== false;
    if (!isEnabled || this.isExcluded(req)) {
      return next.handle(req);
    }
    const request = this.encryptRequest(req);
    return next.handle(request).pipe(map((event) => {
      if (event instanceof HttpResponse) {
        try {
          const decryptedEvent = this.decryptResponse(event, request.responseType);
          return decryptedEvent;
        } catch (e) {
          return event;
        }
      }
      return event;
    }), catchError((err) => {
      if (err instanceof HttpErrorResponse) {
        return throwError(() => this.decryptError(err, request.responseType));
      }
      return throwError(() => err);
    }));
  }
  isExcluded(req) {
    if (req.headers.has("X-Skip-Encryption")) {
      return true;
    }
    const url = req.url || "";
    if (url.includes("/assets/") || url.endsWith(".json") || url.endsWith(".svg") || url.endsWith(".png")) {
      return true;
    }
    if (url.startsWith("http://") || url.startsWith("https://")) {
      const baseUrl = environment.baseUrl || "";
      const contentBaseUrl = environment.contentBaseUrl || "";
      const mediaBaseUrl = environment.mediaBaseUrl || "";
      const isInternal = baseUrl && url.startsWith(baseUrl) || contentBaseUrl && url.startsWith(contentBaseUrl) || mediaBaseUrl && url.startsWith(mediaBaseUrl) || typeof window !== "undefined" && window.location && url.startsWith(window.location.origin);
      if (!isInternal) {
        return true;
      }
    }
    if (url.endsWith("/health") || url.includes("/uploads/") || url.includes("/export") || url.includes("/download")) {
      return true;
    }
    return false;
  }
  encryptRequest(req) {
    const body = req.body;
    if (!body) {
      return req;
    }
    if (this.isExcluded(req)) {
      return req;
    }
    if (body instanceof FormData || body instanceof Blob || body instanceof ArrayBuffer || typeof Uint8Array !== "undefined" && body instanceof Uint8Array) {
      return req;
    }
    if (typeof body === "object" && body !== null && "encryptedPayload" in body) {
      return req;
    }
    const encryptedPayload = this.crypto.encrypt(body);
    return req.clone({
      body: { encryptedPayload },
      headers: req.headers.set("X-Payload-Encrypted", "true")
    });
  }
  decryptResponse(event, responseType) {
    if (responseType !== "json" || !event.body || typeof event.body !== "object") {
      return event;
    }
    const body = event.body;
    if ("encryptedPayload" in body && typeof body["encryptedPayload"] === "string") {
      const decrypted = this.crypto.decrypt(body["encryptedPayload"]);
      if (decrypted !== null) {
        return event.clone({ body: decrypted });
      }
    }
    if ("data" in body && typeof body["data"] === "string" && body["data"].startsWith("U2FsdGVkX1")) {
      const decrypted = this.crypto.decrypt(body["data"]);
      if (decrypted !== null) {
        return event.clone({
          body: __spreadProps(__spreadValues({}, body), {
            data: decrypted
          })
        });
      }
    }
    return event;
  }
  decryptError(err, responseType) {
    if (responseType !== "json") {
      return err;
    }
    const errorBody = err.error;
    if (!errorBody || typeof errorBody !== "object") {
      return err;
    }
    if ("encryptedPayload" in errorBody && typeof errorBody["encryptedPayload"] === "string") {
      const decrypted = this.crypto.decrypt(errorBody["encryptedPayload"]);
      return new HttpErrorResponse({
        error: decrypted,
        headers: err.headers,
        status: err.status,
        statusText: err.statusText,
        url: err.url || void 0
      });
    }
    if ("data" in errorBody && typeof errorBody["data"] === "string" && errorBody["data"].startsWith("U2FsdGVkX1")) {
      const decrypted = this.crypto.decrypt(errorBody["data"]);
      return new HttpErrorResponse({
        error: __spreadProps(__spreadValues({}, errorBody), {
          data: decrypted
        }),
        headers: err.headers,
        status: err.status,
        statusText: err.statusText,
        url: err.url || void 0
      });
    }
    return err;
  }
};
_CryptoInterceptor.\u0275fac = function CryptoInterceptor_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CryptoInterceptor)(\u0275\u0275inject(EncryptionService));
};
_CryptoInterceptor.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CryptoInterceptor, factory: _CryptoInterceptor.\u0275fac });
var CryptoInterceptor = _CryptoInterceptor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CryptoInterceptor, [{
    type: Injectable
  }], () => [{ type: EncryptionService }], null);
})();

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withPreloading(PreloadAllModules), withRouterConfig({ onSameUrlNavigation: "reload" })),
    provideHttpClient(withInterceptorsFromDi()),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: CryptoInterceptor, multi: true }
  ]
};

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => {
});
//# sourceMappingURL=main.js.map
