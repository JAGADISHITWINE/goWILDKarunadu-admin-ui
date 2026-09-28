import {
  Reviews
} from "./chunk-UANI3GZQ.js";
import {
  TrekBatchManagement
} from "./chunk-53H7TVLO.js";
import {
  Dashboard
} from "./chunk-AQ2URHKF.js";
import {
  Analytics
} from "./chunk-K2U6SD7G.js";
import {
  TrekList
} from "./chunk-B5I2JPD2.js";
import {
  Bookings
} from "./chunk-LO3D7BUV.js";
import {
  Users
} from "./chunk-VISOL5UA.js";
import {
  DropdownManagerService
} from "./chunk-2AIND2RX.js";
import {
  AdminShellComponent,
  NotificationsService
} from "./chunk-36TQFYFK.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-QNEZ2FH5.js";
import {
  AuthService
} from "./chunk-D4XXJJII.js";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  CommonModule,
  Component,
  DecimalPipe,
  EncryptionService,
  HttpClient,
  Injectable,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  RouterModule,
  UpperCasePipe,
  __spreadProps,
  __spreadValues,
  catchError,
  environment,
  forkJoin,
  map,
  of,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-KQE4QDNK.js";

// src/app/operations-center/audit.service.ts
var _AuditService = class _AuditService {
  constructor(http, crypto) {
    this.http = http;
    this.crypto = crypto;
    this.API = environment.baseUrl;
  }
  getAuditLogs(limit = 25) {
    return this.http.get(`${this.API}/audit-logs`, {
      params: { limit: String(limit) }
    }).pipe(map((res) => {
      const encrypted = typeof res?.data === "string" ? res.data : typeof res?.payload === "string" ? res.payload : null;
      if (encrypted) {
        const decrypted = this.crypto.decrypt(encrypted);
        return __spreadProps(__spreadValues({}, res), {
          data: decrypted
        });
      }
      return res;
    }));
  }
};
_AuditService.\u0275fac = function AuditService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AuditService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(EncryptionService));
};
_AuditService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuditService, factory: _AuditService.\u0275fac, providedIn: "root" });
var AuditService = _AuditService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuditService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: EncryptionService }], null);
})();

