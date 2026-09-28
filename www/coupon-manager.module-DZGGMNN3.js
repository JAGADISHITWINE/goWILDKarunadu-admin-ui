import {
  TrekList
} from "./chunk-B5I2JPD2.js";
import {
  AdminShellComponent
} from "./chunk-GLAFLAWJ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-QNEZ2FH5.js";
import {
  AuthService
} from "./chunk-D4XXJJII.js";
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
  TitleCasePipe,
  __spreadProps,
  __spreadValues,
  environment,
  forkJoin,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-KQE4QDNK.js";

// src/app/coupon-manager/coupon-manager.service.ts
var _CouponManagerService = class _CouponManagerService {
  constructor(http) {
    this.http = http;
    this.API = environment.baseUrl;
  }
  getCoupons(trekId) {
    const query = trekId ? `?trekId=${encodeURIComponent(trekId)}` : "";
    return this.http.get(`${this.API}/coupons${query}`);
  }
  getCouponUsage(id) {
    return this.http.get(`${this.API}/coupons/${id}/usage`);
  }
  createCoupon(payload) {
    return this.http.post(`${this.API}/coupons`, payload);
  }
  updateCoupon(id, payload) {
    return this.http.put(`${this.API}/coupons/${id}`, payload);
  }
  deleteCoupon(id) {
    return this.http.delete(`${this.API}/coupons/${id}`);
  }
};
_CouponManagerService.\u0275fac = function CouponManagerService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CouponManagerService)(\u0275\u0275inject(HttpClient));
};
_CouponManagerService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CouponManagerService, factory: _CouponManagerService.\u0275fac, providedIn: "root" });
var CouponManagerService = _CouponManagerService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CouponManagerService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/coupon-manager/coupon-manager.component.ts
function CouponManagerComponent_button_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 58);
    \u0275\u0275listener("click", function CouponManagerComponent_button_51_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearForm());
    });
    \u0275\u0275element(1, "i", 59);
    \u0275\u0275text(2, " Create New Instead ");
    \u0275\u0275elementEnd();
  }
}
function CouponManagerComponent_option_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const trek_r3 = ctx.$implicit;
    \u0275\u0275property("ngValue", trek_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(trek_r3.name);
  }
}
function CouponManagerComponent_button_111_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 60);
    \u0275\u0275listener("click", function CouponManagerComponent_button_111_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveCoupon());
    });
    \u0275\u0275element(1, "i", 61);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.saving ? "Saving..." : ctx_r1.editingCouponId ? "Update Coupon" : "Create Coupon");
  }
}
function CouponManagerComponent_button_112_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 62);
    \u0275\u0275listener("click", function CouponManagerComponent_button_112_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearForm());
    });
    \u0275\u0275text(1, " Clear Form ");
    \u0275\u0275elementEnd();
  }
}
function CouponManagerComponent_div_113_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275element(1, "i", 64);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.message, " ");
  }
}
function CouponManagerComponent_div_114_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275element(1, "i", 66);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.error, " ");
  }
}
function CouponManagerComponent_option_129_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const trek_r6 = ctx.$implicit;
    \u0275\u0275property("ngValue", trek_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(trek_r6.name);
  }
}
function CouponManagerComponent_button_130_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 67);
    \u0275\u0275listener("click", function CouponManagerComponent_button_130_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resetFilters());
    });
    \u0275\u0275element(1, "i", 68);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Reset");
    \u0275\u0275elementEnd()();
  }
}
function CouponManagerComponent_th_153_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 69);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function CouponManagerComponent_ng_container_155_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 88);
    \u0275\u0275element(1, "i", 89);
    \u0275\u0275text(2, "Global");
    \u0275\u0275elementEnd();
  }
}
function CouponManagerComponent_ng_container_155_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 90);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r9.trekName);
  }
}
function CouponManagerComponent_ng_container_155_small_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 91);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Max \u20B9", c_r9.maxDiscountAmount);
  }
}
function CouponManagerComponent_ng_container_155_td_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 92)(1, "div", 93)(2, "button", 94);
    \u0275\u0275listener("click", function CouponManagerComponent_ng_container_155_td_33_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r10);
      const c_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editCoupon(c_r9));
    });
    \u0275\u0275element(3, "i", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 96);
    \u0275\u0275listener("click", function CouponManagerComponent_ng_container_155_td_33_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r10);
      const c_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeCoupon(c_r9));
    });
    \u0275\u0275element(5, "i", 97);
    \u0275\u0275elementEnd()()();
  }
}
function CouponManagerComponent_ng_container_155_tr_34_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107);
    \u0275\u0275element(1, "ion-spinner", 108);
    \u0275\u0275text(2, " Loading redemptions... ");
    \u0275\u0275elementEnd();
  }
}
function CouponManagerComponent_ng_container_155_tr_34_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 109);
    \u0275\u0275element(1, "i", 110);
    \u0275\u0275text(2, " No bookings have redeemed this coupon code yet. ");
    \u0275\u0275elementEnd();
  }
}
function CouponManagerComponent_ng_container_155_tr_34_div_13_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "code");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 113);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 114);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "span", 115);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const log_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", log_r11.bookingReference || log_r11.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(log_r11.customerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(log_r11.customerEmail);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(log_r11.trekName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", log_r11.amount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDateShort(log_r11.usedAt));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(log_r11.status);
  }
}
function CouponManagerComponent_ng_container_155_tr_34_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 111)(1, "table", 112)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Booking Ref");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Customer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Trek");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Discounted Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Redeemed Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275template(19, CouponManagerComponent_ng_container_155_tr_34_div_13_tr_19_Template, 18, 7, "tr", 55);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(19);
    \u0275\u0275property("ngForOf", ctx_r1.usageLogs);
  }
}
function CouponManagerComponent_ng_container_155_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 98)(1, "td", 99)(2, "div", 100)(3, "div", 101)(4, "h4");
    \u0275\u0275element(5, "i", 102);
    \u0275\u0275text(6, " Redemption Log for Coupon ");
    \u0275\u0275elementStart(7, "code");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 103);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, CouponManagerComponent_ng_container_155_tr_34_div_11_Template, 3, 0, "div", 104)(12, CouponManagerComponent_ng_container_155_tr_34_div_12_Template, 3, 0, "div", 105)(13, CouponManagerComponent_ng_container_155_tr_34_div_13_Template, 20, 1, "div", 106);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(c_r9.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.usageLogs.length, " redemption(s)");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loadingUsage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingUsage && ctx_r1.usageLogs.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingUsage && ctx_r1.usageLogs.length > 0);
  }
}
function CouponManagerComponent_ng_container_155_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "tr")(2, "td", 70)(3, "div", 71)(4, "span", 72);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275template(7, CouponManagerComponent_ng_container_155_span_7_Template, 3, 0, "span", 73)(8, CouponManagerComponent_ng_container_155_span_8_Template, 2, 1, "span", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 75)(10, "span", 76);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 77)(14, "strong");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, CouponManagerComponent_ng_container_155_small_16_Template, 2, 1, "small", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td")(18, "button", 79);
    \u0275\u0275listener("click", function CouponManagerComponent_ng_container_155_Template_button_click_18_listener() {
      const c_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleUsageLog(c_r9));
    });
    \u0275\u0275element(19, "i", 80);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td", 81)(22, "div", 82)(23, "span");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "i", 83);
    \u0275\u0275elementStart(26, "span");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "td")(29, "span", 84);
    \u0275\u0275element(30, "span", 85);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(33, CouponManagerComponent_ng_container_155_td_33_Template, 6, 0, "td", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275template(34, CouponManagerComponent_ng_container_155_tr_34_Template, 14, 5, "tr", 87);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const c_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("selected-row", (ctx_r1.selectedUsageCoupon == null ? null : ctx_r1.selectedUsageCoupon.id) === c_r9.id);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(c_r9.code);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !c_r9.trekId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r9.trekId);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 16, c_r9.discountType));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.formatDiscount(c_r9));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r9.maxDiscountAmount);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", c_r9.usageCount, " / ", c_r9.usageLimit ?? "\u221E", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.formatDateShort(c_r9.startDate));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatDateShort(c_r9.endDate));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", "cpill-" + ctx_r1.getCouponStatus(c_r9));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(32, 18, ctx_r1.getCouponStatus(c_r9)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.authService.hasPermission("treks.manage"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.selectedUsageCoupon == null ? null : ctx_r1.selectedUsageCoupon.id) === c_r9.id);
  }
}
function CouponManagerComponent_tr_156_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 116)(2, "div", 117);
    \u0275\u0275element(3, "i", 118);
    \u0275\u0275elementStart(4, "h4");
    \u0275\u0275text(5, "No Coupons Found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "No coupons match your filter criteria. Create a new promotion above.");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r1.authService.hasPermission("treks.manage") ? 8 : 7);
  }
}
function CouponManagerComponent_div_157_option_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 131);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r13 = ctx.$implicit;
    \u0275\u0275property("value", opt_r13);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r13);
  }
}
function CouponManagerComponent_div_157_ng_container_24_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 134);
    \u0275\u0275text(1, "\u2026");
    \u0275\u0275elementEnd();
  }
}
function CouponManagerComponent_div_157_ng_container_24_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 135);
    \u0275\u0275listener("click", function CouponManagerComponent_div_157_ng_container_24_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const p_r15 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(p_r15));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r15 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", p_r15 === ctx_r1.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r15, " ");
  }
}
function CouponManagerComponent_div_157_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CouponManagerComponent_div_157_ng_container_24_span_1_Template, 2, 0, "span", 132)(2, CouponManagerComponent_div_157_ng_container_24_button_2_Template, 2, 3, "button", 133);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const p_r15 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r15 === "...");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r15 !== "...");
  }
}
function CouponManagerComponent_div_157_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 119)(1, "div", 120)(2, "div", 121);
    \u0275\u0275text(3, " Showing ");
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " to ");
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " of ");
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " coupons ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 122)(14, "div", 123)(15, "label");
    \u0275\u0275text(16, "Per page:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "select", 124);
    \u0275\u0275twoWayListener("ngModelChange", function CouponManagerComponent_div_157_Template_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.pageSize, $event) || (ctx_r1.pageSize = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function CouponManagerComponent_div_157_Template_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageSizeChange($event));
    });
    \u0275\u0275template(18, CouponManagerComponent_div_157_option_18_Template, 2, 2, "option", 125);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 126)(20, "button", 127);
    \u0275\u0275listener("click", function CouponManagerComponent_div_157_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.prevPage());
    });
    \u0275\u0275element(21, "i", 128);
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23, "Prev");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(24, CouponManagerComponent_div_157_ng_container_24_Template, 3, 2, "ng-container", 55);
    \u0275\u0275elementStart(25, "button", 129);
    \u0275\u0275listener("click", function CouponManagerComponent_div_157_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nextPage());
    });
    \u0275\u0275elementStart(26, "span");
    \u0275\u0275text(27, "Next");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "i", 130);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r1.currentPage - 1) * ctx_r1.Number(ctx_r1.pageSize) + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.Math.min(ctx_r1.currentPage * ctx_r1.Number(ctx_r1.pageSize), ctx_r1.filteredCoupons.length));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.filteredCoupons.length);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pageSize);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.pageSizeOptions);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.visiblePageNumbers);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
  }
}
var _CouponManagerComponent = class _CouponManagerComponent {
  get totalPages() {
    const size = Number(this.pageSize) || 5;
    return Math.max(1, Math.ceil(this.filteredCoupons.length / size));
  }
  get paginatedCoupons() {
    const size = Number(this.pageSize) || 5;
    const page = Math.min(Math.max(1, this.currentPage), this.totalPages);
    const start = (page - 1) * size;
    return this.filteredCoupons.slice(start, start + size);
  }
  get visiblePageNumbers() {
    const total = this.totalPages;
    const current = Math.min(Math.max(1, this.currentPage), total);
    if (total <= 7) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }
    const pages = [1];
    if (current > 3)
      pages.push("...");
    const start = Math.max(2, current - 1);
    const end = Math.min(total - 1, current + 1);
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    if (current < total - 2)
      pages.push("...");
    if (total > 1)
      pages.push(total);
    return pages;
  }
  goToPage(page) {
    if (page !== "..." && page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
  onPageSizeChange(val) {
    if (val)
      this.pageSize = Number(val);
    this.currentPage = 1;
  }
  constructor(trekService, couponService, authService) {
    this.trekService = trekService;
    this.couponService = couponService;
    this.authService = authService;
    this.Math = Math;
    this.loading = false;
    this.saving = false;
    this.message = "";
    this.error = "";
    this.treks = [];
    this.coupons = [];
    this.filterTrekId = null;
    this.searchQuery = "";
    this.Number = Number;
    this.currentPage = 1;
    this.pageSize = 5;
    this.pageSizeOptions = [5, 10, 20, 40];
    this.form = {
      trekId: null,
      code: "",
      discountType: "percentage",
      discountValue: 10,
      minBookingAmount: 0,
      maxDiscountAmount: null,
      startDate: null,
      endDate: null,
      usageLimit: null,
      isActive: true
    };
    this.editingCouponId = null;
    this.selectedUsageCoupon = null;
    this.usageLogs = [];
    this.loadingUsage = false;
  }
  ngOnInit() {
    this.loadInitial();
  }
  get stats() {
    const total = this.coupons.length;
    const active = this.coupons.filter((c) => this.getCouponStatus(c) === "active").length;
    const global = this.coupons.filter((c) => !c.trekId).length;
    const redemptions = this.coupons.reduce((sum, c) => sum + (c.usageCount || 0), 0);
    return { total, active, global, redemptions };
  }
  get filteredCoupons() {
    if (!this.searchQuery.trim()) {
      return this.coupons;
    }
    const q = this.searchQuery.toLowerCase().trim();
    return this.coupons.filter((c) => (c.code || "").toLowerCase().includes(q) || (c.trekName || "").toLowerCase().includes(q) || (c.discountType || "").toLowerCase().includes(q));
  }
  loadInitial() {
    this.loading = true;
    this.error = "";
    forkJoin({
      treksRes: this.trekService.getAllTreks(),
      couponsRes: this.couponService.getCoupons(this.filterTrekId)
    }).subscribe({
      next: ({ treksRes, couponsRes }) => {
        this.treks = this.extractTreks(treksRes);
        this.coupons = Array.isArray(couponsRes?.data) ? couponsRes.data : [];
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.error = "Failed to load coupons";
      }
    });
  }
  loadCoupons() {
    this.loading = true;
    this.couponService.getCoupons(this.filterTrekId).subscribe({
      next: (res) => {
        this.coupons = Array.isArray(res?.data) ? res.data : [];
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.error = "Failed to load coupons";
      }
    });
  }
  applyFilter() {
    this.currentPage = 1;
    this.loadCoupons();
  }
  toggleUsageLog(coupon) {
    if (this.selectedUsageCoupon?.id === coupon.id) {
      this.selectedUsageCoupon = null;
      this.usageLogs = [];
      return;
    }
    this.selectedUsageCoupon = coupon;
    this.loadingUsage = true;
    this.usageLogs = [];
    this.couponService.getCouponUsage(coupon.id).subscribe({
      next: (res) => {
        this.usageLogs = res?.data?.logs || [];
        this.loadingUsage = false;
      },
      error: () => {
        this.usageLogs = [];
        this.loadingUsage = false;
      }
    });
  }
  clearForm() {
    this.editingCouponId = null;
    this.form = {
      trekId: null,
      code: "",
      discountType: "percentage",
      discountValue: 10,
      minBookingAmount: 0,
      maxDiscountAmount: null,
      startDate: null,
      endDate: null,
      usageLimit: null,
      isActive: true
    };
  }
  resetFilters() {
    this.searchQuery = "";
    this.filterTrekId = null;
    this.applyFilter();
  }
  editCoupon(coupon) {
    this.editingCouponId = coupon.id;
    this.form = {
      trekId: coupon.trekId || null,
      code: coupon.code,
      discountType: coupon.discountType,
      discountValue: Number(coupon.discountValue),
      minBookingAmount: Number(coupon.minBookingAmount || 0),
      maxDiscountAmount: coupon.maxDiscountAmount !== null ? Number(coupon.maxDiscountAmount) : null,
      startDate: coupon.startDate ? this.toDatetimeLocal(coupon.startDate) : null,
      endDate: coupon.endDate ? this.toDatetimeLocal(coupon.endDate) : null,
      usageLimit: coupon.usageLimit !== null ? Number(coupon.usageLimit) : null,
      isActive: coupon.isActive === 1
    };
  }
  saveCoupon() {
    if (!this.form.code || !this.form.discountType || !this.form.discountValue) {
      this.error = "Please fill required fields (Code, Type, Discount Value)";
      this.message = "";
      return;
    }
    const payload = __spreadProps(__spreadValues({}, this.form), {
      code: String(this.form.code).trim().toUpperCase(),
      startDate: this.form.startDate || null,
      endDate: this.form.endDate || null,
      maxDiscountAmount: this.form.maxDiscountAmount ?? null,
      usageLimit: this.form.usageLimit ?? null,
      isActive: !!this.form.isActive
    });
    this.saving = true;
    this.message = "";
    this.error = "";
    const req$ = this.editingCouponId ? this.couponService.updateCoupon(this.editingCouponId, payload) : this.couponService.createCoupon(payload);
    req$.subscribe({
      next: (res) => {
        this.saving = false;
        this.message = res?.message || "Saved";
        this.clearForm();
        this.loadCoupons();
      },
      error: (err) => {
        this.saving = false;
        this.error = err?.error?.message || "Failed to save coupon";
      }
    });
  }
  removeCoupon(coupon) {
    if (!confirm(`Delete coupon ${coupon.code}?`))
      return;
    this.couponService.deleteCoupon(coupon.id).subscribe({
      next: (res) => {
        this.message = res?.message || "Deleted";
        this.error = "";
        this.loadCoupons();
      },
      error: (err) => {
        this.error = err?.error?.message || "Failed to delete coupon";
      }
    });
  }
  extractTreks(res) {
    const root = res?.data;
    const rows = Array.isArray(root?.result) ? root.result : Array.isArray(root) ? root : [];
    return rows.map((t) => ({ id: String(t.id || "").trim(), name: String(t.name || t.trek_name || `Trek #${t.id}`) })).filter((t) => Boolean(t.id));
  }
  toDatetimeLocal(value) {
    const date = new Date(value);
    if (Number.isNaN(date.getTime()))
      return "";
    const offset = date.getTimezoneOffset();
    const local = new Date(date.getTime() - offset * 6e4);
    return local.toISOString().slice(0, 16);
  }
  /** Returns 'active', 'expired', or 'inactive' for a coupon */
  getCouponStatus(coupon) {
    if (coupon.endDate) {
      const end = new Date(coupon.endDate);
      if (!isNaN(end.getTime()) && end < /* @__PURE__ */ new Date()) {
        return "expired";
      }
    }
    return coupon.isActive ? "active" : "inactive";
  }
  /** Returns formatted discount e.g. '10%' or '₹500' */
  formatDiscount(coupon) {
    if (coupon.discountType === "percentage") {
      return `${coupon.discountValue}%`;
    }
    return `\u20B9${coupon.discountValue}`;
  }
  /** Short date display */
  formatDateShort(value) {
    if (!value)
      return "\u2014";
    const d = new Date(value);
    if (isNaN(d.getTime()))
      return "\u2014";
    return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
  }
};
_CouponManagerComponent.\u0275fac = function CouponManagerComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CouponManagerComponent)(\u0275\u0275directiveInject(TrekList), \u0275\u0275directiveInject(CouponManagerService), \u0275\u0275directiveInject(AuthService));
};
_CouponManagerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CouponManagerComponent, selectors: [["app-coupon-manager"]], decls: 158, vars: 37, consts: [[1, "coupon-page"], ["sectionLabel", "Promotions & Discounts", "title", "Trek Coupon Manager", "subtitle", "Configure discount rules, promotional codes, redemption limits, and track redemption analytics."], [1, "stats-row"], [1, "stat-card"], [1, "stat-icon", "total"], [1, "bi", "bi-ticket-perforated"], [1, "stat-info"], [1, "stat-label"], [1, "stat-icon", "active"], [1, "bi", "bi-check-circle"], [1, "text-success"], [1, "stat-icon", "global"], [1, "bi", "bi-globe2"], [1, "stat-icon", "redemptions"], [1, "bi", "bi-graph-up-arrow"], [1, "surface-card", "coupon-form-card"], [1, "form-header"], [1, "fh-left"], [1, "badge-tag"], [1, "bi", "bi-percent"], ["class", "btn-app secondary sm", "type", "button", 3, "click", 4, "ngIf"], [1, "form-grid"], [1, "form-group"], [1, "app-select", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "req"], ["type", "text", "placeholder", "e.g. MONSOON20, EARLYBIRD", 1, "app-input", "code-input", 3, "ngModelChange", "ngModel"], ["value", "percentage"], ["value", "flat"], ["type", "number", "min", "1", 1, "app-input", 3, "ngModelChange", "ngModel", "placeholder"], ["type", "number", "min", "0", "placeholder", "0 = No minimum", 1, "app-input", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", "placeholder", "Optional cap", 1, "app-input", 3, "ngModelChange", "ngModel"], ["type", "datetime-local", 1, "app-input", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", "placeholder", "Leave empty for unlimited", 1, "app-input", 3, "ngModelChange", "ngModel"], [1, "actions-row"], ["class", "btn-app primary", 3, "disabled", "click", 4, "ngIf"], ["class", "btn-app secondary", "type", "button", 3, "click", 4, "ngIf"], ["class", "feedback-badge success", 4, "ngIf"], ["class", "feedback-badge error", 4, "ngIf"], [1, "surface-card", "coupon-list-card"], [1, "list-head"], [1, "lh-title"], [1, "count-pill"], [1, "filters"], [1, "search-input-wrap"], [1, "bi", "bi-search"], ["type", "text", "placeholder", "Search by code or trek...", 3, "ngModelChange", "ngModel"], [1, "app-select", "filter-select", 3, "ngModelChange", "ngModel"], ["class", "btn-app ghost sm", "type", "button", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn-app", "secondary", "sm", 3, "click", "disabled"], [1, "bi", "bi-arrow-clockwise"], [1, "table-wrap"], [1, "coupon-table"], ["class", "text-end", 4, "ngIf"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "pagination-shell", 4, "ngIf"], ["type", "button", 1, "btn-app", "secondary", "sm", 3, "click"], [1, "bi", "bi-plus-lg"], [1, "btn-app", "primary", 3, "click", "disabled"], [1, "bi", "bi-check2-circle"], ["type", "button", 1, "btn-app", "secondary", 3, "click"], [1, "feedback-badge", "success"], [1, "bi", "bi-check-circle-fill"], [1, "feedback-badge", "error"], [1, "bi", "bi-exclamation-triangle-fill"], ["type", "button", 1, "btn-app", "ghost", "sm", 3, "click"], [1, "bi", "bi-arrow-counterclockwise"], [1, "text-end"], [1, "code-cell"], [1, "code-wrapper"], [1, "code-badge"], ["class", "badge-global", 4, "ngIf"], ["class", "trek-target-name", 4, "ngIf"], [1, "type-cell"], [1, "type-tag"], [1, "discount-cell"], ["class", "max-cap", 4, "ngIf"], ["type", "button", "title", "View detailed redemptions", 1, "usage-btn", 3, "click"], [1, "bi", "bi-bar-chart-line-fill"], [1, "expiry-cell"], [1, "date-range-box"], [1, "bi", "bi-arrow-right"], [1, "coupon-status-pill", 3, "ngClass"], [1, "status-dot"], ["class", "actions-cell", 4, "ngIf"], ["class", "usage-detail-row", 4, "ngIf"], [1, "badge-global"], [1, "bi", "bi-globe2", "me-1"], [1, "trek-target-name"], [1, "max-cap"], [1, "actions-cell"], [1, "action-buttons-wrap"], ["type", "button", "title", "Edit Coupon", 1, "tbl-action-btn", "edit", 3, "click"], [1, "bi", "bi-pencil"], ["type", "button", "title", "Delete Coupon", 1, "tbl-action-btn", "delete", 3, "click"], [1, "bi", "bi-trash3"], [1, "usage-detail-row"], ["colspan", "8"], [1, "usage-panel"], [1, "usage-panel-head"], [1, "bi", "bi-receipt"], [1, "usage-badge"], ["class", "usage-loading", 4, "ngIf"], ["class", "usage-empty", 4, "ngIf"], ["class", "usage-subtable-wrap", 4, "ngIf"], [1, "usage-loading"], ["name", "crescent"], [1, "usage-empty"], [1, "bi", "bi-info-circle"], [1, "usage-subtable-wrap"], [1, "usage-subtable"], [1, "text-muted"], [1, "fw-bold", "text-accent"], [1, "status-pill-mini", "status-completed"], [1, "empty-row"], [1, "empty-state-box"], [1, "bi", "bi-ticket-detailed"], [1, "pagination-shell"], [1, "pagination-inner"], [1, "pagination-info"], [1, "pagination-controls"], [1, "page-size-selector"], [1, "pagination-select", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "page-actions"], ["type", "button", "title", "Previous Page", 1, "page-nav-btn", 3, "click", "disabled"], [1, "bi", "bi-chevron-left"], ["type", "button", "title", "Next Page", 1, "page-nav-btn", 3, "click", "disabled"], [1, "bi", "bi-chevron-right"], [3, "value"], ["class", "page-ellipsis", 4, "ngIf"], ["class", "page-btn", "type", "button", 3, "active", "click", 4, "ngIf"], [1, "page-ellipsis"], ["type", "button", 1, "page-btn", 3, "click"]], template: function CouponManagerComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "app-admin-shell", 1)(2, "div", 2)(3, "article", 3)(4, "div", 4);
    \u0275\u0275element(5, "i", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 6)(7, "span", 7);
    \u0275\u0275text(8, "Total Coupons");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "small");
    \u0275\u0275text(12, "Created across platform");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "article", 3)(14, "div", 8);
    \u0275\u0275element(15, "i", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 6)(17, "span", 7);
    \u0275\u0275text(18, "Active & Valid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "strong");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "small", 10);
    \u0275\u0275text(22, "Available for booking");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "article", 3)(24, "div", 11);
    \u0275\u0275element(25, "i", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 6)(27, "span", 7);
    \u0275\u0275text(28, "Global Promos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "strong");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "small");
    \u0275\u0275text(32, "Applies to all treks");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "article", 3)(34, "div", 13);
    \u0275\u0275element(35, "i", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 6)(37, "span", 7);
    \u0275\u0275text(38, "Total Redemptions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "strong");
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "small");
    \u0275\u0275text(42, "Successful checkouts");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(43, "section", 15)(44, "div", 16)(45, "div", 17)(46, "span", 18);
    \u0275\u0275element(47, "i", 19);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "h3");
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(51, CouponManagerComponent_button_51_Template, 3, 0, "button", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 21)(53, "div", 22)(54, "label");
    \u0275\u0275text(55, "Target Trek Scope");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "select", 23);
    \u0275\u0275twoWayListener("ngModelChange", function CouponManagerComponent_Template_select_ngModelChange_56_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.form.trekId, $event) || (ctx.form.trekId = $event);
      return $event;
    });
    \u0275\u0275elementStart(57, "option", 24);
    \u0275\u0275text(58, "\u{1F30D} All Treks (Global Promo Code)");
    \u0275\u0275elementEnd();
    \u0275\u0275template(59, CouponManagerComponent_option_59_Template, 2, 2, "option", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 22)(61, "label");
    \u0275\u0275text(62, "Coupon Code ");
    \u0275\u0275elementStart(63, "span", 26);
    \u0275\u0275text(64, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function CouponManagerComponent_Template_input_ngModelChange_65_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.form.code, $event) || (ctx.form.code = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div", 22)(67, "label");
    \u0275\u0275text(68, "Discount Type ");
    \u0275\u0275elementStart(69, "span", 26);
    \u0275\u0275text(70, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "select", 23);
    \u0275\u0275twoWayListener("ngModelChange", function CouponManagerComponent_Template_select_ngModelChange_71_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.form.discountType, $event) || (ctx.form.discountType = $event);
      return $event;
    });
    \u0275\u0275elementStart(72, "option", 28);
    \u0275\u0275text(73, "Percentage Discount (%)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "option", 29);
    \u0275\u0275text(75, "Flat Amount (\u20B9)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(76, "div", 22)(77, "label");
    \u0275\u0275text(78, "Discount Value ");
    \u0275\u0275elementStart(79, "span", 26);
    \u0275\u0275text(80, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function CouponManagerComponent_Template_input_ngModelChange_81_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.form.discountValue, $event) || (ctx.form.discountValue = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(82, "div", 22)(83, "label");
    \u0275\u0275text(84, "Min Booking Amount (\u20B9)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function CouponManagerComponent_Template_input_ngModelChange_85_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.form.minBookingAmount, $event) || (ctx.form.minBookingAmount = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(86, "div", 22)(87, "label");
    \u0275\u0275text(88, "Max Cap Discount (\u20B9)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function CouponManagerComponent_Template_input_ngModelChange_89_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.form.maxDiscountAmount, $event) || (ctx.form.maxDiscountAmount = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(90, "div", 22)(91, "label");
    \u0275\u0275text(92, "Start Date & Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function CouponManagerComponent_Template_input_ngModelChange_93_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.form.startDate, $event) || (ctx.form.startDate = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(94, "div", 22)(95, "label");
    \u0275\u0275text(96, "Expiry Date & Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function CouponManagerComponent_Template_input_ngModelChange_97_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.form.endDate, $event) || (ctx.form.endDate = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(98, "div", 22)(99, "label");
    \u0275\u0275text(100, "Total Usage Limit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function CouponManagerComponent_Template_input_ngModelChange_101_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.form.usageLimit, $event) || (ctx.form.usageLimit = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(102, "div", 22)(103, "label");
    \u0275\u0275text(104, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "select", 23);
    \u0275\u0275twoWayListener("ngModelChange", function CouponManagerComponent_Template_select_ngModelChange_105_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.form.isActive, $event) || (ctx.form.isActive = $event);
      return $event;
    });
    \u0275\u0275elementStart(106, "option", 24);
    \u0275\u0275text(107, "Active (Usable)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "option", 24);
    \u0275\u0275text(109, "Inactive (Disabled)");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(110, "div", 35);
    \u0275\u0275template(111, CouponManagerComponent_button_111_Template, 4, 2, "button", 36)(112, CouponManagerComponent_button_112_Template, 2, 0, "button", 37)(113, CouponManagerComponent_div_113_Template, 3, 1, "div", 38)(114, CouponManagerComponent_div_114_Template, 3, 1, "div", 39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(115, "section", 40)(116, "div", 41)(117, "div", 42)(118, "h3");
    \u0275\u0275text(119, "Active & Historical Coupons");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(120, "span", 43);
    \u0275\u0275text(121);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(122, "div", 44)(123, "div", 45);
    \u0275\u0275element(124, "i", 46);
    \u0275\u0275elementStart(125, "input", 47);
    \u0275\u0275twoWayListener("ngModelChange", function CouponManagerComponent_Template_input_ngModelChange_125_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function CouponManagerComponent_Template_input_ngModelChange_125_listener() {
      return ctx.applyFilter();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(126, "select", 48);
    \u0275\u0275twoWayListener("ngModelChange", function CouponManagerComponent_Template_select_ngModelChange_126_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.filterTrekId, $event) || (ctx.filterTrekId = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function CouponManagerComponent_Template_select_ngModelChange_126_listener() {
      return ctx.applyFilter();
    });
    \u0275\u0275elementStart(127, "option", 24);
    \u0275\u0275text(128, "All Treks");
    \u0275\u0275elementEnd();
    \u0275\u0275template(129, CouponManagerComponent_option_129_Template, 2, 2, "option", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275template(130, CouponManagerComponent_button_130_Template, 4, 0, "button", 49);
    \u0275\u0275elementStart(131, "button", 50);
    \u0275\u0275listener("click", function CouponManagerComponent_Template_button_click_131_listener() {
      return ctx.loadCoupons();
    });
    \u0275\u0275element(132, "i", 51);
    \u0275\u0275elementStart(133, "span");
    \u0275\u0275text(134, "Refresh");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(135, "div", 52)(136, "table", 53)(137, "thead")(138, "tr")(139, "th");
    \u0275\u0275text(140, "Coupon Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(141, "th");
    \u0275\u0275text(142, "Applicable Scope");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(143, "th");
    \u0275\u0275text(144, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(145, "th");
    \u0275\u0275text(146, "Discount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(147, "th");
    \u0275\u0275text(148, "Redemptions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(149, "th");
    \u0275\u0275text(150, "Validity Window");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(151, "th");
    \u0275\u0275text(152, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275template(153, CouponManagerComponent_th_153_Template, 2, 0, "th", 54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(154, "tbody");
    \u0275\u0275template(155, CouponManagerComponent_ng_container_155_Template, 35, 20, "ng-container", 55)(156, CouponManagerComponent_tr_156_Template, 8, 1, "tr", 56);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(157, CouponManagerComponent_div_157_Template, 29, 8, "div", 57);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx.stats.total);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx.stats.active);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx.stats.global);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx.stats.redemptions);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx.editingCouponId ? "Edit Mode" : "New Promo");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.editingCouponId ? "Modify Coupon Settings" : "Create New Promotional Code");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.editingCouponId);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx.form.trekId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx.treks);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx.form.code);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx.form.discountType);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx.form.discountValue);
    \u0275\u0275property("placeholder", ctx.form.discountType === "percentage" ? "e.g. 15%" : "e.g. 500");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.form.minBookingAmount);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.form.maxDiscountAmount);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.form.startDate);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.form.endDate);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.form.usageLimit);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.form.isActive);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", false);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.authService.hasPermission("treks.manage"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.authService.hasPermission("treks.manage"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.message);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.error);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx.filteredCoupons.length, " coupon(s)");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx.filterTrekId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx.treks);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.searchQuery || ctx.filterTrekId);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx.loading);
    \u0275\u0275advance(22);
    \u0275\u0275property("ngIf", ctx.authService.hasPermission("treks.manage"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx.paginatedCoupons);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading && ctx.filteredCoupons.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.filteredCoupons.length > 0);
  }
}, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, AdminShellComponent, TitleCasePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.coupon-page[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n.stats-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: var(--app-radius-lg, 16px);\n  padding: 18px 20px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  box-shadow: var(--app-shadow-soft, 0 4px 16px rgba(0, 0, 0, 0.04));\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--app-shadow, 0 8px 24px rgba(0, 0, 0, 0.08));\n}\n.stat-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 14px;\n  display: grid;\n  place-items: center;\n  font-size: 1.35rem;\n  flex-shrink: 0;\n}\n.stat-icon.total[_ngcontent-%COMP%] {\n  background: rgba(29, 122, 109, 0.12);\n  color: var(--app-accent, #1d7a6d);\n}\n.stat-icon.active[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.12);\n  color: #16a34a;\n}\n.stat-icon.global[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.12);\n  color: #2563eb;\n}\n.stat-icon.redemptions[_ngcontent-%COMP%] {\n  background: rgba(139, 92, 246, 0.12);\n  color: #7c3aed;\n}\n.stat-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.stat-info[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--app-ink-muted, #64748b);\n}\n.stat-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: var(--app-ink, #0f172a);\n  line-height: 1.2;\n  margin: 2px 0;\n}\n.stat-info[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--app-ink-muted, #64748b);\n}\n.coupon-form-card[_ngcontent-%COMP%], \n.coupon-list-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: var(--app-radius-lg, 16px);\n  padding: 22px;\n  margin-bottom: 24px;\n  box-shadow: var(--app-shadow-soft, 0 4px 16px rgba(0, 0, 0, 0.04));\n}\n.form-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #f1f5f9;\n  margin-bottom: 20px;\n}\n.form-header[_ngcontent-%COMP%]   .badge-tag[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--app-accent, #1d7a6d);\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  margin-bottom: 2px;\n}\n.form-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 800;\n  color: var(--app-ink, #0f172a);\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 16px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: var(--app-ink, #0f172a);\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .req[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.app-input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid var(--app-border, #e2e8f0);\n  background: #f8fafc;\n  border-radius: 10px;\n  padding: 10px 14px;\n  font-size: 0.88rem;\n  color: var(--app-ink, #0f172a);\n  outline: none;\n  transition: all 0.15s ease;\n}\n.app-input[_ngcontent-%COMP%]:focus {\n  background: #ffffff;\n  border-color: var(--app-accent, #1d7a6d);\n  box-shadow: 0 0 0 3px rgba(29, 122, 109, 0.12);\n}\n.app-input.code-input[_ngcontent-%COMP%] {\n  font-weight: 800;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  font-family: monospace;\n  font-size: 0.95rem;\n}\n.app-select[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid var(--app-border, #e2e8f0);\n  background: #f8fafc;\n  border-radius: 10px;\n  padding: 10px 14px;\n  font-size: 0.88rem;\n  color: var(--app-ink, #0f172a);\n  outline: none;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.app-select[_ngcontent-%COMP%]:focus {\n  background: #ffffff;\n  border-color: var(--app-accent, #1d7a6d);\n}\n.actions-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-top: 20px;\n  flex-wrap: wrap;\n}\n.feedback-badge[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  border-radius: 8px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.feedback-badge.success[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.1);\n  color: #15803d;\n}\n.feedback-badge.error[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #b91c1c;\n}\n.list-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #f1f5f9;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.list-head[_ngcontent-%COMP%]   .lh-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.list-head[_ngcontent-%COMP%]   .lh-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 800;\n  color: var(--app-ink, #0f172a);\n}\n.list-head[_ngcontent-%COMP%]   .lh-title[_ngcontent-%COMP%]   .count-pill[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n  font-size: 0.75rem;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 999px;\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.search-input-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #f8fafc;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: 10px;\n  padding: 7px 12px;\n  min-width: 220px;\n}\n.search-input-wrap[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--app-ink-muted, #64748b);\n  font-size: 0.85rem;\n}\n.search-input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  outline: none;\n  width: 100%;\n  font-size: 0.85rem;\n  color: var(--app-ink, #0f172a);\n}\n.filter-select[_ngcontent-%COMP%] {\n  width: auto;\n  min-width: 160px;\n  padding: 8px 12px;\n  font-size: 0.85rem;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.coupon-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  text-align: left;\n  font-size: 0.88rem;\n}\n.coupon-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  color: var(--app-ink-muted, #64748b);\n  font-weight: 700;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 12px 14px;\n  border-bottom: 1px solid var(--app-border, #e2e8f0);\n}\n.coupon-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px;\n  border-bottom: 1px solid #f1f5f9;\n  color: var(--app-ink, #0f172a);\n  vertical-align: middle;\n}\n.coupon-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #fafcff;\n}\n.code-badge[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-weight: 800;\n  font-size: 0.95rem;\n  color: var(--app-accent, #1d7a6d);\n  background: rgba(29, 122, 109, 0.08);\n  padding: 4px 10px;\n  border-radius: 8px;\n  letter-spacing: 0.05em;\n  border: 1px dashed rgba(29, 122, 109, 0.3);\n}\n.badge-global[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 8px;\n  background: rgba(59, 130, 246, 0.1);\n  color: #2563eb;\n  border-radius: 6px;\n  font-size: 0.78rem;\n  font-weight: 700;\n}\n.trek-target-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #334155;\n  font-size: 0.85rem;\n}\n.type-tag[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  background: #f1f5f9;\n  color: #475569;\n  padding: 3px 8px;\n  border-radius: 6px;\n}\n.discount-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.discount-cell[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--app-accent, #1d7a6d);\n  font-weight: 800;\n}\n.discount-cell[_ngcontent-%COMP%]   .max-cap[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--app-ink-muted, #64748b);\n}\n.usage-btn[_ngcontent-%COMP%] {\n  border: 1px solid var(--app-border, #e2e8f0);\n  background: #ffffff;\n  padding: 5px 12px;\n  border-radius: 8px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #334155;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  transition: all 0.15s ease;\n}\n.usage-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--app-accent, #1d7a6d);\n}\n.usage-btn[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  border-color: #cbd5e1;\n}\n.date-range-box[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.8rem;\n  color: #475569;\n}\n.date-range-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 0.75rem;\n}\n.coupon-status-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  padding: 3px 8px;\n  border-radius: 999px;\n}\n.coupon-status-pill[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n}\n.coupon-status-pill.cpill-active[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.12);\n  color: #16a34a;\n}\n.coupon-status-pill.cpill-active[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: #16a34a;\n}\n.coupon-status-pill.cpill-expired[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n  color: #dc2626;\n}\n.coupon-status-pill.cpill-expired[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: #dc2626;\n}\n.coupon-status-pill.cpill-inactive[_ngcontent-%COMP%] {\n  background: rgba(148, 163, 184, 0.16);\n  color: #64748b;\n}\n.coupon-status-pill.cpill-inactive[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: #64748b;\n}\n.actions-cell[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.action-buttons-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 6px;\n}\n.tbl-action-btn[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  border: 1px solid var(--app-border, #e2e8f0);\n  background: #ffffff;\n  color: var(--app-ink, #0f172a);\n  display: grid;\n  place-items: center;\n  font-size: 0.85rem;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.tbl-action-btn.edit[_ngcontent-%COMP%]:hover {\n  background: rgba(29, 122, 109, 0.1);\n  color: var(--app-accent, #1d7a6d);\n  border-color: var(--app-accent, #1d7a6d);\n}\n.tbl-action-btn.delete[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.1);\n  color: #dc2626;\n  border-color: #dc2626;\n}\n.usage-detail-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0 !important;\n  background: #f8fafc !important;\n}\n.usage-panel[_ngcontent-%COMP%] {\n  padding: 18px 24px;\n  border-left: 4px solid var(--app-accent, #1d7a6d);\n  border-top: 1px solid var(--app-border, #e2e8f0);\n  border-bottom: 1px solid var(--app-border, #e2e8f0);\n}\n.usage-panel-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 14px;\n}\n.usage-panel-head[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--app-ink, #0f172a);\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.usage-panel-head[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: rgba(29, 122, 109, 0.1);\n  color: var(--app-accent, #1d7a6d);\n  padding: 2px 6px;\n  border-radius: 4px;\n}\n.usage-panel-head[_ngcontent-%COMP%]   .usage-badge[_ngcontent-%COMP%] {\n  background: #e0f2fe;\n  color: #0369a1;\n  font-size: 0.75rem;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 999px;\n}\n.usage-subtable-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  background: #ffffff;\n  border-radius: 10px;\n  border: 1px solid var(--app-border, #e2e8f0);\n}\n.usage-subtable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.82rem;\n}\n.usage-subtable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  padding: 8px 12px;\n  font-weight: 700;\n  font-size: 0.72rem;\n  color: #64748b;\n  text-transform: uppercase;\n}\n.usage-subtable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border-bottom: 1px solid #f1f5f9;\n}\n.text-accent[_ngcontent-%COMP%] {\n  color: var(--app-accent, #1d7a6d);\n}\n.status-pill-mini[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 700;\n  padding: 2px 6px;\n  border-radius: 4px;\n  background: rgba(34, 197, 94, 0.12);\n  color: #16a34a;\n}\n.empty-state-box[_ngcontent-%COMP%] {\n  padding: 36px 16px;\n  text-align: center;\n}\n.empty-state-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  color: #94a3b8;\n  margin-bottom: 8px;\n}\n.empty-state-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 1.1rem;\n  font-weight: 700;\n}\n.empty-state-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.85rem;\n  color: var(--app-ink-muted, #64748b);\n}\n@media (max-width: 768px) {\n  .coupon-form-card[_ngcontent-%COMP%], \n   .coupon-list-card[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .list-head[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .filters[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .search-input-wrap[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n}\n/*# sourceMappingURL=coupon-manager.component.css.map */"] });
var CouponManagerComponent = _CouponManagerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CouponManagerComponent, [{
    type: Component,
    args: [{ selector: "app-coupon-manager", standalone: true, imports: [CommonModule, FormsModule, AdminShellComponent], schemas: [CUSTOM_ELEMENTS_SCHEMA], template: `<div class="coupon-page">
  <app-admin-shell
    sectionLabel="Promotions & Discounts"
    title="Trek Coupon Manager"
    subtitle="Configure discount rules, promotional codes, redemption limits, and track redemption analytics.">

    <!-- METRICS OVERVIEW -->
    <div class="stats-row">
      <article class="stat-card">
        <div class="stat-icon total">
          <i class="bi bi-ticket-perforated"></i>
        </div>
        <div class="stat-info">
          <span class="stat-label">Total Coupons</span>
          <strong>{{ stats.total }}</strong>
          <small>Created across platform</small>
        </div>
      </article>

      <article class="stat-card">
        <div class="stat-icon active">
          <i class="bi bi-check-circle"></i>
        </div>
        <div class="stat-info">
          <span class="stat-label">Active & Valid</span>
          <strong>{{ stats.active }}</strong>
          <small class="text-success">Available for booking</small>
        </div>
      </article>

      <article class="stat-card">
        <div class="stat-icon global">
          <i class="bi bi-globe2"></i>
        </div>
        <div class="stat-info">
          <span class="stat-label">Global Promos</span>
          <strong>{{ stats.global }}</strong>
          <small>Applies to all treks</small>
        </div>
      </article>

      <article class="stat-card">
        <div class="stat-icon redemptions">
          <i class="bi bi-graph-up-arrow"></i>
        </div>
        <div class="stat-info">
          <span class="stat-label">Total Redemptions</span>
          <strong>{{ stats.redemptions }}</strong>
          <small>Successful checkouts</small>
        </div>
      </article>
    </div>

    <!-- FORM CARD -->
    <section class="surface-card coupon-form-card">
      <div class="form-header">
        <div class="fh-left">
          <span class="badge-tag"><i class="bi bi-percent"></i> {{ editingCouponId ? 'Edit Mode' : 'New Promo' }}</span>
          <h3>{{ editingCouponId ? 'Modify Coupon Settings' : 'Create New Promotional Code' }}</h3>
        </div>
        <button *ngIf="editingCouponId" class="btn-app secondary sm" type="button" (click)="clearForm()">
          <i class="bi bi-plus-lg"></i> Create New Instead
        </button>
      </div>

      <div class="form-grid">
        <!-- SCOPE -->
        <div class="form-group">
          <label>Target Trek Scope</label>
          <select class="app-select" [(ngModel)]="form.trekId">
            <option [ngValue]="null">\u{1F30D} All Treks (Global Promo Code)</option>
            <option *ngFor="let trek of treks" [ngValue]="trek.id">{{ trek.name }}</option>
          </select>
        </div>

        <!-- CODE -->
        <div class="form-group">
          <label>Coupon Code <span class="req">*</span></label>
          <input class="app-input code-input" type="text" [(ngModel)]="form.code" placeholder="e.g. MONSOON20, EARLYBIRD" />
        </div>

        <!-- DISCOUNT TYPE -->
        <div class="form-group">
          <label>Discount Type <span class="req">*</span></label>
          <select class="app-select" [(ngModel)]="form.discountType">
            <option value="percentage">Percentage Discount (%)</option>
            <option value="flat">Flat Amount (\u20B9)</option>
          </select>
        </div>

        <!-- VALUE -->
        <div class="form-group">
          <label>Discount Value <span class="req">*</span></label>
          <input class="app-input" type="number" [(ngModel)]="form.discountValue" min="1" [placeholder]="form.discountType === 'percentage' ? 'e.g. 15%' : 'e.g. 500'" />
        </div>

        <!-- MIN BOOKING -->
        <div class="form-group">
          <label>Min Booking Amount (\u20B9)</label>
          <input class="app-input" type="number" [(ngModel)]="form.minBookingAmount" min="0" placeholder="0 = No minimum" />
        </div>

        <!-- MAX DISCOUNT -->
        <div class="form-group">
          <label>Max Cap Discount (\u20B9)</label>
          <input class="app-input" type="number" [(ngModel)]="form.maxDiscountAmount" min="0" placeholder="Optional cap" />
        </div>

        <!-- START DATE -->
        <div class="form-group">
          <label>Start Date & Time</label>
          <input class="app-input" type="datetime-local" [(ngModel)]="form.startDate" />
        </div>

        <!-- END DATE -->
        <div class="form-group">
          <label>Expiry Date & Time</label>
          <input class="app-input" type="datetime-local" [(ngModel)]="form.endDate" />
        </div>

        <!-- USAGE LIMIT -->
        <div class="form-group">
          <label>Total Usage Limit</label>
          <input class="app-input" type="number" [(ngModel)]="form.usageLimit" min="0" placeholder="Leave empty for unlimited" />
        </div>

        <!-- ACTIVE STATUS -->
        <div class="form-group">
          <label>Status</label>
          <select class="app-select" [(ngModel)]="form.isActive">
            <option [ngValue]="true">Active (Usable)</option>
            <option [ngValue]="false">Inactive (Disabled)</option>
          </select>
        </div>
      </div>

      <div class="actions-row">
        <button *ngIf="authService.hasPermission('treks.manage')" class="btn-app primary" (click)="saveCoupon()" [disabled]="saving">
          <i class="bi bi-check2-circle"></i>
          <span>{{ saving ? 'Saving...' : (editingCouponId ? 'Update Coupon' : 'Create Coupon') }}</span>
        </button>
        <button *ngIf="authService.hasPermission('treks.manage')" class="btn-app secondary" type="button" (click)="clearForm()">
          Clear Form
        </button>

        <div class="feedback-badge success" *ngIf="message">
          <i class="bi bi-check-circle-fill"></i> {{ message }}
        </div>
        <div class="feedback-badge error" *ngIf="error">
          <i class="bi bi-exclamation-triangle-fill"></i> {{ error }}
        </div>
      </div>
    </section>

    <!-- LIST SECTION -->
    <section class="surface-card coupon-list-card">
      <div class="list-head">
        <div class="lh-title">
          <h3>Active & Historical Coupons</h3>
          <span class="count-pill">{{ filteredCoupons.length }} coupon(s)</span>
        </div>

        <div class="filters">
          <div class="search-input-wrap">
            <i class="bi bi-search"></i>
            <input type="text" [(ngModel)]="searchQuery" (ngModelChange)="applyFilter()" placeholder="Search by code or trek..." />
          </div>

          <select class="app-select filter-select" [(ngModel)]="filterTrekId" (ngModelChange)="applyFilter()">
            <option [ngValue]="null">All Treks</option>
            <option *ngFor="let trek of treks" [ngValue]="trek.id">{{ trek.name }}</option>
          </select>

          <button *ngIf="searchQuery || filterTrekId" class="btn-app ghost sm" type="button" (click)="resetFilters()">
            <i class="bi bi-arrow-counterclockwise"></i>
            <span>Reset</span>
          </button>

          <button class="btn-app secondary sm" type="button" (click)="loadCoupons()" [disabled]="loading">
            <i class="bi bi-arrow-clockwise"></i>
            <span>Refresh</span>
          </button>
        </div>
      </div>

      <div class="table-wrap">
        <table class="coupon-table">
          <thead>
            <tr>
              <th>Coupon Code</th>
              <th>Applicable Scope</th>
              <th>Type</th>
              <th>Discount</th>
              <th>Redemptions</th>
              <th>Validity Window</th>
              <th>Status</th>
              <th class="text-end" *ngIf="authService.hasPermission('treks.manage')">Actions</th>
            </tr>
          </thead>
          <tbody>
            <ng-container *ngFor="let c of paginatedCoupons">
              <tr [class.selected-row]="selectedUsageCoupon?.id === c.id">
                <td class="code-cell">
                  <div class="code-wrapper">
                    <span class="code-badge">{{ c.code }}</span>
                  </div>
                </td>
                <td>
                  <span *ngIf="!c.trekId" class="badge-global"><i class="bi bi-globe2 me-1"></i>Global</span>
                  <span *ngIf="c.trekId" class="trek-target-name">{{ c.trekName }}</span>
                </td>
                <td class="type-cell">
                  <span class="type-tag">{{ c.discountType | titlecase }}</span>
                </td>
                <td class="discount-cell">
                  <strong>{{ formatDiscount(c) }}</strong>
                  <small *ngIf="c.maxDiscountAmount" class="max-cap">Max \u20B9{{ c.maxDiscountAmount }}</small>
                </td>
                <td>
                  <button class="usage-btn" type="button" (click)="toggleUsageLog(c)" title="View detailed redemptions">
                    <i class="bi bi-bar-chart-line-fill"></i> {{ c.usageCount }} / {{ c.usageLimit ?? '\u221E' }}
                  </button>
                </td>
                <td class="expiry-cell">
                  <div class="date-range-box">
                    <span>{{ formatDateShort(c.startDate) }}</span>
                    <i class="bi bi-arrow-right"></i>
                    <span>{{ formatDateShort(c.endDate) }}</span>
                  </div>
                </td>
                <td>
                  <span class="coupon-status-pill" [ngClass]="'cpill-' + getCouponStatus(c)">
                    <span class="status-dot"></span>
                    {{ getCouponStatus(c) | titlecase }}
                  </span>
                </td>
                <td class="actions-cell" *ngIf="authService.hasPermission('treks.manage')">
                  <div class="action-buttons-wrap">
                    <button class="tbl-action-btn edit" type="button" (click)="editCoupon(c)" title="Edit Coupon">
                      <i class="bi bi-pencil"></i>
                    </button>
                    <button class="tbl-action-btn delete" type="button" (click)="removeCoupon(c)" title="Delete Coupon">
                      <i class="bi bi-trash3"></i>
                    </button>
                  </div>
                </td>
              </tr>

              <!-- Usage Log Sub-panel -->
              <tr *ngIf="selectedUsageCoupon?.id === c.id" class="usage-detail-row">
                <td colspan="8">
                  <div class="usage-panel">
                    <div class="usage-panel-head">
                      <h4><i class="bi bi-receipt"></i> Redemption Log for Coupon <code>{{ c.code }}</code></h4>
                      <span class="usage-badge">{{ usageLogs.length }} redemption(s)</span>
                    </div>

                    <div *ngIf="loadingUsage" class="usage-loading">
                      <ion-spinner name="crescent"></ion-spinner> Loading redemptions...
                    </div>

                    <div *ngIf="!loadingUsage && usageLogs.length === 0" class="usage-empty">
                      <i class="bi bi-info-circle"></i> No bookings have redeemed this coupon code yet.
                    </div>

                    <div class="usage-subtable-wrap" *ngIf="!loadingUsage && usageLogs.length > 0">
                      <table class="usage-subtable">
                        <thead>
                          <tr>
                            <th>Booking Ref</th>
                            <th>Customer</th>
                            <th>Email</th>
                            <th>Trek</th>
                            <th>Discounted Amount</th>
                            <th>Redeemed Date</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr *ngFor="let log of usageLogs">
                            <td><code>#{{ log.bookingReference || log.id }}</code></td>
                            <td><strong>{{ log.customerName }}</strong></td>
                            <td class="text-muted">{{ log.customerEmail }}</td>
                            <td>{{ log.trekName }}</td>
                            <td class="fw-bold text-accent">\u20B9{{ log.amount }}</td>
                            <td>{{ formatDateShort(log.usedAt) }}</td>
                            <td><span class="status-pill-mini status-completed">{{ log.status }}</span></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </td>
              </tr>
            </ng-container>

            <tr *ngIf="!loading && filteredCoupons.length === 0">
              <td [attr.colspan]="authService.hasPermission('treks.manage') ? 8 : 7" class="empty-row">
                <div class="empty-state-box">
                  <i class="bi bi-ticket-detailed"></i>
                  <h4>No Coupons Found</h4>
                  <p>No coupons match your filter criteria. Create a new promotion above.</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 PAGINATION CONTROLS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
      <div class="pagination-shell" *ngIf="filteredCoupons.length > 0">
        <div class="pagination-inner">
          <div class="pagination-info">
            Showing <strong>{{ (currentPage - 1) * Number(pageSize) + 1 }}</strong> to
            <strong>{{ Math.min(currentPage * Number(pageSize), filteredCoupons.length) }}</strong> of
            <strong>{{ filteredCoupons.length }}</strong> coupons
          </div>

          <div class="pagination-controls">
            <div class="page-size-selector">
              <label>Per page:</label>
              <select class="pagination-select" [(ngModel)]="pageSize" (ngModelChange)="onPageSizeChange($event)">
                <option *ngFor="let opt of pageSizeOptions" [value]="opt">{{ opt }}</option>
              </select>
            </div>

            <div class="page-actions">
              <button class="page-nav-btn" type="button" (click)="prevPage()" [disabled]="currentPage === 1" title="Previous Page">
                <i class="bi bi-chevron-left"></i> <span>Prev</span>
              </button>

              <ng-container *ngFor="let p of visiblePageNumbers">
                <span class="page-ellipsis" *ngIf="p === '...'">\u2026</span>
                <button
                  class="page-btn"
                  type="button"
                  *ngIf="p !== '...'"
                  [class.active]="p === currentPage"
                  (click)="goToPage(p)">
                  {{ p }}
                </button>
              </ng-container>

              <button class="page-nav-btn" type="button" (click)="nextPage()" [disabled]="currentPage === totalPages" title="Next Page">
                <span>Next</span> <i class="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </app-admin-shell>
</div>
`, styles: ["/* src/app/coupon-manager/coupon-manager.component.scss */\n:host {\n  display: block;\n}\n.coupon-page {\n  --background: transparent;\n}\n.stats-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.stat-card {\n  background: #ffffff;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: var(--app-radius-lg, 16px);\n  padding: 18px 20px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  box-shadow: var(--app-shadow-soft, 0 4px 16px rgba(0, 0, 0, 0.04));\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.stat-card:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--app-shadow, 0 8px 24px rgba(0, 0, 0, 0.08));\n}\n.stat-icon {\n  width: 48px;\n  height: 48px;\n  border-radius: 14px;\n  display: grid;\n  place-items: center;\n  font-size: 1.35rem;\n  flex-shrink: 0;\n}\n.stat-icon.total {\n  background: rgba(29, 122, 109, 0.12);\n  color: var(--app-accent, #1d7a6d);\n}\n.stat-icon.active {\n  background: rgba(34, 197, 94, 0.12);\n  color: #16a34a;\n}\n.stat-icon.global {\n  background: rgba(59, 130, 246, 0.12);\n  color: #2563eb;\n}\n.stat-icon.redemptions {\n  background: rgba(139, 92, 246, 0.12);\n  color: #7c3aed;\n}\n.stat-info {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.stat-info .stat-label {\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--app-ink-muted, #64748b);\n}\n.stat-info strong {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: var(--app-ink, #0f172a);\n  line-height: 1.2;\n  margin: 2px 0;\n}\n.stat-info small {\n  font-size: 0.75rem;\n  color: var(--app-ink-muted, #64748b);\n}\n.coupon-form-card,\n.coupon-list-card {\n  background: #ffffff;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: var(--app-radius-lg, 16px);\n  padding: 22px;\n  margin-bottom: 24px;\n  box-shadow: var(--app-shadow-soft, 0 4px 16px rgba(0, 0, 0, 0.04));\n}\n.form-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #f1f5f9;\n  margin-bottom: 20px;\n}\n.form-header .badge-tag {\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--app-accent, #1d7a6d);\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  margin-bottom: 2px;\n}\n.form-header h3 {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 800;\n  color: var(--app-ink, #0f172a);\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 16px;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group label {\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: var(--app-ink, #0f172a);\n}\n.form-group label .req {\n  color: #dc2626;\n}\n.app-input {\n  width: 100%;\n  border: 1px solid var(--app-border, #e2e8f0);\n  background: #f8fafc;\n  border-radius: 10px;\n  padding: 10px 14px;\n  font-size: 0.88rem;\n  color: var(--app-ink, #0f172a);\n  outline: none;\n  transition: all 0.15s ease;\n}\n.app-input:focus {\n  background: #ffffff;\n  border-color: var(--app-accent, #1d7a6d);\n  box-shadow: 0 0 0 3px rgba(29, 122, 109, 0.12);\n}\n.app-input.code-input {\n  font-weight: 800;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  font-family: monospace;\n  font-size: 0.95rem;\n}\n.app-select {\n  width: 100%;\n  border: 1px solid var(--app-border, #e2e8f0);\n  background: #f8fafc;\n  border-radius: 10px;\n  padding: 10px 14px;\n  font-size: 0.88rem;\n  color: var(--app-ink, #0f172a);\n  outline: none;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.app-select:focus {\n  background: #ffffff;\n  border-color: var(--app-accent, #1d7a6d);\n}\n.actions-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-top: 20px;\n  flex-wrap: wrap;\n}\n.feedback-badge {\n  padding: 8px 14px;\n  border-radius: 8px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.feedback-badge.success {\n  background: rgba(34, 197, 94, 0.1);\n  color: #15803d;\n}\n.feedback-badge.error {\n  background: rgba(239, 68, 68, 0.1);\n  color: #b91c1c;\n}\n.list-head {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #f1f5f9;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.list-head .lh-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.list-head .lh-title h3 {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 800;\n  color: var(--app-ink, #0f172a);\n}\n.list-head .lh-title .count-pill {\n  background: #f1f5f9;\n  color: #475569;\n  font-size: 0.75rem;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 999px;\n}\n.filters {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.search-input-wrap {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #f8fafc;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: 10px;\n  padding: 7px 12px;\n  min-width: 220px;\n}\n.search-input-wrap i {\n  color: var(--app-ink-muted, #64748b);\n  font-size: 0.85rem;\n}\n.search-input-wrap input {\n  border: none;\n  background: transparent;\n  outline: none;\n  width: 100%;\n  font-size: 0.85rem;\n  color: var(--app-ink, #0f172a);\n}\n.filter-select {\n  width: auto;\n  min-width: 160px;\n  padding: 8px 12px;\n  font-size: 0.85rem;\n}\n.table-wrap {\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.coupon-table {\n  width: 100%;\n  border-collapse: collapse;\n  text-align: left;\n  font-size: 0.88rem;\n}\n.coupon-table th {\n  background: #f8fafc;\n  color: var(--app-ink-muted, #64748b);\n  font-weight: 700;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 12px 14px;\n  border-bottom: 1px solid var(--app-border, #e2e8f0);\n}\n.coupon-table td {\n  padding: 14px;\n  border-bottom: 1px solid #f1f5f9;\n  color: var(--app-ink, #0f172a);\n  vertical-align: middle;\n}\n.coupon-table tbody tr:hover {\n  background: #fafcff;\n}\n.code-badge {\n  font-family: monospace;\n  font-weight: 800;\n  font-size: 0.95rem;\n  color: var(--app-accent, #1d7a6d);\n  background: rgba(29, 122, 109, 0.08);\n  padding: 4px 10px;\n  border-radius: 8px;\n  letter-spacing: 0.05em;\n  border: 1px dashed rgba(29, 122, 109, 0.3);\n}\n.badge-global {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 8px;\n  background: rgba(59, 130, 246, 0.1);\n  color: #2563eb;\n  border-radius: 6px;\n  font-size: 0.78rem;\n  font-weight: 700;\n}\n.trek-target-name {\n  font-weight: 600;\n  color: #334155;\n  font-size: 0.85rem;\n}\n.type-tag {\n  font-size: 0.78rem;\n  font-weight: 600;\n  background: #f1f5f9;\n  color: #475569;\n  padding: 3px 8px;\n  border-radius: 6px;\n}\n.discount-cell {\n  display: flex;\n  flex-direction: column;\n}\n.discount-cell strong {\n  font-size: 1rem;\n  color: var(--app-accent, #1d7a6d);\n  font-weight: 800;\n}\n.discount-cell .max-cap {\n  font-size: 0.72rem;\n  color: var(--app-ink-muted, #64748b);\n}\n.usage-btn {\n  border: 1px solid var(--app-border, #e2e8f0);\n  background: #ffffff;\n  padding: 5px 12px;\n  border-radius: 8px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #334155;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  transition: all 0.15s ease;\n}\n.usage-btn i {\n  color: var(--app-accent, #1d7a6d);\n}\n.usage-btn:hover {\n  background: #f1f5f9;\n  border-color: #cbd5e1;\n}\n.date-range-box {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.8rem;\n  color: #475569;\n}\n.date-range-box i {\n  color: #94a3b8;\n  font-size: 0.75rem;\n}\n.coupon-status-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  padding: 3px 8px;\n  border-radius: 999px;\n}\n.coupon-status-pill .status-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n}\n.coupon-status-pill.cpill-active {\n  background: rgba(34, 197, 94, 0.12);\n  color: #16a34a;\n}\n.coupon-status-pill.cpill-active .status-dot {\n  background: #16a34a;\n}\n.coupon-status-pill.cpill-expired {\n  background: rgba(239, 68, 68, 0.12);\n  color: #dc2626;\n}\n.coupon-status-pill.cpill-expired .status-dot {\n  background: #dc2626;\n}\n.coupon-status-pill.cpill-inactive {\n  background: rgba(148, 163, 184, 0.16);\n  color: #64748b;\n}\n.coupon-status-pill.cpill-inactive .status-dot {\n  background: #64748b;\n}\n.actions-cell {\n  white-space: nowrap;\n}\n.action-buttons-wrap {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 6px;\n}\n.tbl-action-btn {\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  border: 1px solid var(--app-border, #e2e8f0);\n  background: #ffffff;\n  color: var(--app-ink, #0f172a);\n  display: grid;\n  place-items: center;\n  font-size: 0.85rem;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.tbl-action-btn.edit:hover {\n  background: rgba(29, 122, 109, 0.1);\n  color: var(--app-accent, #1d7a6d);\n  border-color: var(--app-accent, #1d7a6d);\n}\n.tbl-action-btn.delete:hover {\n  background: rgba(239, 68, 68, 0.1);\n  color: #dc2626;\n  border-color: #dc2626;\n}\n.usage-detail-row td {\n  padding: 0 !important;\n  background: #f8fafc !important;\n}\n.usage-panel {\n  padding: 18px 24px;\n  border-left: 4px solid var(--app-accent, #1d7a6d);\n  border-top: 1px solid var(--app-border, #e2e8f0);\n  border-bottom: 1px solid var(--app-border, #e2e8f0);\n}\n.usage-panel-head {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 14px;\n}\n.usage-panel-head h4 {\n  margin: 0;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--app-ink, #0f172a);\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.usage-panel-head h4 code {\n  background: rgba(29, 122, 109, 0.1);\n  color: var(--app-accent, #1d7a6d);\n  padding: 2px 6px;\n  border-radius: 4px;\n}\n.usage-panel-head .usage-badge {\n  background: #e0f2fe;\n  color: #0369a1;\n  font-size: 0.75rem;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 999px;\n}\n.usage-subtable-wrap {\n  overflow-x: auto;\n  background: #ffffff;\n  border-radius: 10px;\n  border: 1px solid var(--app-border, #e2e8f0);\n}\n.usage-subtable {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.82rem;\n}\n.usage-subtable th {\n  background: #f1f5f9;\n  padding: 8px 12px;\n  font-weight: 700;\n  font-size: 0.72rem;\n  color: #64748b;\n  text-transform: uppercase;\n}\n.usage-subtable td {\n  padding: 10px 12px;\n  border-bottom: 1px solid #f1f5f9;\n}\n.text-accent {\n  color: var(--app-accent, #1d7a6d);\n}\n.status-pill-mini {\n  font-size: 0.7rem;\n  font-weight: 700;\n  padding: 2px 6px;\n  border-radius: 4px;\n  background: rgba(34, 197, 94, 0.12);\n  color: #16a34a;\n}\n.empty-state-box {\n  padding: 36px 16px;\n  text-align: center;\n}\n.empty-state-box i {\n  font-size: 2.2rem;\n  color: #94a3b8;\n  margin-bottom: 8px;\n}\n.empty-state-box h4 {\n  margin: 0 0 4px;\n  font-size: 1.1rem;\n  font-weight: 700;\n}\n.empty-state-box p {\n  margin: 0;\n  font-size: 0.85rem;\n  color: var(--app-ink-muted, #64748b);\n}\n@media (max-width: 768px) {\n  .coupon-form-card,\n  .coupon-list-card {\n    padding: 16px;\n  }\n  .form-grid {\n    grid-template-columns: 1fr;\n  }\n  .list-head {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .filters {\n    width: 100%;\n  }\n  .search-input-wrap {\n    flex: 1;\n  }\n}\n/*# sourceMappingURL=coupon-manager.component.css.map */\n"] }]
  }], () => [{ type: TrekList }, { type: CouponManagerService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CouponManagerComponent, { className: "CouponManagerComponent", filePath: "src/app/coupon-manager/coupon-manager.component.ts", lineNumber: 23 });
})();

// src/app/coupon-manager/coupon-manager.module.ts
var routes = [{ path: "", component: CouponManagerComponent }];
var _CouponManagerModule = class _CouponManagerModule {
};
_CouponManagerModule.\u0275fac = function CouponManagerModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CouponManagerModule)();
};
_CouponManagerModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _CouponManagerModule });
_CouponManagerModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, CouponManagerComponent, RouterModule.forChild(routes)] });
var CouponManagerModule = _CouponManagerModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CouponManagerModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [CommonModule, CouponManagerComponent, RouterModule.forChild(routes)]
    }]
  }], null, null);
})();
export {
  CouponManagerModule
};
//# sourceMappingURL=coupon-manager.module-DZGGMNN3.js.map
