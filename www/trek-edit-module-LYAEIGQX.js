import {
  optimizeImageForUpload
} from "./chunk-3C62WDQD.js";
import {
  NotificationService
} from "./chunk-SAB4OUIS.js";
import {
  DropdownManagerService
} from "./chunk-2AIND2RX.js";
import {
  AdminShellComponent
} from "./chunk-GLAFLAWJ.js";
import {
  DefaultValueAccessor,
  FormArrayName,
  FormBuilder,
  FormControlDirective,
  FormControlName,
  FormGroupDirective,
  FormGroupName,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-QNEZ2FH5.js";
import "./chunk-D4XXJJII.js";
import {
  ActivatedRoute,
  CUSTOM_ELEMENTS_SCHEMA,
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  EncryptionService,
  HttpClient,
  Injectable,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  Router,
  RouterModule,
  ViewChild,
  __async,
  __spreadProps,
  __spreadValues,
  debounceTime,
  environment,
  finalize,
  map,
  setClassMetadata,
  take,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-KQE4QDNK.js";

// src/app/treks/trek-edit/trek-edit.ts
var _TrekEdit = class _TrekEdit {
  constructor(http, crypto) {
    this.http = http;
    this.crypto = crypto;
    this.API = `${environment.baseUrl}`;
  }
  toTransportString(value) {
    if (value === null || value === void 0) {
      return "";
    }
    if (typeof value === "string") {
      return value;
    }
    if (typeof value === "number" || typeof value === "boolean" || typeof value === "bigint") {
      return String(value);
    }
    if (value instanceof Date) {
      return value.toISOString();
    }
    if (Array.isArray(value) || typeof value === "object") {
      return JSON.stringify(value);
    }
    return String(value);
  }
  editTrek(trekId) {
    return this.http.get(`${this.API}/getTrekByIdToUpdate/${trekId}`).pipe(map((res) => {
      const decrypted = this.crypto.decrypt(res.data);
      return __spreadProps(__spreadValues({}, res), {
        data: decrypted
      });
    }));
  }
  updateTrek(trekId, payload) {
    const bodyData = {};
    const transport = new FormData();
    payload.forEach((value, key) => {
      if (value instanceof Blob) {
        transport.append(key, value);
        return;
      }
      bodyData[key] = this.toTransportString(value);
    });
    const encryptedPayload = this.crypto.encrypt(bodyData);
    transport.append("encryptedPayload", encryptedPayload);
    return this.http.post(`${this.API}/treks/${trekId}`, transport).pipe(map((res) => {
      const decrypted = this.crypto.decrypt(res.data);
      return __spreadProps(__spreadValues({}, res), {
        data: decrypted
      });
    }));
  }
};
_TrekEdit.\u0275fac = function TrekEdit_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TrekEdit)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(EncryptionService));
};
_TrekEdit.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TrekEdit, factory: _TrekEdit.\u0275fac, providedIn: "root" });
var TrekEdit = _TrekEdit;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrekEdit, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: EncryptionService }], null);
})();

