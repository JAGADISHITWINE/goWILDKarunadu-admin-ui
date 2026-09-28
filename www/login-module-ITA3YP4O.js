import {
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-QNEZ2FH5.js";
import {
  AuthService
} from "./chunk-D4XXJJII.js";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectorRef,
  CommonModule,
  Component,
  EncryptionService,
  HttpClient,
  Injectable,
  NgClass,
  NgIf,
  NgModule,
  Router,
  RouterModule,
  __spreadProps,
  __spreadValues,
  environment,
  map,
  setClassMetadata,
  tap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-KQE4QDNK.js";

// src/app/login/login.ts
var _Login = class _Login {
  constructor(http, authService, crypto) {
    this.http = http;
    this.authService = authService;
    this.crypto = crypto;
    this.API = environment.baseUrl;
  }
  auth(data) {
    const payload = {
      email: data.email?.trim(),
      password: data.password
    };
    const encryptedPayload = this.crypto.encrypt(payload);
    const endpoint = `${this.API}/login`;
    return this.http.post(endpoint, { encryptedPayload }, { withCredentials: true }).pipe(map((res) => {
      if (res?.data && typeof res.data === "string" && res.data.startsWith("U2FsdGVkX1")) {
        const decrypted = this.crypto.decrypt(res.data);
        return decrypted || res;
      }
      if (res?.encryptedPayload && typeof res.encryptedPayload === "string") {
        const decrypted = this.crypto.decrypt(res.encryptedPayload);
        return decrypted || res;
      }
      if (res?.data && typeof res.data === "object") {
        const mapped = __spreadProps(__spreadValues(__spreadValues({}, res), res.data), {
          user: res.data.user || res.user
        });
        return mapped;
      }
      return res;
    }), tap((res) => {
      const user = res?.user || res?.data?.user;
      const token = res?.token || res?.data?.token;
      if (user) {
        this.authService.setUser(user);
      }
      if (token) {
        sessionStorage.setItem("token", token);
        localStorage.setItem("token", token);
      }
    }));
  }
};
_Login.\u0275fac = function Login_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Login)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService), \u0275\u0275inject(EncryptionService));
};
_Login.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _Login, factory: _Login.\u0275fac, providedIn: "root" });
var Login = _Login;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Login, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: AuthService }, { type: EncryptionService }], null);
})();

