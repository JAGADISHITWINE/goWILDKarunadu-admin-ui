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
  environment,
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
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-KQE4QDNK.js";

// src/app/categories/category-manager.service.ts
var _CategoryManagerService = class _CategoryManagerService {
  constructor(http) {
    this.http = http;
    this.API = `${environment.baseUrl}/categories`;
  }
  getCategories(includeInactive = false) {
    const path = includeInactive ? `${this.API}/manage` : this.API;
    return this.http.get(path);
  }
  createCategory(payload) {
    return this.http.post(this.API, payload);
  }
  updateCategory(id, payload) {
    return this.http.put(`${this.API}/${encodeURIComponent(id)}`, payload);
  }
  deleteCategory(id) {
    return this.http.delete(`${this.API}/${encodeURIComponent(id)}`);
  }
};
_CategoryManagerService.\u0275fac = function CategoryManagerService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CategoryManagerService)(\u0275\u0275inject(HttpClient));
};
_CategoryManagerService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CategoryManagerService, factory: _CategoryManagerService.\u0275fac, providedIn: "root" });
var CategoryManagerService = _CategoryManagerService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CategoryManagerService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/categories/category-manager.component.ts
function CategoryManagerComponent_button_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 53);
    \u0275\u0275listener("click", function CategoryManagerComponent_button_74_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createCategory());
    });
    \u0275\u0275element(1, "i", 54);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.saving ? "Saving..." : "Create Category");
  }
}
function CategoryManagerComponent_button_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 55);
    \u0275\u0275listener("click", function CategoryManagerComponent_button_75_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resetCreateForm());
    });
    \u0275\u0275text(1, " Reset ");
    \u0275\u0275elementEnd();
  }
}
function CategoryManagerComponent_div_76_Template(rf, ctx) {
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
function CategoryManagerComponent_div_77_Template(rf, ctx) {
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
function CategoryManagerComponent_div_97_tr_15_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const category_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r4.name);
  }
}
function CategoryManagerComponent_div_97_tr_15_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 70);
    \u0275\u0275twoWayListener("ngModelChange", function CategoryManagerComponent_div_97_tr_15_ng_template_3_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.editDraft.name, $event) || (ctx_r1.editDraft.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editDraft.name);
  }
}
function CategoryManagerComponent_div_97_tr_15_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "code");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const category_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r4.slug);
  }
}
function CategoryManagerComponent_div_97_tr_15_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 71);
    \u0275\u0275text(1, "Auto-updates from name");
    \u0275\u0275elementEnd();
  }
}
function CategoryManagerComponent_div_97_tr_15_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 72);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const category_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r4.sortOrder);
  }
}
function CategoryManagerComponent_div_97_tr_15_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 73);
    \u0275\u0275twoWayListener("ngModelChange", function CategoryManagerComponent_div_97_tr_15_ng_template_11_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.editDraft.sortOrder, $event) || (ctx_r1.editDraft.sortOrder = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editDraft.sortOrder);
  }
}
function CategoryManagerComponent_div_97_tr_15_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 74);
    \u0275\u0275element(2, "span", 75);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const category_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "status-" + category_r4.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, category_r4.status), " ");
  }
}
function CategoryManagerComponent_div_97_tr_15_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 76);
    \u0275\u0275twoWayListener("ngModelChange", function CategoryManagerComponent_div_97_tr_15_ng_template_15_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.editDraft.status, $event) || (ctx_r1.editDraft.status = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(1, "option", 34);
    \u0275\u0275text(2, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "option", 35);
    \u0275\u0275text(4, "Inactive");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editDraft.status);
  }
}
function CategoryManagerComponent_div_97_tr_15_div_18_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 81);
    \u0275\u0275listener("click", function CategoryManagerComponent_div_97_tr_15_div_18_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const category_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startEdit(category_r4));
    });
    \u0275\u0275element(1, "i", 82);
    \u0275\u0275elementEnd();
  }
}
function CategoryManagerComponent_div_97_tr_15_div_18_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 83);
    \u0275\u0275listener("click", function CategoryManagerComponent_div_97_tr_15_div_18_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const category_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleStatus(category_r4));
    });
    \u0275\u0275element(1, "i", 84);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275classProp("active", category_r4.status === "active");
    \u0275\u0275property("title", category_r4.status === "active" ? "Deactivate Category" : "Activate Category");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", category_r4.status === "active" ? "bi-pause-circle" : "bi-play-circle");
  }
}
function CategoryManagerComponent_div_97_tr_15_div_18_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 85);
    \u0275\u0275listener("click", function CategoryManagerComponent_div_97_tr_15_div_18_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const category_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteCategory(category_r4));
    });
    \u0275\u0275element(1, "i", 86);
    \u0275\u0275elementEnd();
  }
}
function CategoryManagerComponent_div_97_tr_15_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275template(1, CategoryManagerComponent_div_97_tr_15_div_18_button_1_Template, 2, 0, "button", 78)(2, CategoryManagerComponent_div_97_tr_15_div_18_button_2_Template, 2, 4, "button", 79)(3, CategoryManagerComponent_div_97_tr_15_div_18_button_3_Template, 2, 0, "button", 80);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.authService.hasPermission("dropdowns.manage"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.authService.hasPermission("dropdowns.manage"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.authService.hasPermission("dropdowns.manage"));
  }
}
function CategoryManagerComponent_div_97_tr_15_div_19_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 89);
    \u0275\u0275listener("click", function CategoryManagerComponent_div_97_tr_15_div_19_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const category_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.saveEdit(category_r4));
    });
    \u0275\u0275element(1, "i", 90);
    \u0275\u0275text(2, " Save ");
    \u0275\u0275elementEnd();
  }
}
function CategoryManagerComponent_div_97_tr_15_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275template(1, CategoryManagerComponent_div_97_tr_15_div_19_button_1_Template, 3, 0, "button", 87);
    \u0275\u0275elementStart(2, "button", 88);
    \u0275\u0275listener("click", function CategoryManagerComponent_div_97_tr_15_div_19_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.cancelEdit());
    });
    \u0275\u0275text(3, " Cancel ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.authService.hasPermission("dropdowns.manage"));
  }
}
function CategoryManagerComponent_div_97_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 64);
    \u0275\u0275template(2, CategoryManagerComponent_div_97_tr_15_ng_container_2_Template, 3, 1, "ng-container", 65)(3, CategoryManagerComponent_div_97_tr_15_ng_template_3_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 66);
    \u0275\u0275template(6, CategoryManagerComponent_div_97_tr_15_ng_container_6_Template, 3, 1, "ng-container", 65)(7, CategoryManagerComponent_div_97_tr_15_ng_template_7_Template, 2, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 67);
    \u0275\u0275template(10, CategoryManagerComponent_div_97_tr_15_ng_container_10_Template, 3, 1, "ng-container", 65)(11, CategoryManagerComponent_div_97_tr_15_ng_template_11_Template, 1, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275template(14, CategoryManagerComponent_div_97_tr_15_ng_container_14_Template, 5, 4, "ng-container", 65)(15, CategoryManagerComponent_div_97_tr_15_ng_template_15_Template, 5, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 68);
    \u0275\u0275template(18, CategoryManagerComponent_div_97_tr_15_div_18_Template, 4, 3, "div", 69)(19, CategoryManagerComponent_div_97_tr_15_div_19_Template, 4, 1, "div", 69);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const category_r4 = ctx.$implicit;
    const editNameTpl_r13 = \u0275\u0275reference(4);
    const editSlugTpl_r14 = \u0275\u0275reference(8);
    const editOrderTpl_r15 = \u0275\u0275reference(12);
    const editStatusTpl_r16 = \u0275\u0275reference(16);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.editingCategoryId !== category_r4.id)("ngIfElse", editNameTpl_r13);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.editingCategoryId !== category_r4.id)("ngIfElse", editSlugTpl_r14);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.editingCategoryId !== category_r4.id)("ngIfElse", editOrderTpl_r15);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.editingCategoryId !== category_r4.id)("ngIfElse", editStatusTpl_r16);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.editingCategoryId !== category_r4.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.editingCategoryId === category_r4.id);
  }
}
function CategoryManagerComponent_div_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "table", 61)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Category Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "URL Slug");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Order");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 62);
    \u0275\u0275text(13, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275template(15, CategoryManagerComponent_div_97_tr_15_Template, 20, 10, "tr", 63);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r1.paginatedCategories);
  }
}
function CategoryManagerComponent_div_98_option_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 109);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r18 = ctx.$implicit;
    \u0275\u0275property("value", opt_r18);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r18);
  }
}
function CategoryManagerComponent_div_98_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 110);
    \u0275\u0275listener("click", function CategoryManagerComponent_div_98_button_24_Template_button_click_0_listener() {
      const p_r20 = \u0275\u0275restoreView(_r19).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(p_r20));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r20 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", p_r20 === ctx_r1.currentPage ? "btn-primary" : "btn-outline-secondary");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r20, " ");
  }
}
function CategoryManagerComponent_div_98_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 91)(1, "div", 92)(2, "div", 93);
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
    \u0275\u0275text(12, " categories ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 94)(14, "div", 95)(15, "span", 96);
    \u0275\u0275text(16, "Per page:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "select", 97);
    \u0275\u0275twoWayListener("ngModelChange", function CategoryManagerComponent_div_98_Template_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.pageSize, $event) || (ctx_r1.pageSize = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function CategoryManagerComponent_div_98_Template_select_change_17_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageSizeChange());
    });
    \u0275\u0275template(18, CategoryManagerComponent_div_98_option_18_Template, 2, 2, "option", 98);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 99)(20, "button", 100);
    \u0275\u0275listener("click", function CategoryManagerComponent_div_98_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(1));
    });
    \u0275\u0275element(21, "i", 101);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 102);
    \u0275\u0275listener("click", function CategoryManagerComponent_div_98_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.prevPage());
    });
    \u0275\u0275element(23, "i", 103);
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, CategoryManagerComponent_div_98_button_24_Template, 2, 2, "button", 104);
    \u0275\u0275elementStart(25, "button", 105);
    \u0275\u0275listener("click", function CategoryManagerComponent_div_98_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nextPage());
    });
    \u0275\u0275element(26, "i", 106);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 107);
    \u0275\u0275listener("click", function CategoryManagerComponent_div_98_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.totalPages));
    });
    \u0275\u0275element(28, "i", 108);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r1.currentPage - 1) * ctx_r1.pageSize + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.Math.min(ctx_r1.currentPage * ctx_r1.pageSize, ctx_r1.filteredCategories.length));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.filteredCategories.length);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pageSize);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.pageSizeOptions);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.visiblePageNumbers);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
  }
}
function CategoryManagerComponent_div_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 111)(1, "div", 112);
    \u0275\u0275element(2, "i", 113);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4");
    \u0275\u0275text(4, "No categories found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Try adjusting your search filter or create a new category using the form on the left.");
    \u0275\u0275elementEnd()();
  }
}
var _CategoryManagerComponent = class _CategoryManagerComponent {
  get totalPages() {
    return Math.ceil(this.filteredCategories.length / this.pageSize) || 1;
  }
  get paginatedCategories() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredCategories.slice(start, start + this.pageSize);
  }
  get visiblePageNumbers() {
    const pages = [];
    const total = this.totalPages;
    const current = this.currentPage;
    let start = Math.max(1, current - 2);
    let end = Math.min(total, current + 2);
    if (end - start < 4) {
      if (start === 1)
        end = Math.min(total, start + 4);
      else if (end === total)
        start = Math.max(1, end - 4);
    }
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }
  goToPage(page) {
    if (page >= 1 && page <= this.totalPages) {
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
  onPageSizeChange() {
    this.currentPage = 1;
  }
  constructor(categoryService, authService) {
    this.categoryService = categoryService;
    this.authService = authService;
    this.Math = Math;
    this.categories = [];
    this.loading = false;
    this.saving = false;
    this.message = "";
    this.error = "";
    this.searchQuery = "";
    this.statusFilter = "all";
    this.currentPage = 1;
    this.pageSize = 5;
    this.pageSizeOptions = [5, 10, 20, 40];
    this.newCategory = {
      name: "",
      status: "active",
      sortOrder: 0
    };
    this.editingCategoryId = null;
    this.editDraft = {
      name: "",
      status: "active",
      sortOrder: 0
    };
  }
  ngOnInit() {
    this.loadCategories();
  }
  get filteredCategories() {
    return this.categories.filter((category) => {
      const matchesSearch = !this.searchQuery.trim() || [category.name, category.slug].join(" ").toLowerCase().includes(this.searchQuery.trim().toLowerCase());
      const matchesStatus = this.statusFilter === "all" || category.status === this.statusFilter;
      return matchesSearch && matchesStatus;
    });
  }
  get activeCount() {
    return this.categories.filter((category) => category.status === "active").length;
  }
  get inactiveCount() {
    return this.categories.filter((category) => category.status === "inactive").length;
  }
  loadCategories() {
    this.loading = true;
    this.error = "";
    this.categoryService.getCategories(true).subscribe({
      next: (res) => {
        this.categories = Array.isArray(res?.data) ? this.sortCategories(res.data) : [];
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.error = "Failed to load categories";
      }
    });
  }
  createCategory() {
    const name = String(this.newCategory.name || "").trim();
    if (!name) {
      this.error = "Category name is required";
      this.message = "";
      return;
    }
    const payload = {
      name,
      status: this.newCategory.status || "active",
      sortOrder: Number(this.newCategory.sortOrder || 0)
    };
    this.saving = true;
    this.error = "";
    this.message = "";
    this.categoryService.createCategory(payload).subscribe({
      next: (res) => {
        this.saving = false;
        this.message = res?.message || "Category created";
        this.resetCreateForm();
        this.loadCategories();
      },
      error: (err) => {
        this.saving = false;
        this.error = err?.error?.message || "Failed to create category";
      }
    });
  }
  startEdit(category) {
    this.editingCategoryId = category.id;
    this.editDraft = {
      name: category.name,
      status: category.status,
      sortOrder: Number(category.sortOrder || 0)
    };
  }
  cancelEdit() {
    this.editingCategoryId = null;
    this.editDraft = {
      name: "",
      status: "active",
      sortOrder: 0
    };
  }
  saveEdit(category) {
    const name = String(this.editDraft.name || "").trim();
    if (!name) {
      this.error = "Category name is required";
      this.message = "";
      return;
    }
    const payload = {
      name,
      status: this.editDraft.status || "active",
      sortOrder: Number(this.editDraft.sortOrder || 0)
    };
    this.saving = true;
    this.error = "";
    this.message = "";
    this.categoryService.updateCategory(category.id, payload).subscribe({
      next: (res) => {
        this.saving = false;
        this.message = res?.message || "Category updated";
        this.cancelEdit();
        this.loadCategories();
      },
      error: (err) => {
        this.saving = false;
        this.error = err?.error?.message || "Failed to update category";
      }
    });
  }
  toggleStatus(category) {
    const nextStatus = category.status === "active" ? "inactive" : "active";
    this.saving = true;
    this.error = "";
    this.message = "";
    this.categoryService.updateCategory(category.id, { status: nextStatus }).subscribe({
      next: (res) => {
        this.saving = false;
        this.message = res?.message || "Category status updated";
        this.loadCategories();
      },
      error: (err) => {
        this.saving = false;
        this.error = err?.error?.message || "Failed to update category";
      }
    });
  }
  deleteCategory(category) {
    const confirmed = confirm(`Delete category "${category.name}" permanently?`);
    if (!confirmed)
      return;
    this.saving = true;
    this.error = "";
    this.message = "";
    this.categoryService.deleteCategory(category.id).subscribe({
      next: (res) => {
        this.saving = false;
        this.message = res?.message || "Category deleted";
        if (this.editingCategoryId === category.id) {
          this.cancelEdit();
        }
        this.loadCategories();
      },
      error: (err) => {
        this.saving = false;
        this.error = err?.error?.message || "Failed to delete category";
      }
    });
  }
  resetCreateForm() {
    this.newCategory = {
      name: "",
      status: "active",
      sortOrder: this.categories.length + 1
    };
  }
  sortCategories(rows) {
    return [...rows].sort((a, b) => {
      const orderDiff = Number(a.sortOrder || 0) - Number(b.sortOrder || 0);
      if (orderDiff !== 0)
        return orderDiff;
      return String(a.name || "").localeCompare(String(b.name || ""));
    });
  }
};
_CategoryManagerComponent.\u0275fac = function CategoryManagerComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CategoryManagerComponent)(\u0275\u0275directiveInject(CategoryManagerService), \u0275\u0275directiveInject(AuthService));
};
_CategoryManagerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoryManagerComponent, selectors: [["app-category-manager"]], decls: 100, vars: 15, consts: [["editNameTpl", ""], ["editSlugTpl", ""], ["editOrderTpl", ""], ["editStatusTpl", ""], [1, "category-page"], ["sectionLabel", "Content & Catalog", "title", "Category Management", "subtitle", "Organize, reorder, activate, and manage blog and experience categories across your platform."], [1, "stats-row"], [1, "stat-card"], [1, "stat-icon", "total"], [1, "bi", "bi-folder2-open"], [1, "stat-info"], [1, "stat-label"], [1, "stat-icon", "active"], [1, "bi", "bi-check2-circle"], [1, "text-success"], [1, "stat-icon", "inactive"], [1, "bi", "bi-pause-circle"], [1, "text-muted"], [1, "stat-card", "tip-card"], [1, "stat-icon", "tip"], [1, "bi", "bi-lightbulb"], [1, "layout-grid"], [1, "surface-card", "create-panel"], [1, "panel-heading"], [1, "heading-text"], [1, "eyebrow"], [1, "bi", "bi-plus-circle"], [1, "form-grid"], [1, "form-group"], [1, "req"], ["type", "text", "placeholder", "e.g. Wildlife Safari, Trekking Trails", 1, "app-input", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", 1, "app-input", 3, "ngModelChange", "ngModel"], [1, "field-hint"], [1, "app-select", 3, "ngModelChange", "ngModel"], ["value", "active"], ["value", "inactive"], [1, "action-row"], ["class", "btn-app primary", 3, "disabled", "click", 4, "ngIf"], ["class", "btn-app secondary", "type", "button", 3, "click", 4, "ngIf"], ["class", "feedback-msg success", 4, "ngIf"], ["class", "feedback-msg error", 4, "ngIf"], [1, "surface-card", "list-panel"], [1, "panel-heading", "list-head"], [1, "bi", "bi-collection"], [1, "filters"], [1, "search-input-wrap"], [1, "bi", "bi-search"], ["type", "search", "placeholder", "Search categories...", 3, "ngModelChange", "ngModel"], [1, "status-filter-select", 3, "ngModelChange", "ngModel"], ["value", "all"], ["class", "table-wrap", 4, "ngIf"], ["class", "pagination-shell mt-3", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "btn-app", "primary", 3, "click", "disabled"], [1, "bi", "bi-plus-lg"], ["type", "button", 1, "btn-app", "secondary", 3, "click"], [1, "feedback-msg", "success"], [1, "bi", "bi-check-circle-fill"], [1, "feedback-msg", "error"], [1, "bi", "bi-exclamation-triangle-fill"], [1, "table-wrap"], [1, "category-table"], [1, "text-end"], [4, "ngFor", "ngForOf"], [1, "name-cell"], [4, "ngIf", "ngIfElse"], [1, "slug-cell"], [1, "order-cell"], [1, "actions-cell"], ["class", "action-buttons-wrap", 4, "ngIf"], ["type", "text", 1, "app-input-sm", 3, "ngModelChange", "ngModel"], [1, "hint"], [1, "order-badge"], ["type", "number", "min", "0", 1, "app-input-sm", "order-input", 3, "ngModelChange", "ngModel"], [1, "status-badge", 3, "ngClass"], [1, "status-dot"], [1, "app-select-sm", 3, "ngModelChange", "ngModel"], [1, "action-buttons-wrap"], ["class", "tbl-action-btn edit", "title", "Edit Category", 3, "click", 4, "ngIf"], ["class", "tbl-action-btn toggle", 3, "active", "title", "click", 4, "ngIf"], ["class", "tbl-action-btn delete", "title", "Delete Category", 3, "click", 4, "ngIf"], ["title", "Edit Category", 1, "tbl-action-btn", "edit", 3, "click"], [1, "bi", "bi-pencil"], [1, "tbl-action-btn", "toggle", 3, "click", "title"], [1, "bi", 3, "ngClass"], ["title", "Delete Category", 1, "tbl-action-btn", "delete", 3, "click"], [1, "bi", "bi-trash3"], ["class", "btn-app primary sm", 3, "click", 4, "ngIf"], [1, "btn-app", "secondary", "sm", 3, "click"], [1, "btn-app", "primary", "sm", 3, "click"], [1, "bi", "bi-check-lg"], [1, "pagination-shell", "mt-3"], [1, "d-flex", "flex-wrap", "align-items-center", "justify-content-between", "gap-3"], [1, "pagination-info", "text-muted", "small"], [1, "d-flex", "align-items-center", "gap-2"], [1, "page-size-picker", "d-flex", "align-items-center", "gap-2", "me-2"], [1, "text-muted", "small"], [1, "form-select", "form-select-sm", 2, "width", "75px", 3, "ngModelChange", "change", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "pagination-buttons", "d-flex", "align-items-center", "gap-1"], ["title", "First Page", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click", "disabled"], [1, "bi", "bi-chevron-double-left"], ["title", "Previous Page", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click", "disabled"], [1, "bi", "bi-chevron-left"], ["class", "btn btn-sm", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["title", "Next Page", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click", "disabled"], [1, "bi", "bi-chevron-right"], ["title", "Last Page", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click", "disabled"], [1, "bi", "bi-chevron-double-right"], [3, "value"], [1, "btn", "btn-sm", 3, "click", "ngClass"], [1, "empty-state"], [1, "empty-icon"], [1, "bi", "bi-folder-x"]], template: function CategoryManagerComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "app-admin-shell", 5)(2, "div", 6)(3, "article", 7)(4, "div", 8);
    \u0275\u0275element(5, "i", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 10)(7, "span", 11);
    \u0275\u0275text(8, "Total Categories");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "small");
    \u0275\u0275text(12, "System & Custom");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "article", 7)(14, "div", 12);
    \u0275\u0275element(15, "i", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 10)(17, "span", 11);
    \u0275\u0275text(18, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "strong");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "small", 14);
    \u0275\u0275text(22, "Visible to users");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "article", 7)(24, "div", 15);
    \u0275\u0275element(25, "i", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 10)(27, "span", 11);
    \u0275\u0275text(28, "Inactive");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "strong");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "small", 17);
    \u0275\u0275text(32, "Hidden from public");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "article", 18)(34, "div", 19);
    \u0275\u0275element(35, "i", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 10)(37, "span", 11);
    \u0275\u0275text(38, "Catalog Tip");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "strong");
    \u0275\u0275text(40, "Instant Sync");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "small");
    \u0275\u0275text(42, "New categories become available immediately in editors and filter bars.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(43, "div", 21)(44, "section", 22)(45, "div", 23)(46, "div", 24)(47, "span", 25);
    \u0275\u0275element(48, "i", 26);
    \u0275\u0275text(49, " New Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "h3");
    \u0275\u0275text(51, "Add Category");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(52, "div", 27)(53, "div", 28)(54, "label");
    \u0275\u0275text(55, "Category Name ");
    \u0275\u0275elementStart(56, "span", 29);
    \u0275\u0275text(57, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function CategoryManagerComponent_Template_input_ngModelChange_58_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.newCategory.name, $event) || (ctx.newCategory.name = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 28)(60, "label");
    \u0275\u0275text(61, "Display Sort Order");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function CategoryManagerComponent_Template_input_ngModelChange_62_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.newCategory.sortOrder, $event) || (ctx.newCategory.sortOrder = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "small", 32);
    \u0275\u0275text(64, "Lower numbers appear first in navigations.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 28)(66, "label");
    \u0275\u0275text(67, "Initial Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "select", 33);
    \u0275\u0275twoWayListener("ngModelChange", function CategoryManagerComponent_Template_select_ngModelChange_68_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.newCategory.status, $event) || (ctx.newCategory.status = $event);
      return $event;
    });
    \u0275\u0275elementStart(69, "option", 34);
    \u0275\u0275text(70, "Active (Visible)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "option", 35);
    \u0275\u0275text(72, "Inactive (Hidden)");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(73, "div", 36);
    \u0275\u0275template(74, CategoryManagerComponent_button_74_Template, 4, 2, "button", 37)(75, CategoryManagerComponent_button_75_Template, 2, 0, "button", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275template(76, CategoryManagerComponent_div_76_Template, 3, 1, "div", 39)(77, CategoryManagerComponent_div_77_Template, 3, 1, "div", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "section", 41)(79, "div", 42)(80, "div", 24)(81, "span", 25);
    \u0275\u0275element(82, "i", 43);
    \u0275\u0275text(83, " Inventory");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "h3");
    \u0275\u0275text(85, "Existing Categories");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(86, "div", 44)(87, "div", 45);
    \u0275\u0275element(88, "i", 46);
    \u0275\u0275elementStart(89, "input", 47);
    \u0275\u0275twoWayListener("ngModelChange", function CategoryManagerComponent_Template_input_ngModelChange_89_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(90, "select", 48);
    \u0275\u0275twoWayListener("ngModelChange", function CategoryManagerComponent_Template_select_ngModelChange_90_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.statusFilter, $event) || (ctx.statusFilter = $event);
      return $event;
    });
    \u0275\u0275elementStart(91, "option", 49);
    \u0275\u0275text(92, "All Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "option", 34);
    \u0275\u0275text(94, "Active Only");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "option", 35);
    \u0275\u0275text(96, "Inactive Only");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(97, CategoryManagerComponent_div_97_Template, 16, 1, "div", 50)(98, CategoryManagerComponent_div_98_Template, 29, 10, "div", 51)(99, CategoryManagerComponent_div_99_Template, 7, 0, "div", 52);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx.categories.length);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx.activeCount);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx.inactiveCount);
    \u0275\u0275advance(28);
    \u0275\u0275twoWayProperty("ngModel", ctx.newCategory.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.newCategory.sortOrder);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx.newCategory.status);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx.authService.hasPermission("dropdowns.manage"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.authService.hasPermission("dropdowns.manage"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.message);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.error);
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx.statusFilter);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx.filteredCategories.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.filteredCategories.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.filteredCategories.length === 0);
  }
}, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, AdminShellComponent, TitleCasePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.category-page[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n.stats-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: var(--app-radius-lg, 16px);\n  padding: 18px 20px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  box-shadow: var(--app-shadow-soft, 0 4px 16px rgba(0, 0, 0, 0.04));\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--app-shadow, 0 8px 24px rgba(0, 0, 0, 0.08));\n}\n.stat-card.tip-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(29, 122, 109, 0.08),\n      rgba(241, 166, 77, 0.12));\n  border-color: rgba(29, 122, 109, 0.2);\n}\n.stat-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 14px;\n  display: grid;\n  place-items: center;\n  font-size: 1.35rem;\n  flex-shrink: 0;\n}\n.stat-icon.total[_ngcontent-%COMP%] {\n  background: rgba(29, 122, 109, 0.12);\n  color: var(--app-accent, #1d7a6d);\n}\n.stat-icon.active[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.12);\n  color: #16a34a;\n}\n.stat-icon.inactive[_ngcontent-%COMP%] {\n  background: rgba(148, 163, 184, 0.16);\n  color: #64748b;\n}\n.stat-icon.tip[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.15);\n  color: #d97706;\n}\n.stat-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.stat-info[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--app-ink-muted, #64748b);\n}\n.stat-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: var(--app-ink, #0f172a);\n  line-height: 1.2;\n  margin: 2px 0;\n}\n.stat-info[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--app-ink-muted, #64748b);\n}\n.layout-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 360px minmax(0, 1fr);\n  gap: 20px;\n  align-items: start;\n}\n.create-panel[_ngcontent-%COMP%], \n.list-panel[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: var(--app-radius-lg, 16px);\n  padding: 22px;\n  box-shadow: var(--app-shadow-soft, 0 4px 16px rgba(0, 0, 0, 0.04));\n}\n.panel-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #f1f5f9;\n  margin-bottom: 18px;\n}\n.panel-heading[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--app-accent, #1d7a6d);\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  margin-bottom: 2px;\n}\n.panel-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 800;\n  color: var(--app-ink, #0f172a);\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: var(--app-ink, #0f172a);\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .req[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.form-group[_ngcontent-%COMP%]   .field-hint[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  color: var(--app-ink-muted, #64748b);\n}\n.app-input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid var(--app-border, #e2e8f0);\n  background: #f8fafc;\n  border-radius: 10px;\n  padding: 10px 14px;\n  font-size: 0.9rem;\n  color: var(--app-ink, #0f172a);\n  outline: none;\n  transition: all 0.15s ease;\n}\n.app-input[_ngcontent-%COMP%]:focus {\n  background: #ffffff;\n  border-color: var(--app-accent, #1d7a6d);\n  box-shadow: 0 0 0 3px rgba(29, 122, 109, 0.12);\n}\n.app-select[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid var(--app-border, #e2e8f0);\n  background: #f8fafc;\n  border-radius: 10px;\n  padding: 10px 14px;\n  font-size: 0.88rem;\n  color: var(--app-ink, #0f172a);\n  outline: none;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.app-select[_ngcontent-%COMP%]:focus {\n  background: #ffffff;\n  border-color: var(--app-accent, #1d7a6d);\n}\n.action-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-top: 20px;\n  flex-wrap: wrap;\n}\n.feedback-msg[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  padding: 10px 14px;\n  border-radius: 10px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.feedback-msg.success[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.1);\n  color: #15803d;\n}\n.feedback-msg.error[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #b91c1c;\n}\n.list-head[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.search-input-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #f8fafc;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: 10px;\n  padding: 6px 12px;\n  min-width: 200px;\n}\n.search-input-wrap[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--app-ink-muted, #64748b);\n  font-size: 0.85rem;\n}\n.search-input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  outline: none;\n  width: 100%;\n  font-size: 0.85rem;\n  color: var(--app-ink, #0f172a);\n}\n.status-filter-select[_ngcontent-%COMP%] {\n  border: 1px solid var(--app-border, #e2e8f0);\n  background: #f8fafc;\n  border-radius: 10px;\n  padding: 7px 12px;\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--app-ink, #0f172a);\n  outline: none;\n  cursor: pointer;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.category-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  text-align: left;\n  font-size: 0.88rem;\n}\n.category-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  color: var(--app-ink-muted, #64748b);\n  font-weight: 700;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 10px 14px;\n  border-bottom: 1px solid var(--app-border, #e2e8f0);\n}\n.category-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  border-bottom: 1px solid #f1f5f9;\n  color: var(--app-ink, #0f172a);\n  vertical-align: middle;\n}\n.category-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.category-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #fafcff;\n}\n.name-cell[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--app-ink, #0f172a);\n}\n.slug-cell[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n  padding: 3px 8px;\n  border-radius: 6px;\n  font-size: 0.78rem;\n}\n.order-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #f1f5f9;\n  color: #334155;\n  font-weight: 700;\n  font-size: 0.78rem;\n  padding: 2px 8px;\n  border-radius: 6px;\n}\n.app-input-sm[_ngcontent-%COMP%] {\n  border: 1px solid var(--app-border, #e2e8f0);\n  background: #ffffff;\n  border-radius: 8px;\n  padding: 6px 10px;\n  font-size: 0.85rem;\n  outline: none;\n}\n.app-input-sm.order-input[_ngcontent-%COMP%] {\n  width: 60px;\n}\n.app-select-sm[_ngcontent-%COMP%] {\n  border: 1px solid var(--app-border, #e2e8f0);\n  background: #ffffff;\n  border-radius: 8px;\n  padding: 6px 8px;\n  font-size: 0.82rem;\n  outline: none;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  padding: 3px 8px;\n  border-radius: 999px;\n}\n.status-badge[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n}\n.status-badge.status-active[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.12);\n  color: #16a34a;\n}\n.status-badge.status-active[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: #16a34a;\n}\n.status-badge.status-inactive[_ngcontent-%COMP%] {\n  background: rgba(148, 163, 184, 0.16);\n  color: #64748b;\n}\n.status-badge.status-inactive[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: #64748b;\n}\n.actions-cell[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.action-buttons-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 6px;\n}\n.tbl-action-btn[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  border: 1px solid var(--app-border, #e2e8f0);\n  background: #ffffff;\n  color: var(--app-ink, #0f172a);\n  display: grid;\n  place-items: center;\n  font-size: 0.85rem;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.tbl-action-btn.edit[_ngcontent-%COMP%]:hover {\n  background: rgba(29, 122, 109, 0.1);\n  color: var(--app-accent, #1d7a6d);\n  border-color: var(--app-accent, #1d7a6d);\n}\n.tbl-action-btn.toggle[_ngcontent-%COMP%]:hover {\n  background: rgba(245, 158, 11, 0.1);\n  color: #d97706;\n  border-color: #d97706;\n}\n.tbl-action-btn.delete[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.1);\n  color: #dc2626;\n  border-color: #dc2626;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 20px;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  color: #94a3b8;\n  margin-bottom: 8px;\n}\n.empty-state[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 6px;\n  font-size: 1.1rem;\n  font-weight: 700;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.85rem;\n  color: var(--app-ink-muted, #64748b);\n}\n@media (max-width: 1024px) {\n  .layout-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 768px) {\n  .create-panel[_ngcontent-%COMP%], \n   .list-panel[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .list-head[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .filters[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .search-input-wrap[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 0;\n  }\n}\n/*# sourceMappingURL=category-manager.component.css.map */"] });
var CategoryManagerComponent = _CategoryManagerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CategoryManagerComponent, [{
    type: Component,
    args: [{ selector: "app-category-manager", standalone: true, imports: [CommonModule, FormsModule, AdminShellComponent], schemas: [CUSTOM_ELEMENTS_SCHEMA], template: `<div class="category-page">
  <app-admin-shell
    sectionLabel="Content & Catalog"
    title="Category Management"
    subtitle="Organize, reorder, activate, and manage blog and experience categories across your platform.">

    <!-- METRICS OVERVIEW -->
    <div class="stats-row">
      <article class="stat-card">
        <div class="stat-icon total">
          <i class="bi bi-folder2-open"></i>
        </div>
        <div class="stat-info">
          <span class="stat-label">Total Categories</span>
          <strong>{{ categories.length }}</strong>
          <small>System & Custom</small>
        </div>
      </article>

      <article class="stat-card">
        <div class="stat-icon active">
          <i class="bi bi-check2-circle"></i>
        </div>
        <div class="stat-info">
          <span class="stat-label">Active</span>
          <strong>{{ activeCount }}</strong>
          <small class="text-success">Visible to users</small>
        </div>
      </article>

      <article class="stat-card">
        <div class="stat-icon inactive">
          <i class="bi bi-pause-circle"></i>
        </div>
        <div class="stat-info">
          <span class="stat-label">Inactive</span>
          <strong>{{ inactiveCount }}</strong>
          <small class="text-muted">Hidden from public</small>
        </div>
      </article>

      <article class="stat-card tip-card">
        <div class="stat-icon tip">
          <i class="bi bi-lightbulb"></i>
        </div>
        <div class="stat-info">
          <span class="stat-label">Catalog Tip</span>
          <strong>Instant Sync</strong>
          <small>New categories become available immediately in editors and filter bars.</small>
        </div>
      </article>
    </div>

    <!-- MAIN 2-COLUMN LAYOUT -->
    <div class="layout-grid">
      <!-- LEFT: CREATE CATEGORY FORM -->
      <section class="surface-card create-panel">
        <div class="panel-heading">
          <div class="heading-text">
            <span class="eyebrow"><i class="bi bi-plus-circle"></i> New Category</span>
            <h3>Add Category</h3>
          </div>
        </div>

        <div class="form-grid">
          <div class="form-group">
            <label>Category Name <span class="req">*</span></label>
            <input type="text" [(ngModel)]="newCategory.name" placeholder="e.g. Wildlife Safari, Trekking Trails" class="app-input" />
          </div>

          <div class="form-group">
            <label>Display Sort Order</label>
            <input type="number" min="0" [(ngModel)]="newCategory.sortOrder" class="app-input" />
            <small class="field-hint">Lower numbers appear first in navigations.</small>
          </div>

          <div class="form-group">
            <label>Initial Status</label>
            <select [(ngModel)]="newCategory.status" class="app-select">
              <option value="active">Active (Visible)</option>
              <option value="inactive">Inactive (Hidden)</option>
            </select>
          </div>
        </div>

        <div class="action-row">
          <button *ngIf="authService.hasPermission('dropdowns.manage')" class="btn-app primary" [disabled]="saving" (click)="createCategory()">
            <i class="bi bi-plus-lg"></i>
            <span>{{ saving ? 'Saving...' : 'Create Category' }}</span>
          </button>
          <button *ngIf="authService.hasPermission('dropdowns.manage')" class="btn-app secondary" type="button" (click)="resetCreateForm()">
            Reset
          </button>
        </div>

        <div class="feedback-msg success" *ngIf="message">
          <i class="bi bi-check-circle-fill"></i> {{ message }}
        </div>
        <div class="feedback-msg error" *ngIf="error">
          <i class="bi bi-exclamation-triangle-fill"></i> {{ error }}
        </div>
      </section>

      <!-- RIGHT: CATEGORY LIST & ACTIONS -->
      <section class="surface-card list-panel">
        <div class="panel-heading list-head">
          <div class="heading-text">
            <span class="eyebrow"><i class="bi bi-collection"></i> Inventory</span>
            <h3>Existing Categories</h3>
          </div>

          <div class="filters">
            <div class="search-input-wrap">
              <i class="bi bi-search"></i>
              <input type="search" [(ngModel)]="searchQuery" placeholder="Search categories..." />
            </div>
            <select [(ngModel)]="statusFilter" class="status-filter-select">
              <option value="all">All Status</option>
              <option value="active">Active Only</option>
              <option value="inactive">Inactive Only</option>
            </select>
          </div>
        </div>

        <!-- TABLE -->
        <div class="table-wrap" *ngIf="filteredCategories.length > 0">
          <table class="category-table">
            <thead>
              <tr>
                <th>Category Name</th>
                <th>URL Slug</th>
                <th>Order</th>
                <th>Status</th>
                <th class="text-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let category of paginatedCategories">
                <td class="name-cell">
                  <ng-container *ngIf="editingCategoryId !== category.id; else editNameTpl">
                    <strong>{{ category.name }}</strong>
                  </ng-container>
                  <ng-template #editNameTpl>
                    <input type="text" [(ngModel)]="editDraft.name" class="app-input-sm" />
                  </ng-template>
                </td>
                <td class="slug-cell">
                  <ng-container *ngIf="editingCategoryId !== category.id; else editSlugTpl">
                    <code>{{ category.slug }}</code>
                  </ng-container>
                  <ng-template #editSlugTpl>
                    <small class="hint">Auto-updates from name</small>
                  </ng-template>
                </td>
                <td class="order-cell">
                  <ng-container *ngIf="editingCategoryId !== category.id; else editOrderTpl">
                    <span class="order-badge">{{ category.sortOrder }}</span>
                  </ng-container>
                  <ng-template #editOrderTpl>
                    <input type="number" min="0" [(ngModel)]="editDraft.sortOrder" class="app-input-sm order-input" />
                  </ng-template>
                </td>
                <td>
                  <ng-container *ngIf="editingCategoryId !== category.id; else editStatusTpl">
                    <span class="status-badge" [ngClass]="'status-' + category.status">
                      <span class="status-dot"></span>
                      {{ category.status | titlecase }}
                    </span>
                  </ng-container>
                  <ng-template #editStatusTpl>
                    <select [(ngModel)]="editDraft.status" class="app-select-sm">
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </ng-template>
                </td>
                <td class="actions-cell">
                  <!-- Normal mode actions -->
                  <div class="action-buttons-wrap" *ngIf="editingCategoryId !== category.id">
                    <button *ngIf="authService.hasPermission('dropdowns.manage')" 
                            class="tbl-action-btn edit" 
                            (click)="startEdit(category)" 
                            title="Edit Category">
                      <i class="bi bi-pencil"></i>
                    </button>
                    <button *ngIf="authService.hasPermission('dropdowns.manage')" 
                            class="tbl-action-btn toggle" 
                            [class.active]="category.status === 'active'"
                            (click)="toggleStatus(category)" 
                            [title]="category.status === 'active' ? 'Deactivate Category' : 'Activate Category'">
                      <i class="bi" [ngClass]="category.status === 'active' ? 'bi-pause-circle' : 'bi-play-circle'"></i>
                    </button>
                    <button *ngIf="authService.hasPermission('dropdowns.manage')" 
                            class="tbl-action-btn delete" 
                            (click)="deleteCategory(category)" 
                            title="Delete Category">
                      <i class="bi bi-trash3"></i>
                    </button>
                  </div>

                  <!-- In-line Edit mode actions -->
                  <div class="action-buttons-wrap" *ngIf="editingCategoryId === category.id">
                    <button *ngIf="authService.hasPermission('dropdowns.manage')" 
                            class="btn-app primary sm" 
                            (click)="saveEdit(category)">
                      <i class="bi bi-check-lg"></i> Save
                    </button>
                    <button class="btn-app secondary sm" 
                            (click)="cancelEdit()">
                      Cancel
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 PAGINATION CONTROLS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
        <div class="pagination-shell mt-3" *ngIf="filteredCategories.length > 0">
          <div class="d-flex flex-wrap align-items-center justify-content-between gap-3">
            <div class="pagination-info text-muted small">
              Showing <strong>{{ (currentPage - 1) * pageSize + 1 }}</strong> to
              <strong>{{ Math.min(currentPage * pageSize, filteredCategories.length) }}</strong> of
              <strong>{{ filteredCategories.length }}</strong> categories
            </div>

            <div class="d-flex align-items-center gap-2">
              <div class="page-size-picker d-flex align-items-center gap-2 me-2">
                <span class="text-muted small">Per page:</span>
                <select class="form-select form-select-sm" style="width: 75px;" [(ngModel)]="pageSize" (change)="onPageSizeChange()">
                  <option *ngFor="let opt of pageSizeOptions" [value]="opt">{{ opt }}</option>
                </select>
              </div>

              <div class="pagination-buttons d-flex align-items-center gap-1">
                <button class="btn btn-sm btn-outline-secondary" (click)="goToPage(1)" [disabled]="currentPage === 1" title="First Page">
                  <i class="bi bi-chevron-double-left"></i>
                </button>
                <button class="btn btn-sm btn-outline-secondary" (click)="prevPage()" [disabled]="currentPage === 1" title="Previous Page">
                  <i class="bi bi-chevron-left"></i>
                </button>
                <button
                  *ngFor="let p of visiblePageNumbers"
                  class="btn btn-sm"
                  [ngClass]="p === currentPage ? 'btn-primary' : 'btn-outline-secondary'"
                  (click)="goToPage(p)">
                  {{ p }}
                </button>
                <button class="btn btn-sm btn-outline-secondary" (click)="nextPage()" [disabled]="currentPage === totalPages" title="Next Page">
                  <i class="bi bi-chevron-right"></i>
                </button>
                <button class="btn btn-sm btn-outline-secondary" (click)="goToPage(totalPages)" [disabled]="currentPage === totalPages" title="Last Page">
                  <i class="bi bi-chevron-double-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="empty-state" *ngIf="filteredCategories.length === 0">
          <div class="empty-icon"><i class="bi bi-folder-x"></i></div>
          <h4>No categories found</h4>
          <p>Try adjusting your search filter or create a new category using the form on the left.</p>
        </div>
      </section>
    </div>
  </app-admin-shell>
</div>
`, styles: ["/* src/app/categories/category-manager.component.scss */\n:host {\n  display: block;\n}\n.category-page {\n  --background: transparent;\n}\n.stats-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.stat-card {\n  background: #ffffff;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: var(--app-radius-lg, 16px);\n  padding: 18px 20px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  box-shadow: var(--app-shadow-soft, 0 4px 16px rgba(0, 0, 0, 0.04));\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.stat-card:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--app-shadow, 0 8px 24px rgba(0, 0, 0, 0.08));\n}\n.stat-card.tip-card {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(29, 122, 109, 0.08),\n      rgba(241, 166, 77, 0.12));\n  border-color: rgba(29, 122, 109, 0.2);\n}\n.stat-icon {\n  width: 48px;\n  height: 48px;\n  border-radius: 14px;\n  display: grid;\n  place-items: center;\n  font-size: 1.35rem;\n  flex-shrink: 0;\n}\n.stat-icon.total {\n  background: rgba(29, 122, 109, 0.12);\n  color: var(--app-accent, #1d7a6d);\n}\n.stat-icon.active {\n  background: rgba(34, 197, 94, 0.12);\n  color: #16a34a;\n}\n.stat-icon.inactive {\n  background: rgba(148, 163, 184, 0.16);\n  color: #64748b;\n}\n.stat-icon.tip {\n  background: rgba(245, 158, 11, 0.15);\n  color: #d97706;\n}\n.stat-info {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.stat-info .stat-label {\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--app-ink-muted, #64748b);\n}\n.stat-info strong {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: var(--app-ink, #0f172a);\n  line-height: 1.2;\n  margin: 2px 0;\n}\n.stat-info small {\n  font-size: 0.75rem;\n  color: var(--app-ink-muted, #64748b);\n}\n.layout-grid {\n  display: grid;\n  grid-template-columns: 360px minmax(0, 1fr);\n  gap: 20px;\n  align-items: start;\n}\n.create-panel,\n.list-panel {\n  background: #ffffff;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: var(--app-radius-lg, 16px);\n  padding: 22px;\n  box-shadow: var(--app-shadow-soft, 0 4px 16px rgba(0, 0, 0, 0.04));\n}\n.panel-heading {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #f1f5f9;\n  margin-bottom: 18px;\n}\n.panel-heading .eyebrow {\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--app-accent, #1d7a6d);\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  margin-bottom: 2px;\n}\n.panel-heading h3 {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 800;\n  color: var(--app-ink, #0f172a);\n}\n.form-grid {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group label {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: var(--app-ink, #0f172a);\n}\n.form-group label .req {\n  color: #dc2626;\n}\n.form-group .field-hint {\n  font-size: 0.74rem;\n  color: var(--app-ink-muted, #64748b);\n}\n.app-input {\n  width: 100%;\n  border: 1px solid var(--app-border, #e2e8f0);\n  background: #f8fafc;\n  border-radius: 10px;\n  padding: 10px 14px;\n  font-size: 0.9rem;\n  color: var(--app-ink, #0f172a);\n  outline: none;\n  transition: all 0.15s ease;\n}\n.app-input:focus {\n  background: #ffffff;\n  border-color: var(--app-accent, #1d7a6d);\n  box-shadow: 0 0 0 3px rgba(29, 122, 109, 0.12);\n}\n.app-select {\n  width: 100%;\n  border: 1px solid var(--app-border, #e2e8f0);\n  background: #f8fafc;\n  border-radius: 10px;\n  padding: 10px 14px;\n  font-size: 0.88rem;\n  color: var(--app-ink, #0f172a);\n  outline: none;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.app-select:focus {\n  background: #ffffff;\n  border-color: var(--app-accent, #1d7a6d);\n}\n.action-row {\n  display: flex;\n  gap: 10px;\n  margin-top: 20px;\n  flex-wrap: wrap;\n}\n.feedback-msg {\n  margin-top: 14px;\n  padding: 10px 14px;\n  border-radius: 10px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.feedback-msg.success {\n  background: rgba(34, 197, 94, 0.1);\n  color: #15803d;\n}\n.feedback-msg.error {\n  background: rgba(239, 68, 68, 0.1);\n  color: #b91c1c;\n}\n.list-head {\n  flex-wrap: wrap;\n}\n.filters {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.search-input-wrap {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #f8fafc;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: 10px;\n  padding: 6px 12px;\n  min-width: 200px;\n}\n.search-input-wrap i {\n  color: var(--app-ink-muted, #64748b);\n  font-size: 0.85rem;\n}\n.search-input-wrap input {\n  border: none;\n  background: transparent;\n  outline: none;\n  width: 100%;\n  font-size: 0.85rem;\n  color: var(--app-ink, #0f172a);\n}\n.status-filter-select {\n  border: 1px solid var(--app-border, #e2e8f0);\n  background: #f8fafc;\n  border-radius: 10px;\n  padding: 7px 12px;\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--app-ink, #0f172a);\n  outline: none;\n  cursor: pointer;\n}\n.table-wrap {\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.category-table {\n  width: 100%;\n  border-collapse: collapse;\n  text-align: left;\n  font-size: 0.88rem;\n}\n.category-table th {\n  background: #f8fafc;\n  color: var(--app-ink-muted, #64748b);\n  font-weight: 700;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 10px 14px;\n  border-bottom: 1px solid var(--app-border, #e2e8f0);\n}\n.category-table td {\n  padding: 12px 14px;\n  border-bottom: 1px solid #f1f5f9;\n  color: var(--app-ink, #0f172a);\n  vertical-align: middle;\n}\n.category-table tr:last-child td {\n  border-bottom: none;\n}\n.category-table tbody tr:hover {\n  background: #fafcff;\n}\n.name-cell strong {\n  font-weight: 700;\n  color: var(--app-ink, #0f172a);\n}\n.slug-cell code {\n  background: #f1f5f9;\n  color: #475569;\n  padding: 3px 8px;\n  border-radius: 6px;\n  font-size: 0.78rem;\n}\n.order-badge {\n  display: inline-block;\n  background: #f1f5f9;\n  color: #334155;\n  font-weight: 700;\n  font-size: 0.78rem;\n  padding: 2px 8px;\n  border-radius: 6px;\n}\n.app-input-sm {\n  border: 1px solid var(--app-border, #e2e8f0);\n  background: #ffffff;\n  border-radius: 8px;\n  padding: 6px 10px;\n  font-size: 0.85rem;\n  outline: none;\n}\n.app-input-sm.order-input {\n  width: 60px;\n}\n.app-select-sm {\n  border: 1px solid var(--app-border, #e2e8f0);\n  background: #ffffff;\n  border-radius: 8px;\n  padding: 6px 8px;\n  font-size: 0.82rem;\n  outline: none;\n}\n.status-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  padding: 3px 8px;\n  border-radius: 999px;\n}\n.status-badge .status-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n}\n.status-badge.status-active {\n  background: rgba(34, 197, 94, 0.12);\n  color: #16a34a;\n}\n.status-badge.status-active .status-dot {\n  background: #16a34a;\n}\n.status-badge.status-inactive {\n  background: rgba(148, 163, 184, 0.16);\n  color: #64748b;\n}\n.status-badge.status-inactive .status-dot {\n  background: #64748b;\n}\n.actions-cell {\n  white-space: nowrap;\n}\n.action-buttons-wrap {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 6px;\n}\n.tbl-action-btn {\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  border: 1px solid var(--app-border, #e2e8f0);\n  background: #ffffff;\n  color: var(--app-ink, #0f172a);\n  display: grid;\n  place-items: center;\n  font-size: 0.85rem;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.tbl-action-btn.edit:hover {\n  background: rgba(29, 122, 109, 0.1);\n  color: var(--app-accent, #1d7a6d);\n  border-color: var(--app-accent, #1d7a6d);\n}\n.tbl-action-btn.toggle:hover {\n  background: rgba(245, 158, 11, 0.1);\n  color: #d97706;\n  border-color: #d97706;\n}\n.tbl-action-btn.delete:hover {\n  background: rgba(239, 68, 68, 0.1);\n  color: #dc2626;\n  border-color: #dc2626;\n}\n.empty-state {\n  text-align: center;\n  padding: 40px 20px;\n}\n.empty-state .empty-icon {\n  font-size: 2.2rem;\n  color: #94a3b8;\n  margin-bottom: 8px;\n}\n.empty-state h4 {\n  margin: 0 0 6px;\n  font-size: 1.1rem;\n  font-weight: 700;\n}\n.empty-state p {\n  margin: 0;\n  font-size: 0.85rem;\n  color: var(--app-ink-muted, #64748b);\n}\n@media (max-width: 1024px) {\n  .layout-grid {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 768px) {\n  .create-panel,\n  .list-panel {\n    padding: 16px;\n  }\n  .list-head {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .filters {\n    width: 100%;\n  }\n  .search-input-wrap {\n    flex: 1;\n    min-width: 0;\n  }\n}\n/*# sourceMappingURL=category-manager.component.css.map */\n"] }]
  }], () => [{ type: CategoryManagerService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoryManagerComponent, { className: "CategoryManagerComponent", filePath: "src/app/categories/category-manager.component.ts", lineNumber: 21 });
})();

// src/app/categories/category-manager.module.ts
var routes = [{ path: "", component: CategoryManagerComponent }];
var _CategoryManagerModule = class _CategoryManagerModule {
};
_CategoryManagerModule.\u0275fac = function CategoryManagerModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CategoryManagerModule)();
};
_CategoryManagerModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _CategoryManagerModule });
_CategoryManagerModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CategoryManagerComponent, RouterModule.forChild(routes)] });
var CategoryManagerModule = _CategoryManagerModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CategoryManagerModule, [{
    type: NgModule,
    args: [{
      imports: [CategoryManagerComponent, RouterModule.forChild(routes)]
    }]
  }], null, null);
})();
export {
  CategoryManagerModule
};
//# sourceMappingURL=category-manager.module-XV2C5YZR.js.map