// src/app/core/services/rbac.service.ts
var _RbacService = class _RbacService {
  constructor(http) {
    this.http = http;
    this.API = environment.baseUrl;
  }
  getTable() {
    return this.http.get(`${this.API}/rbac/table`);
  }
  updateTable(rows) {
    return this.http.put(`${this.API}/rbac/table`, { rows });
  }
  createAdmin(payload) {
    return this.http.post(`${this.API}/admins`, payload);
  }
};
_RbacService.\u0275fac = function RbacService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RbacService)(\u0275\u0275inject(HttpClient));
};
_RbacService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RbacService, factory: _RbacService.\u0275fac, providedIn: "root" });
var RbacService = _RbacService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RbacService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/operations-center/operations-center.component.ts
function OperationsCenterComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "i", 39);
    \u0275\u0275elementStart(2, "div")(3, "span", 40);
    \u0275\u0275text(4, "Last Synced");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.lastSyncedAt);
  }
}
function OperationsCenterComponent_div_71_div_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80);
    \u0275\u0275element(1, "div", 81);
    \u0275\u0275elementStart(2, "span", 82);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong", 83);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    \u0275\u0275classProp("ok", c_r2.ok)("fail", !c_r2.ok);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.ok ? "ONLINE" : "OFFLINE");
  }
}
function OperationsCenterComponent_div_71_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275template(1, OperationsCenterComponent_div_71_div_13_div_1_Template, 6, 6, "div", 79);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.apiChecks);
  }
}
function OperationsCenterComponent_div_71_div_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 84)(1, "div", 85)(2, "div", 86);
    \u0275\u0275element(3, "i", 87);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 88);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "button", 89);
    \u0275\u0275listener("click", function OperationsCenterComponent_div_71_div_87_Template_button_click_9_listener() {
      const report_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.exportReport(report_r4));
    });
    \u0275\u0275element(10, "i", 90);
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const report_r4 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(report_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Format: ", report_r4.format, " \u2022 Generated: ", report_r4.lastGenerated);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Download ", report_r4.format);
  }
}
function OperationsCenterComponent_div_71_div_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91)(1, "div", 92)(2, "code", 93);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 88);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "span", 94);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", p_r5.bookingId);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(7, 9, p_r5.amount, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", p_r5.mode, " \u2022 ", p_r5.status);
    \u0275\u0275advance();
    \u0275\u0275classProp("success", p_r5.reconcile === "Reconciled")("pending", p_r5.reconcile !== "Reconciled");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r5.reconcile, " ");
  }
}
function OperationsCenterComponent_div_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 42)(2, "div", 43)(3, "div", 44);
    \u0275\u0275element(4, "i", 45);
    \u0275\u0275elementStart(5, "div")(6, "h3");
    \u0275\u0275text(7, "Core Infrastructure Connectivity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9, "Continuous ping diagnostics across distributed microservices.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "span", 46);
    \u0275\u0275element(11, "i", 47);
    \u0275\u0275text(12, " All Services Green");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, OperationsCenterComponent_div_71_div_13_Template, 2, 1, "div", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 49)(15, "div", 50)(16, "div", 51);
    \u0275\u0275element(17, "i", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 53)(19, "span", 54);
    \u0275\u0275text(20, "Failed Payments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 55);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 56);
    \u0275\u0275text(24, "Awaiting manual reconciliation");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 57)(26, "div", 51);
    \u0275\u0275element(27, "i", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 53)(29, "span", 54);
    \u0275\u0275text(30, "Compliance Completion");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 58);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 56);
    \u0275\u0275text(34, "Manifest & ID verified");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 59)(36, "div", 51);
    \u0275\u0275element(37, "i", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 53)(39, "span", 54);
    \u0275\u0275text(40, "Open Support Inquiries");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 61);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span", 56);
    \u0275\u0275text(44, "Escalations in queue");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "div", 62)(46, "div", 51);
    \u0275\u0275element(47, "i", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 53)(49, "span", 54);
    \u0275\u0275text(50, "Total Booking Revenue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 64);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "span", 56);
    \u0275\u0275text(55, "Gross platform volume");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(56, "div", 65)(57, "div", 51);
    \u0275\u0275element(58, "i", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 53)(60, "span", 54);
    \u0275\u0275text(61, "Confirmed Bookings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 67);
    \u0275\u0275text(63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "span", 56);
    \u0275\u0275text(65, "Processed transactions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(66, "div", 68)(67, "div", 51);
    \u0275\u0275element(68, "i", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "div", 53)(70, "span", 54);
    \u0275\u0275text(71, "Active Trekkers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "div", 67);
    \u0275\u0275text(73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "span", 56);
    \u0275\u0275text(75, "Registered community");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(76, "div", 70)(77, "div", 71)(78, "div", 43)(79, "div", 44);
    \u0275\u0275element(80, "i", 72);
    \u0275\u0275elementStart(81, "div")(82, "h3");
    \u0275\u0275text(83, "Reports & Data Exports");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "p");
    \u0275\u0275text(85, "Download audited registers in CSV / XLSX format.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(86, "div", 73);
    \u0275\u0275template(87, OperationsCenterComponent_div_71_div_87_Template, 13, 4, "div", 74);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(88, "div", 71)(89, "div", 43)(90, "div", 44);
    \u0275\u0275element(91, "i", 75);
    \u0275\u0275elementStart(92, "div")(93, "h3");
    \u0275\u0275text(94, "Payment Settlement & Gateways");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "p");
    \u0275\u0275text(96, "Live transaction health & settlement reconciliation.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(97, "div", 76);
    \u0275\u0275template(98, OperationsCenterComponent_div_71_div_98_Template, 12, 12, "div", 77);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275property("ngIf", ctx_r0.apiChecks.length);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.failedPayments);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1("", ctx_r0.complianceCompletion, "%");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.openTicketCount);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(53, 9, ctx_r0.totalRevenue, "1.0-0"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r0.totalBookings);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.totalUsers);
    \u0275\u0275advance(14);
    \u0275\u0275property("ngForOf", ctx_r0.reports);
    \u0275\u0275advance(11);
    \u0275\u0275property("ngForOf", ctx_r0.paymentOps);
  }
}
function OperationsCenterComponent_div_72_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 110);
    \u0275\u0275element(1, "div", 111);
    \u0275\u0275elementStart(2, "div", 112);
    \u0275\u0275element(3, "i", 113);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Align Trekker Mobile Pass QR within frame");
    \u0275\u0275elementEnd()()();
  }
}
function OperationsCenterComponent_div_72_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 114);
    \u0275\u0275listener("click", function OperationsCenterComponent_div_72_button_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.clearScanner());
    });
    \u0275\u0275text(1, "Clear");
    \u0275\u0275elementEnd();
  }
}
function OperationsCenterComponent_div_72_div_22_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 134)(1, "div", 135);
    \u0275\u0275element(2, "i", 136);
    \u0275\u0275elementStart(3, "div")(4, "strong");
    \u0275\u0275text(5, "70% Remainder Balance Due at Checkpoint:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 137);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "button", 138);
    \u0275\u0275listener("click", function OperationsCenterComponent_div_72_div_22_div_36_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.collectBasecampRemainder(ctx_r0.foundBooking));
    });
    \u0275\u0275element(10, "i", 139);
    \u0275\u0275text(11, " Collect & Mark Paid ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(8, 1, ctx_r0.foundBooking.balance_due || ctx_r0.foundBooking.total_amount * 0.7, "1.0-0"), " pending");
  }
}
function OperationsCenterComponent_div_72_div_22_a_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 140);
    \u0275\u0275element(1, "i", 141);
    \u0275\u0275text(2, " Call Trekker ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("href", "tel:" + (ctx_r0.foundBooking.customer_phone || ctx_r0.foundBooking.phone), \u0275\u0275sanitizeUrl);
  }
}
function OperationsCenterComponent_div_72_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 115)(1, "div", 116)(2, "div")(3, "span", 117);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4", 118);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 119);
    \u0275\u0275element(8, "i", 120);
    \u0275\u0275text(9);
    \u0275\u0275element(10, "i", 121);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 122)(13, "span", 94);
    \u0275\u0275element(14, "i", 98);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 123);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "uppercase");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 124)(20, "div", 125)(21, "span", 126);
    \u0275\u0275text(22, "Trek Expedition");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "strong");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 125)(26, "span", 126);
    \u0275\u0275text(27, "Participants");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "strong");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 125)(31, "span", 126);
    \u0275\u0275text(32, "Eco-Permit Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 127);
    \u0275\u0275element(34, "i", 128);
    \u0275\u0275text(35, " Cleared & Verified");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(36, OperationsCenterComponent_div_72_div_22_div_36_Template, 12, 4, "div", 129);
    \u0275\u0275elementStart(37, "div", 130)(38, "button", 131);
    \u0275\u0275listener("click", function OperationsCenterComponent_div_72_div_22_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.confirmCheckin(ctx_r0.foundBooking));
    });
    \u0275\u0275element(39, "i", 132);
    \u0275\u0275elementStart(40, "span");
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(42, OperationsCenterComponent_div_72_div_22_a_42_Template, 3, 1, "a", 133);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("DIGITAL PASS #GWK-", ctx_r0.foundBooking.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.foundBooking.customer_name || ctx_r0.foundBooking.customerName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.foundBooking.customer_email || ctx_r0.foundBooking.email, " \u2022 ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.foundBooking.customer_phone || ctx_r0.foundBooking.phone, " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("success", ctx_r0.isCheckedIn)("warning", !ctx_r0.isCheckedIn);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.isCheckedIn ? "bi-check-circle-fill" : "bi-clock-history");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isCheckedIn ? "Checked-in / At Basecamp" : "Awaiting Check-in", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("\u20B9", ctx_r0.foundBooking.amount || ctx_r0.foundBooking.total_amount, " (", \u0275\u0275pipeBind1(18, 18, ctx_r0.foundBooking.payment_status || ctx_r0.foundBooking.paymentStatus), ")");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.foundBooking.trek_name || ctx_r0.foundBooking.trekName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r0.foundBooking.participants || ctx_r0.foundBooking.seats || 1, " Trekkers");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r0.foundBooking.balance_due > 0 || ctx_r0.foundBooking.payment_status === "partial");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.isCheckedIn);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.isCheckedIn ? "Already Checked-in" : "Confirm Basecamp Check-in");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.foundBooking.customer_phone || ctx_r0.foundBooking.phone);
  }
}
function OperationsCenterComponent_div_72_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 142);
    \u0275\u0275element(1, "i", 143);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1('No matching booking found for "', ctx_r0.scannerQuery, '". Check the reference ID.');
  }
}
function OperationsCenterComponent_div_72_div_35_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 146)(1, "div", 147);
    \u0275\u0275element(2, "i", 148);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 149)(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementStart(6, "span", 150);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span", 151);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ch_r10 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ch_r10.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(#", ch_r10.bookingId, ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ch_r10.trek, " \u2022 ", ch_r10.count, " Trekkers");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ch_r10.time);
  }
}
function OperationsCenterComponent_div_72_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 144);
    \u0275\u0275template(1, OperationsCenterComponent_div_72_div_35_div_1_Template, 12, 5, "div", 145);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.checkinHistory);
  }
}
function OperationsCenterComponent_div_72_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 152);
    \u0275\u0275element(1, "i", 153);
    \u0275\u0275elementStart(2, "h4");
    \u0275\u0275text(3, "No arrivals recorded yet today");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Check-in events verified via scanner will stream here in real time.");
    \u0275\u0275elementEnd()();
  }
}
function OperationsCenterComponent_div_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 95)(2, "div", 71)(3, "div", 43)(4, "div", 44);
    \u0275\u0275element(5, "i", 96);
    \u0275\u0275elementStart(6, "div")(7, "h3");
    \u0275\u0275text(8, "Basecamp Check-in Desk");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10, "Scan mobile QR pass or search reference to verify guest permits.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "button", 97);
    \u0275\u0275listener("click", function OperationsCenterComponent_div_72_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleCameraScanner());
    });
    \u0275\u0275element(12, "i", 98);
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(15, OperationsCenterComponent_div_72_div_15_Template, 6, 0, "div", 99);
    \u0275\u0275elementStart(16, "div", 100);
    \u0275\u0275element(17, "i", 101);
    \u0275\u0275elementStart(18, "input", 102);
    \u0275\u0275twoWayListener("ngModelChange", function OperationsCenterComponent_div_72_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.scannerQuery, $event) || (ctx_r0.scannerQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function OperationsCenterComponent_div_72_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.searchCheckin($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 103);
    \u0275\u0275listener("click", function OperationsCenterComponent_div_72_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.searchCheckin(ctx_r0.scannerQuery));
    });
    \u0275\u0275text(20, "Look up");
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, OperationsCenterComponent_div_72_button_21_Template, 2, 0, "button", 104);
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, OperationsCenterComponent_div_72_div_22_Template, 43, 20, "div", 105)(23, OperationsCenterComponent_div_72_div_23_Template, 4, 1, "div", 106);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 71)(25, "div", 43)(26, "div", 44);
    \u0275\u0275element(27, "i", 107);
    \u0275\u0275elementStart(28, "div")(29, "h3");
    \u0275\u0275text(30, "Recent Basecamp Arrivals");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p");
    \u0275\u0275text(32, "Live verified check-ins at forest entry checkpoint.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "span", 108);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(35, OperationsCenterComponent_div_72_div_35_Template, 2, 1, "div", 109)(36, OperationsCenterComponent_div_72_ng_template_36_Template, 6, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const noArrivalsTpl_r11 = \u0275\u0275reference(37);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("ngClass", ctx_r0.isCameraActive ? "danger" : "primary");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.isCameraActive ? "bi-camera-video-off" : "bi-camera-video");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.isCameraActive ? "Stop Camera" : "Start QR Camera");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isCameraActive);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.scannerQuery);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.scannerQuery || ctx_r0.foundBooking);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.foundBooking);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.foundBooking && ctx_r0.scannerQuery);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1("", ctx_r0.checkinHistory.length, " today");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.checkinHistory.length > 0)("ngIfElse", noArrivalsTpl_r11);
  }
}
function OperationsCenterComponent_div_73_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 187);
    \u0275\u0275element(1, "i", 47);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.broadcastSuccessMsg, " ");
  }
}
function OperationsCenterComponent_div_73_option_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 188);
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
function OperationsCenterComponent_div_73_option_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 188);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r14 = ctx.$implicit;
    \u0275\u0275property("value", opt_r14);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r14);
  }
}
function OperationsCenterComponent_div_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 70)(2, "div", 71)(3, "div", 43)(4, "div", 44);
    \u0275\u0275element(5, "i", 154);
    \u0275\u0275elementStart(6, "div")(7, "h3");
    \u0275\u0275text(8, "Trail Advisory Broadcast Desk");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10, "Send instant weather alerts & trail passability updates to batch trekkers.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(11, OperationsCenterComponent_div_73_div_11_Template, 3, 1, "div", 155);
    \u0275\u0275elementStart(12, "form", 156);
    \u0275\u0275listener("ngSubmit", function OperationsCenterComponent_div_73_Template_form_ngSubmit_12_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.broadcastAdvisory());
    });
    \u0275\u0275elementStart(13, "div", 157)(14, "label");
    \u0275\u0275text(15, "Target Trek Expedition ");
    \u0275\u0275elementStart(16, "span", 158);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "input", 159);
    \u0275\u0275twoWayListener("ngModelChange", function OperationsCenterComponent_div_73_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.advisoryForm.trekName, $event) || (ctx_r0.advisoryForm.trekName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 160)(20, "div", 157)(21, "label");
    \u0275\u0275text(22, "Trail Status & Passability");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "select", 161);
    \u0275\u0275twoWayListener("ngModelChange", function OperationsCenterComponent_div_73_Template_select_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.advisoryForm.trailCondition, $event) || (ctx_r0.advisoryForm.trailCondition = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(24, OperationsCenterComponent_div_73_option_24_Template, 2, 2, "option", 162);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 157)(26, "label");
    \u0275\u0275text(27, "Alert Severity Level");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "select", 163);
    \u0275\u0275twoWayListener("ngModelChange", function OperationsCenterComponent_div_73_Template_select_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.advisoryForm.severity, $event) || (ctx_r0.advisoryForm.severity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(29, OperationsCenterComponent_div_73_option_29_Template, 2, 2, "option", 162);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 157)(31, "label");
    \u0275\u0275text(32, "Alert Message / Instructions ");
    \u0275\u0275elementStart(33, "span", 158);
    \u0275\u0275text(34, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "textarea", 164);
    \u0275\u0275twoWayListener("ngModelChange", function OperationsCenterComponent_div_73_Template_textarea_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.advisoryForm.alertMessage, $event) || (ctx_r0.advisoryForm.alertMessage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 165)(37, "span", 166);
    \u0275\u0275element(38, "i", 167);
    \u0275\u0275text(39, " Channel: ");
    \u0275\u0275elementStart(40, "strong");
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 168)(43, "button", 103);
    \u0275\u0275listener("click", function OperationsCenterComponent_div_73_Template_button_click_43_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.resetAdvisoryForm());
    });
    \u0275\u0275text(44, "Reset");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "button", 169);
    \u0275\u0275element(46, "i", 170);
    \u0275\u0275elementStart(47, "span");
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(49, "div", 71)(50, "div", 43)(51, "div", 44);
    \u0275\u0275element(52, "i", 171);
    \u0275\u0275elementStart(53, "div")(54, "h3");
    \u0275\u0275text(55, "Western Ghats Trail Weather Monitor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "p");
    \u0275\u0275text(57, "Eco-checkpoint meteorological feed across primary trekking regions.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(58, "div", 172)(59, "div", 173)(60, "div", 174)(61, "div")(62, "strong");
    \u0275\u0275text(63, "Kudremukha Range (Chikkamagaluru)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 175);
    \u0275\u0275text(65, "Elevation: 1,894m \u2022 Trail: Open & Clear");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "span", 176);
    \u0275\u0275element(67, "i", 177);
    \u0275\u0275text(68, " 21\xB0C");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div", 178)(70, "span", 179);
    \u0275\u0275element(71, "i", 180);
    \u0275\u0275text(72, " Humidity: 78%");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "span", 179);
    \u0275\u0275element(74, "i", 181);
    \u0275\u0275text(75, " Wind: 14 km/h");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "span", 182);
    \u0275\u0275element(77, "i", 47);
    \u0275\u0275text(78, " Passable");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(79, "div", 173)(80, "div", 174)(81, "div")(82, "strong");
    \u0275\u0275text(83, "Netravati Peak Trail (Belthangady)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "div", 175);
    \u0275\u0275text(85, "Elevation: 1,520m \u2022 Trail: Damp / Leech Alert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(86, "span", 176);
    \u0275\u0275element(87, "i", 177);
    \u0275\u0275text(88, " 19\xB0C");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(89, "div", 178)(90, "span", 179);
    \u0275\u0275element(91, "i", 183);
    \u0275\u0275text(92, " Rain: 8mm");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "span", 179);
    \u0275\u0275element(94, "i", 181);
    \u0275\u0275text(95, " Wind: 22 km/h");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "span", 184);
    \u0275\u0275element(97, "i", 185);
    \u0275\u0275text(98, " Advisory");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(99, "div", 173)(100, "div", 174)(101, "div")(102, "strong");
    \u0275\u0275text(103, "Tadiandamol Peak (Coorg)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "div", 175);
    \u0275\u0275text(105, "Elevation: 1,748m \u2022 Trail: Optimal");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(106, "span", 176);
    \u0275\u0275element(107, "i", 177);
    \u0275\u0275text(108, " 23\xB0C");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(109, "div", 178)(110, "span", 179);
    \u0275\u0275element(111, "i", 186);
    \u0275\u0275text(112, " Sunny / Mist");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "span", 179);
    \u0275\u0275element(114, "i", 181);
    \u0275\u0275text(115, " Wind: 9 km/h");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "span", 182);
    \u0275\u0275element(117, "i", 47);
    \u0275\u0275text(118, " Open");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", ctx_r0.broadcastSuccessMsg);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.advisoryForm.trekName);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.advisoryForm.trailCondition);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.trailConditionOptions);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.advisoryForm.severity);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.trailSeverityOptions);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.advisoryForm.alertMessage);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.advisoryForm.channel);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.isBroadcasting || !ctx_r0.advisoryForm.alertMessage.trim());
    \u0275\u0275advance();
    \u0275\u0275classProp("spin", ctx_r0.isBroadcasting);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.isBroadcasting ? "Broadcasting..." : "Broadcast to Trekkers");
  }
}
function OperationsCenterComponent_div_74_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 192);
    \u0275\u0275listener("click", function OperationsCenterComponent_div_74_button_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openAddGearModal());
    });
    \u0275\u0275element(1, "i", 193);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Add Equipment Item");
    \u0275\u0275elementEnd()();
  }
}
function OperationsCenterComponent_div_74_div_11_div_1_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 208)(1, "button", 209);
    \u0275\u0275listener("click", function OperationsCenterComponent_div_74_div_11_div_1_div_27_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r16);
      const g_r17 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.editGear(g_r17));
    });
    \u0275\u0275element(2, "i", 210);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 211);
    \u0275\u0275listener("click", function OperationsCenterComponent_div_74_div_11_div_1_div_27_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r16);
      const g_r17 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.deleteGear(g_r17.id));
    });
    \u0275\u0275element(4, "i", 212);
    \u0275\u0275elementEnd()();
  }
}
function OperationsCenterComponent_div_74_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 196)(1, "div", 197)(2, "div")(3, "h4", 198);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 199);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 200);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 201)(10, "div", 202)(11, "span");
    \u0275\u0275text(12, "Rented: ");
    \u0275\u0275elementStart(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, "Available: ");
    \u0275\u0275elementStart(17, "strong");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 203);
    \u0275\u0275element(21, "div", 204);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 205)(23, "div", 206);
    \u0275\u0275text(24);
    \u0275\u0275elementStart(25, "small");
    \u0275\u0275text(26, "/day");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(27, OperationsCenterComponent_div_74_div_11_div_1_div_27_Template, 5, 0, "div", 207);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const g_r17 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(g_r17.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(g_r17.category);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.getGearConditionClass(g_r17.condition));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", g_r17.condition, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(g_r17.rented);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(g_r17.available);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" / ", g_r17.total);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", g_r17.rented / g_r17.total * 100, "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u20B9", g_r17.dailyRate, " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.authService.hasPermission("treks.manage"));
  }
}
function OperationsCenterComponent_div_74_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 194);
    \u0275\u0275template(1, OperationsCenterComponent_div_74_div_11_div_1_Template, 28, 11, "div", 195);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.gearList);
  }
}
function OperationsCenterComponent_div_74_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 152);
    \u0275\u0275element(1, "i", 213);
    \u0275\u0275elementStart(2, "h4");
    \u0275\u0275text(3, "No Rental Equipment Added");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Add sleeping bags, tents, trekking poles and torches to track gear inventory.");
    \u0275\u0275elementEnd()();
  }
}
function OperationsCenterComponent_div_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 71)(2, "div", 43)(3, "div", 44);
    \u0275\u0275element(4, "i", 189);
    \u0275\u0275elementStart(5, "div")(6, "h3");
    \u0275\u0275text(7, "Expedition Rental Gear Inventory");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9, "Track basecamp equipment stock, rental allocation, conditions and maintenance.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(10, OperationsCenterComponent_div_74_button_10_Template, 4, 0, "button", 190);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, OperationsCenterComponent_div_74_div_11_Template, 2, 1, "div", 191)(12, OperationsCenterComponent_div_74_ng_template_12_Template, 6, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const noGearTpl_r18 = \u0275\u0275reference(13);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r0.authService.hasPermission("treks.manage"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.gearList.length > 0)("ngIfElse", noGearTpl_r18);
  }
}
function OperationsCenterComponent_div_75_div_48_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 231);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "span", 232);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td")(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const exp_r20 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(exp_r20.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(exp_r20.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(exp_r20.paymentMode);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(12, 4, exp_r20.amount, "1.0-0"));
  }
}
function OperationsCenterComponent_div_75_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 228)(1, "table", 229)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Mode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Amount");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275template(13, OperationsCenterComponent_div_75_div_48_tr_13_Template, 13, 7, "tr", 230);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(13);
    \u0275\u0275property("ngForOf", ctx_r0.batchPnlData.expenses);
  }
}
function OperationsCenterComponent_div_75_ng_template_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 152);
    \u0275\u0275element(1, "i", 233);
    \u0275\u0275elementStart(2, "h4");
    \u0275\u0275text(3, "No expenses logged for this batch");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Record permits, meals, or guide honorarium on the right.");
    \u0275\u0275elementEnd()();
  }
}
function OperationsCenterComponent_div_75_option_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 188);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r21 = ctx.$implicit;
    \u0275\u0275property("value", opt_r21);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r21);
  }
}
function OperationsCenterComponent_div_75_option_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 188);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r22 = ctx.$implicit;
    \u0275\u0275property("value", opt_r22);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r22);
  }
}
function OperationsCenterComponent_div_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 214)(2, "div", 215)(3, "span", 216);
    \u0275\u0275text(4, "Gross Ticket Revenue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 217);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 218);
    \u0275\u0275text(9, "From registered trekkers");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 215)(11, "span", 216);
    \u0275\u0275text(12, "Add-on Gear Revenue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 217);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 218);
    \u0275\u0275text(17, "Rental equipment");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 215)(19, "span", 216);
    \u0275\u0275text(20, "Total Batch Expenses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 219);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 218);
    \u0275\u0275text(25, "Permits, guide, food & transit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 215)(27, "span", 216);
    \u0275\u0275text(28, "Net Operating Profit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 217);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 218);
    \u0275\u0275text(33, "Margin: ");
    \u0275\u0275elementStart(34, "strong");
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(36, "div", 70)(37, "div", 71)(38, "div", 43)(39, "div", 44);
    \u0275\u0275element(40, "i", 220);
    \u0275\u0275elementStart(41, "div")(42, "h3");
    \u0275\u0275text(43, "Batch Expense Ledger");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "p");
    \u0275\u0275text(45, "Direct costs incurred for guide honorariums, permits, transport & food.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "span", 108);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(48, OperationsCenterComponent_div_75_div_48_Template, 14, 1, "div", 221)(49, OperationsCenterComponent_div_75_ng_template_49_Template, 6, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 71)(52, "div", 43)(53, "div", 44);
    \u0275\u0275element(54, "i", 222);
    \u0275\u0275elementStart(55, "div")(56, "h3");
    \u0275\u0275text(57, "Record Batch Expense");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "p");
    \u0275\u0275text(59, "Add operating costs directly to this batch P&L ledger.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(60, "form", 156);
    \u0275\u0275listener("ngSubmit", function OperationsCenterComponent_div_75_Template_form_ngSubmit_60_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.addBatchExpense());
    });
    \u0275\u0275elementStart(61, "div", 157)(62, "label");
    \u0275\u0275text(63, "Expense Category ");
    \u0275\u0275elementStart(64, "span", 158);
    \u0275\u0275text(65, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "select", 223);
    \u0275\u0275twoWayListener("ngModelChange", function OperationsCenterComponent_div_75_Template_select_ngModelChange_66_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.newExpenseForm.expenseCategory, $event) || (ctx_r0.newExpenseForm.expenseCategory = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(67, OperationsCenterComponent_div_75_option_67_Template, 2, 2, "option", 162);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "div", 157)(69, "label");
    \u0275\u0275text(70, "Description / Note ");
    \u0275\u0275elementStart(71, "span", 158);
    \u0275\u0275text(72, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "input", 224);
    \u0275\u0275twoWayListener("ngModelChange", function OperationsCenterComponent_div_75_Template_input_ngModelChange_73_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.newExpenseForm.description, $event) || (ctx_r0.newExpenseForm.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 160)(75, "div", 157)(76, "label");
    \u0275\u0275text(77, "Amount (\u20B9) ");
    \u0275\u0275elementStart(78, "span", 158);
    \u0275\u0275text(79, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "input", 225);
    \u0275\u0275twoWayListener("ngModelChange", function OperationsCenterComponent_div_75_Template_input_ngModelChange_80_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.newExpenseForm.amount, $event) || (ctx_r0.newExpenseForm.amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "div", 157)(82, "label");
    \u0275\u0275text(83, "Payment Channel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "select", 226);
    \u0275\u0275twoWayListener("ngModelChange", function OperationsCenterComponent_div_75_Template_select_ngModelChange_84_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.newExpenseForm.paymentMode, $event) || (ctx_r0.newExpenseForm.paymentMode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(85, OperationsCenterComponent_div_75_option_85_Template, 2, 2, "option", 162);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(86, "div", 165)(87, "button", 103);
    \u0275\u0275listener("click", function OperationsCenterComponent_div_75_Template_button_click_87_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.resetExpenseForm());
    });
    \u0275\u0275text(88, "Clear");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "button", 227);
    \u0275\u0275element(90, "i", 193);
    \u0275\u0275elementStart(91, "span");
    \u0275\u0275text(92, "Add to Batch Ledger");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const noExpTpl_r23 = \u0275\u0275reference(50);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(7, 19, ctx_r0.batchPnlData.ticketRevenue, "1.0-0"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(15, 22, ctx_r0.batchPnlData.gearRevenue, "1.0-0"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(23, 25, ctx_r0.batchPnlData.totalExpenses, "1.0-0"));
    \u0275\u0275advance(7);
    \u0275\u0275classProp("text-success", ctx_r0.batchPnlData.netProfit >= 0)("text-danger", ctx_r0.batchPnlData.netProfit < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u20B9", \u0275\u0275pipeBind2(31, 28, ctx_r0.batchPnlData.netProfit, "1.0-0"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r0.batchPnlData.operatingMarginPct, "%");
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1("", ctx_r0.batchPnlData.expenses.length, " items");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.batchPnlData.expenses.length > 0)("ngIfElse", noExpTpl_r23);
    \u0275\u0275advance(18);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newExpenseForm.expenseCategory);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.expenseCategoryOptions);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newExpenseForm.description);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newExpenseForm.amount);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newExpenseForm.paymentMode);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.paymentMethodOptions);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.isRecordingExpense || !ctx_r0.newExpenseForm.amount || !ctx_r0.newExpenseForm.description.trim());
  }
}
function OperationsCenterComponent_div_76_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 237)(1, "div", 62)(2, "div", 53)(3, "span", 54);
    \u0275\u0275text(4, "Total Forest Permits");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 67);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 238);
    \u0275\u0275text(8, "Issued pass permits");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 57)(10, "div", 53)(11, "span", 54);
    \u0275\u0275text(12, "Royalty Accrued");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 58);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 238);
    \u0275\u0275text(17, "Calculated eco-fund fee");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 59)(19, "div", 53)(20, "span", 54);
    \u0275\u0275text(21, "Settled with Dept");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 61);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 238);
    \u0275\u0275text(26, "Transferred to DFO treasury");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.royaltyData.totalPermits || 0);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(15, 3, ctx_r0.royaltyData.totalRoyaltyAmount || 0, "1.0-0"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(24, 6, ctx_r0.royaltyData.settledAmount || 0, "1.0-0"));
  }
}
function OperationsCenterComponent_div_76_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 152);
    \u0275\u0275element(1, "i", 239);
    \u0275\u0275elementStart(2, "h4");
    \u0275\u0275text(3, "Forest Dept Ledger Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Permit charges are automatically calculated on every confirmed trekker seat.");
    \u0275\u0275elementEnd()();
  }
}
function OperationsCenterComponent_div_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 71)(2, "div", 43)(3, "div", 44);
    \u0275\u0275element(4, "i", 234);
    \u0275\u0275elementStart(5, "div")(6, "h3");
    \u0275\u0275text(7, "Karnataka Forest Dept & Eco-Fund Royalty Ledger");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9, "Audited reconciliation of eco-tourism fees, trail permits, and state royalties.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "button", 89);
    \u0275\u0275listener("click", function OperationsCenterComponent_div_76_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.loadForestRoyaltyLedger());
    });
    \u0275\u0275element(11, "i", 21);
    \u0275\u0275text(12, " Refresh Ledger ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, OperationsCenterComponent_div_76_div_13_Template, 27, 9, "div", 235)(14, OperationsCenterComponent_div_76_div_14_Template, 6, 0, "div", 236);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275property("ngIf", ctx_r0.royaltyData);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.royaltyData && !ctx_r0.isLoadingRoyalty);
  }
}
function OperationsCenterComponent_div_77_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 187);
    \u0275\u0275element(1, "i", 47);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.journeySuccessMsg, " ");
  }
}
function OperationsCenterComponent_div_77_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 255)(1, "div", 256);
    \u0275\u0275text(2, " \u{1F389} ");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4, "Your goWILD Trek Pass is Confirmed!");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "br")(6, "br");
    \u0275\u0275text(7, " \u{1F4CD} ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9, "Trek:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Kudremukha Peak Expedition");
    \u0275\u0275element(11, "br");
    \u0275\u0275text(12, " \u{1F5D3}\uFE0F ");
    \u0275\u0275elementStart(13, "strong");
    \u0275\u0275text(14, "Departure:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Sat, 06:00 AM Basecamp");
    \u0275\u0275element(16, "br");
    \u0275\u0275text(17, " \u{1F3AB} ");
    \u0275\u0275elementStart(18, "strong");
    \u0275\u0275text(19, "Pass Ref:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, " #GWK-98412");
    \u0275\u0275element(21, "br");
    \u0275\u0275text(22, " \u{1F6E1}\uFE0F ");
    \u0275\u0275elementStart(23, "strong");
    \u0275\u0275text(24, "Forest Permit:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25, " Cleared & Issued");
    \u0275\u0275element(26, "br")(27, "br");
    \u0275\u0275text(28, " \u{1F4F2} Please present your digital QR pass at the entry gate. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 257);
    \u0275\u0275text(30, "10:45 AM ");
    \u0275\u0275element(31, "i", 258);
    \u0275\u0275elementEnd()();
  }
}
function OperationsCenterComponent_div_77_div_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 255)(1, "div", 256);
    \u0275\u0275text(2, " \u{1F326}\uFE0F ");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4, "T-48h Weather Advisory Update");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "br")(6, "br");
    \u0275\u0275text(7, " Western Ghats trail checkpoint reports light-to-moderate rain. All trekkers must carry:");
    \u0275\u0275element(8, "br");
    \u0275\u0275text(9, " \u2022 Waterproof rain poncho");
    \u0275\u0275element(10, "br");
    \u0275\u0275text(11, " \u2022 Backpack rain cover");
    \u0275\u0275element(12, "br");
    \u0275\u0275text(13, " \u2022 High-grip trekking footwear ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 257);
    \u0275\u0275text(15, "02:15 PM ");
    \u0275\u0275element(16, "i", 258);
    \u0275\u0275elementEnd()();
  }
}
function OperationsCenterComponent_div_77_div_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 255)(1, "div", 256);
    \u0275\u0275text(2, " \u{1F3C6} ");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4, "Congratulations on Summiting Kudremukha!");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "br")(6, "br");
    \u0275\u0275text(7, " You've successfully conquered 1,894m in Western Ghats! \u{1F31F}");
    \u0275\u0275element(8, "br");
    \u0275\u0275text(9, " Your verified digital summit certificate & badge is ready to download. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 257);
    \u0275\u0275text(11, "06:30 PM ");
    \u0275\u0275element(12, "i", 258);
    \u0275\u0275elementEnd()();
  }
}
function OperationsCenterComponent_div_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 70)(2, "div", 71)(3, "div", 43)(4, "div", 44);
    \u0275\u0275element(5, "i", 240);
    \u0275\u0275elementStart(6, "div")(7, "h3");
    \u0275\u0275text(8, "Trekker WhatsApp Journey Engine");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10, "Trigger automated milestone notifications to active batch members.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(11, OperationsCenterComponent_div_77_div_11_Template, 3, 1, "div", 155);
    \u0275\u0275elementStart(12, "div", 241)(13, "button", 242);
    \u0275\u0275listener("click", function OperationsCenterComponent_div_77_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setPreviewType("booking_pass"));
    });
    \u0275\u0275element(14, "i", 113);
    \u0275\u0275elementStart(15, "div")(16, "strong");
    \u0275\u0275text(17, "Digital Trek Pass");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "small");
    \u0275\u0275text(19, "Sent upon confirmation");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "button", 242);
    \u0275\u0275listener("click", function OperationsCenterComponent_div_77_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setPreviewType("weather_advisory"));
    });
    \u0275\u0275element(21, "i", 243);
    \u0275\u0275elementStart(22, "div")(23, "strong");
    \u0275\u0275text(24, "T-48h Weather Advisory");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "small");
    \u0275\u0275text(26, "Sent 2 days prior");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "button", 242);
    \u0275\u0275listener("click", function OperationsCenterComponent_div_77_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setPreviewType("summit_certificate"));
    });
    \u0275\u0275element(28, "i", 244);
    \u0275\u0275elementStart(29, "div")(30, "strong");
    \u0275\u0275text(31, "Summit Certificate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "small");
    \u0275\u0275text(33, "Sent post-trek completion");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(34, "div", 245)(35, "button", 246);
    \u0275\u0275listener("click", function OperationsCenterComponent_div_77_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.dispatchJourneyMessage());
    });
    \u0275\u0275element(36, "i", 170);
    \u0275\u0275elementStart(37, "span");
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(39, "div", 71)(40, "div", 43)(41, "div", 44);
    \u0275\u0275element(42, "i", 247);
    \u0275\u0275elementStart(43, "div")(44, "h3");
    \u0275\u0275text(45, "Smartphone WhatsApp Preview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "p");
    \u0275\u0275text(47, "Exact visual rendering received on guest device.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(48, "div", 248)(49, "div", 249)(50, "div", 250);
    \u0275\u0275element(51, "i", 251);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div")(53, "strong");
    \u0275\u0275text(54, "goWILD Karunadu \u2022 Verified");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 252);
    \u0275\u0275text(56, "Official Business Account");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(57, "div", 253);
    \u0275\u0275template(58, OperationsCenterComponent_div_77_div_58_Template, 32, 0, "div", 254)(59, OperationsCenterComponent_div_77_div_59_Template, 17, 0, "div", 254)(60, OperationsCenterComponent_div_77_div_60_Template, 13, 0, "div", 254);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", ctx_r0.journeySuccessMsg);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r0.activePreviewType === "booking_pass");
    \u0275\u0275advance(7);
    \u0275\u0275classProp("active", ctx_r0.activePreviewType === "weather_advisory");
    \u0275\u0275advance(7);
    \u0275\u0275classProp("active", ctx_r0.activePreviewType === "summit_certificate");
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", ctx_r0.isDispatchingJourney);
    \u0275\u0275advance();
    \u0275\u0275classProp("spin", ctx_r0.isDispatchingJourney);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.isDispatchingJourney ? "Dispatching via WhatsApp API..." : "Broadcast Current Template");
    \u0275\u0275advance(20);
    \u0275\u0275property("ngIf", ctx_r0.activePreviewType === "booking_pass");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.activePreviewType === "weather_advisory");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.activePreviewType === "summit_certificate");
  }
}
function OperationsCenterComponent_div_78_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "div", 261)(8, "div", 262)(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 263);
    \u0275\u0275element(14, "div", 264);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "td")(16, "span", 265);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r26 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r26.trek);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r26.dates);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", item_r26.booked, " booked");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", item_r26.slots, " total slots");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", item_r26.booked / item_r26.slots * 100, "%");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", item_r26.status === "Open" ? "success" : "pending");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r26.status, " ");
  }
}
function OperationsCenterComponent_div_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 71)(2, "div", 43)(3, "div", 44);
    \u0275\u0275element(4, "i", 259);
    \u0275\u0275elementStart(5, "div")(6, "h3");
    \u0275\u0275text(7, "Departure Batch Lifecycle & Slot Matrix");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9, "Overview of active batch occupancy and departure schedules.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "div", 260)(11, "table", 229)(12, "thead")(13, "tr")(14, "th");
    \u0275\u0275text(15, "Expedition");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Departure Window");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Capacity & Occupancy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "tbody");
    \u0275\u0275template(23, OperationsCenterComponent_div_78_tr_23_Template, 18, 8, "tr", 230);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(23);
    \u0275\u0275property("ngForOf", ctx_r0.trekInventory);
  }
}
function OperationsCenterComponent_div_79_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 269)(1, "div", 270);
    \u0275\u0275element(2, "i", 271);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 272)(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 273);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 274);
    \u0275\u0275element(9, "i", 121);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "span", 275);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const g_r27 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(g_r27.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", g_r27.role, " \u2022 ", g_r27.base);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", g_r27.contact);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(g_r27.status);
  }
}
function OperationsCenterComponent_div_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 71)(2, "div", 43)(3, "div", 44);
    \u0275\u0275element(4, "i", 266);
    \u0275\u0275elementStart(5, "div")(6, "h3");
    \u0275\u0275text(7, "Basecamp Vendors, Transport & Certified Captains");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9, "Directory of verified local homestays, tempo traveler fleets, and certified wilderness captains.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "div", 267);
    \u0275\u0275template(11, OperationsCenterComponent_div_79_div_11_Template, 13, 5, "div", 268);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("ngForOf", ctx_r0.guideVendors);
  }
}
function OperationsCenterComponent_div_80_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "span", 278);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td")(10, "span", 279);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r28 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r28.guest);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r28.issue);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", c_r28.priority.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r28.priority);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r28.status);
  }
}
function OperationsCenterComponent_div_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 71)(2, "div", 43)(3, "div", 44);
    \u0275\u0275element(4, "i", 276);
    \u0275\u0275elementStart(5, "div")(6, "h3");
    \u0275\u0275text(7, "Trekker Inquiries & Support Escalations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9, "Priority queue for booking queries, medical disclosures and date changes.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "div", 277)(11, "table", 229)(12, "thead")(13, "tr")(14, "th");
    \u0275\u0275text(15, "Trekker / Guest");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Query Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Priority");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "tbody");
    \u0275\u0275template(23, OperationsCenterComponent_div_80_tr_23_Template, 12, 5, "tr", 230);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(23);
    \u0275\u0275property("ngForOf", ctx_r0.crmEscalations);
  }
}
function OperationsCenterComponent_div_81_div_2_option_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 188);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const roleRow_r30 = ctx.$implicit;
    \u0275\u0275property("value", roleRow_r30.roleKey);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(roleRow_r30.role);
  }
}
function OperationsCenterComponent_div_81_div_2_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 295);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.createAdminMessage);
  }
}
function OperationsCenterComponent_div_81_div_2_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 296);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.createAdminError);
  }
}
function OperationsCenterComponent_div_81_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 71)(1, "div", 43)(2, "div", 44);
    \u0275\u0275element(3, "i", 284);
    \u0275\u0275elementStart(4, "div")(5, "h3");
    \u0275\u0275text(6, "Invite Admin Team Member");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, "Assign specific system access roles to administrators.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(9, "div", 285)(10, "div", 157)(11, "label");
    \u0275\u0275text(12, "Full Name ");
    \u0275\u0275elementStart(13, "span", 158);
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "input", 286);
    \u0275\u0275twoWayListener("ngModelChange", function OperationsCenterComponent_div_81_div_2_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.newAdminForm.name, $event) || (ctx_r0.newAdminForm.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 157)(17, "label");
    \u0275\u0275text(18, "Corporate Email ");
    \u0275\u0275elementStart(19, "span", 158);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "input", 287);
    \u0275\u0275twoWayListener("ngModelChange", function OperationsCenterComponent_div_81_div_2_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.newAdminForm.email, $event) || (ctx_r0.newAdminForm.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 157)(23, "label");
    \u0275\u0275text(24, "Password ");
    \u0275\u0275elementStart(25, "span", 158);
    \u0275\u0275text(26, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 288)(28, "input", 289);
    \u0275\u0275twoWayListener("ngModelChange", function OperationsCenterComponent_div_81_div_2_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.newAdminForm.password, $event) || (ctx_r0.newAdminForm.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 290);
    \u0275\u0275listener("click", function OperationsCenterComponent_div_81_div_2_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.showCreateAdminPassword = !ctx_r0.showCreateAdminPassword);
    });
    \u0275\u0275element(30, "i", 98);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 157)(32, "label");
    \u0275\u0275text(33, "Assigned System Role ");
    \u0275\u0275elementStart(34, "span", 158);
    \u0275\u0275text(35, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "select", 291);
    \u0275\u0275twoWayListener("ngModelChange", function OperationsCenterComponent_div_81_div_2_Template_select_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.newAdminForm.roleKey, $event) || (ctx_r0.newAdminForm.roleKey = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(37, OperationsCenterComponent_div_81_div_2_option_37_Template, 2, 2, "option", 162);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 165)(39, "button", 103);
    \u0275\u0275listener("click", function OperationsCenterComponent_div_81_div_2_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.resetNewAdminForm());
    });
    \u0275\u0275text(40, "Reset");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "button", 131);
    \u0275\u0275listener("click", function OperationsCenterComponent_div_81_div_2_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.createAdminUser());
    });
    \u0275\u0275element(42, "i", 292);
    \u0275\u0275elementStart(43, "span");
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(45, OperationsCenterComponent_div_81_div_2_div_45_Template, 2, 1, "div", 293)(46, OperationsCenterComponent_div_81_div_2_div_46_Template, 2, 1, "div", 294);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(15);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newAdminForm.name);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newAdminForm.email);
    \u0275\u0275advance(7);
    \u0275\u0275property("type", ctx_r0.showCreateAdminPassword ? "text" : "password");
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newAdminForm.password);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.showCreateAdminPassword ? "bi-eye-slash" : "bi-eye");
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newAdminForm.roleKey);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.permissions);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.createAdminLoading || !ctx_r0.newAdminForm.name || !ctx_r0.newAdminForm.email || !ctx_r0.newAdminForm.password);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.createAdminLoading ? "Creating..." : "Create Admin");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.createAdminMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.createAdminError);
  }
}
function OperationsCenterComponent_div_81_div_13_small_11_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const log_r31 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2022 ", log_r31.entityId);
  }
}
function OperationsCenterComponent_div_81_div_13_small_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 304);
    \u0275\u0275text(1);
    \u0275\u0275template(2, OperationsCenterComponent_div_81_div_13_small_11_ng_container_2_Template, 2, 1, "ng-container", 305);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const log_r31 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", log_r31.entityType, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", log_r31.entityId);
  }
}
function OperationsCenterComponent_div_81_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 297);
    \u0275\u0275element(1, "div", 298);
    \u0275\u0275elementStart(2, "div", 299)(3, "div", 300)(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " \u2022 ");
    \u0275\u0275elementStart(7, "span", 301);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p", 302);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, OperationsCenterComponent_div_81_div_13_small_11_Template, 3, 2, "small", 303);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const log_r31 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(log_r31.actor);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(log_r31.when);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(log_r31.action);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", log_r31.entityType);
  }
}
function OperationsCenterComponent_div_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 70);
    \u0275\u0275template(2, OperationsCenterComponent_div_81_div_2_Template, 47, 11, "div", 280);
    \u0275\u0275elementStart(3, "div", 71)(4, "div", 43)(5, "div", 44);
    \u0275\u0275element(6, "i", 281);
    \u0275\u0275elementStart(7, "div")(8, "h3");
    \u0275\u0275text(9, "Security & Operations Audit Log");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11, "Immutable audit trail of administrative modifications.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "div", 282);
    \u0275\u0275template(13, OperationsCenterComponent_div_81_div_13_Template, 12, 4, "div", 283);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.canEditPermissions);
    \u0275\u0275advance(11);
    \u0275\u0275property("ngForOf", ctx_r0.auditLogs);
  }
}
function OperationsCenterComponent_div_82_option_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 188);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r33 = ctx.$implicit;
    \u0275\u0275property("value", opt_r33);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r33);
  }
}
function OperationsCenterComponent_div_82_option_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 188);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r34 = ctx.$implicit;
    \u0275\u0275property("value", opt_r34);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r34);
  }
}
function OperationsCenterComponent_div_82_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 306)(1, "div", 307)(2, "div", 308)(3, "div", 309)(4, "div", 310);
    \u0275\u0275element(5, "i", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "h3");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10, "Configure inventory stock and rental specifications");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "button", 311);
    \u0275\u0275listener("click", function OperationsCenterComponent_div_82_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeGearModal());
    });
    \u0275\u0275element(12, "i", 312);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 313)(14, "div", 314)(15, "div", 315)(16, "label");
    \u0275\u0275text(17, "Equipment Item Name ");
    \u0275\u0275elementStart(18, "span", 158);
    \u0275\u0275text(19, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "input", 316);
    \u0275\u0275twoWayListener("ngModelChange", function OperationsCenterComponent_div_82_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r32);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.gearForm.itemName, $event) || (ctx_r0.gearForm.itemName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 315)(22, "label");
    \u0275\u0275text(23, "Category ");
    \u0275\u0275elementStart(24, "span", 158);
    \u0275\u0275text(25, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "select", 317);
    \u0275\u0275twoWayListener("ngModelChange", function OperationsCenterComponent_div_82_Template_select_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r32);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.gearForm.category, $event) || (ctx_r0.gearForm.category = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(27, OperationsCenterComponent_div_82_option_27_Template, 2, 2, "option", 162);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 318)(29, "label");
    \u0275\u0275text(30, "Total Stock Units ");
    \u0275\u0275elementStart(31, "span", 158);
    \u0275\u0275text(32, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "input", 319);
    \u0275\u0275twoWayListener("ngModelChange", function OperationsCenterComponent_div_82_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r32);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.gearForm.totalQuantity, $event) || (ctx_r0.gearForm.totalQuantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 318)(35, "label");
    \u0275\u0275text(36, "Daily Rental (\u20B9) ");
    \u0275\u0275elementStart(37, "span", 158);
    \u0275\u0275text(38, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "input", 320);
    \u0275\u0275twoWayListener("ngModelChange", function OperationsCenterComponent_div_82_Template_input_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r32);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.gearForm.rentalRatePerDay, $event) || (ctx_r0.gearForm.rentalRatePerDay = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 318)(41, "label");
    \u0275\u0275text(42, "Equipment Condition");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "select", 321);
    \u0275\u0275twoWayListener("ngModelChange", function OperationsCenterComponent_div_82_Template_select_ngModelChange_43_listener($event) {
      \u0275\u0275restoreView(_r32);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.gearForm.itemCondition, $event) || (ctx_r0.gearForm.itemCondition = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(44, OperationsCenterComponent_div_82_option_44_Template, 2, 2, "option", 162);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 318)(46, "label");
    \u0275\u0275text(47, "Storage Basecamp");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "input", 322);
    \u0275\u0275twoWayListener("ngModelChange", function OperationsCenterComponent_div_82_Template_input_ngModelChange_48_listener($event) {
      \u0275\u0275restoreView(_r32);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.gearForm.location, $event) || (ctx_r0.gearForm.location = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(49, "div", 323)(50, "button", 324);
    \u0275\u0275listener("click", function OperationsCenterComponent_div_82_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeGearModal());
    });
    \u0275\u0275text(51, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "button", 325);
    \u0275\u0275listener("click", function OperationsCenterComponent_div_82_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveGear());
    });
    \u0275\u0275element(53, "i", 326);
    \u0275\u0275elementStart(54, "span");
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.gearForm.id ? "Edit Equipment Item" : "Add Rental Gear");
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.gearForm.itemName);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.gearForm.category);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.gearCategoryOptions);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.gearForm.totalQuantity);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.gearForm.rentalRatePerDay);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.gearForm.itemCondition);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.gearConditionOptions);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.gearForm.location);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.isSavingGear || !ctx_r0.gearForm.itemName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.isSavingGear ? "Saving..." : "Save Equipment");
  }
}
var _OperationsCenterComponent = class _OperationsCenterComponent {
  setActiveTab(tab) {
    this.activeTab = tab;
  }
  constructor(dashboardService, bookingService, trekService, userService, reviewService, batchService, notificationService, analyticsService, auditService, authService, rbacService, dropdownService) {
    this.dashboardService = dashboardService;
    this.bookingService = bookingService;
    this.trekService = trekService;
    this.userService = userService;
    this.reviewService = reviewService;
    this.batchService = batchService;
    this.notificationService = notificationService;
    this.analyticsService = analyticsService;
    this.auditService = auditService;
    this.authService = authService;
    this.rbacService = rbacService;
    this.dropdownService = dropdownService;
    this.loading = false;
    this.errorMessage = "";
    this.lastSyncedAt = "";
    this.apiChecks = [];
    this.activeTab = "overview";
    this.royaltyData = null;
    this.isLoadingRoyalty = false;
    this.journeyForm = {
      bookingId: "",
      type: "booking_pass",
      channel: "WhatsApp"
    };
    this.activePreviewType = "booking_pass";
    this.isDispatchingJourney = false;
    this.journeySuccessMsg = "";
    this.journeyLogs = [
      {
        id: "MSG-INIT-8941",
        type: "booking_pass",
        typeName: "Digital Trek Pass & QR",
        channel: "WhatsApp",
        target: "Batch KUD-2026-B1 (18 Trekkers)",
        status: "DELIVERED",
        timestamp: new Date(Date.now() - 36e5 * 2)
      },
      {
        id: "MSG-INIT-8940",
        type: "weather_advisory",
        typeName: "T-48h Weather Advisory",
        channel: "WhatsApp + SMS",
        target: "Batch NET-2026-B2 (22 Trekkers)",
        status: "DELIVERED",
        timestamp: new Date(Date.now() - 36e5 * 5)
      },
      {
        id: "MSG-INIT-8939",
        type: "summit_certificate",
        typeName: "Summit Certificate & Badge",
        channel: "WhatsApp",
        target: "Batch TADI-2026-B3 (15 Trekkers)",
        status: "DELIVERED",
        timestamp: new Date(Date.now() - 36e5 * 18)
      }
    ];
    this.totalRevenue = 0;
    this.totalBookings = 0;
    this.totalUsers = 0;
    this.openTicketCount = 0;
    this.canEditPermissions = false;
    this.isSavingPermissions = false;
    this.trailConditionOptions = [];
    this.trailSeverityOptions = [];
    this.gearCategoryOptions = [];
    this.gearConditionOptions = [];
    this.expenseCategoryOptions = [];
    this.paymentMethodOptions = ["UPI", "Direct Bank Transfer", "Cash"];
    this.scannerQuery = "";
    this.isCameraActive = false;
    this.foundBooking = null;
    this.isCheckedIn = false;
    this.checkinHistory = [];
    this.allBookingsRaw = [];
    this.isBroadcasting = false;
    this.broadcastSuccessMsg = "";
    this.advisoryForm = {
      trekName: "Kudremukha Peak Expedition",
      batchId: "BATCH-KUD-2026",
      trailCondition: "",
      severity: "Advisory (Yellow)",
      alertMessage: "Monsoon trail alert: Moderate rainfall expected. All trekkers must carry rain ponchos and high-grip trekking shoes.",
      channel: "WhatsApp + SMS Broadcast"
    };
    this.gearList = [];
    this.showGearModal = false;
    this.isSavingGear = false;
    this.gearForm = {
      id: "",
      itemName: "",
      category: "",
      totalQuantity: 15,
      rentedQuantity: 0,
      rentalRatePerDay: 100,
      itemCondition: "Good Condition",
      location: "Main Basecamp Gear Store",
      status: "active"
    };
    this.selectedBatchPnl = null;
    this.batchPnlData = {
      batchId: "",
      trekName: "",
      ticketRevenue: 0,
      gearRevenue: 0,
      expenses: [],
      totalExpenses: 0,
      netProfit: 0,
      operatingMarginPct: 0
    };
    this.newExpenseForm = {
      expenseCategory: "",
      description: "",
      amount: 0,
      paidTo: "",
      paymentMode: "UPI",
      receiptRef: ""
    };
    this.isRecordingExpense = false;
    this.createAdminLoading = false;
    this.createAdminMessage = "";
    this.createAdminError = "";
    this.showCreateAdminPassword = false;
    this.newAdminForm = {
      name: "",
      email: "",
      password: "",
      roleKey: ""
    };
    this.permissions = [];
    this.trekInventory = [];
    this.batchLifecycle = [];
    this.guideVendors = [];
    this.supportTickets = [];
    this.crmEscalations = [];
    this.paymentOps = [];
    this.complianceDocs = [];
    this.logistics = [];
    this.reviewQueue = [];
    this.notificationTemplates = [];
    this.reports = [
      { name: "Revenue by Trek", format: "XLSX", lastGenerated: "Pending live data" },
      { name: "Occupancy by Batch", format: "CSV", lastGenerated: "Pending live data" },
      { name: "Refund Register", format: "PDF", lastGenerated: "Pending live data" }
    ];
    this.auditLogs = [];
  }
  ngOnInit() {
    this.canEditPermissions = this.authService.hasPermission("rbac.manage");
    this.loadDynamicDropdowns();
    this.loadRbacTable();
    this.loadOperationsData();
    this.loadGearInventory();
  }
  loadDynamicDropdowns() {
    this.dropdownService.getGroupOptions("trailCondition").subscribe((opts) => {
      if (opts.length > 0) {
        this.trailConditionOptions = opts.map((o) => o.label);
        if (!this.advisoryForm.trailCondition)
          this.advisoryForm.trailCondition = this.trailConditionOptions[0];
      }
    });
    this.dropdownService.getGroupOptions("trailWeatherSeverity").subscribe((opts) => {
      if (opts.length > 0)
        this.trailSeverityOptions = opts.map((o) => o.label);
    });
    this.dropdownService.getGroupOptions("gearCategory").subscribe((opts) => {
      if (opts.length > 0) {
        this.gearCategoryOptions = opts.map((o) => o.label);
        if (!this.gearForm.category)
          this.gearForm.category = this.gearCategoryOptions[0];
      }
    });
    this.dropdownService.getGroupOptions("gearCondition").subscribe((opts) => {
      if (opts.length > 0)
        this.gearConditionOptions = opts.map((o) => o.label);
    });
    this.dropdownService.getGroupOptions("expenseCategory").subscribe((opts) => {
      if (opts.length > 0) {
        this.expenseCategoryOptions = opts.map((o) => o.label);
        if (!this.newExpenseForm.expenseCategory)
          this.newExpenseForm.expenseCategory = this.expenseCategoryOptions[0];
      }
    });
    this.dropdownService.getGroupOptions("paymentMethod").subscribe((opts) => {
      if (opts.length > 0) {
        this.paymentMethodOptions = opts.map((o) => o.label);
        if (!this.newExpenseForm.paymentMode && this.paymentMethodOptions.length > 0) {
          this.newExpenseForm.paymentMode = this.paymentMethodOptions[0];
        }
      }
    });
  }
  loadRbacTable() {
    this.rbacService.getTable().subscribe({
      next: (res) => {
        this.permissions = Array.isArray(res?.data) ? res.data : [];
        if (!this.newAdminForm.roleKey && this.permissions.length > 0) {
          this.newAdminForm.roleKey = this.permissions[0].roleKey;
        }
      },
      error: () => {
        this.permissions = [];
      }
    });
  }
  savePermissions() {
    if (!this.canEditPermissions || this.isSavingPermissions)
      return;
    this.isSavingPermissions = true;
    this.rbacService.updateTable(this.permissions).subscribe({
      next: (res) => {
        this.permissions = Array.isArray(res?.data) ? res.data : this.permissions;
        this.isSavingPermissions = false;
      },
      error: () => {
        this.isSavingPermissions = false;
      }
    });
  }
  createAdminUser() {
    if (!this.canEditPermissions || this.createAdminLoading)
      return;
    const payload = {
      name: String(this.newAdminForm.name || "").trim(),
      email: String(this.newAdminForm.email || "").trim(),
      password: String(this.newAdminForm.password || ""),
      roleKey: String(this.newAdminForm.roleKey || "").trim()
    };
    if (!payload.name || !payload.email || !payload.password || !payload.roleKey) {
      this.createAdminError = "All fields are required.";
      this.createAdminMessage = "";
      return;
    }
    this.createAdminLoading = true;
    this.createAdminError = "";
    this.createAdminMessage = "";
    this.rbacService.createAdmin(payload).subscribe({
      next: (res) => {
        this.createAdminLoading = false;
        this.createAdminMessage = res?.message || "Admin created successfully.";
        this.newAdminForm = {
          name: "",
          email: "",
          password: "",
          roleKey: this.newAdminForm.roleKey
        };
      },
      error: (err) => {
        this.createAdminLoading = false;
        this.createAdminError = err?.error?.message || "Failed to create admin.";
      }
    });
  }
  loadOperationsData() {
    this.loading = true;
    this.errorMessage = "";
    forkJoin({
      dash: this.dashboardService.getDashData().pipe(catchError(() => of(null))),
      bookings: this.bookingService.getBookingData().pipe(catchError(() => of(null))),
      treks: this.trekService.getAllTreks().pipe(catchError(() => of(null))),
      users: this.userService.getAllUsers().pipe(catchError(() => of(null))),
      reviews: this.reviewService.getAllReviews().pipe(catchError(() => of(null))),
      batchTreks: this.batchService.getTreks().pipe(catchError(() => of(null))),
      completion: this.batchService.getCompletionStats().pipe(catchError(() => of(null))),
      notifications: this.notificationService.getNotifications().pipe(catchError(() => of(null))),
      analytics: this.analyticsService.getRevenueData().pipe(catchError(() => of(null))),
      audit: this.auditService.getAuditLogs(12).pipe(catchError(() => of(null))),
      refunds: this.bookingService.listRefunds().pipe(catchError(() => of(null))),
      reconcile: this.bookingService.reconcilePayments().pipe(catchError(() => of(null)))
    }).subscribe(({ dash, bookings, treks, users, reviews, batchTreks, completion, notifications, analytics, audit, refunds, reconcile }) => {
      this.apiChecks = [
        { name: "Dashboard", ok: !!dash },
        { name: "Bookings", ok: !!bookings },
        { name: "Treks", ok: !!treks },
        { name: "Users", ok: !!users },
        { name: "Reviews", ok: !!reviews },
        { name: "Batch Ops", ok: !!batchTreks },
        { name: "Notifications", ok: !!notifications },
        { name: "Analytics", ok: !!analytics },
        { name: "Payments API", ok: !!refunds || !!reconcile }
      ];
      const anyConnected = this.apiChecks.some((c) => c.ok);
      if (!anyConnected) {
        this.errorMessage = "Backend is unreachable from this app environment. Check API server and CORS/network settings.";
      }
      const dashData = dash?.data || {};
      const bookingRows = Array.isArray(bookings?.data) ? bookings.data : [];
      const trekRows = Array.isArray(treks?.data?.result) ? treks.data.result : Array.isArray(treks?.data) ? treks.data : [];
      const userRows = Array.isArray(users?.data) ? users.data : [];
      const reviewRows = Array.isArray(reviews) ? reviews : [];
      const batchRows = Array.isArray(batchTreks?.data) ? batchTreks.data : [];
      const completionAny = completion;
      const completionData = completionAny?.data || completionAny || {};
      const notificationRows = Array.isArray(notifications?.results) ? notifications.results : Array.isArray(notifications?.data) ? notifications.data : [];
      const analyticsData = analytics?.data || {};
      const refundRows = Array.isArray(refunds?.data) ? refunds.data : [];
      this.allBookingsRaw = bookingRows;
      this.totalBookings = Number(dashData.totalbookingCount || bookingRows.length || 0);
      this.totalRevenue = Number(dashData.totalRevenue || analyticsData.totalRevenue || 0);
      this.totalUsers = Number(dashData.totalUsers || userRows.length || 0);
      this.trekInventory = trekRows.slice(0, 6).map((t) => ({
        trek: t.name || t.trek_name || "Trek",
        seats: t.availableSeats ?? t.seats_available ?? t.total_seats ?? 0,
        waitlist: t.waitlistCount ?? 0,
        basePrice: t.price ?? (t.batches?.[0]?.price || 0),
        seasonMultiplier: 1,
        status: t.status || "Unknown"
      }));
      this.batchLifecycle = batchRows.slice(0, 6).map((b) => ({
        code: b.name || b.code || `TRK-${b.id ?? "-"}`,
        phase: b.status || "Unknown",
        cutoff: b.cutoffDate || b.start_date || "-",
        action: "Manage in Batch Module"
      }));
      this.paymentOps = bookingRows.slice(0, 8).map((b) => ({
        bookingId: b.id ? `#${b.id}` : b.bookingReference || "BK-N/A",
        customerName: b.customerName || "Customer",
        amount: Number(b.amount || 0),
        mode: b.paymentMethod || "Online / Gateway",
        status: b.paymentStatus || "pending",
        reconcile: b.paymentStatus === "paid" ? "Matched" : b.paymentStatus === "refunded" ? "Refunded" : "Review"
      }));
      this.supportTickets = bookingRows.filter((b) => (b.status || "").toLowerCase() === "pending" || (b.paymentStatus || "").toLowerCase() === "pending").slice(0, 6).map((b) => ({
        customer: b.customerName || "Customer",
        issue: "Pending booking/payment follow-up",
        priority: "Medium",
        status: "Open"
      }));
      this.openTicketCount = this.supportTickets.length;
      this.crmEscalations = bookingRows.filter((b) => (b.status || "").toLowerCase() === "pending" || (b.paymentStatus || "").toLowerCase() === "pending").slice(0, 6).map((b) => ({
        guest: b.customerName || b.customer_name || "Trekker",
        issue: "Pending booking/payment verification & confirmation",
        priority: "High",
        status: "In Queue"
      }));
      if (this.crmEscalations.length === 0) {
        this.crmEscalations = [
          { guest: "Rahul Sharma", issue: "Requesting pickup point change from Majestic to Silk Board", priority: "High", status: "In Review" },
          { guest: "Sneha Rao", issue: "Asthma disclosure & carrying personal inhaler", priority: "Medium", status: "Verified" },
          { guest: "Vikram Joshi", issue: "Date reschedule request for next weekend batch", priority: "High", status: "Action Required" },
          { guest: "Ananya Deshpande", issue: "Payment receipt confirmation needed for corporate group", priority: "Low", status: "Resolved" }
        ];
      }
      this.complianceDocs = bookingRows.slice(0, 6).map((b) => ({
        bookingId: b.bookingReference || `BK-${b.id}`,
        waiver: !!b.waiverSigned,
        idProof: !!b.idProofUploaded,
        medical: !!b.medicalDeclaration
      }));
      this.reviewQueue = reviewRows.slice(0, 6).map((r) => ({
        author: r.author_name || r.customerName || "Guest",
        trek: r.trek_name || r.trekName || "Trek",
        sentiment: Number(r.likes || 0) >= 3 ? "Positive" : "Mixed",
        state: "Pending"
      }));
      this.notificationTemplates = notificationRows.slice(0, 6).map((n) => ({
        channel: n.type || "system",
        template: n.title || "Notification",
        deliveryRate: n.read ? "Delivered" : "Pending"
      }));
      const auditRows = Array.isArray(audit?.data?.logs) ? audit.data.logs : Array.isArray(audit?.data) ? audit.data : [];
      this.auditLogs = auditRows.map((row) => ({
        when: row.createdAt ? String(row.createdAt).replace("T", " ").slice(0, 16) : "-",
        actor: row.actor || row.actorEmail || "System",
        action: row.summary || row.actionType || "Admin action",
        entityType: row.entityType,
        entityId: row.entityId
      }));
      if (this.auditLogs.length === 0) {
        this.auditLogs = [
          { when: (/* @__PURE__ */ new Date()).toISOString().slice(0, 16).replace("T", " "), actor: "system", action: "No audit logs found yet" }
        ];
      }
      this.guideVendors = [
        {
          name: "Backend-ready placeholder",
          type: "Guide/Vendor endpoint pending",
          assignment: "Connect dedicated endpoint when available",
          score: 0,
          payoutDue: 0
        }
      ];
      this.logistics = [
        {
          route: "Backend-ready placeholder",
          pickupPoints: 0,
          vehicle: "Connect transport endpoint",
          manifest: "Pending integration"
        }
      ];
      this.lastSyncedAt = (/* @__PURE__ */ new Date()).toLocaleString();
      this.loading = false;
    });
  }
  get complianceCompletion() {
    const total = this.complianceDocs.length * 3;
    if (!total) {
      return 0;
    }
    const done = this.complianceDocs.reduce((acc, row) => {
      return acc + Number(row.waiver) + Number(row.idProof) + Number(row.medical);
    }, 0);
    return Math.round(done / total * 100);
  }
  get failedPayments() {
    return this.paymentOps.filter((row) => String(row.status).toLowerCase() === "failed").length;
  }
  exportReport(report) {
    if (report.name === "Refund Register") {
      this.bookingService.listRefunds().subscribe({
        next: (res) => {
          const rows = Array.isArray(res?.data) ? res.data : [];
          if (rows.length === 0) {
            alert("No refunds recorded yet in the system.");
            return;
          }
          const csvRows2 = [
            ["Refund Payment ID", "Booking Reference", "Customer Name", "Email", "Phone", "Trek Name", "Booking Amount (INR)", "Refund Amount (INR)", "Refund Method", "Transaction / UTR ID", "Processed Date"],
            ...rows.map((r) => [
              r.id || "",
              r.booking_reference || r.booking_id || "",
              r.customer_name || "",
              r.customer_email || "",
              r.customer_phone || "",
              r.trek_name || "",
              r.booking_amount || 0,
              r.amount || 0,
              r.payment_method || "Online Gateway",
              r.transaction_id || "",
              r.created_at || ""
            ])
          ];
          this.downloadCsv(csvRows2, `Refund-Register-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`);
          report.lastGenerated = (/* @__PURE__ */ new Date()).toLocaleTimeString();
        },
        error: () => {
          alert("Failed to generate Refund Register report.");
        }
      });
      return;
    }
    const csvRows = [
      ["Booking ID / Reference", "Customer", "Amount", "Payment Method", "Payment Status", "Reconciliation Status"],
      ...this.paymentOps.map((p) => [p.bookingId, p.customerName || "", p.amount, p.mode, p.status, p.reconcile])
    ];
    this.downloadCsv(csvRows, `${report.name.replace(/\s+/g, "-")}-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`);
    report.lastGenerated = (/* @__PURE__ */ new Date()).toLocaleTimeString();
  }
  downloadCsv(rows, filename) {
    const csv = rows.map((row) => row.map((value) => `"${String(value ?? "").replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  }
  // ── Basecamp QR Scanner & Digital Check-in Methods ──
  searchCheckin(query) {
    const q = String(query || "").trim().toLowerCase().replace("#", "").replace("gwk-", "");
    if (!q) {
      this.foundBooking = null;
      return;
    }
    const match = this.allBookingsRaw.find((b) => String(b.id || "").toLowerCase().includes(q) || String(b.customer_name || b.customerName || "").toLowerCase().includes(q) || String(b.customer_email || b.email || "").toLowerCase().includes(q) || String(b.customer_phone || b.phone || "").includes(q));
    if (match) {
      this.foundBooking = match;
      this.isCheckedIn = match.status === "confirmed" || match.booking_status === "confirmed";
    } else {
      this.foundBooking = null;
    }
  }
  toggleCameraScanner() {
    this.isCameraActive = !this.isCameraActive;
    if (this.isCameraActive) {
      setTimeout(() => {
        if (this.allBookingsRaw.length > 0) {
          const sample = this.allBookingsRaw[0];
          this.scannerQuery = `GWK-${sample.id}`;
          this.searchCheckin(sample.id);
        }
      }, 1200);
    }
  }
  confirmCheckin(booking) {
    if (!booking)
      return;
    this.bookingService.recordCheckin({
      bookingId: booking.id,
      batchId: booking.batchId || booking.batch_id || "BATCH-PRIMARY",
      passReference: `GWK-${booking.id}`,
      leadCustomerName: booking.customer_name || booking.customerName || "Trekker",
      participantsCount: Number(booking.participants || booking.seats || 1),
      checkedInCount: Number(booking.participants || booking.seats || 1),
      notes: "Verified photo ID & health declaration at basecamp entry"
    }).subscribe({
      next: (res) => {
        if (res?.success) {
          this.isCheckedIn = true;
          booking.status = "confirmed";
          booking.booking_status = "confirmed";
          this.checkinHistory.unshift({
            bookingId: booking.id,
            name: booking.customer_name || booking.customerName,
            trek: booking.trek_name || booking.trekName,
            count: Number(booking.participants || booking.seats || 1),
            time: (/* @__PURE__ */ new Date()).toLocaleTimeString()
          });
          alert(`Check-in Confirmed! Trekker #${booking.id} marked present.`);
        }
      },
      error: () => {
        alert("Check-in failed. Please try again.");
      }
    });
  }
  // ── Trail Advisory Broadcast Methods ──
  broadcastAdvisory() {
    if (!this.advisoryForm.alertMessage) {
      alert("Please enter an advisory alert message to broadcast.");
      return;
    }
    this.isBroadcasting = true;
    this.bookingService.broadcastTrailAdvisory({
      trekName: this.advisoryForm.trekName,
      batchId: this.advisoryForm.batchId,
      trailCondition: this.advisoryForm.trailCondition,
      severity: this.advisoryForm.severity,
      alertMessage: this.advisoryForm.alertMessage,
      channel: this.advisoryForm.channel
    }).subscribe({
      next: (res) => {
        this.isBroadcasting = false;
        if (res?.success) {
          this.broadcastSuccessMsg = `Alert broadcasted successfully to all batch participants via ${this.advisoryForm.channel}!`;
          setTimeout(() => this.broadcastSuccessMsg = "", 5e3);
        }
      },
      error: () => {
        this.isBroadcasting = false;
        alert("Failed to broadcast advisory.");
      }
    });
  }
  // ── Gear Rental Inventory Methods ──
  loadGearInventory() {
    this.bookingService.listGearInventory().subscribe({
      next: (res) => {
        const rawItems = res?.success && Array.isArray(res.data) && res.data.length > 0 ? res.data : [
          { id: "1", item_name: "Anti-Shock Carbon Trekking Poles (Pair)", category: "Trekking Poles & Sticks", total_quantity: 40, rented_quantity: 18, rental_rate_per_day: 150, item_condition: "Good Condition", status: "active" },
          { id: "2", item_name: "Quechua -5\xB0C Expedition Sleeping Bag", category: "Sleeping Bags & Mats", total_quantity: 30, rented_quantity: 12, rental_rate_per_day: 200, item_condition: "Good Condition", status: "active" },
          { id: "3", item_name: "Waterproof Monsoon Poncho & Rain Cover", category: "Waterproof Ponchos & Rain Covers", total_quantity: 60, rented_quantity: 24, rental_rate_per_day: 80, item_condition: "Brand New", status: "active" },
          { id: "4", item_name: "450 Lumens Rechargeable LED Headlamp", category: "Headlamps & Torches", total_quantity: 25, rented_quantity: 8, rental_rate_per_day: 100, item_condition: "Good Condition", status: "active" },
          { id: "5", item_name: "Wildcraft 60L Rucksack + Rain Cover", category: "Expedition Rucksacks (50L-60L)", total_quantity: 20, rented_quantity: 6, rental_rate_per_day: 250, item_condition: "Good Condition", status: "active" }
        ];
        this.gearList = rawItems.map((item) => {
          const total = Number(item.total_quantity || item.totalQuantity || item.total || 20);
          const rented = Number(item.rented_quantity || item.rentedQuantity || item.rented || 0);
          return {
            id: item.id,
            name: item.item_name || item.itemName || item.name || "Equipment Item",
            category: item.category || "General Equipment",
            condition: item.item_condition || item.itemCondition || item.condition || "Good Condition",
            rented,
            total,
            available: Math.max(0, total - rented),
            dailyRate: Number(item.rental_rate_per_day || item.rentalRatePerDay || item.dailyRate || 100),
            location: item.location || "Basecamp Store",
            status: item.status || "active"
          };
        });
      },
      error: () => {
        this.gearList = [];
      }
    });
  }
  getGearConditionClass(cond) {
    if (!cond)
      return "condition-good";
    const c = cond.toLowerCase();
    if (c.includes("excel") || c.includes("brand") || c.includes("new"))
      return "condition-excellent";
    if (c.includes("fair") || c.includes("wear"))
      return "condition-fair";
    if (c.includes("maint") || c.includes("damag") || c.includes("poor"))
      return "condition-maintenance";
    return "condition-good";
  }
  openAddGearModal() {
    this.gearForm = {
      id: "",
      itemName: "",
      category: this.gearCategoryOptions[0] || "Trekking Poles & Sticks",
      totalQuantity: 20,
      rentedQuantity: 0,
      rentalRatePerDay: 150,
      itemCondition: "Good Condition",
      location: "Main Basecamp Gear Store",
      status: "active"
    };
    this.showGearModal = true;
  }
  editGear(g) {
    this.gearForm = {
      id: g.id || "",
      itemName: g.name || g.item_name || g.itemName || "",
      category: g.category || this.gearCategoryOptions[0] || "Trekking Poles & Sticks",
      totalQuantity: g.total || g.total_quantity || g.totalQuantity || 20,
      rentedQuantity: g.rented || g.rented_quantity || g.rentedQuantity || 0,
      rentalRatePerDay: g.dailyRate || g.rental_rate_per_day || g.rentalRatePerDay || 150,
      itemCondition: g.condition || g.item_condition || g.itemCondition || "Good Condition",
      location: g.location || "Main Basecamp Gear Store",
      status: g.status || "active"
    };
    this.showGearModal = true;
  }
  deleteGear(id) {
    if (!confirm("Are you sure you want to remove this equipment item?"))
      return;
    this.gearList = this.gearList.filter((g) => g.id !== id && g.id != id);
  }
  closeGearModal() {
    this.showGearModal = false;
  }
  saveGear() {
    this.saveGearItem();
  }
  saveGearItem() {
    if (!this.gearForm.itemName || !this.gearForm.category) {
      alert("Please fill out item name and category.");
      return;
    }
    this.isSavingGear = true;
    this.bookingService.upsertGearItem({
      id: this.gearForm.id || null,
      itemName: this.gearForm.itemName,
      category: this.gearForm.category,
      totalQuantity: this.gearForm.totalQuantity,
      rentedQuantity: this.gearForm.rentedQuantity,
      rentalRatePerDay: this.gearForm.rentalRatePerDay,
      itemCondition: this.gearForm.itemCondition,
      location: this.gearForm.location,
      status: this.gearForm.status
    }).subscribe({
      next: (res) => {
        this.isSavingGear = false;
        if (res?.success) {
          alert("Gear item saved successfully!");
          this.closeGearModal();
          this.loadGearInventory();
        }
      },
      error: () => {
        this.isSavingGear = false;
        alert("Failed to save gear item.");
      }
    });
  }
  // ── Batch P&L Calculator Methods ──
  selectBatchForPnl(batch) {
    this.selectedBatchPnl = batch;
    const ticketRevenue = Number(batch.bookedSeats || 18) * Number(batch.price || 2400);
    const gearRevenue = 1200;
    this.batchPnlData = {
      batchId: batch.id || "BATCH-PRIMARY",
      trekName: batch.trekName || "Kudremukha Trek",
      ticketRevenue,
      gearRevenue,
      expenses: [
        { id: "1", expense_category: "Forest Dept Eco-Permits & Entry Fees", description: "Mandatory Forest Entry Permits (18 pax x \u20B9200)", amount: 3600, payment_mode: "UPI" },
        { id: "2", expense_category: "Guide & Lead Honorarium", description: "Certified Lead Guide + Sweeper Fee (2 Days)", amount: 5e3, payment_mode: "Bank Transfer" },
        { id: "3", expense_category: "Homestay & Food / Camp Meals", description: "Basecamp Homestay & 4 Meals per trekker", amount: 14400, payment_mode: "UPI" },
        { id: "4", expense_category: "Vehicle Fuel & Transport Costs", description: "Tempo Traveller Bengaluru to Basecamp & Return", amount: 12e3, payment_mode: "UPI" },
        { id: "5", expense_category: "First Aid & Safety Equipment", description: "Medical Oxygen & First Aid replenishment", amount: 800, payment_mode: "UPI" }
      ],
      totalExpenses: 35800,
      netProfit: ticketRevenue + gearRevenue - 35800,
      operatingMarginPct: Math.round((ticketRevenue + gearRevenue - 35800) / (ticketRevenue + gearRevenue) * 100)
    };
  }
  addBatchExpense() {
    if (!this.newExpenseForm.amount || this.newExpenseForm.amount <= 0) {
      alert("Please enter a valid expense amount.");
      return;
    }
    this.isRecordingExpense = true;
    const exp = {
      id: Date.now().toString(),
      expense_category: this.newExpenseForm.expenseCategory || this.expenseCategoryOptions[0],
      description: this.newExpenseForm.description || this.newExpenseForm.expenseCategory,
      amount: Number(this.newExpenseForm.amount),
      paid_to: this.newExpenseForm.paidTo,
      payment_mode: this.newExpenseForm.paymentMode
    };
    this.batchPnlData.expenses.unshift(exp);
    this.batchPnlData.totalExpenses += exp.amount;
    const gross = this.batchPnlData.ticketRevenue + this.batchPnlData.gearRevenue;
    this.batchPnlData.netProfit = gross - this.batchPnlData.totalExpenses;
    this.batchPnlData.operatingMarginPct = Math.round(this.batchPnlData.netProfit / gross * 100);
    this.newExpenseForm = {
      expenseCategory: this.expenseCategoryOptions[0] || "Forest Dept Eco-Permits & Entry Fees",
      description: "",
      amount: 0,
      paidTo: "",
      paymentMode: "UPI",
      receiptRef: ""
    };
    this.isRecordingExpense = false;
    alert("Expense added to Batch P&L ledger!");
  }
  // ── Forest Dept & Eco-Fund Royalty Ledger Methods ──
  loadForestRoyaltyLedger() {
    this.isLoadingRoyalty = true;
    this.bookingService.getForestRoyaltyLedger().subscribe({
      next: (res) => {
        this.isLoadingRoyalty = false;
        if (res?.success && res.data) {
          this.royaltyData = res.data;
        }
      },
      error: () => {
        this.isLoadingRoyalty = false;
      }
    });
  }
  // ── Collect Remainder at Basecamp Desk ──
  collectBasecampRemainder(booking) {
    if (!booking)
      return;
    const amount = Number(booking.balance_due || 0);
    if (amount <= 0) {
      alert("This booking is already fully paid.");
      return;
    }
    if (!confirm(`Collect remainder balance of \u20B9${amount} for Booking #${booking.booking_reference}?`)) {
      return;
    }
    this.bookingService.collectRemainderPayment({
      bookingId: booking.id,
      amount,
      paymentMethod: "Basecamp Desk Cash / UPI Counter",
      transactionId: "BC-SETTLE-" + Date.now(),
      notes: "Settled at Forest Gate Checkpoint"
    }).subscribe({
      next: (res) => {
        if (res?.success) {
          booking.payment_status = "paid";
          booking.balance_due = 0;
          booking.amount_paid = booking.total_amount;
          alert(`Remainder of \u20B9${amount} collected! Booking is now fully paid and verified.`);
        }
      },
      error: () => {
        alert("Failed to collect remainder payment.");
      }
    });
  }
  // ── Automated Journey WhatsApp / SMS Dispatcher ──
  setPreviewType(type) {
    this.activePreviewType = type;
    this.journeyForm.type = type;
  }
  dispatchJourneyMessage(customType) {
    if (customType) {
      this.journeyForm.type = customType;
      this.activePreviewType = customType;
    }
    this.isDispatchingJourney = true;
    const type = this.journeyForm.type;
    const channel = this.journeyForm.channel;
    const target = this.journeyForm.bookingId || "All Upcoming Active Batches";
    this.bookingService.dispatchJourneyNotification({
      bookingId: this.journeyForm.bookingId || "ALL-ACTIVE-BATCHES",
      type,
      channel
    }).subscribe({
      next: (res) => {
        this.isDispatchingJourney = false;
        if (res?.success) {
          const typeNames = {
            booking_pass: "Digital Trek Pass & QR",
            weather_advisory: "T-48h Weather Advisory",
            summit_certificate: "Summit Certificate & Badge"
          };
          this.journeySuccessMsg = res.message || "Notification dispatched successfully!";
          this.journeyLogs.unshift({
            id: res.data?.dispatchId || "MSG-" + Date.now().toString().slice(-6),
            type,
            typeName: typeNames[type] || type,
            channel,
            target,
            status: "DELIVERED",
            timestamp: /* @__PURE__ */ new Date()
          });
          setTimeout(() => this.journeySuccessMsg = "", 6e3);
        }
      },
      error: (err) => {
        this.isDispatchingJourney = false;
        alert("Failed to dispatch journey notification: " + (err?.error?.message || err.message));
      }
    });
  }
  // ── Reset & Cancel Handlers ──
  clearScanner() {
    this.scannerQuery = "";
    this.foundBooking = null;
    this.isCheckedIn = false;
    this.isCameraActive = false;
  }
  resetAdvisoryForm() {
    this.advisoryForm = {
      trekName: "Kudremukha Peak Expedition",
      batchId: "BATCH-KUD-2026",
      trailCondition: this.trailConditionOptions[0] || "Open & Clear (Optimal Trekking)",
      severity: this.trailSeverityOptions[0] || "Advisory (Yellow)",
      alertMessage: "",
      channel: "WhatsApp + SMS Broadcast"
    };
    this.broadcastSuccessMsg = "";
  }
  resetExpenseForm() {
    this.newExpenseForm = {
      expenseCategory: this.expenseCategoryOptions[0] || "Forest Dept Eco-Permits & Entry Fees",
      description: "",
      amount: 0,
      paidTo: "",
      paymentMode: this.paymentMethodOptions[0] || "UPI",
      receiptRef: ""
    };
  }
  resetNewAdminForm() {
    this.newAdminForm = {
      name: "",
      email: "",
      password: "",
      roleKey: this.permissions[0]?.roleKey || ""
    };
    this.createAdminError = "";
    this.createAdminMessage = "";
  }
  resetPermissions() {
    this.loadRbacTable();
  }
};
_OperationsCenterComponent.\u0275fac = function OperationsCenterComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OperationsCenterComponent)(\u0275\u0275directiveInject(Dashboard), \u0275\u0275directiveInject(Bookings), \u0275\u0275directiveInject(TrekList), \u0275\u0275directiveInject(Users), \u0275\u0275directiveInject(Reviews), \u0275\u0275directiveInject(TrekBatchManagement), \u0275\u0275directiveInject(NotificationsService), \u0275\u0275directiveInject(Analytics), \u0275\u0275directiveInject(AuditService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(RbacService), \u0275\u0275directiveInject(DropdownManagerService));
};
_OperationsCenterComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OperationsCenterComponent, selectors: [["app-operations-center"]], decls: 83, vars: 39, consts: [["noArrivalsTpl", ""], ["noGearTpl", ""], ["noExpTpl", ""], [1, "ops-page"], ["sectionLabel", "Command & Control", "title", "Operations Control Center", "subtitle", "Mission-critical operations, real-time telemetry, basecamp manifests, trail safety, batch financials & expedition logistics."], [1, "ops-hero-banner"], [1, "hero-left"], [1, "live-pulse-beacon"], [1, "beacon-core"], [1, "beacon-ring"], [1, "hero-titles"], [1, "hero-badge-row"], [1, "ops-live-pill"], [1, "bi", "bi-broadcast"], [1, "ops-health-pill"], [1, "bi", "bi-shield-check"], [1, "hero-heading"], [1, "hero-subtext"], [1, "hero-right"], ["class", "sync-info-box", 4, "ngIf"], ["type", "button", "title", "Refresh All Operations Data", 1, "btn-ops-sync", 3, "click", "disabled"], [1, "bi", "bi-arrow-repeat"], [1, "ops-nav-container"], ["role", "tablist", 1, "ops-nav-tabs"], ["type", "button", 1, "nav-tab-btn", 3, "click"], [1, "bi", "bi-speedometer2"], [1, "bi", "bi-qr-code-scan"], [1, "bi", "bi-cloud-lightning-rain-fill"], [1, "bi", "bi-backpack4-fill"], [1, "bi", "bi-calculator-fill"], [1, "bi", "bi-bank2"], [1, "bi", "bi-whatsapp"], [1, "bi", "bi-layers-fill"], [1, "bi", "bi-truck-front-fill"], [1, "bi", "bi-headset"], [1, "bi", "bi-shield-lock-fill"], ["class", "tab-pane-content", 4, "ngIf"], ["class", "modal-backdrop-custom", 4, "ngIf"], [1, "sync-info-box"], [1, "bi", "bi-clock-history"], [1, "sync-label"], [1, "tab-pane-content"], [1, "ops-card", "health-banner-card"], [1, "card-head-row"], [1, "card-title-group"], [1, "bi", "bi-hdd-network-fill", "text-emerald"], [1, "health-badge", "success"], [1, "bi", "bi-check-circle-fill"], ["class", "checks-grid", 4, "ngIf"], [1, "kpi-grid"], [1, "ops-kpi-card", "danger-accent"], [1, "kpi-icon-wrap"], [1, "bi", "bi-exclamation-octagon-fill"], [1, "kpi-body"], [1, "kpi-label"], [1, "kpi-val", "text-danger"], [1, "kpi-sub", "text-muted"], [1, "ops-kpi-card", "success-accent"], [1, "kpi-val", "text-success"], [1, "ops-kpi-card", "warning-accent"], [1, "bi", "bi-chat-left-dots-fill"], [1, "kpi-val", "text-warning"], [1, "ops-kpi-card", "primary-accent"], [1, "bi", "bi-currency-rupee"], [1, "kpi-val", "text-primary"], [1, "ops-kpi-card", "info-accent"], [1, "bi", "bi-ticket-detailed-fill"], [1, "kpi-val"], [1, "ops-kpi-card", "purple-accent"], [1, "bi", "bi-people-fill"], [1, "ops-split-grid"], [1, "ops-card"], [1, "bi", "bi-file-earmark-spreadsheet-fill", "text-emerald"], [1, "reports-list"], ["class", "report-row", 4, "ngFor", "ngForOf"], [1, "bi", "bi-credit-card-2-front-fill", "text-blue"], [1, "payment-ops-list"], ["class", "payment-op-row", 4, "ngFor", "ngForOf"], [1, "checks-grid"], ["class", "check-chip", 3, "ok", "fail", 4, "ngFor", "ngForOf"], [1, "check-chip"], [1, "chip-dot"], [1, "chip-name"], [1, "chip-status"], [1, "report-row"], [1, "report-info"], [1, "report-icon"], [1, "bi", "bi-filetype-csv"], [1, "report-meta"], ["type", "button", 1, "btn-ops-action", "ghost", 3, "click"], [1, "bi", "bi-download"], [1, "payment-op-row"], [1, "payment-op-left"], [1, "booking-ref-badge"], [1, "status-pill-sub"], [1, "ops-split-grid", "checkin-grid"], [1, "bi", "bi-qr-code-scan", "text-emerald"], ["type", "button", 1, "btn-ops-action", 3, "click", "ngClass"], [1, "bi", 3, "ngClass"], ["class", "camera-viewport-card", 4, "ngIf"], [1, "lookup-search-bar"], [1, "bi", "bi-search", "search-icon"], ["type", "text", "placeholder", "Search Booking ID (e.g. 104), customer name, or phone...", 1, "ops-input", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "btn-ops-action", "secondary", 3, "click"], ["class", "btn-ops-action danger", "type", "button", 3, "click", 4, "ngIf"], ["class", "verified-booking-card", 4, "ngIf"], ["class", "ops-empty-alert", 4, "ngIf"], [1, "bi", "bi-clock-history", "text-emerald"], [1, "count-tag"], ["class", "arrival-feed-list", 4, "ngIf", "ngIfElse"], [1, "camera-viewport-card"], [1, "camera-laser"], [1, "camera-frame"], [1, "bi", "bi-qr-code"], ["type", "button", 1, "btn-ops-action", "danger", 3, "click"], [1, "verified-booking-card"], [1, "v-card-header"], [1, "pass-tag"], [1, "v-name"], [1, "v-contact"], [1, "bi", "bi-envelope"], [1, "bi", "bi-telephone"], [1, "text-end"], [1, "v-amount", "mt-1"], [1, "v-meta-matrix"], [1, "v-meta-item"], [1, "v-label"], [1, "text-success", "font-weight-bold"], [1, "bi", "bi-shield-fill-check"], ["class", "remainder-alert-card", 4, "ngIf"], [1, "v-actions-row"], ["type", "button", 1, "btn-ops-action", "primary", "flex-1", 3, "click", "disabled"], [1, "bi", "bi-check2-circle"], ["class", "btn-ops-action secondary", 3, "href", 4, "ngIf"], [1, "remainder-alert-card"], [1, "remainder-left"], [1, "bi", "bi-cash-stack", "text-warning", "fs-3"], [1, "remainder-amt"], ["type", "button", 1, "btn-ops-action", "success", 3, "click"], [1, "bi", "bi-cash-coin"], [1, "btn-ops-action", "secondary", 3, "href"], [1, "bi", "bi-telephone-fill"], [1, "ops-empty-alert"], [1, "bi", "bi-info-circle-fill"], [1, "arrival-feed-list"], ["class", "arrival-item", 4, "ngFor", "ngForOf"], [1, "arrival-item"], [1, "arrival-icon"], [1, "bi", "bi-person-check-fill"], [1, "arrival-content"], [1, "text-muted"], [1, "arrival-time"], [1, "ops-empty-box"], [1, "bi", "bi-person-badge"], [1, "bi", "bi-broadcast", "text-danger"], ["class", "ops-toast success", 4, "ngIf"], [1, "ops-form-flow", 3, "ngSubmit"], [1, "ops-field"], [1, "req"], ["type", "text", "name", "trekName", "required", "", 1, "ops-input", 3, "ngModelChange", "ngModel"], [1, "ops-row-2"], ["name", "trailCondition", 1, "ops-select", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "severity", 1, "ops-select", 3, "ngModelChange", "ngModel"], ["rows", "4", "name", "alertMessage", "placeholder", "e.g. Moderate rainfall alert in Western Ghats: All trekkers must carry ponchos, high-grip shoes...", "required", "", 1, "ops-textarea", 3, "ngModelChange", "ngModel"], [1, "form-footer-actions"], [1, "channel-hint"], [1, "bi", "bi-send-check"], [1, "btn-group-row"], ["type", "submit", 1, "btn-ops-action", "danger", 3, "disabled"], [1, "bi", "bi-send-fill"], [1, "bi", "bi-cloud-sun-fill", "text-warning"], [1, "weather-cards-stack"], [1, "weather-station-card"], [1, "ws-head"], [1, "ws-sub"], [1, "weather-temp-badge"], [1, "bi", "bi-thermometer-half"], [1, "ws-body"], [1, "ws-stat"], [1, "bi", "bi-droplet-fill", "text-blue"], [1, "bi", "bi-wind", "text-muted"], [1, "ws-stat", "text-success"], [1, "bi", "bi-cloud-rain-heavy-fill", "text-primary"], [1, "ws-stat", "text-warning"], [1, "bi", "bi-exclamation-triangle-fill"], [1, "bi", "bi-sun-fill", "text-warning"], [1, "ops-toast", "success"], [3, "value"], [1, "bi", "bi-backpack4-fill", "text-emerald"], ["type", "button", "class", "btn-ops-action primary", 3, "click", 4, "ngIf"], ["class", "gear-grid", 4, "ngIf", "ngIfElse"], ["type", "button", 1, "btn-ops-action", "primary", 3, "click"], [1, "bi", "bi-plus-lg"], [1, "gear-grid"], ["class", "gear-item-card", 4, "ngFor", "ngForOf"], [1, "gear-item-card"], [1, "g-card-top"], [1, "g-name"], [1, "g-category-chip"], [1, "g-condition-pill", 3, "ngClass"], [1, "g-stock-gauge"], [1, "g-gauge-labels"], [1, "g-gauge-track"], [1, "g-gauge-fill"], [1, "g-card-footer"], [1, "g-rate"], ["class", "g-actions", 4, "ngIf"], [1, "g-actions"], ["type", "button", "title", "Edit Item", 1, "btn-icon-action", 3, "click"], [1, "bi", "bi-pencil-fill"], ["type", "button", "title", "Delete Item", 1, "btn-icon-action", "danger", 3, "click"], [1, "bi", "bi-trash3-fill"], [1, "bi", "bi-backpack4"], [1, "pnl-hero-banner"], [1, "pnl-tile"], [1, "pnl-label"], [1, "pnl-val"], [1, "pnl-sub"], [1, "pnl-val", "text-danger"], [1, "bi", "bi-receipt-cutoff", "text-emerald"], ["class", "expense-table-wrap", 4, "ngIf", "ngIfElse"], [1, "bi", "bi-plus-circle-fill", "text-emerald"], ["name", "expenseCategory", 1, "ops-select", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "description", "placeholder", "e.g. 20 Forest Permits @ \u20B9200", "required", "", 1, "ops-input", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "amount", "min", "1", "required", "", 1, "ops-input", 3, "ngModelChange", "ngModel"], ["name", "paymentMode", 1, "ops-select", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn-ops-action", "primary", "flex-1", 3, "disabled"], [1, "expense-table-wrap"], [1, "ops-data-table"], [4, "ngFor", "ngForOf"], [1, "category-pill"], [1, "mode-pill"], [1, "bi", "bi-receipt"], [1, "bi", "bi-bank2", "text-emerald"], ["class", "kpi-grid mb-4", 4, "ngIf"], ["class", "ops-empty-box", 4, "ngIf"], [1, "kpi-grid", "mb-4"], [1, "kpi-sub"], [1, "bi", "bi-tree"], [1, "bi", "bi-whatsapp", "text-success"], [1, "journey-type-selector"], ["type", "button", 1, "journey-btn", 3, "click"], [1, "bi", "bi-cloud-sun"], [1, "bi", "bi-award"], [1, "mt-4"], ["type", "button", 1, "btn-ops-action", "success", "w-100", 3, "click", "disabled"], [1, "bi", "bi-phone", "text-emerald"], [1, "phone-frame-mockup"], [1, "wa-header"], [1, "wa-avatar"], [1, "bi", "bi-compass-fill"], [1, "wa-online-status"], [1, "wa-chat-canvas"], ["class", "wa-bubble-msg", 4, "ngIf"], [1, "wa-bubble-msg"], [1, "wa-text"], [1, "wa-msg-time"], [1, "bi", "bi-check2-all", "text-primary"], [1, "bi", "bi-layers-fill", "text-emerald"], [1, "batch-matrix-table-wrap"], [1, "slot-progress-wrap"], [1, "slot-text"], [1, "slot-track"], [1, "slot-fill"], [1, "status-pill-sub", 3, "ngClass"], [1, "bi", "bi-truck-front-fill", "text-emerald"], [1, "guides-grid"], ["class", "vendor-card", 4, "ngFor", "ngForOf"], [1, "vendor-card"], [1, "v-avatar"], [1, "bi", "bi-person-badge-fill"], [1, "v-info"], [1, "v-role"], [1, "v-phone"], [1, "status-pill-sub", "success"], [1, "bi", "bi-headset", "text-emerald"], [1, "crm-table-wrap"], [1, "priority-pill", 3, "ngClass"], [1, "status-pill-sub", "warning"], ["class", "ops-card", 4, "ngIf"], [1, "bi", "bi-shield-check", "text-emerald"], [1, "audit-log-stream"], ["class", "audit-item", 4, "ngFor", "ngForOf"], [1, "bi", "bi-person-plus-fill", "text-emerald"], [1, "ops-form-flow"], ["type", "text", "placeholder", "e.g. Captain Ramesh", 1, "ops-input", 3, "ngModelChange", "ngModel"], ["type", "email", "placeholder", "ramesh@gowildkarunadu.in", 1, "ops-input", 3, "ngModelChange", "ngModel"], [1, "password-input-wrap"], ["placeholder", "Min 8 chars", 1, "ops-input", 3, "ngModelChange", "type", "ngModel"], ["type", "button", 1, "btn-toggle-pw", 3, "click"], [1, "ops-select", 3, "ngModelChange", "ngModel"], [1, "bi", "bi-person-plus-fill"], ["class", "ops-toast success mt-2", 4, "ngIf"], ["class", "ops-toast error mt-2", 4, "ngIf"], [1, "ops-toast", "success", "mt-2"], [1, "ops-toast", "error", "mt-2"], [1, "audit-item"], [1, "audit-dot"], [1, "audit-body"], [1, "audit-actor-row"], [1, "audit-time"], [1, "audit-action"], ["class", "audit-entity-tag", 4, "ngIf"], [1, "audit-entity-tag"], [4, "ngIf"], [1, "modal-backdrop-custom"], [1, "modal-dialog-custom"], [1, "modal-header-custom"], [1, "modal-title-wrap"], [1, "modal-avatar"], ["type", "button", 1, "btn-close-custom", 3, "click"], [1, "bi", "bi-x-lg"], [1, "modal-body-custom"], [1, "modal-form-grid"], [1, "form-field", "full-width"], ["type", "text", "placeholder", "e.g. Carbon Fiber Trekking Poles", "required", "", 1, "modern-input", 3, "ngModelChange", "ngModel"], ["required", "", 1, "modern-select", 3, "ngModelChange", "ngModel"], [1, "form-field"], ["type", "number", "min", "1", "required", "", 1, "modern-input", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", "required", "", 1, "modern-input", 3, "ngModelChange", "ngModel"], [1, "modern-select", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "e.g. Kudremukha Store", 1, "modern-input", 3, "ngModelChange", "ngModel"], [1, "modal-footer-custom"], ["type", "button", 1, "btn-action-ghost", 3, "click"], ["type", "button", 1, "btn-gradient-primary", 3, "click", "disabled"], [1, "bi", "bi-check2"]], template: function OperationsCenterComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "app-admin-shell", 4)(2, "div", 5)(3, "div", 6)(4, "div", 7);
    \u0275\u0275element(5, "span", 8)(6, "span", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 10)(8, "div", 11)(9, "span", 12);
    \u0275\u0275element(10, "i", 13);
    \u0275\u0275text(11, " LIVE TELEMETRY");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 14);
    \u0275\u0275element(13, "i", 15);
    \u0275\u0275text(14, " ALL SYSTEMS OPERATIONAL");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "h2", 16);
    \u0275\u0275text(16, "Expedition Command & Basecamp Operations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 17);
    \u0275\u0275text(18, "Real-time control desk for departures, trekker check-ins, weather safety, gear inventory & financials.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 18);
    \u0275\u0275template(20, OperationsCenterComponent_div_20_Template, 7, 1, "div", 19);
    \u0275\u0275elementStart(21, "button", 20);
    \u0275\u0275listener("click", function OperationsCenterComponent_Template_button_click_21_listener() {
      return ctx.loadOperationsData();
    });
    \u0275\u0275element(22, "i", 21);
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(25, "div", 22)(26, "nav", 23)(27, "button", 24);
    \u0275\u0275listener("click", function OperationsCenterComponent_Template_button_click_27_listener() {
      return ctx.setActiveTab("overview");
    });
    \u0275\u0275element(28, "i", 25);
    \u0275\u0275elementStart(29, "span");
    \u0275\u0275text(30, "Overview");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "button", 24);
    \u0275\u0275listener("click", function OperationsCenterComponent_Template_button_click_31_listener() {
      return ctx.setActiveTab("checkin");
    });
    \u0275\u0275element(32, "i", 26);
    \u0275\u0275elementStart(33, "span");
    \u0275\u0275text(34, "Basecamp Check-in");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "button", 24);
    \u0275\u0275listener("click", function OperationsCenterComponent_Template_button_click_35_listener() {
      return ctx.setActiveTab("advisory");
    });
    \u0275\u0275element(36, "i", 27);
    \u0275\u0275elementStart(37, "span");
    \u0275\u0275text(38, "Trail & Weather");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "button", 24);
    \u0275\u0275listener("click", function OperationsCenterComponent_Template_button_click_39_listener() {
      return ctx.setActiveTab("gear");
    });
    \u0275\u0275element(40, "i", 28);
    \u0275\u0275elementStart(41, "span");
    \u0275\u0275text(42, "Gear Inventory");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "button", 24);
    \u0275\u0275listener("click", function OperationsCenterComponent_Template_button_click_43_listener() {
      return ctx.setActiveTab("pnl");
    });
    \u0275\u0275element(44, "i", 29);
    \u0275\u0275elementStart(45, "span");
    \u0275\u0275text(46, "Batch P&L");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "button", 24);
    \u0275\u0275listener("click", function OperationsCenterComponent_Template_button_click_47_listener() {
      ctx.setActiveTab("royalty");
      return ctx.loadForestRoyaltyLedger();
    });
    \u0275\u0275element(48, "i", 30);
    \u0275\u0275elementStart(49, "span");
    \u0275\u0275text(50, "Forest Dept Royalty");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "button", 24);
    \u0275\u0275listener("click", function OperationsCenterComponent_Template_button_click_51_listener() {
      return ctx.setActiveTab("journey");
    });
    \u0275\u0275element(52, "i", 31);
    \u0275\u0275elementStart(53, "span");
    \u0275\u0275text(54, "WhatsApp Journey");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "button", 24);
    \u0275\u0275listener("click", function OperationsCenterComponent_Template_button_click_55_listener() {
      return ctx.setActiveTab("inventory");
    });
    \u0275\u0275element(56, "i", 32);
    \u0275\u0275elementStart(57, "span");
    \u0275\u0275text(58, "Batch Matrix");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "button", 24);
    \u0275\u0275listener("click", function OperationsCenterComponent_Template_button_click_59_listener() {
      return ctx.setActiveTab("logistics");
    });
    \u0275\u0275element(60, "i", 33);
    \u0275\u0275elementStart(61, "span");
    \u0275\u0275text(62, "Logistics & Guides");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "button", 24);
    \u0275\u0275listener("click", function OperationsCenterComponent_Template_button_click_63_listener() {
      return ctx.setActiveTab("crm");
    });
    \u0275\u0275element(64, "i", 34);
    \u0275\u0275elementStart(65, "span");
    \u0275\u0275text(66, "CRM & Inquiries");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "button", 24);
    \u0275\u0275listener("click", function OperationsCenterComponent_Template_button_click_67_listener() {
      return ctx.setActiveTab("rbac");
    });
    \u0275\u0275element(68, "i", 35);
    \u0275\u0275elementStart(69, "span");
    \u0275\u0275text(70, "Access & RBAC");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(71, OperationsCenterComponent_div_71_Template, 99, 12, "div", 36)(72, OperationsCenterComponent_div_72_Template, 38, 11, "div", 36)(73, OperationsCenterComponent_div_73_Template, 119, 12, "div", 36)(74, OperationsCenterComponent_div_74_Template, 14, 3, "div", 36)(75, OperationsCenterComponent_div_75_Template, 93, 31, "div", 36)(76, OperationsCenterComponent_div_76_Template, 15, 2, "div", 36)(77, OperationsCenterComponent_div_77_Template, 61, 14, "div", 36)(78, OperationsCenterComponent_div_78_Template, 24, 1, "div", 36)(79, OperationsCenterComponent_div_79_Template, 12, 1, "div", 36)(80, OperationsCenterComponent_div_80_Template, 24, 1, "div", 36)(81, OperationsCenterComponent_div_81_Template, 14, 2, "div", 36)(82, OperationsCenterComponent_div_82_Template, 56, 11, "div", 37);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(20);
    \u0275\u0275property("ngIf", ctx.lastSyncedAt);
    \u0275\u0275advance();
    \u0275\u0275classProp("is-syncing", ctx.loading);
    \u0275\u0275property("disabled", ctx.loading);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.loading ? "Syncing..." : "Sync Live Ops");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx.activeTab === "overview");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx.activeTab === "checkin");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx.activeTab === "advisory");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx.activeTab === "gear");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx.activeTab === "pnl");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx.activeTab === "royalty");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx.activeTab === "journey");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx.activeTab === "inventory");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx.activeTab === "logistics");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx.activeTab === "crm");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx.activeTab === "rbac");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.activeTab === "overview");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.activeTab === "checkin");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.activeTab === "advisory");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.activeTab === "gear");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.activeTab === "pnl");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.activeTab === "royalty");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.activeTab === "journey");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.activeTab === "inventory");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.activeTab === "logistics");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.activeTab === "crm");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.activeTab === "rbac");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.showGearModal);
  }
}, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, NgModel, NgForm, AdminShellComponent, UpperCasePipe, DecimalPipe], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  font-family:\n    "Plus Jakarta Sans",\n    system-ui,\n    -apple-system,\n    sans-serif;\n  color: #0f172a;\n}\n.ops-page[_ngcontent-%COMP%] {\n  --background: #f8fafc;\n}\n.ops-hero-banner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #064e3b 0%,\n      #0f3d35 45%,\n      #0d2822 100%);\n  border-radius: 20px;\n  padding: 24px 28px;\n  margin-bottom: 24px;\n  color: #ffffff;\n  box-shadow: 0 12px 36px rgba(6, 78, 59, 0.22);\n  position: relative;\n  overflow: hidden;\n  width: 1570px;\n}\n.ops-hero-banner[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -10%;\n  width: 320px;\n  height: 320px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(52, 211, 153, 0.15) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.ops-hero-banner[_ngcontent-%COMP%]   .hero-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  position: relative;\n  z-index: 1;\n}\n.ops-hero-banner[_ngcontent-%COMP%]   .hero-left[_ngcontent-%COMP%]   .live-pulse-beacon[_ngcontent-%COMP%] {\n  position: relative;\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n}\n.ops-hero-banner[_ngcontent-%COMP%]   .hero-left[_ngcontent-%COMP%]   .live-pulse-beacon[_ngcontent-%COMP%]   .beacon-core[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 2px;\n  border-radius: 50%;\n  background: #10b981;\n  box-shadow: 0 0 12px #34d399;\n}\n.ops-hero-banner[_ngcontent-%COMP%]   .hero-left[_ngcontent-%COMP%]   .live-pulse-beacon[_ngcontent-%COMP%]   .beacon-ring[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: -6px;\n  border-radius: 50%;\n  border: 2px solid #34d399;\n  animation: _ngcontent-%COMP%_beaconWave 2s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n}\n.ops-hero-banner[_ngcontent-%COMP%]   .hero-left[_ngcontent-%COMP%]   .hero-titles[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.ops-hero-banner[_ngcontent-%COMP%]   .hero-left[_ngcontent-%COMP%]   .hero-titles[_ngcontent-%COMP%]   .hero-badge-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 8px;\n}\n.ops-hero-banner[_ngcontent-%COMP%]   .hero-left[_ngcontent-%COMP%]   .hero-titles[_ngcontent-%COMP%]   .hero-badge-row[_ngcontent-%COMP%]   .ops-live-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: rgba(16, 185, 129, 0.2);\n  border: 1px solid rgba(52, 211, 153, 0.4);\n  color: #6ee7b7;\n  font-size: 0.72rem;\n  font-weight: 800;\n  letter-spacing: 0.06em;\n  padding: 3px 10px;\n  border-radius: 20px;\n}\n.ops-hero-banner[_ngcontent-%COMP%]   .hero-left[_ngcontent-%COMP%]   .hero-titles[_ngcontent-%COMP%]   .hero-badge-row[_ngcontent-%COMP%]   .ops-health-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  color: #e2e8f0;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  padding: 3px 10px;\n  border-radius: 20px;\n}\n.ops-hero-banner[_ngcontent-%COMP%]   .hero-left[_ngcontent-%COMP%]   .hero-titles[_ngcontent-%COMP%]   .hero-heading[_ngcontent-%COMP%] {\n  margin: 2px 0 0;\n  font-size: 1.35rem;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n  color: #ffffff;\n}\n.ops-hero-banner[_ngcontent-%COMP%]   .hero-left[_ngcontent-%COMP%]   .hero-titles[_ngcontent-%COMP%]   .hero-subtext[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.84rem;\n  color: #a7f3d0;\n  line-height: 1.4;\n}\n.ops-hero-banner[_ngcontent-%COMP%]   .hero-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  position: relative;\n  z-index: 1;\n}\n.ops-hero-banner[_ngcontent-%COMP%]   .hero-right[_ngcontent-%COMP%]   .sync-info-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  padding: 7px 14px;\n  border-radius: 12px;\n  font-size: 0.78rem;\n  color: #e2e8f0;\n}\n.ops-hero-banner[_ngcontent-%COMP%]   .hero-right[_ngcontent-%COMP%]   .sync-info-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #34d399;\n}\n.ops-hero-banner[_ngcontent-%COMP%]   .hero-right[_ngcontent-%COMP%]   .sync-info-box[_ngcontent-%COMP%]   .sync-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.68rem;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.ops-hero-banner[_ngcontent-%COMP%]   .hero-right[_ngcontent-%COMP%]   .sync-info-box[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-weight: 700;\n}\n.ops-hero-banner[_ngcontent-%COMP%]   .hero-right[_ngcontent-%COMP%]   .btn-ops-sync[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 18px;\n  border-radius: 12px;\n  border: none;\n  background: #10b981;\n  color: #064e3b;\n  font-size: 0.7rem;\n  font-weight: 800;\n  cursor: pointer;\n  box-shadow: 0 4px 14px rgba(16, 185, 129, 0.35);\n  transition: all 0.2s ease;\n}\n.ops-hero-banner[_ngcontent-%COMP%]   .hero-right[_ngcontent-%COMP%]   .btn-ops-sync[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.ops-hero-banner[_ngcontent-%COMP%]   .hero-right[_ngcontent-%COMP%]   .btn-ops-sync[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #34d399;\n  transform: translateY(-2px);\n  box-shadow: 0 6px 18px rgba(16, 185, 129, 0.45);\n}\n.ops-hero-banner[_ngcontent-%COMP%]   .hero-right[_ngcontent-%COMP%]   .btn-ops-sync.is-syncing[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n.ops-hero-banner[_ngcontent-%COMP%]   .hero-right[_ngcontent-%COMP%]   .btn-ops-sync[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.ops-nav-container[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  width: 1570px;\n}\n.ops-nav-container[_ngcontent-%COMP%]   .ops-nav-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 16px;\n  padding: 6px;\n  overflow-x: auto;\n  scrollbar-width: thin;\n  box-shadow: 0 2px 10px rgba(15, 23, 42, 0.03);\n}\n.ops-nav-container[_ngcontent-%COMP%]   .ops-nav-tabs[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 4px;\n}\n.ops-nav-container[_ngcontent-%COMP%]   .ops-nav-tabs[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #cbd5e1;\n  border-radius: 4px;\n}\n.ops-nav-container[_ngcontent-%COMP%]   .ops-nav-tabs[_ngcontent-%COMP%]   .nav-tab-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 16px;\n  border-radius: 11px;\n  border: 1px solid transparent;\n  background: transparent;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #64748b;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: all 0.18s ease;\n}\n.ops-nav-container[_ngcontent-%COMP%]   .ops-nav-tabs[_ngcontent-%COMP%]   .nav-tab-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  transition: transform 0.18s ease;\n}\n.ops-nav-container[_ngcontent-%COMP%]   .ops-nav-tabs[_ngcontent-%COMP%]   .nav-tab-btn[_ngcontent-%COMP%]:hover {\n  color: #0f172a;\n  background: #f1f5f9;\n}\n.ops-nav-container[_ngcontent-%COMP%]   .ops-nav-tabs[_ngcontent-%COMP%]   .nav-tab-btn[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: scale(1.12);\n}\n.ops-nav-container[_ngcontent-%COMP%]   .ops-nav-tabs[_ngcontent-%COMP%]   .nav-tab-btn.active[_ngcontent-%COMP%] {\n  background: #064e3b;\n  border-color: #064e3b;\n  color: #ffffff;\n  font-weight: 700;\n  box-shadow: 0 4px 14px rgba(6, 78, 59, 0.25);\n}\n.ops-nav-container[_ngcontent-%COMP%]   .ops-nav-tabs[_ngcontent-%COMP%]   .nav-tab-btn.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #34d399;\n}\n.tab-pane-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  animation: _ngcontent-%COMP%_slideFadeIn 0.22s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.ops-split-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));\n  gap: 22px;\n}\n.ops-split-grid.checkin-grid[_ngcontent-%COMP%] {\n  grid-template-columns: 1.3fr 1fr;\n}\n@media (max-width: 960px) {\n  .ops-split-grid.checkin-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.ops-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 18px;\n  padding: 24px;\n  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.03);\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.ops-card[_ngcontent-%COMP%]   .card-head-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.ops-card[_ngcontent-%COMP%]   .card-head-row[_ngcontent-%COMP%]   .card-title-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.ops-card[_ngcontent-%COMP%]   .card-head-row[_ngcontent-%COMP%]   .card-title-group[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  background: #f8fafc;\n}\n.ops-card[_ngcontent-%COMP%]   .card-head-row[_ngcontent-%COMP%]   .card-title-group[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.05rem;\n  font-weight: 800;\n  color: #0f172a;\n  letter-spacing: -0.01em;\n}\n.ops-card[_ngcontent-%COMP%]   .card-head-row[_ngcontent-%COMP%]   .card-title-group[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 2px 0 0;\n  font-size: 0.8rem;\n  color: #64748b;\n}\n.health-banner-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #f0fdf4 100%);\n  border-color: #bbf7d0;\n}\n.health-banner-card[_ngcontent-%COMP%]   .health-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n.health-banner-card[_ngcontent-%COMP%]   .health-badge.success[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #15803d;\n  border: 1px solid #86efac;\n}\n.health-banner-card[_ngcontent-%COMP%]   .checks-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 12px;\n}\n.health-banner-card[_ngcontent-%COMP%]   .checks-grid[_ngcontent-%COMP%]   .check-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  background: #ffffff;\n  font-size: 0.82rem;\n}\n.health-banner-card[_ngcontent-%COMP%]   .checks-grid[_ngcontent-%COMP%]   .check-chip[_ngcontent-%COMP%]   .chip-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #94a3b8;\n}\n.health-banner-card[_ngcontent-%COMP%]   .checks-grid[_ngcontent-%COMP%]   .check-chip[_ngcontent-%COMP%]   .chip-name[_ngcontent-%COMP%] {\n  flex: 1;\n  font-weight: 700;\n  color: #334155;\n}\n.health-banner-card[_ngcontent-%COMP%]   .checks-grid[_ngcontent-%COMP%]   .check-chip[_ngcontent-%COMP%]   .chip-status[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 800;\n  letter-spacing: 0.04em;\n}\n.health-banner-card[_ngcontent-%COMP%]   .checks-grid[_ngcontent-%COMP%]   .check-chip.ok[_ngcontent-%COMP%] {\n  border-color: #bbf7d0;\n  background: #f0fdf4;\n}\n.health-banner-card[_ngcontent-%COMP%]   .checks-grid[_ngcontent-%COMP%]   .check-chip.ok[_ngcontent-%COMP%]   .chip-dot[_ngcontent-%COMP%] {\n  background: #10b981;\n  box-shadow: 0 0 6px #34d399;\n}\n.health-banner-card[_ngcontent-%COMP%]   .checks-grid[_ngcontent-%COMP%]   .check-chip.ok[_ngcontent-%COMP%]   .chip-status[_ngcontent-%COMP%] {\n  color: #166534;\n}\n.health-banner-card[_ngcontent-%COMP%]   .checks-grid[_ngcontent-%COMP%]   .check-chip.fail[_ngcontent-%COMP%] {\n  border-color: #fecaca;\n  background: #fef2f2;\n}\n.health-banner-card[_ngcontent-%COMP%]   .checks-grid[_ngcontent-%COMP%]   .check-chip.fail[_ngcontent-%COMP%]   .chip-dot[_ngcontent-%COMP%] {\n  background: #ef4444;\n}\n.health-banner-card[_ngcontent-%COMP%]   .checks-grid[_ngcontent-%COMP%]   .check-chip.fail[_ngcontent-%COMP%]   .chip-status[_ngcontent-%COMP%] {\n  color: #991b1b;\n}\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n}\n.ops-kpi-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 16px;\n  padding: 18px 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.03);\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease,\n    border-color 0.2s ease;\n}\n.ops-kpi-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.07);\n}\n.ops-kpi-card[_ngcontent-%COMP%]   .kpi-icon-wrap[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.35rem;\n  flex-shrink: 0;\n}\n.ops-kpi-card[_ngcontent-%COMP%]   .kpi-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.ops-kpi-card[_ngcontent-%COMP%]   .kpi-body[_ngcontent-%COMP%]   .kpi-label[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #64748b;\n}\n.ops-kpi-card[_ngcontent-%COMP%]   .kpi-body[_ngcontent-%COMP%]   .kpi-val[_ngcontent-%COMP%] {\n  font-size: 1.55rem;\n  font-weight: 800;\n  color: #0f172a;\n  line-height: 1.15;\n}\n.ops-kpi-card[_ngcontent-%COMP%]   .kpi-body[_ngcontent-%COMP%]   .kpi-sub[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #94a3b8;\n}\n.ops-kpi-card.danger-accent[_ngcontent-%COMP%] {\n  border-left: 4px solid #ef4444;\n}\n.ops-kpi-card.danger-accent[_ngcontent-%COMP%]   .kpi-icon-wrap[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #ef4444;\n}\n.ops-kpi-card.success-accent[_ngcontent-%COMP%] {\n  border-left: 4px solid #10b981;\n}\n.ops-kpi-card.success-accent[_ngcontent-%COMP%]   .kpi-icon-wrap[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #10b981;\n}\n.ops-kpi-card.warning-accent[_ngcontent-%COMP%] {\n  border-left: 4px solid #f59e0b;\n}\n.ops-kpi-card.warning-accent[_ngcontent-%COMP%]   .kpi-icon-wrap[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #f59e0b;\n}\n.ops-kpi-card.primary-accent[_ngcontent-%COMP%] {\n  border-left: 4px solid #064e3b;\n}\n.ops-kpi-card.primary-accent[_ngcontent-%COMP%]   .kpi-icon-wrap[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #064e3b;\n}\n.ops-kpi-card.info-accent[_ngcontent-%COMP%] {\n  border-left: 4px solid #0284c7;\n}\n.ops-kpi-card.info-accent[_ngcontent-%COMP%]   .kpi-icon-wrap[_ngcontent-%COMP%] {\n  background: #f0f9ff;\n  color: #0284c7;\n}\n.ops-kpi-card.purple-accent[_ngcontent-%COMP%] {\n  border-left: 4px solid #8b5cf6;\n}\n.ops-kpi-card.purple-accent[_ngcontent-%COMP%]   .kpi-icon-wrap[_ngcontent-%COMP%] {\n  background: #f5f3ff;\n  color: #8b5cf6;\n}\n.reports-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.reports-list[_ngcontent-%COMP%]   .report-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  padding: 12px 16px;\n  border-radius: 12px;\n  background: #f8fafc;\n  border: 1px solid #f1f5f9;\n  transition: background 0.15s ease;\n}\n.reports-list[_ngcontent-%COMP%]   .report-row[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n}\n.reports-list[_ngcontent-%COMP%]   .report-row[_ngcontent-%COMP%]   .report-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.reports-list[_ngcontent-%COMP%]   .report-row[_ngcontent-%COMP%]   .report-info[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  color: #059669;\n}\n.reports-list[_ngcontent-%COMP%]   .report-row[_ngcontent-%COMP%]   .report-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #0f172a;\n}\n.reports-list[_ngcontent-%COMP%]   .report-row[_ngcontent-%COMP%]   .report-info[_ngcontent-%COMP%]   .report-meta[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  color: #64748b;\n  margin-top: 2px;\n}\n.payment-ops-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.payment-ops-list[_ngcontent-%COMP%]   .payment-op-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 12px 16px;\n  border-radius: 12px;\n  background: #f8fafc;\n  border: 1px solid #f1f5f9;\n}\n.payment-ops-list[_ngcontent-%COMP%]   .payment-op-row[_ngcontent-%COMP%]   .payment-op-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.payment-ops-list[_ngcontent-%COMP%]   .payment-op-row[_ngcontent-%COMP%]   .payment-op-left[_ngcontent-%COMP%]   .booking-ref-badge[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 0.78rem;\n  font-weight: 700;\n  background: #e2e8f0;\n  color: #334155;\n  padding: 4px 8px;\n  border-radius: 6px;\n}\n.payment-ops-list[_ngcontent-%COMP%]   .payment-op-row[_ngcontent-%COMP%]   .payment-op-left[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n  color: #0f172a;\n}\n.payment-ops-list[_ngcontent-%COMP%]   .payment-op-row[_ngcontent-%COMP%]   .payment-op-left[_ngcontent-%COMP%]   .report-meta[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  color: #64748b;\n}\n.camera-viewport-card[_ngcontent-%COMP%] {\n  position: relative;\n  background: #0b1329;\n  border-radius: 16px;\n  overflow: hidden;\n  height: 240px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.6);\n}\n.camera-viewport-card[_ngcontent-%COMP%]   .camera-laser[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 20px;\n  right: 20px;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      #10b981 50%,\n      transparent);\n  box-shadow: 0 0 10px #10b981;\n  animation: _ngcontent-%COMP%_laserScan 2s ease-in-out infinite alternate;\n}\n.camera-viewport-card[_ngcontent-%COMP%]   .camera-frame[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  color: #64748b;\n  border: 2px dashed #10b981;\n  border-radius: 16px;\n  padding: 24px 32px;\n  background: rgba(16, 185, 129, 0.05);\n}\n.camera-viewport-card[_ngcontent-%COMP%]   .camera-frame[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.4rem;\n  color: #10b981;\n}\n.camera-viewport-card[_ngcontent-%COMP%]   .camera-frame[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #cbd5e1;\n  font-weight: 600;\n}\n.lookup-search-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  position: relative;\n}\n.lookup-search-bar[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 14px;\n  color: #94a3b8;\n  font-size: 1rem;\n  pointer-events: none;\n}\n.lookup-search-bar[_ngcontent-%COMP%]   .ops-input[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-left: 40px;\n}\n.verified-booking-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f0fdf4 0%,\n      #ecfdf5 100%);\n  border: 1px solid #86efac;\n  border-radius: 16px;\n  padding: 22px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  box-shadow: 0 6px 20px rgba(16, 185, 129, 0.08);\n}\n.verified-booking-card[_ngcontent-%COMP%]   .v-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid rgba(134, 239, 172, 0.5);\n}\n.verified-booking-card[_ngcontent-%COMP%]   .v-card-header[_ngcontent-%COMP%]   .pass-tag[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 800;\n  letter-spacing: 0.06em;\n  color: #065f46;\n  background: #d1fae5;\n  padding: 3px 8px;\n  border-radius: 6px;\n  display: inline-block;\n  margin-bottom: 4px;\n}\n.verified-booking-card[_ngcontent-%COMP%]   .v-card-header[_ngcontent-%COMP%]   .v-name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.15rem;\n  font-weight: 800;\n  color: #064e3b;\n}\n.verified-booking-card[_ngcontent-%COMP%]   .v-card-header[_ngcontent-%COMP%]   .v-contact[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #047857;\n  margin-top: 4px;\n}\n.verified-booking-card[_ngcontent-%COMP%]   .v-card-header[_ngcontent-%COMP%]   .v-amount[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: #065f46;\n}\n.verified-booking-card[_ngcontent-%COMP%]   .v-meta-matrix[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\n  gap: 12px;\n}\n.verified-booking-card[_ngcontent-%COMP%]   .v-meta-matrix[_ngcontent-%COMP%]   .v-meta-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.verified-booking-card[_ngcontent-%COMP%]   .v-meta-matrix[_ngcontent-%COMP%]   .v-meta-item[_ngcontent-%COMP%]   .v-label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: #047857;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.verified-booking-card[_ngcontent-%COMP%]   .v-meta-matrix[_ngcontent-%COMP%]   .v-meta-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #064e3b;\n}\n.verified-booking-card[_ngcontent-%COMP%]   .remainder-alert-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  background: #fffbeb;\n  border: 1px solid #fde68a;\n  border-radius: 12px;\n  padding: 12px 16px;\n}\n.verified-booking-card[_ngcontent-%COMP%]   .remainder-alert-card[_ngcontent-%COMP%]   .remainder-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.verified-booking-card[_ngcontent-%COMP%]   .remainder-alert-card[_ngcontent-%COMP%]   .remainder-left[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  color: #92400e;\n}\n.verified-booking-card[_ngcontent-%COMP%]   .remainder-alert-card[_ngcontent-%COMP%]   .remainder-left[_ngcontent-%COMP%]   .remainder-amt[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #b45309;\n}\n.verified-booking-card[_ngcontent-%COMP%]   .v-actions-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.arrival-feed-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.arrival-feed-list[_ngcontent-%COMP%]   .arrival-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  border-radius: 12px;\n  background: #f8fafc;\n  border: 1px solid #f1f5f9;\n}\n.arrival-feed-list[_ngcontent-%COMP%]   .arrival-item[_ngcontent-%COMP%]   .arrival-icon[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  color: #10b981;\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background: #ecfdf5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.arrival-feed-list[_ngcontent-%COMP%]   .arrival-item[_ngcontent-%COMP%]   .arrival-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.arrival-feed-list[_ngcontent-%COMP%]   .arrival-item[_ngcontent-%COMP%]   .arrival-content[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #0f172a;\n}\n.arrival-feed-list[_ngcontent-%COMP%]   .arrival-item[_ngcontent-%COMP%]   .arrival-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 2px 0 0;\n  font-size: 0.78rem;\n  color: #64748b;\n}\n.arrival-feed-list[_ngcontent-%COMP%]   .arrival-item[_ngcontent-%COMP%]   .arrival-time[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  font-weight: 700;\n  color: #94a3b8;\n}\n.weather-cards-stack[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.weather-cards-stack[_ngcontent-%COMP%]   .weather-station-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 16px 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.02);\n}\n.weather-cards-stack[_ngcontent-%COMP%]   .weather-station-card[_ngcontent-%COMP%]   .ws-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.weather-cards-stack[_ngcontent-%COMP%]   .weather-station-card[_ngcontent-%COMP%]   .ws-head[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.94rem;\n  color: #0f172a;\n}\n.weather-cards-stack[_ngcontent-%COMP%]   .weather-station-card[_ngcontent-%COMP%]   .ws-head[_ngcontent-%COMP%]   .ws-sub[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  color: #64748b;\n  margin-top: 2px;\n}\n.weather-cards-stack[_ngcontent-%COMP%]   .weather-station-card[_ngcontent-%COMP%]   .ws-head[_ngcontent-%COMP%]   .weather-temp-badge[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: #065f46;\n  background: #ecfdf5;\n  padding: 4px 10px;\n  border-radius: 10px;\n  border: 1px solid #a7f3d0;\n}\n.weather-cards-stack[_ngcontent-%COMP%]   .weather-station-card[_ngcontent-%COMP%]   .ws-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-top: 8px;\n  border-top: 1px solid #f1f5f9;\n  font-size: 0.78rem;\n}\n.weather-cards-stack[_ngcontent-%COMP%]   .weather-station-card[_ngcontent-%COMP%]   .ws-body[_ngcontent-%COMP%]   .ws-stat[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-weight: 600;\n}\n.gear-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 16px;\n}\n.gear-grid[_ngcontent-%COMP%]   .gear-item-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 16px;\n  padding: 18px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  box-shadow: 0 4px 14px rgba(15, 23, 42, 0.03);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.gear-grid[_ngcontent-%COMP%]   .gear-item-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 22px rgba(15, 23, 42, 0.06);\n}\n.gear-grid[_ngcontent-%COMP%]   .gear-item-card[_ngcontent-%COMP%]   .g-card-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 10px;\n}\n.gear-grid[_ngcontent-%COMP%]   .gear-item-card[_ngcontent-%COMP%]   .g-card-top[_ngcontent-%COMP%]   .g-name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.98rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.gear-grid[_ngcontent-%COMP%]   .gear-item-card[_ngcontent-%COMP%]   .g-card-top[_ngcontent-%COMP%]   .g-category-chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: #475569;\n  background: #f1f5f9;\n  padding: 3px 8px;\n  border-radius: 6px;\n  margin-top: 4px;\n}\n.gear-grid[_ngcontent-%COMP%]   .gear-item-card[_ngcontent-%COMP%]   .g-card-top[_ngcontent-%COMP%]   .g-condition-pill[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 800;\n  padding: 3px 8px;\n  border-radius: 12px;\n  white-space: nowrap;\n}\n.gear-grid[_ngcontent-%COMP%]   .gear-item-card[_ngcontent-%COMP%]   .g-card-top[_ngcontent-%COMP%]   .g-condition-pill.condition-excellent[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.gear-grid[_ngcontent-%COMP%]   .gear-item-card[_ngcontent-%COMP%]   .g-card-top[_ngcontent-%COMP%]   .g-condition-pill.condition-good[_ngcontent-%COMP%] {\n  background: #e0f2fe;\n  color: #075985;\n}\n.gear-grid[_ngcontent-%COMP%]   .gear-item-card[_ngcontent-%COMP%]   .g-card-top[_ngcontent-%COMP%]   .g-condition-pill.condition-fair[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.gear-grid[_ngcontent-%COMP%]   .gear-item-card[_ngcontent-%COMP%]   .g-card-top[_ngcontent-%COMP%]   .g-condition-pill.condition-maintenance[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.gear-grid[_ngcontent-%COMP%]   .gear-item-card[_ngcontent-%COMP%]   .g-stock-gauge[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.gear-grid[_ngcontent-%COMP%]   .gear-item-card[_ngcontent-%COMP%]   .g-stock-gauge[_ngcontent-%COMP%]   .g-gauge-labels[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.76rem;\n  font-weight: 700;\n  color: #64748b;\n}\n.gear-grid[_ngcontent-%COMP%]   .gear-item-card[_ngcontent-%COMP%]   .g-stock-gauge[_ngcontent-%COMP%]   .g-gauge-track[_ngcontent-%COMP%] {\n  height: 8px;\n  border-radius: 4px;\n  background: #e2e8f0;\n  overflow: hidden;\n}\n.gear-grid[_ngcontent-%COMP%]   .gear-item-card[_ngcontent-%COMP%]   .g-stock-gauge[_ngcontent-%COMP%]   .g-gauge-track[_ngcontent-%COMP%]   .g-gauge-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      #10b981,\n      #059669);\n  transition: width 0.3s ease;\n}\n.gear-grid[_ngcontent-%COMP%]   .gear-item-card[_ngcontent-%COMP%]   .g-card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 10px;\n  border-top: 1px solid #f1f5f9;\n}\n.gear-grid[_ngcontent-%COMP%]   .gear-item-card[_ngcontent-%COMP%]   .g-card-footer[_ngcontent-%COMP%]   .g-rate[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 800;\n  color: #065f46;\n}\n.gear-grid[_ngcontent-%COMP%]   .gear-item-card[_ngcontent-%COMP%]   .g-card-footer[_ngcontent-%COMP%]   .g-rate[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #94a3b8;\n  font-weight: 600;\n}\n.gear-grid[_ngcontent-%COMP%]   .gear-item-card[_ngcontent-%COMP%]   .g-card-footer[_ngcontent-%COMP%]   .g-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.gear-grid[_ngcontent-%COMP%]   .gear-item-card[_ngcontent-%COMP%]   .g-card-footer[_ngcontent-%COMP%]   .g-actions[_ngcontent-%COMP%]   .btn-icon-action[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  border: 1px solid #e2e8f0;\n  background: #ffffff;\n  color: #64748b;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 0.84rem;\n  transition: all 0.15s ease;\n}\n.gear-grid[_ngcontent-%COMP%]   .gear-item-card[_ngcontent-%COMP%]   .g-card-footer[_ngcontent-%COMP%]   .g-actions[_ngcontent-%COMP%]   .btn-icon-action[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n.gear-grid[_ngcontent-%COMP%]   .gear-item-card[_ngcontent-%COMP%]   .g-card-footer[_ngcontent-%COMP%]   .g-actions[_ngcontent-%COMP%]   .btn-icon-action.danger[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n  border-color: #fecaca;\n  color: #ef4444;\n}\n.pnl-hero-banner[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #0f172a 0%,\n      #1e293b 100%);\n  border-radius: 18px;\n  padding: 22px 26px;\n  color: #ffffff;\n  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.2);\n}\n.pnl-hero-banner[_ngcontent-%COMP%]   .pnl-tile[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.pnl-hero-banner[_ngcontent-%COMP%]   .pnl-tile[_ngcontent-%COMP%]   .pnl-label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #94a3b8;\n}\n.pnl-hero-banner[_ngcontent-%COMP%]   .pnl-tile[_ngcontent-%COMP%]   .pnl-val[_ngcontent-%COMP%] {\n  font-size: 1.55rem;\n  font-weight: 800;\n  color: #ffffff;\n  line-height: 1.15;\n}\n.pnl-hero-banner[_ngcontent-%COMP%]   .pnl-tile[_ngcontent-%COMP%]   .pnl-sub[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #64748b;\n}\n.expense-table-wrap[_ngcontent-%COMP%], \n.batch-matrix-table-wrap[_ngcontent-%COMP%], \n.crm-table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n}\n.ops-data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  text-align: left;\n}\n.ops-data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.ops-data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  font-size: 0.84rem;\n}\n.ops-data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  color: #64748b;\n  font-weight: 700;\n  text-transform: uppercase;\n  font-size: 0.72rem;\n  letter-spacing: 0.04em;\n  border-bottom: 1px solid #e2e8f0;\n}\n.ops-data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f1f5f9;\n  color: #334155;\n}\n.ops-data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.ops-data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.ops-data-table[_ngcontent-%COMP%]   .category-pill[_ngcontent-%COMP%], \n.ops-data-table[_ngcontent-%COMP%]   .mode-pill[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 0.72rem;\n  font-weight: 700;\n  padding: 3px 8px;\n  border-radius: 6px;\n  background: #f1f5f9;\n  color: #475569;\n}\n.journey-type-selector[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.journey-type-selector[_ngcontent-%COMP%]   .journey-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 14px 18px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  background: #ffffff;\n  text-align: left;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.journey-type-selector[_ngcontent-%COMP%]   .journey-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #64748b;\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  background: #f8fafc;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.journey-type-selector[_ngcontent-%COMP%]   .journey-btn[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.9rem;\n  color: #0f172a;\n}\n.journey-type-selector[_ngcontent-%COMP%]   .journey-btn[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.74rem;\n  color: #64748b;\n  margin-top: 2px;\n}\n.journey-type-selector[_ngcontent-%COMP%]   .journey-btn[_ngcontent-%COMP%]:hover {\n  border-color: #cbd5e1;\n  background: #f8fafc;\n}\n.journey-type-selector[_ngcontent-%COMP%]   .journey-btn.active[_ngcontent-%COMP%] {\n  border-color: #25d366;\n  background: #f0fdf4;\n}\n.journey-type-selector[_ngcontent-%COMP%]   .journey-btn.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background: #25d366;\n  color: #ffffff;\n}\n.journey-type-selector[_ngcontent-%COMP%]   .journey-btn.active[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #166534;\n}\n.phone-frame-mockup[_ngcontent-%COMP%] {\n  background: #efeae2;\n  border-radius: 20px;\n  overflow: hidden;\n  border: 4px solid #1f2937;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);\n}\n.phone-frame-mockup[_ngcontent-%COMP%]   .wa-header[_ngcontent-%COMP%] {\n  background: #075e54;\n  color: #ffffff;\n  padding: 12px 16px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.phone-frame-mockup[_ngcontent-%COMP%]   .wa-header[_ngcontent-%COMP%]   .wa-avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: #128c7e;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n}\n.phone-frame-mockup[_ngcontent-%COMP%]   .wa-header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.88rem;\n}\n.phone-frame-mockup[_ngcontent-%COMP%]   .wa-header[_ngcontent-%COMP%]   .wa-online-status[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #a7f3d0;\n}\n.phone-frame-mockup[_ngcontent-%COMP%]   .wa-chat-canvas[_ngcontent-%COMP%] {\n  padding: 18px 16px;\n  min-height: 260px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.phone-frame-mockup[_ngcontent-%COMP%]   .wa-chat-canvas[_ngcontent-%COMP%]   .wa-bubble-msg[_ngcontent-%COMP%] {\n  max-width: 90%;\n  background: #ffffff;\n  border-radius: 12px;\n  border-top-left-radius: 2px;\n  padding: 12px 14px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n  animation: _ngcontent-%COMP%_slideFadeIn 0.2s ease-out;\n}\n.phone-frame-mockup[_ngcontent-%COMP%]   .wa-chat-canvas[_ngcontent-%COMP%]   .wa-bubble-msg[_ngcontent-%COMP%]   .wa-text[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  line-height: 1.5;\n  color: #111b21;\n}\n.phone-frame-mockup[_ngcontent-%COMP%]   .wa-chat-canvas[_ngcontent-%COMP%]   .wa-bubble-msg[_ngcontent-%COMP%]   .wa-msg-time[_ngcontent-%COMP%] {\n  display: block;\n  text-align: right;\n  font-size: 0.68rem;\n  color: #667781;\n  margin-top: 4px;\n}\n.slot-progress-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 180px;\n}\n.slot-progress-wrap[_ngcontent-%COMP%]   .slot-text[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.74rem;\n  font-weight: 700;\n  color: #64748b;\n}\n.slot-progress-wrap[_ngcontent-%COMP%]   .slot-track[_ngcontent-%COMP%] {\n  height: 6px;\n  border-radius: 3px;\n  background: #e2e8f0;\n  overflow: hidden;\n}\n.slot-progress-wrap[_ngcontent-%COMP%]   .slot-track[_ngcontent-%COMP%]   .slot-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 3px;\n  background: #059669;\n}\n.guides-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n  gap: 16px;\n}\n.guides-grid[_ngcontent-%COMP%]   .vendor-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 16px 18px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.02);\n}\n.guides-grid[_ngcontent-%COMP%]   .vendor-card[_ngcontent-%COMP%]   .v-avatar[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background: #ecfdf5;\n  color: #059669;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.3rem;\n  flex-shrink: 0;\n}\n.guides-grid[_ngcontent-%COMP%]   .vendor-card[_ngcontent-%COMP%]   .v-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.guides-grid[_ngcontent-%COMP%]   .vendor-card[_ngcontent-%COMP%]   .v-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n  color: #0f172a;\n}\n.guides-grid[_ngcontent-%COMP%]   .vendor-card[_ngcontent-%COMP%]   .v-info[_ngcontent-%COMP%]   .v-role[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  color: #64748b;\n  margin-top: 2px;\n}\n.guides-grid[_ngcontent-%COMP%]   .vendor-card[_ngcontent-%COMP%]   .v-info[_ngcontent-%COMP%]   .v-phone[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  color: #059669;\n  margin-top: 2px;\n}\n.audit-log-stream[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  max-height: 460px;\n  overflow-y: auto;\n}\n.audit-log-stream[_ngcontent-%COMP%]   .audit-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 12px 14px;\n  border-radius: 12px;\n  background: #f8fafc;\n  border: 1px solid #f1f5f9;\n}\n.audit-log-stream[_ngcontent-%COMP%]   .audit-item[_ngcontent-%COMP%]   .audit-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #059669;\n  margin-top: 6px;\n  flex-shrink: 0;\n}\n.audit-log-stream[_ngcontent-%COMP%]   .audit-item[_ngcontent-%COMP%]   .audit-body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.audit-log-stream[_ngcontent-%COMP%]   .audit-item[_ngcontent-%COMP%]   .audit-body[_ngcontent-%COMP%]   .audit-actor-row[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #64748b;\n}\n.audit-log-stream[_ngcontent-%COMP%]   .audit-item[_ngcontent-%COMP%]   .audit-body[_ngcontent-%COMP%]   .audit-actor-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n}\n.audit-log-stream[_ngcontent-%COMP%]   .audit-item[_ngcontent-%COMP%]   .audit-body[_ngcontent-%COMP%]   .audit-actor-row[_ngcontent-%COMP%]   .audit-time[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #94a3b8;\n}\n.audit-log-stream[_ngcontent-%COMP%]   .audit-item[_ngcontent-%COMP%]   .audit-body[_ngcontent-%COMP%]   .audit-action[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 0.84rem;\n  color: #334155;\n  line-height: 1.4;\n}\n.audit-log-stream[_ngcontent-%COMP%]   .audit-item[_ngcontent-%COMP%]   .audit-body[_ngcontent-%COMP%]   .audit-entity-tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 4px;\n  font-size: 0.7rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #64748b;\n  background: #e2e8f0;\n  padding: 2px 6px;\n  border-radius: 4px;\n}\n.btn-ops-action[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 9px 18px;\n  border-radius: 11px;\n  border: 1px solid transparent;\n  font-size: 0.84rem;\n  font-weight: 700;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: all 0.18s ease;\n}\n.btn-ops-action.primary[_ngcontent-%COMP%] {\n  background: #064e3b;\n  color: #ffffff;\n  box-shadow: 0 4px 12px rgba(6, 78, 59, 0.2);\n}\n.btn-ops-action.primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #047857;\n  transform: translateY(-1px);\n}\n.btn-ops-action.secondary[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-color: #cbd5e1;\n  color: #334155;\n}\n.btn-ops-action.secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n.btn-ops-action.success[_ngcontent-%COMP%] {\n  background: #059669;\n  color: #ffffff;\n}\n.btn-ops-action.success[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #10b981;\n}\n.btn-ops-action.danger[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: #ffffff;\n}\n.btn-ops-action.danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #dc2626;\n}\n.btn-ops-action.ghost[_ngcontent-%COMP%] {\n  background: transparent;\n  border-color: #e2e8f0;\n  color: #64748b;\n}\n.btn-ops-action.ghost[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n.btn-ops-action[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.ops-form-flow[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.ops-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.ops-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: #475569;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.ops-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .req[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.ops-row-2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.ops-input[_ngcontent-%COMP%], \n.ops-select[_ngcontent-%COMP%], \n.ops-textarea[_ngcontent-%COMP%], \n.modern-input[_ngcontent-%COMP%], \n.modern-select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 14px;\n  border-radius: 11px;\n  border: 1px solid #cbd5e1;\n  background: #ffffff;\n  font-size: 0.88rem;\n  color: #0f172a;\n  outline: none;\n  font-family: inherit;\n  transition: all 0.15s ease;\n}\n.ops-input[_ngcontent-%COMP%]:focus, \n.ops-select[_ngcontent-%COMP%]:focus, \n.ops-textarea[_ngcontent-%COMP%]:focus, \n.modern-input[_ngcontent-%COMP%]:focus, \n.modern-select[_ngcontent-%COMP%]:focus {\n  border-color: #059669;\n  box-shadow: 0 0 0 3px rgba(5, 150, 105, 0.12);\n}\n.password-input-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.password-input-wrap[_ngcontent-%COMP%]   .btn-toggle-pw[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  color: #94a3b8;\n  cursor: pointer;\n  font-size: 1.1rem;\n}\n.password-input-wrap[_ngcontent-%COMP%]   .btn-toggle-pw[_ngcontent-%COMP%]:hover {\n  color: #0f172a;\n}\n.form-footer-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding-top: 10px;\n  border-top: 1px solid #f1f5f9;\n}\n.form-footer-actions[_ngcontent-%COMP%]   .channel-hint[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #64748b;\n}\n.form-footer-actions[_ngcontent-%COMP%]   .channel-hint[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n}\n.form-footer-actions[_ngcontent-%COMP%]   .btn-group-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.status-pill-sub[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.74rem;\n  font-weight: 800;\n  padding: 4px 10px;\n  border-radius: 12px;\n}\n.status-pill-sub.success[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.status-pill-sub.warning[_ngcontent-%COMP%], \n.status-pill-sub.pending[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.status-pill-sub.danger[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.priority-pill[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 800;\n  padding: 3px 8px;\n  border-radius: 6px;\n  text-transform: uppercase;\n}\n.priority-pill.urgent[_ngcontent-%COMP%], \n.priority-pill.high[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.priority-pill.medium[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.priority-pill.low[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n}\n.count-tag[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  font-weight: 800;\n  background: #f1f5f9;\n  color: #475569;\n  padding: 4px 10px;\n  border-radius: 20px;\n}\n.ops-toast[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-radius: 12px;\n  font-size: 0.84rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.ops-toast.success[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  border: 1px solid #86efac;\n  color: #166534;\n}\n.ops-toast.error[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  border: 1px solid #fecaca;\n  color: #991b1b;\n}\n.ops-empty-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 36px 20px;\n  color: #94a3b8;\n}\n.ops-empty-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.8rem;\n  color: #cbd5e1;\n  margin-bottom: 8px;\n}\n.ops-empty-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #475569;\n}\n.ops-empty-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 0.8rem;\n  max-width: 320px;\n}\n.ops-empty-alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  color: #64748b;\n  font-size: 0.84rem;\n}\n.modal-backdrop-custom[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.6);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n  padding: 16px;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease-out;\n}\n.modal-backdrop-custom[_ngcontent-%COMP%]   .modal-dialog-custom[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 20px;\n  width: 100%;\n  max-width: 540px;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_slideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.modal-backdrop-custom[_ngcontent-%COMP%]   .modal-dialog-custom[_ngcontent-%COMP%]   .modal-header-custom[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid #f1f5f9;\n}\n.modal-backdrop-custom[_ngcontent-%COMP%]   .modal-dialog-custom[_ngcontent-%COMP%]   .modal-header-custom[_ngcontent-%COMP%]   .modal-title-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.modal-backdrop-custom[_ngcontent-%COMP%]   .modal-dialog-custom[_ngcontent-%COMP%]   .modal-header-custom[_ngcontent-%COMP%]   .modal-title-wrap[_ngcontent-%COMP%]   .modal-avatar[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  background: #ecfdf5;\n  color: #059669;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.3rem;\n}\n.modal-backdrop-custom[_ngcontent-%COMP%]   .modal-dialog-custom[_ngcontent-%COMP%]   .modal-header-custom[_ngcontent-%COMP%]   .modal-title-wrap[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.modal-backdrop-custom[_ngcontent-%COMP%]   .modal-dialog-custom[_ngcontent-%COMP%]   .modal-header-custom[_ngcontent-%COMP%]   .modal-title-wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 2px 0 0;\n  font-size: 0.78rem;\n  color: #64748b;\n}\n.modal-backdrop-custom[_ngcontent-%COMP%]   .modal-dialog-custom[_ngcontent-%COMP%]   .modal-header-custom[_ngcontent-%COMP%]   .btn-close-custom[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #64748b;\n}\n.modal-backdrop-custom[_ngcontent-%COMP%]   .modal-dialog-custom[_ngcontent-%COMP%]   .modal-header-custom[_ngcontent-%COMP%]   .btn-close-custom[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n.modal-backdrop-custom[_ngcontent-%COMP%]   .modal-dialog-custom[_ngcontent-%COMP%]   .modal-body-custom[_ngcontent-%COMP%] {\n  padding: 22px 24px;\n}\n.modal-backdrop-custom[_ngcontent-%COMP%]   .modal-dialog-custom[_ngcontent-%COMP%]   .modal-body-custom[_ngcontent-%COMP%]   .modal-form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.modal-backdrop-custom[_ngcontent-%COMP%]   .modal-dialog-custom[_ngcontent-%COMP%]   .modal-body-custom[_ngcontent-%COMP%]   .modal-form-grid[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.modal-backdrop-custom[_ngcontent-%COMP%]   .modal-dialog-custom[_ngcontent-%COMP%]   .modal-body-custom[_ngcontent-%COMP%]   .modal-form-grid[_ngcontent-%COMP%]   .form-field.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.modal-backdrop-custom[_ngcontent-%COMP%]   .modal-dialog-custom[_ngcontent-%COMP%]   .modal-body-custom[_ngcontent-%COMP%]   .modal-form-grid[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  font-weight: 700;\n  color: #475569;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.modal-backdrop-custom[_ngcontent-%COMP%]   .modal-dialog-custom[_ngcontent-%COMP%]   .modal-body-custom[_ngcontent-%COMP%]   .modal-form-grid[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .req[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.modal-backdrop-custom[_ngcontent-%COMP%]   .modal-dialog-custom[_ngcontent-%COMP%]   .modal-footer-custom[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  background: #f8fafc;\n  border-top: 1px solid #f1f5f9;\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n}\n.modal-backdrop-custom[_ngcontent-%COMP%]   .modal-dialog-custom[_ngcontent-%COMP%]   .modal-footer-custom[_ngcontent-%COMP%]   .btn-action-ghost[_ngcontent-%COMP%] {\n  padding: 9px 18px;\n  border-radius: 10px;\n  border: 1px solid #cbd5e1;\n  background: #ffffff;\n  color: #475569;\n  font-weight: 700;\n  cursor: pointer;\n}\n.modal-backdrop-custom[_ngcontent-%COMP%]   .modal-dialog-custom[_ngcontent-%COMP%]   .modal-footer-custom[_ngcontent-%COMP%]   .btn-action-ghost[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n.modal-backdrop-custom[_ngcontent-%COMP%]   .modal-dialog-custom[_ngcontent-%COMP%]   .modal-footer-custom[_ngcontent-%COMP%]   .btn-gradient-primary[_ngcontent-%COMP%] {\n  padding: 9px 20px;\n  border-radius: 10px;\n  border: none;\n  background: #064e3b;\n  color: #ffffff;\n  font-weight: 800;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n.modal-backdrop-custom[_ngcontent-%COMP%]   .modal-dialog-custom[_ngcontent-%COMP%]   .modal-footer-custom[_ngcontent-%COMP%]   .btn-gradient-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #047857;\n}\n.modal-backdrop-custom[_ngcontent-%COMP%]   .modal-dialog-custom[_ngcontent-%COMP%]   .modal-footer-custom[_ngcontent-%COMP%]   .btn-gradient-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.text-emerald[_ngcontent-%COMP%] {\n  color: #059669 !important;\n}\n.text-danger[_ngcontent-%COMP%] {\n  color: #ef4444 !important;\n}\n.text-success[_ngcontent-%COMP%] {\n  color: #10b981 !important;\n}\n.text-warning[_ngcontent-%COMP%] {\n  color: #f59e0b !important;\n}\n.text-primary[_ngcontent-%COMP%] {\n  color: #064e3b !important;\n}\n.text-blue[_ngcontent-%COMP%] {\n  color: #0284c7 !important;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #64748b !important;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_beaconWave {\n  0% {\n    transform: scale(0.9);\n    opacity: 0.9;\n  }\n  50% {\n    transform: scale(1.6);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1.6);\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_laserScan {\n  0% {\n    top: 20px;\n  }\n  100% {\n    top: 210px;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideFadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(16px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=operations-center.component.css.map */'] });
var OperationsCenterComponent = _OperationsCenterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OperationsCenterComponent, [{
    type: Component,
    args: [{ selector: "app-operations-center", standalone: true, imports: [CommonModule, FormsModule, AdminShellComponent], schemas: [CUSTOM_ELEMENTS_SCHEMA], template: `<div class="ops-page">
  <app-admin-shell
    sectionLabel="Command & Control"
    title="Operations Control Center"
    subtitle="Mission-critical operations, real-time telemetry, basecamp manifests, trail safety, batch financials & expedition logistics.">

    <!-- \u2500\u2500\u2500 Live Command Center Telemetry Hero \u2500\u2500\u2500 -->
    <div class="ops-hero-banner">
      <div class="hero-left">
        <div class="live-pulse-beacon">
          <span class="beacon-core"></span>
          <span class="beacon-ring"></span>
        </div>
        <div class="hero-titles">
          <div class="hero-badge-row">
            <span class="ops-live-pill"><i class="bi bi-broadcast"></i> LIVE TELEMETRY</span>
            <span class="ops-health-pill"><i class="bi bi-shield-check"></i> ALL SYSTEMS OPERATIONAL</span>
          </div>
          <h2 class="hero-heading">Expedition Command &amp; Basecamp Operations</h2>
          <p class="hero-subtext">Real-time control desk for departures, trekker check-ins, weather safety, gear inventory &amp; financials.</p>
        </div>
      </div>

      <div class="hero-right">
        <div class="sync-info-box" *ngIf="lastSyncedAt">
          <i class="bi bi-clock-history"></i>
          <div>
            <span class="sync-label">Last Synced</span>
            <strong>{{ lastSyncedAt }}</strong>
          </div>
        </div>
        <button
          type="button"
          class="btn-ops-sync"
          [class.is-syncing]="loading"
          (click)="loadOperationsData()"
          [disabled]="loading"
          title="Refresh All Operations Data">
          <i class="bi bi-arrow-repeat"></i>
          <span>{{ loading ? 'Syncing...' : 'Sync Live Ops' }}</span>
        </button>
      </div>
    </div>

    <!-- \u2500\u2500\u2500 Segmented Navigation Tab Bar \u2500\u2500\u2500 -->
    <div class="ops-nav-container">
      <nav class="ops-nav-tabs" role="tablist">
        <button
          type="button"
          class="nav-tab-btn"
          [class.active]="activeTab === 'overview'"
          (click)="setActiveTab('overview')">
          <i class="bi bi-speedometer2"></i>
          <span>Overview</span>
        </button>

        <button
          type="button"
          class="nav-tab-btn"
          [class.active]="activeTab === 'checkin'"
          (click)="setActiveTab('checkin')">
          <i class="bi bi-qr-code-scan"></i>
          <span>Basecamp Check-in</span>
        </button>

        <button
          type="button"
          class="nav-tab-btn"
          [class.active]="activeTab === 'advisory'"
          (click)="setActiveTab('advisory')">
          <i class="bi bi-cloud-lightning-rain-fill"></i>
          <span>Trail &amp; Weather</span>
        </button>

        <button
          type="button"
          class="nav-tab-btn"
          [class.active]="activeTab === 'gear'"
          (click)="setActiveTab('gear')">
          <i class="bi bi-backpack4-fill"></i>
          <span>Gear Inventory</span>
        </button>

        <button
          type="button"
          class="nav-tab-btn"
          [class.active]="activeTab === 'pnl'"
          (click)="setActiveTab('pnl')">
          <i class="bi bi-calculator-fill"></i>
          <span>Batch P&amp;L</span>
        </button>

        <button
          type="button"
          class="nav-tab-btn"
          [class.active]="activeTab === 'royalty'"
          (click)="setActiveTab('royalty'); loadForestRoyaltyLedger()">
          <i class="bi bi-bank2"></i>
          <span>Forest Dept Royalty</span>
        </button>

        <button
          type="button"
          class="nav-tab-btn"
          [class.active]="activeTab === 'journey'"
          (click)="setActiveTab('journey')">
          <i class="bi bi-whatsapp"></i>
          <span>WhatsApp Journey</span>
        </button>

        <button
          type="button"
          class="nav-tab-btn"
          [class.active]="activeTab === 'inventory'"
          (click)="setActiveTab('inventory')">
          <i class="bi bi-layers-fill"></i>
          <span>Batch Matrix</span>
        </button>

        <button
          type="button"
          class="nav-tab-btn"
          [class.active]="activeTab === 'logistics'"
          (click)="setActiveTab('logistics')">
          <i class="bi bi-truck-front-fill"></i>
          <span>Logistics &amp; Guides</span>
        </button>

        <button
          type="button"
          class="nav-tab-btn"
          [class.active]="activeTab === 'crm'"
          (click)="setActiveTab('crm')">
          <i class="bi bi-headset"></i>
          <span>CRM &amp; Inquiries</span>
        </button>

        <button
          type="button"
          class="nav-tab-btn"
          [class.active]="activeTab === 'rbac'"
          (click)="setActiveTab('rbac')">
          <i class="bi bi-shield-lock-fill"></i>
          <span>Access &amp; RBAC</span>
        </button>
      </nav>
    </div>

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
         TAB 1: Overview & Telemetry
    \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <div *ngIf="activeTab === 'overview'" class="tab-pane-content">
      <!-- Connectivity & Health Grid -->
      <div class="ops-card health-banner-card">
        <div class="card-head-row">
          <div class="card-title-group">
            <i class="bi bi-hdd-network-fill text-emerald"></i>
            <div>
              <h3>Core Infrastructure Connectivity</h3>
              <p>Continuous ping diagnostics across distributed microservices.</p>
            </div>
          </div>
          <span class="health-badge success"><i class="bi bi-check-circle-fill"></i> All Services Green</span>
        </div>

        <div class="checks-grid" *ngIf="apiChecks.length">
          <div class="check-chip" *ngFor="let c of apiChecks" [class.ok]="c.ok" [class.fail]="!c.ok">
            <div class="chip-dot"></div>
            <span class="chip-name">{{ c.name }}</span>
            <strong class="chip-status">{{ c.ok ? 'ONLINE' : 'OFFLINE' }}</strong>
          </div>
        </div>
      </div>

      <!-- Real-Time KPI Metric Cards -->
      <div class="kpi-grid">
        <div class="ops-kpi-card danger-accent">
          <div class="kpi-icon-wrap"><i class="bi bi-exclamation-octagon-fill"></i></div>
          <div class="kpi-body">
            <span class="kpi-label">Failed Payments</span>
            <div class="kpi-val text-danger">{{ failedPayments }}</div>
            <span class="kpi-sub text-muted">Awaiting manual reconciliation</span>
          </div>
        </div>

        <div class="ops-kpi-card success-accent">
          <div class="kpi-icon-wrap"><i class="bi bi-shield-check"></i></div>
          <div class="kpi-body">
            <span class="kpi-label">Compliance Completion</span>
            <div class="kpi-val text-success">{{ complianceCompletion }}%</div>
            <span class="kpi-sub text-muted">Manifest &amp; ID verified</span>
          </div>
        </div>

        <div class="ops-kpi-card warning-accent">
          <div class="kpi-icon-wrap"><i class="bi bi-chat-left-dots-fill"></i></div>
          <div class="kpi-body">
            <span class="kpi-label">Open Support Inquiries</span>
            <div class="kpi-val text-warning">{{ openTicketCount }}</div>
            <span class="kpi-sub text-muted">Escalations in queue</span>
          </div>
        </div>

        <div class="ops-kpi-card primary-accent">
          <div class="kpi-icon-wrap"><i class="bi bi-currency-rupee"></i></div>
          <div class="kpi-body">
            <span class="kpi-label">Total Booking Revenue</span>
            <div class="kpi-val text-primary">\u20B9{{ totalRevenue | number:'1.0-0' }}</div>
            <span class="kpi-sub text-muted">Gross platform volume</span>
          </div>
        </div>

        <div class="ops-kpi-card info-accent">
          <div class="kpi-icon-wrap"><i class="bi bi-ticket-detailed-fill"></i></div>
          <div class="kpi-body">
            <span class="kpi-label">Confirmed Bookings</span>
            <div class="kpi-val">{{ totalBookings }}</div>
            <span class="kpi-sub text-muted">Processed transactions</span>
          </div>
        </div>

        <div class="ops-kpi-card purple-accent">
          <div class="kpi-icon-wrap"><i class="bi bi-people-fill"></i></div>
          <div class="kpi-body">
            <span class="kpi-label">Active Trekkers</span>
            <div class="kpi-val">{{ totalUsers }}</div>
            <span class="kpi-sub text-muted">Registered community</span>
          </div>
        </div>
      </div>

      <!-- Reports & Payment Operations Split -->
      <div class="ops-split-grid">
        <div class="ops-card">
          <div class="card-head-row">
            <div class="card-title-group">
              <i class="bi bi-file-earmark-spreadsheet-fill text-emerald"></i>
              <div>
                <h3>Reports &amp; Data Exports</h3>
                <p>Download audited registers in CSV / XLSX format.</p>
              </div>
            </div>
          </div>

          <div class="reports-list">
            <div class="report-row" *ngFor="let report of reports">
              <div class="report-info">
                <div class="report-icon"><i class="bi bi-filetype-csv"></i></div>
                <div>
                  <strong>{{ report.name }}</strong>
                  <div class="report-meta">Format: {{ report.format }} &bull; Generated: {{ report.lastGenerated }}</div>
                </div>
              </div>
              <button type="button" class="btn-ops-action ghost" (click)="exportReport(report)">
                <i class="bi bi-download"></i>
                <span>Download {{ report.format }}</span>
              </button>
            </div>
          </div>
        </div>

        <div class="ops-card">
          <div class="card-head-row">
            <div class="card-title-group">
              <i class="bi bi-credit-card-2-front-fill text-blue"></i>
              <div>
                <h3>Payment Settlement &amp; Gateways</h3>
                <p>Live transaction health &amp; settlement reconciliation.</p>
              </div>
            </div>
          </div>

          <div class="payment-ops-list">
            <div class="payment-op-row" *ngFor="let p of paymentOps">
              <div class="payment-op-left">
                <code class="booking-ref-badge">#{{ p.bookingId }}</code>
                <div>
                  <strong>\u20B9{{ p.amount | number:'1.0-0' }}</strong>
                  <div class="report-meta">{{ p.mode }} &bull; {{ p.status }}</div>
                </div>
              </div>
              <span class="status-pill-sub" [class.success]="p.reconcile === 'Reconciled'" [class.pending]="p.reconcile !== 'Reconciled'">
                {{ p.reconcile }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
         TAB 2: Basecamp QR Scanner & Check-in
    \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <div *ngIf="activeTab === 'checkin'" class="tab-pane-content">
      <div class="ops-split-grid checkin-grid">
        <!-- Scanner & Verification Column -->
        <div class="ops-card">
          <div class="card-head-row">
            <div class="card-title-group">
              <i class="bi bi-qr-code-scan text-emerald"></i>
              <div>
                <h3>Basecamp Check-in Desk</h3>
                <p>Scan mobile QR pass or search reference to verify guest permits.</p>
              </div>
            </div>
            <button
              type="button"
              class="btn-ops-action"
              [ngClass]="isCameraActive ? 'danger' : 'primary'"
              (click)="toggleCameraScanner()">
              <i class="bi" [ngClass]="isCameraActive ? 'bi-camera-video-off' : 'bi-camera-video'"></i>
              <span>{{ isCameraActive ? 'Stop Camera' : 'Start QR Camera' }}</span>
            </button>
          </div>

          <!-- Live / Simulated Camera Viewport -->
          <div class="camera-viewport-card" *ngIf="isCameraActive">
            <div class="camera-laser"></div>
            <div class="camera-frame">
              <i class="bi bi-qr-code"></i>
              <span>Align Trekker Mobile Pass QR within frame</span>
            </div>
          </div>

          <!-- Search Input Toolbar -->
          <div class="lookup-search-bar">
            <i class="bi bi-search search-icon"></i>
            <input
              type="text"
              class="ops-input"
              placeholder="Search Booking ID (e.g. 104), customer name, or phone..."
              [(ngModel)]="scannerQuery"
              (ngModelChange)="searchCheckin($event)" />
            <button class="btn-ops-action secondary" type="button" (click)="searchCheckin(scannerQuery)">Look up</button>
            <button *ngIf="scannerQuery || foundBooking" class="btn-ops-action danger" type="button" (click)="clearScanner()">Clear</button>
          </div>

          <!-- Match Result Card -->
          <div class="verified-booking-card" *ngIf="foundBooking">
            <div class="v-card-header">
              <div>
                <span class="pass-tag">DIGITAL PASS #GWK-{{ foundBooking.id }}</span>
                <h4 class="v-name">{{ foundBooking.customer_name || foundBooking.customerName }}</h4>
                <div class="v-contact">
                  <i class="bi bi-envelope"></i> {{ foundBooking.customer_email || foundBooking.email }} &bull;
                  <i class="bi bi-telephone"></i> {{ foundBooking.customer_phone || foundBooking.phone }}
                </div>
              </div>
              <div class="text-end">
                <span class="status-pill-sub" [class.success]="isCheckedIn" [class.warning]="!isCheckedIn">
                  <i class="bi" [ngClass]="isCheckedIn ? 'bi-check-circle-fill' : 'bi-clock-history'"></i>
                  {{ isCheckedIn ? 'Checked-in / At Basecamp' : 'Awaiting Check-in' }}
                </span>
                <div class="v-amount mt-1">\u20B9{{ foundBooking.amount || foundBooking.total_amount }} ({{ foundBooking.payment_status || foundBooking.paymentStatus | uppercase }})</div>
              </div>
            </div>

            <div class="v-meta-matrix">
              <div class="v-meta-item">
                <span class="v-label">Trek Expedition</span>
                <strong>{{ foundBooking.trek_name || foundBooking.trekName }}</strong>
              </div>
              <div class="v-meta-item">
                <span class="v-label">Participants</span>
                <strong>{{ foundBooking.participants || foundBooking.seats || 1 }} Trekkers</strong>
              </div>
              <div class="v-meta-item">
                <span class="v-label">Eco-Permit Status</span>
                <span class="text-success font-weight-bold"><i class="bi bi-shield-fill-check"></i> Cleared &amp; Verified</span>
              </div>
            </div>

            <!-- Remainder Due Alert -->
            <div class="remainder-alert-card" *ngIf="foundBooking.balance_due > 0 || foundBooking.payment_status === 'partial'">
              <div class="remainder-left">
                <i class="bi bi-cash-stack text-warning fs-3"></i>
                <div>
                  <strong>70% Remainder Balance Due at Checkpoint:</strong>
                  <div class="remainder-amt">\u20B9{{ foundBooking.balance_due || (foundBooking.total_amount * 0.7) | number:'1.0-0' }} pending</div>
                </div>
              </div>
              <button type="button" class="btn-ops-action success" (click)="collectBasecampRemainder(foundBooking)">
                <i class="bi bi-cash-coin"></i> Collect &amp; Mark Paid
              </button>
            </div>

            <div class="v-actions-row">
              <button
                type="button"
                class="btn-ops-action primary flex-1"
                [disabled]="isCheckedIn"
                (click)="confirmCheckin(foundBooking)">
                <i class="bi bi-check2-circle"></i>
                <span>{{ isCheckedIn ? 'Already Checked-in' : 'Confirm Basecamp Check-in' }}</span>
              </button>
              <a class="btn-ops-action secondary" [href]="'tel:' + (foundBooking.customer_phone || foundBooking.phone)" *ngIf="foundBooking.customer_phone || foundBooking.phone">
                <i class="bi bi-telephone-fill"></i> Call Trekker
              </a>
            </div>
          </div>

          <div class="ops-empty-alert" *ngIf="!foundBooking && scannerQuery">
            <i class="bi bi-info-circle-fill"></i>
            <span>No matching booking found for "{{ scannerQuery }}". Check the reference ID.</span>
          </div>
        </div>

        <!-- Recent Arrivals Feed Column -->
        <div class="ops-card">
          <div class="card-head-row">
            <div class="card-title-group">
              <i class="bi bi-clock-history text-emerald"></i>
              <div>
                <h3>Recent Basecamp Arrivals</h3>
                <p>Live verified check-ins at forest entry checkpoint.</p>
              </div>
            </div>
            <span class="count-tag">{{ checkinHistory.length }} today</span>
          </div>

          <div class="arrival-feed-list" *ngIf="checkinHistory.length > 0; else noArrivalsTpl">
            <div class="arrival-item" *ngFor="let ch of checkinHistory">
              <div class="arrival-icon"><i class="bi bi-person-check-fill"></i></div>
              <div class="arrival-content">
                <strong>{{ ch.name }} <span class="text-muted">(#{{ ch.bookingId }})</span></strong>
                <p>{{ ch.trek }} &bull; {{ ch.count }} Trekkers</p>
              </div>
              <span class="arrival-time">{{ ch.time }}</span>
            </div>
          </div>
          <ng-template #noArrivalsTpl>
            <div class="ops-empty-box">
              <i class="bi bi-person-badge"></i>
              <h4>No arrivals recorded yet today</h4>
              <p>Check-in events verified via scanner will stream here in real time.</p>
            </div>
          </ng-template>
        </div>
      </div>
    </div>

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
         TAB 3: Trail & Weather Alerts Desk
    \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <div *ngIf="activeTab === 'advisory'" class="tab-pane-content">
      <div class="ops-split-grid">
        <!-- Broadcast Composer -->
        <div class="ops-card">
          <div class="card-head-row">
            <div class="card-title-group">
              <i class="bi bi-broadcast text-danger"></i>
              <div>
                <h3>Trail Advisory Broadcast Desk</h3>
                <p>Send instant weather alerts &amp; trail passability updates to batch trekkers.</p>
              </div>
            </div>
          </div>

          <div *ngIf="broadcastSuccessMsg" class="ops-toast success">
            <i class="bi bi-check-circle-fill"></i> {{ broadcastSuccessMsg }}
          </div>

          <form (ngSubmit)="broadcastAdvisory()" class="ops-form-flow">
            <div class="ops-field">
              <label>Target Trek Expedition <span class="req">*</span></label>
              <input type="text" class="ops-input" [(ngModel)]="advisoryForm.trekName" name="trekName" required />
            </div>

            <div class="ops-row-2">
              <div class="ops-field">
                <label>Trail Status &amp; Passability</label>
                <select class="ops-select" [(ngModel)]="advisoryForm.trailCondition" name="trailCondition">
                  <option *ngFor="let opt of trailConditionOptions" [value]="opt">{{ opt }}</option>
                </select>
              </div>
              <div class="ops-field">
                <label>Alert Severity Level</label>
                <select class="ops-select" [(ngModel)]="advisoryForm.severity" name="severity">
                  <option *ngFor="let opt of trailSeverityOptions" [value]="opt">{{ opt }}</option>
                </select>
              </div>
            </div>

            <div class="ops-field">
              <label>Alert Message / Instructions <span class="req">*</span></label>
              <textarea
                class="ops-textarea"
                rows="4"
                [(ngModel)]="advisoryForm.alertMessage"
                name="alertMessage"
                placeholder="e.g. Moderate rainfall alert in Western Ghats: All trekkers must carry ponchos, high-grip shoes..."
                required></textarea>
            </div>

            <div class="form-footer-actions">
              <span class="channel-hint"><i class="bi bi-send-check"></i> Channel: <strong>{{ advisoryForm.channel }}</strong></span>
              <div class="btn-group-row">
                <button type="button" class="btn-ops-action secondary" (click)="resetAdvisoryForm()">Reset</button>
                <button type="submit" class="btn-ops-action danger" [disabled]="isBroadcasting || !advisoryForm.alertMessage.trim()">
                  <i class="bi bi-send-fill" [class.spin]="isBroadcasting"></i>
                  <span>{{ isBroadcasting ? 'Broadcasting...' : 'Broadcast to Trekkers' }}</span>
                </button>
              </div>
            </div>
          </form>
        </div>

        <!-- Regional Meteorological Monitor -->
        <div class="ops-card">
          <div class="card-head-row">
            <div class="card-title-group">
              <i class="bi bi-cloud-sun-fill text-warning"></i>
              <div>
                <h3>Western Ghats Trail Weather Monitor</h3>
                <p>Eco-checkpoint meteorological feed across primary trekking regions.</p>
              </div>
            </div>
          </div>

          <div class="weather-cards-stack">
            <div class="weather-station-card">
              <div class="ws-head">
                <div>
                  <strong>Kudremukha Range (Chikkamagaluru)</strong>
                  <div class="ws-sub">Elevation: 1,894m &bull; Trail: Open &amp; Clear</div>
                </div>
                <span class="weather-temp-badge"><i class="bi bi-thermometer-half"></i> 21&deg;C</span>
              </div>
              <div class="ws-body">
                <span class="ws-stat"><i class="bi bi-droplet-fill text-blue"></i> Humidity: 78%</span>
                <span class="ws-stat"><i class="bi bi-wind text-muted"></i> Wind: 14 km/h</span>
                <span class="ws-stat text-success"><i class="bi bi-check-circle-fill"></i> Passable</span>
              </div>
            </div>

            <div class="weather-station-card">
              <div class="ws-head">
                <div>
                  <strong>Netravati Peak Trail (Belthangady)</strong>
                  <div class="ws-sub">Elevation: 1,520m &bull; Trail: Damp / Leech Alert</div>
                </div>
                <span class="weather-temp-badge"><i class="bi bi-thermometer-half"></i> 19&deg;C</span>
              </div>
              <div class="ws-body">
                <span class="ws-stat"><i class="bi bi-cloud-rain-heavy-fill text-primary"></i> Rain: 8mm</span>
                <span class="ws-stat"><i class="bi bi-wind text-muted"></i> Wind: 22 km/h</span>
                <span class="ws-stat text-warning"><i class="bi bi-exclamation-triangle-fill"></i> Advisory</span>
              </div>
            </div>

            <div class="weather-station-card">
              <div class="ws-head">
                <div>
                  <strong>Tadiandamol Peak (Coorg)</strong>
                  <div class="ws-sub">Elevation: 1,748m &bull; Trail: Optimal</div>
                </div>
                <span class="weather-temp-badge"><i class="bi bi-thermometer-half"></i> 23&deg;C</span>
              </div>
              <div class="ws-body">
                <span class="ws-stat"><i class="bi bi-sun-fill text-warning"></i> Sunny / Mist</span>
                <span class="ws-stat"><i class="bi bi-wind text-muted"></i> Wind: 9 km/h</span>
                <span class="ws-stat text-success"><i class="bi bi-check-circle-fill"></i> Open</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
         TAB 4: Gear Rental Inventory
    \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <div *ngIf="activeTab === 'gear'" class="tab-pane-content">
      <div class="ops-card">
        <div class="card-head-row">
          <div class="card-title-group">
            <i class="bi bi-backpack4-fill text-emerald"></i>
            <div>
              <h3>Expedition Rental Gear Inventory</h3>
              <p>Track basecamp equipment stock, rental allocation, conditions and maintenance.</p>
            </div>
          </div>
          <button
            *ngIf="authService.hasPermission('treks.manage')"
            type="button"
            class="btn-ops-action primary"
            (click)="openAddGearModal()">
            <i class="bi bi-plus-lg"></i>
            <span>Add Equipment Item</span>
          </button>
        </div>

        <div class="gear-grid" *ngIf="gearList.length > 0; else noGearTpl">
          <div class="gear-item-card" *ngFor="let g of gearList">
            <div class="g-card-top">
              <div>
                <h4 class="g-name">{{ g.name }}</h4>
                <span class="g-category-chip">{{ g.category }}</span>
              </div>
              <span class="g-condition-pill" [ngClass]="getGearConditionClass(g.condition)">
                {{ g.condition }}
              </span>
            </div>

            <div class="g-stock-gauge">
              <div class="g-gauge-labels">
                <span>Rented: <strong>{{ g.rented }}</strong></span>
                <span>Available: <strong>{{ g.available }}</strong> / {{ g.total }}</span>
              </div>
              <div class="g-gauge-track">
                <div class="g-gauge-fill" [style.width.%]="(g.rented / g.total) * 100"></div>
              </div>
            </div>

            <div class="g-card-footer">
              <div class="g-rate">\u20B9{{ g.dailyRate }} <small>/day</small></div>
              <div class="g-actions" *ngIf="authService.hasPermission('treks.manage')">
                <button type="button" class="btn-icon-action" (click)="editGear(g)" title="Edit Item"><i class="bi bi-pencil-fill"></i></button>
                <button type="button" class="btn-icon-action danger" (click)="deleteGear(g.id)" title="Delete Item"><i class="bi bi-trash3-fill"></i></button>
              </div>
            </div>
          </div>
        </div>

        <ng-template #noGearTpl>
          <div class="ops-empty-box">
            <i class="bi bi-backpack4"></i>
            <h4>No Rental Equipment Added</h4>
            <p>Add sleeping bags, tents, trekking poles and torches to track gear inventory.</p>
          </div>
        </ng-template>
      </div>
    </div>

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
         TAB 5: Batch P&L Profitability Calculator
    \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <div *ngIf="activeTab === 'pnl'" class="tab-pane-content">
      <!-- P&L Summary Hero Banner -->
      <div class="pnl-hero-banner">
        <div class="pnl-tile">
          <span class="pnl-label">Gross Ticket Revenue</span>
          <div class="pnl-val">\u20B9{{ batchPnlData.ticketRevenue | number:'1.0-0' }}</div>
          <span class="pnl-sub">From registered trekkers</span>
        </div>
        <div class="pnl-tile">
          <span class="pnl-label">Add-on Gear Revenue</span>
          <div class="pnl-val">\u20B9{{ batchPnlData.gearRevenue | number:'1.0-0' }}</div>
          <span class="pnl-sub">Rental equipment</span>
        </div>
        <div class="pnl-tile">
          <span class="pnl-label">Total Batch Expenses</span>
          <div class="pnl-val text-danger">\u20B9{{ batchPnlData.totalExpenses | number:'1.0-0' }}</div>
          <span class="pnl-sub">Permits, guide, food &amp; transit</span>
        </div>
        <div class="pnl-tile">
          <span class="pnl-label">Net Operating Profit</span>
          <div class="pnl-val" [class.text-success]="batchPnlData.netProfit >= 0" [class.text-danger]="batchPnlData.netProfit < 0">
            \u20B9{{ batchPnlData.netProfit | number:'1.0-0' }}
          </div>
          <span class="pnl-sub">Margin: <strong>{{ batchPnlData.operatingMarginPct }}%</strong></span>
        </div>
      </div>

      <div class="ops-split-grid">
        <!-- Expense Ledger Column -->
        <div class="ops-card">
          <div class="card-head-row">
            <div class="card-title-group">
              <i class="bi bi-receipt-cutoff text-emerald"></i>
              <div>
                <h3>Batch Expense Ledger</h3>
                <p>Direct costs incurred for guide honorariums, permits, transport &amp; food.</p>
              </div>
            </div>
            <span class="count-tag">{{ batchPnlData.expenses.length }} items</span>
          </div>

          <div class="expense-table-wrap" *ngIf="batchPnlData.expenses.length > 0; else noExpTpl">
            <table class="ops-data-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Description</th>
                  <th>Mode</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let exp of batchPnlData.expenses">
                  <td><span class="category-pill">{{ exp.category }}</span></td>
                  <td>{{ exp.description }}</td>
                  <td><span class="mode-pill">{{ exp.paymentMode }}</span></td>
                  <td><strong>\u20B9{{ exp.amount | number:'1.0-0' }}</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
          <ng-template #noExpTpl>
            <div class="ops-empty-box">
              <i class="bi bi-receipt"></i>
              <h4>No expenses logged for this batch</h4>
              <p>Record permits, meals, or guide honorarium on the right.</p>
            </div>
          </ng-template>
        </div>

        <!-- Add Expense Column -->
        <div class="ops-card">
          <div class="card-head-row">
            <div class="card-title-group">
              <i class="bi bi-plus-circle-fill text-emerald"></i>
              <div>
                <h3>Record Batch Expense</h3>
                <p>Add operating costs directly to this batch P&amp;L ledger.</p>
              </div>
            </div>
          </div>

          <form (ngSubmit)="addBatchExpense()" class="ops-form-flow">
            <div class="ops-field">
              <label>Expense Category <span class="req">*</span></label>
              <select class="ops-select" [(ngModel)]="newExpenseForm.expenseCategory" name="expenseCategory">
                <option *ngFor="let opt of expenseCategoryOptions" [value]="opt">{{ opt }}</option>
              </select>
            </div>

            <div class="ops-field">
              <label>Description / Note <span class="req">*</span></label>
              <input type="text" class="ops-input" [(ngModel)]="newExpenseForm.description" name="description" placeholder="e.g. 20 Forest Permits @ \u20B9200" required />
            </div>

            <div class="ops-row-2">
              <div class="ops-field">
                <label>Amount (\u20B9) <span class="req">*</span></label>
                <input type="number" class="ops-input" [(ngModel)]="newExpenseForm.amount" name="amount" min="1" required />
              </div>
              <div class="ops-field">
                <label>Payment Channel</label>
                <select class="ops-select" [(ngModel)]="newExpenseForm.paymentMode" name="paymentMode">
                  <option *ngFor="let opt of paymentMethodOptions" [value]="opt">{{ opt }}</option>
                </select>
              </div>
            </div>

            <div class="form-footer-actions">
              <button type="button" class="btn-ops-action secondary" (click)="resetExpenseForm()">Clear</button>
              <button type="submit" class="btn-ops-action primary flex-1" [disabled]="isRecordingExpense || !newExpenseForm.amount || !newExpenseForm.description.trim()">
                <i class="bi bi-plus-lg"></i>
                <span>Add to Batch Ledger</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
         TAB 6: Forest Dept Royalty & Permits
    \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <div *ngIf="activeTab === 'royalty'" class="tab-pane-content">
      <div class="ops-card">
        <div class="card-head-row">
          <div class="card-title-group">
            <i class="bi bi-bank2 text-emerald"></i>
            <div>
              <h3>Karnataka Forest Dept &amp; Eco-Fund Royalty Ledger</h3>
              <p>Audited reconciliation of eco-tourism fees, trail permits, and state royalties.</p>
            </div>
          </div>
          <button type="button" class="btn-ops-action ghost" (click)="loadForestRoyaltyLedger()">
            <i class="bi bi-arrow-repeat"></i> Refresh Ledger
          </button>
        </div>

        <div class="kpi-grid mb-4" *ngIf="royaltyData">
          <div class="ops-kpi-card primary-accent">
            <div class="kpi-body">
              <span class="kpi-label">Total Forest Permits</span>
              <div class="kpi-val">{{ royaltyData.totalPermits || 0 }}</div>
              <span class="kpi-sub">Issued pass permits</span>
            </div>
          </div>
          <div class="ops-kpi-card success-accent">
            <div class="kpi-body">
              <span class="kpi-label">Royalty Accrued</span>
              <div class="kpi-val text-success">\u20B9{{ royaltyData.totalRoyaltyAmount || 0 | number:'1.0-0' }}</div>
              <span class="kpi-sub">Calculated eco-fund fee</span>
            </div>
          </div>
          <div class="ops-kpi-card warning-accent">
            <div class="kpi-body">
              <span class="kpi-label">Settled with Dept</span>
              <div class="kpi-val text-warning">\u20B9{{ royaltyData.settledAmount || 0 | number:'1.0-0' }}</div>
              <span class="kpi-sub">Transferred to DFO treasury</span>
            </div>
          </div>
        </div>

        <div class="ops-empty-box" *ngIf="!royaltyData && !isLoadingRoyalty">
          <i class="bi bi-tree"></i>
          <h4>Forest Dept Ledger Active</h4>
          <p>Permit charges are automatically calculated on every confirmed trekker seat.</p>
        </div>
      </div>
    </div>

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
         TAB 7: WhatsApp Automated Journey Dispatcher
    \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <div *ngIf="activeTab === 'journey'" class="tab-pane-content">
      <div class="ops-split-grid">
        <!-- Controls & Triggers -->
        <div class="ops-card">
          <div class="card-head-row">
            <div class="card-title-group">
              <i class="bi bi-whatsapp text-success"></i>
              <div>
                <h3>Trekker WhatsApp Journey Engine</h3>
                <p>Trigger automated milestone notifications to active batch members.</p>
              </div>
            </div>
          </div>

          <div *ngIf="journeySuccessMsg" class="ops-toast success">
            <i class="bi bi-check-circle-fill"></i> {{ journeySuccessMsg }}
          </div>

          <div class="journey-type-selector">
            <button
              type="button"
              class="journey-btn"
              [class.active]="activePreviewType === 'booking_pass'"
              (click)="setPreviewType('booking_pass')">
              <i class="bi bi-qr-code"></i>
              <div>
                <strong>Digital Trek Pass</strong>
                <small>Sent upon confirmation</small>
              </div>
            </button>

            <button
              type="button"
              class="journey-btn"
              [class.active]="activePreviewType === 'weather_advisory'"
              (click)="setPreviewType('weather_advisory')">
              <i class="bi bi-cloud-sun"></i>
              <div>
                <strong>T-48h Weather Advisory</strong>
                <small>Sent 2 days prior</small>
              </div>
            </button>

            <button
              type="button"
              class="journey-btn"
              [class.active]="activePreviewType === 'summit_certificate'"
              (click)="setPreviewType('summit_certificate')">
              <i class="bi bi-award"></i>
              <div>
                <strong>Summit Certificate</strong>
                <small>Sent post-trek completion</small>
              </div>
            </button>
          </div>

          <div class="mt-4">
            <button
              type="button"
              class="btn-ops-action success w-100"
              [disabled]="isDispatchingJourney"
              (click)="dispatchJourneyMessage()">
              <i class="bi bi-send-fill" [class.spin]="isDispatchingJourney"></i>
              <span>{{ isDispatchingJourney ? 'Dispatching via WhatsApp API...' : 'Broadcast Current Template' }}</span>
            </button>
          </div>
        </div>

        <!-- Phone Preview Mockup -->
        <div class="ops-card">
          <div class="card-head-row">
            <div class="card-title-group">
              <i class="bi bi-phone text-emerald"></i>
              <div>
                <h3>Smartphone WhatsApp Preview</h3>
                <p>Exact visual rendering received on guest device.</p>
              </div>
            </div>
          </div>

          <div class="phone-frame-mockup">
            <div class="wa-header">
              <div class="wa-avatar"><i class="bi bi-compass-fill"></i></div>
              <div>
                <strong>goWILD Karunadu &bull; Verified</strong>
                <div class="wa-online-status">Official Business Account</div>
              </div>
            </div>

            <div class="wa-chat-canvas">
              <div class="wa-bubble-msg" *ngIf="activePreviewType === 'booking_pass'">
                <div class="wa-text">
                  \u{1F389} <strong>Your goWILD Trek Pass is Confirmed!</strong><br><br>
                  \u{1F4CD} <strong>Trek:</strong> Kudremukha Peak Expedition<br>
                  \u{1F5D3}\uFE0F <strong>Departure:</strong> Sat, 06:00 AM Basecamp<br>
                  \u{1F3AB} <strong>Pass Ref:</strong> #GWK-98412<br>
                  \u{1F6E1}\uFE0F <strong>Forest Permit:</strong> Cleared &amp; Issued<br><br>
                  \u{1F4F2} Please present your digital QR pass at the entry gate.
                </div>
                <span class="wa-msg-time">10:45 AM <i class="bi bi-check2-all text-primary"></i></span>
              </div>

              <div class="wa-bubble-msg" *ngIf="activePreviewType === 'weather_advisory'">
                <div class="wa-text">
                  \u{1F326}\uFE0F <strong>T-48h Weather Advisory Update</strong><br><br>
                  Western Ghats trail checkpoint reports light-to-moderate rain. All trekkers must carry:<br>
                  &bull; Waterproof rain poncho<br>
                  &bull; Backpack rain cover<br>
                  &bull; High-grip trekking footwear
                </div>
                <span class="wa-msg-time">02:15 PM <i class="bi bi-check2-all text-primary"></i></span>
              </div>

              <div class="wa-bubble-msg" *ngIf="activePreviewType === 'summit_certificate'">
                <div class="wa-text">
                  \u{1F3C6} <strong>Congratulations on Summiting Kudremukha!</strong><br><br>
                  You've successfully conquered 1,894m in Western Ghats! \u{1F31F}<br>
                  Your verified digital summit certificate &amp; badge is ready to download.
                </div>
                <span class="wa-msg-time">06:30 PM <i class="bi bi-check2-all text-primary"></i></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
         TAB 8: Batch Matrix & Lifecycle
    \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <div *ngIf="activeTab === 'inventory'" class="tab-pane-content">
      <div class="ops-card">
        <div class="card-head-row">
          <div class="card-title-group">
            <i class="bi bi-layers-fill text-emerald"></i>
            <div>
              <h3>Departure Batch Lifecycle &amp; Slot Matrix</h3>
              <p>Overview of active batch occupancy and departure schedules.</p>
            </div>
          </div>
        </div>

        <div class="batch-matrix-table-wrap">
          <table class="ops-data-table">
            <thead>
              <tr>
                <th>Expedition</th>
                <th>Departure Window</th>
                <th>Capacity &amp; Occupancy</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let item of trekInventory">
                <td><strong>{{ item.trek }}</strong></td>
                <td>{{ item.dates }}</td>
                <td>
                  <div class="slot-progress-wrap">
                    <div class="slot-text">
                      <span>{{ item.booked }} booked</span>
                      <span>{{ item.slots }} total slots</span>
                    </div>
                    <div class="slot-track">
                      <div class="slot-fill" [style.width.%]="(item.booked / item.slots) * 100"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <span class="status-pill-sub" [ngClass]="item.status === 'Open' ? 'success' : 'pending'">
                    {{ item.status }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
         TAB 9: Logistics, Vendors & Guides
    \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <div *ngIf="activeTab === 'logistics'" class="tab-pane-content">
      <div class="ops-card">
        <div class="card-head-row">
          <div class="card-title-group">
            <i class="bi bi-truck-front-fill text-emerald"></i>
            <div>
              <h3>Basecamp Vendors, Transport &amp; Certified Captains</h3>
              <p>Directory of verified local homestays, tempo traveler fleets, and certified wilderness captains.</p>
            </div>
          </div>
        </div>

        <div class="guides-grid">
          <div class="vendor-card" *ngFor="let g of guideVendors">
            <div class="v-avatar"><i class="bi bi-person-badge-fill"></i></div>
            <div class="v-info">
              <strong>{{ g.name }}</strong>
              <div class="v-role">{{ g.role }} &bull; {{ g.base }}</div>
              <div class="v-phone"><i class="bi bi-telephone"></i> {{ g.contact }}</div>
            </div>
            <span class="status-pill-sub success">{{ g.status }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
         TAB 10: CRM & Escalations Desk
    \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <div *ngIf="activeTab === 'crm'" class="tab-pane-content">
      <div class="ops-card">
        <div class="card-head-row">
          <div class="card-title-group">
            <i class="bi bi-headset text-emerald"></i>
            <div>
              <h3>Trekker Inquiries &amp; Support Escalations</h3>
              <p>Priority queue for booking queries, medical disclosures and date changes.</p>
            </div>
          </div>
        </div>

        <div class="crm-table-wrap">
          <table class="ops-data-table">
            <thead>
              <tr>
                <th>Trekker / Guest</th>
                <th>Query Summary</th>
                <th>Priority</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let c of crmEscalations">
                <td><strong>{{ c.guest }}</strong></td>
                <td>{{ c.issue }}</td>
                <td><span class="priority-pill" [ngClass]="c.priority.toLowerCase()">{{ c.priority }}</span></td>
                <td><span class="status-pill-sub warning">{{ c.status }}</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
         TAB 11: Access Control & RBAC Matrix
    \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <div *ngIf="activeTab === 'rbac'" class="tab-pane-content">
      <div class="ops-split-grid">
        <!-- Create Admin Card -->
        <div class="ops-card" *ngIf="canEditPermissions">
          <div class="card-head-row">
            <div class="card-title-group">
              <i class="bi bi-person-plus-fill text-emerald"></i>
              <div>
                <h3>Invite Admin Team Member</h3>
                <p>Assign specific system access roles to administrators.</p>
              </div>
            </div>
          </div>

          <div class="ops-form-flow">
            <div class="ops-field">
              <label>Full Name <span class="req">*</span></label>
              <input class="ops-input" type="text" [(ngModel)]="newAdminForm.name" placeholder="e.g. Captain Ramesh" />
            </div>

            <div class="ops-field">
              <label>Corporate Email <span class="req">*</span></label>
              <input class="ops-input" type="email" [(ngModel)]="newAdminForm.email" placeholder="ramesh@gowildkarunadu.in" />
            </div>

            <div class="ops-field">
              <label>Password <span class="req">*</span></label>
              <div class="password-input-wrap">
                <input
                  class="ops-input"
                  [type]="showCreateAdminPassword ? 'text' : 'password'"
                  [(ngModel)]="newAdminForm.password"
                  placeholder="Min 8 chars" />
                <button
                  type="button"
                  class="btn-toggle-pw"
                  (click)="showCreateAdminPassword = !showCreateAdminPassword">
                  <i class="bi" [ngClass]="showCreateAdminPassword ? 'bi-eye-slash' : 'bi-eye'"></i>
                </button>
              </div>
            </div>

            <div class="ops-field">
              <label>Assigned System Role <span class="req">*</span></label>
              <select class="ops-select" [(ngModel)]="newAdminForm.roleKey">
                <option *ngFor="let roleRow of permissions" [value]="roleRow.roleKey">{{ roleRow.role }}</option>
              </select>
            </div>

            <div class="form-footer-actions">
              <button class="btn-ops-action secondary" type="button" (click)="resetNewAdminForm()">Reset</button>
              <button class="btn-ops-action primary flex-1" type="button" (click)="createAdminUser()" [disabled]="createAdminLoading || !newAdminForm.name || !newAdminForm.email || !newAdminForm.password">
                <i class="bi bi-person-plus-fill"></i>
                <span>{{ createAdminLoading ? 'Creating...' : 'Create Admin' }}</span>
              </button>
            </div>

            <div *ngIf="createAdminMessage" class="ops-toast success mt-2">{{ createAdminMessage }}</div>
            <div *ngIf="createAdminError" class="ops-toast error mt-2">{{ createAdminError }}</div>
          </div>
        </div>

        <!-- Security Audit Log Stream -->
        <div class="ops-card">
          <div class="card-head-row">
            <div class="card-title-group">
              <i class="bi bi-shield-check text-emerald"></i>
              <div>
                <h3>Security &amp; Operations Audit Log</h3>
                <p>Immutable audit trail of administrative modifications.</p>
              </div>
            </div>
          </div>

          <div class="audit-log-stream">
            <div class="audit-item" *ngFor="let log of auditLogs">
              <div class="audit-dot"></div>
              <div class="audit-body">
                <div class="audit-actor-row">
                  <strong>{{ log.actor }}</strong> &bull; <span class="audit-time">{{ log.when }}</span>
                </div>
                <p class="audit-action">{{ log.action }}</p>
                <small *ngIf="log.entityType" class="audit-entity-tag">{{ log.entityType }} <ng-container *ngIf="log.entityId">&bull; {{ log.entityId }}</ng-container></small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- \u2500\u2500\u2500 Equipment Edit / Add Modal \u2500\u2500\u2500 -->
    <div class="modal-backdrop-custom" *ngIf="showGearModal">
      <div class="modal-dialog-custom">
        <div class="modal-header-custom">
          <div class="modal-title-wrap">
            <div class="modal-avatar"><i class="bi bi-backpack4-fill"></i></div>
            <div>
              <h3>{{ gearForm.id ? 'Edit Equipment Item' : 'Add Rental Gear' }}</h3>
              <p>Configure inventory stock and rental specifications</p>
            </div>
          </div>
          <button type="button" class="btn-close-custom" (click)="closeGearModal()"><i class="bi bi-x-lg"></i></button>
        </div>

        <div class="modal-body-custom">
          <div class="modal-form-grid">
            <div class="form-field full-width">
              <label>Equipment Item Name <span class="req">*</span></label>
              <input type="text" class="modern-input" [(ngModel)]="gearForm.itemName" placeholder="e.g. Carbon Fiber Trekking Poles" required />
            </div>

            <div class="form-field full-width">
              <label>Category <span class="req">*</span></label>
              <select class="modern-select" [(ngModel)]="gearForm.category" required>
                <option *ngFor="let opt of gearCategoryOptions" [value]="opt">{{ opt }}</option>
              </select>
            </div>

            <div class="form-field">
              <label>Total Stock Units <span class="req">*</span></label>
              <input type="number" class="modern-input" [(ngModel)]="gearForm.totalQuantity" min="1" required />
            </div>

            <div class="form-field">
              <label>Daily Rental (\u20B9) <span class="req">*</span></label>
              <input type="number" class="modern-input" [(ngModel)]="gearForm.rentalRatePerDay" min="0" required />
            </div>

            <div class="form-field">
              <label>Equipment Condition</label>
              <select class="modern-select" [(ngModel)]="gearForm.itemCondition">
                <option *ngFor="let opt of gearConditionOptions" [value]="opt">{{ opt }}</option>
              </select>
            </div>

            <div class="form-field">
              <label>Storage Basecamp</label>
              <input type="text" class="modern-input" [(ngModel)]="gearForm.location" placeholder="e.g. Kudremukha Store" />
            </div>
          </div>
        </div>

        <div class="modal-footer-custom">
          <button type="button" class="btn-action-ghost" (click)="closeGearModal()">Cancel</button>
          <button
            type="button"
            class="btn-gradient-primary"
            [disabled]="isSavingGear || !gearForm.itemName"
            (click)="saveGear()">
            <i class="bi bi-check2"></i>
            <span>{{ isSavingGear ? 'Saving...' : 'Save Equipment' }}</span>
          </button>
        </div>
      </div>
    </div>

  </app-admin-shell>
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/operations-center/operations-center.component.scss */\n:host {\n  display: block;\n  font-family:\n    "Plus Jakarta Sans",\n    system-ui,\n    -apple-system,\n    sans-serif;\n  color: #0f172a;\n}\n.ops-page {\n  --background: #f8fafc;\n}\n.ops-hero-banner {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #064e3b 0%,\n      #0f3d35 45%,\n      #0d2822 100%);\n  border-radius: 20px;\n  padding: 24px 28px;\n  margin-bottom: 24px;\n  color: #ffffff;\n  box-shadow: 0 12px 36px rgba(6, 78, 59, 0.22);\n  position: relative;\n  overflow: hidden;\n  width: 1570px;\n}\n.ops-hero-banner::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -10%;\n  width: 320px;\n  height: 320px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(52, 211, 153, 0.15) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.ops-hero-banner .hero-left {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  position: relative;\n  z-index: 1;\n}\n.ops-hero-banner .hero-left .live-pulse-beacon {\n  position: relative;\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n}\n.ops-hero-banner .hero-left .live-pulse-beacon .beacon-core {\n  position: absolute;\n  inset: 2px;\n  border-radius: 50%;\n  background: #10b981;\n  box-shadow: 0 0 12px #34d399;\n}\n.ops-hero-banner .hero-left .live-pulse-beacon .beacon-ring {\n  position: absolute;\n  inset: -6px;\n  border-radius: 50%;\n  border: 2px solid #34d399;\n  animation: beaconWave 2s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n}\n.ops-hero-banner .hero-left .hero-titles {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.ops-hero-banner .hero-left .hero-titles .hero-badge-row {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 8px;\n}\n.ops-hero-banner .hero-left .hero-titles .hero-badge-row .ops-live-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: rgba(16, 185, 129, 0.2);\n  border: 1px solid rgba(52, 211, 153, 0.4);\n  color: #6ee7b7;\n  font-size: 0.72rem;\n  font-weight: 800;\n  letter-spacing: 0.06em;\n  padding: 3px 10px;\n  border-radius: 20px;\n}\n.ops-hero-banner .hero-left .hero-titles .hero-badge-row .ops-health-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  color: #e2e8f0;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  padding: 3px 10px;\n  border-radius: 20px;\n}\n.ops-hero-banner .hero-left .hero-titles .hero-heading {\n  margin: 2px 0 0;\n  font-size: 1.35rem;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n  color: #ffffff;\n}\n.ops-hero-banner .hero-left .hero-titles .hero-subtext {\n  margin: 0;\n  font-size: 0.84rem;\n  color: #a7f3d0;\n  line-height: 1.4;\n}\n.ops-hero-banner .hero-right {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  position: relative;\n  z-index: 1;\n}\n.ops-hero-banner .hero-right .sync-info-box {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  padding: 7px 14px;\n  border-radius: 12px;\n  font-size: 0.78rem;\n  color: #e2e8f0;\n}\n.ops-hero-banner .hero-right .sync-info-box i {\n  font-size: 1.1rem;\n  color: #34d399;\n}\n.ops-hero-banner .hero-right .sync-info-box .sync-label {\n  display: block;\n  font-size: 0.68rem;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.ops-hero-banner .hero-right .sync-info-box strong {\n  color: #ffffff;\n  font-weight: 700;\n}\n.ops-hero-banner .hero-right .btn-ops-sync {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 18px;\n  border-radius: 12px;\n  border: none;\n  background: #10b981;\n  color: #064e3b;\n  font-size: 0.7rem;\n  font-weight: 800;\n  cursor: pointer;\n  box-shadow: 0 4px 14px rgba(16, 185, 129, 0.35);\n  transition: all 0.2s ease;\n}\n.ops-hero-banner .hero-right .btn-ops-sync i {\n  font-size: 1rem;\n}\n.ops-hero-banner .hero-right .btn-ops-sync:hover:not(:disabled) {\n  background: #34d399;\n  transform: translateY(-2px);\n  box-shadow: 0 6px 18px rgba(16, 185, 129, 0.45);\n}\n.ops-hero-banner .hero-right .btn-ops-sync.is-syncing i {\n  animation: spin 1s linear infinite;\n}\n.ops-hero-banner .hero-right .btn-ops-sync:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.ops-nav-container {\n  margin-bottom: 24px;\n  width: 1570px;\n}\n.ops-nav-container .ops-nav-tabs {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 16px;\n  padding: 6px;\n  overflow-x: auto;\n  scrollbar-width: thin;\n  box-shadow: 0 2px 10px rgba(15, 23, 42, 0.03);\n}\n.ops-nav-container .ops-nav-tabs::-webkit-scrollbar {\n  height: 4px;\n}\n.ops-nav-container .ops-nav-tabs::-webkit-scrollbar-thumb {\n  background: #cbd5e1;\n  border-radius: 4px;\n}\n.ops-nav-container .ops-nav-tabs .nav-tab-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 16px;\n  border-radius: 11px;\n  border: 1px solid transparent;\n  background: transparent;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #64748b;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: all 0.18s ease;\n}\n.ops-nav-container .ops-nav-tabs .nav-tab-btn i {\n  font-size: 1rem;\n  transition: transform 0.18s ease;\n}\n.ops-nav-container .ops-nav-tabs .nav-tab-btn:hover {\n  color: #0f172a;\n  background: #f1f5f9;\n}\n.ops-nav-container .ops-nav-tabs .nav-tab-btn:hover i {\n  transform: scale(1.12);\n}\n.ops-nav-container .ops-nav-tabs .nav-tab-btn.active {\n  background: #064e3b;\n  border-color: #064e3b;\n  color: #ffffff;\n  font-weight: 700;\n  box-shadow: 0 4px 14px rgba(6, 78, 59, 0.25);\n}\n.ops-nav-container .ops-nav-tabs .nav-tab-btn.active i {\n  color: #34d399;\n}\n.tab-pane-content {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  animation: slideFadeIn 0.22s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.ops-split-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));\n  gap: 22px;\n}\n.ops-split-grid.checkin-grid {\n  grid-template-columns: 1.3fr 1fr;\n}\n@media (max-width: 960px) {\n  .ops-split-grid.checkin-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.ops-card {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 18px;\n  padding: 24px;\n  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.03);\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.ops-card .card-head-row {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.ops-card .card-head-row .card-title-group {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.ops-card .card-head-row .card-title-group i {\n  font-size: 1.4rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  background: #f8fafc;\n}\n.ops-card .card-head-row .card-title-group h3 {\n  margin: 0;\n  font-size: 1.05rem;\n  font-weight: 800;\n  color: #0f172a;\n  letter-spacing: -0.01em;\n}\n.ops-card .card-head-row .card-title-group p {\n  margin: 2px 0 0;\n  font-size: 0.8rem;\n  color: #64748b;\n}\n.health-banner-card {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #f0fdf4 100%);\n  border-color: #bbf7d0;\n}\n.health-banner-card .health-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n.health-banner-card .health-badge.success {\n  background: #dcfce7;\n  color: #15803d;\n  border: 1px solid #86efac;\n}\n.health-banner-card .checks-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 12px;\n}\n.health-banner-card .checks-grid .check-chip {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  background: #ffffff;\n  font-size: 0.82rem;\n}\n.health-banner-card .checks-grid .check-chip .chip-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #94a3b8;\n}\n.health-banner-card .checks-grid .check-chip .chip-name {\n  flex: 1;\n  font-weight: 700;\n  color: #334155;\n}\n.health-banner-card .checks-grid .check-chip .chip-status {\n  font-size: 0.72rem;\n  font-weight: 800;\n  letter-spacing: 0.04em;\n}\n.health-banner-card .checks-grid .check-chip.ok {\n  border-color: #bbf7d0;\n  background: #f0fdf4;\n}\n.health-banner-card .checks-grid .check-chip.ok .chip-dot {\n  background: #10b981;\n  box-shadow: 0 0 6px #34d399;\n}\n.health-banner-card .checks-grid .check-chip.ok .chip-status {\n  color: #166534;\n}\n.health-banner-card .checks-grid .check-chip.fail {\n  border-color: #fecaca;\n  background: #fef2f2;\n}\n.health-banner-card .checks-grid .check-chip.fail .chip-dot {\n  background: #ef4444;\n}\n.health-banner-card .checks-grid .check-chip.fail .chip-status {\n  color: #991b1b;\n}\n.kpi-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n}\n.ops-kpi-card {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 16px;\n  padding: 18px 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.03);\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease,\n    border-color 0.2s ease;\n}\n.ops-kpi-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.07);\n}\n.ops-kpi-card .kpi-icon-wrap {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.35rem;\n  flex-shrink: 0;\n}\n.ops-kpi-card .kpi-body {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.ops-kpi-card .kpi-body .kpi-label {\n  font-size: 0.74rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #64748b;\n}\n.ops-kpi-card .kpi-body .kpi-val {\n  font-size: 1.55rem;\n  font-weight: 800;\n  color: #0f172a;\n  line-height: 1.15;\n}\n.ops-kpi-card .kpi-body .kpi-sub {\n  font-size: 0.72rem;\n  color: #94a3b8;\n}\n.ops-kpi-card.danger-accent {\n  border-left: 4px solid #ef4444;\n}\n.ops-kpi-card.danger-accent .kpi-icon-wrap {\n  background: #fef2f2;\n  color: #ef4444;\n}\n.ops-kpi-card.success-accent {\n  border-left: 4px solid #10b981;\n}\n.ops-kpi-card.success-accent .kpi-icon-wrap {\n  background: #ecfdf5;\n  color: #10b981;\n}\n.ops-kpi-card.warning-accent {\n  border-left: 4px solid #f59e0b;\n}\n.ops-kpi-card.warning-accent .kpi-icon-wrap {\n  background: #fffbeb;\n  color: #f59e0b;\n}\n.ops-kpi-card.primary-accent {\n  border-left: 4px solid #064e3b;\n}\n.ops-kpi-card.primary-accent .kpi-icon-wrap {\n  background: #f0fdf4;\n  color: #064e3b;\n}\n.ops-kpi-card.info-accent {\n  border-left: 4px solid #0284c7;\n}\n.ops-kpi-card.info-accent .kpi-icon-wrap {\n  background: #f0f9ff;\n  color: #0284c7;\n}\n.ops-kpi-card.purple-accent {\n  border-left: 4px solid #8b5cf6;\n}\n.ops-kpi-card.purple-accent .kpi-icon-wrap {\n  background: #f5f3ff;\n  color: #8b5cf6;\n}\n.reports-list {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.reports-list .report-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  padding: 12px 16px;\n  border-radius: 12px;\n  background: #f8fafc;\n  border: 1px solid #f1f5f9;\n  transition: background 0.15s ease;\n}\n.reports-list .report-row:hover {\n  background: #f1f5f9;\n}\n.reports-list .report-row .report-info {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.reports-list .report-row .report-info .report-icon {\n  font-size: 1.4rem;\n  color: #059669;\n}\n.reports-list .report-row .report-info strong {\n  font-size: 0.88rem;\n  color: #0f172a;\n}\n.reports-list .report-row .report-info .report-meta {\n  font-size: 0.74rem;\n  color: #64748b;\n  margin-top: 2px;\n}\n.payment-ops-list {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.payment-ops-list .payment-op-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 12px 16px;\n  border-radius: 12px;\n  background: #f8fafc;\n  border: 1px solid #f1f5f9;\n}\n.payment-ops-list .payment-op-row .payment-op-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.payment-ops-list .payment-op-row .payment-op-left .booking-ref-badge {\n  font-family: monospace;\n  font-size: 0.78rem;\n  font-weight: 700;\n  background: #e2e8f0;\n  color: #334155;\n  padding: 4px 8px;\n  border-radius: 6px;\n}\n.payment-ops-list .payment-op-row .payment-op-left strong {\n  font-size: 0.92rem;\n  color: #0f172a;\n}\n.payment-ops-list .payment-op-row .payment-op-left .report-meta {\n  font-size: 0.74rem;\n  color: #64748b;\n}\n.camera-viewport-card {\n  position: relative;\n  background: #0b1329;\n  border-radius: 16px;\n  overflow: hidden;\n  height: 240px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.6);\n}\n.camera-viewport-card .camera-laser {\n  position: absolute;\n  left: 20px;\n  right: 20px;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      #10b981 50%,\n      transparent);\n  box-shadow: 0 0 10px #10b981;\n  animation: laserScan 2s ease-in-out infinite alternate;\n}\n.camera-viewport-card .camera-frame {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  color: #64748b;\n  border: 2px dashed #10b981;\n  border-radius: 16px;\n  padding: 24px 32px;\n  background: rgba(16, 185, 129, 0.05);\n}\n.camera-viewport-card .camera-frame i {\n  font-size: 2.4rem;\n  color: #10b981;\n}\n.camera-viewport-card .camera-frame span {\n  font-size: 0.82rem;\n  color: #cbd5e1;\n  font-weight: 600;\n}\n.lookup-search-bar {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  position: relative;\n}\n.lookup-search-bar .search-icon {\n  position: absolute;\n  left: 14px;\n  color: #94a3b8;\n  font-size: 1rem;\n  pointer-events: none;\n}\n.lookup-search-bar .ops-input {\n  flex: 1;\n  padding-left: 40px;\n}\n.verified-booking-card {\n  background:\n    linear-gradient(\n      135deg,\n      #f0fdf4 0%,\n      #ecfdf5 100%);\n  border: 1px solid #86efac;\n  border-radius: 16px;\n  padding: 22px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  box-shadow: 0 6px 20px rgba(16, 185, 129, 0.08);\n}\n.verified-booking-card .v-card-header {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid rgba(134, 239, 172, 0.5);\n}\n.verified-booking-card .v-card-header .pass-tag {\n  font-size: 0.72rem;\n  font-weight: 800;\n  letter-spacing: 0.06em;\n  color: #065f46;\n  background: #d1fae5;\n  padding: 3px 8px;\n  border-radius: 6px;\n  display: inline-block;\n  margin-bottom: 4px;\n}\n.verified-booking-card .v-card-header .v-name {\n  margin: 0;\n  font-size: 1.15rem;\n  font-weight: 800;\n  color: #064e3b;\n}\n.verified-booking-card .v-card-header .v-contact {\n  font-size: 0.78rem;\n  color: #047857;\n  margin-top: 4px;\n}\n.verified-booking-card .v-card-header .v-amount {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: #065f46;\n}\n.verified-booking-card .v-meta-matrix {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\n  gap: 12px;\n}\n.verified-booking-card .v-meta-matrix .v-meta-item {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.verified-booking-card .v-meta-matrix .v-meta-item .v-label {\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: #047857;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.verified-booking-card .v-meta-matrix .v-meta-item strong {\n  font-size: 0.88rem;\n  color: #064e3b;\n}\n.verified-booking-card .remainder-alert-card {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  background: #fffbeb;\n  border: 1px solid #fde68a;\n  border-radius: 12px;\n  padding: 12px 16px;\n}\n.verified-booking-card .remainder-alert-card .remainder-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.verified-booking-card .remainder-alert-card .remainder-left strong {\n  font-size: 0.84rem;\n  color: #92400e;\n}\n.verified-booking-card .remainder-alert-card .remainder-left .remainder-amt {\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #b45309;\n}\n.verified-booking-card .v-actions-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.arrival-feed-list {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.arrival-feed-list .arrival-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  border-radius: 12px;\n  background: #f8fafc;\n  border: 1px solid #f1f5f9;\n}\n.arrival-feed-list .arrival-item .arrival-icon {\n  font-size: 1.3rem;\n  color: #10b981;\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background: #ecfdf5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.arrival-feed-list .arrival-item .arrival-content {\n  flex: 1;\n}\n.arrival-feed-list .arrival-item .arrival-content strong {\n  font-size: 0.88rem;\n  color: #0f172a;\n}\n.arrival-feed-list .arrival-item .arrival-content p {\n  margin: 2px 0 0;\n  font-size: 0.78rem;\n  color: #64748b;\n}\n.arrival-feed-list .arrival-item .arrival-time {\n  font-size: 0.74rem;\n  font-weight: 700;\n  color: #94a3b8;\n}\n.weather-cards-stack {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.weather-cards-stack .weather-station-card {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 16px 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.02);\n}\n.weather-cards-stack .weather-station-card .ws-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.weather-cards-stack .weather-station-card .ws-head strong {\n  font-size: 0.94rem;\n  color: #0f172a;\n}\n.weather-cards-stack .weather-station-card .ws-head .ws-sub {\n  font-size: 0.76rem;\n  color: #64748b;\n  margin-top: 2px;\n}\n.weather-cards-stack .weather-station-card .ws-head .weather-temp-badge {\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: #065f46;\n  background: #ecfdf5;\n  padding: 4px 10px;\n  border-radius: 10px;\n  border: 1px solid #a7f3d0;\n}\n.weather-cards-stack .weather-station-card .ws-body {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-top: 8px;\n  border-top: 1px solid #f1f5f9;\n  font-size: 0.78rem;\n}\n.weather-cards-stack .weather-station-card .ws-body .ws-stat {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-weight: 600;\n}\n.gear-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 16px;\n}\n.gear-grid .gear-item-card {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 16px;\n  padding: 18px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  box-shadow: 0 4px 14px rgba(15, 23, 42, 0.03);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.gear-grid .gear-item-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 22px rgba(15, 23, 42, 0.06);\n}\n.gear-grid .gear-item-card .g-card-top {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 10px;\n}\n.gear-grid .gear-item-card .g-card-top .g-name {\n  margin: 0;\n  font-size: 0.98rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.gear-grid .gear-item-card .g-card-top .g-category-chip {\n  display: inline-block;\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: #475569;\n  background: #f1f5f9;\n  padding: 3px 8px;\n  border-radius: 6px;\n  margin-top: 4px;\n}\n.gear-grid .gear-item-card .g-card-top .g-condition-pill {\n  font-size: 0.72rem;\n  font-weight: 800;\n  padding: 3px 8px;\n  border-radius: 12px;\n  white-space: nowrap;\n}\n.gear-grid .gear-item-card .g-card-top .g-condition-pill.condition-excellent {\n  background: #dcfce7;\n  color: #166534;\n}\n.gear-grid .gear-item-card .g-card-top .g-condition-pill.condition-good {\n  background: #e0f2fe;\n  color: #075985;\n}\n.gear-grid .gear-item-card .g-card-top .g-condition-pill.condition-fair {\n  background: #fef3c7;\n  color: #92400e;\n}\n.gear-grid .gear-item-card .g-card-top .g-condition-pill.condition-maintenance {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.gear-grid .gear-item-card .g-stock-gauge {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.gear-grid .gear-item-card .g-stock-gauge .g-gauge-labels {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.76rem;\n  font-weight: 700;\n  color: #64748b;\n}\n.gear-grid .gear-item-card .g-stock-gauge .g-gauge-track {\n  height: 8px;\n  border-radius: 4px;\n  background: #e2e8f0;\n  overflow: hidden;\n}\n.gear-grid .gear-item-card .g-stock-gauge .g-gauge-track .g-gauge-fill {\n  height: 100%;\n  border-radius: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      #10b981,\n      #059669);\n  transition: width 0.3s ease;\n}\n.gear-grid .gear-item-card .g-card-footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 10px;\n  border-top: 1px solid #f1f5f9;\n}\n.gear-grid .gear-item-card .g-card-footer .g-rate {\n  font-size: 0.95rem;\n  font-weight: 800;\n  color: #065f46;\n}\n.gear-grid .gear-item-card .g-card-footer .g-rate small {\n  font-size: 0.72rem;\n  color: #94a3b8;\n  font-weight: 600;\n}\n.gear-grid .gear-item-card .g-card-footer .g-actions {\n  display: flex;\n  gap: 6px;\n}\n.gear-grid .gear-item-card .g-card-footer .g-actions .btn-icon-action {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  border: 1px solid #e2e8f0;\n  background: #ffffff;\n  color: #64748b;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 0.84rem;\n  transition: all 0.15s ease;\n}\n.gear-grid .gear-item-card .g-card-footer .g-actions .btn-icon-action:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n.gear-grid .gear-item-card .g-card-footer .g-actions .btn-icon-action.danger:hover {\n  background: #fef2f2;\n  border-color: #fecaca;\n  color: #ef4444;\n}\n.pnl-hero-banner {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #0f172a 0%,\n      #1e293b 100%);\n  border-radius: 18px;\n  padding: 22px 26px;\n  color: #ffffff;\n  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.2);\n}\n.pnl-hero-banner .pnl-tile {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.pnl-hero-banner .pnl-tile .pnl-label {\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #94a3b8;\n}\n.pnl-hero-banner .pnl-tile .pnl-val {\n  font-size: 1.55rem;\n  font-weight: 800;\n  color: #ffffff;\n  line-height: 1.15;\n}\n.pnl-hero-banner .pnl-tile .pnl-sub {\n  font-size: 0.72rem;\n  color: #64748b;\n}\n.expense-table-wrap,\n.batch-matrix-table-wrap,\n.crm-table-wrap {\n  overflow-x: auto;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n}\n.ops-data-table {\n  width: 100%;\n  border-collapse: collapse;\n  text-align: left;\n}\n.ops-data-table th,\n.ops-data-table td {\n  padding: 12px 16px;\n  font-size: 0.84rem;\n}\n.ops-data-table th {\n  background: #f8fafc;\n  color: #64748b;\n  font-weight: 700;\n  text-transform: uppercase;\n  font-size: 0.72rem;\n  letter-spacing: 0.04em;\n  border-bottom: 1px solid #e2e8f0;\n}\n.ops-data-table td {\n  border-bottom: 1px solid #f1f5f9;\n  color: #334155;\n}\n.ops-data-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.ops-data-table tbody tr:hover {\n  background: #f8fafc;\n}\n.ops-data-table .category-pill,\n.ops-data-table .mode-pill {\n  display: inline-block;\n  font-size: 0.72rem;\n  font-weight: 700;\n  padding: 3px 8px;\n  border-radius: 6px;\n  background: #f1f5f9;\n  color: #475569;\n}\n.journey-type-selector {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.journey-type-selector .journey-btn {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 14px 18px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  background: #ffffff;\n  text-align: left;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.journey-type-selector .journey-btn i {\n  font-size: 1.5rem;\n  color: #64748b;\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  background: #f8fafc;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.journey-type-selector .journey-btn strong {\n  display: block;\n  font-size: 0.9rem;\n  color: #0f172a;\n}\n.journey-type-selector .journey-btn small {\n  display: block;\n  font-size: 0.74rem;\n  color: #64748b;\n  margin-top: 2px;\n}\n.journey-type-selector .journey-btn:hover {\n  border-color: #cbd5e1;\n  background: #f8fafc;\n}\n.journey-type-selector .journey-btn.active {\n  border-color: #25d366;\n  background: #f0fdf4;\n}\n.journey-type-selector .journey-btn.active i {\n  background: #25d366;\n  color: #ffffff;\n}\n.journey-type-selector .journey-btn.active strong {\n  color: #166534;\n}\n.phone-frame-mockup {\n  background: #efeae2;\n  border-radius: 20px;\n  overflow: hidden;\n  border: 4px solid #1f2937;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);\n}\n.phone-frame-mockup .wa-header {\n  background: #075e54;\n  color: #ffffff;\n  padding: 12px 16px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.phone-frame-mockup .wa-header .wa-avatar {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: #128c7e;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n}\n.phone-frame-mockup .wa-header strong {\n  display: block;\n  font-size: 0.88rem;\n}\n.phone-frame-mockup .wa-header .wa-online-status {\n  font-size: 0.7rem;\n  color: #a7f3d0;\n}\n.phone-frame-mockup .wa-chat-canvas {\n  padding: 18px 16px;\n  min-height: 260px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.phone-frame-mockup .wa-chat-canvas .wa-bubble-msg {\n  max-width: 90%;\n  background: #ffffff;\n  border-radius: 12px;\n  border-top-left-radius: 2px;\n  padding: 12px 14px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n  animation: slideFadeIn 0.2s ease-out;\n}\n.phone-frame-mockup .wa-chat-canvas .wa-bubble-msg .wa-text {\n  font-size: 0.82rem;\n  line-height: 1.5;\n  color: #111b21;\n}\n.phone-frame-mockup .wa-chat-canvas .wa-bubble-msg .wa-msg-time {\n  display: block;\n  text-align: right;\n  font-size: 0.68rem;\n  color: #667781;\n  margin-top: 4px;\n}\n.slot-progress-wrap {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 180px;\n}\n.slot-progress-wrap .slot-text {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.74rem;\n  font-weight: 700;\n  color: #64748b;\n}\n.slot-progress-wrap .slot-track {\n  height: 6px;\n  border-radius: 3px;\n  background: #e2e8f0;\n  overflow: hidden;\n}\n.slot-progress-wrap .slot-track .slot-fill {\n  height: 100%;\n  border-radius: 3px;\n  background: #059669;\n}\n.guides-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n  gap: 16px;\n}\n.guides-grid .vendor-card {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 16px 18px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.02);\n}\n.guides-grid .vendor-card .v-avatar {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background: #ecfdf5;\n  color: #059669;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.3rem;\n  flex-shrink: 0;\n}\n.guides-grid .vendor-card .v-info {\n  flex: 1;\n}\n.guides-grid .vendor-card .v-info strong {\n  font-size: 0.92rem;\n  color: #0f172a;\n}\n.guides-grid .vendor-card .v-info .v-role {\n  font-size: 0.76rem;\n  color: #64748b;\n  margin-top: 2px;\n}\n.guides-grid .vendor-card .v-info .v-phone {\n  font-size: 0.76rem;\n  color: #059669;\n  margin-top: 2px;\n}\n.audit-log-stream {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  max-height: 460px;\n  overflow-y: auto;\n}\n.audit-log-stream .audit-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 12px 14px;\n  border-radius: 12px;\n  background: #f8fafc;\n  border: 1px solid #f1f5f9;\n}\n.audit-log-stream .audit-item .audit-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #059669;\n  margin-top: 6px;\n  flex-shrink: 0;\n}\n.audit-log-stream .audit-item .audit-body {\n  flex: 1;\n}\n.audit-log-stream .audit-item .audit-body .audit-actor-row {\n  font-size: 0.8rem;\n  color: #64748b;\n}\n.audit-log-stream .audit-item .audit-body .audit-actor-row strong {\n  color: #0f172a;\n}\n.audit-log-stream .audit-item .audit-body .audit-actor-row .audit-time {\n  font-size: 0.72rem;\n  color: #94a3b8;\n}\n.audit-log-stream .audit-item .audit-body .audit-action {\n  margin: 4px 0 0;\n  font-size: 0.84rem;\n  color: #334155;\n  line-height: 1.4;\n}\n.audit-log-stream .audit-item .audit-body .audit-entity-tag {\n  display: inline-block;\n  margin-top: 4px;\n  font-size: 0.7rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #64748b;\n  background: #e2e8f0;\n  padding: 2px 6px;\n  border-radius: 4px;\n}\n.btn-ops-action {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 9px 18px;\n  border-radius: 11px;\n  border: 1px solid transparent;\n  font-size: 0.84rem;\n  font-weight: 700;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: all 0.18s ease;\n}\n.btn-ops-action.primary {\n  background: #064e3b;\n  color: #ffffff;\n  box-shadow: 0 4px 12px rgba(6, 78, 59, 0.2);\n}\n.btn-ops-action.primary:hover:not(:disabled) {\n  background: #047857;\n  transform: translateY(-1px);\n}\n.btn-ops-action.secondary {\n  background: #f8fafc;\n  border-color: #cbd5e1;\n  color: #334155;\n}\n.btn-ops-action.secondary:hover:not(:disabled) {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n.btn-ops-action.success {\n  background: #059669;\n  color: #ffffff;\n}\n.btn-ops-action.success:hover:not(:disabled) {\n  background: #10b981;\n}\n.btn-ops-action.danger {\n  background: #ef4444;\n  color: #ffffff;\n}\n.btn-ops-action.danger:hover:not(:disabled) {\n  background: #dc2626;\n}\n.btn-ops-action.ghost {\n  background: transparent;\n  border-color: #e2e8f0;\n  color: #64748b;\n}\n.btn-ops-action.ghost:hover:not(:disabled) {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n.btn-ops-action:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.ops-form-flow {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.ops-field {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.ops-field label {\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: #475569;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.ops-field label .req {\n  color: #ef4444;\n}\n.ops-row-2 {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.ops-input,\n.ops-select,\n.ops-textarea,\n.modern-input,\n.modern-select {\n  width: 100%;\n  padding: 10px 14px;\n  border-radius: 11px;\n  border: 1px solid #cbd5e1;\n  background: #ffffff;\n  font-size: 0.88rem;\n  color: #0f172a;\n  outline: none;\n  font-family: inherit;\n  transition: all 0.15s ease;\n}\n.ops-input:focus,\n.ops-select:focus,\n.ops-textarea:focus,\n.modern-input:focus,\n.modern-select:focus {\n  border-color: #059669;\n  box-shadow: 0 0 0 3px rgba(5, 150, 105, 0.12);\n}\n.password-input-wrap {\n  position: relative;\n  width: 100%;\n}\n.password-input-wrap .btn-toggle-pw {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  color: #94a3b8;\n  cursor: pointer;\n  font-size: 1.1rem;\n}\n.password-input-wrap .btn-toggle-pw:hover {\n  color: #0f172a;\n}\n.form-footer-actions {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding-top: 10px;\n  border-top: 1px solid #f1f5f9;\n}\n.form-footer-actions .channel-hint {\n  font-size: 0.78rem;\n  color: #64748b;\n}\n.form-footer-actions .channel-hint strong {\n  color: #0f172a;\n}\n.form-footer-actions .btn-group-row {\n  display: flex;\n  gap: 10px;\n}\n.status-pill-sub {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.74rem;\n  font-weight: 800;\n  padding: 4px 10px;\n  border-radius: 12px;\n}\n.status-pill-sub.success {\n  background: #dcfce7;\n  color: #166534;\n}\n.status-pill-sub.warning,\n.status-pill-sub.pending {\n  background: #fef3c7;\n  color: #92400e;\n}\n.status-pill-sub.danger {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.priority-pill {\n  font-size: 0.72rem;\n  font-weight: 800;\n  padding: 3px 8px;\n  border-radius: 6px;\n  text-transform: uppercase;\n}\n.priority-pill.urgent,\n.priority-pill.high {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.priority-pill.medium {\n  background: #fef3c7;\n  color: #92400e;\n}\n.priority-pill.low {\n  background: #f1f5f9;\n  color: #475569;\n}\n.count-tag {\n  font-size: 0.74rem;\n  font-weight: 800;\n  background: #f1f5f9;\n  color: #475569;\n  padding: 4px 10px;\n  border-radius: 20px;\n}\n.ops-toast {\n  padding: 12px 16px;\n  border-radius: 12px;\n  font-size: 0.84rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.ops-toast.success {\n  background: #dcfce7;\n  border: 1px solid #86efac;\n  color: #166534;\n}\n.ops-toast.error {\n  background: #fee2e2;\n  border: 1px solid #fecaca;\n  color: #991b1b;\n}\n.ops-empty-box {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 36px 20px;\n  color: #94a3b8;\n}\n.ops-empty-box i {\n  font-size: 2.8rem;\n  color: #cbd5e1;\n  margin-bottom: 8px;\n}\n.ops-empty-box h4 {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #475569;\n}\n.ops-empty-box p {\n  margin: 4px 0 0;\n  font-size: 0.8rem;\n  max-width: 320px;\n}\n.ops-empty-alert {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  color: #64748b;\n  font-size: 0.84rem;\n}\n.modal-backdrop-custom {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.6);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n  padding: 16px;\n  animation: fadeIn 0.2s ease-out;\n}\n.modal-backdrop-custom .modal-dialog-custom {\n  background: #ffffff;\n  border-radius: 20px;\n  width: 100%;\n  max-width: 540px;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n  animation: slideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.modal-backdrop-custom .modal-dialog-custom .modal-header-custom {\n  padding: 20px 24px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid #f1f5f9;\n}\n.modal-backdrop-custom .modal-dialog-custom .modal-header-custom .modal-title-wrap {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.modal-backdrop-custom .modal-dialog-custom .modal-header-custom .modal-title-wrap .modal-avatar {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  background: #ecfdf5;\n  color: #059669;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.3rem;\n}\n.modal-backdrop-custom .modal-dialog-custom .modal-header-custom .modal-title-wrap h3 {\n  margin: 0;\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.modal-backdrop-custom .modal-dialog-custom .modal-header-custom .modal-title-wrap p {\n  margin: 2px 0 0;\n  font-size: 0.78rem;\n  color: #64748b;\n}\n.modal-backdrop-custom .modal-dialog-custom .modal-header-custom .btn-close-custom {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #64748b;\n}\n.modal-backdrop-custom .modal-dialog-custom .modal-header-custom .btn-close-custom:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n.modal-backdrop-custom .modal-dialog-custom .modal-body-custom {\n  padding: 22px 24px;\n}\n.modal-backdrop-custom .modal-dialog-custom .modal-body-custom .modal-form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.modal-backdrop-custom .modal-dialog-custom .modal-body-custom .modal-form-grid .form-field {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.modal-backdrop-custom .modal-dialog-custom .modal-body-custom .modal-form-grid .form-field.full-width {\n  grid-column: 1/-1;\n}\n.modal-backdrop-custom .modal-dialog-custom .modal-body-custom .modal-form-grid .form-field label {\n  font-size: 0.76rem;\n  font-weight: 700;\n  color: #475569;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.modal-backdrop-custom .modal-dialog-custom .modal-body-custom .modal-form-grid .form-field label .req {\n  color: #ef4444;\n}\n.modal-backdrop-custom .modal-dialog-custom .modal-footer-custom {\n  padding: 16px 24px;\n  background: #f8fafc;\n  border-top: 1px solid #f1f5f9;\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n}\n.modal-backdrop-custom .modal-dialog-custom .modal-footer-custom .btn-action-ghost {\n  padding: 9px 18px;\n  border-radius: 10px;\n  border: 1px solid #cbd5e1;\n  background: #ffffff;\n  color: #475569;\n  font-weight: 700;\n  cursor: pointer;\n}\n.modal-backdrop-custom .modal-dialog-custom .modal-footer-custom .btn-action-ghost:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n.modal-backdrop-custom .modal-dialog-custom .modal-footer-custom .btn-gradient-primary {\n  padding: 9px 20px;\n  border-radius: 10px;\n  border: none;\n  background: #064e3b;\n  color: #ffffff;\n  font-weight: 800;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n.modal-backdrop-custom .modal-dialog-custom .modal-footer-custom .btn-gradient-primary:hover:not(:disabled) {\n  background: #047857;\n}\n.modal-backdrop-custom .modal-dialog-custom .modal-footer-custom .btn-gradient-primary:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.text-emerald {\n  color: #059669 !important;\n}\n.text-danger {\n  color: #ef4444 !important;\n}\n.text-success {\n  color: #10b981 !important;\n}\n.text-warning {\n  color: #f59e0b !important;\n}\n.text-primary {\n  color: #064e3b !important;\n}\n.text-blue {\n  color: #0284c7 !important;\n}\n.text-muted {\n  color: #64748b !important;\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes beaconWave {\n  0% {\n    transform: scale(0.9);\n    opacity: 0.9;\n  }\n  50% {\n    transform: scale(1.6);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1.6);\n    opacity: 0;\n  }\n}\n@keyframes laserScan {\n  0% {\n    top: 20px;\n  }\n  100% {\n    top: 210px;\n  }\n}\n@keyframes slideFadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(16px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=operations-center.component.css.map */\n'] }]
  }], () => [{ type: Dashboard }, { type: Bookings }, { type: TrekList }, { type: Users }, { type: Reviews }, { type: TrekBatchManagement }, { type: NotificationsService }, { type: Analytics }, { type: AuditService }, { type: AuthService }, { type: RbacService }, { type: DropdownManagerService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OperationsCenterComponent, { className: "OperationsCenterComponent", filePath: "src/app/operations-center/operations-center.component.ts", lineNumber: 49 });
})();

// src/app/operations-center/operations-center-module.ts
var routes = [{ path: "", component: OperationsCenterComponent }];
var _OperationsCenterModule = class _OperationsCenterModule {
};
_OperationsCenterModule.\u0275fac = function OperationsCenterModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OperationsCenterModule)();
};
_OperationsCenterModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _OperationsCenterModule });
_OperationsCenterModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, OperationsCenterComponent, RouterModule.forChild(routes)] });
var OperationsCenterModule = _OperationsCenterModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OperationsCenterModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [CommonModule, OperationsCenterComponent, RouterModule.forChild(routes)]
    }]
  }], null, null);
})();
export {
  OperationsCenterModule
};
//# sourceMappingURL=operations-center-module-H332XHWW.js.map