// src/app/login/login.component.ts
function LoginComponent_span_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1, " Please enter a valid corporate email. ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_span_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1, " Password is required. ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275element(1, "i", 54);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.loginError);
  }
}
function LoginComponent_span_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Authenticate & Enter Console");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_span_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Verifying credentials...");
    \u0275\u0275elementEnd();
  }
}
var _LoginComponent = class _LoginComponent {
  constructor(router, loginService, authService, cdr) {
    this.router = router;
    this.loginService = loginService;
    this.authService = authService;
    this.cdr = cdr;
    this.credentials = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required])
    });
    this.showPassword = false;
    this.loginError = "";
    this.isSubmitting = false;
  }
  ngOnInit() {
  }
  login() {
    if (this.credentials.invalid || this.isSubmitting) {
      this.credentials.markAllAsTouched();
      return;
    }
    this.loginError = "";
    this.isSubmitting = true;
    this.cdr.detectChanges();
    this.loginService.auth(this.credentials.value).subscribe({
      next: (res) => {
        this.isSubmitting = false;
        const user = res?.user || res?.data?.user;
        const isSuccess = res?.response === true || res?.success === true || !!user;
        if (isSuccess && user) {
          this.authService.setUser(user);
          const token = res?.token || res?.data?.token;
          if (token) {
            sessionStorage.setItem("token", token);
            localStorage.setItem("token", token);
          }
          this.credentials.reset();
          const targetRoute = this.authService.getDefaultAuthorizedRoute() || "/admin/dashboard";
          this.cdr.detectChanges();
          this.router.navigate([targetRoute], { replaceUrl: true }).then((navResult) => {
            if (!navResult) {
              this.router.navigateByUrl(targetRoute);
            }
          }).catch((navErr) => {
            this.router.navigateByUrl(targetRoute);
          });
          return;
        }
        this.loginError = res?.message || res?.data?.message || "Invalid email or password";
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.isSubmitting = false;
        let errMsg = "Invalid email or password";
        const errObj = err?.error;
        if (errObj && typeof errObj === "object") {
          if (errObj.message) {
            errMsg = errObj.message;
          } else if (errObj.data && typeof errObj.data === "object" && errObj.data.message) {
            errMsg = errObj.data.message;
          }
        } else if (typeof errObj === "string") {
          try {
            const parsed = JSON.parse(errObj);
            if (parsed?.message)
              errMsg = parsed.message;
          } catch {
          }
        } else if (err?.message) {
          errMsg = err.message;
        }
        this.loginError = errMsg;
        this.cdr.detectChanges();
      }
    });
  }
  togglePassword() {
    this.showPassword = !this.showPassword;
  }
};
_LoginComponent.\u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(Login), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ChangeDetectorRef));
};
_LoginComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 95, vars: 14, consts: [[1, "auth-page"], [1, "auth-layout"], [1, "brand-hero-section"], [1, "hero-ambient-glow", "glow-top"], [1, "hero-ambient-glow", "glow-bottom"], [1, "hero-inner-flow"], [1, "brand-badge-row"], [1, "brand-logo-frame"], ["loading", "eager", "fetchpriority", "high", "decoding", "async", "src", "/assets/assets/logo.png", "alt", "goWILD\u2122 Karunadu", 1, "brand-logo-img"], [1, "brand-title-meta"], [1, "brand-words"], [1, "word-go"], [1, "word-wild"], [1, "tm"], [1, "brand-kannada"], [1, "hero-text-block"], [1, "live-pill"], [1, "live-dot"], [1, "hero-headline"], [1, "highlight-text"], [1, "hero-summary"], [1, "hero-features-list"], [1, "feature-card"], [1, "feat-icon-box"], [1, "bi", "bi-shield-check"], [1, "feat-info"], [1, "bi", "bi-qr-code-scan"], [1, "bi", "bi-broadcast"], [1, "hero-security-note"], [1, "bi", "bi-lock-fill"], [1, "auth-form-section"], [1, "login-card"], [1, "login-card-header"], [1, "login-portal-tag"], [1, "login-title"], [1, "login-subtitle"], [1, "login-form", 3, "ngSubmit", "formGroup"], [1, "form-field"], ["for", "admin-email", 1, "field-label"], [1, "input-wrapper"], [1, "bi", "bi-envelope", "field-icon"], ["id", "admin-email", "type", "email", "placeholder", "admin@gowildkarunadu.online", "formControlName", "email", "autocomplete", "email", 1, "form-input"], ["class", "field-validation-msg", 4, "ngIf"], ["for", "admin-password", 1, "field-label"], [1, "bi", "bi-shield-lock", "field-icon"], ["id", "admin-password", "placeholder", "Enter password", "formControlName", "password", "autocomplete", "current-password", 1, "form-input", 3, "type"], ["type", "button", "title", "Toggle password view", 1, "btn-toggle-pw", 3, "click"], [1, "bi", 3, "ngClass"], ["class", "login-error-alert", 4, "ngIf"], ["type", "submit", 1, "btn-login-submit", 3, "disabled"], [4, "ngIf"], [1, "login-card-footer"], [1, "field-validation-msg"], [1, "login-error-alert"], [1, "bi", "bi-exclamation-octagon-fill"]], template: function LoginComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "section", 2);
    \u0275\u0275element(3, "div", 3)(4, "div", 4);
    \u0275\u0275elementStart(5, "div", 5)(6, "div", 6)(7, "div", 7);
    \u0275\u0275element(8, "img", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 9)(10, "div", 10)(11, "span", 11);
    \u0275\u0275text(12, "go");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 12);
    \u0275\u0275text(14, "WILD");
    \u0275\u0275elementStart(15, "span", 13);
    \u0275\u0275text(16, "\u2122");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "span", 14);
    \u0275\u0275text(18, "\u0C95\u0CB0\u0CC1\u0CA8\u0CBE\u0CA1\u0CC1 \u2022 WILDERNESS COMMAND");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 15)(20, "div", 16);
    \u0275\u0275element(21, "span", 17);
    \u0275\u0275text(22, " OPERATIONS CONSOLE v2.4 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "h1", 18);
    \u0275\u0275text(24, " Expedition Command & ");
    \u0275\u0275element(25, "br");
    \u0275\u0275elementStart(26, "span", 19);
    \u0275\u0275text(27, "Basecamp Operations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "p", 20);
    \u0275\u0275text(29, " Centralized platform for Western Ghats eco-treks, automated Forest Department permits, real-time telemetry, and batch manifests. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 21)(31, "div", 22)(32, "div", 23);
    \u0275\u0275element(33, "i", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 25)(35, "strong");
    \u0275\u0275text(36, "Eco-Permit Compliance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span");
    \u0275\u0275text(38, "Automated forest pass clearances & ID verification");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "div", 22)(40, "div", 23);
    \u0275\u0275element(41, "i", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 25)(43, "strong");
    \u0275\u0275text(44, "Basecamp QR Check-in");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span");
    \u0275\u0275text(46, "Real-time digital manifests & guest arrivals");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "div", 22)(48, "div", 23);
    \u0275\u0275element(49, "i", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 25)(51, "strong");
    \u0275\u0275text(52, "Trail Safety Telemetry");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "span");
    \u0275\u0275text(54, "Weather advisories & automated WhatsApp alerts");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(55, "div", 28);
    \u0275\u0275element(56, "i", 29);
    \u0275\u0275elementStart(57, "span");
    \u0275\u0275text(58, "256-Bit TLS Encrypted \u2022 Role-Based Access Control");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(59, "section", 30)(60, "div", 31)(61, "div", 32)(62, "span", 33);
    \u0275\u0275text(63, "ADMIN CONSOLE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "h2", 34);
    \u0275\u0275text(65, "Sign in to your account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "p", 35);
    \u0275\u0275text(67, "Enter your corporate credentials to access the management portal.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "form", 36);
    \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_68_listener() {
      return ctx.login();
    });
    \u0275\u0275elementStart(69, "div", 37)(70, "label", 38);
    \u0275\u0275text(71, "Corporate Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "div", 39);
    \u0275\u0275element(73, "i", 40)(74, "input", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275template(75, LoginComponent_span_75_Template, 2, 0, "span", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "div", 37)(77, "label", 43);
    \u0275\u0275text(78, "Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "div", 39);
    \u0275\u0275element(80, "i", 44)(81, "input", 45);
    \u0275\u0275elementStart(82, "button", 46);
    \u0275\u0275listener("click", function LoginComponent_Template_button_click_82_listener() {
      return ctx.togglePassword();
    });
    \u0275\u0275element(83, "i", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(84, LoginComponent_span_84_Template, 2, 0, "span", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275template(85, LoginComponent_div_85_Template, 4, 1, "div", 48);
    \u0275\u0275elementStart(86, "button", 49);
    \u0275\u0275template(87, LoginComponent_span_87_Template, 2, 0, "span", 50)(88, LoginComponent_span_88_Template, 2, 0, "span", 50);
    \u0275\u0275element(89, "i", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(90, "div", 51)(91, "p");
    \u0275\u0275text(92, "\xA9 2026 goWILD\u2122 Karunadu. All rights reserved.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "small");
    \u0275\u0275text(94, "Restricted portal. Unauthorized access is strictly logged & monitored.");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_6_0;
    \u0275\u0275advance(68);
    \u0275\u0275property("formGroup", ctx.credentials);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("has-error", ((tmp_1_0 = ctx.credentials.get("email")) == null ? null : tmp_1_0.touched) && ((tmp_1_0 = ctx.credentials.get("email")) == null ? null : tmp_1_0.invalid));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ((tmp_2_0 = ctx.credentials.get("email")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx.credentials.get("email")) == null ? null : tmp_2_0.invalid));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("has-error", ((tmp_3_0 = ctx.credentials.get("password")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx.credentials.get("password")) == null ? null : tmp_3_0.invalid));
    \u0275\u0275advance(2);
    \u0275\u0275property("type", ctx.showPassword ? "text" : "password");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx.showPassword ? "bi-eye-slash-fill" : "bi-eye-fill");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_6_0 = ctx.credentials.get("password")) == null ? null : tmp_6_0.touched) && ((tmp_6_0 = ctx.credentials.get("password")) == null ? null : tmp_6_0.invalid));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.loginError);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx.isSubmitting || ctx.credentials.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx.isSubmitting ? "bi-arrow-repeat spin" : "bi-arrow-right");
  }
}, dependencies: [CommonModule, NgClass, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  min-height: 100vh;\n  font-family:\n    "Plus Jakarta Sans",\n    system-ui,\n    -apple-system,\n    sans-serif;\n  color: #0f172a;\n}\n.auth-page[_ngcontent-%COMP%] {\n  --background: #f8fafc;\n  background: #f8fafc;\n  width: 100%;\n  height: 100%;\n  min-height: 100vh;\n}\n.auth-layout[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: grid;\n  grid-template-columns: 1.1fr 0.9fr;\n  align-items: stretch;\n  background: #f8fafc;\n  position: relative;\n}\n.brand-hero-section[_ngcontent-%COMP%] {\n  position: relative;\n  background:\n    linear-gradient(\n      160deg,\n      #064e3b 0%,\n      #0c3d33 45%,\n      #05261f 100%);\n  color: #ffffff;\n  padding: 60px 64px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  overflow: hidden;\n}\n.brand-hero-section[_ngcontent-%COMP%]   .hero-ambient-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(90px);\n  pointer-events: none;\n}\n.brand-hero-section[_ngcontent-%COMP%]   .hero-ambient-glow.glow-top[_ngcontent-%COMP%] {\n  top: -10%;\n  left: -10%;\n  width: 450px;\n  height: 450px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(52, 211, 153, 0.22) 0%,\n      transparent 70%);\n}\n.brand-hero-section[_ngcontent-%COMP%]   .hero-ambient-glow.glow-bottom[_ngcontent-%COMP%] {\n  bottom: -10%;\n  right: -10%;\n  width: 400px;\n  height: 400px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(16, 185, 129, 0.25) 0%,\n      transparent 70%);\n}\n.brand-hero-section[_ngcontent-%COMP%]   .hero-inner-flow[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n  max-width: 580px;\n}\n.brand-badge-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.brand-badge-row[_ngcontent-%COMP%]   .brand-logo-frame[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 18px;\n  background: #ffffff;\n  padding: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.25);\n  flex-shrink: 0;\n}\n.brand-badge-row[_ngcontent-%COMP%]   .brand-logo-frame[_ngcontent-%COMP%]   .brand-logo-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n.brand-badge-row[_ngcontent-%COMP%]   .brand-title-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.brand-badge-row[_ngcontent-%COMP%]   .brand-title-meta[_ngcontent-%COMP%]   .brand-words[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 3px;\n}\n.brand-badge-row[_ngcontent-%COMP%]   .brand-title-meta[_ngcontent-%COMP%]   .brand-words[_ngcontent-%COMP%]   .word-go[_ngcontent-%COMP%] {\n  font-family: "Outfit", sans-serif;\n  font-size: 1.6rem;\n  font-weight: 300;\n  color: #a7f3d0;\n}\n.brand-badge-row[_ngcontent-%COMP%]   .brand-title-meta[_ngcontent-%COMP%]   .brand-words[_ngcontent-%COMP%]   .word-wild[_ngcontent-%COMP%] {\n  font-family: "Outfit", sans-serif;\n  font-size: 2rem;\n  font-weight: 900;\n  color: #ffffff;\n  letter-spacing: -0.02em;\n}\n.brand-badge-row[_ngcontent-%COMP%]   .brand-title-meta[_ngcontent-%COMP%]   .brand-words[_ngcontent-%COMP%]   .word-wild[_ngcontent-%COMP%]   .tm[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #34d399;\n  vertical-align: super;\n}\n.brand-badge-row[_ngcontent-%COMP%]   .brand-title-meta[_ngcontent-%COMP%]   .brand-kannada[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  font-weight: 800;\n  letter-spacing: 0.1em;\n  color: #6ee7b7;\n  text-transform: uppercase;\n}\n.hero-text-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.hero-text-block[_ngcontent-%COMP%]   .live-pill[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 5px 12px;\n  border-radius: 20px;\n  background: rgba(52, 211, 153, 0.18);\n  border: 1px solid rgba(52, 211, 153, 0.4);\n  color: #a7f3d0;\n  font-size: 0.72rem;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n}\n.hero-text-block[_ngcontent-%COMP%]   .live-pill[_ngcontent-%COMP%]   .live-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #10b981;\n  box-shadow: 0 0 8px #34d399;\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n}\n.hero-text-block[_ngcontent-%COMP%]   .hero-headline[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 2.2rem;\n  font-weight: 900;\n  line-height: 1.25;\n  letter-spacing: -0.03em;\n  color: #ffffff;\n}\n.hero-text-block[_ngcontent-%COMP%]   .hero-headline[_ngcontent-%COMP%]   .highlight-text[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #34d399 0%,\n      #a7f3d0 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.hero-text-block[_ngcontent-%COMP%]   .hero-summary[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.94rem;\n  line-height: 1.6;\n  color: #d1fae5;\n}\n.hero-features-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.hero-features-list[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 14px 18px;\n  border-radius: 14px;\n  background: rgba(255, 255, 255, 0.07);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  transition: background 0.2s ease, transform 0.2s ease;\n}\n.hero-features-list[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.12);\n  transform: translateX(4px);\n}\n.hero-features-list[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .feat-icon-box[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  background: #10b981;\n  color: #064e3b;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n  font-weight: 900;\n  flex-shrink: 0;\n}\n.hero-features-list[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .feat-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.hero-features-list[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .feat-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 800;\n  color: #ffffff;\n}\n.hero-features-list[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .feat-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  color: #a7f3d0;\n}\n.hero-security-note[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.76rem;\n  color: #a7f3d0;\n}\n.hero-security-note[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #34d399;\n}\n.auth-form-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px;\n  background: #f8fafc;\n}\n.auth-form-section[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 440px;\n  background: #ffffff;\n  border-radius: 24px;\n  padding: 42px 38px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 20px 45px rgba(15, 23, 42, 0.07);\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  animation: _ngcontent-%COMP%_slideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.login-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.login-card-header[_ngcontent-%COMP%]   .login-portal-tag[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  color: #059669;\n  text-transform: uppercase;\n}\n.login-card-header[_ngcontent-%COMP%]   .login-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.6rem;\n  font-weight: 900;\n  letter-spacing: -0.02em;\n  color: #0f172a;\n}\n.login-card-header[_ngcontent-%COMP%]   .login-subtitle[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.86rem;\n  color: #64748b;\n  line-height: 1.45;\n}\n.login-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.login-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.login-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: #334155;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.login-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.login-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .field-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 14px;\n  color: #94a3b8;\n  font-size: 1.1rem;\n  pointer-events: none;\n  transition: color 0.18s ease;\n}\n.login-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 14px 12px 42px;\n  border-radius: 12px;\n  border: 1.5px solid #cbd5e1;\n  background: #f8fafc;\n  font-size: 0.92rem;\n  color: #0f172a;\n  font-weight: 600;\n  outline: none;\n  transition: all 0.18s ease;\n}\n.login-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n  font-weight: 400;\n}\n.login-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:focus {\n  border-color: #059669;\n  background: #ffffff;\n  box-shadow: 0 0 0 3px rgba(5, 150, 105, 0.15);\n}\n.login-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:focus    ~ .field-icon[_ngcontent-%COMP%] {\n  color: #059669;\n}\n.login-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .btn-toggle-pw[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  background: none;\n  border: none;\n  color: #64748b;\n  font-size: 1.1rem;\n  cursor: pointer;\n  padding: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: color 0.15s ease;\n}\n.login-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .btn-toggle-pw[_ngcontent-%COMP%]:hover {\n  color: #0f172a;\n}\n.login-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .input-wrapper.has-error[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n  background: #fef2f2;\n}\n.login-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-validation-msg[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  color: #dc2626;\n  font-weight: 600;\n}\n.login-error-alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-radius: 12px;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #991b1b;\n  font-size: 0.84rem;\n  font-weight: 700;\n  animation: _ngcontent-%COMP%_shake 0.35s ease;\n}\n.login-error-alert[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: #ef4444;\n  flex-shrink: 0;\n}\n.btn-login-submit[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 13px 20px;\n  border-radius: 12px;\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      #064e3b 0%,\n      #047857 100%);\n  color: #ffffff;\n  font-size: 0.95rem;\n  font-weight: 800;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  box-shadow: 0 8px 20px rgba(6, 78, 59, 0.28);\n  transition: all 0.2s ease;\n  margin-top: 4px;\n}\n.btn-login-submit[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  transition: transform 0.2s ease;\n}\n.btn-login-submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #047857 0%,\n      #059669 100%);\n  transform: translateY(-2px);\n  box-shadow: 0 12px 26px rgba(6, 78, 59, 0.38);\n}\n.btn-login-submit[_ngcontent-%COMP%]:hover:not(:disabled)   i[_ngcontent-%COMP%] {\n  transform: translateX(4px);\n}\n.btn-login-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n}\n.login-card-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding-top: 12px;\n  border-top: 1px solid #f1f5f9;\n}\n.login-card-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.78rem;\n  color: #64748b;\n}\n.login-card-footer[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #94a3b8;\n}\n@media (max-width: 960px) {\n  .auth-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .brand-hero-section[_ngcontent-%COMP%] {\n    padding: 40px 24px;\n    align-items: center;\n    text-align: center;\n  }\n  .brand-hero-section[_ngcontent-%COMP%]   .hero-inner-flow[_ngcontent-%COMP%] {\n    align-items: center;\n  }\n  .brand-hero-section[_ngcontent-%COMP%]   .brand-badge-row[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .brand-hero-section[_ngcontent-%COMP%]   .hero-text-block[_ngcontent-%COMP%]   .live-pill[_ngcontent-%COMP%] {\n    align-self: center;\n  }\n  .brand-hero-section[_ngcontent-%COMP%]   .hero-headline[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n  .brand-hero-section[_ngcontent-%COMP%]   .hero-features-list[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .auth-form-section[_ngcontent-%COMP%] {\n    padding: 24px 16px;\n  }\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(1.4);\n    opacity: 0.6;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(16px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_shake {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  20%, 60% {\n    transform: translateX(-5px);\n  }\n  40%, 80% {\n    transform: translateX(5px);\n  }\n}\n/*# sourceMappingURL=login.component.css.map */'] });
var LoginComponent = _LoginComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [CommonModule, FormsModule, ReactiveFormsModule], schemas: [CUSTOM_ELEMENTS_SCHEMA], template: `<div class="auth-page">
  <div class="auth-layout">
    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
         LEFT BRAND & EXPEDITION SHOWCASE HERO (LUXURY EMERALD)
         \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <section class="brand-hero-section">
      <div class="hero-ambient-glow glow-top"></div>
      <div class="hero-ambient-glow glow-bottom"></div>

      <div class="hero-inner-flow">
        <!-- Logo & Header -->
        <div class="brand-badge-row">
          <div class="brand-logo-frame">
            <img
              loading="eager"
              fetchpriority="high"
              decoding="async"
              src="/assets/assets/logo.png"
              alt="goWILD\u2122 Karunadu"
              class="brand-logo-img"
            />
          </div>
          <div class="brand-title-meta">
            <div class="brand-words">
              <span class="word-go">go</span>
              <span class="word-wild">WILD<span class="tm">\u2122</span></span>
            </div>
            <span class="brand-kannada">\u0C95\u0CB0\u0CC1\u0CA8\u0CBE\u0CA1\u0CC1 &bull; WILDERNESS COMMAND</span>
          </div>
        </div>

        <!-- Headline & Value Prop -->
        <div class="hero-text-block">
          <div class="live-pill">
            <span class="live-dot"></span>
            OPERATIONS CONSOLE v2.4
          </div>
          <h1 class="hero-headline">
            Expedition Command &amp; <br />
            <span class="highlight-text">Basecamp Operations</span>
          </h1>
          <p class="hero-summary">
            Centralized platform for Western Ghats eco-treks, automated Forest Department permits, real-time telemetry, and batch manifests.
          </p>
        </div>

        <!-- Capability Cards -->
        <div class="hero-features-list">
          <div class="feature-card">
            <div class="feat-icon-box"><i class="bi bi-shield-check"></i></div>
            <div class="feat-info">
              <strong>Eco-Permit Compliance</strong>
              <span>Automated forest pass clearances &amp; ID verification</span>
            </div>
          </div>

          <div class="feature-card">
            <div class="feat-icon-box"><i class="bi bi-qr-code-scan"></i></div>
            <div class="feat-info">
              <strong>Basecamp QR Check-in</strong>
              <span>Real-time digital manifests &amp; guest arrivals</span>
            </div>
          </div>

          <div class="feature-card">
            <div class="feat-icon-box"><i class="bi bi-broadcast"></i></div>
            <div class="feat-info">
              <strong>Trail Safety Telemetry</strong>
              <span>Weather advisories &amp; automated WhatsApp alerts</span>
            </div>
          </div>
        </div>

        <!-- Security Footer -->
        <div class="hero-security-note">
          <i class="bi bi-lock-fill"></i>
          <span>256-Bit TLS Encrypted &bull; Role-Based Access Control</span>
        </div>
      </div>
    </section>

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
         RIGHT AUTHENTICATION FORM (CRISP HIGH-CONTRAST CARD)
         \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <section class="auth-form-section">
      <div class="login-card">
        <div class="login-card-header">
          <span class="login-portal-tag">ADMIN CONSOLE</span>
          <h2 class="login-title">Sign in to your account</h2>
          <p class="login-subtitle">Enter your corporate credentials to access the management portal.</p>
        </div>

        <form [formGroup]="credentials" (ngSubmit)="login()" class="login-form">
          <!-- Email Input -->
          <div class="form-field">
            <label class="field-label" for="admin-email">Corporate Email</label>
            <div class="input-wrapper" [class.has-error]="credentials.get('email')?.touched && credentials.get('email')?.invalid">
              <i class="bi bi-envelope field-icon"></i>
              <input
                id="admin-email"
                type="email"
                class="form-input"
                placeholder="admin@gowildkarunadu.online"
                formControlName="email"
                autocomplete="email"
              />
            </div>
            <span class="field-validation-msg" *ngIf="credentials.get('email')?.touched && credentials.get('email')?.invalid">
              Please enter a valid corporate email.
            </span>
          </div>

          <!-- Password Input -->
          <div class="form-field">
            <label class="field-label" for="admin-password">Password</label>
            <div class="input-wrapper" [class.has-error]="credentials.get('password')?.touched && credentials.get('password')?.invalid">
              <i class="bi bi-shield-lock field-icon"></i>
              <input
                id="admin-password"
                [type]="showPassword ? 'text' : 'password'"
                class="form-input"
                placeholder="Enter password"
                formControlName="password"
                autocomplete="current-password"
              />
              <button
                type="button"
                class="btn-toggle-pw"
                (click)="togglePassword()"
                title="Toggle password view">
                <i class="bi" [ngClass]="showPassword ? 'bi-eye-slash-fill' : 'bi-eye-fill'"></i>
              </button>
            </div>
            <span class="field-validation-msg" *ngIf="credentials.get('password')?.touched && credentials.get('password')?.invalid">
              Password is required.
            </span>
          </div>

          <!-- Error Message Banner -->
          <div class="login-error-alert" *ngIf="loginError">
            <i class="bi bi-exclamation-octagon-fill"></i>
            <span>{{ loginError }}</span>
          </div>

          <!-- Submit Action Button -->
          <button
            type="submit"
            class="btn-login-submit"
            [disabled]="isSubmitting || credentials.invalid">
            <span *ngIf="!isSubmitting">Authenticate &amp; Enter Console</span>
            <span *ngIf="isSubmitting">Verifying credentials...</span>
            <i class="bi" [ngClass]="isSubmitting ? 'bi-arrow-repeat spin' : 'bi-arrow-right'"></i>
          </button>
        </form>

        <div class="login-card-footer">
          <p>&copy; 2026 goWILD\u2122 Karunadu. All rights reserved.</p>
          <small>Restricted portal. Unauthorized access is strictly logged &amp; monitored.</small>
        </div>
      </div>
    </section>
  </div>
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/login/login.component.scss */\n:host {\n  display: block;\n  width: 100%;\n  height: 100%;\n  min-height: 100vh;\n  font-family:\n    "Plus Jakarta Sans",\n    system-ui,\n    -apple-system,\n    sans-serif;\n  color: #0f172a;\n}\n.auth-page {\n  --background: #f8fafc;\n  background: #f8fafc;\n  width: 100%;\n  height: 100%;\n  min-height: 100vh;\n}\n.auth-layout {\n  min-height: 100vh;\n  display: grid;\n  grid-template-columns: 1.1fr 0.9fr;\n  align-items: stretch;\n  background: #f8fafc;\n  position: relative;\n}\n.brand-hero-section {\n  position: relative;\n  background:\n    linear-gradient(\n      160deg,\n      #064e3b 0%,\n      #0c3d33 45%,\n      #05261f 100%);\n  color: #ffffff;\n  padding: 60px 64px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  overflow: hidden;\n}\n.brand-hero-section .hero-ambient-glow {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(90px);\n  pointer-events: none;\n}\n.brand-hero-section .hero-ambient-glow.glow-top {\n  top: -10%;\n  left: -10%;\n  width: 450px;\n  height: 450px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(52, 211, 153, 0.22) 0%,\n      transparent 70%);\n}\n.brand-hero-section .hero-ambient-glow.glow-bottom {\n  bottom: -10%;\n  right: -10%;\n  width: 400px;\n  height: 400px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(16, 185, 129, 0.25) 0%,\n      transparent 70%);\n}\n.brand-hero-section .hero-inner-flow {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n  max-width: 580px;\n}\n.brand-badge-row {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.brand-badge-row .brand-logo-frame {\n  width: 60px;\n  height: 60px;\n  border-radius: 18px;\n  background: #ffffff;\n  padding: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.25);\n  flex-shrink: 0;\n}\n.brand-badge-row .brand-logo-frame .brand-logo-img {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n.brand-badge-row .brand-title-meta {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.brand-badge-row .brand-title-meta .brand-words {\n  display: flex;\n  align-items: baseline;\n  gap: 3px;\n}\n.brand-badge-row .brand-title-meta .brand-words .word-go {\n  font-family: "Outfit", sans-serif;\n  font-size: 1.6rem;\n  font-weight: 300;\n  color: #a7f3d0;\n}\n.brand-badge-row .brand-title-meta .brand-words .word-wild {\n  font-family: "Outfit", sans-serif;\n  font-size: 2rem;\n  font-weight: 900;\n  color: #ffffff;\n  letter-spacing: -0.02em;\n}\n.brand-badge-row .brand-title-meta .brand-words .word-wild .tm {\n  font-size: 0.8rem;\n  color: #34d399;\n  vertical-align: super;\n}\n.brand-badge-row .brand-title-meta .brand-kannada {\n  font-size: 0.74rem;\n  font-weight: 800;\n  letter-spacing: 0.1em;\n  color: #6ee7b7;\n  text-transform: uppercase;\n}\n.hero-text-block {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.hero-text-block .live-pill {\n  align-self: flex-start;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 5px 12px;\n  border-radius: 20px;\n  background: rgba(52, 211, 153, 0.18);\n  border: 1px solid rgba(52, 211, 153, 0.4);\n  color: #a7f3d0;\n  font-size: 0.72rem;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n}\n.hero-text-block .live-pill .live-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #10b981;\n  box-shadow: 0 0 8px #34d399;\n  animation: pulse 2s infinite;\n}\n.hero-text-block .hero-headline {\n  margin: 0;\n  font-size: 2.2rem;\n  font-weight: 900;\n  line-height: 1.25;\n  letter-spacing: -0.03em;\n  color: #ffffff;\n}\n.hero-text-block .hero-headline .highlight-text {\n  background:\n    linear-gradient(\n      135deg,\n      #34d399 0%,\n      #a7f3d0 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.hero-text-block .hero-summary {\n  margin: 0;\n  font-size: 0.94rem;\n  line-height: 1.6;\n  color: #d1fae5;\n}\n.hero-features-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.hero-features-list .feature-card {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 14px 18px;\n  border-radius: 14px;\n  background: rgba(255, 255, 255, 0.07);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  transition: background 0.2s ease, transform 0.2s ease;\n}\n.hero-features-list .feature-card:hover {\n  background: rgba(255, 255, 255, 0.12);\n  transform: translateX(4px);\n}\n.hero-features-list .feature-card .feat-icon-box {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  background: #10b981;\n  color: #064e3b;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n  font-weight: 900;\n  flex-shrink: 0;\n}\n.hero-features-list .feature-card .feat-info {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.hero-features-list .feature-card .feat-info strong {\n  font-size: 0.88rem;\n  font-weight: 800;\n  color: #ffffff;\n}\n.hero-features-list .feature-card .feat-info span {\n  font-size: 0.76rem;\n  color: #a7f3d0;\n}\n.hero-security-note {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.76rem;\n  color: #a7f3d0;\n}\n.hero-security-note i {\n  color: #34d399;\n}\n.auth-form-section {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px;\n  background: #f8fafc;\n}\n.auth-form-section .login-card {\n  width: 100%;\n  max-width: 440px;\n  background: #ffffff;\n  border-radius: 24px;\n  padding: 42px 38px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 20px 45px rgba(15, 23, 42, 0.07);\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  animation: slideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.login-card-header {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.login-card-header .login-portal-tag {\n  font-size: 0.72rem;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  color: #059669;\n  text-transform: uppercase;\n}\n.login-card-header .login-title {\n  margin: 0;\n  font-size: 1.6rem;\n  font-weight: 900;\n  letter-spacing: -0.02em;\n  color: #0f172a;\n}\n.login-card-header .login-subtitle {\n  margin: 0;\n  font-size: 0.86rem;\n  color: #64748b;\n  line-height: 1.45;\n}\n.login-form {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.login-form .form-field {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.login-form .form-field .field-label {\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: #334155;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.login-form .form-field .input-wrapper {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.login-form .form-field .input-wrapper .field-icon {\n  position: absolute;\n  left: 14px;\n  color: #94a3b8;\n  font-size: 1.1rem;\n  pointer-events: none;\n  transition: color 0.18s ease;\n}\n.login-form .form-field .input-wrapper .form-input {\n  width: 100%;\n  padding: 12px 14px 12px 42px;\n  border-radius: 12px;\n  border: 1.5px solid #cbd5e1;\n  background: #f8fafc;\n  font-size: 0.92rem;\n  color: #0f172a;\n  font-weight: 600;\n  outline: none;\n  transition: all 0.18s ease;\n}\n.login-form .form-field .input-wrapper .form-input::placeholder {\n  color: #94a3b8;\n  font-weight: 400;\n}\n.login-form .form-field .input-wrapper .form-input:focus {\n  border-color: #059669;\n  background: #ffffff;\n  box-shadow: 0 0 0 3px rgba(5, 150, 105, 0.15);\n}\n.login-form .form-field .input-wrapper .form-input:focus ~ .field-icon {\n  color: #059669;\n}\n.login-form .form-field .input-wrapper .btn-toggle-pw {\n  position: absolute;\n  right: 12px;\n  background: none;\n  border: none;\n  color: #64748b;\n  font-size: 1.1rem;\n  cursor: pointer;\n  padding: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: color 0.15s ease;\n}\n.login-form .form-field .input-wrapper .btn-toggle-pw:hover {\n  color: #0f172a;\n}\n.login-form .form-field .input-wrapper.has-error .form-input {\n  border-color: #ef4444;\n  background: #fef2f2;\n}\n.login-form .form-field .field-validation-msg {\n  font-size: 0.74rem;\n  color: #dc2626;\n  font-weight: 600;\n}\n.login-error-alert {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-radius: 12px;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #991b1b;\n  font-size: 0.84rem;\n  font-weight: 700;\n  animation: shake 0.35s ease;\n}\n.login-error-alert i {\n  font-size: 1.2rem;\n  color: #ef4444;\n  flex-shrink: 0;\n}\n.btn-login-submit {\n  width: 100%;\n  padding: 13px 20px;\n  border-radius: 12px;\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      #064e3b 0%,\n      #047857 100%);\n  color: #ffffff;\n  font-size: 0.95rem;\n  font-weight: 800;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  box-shadow: 0 8px 20px rgba(6, 78, 59, 0.28);\n  transition: all 0.2s ease;\n  margin-top: 4px;\n}\n.btn-login-submit i {\n  font-size: 1rem;\n  transition: transform 0.2s ease;\n}\n.btn-login-submit:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #047857 0%,\n      #059669 100%);\n  transform: translateY(-2px);\n  box-shadow: 0 12px 26px rgba(6, 78, 59, 0.38);\n}\n.btn-login-submit:hover:not(:disabled) i {\n  transform: translateX(4px);\n}\n.btn-login-submit:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n}\n.login-card-footer {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding-top: 12px;\n  border-top: 1px solid #f1f5f9;\n}\n.login-card-footer p {\n  margin: 0;\n  font-size: 0.78rem;\n  color: #64748b;\n}\n.login-card-footer small {\n  font-size: 0.7rem;\n  color: #94a3b8;\n}\n@media (max-width: 960px) {\n  .auth-layout {\n    grid-template-columns: 1fr;\n  }\n  .brand-hero-section {\n    padding: 40px 24px;\n    align-items: center;\n    text-align: center;\n  }\n  .brand-hero-section .hero-inner-flow {\n    align-items: center;\n  }\n  .brand-hero-section .brand-badge-row {\n    justify-content: center;\n  }\n  .brand-hero-section .hero-text-block .live-pill {\n    align-self: center;\n  }\n  .brand-hero-section .hero-headline {\n    font-size: 1.8rem;\n  }\n  .brand-hero-section .hero-features-list {\n    width: 100%;\n  }\n  .auth-form-section {\n    padding: 24px 16px;\n  }\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes pulse {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(1.4);\n    opacity: 0.6;\n  }\n}\n@keyframes slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(16px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes shake {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  20%, 60% {\n    transform: translateX(-5px);\n  }\n  40%, 80% {\n    transform: translateX(5px);\n  }\n}\n/*# sourceMappingURL=login.component.css.map */\n'] }]
  }], () => [{ type: Router }, { type: Login }, { type: AuthService }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/login/login.component.ts", lineNumber: 16 });
})();

// src/app/login/login-module.ts
var routes = [{ path: "", component: LoginComponent }];
var _LoginModule = class _LoginModule {
};
_LoginModule.\u0275fac = function LoginModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LoginModule)();
};
_LoginModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _LoginModule });
_LoginModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, LoginComponent, RouterModule.forChild(routes)] });
var LoginModule = _LoginModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        CommonModule,
        LoginComponent,
        RouterModule.forChild(routes)
      ]
    }]
  }], null, null);
})();
export {
  LoginModule
};
//# sourceMappingURL=login-module-ITA3YP4O.js.map
