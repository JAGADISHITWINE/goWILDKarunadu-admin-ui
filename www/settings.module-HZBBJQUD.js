import {
  AdminShellComponent
} from "./chunk-36TQFYFK.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-QNEZ2FH5.js";
import "./chunk-D4XXJJII.js";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  CommonModule,
  Component,
  HttpClient,
  Injectable,
  NgIf,
  NgModule,
  RouterModule,
  __spreadValues,
  environment,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-KQE4QDNK.js";

// src/app/core/services/settings.service.ts
var _SettingsService = class _SettingsService {
  constructor(http) {
    this.http = http;
    this.API = environment.baseUrl;
  }
  getSettings() {
    return this.http.get(`${this.API}/settings`);
  }
  updateSettings(payload) {
    return this.http.put(`${this.API}/settings`, payload);
  }
};
_SettingsService.\u0275fac = function SettingsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SettingsService)(\u0275\u0275inject(HttpClient));
};
_SettingsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SettingsService, factory: _SettingsService.\u0275fac, providedIn: "root" });
var SettingsService = _SettingsService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/settings/settings.component.ts
function SettingsComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83);
    \u0275\u0275element(1, "i", 84);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.successMessage);
  }
}
function SettingsComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85);
    \u0275\u0275element(1, "i", 86);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function SettingsComponent_span_173_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 87);
    \u0275\u0275text(2, "Save & Propagate Brand Settings");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_span_174_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 88);
    \u0275\u0275text(2, "Saving & Propagating...");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_span_202_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 89);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.settings.brandSubtitle);
  }
}
var _SettingsComponent = class _SettingsComponent {
  constructor(settingsService) {
    this.settingsService = settingsService;
    this.loading = false;
    this.saving = false;
    this.successMessage = "";
    this.errorMessage = "";
    this.settings = {
      brandName: "goWILD Karunadu",
      brandSubtitle: "\u0C95\u0CB0\u0CC1\u0CA8\u0CBE\u0CA1\u0CC1",
      brandTagline: "Wilderness Expeditions & Western Ghats Trails",
      supportPhone: "+91 98765 43210",
      supportPhoneRaw: "+919876543210",
      whatsappNumber: "+91 98765 43210",
      whatsappNumberRaw: "919876543210",
      supportEmail: "info@gowildkarunadu.online",
      contactLocation: "Bengaluru, Karnataka",
      legalName: "goWILD Karunadu Eco-Adventures Pvt Ltd",
      gstin: "29AAGCW9123K1Z8",
      address: "Forest Trailway Plaza, Indiranagar, Bengaluru, Karnataka 560038",
      socialFacebook: "https://facebook.com/gowildkarunadu",
      socialInstagram: "https://instagram.com/gowildkarunadu",
      socialYoutube: "https://youtube.com/@gowildkarunadu",
      aboutText: "Karnataka's leading trekking and adventure travel company. Guiding passionate explorers through breathtaking Western Ghats trails.",
      bookingsPerPage: 5,
      faqsPerPage: 5
    };
    this.currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  }
  ngOnInit() {
    this.loadSettings();
  }
  loadSettings() {
    this.loading = true;
    this.errorMessage = "";
    this.settingsService.getSettings().subscribe({
      next: (res) => {
        this.loading = false;
        if (res?.data) {
          this.settings = __spreadValues(__spreadValues({}, this.settings), res.data);
        }
      },
      error: (err) => {
        this.loading = false;
        this.errorMessage = "Could not load settings from server. Displaying defaults.";
      }
    });
  }
  saveSettings() {
    this.saving = true;
    this.successMessage = "";
    this.errorMessage = "";
    if (this.settings.supportPhone) {
      this.settings.supportPhoneRaw = this.settings.supportPhone.replace(/[^0-9+]/g, "");
    }
    if (this.settings.whatsappNumber) {
      this.settings.whatsappNumberRaw = this.settings.whatsappNumber.replace(/[^0-9]/g, "");
    }
    this.settingsService.updateSettings(this.settings).subscribe({
      next: (res) => {
        this.saving = false;
        this.successMessage = "Settings saved successfully! Brand name, phone number, and email have propagated to the website, emails, receipts, and passes.";
        setTimeout(() => this.successMessage = "", 6e3);
      },
      error: (err) => {
        this.saving = false;
        this.errorMessage = err?.error?.message || "Failed to save settings. Please try again.";
      }
    });
  }
};
_SettingsComponent.\u0275fac = function SettingsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SettingsComponent)(\u0275\u0275directiveInject(SettingsService));
};
_SettingsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsComponent, selectors: [["app-settings"]], decls: 253, vars: 38, consts: [["title", "Brand & System Settings", "subtitle", "Configure dynamic brand name, support contacts, emails, and entity details across all user apps and operations", "sectionLabel", "Configuration"], [1, "settings-container"], ["class", "alert-box success", 4, "ngIf"], ["class", "alert-box error", 4, "ngIf"], [1, "settings-grid"], [1, "form-column"], [1, "card-box"], [1, "card-header"], [1, "header-icon"], [1, "bi", "bi-tag-fill"], [1, "card-body"], [1, "form-row"], [1, "form-group", "col-7"], [1, "req"], ["type", "text", "placeholder", "e.g. goWILD Karunadu", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "helper-text"], [1, "form-group", "col-5"], ["type", "text", "placeholder", "e.g. \u0C95\u0CB0\u0CC1\u0CA8\u0CBE\u0CA1\u0CC1", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-group"], ["type", "text", "placeholder", "e.g. Wilderness Expeditions & Western Ghats Trails", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "bi", "bi-telephone-fill"], [1, "form-group", "col-6"], [1, "input-with-icon"], [1, "bi", "bi-telephone"], ["type", "text", "placeholder", "+91 98765 43210", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "bi", "bi-whatsapp"], [1, "bi", "bi-envelope"], ["type", "email", "placeholder", "info@gowildkarunadu.com", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "bi", "bi-geo-alt"], ["type", "text", "placeholder", "Bengaluru, Karnataka", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "bi", "bi-shield-check"], ["type", "text", "placeholder", "e.g. goWILD Karunadu Eco-Adventures Pvt Ltd", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "e.g. 29AAGCW9123K1Z8", 1, "form-control", 3, "ngModelChange", "ngModel"], ["rows", "2", "placeholder", "Street address, city, state and PIN code", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "bi", "bi-share-fill"], [1, "bi", "bi-instagram", "me-1"], ["type", "url", "placeholder", "https://instagram.com/gowildkarunadu", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "bi", "bi-facebook", "me-1"], ["type", "url", "placeholder", "https://facebook.com/gowildkarunadu", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "bi", "bi-youtube", "me-1"], ["type", "url", "placeholder", "https://youtube.com/@gowildkarunadu", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "bi", "bi-card-text"], ["rows", "3", "placeholder", "Describe your expedition services...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "bi", "bi-layers-fill"], [1, "bi", "bi-journal-bookmark-fill", "me-1"], ["type", "number", "min", "1", "max", "50", "placeholder", "5", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-hint"], [1, "bi", "bi-question-diamond-fill", "me-1"], ["type", "number", "min", "1", "max", "100", "placeholder", "8", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "save-bar"], ["type", "button", 1, "btn-app", "primary", "btn-save-large", 3, "click", "disabled"], [4, "ngIf"], [1, "preview-column"], [1, "preview-sticky"], [1, "preview-badge"], [1, "bi", "bi-eye-fill", "me-1"], [1, "preview-card"], [1, "preview-card-title"], [1, "mock-top-bar"], [1, "mock-top-item"], [1, "bi", "bi-geo-alt-fill"], [1, "mock-divider"], [1, "bi", "bi-envelope-fill"], [1, "mock-navbar"], [1, "mock-brand"], [1, "mock-logo-title"], ["class", "mock-logo-sub", 4, "ngIf"], [1, "mock-nav-links"], [1, "mock-wa-preview"], [1, "mock-wa-icon"], [1, "mock-wa-info"], [1, "mock-wa-name"], [1, "mock-wa-sub"], [1, "mock-email-footer"], [1, "mock-email-support"], [1, "mock-email-hours"], [1, "mock-email-copy"], [1, "mock-invoice-header"], [1, "mock-inv-name"], [1, "mock-inv-legal"], [1, "mock-inv-meta"], [1, "mock-inv-addr"], [1, "mock-footer-copy"], [1, "alert-box", "success"], [1, "bi", "bi-check-circle-fill"], [1, "alert-box", "error"], [1, "bi", "bi-exclamation-triangle-fill"], [1, "bi", "bi-cloud-arrow-up-fill", "me-2"], [1, "bi", "bi-arrow-repeat", "spin", "me-2"], [1, "mock-logo-sub"]], template: function SettingsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "app-admin-shell", 0)(2, "div", 1);
    \u0275\u0275template(3, SettingsComponent_div_3_Template, 4, 1, "div", 2)(4, SettingsComponent_div_4_Template, 4, 1, "div", 3);
    \u0275\u0275elementStart(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8);
    \u0275\u0275element(10, "i", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div")(12, "h3");
    \u0275\u0275text(13, "Brand Identity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p");
    \u0275\u0275text(15, "Primary trade name and regional labels displayed across header, footer, and emails");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 10)(17, "div", 11)(18, "div", 12)(19, "label");
    \u0275\u0275text(20, "Brand Name ");
    \u0275\u0275elementStart(21, "span", 13);
    \u0275\u0275text(22, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.settings.brandName, $event) || (ctx.settings.brandName = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "small", 15);
    \u0275\u0275text(25, "Used on navbar, copyright, email subjects, and summit certificates");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 16)(27, "label");
    \u0275\u0275text(28, "Regional / Kannada Subtitle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 17);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.settings.brandSubtitle, $event) || (ctx.settings.brandSubtitle = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "small", 15);
    \u0275\u0275text(31, "Displayed underneath the logo");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 18)(33, "label");
    \u0275\u0275text(34, "Tagline / Motto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.settings.brandTagline, $event) || (ctx.settings.brandTagline = $event);
      return $event;
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(36, "div", 6)(37, "div", 7)(38, "div", 8);
    \u0275\u0275element(39, "i", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div")(41, "h3");
    \u0275\u0275text(42, "Support & Contact Channels");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "p");
    \u0275\u0275text(44, "Customer helpdesk numbers and emails displayed on top bar, footer, and receipts");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "div", 10)(46, "div", 11)(47, "div", 21)(48, "label");
    \u0275\u0275text(49, "Primary Support Phone ");
    \u0275\u0275elementStart(50, "span", 13);
    \u0275\u0275text(51, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 22);
    \u0275\u0275element(53, "i", 23);
    \u0275\u0275elementStart(54, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Template_input_ngModelChange_54_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.settings.supportPhone, $event) || (ctx.settings.supportPhone = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "small", 15);
    \u0275\u0275text(56, "Displayed on header bar, footer, and call links");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 21)(58, "label");
    \u0275\u0275text(59, "WhatsApp Support Number ");
    \u0275\u0275elementStart(60, "span", 13);
    \u0275\u0275text(61, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 22);
    \u0275\u0275element(63, "i", 25);
    \u0275\u0275elementStart(64, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Template_input_ngModelChange_64_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.settings.whatsappNumber, $event) || (ctx.settings.whatsappNumber = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "small", 15);
    \u0275\u0275text(66, "Powers floating WhatsApp button and chat links");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(67, "div", 11)(68, "div", 21)(69, "label");
    \u0275\u0275text(70, "Primary Support Email ");
    \u0275\u0275elementStart(71, "span", 13);
    \u0275\u0275text(72, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "div", 22);
    \u0275\u0275element(74, "i", 26);
    \u0275\u0275elementStart(75, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Template_input_ngModelChange_75_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.settings.supportEmail, $event) || (ctx.settings.supportEmail = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "small", 15);
    \u0275\u0275text(77, "Recipients can reply to this email for customer support");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "div", 21)(79, "label");
    \u0275\u0275text(80, "Headquarters / Base Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "div", 22);
    \u0275\u0275element(82, "i", 28);
    \u0275\u0275elementStart(83, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Template_input_ngModelChange_83_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.settings.contactLocation, $event) || (ctx.settings.contactLocation = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "small", 15);
    \u0275\u0275text(85, "Displayed on navbar top contact strip");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(86, "div", 6)(87, "div", 7)(88, "div", 8);
    \u0275\u0275element(89, "i", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "div")(91, "h3");
    \u0275\u0275text(92, "Legal & Business Entity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "p");
    \u0275\u0275text(94, "Registered enterprise details appearing on official tax invoices and booking passes");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(95, "div", 10)(96, "div", 11)(97, "div", 12)(98, "label");
    \u0275\u0275text(99, "Full Legal Entity Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Template_input_ngModelChange_100_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.settings.legalName, $event) || (ctx.settings.legalName = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(101, "div", 16)(102, "label");
    \u0275\u0275text(103, "GSTIN Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Template_input_ngModelChange_104_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.settings.gstin, $event) || (ctx.settings.gstin = $event);
      return $event;
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(105, "div", 18)(106, "label");
    \u0275\u0275text(107, "Official Registered Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "textarea", 33);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Template_textarea_ngModelChange_108_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.settings.address, $event) || (ctx.settings.address = $event);
      return $event;
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(109, "div", 6)(110, "div", 7)(111, "div", 8);
    \u0275\u0275element(112, "i", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "div")(114, "h3");
    \u0275\u0275text(115, "Social Media Links");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "p");
    \u0275\u0275text(117, "Public channel URLs linked from the site footer and confirmation emails");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(118, "div", 10)(119, "div", 18)(120, "label");
    \u0275\u0275element(121, "i", 35);
    \u0275\u0275text(122, " Instagram Profile URL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(123, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Template_input_ngModelChange_123_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.settings.socialInstagram, $event) || (ctx.settings.socialInstagram = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(124, "div", 18)(125, "label");
    \u0275\u0275element(126, "i", 37);
    \u0275\u0275text(127, " Facebook Page URL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(128, "input", 38);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Template_input_ngModelChange_128_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.settings.socialFacebook, $event) || (ctx.settings.socialFacebook = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(129, "div", 18)(130, "label");
    \u0275\u0275element(131, "i", 39);
    \u0275\u0275text(132, " YouTube Channel URL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(133, "input", 40);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Template_input_ngModelChange_133_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.settings.socialYoutube, $event) || (ctx.settings.socialYoutube = $event);
      return $event;
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(134, "div", 6)(135, "div", 7)(136, "div", 8);
    \u0275\u0275element(137, "i", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(138, "div")(139, "h3");
    \u0275\u0275text(140, "Company Story Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(141, "p");
    \u0275\u0275text(142, "Short bio displayed in the footer about section");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(143, "div", 10)(144, "div", 18)(145, "textarea", 42);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Template_textarea_ngModelChange_145_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.settings.aboutText, $event) || (ctx.settings.aboutText = $event);
      return $event;
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(146, "div", 6)(147, "div", 7)(148, "div", 8);
    \u0275\u0275element(149, "i", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(150, "div")(151, "h3");
    \u0275\u0275text(152, "Pagination & Display Controls");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(153, "p");
    \u0275\u0275text(154, "Control the dynamic number of items shown per page on user-facing portals");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(155, "div", 10)(156, "div", 11)(157, "div", 18)(158, "label");
    \u0275\u0275element(159, "i", 44);
    \u0275\u0275text(160, " Bookings Per Page (My Bookings)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(161, "input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Template_input_ngModelChange_161_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.settings.bookingsPerPage, $event) || (ctx.settings.bookingsPerPage = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(162, "small", 46);
    \u0275\u0275text(163, "Number of booking tickets rendered before showing page numbers.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(164, "div", 18)(165, "label");
    \u0275\u0275element(166, "i", 47);
    \u0275\u0275text(167, " FAQs Per Page (Help Center)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(168, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Template_input_ngModelChange_168_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.settings.faqsPerPage, $event) || (ctx.settings.faqsPerPage = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(169, "small", 46);
    \u0275\u0275text(170, "Number of questions shown per category tab before pagination.");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(171, "div", 49)(172, "button", 50);
    \u0275\u0275listener("click", function SettingsComponent_Template_button_click_172_listener() {
      return ctx.saveSettings();
    });
    \u0275\u0275template(173, SettingsComponent_span_173_Template, 3, 0, "span", 51)(174, SettingsComponent_span_174_Template, 3, 0, "span", 51);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(175, "div", 52)(176, "div", 53)(177, "div", 54);
    \u0275\u0275element(178, "i", 55);
    \u0275\u0275text(179, " Live Real-Time Preview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(180, "div", 56)(181, "div", 57);
    \u0275\u0275text(182, "Site Header Strip Preview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(183, "div", 58)(184, "div", 59);
    \u0275\u0275element(185, "i", 60);
    \u0275\u0275elementStart(186, "span");
    \u0275\u0275text(187);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(188, "div", 61);
    \u0275\u0275elementStart(189, "div", 59);
    \u0275\u0275element(190, "i", 20);
    \u0275\u0275elementStart(191, "span");
    \u0275\u0275text(192);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(193, "div", 61);
    \u0275\u0275elementStart(194, "div", 59);
    \u0275\u0275element(195, "i", 62);
    \u0275\u0275elementStart(196, "span");
    \u0275\u0275text(197);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(198, "div", 63)(199, "div", 64)(200, "span", 65);
    \u0275\u0275text(201);
    \u0275\u0275elementEnd();
    \u0275\u0275template(202, SettingsComponent_span_202_Template, 2, 1, "span", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(203, "div", 67)(204, "span");
    \u0275\u0275text(205, "Treks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(206, "span");
    \u0275\u0275text(207, "About");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(208, "span");
    \u0275\u0275text(209, "Blog");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(210, "span");
    \u0275\u0275text(211, "Contact");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(212, "div", 56)(213, "div", 57);
    \u0275\u0275text(214, "WhatsApp Floating Widget");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(215, "div", 68)(216, "div", 69);
    \u0275\u0275element(217, "i", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(218, "div", 70)(219, "div", 71);
    \u0275\u0275text(220);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(221, "div", 72);
    \u0275\u0275text(222);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(223, "div", 56)(224, "div", 57);
    \u0275\u0275text(225, "Booking Confirmation Email Footer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(226, "div", 73)(227, "div", 74);
    \u0275\u0275text(228);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(229, "div", 75);
    \u0275\u0275text(230, "Support Hours: 9:00 AM \u2013 6:00 PM (Mon\u2013Sat)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(231, "div", 76);
    \u0275\u0275text(232);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(233, "div", 56)(234, "div", 57);
    \u0275\u0275text(235, "Tax Invoice & Pass Header");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(236, "div", 77)(237, "div", 78);
    \u0275\u0275text(238);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(239, "div", 79);
    \u0275\u0275text(240);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(241, "div", 80);
    \u0275\u0275text(242);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(243, "div", 81);
    \u0275\u0275text(244);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(245, "div", 56)(246, "div", 57);
    \u0275\u0275text(247, "Footer Copyright Bar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(248, "div", 82);
    \u0275\u0275text(249);
    \u0275\u0275elementStart(250, "strong");
    \u0275\u0275text(251);
    \u0275\u0275elementEnd();
    \u0275\u0275text(252, ". All rights reserved. ");
    \u0275\u0275elementEnd()()()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.successMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorMessage);
    \u0275\u0275advance(19);
    \u0275\u0275twoWayProperty("ngModel", ctx.settings.brandName);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx.settings.brandSubtitle);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx.settings.brandTagline);
    \u0275\u0275advance(19);
    \u0275\u0275twoWayProperty("ngModel", ctx.settings.supportPhone);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx.settings.whatsappNumber);
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx.settings.supportEmail);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx.settings.contactLocation);
    \u0275\u0275advance(17);
    \u0275\u0275twoWayProperty("ngModel", ctx.settings.legalName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.settings.gstin);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.settings.address);
    \u0275\u0275advance(15);
    \u0275\u0275twoWayProperty("ngModel", ctx.settings.socialInstagram);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx.settings.socialFacebook);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx.settings.socialYoutube);
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx.settings.aboutText);
    \u0275\u0275advance(16);
    \u0275\u0275twoWayProperty("ngModel", ctx.settings.bookingsPerPage);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx.settings.faqsPerPage);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx.saving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.saving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.saving);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx.settings.contactLocation || "Bengaluru, Karnataka");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx.settings.supportPhone || "+91 98765 43210");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx.settings.supportEmail || "info@gowildkarunadu.com");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx.settings.brandName || "goWILD Karunadu");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.settings.brandSubtitle);
    \u0275\u0275advance(18);
    \u0275\u0275textInterpolate1("Chat with ", ctx.settings.brandName || "goWILD Karunadu");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Click opens wa.me/", ctx.settings.whatsappNumberRaw || "919876543210");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2(" ", ctx.settings.supportEmail || "info@gowildkarunadu.com", " \xA0\u2022\xA0 ", ctx.settings.supportPhone || "+91 98765 43210", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" \xA9 ", ctx.currentYear, " ", ctx.settings.brandName || "goWILD Karunadu", ". All rights reserved. ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx.settings.brandName || "goWILD Karunadu");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.settings.legalName || "goWILD Karunadu Eco-Adventures Pvt Ltd");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("GSTIN: ", ctx.settings.gstin || "29AAGCW9123K1Z8");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.settings.address || "Bengaluru, Karnataka");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" Copyright \xA9 ", ctx.currentYear, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.settings.brandName || "goWILD Karunadu");
  }
}, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel, AdminShellComponent], styles: ["\n\n.settings-container[_ngcontent-%COMP%] {\n  padding: 24px 32px 64px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.alert-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 18px;\n  border-radius: 12px;\n  margin-bottom: 24px;\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n.alert-box.success[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  border: 1px solid #a7f3d0;\n  color: #065f46;\n}\n.alert-box.success[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: #10b981;\n}\n.alert-box.error[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #991b1b;\n}\n.alert-box.error[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: #ef4444;\n}\n.settings-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 420px;\n  gap: 28px;\n  align-items: start;\n}\n@media (max-width: 1100px) {\n  .settings-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.card-box[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 16px;\n  margin-bottom: 24px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);\n  overflow: hidden;\n}\n.card-box[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 20px 24px;\n  border-bottom: 1px solid #f1f5f9;\n  background: #fafaf9;\n}\n.card-box[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  background: #ecfdf5;\n  color: #059669;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.15rem;\n}\n.card-box[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.card-box[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #64748b;\n  margin: 2px 0 0;\n}\n.card-box[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n@media (max-width: 600px) {\n  .form-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 12px;\n  }\n}\n.form-row[_ngcontent-%COMP%]   .col-5[_ngcontent-%COMP%] {\n  flex: 5;\n}\n.form-row[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%] {\n  flex: 6;\n}\n.form-row[_ngcontent-%COMP%]   .col-7[_ngcontent-%COMP%] {\n  flex: 7;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  display: flex;\n  flex-direction: column;\n}\n.form-group[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: #334155;\n  margin-bottom: 6px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .req[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-weight: 700;\n}\n.form-group[_ngcontent-%COMP%]   .helper-text[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #94a3b8;\n  margin-top: 4px;\n}\n.form-control[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1.5px solid #cbd5e1;\n  border-radius: 10px;\n  padding: 10px 14px;\n  font-size: 0.88rem;\n  color: #0f172a;\n  outline: none;\n  transition: all 0.2s ease;\n  width: 100%;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: #10b981;\n  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.15);\n}\n.input-with-icon[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.input-with-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 14px;\n  color: #94a3b8;\n  font-size: 0.95rem;\n  pointer-events: none;\n}\n.input-with-icon[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding-left: 38px;\n}\n.save-bar[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  margin-bottom: 32px;\n}\n.save-bar[_ngcontent-%COMP%]   .btn-save-large[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px 28px;\n  font-size: 1rem;\n  font-weight: 700;\n  justify-content: center;\n}\n.spin[_ngcontent-%COMP%] {\n  display: inline-block;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.preview-column[_ngcontent-%COMP%]   .preview-sticky[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.preview-column[_ngcontent-%COMP%]   .preview-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  background: #eff6ff;\n  color: #2563eb;\n  border: 1px solid #bfdbfe;\n  font-size: 0.76rem;\n  font-weight: 700;\n  padding: 6px 14px;\n  border-radius: 20px;\n  align-self: flex-start;\n}\n.preview-column[_ngcontent-%COMP%]   .preview-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 16px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);\n}\n.preview-column[_ngcontent-%COMP%]   .preview-card[_ngcontent-%COMP%]   .preview-card-title[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  font-weight: 700;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 12px;\n  border-bottom: 1px solid #f1f5f9;\n  padding-bottom: 6px;\n}\n.preview-column[_ngcontent-%COMP%]   .mock-top-bar[_ngcontent-%COMP%] {\n  background: #1e293b;\n  color: #e2e8f0;\n  padding: 8px 12px;\n  border-radius: 8px 8px 0 0;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 0.7rem;\n}\n.preview-column[_ngcontent-%COMP%]   .mock-top-bar[_ngcontent-%COMP%]   .mock-top-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.preview-column[_ngcontent-%COMP%]   .mock-top-bar[_ngcontent-%COMP%]   .mock-top-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #4ade80;\n  font-size: 0.75rem;\n}\n.preview-column[_ngcontent-%COMP%]   .mock-top-bar[_ngcontent-%COMP%]   .mock-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 12px;\n  background: rgba(255, 255, 255, 0.2);\n}\n.preview-column[_ngcontent-%COMP%]   .mock-navbar[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-top: none;\n  border-radius: 0 0 8px 8px;\n  padding: 10px 14px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.preview-column[_ngcontent-%COMP%]   .mock-navbar[_ngcontent-%COMP%]   .mock-brand[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.preview-column[_ngcontent-%COMP%]   .mock-navbar[_ngcontent-%COMP%]   .mock-brand[_ngcontent-%COMP%]   .mock-logo-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 800;\n  color: #15803d;\n}\n.preview-column[_ngcontent-%COMP%]   .mock-navbar[_ngcontent-%COMP%]   .mock-brand[_ngcontent-%COMP%]   .mock-logo-sub[_ngcontent-%COMP%] {\n  font-size: 0.62rem;\n  color: #64748b;\n  letter-spacing: 2px;\n}\n.preview-column[_ngcontent-%COMP%]   .mock-navbar[_ngcontent-%COMP%]   .mock-nav-links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  font-size: 0.72rem;\n  color: #475569;\n  font-weight: 500;\n}\n.preview-column[_ngcontent-%COMP%]   .mock-wa-preview[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  border-radius: 12px;\n  padding: 12px 14px;\n}\n.preview-column[_ngcontent-%COMP%]   .mock-wa-preview[_ngcontent-%COMP%]   .mock-wa-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: #22c55e;\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.25rem;\n}\n.preview-column[_ngcontent-%COMP%]   .mock-wa-preview[_ngcontent-%COMP%]   .mock-wa-name[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  font-weight: 700;\n  color: #166534;\n}\n.preview-column[_ngcontent-%COMP%]   .mock-wa-preview[_ngcontent-%COMP%]   .mock-wa-sub[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #15803d;\n  margin-top: 1px;\n}\n.preview-column[_ngcontent-%COMP%]   .mock-email-footer[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px dashed #cbd5e1;\n  border-radius: 10px;\n  padding: 14px;\n  text-align: center;\n}\n.preview-column[_ngcontent-%COMP%]   .mock-email-footer[_ngcontent-%COMP%]   .mock-email-support[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  font-weight: 600;\n  color: #334155;\n}\n.preview-column[_ngcontent-%COMP%]   .mock-email-footer[_ngcontent-%COMP%]   .mock-email-hours[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: #64748b;\n  margin-top: 3px;\n}\n.preview-column[_ngcontent-%COMP%]   .mock-email-footer[_ngcontent-%COMP%]   .mock-email-copy[_ngcontent-%COMP%] {\n  font-size: 0.66rem;\n  color: #94a3b8;\n  margin-top: 8px;\n}\n.preview-column[_ngcontent-%COMP%]   .mock-invoice-header[_ngcontent-%COMP%] {\n  background: #fcfbf9;\n  border-left: 3px solid #15803d;\n  padding: 10px 14px;\n  border-radius: 0 8px 8px 0;\n}\n.preview-column[_ngcontent-%COMP%]   .mock-invoice-header[_ngcontent-%COMP%]   .mock-inv-name[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.preview-column[_ngcontent-%COMP%]   .mock-invoice-header[_ngcontent-%COMP%]   .mock-inv-legal[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #475569;\n}\n.preview-column[_ngcontent-%COMP%]   .mock-invoice-header[_ngcontent-%COMP%]   .mock-inv-meta[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: #64748b;\n  margin-top: 2px;\n}\n.preview-column[_ngcontent-%COMP%]   .mock-invoice-header[_ngcontent-%COMP%]   .mock-inv-addr[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: #94a3b8;\n  margin-top: 2px;\n}\n.preview-column[_ngcontent-%COMP%]   .mock-footer-copy[_ngcontent-%COMP%] {\n  background: #0f172a;\n  color: #94a3b8;\n  padding: 10px 14px;\n  border-radius: 8px;\n  text-align: center;\n  font-size: 0.74rem;\n}\n.preview-column[_ngcontent-%COMP%]   .mock-footer-copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #f1f5f9;\n}\n/*# sourceMappingURL=settings.component.css.map */"] });
var SettingsComponent = _SettingsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsComponent, [{
    type: Component,
    args: [{ selector: "app-settings", standalone: true, imports: [CommonModule, FormsModule, AdminShellComponent], schemas: [CUSTOM_ELEMENTS_SCHEMA], template: `<div>
<app-admin-shell
  title="Brand & System Settings"
  subtitle="Configure dynamic brand name, support contacts, emails, and entity details across all user apps and operations"
  sectionLabel="Configuration">

  <div class="settings-container">
    
    <!-- Alerts -->
    <div class="alert-box success" *ngIf="successMessage">
      <i class="bi bi-check-circle-fill"></i>
      <span>{{ successMessage }}</span>
    </div>
    <div class="alert-box error" *ngIf="errorMessage">
      <i class="bi bi-exclamation-triangle-fill"></i>
      <span>{{ errorMessage }}</span>
    </div>

    <!-- Main Grid -->
    <div class="settings-grid">
      
      <!-- Left Column: Form Fields -->
      <div class="form-column">

        <!-- 1. Brand Identity Card -->
        <div class="card-box">
          <div class="card-header">
            <div class="header-icon"><i class="bi bi-tag-fill"></i></div>
            <div>
              <h3>Brand Identity</h3>
              <p>Primary trade name and regional labels displayed across header, footer, and emails</p>
            </div>
          </div>
          <div class="card-body">
            <div class="form-row">
              <div class="form-group col-7">
                <label>Brand Name <span class="req">*</span></label>
                <input
                  type="text"
                  class="form-control"
                  [(ngModel)]="settings.brandName"
                  placeholder="e.g. goWILD Karunadu"
                />
                <small class="helper-text">Used on navbar, copyright, email subjects, and summit certificates</small>
              </div>
              <div class="form-group col-5">
                <label>Regional / Kannada Subtitle</label>
                <input
                  type="text"
                  class="form-control"
                  [(ngModel)]="settings.brandSubtitle"
                  placeholder="e.g. \u0C95\u0CB0\u0CC1\u0CA8\u0CBE\u0CA1\u0CC1"
                />
                <small class="helper-text">Displayed underneath the logo</small>
              </div>
            </div>

            <div class="form-group">
              <label>Tagline / Motto</label>
              <input
                type="text"
                class="form-control"
                [(ngModel)]="settings.brandTagline"
                placeholder="e.g. Wilderness Expeditions & Western Ghats Trails"
              />
            </div>
          </div>
        </div>

        <!-- 2. Support & Contact Channels Card -->
        <div class="card-box">
          <div class="card-header">
            <div class="header-icon"><i class="bi bi-telephone-fill"></i></div>
            <div>
              <h3>Support & Contact Channels</h3>
              <p>Customer helpdesk numbers and emails displayed on top bar, footer, and receipts</p>
            </div>
          </div>
          <div class="card-body">
            <div class="form-row">
              <div class="form-group col-6">
                <label>Primary Support Phone <span class="req">*</span></label>
                <div class="input-with-icon">
                  <i class="bi bi-telephone"></i>
                  <input
                    type="text"
                    class="form-control"
                    [(ngModel)]="settings.supportPhone"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <small class="helper-text">Displayed on header bar, footer, and call links</small>
              </div>

              <div class="form-group col-6">
                <label>WhatsApp Support Number <span class="req">*</span></label>
                <div class="input-with-icon">
                  <i class="bi bi-whatsapp"></i>
                  <input
                    type="text"
                    class="form-control"
                    [(ngModel)]="settings.whatsappNumber"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <small class="helper-text">Powers floating WhatsApp button and chat links</small>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-6">
                <label>Primary Support Email <span class="req">*</span></label>
                <div class="input-with-icon">
                  <i class="bi bi-envelope"></i>
                  <input
                    type="email"
                    class="form-control"
                    [(ngModel)]="settings.supportEmail"
                    placeholder="info@gowildkarunadu.com"
                  />
                </div>
                <small class="helper-text">Recipients can reply to this email for customer support</small>
              </div>

              <div class="form-group col-6">
                <label>Headquarters / Base Location</label>
                <div class="input-with-icon">
                  <i class="bi bi-geo-alt"></i>
                  <input
                    type="text"
                    class="form-control"
                    [(ngModel)]="settings.contactLocation"
                    placeholder="Bengaluru, Karnataka"
                  />
                </div>
                <small class="helper-text">Displayed on navbar top contact strip</small>
              </div>
            </div>
          </div>
        </div>

        <!-- 3. Legal & Business Entity Card -->
        <div class="card-box">
          <div class="card-header">
            <div class="header-icon"><i class="bi bi-shield-check"></i></div>
            <div>
              <h3>Legal & Business Entity</h3>
              <p>Registered enterprise details appearing on official tax invoices and booking passes</p>
            </div>
          </div>
          <div class="card-body">
            <div class="form-row">
              <div class="form-group col-7">
                <label>Full Legal Entity Name</label>
                <input
                  type="text"
                  class="form-control"
                  [(ngModel)]="settings.legalName"
                  placeholder="e.g. goWILD Karunadu Eco-Adventures Pvt Ltd"
                />
              </div>
              <div class="form-group col-5">
                <label>GSTIN Number</label>
                <input
                  type="text"
                  class="form-control"
                  [(ngModel)]="settings.gstin"
                  placeholder="e.g. 29AAGCW9123K1Z8"
                />
              </div>
            </div>

            <div class="form-group">
              <label>Official Registered Address</label>
              <textarea
                class="form-control"
                rows="2"
                [(ngModel)]="settings.address"
                placeholder="Street address, city, state and PIN code"
              ></textarea>
            </div>
          </div>
        </div>

        <!-- 4. Social Media Links Card -->
        <div class="card-box">
          <div class="card-header">
            <div class="header-icon"><i class="bi bi-share-fill"></i></div>
            <div>
              <h3>Social Media Links</h3>
              <p>Public channel URLs linked from the site footer and confirmation emails</p>
            </div>
          </div>
          <div class="card-body">
            <div class="form-group">
              <label><i class="bi bi-instagram me-1"></i> Instagram Profile URL</label>
              <input
                type="url"
                class="form-control"
                [(ngModel)]="settings.socialInstagram"
                placeholder="https://instagram.com/gowildkarunadu"
              />
            </div>
            <div class="form-group">
              <label><i class="bi bi-facebook me-1"></i> Facebook Page URL</label>
              <input
                type="url"
                class="form-control"
                [(ngModel)]="settings.socialFacebook"
                placeholder="https://facebook.com/gowildkarunadu"
              />
            </div>
            <div class="form-group">
              <label><i class="bi bi-youtube me-1"></i> YouTube Channel URL</label>
              <input
                type="url"
                class="form-control"
                [(ngModel)]="settings.socialYoutube"
                placeholder="https://youtube.com/@gowildkarunadu"
              />
            </div>
          </div>
        </div>

        <!-- 5. About Blurb Card -->
        <div class="card-box">
          <div class="card-header">
            <div class="header-icon"><i class="bi bi-card-text"></i></div>
            <div>
              <h3>Company Story Summary</h3>
              <p>Short bio displayed in the footer about section</p>
            </div>
          </div>
          <div class="card-body">
            <div class="form-group">
              <textarea
                class="form-control"
                rows="3"
                [(ngModel)]="settings.aboutText"
                placeholder="Describe your expedition services..."
              ></textarea>
            </div>
          </div>
        </div>

        <!-- 6. Pagination & Display Controls Card -->
        <div class="card-box">
          <div class="card-header">
            <div class="header-icon"><i class="bi bi-layers-fill"></i></div>
            <div>
              <h3>Pagination &amp; Display Controls</h3>
              <p>Control the dynamic number of items shown per page on user-facing portals</p>
            </div>
          </div>
          <div class="card-body">
            <div class="form-row">
              <div class="form-group">
                <label><i class="bi bi-journal-bookmark-fill me-1"></i> Bookings Per Page (My Bookings)</label>
                <input
                  type="number"
                  min="1"
                  max="50"
                  class="form-control"
                  [(ngModel)]="settings.bookingsPerPage"
                  placeholder="5"
                />
                <small class="form-hint">Number of booking tickets rendered before showing page numbers.</small>
              </div>
              <div class="form-group">
                <label><i class="bi bi-question-diamond-fill me-1"></i> FAQs Per Page (Help Center)</label>
                <input
                  type="number"
                  min="1"
                  max="100"
                  class="form-control"
                  [(ngModel)]="settings.faqsPerPage"
                  placeholder="8"
                />
                <small class="form-hint">Number of questions shown per category tab before pagination.</small>
              </div>
            </div>
          </div>
        </div>

        <!-- Save Action Bar -->
        <div class="save-bar">
          <button
            type="button"
            class="btn-app primary btn-save-large"
            [disabled]="saving"
            (click)="saveSettings()">
            <span *ngIf="!saving"><i class="bi bi-cloud-arrow-up-fill me-2"></i>Save & Propagate Brand Settings</span>
            <span *ngIf="saving"><i class="bi bi-arrow-repeat spin me-2"></i>Saving & Propagating...</span>
          </button>
        </div>

      </div>

      <!-- Right Column: Live Instant Preview -->
      <div class="preview-column">
        <div class="preview-sticky">
          <div class="preview-badge"><i class="bi bi-eye-fill me-1"></i> Live Real-Time Preview</div>

          <!-- Preview: Header Contact Bar -->
          <div class="preview-card">
            <div class="preview-card-title">Site Header Strip Preview</div>
            <div class="mock-top-bar">
              <div class="mock-top-item">
                <i class="bi bi-geo-alt-fill"></i>
                <span>{{ settings.contactLocation || 'Bengaluru, Karnataka' }}</span>
              </div>
              <div class="mock-divider"></div>
              <div class="mock-top-item">
                <i class="bi bi-telephone-fill"></i>
                <span>{{ settings.supportPhone || '+91 98765 43210' }}</span>
              </div>
              <div class="mock-divider"></div>
              <div class="mock-top-item">
                <i class="bi bi-envelope-fill"></i>
                <span>{{ settings.supportEmail || 'info@gowildkarunadu.com' }}</span>
              </div>
            </div>
            <div class="mock-navbar">
              <div class="mock-brand">
                <span class="mock-logo-title">{{ settings.brandName || 'goWILD Karunadu' }}</span>
                <span class="mock-logo-sub" *ngIf="settings.brandSubtitle">{{ settings.brandSubtitle }}</span>
              </div>
              <div class="mock-nav-links">
                <span>Treks</span>
                <span>About</span>
                <span>Blog</span>
                <span>Contact</span>
              </div>
            </div>
          </div>

          <!-- Preview: WhatsApp Float Widget -->
          <div class="preview-card">
            <div class="preview-card-title">WhatsApp Floating Widget</div>
            <div class="mock-wa-preview">
              <div class="mock-wa-icon"><i class="bi bi-whatsapp"></i></div>
              <div class="mock-wa-info">
                <div class="mock-wa-name">Chat with {{ settings.brandName || 'goWILD Karunadu' }}</div>
                <div class="mock-wa-sub">Click opens wa.me/{{ settings.whatsappNumberRaw || '919876543210' }}</div>
              </div>
            </div>
          </div>

          <!-- Preview: Email Signature -->
          <div class="preview-card">
            <div class="preview-card-title">Booking Confirmation Email Footer</div>
            <div class="mock-email-footer">
              <div class="mock-email-support">
                {{ settings.supportEmail || 'info@gowildkarunadu.com' }} &nbsp;\u2022&nbsp; {{ settings.supportPhone || '+91 98765 43210' }}
              </div>
              <div class="mock-email-hours">Support Hours: 9:00 AM \u2013 6:00 PM (Mon\u2013Sat)</div>
              <div class="mock-email-copy">
                \xA9 {{ currentYear }} {{ settings.brandName || 'goWILD Karunadu' }}. All rights reserved.
              </div>
            </div>
          </div>

          <!-- Preview: Tax Invoice Company Block -->
          <div class="preview-card">
            <div class="preview-card-title">Tax Invoice & Pass Header</div>
            <div class="mock-invoice-header">
              <div class="mock-inv-name">{{ settings.brandName || 'goWILD Karunadu' }}</div>
              <div class="mock-inv-legal">{{ settings.legalName || 'goWILD Karunadu Eco-Adventures Pvt Ltd' }}</div>
              <div class="mock-inv-meta">GSTIN: {{ settings.gstin || '29AAGCW9123K1Z8' }}</div>
              <div class="mock-inv-addr">{{ settings.address || 'Bengaluru, Karnataka' }}</div>
            </div>
          </div>

          <!-- Preview: Site Footer Copyright -->
          <div class="preview-card">
            <div class="preview-card-title">Footer Copyright Bar</div>
            <div class="mock-footer-copy">
              Copyright &copy; {{ currentYear }} <strong>{{ settings.brandName || 'goWILD Karunadu' }}</strong>. All rights reserved.
            </div>
          </div>

        </div>
      </div>

    </div>

  </div>

</app-admin-shell>
</div>`, styles: ["/* src/app/settings/settings.component.scss */\n.settings-container {\n  padding: 24px 32px 64px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.alert-box {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 18px;\n  border-radius: 12px;\n  margin-bottom: 24px;\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n.alert-box.success {\n  background: #ecfdf5;\n  border: 1px solid #a7f3d0;\n  color: #065f46;\n}\n.alert-box.success i {\n  font-size: 1.2rem;\n  color: #10b981;\n}\n.alert-box.error {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #991b1b;\n}\n.alert-box.error i {\n  font-size: 1.2rem;\n  color: #ef4444;\n}\n.settings-grid {\n  display: grid;\n  grid-template-columns: 1fr 420px;\n  gap: 28px;\n  align-items: start;\n}\n@media (max-width: 1100px) {\n  .settings-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.card-box {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 16px;\n  margin-bottom: 24px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);\n  overflow: hidden;\n}\n.card-box .card-header {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 20px 24px;\n  border-bottom: 1px solid #f1f5f9;\n  background: #fafaf9;\n}\n.card-box .card-header .header-icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  background: #ecfdf5;\n  color: #059669;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.15rem;\n}\n.card-box .card-header h3 {\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.card-box .card-header p {\n  font-size: 0.8rem;\n  color: #64748b;\n  margin: 2px 0 0;\n}\n.card-box .card-body {\n  padding: 24px;\n}\n.form-row {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n@media (max-width: 600px) {\n  .form-row {\n    flex-direction: column;\n    gap: 12px;\n  }\n}\n.form-row .col-5 {\n  flex: 5;\n}\n.form-row .col-6 {\n  flex: 6;\n}\n.form-row .col-7 {\n  flex: 7;\n}\n.form-group {\n  margin-bottom: 16px;\n  display: flex;\n  flex-direction: column;\n}\n.form-group:last-child {\n  margin-bottom: 0;\n}\n.form-group label {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: #334155;\n  margin-bottom: 6px;\n}\n.form-group label .req {\n  color: #ef4444;\n  font-weight: 700;\n}\n.form-group .helper-text {\n  font-size: 0.72rem;\n  color: #94a3b8;\n  margin-top: 4px;\n}\n.form-control {\n  background: #ffffff;\n  border: 1.5px solid #cbd5e1;\n  border-radius: 10px;\n  padding: 10px 14px;\n  font-size: 0.88rem;\n  color: #0f172a;\n  outline: none;\n  transition: all 0.2s ease;\n  width: 100%;\n}\n.form-control:focus {\n  border-color: #10b981;\n  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.15);\n}\n.input-with-icon {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.input-with-icon i {\n  position: absolute;\n  left: 14px;\n  color: #94a3b8;\n  font-size: 0.95rem;\n  pointer-events: none;\n}\n.input-with-icon .form-control {\n  padding-left: 38px;\n}\n.save-bar {\n  margin-top: 24px;\n  margin-bottom: 32px;\n}\n.save-bar .btn-save-large {\n  width: 100%;\n  padding: 14px 28px;\n  font-size: 1rem;\n  font-weight: 700;\n  justify-content: center;\n}\n.spin {\n  display: inline-block;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.preview-column .preview-sticky {\n  position: sticky;\n  top: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.preview-column .preview-badge {\n  display: inline-flex;\n  align-items: center;\n  background: #eff6ff;\n  color: #2563eb;\n  border: 1px solid #bfdbfe;\n  font-size: 0.76rem;\n  font-weight: 700;\n  padding: 6px 14px;\n  border-radius: 20px;\n  align-self: flex-start;\n}\n.preview-column .preview-card {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 16px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);\n}\n.preview-column .preview-card .preview-card-title {\n  font-size: 0.74rem;\n  font-weight: 700;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 12px;\n  border-bottom: 1px solid #f1f5f9;\n  padding-bottom: 6px;\n}\n.preview-column .mock-top-bar {\n  background: #1e293b;\n  color: #e2e8f0;\n  padding: 8px 12px;\n  border-radius: 8px 8px 0 0;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 0.7rem;\n}\n.preview-column .mock-top-bar .mock-top-item {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.preview-column .mock-top-bar .mock-top-item i {\n  color: #4ade80;\n  font-size: 0.75rem;\n}\n.preview-column .mock-top-bar .mock-divider {\n  width: 1px;\n  height: 12px;\n  background: rgba(255, 255, 255, 0.2);\n}\n.preview-column .mock-navbar {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-top: none;\n  border-radius: 0 0 8px 8px;\n  padding: 10px 14px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.preview-column .mock-navbar .mock-brand {\n  display: flex;\n  flex-direction: column;\n}\n.preview-column .mock-navbar .mock-brand .mock-logo-title {\n  font-size: 0.95rem;\n  font-weight: 800;\n  color: #15803d;\n}\n.preview-column .mock-navbar .mock-brand .mock-logo-sub {\n  font-size: 0.62rem;\n  color: #64748b;\n  letter-spacing: 2px;\n}\n.preview-column .mock-navbar .mock-nav-links {\n  display: flex;\n  gap: 10px;\n  font-size: 0.72rem;\n  color: #475569;\n  font-weight: 500;\n}\n.preview-column .mock-wa-preview {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  border-radius: 12px;\n  padding: 12px 14px;\n}\n.preview-column .mock-wa-preview .mock-wa-icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: #22c55e;\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.25rem;\n}\n.preview-column .mock-wa-preview .mock-wa-name {\n  font-size: 0.84rem;\n  font-weight: 700;\n  color: #166534;\n}\n.preview-column .mock-wa-preview .mock-wa-sub {\n  font-size: 0.7rem;\n  color: #15803d;\n  margin-top: 1px;\n}\n.preview-column .mock-email-footer {\n  background: #f8fafc;\n  border: 1px dashed #cbd5e1;\n  border-radius: 10px;\n  padding: 14px;\n  text-align: center;\n}\n.preview-column .mock-email-footer .mock-email-support {\n  font-size: 0.76rem;\n  font-weight: 600;\n  color: #334155;\n}\n.preview-column .mock-email-footer .mock-email-hours {\n  font-size: 0.68rem;\n  color: #64748b;\n  margin-top: 3px;\n}\n.preview-column .mock-email-footer .mock-email-copy {\n  font-size: 0.66rem;\n  color: #94a3b8;\n  margin-top: 8px;\n}\n.preview-column .mock-invoice-header {\n  background: #fcfbf9;\n  border-left: 3px solid #15803d;\n  padding: 10px 14px;\n  border-radius: 0 8px 8px 0;\n}\n.preview-column .mock-invoice-header .mock-inv-name {\n  font-size: 0.88rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.preview-column .mock-invoice-header .mock-inv-legal {\n  font-size: 0.72rem;\n  color: #475569;\n}\n.preview-column .mock-invoice-header .mock-inv-meta {\n  font-size: 0.68rem;\n  color: #64748b;\n  margin-top: 2px;\n}\n.preview-column .mock-invoice-header .mock-inv-addr {\n  font-size: 0.68rem;\n  color: #94a3b8;\n  margin-top: 2px;\n}\n.preview-column .mock-footer-copy {\n  background: #0f172a;\n  color: #94a3b8;\n  padding: 10px 14px;\n  border-radius: 8px;\n  text-align: center;\n  font-size: 0.74rem;\n}\n.preview-column .mock-footer-copy strong {\n  color: #f1f5f9;\n}\n/*# sourceMappingURL=settings.component.css.map */\n"] }]
  }], () => [{ type: SettingsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsComponent, { className: "SettingsComponent", filePath: "src/app/settings/settings.component.ts", lineNumber: 15 });
})();

// src/app/settings/settings.module.ts
var routes = [
  {
    path: "",
    component: SettingsComponent
  }
];
var _SettingsModule = class _SettingsModule {
};
_SettingsModule.\u0275fac = function SettingsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SettingsModule)();
};
_SettingsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SettingsModule });
_SettingsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  RouterModule.forChild(routes),
  SettingsComponent
] });
var SettingsModule = _SettingsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsModule, [{
    type: NgModule,
    args: [{
      imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SettingsComponent
      ]
    }]
  }], null, null);
})();
export {
  SettingsModule
};
//# sourceMappingURL=settings.module-HZBBJQUD.js.map