// src/app/treks/trek-edit/trek-edit.component.ts
var _c0 = ["coverFileInput"];
var _c1 = ["galleryFileInput"];
function TrekEditComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "div", 6);
    \u0275\u0275elementStart(2, "h5", 7);
    \u0275\u0275text(3, "Loading Trek Details...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 8);
    \u0275\u0275text(5, "Fetching batches, itinerary timeline, and media gallery.");
    \u0275\u0275elementEnd()();
  }
}
function TrekEditComponent_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275element(1, "i", 27);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", "status-" + ctx_r1.statusTone);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.statusTone === "success" ? "bi-check-circle-fill" : ctx_r1.statusTone === "warning" ? "bi-exclamation-triangle-fill" : "bi-x-circle-fill");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.statusMessage);
  }
}
function TrekEditComponent_div_3_button_4_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.batches.length);
  }
}
function TrekEditComponent_div_3_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function TrekEditComponent_div_3_button_4_Template_button_click_0_listener() {
      const sec_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setActiveSection(sec_r4.id));
    });
    \u0275\u0275element(1, "i");
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, TrekEditComponent_div_3_button_4_span_4_Template, 2, 1, "span", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sec_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.activeSection === sec_r4.id);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("bi ", sec_r4.icon, " me-2"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(sec_r4.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", sec_r4.id === "batches");
  }
}
function TrekEditComponent_div_3_div_6_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275text(1, "Trek title is required.");
    \u0275\u0275elementEnd();
  }
}
function TrekEditComponent_div_3_div_6_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275text(1, "Location is required.");
    \u0275\u0275elementEnd();
  }
}
function TrekEditComponent_div_3_div_6_option_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 67);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r6 = ctx.$implicit;
    \u0275\u0275property("value", d_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r6);
  }
}
function TrekEditComponent_div_3_div_6_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275text(1, "Select a difficulty level.");
    \u0275\u0275elementEnd();
  }
}
function TrekEditComponent_div_3_div_6_option_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 67);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r7 = ctx.$implicit;
    \u0275\u0275property("value", c_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r7);
  }
}
function TrekEditComponent_div_3_div_6_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275text(1, "Select a category.");
    \u0275\u0275elementEnd();
  }
}
function TrekEditComponent_div_3_div_6_option_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 67);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r8 = ctx.$implicit;
    \u0275\u0275property("value", col_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(col_r8);
  }
}
function TrekEditComponent_div_3_div_6_option_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 67);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r9 = ctx.$implicit;
    \u0275\u0275property("value", f_r9);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r9);
  }
}
function TrekEditComponent_div_3_div_6_div_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 68)(1, "span", 69);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 70);
    \u0275\u0275elementStart(4, "button", 71);
    \u0275\u0275listener("click", function TrekEditComponent_div_3_div_6_div_72_Template_button_click_4_listener() {
      const i_r11 = \u0275\u0275restoreView(_r10).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeHighlight(i_r11));
    });
    \u0275\u0275element(5, "i", 72);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r11 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", i_r11 + 1);
    \u0275\u0275advance();
    \u0275\u0275property("formControlName", i_r11);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.highlights.length <= 1);
  }
}
function TrekEditComponent_div_3_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 32)(2, "div", 33);
    \u0275\u0275element(3, "i", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 35)(5, "h4", 36);
    \u0275\u0275text(6, "1. Trek Basics & Classification");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 36);
    \u0275\u0275text(8, "Core destination metadata and physical difficulty parameters");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 37)(10, "div", 38)(11, "div", 39)(12, "label", 40);
    \u0275\u0275text(13, "Trek Title ");
    \u0275\u0275elementStart(14, "span", 41);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(16, "input", 42);
    \u0275\u0275template(17, TrekEditComponent_div_3_div_6_div_17_Template, 2, 0, "div", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 39)(19, "label", 40);
    \u0275\u0275text(20, "Location / Region ");
    \u0275\u0275elementStart(21, "span", 41);
    \u0275\u0275text(22, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(23, "input", 44);
    \u0275\u0275template(24, TrekEditComponent_div_3_div_6_div_24_Template, 2, 0, "div", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 45)(26, "label", 40);
    \u0275\u0275text(27, "Difficulty ");
    \u0275\u0275elementStart(28, "span", 41);
    \u0275\u0275text(29, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "select", 46)(31, "option", 47);
    \u0275\u0275text(32, "Select Difficulty");
    \u0275\u0275elementEnd();
    \u0275\u0275template(33, TrekEditComponent_div_3_div_6_option_33_Template, 2, 2, "option", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275template(34, TrekEditComponent_div_3_div_6_div_34_Template, 2, 0, "div", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 45)(36, "label", 40);
    \u0275\u0275text(37, "Category ");
    \u0275\u0275elementStart(38, "span", 41);
    \u0275\u0275text(39, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "select", 49)(41, "option", 47);
    \u0275\u0275text(42, "Select Category");
    \u0275\u0275elementEnd();
    \u0275\u0275template(43, TrekEditComponent_div_3_div_6_option_43_Template, 2, 2, "option", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275template(44, TrekEditComponent_div_3_div_6_div_44_Template, 2, 0, "div", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 45)(46, "label", 40);
    \u0275\u0275text(47, "Collection / Series");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "select", 50)(49, "option", 51);
    \u0275\u0275text(50, "None / Standard");
    \u0275\u0275elementEnd();
    \u0275\u0275template(51, TrekEditComponent_div_3_div_6_option_51_Template, 2, 2, "option", 48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 45)(53, "label", 40);
    \u0275\u0275text(54, "Fitness Level Required");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "select", 52)(56, "option", 51);
    \u0275\u0275text(57, "Recommended / Any");
    \u0275\u0275elementEnd();
    \u0275\u0275template(58, TrekEditComponent_div_3_div_6_option_58_Template, 2, 2, "option", 48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 53)(60, "label", 40);
    \u0275\u0275text(61, "Description & Experience Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275element(62, "textarea", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "div", 55)(64, "div", 56)(65, "label", 57);
    \u0275\u0275element(66, "i", 58);
    \u0275\u0275text(67, " Key Highlights");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "button", 59);
    \u0275\u0275listener("click", function TrekEditComponent_div_3_div_6_Template_button_click_68_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addHighlight());
    });
    \u0275\u0275element(69, "i", 60);
    \u0275\u0275text(70, " Add Highlight ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "div", 61);
    \u0275\u0275template(72, TrekEditComponent_div_3_div_6_div_72_Template, 6, 3, "div", 62);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(73, "div", 63)(74, "button", 64);
    \u0275\u0275listener("click", function TrekEditComponent_div_3_div_6_Template_button_click_74_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setActiveSection("batches"));
    });
    \u0275\u0275text(75, " Next: Batches & Captains ");
    \u0275\u0275element(76, "i", 65);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(16);
    \u0275\u0275classProp("is-invalid", ctx_r1.isInvalid("name"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isInvalid("name"));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ctx_r1.isInvalid("location"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isInvalid("location"));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ctx_r1.isInvalid("difficulty"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.difficulties);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isInvalid("difficulty"));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ctx_r1.isInvalid("category"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.categories);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isInvalid("category"));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.collections);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.fitnessLevels);
    \u0275\u0275advance(14);
    \u0275\u0275property("ngForOf", ctx_r1.highlights.controls);
  }
}
function TrekEditComponent_div_3_div_7_div_14_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 118);
    \u0275\u0275text(1, "Active");
    \u0275\u0275elementEnd();
  }
}
function TrekEditComponent_div_3_div_7_div_14_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 119);
    \u0275\u0275text(1, "Inactive");
    \u0275\u0275elementEnd();
  }
}
function TrekEditComponent_div_3_div_7_div_14_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 120);
    \u0275\u0275text(1, "Full");
    \u0275\u0275elementEnd();
  }
}
function TrekEditComponent_div_3_div_7_div_14_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275text(1, "Required.");
    \u0275\u0275elementEnd();
  }
}
function TrekEditComponent_div_3_div_7_div_14_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275text(1, "Required.");
    \u0275\u0275elementEnd();
  }
}
function TrekEditComponent_div_3_div_7_div_14_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275text(1, "Required.");
    \u0275\u0275elementEnd();
  }
}
function TrekEditComponent_div_3_div_7_div_14_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275text(1, "Required.");
    \u0275\u0275elementEnd();
  }
}
function TrekEditComponent_div_3_div_7_div_14_option_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 67);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r15 = ctx.$implicit;
    \u0275\u0275property("value", s_r15);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r15);
  }
}
function TrekEditComponent_div_3_div_7_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 83)(1, "div", 84)(2, "div", 23)(3, "span", 85);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, TrekEditComponent_div_3_div_7_div_14_span_5_Template, 2, 0, "span", 86)(6, TrekEditComponent_div_3_div_7_div_14_span_6_Template, 2, 0, "span", 87)(7, TrekEditComponent_div_3_div_7_div_14_span_7_Template, 2, 0, "span", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 89);
    \u0275\u0275listener("click", function TrekEditComponent_div_3_div_7_div_14_Template_button_click_8_listener() {
      const i_r14 = \u0275\u0275restoreView(_r13).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeBatch(i_r14));
    });
    \u0275\u0275element(9, "i", 90);
    \u0275\u0275text(10, " Remove Batch ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 91)(12, "div", 92)(13, "label", 40);
    \u0275\u0275text(14, "Start Date ");
    \u0275\u0275elementStart(15, "span", 41);
    \u0275\u0275text(16, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(17, "input", 93);
    \u0275\u0275template(18, TrekEditComponent_div_3_div_7_div_14_div_18_Template, 2, 0, "div", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 92)(20, "label", 40);
    \u0275\u0275text(21, "End Date ");
    \u0275\u0275elementStart(22, "span", 41);
    \u0275\u0275text(23, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(24, "input", 94);
    \u0275\u0275template(25, TrekEditComponent_div_3_div_7_div_14_div_25_Template, 2, 0, "div", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 92)(27, "label", 40);
    \u0275\u0275text(28, "Available Slots ");
    \u0275\u0275elementStart(29, "span", 41);
    \u0275\u0275text(30, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(31, "input", 95);
    \u0275\u0275template(32, TrekEditComponent_div_3_div_7_div_14_div_32_Template, 2, 0, "div", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 92)(34, "label", 40);
    \u0275\u0275text(35, "Price per Person (\u20B9) ");
    \u0275\u0275elementStart(36, "span", 41);
    \u0275\u0275text(37, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 68)(39, "span", 96);
    \u0275\u0275text(40, "\u20B9");
    \u0275\u0275elementEnd();
    \u0275\u0275element(41, "input", 97);
    \u0275\u0275elementEnd();
    \u0275\u0275template(42, TrekEditComponent_div_3_div_7_div_14_div_42_Template, 2, 0, "div", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 92)(44, "label", 40);
    \u0275\u0275text(45, "Duration Label");
    \u0275\u0275elementEnd();
    \u0275\u0275element(46, "input", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 92)(48, "label", 40);
    \u0275\u0275text(49, "Batch Status ");
    \u0275\u0275elementStart(50, "span", 41);
    \u0275\u0275text(51, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "select", 99)(53, "option", 47);
    \u0275\u0275text(54, "Select Status");
    \u0275\u0275elementEnd();
    \u0275\u0275template(55, TrekEditComponent_div_3_div_7_div_14_option_55_Template, 2, 2, "option", 48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 100)(57, "label", 40);
    \u0275\u0275text(58, "Min - Max Age");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 101);
    \u0275\u0275element(60, "input", 102)(61, "input", 103);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 100)(63, "label", 40);
    \u0275\u0275text(64, "Min - Max Participants");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "div", 101);
    \u0275\u0275element(66, "input", 104)(67, "input", 105);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(68, "div", 106)(69, "div", 107)(70, "div", 108);
    \u0275\u0275element(71, "i", 109);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "div")(73, "h6", 110);
    \u0275\u0275text(74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "p", 8);
    \u0275\u0275text(76, "Assigned leader details shared with booked participants on confirmation & WhatsApp roster.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(77, "div", 38)(78, "div", 111)(79, "label", 40);
    \u0275\u0275text(80, "Captain / Leader Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "div", 68)(82, "span", 96);
    \u0275\u0275element(83, "i", 112);
    \u0275\u0275elementEnd();
    \u0275\u0275element(84, "input", 113);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "div", 111)(86, "label", 40);
    \u0275\u0275text(87, "Captain Contact / WhatsApp Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "div", 68)(89, "span", 96);
    \u0275\u0275element(90, "i", 114);
    \u0275\u0275elementEnd();
    \u0275\u0275element(91, "input", 115);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(92, "div", 111)(93, "label", 40);
    \u0275\u0275text(94, "Captain Email / Alt Contact");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "div", 68)(96, "span", 96);
    \u0275\u0275element(97, "i", 116);
    \u0275\u0275elementEnd();
    \u0275\u0275element(98, "input", 117);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    const b_r16 = ctx.$implicit;
    const i_r14 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("formGroupName", i_r14);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Batch #", i_r14 + 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_7_0 = b_r16.get("batchStatus")) == null ? null : tmp_7_0.value) === "active");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_8_0 = b_r16.get("batchStatus")) == null ? null : tmp_8_0.value) === "inactive");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_9_0 = b_r16.get("batchStatus")) == null ? null : tmp_9_0.value) === "full");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.batches.length <= 1);
    \u0275\u0275advance(9);
    \u0275\u0275classProp("is-invalid", ctx_r1.isBatchFieldInvalid(i_r14, "startDate"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isBatchFieldInvalid(i_r14, "startDate"));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ctx_r1.isBatchFieldInvalid(i_r14, "endDate"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isBatchFieldInvalid(i_r14, "endDate"));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ctx_r1.isBatchFieldInvalid(i_r14, "availableSlots"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isBatchFieldInvalid(i_r14, "availableSlots"));
    \u0275\u0275advance(9);
    \u0275\u0275classProp("is-invalid", ctx_r1.isBatchFieldInvalid(i_r14, "price"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isBatchFieldInvalid(i_r14, "price"));
    \u0275\u0275advance(10);
    \u0275\u0275classProp("is-invalid", ctx_r1.isBatchFieldInvalid(i_r14, "batchStatus"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.batchStatuses);
    \u0275\u0275advance(19);
    \u0275\u0275textInterpolate1("Trek Captain & Emergency Contacts for Batch #", i_r14 + 1);
  }
}
function TrekEditComponent_div_3_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 73)(2, "div", 74)(3, "div", 33);
    \u0275\u0275element(4, "i", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 35)(6, "h4", 36);
    \u0275\u0275text(7, "2. Batches & Assigned Captains");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 36);
    \u0275\u0275text(9, "Manage batch schedules, pricing, and assign Trek Captains with direct contact details.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "button", 76);
    \u0275\u0275listener("click", function TrekEditComponent_div_3_div_7_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addBatch());
    });
    \u0275\u0275element(11, "i", 77);
    \u0275\u0275text(12, " Add New Batch ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 78);
    \u0275\u0275template(14, TrekEditComponent_div_3_div_7_div_14_Template, 99, 22, "div", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 80)(16, "button", 24);
    \u0275\u0275listener("click", function TrekEditComponent_div_3_div_7_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setActiveSection("basic"));
    });
    \u0275\u0275element(17, "i", 81);
    \u0275\u0275text(18, " Back to Basics ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 82);
    \u0275\u0275listener("click", function TrekEditComponent_div_3_div_7_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setActiveSection("itinerary"));
    });
    \u0275\u0275text(20, " Next: Itinerary & Waypoints ");
    \u0275\u0275element(21, "i", 65);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(14);
    \u0275\u0275property("ngForOf", ctx_r1.batches.controls);
  }
}
function TrekEditComponent_div_3_div_8_div_18_div_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 142);
    \u0275\u0275element(1, "input", 143)(2, "input", 144);
    \u0275\u0275elementStart(3, "button", 145);
    \u0275\u0275listener("click", function TrekEditComponent_div_3_div_8_div_18_div_1_div_13_Template_button_click_3_listener() {
      const aIndex_r21 = \u0275\u0275restoreView(_r20).index;
      const dIndex_r19 = \u0275\u0275nextContext().index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.removeActivity(0, dIndex_r19, aIndex_r21));
    });
    \u0275\u0275element(4, "i", 146);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const act_r22 = ctx.$implicit;
    \u0275\u0275property("formGroup", act_r22);
  }
}
function TrekEditComponent_div_3_div_8_div_18_div_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 147);
    \u0275\u0275text(1, ' No timestamped activities added yet. Click "+ Activity" above to add time slots. ');
    \u0275\u0275elementEnd();
  }
}
function TrekEditComponent_div_3_div_8_div_18_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 133)(1, "div", 56)(2, "div", 134)(3, "span", 135);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 136);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 101)(7, "button", 137);
    \u0275\u0275listener("click", function TrekEditComponent_div_3_div_8_div_18_div_1_Template_button_click_7_listener() {
      const dIndex_r19 = \u0275\u0275restoreView(_r18).index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.addActivity(0, dIndex_r19));
    });
    \u0275\u0275element(8, "i", 77);
    \u0275\u0275text(9, " Activity ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 138);
    \u0275\u0275listener("click", function TrekEditComponent_div_3_div_8_div_18_div_1_Template_button_click_10_listener() {
      const dIndex_r19 = \u0275\u0275restoreView(_r18).index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.removeItineraryDay(0, dIndex_r19));
    });
    \u0275\u0275element(11, "i", 72);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 139);
    \u0275\u0275template(13, TrekEditComponent_div_3_div_8_div_18_div_1_div_13_Template, 5, 1, "div", 140)(14, TrekEditComponent_div_3_div_8_div_18_div_1_div_14_Template, 2, 0, "div", 141);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const day_r23 = ctx.$implicit;
    const dIndex_r19 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", day_r23);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Day ", dIndex_r19 + 1);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.getItineraryDays(0).length <= 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.getActivities(0, dIndex_r19).controls);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getActivities(0, dIndex_r19).length === 0);
  }
}
function TrekEditComponent_div_3_div_8_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 131);
    \u0275\u0275template(1, TrekEditComponent_div_3_div_8_div_18_div_1_Template, 15, 5, "div", 132);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.getItineraryDays(0).controls);
  }
}
function TrekEditComponent_div_3_div_8_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 148)(1, "span", 149);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 150)(4, "span", 151);
    \u0275\u0275text(5, "KM");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "input", 152);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 153)(8, "span", 151);
    \u0275\u0275text(9, "Elev (m)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 154);
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 155)(12, "input", 156);
    \u0275\u0275elementStart(13, "button", 138);
    \u0275\u0275listener("click", function TrekEditComponent_div_3_div_8_div_32_Template_button_click_13_listener() {
      const wIndex_r25 = \u0275\u0275restoreView(_r24).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeWaypoint(wIndex_r25));
    });
    \u0275\u0275element(14, "i", 72);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const wIndex_r25 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("formGroupName", wIndex_r25);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", wIndex_r25 + 1);
    \u0275\u0275advance(11);
    \u0275\u0275property("disabled", ctx_r1.elevationWaypoints.length <= 2);
  }
}
function TrekEditComponent_div_3_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 32)(2, "div", 33);
    \u0275\u0275element(3, "i", 121);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 35)(5, "h4", 36);
    \u0275\u0275text(6, "3. Day-by-Day Itinerary & Elevation Profile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 36);
    \u0275\u0275text(8, "Schedule activities for each day and establish checkpoint milestones.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 37)(10, "div", 122)(11, "div", 123)(12, "h5", 124);
    \u0275\u0275element(13, "i", 125);
    \u0275\u0275text(14, "Day-by-Day Schedule (Batch #1)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 59);
    \u0275\u0275listener("click", function TrekEditComponent_div_3_div_8_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addItineraryDay(0));
    });
    \u0275\u0275element(16, "i", 60);
    \u0275\u0275text(17, " Add Day ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, TrekEditComponent_div_3_div_8_div_18_Template, 2, 1, "div", 126);
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "hr", 127);
    \u0275\u0275elementStart(20, "div")(21, "div", 123)(22, "div")(23, "h5", 124);
    \u0275\u0275element(24, "i", 128);
    \u0275\u0275text(25, "Elevation Profile & Trail Checkpoints");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p", 8);
    \u0275\u0275text(27, "Renders the interactive SVG elevation chart on user discovery and booking pages.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "button", 59);
    \u0275\u0275listener("click", function TrekEditComponent_div_3_div_8_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addWaypoint());
    });
    \u0275\u0275element(29, "i", 60);
    \u0275\u0275text(30, " Add Checkpoint ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 129);
    \u0275\u0275template(32, TrekEditComponent_div_3_div_8_div_32_Template, 15, 3, "div", 130);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 80)(34, "button", 24);
    \u0275\u0275listener("click", function TrekEditComponent_div_3_div_8_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setActiveSection("batches"));
    });
    \u0275\u0275element(35, "i", 81);
    \u0275\u0275text(36, " Back to Batches ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 82);
    \u0275\u0275listener("click", function TrekEditComponent_div_3_div_8_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setActiveSection("gear"));
    });
    \u0275\u0275text(38, " Next: Checklist & Inclusions ");
    \u0275\u0275element(39, "i", 65);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(18);
    \u0275\u0275property("ngIf", ctx_r1.batches.length > 0);
    \u0275\u0275advance(14);
    \u0275\u0275property("ngForOf", ctx_r1.elevationWaypoints.controls);
  }
}
function TrekEditComponent_div_3_div_9_div_11_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 68)(1, "span", 171);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 172);
    \u0275\u0275elementStart(4, "button", 71);
    \u0275\u0275listener("click", function TrekEditComponent_div_3_div_9_div_11_div_9_Template_button_click_4_listener() {
      const ii_r29 = \u0275\u0275restoreView(_r28).index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.removeInclusion(0, ii_r29));
    });
    \u0275\u0275element(5, "i", 72);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ii_r29 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275property("formControl", ctx_r1.asFormControl(ctx_r1.getInclusions(0).at(ii_r29)));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.getInclusions(0).length <= 1);
  }
}
function TrekEditComponent_div_3_div_9_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 160)(1, "div", 56)(2, "label", 168);
    \u0275\u0275element(3, "i", 169);
    \u0275\u0275text(4, " Inclusions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 59);
    \u0275\u0275listener("click", function TrekEditComponent_div_3_div_9_div_11_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.addInclusion(0));
    });
    \u0275\u0275element(6, "i", 77);
    \u0275\u0275text(7, " Add ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 170);
    \u0275\u0275template(9, TrekEditComponent_div_3_div_9_div_11_div_9_Template, 6, 2, "div", 62);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r1.getInclusions(0).controls);
  }
}
function TrekEditComponent_div_3_div_9_div_12_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 68)(1, "span", 175);
    \u0275\u0275text(2, "\u2715");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 176);
    \u0275\u0275elementStart(4, "button", 71);
    \u0275\u0275listener("click", function TrekEditComponent_div_3_div_9_div_12_div_9_Template_button_click_4_listener() {
      const ei_r32 = \u0275\u0275restoreView(_r31).index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.removeExclusion(0, ei_r32));
    });
    \u0275\u0275element(5, "i", 72);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ei_r32 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275property("formControl", ctx_r1.asFormControl(ctx_r1.getExclusions(0).at(ei_r32)));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.getExclusions(0).length <= 1);
  }
}
function TrekEditComponent_div_3_div_9_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 160)(1, "div", 56)(2, "label", 173);
    \u0275\u0275element(3, "i", 174);
    \u0275\u0275text(4, " Exclusions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 59);
    \u0275\u0275listener("click", function TrekEditComponent_div_3_div_9_div_12_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.addExclusion(0));
    });
    \u0275\u0275element(6, "i", 77);
    \u0275\u0275text(7, " Add ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 170);
    \u0275\u0275template(9, TrekEditComponent_div_3_div_9_div_12_div_9_Template, 6, 2, "div", 62);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r1.getExclusions(0).controls);
  }
}
function TrekEditComponent_div_3_div_9_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 68)(1, "span", 96);
    \u0275\u0275text(2, "\u{1F392}");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 177);
    \u0275\u0275elementStart(4, "button", 178);
    \u0275\u0275listener("click", function TrekEditComponent_div_3_div_9_div_22_Template_button_click_4_listener() {
      const ti_r34 = \u0275\u0275restoreView(_r33).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeThingToCarry(ti_r34));
    });
    \u0275\u0275element(5, "i", 72);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ti_r34 = ctx.index;
    \u0275\u0275advance(3);
    \u0275\u0275property("formControlName", ti_r34);
  }
}
function TrekEditComponent_div_3_div_9_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 179);
    \u0275\u0275text(1, 'No custom items added. Click "+ Add Item" above.');
    \u0275\u0275elementEnd();
  }
}
function TrekEditComponent_div_3_div_9_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 68)(1, "span", 96);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 180);
    \u0275\u0275elementStart(4, "button", 178);
    \u0275\u0275listener("click", function TrekEditComponent_div_3_div_9_div_33_Template_button_click_4_listener() {
      const ni_r36 = \u0275\u0275restoreView(_r35).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeImportantNote(ni_r36));
    });
    \u0275\u0275element(5, "i", 72);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ni_r36 = ctx.index;
    \u0275\u0275advance(3);
    \u0275\u0275property("formControlName", ni_r36);
  }
}
function TrekEditComponent_div_3_div_9_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 179);
    \u0275\u0275text(1, 'No advisory notes added. Click "+ Add Note" above.');
    \u0275\u0275elementEnd();
  }
}
function TrekEditComponent_div_3_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 32)(2, "div", 33);
    \u0275\u0275element(3, "i", 157);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 35)(5, "h4", 36);
    \u0275\u0275text(6, "4. Inclusions, Things to Carry & Advisory Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 36);
    \u0275\u0275text(8, "Essential gear checklist and transparent package pricing breakdown.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 37)(10, "div", 158);
    \u0275\u0275template(11, TrekEditComponent_div_3_div_9_div_11_Template, 10, 1, "div", 159)(12, TrekEditComponent_div_3_div_9_div_12_Template, 10, 1, "div", 159);
    \u0275\u0275elementStart(13, "div", 160)(14, "div", 56)(15, "label", 161);
    \u0275\u0275element(16, "i", 162);
    \u0275\u0275text(17, " Things to Carry Checklist");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 59);
    \u0275\u0275listener("click", function TrekEditComponent_div_3_div_9_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addThingToCarry());
    });
    \u0275\u0275element(19, "i", 77);
    \u0275\u0275text(20, " Add Item ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 163);
    \u0275\u0275template(22, TrekEditComponent_div_3_div_9_div_22_Template, 6, 1, "div", 62)(23, TrekEditComponent_div_3_div_9_div_23_Template, 2, 0, "div", 164);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 160)(25, "div", 56)(26, "label", 165);
    \u0275\u0275element(27, "i", 166);
    \u0275\u0275text(28, " Important Guidelines & Rules");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 59);
    \u0275\u0275listener("click", function TrekEditComponent_div_3_div_9_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addImportantNote());
    });
    \u0275\u0275element(30, "i", 77);
    \u0275\u0275text(31, " Add Note ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 167);
    \u0275\u0275template(33, TrekEditComponent_div_3_div_9_div_33_Template, 6, 1, "div", 62)(34, TrekEditComponent_div_3_div_9_div_34_Template, 2, 0, "div", 164);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(35, "div", 80)(36, "button", 24);
    \u0275\u0275listener("click", function TrekEditComponent_div_3_div_9_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setActiveSection("itinerary"));
    });
    \u0275\u0275element(37, "i", 81);
    \u0275\u0275text(38, " Back to Itinerary ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "button", 82);
    \u0275\u0275listener("click", function TrekEditComponent_div_3_div_9_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setActiveSection("media"));
    });
    \u0275\u0275text(40, " Next: Media & Gallery ");
    \u0275\u0275element(41, "i", 65);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", ctx_r1.batches.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.batches.length > 0);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", ctx_r1.thingsToCarry.controls);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.thingsToCarry.length === 0);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", ctx_r1.importantNotes.controls);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.importantNotes.length === 0);
  }
}
function TrekEditComponent_div_3_div_10_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 192);
    \u0275\u0275listener("click", function TrekEditComponent_div_3_div_10_div_14_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r38);
      const coverFileInput_r39 = \u0275\u0275reference(7);
      return \u0275\u0275resetView(coverFileInput_r39.click());
    });
    \u0275\u0275element(1, "i", 193);
    \u0275\u0275elementStart(2, "h6", 7);
    \u0275\u0275text(3, "Upload New Cover Photo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 8);
    \u0275\u0275text(5, "Recommended: 1920x1080px (16:9), PNG/JPG/WEBP");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 194, 1);
    \u0275\u0275listener("change", function TrekEditComponent_div_3_div_10_div_14_Template_input_change_6_listener($event) {
      \u0275\u0275restoreView(_r38);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onCoverImageSelected($event));
    });
    \u0275\u0275elementEnd()();
  }
}
function TrekEditComponent_div_3_div_10_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 195);
    \u0275\u0275element(1, "img", 196);
    \u0275\u0275elementStart(2, "button", 197);
    \u0275\u0275listener("click", function TrekEditComponent_div_3_div_10_div_15_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r40);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeCoverImage());
    });
    \u0275\u0275element(3, "i", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 198);
    \u0275\u0275text(5, "Featured Cover");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.coverPreview, \u0275\u0275sanitizeUrl);
  }
}
function TrekEditComponent_div_3_div_10_div_25_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 202);
    \u0275\u0275element(1, "img", 203);
    \u0275\u0275elementStart(2, "button", 204);
    \u0275\u0275listener("click", function TrekEditComponent_div_3_div_10_div_25_div_1_Template_button_click_2_listener() {
      const filename_r43 = \u0275\u0275restoreView(_r42).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.removeExistingGalleryImage(filename_r43));
    });
    \u0275\u0275element(3, "i", 72);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const filename_r43 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.getImageUrl(filename_r43), \u0275\u0275sanitizeUrl);
  }
}
function TrekEditComponent_div_3_div_10_div_25_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 205);
    \u0275\u0275element(1, "img", 206);
    \u0275\u0275elementStart(2, "button", 207);
    \u0275\u0275listener("click", function TrekEditComponent_div_3_div_10_div_25_div_2_Template_button_click_2_listener() {
      const gIndex_r45 = \u0275\u0275restoreView(_r44).index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.removeNewGalleryImage(gIndex_r45));
    });
    \u0275\u0275element(3, "i", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 208);
    \u0275\u0275text(5, "New");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const preview_r46 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", preview_r46, \u0275\u0275sanitizeUrl);
  }
}
function TrekEditComponent_div_3_div_10_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 199);
    \u0275\u0275template(1, TrekEditComponent_div_3_div_10_div_25_div_1_Template, 4, 1, "div", 200)(2, TrekEditComponent_div_3_div_10_div_25_div_2_Template, 6, 1, "div", 201);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.existingGalleryFilenames);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.galleryPreviews);
  }
}
function TrekEditComponent_div_3_div_10_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 209);
    \u0275\u0275listener("click", function TrekEditComponent_div_3_div_10_div_26_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r47);
      \u0275\u0275nextContext();
      const galleryFileInput_r41 = \u0275\u0275reference(24);
      return \u0275\u0275resetView(galleryFileInput_r41.click());
    });
    \u0275\u0275element(1, "i", 210);
    \u0275\u0275elementStart(2, "p", 8);
    \u0275\u0275text(3, "Upload multi-angle trail photos, waterfalls, campsites & summit panoramas.");
    \u0275\u0275elementEnd()();
  }
}
function TrekEditComponent_div_3_div_10_span_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 211);
    \u0275\u0275text(2, " Save All Changes");
    \u0275\u0275elementEnd();
  }
}
function TrekEditComponent_div_3_div_10_span_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "span", 212);
    \u0275\u0275text(2, " Saving...");
    \u0275\u0275elementEnd();
  }
}
function TrekEditComponent_div_3_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 32)(2, "div", 33);
    \u0275\u0275element(3, "i", 181);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 35)(5, "h4", 36);
    \u0275\u0275text(6, "5. Cover Image & Gallery Media");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 36);
    \u0275\u0275text(8, "Manage featured cover photo and supplementary gallery slides.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 37)(10, "div", 158)(11, "div", 182)(12, "label", 183);
    \u0275\u0275text(13, "Featured Cover Image (Hero)");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, TrekEditComponent_div_3_div_10_div_14_Template, 8, 0, "div", 184)(15, TrekEditComponent_div_3_div_10_div_15_Template, 6, 1, "div", 185);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 186)(17, "div", 56)(18, "label", 187);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 59);
    \u0275\u0275listener("click", function TrekEditComponent_div_3_div_10_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r37);
      const galleryFileInput_r41 = \u0275\u0275reference(24);
      return \u0275\u0275resetView(galleryFileInput_r41.click());
    });
    \u0275\u0275element(21, "i", 77);
    \u0275\u0275text(22, " Add Images ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 188, 0);
    \u0275\u0275listener("change", function TrekEditComponent_div_3_div_10_Template_input_change_23_listener($event) {
      \u0275\u0275restoreView(_r37);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onGalleryImagesSelected($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(25, TrekEditComponent_div_3_div_10_div_25_Template, 3, 2, "div", 189)(26, TrekEditComponent_div_3_div_10_div_26_Template, 4, 0, "div", 190);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 80)(28, "button", 24);
    \u0275\u0275listener("click", function TrekEditComponent_div_3_div_10_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r37);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setActiveSection("gear"));
    });
    \u0275\u0275element(29, "i", 81);
    \u0275\u0275text(30, " Back to Checklist ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 191);
    \u0275\u0275template(32, TrekEditComponent_div_3_div_10_span_32_Template, 3, 0, "span", 4)(33, TrekEditComponent_div_3_div_10_span_33_Template, 3, 0, "span", 4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(14);
    \u0275\u0275property("ngIf", !ctx_r1.coverPreview);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.coverPreview);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Gallery Visuals (", ctx_r1.existingGalleryFilenames.length + ctx_r1.galleryPreviews.length, " total) ");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.existingGalleryFilenames.length > 0 || ctx_r1.galleryPreviews.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.existingGalleryFilenames.length === 0 && ctx_r1.galleryPreviews.length === 0);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSaving);
  }
}
function TrekEditComponent_div_3_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "i", 213);
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r1.editTrekForm.get("name")) == null ? null : tmp_2_0.value);
  }
}
function TrekEditComponent_div_3_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "i", 214);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("From \u20B9", \u0275\u0275pipeBind1(4, 1, ctx_r1.minTrekPrice));
  }
}
function TrekEditComponent_div_3_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 215);
    \u0275\u0275element(1, "i", 216);
    \u0275\u0275elementStart(2, "span", 217);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Autosaved ", \u0275\u0275pipeBind2(4, 1, ctx_r1.lastAutoSavedAt, "shortTime"));
  }
}
function TrekEditComponent_div_3_span_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 211);
    \u0275\u0275text(2, " Save Changes");
    \u0275\u0275elementEnd();
  }
}
function TrekEditComponent_div_3_span_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "span", 212);
    \u0275\u0275text(2, " Saving...");
    \u0275\u0275elementEnd();
  }
}
function TrekEditComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, TrekEditComponent_div_3_div_1_Template, 4, 3, "div", 9);
    \u0275\u0275elementStart(2, "div", 10)(3, "div", 11);
    \u0275\u0275template(4, TrekEditComponent_div_3_button_4_Template, 5, 7, "button", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "form", 13);
    \u0275\u0275listener("ngSubmit", function TrekEditComponent_div_3_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveTrek());
    });
    \u0275\u0275template(6, TrekEditComponent_div_3_div_6_Template, 77, 17, "div", 14)(7, TrekEditComponent_div_3_div_7_Template, 22, 1, "div", 14)(8, TrekEditComponent_div_3_div_8_Template, 40, 2, "div", 14)(9, TrekEditComponent_div_3_div_9_Template, 42, 6, "div", 14)(10, TrekEditComponent_div_3_div_10_Template, 34, 8, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 15)(12, "div", 16)(13, "div", 17);
    \u0275\u0275template(14, TrekEditComponent_div_3_div_14_Template, 4, 1, "div", 18);
    \u0275\u0275elementStart(15, "div", 19);
    \u0275\u0275element(16, "i", 20);
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 19);
    \u0275\u0275element(20, "i", 21);
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(23, TrekEditComponent_div_3_div_23_Template, 5, 3, "div", 18)(24, TrekEditComponent_div_3_div_24_Template, 5, 4, "div", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 23)(26, "button", 24);
    \u0275\u0275listener("click", function TrekEditComponent_div_3_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(27, " Back to Treks ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 25);
    \u0275\u0275listener("click", function TrekEditComponent_div_3_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveTrek());
    });
    \u0275\u0275template(29, TrekEditComponent_div_3_span_29_Template, 3, 0, "span", 4)(30, TrekEditComponent_div_3_span_30_Template, 3, 0, "span", 4);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_9_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.statusMessage);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.sections);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.editTrekForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeSection === "basic");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeSection === "batches");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeSection === "itinerary");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeSection === "gear");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeSection === "media");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", (tmp_9_0 = ctx_r1.editTrekForm.get("name")) == null ? null : tmp_9_0.value);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r1.totalBatchesCount, " Batch", ctx_r1.totalBatchesCount > 1 ? "es" : "");
    \u0275\u0275advance();
    \u0275\u0275classProp("highlight", ctx_r1.totalCaptainsAssigned > 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r1.totalCaptainsAssigned, "/", ctx_r1.totalBatchesCount, " Captains Assigned");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.minTrekPrice > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.lastAutoSavedAt);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSaving);
  }
}
var _TrekEditComponent = class _TrekEditComponent {
  constructor(fb, trekService, router, route, dropdownService, notify, notificationService) {
    this.fb = fb;
    this.trekService = trekService;
    this.router = router;
    this.route = route;
    this.dropdownService = dropdownService;
    this.notify = notify;
    this.notificationService = notificationService;
    this.mediaBaseUrl = (environment.mediaBaseUrl || "").replace(/\/?$/, "/");
    this.isLoading = true;
    this.isSaving = false;
    this.submitted = false;
    this.activeSection = "basic";
    this.lastAutoSavedAt = null;
    this.statusMessage = null;
    this.statusTone = null;
    this.draftStorageKey = "";
    this.difficulties = ["Easy", "Moderate", "Difficult", "Extreme", "Challenging"];
    this.categories = ["Hill Trek", "Peak Trek", "Mountain Trek", "Forest Trek", "Desert Trek", "Snow Trek", "Western Ghats"];
    this.collections = ["Western Ghats Peaks", "Monsoon Specials", "Heritage & Trails", "Weekend Escapes", "Family Friendly"];
    this.fitnessLevels = ["Beginner", "Intermediate", "Advanced", "Expert"];
    this.batchStatuses = ["active", "inactive", "full", "cancelled", "completed"];
    this.coverPreview = null;
    this.galleryPreviews = [];
    this.coverImageFile = null;
    this.galleryImageFiles = [];
    this.existingCoverFilename = null;
    this.existingGalleryFilenames = [];
    this.deletedGalleryFilenames = [];
    this.coverDeleted = false;
    this.sections = [
      { id: "basic", label: "1. Trek Basics", icon: "bi-geo-alt-fill" },
      { id: "batches", label: "2. Batches & Captains", icon: "bi-people-fill" },
      { id: "itinerary", label: "3. Itinerary & Elevation", icon: "bi-map-fill" },
      { id: "gear", label: "4. Checklist & Inclusions", icon: "bi-backpack-fill" },
      { id: "media", label: "5. Media & Gallery", icon: "bi-images" }
    ];
  }
  ngOnInit() {
    this.initForm();
    this.loadDropdownOptions();
    this.route.paramMap.subscribe((params) => {
      const id = String(params.get("id") || "").trim();
      if (!id) {
        this.isLoading = false;
        return;
      }
      this.trekId = id;
      this.draftStorageKey = `trek-edit-draft-${this.trekId}`;
      this.fetchTrek();
    });
  }
  ngOnDestroy() {
    this.autosaveTimer?.unsubscribe?.();
  }
  setActiveSection(section) {
    this.activeSection = section;
  }
  loadDropdownOptions() {
    this.dropdownService.getGroupOptions("trekDifficulty").pipe(take(1)).subscribe((opts) => {
      if (opts.length > 0)
        this.difficulties = opts.map((o) => o.label);
    });
    this.dropdownService.getGroupOptions("trekCategory").pipe(take(1)).subscribe((opts) => {
      if (opts.length > 0)
        this.categories = opts.map((o) => o.label);
    });
    this.dropdownService.getGroupOptions("trekCollection").pipe(take(1)).subscribe((opts) => {
      if (opts.length > 0)
        this.collections = opts.map((o) => o.label);
    });
    this.dropdownService.getGroupOptions("trekFitnessLevel").pipe(take(1)).subscribe((opts) => {
      if (opts.length > 0)
        this.fitnessLevels = opts.map((o) => o.label);
    });
    this.dropdownService.getGroupOptions("batchStatus").pipe(take(1)).subscribe((opts) => {
      if (opts.length > 0)
        this.batchStatuses = opts.map((o) => o.label);
    });
  }
  initForm() {
    this.editTrekForm = this.fb.group({
      name: ["", Validators.required],
      location: ["", Validators.required],
      category: ["", Validators.required],
      collection: [""],
      difficulty: ["", Validators.required],
      fitnessLevel: [""],
      description: [""],
      highlights: this.fb.array([]),
      batches: this.fb.array([]),
      thingsToCarry: this.fb.array([]),
      importantNotes: this.fb.array([]),
      elevationWaypoints: this.fb.array([])
    });
  }
  // ===== GETTERS =====
  get highlights() {
    return this.editTrekForm.get("highlights");
  }
  get batches() {
    return this.editTrekForm.get("batches");
  }
  get thingsToCarry() {
    return this.editTrekForm.get("thingsToCarry");
  }
  get importantNotes() {
    return this.editTrekForm.get("importantNotes");
  }
  get elevationWaypoints() {
    return this.editTrekForm.get("elevationWaypoints");
  }
  getInclusions(batchIndex) {
    return this.batches.at(batchIndex).get("inclusions");
  }
  getExclusions(batchIndex) {
    return this.batches.at(batchIndex).get("exclusions");
  }
  getItineraryDays(batchIndex) {
    return this.batches.at(batchIndex).get("itineraryDays");
  }
  getActivities(batchIndex, dayIndex) {
    return this.getItineraryDays(batchIndex).at(dayIndex).get("activities");
  }
  // ===== FETCH TREK DATA =====
  fetchTrek() {
    this.isLoading = true;
    this.trekService.editTrek(this.trekId).subscribe({
      next: (res) => {
        if (!res?.success || !res?.data) {
          this.isLoading = false;
          this.setStatus("Trek details could not be loaded.", "danger");
          return;
        }
        const trek = res.data;
        this.editTrekForm.patchValue({
          name: trek.name,
          location: trek.location,
          category: trek.category,
          collection: trek.collection || "",
          difficulty: trek.difficulty,
          fitnessLevel: trek.fitnessLevel || "",
          description: trek.description || ""
        });
        this.setFormArray(this.highlights, trek.highlights || []);
        this.setFormArray(this.thingsToCarry, trek.thingsToCarry || []);
        this.setFormArray(this.importantNotes, trek.importantNotes || []);
        this.setElevationWaypoints(trek.elevationWaypoints || []);
        this.setBatches(trek.batches || []);
        if (trek.coverImage) {
          this.existingCoverFilename = trek.coverImage;
          this.coverPreview = this.getImageUrl(trek.coverImage, trek.updatedAt || trek.createdAt);
        }
        if (trek.galleryImages && Array.isArray(trek.galleryImages)) {
          this.existingGalleryFilenames = trek.galleryImages;
        }
        this.restoreDraft();
        this.setupAutosave();
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.setStatus("Server error while loading trek details.", "danger");
      }
    });
  }
  // ===== BATCH METHODS =====
  createBatch(data) {
    return this.fb.group({
      id: [data?.id || ""],
      startDate: [data?.startDate || "", Validators.required],
      endDate: [data?.endDate || "", Validators.required],
      availableSlots: [data?.availableSlots || "", Validators.required],
      price: [data?.price || "", Validators.required],
      minAge: [data?.minAge || ""],
      maxAge: [data?.maxAge || ""],
      minParticipants: [data?.minParticipants || ""],
      maxParticipants: [data?.maxParticipants || ""],
      duration: [data?.duration || ""],
      batchStatus: [data?.batchStatus || "active", Validators.required],
      captainName: [data?.captainName || data?.captain_name || ""],
      captainPhone: [data?.captainPhone || data?.captain_phone || ""],
      captainEmail: [data?.captainEmail || data?.captain_email || ""],
      inclusions: this.fb.array(data?.inclusions?.map((inc) => this.fb.control(inc)) || [this.fb.control("")]),
      exclusions: this.fb.array(data?.exclusions?.map((exc) => this.fb.control(exc)) || [this.fb.control("")]),
      itineraryDays: this.fb.array(data?.itineraryDays?.map((day) => this.createDay(day)) || [this.createDay({ dayNumber: 1, title: "Arrival & Trek Start" })])
    });
  }
  createDay(data) {
    return this.fb.group({
      dayNumber: [data?.dayNumber || 1, Validators.required],
      title: [data?.title || "", Validators.required],
      activities: this.fb.array(data?.activities?.map((act) => this.createActivity(act)) || [])
    });
  }
  createActivity(data) {
    return this.fb.group({
      activityTime: [data?.activityTime || "", Validators.required],
      activityText: [data?.activityText || "", Validators.required]
    });
  }
  setBatches(batches) {
    this.batches.clear();
    if (batches && batches.length > 0) {
      batches.forEach((batch) => {
        this.batches.push(this.createBatch(batch));
      });
    } else {
      this.batches.push(this.createBatch());
    }
  }
  addBatch() {
    this.batches.push(this.createBatch());
    this.notificationService.show("New batch created");
  }
  removeBatch(index) {
    if (this.batches.length > 1) {
      this.batches.removeAt(index);
      this.notificationService.show("Batch removed");
    } else {
      this.setStatus("At least one batch is required", "warning");
      this.notificationService.show("At least one batch is required");
    }
  }
  // ===== ARRAY HELPERS =====
  setFormArray(formArray, items) {
    formArray.clear();
    if (items && items.length > 0) {
      items.forEach((item) => formArray.push(this.fb.control(item)));
    } else {
      formArray.push(this.fb.control(""));
    }
  }
  addHighlight() {
    this.highlights.push(this.fb.control(""));
  }
  removeHighlight(index) {
    if (this.highlights.length > 1)
      this.highlights.removeAt(index);
  }
  addThingToCarry() {
    this.thingsToCarry.push(this.fb.control(""));
  }
  removeThingToCarry(index) {
    this.thingsToCarry.removeAt(index);
  }
  addImportantNote() {
    this.importantNotes.push(this.fb.control(""));
  }
  removeImportantNote(index) {
    this.importantNotes.removeAt(index);
  }
  addInclusion(batchIndex) {
    this.getInclusions(batchIndex).push(this.fb.control(""));
  }
  removeInclusion(batchIndex, inclusionIndex) {
    if (this.getInclusions(batchIndex).length > 1) {
      this.getInclusions(batchIndex).removeAt(inclusionIndex);
    }
  }
  addExclusion(batchIndex) {
    this.getExclusions(batchIndex).push(this.fb.control(""));
  }
  removeExclusion(batchIndex, exclusionIndex) {
    if (this.getExclusions(batchIndex).length > 1) {
      this.getExclusions(batchIndex).removeAt(exclusionIndex);
    }
  }
  addItineraryDay(batchIndex) {
    const itineraryDays = this.getItineraryDays(batchIndex);
    const dayNumber = itineraryDays.length + 1;
    itineraryDays.push(this.createDay({ dayNumber, title: `Day ${dayNumber} Schedule` }));
  }
  removeItineraryDay(batchIndex, dayIndex) {
    const itineraryDays = this.getItineraryDays(batchIndex);
    if (itineraryDays.length > 1) {
      itineraryDays.removeAt(dayIndex);
      this.recalculateDayNumbers(batchIndex);
    }
  }
  recalculateDayNumbers(batchIndex) {
    const itineraryDays = this.getItineraryDays(batchIndex);
    for (let i = 0; i < itineraryDays.length; i++) {
      itineraryDays.at(i).patchValue({ dayNumber: i + 1 });
    }
  }
  addActivity(batchIndex, dayIndex) {
    this.getActivities(batchIndex, dayIndex).push(this.createActivity());
  }
  removeActivity(batchIndex, dayIndex, activityIndex) {
    this.getActivities(batchIndex, dayIndex).removeAt(activityIndex);
  }
  // ===== WAYPOINTS =====
  setElevationWaypoints(waypoints) {
    this.elevationWaypoints.clear();
    if (waypoints && waypoints.length > 0) {
      waypoints.forEach((wp) => {
        this.elevationWaypoints.push(this.fb.group({
          km: [wp.km ?? 0, [Validators.required, Validators.min(0)]],
          elevation: [wp.elevation ?? 0, [Validators.required, Validators.min(0)]],
          name: [wp.name || "Checkpoint", Validators.required],
          icon: [wp.icon || "bi bi-geo-alt-fill"],
          note: [wp.note || ""]
        }));
      });
    } else {
      this.elevationWaypoints.push(this.fb.group({ km: 0, elevation: 950, name: "Basecamp (0km)", icon: "bi bi-signpost-2", note: "Start point" }));
      this.elevationWaypoints.push(this.fb.group({ km: 11.5, elevation: 1894, name: "Peak Summit (11.5km)", icon: "bi bi-triangle-fill", note: "Summit milestone" }));
    }
  }
  addWaypoint() {
    const current = this.elevationWaypoints.length;
    const lastKm = current > 0 ? (this.elevationWaypoints.at(current - 1).get("km")?.value || 0) + 2 : 0;
    const lastElev = current > 0 ? (this.elevationWaypoints.at(current - 1).get("elevation")?.value || 1e3) + 100 : 1e3;
    this.elevationWaypoints.push(this.fb.group({
      km: [lastKm, [Validators.required, Validators.min(0)]],
      elevation: [lastElev, [Validators.required, Validators.min(0)]],
      name: [`Checkpoint ${current + 1}`, Validators.required],
      icon: ["bi bi-signpost-2"],
      note: [""]
    }));
  }
  removeWaypoint(index) {
    if (this.elevationWaypoints.length > 2) {
      this.elevationWaypoints.removeAt(index);
    }
  }
  asFormControl(ctrl) {
    return ctrl;
  }
  // ===== IMAGES =====
  getImageUrl(filename, cacheBust) {
    if (!filename)
      return "";
    if (filename.startsWith("http://") || filename.startsWith("https://") || filename.startsWith("data:")) {
      return filename;
    }
    const cleanFilename = filename.replace(/^\/+/, "");
    const baseUrl = this.mediaBaseUrl;
    const sep = baseUrl.endsWith("/") ? "" : "/";
    const ts = cacheBust ? new Date(cacheBust).getTime() : "";
    const query = ts ? `?v=${ts}` : "";
    return `${baseUrl}${sep}${cleanFilename}${query}`;
  }
  onCoverImageSelected(event) {
    return __async(this, null, function* () {
      const file = event.target.files[0];
      if (file) {
        try {
          const optimized = yield optimizeImageForUpload(file, 1920, 0.85);
          this.coverImageFile = optimized;
          const reader = new FileReader();
          reader.onload = () => this.coverPreview = reader.result;
          reader.readAsDataURL(optimized);
          this.coverDeleted = false;
        } catch {
          this.coverImageFile = file;
          const reader = new FileReader();
          reader.onload = () => this.coverPreview = reader.result;
          reader.readAsDataURL(file);
          this.coverDeleted = false;
        }
      }
    });
  }
  removeCoverImage() {
    this.coverImageFile = null;
    this.coverPreview = null;
    this.coverDeleted = true;
    this.existingCoverFilename = null;
  }
  onGalleryImagesSelected(event) {
    return __async(this, null, function* () {
      const files = event.target.files;
      if (!files || files.length === 0)
        return;
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        try {
          const optimized = yield optimizeImageForUpload(file, 1600, 0.82);
          this.galleryImageFiles.push(optimized);
          const reader = new FileReader();
          reader.onload = () => this.galleryPreviews.push(reader.result);
          reader.readAsDataURL(optimized);
        } catch {
          this.galleryImageFiles.push(file);
          const reader = new FileReader();
          reader.onload = () => this.galleryPreviews.push(reader.result);
          reader.readAsDataURL(file);
        }
      }
    });
  }
  removeNewGalleryImage(index) {
    this.galleryImageFiles.splice(index, 1);
    this.galleryPreviews.splice(index, 1);
  }
  removeExistingGalleryImage(filename) {
    this.deletedGalleryFilenames.push(filename);
    this.existingGalleryFilenames = this.existingGalleryFilenames.filter((f) => f !== filename);
  }
  // ===== METRIC GETTERS =====
  get totalBatchesCount() {
    return this.batches.length;
  }
  get totalCaptainsAssigned() {
    return this.batches.controls.filter((b) => !!b.get("captainName")?.value?.trim()).length;
  }
  get minTrekPrice() {
    const prices = this.batches.controls.map((b) => Number(b.get("price")?.value || 0)).filter((p) => p > 0);
    return prices.length ? Math.min(...prices) : 0;
  }
  // ===== SUBMIT FORM =====
  saveTrek() {
    this.submitted = true;
    if (this.editTrekForm.invalid) {
      this.editTrekForm.markAllAsTouched();
      this.setStatus("Please complete all required fields marked in red.", "danger");
      this.notificationService.show("Please complete all required fields.", 3500);
      return;
    }
    this.isSaving = true;
    const formValue = this.editTrekForm.value;
    const updatePayload = __spreadProps(__spreadValues({}, formValue), {
      coverDeleted: this.coverDeleted,
      deletedGallery: this.deletedGalleryFilenames
    });
    const formData = new FormData();
    Object.keys(updatePayload).forEach((key) => {
      const value = updatePayload[key];
      if (typeof value === "object" && !(value instanceof File)) {
        formData.append(key, JSON.stringify(value));
      } else if (value !== void 0 && value !== null) {
        formData.append(key, value);
      }
    });
    if (this.coverImageFile) {
      formData.append("coverImage", this.coverImageFile);
    }
    this.galleryImageFiles.forEach((file) => {
      formData.append("gallery", file);
    });
    this.trekService.updateTrek(this.trekId, formData).pipe(finalize(() => this.isSaving = false)).subscribe({
      next: (res) => {
        if (res?.success === true) {
          this.clearDraft();
          this.setStatus("Trek updated successfully!", "success");
          this.notificationService.show("Trek updated successfully!");
          this.router.navigate(["/admin/treks/list"]);
        } else {
          const message = res?.data?.message || "Failed to update trek";
          this.setStatus(message, "danger");
          this.notificationService.show(message, 3500);
        }
      },
      error: (err) => {
        this.setStatus("Server error while saving trek changes.", "danger");
        this.notificationService.show("Server error while saving changes.", 3500);
      }
    });
  }
  setupAutosave() {
    this.autosaveTimer?.unsubscribe?.();
    this.autosaveTimer = this.editTrekForm.valueChanges.pipe(debounceTime(900)).subscribe(() => this.saveDraft());
  }
  saveDraft() {
    if (!this.draftStorageKey)
      return;
    const draft = {
      formValue: this.editTrekForm.getRawValue(),
      savedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    sessionStorage.setItem(this.draftStorageKey, JSON.stringify(draft));
    this.lastAutoSavedAt = draft.savedAt;
  }
  restoreDraft() {
    if (!this.draftStorageKey)
      return;
    const raw = sessionStorage.getItem(this.draftStorageKey);
    if (!raw)
      return;
    try {
      const draft = JSON.parse(raw);
      if (draft?.formValue) {
        this.editTrekForm.patchValue(draft.formValue, { emitEvent: false });
      }
      this.lastAutoSavedAt = draft?.savedAt || null;
    } catch {
      sessionStorage.removeItem(this.draftStorageKey);
    }
  }
  clearDraft() {
    if (!this.draftStorageKey)
      return;
    sessionStorage.removeItem(this.draftStorageKey);
    this.lastAutoSavedAt = null;
  }
  isInvalid(controlName) {
    const control = this.editTrekForm.get(controlName);
    return !!control && control.invalid && (control.dirty || control.touched || this.submitted);
  }
  isBatchFieldInvalid(batchIndex, fieldName) {
    const control = this.batches.at(batchIndex).get(fieldName);
    return !!control && control.invalid && (control.dirty || control.touched || this.submitted);
  }
  setStatus(message, tone) {
    this.statusMessage = message;
    this.statusTone = tone;
  }
  cancel() {
    this.router.navigate(["/admin/treks/list"]);
  }
};
_TrekEditComponent.\u0275fac = function TrekEditComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TrekEditComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(TrekEdit), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(DropdownManagerService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(NotificationService));
};
_TrekEditComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TrekEditComponent, selectors: [["app-trek-edit"]], viewQuery: function TrekEditComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
    \u0275\u0275viewQuery(_c1, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.coverFileInput = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.galleryFileInput = _t.first);
  }
}, decls: 4, vars: 2, consts: [["galleryFileInput", ""], ["coverFileInput", ""], ["title", "Edit Trek & Batches", "subtitle", "Update trek metadata, manage batch dates, elevation milestones, and assign Trek Captains.", "sectionLabel", "Treks"], ["class", "card p-5 text-center", 4, "ngIf"], [4, "ngIf"], [1, "card", "p-5", "text-center"], ["role", "status", 1, "spinner-border", "text-primary", "mx-auto", "mb-3"], [1, "fw-bold", "mb-1"], [1, "text-muted", "small", "mb-0"], ["class", "status-banner mb-3", 3, "ngClass", 4, "ngIf"], [1, "nav-stepper-container", "mb-4"], [1, "stepper-scroll"], ["type", "button", "class", "step-pill", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "form-container", 3, "ngSubmit", "formGroup"], ["class", "section-card mb-4", 4, "ngIf"], [1, "sticky-form-footer"], [1, "container-fluid", "d-flex", "flex-wrap", "align-items-center", "justify-content-between", "gap-3"], [1, "d-flex", "flex-wrap", "align-items-center", "gap-2"], ["class", "summary-chip", 4, "ngIf"], [1, "summary-chip"], [1, "bi", "bi-people-fill", "text-info", "me-1"], [1, "bi", "bi-person-badge-fill", "text-success", "me-1"], ["class", "draft-indicator", 4, "ngIf"], [1, "d-flex", "align-items-center", "gap-2"], ["type", "button", 1, "btn-app", "btn-ghost", 3, "click"], ["type", "button", 1, "btn-app", "btn-primary", 3, "click", "disabled"], [1, "status-banner", "mb-3", 3, "ngClass"], [1, "bi", 3, "ngClass"], ["type", "button", 1, "step-pill", 3, "click"], ["class", "step-badge", 4, "ngIf"], [1, "step-badge"], [1, "section-card", "mb-4"], [1, "section-header"], [1, "header-icon"], [1, "bi", "bi-geo-alt-fill"], [1, "header-text"], [1, "mb-0"], [1, "section-body"], [1, "row", "g-3"], [1, "col-12", "col-md-6"], [1, "form-label"], [1, "text-danger"], ["type", "text", "formControlName", "name", "placeholder", "e.g. Kudremukh Peak Expedition", 1, "form-control", "modern-input"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "formControlName", "location", "placeholder", "e.g. Chikmagalur, Western Ghats", 1, "form-control", "modern-input"], [1, "col-12", "col-sm-6", "col-lg-3"], ["formControlName", "difficulty", 1, "form-select", "modern-select"], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "category", 1, "form-select", "modern-select"], ["formControlName", "collection", 1, "form-select", "modern-select"], ["value", ""], ["formControlName", "fitnessLevel", 1, "form-select", "modern-select"], [1, "col-12"], ["rows", "4", "formControlName", "description", "placeholder", "Describe the landscape, viewpoints, trail highlights, and what makes this trek extraordinary...", 1, "form-control", "modern-input"], [1, "col-12", "mt-4"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2"], [1, "form-label", "mb-0", "fw-bold"], [1, "bi", "bi-stars", "text-warning", "me-1"], ["type", "button", 1, "btn-app", "btn-ghost", "btn-sm", 3, "click"], [1, "bi", "bi-plus-circle", "me-1"], ["formArrayName", "highlights", 1, "d-flex", "flex-column", "gap-2"], ["class", "input-group", 4, "ngFor", "ngForOf"], [1, "section-footer"], ["type", "button", 1, "btn-app", "btn-primary", "ms-auto", 3, "click"], [1, "bi", "bi-arrow-right", "ms-1"], [1, "invalid-feedback"], [3, "value"], [1, "input-group"], [1, "input-group-text", "bg-light", "text-muted"], ["type", "text", "placeholder", "e.g. 360\xB0 Shola Grassland Panorama & Waterfalls", 1, "form-control", "modern-input", 3, "formControlName"], ["type", "button", 1, "btn", "btn-outline-danger", 3, "click", "disabled"], [1, "bi", "bi-trash"], [1, "section-header", "d-flex", "align-items-center", "justify-content-between"], [1, "d-flex", "align-items-center"], [1, "bi", "bi-people-fill"], ["type", "button", 1, "btn-app", "btn-primary", "btn-sm", 3, "click"], [1, "bi", "bi-plus-lg", "me-1"], ["formArrayName", "batches", 1, "section-body"], ["class", "batch-panel mb-4", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "section-footer", "d-flex", "justify-content-between"], [1, "bi", "bi-arrow-left", "me-1"], ["type", "button", 1, "btn-app", "btn-primary", 3, "click"], [1, "batch-panel", "mb-4", 3, "formGroupName"], [1, "batch-panel-header"], [1, "batch-badge"], ["class", "badge bg-success-subtle text-success border border-success-subtle", 4, "ngIf"], ["class", "badge bg-warning-subtle text-warning border border-warning-subtle", 4, "ngIf"], ["class", "badge bg-secondary-subtle text-secondary border border-secondary-subtle", 4, "ngIf"], ["type", "button", "title", "Delete Batch", 1, "btn", "btn-outline-danger", "btn-sm", 3, "click", "disabled"], [1, "bi", "bi-trash", "me-1"], [1, "row", "g-3", "mt-2"], [1, "col-12", "col-sm-6", "col-md-3"], ["type", "date", "formControlName", "startDate", 1, "form-control", "modern-input"], ["type", "date", "formControlName", "endDate", 1, "form-control", "modern-input"], ["type", "number", "min", "1", "formControlName", "availableSlots", "placeholder", "e.g. 25", 1, "form-control", "modern-input"], [1, "input-group-text", "bg-light"], ["type", "number", "min", "0", "formControlName", "price", "placeholder", "3499", 1, "form-control", "modern-input"], ["type", "text", "formControlName", "duration", "placeholder", "e.g. 2 Days / 1 Night", 1, "form-control", "modern-input"], ["formControlName", "batchStatus", 1, "form-select", "modern-select"], [1, "col-6", "col-md-3"], [1, "d-flex", "gap-1"], ["type", "number", "formControlName", "minAge", "placeholder", "Min (12)", 1, "form-control", "modern-input", "text-center"], ["type", "number", "formControlName", "maxAge", "placeholder", "Max (65)", 1, "form-control", "modern-input", "text-center"], ["type", "number", "formControlName", "minParticipants", "placeholder", "Min (5)", 1, "form-control", "modern-input", "text-center"], ["type", "number", "formControlName", "maxParticipants", "placeholder", "Max (30)", 1, "form-control", "modern-input", "text-center"], [1, "captain-subcard", "mt-4", "p-3", "rounded", "border"], [1, "d-flex", "align-items-center", "gap-2", "mb-3"], [1, "captain-icon-badge"], [1, "bi", "bi-person-badge-fill"], [1, "mb-0", "fw-bold"], [1, "col-12", "col-md-4"], [1, "bi", "bi-person-fill"], ["type", "text", "formControlName", "captainName", "placeholder", "e.g. Captain Jagadish / Arjun", 1, "form-control", "modern-input"], [1, "bi", "bi-telephone-fill"], ["type", "tel", "formControlName", "captainPhone", "placeholder", "e.g. +91 98765 43210", 1, "form-control", "modern-input"], [1, "bi", "bi-envelope-fill"], ["type", "email", "formControlName", "captainEmail", "placeholder", "e.g. captain@gowild.in", 1, "form-control", "modern-input"], [1, "badge", "bg-success-subtle", "text-success", "border", "border-success-subtle"], [1, "badge", "bg-warning-subtle", "text-warning", "border", "border-warning-subtle"], [1, "badge", "bg-secondary-subtle", "text-secondary", "border", "border-secondary-subtle"], [1, "bi", "bi-map-fill"], [1, "mb-4"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "fw-bold", "mb-0"], [1, "bi", "bi-calendar-event", "me-2", "text-primary"], ["class", "d-flex flex-column gap-3", 4, "ngIf"], [1, "my-4"], [1, "bi", "bi-activity", "me-2", "text-success"], ["formArrayName", "elevationWaypoints", 1, "d-flex", "flex-column", "gap-2"], ["class", "waypoint-row p-2 rounded border bg-light d-flex flex-wrap align-items-center gap-2", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "d-flex", "flex-column", "gap-3"], ["class", "day-timeline-card p-3 rounded border", 4, "ngFor", "ngForOf"], [1, "day-timeline-card", "p-3", "rounded", "border"], [1, "d-flex", "align-items-center", "gap-2", "flex-grow-1", "me-3", 3, "formGroup"], [1, "day-pill"], ["type", "text", "formControlName", "title", "placeholder", "e.g. Bangalore Departure & Basecamp Acclimatization", 1, "form-control", "modern-input"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], ["type", "button", 1, "btn", "btn-outline-danger", "btn-sm", 3, "click", "disabled"], [1, "activities-list", "mt-2", "ps-3", "border-start"], ["class", "d-flex gap-2 align-items-center mb-2", 3, "formGroup", 4, "ngFor", "ngForOf"], ["class", "text-muted small py-1", 4, "ngIf"], [1, "d-flex", "gap-2", "align-items-center", "mb-2", 3, "formGroup"], ["type", "time", "formControlName", "activityTime", 1, "form-control", "modern-input", 2, "max-width", "140px"], ["type", "text", "formControlName", "activityText", "placeholder", "e.g. Arrive at Chikmagalur, brief safety orientation & breakfast", 1, "form-control", "modern-input", "flex-grow-1"], ["type", "button", 1, "btn", "btn-link", "text-danger", "p-0", 3, "click"], [1, "bi", "bi-x-circle-fill", "fs-5"], [1, "text-muted", "small", "py-1"], [1, "waypoint-row", "p-2", "rounded", "border", "bg-light", "d-flex", "flex-wrap", "align-items-center", "gap-2", 3, "formGroupName"], [1, "badge", "bg-secondary"], [1, "input-group", 2, "width", "140px"], [1, "input-group-text", "bg-white", "small"], ["type", "number", "step", "0.1", "min", "0", "formControlName", "km", "placeholder", "0.0", 1, "form-control", "modern-input", "text-center"], [1, "input-group", 2, "width", "160px"], ["type", "number", "min", "0", "formControlName", "elevation", "placeholder", "950", 1, "form-control", "modern-input", "text-center"], ["type", "text", "formControlName", "name", "placeholder", "Checkpoint Name (e.g. Ridge Summit)", 1, "form-control", "modern-input", "flex-grow-1", 2, "min-width", "160px"], ["type", "text", "formControlName", "note", "placeholder", "Short milestone note...", 1, "form-control", "modern-input", "flex-grow-1", 2, "min-width", "180px"], [1, "bi", "bi-backpack-fill"], [1, "row", "g-4"], ["class", "col-12 col-lg-6", 4, "ngIf"], [1, "col-12", "col-lg-6"], [1, "form-label", "fw-bold", "mb-0", "text-primary"], [1, "bi", "bi-backpack2-fill", "me-1"], ["formArrayName", "thingsToCarry", 1, "d-flex", "flex-column", "gap-2"], ["class", "text-muted small", 4, "ngIf"], [1, "form-label", "fw-bold", "mb-0", "text-warning"], [1, "bi", "bi-exclamation-triangle-fill", "me-1"], ["formArrayName", "importantNotes", 1, "d-flex", "flex-column", "gap-2"], [1, "form-label", "fw-bold", "mb-0", "text-success"], [1, "bi", "bi-check-circle-fill", "me-1"], [1, "d-flex", "flex-column", "gap-2"], [1, "input-group-text", "bg-success-subtle", "text-success"], ["type", "text", "placeholder", "e.g. Certified Mountain Guide, Forest Permits & Camping Tents", 1, "form-control", "modern-input", 3, "formControl"], [1, "form-label", "fw-bold", "mb-0", "text-danger"], [1, "bi", "bi-x-circle-fill", "me-1"], [1, "input-group-text", "bg-danger-subtle", "text-danger"], ["type", "text", "placeholder", "e.g. Personal Porterage, Travel Insurance, Extra Food Items", 1, "form-control", "modern-input", 3, "formControl"], ["type", "text", "placeholder", "e.g. 2L Reusable Water Bottle, High-Traction Trek Shoes", 1, "form-control", "modern-input", 3, "formControlName"], ["type", "button", 1, "btn", "btn-outline-danger", 3, "click"], [1, "text-muted", "small"], ["type", "text", "placeholder", "e.g. Strict No-Smoking & Zero Plastic litter policy in reserve forest", 1, "form-control", "modern-input", 3, "formControlName"], [1, "bi", "bi-images"], [1, "col-12", "col-md-5"], [1, "form-label", "fw-bold"], ["class", "dropzone-box", 3, "click", 4, "ngIf"], ["class", "image-preview-card", 4, "ngIf"], [1, "col-12", "col-md-7"], [1, "form-label", "fw-bold", "mb-0"], ["type", "file", "accept", "image/*", "multiple", "", "hidden", "", 3, "change"], ["class", "gallery-grid", 4, "ngIf"], ["class", "dropzone-box py-4 text-center mt-2", 3, "click", 4, "ngIf"], ["type", "submit", 1, "btn-app", "btn-primary", 3, "disabled"], [1, "dropzone-box", 3, "click"], [1, "bi", "bi-cloud-arrow-up", "display-4", "text-primary", "mb-2"], ["type", "file", "accept", "image/*", "hidden", "", 3, "change"], [1, "image-preview-card"], ["alt", "Cover Preview", 1, "cover-img", "rounded", 3, "src"], ["type", "button", 1, "btn-remove-img", 3, "click"], [1, "cover-badge"], [1, "gallery-grid"], ["class", "gallery-thumb-card", 4, "ngFor", "ngForOf"], ["class", "gallery-thumb-card border-success", 4, "ngFor", "ngForOf"], [1, "gallery-thumb-card"], ["alt", "Gallery item", 1, "thumb-img", "rounded", 3, "src"], ["type", "button", "title", "Remove Photo", 1, "btn-remove-thumb", 3, "click"], [1, "gallery-thumb-card", "border-success"], ["alt", "New Upload", 1, "thumb-img", "rounded", 3, "src"], ["type", "button", 1, "btn-remove-thumb", 3, "click"], [1, "new-badge"], [1, "dropzone-box", "py-4", "text-center", "mt-2", 3, "click"], [1, "bi", "bi-camera-fill", "fs-2", "text-muted", "mb-1"], [1, "bi", "bi-check2-circle", "me-1"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "bi", "bi-geo-alt-fill", "text-primary", "me-1"], [1, "bi", "bi-currency-rupee", "text-warning", "me-1"], [1, "draft-indicator"], [1, "bi", "bi-cloud-check-fill", "text-success", "me-1"], [1, "small", "text-muted"]], template: function TrekEditComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "app-admin-shell", 2);
    \u0275\u0275template(2, TrekEditComponent_div_2_Template, 6, 0, "div", 3)(3, TrekEditComponent_div_3_Template, 31, 20, "div", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isLoading);
  }
}, dependencies: [CommonModule, NgClass, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName, FormsModule, AdminShellComponent, DecimalPipe, DatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.status-banner[_ngcontent-%COMP%] {\n  padding: 12px 18px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n.status-banner.status-success[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  border: 1px solid #a7f3d0;\n  color: #065f46;\n}\n.status-banner.status-warning[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  border: 1px solid #fde68a;\n  color: #92400e;\n}\n.status-banner.status-danger[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #991b1b;\n}\n.nav-stepper-container[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 16px;\n  padding: 8px 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.nav-stepper-container[_ngcontent-%COMP%]   .stepper-scroll[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  scrollbar-width: none;\n}\n.nav-stepper-container[_ngcontent-%COMP%]   .stepper-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.nav-stepper-container[_ngcontent-%COMP%]   .stepper-scroll[_ngcontent-%COMP%]   .step-pill[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 18px;\n  border-radius: 12px;\n  background: transparent;\n  border: 1px solid transparent;\n  color: #64748b;\n  font-size: 0.88rem;\n  font-weight: 600;\n  white-space: nowrap;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.nav-stepper-container[_ngcontent-%COMP%]   .stepper-scroll[_ngcontent-%COMP%]   .step-pill[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  color: #0f172a;\n}\n.nav-stepper-container[_ngcontent-%COMP%]   .stepper-scroll[_ngcontent-%COMP%]   .step-pill.active[_ngcontent-%COMP%] {\n  background: rgba(29, 122, 109, 0.08);\n  color: #1d7a6d;\n  border-color: rgba(29, 122, 109, 0.25);\n  font-weight: 700;\n}\n.nav-stepper-container[_ngcontent-%COMP%]   .stepper-scroll[_ngcontent-%COMP%]   .step-pill[_ngcontent-%COMP%]   .step-badge[_ngcontent-%COMP%] {\n  background: #1d7a6d;\n  color: #ffffff;\n  font-size: 0.72rem;\n  padding: 2px 7px;\n  border-radius: 12px;\n}\n.section-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 16px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n  overflow: hidden;\n}\n.section-card[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  padding: 18px 24px;\n  border-bottom: 1px solid #e2e8f0;\n  background:\n    linear-gradient(\n      180deg,\n      #fafbfc 0%,\n      #ffffff 100%);\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.section-card[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  background: rgba(29, 122, 109, 0.08);\n  color: #1d7a6d;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.25rem;\n}\n.section-card[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.section-card[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  color: #64748b;\n}\n.section-card[_ngcontent-%COMP%]   .section-body[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.section-card[_ngcontent-%COMP%]   .section-footer[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  border-top: 1px solid #e2e8f0;\n  background: #f8fafc;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  font-weight: 600;\n  color: #334155;\n  margin-bottom: 6px;\n}\n.modern-input[_ngcontent-%COMP%], \n.modern-select[_ngcontent-%COMP%] {\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 0.9rem;\n  color: #0f172a;\n  transition: all 0.2s ease;\n}\n.modern-input[_ngcontent-%COMP%]:focus, \n.modern-select[_ngcontent-%COMP%]:focus {\n  border-color: #1d7a6d;\n  box-shadow: 0 0 0 3px rgba(29, 122, 109, 0.15);\n}\n.batch-panel[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 20px;\n  transition: all 0.2s ease;\n}\n.batch-panel[_ngcontent-%COMP%]:hover {\n  border-color: #cbd5e1;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.batch-panel[_ngcontent-%COMP%]   .batch-panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-bottom: 12px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.06);\n}\n.batch-panel[_ngcontent-%COMP%]   .batch-panel-header[_ngcontent-%COMP%]   .batch-badge[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 0.95rem;\n  color: #0f172a;\n  background: #ffffff;\n  padding: 4px 12px;\n  border-radius: 8px;\n  border: 1px solid #e2e8f0;\n}\n.captain-subcard[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid rgba(29, 122, 109, 0.2) !important;\n  box-shadow: 0 2px 8px rgba(29, 122, 109, 0.05);\n}\n.captain-subcard[_ngcontent-%COMP%]   .captain-icon-badge[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  background: rgba(29, 122, 109, 0.08);\n  color: #1d7a6d;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n}\n.day-timeline-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 12px;\n}\n.day-timeline-card[_ngcontent-%COMP%]   .day-pill[_ngcontent-%COMP%] {\n  background: #1d7a6d;\n  color: #ffffff;\n  font-weight: 700;\n  font-size: 0.8rem;\n  padding: 6px 12px;\n  border-radius: 8px;\n  white-space: nowrap;\n}\n.waypoint-row[_ngcontent-%COMP%] {\n  background: #f8fafc;\n}\n.dropzone-box[_ngcontent-%COMP%] {\n  border: 2px dashed #e2e8f0;\n  border-radius: 12px;\n  padding: 30px 20px;\n  text-align: center;\n  background: #f8fafc;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.dropzone-box[_ngcontent-%COMP%]:hover {\n  border-color: #1d7a6d;\n  background: rgba(29, 122, 109, 0.08);\n}\n.image-preview-card[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 12px;\n  overflow: hidden;\n}\n.image-preview-card[_ngcontent-%COMP%]   .cover-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 220px;\n  object-fit: cover;\n}\n.image-preview-card[_ngcontent-%COMP%]   .btn-remove-img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  background: rgba(0, 0, 0, 0.65);\n  color: #ffffff;\n  border: none;\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.image-preview-card[_ngcontent-%COMP%]   .btn-remove-img[_ngcontent-%COMP%]:hover {\n  background: #dc2626;\n}\n.image-preview-card[_ngcontent-%COMP%]   .cover-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 10px;\n  left: 10px;\n  background: rgba(0, 0, 0, 0.7);\n  color: #ffffff;\n  padding: 4px 10px;\n  border-radius: 6px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.gallery-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));\n  gap: 12px;\n}\n.gallery-grid[_ngcontent-%COMP%]   .gallery-thumb-card[_ngcontent-%COMP%] {\n  position: relative;\n  height: 90px;\n  border-radius: 8px;\n  overflow: hidden;\n  border: 1px solid #e2e8f0;\n}\n.gallery-grid[_ngcontent-%COMP%]   .gallery-thumb-card[_ngcontent-%COMP%]   .thumb-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.gallery-grid[_ngcontent-%COMP%]   .gallery-thumb-card[_ngcontent-%COMP%]   .btn-remove-thumb[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4px;\n  right: 4px;\n  background: rgba(0, 0, 0, 0.65);\n  color: #ffffff;\n  border: none;\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n  cursor: pointer;\n}\n.gallery-grid[_ngcontent-%COMP%]   .gallery-thumb-card[_ngcontent-%COMP%]   .btn-remove-thumb[_ngcontent-%COMP%]:hover {\n  background: #dc2626;\n}\n.gallery-grid[_ngcontent-%COMP%]   .gallery-thumb-card[_ngcontent-%COMP%]   .new-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 4px;\n  left: 4px;\n  background: #16a34a;\n  color: #ffffff;\n  font-size: 0.65rem;\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-weight: 700;\n}\n.sticky-form-footer[_ngcontent-%COMP%] {\n  position: sticky;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(255, 255, 255, 0.95);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  border-top: 1px solid #e2e8f0;\n  padding: 14px 20px;\n  z-index: 99;\n  box-shadow: 0 -4px 15px rgba(0, 0, 0, 0.05);\n}\n.sticky-form-footer[_ngcontent-%COMP%]   .summary-chip[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 20px;\n  padding: 6px 14px;\n  font-size: 0.82rem;\n  color: #0f172a;\n  display: inline-flex;\n  align-items: center;\n}\n.sticky-form-footer[_ngcontent-%COMP%]   .summary-chip.highlight[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  border-color: #a7f3d0;\n  color: #065f46;\n  font-weight: 600;\n}\n.btn-app[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 9px 18px;\n  font-size: 0.88rem;\n  font-weight: 600;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n  border: 1px solid transparent;\n  cursor: pointer;\n  text-decoration: none;\n}\n.btn-app.btn-primary[_ngcontent-%COMP%] {\n  background: #1d7a6d;\n  color: #ffffff;\n}\n.btn-app.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #124842;\n}\n.btn-app.btn-ghost[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  color: #0f172a;\n  border-color: #e2e8f0;\n}\n.btn-app.btn-ghost[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n}\n.btn-app.btn-sm[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 0.8rem;\n}\n@media (max-width: 768px) {\n  .section-card[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n    padding: 14px 16px;\n  }\n  .section-card[_ngcontent-%COMP%]   .section-body[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .section-card[_ngcontent-%COMP%]   .section-footer[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n  .sticky-form-footer[_ngcontent-%COMP%] {\n    padding: 10px 14px;\n  }\n}\n/*# sourceMappingURL=trek-edit.component.css.map */"] });
var TrekEditComponent = _TrekEditComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrekEditComponent, [{
    type: Component,
    args: [{ standalone: true, selector: "app-trek-edit", imports: [CommonModule, ReactiveFormsModule, FormsModule, AdminShellComponent], schemas: [CUSTOM_ELEMENTS_SCHEMA], template: `<div>
  <app-admin-shell
    title="Edit Trek & Batches"
    subtitle="Update trek metadata, manage batch dates, elevation milestones, and assign Trek Captains."
    sectionLabel="Treks">

    <!-- LOADING STATE -->
    <div class="card p-5 text-center" *ngIf="isLoading">
      <div class="spinner-border text-primary mx-auto mb-3" role="status"></div>
      <h5 class="fw-bold mb-1">Loading Trek Details...</h5>
      <p class="text-muted small mb-0">Fetching batches, itinerary timeline, and media gallery.</p>
    </div>

    <!-- MAIN EDIT INTERFACE -->
    <div *ngIf="!isLoading">

      <!-- STATUS BANNER -->
      <div class="status-banner mb-3" *ngIf="statusMessage" [ngClass]="'status-' + statusTone">
        <i class="bi" [ngClass]="statusTone === 'success' ? 'bi-check-circle-fill' : statusTone === 'warning' ? 'bi-exclamation-triangle-fill' : 'bi-x-circle-fill'"></i>
        <span>{{ statusMessage }}</span>
      </div>

      <!-- STEPPER / TAB NAVIGATION BAR -->
      <div class="nav-stepper-container mb-4">
        <div class="stepper-scroll">
          <button
            *ngFor="let sec of sections"
            type="button"
            class="step-pill"
            [class.active]="activeSection === sec.id"
            (click)="setActiveSection(sec.id)">
            <i class="bi {{ sec.icon }} me-2"></i>
            <span>{{ sec.label }}</span>
            <span class="step-badge" *ngIf="sec.id === 'batches'">{{ batches.length }}</span>
          </button>
        </div>
      </div>

      <!-- FORM WRAPPER -->
      <form [formGroup]="editTrekForm" (ngSubmit)="saveTrek()" class="form-container">

        <!-- ==========================================
             SECTION 1: TREK BASICS & OVERVIEW
             ========================================== -->
        <div class="section-card mb-4" *ngIf="activeSection === 'basic'">
          <div class="section-header">
            <div class="header-icon"><i class="bi bi-geo-alt-fill"></i></div>
            <div class="header-text">
              <h4 class="mb-0">1. Trek Basics & Classification</h4>
              <p class="mb-0">Core destination metadata and physical difficulty parameters</p>
            </div>
          </div>

          <div class="section-body">
            <div class="row g-3">
              <div class="col-12 col-md-6">
                <label class="form-label">Trek Title <span class="text-danger">*</span></label>
                <input
                  type="text"
                  class="form-control modern-input"
                  [class.is-invalid]="isInvalid('name')"
                  formControlName="name"
                  placeholder="e.g. Kudremukh Peak Expedition" />
                <div class="invalid-feedback" *ngIf="isInvalid('name')">Trek title is required.</div>
              </div>

              <div class="col-12 col-md-6">
                <label class="form-label">Location / Region <span class="text-danger">*</span></label>
                <input
                  type="text"
                  class="form-control modern-input"
                  [class.is-invalid]="isInvalid('location')"
                  formControlName="location"
                  placeholder="e.g. Chikmagalur, Western Ghats" />
                <div class="invalid-feedback" *ngIf="isInvalid('location')">Location is required.</div>
              </div>

              <div class="col-12 col-sm-6 col-lg-3">
                <label class="form-label">Difficulty <span class="text-danger">*</span></label>
                <select class="form-select modern-select" [class.is-invalid]="isInvalid('difficulty')" formControlName="difficulty">
                  <option value="" disabled>Select Difficulty</option>
                  <option *ngFor="let d of difficulties" [value]="d">{{ d }}</option>
                </select>
                <div class="invalid-feedback" *ngIf="isInvalid('difficulty')">Select a difficulty level.</div>
              </div>

              <div class="col-12 col-sm-6 col-lg-3">
                <label class="form-label">Category <span class="text-danger">*</span></label>
                <select class="form-select modern-select" [class.is-invalid]="isInvalid('category')" formControlName="category">
                  <option value="" disabled>Select Category</option>
                  <option *ngFor="let c of categories" [value]="c">{{ c }}</option>
                </select>
                <div class="invalid-feedback" *ngIf="isInvalid('category')">Select a category.</div>
              </div>

              <div class="col-12 col-sm-6 col-lg-3">
                <label class="form-label">Collection / Series</label>
                <select class="form-select modern-select" formControlName="collection">
                  <option value="">None / Standard</option>
                  <option *ngFor="let col of collections" [value]="col">{{ col }}</option>
                </select>
              </div>

              <div class="col-12 col-sm-6 col-lg-3">
                <label class="form-label">Fitness Level Required</label>
                <select class="form-select modern-select" formControlName="fitnessLevel">
                  <option value="">Recommended / Any</option>
                  <option *ngFor="let f of fitnessLevels" [value]="f">{{ f }}</option>
                </select>
              </div>

              <div class="col-12">
                <label class="form-label">Description & Experience Summary</label>
                <textarea
                  class="form-control modern-input"
                  rows="4"
                  formControlName="description"
                  placeholder="Describe the landscape, viewpoints, trail highlights, and what makes this trek extraordinary..."></textarea>
              </div>

              <!-- HIGHLIGHTS ARRAY -->
              <div class="col-12 mt-4">
                <div class="d-flex align-items-center justify-content-between mb-2">
                  <label class="form-label mb-0 fw-bold"><i class="bi bi-stars text-warning me-1"></i> Key Highlights</label>
                  <button type="button" class="btn-app btn-ghost btn-sm" (click)="addHighlight()">
                    <i class="bi bi-plus-circle me-1"></i> Add Highlight
                  </button>
                </div>

                <div formArrayName="highlights" class="d-flex flex-column gap-2">
                  <div *ngFor="let h of highlights.controls; let i = index" class="input-group">
                    <span class="input-group-text bg-light text-muted">#{{ i + 1 }}</span>
                    <input type="text" class="form-control modern-input" [formControlName]="i" placeholder="e.g. 360\xB0 Shola Grassland Panorama & Waterfalls" />
                    <button type="button" class="btn btn-outline-danger" (click)="removeHighlight(i)" [disabled]="highlights.length <= 1">
                      <i class="bi bi-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="section-footer">
            <button type="button" class="btn-app btn-primary ms-auto" (click)="setActiveSection('batches')">
              Next: Batches & Captains <i class="bi bi-arrow-right ms-1"></i>
            </button>
          </div>
        </div>

        <!-- ==========================================
             SECTION 2: BATCHES & CAPTAIN CONTACTS
             ========================================== -->
        <div class="section-card mb-4" *ngIf="activeSection === 'batches'">
          <div class="section-header d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center">
              <div class="header-icon"><i class="bi bi-people-fill"></i></div>
              <div class="header-text">
                <h4 class="mb-0">2. Batches & Assigned Captains</h4>
                <p class="mb-0">Manage batch schedules, pricing, and assign Trek Captains with direct contact details.</p>
              </div>
            </div>
            <button type="button" class="btn-app btn-primary btn-sm" (click)="addBatch()">
              <i class="bi bi-plus-lg me-1"></i> Add New Batch
            </button>
          </div>

          <div class="section-body" formArrayName="batches">
            <div *ngFor="let b of batches.controls; let i = index" [formGroupName]="i" class="batch-panel mb-4">
              
              <!-- BATCH PANEL HEADER -->
              <div class="batch-panel-header">
                <div class="d-flex align-items-center gap-2">
                  <span class="batch-badge">Batch #{{ i + 1 }}</span>
                  <span class="badge bg-success-subtle text-success border border-success-subtle" *ngIf="b.get('batchStatus')?.value === 'active'">Active</span>
                  <span class="badge bg-warning-subtle text-warning border border-warning-subtle" *ngIf="b.get('batchStatus')?.value === 'inactive'">Inactive</span>
                  <span class="badge bg-secondary-subtle text-secondary border border-secondary-subtle" *ngIf="b.get('batchStatus')?.value === 'full'">Full</span>
                </div>
                <button type="button" class="btn btn-outline-danger btn-sm" (click)="removeBatch(i)" [disabled]="batches.length <= 1" title="Delete Batch">
                  <i class="bi bi-trash me-1"></i> Remove Batch
                </button>
              </div>

              <!-- BATCH SCHEDULE & CAPACITY -->
              <div class="row g-3 mt-2">
                <div class="col-12 col-sm-6 col-md-3">
                  <label class="form-label">Start Date <span class="text-danger">*</span></label>
                  <input type="date" class="form-control modern-input" [class.is-invalid]="isBatchFieldInvalid(i, 'startDate')" formControlName="startDate" />
                  <div class="invalid-feedback" *ngIf="isBatchFieldInvalid(i, 'startDate')">Required.</div>
                </div>

                <div class="col-12 col-sm-6 col-md-3">
                  <label class="form-label">End Date <span class="text-danger">*</span></label>
                  <input type="date" class="form-control modern-input" [class.is-invalid]="isBatchFieldInvalid(i, 'endDate')" formControlName="endDate" />
                  <div class="invalid-feedback" *ngIf="isBatchFieldInvalid(i, 'endDate')">Required.</div>
                </div>

                <div class="col-12 col-sm-6 col-md-3">
                  <label class="form-label">Available Slots <span class="text-danger">*</span></label>
                  <input type="number" min="1" class="form-control modern-input" [class.is-invalid]="isBatchFieldInvalid(i, 'availableSlots')" formControlName="availableSlots" placeholder="e.g. 25" />
                  <div class="invalid-feedback" *ngIf="isBatchFieldInvalid(i, 'availableSlots')">Required.</div>
                </div>

                <div class="col-12 col-sm-6 col-md-3">
                  <label class="form-label">Price per Person (\u20B9) <span class="text-danger">*</span></label>
                  <div class="input-group">
                    <span class="input-group-text bg-light">\u20B9</span>
                    <input type="number" min="0" class="form-control modern-input" [class.is-invalid]="isBatchFieldInvalid(i, 'price')" formControlName="price" placeholder="3499" />
                  </div>
                  <div class="invalid-feedback" *ngIf="isBatchFieldInvalid(i, 'price')">Required.</div>
                </div>

                <div class="col-12 col-sm-6 col-md-3">
                  <label class="form-label">Duration Label</label>
                  <input type="text" class="form-control modern-input" formControlName="duration" placeholder="e.g. 2 Days / 1 Night" />
                </div>

                <div class="col-12 col-sm-6 col-md-3">
                  <label class="form-label">Batch Status <span class="text-danger">*</span></label>
                  <select class="form-select modern-select" [class.is-invalid]="isBatchFieldInvalid(i, 'batchStatus')" formControlName="batchStatus">
                    <option value="" disabled>Select Status</option>
                    <option *ngFor="let s of batchStatuses" [value]="s">{{ s }}</option>
                  </select>
                </div>

                <div class="col-6 col-md-3">
                  <label class="form-label">Min - Max Age</label>
                  <div class="d-flex gap-1">
                    <input type="number" class="form-control modern-input text-center" formControlName="minAge" placeholder="Min (12)" />
                    <input type="number" class="form-control modern-input text-center" formControlName="maxAge" placeholder="Max (65)" />
                  </div>
                </div>

                <div class="col-6 col-md-3">
                  <label class="form-label">Min - Max Participants</label>
                  <div class="d-flex gap-1">
                    <input type="number" class="form-control modern-input text-center" formControlName="minParticipants" placeholder="Min (5)" />
                    <input type="number" class="form-control modern-input text-center" formControlName="maxParticipants" placeholder="Max (30)" />
                  </div>
                </div>
              </div>

              <!-- CAPTAIN / TREK LEADER CARD -->
              <div class="captain-subcard mt-4 p-3 rounded border">
                <div class="d-flex align-items-center gap-2 mb-3">
                  <div class="captain-icon-badge"><i class="bi bi-person-badge-fill"></i></div>
                  <div>
                    <h6 class="mb-0 fw-bold">Trek Captain & Emergency Contacts for Batch #{{ i + 1 }}</h6>
                    <p class="text-muted small mb-0">Assigned leader details shared with booked participants on confirmation & WhatsApp roster.</p>
                  </div>
                </div>

                <div class="row g-3">
                  <div class="col-12 col-md-4">
                    <label class="form-label">Captain / Leader Name</label>
                    <div class="input-group">
                      <span class="input-group-text bg-light"><i class="bi bi-person-fill"></i></span>
                      <input type="text" class="form-control modern-input" formControlName="captainName" placeholder="e.g. Captain Jagadish / Arjun" />
                    </div>
                  </div>

                  <div class="col-12 col-md-4">
                    <label class="form-label">Captain Contact / WhatsApp Phone</label>
                    <div class="input-group">
                      <span class="input-group-text bg-light"><i class="bi bi-telephone-fill"></i></span>
                      <input type="tel" class="form-control modern-input" formControlName="captainPhone" placeholder="e.g. +91 98765 43210" />
                    </div>
                  </div>

                  <div class="col-12 col-md-4">
                    <label class="form-label">Captain Email / Alt Contact</label>
                    <div class="input-group">
                      <span class="input-group-text bg-light"><i class="bi bi-envelope-fill"></i></span>
                      <input type="email" class="form-control modern-input" formControlName="captainEmail" placeholder="e.g. captain@gowild.in" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div class="section-footer d-flex justify-content-between">
            <button type="button" class="btn-app btn-ghost" (click)="setActiveSection('basic')">
              <i class="bi bi-arrow-left me-1"></i> Back to Basics
            </button>
            <button type="button" class="btn-app btn-primary" (click)="setActiveSection('itinerary')">
              Next: Itinerary & Waypoints <i class="bi bi-arrow-right ms-1"></i>
            </button>
          </div>
        </div>

        <!-- ==========================================
             SECTION 3: ITINERARY & ELEVATION WAYPOINTS
             ========================================== -->
        <div class="section-card mb-4" *ngIf="activeSection === 'itinerary'">
          <div class="section-header">
            <div class="header-icon"><i class="bi bi-map-fill"></i></div>
            <div class="header-text">
              <h4 class="mb-0">3. Day-by-Day Itinerary & Elevation Profile</h4>
              <p class="mb-0">Schedule activities for each day and establish checkpoint milestones.</p>
            </div>
          </div>

          <div class="section-body">
            
            <!-- ITINERARY DAYS BUILDER (For Primary Batch) -->
            <div class="mb-4">
              <div class="d-flex align-items-center justify-content-between mb-3">
                <h5 class="fw-bold mb-0"><i class="bi bi-calendar-event me-2 text-primary"></i>Day-by-Day Schedule (Batch #1)</h5>
                <button type="button" class="btn-app btn-ghost btn-sm" (click)="addItineraryDay(0)">
                  <i class="bi bi-plus-circle me-1"></i> Add Day
                </button>
              </div>

              <div *ngIf="batches.length > 0" class="d-flex flex-column gap-3">
                <div *ngFor="let day of getItineraryDays(0).controls; let dIndex = index" class="day-timeline-card p-3 rounded border">
                  <div class="d-flex align-items-center justify-content-between mb-2">
                    <div class="d-flex align-items-center gap-2 flex-grow-1 me-3" [formGroup]="$any(day)">
                      <span class="day-pill">Day {{ dIndex + 1 }}</span>
                      <input type="text" class="form-control modern-input" formControlName="title" placeholder="e.g. Bangalore Departure & Basecamp Acclimatization" />
                    </div>
                    <div class="d-flex gap-1">
                      <button type="button" class="btn btn-outline-primary btn-sm" (click)="addActivity(0, dIndex)">
                        <i class="bi bi-plus-lg me-1"></i> Activity
                      </button>
                      <button type="button" class="btn btn-outline-danger btn-sm" (click)="removeItineraryDay(0, dIndex)" [disabled]="getItineraryDays(0).length <= 1">
                        <i class="bi bi-trash"></i>
                      </button>
                    </div>
                  </div>

                  <!-- ACTIVITIES FOR THIS DAY -->
                  <div class="activities-list mt-2 ps-3 border-start">
                    <div *ngFor="let act of getActivities(0, dIndex).controls; let aIndex = index" [formGroup]="$any(act)" class="d-flex gap-2 align-items-center mb-2">
                      <input type="time" class="form-control modern-input" style="max-width: 140px;" formControlName="activityTime" />
                      <input type="text" class="form-control modern-input flex-grow-1" formControlName="activityText" placeholder="e.g. Arrive at Chikmagalur, brief safety orientation & breakfast" />
                      <button type="button" class="btn btn-link text-danger p-0" (click)="removeActivity(0, dIndex, aIndex)">
                        <i class="bi bi-x-circle-fill fs-5"></i>
                      </button>
                    </div>
                    <div *ngIf="getActivities(0, dIndex).length === 0" class="text-muted small py-1">
                      No timestamped activities added yet. Click "+ Activity" above to add time slots.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr class="my-4" />

            <!-- ELEVATION WAYPOINTS MATRIX -->
            <div>
              <div class="d-flex align-items-center justify-content-between mb-3">
                <div>
                  <h5 class="fw-bold mb-0"><i class="bi bi-activity me-2 text-success"></i>Elevation Profile & Trail Checkpoints</h5>
                  <p class="text-muted small mb-0">Renders the interactive SVG elevation chart on user discovery and booking pages.</p>
                </div>
                <button type="button" class="btn-app btn-ghost btn-sm" (click)="addWaypoint()">
                  <i class="bi bi-plus-circle me-1"></i> Add Checkpoint
                </button>
              </div>

              <div formArrayName="elevationWaypoints" class="d-flex flex-column gap-2">
                <div *ngFor="let wp of elevationWaypoints.controls; let wIndex = index" [formGroupName]="wIndex" class="waypoint-row p-2 rounded border bg-light d-flex flex-wrap align-items-center gap-2">
                  <span class="badge bg-secondary">#{{ wIndex + 1 }}</span>
                  
                  <div class="input-group" style="width: 140px;">
                    <span class="input-group-text bg-white small">KM</span>
                    <input type="number" step="0.1" min="0" class="form-control modern-input text-center" formControlName="km" placeholder="0.0" />
                  </div>

                  <div class="input-group" style="width: 160px;">
                    <span class="input-group-text bg-white small">Elev (m)</span>
                    <input type="number" min="0" class="form-control modern-input text-center" formControlName="elevation" placeholder="950" />
                  </div>

                  <input type="text" class="form-control modern-input flex-grow-1" style="min-width: 160px;" formControlName="name" placeholder="Checkpoint Name (e.g. Ridge Summit)" />
                  <input type="text" class="form-control modern-input flex-grow-1" style="min-width: 180px;" formControlName="note" placeholder="Short milestone note..." />

                  <button type="button" class="btn btn-outline-danger btn-sm" (click)="removeWaypoint(wIndex)" [disabled]="elevationWaypoints.length <= 2">
                    <i class="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            </div>

          </div>

          <div class="section-footer d-flex justify-content-between">
            <button type="button" class="btn-app btn-ghost" (click)="setActiveSection('batches')">
              <i class="bi bi-arrow-left me-1"></i> Back to Batches
            </button>
            <button type="button" class="btn-app btn-primary" (click)="setActiveSection('gear')">
              Next: Checklist & Inclusions <i class="bi bi-arrow-right ms-1"></i>
            </button>
          </div>
        </div>

        <!-- ==========================================
             SECTION 4: CHECKLIST, INCLUSIONS & NOTES
             ========================================== -->
        <div class="section-card mb-4" *ngIf="activeSection === 'gear'">
          <div class="section-header">
            <div class="header-icon"><i class="bi bi-backpack-fill"></i></div>
            <div class="header-text">
              <h4 class="mb-0">4. Inclusions, Things to Carry & Advisory Notes</h4>
              <p class="mb-0">Essential gear checklist and transparent package pricing breakdown.</p>
            </div>
          </div>

          <div class="section-body">
            <div class="row g-4">
              
              <!-- INCLUSIONS & EXCLUSIONS -->
              <div class="col-12 col-lg-6" *ngIf="batches.length > 0">
                <div class="d-flex align-items-center justify-content-between mb-2">
                  <label class="form-label fw-bold mb-0 text-success"><i class="bi bi-check-circle-fill me-1"></i> Inclusions</label>
                  <button type="button" class="btn-app btn-ghost btn-sm" (click)="addInclusion(0)">
                    <i class="bi bi-plus-lg me-1"></i> Add
                  </button>
                </div>
                <div class="d-flex flex-column gap-2">
                  <div *ngFor="let inc of getInclusions(0).controls; let ii = index" class="input-group">
                    <span class="input-group-text bg-success-subtle text-success">\u2713</span>
                    <input type="text" class="form-control modern-input" [formControl]="asFormControl(getInclusions(0).at(ii))" placeholder="e.g. Certified Mountain Guide, Forest Permits & Camping Tents" />
                    <button type="button" class="btn btn-outline-danger" (click)="removeInclusion(0, ii)" [disabled]="getInclusions(0).length <= 1">
                      <i class="bi bi-trash"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div class="col-12 col-lg-6" *ngIf="batches.length > 0">
                <div class="d-flex align-items-center justify-content-between mb-2">
                  <label class="form-label fw-bold mb-0 text-danger"><i class="bi bi-x-circle-fill me-1"></i> Exclusions</label>
                  <button type="button" class="btn-app btn-ghost btn-sm" (click)="addExclusion(0)">
                    <i class="bi bi-plus-lg me-1"></i> Add
                  </button>
                </div>
                <div class="d-flex flex-column gap-2">
                  <div *ngFor="let exc of getExclusions(0).controls; let ei = index" class="input-group">
                    <span class="input-group-text bg-danger-subtle text-danger">\u2715</span>
                    <input type="text" class="form-control modern-input" [formControl]="asFormControl(getExclusions(0).at(ei))" placeholder="e.g. Personal Porterage, Travel Insurance, Extra Food Items" />
                    <button type="button" class="btn btn-outline-danger" (click)="removeExclusion(0, ei)" [disabled]="getExclusions(0).length <= 1">
                      <i class="bi bi-trash"></i>
                    </button>
                  </div>
                </div>
              </div>

              <!-- THINGS TO CARRY -->
              <div class="col-12 col-lg-6">
                <div class="d-flex align-items-center justify-content-between mb-2">
                  <label class="form-label fw-bold mb-0 text-primary"><i class="bi bi-backpack2-fill me-1"></i> Things to Carry Checklist</label>
                  <button type="button" class="btn-app btn-ghost btn-sm" (click)="addThingToCarry()">
                    <i class="bi bi-plus-lg me-1"></i> Add Item
                  </button>
                </div>
                <div formArrayName="thingsToCarry" class="d-flex flex-column gap-2">
                  <div *ngFor="let t of thingsToCarry.controls; let ti = index" class="input-group">
                    <span class="input-group-text bg-light">\u{1F392}</span>
                    <input type="text" class="form-control modern-input" [formControlName]="ti" placeholder="e.g. 2L Reusable Water Bottle, High-Traction Trek Shoes" />
                    <button type="button" class="btn btn-outline-danger" (click)="removeThingToCarry(ti)">
                      <i class="bi bi-trash"></i>
                    </button>
                  </div>
                  <div *ngIf="thingsToCarry.length === 0" class="text-muted small">No custom items added. Click "+ Add Item" above.</div>
                </div>
              </div>

              <!-- IMPORTANT NOTES -->
              <div class="col-12 col-lg-6">
                <div class="d-flex align-items-center justify-content-between mb-2">
                  <label class="form-label fw-bold mb-0 text-warning"><i class="bi bi-exclamation-triangle-fill me-1"></i> Important Guidelines & Rules</label>
                  <button type="button" class="btn-app btn-ghost btn-sm" (click)="addImportantNote()">
                    <i class="bi bi-plus-lg me-1"></i> Add Note
                  </button>
                </div>
                <div formArrayName="importantNotes" class="d-flex flex-column gap-2">
                  <div *ngFor="let n of importantNotes.controls; let ni = index" class="input-group">
                    <span class="input-group-text bg-light">\u26A0\uFE0F</span>
                    <input type="text" class="form-control modern-input" [formControlName]="ni" placeholder="e.g. Strict No-Smoking & Zero Plastic litter policy in reserve forest" />
                    <button type="button" class="btn btn-outline-danger" (click)="removeImportantNote(ni)">
                      <i class="bi bi-trash"></i>
                    </button>
                  </div>
                  <div *ngIf="importantNotes.length === 0" class="text-muted small">No advisory notes added. Click "+ Add Note" above.</div>
                </div>
              </div>

            </div>
          </div>

          <div class="section-footer d-flex justify-content-between">
            <button type="button" class="btn-app btn-ghost" (click)="setActiveSection('itinerary')">
              <i class="bi bi-arrow-left me-1"></i> Back to Itinerary
            </button>
            <button type="button" class="btn-app btn-primary" (click)="setActiveSection('media')">
              Next: Media & Gallery <i class="bi bi-arrow-right ms-1"></i>
            </button>
          </div>
        </div>

        <!-- ==========================================
             SECTION 5: MEDIA & GALLERY MANAGEMENT
             ========================================== -->
        <div class="section-card mb-4" *ngIf="activeSection === 'media'">
          <div class="section-header">
            <div class="header-icon"><i class="bi bi-images"></i></div>
            <div class="header-text">
              <h4 class="mb-0">5. Cover Image & Gallery Media</h4>
              <p class="mb-0">Manage featured cover photo and supplementary gallery slides.</p>
            </div>
          </div>

          <div class="section-body">
            <div class="row g-4">
              
              <!-- COVER IMAGE -->
              <div class="col-12 col-md-5">
                <label class="form-label fw-bold">Featured Cover Image (Hero)</label>
                
                <div class="dropzone-box" (click)="coverFileInput.click()" *ngIf="!coverPreview">
                  <i class="bi bi-cloud-arrow-up display-4 text-primary mb-2"></i>
                  <h6 class="fw-bold mb-1">Upload New Cover Photo</h6>
                  <p class="text-muted small mb-0">Recommended: 1920x1080px (16:9), PNG/JPG/WEBP</p>
                  <input #coverFileInput type="file" accept="image/*" hidden (change)="onCoverImageSelected($event)" />
                </div>

                <div class="image-preview-card" *ngIf="coverPreview">
                  <img [src]="coverPreview" alt="Cover Preview" class="cover-img rounded" />
                  <button type="button" class="btn-remove-img" (click)="removeCoverImage()">
                    <i class="bi bi-trash"></i>
                  </button>
                  <div class="cover-badge">Featured Cover</div>
                </div>
              </div>

              <!-- GALLERY -->
              <div class="col-12 col-md-7">
                <div class="d-flex align-items-center justify-content-between mb-2">
                  <label class="form-label fw-bold mb-0">
                    Gallery Visuals ({{ existingGalleryFilenames.length + galleryPreviews.length }} total)
                  </label>
                  <button type="button" class="btn-app btn-ghost btn-sm" (click)="galleryFileInput.click()">
                    <i class="bi bi-plus-lg me-1"></i> Add Images
                  </button>
                  <input #galleryFileInput type="file" accept="image/*" multiple hidden (change)="onGalleryImagesSelected($event)" />
                </div>

                <div class="gallery-grid" *ngIf="existingGalleryFilenames.length > 0 || galleryPreviews.length > 0">
                  
                  <!-- Existing Gallery Images -->
                  <div *ngFor="let filename of existingGalleryFilenames" class="gallery-thumb-card">
                    <img [src]="getImageUrl(filename)" alt="Gallery item" class="thumb-img rounded" />
                    <button type="button" class="btn-remove-thumb" (click)="removeExistingGalleryImage(filename)" title="Remove Photo">
                      <i class="bi bi-trash"></i>
                    </button>
                  </div>

                  <!-- New Gallery Previews -->
                  <div *ngFor="let preview of galleryPreviews; let gIndex = index" class="gallery-thumb-card border-success">
                    <img [src]="preview" alt="New Upload" class="thumb-img rounded" />
                    <button type="button" class="btn-remove-thumb" (click)="removeNewGalleryImage(gIndex)">
                      <i class="bi bi-trash"></i>
                    </button>
                    <span class="new-badge">New</span>
                  </div>

                </div>

                <div class="dropzone-box py-4 text-center mt-2" (click)="galleryFileInput.click()" *ngIf="existingGalleryFilenames.length === 0 && galleryPreviews.length === 0">
                  <i class="bi bi-camera-fill fs-2 text-muted mb-1"></i>
                  <p class="text-muted small mb-0">Upload multi-angle trail photos, waterfalls, campsites & summit panoramas.</p>
                </div>
              </div>

            </div>
          </div>

          <div class="section-footer d-flex justify-content-between">
            <button type="button" class="btn-app btn-ghost" (click)="setActiveSection('gear')">
              <i class="bi bi-arrow-left me-1"></i> Back to Checklist
            </button>
            <button type="submit" class="btn-app btn-primary" [disabled]="isSaving">
              <span *ngIf="!isSaving"><i class="bi bi-check2-circle me-1"></i> Save All Changes</span>
              <span *ngIf="isSaving"><span class="spinner-border spinner-border-sm me-1"></span> Saving...</span>
            </button>
          </div>
        </div>

      </form>

      <!-- STICKY BOTTOM SUBMISSION & LIVE METRICS BAR -->
      <div class="sticky-form-footer">
        <div class="container-fluid d-flex flex-wrap align-items-center justify-content-between gap-3">
          
          <!-- LIVE SUMMARY CHIPS -->
          <div class="d-flex flex-wrap align-items-center gap-2">
            <div class="summary-chip" *ngIf="editTrekForm.get('name')?.value">
              <i class="bi bi-geo-alt-fill text-primary me-1"></i>
              <strong>{{ editTrekForm.get('name')?.value }}</strong>
            </div>
            <div class="summary-chip">
              <i class="bi bi-people-fill text-info me-1"></i>
              <span>{{ totalBatchesCount }} Batch{{ totalBatchesCount > 1 ? 'es' : '' }}</span>
            </div>
            <div class="summary-chip" [class.highlight]="totalCaptainsAssigned > 0">
              <i class="bi bi-person-badge-fill text-success me-1"></i>
              <span>{{ totalCaptainsAssigned }}/{{ totalBatchesCount }} Captains Assigned</span>
            </div>
            <div class="summary-chip" *ngIf="minTrekPrice > 0">
              <i class="bi bi-currency-rupee text-warning me-1"></i>
              <span>From \u20B9{{ minTrekPrice | number }}</span>
            </div>
            <div class="draft-indicator" *ngIf="lastAutoSavedAt">
              <i class="bi bi-cloud-check-fill text-success me-1"></i>
              <span class="small text-muted">Autosaved {{ lastAutoSavedAt | date:'shortTime' }}</span>
            </div>
          </div>

          <!-- ACTION CTAS -->
          <div class="d-flex align-items-center gap-2">
            <button type="button" class="btn-app btn-ghost" (click)="cancel()">
              Back to Treks
            </button>
            <button type="button" class="btn-app btn-primary" (click)="saveTrek()" [disabled]="isSaving">
              <span *ngIf="!isSaving"><i class="bi bi-check2-circle me-1"></i> Save Changes</span>
              <span *ngIf="isSaving"><span class="spinner-border spinner-border-sm me-1"></span> Saving...</span>
            </button>
          </div>

        </div>
      </div>

    </div>

  </app-admin-shell>
</div>
`, styles: ["/* src/app/treks/trek-edit/trek-edit.component.scss */\n:host {\n  display: block;\n}\n.status-banner {\n  padding: 12px 18px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n.status-banner.status-success {\n  background: #ecfdf5;\n  border: 1px solid #a7f3d0;\n  color: #065f46;\n}\n.status-banner.status-warning {\n  background: #fffbeb;\n  border: 1px solid #fde68a;\n  color: #92400e;\n}\n.status-banner.status-danger {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #991b1b;\n}\n.nav-stepper-container {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 16px;\n  padding: 8px 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.nav-stepper-container .stepper-scroll {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  scrollbar-width: none;\n}\n.nav-stepper-container .stepper-scroll::-webkit-scrollbar {\n  display: none;\n}\n.nav-stepper-container .stepper-scroll .step-pill {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 18px;\n  border-radius: 12px;\n  background: transparent;\n  border: 1px solid transparent;\n  color: #64748b;\n  font-size: 0.88rem;\n  font-weight: 600;\n  white-space: nowrap;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.nav-stepper-container .stepper-scroll .step-pill:hover {\n  background: #f8fafc;\n  color: #0f172a;\n}\n.nav-stepper-container .stepper-scroll .step-pill.active {\n  background: rgba(29, 122, 109, 0.08);\n  color: #1d7a6d;\n  border-color: rgba(29, 122, 109, 0.25);\n  font-weight: 700;\n}\n.nav-stepper-container .stepper-scroll .step-pill .step-badge {\n  background: #1d7a6d;\n  color: #ffffff;\n  font-size: 0.72rem;\n  padding: 2px 7px;\n  border-radius: 12px;\n}\n.section-card {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 16px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n  overflow: hidden;\n}\n.section-card .section-header {\n  padding: 18px 24px;\n  border-bottom: 1px solid #e2e8f0;\n  background:\n    linear-gradient(\n      180deg,\n      #fafbfc 0%,\n      #ffffff 100%);\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.section-card .section-header .header-icon {\n  width: 42px;\n  height: 42px;\n  background: rgba(29, 122, 109, 0.08);\n  color: #1d7a6d;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.25rem;\n}\n.section-card .section-header .header-text h4 {\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.section-card .section-header .header-text p {\n  font-size: 0.84rem;\n  color: #64748b;\n}\n.section-card .section-body {\n  padding: 24px;\n}\n.section-card .section-footer {\n  padding: 16px 24px;\n  border-top: 1px solid #e2e8f0;\n  background: #f8fafc;\n}\n.form-label {\n  font-size: 0.84rem;\n  font-weight: 600;\n  color: #334155;\n  margin-bottom: 6px;\n}\n.modern-input,\n.modern-select {\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 0.9rem;\n  color: #0f172a;\n  transition: all 0.2s ease;\n}\n.modern-input:focus,\n.modern-select:focus {\n  border-color: #1d7a6d;\n  box-shadow: 0 0 0 3px rgba(29, 122, 109, 0.15);\n}\n.batch-panel {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 20px;\n  transition: all 0.2s ease;\n}\n.batch-panel:hover {\n  border-color: #cbd5e1;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.batch-panel .batch-panel-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-bottom: 12px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.06);\n}\n.batch-panel .batch-panel-header .batch-badge {\n  font-weight: 700;\n  font-size: 0.95rem;\n  color: #0f172a;\n  background: #ffffff;\n  padding: 4px 12px;\n  border-radius: 8px;\n  border: 1px solid #e2e8f0;\n}\n.captain-subcard {\n  background: #ffffff;\n  border: 1px solid rgba(29, 122, 109, 0.2) !important;\n  box-shadow: 0 2px 8px rgba(29, 122, 109, 0.05);\n}\n.captain-subcard .captain-icon-badge {\n  width: 36px;\n  height: 36px;\n  background: rgba(29, 122, 109, 0.08);\n  color: #1d7a6d;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n}\n.day-timeline-card {\n  background: #ffffff;\n  border-radius: 12px;\n}\n.day-timeline-card .day-pill {\n  background: #1d7a6d;\n  color: #ffffff;\n  font-weight: 700;\n  font-size: 0.8rem;\n  padding: 6px 12px;\n  border-radius: 8px;\n  white-space: nowrap;\n}\n.waypoint-row {\n  background: #f8fafc;\n}\n.dropzone-box {\n  border: 2px dashed #e2e8f0;\n  border-radius: 12px;\n  padding: 30px 20px;\n  text-align: center;\n  background: #f8fafc;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.dropzone-box:hover {\n  border-color: #1d7a6d;\n  background: rgba(29, 122, 109, 0.08);\n}\n.image-preview-card {\n  position: relative;\n  border-radius: 12px;\n  overflow: hidden;\n}\n.image-preview-card .cover-img {\n  width: 100%;\n  height: 220px;\n  object-fit: cover;\n}\n.image-preview-card .btn-remove-img {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  background: rgba(0, 0, 0, 0.65);\n  color: #ffffff;\n  border: none;\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.image-preview-card .btn-remove-img:hover {\n  background: #dc2626;\n}\n.image-preview-card .cover-badge {\n  position: absolute;\n  bottom: 10px;\n  left: 10px;\n  background: rgba(0, 0, 0, 0.7);\n  color: #ffffff;\n  padding: 4px 10px;\n  border-radius: 6px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.gallery-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));\n  gap: 12px;\n}\n.gallery-grid .gallery-thumb-card {\n  position: relative;\n  height: 90px;\n  border-radius: 8px;\n  overflow: hidden;\n  border: 1px solid #e2e8f0;\n}\n.gallery-grid .gallery-thumb-card .thumb-img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.gallery-grid .gallery-thumb-card .btn-remove-thumb {\n  position: absolute;\n  top: 4px;\n  right: 4px;\n  background: rgba(0, 0, 0, 0.65);\n  color: #ffffff;\n  border: none;\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n  cursor: pointer;\n}\n.gallery-grid .gallery-thumb-card .btn-remove-thumb:hover {\n  background: #dc2626;\n}\n.gallery-grid .gallery-thumb-card .new-badge {\n  position: absolute;\n  bottom: 4px;\n  left: 4px;\n  background: #16a34a;\n  color: #ffffff;\n  font-size: 0.65rem;\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-weight: 700;\n}\n.sticky-form-footer {\n  position: sticky;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(255, 255, 255, 0.95);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  border-top: 1px solid #e2e8f0;\n  padding: 14px 20px;\n  z-index: 99;\n  box-shadow: 0 -4px 15px rgba(0, 0, 0, 0.05);\n}\n.sticky-form-footer .summary-chip {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 20px;\n  padding: 6px 14px;\n  font-size: 0.82rem;\n  color: #0f172a;\n  display: inline-flex;\n  align-items: center;\n}\n.sticky-form-footer .summary-chip.highlight {\n  background: #ecfdf5;\n  border-color: #a7f3d0;\n  color: #065f46;\n  font-weight: 600;\n}\n.btn-app {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 9px 18px;\n  font-size: 0.88rem;\n  font-weight: 600;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n  border: 1px solid transparent;\n  cursor: pointer;\n  text-decoration: none;\n}\n.btn-app.btn-primary {\n  background: #1d7a6d;\n  color: #ffffff;\n}\n.btn-app.btn-primary:hover {\n  background: #124842;\n}\n.btn-app.btn-ghost {\n  background: #f8fafc;\n  color: #0f172a;\n  border-color: #e2e8f0;\n}\n.btn-app.btn-ghost:hover {\n  background: #e2e8f0;\n}\n.btn-app.btn-sm {\n  padding: 6px 12px;\n  font-size: 0.8rem;\n}\n@media (max-width: 768px) {\n  .section-card .section-header {\n    padding: 14px 16px;\n  }\n  .section-card .section-body {\n    padding: 16px;\n  }\n  .section-card .section-footer {\n    padding: 12px 16px;\n  }\n  .sticky-form-footer {\n    padding: 10px 14px;\n  }\n}\n/*# sourceMappingURL=trek-edit.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: TrekEdit }, { type: Router }, { type: ActivatedRoute }, { type: DropdownManagerService }, { type: NotificationService }, { type: NotificationService }], { coverFileInput: [{
    type: ViewChild,
    args: ["coverFileInput"]
  }], galleryFileInput: [{
    type: ViewChild,
    args: ["galleryFileInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TrekEditComponent, { className: "TrekEditComponent", filePath: "src/app/treks/trek-edit/trek-edit.component.ts", lineNumber: 32 });
})();

// src/app/treks/trek-edit/trek-edit-module.ts
var routes = [{ path: ":id", component: TrekEditComponent }];
var _TrekEditModule = class _TrekEditModule {
};
_TrekEditModule.\u0275fac = function TrekEditModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TrekEditModule)();
};
_TrekEditModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _TrekEditModule });
_TrekEditModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, TrekEditComponent, RouterModule.forChild(routes)] });
var TrekEditModule = _TrekEditModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrekEditModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        CommonModule,
        TrekEditComponent,
        RouterModule.forChild(routes)
      ]
    }]
  }], null, null);
})();
export {
  TrekEditModule
};
//# sourceMappingURL=trek-edit-module-LYAEIGQX.js.map
