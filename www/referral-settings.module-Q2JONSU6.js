import {
  AdminShellComponent
} from "./chunk-GLAFLAWJ.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-QNEZ2FH5.js";
import "./chunk-D4XXJJII.js";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  CommonModule,
  Component,
  HttpClient,
  Injectable,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  RouterModule,
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
  ɵɵpureFunction4,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-KQE4QDNK.js";

// src/app/referrals/referral-settings.service.ts
var _ReferralSettingsService = class _ReferralSettingsService {
  constructor(http) {
    this.http = http;
    this.API = `${environment.baseUrl}/referrals/settings`;
  }
  getSettings() {
    return this.http.get(this.API);
  }
  updateSettings(payload) {
    return this.http.put(this.API, payload);
  }
};
_ReferralSettingsService.\u0275fac = function ReferralSettingsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ReferralSettingsService)(\u0275\u0275inject(HttpClient));
};
_ReferralSettingsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReferralSettingsService, factory: _ReferralSettingsService.\u0275fac, providedIn: "root" });
var ReferralSettingsService = _ReferralSettingsService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReferralSettingsService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/referrals/referral-settings/referral-settings.component.ts
var _c0 = (a0, a1, a2, a3) => ({ "bi-cash-coin": a0, "bi-gift": a1, "bi-trophy": a2, "bi-toggle2-on": a3 });
function ReferralSettingsComponent_section_14_article_1_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const card_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(card_r1.helper);
  }
}
function ReferralSettingsComponent_section_14_article_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 44)(1, "div", 45);
    \u0275\u0275element(2, "i", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 47)(4, "p", 48);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3", 49);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ReferralSettingsComponent_section_14_article_1_p_8_Template, 2, 1, "p", 50);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const card_r1 = ctx.$implicit;
    \u0275\u0275property("ngClass", card_r1.accent);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(5, _c0, card_r1.accent === "primary", card_r1.accent === "accent", card_r1.accent === "warning", !card_r1.accent));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(card_r1.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r1.value);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", card_r1.helper);
  }
}
function ReferralSettingsComponent_section_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 42);
    \u0275\u0275template(1, ReferralSettingsComponent_section_14_article_1_Template, 9, 10, "article", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.statCards);
  }
}
function ReferralSettingsComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275element(1, "ion-spinner", 53);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading referral program parameters\u2026");
    \u0275\u0275elementEnd()();
  }
}
function ReferralSettingsComponent_span_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 54);
    \u0275\u0275element(1, "i", 55);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("baseDiscount"), " ");
  }
}
function ReferralSettingsComponent_span_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 54);
    \u0275\u0275element(1, "i", 55);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("bonusDiscount"), " ");
  }
}
function ReferralSettingsComponent_span_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 54);
    \u0275\u0275element(1, "i", 55);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("bonusParticipantThreshold"), " ");
  }
}
function ReferralSettingsComponent_span_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 54);
    \u0275\u0275element(1, "i", 55);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("freeSlotThreshold"), " ");
  }
}
function ReferralSettingsComponent_span_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 54);
    \u0275\u0275element(1, "i", 55);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("freeSlotValue"), " ");
  }
}
function ReferralSettingsComponent_div_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275element(1, "i", 57);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.message, " ");
  }
}
function ReferralSettingsComponent_div_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275element(1, "i", 59);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.error, " ");
  }
}
var _ReferralSettingsComponent = class _ReferralSettingsComponent {
  constructor(fb, referralService) {
    this.fb = fb;
    this.referralService = referralService;
    this.loading = false;
    this.saving = false;
    this.message = "";
    this.error = "";
    this.statCards = [];
    this.settings = null;
    this.form = this.fb.group({
      baseDiscount: [200, [Validators.required, Validators.min(0)]],
      bonusDiscount: [500, [Validators.required, Validators.min(0)]],
      bonusParticipantThreshold: [5, [Validators.required, Validators.min(1)]],
      freeSlotThreshold: [5, [Validators.required, Validators.min(1)]],
      freeSlotValue: [1, [Validators.required, Validators.min(1)]],
      isEnabled: [true]
    });
  }
  ngOnInit() {
    this.loadSettings();
  }
  get statusLabel() {
    return this.form.get("isEnabled")?.value ? "Program Active" : "Program Paused";
  }
  get statusClass() {
    return this.form.get("isEnabled")?.value ? "active" : "inactive";
  }
  get lastUpdatedLabel() {
    if (!this.settings?.updatedAt)
      return "Not updated yet";
    const date = new Date(this.settings.updatedAt);
    const formatted = Number.isNaN(date.getTime()) ? this.settings.updatedAt : date.toLocaleString();
    const by = this.settings?.updatedBy?.name || this.settings?.updatedBy?.email || "Admin";
    return `Updated ${formatted} by ${by}`;
  }
  loadSettings() {
    this.loading = true;
    this.error = "";
    this.referralService.getSettings().subscribe({
      next: (res) => {
        const data = res?.data;
        if (data) {
          this.settings = data;
          this.form.patchValue({
            baseDiscount: data.baseDiscount,
            bonusDiscount: data.bonusDiscount,
            bonusParticipantThreshold: data.bonusParticipantThreshold,
            freeSlotThreshold: data.freeSlotThreshold,
            freeSlotValue: data.freeSlotValue,
            isEnabled: data.isEnabled !== 0
          });
          this.buildStatCards(data);
        }
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.error = "Failed to load referral settings";
      }
    });
  }
  saveSettings() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.error = "Please fix the highlighted fields";
      this.message = "";
      return;
    }
    const payload = this.buildPayload();
    this.saving = true;
    this.message = "";
    this.error = "";
    this.referralService.updateSettings(payload).subscribe({
      next: (res) => {
        this.saving = false;
        this.message = res?.message || "Referral settings updated";
        this.settings = res?.data || payload;
        if (this.settings) {
          this.form.patchValue({
            baseDiscount: this.settings.baseDiscount,
            bonusDiscount: this.settings.bonusDiscount,
            bonusParticipantThreshold: this.settings.bonusParticipantThreshold,
            freeSlotThreshold: this.settings.freeSlotThreshold,
            freeSlotValue: this.settings.freeSlotValue,
            isEnabled: this.settings.isEnabled !== 0
          });
          this.buildStatCards(this.settings);
        }
      },
      error: (err) => {
        this.saving = false;
        this.error = err?.error?.message || "Failed to update referral settings";
      }
    });
  }
  getFieldError(name) {
    const control = this.form.get(name);
    if (!control || !control.touched || !control.errors)
      return "";
    if (control.errors["required"])
      return "Required";
    if (control.errors["min"])
      return `Minimum value is ${control.errors["min"].min}`;
    return "Invalid value";
  }
  buildPayload() {
    return {
      baseDiscount: Number(this.form.get("baseDiscount")?.value || 0),
      bonusDiscount: Number(this.form.get("bonusDiscount")?.value || 0),
      bonusParticipantThreshold: Number(this.form.get("bonusParticipantThreshold")?.value || 0),
      freeSlotThreshold: Number(this.form.get("freeSlotThreshold")?.value || 0),
      freeSlotValue: Number(this.form.get("freeSlotValue")?.value || 0),
      isEnabled: !!this.form.get("isEnabled")?.value
    };
  }
  buildStatCards(data) {
    const active = data.isEnabled !== 0;
    this.statCards = [
      {
        label: "Base Discount",
        value: this.formatCurrency(data.baseDiscount),
        helper: "per successful referral",
        accent: "primary"
      },
      {
        label: "Bonus Discount",
        value: this.formatCurrency(data.bonusDiscount),
        helper: `when bringing ${data.bonusParticipantThreshold}+ participants`,
        accent: "accent"
      },
      {
        label: "Free Trek Reward",
        value: `${data.freeSlotValue} slot${data.freeSlotValue > 1 ? "s" : ""}`,
        helper: `after ${data.freeSlotThreshold} successful referrals`,
        accent: "warning"
      },
      {
        label: "Program Status",
        value: active ? "Active" : "Paused",
        helper: active ? "Users can apply referral codes" : "Referral codes disabled"
      }
    ];
  }
  formatCurrency(amount) {
    const value = Number(amount || 0);
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(value);
  }
};
_ReferralSettingsComponent.\u0275fac = function ReferralSettingsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ReferralSettingsComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ReferralSettingsService));
};
_ReferralSettingsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReferralSettingsComponent, selectors: [["app-referral-settings"]], decls: 102, vars: 17, consts: [[1, "referral-page"], ["sectionLabel", "Growth & Loyalty", "title", "Referral Program Settings", "subtitle", "Configure reward amounts, participant milestones, and free trek benefits for community ambassadors."], [1, "referral-container"], [1, "header-status-card", "surface-card"], [1, "status-left"], [1, "status-pill", 3, "ngClass"], [1, "dot"], [1, "program-hint"], [1, "status-right"], [1, "meta"], [1, "bi", "bi-clock-history", "me-1"], ["class", "stat-grid", 4, "ngIf"], ["class", "loading-state surface-card", 4, "ngIf"], ["novalidate", "", 1, "surface-card", "settings-form", 3, "ngSubmit", "formGroup"], [1, "form-section-title"], [1, "bi", "bi-sliders"], [1, "form-grid-3"], [1, "form-group"], [1, "req"], [1, "input-with-icon"], [1, "currency-symbol"], ["type", "number", "formControlName", "baseDiscount", "min", "0", "step", "50", 1, "app-input"], ["class", "field-error", 4, "ngIf"], [1, "field-hint"], ["type", "number", "formControlName", "bonusDiscount", "min", "0", "step", "50", 1, "app-input"], ["type", "number", "formControlName", "bonusParticipantThreshold", "min", "1", "step", "1", 1, "app-input"], [1, "section-divider"], [1, "bi", "bi-award"], ["type", "number", "formControlName", "freeSlotThreshold", "min", "1", "step", "1", 1, "app-input"], ["type", "number", "formControlName", "freeSlotValue", "min", "1", "step", "1", 1, "app-input"], [1, "form-group", "switch-group"], [1, "toggle-control"], ["type", "checkbox", "formControlName", "isEnabled"], [1, "toggle-switch"], [1, "toggle-text"], [1, "form-actions-bar"], ["type", "button", 1, "btn-app", "secondary", 3, "click", "disabled"], [1, "bi", "bi-arrow-counterclockwise"], ["type", "submit", 1, "btn-app", "primary", 3, "disabled"], [1, "bi", "bi-check2-circle"], ["class", "feedback-badge success", 4, "ngIf"], ["class", "feedback-badge error", 4, "ngIf"], [1, "stat-grid"], ["class", "stat-card", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "stat-card", 3, "ngClass"], [1, "card-icon-wrap"], [1, "bi", 3, "ngClass"], [1, "card-content"], [1, "label"], [1, "value"], ["class", "helper", 4, "ngIf"], [1, "helper"], [1, "loading-state", "surface-card"], ["name", "crescent"], [1, "field-error"], [1, "bi", "bi-exclamation-circle"], [1, "feedback-badge", "success"], [1, "bi", "bi-check-circle-fill"], [1, "feedback-badge", "error"], [1, "bi", "bi-exclamation-triangle-fill"]], template: function ReferralSettingsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "app-admin-shell", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
    \u0275\u0275element(6, "span", 6);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 7);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 8)(11, "small", 9);
    \u0275\u0275element(12, "i", 10);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(14, ReferralSettingsComponent_section_14_Template, 2, 1, "section", 11)(15, ReferralSettingsComponent_div_15_Template, 4, 0, "div", 12);
    \u0275\u0275elementStart(16, "form", 13);
    \u0275\u0275listener("ngSubmit", function ReferralSettingsComponent_Template_form_ngSubmit_16_listener() {
      return ctx.saveSettings();
    });
    \u0275\u0275elementStart(17, "div", 14);
    \u0275\u0275element(18, "i", 15);
    \u0275\u0275elementStart(19, "h3");
    \u0275\u0275text(20, "Discount Rules & Milestones");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 16)(22, "div", 17)(23, "label")(24, "span");
    \u0275\u0275text(25, "Base Referral Reward (\u20B9) ");
    \u0275\u0275elementStart(26, "span", 18);
    \u0275\u0275text(27, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 19)(29, "span", 20);
    \u0275\u0275text(30, "\u20B9");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "input", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(32, ReferralSettingsComponent_span_32_Template, 3, 1, "span", 22);
    \u0275\u0275elementStart(33, "p", 23);
    \u0275\u0275text(34, "Credited for every approved referral booking.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 17)(36, "label")(37, "span");
    \u0275\u0275text(38, "Milestone Bonus Reward (\u20B9) ");
    \u0275\u0275elementStart(39, "span", 18);
    \u0275\u0275text(40, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 19)(42, "span", 20);
    \u0275\u0275text(43, "\u20B9");
    \u0275\u0275elementEnd();
    \u0275\u0275element(44, "input", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(45, ReferralSettingsComponent_span_45_Template, 3, 1, "span", 22);
    \u0275\u0275elementStart(46, "p", 23);
    \u0275\u0275text(47, "Unlocked when the friend group size threshold is met.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 17)(49, "label")(50, "span");
    \u0275\u0275text(51, "Group Size Threshold ");
    \u0275\u0275elementStart(52, "span", 18);
    \u0275\u0275text(53, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(54, "input", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275template(55, ReferralSettingsComponent_span_55_Template, 3, 1, "span", 22);
    \u0275\u0275elementStart(56, "p", 23);
    \u0275\u0275text(57, "Friends needed in a single booking to unlock bonus discount.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(58, "div", 26);
    \u0275\u0275elementStart(59, "div", 14);
    \u0275\u0275element(60, "i", 27);
    \u0275\u0275elementStart(61, "h3");
    \u0275\u0275text(62, "Free Trek Slot Rewards");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 16)(64, "div", 17)(65, "label")(66, "span");
    \u0275\u0275text(67, "Referrals Threshold for Free Trek ");
    \u0275\u0275elementStart(68, "span", 18);
    \u0275\u0275text(69, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(70, "input", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275template(71, ReferralSettingsComponent_span_71_Template, 3, 1, "span", 22);
    \u0275\u0275elementStart(72, "p", 23);
    \u0275\u0275text(73, "Completed bookings required before unlocking a free trek seat.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 17)(75, "label")(76, "span");
    \u0275\u0275text(77, "Free Slots Awarded ");
    \u0275\u0275elementStart(78, "span", 18);
    \u0275\u0275text(79, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(80, "input", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275template(81, ReferralSettingsComponent_span_81_Template, 3, 1, "span", 22);
    \u0275\u0275elementStart(82, "p", 23);
    \u0275\u0275text(83, "Number of free trek passes granted at each threshold milestone.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "div", 30)(85, "label", 31);
    \u0275\u0275element(86, "input", 32)(87, "span", 33);
    \u0275\u0275elementStart(88, "span", 34);
    \u0275\u0275text(89, "Active Referral Program");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(90, "p", 23);
    \u0275\u0275text(91, "Disable to temporarily pause code validation and payouts.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(92, "div", 35)(93, "button", 36);
    \u0275\u0275listener("click", function ReferralSettingsComponent_Template_button_click_93_listener() {
      return ctx.loadSettings();
    });
    \u0275\u0275element(94, "i", 37);
    \u0275\u0275text(95, " Reset ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "button", 38);
    \u0275\u0275element(97, "i", 39);
    \u0275\u0275elementStart(98, "span");
    \u0275\u0275text(99);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(100, ReferralSettingsComponent_div_100_Template, 3, 1, "div", 40)(101, ReferralSettingsComponent_div_101_Template, 3, 1, "div", 41);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", ctx.statusClass);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx.statusLabel, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ((tmp_2_0 = ctx.form.get("isEnabled")) == null ? null : tmp_2_0.value) ? "Ambassadors can generate and share active referral promo codes." : "Referral code redemptions are temporarily paused.", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx.lastUpdatedLabel);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(16);
    \u0275\u0275property("ngIf", ctx.getFieldError("baseDiscount"));
    \u0275\u0275advance(13);
    \u0275\u0275property("ngIf", ctx.getFieldError("bonusDiscount"));
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx.getFieldError("bonusParticipantThreshold"));
    \u0275\u0275advance(16);
    \u0275\u0275property("ngIf", ctx.getFieldError("freeSlotThreshold"));
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx.getFieldError("freeSlotValue"));
    \u0275\u0275advance(12);
    \u0275\u0275property("disabled", ctx.loading || ctx.saving);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx.saving);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.saving ? "Saving\u2026" : "Save Program Rules");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.message);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.error && !ctx.form.invalid);
  }
}, dependencies: [CommonModule, NgClass, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, AdminShellComponent], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.referral-page[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n.referral-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.header-status-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: var(--app-radius-lg, 16px);\n  padding: 16px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  box-shadow: var(--app-shadow-soft, 0 4px 16px rgba(0, 0, 0, 0.04));\n  flex-wrap: wrap;\n}\n.header-status-card[_ngcontent-%COMP%]   .status-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex-wrap: wrap;\n}\n.header-status-card[_ngcontent-%COMP%]   .program-hint[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--app-ink-muted, #64748b);\n}\n.header-status-card[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--app-ink-muted, #64748b);\n}\n.status-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 12px;\n  border-radius: 999px;\n  font-weight: 700;\n  font-size: 0.78rem;\n  letter-spacing: 0.03em;\n  text-transform: uppercase;\n}\n.status-pill[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n}\n.status-pill.active[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.12);\n  color: #16a34a;\n}\n.status-pill.active[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  background: #16a34a;\n}\n.status-pill.inactive[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n  color: #dc2626;\n}\n.status-pill.inactive[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  background: #dc2626;\n}\n.stat-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 16px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: var(--app-radius-lg, 16px);\n  padding: 18px 20px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  box-shadow: var(--app-shadow-soft, 0 4px 16px rgba(0, 0, 0, 0.04));\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--app-shadow, 0 8px 24px rgba(0, 0, 0, 0.08));\n}\n.stat-card[_ngcontent-%COMP%]   .card-icon-wrap[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 14px;\n  display: grid;\n  place-items: center;\n  font-size: 1.35rem;\n  flex-shrink: 0;\n  background: rgba(29, 122, 109, 0.1);\n  color: var(--app-accent, #1d7a6d);\n}\n.stat-card.primary[_ngcontent-%COMP%]   .card-icon-wrap[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.12);\n  color: #2563eb;\n}\n.stat-card.accent[_ngcontent-%COMP%]   .card-icon-wrap[_ngcontent-%COMP%] {\n  background: rgba(139, 92, 246, 0.12);\n  color: #7c3aed;\n}\n.stat-card.warning[_ngcontent-%COMP%]   .card-icon-wrap[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n  color: #d97706;\n}\n.stat-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.stat-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--app-ink-muted, #64748b);\n}\n.stat-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  margin: 2px 0 0;\n  font-size: 1.45rem;\n  font-weight: 800;\n  color: var(--app-ink, #0f172a);\n  line-height: 1.2;\n}\n.stat-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .helper[_ngcontent-%COMP%] {\n  margin: 2px 0 0;\n  font-size: 0.74rem;\n  color: var(--app-ink-muted, #64748b);\n}\n.loading-state[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: var(--app-radius-lg, 16px);\n  padding: 40px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  color: var(--app-ink-muted, #64748b);\n}\n.settings-form[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: var(--app-radius-lg, 16px);\n  padding: 24px;\n  box-shadow: var(--app-shadow-soft, 0 4px 16px rgba(0, 0, 0, 0.04));\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.form-section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.form-section-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--app-accent, #1d7a6d);\n  font-size: 1.1rem;\n}\n.form-section-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: var(--app-ink, #0f172a);\n}\n.section-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: #f1f5f9;\n  margin: 4px 0;\n}\n.form-grid-3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 18px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: var(--app-ink, #0f172a);\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   .req[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.form-group[_ngcontent-%COMP%]   .field-hint[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.75rem;\n  color: var(--app-ink-muted, #64748b);\n}\n.form-group[_ngcontent-%COMP%]   .field-error[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #dc2626;\n  font-weight: 600;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.input-with-icon[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.input-with-icon[_ngcontent-%COMP%]   .currency-symbol[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 14px;\n  font-weight: 700;\n  color: var(--app-ink-muted, #64748b);\n  font-size: 0.95rem;\n  pointer-events: none;\n}\n.input-with-icon[_ngcontent-%COMP%]   .app-input[_ngcontent-%COMP%] {\n  padding-left: 32px;\n}\n.app-input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid var(--app-border, #e2e8f0);\n  background: #f8fafc;\n  border-radius: 10px;\n  padding: 10px 14px;\n  font-size: 0.9rem;\n  color: var(--app-ink, #0f172a);\n  outline: none;\n  transition: all 0.15s ease;\n}\n.app-input[_ngcontent-%COMP%]:focus {\n  background: #ffffff;\n  border-color: var(--app-accent, #1d7a6d);\n  box-shadow: 0 0 0 3px rgba(29, 122, 109, 0.12);\n}\n.switch-group[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.toggle-control[_ngcontent-%COMP%] {\n  display: inline-flex !important;\n  flex-direction: row !important;\n  align-items: center;\n  gap: 12px;\n  cursor: pointer;\n  margin-bottom: 4px;\n}\n.toggle-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.toggle-control[_ngcontent-%COMP%]   .toggle-switch[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 24px;\n  border-radius: 999px;\n  background: #cbd5e1;\n  position: relative;\n  transition: background 0.2s ease;\n  flex-shrink: 0;\n}\n.toggle-control[_ngcontent-%COMP%]   .toggle-switch[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  background: #ffffff;\n  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n}\n.toggle-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .toggle-switch[_ngcontent-%COMP%] {\n  background: var(--app-accent, #1d7a6d);\n}\n.toggle-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .toggle-switch[_ngcontent-%COMP%]::after {\n  transform: translateX(20px);\n}\n.toggle-control[_ngcontent-%COMP%]   .toggle-text[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: var(--app-ink, #0f172a);\n}\n.form-actions-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding-top: 10px;\n  border-top: 1px solid #f1f5f9;\n}\n.feedback-badge[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border-radius: 10px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.feedback-badge.success[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.1);\n  color: #15803d;\n}\n.feedback-badge.error[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #b91c1c;\n}\n@media (max-width: 768px) {\n  .header-status-card[_ngcontent-%COMP%], \n   .settings-form[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .form-grid-3[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .form-actions-bar[_ngcontent-%COMP%] {\n    justify-content: stretch;\n  }\n  .form-actions-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n}\n/*# sourceMappingURL=referral-settings.component.css.map */'] });
var ReferralSettingsComponent = _ReferralSettingsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReferralSettingsComponent, [{
    type: Component,
    args: [{ selector: "app-referral-settings", standalone: true, imports: [CommonModule, ReactiveFormsModule, AdminShellComponent], schemas: [CUSTOM_ELEMENTS_SCHEMA], template: `<div class="referral-page">
  <app-admin-shell
    sectionLabel="Growth & Loyalty"
    title="Referral Program Settings"
    subtitle="Configure reward amounts, participant milestones, and free trek benefits for community ambassadors.">

    <div class="referral-container">
      <!-- HEADER STATUS BAR -->
      <div class="header-status-card surface-card">
        <div class="status-left">
          <div class="status-pill" [ngClass]="statusClass">
            <span class="dot"></span>
            {{ statusLabel }}
          </div>
          <span class="program-hint">
            {{ form.get('isEnabled')?.value ? 'Ambassadors can generate and share active referral promo codes.' : 'Referral code redemptions are temporarily paused.' }}
          </span>
        </div>
        <div class="status-right">
          <small class="meta"><i class="bi bi-clock-history me-1"></i>{{ lastUpdatedLabel }}</small>
        </div>
      </div>

      <!-- METRICS STATS GRID -->
      <section *ngIf="!loading" class="stat-grid">
        <article class="stat-card" *ngFor="let card of statCards" [ngClass]="card.accent">
          <div class="card-icon-wrap">
            <i class="bi" [ngClass]="{
              'bi-cash-coin': card.accent === 'primary',
              'bi-gift': card.accent === 'accent',
              'bi-trophy': card.accent === 'warning',
              'bi-toggle2-on': !card.accent
            }"></i>
          </div>
          <div class="card-content">
            <p class="label">{{ card.label }}</p>
            <h3 class="value">{{ card.value }}</h3>
            <p class="helper" *ngIf="card.helper">{{ card.helper }}</p>
          </div>
        </article>
      </section>

      <!-- LOADING STATE -->
      <div class="loading-state surface-card" *ngIf="loading">
        <ion-spinner name="crescent"></ion-spinner>
        <p>Loading referral program parameters\u2026</p>
      </div>

      <!-- MAIN CONFIGURATION FORM -->
      <form class="surface-card settings-form" [formGroup]="form" (ngSubmit)="saveSettings()" novalidate>
        <div class="form-section-title">
          <i class="bi bi-sliders"></i>
          <h3>Discount Rules & Milestones</h3>
        </div>

        <div class="form-grid-3">
          <!-- BASE DISCOUNT -->
          <div class="form-group">
            <label>
              <span>Base Referral Reward (\u20B9) <span class="req">*</span></span>
              <div class="input-with-icon">
                <span class="currency-symbol">\u20B9</span>
                <input type="number" formControlName="baseDiscount" min="0" step="50" class="app-input" />
              </div>
            </label>
            <span class="field-error" *ngIf="getFieldError('baseDiscount')">
              <i class="bi bi-exclamation-circle"></i> {{ getFieldError('baseDiscount') }}
            </span>
            <p class="field-hint">Credited for every approved referral booking.</p>
          </div>

          <!-- BONUS DISCOUNT -->
          <div class="form-group">
            <label>
              <span>Milestone Bonus Reward (\u20B9) <span class="req">*</span></span>
              <div class="input-with-icon">
                <span class="currency-symbol">\u20B9</span>
                <input type="number" formControlName="bonusDiscount" min="0" step="50" class="app-input" />
              </div>
            </label>
            <span class="field-error" *ngIf="getFieldError('bonusDiscount')">
              <i class="bi bi-exclamation-circle"></i> {{ getFieldError('bonusDiscount') }}
            </span>
            <p class="field-hint">Unlocked when the friend group size threshold is met.</p>
          </div>

          <!-- BONUS PARTICIPANT THRESHOLD -->
          <div class="form-group">
            <label>
              <span>Group Size Threshold <span class="req">*</span></span>
              <input type="number" formControlName="bonusParticipantThreshold" min="1" step="1" class="app-input" />
            </label>
            <span class="field-error" *ngIf="getFieldError('bonusParticipantThreshold')">
              <i class="bi bi-exclamation-circle"></i> {{ getFieldError('bonusParticipantThreshold') }}
            </span>
            <p class="field-hint">Friends needed in a single booking to unlock bonus discount.</p>
          </div>
        </div>

        <div class="section-divider"></div>

        <div class="form-section-title">
          <i class="bi bi-award"></i>
          <h3>Free Trek Slot Rewards</h3>
        </div>

        <div class="form-grid-3">
          <!-- FREE SLOT THRESHOLD -->
          <div class="form-group">
            <label>
              <span>Referrals Threshold for Free Trek <span class="req">*</span></span>
              <input type="number" formControlName="freeSlotThreshold" min="1" step="1" class="app-input" />
            </label>
            <span class="field-error" *ngIf="getFieldError('freeSlotThreshold')">
              <i class="bi bi-exclamation-circle"></i> {{ getFieldError('freeSlotThreshold') }}
            </span>
            <p class="field-hint">Completed bookings required before unlocking a free trek seat.</p>
          </div>

          <!-- FREE SLOTS AWARDED -->
          <div class="form-group">
            <label>
              <span>Free Slots Awarded <span class="req">*</span></span>
              <input type="number" formControlName="freeSlotValue" min="1" step="1" class="app-input" />
            </label>
            <span class="field-error" *ngIf="getFieldError('freeSlotValue')">
              <i class="bi bi-exclamation-circle"></i> {{ getFieldError('freeSlotValue') }}
            </span>
            <p class="field-hint">Number of free trek passes granted at each threshold milestone.</p>
          </div>

          <!-- PROGRAM TOGGLE SWITCH -->
          <div class="form-group switch-group">
            <label class="toggle-control">
              <input type="checkbox" formControlName="isEnabled" />
              <span class="toggle-switch"></span>
              <span class="toggle-text">Active Referral Program</span>
            </label>
            <p class="field-hint">Disable to temporarily pause code validation and payouts.</p>
          </div>
        </div>

        <div class="form-actions-bar">
          <button type="button" class="btn-app secondary" (click)="loadSettings()" [disabled]="loading || saving">
            <i class="bi bi-arrow-counterclockwise"></i> Reset
          </button>
          <button type="submit" class="btn-app primary" [disabled]="saving">
            <i class="bi bi-check2-circle"></i>
            <span>{{ saving ? 'Saving\u2026' : 'Save Program Rules' }}</span>
          </button>
        </div>

        <div class="feedback-badge success" *ngIf="message">
          <i class="bi bi-check-circle-fill"></i> {{ message }}
        </div>
        <div class="feedback-badge error" *ngIf="error && !form.invalid">
          <i class="bi bi-exclamation-triangle-fill"></i> {{ error }}
        </div>
      </form>
    </div>
  </app-admin-shell>
</div>`, styles: ['/* src/app/referrals/referral-settings/referral-settings.component.scss */\n:host {\n  display: block;\n}\n.referral-page {\n  --background: transparent;\n}\n.referral-container {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.header-status-card {\n  background: #ffffff;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: var(--app-radius-lg, 16px);\n  padding: 16px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  box-shadow: var(--app-shadow-soft, 0 4px 16px rgba(0, 0, 0, 0.04));\n  flex-wrap: wrap;\n}\n.header-status-card .status-left {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex-wrap: wrap;\n}\n.header-status-card .program-hint {\n  font-size: 0.85rem;\n  color: var(--app-ink-muted, #64748b);\n}\n.header-status-card .meta {\n  font-size: 0.82rem;\n  color: var(--app-ink-muted, #64748b);\n}\n.status-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 12px;\n  border-radius: 999px;\n  font-weight: 700;\n  font-size: 0.78rem;\n  letter-spacing: 0.03em;\n  text-transform: uppercase;\n}\n.status-pill .dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n}\n.status-pill.active {\n  background: rgba(34, 197, 94, 0.12);\n  color: #16a34a;\n}\n.status-pill.active .dot {\n  background: #16a34a;\n}\n.status-pill.inactive {\n  background: rgba(239, 68, 68, 0.12);\n  color: #dc2626;\n}\n.status-pill.inactive .dot {\n  background: #dc2626;\n}\n.stat-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 16px;\n}\n.stat-card {\n  background: #ffffff;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: var(--app-radius-lg, 16px);\n  padding: 18px 20px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  box-shadow: var(--app-shadow-soft, 0 4px 16px rgba(0, 0, 0, 0.04));\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.stat-card:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--app-shadow, 0 8px 24px rgba(0, 0, 0, 0.08));\n}\n.stat-card .card-icon-wrap {\n  width: 48px;\n  height: 48px;\n  border-radius: 14px;\n  display: grid;\n  place-items: center;\n  font-size: 1.35rem;\n  flex-shrink: 0;\n  background: rgba(29, 122, 109, 0.1);\n  color: var(--app-accent, #1d7a6d);\n}\n.stat-card.primary .card-icon-wrap {\n  background: rgba(59, 130, 246, 0.12);\n  color: #2563eb;\n}\n.stat-card.accent .card-icon-wrap {\n  background: rgba(139, 92, 246, 0.12);\n  color: #7c3aed;\n}\n.stat-card.warning .card-icon-wrap {\n  background: rgba(245, 158, 11, 0.12);\n  color: #d97706;\n}\n.stat-card .card-content {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.stat-card .card-content .label {\n  margin: 0;\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--app-ink-muted, #64748b);\n}\n.stat-card .card-content .value {\n  margin: 2px 0 0;\n  font-size: 1.45rem;\n  font-weight: 800;\n  color: var(--app-ink, #0f172a);\n  line-height: 1.2;\n}\n.stat-card .card-content .helper {\n  margin: 2px 0 0;\n  font-size: 0.74rem;\n  color: var(--app-ink-muted, #64748b);\n}\n.loading-state {\n  background: #ffffff;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: var(--app-radius-lg, 16px);\n  padding: 40px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  color: var(--app-ink-muted, #64748b);\n}\n.settings-form {\n  background: #ffffff;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: var(--app-radius-lg, 16px);\n  padding: 24px;\n  box-shadow: var(--app-shadow-soft, 0 4px 16px rgba(0, 0, 0, 0.04));\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.form-section-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.form-section-title i {\n  color: var(--app-accent, #1d7a6d);\n  font-size: 1.1rem;\n}\n.form-section-title h3 {\n  margin: 0;\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: var(--app-ink, #0f172a);\n}\n.section-divider {\n  height: 1px;\n  background: #f1f5f9;\n  margin: 4px 0;\n}\n.form-grid-3 {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 18px;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group label {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group label span {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: var(--app-ink, #0f172a);\n}\n.form-group label span .req {\n  color: #dc2626;\n}\n.form-group .field-hint {\n  margin: 0;\n  font-size: 0.75rem;\n  color: var(--app-ink-muted, #64748b);\n}\n.form-group .field-error {\n  font-size: 0.75rem;\n  color: #dc2626;\n  font-weight: 600;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.input-with-icon {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.input-with-icon .currency-symbol {\n  position: absolute;\n  left: 14px;\n  font-weight: 700;\n  color: var(--app-ink-muted, #64748b);\n  font-size: 0.95rem;\n  pointer-events: none;\n}\n.input-with-icon .app-input {\n  padding-left: 32px;\n}\n.app-input {\n  width: 100%;\n  border: 1px solid var(--app-border, #e2e8f0);\n  background: #f8fafc;\n  border-radius: 10px;\n  padding: 10px 14px;\n  font-size: 0.9rem;\n  color: var(--app-ink, #0f172a);\n  outline: none;\n  transition: all 0.15s ease;\n}\n.app-input:focus {\n  background: #ffffff;\n  border-color: var(--app-accent, #1d7a6d);\n  box-shadow: 0 0 0 3px rgba(29, 122, 109, 0.12);\n}\n.switch-group {\n  justify-content: center;\n}\n.toggle-control {\n  display: inline-flex !important;\n  flex-direction: row !important;\n  align-items: center;\n  gap: 12px;\n  cursor: pointer;\n  margin-bottom: 4px;\n}\n.toggle-control input {\n  display: none;\n}\n.toggle-control .toggle-switch {\n  width: 44px;\n  height: 24px;\n  border-radius: 999px;\n  background: #cbd5e1;\n  position: relative;\n  transition: background 0.2s ease;\n  flex-shrink: 0;\n}\n.toggle-control .toggle-switch::after {\n  content: "";\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  background: #ffffff;\n  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n}\n.toggle-control input:checked + .toggle-switch {\n  background: var(--app-accent, #1d7a6d);\n}\n.toggle-control input:checked + .toggle-switch::after {\n  transform: translateX(20px);\n}\n.toggle-control .toggle-text {\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: var(--app-ink, #0f172a);\n}\n.form-actions-bar {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding-top: 10px;\n  border-top: 1px solid #f1f5f9;\n}\n.feedback-badge {\n  padding: 10px 14px;\n  border-radius: 10px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.feedback-badge.success {\n  background: rgba(34, 197, 94, 0.1);\n  color: #15803d;\n}\n.feedback-badge.error {\n  background: rgba(239, 68, 68, 0.1);\n  color: #b91c1c;\n}\n@media (max-width: 768px) {\n  .header-status-card,\n  .settings-form {\n    padding: 16px;\n  }\n  .form-grid-3 {\n    grid-template-columns: 1fr;\n  }\n  .form-actions-bar {\n    justify-content: stretch;\n  }\n  .form-actions-bar button {\n    flex: 1;\n  }\n}\n/*# sourceMappingURL=referral-settings.component.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: ReferralSettingsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReferralSettingsComponent, { className: "ReferralSettingsComponent", filePath: "src/app/referrals/referral-settings/referral-settings.component.ts", lineNumber: 22 });
})();

// src/app/referrals/referral-settings/referral-settings.module.ts
var routes = [{ path: "", component: ReferralSettingsComponent }];
var _ReferralSettingsModule = class _ReferralSettingsModule {
};
_ReferralSettingsModule.\u0275fac = function ReferralSettingsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ReferralSettingsModule)();
};
_ReferralSettingsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ReferralSettingsModule });
_ReferralSettingsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [ReferralSettingsComponent, RouterModule.forChild(routes)] });
var ReferralSettingsModule = _ReferralSettingsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReferralSettingsModule, [{
    type: NgModule,
    args: [{
      imports: [ReferralSettingsComponent, RouterModule.forChild(routes)]
    }]
  }], null, null);
})();
export {
  ReferralSettingsModule
};
//# sourceMappingURL=referral-settings.module-Q2JONSU6.js.map
