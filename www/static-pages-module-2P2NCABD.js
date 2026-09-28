import {
  AdminShellComponent
} from "./chunk-36TQFYFK.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-QNEZ2FH5.js";
import "./chunk-D4XXJJII.js";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  CommonModule,
  Component,
  HttpClient,
  Injectable,
  NgForOf,
  NgIf,
  NgModule,
  RouterModule,
  __spreadProps,
  __spreadValues,
  environment,
  map,
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
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
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

// src/app/static-pages/static-pages.service.ts
var _StaticPagesService = class _StaticPagesService {
  constructor(http) {
    this.http = http;
    this.API = environment.baseUrl;
  }
  getPages() {
    return this.http.get(`${this.API}/static-pages`).pipe(map((response) => Array.isArray(response?.data) ? response.data : []));
  }
  getPage(pageKey) {
    return this.http.get(`${this.API}/static-pages/${encodeURIComponent(pageKey)}`).pipe(map((response) => response?.data && !Array.isArray(response.data) ? response.data : null));
  }
  updatePage(pageKey, payload) {
    return this.http.put(`${this.API}/static-pages/${encodeURIComponent(pageKey)}`, payload).pipe(map((response) => response?.data && !Array.isArray(response.data) ? response.data : null));
  }
};
_StaticPagesService.\u0275fac = function StaticPagesService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StaticPagesService)(\u0275\u0275inject(HttpClient));
};
_StaticPagesService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StaticPagesService, factory: _StaticPagesService.\u0275fac, providedIn: "root" });
var StaticPagesService = _StaticPagesService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StaticPagesService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/static-pages/static-pages.component.ts
function StaticPagesComponent_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function StaticPagesComponent_button_12_Template_button_click_0_listener() {
      const page_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectPage(page_r2.key));
    });
    \u0275\u0275elementStart(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const page_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.selectedKey === page_r2.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(page_r2.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(page_r2.helper);
  }
}
function StaticPagesComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1, "Loading page content...");
    \u0275\u0275elementEnd();
  }
}
function StaticPagesComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.error);
  }
}
function StaticPagesComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.message);
  }
}
function StaticPagesComponent_div_38_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 43)(2, "div", 44)(3, "label");
    \u0275\u0275text(4, "Founded Year");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function StaticPagesComponent_div_38_div_20_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.aboutData.hero.year, $event) || (ctx_r2.aboutData.hero.year = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 44)(7, "label");
    \u0275\u0275text(8, "Hero Badge Tag");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 46);
    \u0275\u0275twoWayListener("ngModelChange", function StaticPagesComponent_div_38_div_20_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.aboutData.hero.badge, $event) || (ctx_r2.aboutData.hero.badge = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 44)(11, "label");
    \u0275\u0275text(12, "Main Headline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 47);
    \u0275\u0275twoWayListener("ngModelChange", function StaticPagesComponent_div_38_div_20_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.aboutData.hero.title, $event) || (ctx_r2.aboutData.hero.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 44)(15, "label");
    \u0275\u0275text(16, "Subtitle / Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "textarea", 48);
    \u0275\u0275twoWayListener("ngModelChange", function StaticPagesComponent_div_38_div_20_Template_textarea_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.aboutData.hero.subtitle, $event) || (ctx_r2.aboutData.hero.subtitle = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.aboutData.hero.year);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.aboutData.hero.badge);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.aboutData.hero.title);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.aboutData.hero.subtitle);
  }
}
function StaticPagesComponent_div_38_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 43)(2, "div", 44)(3, "label");
    \u0275\u0275text(4, "Section Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function StaticPagesComponent_div_38_div_21_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.aboutData.story.sectionNumber, $event) || (ctx_r2.aboutData.story.sectionNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 44)(7, "label");
    \u0275\u0275text(8, "Section Tag");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 46);
    \u0275\u0275twoWayListener("ngModelChange", function StaticPagesComponent_div_38_div_21_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.aboutData.story.tag, $event) || (ctx_r2.aboutData.story.tag = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 44)(11, "label");
    \u0275\u0275text(12, "Story Heading");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 50);
    \u0275\u0275twoWayListener("ngModelChange", function StaticPagesComponent_div_38_div_21_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.aboutData.story.heading, $event) || (ctx_r2.aboutData.story.heading = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 44)(15, "label");
    \u0275\u0275text(16, "Paragraph 1 (The Journey)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "textarea", 51);
    \u0275\u0275twoWayListener("ngModelChange", function StaticPagesComponent_div_38_div_21_Template_textarea_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.aboutData.story.paragraph1, $event) || (ctx_r2.aboutData.story.paragraph1 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 44)(19, "label");
    \u0275\u0275text(20, "Highlighted Pull Quote");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "textarea", 52);
    \u0275\u0275twoWayListener("ngModelChange", function StaticPagesComponent_div_38_div_21_Template_textarea_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.aboutData.story.quote, $event) || (ctx_r2.aboutData.story.quote = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 44)(23, "label");
    \u0275\u0275text(24, "Paragraph 2 (The Mission)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "textarea", 53);
    \u0275\u0275twoWayListener("ngModelChange", function StaticPagesComponent_div_38_div_21_Template_textarea_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.aboutData.story.paragraph2, $event) || (ctx_r2.aboutData.story.paragraph2 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.aboutData.story.sectionNumber);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.aboutData.story.tag);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.aboutData.story.heading);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.aboutData.story.paragraph1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.aboutData.story.quote);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.aboutData.story.paragraph2);
  }
}
function StaticPagesComponent_div_38_div_22_article_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 58)(1, "div", 59)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 60);
    \u0275\u0275listener("click", function StaticPagesComponent_div_38_div_22_article_7_Template_button_click_4_listener() {
      const i_r9 = \u0275\u0275restoreView(_r8).index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.removeValue(i_r9));
    });
    \u0275\u0275text(5, "Remove");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 43)(7, "div", 44)(8, "label");
    \u0275\u0275text(9, "Ion Icon Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 61);
    \u0275\u0275twoWayListener("ngModelChange", function StaticPagesComponent_div_38_div_22_article_7_Template_input_ngModelChange_10_listener($event) {
      const val_r10 = \u0275\u0275restoreView(_r8).$implicit;
      \u0275\u0275twoWayBindingSet(val_r10.icon, $event) || (val_r10.icon = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 44)(12, "label");
    \u0275\u0275text(13, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 62);
    \u0275\u0275twoWayListener("ngModelChange", function StaticPagesComponent_div_38_div_22_article_7_Template_input_ngModelChange_14_listener($event) {
      const val_r10 = \u0275\u0275restoreView(_r8).$implicit;
      \u0275\u0275twoWayBindingSet(val_r10.title, $event) || (val_r10.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 44)(16, "label");
    \u0275\u0275text(17, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "textarea", 63);
    \u0275\u0275twoWayListener("ngModelChange", function StaticPagesComponent_div_38_div_22_article_7_Template_textarea_ngModelChange_18_listener($event) {
      const val_r10 = \u0275\u0275restoreView(_r8).$implicit;
      \u0275\u0275twoWayBindingSet(val_r10.description, $event) || (val_r10.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const val_r10 = ctx.$implicit;
    const i_r9 = ctx.index;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Value #", i_r9 + 1, ": ", val_r10.title);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", val_r10.icon);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", val_r10.title);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", val_r10.description);
  }
}
function StaticPagesComponent_div_38_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 54)(2, "label");
    \u0275\u0275text(3, "Core Values");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 55);
    \u0275\u0275listener("click", function StaticPagesComponent_div_38_div_22_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.addValue());
    });
    \u0275\u0275text(5, "+ Add Value");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 56);
    \u0275\u0275template(7, StaticPagesComponent_div_38_div_22_article_7_Template, 19, 5, "article", 57);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r2.aboutData.values);
  }
}
function StaticPagesComponent_div_38_div_23_article_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 65)(1, "div", 59)(2, "div", 66)(3, "img", 67);
    \u0275\u0275listener("error", function StaticPagesComponent_div_38_div_23_article_7_Template_img_error_3_listener($event) {
      \u0275\u0275restoreView(_r12);
      return \u0275\u0275resetView($event.target.src = "https://ui-avatars.com/api/?name=User");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 60);
    \u0275\u0275listener("click", function StaticPagesComponent_div_38_div_23_article_7_Template_button_click_6_listener() {
      const i_r13 = \u0275\u0275restoreView(_r12).index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.removeTeamMember(i_r13));
    });
    \u0275\u0275text(7, "Remove");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 43)(9, "div", 44)(10, "label");
    \u0275\u0275text(11, "Full Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 68);
    \u0275\u0275twoWayListener("ngModelChange", function StaticPagesComponent_div_38_div_23_article_7_Template_input_ngModelChange_12_listener($event) {
      const mem_r14 = \u0275\u0275restoreView(_r12).$implicit;
      \u0275\u0275twoWayBindingSet(mem_r14.name, $event) || (mem_r14.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 44)(14, "label");
    \u0275\u0275text(15, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 69);
    \u0275\u0275twoWayListener("ngModelChange", function StaticPagesComponent_div_38_div_23_article_7_Template_input_ngModelChange_16_listener($event) {
      const mem_r14 = \u0275\u0275restoreView(_r12).$implicit;
      \u0275\u0275twoWayBindingSet(mem_r14.role, $event) || (mem_r14.role = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 44)(18, "label");
    \u0275\u0275text(19, "Photo Image URL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 70);
    \u0275\u0275twoWayListener("ngModelChange", function StaticPagesComponent_div_38_div_23_article_7_Template_input_ngModelChange_20_listener($event) {
      const mem_r14 = \u0275\u0275restoreView(_r12).$implicit;
      \u0275\u0275twoWayBindingSet(mem_r14.image, $event) || (mem_r14.image = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 44)(22, "label");
    \u0275\u0275text(23, "Short Bio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "textarea", 71);
    \u0275\u0275twoWayListener("ngModelChange", function StaticPagesComponent_div_38_div_23_article_7_Template_textarea_ngModelChange_24_listener($event) {
      const mem_r14 = \u0275\u0275restoreView(_r12).$implicit;
      \u0275\u0275twoWayBindingSet(mem_r14.bio, $event) || (mem_r14.bio = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const mem_r14 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("src", mem_r14.image, \u0275\u0275sanitizeUrl)("alt", mem_r14.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(mem_r14.name);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", mem_r14.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", mem_r14.role);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", mem_r14.image);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", mem_r14.bio);
  }
}
function StaticPagesComponent_div_38_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 54)(2, "label");
    \u0275\u0275text(3, "Team Members & Trek Leaders");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 55);
    \u0275\u0275listener("click", function StaticPagesComponent_div_38_div_23_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.addTeamMember());
    });
    \u0275\u0275text(5, "+ Add Member");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 56);
    \u0275\u0275template(7, StaticPagesComponent_div_38_div_23_article_7_Template, 25, 7, "article", 64);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r2.aboutData.team);
  }
}
function StaticPagesComponent_div_38_div_24_article_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 58)(1, "div", 59)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 60);
    \u0275\u0275listener("click", function StaticPagesComponent_div_38_div_24_article_7_Template_button_click_4_listener() {
      const i_r17 = \u0275\u0275restoreView(_r16).index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.removeSafetyItem(i_r17));
    });
    \u0275\u0275text(5, "Remove");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 43)(7, "div", 44)(8, "label");
    \u0275\u0275text(9, "Icon Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 72);
    \u0275\u0275twoWayListener("ngModelChange", function StaticPagesComponent_div_38_div_24_article_7_Template_input_ngModelChange_10_listener($event) {
      const safe_r18 = \u0275\u0275restoreView(_r16).$implicit;
      \u0275\u0275twoWayBindingSet(safe_r18.icon, $event) || (safe_r18.icon = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 44)(12, "label");
    \u0275\u0275text(13, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 73);
    \u0275\u0275twoWayListener("ngModelChange", function StaticPagesComponent_div_38_div_24_article_7_Template_input_ngModelChange_14_listener($event) {
      const safe_r18 = \u0275\u0275restoreView(_r16).$implicit;
      \u0275\u0275twoWayBindingSet(safe_r18.title, $event) || (safe_r18.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 44)(16, "label");
    \u0275\u0275text(17, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "textarea", 74);
    \u0275\u0275twoWayListener("ngModelChange", function StaticPagesComponent_div_38_div_24_article_7_Template_textarea_ngModelChange_18_listener($event) {
      const safe_r18 = \u0275\u0275restoreView(_r16).$implicit;
      \u0275\u0275twoWayBindingSet(safe_r18.description, $event) || (safe_r18.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const safe_r18 = ctx.$implicit;
    const i_r17 = ctx.index;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Protocol #", i_r17 + 1, ": ", safe_r18.title);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", safe_r18.icon);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", safe_r18.title);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", safe_r18.description);
  }
}
function StaticPagesComponent_div_38_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 54)(2, "label");
    \u0275\u0275text(3, "Safety Protocols");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 55);
    \u0275\u0275listener("click", function StaticPagesComponent_div_38_div_24_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.addSafetyItem());
    });
    \u0275\u0275text(5, "+ Add Protocol");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 56);
    \u0275\u0275template(7, StaticPagesComponent_div_38_div_24_article_7_Template, 19, 5, "article", 57);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r2.aboutData.safetyItems);
  }
}
function StaticPagesComponent_div_38_div_25_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 78)(1, "span", 79);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 44)(4, "label");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 80);
    \u0275\u0275twoWayListener("ngModelChange", function StaticPagesComponent_div_38_div_25_div_7_Template_input_ngModelChange_6_listener($event) {
      const st_r20 = \u0275\u0275restoreView(_r19).$implicit;
      \u0275\u0275twoWayBindingSet(st_r20.number, $event) || (st_r20.number = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const st_r20 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(st_r20.key || "metric");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(st_r20.label);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", st_r20.number);
  }
}
function StaticPagesComponent_div_38_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 54)(2, "label");
    \u0275\u0275text(3, "Trek Statistics");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small", 75);
    \u0275\u0275text(5, "Live stats calculate automatically from completed bookings and trek records in the database.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 76);
    \u0275\u0275template(7, StaticPagesComponent_div_38_div_25_div_7_Template, 7, 3, "div", 77);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r2.aboutData.stats);
  }
}
function StaticPagesComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33)(2, "button", 34);
    \u0275\u0275listener("click", function StaticPagesComponent_div_38_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setAboutTab("hero"));
    });
    \u0275\u0275element(3, "i", 35);
    \u0275\u0275text(4, " Hero Banner ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 34);
    \u0275\u0275listener("click", function StaticPagesComponent_div_38_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setAboutTab("story"));
    });
    \u0275\u0275element(6, "i", 36);
    \u0275\u0275text(7, " Our Story ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 34);
    \u0275\u0275listener("click", function StaticPagesComponent_div_38_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setAboutTab("values"));
    });
    \u0275\u0275element(9, "i", 37);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 34);
    \u0275\u0275listener("click", function StaticPagesComponent_div_38_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setAboutTab("team"));
    });
    \u0275\u0275element(12, "i", 38);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 34);
    \u0275\u0275listener("click", function StaticPagesComponent_div_38_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setAboutTab("safety"));
    });
    \u0275\u0275element(15, "i", 39);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 34);
    \u0275\u0275listener("click", function StaticPagesComponent_div_38_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setAboutTab("stats"));
    });
    \u0275\u0275element(18, "i", 40);
    \u0275\u0275text(19, " Live Stats ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, StaticPagesComponent_div_38_div_20_Template, 18, 4, "div", 41)(21, StaticPagesComponent_div_38_div_21_Template, 26, 6, "div", 41)(22, StaticPagesComponent_div_38_div_22_Template, 8, 1, "div", 41)(23, StaticPagesComponent_div_38_div_23_Template, 8, 1, "div", 41)(24, StaticPagesComponent_div_38_div_24_Template, 8, 1, "div", 41)(25, StaticPagesComponent_div_38_div_25_Template, 8, 1, "div", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r2.aboutTab === "hero");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r2.aboutTab === "story");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r2.aboutTab === "values");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Values (", (ctx_r2.aboutData.values == null ? null : ctx_r2.aboutData.values.length) || 0, ") ");
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r2.aboutTab === "team");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Team (", (ctx_r2.aboutData.team == null ? null : ctx_r2.aboutData.team.length) || 0, ") ");
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r2.aboutTab === "safety");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Safety (", (ctx_r2.aboutData.safetyItems == null ? null : ctx_r2.aboutData.safetyItems.length) || 0, ") ");
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r2.aboutTab === "stats");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.aboutTab === "hero" && ctx_r2.aboutData.hero);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.aboutTab === "story" && ctx_r2.aboutData.story);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.aboutTab === "values");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.aboutTab === "team");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.aboutTab === "safety");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.aboutTab === "stats");
  }
}
function StaticPagesComponent_div_39_div_8_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 58)(1, "div", 59)(2, "div")(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 84)(8, "button", 6);
    \u0275\u0275listener("click", function StaticPagesComponent_div_39_div_8_article_1_Template_button_click_8_listener() {
      const i_r23 = \u0275\u0275restoreView(_r22).index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.movePoint(i_r23, -1));
    });
    \u0275\u0275text(9, "Up");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 6);
    \u0275\u0275listener("click", function StaticPagesComponent_div_39_div_8_article_1_Template_button_click_10_listener() {
      const i_r23 = \u0275\u0275restoreView(_r22).index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.movePoint(i_r23, 1));
    });
    \u0275\u0275text(11, "Down");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 60);
    \u0275\u0275listener("click", function StaticPagesComponent_div_39_div_8_article_1_Template_button_click_12_listener() {
      const i_r23 = \u0275\u0275restoreView(_r22).index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.removePoint(i_r23));
    });
    \u0275\u0275text(13, "Remove");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 44)(15, "label");
    \u0275\u0275text(16, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 85);
    \u0275\u0275twoWayListener("ngModelChange", function StaticPagesComponent_div_39_div_8_article_1_Template_input_ngModelChange_17_listener($event) {
      const point_r24 = \u0275\u0275restoreView(_r22).$implicit;
      \u0275\u0275twoWayBindingSet(point_r24.title, $event) || (point_r24.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function StaticPagesComponent_div_39_div_8_article_1_Template_input_ngModelChange_17_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.syncDraftContent());
    })("input", function StaticPagesComponent_div_39_div_8_article_1_Template_input_input_17_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.syncDraftContent());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 44)(19, "label");
    \u0275\u0275text(20, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "textarea", 86);
    \u0275\u0275twoWayListener("ngModelChange", function StaticPagesComponent_div_39_div_8_article_1_Template_textarea_ngModelChange_21_listener($event) {
      const point_r24 = \u0275\u0275restoreView(_r22).$implicit;
      \u0275\u0275twoWayBindingSet(point_r24.body, $event) || (point_r24.body = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function StaticPagesComponent_div_39_div_8_article_1_Template_textarea_ngModelChange_21_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.syncDraftContent());
    })("input", function StaticPagesComponent_div_39_div_8_article_1_Template_textarea_input_21_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.syncDraftContent());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const point_r24 = ctx.$implicit;
    const i_r23 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Point ", i_r23 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(point_r24.title || "Untitled point");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", i_r23 === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", i_r23 === ctx_r2.points.length - 1);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", point_r24.title);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", point_r24.body);
  }
}
function StaticPagesComponent_div_39_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82);
    \u0275\u0275template(1, StaticPagesComponent_div_39_div_8_article_1_Template, 22, 6, "article", 83);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.points)("ngForTrackBy", ctx_r2.trackByPointId);
  }
}
function StaticPagesComponent_div_39_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 87)(1, "p");
    \u0275\u0275text(2, "No points added yet.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 88);
    \u0275\u0275listener("click", function StaticPagesComponent_div_39_ng_template_9_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.addPoint());
    });
    \u0275\u0275text(4, "Add the first point");
    \u0275\u0275elementEnd()();
  }
}
function StaticPagesComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 54)(2, "label");
    \u0275\u0275text(3, "Points");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 55);
    \u0275\u0275listener("click", function StaticPagesComponent_div_39_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addPoint());
    });
    \u0275\u0275text(5, "Add Point");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "small", 75);
    \u0275\u0275text(7, "Add one point per accordion item. The HTML is generated automatically from these fields.");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, StaticPagesComponent_div_39_div_8_Template, 2, 2, "div", 81)(9, StaticPagesComponent_div_39_ng_template_9_Template, 5, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const emptyPoints_r26 = \u0275\u0275reference(10);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r2.points.length)("ngIfElse", emptyPoints_r26);
  }
}
function StaticPagesComponent_div_54_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "small");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r27 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r27.number);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r27.label);
  }
}
function StaticPagesComponent_div_54_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 96);
    \u0275\u0275template(1, StaticPagesComponent_div_54_div_8_div_1_Template, 5, 2, "div", 97);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.aboutData.stats);
  }
}
function StaticPagesComponent_div_54_blockquote_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "blockquote");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1('"', ctx_r2.aboutData.story == null ? null : ctx_r2.aboutData.story.quote, '"');
  }
}
function StaticPagesComponent_div_54_div_15_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 101)(1, "img", 102);
    \u0275\u0275listener("error", function StaticPagesComponent_div_54_div_15_div_4_Template_img_error_1_listener($event) {
      \u0275\u0275restoreView(_r28);
      return \u0275\u0275resetView($event.target.src = "https://ui-avatars.com/api/?name=Trek");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r29 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", t_r29.image, \u0275\u0275sanitizeUrl)("alt", t_r29.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r29.name);
  }
}
function StaticPagesComponent_div_54_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 93)(1, "h4");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 99);
    \u0275\u0275template(4, StaticPagesComponent_div_54_div_15_div_4_Template, 4, 3, "div", 100);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Team Leaders (", ctx_r2.aboutData.team == null ? null : ctx_r2.aboutData.team.length, ")");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.aboutData.team);
  }
}
function StaticPagesComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89)(1, "div", 90)(2, "span", 91);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, StaticPagesComponent_div_54_div_8_Template, 2, 1, "div", 92);
    \u0275\u0275elementStart(9, "div", 93)(10, "h4");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 94);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, StaticPagesComponent_div_54_blockquote_14_Template, 2, 1, "blockquote", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, StaticPagesComponent_div_54_div_15_Template, 5, 2, "div", 95);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", (ctx_r2.aboutData.hero == null ? null : ctx_r2.aboutData.hero.badge) || "Our Story", " \u2022 Since ", (ctx_r2.aboutData.hero == null ? null : ctx_r2.aboutData.hero.year) || "2011");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r2.aboutData.hero == null ? null : ctx_r2.aboutData.hero.title) || "Exploring Karnataka\u2019s Wilderness");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.aboutData.hero == null ? null : ctx_r2.aboutData.hero.subtitle);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.aboutData.stats == null ? null : ctx_r2.aboutData.stats.length);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r2.aboutData.story == null ? null : ctx_r2.aboutData.story.heading) || "Our Story");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.aboutData.story == null ? null : ctx_r2.aboutData.story.paragraph1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.aboutData.story == null ? null : ctx_r2.aboutData.story.quote);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.aboutData.team == null ? null : ctx_r2.aboutData.team.length);
  }
}
function StaticPagesComponent_ng_container_55_div_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 109);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r30 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(section_r30.title);
  }
}
function StaticPagesComponent_ng_container_55_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 105)(1, "div", 106)(2, "span");
    \u0275\u0275text(3, "Section outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 107);
    \u0275\u0275template(7, StaticPagesComponent_ng_container_55_div_1_span_7_Template, 2, 1, "span", 108);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r2.previewSections.length, " items");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.previewSections);
  }
}
function StaticPagesComponent_ng_container_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, StaticPagesComponent_ng_container_55_div_1_Template, 8, 2, "div", 103);
    \u0275\u0275element(2, "article", 104);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.previewSections.length);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r2.previewContent || "<p>No content yet.</p>", \u0275\u0275sanitizeHtml);
  }
}
var _StaticPagesComponent = class _StaticPagesComponent {
  constructor(staticPagesService) {
    this.staticPagesService = staticPagesService;
    this.pages = [
      { key: "about-us", label: "About Us", helper: "Hero, story, values, team & safety standards" },
      { key: "faqs", label: "FAQ's", helper: "Common user questions and answers" },
      { key: "cancelation", label: "Cancelation", helper: "Booking cancellation policy" },
      { key: "terms-and-condition", label: "Terms and Condition", helper: "Usage rules and terms" }
    ];
    this.records = /* @__PURE__ */ new Map();
    this.selectedKey = "about-us";
    this.loading = false;
    this.saving = false;
    this.message = "";
    this.error = "";
    this.aboutTab = "hero";
    this.aboutData = {
      hero: {
        year: "2011",
        badge: "Our Story",
        title: "Exploring Karnataka's Wilderness Since 2011",
        subtitle: "Your trusted partner for adventure and exploration in the Western Ghats"
      },
      story: {
        sectionNumber: "01",
        tag: "Our Story",
        heading: "Born from a love of wild places",
        paragraph1: "goWILDKarunadu was born out of a passion for the Western Ghats and a desire to share its beauty with fellow adventurers. What started as weekend treks with friends has grown into one of Karnataka's most trusted trekking organisations.",
        quote: "We've introduced thousands of people to the majestic peaks, dense forests, and hidden waterfalls of Karnataka.",
        paragraph2: "Our mission remains simple: to create safe, memorable, and responsible trekking experiences while preserving the natural beauty that makes these adventures possible."
      },
      stats: [
        { key: "trekkers", number: "10,000+", label: "Happy Trekkers" },
        { key: "routes", number: "50+", label: "Trek Routes" },
        { key: "experience", number: "15", label: "Years Experience" },
        { key: "rating", number: "4.8", label: "Average Rating" }
      ],
      values: [
        {
          icon: "shield-checkmark",
          title: "Safety First",
          description: "All our treks are led by certified guides with comprehensive safety protocols"
        },
        {
          icon: "leaf",
          title: "Eco-Friendly",
          description: "We practice and promote responsible trekking with minimal environmental impact"
        },
        {
          icon: "people",
          title: "Community",
          description: "Building a community of adventure enthusiasts who respect nature"
        },
        {
          icon: "star",
          title: "Excellence",
          description: "Committed to providing exceptional experiences on every trek"
        }
      ],
      team: [
        {
          name: "Rajesh Kumar",
          role: "Founder & Lead Trek Leader",
          image: "https://ui-avatars.com/api/?name=Rajesh+Kumar&size=200",
          bio: "15+ years of trekking experience in the Western Ghats",
          suffix: "Founder & Lead Trek Leader"
        },
        {
          name: "Priya Sharma",
          role: "Operations Manager",
          image: "https://ui-avatars.com/api/?name=Priya+Sharma&size=200",
          bio: "Expert in trek logistics and safety protocols",
          suffix: "Operations Manager"
        },
        {
          name: "Arjun Menon",
          role: "Senior Trek Guide",
          image: "https://ui-avatars.com/api/?name=Arjun+Menon&size=200",
          bio: "Certified wilderness first responder and mountaineer",
          suffix: "Senior Trek Guide"
        },
        {
          name: "Meera Reddy",
          role: "Trek Guide & Naturalist",
          image: "https://ui-avatars.com/api/?name=Meera+Reddy&size=200",
          bio: "Wildlife enthusiast with deep knowledge of Western Ghats flora & fauna",
          suffix: "Trek Guide & Naturalist"
        }
      ],
      safetyItems: [
        {
          icon: "shield-checkmark",
          title: "Certified Guides",
          description: "All treks led by certified guides with wilderness first aid training"
        },
        {
          icon: "medkit",
          title: "Safety Briefings",
          description: "Comprehensive safety briefings before each trek"
        },
        {
          icon: "call",
          title: "Emergency Communication",
          description: "Emergency communication devices on all treks"
        },
        {
          icon: "cloudy-night",
          title: "Weather Monitoring",
          description: "Strict adherence to weather and trail conditions"
        }
      ]
    };
    this.draft = {
      title: "",
      content: "",
      status: "active"
    };
    this.points = [];
  }
  ngOnInit() {
    this.loadPages();
  }
  get selectedPage() {
    return this.records.get(this.selectedKey) || null;
  }
  get previewContent() {
    return this.draft.content || "";
  }
  get previewSections() {
    return this.points.filter((point) => point.title.trim()).map((point) => ({ title: point.title.trim() }));
  }
  trackByPointId(_, point) {
    return point.id;
  }
  selectPage(pageKey) {
    this.selectedKey = pageKey;
    this.applySelectedPage();
    this.message = "";
    this.error = "";
  }
  loadPages() {
    this.loading = true;
    this.error = "";
    this.staticPagesService.getPages().subscribe({
      next: (pages) => {
        this.records.clear();
        pages.forEach((page) => {
          this.records.set(page.pageKey, page);
        });
        this.applySelectedPage();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.error = "Failed to load static pages.";
      }
    });
  }
  setAboutTab(tab) {
    this.aboutTab = tab;
  }
  addValue() {
    if (!this.aboutData.values)
      this.aboutData.values = [];
    this.aboutData.values.push({
      icon: "star",
      title: "New Value",
      description: "Describe this core value here..."
    });
  }
  removeValue(index) {
    if (this.aboutData.values && this.aboutData.values.length > 0) {
      this.aboutData.values.splice(index, 1);
    }
  }
  addTeamMember() {
    if (!this.aboutData.team)
      this.aboutData.team = [];
    this.aboutData.team.push({
      name: "New Trek Leader",
      role: "Trek Guide",
      image: "https://ui-avatars.com/api/?name=Trek+Guide&size=200",
      bio: "Experienced mountaineer and wilderness guide in the Western Ghats.",
      suffix: "Trek Guide"
    });
  }
  removeTeamMember(index) {
    if (this.aboutData.team && this.aboutData.team.length > 0) {
      this.aboutData.team.splice(index, 1);
    }
  }
  addSafetyItem() {
    if (!this.aboutData.safetyItems)
      this.aboutData.safetyItems = [];
    this.aboutData.safetyItems.push({
      icon: "shield-checkmark",
      title: "Safety Standard",
      description: "Describe this safety protocol here..."
    });
  }
  removeSafetyItem(index) {
    if (this.aboutData.safetyItems && this.aboutData.safetyItems.length > 0) {
      this.aboutData.safetyItems.splice(index, 1);
    }
  }
  savePage() {
    if (this.selectedKey === "about-us") {
      this.saving = true;
      this.error = "";
      this.message = "";
      const content2 = JSON.stringify(this.aboutData);
      this.draft.content = content2;
      this.staticPagesService.updatePage("about-us", {
        title: this.draft.title.trim() || "About Us",
        status: this.draft.status,
        aboutData: this.aboutData,
        content: content2
      }).subscribe({
        next: (page) => {
          this.saving = false;
          this.message = "About Us page updated successfully.";
          if (page) {
            this.records.set("about-us", page);
            if (page.aboutData) {
              this.aboutData = JSON.parse(JSON.stringify(page.aboutData));
            }
          }
        },
        error: (err) => {
          this.saving = false;
          this.error = err?.error?.message || "Failed to save About Us page.";
        }
      });
      return;
    }
    const pointsSnapshot = this.points.map((point) => ({
      id: point.id,
      title: point.title.trim(),
      body: point.body.trim()
    })).filter((point) => point.title || point.body);
    const content = this.buildContentFromPoints(pointsSnapshot, this.draft.title || this.selectedPage?.title || this.pages.find((entry) => entry.key === this.selectedKey)?.label || "");
    this.points = pointsSnapshot.map((point) => this.createPoint(point));
    this.draft.content = content;
    if (!this.draft.title.trim() || !content.trim()) {
      this.error = "Title and content are required.";
      return;
    }
    this.saving = true;
    this.error = "";
    this.message = "";
    this.staticPagesService.updatePage(this.selectedKey, {
      title: this.draft.title.trim(),
      status: this.draft.status,
      points: pointsSnapshot.map((point) => ({
        title: point.title,
        body: point.body
      })),
      content
    }).subscribe({
      next: (page) => {
        const responseContent = page?.content || content.trim();
        const updatedPage = __spreadProps(__spreadValues(__spreadValues({}, this.selectedPage || {}), page || {}), {
          pageKey: this.selectedKey,
          title: page?.title || this.draft.title.trim(),
          content: responseContent,
          status: page?.status || this.draft.status,
          sortOrder: page?.sortOrder ?? this.selectedPage?.sortOrder
        });
        this.records.set(this.selectedKey, updatedPage);
        this.draft.title = updatedPage.title;
        this.draft.content = updatedPage.content;
        this.draft.status = updatedPage.status || "active";
        this.points = this.extractPoints(updatedPage.content, this.selectedKey);
        if (!this.points.length) {
          this.points = this.getAccordionTemplatePoints(this.selectedKey);
        }
        this.saving = false;
        this.message = "Page saved successfully.";
      },
      error: (err) => {
        this.saving = false;
        this.error = err?.error?.message || "Failed to save page.";
      }
    });
  }
  resetDraft() {
    this.applySelectedPage();
    this.message = "";
    this.error = "";
  }
  addPoint() {
    this.points.push(this.createPoint());
    this.syncDraftContent();
    this.message = "";
    this.error = "";
  }
  removePoint(index) {
    if (index < 0 || index >= this.points.length) {
      return;
    }
    this.points = this.points.filter((_, pointIndex) => pointIndex !== index);
    if (!this.points.length) {
      this.points = [this.createPoint()];
    }
    this.syncDraftContent();
    this.message = "";
    this.error = "";
  }
  movePoint(index, direction) {
    const target = index + direction;
    if (index < 0 || target < 0 || target >= this.points.length) {
      return;
    }
    const [item] = this.points.splice(index, 1);
    this.points.splice(target, 0, item);
    this.syncDraftContent();
  }
  applyTemplate(pageKey) {
    this.selectedKey = pageKey;
    const page = this.records.get(pageKey);
    const fallback = this.pages.find((entry) => entry.key === pageKey);
    this.draft.title = page?.title || fallback?.label || "";
    this.draft.status = page?.status === "inactive" ? "inactive" : "active";
    this.points = this.getAccordionTemplatePoints(pageKey);
    this.syncDraftContent();
    this.message = "";
    this.error = "";
  }
  applySelectedPage() {
    const page = this.records.get(this.selectedKey);
    const fallback = this.pages.find((entry) => entry.key === this.selectedKey);
    if (this.selectedKey === "about-us") {
      if (page?.aboutData) {
        this.aboutData = JSON.parse(JSON.stringify(page.aboutData));
      } else if (page?.content) {
        try {
          const parsed = JSON.parse(page.content);
          this.aboutData = {
            hero: parsed.hero || this.aboutData.hero,
            story: parsed.story || this.aboutData.story,
            stats: parsed.stats || this.aboutData.stats,
            values: parsed.values?.length ? parsed.values : this.aboutData.values,
            team: parsed.team?.length ? parsed.team : this.aboutData.team,
            safetyItems: parsed.safetyItems?.length ? parsed.safetyItems : this.aboutData.safetyItems
          };
        } catch {
        }
      }
      this.draft = {
        title: page?.title || fallback?.label || "About Us",
        content: JSON.stringify(this.aboutData),
        status: page?.status === "inactive" ? "inactive" : "active"
      };
      return;
    }
    const content = page?.content || this.getAccordionTemplate(this.selectedKey);
    this.draft = {
      title: page?.title || fallback?.label || "",
      content,
      status: page?.status === "inactive" ? "inactive" : "active"
    };
    this.points = this.extractPoints(content, this.selectedKey);
    if (!this.points.length) {
      this.points = this.getAccordionTemplatePoints(this.selectedKey);
    }
    this.syncDraftContent();
  }
  getAccordionTemplate(pageKey) {
    return this.buildContentFromPoints(this.getAccordionTemplatePoints(pageKey), this.pages.find((entry) => entry.key === pageKey)?.label || "");
  }
  getAccordionTemplatePoints(pageKey) {
    switch (pageKey) {
      case "faqs":
        return [
          {
            title: "Booking Process",
            body: "Bookings are completed by selecting a trek, choosing a suitable date, filling in the participant details, and making the payment online."
          },
          {
            title: "Payment Methods",
            body: "Payments can be made using the approved online payment methods shown during checkout. The booking is confirmed only after the transaction is successfully completed."
          },
          {
            title: "Rescheduling and Cancellation",
            body: "If you need to cancel or reschedule, please contact the support team as early as possible. Requests are handled according to the published cancellation policy and the availability of alternate dates."
          },
          {
            title: "Support Contact",
            body: "For assistance with bookings, payments, rescheduling, or general queries, please use the official support contact details listed on the website."
          }
        ].map((point) => this.createPoint(point));
      case "cancelation":
        return [
          {
            title: "Cancellation by Customer",
            body: "Cancellation requests must be submitted through the official support channel or the booking platform used for the reservation. The date and time of receipt will be used to determine refund eligibility and any applicable deductions."
          },
          {
            title: "Refund Eligibility",
            body: "Refund eligibility depends on how close the request is to the departure date and on the operational commitments already made, including permits, transport, accommodation, and guide arrangements. The final refund amount is calculated from the total booking value after applicable deductions."
          },
          {
            title: "Late Cancellation and No-Show",
            body: "Cancellations made close to the trek date, late arrivals, or failure to report at the scheduled time are treated as no-show cases and are generally non-refundable because arrangements will already be in place."
          },
          {
            title: "Organizer Cancellation",
            body: "If we cancel an event due to weather, safety concerns, forest department restrictions, insufficient participants, or other operational reasons, you will receive a full refund or, where available, the option to reschedule to another date."
          },
          {
            title: "Refund Processing",
            body: "Approved refunds are processed to the original payment method within 7 to 10 working days. Bank, card network, or payment gateway timelines may vary and are outside our control."
          },
          {
            title: "Rescheduling",
            body: "Where operationally possible, one reschedule request may be allowed instead of a refund. Rescheduled bookings remain subject to availability, permit rules, and any price difference in effect on the new date."
          }
        ].map((point) => this.createPoint(point));
      case "terms-and-condition":
        return [
          {
            title: "Acceptance of Terms",
            body: "By accessing or using our services, you agree to follow these Terms and Conditions and any updates published by us from time to time."
          },
          {
            title: "User Responsibilities",
            body: "Users must provide accurate information, follow all instructions, behave responsibly, and avoid any misuse of the service, bookings, or website."
          },
          {
            title: "Payment Terms",
            body: "All prices and charges are shown at the time of booking. Payments must be completed through the approved payment methods, and any applicable taxes or gateway charges will be displayed before confirmation."
          },
          {
            title: "Updates to Terms",
            body: "We may revise these terms when required. Any updated version will be published on the website and will take effect from the date mentioned in the revised document."
          }
        ].map((point) => this.createPoint(point));
    }
    return [];
  }
  createPoint(point = {}) {
    return {
      id: point.id || `point-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
      title: point.title || "",
      body: point.body || ""
    };
  }
  buildContentFromPoints(points, title) {
    const usablePoints = points.filter((point) => point.title.trim() || point.body.trim());
    if (!usablePoints.length) {
      return "";
    }
    const listItems = usablePoints.map((section, index) => {
      const body = this.normalizePointBody(section.body || "").trim().split(/\n+/).map((sentence) => sentence.trim()).filter(Boolean).join("<br>");
      return [
        `<li${index === 0 ? ' data-open="true"' : ""}>`,
        `<strong>${this.escapeHtml(section.title)}</strong><br>${body}`,
        "</li>"
      ].join("");
    }).join("");
    return `<h2>${this.escapeHtml(title)}</h2><ul>${listItems}</ul>`;
  }
  syncDraftContent() {
    this.draft.content = this.buildContentFromPoints(this.points, this.draft.title || this.selectedPage?.title || this.pages.find((entry) => entry.key === this.selectedKey)?.label || "");
  }
  extractPoints(content, pageKey) {
    if (!content.trim() || typeof DOMParser === "undefined") {
      return this.getAccordionTemplatePoints(pageKey);
    }
    const parser = new DOMParser();
    const doc = parser.parseFromString(`<div>${content}</div>`, "text/html");
    const detailsNodes = Array.from(doc.querySelectorAll("details"));
    const listItems = Array.from(doc.querySelectorAll("ul > li, ol > li"));
    if (detailsNodes.length > 0) {
      return detailsNodes.map((details, index) => {
        const summary = details.querySelector("summary");
        const body = Array.from(details.children).filter((child) => child.tagName.toLowerCase() !== "summary").map((child) => child.outerHTML).join("");
        return {
          id: this.createPoint().id,
          title: summary?.textContent?.trim() || `Section ${index + 1}`,
          body
        };
      });
    }
    if (listItems.length > 0) {
      return listItems.map((li, index) => this.extractListPoint(li, index));
    }
    const bodyPoints = [];
    let currentTitle = "";
    let currentBody = [];
    let counter = 1;
    const flush = () => {
      if (!currentTitle && !currentBody.length) {
        return;
      }
      bodyPoints.push({
        id: this.createPoint().id,
        title: currentTitle || `Section ${counter}`,
        body: currentBody.join("\n").trim()
      });
      currentTitle = "";
      currentBody = [];
      counter += 1;
    };
    Array.from(doc.body.firstElementChild?.childNodes || []).forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        const element = node;
        const tagName = element.tagName.toLowerCase();
        if (/^h[1-6]$/.test(tagName)) {
          flush();
          currentTitle = element.textContent?.trim() || `Section ${counter}`;
          return;
        }
        if (!currentTitle && !currentBody.length) {
          currentTitle = `Section ${counter}`;
        }
        currentBody.push(element.outerHTML);
        return;
      }
      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent?.trim();
        if (!text) {
          return;
        }
        if (!currentTitle && !currentBody.length) {
          currentTitle = `Section ${counter}`;
        }
        currentBody.push(`<p>${this.escapeHtml(text)}</p>`);
      }
    });
    flush();
    return bodyPoints.length ? bodyPoints : [
      {
        id: this.createPoint().id,
        title: this.pages.find((entry) => entry.key === pageKey)?.label || "Section 1",
        body: content
      }
    ];
  }
  extractListPoint(li, index) {
    const titleNode = li.querySelector(":scope > strong, :scope > b, :scope > h3, :scope > h4, :scope > h5, :scope > h6");
    const title = titleNode?.textContent?.trim() || `Section ${index + 1}`;
    const clone = li.cloneNode(true);
    const cloneFirst = clone.firstElementChild;
    if (cloneFirst && ["STRONG", "B", "H3", "H4", "H5", "H6"].includes(cloneFirst.tagName)) {
      cloneFirst.remove();
      if (clone.firstElementChild?.tagName === "BR") {
        clone.firstElementChild.remove();
      }
    }
    const body = this.normalizePointBody(clone.innerHTML.trim().replace(/^\s*<br\s*\/?>/i, "").trim());
    return {
      id: this.createPoint().id,
      title,
      body
    };
  }
  normalizePointBody(body) {
    return body.replace(/<\/?p[^>]*>/gi, "").replace(/\n\s*\n/g, "\n").trim();
  }
  escapeHtml(value) {
    return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
};
_StaticPagesComponent.\u0275fac = function StaticPagesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StaticPagesComponent)(\u0275\u0275directiveInject(StaticPagesService));
};
_StaticPagesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StaticPagesComponent, selectors: [["app-static-pages"]], decls: 56, vars: 19, consts: [["emptyPoints", ""], ["title", "Static Pages", "subtitle", "Edit the public FAQ, cancellation, and terms content from one place.", "sectionLabel", "Content"], [1, "static-pages-page"], [1, "surface-card", "page-list-card"], [1, "section-head"], [1, "eyebrow"], ["type", "button", 1, "btn-app", "ghost", 3, "click", "disabled"], [1, "page-list"], ["type", "button", "class", "page-chip", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "editor-grid"], [1, "surface-card", "editor-card"], [1, "status-pill"], ["class", "inline-state", 4, "ngIf"], ["class", "inline-state error", 4, "ngIf"], ["class", "inline-state success", 4, "ngIf"], [1, "field"], ["type", "text", "placeholder", "Page title", 1, "modern-input", 3, "ngModelChange", "input", "ngModel"], [1, "modern-select", 3, "ngModelChange", "ngModel"], ["value", "active"], ["value", "inactive"], ["class", "about-builder", 4, "ngIf"], ["class", "field", 4, "ngIf"], [1, "actions"], ["type", "button", 1, "btn-app", 3, "click", "disabled"], [1, "surface-card", "preview-card"], [1, "preview-key"], ["class", "about-preview-panel", 4, "ngIf"], [4, "ngIf"], ["type", "button", 1, "page-chip", 3, "click"], [1, "inline-state"], [1, "inline-state", "error"], [1, "inline-state", "success"], [1, "about-builder"], [1, "about-tabs-nav"], ["type", "button", 1, "about-nav-btn", 3, "click"], [1, "bi", "bi-stars", "text-warning", "me-1"], [1, "bi", "bi-book", "text-primary", "me-1"], [1, "bi", "bi-gem", "text-info", "me-1"], [1, "bi", "bi-people", "text-success", "me-1"], [1, "bi", "bi-shield-check", "text-warning", "me-1"], [1, "bi", "bi-bar-chart-line-fill", "text-primary", "me-1"], ["class", "about-tab-panel", 4, "ngIf"], [1, "about-tab-panel"], [1, "field-grid-2"], [1, "field", "compact"], ["type", "text", "placeholder", "e.g. 2011", 1, "modern-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "e.g. Our Story", 1, "modern-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Main title", 1, "modern-input", 3, "ngModelChange", "ngModel"], ["rows", "3", "placeholder", "Hero subtitle", 1, "modern-textarea", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "e.g. 01", 1, "modern-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Story heading", 1, "modern-input", 3, "ngModelChange", "ngModel"], ["rows", "3", "placeholder", "First paragraph", 1, "modern-textarea", 3, "ngModelChange", "ngModel"], ["rows", "2", "placeholder", "Quote", 1, "modern-textarea", 3, "ngModelChange", "ngModel"], ["rows", "3", "placeholder", "Second paragraph", 1, "modern-textarea", 3, "ngModelChange", "ngModel"], [1, "field-head"], ["type", "button", 1, "btn-app", "ghost", 3, "click"], [1, "cards-list"], ["class", "point-card", 4, "ngFor", "ngForOf"], [1, "point-card"], [1, "point-head"], ["type", "button", 1, "btn-app", "ghost", "danger", 3, "click"], ["type", "text", "placeholder", "shield-checkmark, leaf, star, people", 1, "modern-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Value title", 1, "modern-input", 3, "ngModelChange", "ngModel"], ["rows", "2", "placeholder", "Description", 1, "modern-textarea", 3, "ngModelChange", "ngModel"], ["class", "point-card team-editor-card", 4, "ngFor", "ngForOf"], [1, "point-card", "team-editor-card"], [1, "team-preview-badge"], [1, "team-mini-avatar", 3, "error", "src", "alt"], ["type", "text", "placeholder", "Member name", 1, "modern-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "e.g. Founder & Lead Trek Leader", 1, "modern-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Image URL (CDN or /uploads)", 1, "modern-input", 3, "ngModelChange", "ngModel"], ["rows", "2", "placeholder", "Experience, credentials, background", 1, "modern-textarea", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "shield-checkmark, medkit, call, cloudy-night", 1, "modern-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Protocol title", 1, "modern-input", 3, "ngModelChange", "ngModel"], ["rows", "2", "placeholder", "Protocol details", 1, "modern-textarea", 3, "ngModelChange", "ngModel"], [1, "hint"], [1, "stats-editor-grid"], ["class", "stat-editor-card", 4, "ngFor", "ngForOf"], [1, "stat-editor-card"], [1, "stat-key-badge"], ["type", "text", "placeholder", "e.g. 10,000+", 1, "modern-input", 3, "ngModelChange", "ngModel"], ["class", "point-list", 4, "ngIf", "ngIfElse"], [1, "point-list"], ["class", "point-card", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "point-actions"], ["type", "text", "placeholder", "Point title", 1, "modern-input", 3, "ngModelChange", "input", "ngModel"], ["rows", "4", "placeholder", "Point description", 1, "modern-textarea", 3, "ngModelChange", "input", "ngModel"], [1, "empty-points"], ["type", "button", 1, "btn-app", 3, "click"], [1, "about-preview-panel"], [1, "preview-about-hero"], [1, "preview-badge"], ["class", "preview-stats-bar", 4, "ngIf"], [1, "preview-about-section"], [1, "preview-story-p"], ["class", "preview-about-section", 4, "ngIf"], [1, "preview-stats-bar"], ["class", "preview-stat-item", 4, "ngFor", "ngForOf"], [1, "preview-stat-item"], [1, "preview-team-row"], ["class", "preview-team-pill", 4, "ngFor", "ngForOf"], [1, "preview-team-pill"], [3, "error", "src", "alt"], ["class", "preview-outline", 4, "ngIf"], [1, "preview-content", "content-html", 3, "innerHTML"], [1, "preview-outline"], [1, "preview-outline-head"], [1, "preview-outline-grid"], ["class", "preview-outline-chip", 4, "ngFor", "ngForOf"], [1, "preview-outline-chip"]], template: function StaticPagesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-admin-shell", 1)(1, "div", 2)(2, "section", 3)(3, "div", 4)(4, "div")(5, "p", 5);
    \u0275\u0275text(6, "Page Library");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h2");
    \u0275\u0275text(8, "Select a page");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 6);
    \u0275\u0275listener("click", function StaticPagesComponent_Template_button_click_9_listener() {
      return ctx.loadPages();
    });
    \u0275\u0275text(10, " Refresh ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 7);
    \u0275\u0275template(12, StaticPagesComponent_button_12_Template, 5, 4, "button", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 9)(14, "section", 10)(15, "div", 4)(16, "div")(17, "p", 5);
    \u0275\u0275text(18, "Editor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "h2");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "span", 11);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(23, StaticPagesComponent_div_23_Template, 2, 0, "div", 12)(24, StaticPagesComponent_div_24_Template, 2, 1, "div", 13)(25, StaticPagesComponent_div_25_Template, 2, 1, "div", 14);
    \u0275\u0275elementStart(26, "div", 15)(27, "label");
    \u0275\u0275text(28, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function StaticPagesComponent_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.draft.title, $event) || (ctx.draft.title = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function StaticPagesComponent_Template_input_ngModelChange_29_listener() {
      return ctx.syncDraftContent();
    })("input", function StaticPagesComponent_Template_input_input_29_listener() {
      return ctx.syncDraftContent();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 15)(31, "label");
    \u0275\u0275text(32, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "select", 17);
    \u0275\u0275twoWayListener("ngModelChange", function StaticPagesComponent_Template_select_ngModelChange_33_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.draft.status, $event) || (ctx.draft.status = $event);
      return $event;
    });
    \u0275\u0275elementStart(34, "option", 18);
    \u0275\u0275text(35, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "option", 19);
    \u0275\u0275text(37, "Inactive");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(38, StaticPagesComponent_div_38_Template, 26, 21, "div", 20)(39, StaticPagesComponent_div_39_Template, 11, 2, "div", 21);
    \u0275\u0275elementStart(40, "div", 22)(41, "button", 6);
    \u0275\u0275listener("click", function StaticPagesComponent_Template_button_click_41_listener() {
      return ctx.resetDraft();
    });
    \u0275\u0275text(42, " Reset ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "button", 23);
    \u0275\u0275listener("click", function StaticPagesComponent_Template_button_click_43_listener() {
      return ctx.savePage();
    });
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "aside", 24)(46, "div", 4)(47, "div")(48, "p", 5);
    \u0275\u0275text(49, "Preview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "h2");
    \u0275\u0275text(51, "Live output");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "span", 25);
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(54, StaticPagesComponent_div_54_Template, 16, 9, "div", 26)(55, StaticPagesComponent_ng_container_55_Template, 3, 2, "ng-container", 27);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(9);
    \u0275\u0275property("disabled", ctx.loading);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx.pages);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate((ctx.selectedPage == null ? null : ctx.selectedPage.title) || ctx.draft.title);
    \u0275\u0275advance();
    \u0275\u0275classProp("inactive", ctx.draft.status === "inactive");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.draft.status, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.error);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.message);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.draft.title);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.draft.status);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx.selectedKey === "about-us");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.selectedKey !== "about-us");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx.saving);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.saving ? "Saving..." : "Save Page", " ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx.selectedKey);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.selectedKey === "about-us");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.selectedKey !== "about-us");
  }
}, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, AdminShellComponent], styles: ['@charset "UTF-8";\n\n\n\n.static-pages-page[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 18px;\n}\n.page-list-card[_ngcontent-%COMP%], \n.template-card[_ngcontent-%COMP%], \n.editor-card[_ngcontent-%COMP%], \n.preview-card[_ngcontent-%COMP%] {\n  border-radius: 28px;\n  padding: 24px;\n}\n.section-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 18px;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 6px;\n  text-transform: uppercase;\n  letter-spacing: 0.14em;\n  font-size: 0.72rem;\n  color: #557089;\n  font-weight: 700;\n}\n.section-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  color: #10263c;\n}\n.page-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 12px;\n}\n.page-chip[_ngcontent-%COMP%] {\n  text-align: left;\n  border: 1px solid rgba(14, 27, 43, 0.08);\n  background: rgba(248, 250, 252, 0.9);\n  border-radius: 20px;\n  padding: 16px;\n  transition:\n    transform 0.2s ease,\n    border-color 0.2s ease,\n    box-shadow 0.2s ease;\n}\n.page-chip[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  color: #10263c;\n  margin-bottom: 6px;\n}\n.page-chip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  color: #58718a;\n  line-height: 1.45;\n}\n.page-chip.active[_ngcontent-%COMP%] {\n  border-color: rgba(13, 124, 134, 0.35);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(13, 124, 134, 0.12),\n      rgba(255, 255, 255, 0.94));\n  box-shadow: 0 18px 40px rgba(13, 124, 134, 0.12);\n  transform: translateY(-1px);\n}\n.template-card[_ngcontent-%COMP%] {\n  border-radius: 28px;\n  padding: 24px;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.96),\n      rgba(247, 251, 252, 0.96));\n  border: 1px solid rgba(14, 27, 43, 0.08);\n}\n.template-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 7px 12px;\n  border-radius: 999px;\n  background: rgba(13, 124, 134, 0.12);\n  color: #0d7c86;\n  font-weight: 800;\n}\n.template-copy[_ngcontent-%COMP%] {\n  margin: 0 0 16px;\n  color: #58718a;\n  line-height: 1.7;\n}\n.template-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 12px;\n}\n.template-chip[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 16px;\n  border-radius: 20px;\n  border: 1px solid rgba(14, 27, 43, 0.08);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(252, 253, 254, 0.98),\n      rgba(247, 251, 252, 0.98));\n  transition:\n    transform 0.2s ease,\n    border-color 0.2s ease,\n    box-shadow 0.2s ease;\n}\n.template-chip[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  color: #10263c;\n  font-size: 1rem;\n}\n.template-chip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  color: #58718a;\n  line-height: 1.5;\n  margin-bottom: 10px;\n}\n.template-chip[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 6px 10px;\n  border-radius: 999px;\n  background: rgba(13, 124, 134, 0.1);\n  color: #0d7c86;\n  font-weight: 700;\n}\n.template-chip[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  border-color: rgba(13, 124, 134, 0.28);\n  box-shadow: 0 16px 34px rgba(13, 124, 134, 0.1);\n}\n.editor-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.2fr) minmax(320px, 0.8fr);\n  gap: 18px;\n  align-items: start;\n}\n.preview-card[_ngcontent-%COMP%] {\n  align-self: start;\n  position: sticky;\n  top: 90px;\n  max-height: calc(100vh - 120px);\n  overflow-y: auto;\n  scrollbar-width: thin;\n  scrollbar-color: rgba(13, 124, 134, 0.25) transparent;\n}\n.preview-card[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.preview-card[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(13, 124, 134, 0.2);\n  border-radius: 6px;\n}\n.field[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.field.compact[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #17324d;\n}\n.modern-input[_ngcontent-%COMP%], \n.modern-textarea[_ngcontent-%COMP%], \n.modern-select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 14px;\n  border-radius: 12px;\n  border: 1px solid rgba(14, 27, 43, 0.12);\n  background: #ffffff;\n  color: #10263c;\n  font-size: 0.92rem;\n  font-family: inherit;\n  transition: all 0.2s ease;\n  outline: none;\n}\n.modern-input[_ngcontent-%COMP%]:focus, \n.modern-textarea[_ngcontent-%COMP%]:focus, \n.modern-select[_ngcontent-%COMP%]:focus {\n  border-color: #0d7c86;\n  box-shadow: 0 0 0 3px rgba(13, 124, 134, 0.15);\n}\n.modern-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n  line-height: 1.5;\n}\n.field-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.hint[_ngcontent-%COMP%] {\n  color: #5d748c;\n}\n.template-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 10px;\n}\n.template-btn[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n}\n.template-note[_ngcontent-%COMP%] {\n  color: #6a8096;\n  font-size: 0.92rem;\n}\n.point-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 14px;\n}\n.point-card[_ngcontent-%COMP%] {\n  border: 1px solid rgba(14, 27, 43, 0.08);\n  border-radius: 22px;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(252, 253, 254, 0.98),\n      rgba(247, 251, 252, 0.98));\n  padding: 16px;\n}\n.point-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 14px;\n}\n.point-head[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  margin-bottom: 4px;\n  color: #0d7c86;\n  font-size: 0.82rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n}\n.point-head[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  color: #10263c;\n  font-size: 1rem;\n}\n.point-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.btn-app.ghost.danger[_ngcontent-%COMP%] {\n  color: #ad433e;\n  border-color: rgba(173, 67, 62, 0.2);\n}\n.empty-points[_ngcontent-%COMP%] {\n  padding: 20px;\n  border: 1px dashed rgba(13, 124, 134, 0.18);\n  border-radius: 20px;\n  background: rgba(255, 255, 255, 0.65);\n  display: grid;\n  gap: 12px;\n  justify-items: start;\n  color: #58718a;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 18px;\n}\n.status-pill[_ngcontent-%COMP%], \n.preview-key[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 7px 12px;\n  border-radius: 999px;\n  background: rgba(13, 124, 134, 0.12);\n  color: #0d7c86;\n  font-weight: 700;\n  text-transform: capitalize;\n}\n.status-pill.inactive[_ngcontent-%COMP%] {\n  background: rgba(219, 83, 78, 0.12);\n  color: #ad433e;\n}\n.inline-state[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n  padding: 12px 14px;\n  border-radius: 16px;\n  background: rgba(13, 124, 134, 0.08);\n  color: #0d4f56;\n  font-weight: 600;\n}\n.inline-state.error[_ngcontent-%COMP%] {\n  background: rgba(219, 83, 78, 0.12);\n  color: #ad433e;\n}\n.inline-state.success[_ngcontent-%COMP%] {\n  background: rgba(31, 173, 93, 0.12);\n  color: #1e6e3e;\n}\n.preview-content[_ngcontent-%COMP%] {\n  min-height: 520px;\n  padding: 12px 0 0;\n  color: #17324d;\n}\n.preview-outline[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n  padding: 16px;\n  border-radius: 20px;\n  border: 1px solid rgba(13, 124, 134, 0.12);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(250, 252, 253, 0.98),\n      rgba(245, 250, 251, 0.98));\n}\n.preview-outline-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.preview-outline-head[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 800;\n  color: #10263c;\n}\n.preview-outline-head[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #6a8096;\n  font-weight: 600;\n}\n.preview-outline-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.preview-outline-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 7px 10px;\n  border-radius: 999px;\n  background: rgba(13, 124, 134, 0.1);\n  color: #0d7c86;\n  font-weight: 700;\n  font-size: 0.88rem;\n}\n.content-html[_ngcontent-%COMP%]   :where(h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%]) {\n  margin: 0 0 16px;\n  color: #0f253d;\n}\n.content-html[_ngcontent-%COMP%]   :where(p[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], ol[_ngcontent-%COMP%]) {\n  margin: 0 0 14px;\n  line-height: 1.75;\n}\n.content-html[_ngcontent-%COMP%]   :where(ul[_ngcontent-%COMP%], ol[_ngcontent-%COMP%]) {\n  padding-left: 22px;\n}\n.content-html[_ngcontent-%COMP%]   :where(a[_ngcontent-%COMP%]) {\n  color: #0d7c86;\n  text-decoration: underline;\n}\n.content-html[_ngcontent-%COMP%]   details[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0 0 14px;\n  overflow: hidden;\n  border: 1px solid rgba(13, 124, 134, 0.12);\n  border-radius: 18px;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(248, 251, 252, 0.98),\n      rgba(255, 255, 255, 0.98));\n  box-shadow: 0 10px 24px rgba(17, 38, 64, 0.05);\n  transition:\n    transform 0.24s ease,\n    box-shadow 0.24s ease,\n    border-color 0.24s ease,\n    background 0.24s ease;\n}\n.content-html[_ngcontent-%COMP%]   details[open][_ngcontent-%COMP%] {\n  border-color: rgba(13, 124, 134, 0.26);\n  background:\n    linear-gradient(\n      180deg,\n      rgb(244, 250, 251),\n      rgb(255, 255, 255));\n  box-shadow: 0 18px 42px rgba(13, 124, 134, 0.12);\n}\n.content-html[_ngcontent-%COMP%]   details[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n.content-html[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  position: relative;\n  cursor: pointer;\n  padding: 18px 52px 18px 18px;\n  font-weight: 800;\n  color: #10263c;\n  letter-spacing: -0.01em;\n  line-height: 1.35;\n}\n.content-html[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]::-webkit-details-marker {\n  display: none;\n}\n.content-html[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]::before {\n  content: "";\n  width: 10px;\n  height: 10px;\n  border-radius: 999px;\n  background: #0d7c86;\n  box-shadow: 0 0 0 6px rgba(13, 124, 134, 0.12);\n  flex: 0 0 auto;\n}\n.content-html[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]::after {\n  content: "+";\n  position: absolute;\n  top: 50%;\n  right: 18px;\n  transform: translateY(-50%);\n  width: 28px;\n  height: 28px;\n  border-radius: 999px;\n  display: grid;\n  place-items: center;\n  background: rgba(13, 124, 134, 0.12);\n  color: #0d7c86;\n  font-size: 1.2rem;\n  line-height: 1;\n  transition:\n    transform 0.24s ease,\n    background 0.24s ease,\n    color 0.24s ease;\n  flex: 0 0 auto;\n}\n.content-html[_ngcontent-%COMP%]   details[open][_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]::after {\n  content: "\\2212";\n  color: #0b5f67;\n  background: rgba(13, 124, 134, 0.18);\n  transform: translateY(-50%) rotate(180deg);\n}\n.content-html[_ngcontent-%COMP%]   details[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(summary) {\n  margin: 0;\n  padding: 0 18px 18px;\n  color: #365269;\n}\n.content-html[_ngcontent-%COMP%]   details[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(summary):first-of-type {\n  padding-top: 0;\n}\n@media (max-width: 1100px) {\n  .page-list[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .template-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .editor-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 720px) {\n  .page-list[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .section-head[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .template-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .preview-outline-head[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .field-head[_ngcontent-%COMP%], \n   .point-head[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .point-actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.about-builder[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.about-tabs-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  padding: 6px;\n  background: rgba(14, 27, 43, 0.04);\n  border-radius: 16px;\n  border: 1px solid rgba(14, 27, 43, 0.06);\n}\n.about-nav-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  border-radius: 12px;\n  background: transparent;\n  border: none;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #4b6279;\n  cursor: pointer;\n  transition: all 0.18s ease;\n}\n.about-nav-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.about-nav-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.6);\n  color: #10263c;\n}\n.about-nav-btn.active[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: #0d7c86;\n  box-shadow: 0 4px 14px rgba(13, 124, 134, 0.12);\n}\n.about-tab-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  animation: fadeIn 0.2s ease-in;\n}\n.field-grid-2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n}\n@media (max-width: 640px) {\n  .field-grid-2[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.cards-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.team-editor-card[_ngcontent-%COMP%]   .team-preview-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.team-editor-card[_ngcontent-%COMP%]   .team-preview-badge[_ngcontent-%COMP%]   .team-mini-avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 1px solid rgba(13, 124, 134, 0.2);\n}\n.stats-editor-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n}\n@media (max-width: 600px) {\n  .stats-editor-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.stat-editor-card[_ngcontent-%COMP%] {\n  padding: 14px;\n  border-radius: 16px;\n  background: rgba(248, 250, 252, 0.9);\n  border: 1px solid rgba(14, 27, 43, 0.08);\n  position: relative;\n}\n.stat-editor-card[_ngcontent-%COMP%]   .stat-key-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 0.68rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #0d7c86;\n  background: rgba(13, 124, 134, 0.1);\n  padding: 3px 8px;\n  border-radius: 6px;\n  margin-bottom: 8px;\n}\n.about-preview-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 6px 0;\n}\n.preview-about-hero[_ngcontent-%COMP%] {\n  padding: 18px;\n  border-radius: 18px;\n  background:\n    linear-gradient(\n      135deg,\n      #0e2a3a 0%,\n      #16425b 100%);\n  color: #ffffff;\n}\n.preview-about-hero[_ngcontent-%COMP%]   .preview-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #38bdf8;\n  margin-bottom: 8px;\n}\n.preview-about-hero[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 6px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  line-height: 1.35;\n  color: #ffffff;\n}\n.preview-about-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.84rem;\n  opacity: 0.85;\n  line-height: 1.5;\n}\n.preview-stats-bar[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 8px;\n  background: rgba(13, 124, 134, 0.06);\n  padding: 12px;\n  border-radius: 16px;\n  border: 1px solid rgba(13, 124, 134, 0.12);\n}\n@media (max-width: 600px) {\n  .preview-stats-bar[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.preview-stats-bar[_ngcontent-%COMP%]   .preview-stat-item[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.preview-stats-bar[_ngcontent-%COMP%]   .preview-stat-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.05rem;\n  font-weight: 800;\n  color: #0d7c86;\n}\n.preview-stats-bar[_ngcontent-%COMP%]   .preview-stat-item[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.68rem;\n  color: #557089;\n  margin-top: 2px;\n}\n.preview-about-section[_ngcontent-%COMP%] {\n  padding: 14px;\n  border-radius: 16px;\n  background: #f8fafc;\n  border: 1px solid rgba(14, 27, 43, 0.06);\n}\n.preview-about-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 0.95rem;\n  color: #10263c;\n  font-weight: 700;\n}\n.preview-about-section[_ngcontent-%COMP%]   .preview-story-p[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 0.82rem;\n  color: #475569;\n  line-height: 1.55;\n}\n.preview-about-section[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  padding-left: 10px;\n  border-left: 3px solid #0d7c86;\n  font-style: italic;\n  font-size: 0.82rem;\n  color: #0d7c86;\n}\n.preview-team-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 8px;\n}\n.preview-team-row[_ngcontent-%COMP%]   .preview-team-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 10px 4px 4px;\n  border-radius: 999px;\n  background: #ffffff;\n  border: 1px solid rgba(14, 27, 43, 0.08);\n  font-size: 0.78rem;\n  color: #1e293b;\n  font-weight: 600;\n}\n.preview-team-row[_ngcontent-%COMP%]   .preview-team-pill[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n/*# sourceMappingURL=static-pages.component.css.map */'] });
var StaticPagesComponent = _StaticPagesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StaticPagesComponent, [{
    type: Component,
    args: [{ selector: "app-static-pages", standalone: true, imports: [CommonModule, FormsModule, AdminShellComponent], schemas: [CUSTOM_ELEMENTS_SCHEMA], template: `<app-admin-shell
  title="Static Pages"
  subtitle="Edit the public FAQ, cancellation, and terms content from one place."
  sectionLabel="Content">
  <div class="static-pages-page">
    <section class="surface-card page-list-card">
      <div class="section-head">
        <div>
          <p class="eyebrow">Page Library</p>
          <h2>Select a page</h2>
        </div>
        <button type="button" class="btn-app ghost" (click)="loadPages()" [disabled]="loading">
          Refresh
        </button>
      </div>

      <div class="page-list">
        <button
          *ngFor="let page of pages"
          type="button"
          class="page-chip"
          [class.active]="selectedKey === page.key"
          (click)="selectPage(page.key)">
          <strong>{{ page.label }}</strong>
          <span>{{ page.helper }}</span>
        </button>
      </div>
    </section>


    <div class="editor-grid">
      <section class="surface-card editor-card">
        <div class="section-head">
          <div>
            <p class="eyebrow">Editor</p>
            <h2>{{ selectedPage?.title || draft.title }}</h2>
          </div>
          <span class="status-pill" [class.inactive]="draft.status === 'inactive'">
            {{ draft.status }}
          </span>
        </div>

        <div *ngIf="loading" class="inline-state">Loading page content...</div>
        <div *ngIf="error" class="inline-state error">{{ error }}</div>
        <div *ngIf="message" class="inline-state success">{{ message }}</div>

        <div class="field">
          <label>Title</label>
          <input
            type="text"
            class="modern-input"
            [(ngModel)]="draft.title"
            (ngModelChange)="syncDraftContent()"
            (input)="syncDraftContent()"
            placeholder="Page title" />
        </div>

        <div class="field">
          <label>Status</label>
          <select [(ngModel)]="draft.status" class="modern-select">
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        <!-- ABOUT US DEDICATED BUILDER -->
        <div class="about-builder" *ngIf="selectedKey === 'about-us'">
          <div class="about-tabs-nav">
            <button type="button" class="about-nav-btn" [class.active]="aboutTab === 'hero'" (click)="setAboutTab('hero')">
              <i class="bi bi-stars text-warning me-1"></i> Hero Banner
            </button>
            <button type="button" class="about-nav-btn" [class.active]="aboutTab === 'story'" (click)="setAboutTab('story')">
              <i class="bi bi-book text-primary me-1"></i> Our Story
            </button>
            <button type="button" class="about-nav-btn" [class.active]="aboutTab === 'values'" (click)="setAboutTab('values')">
              <i class="bi bi-gem text-info me-1"></i> Values ({{ aboutData.values?.length || 0 }})
            </button>
            <button type="button" class="about-nav-btn" [class.active]="aboutTab === 'team'" (click)="setAboutTab('team')">
              <i class="bi bi-people text-success me-1"></i> Team ({{ aboutData.team?.length || 0 }})
            </button>
            <button type="button" class="about-nav-btn" [class.active]="aboutTab === 'safety'" (click)="setAboutTab('safety')">
              <i class="bi bi-shield-check text-warning me-1"></i> Safety ({{ aboutData.safetyItems?.length || 0 }})
            </button>
            <button type="button" class="about-nav-btn" [class.active]="aboutTab === 'stats'" (click)="setAboutTab('stats')">
              <i class="bi bi-bar-chart-line-fill text-primary me-1"></i> Live Stats
            </button>
          </div>

          <!-- HERO SECTION TAB -->
          <div class="about-tab-panel" *ngIf="aboutTab === 'hero' && aboutData.hero">
            <div class="field-grid-2">
              <div class="field compact">
                <label>Founded Year</label>
                <input type="text" class="modern-input" [(ngModel)]="aboutData.hero.year" placeholder="e.g. 2011" />
              </div>
              <div class="field compact">
                <label>Hero Badge Tag</label>
                <input type="text" class="modern-input" [(ngModel)]="aboutData.hero.badge" placeholder="e.g. Our Story" />
              </div>
            </div>
            <div class="field compact">
              <label>Main Headline</label>
              <input type="text" class="modern-input" [(ngModel)]="aboutData.hero.title" placeholder="Main title" />
            </div>
            <div class="field compact">
              <label>Subtitle / Description</label>
              <textarea class="modern-textarea" [(ngModel)]="aboutData.hero.subtitle" rows="3" placeholder="Hero subtitle"></textarea>
            </div>
          </div>

          <!-- STORY SECTION TAB -->
          <div class="about-tab-panel" *ngIf="aboutTab === 'story' && aboutData.story">
            <div class="field-grid-2">
              <div class="field compact">
                <label>Section Number</label>
                <input type="text" class="modern-input" [(ngModel)]="aboutData.story.sectionNumber" placeholder="e.g. 01" />
              </div>
              <div class="field compact">
                <label>Section Tag</label>
                <input type="text" class="modern-input" [(ngModel)]="aboutData.story.tag" placeholder="e.g. Our Story" />
              </div>
            </div>
            <div class="field compact">
              <label>Story Heading</label>
              <input type="text" class="modern-input" [(ngModel)]="aboutData.story.heading" placeholder="Story heading" />
            </div>
            <div class="field compact">
              <label>Paragraph 1 (The Journey)</label>
              <textarea class="modern-textarea" [(ngModel)]="aboutData.story.paragraph1" rows="3" placeholder="First paragraph"></textarea>
            </div>
            <div class="field compact">
              <label>Highlighted Pull Quote</label>
              <textarea class="modern-textarea" [(ngModel)]="aboutData.story.quote" rows="2" placeholder="Quote"></textarea>
            </div>
            <div class="field compact">
              <label>Paragraph 2 (The Mission)</label>
              <textarea class="modern-textarea" [(ngModel)]="aboutData.story.paragraph2" rows="3" placeholder="Second paragraph"></textarea>
            </div>
          </div>

          <!-- VALUES TAB -->
          <div class="about-tab-panel" *ngIf="aboutTab === 'values'">
            <div class="field-head">
              <label>Core Values</label>
              <button type="button" class="btn-app ghost" (click)="addValue()">+ Add Value</button>
            </div>
            <div class="cards-list">
              <article class="point-card" *ngFor="let val of aboutData.values; let i = index">
                <div class="point-head">
                  <strong>Value #{{ i + 1 }}: {{ val.title }}</strong>
                  <button type="button" class="btn-app ghost danger" (click)="removeValue(i)">Remove</button>
                </div>
                <div class="field-grid-2">
                  <div class="field compact">
                    <label>Ion Icon Name</label>
                    <input type="text" class="modern-input" [(ngModel)]="val.icon" placeholder="shield-checkmark, leaf, star, people" />
                  </div>
                  <div class="field compact">
                    <label>Title</label>
                    <input type="text" class="modern-input" [(ngModel)]="val.title" placeholder="Value title" />
                  </div>
                </div>
                <div class="field compact">
                  <label>Description</label>
                  <textarea class="modern-textarea" [(ngModel)]="val.description" rows="2" placeholder="Description"></textarea>
                </div>
              </article>
            </div>
          </div>

          <!-- TEAM TAB -->
          <div class="about-tab-panel" *ngIf="aboutTab === 'team'">
            <div class="field-head">
              <label>Team Members & Trek Leaders</label>
              <button type="button" class="btn-app ghost" (click)="addTeamMember()">+ Add Member</button>
            </div>
            <div class="cards-list">
              <article class="point-card team-editor-card" *ngFor="let mem of aboutData.team; let i = index">
                <div class="point-head">
                  <div class="team-preview-badge">
                    <img [src]="mem.image" [alt]="mem.name" class="team-mini-avatar" (error)="$event.target.src = 'https://ui-avatars.com/api/?name=User'" />
                    <strong>{{ mem.name }}</strong>
                  </div>
                  <button type="button" class="btn-app ghost danger" (click)="removeTeamMember(i)">Remove</button>
                </div>
                <div class="field-grid-2">
                  <div class="field compact">
                    <label>Full Name</label>
                    <input type="text" class="modern-input" [(ngModel)]="mem.name" placeholder="Member name" />
                  </div>
                  <div class="field compact">
                    <label>Role</label>
                    <input type="text" class="modern-input" [(ngModel)]="mem.role" placeholder="e.g. Founder & Lead Trek Leader" />
                  </div>
                </div>
                <div class="field compact">
                  <label>Photo Image URL</label>
                  <input type="text" class="modern-input" [(ngModel)]="mem.image" placeholder="Image URL (CDN or /uploads)" />
                </div>
                <div class="field compact">
                  <label>Short Bio</label>
                  <textarea class="modern-textarea" [(ngModel)]="mem.bio" rows="2" placeholder="Experience, credentials, background"></textarea>
                </div>
              </article>
            </div>
          </div>

          <!-- SAFETY STANDARDS TAB -->
          <div class="about-tab-panel" *ngIf="aboutTab === 'safety'">
            <div class="field-head">
              <label>Safety Protocols</label>
              <button type="button" class="btn-app ghost" (click)="addSafetyItem()">+ Add Protocol</button>
            </div>
            <div class="cards-list">
              <article class="point-card" *ngFor="let safe of aboutData.safetyItems; let i = index">
                <div class="point-head">
                  <strong>Protocol #{{ i + 1 }}: {{ safe.title }}</strong>
                  <button type="button" class="btn-app ghost danger" (click)="removeSafetyItem(i)">Remove</button>
                </div>
                <div class="field-grid-2">
                  <div class="field compact">
                    <label>Icon Name</label>
                    <input type="text" class="modern-input" [(ngModel)]="safe.icon" placeholder="shield-checkmark, medkit, call, cloudy-night" />
                  </div>
                  <div class="field compact">
                    <label>Title</label>
                    <input type="text" class="modern-input" [(ngModel)]="safe.title" placeholder="Protocol title" />
                  </div>
                </div>
                <div class="field compact">
                  <label>Description</label>
                  <textarea class="modern-textarea" [(ngModel)]="safe.description" rows="2" placeholder="Protocol details"></textarea>
                </div>
              </article>
            </div>
          </div>

          <!-- STATS TAB -->
          <div class="about-tab-panel" *ngIf="aboutTab === 'stats'">
            <div class="field-head">
              <label>Trek Statistics</label>
              <small class="hint">Live stats calculate automatically from completed bookings and trek records in the database.</small>
            </div>
            <div class="stats-editor-grid">
              <div class="stat-editor-card" *ngFor="let st of aboutData.stats">
                <span class="stat-key-badge">{{ st.key || 'metric' }}</span>
                <div class="field compact">
                  <label>{{ st.label }}</label>
                  <input type="text" class="modern-input" [(ngModel)]="st.number" placeholder="e.g. 10,000+" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- ACCORDION BUILDER FOR FAQ / CANCELLATION / TERMS -->
        <div class="field" *ngIf="selectedKey !== 'about-us'">
          <div class="field-head">
            <label>Points</label>
            <button type="button" class="btn-app ghost" (click)="addPoint()">Add Point</button>
          </div>
          <small class="hint">Add one point per accordion item. The HTML is generated automatically from these fields.</small>

          <div class="point-list" *ngIf="points.length; else emptyPoints">
            <article class="point-card" *ngFor="let point of points; let i = index; trackBy: trackByPointId">
              <div class="point-head">
                <div>
                  <span>Point {{ i + 1 }}</span>
                  <strong>{{ point.title || 'Untitled point' }}</strong>
                </div>
                <div class="point-actions">
                  <button type="button" class="btn-app ghost" (click)="movePoint(i, -1)" [disabled]="i === 0">Up</button>
                  <button type="button" class="btn-app ghost" (click)="movePoint(i, 1)" [disabled]="i === points.length - 1">Down</button>
                  <button type="button" class="btn-app ghost danger" (click)="removePoint(i)">Remove</button>
                </div>
              </div>

              <div class="field compact">
                <label>Title</label>
                <input
                  type="text"
                  class="modern-input"
                  [(ngModel)]="point.title"
                  (ngModelChange)="syncDraftContent()"
                  (input)="syncDraftContent()"
                  placeholder="Point title" />
              </div>

              <div class="field compact">
                <label>Description</label>
                <textarea
                  class="modern-textarea"
                  [(ngModel)]="point.body"
                  (ngModelChange)="syncDraftContent()"
                  (input)="syncDraftContent()"
                  rows="4"
                  placeholder="Point description"></textarea>
              </div>
            </article>
          </div>

          <ng-template #emptyPoints>
            <div class="empty-points">
              <p>No points added yet.</p>
              <button type="button" class="btn-app" (click)="addPoint()">Add the first point</button>
            </div>
          </ng-template>
        </div>

        <div class="actions">
          <button type="button" class="btn-app ghost" (click)="resetDraft()" [disabled]="saving">
            Reset
          </button>
          <button type="button" class="btn-app" (click)="savePage()" [disabled]="saving">
            {{ saving ? 'Saving...' : 'Save Page' }}
          </button>
        </div>
      </section>

      <aside class="surface-card preview-card">
        <div class="section-head">
          <div>
            <p class="eyebrow">Preview</p>
            <h2>Live output</h2>
          </div>
          <span class="preview-key">{{ selectedKey }}</span>
        </div>

        <!-- ABOUT US PREVIEW -->
        <div class="about-preview-panel" *ngIf="selectedKey === 'about-us'">
          <div class="preview-about-hero">
            <span class="preview-badge">{{ aboutData.hero?.badge || 'Our Story' }} \u2022 Since {{ aboutData.hero?.year || '2011' }}</span>
            <h3>{{ aboutData.hero?.title || 'Exploring Karnataka\u2019s Wilderness' }}</h3>
            <p>{{ aboutData.hero?.subtitle }}</p>
          </div>
          <div class="preview-stats-bar" *ngIf="aboutData.stats?.length">
            <div class="preview-stat-item" *ngFor="let s of aboutData.stats">
              <strong>{{ s.number }}</strong>
              <small>{{ s.label }}</small>
            </div>
          </div>
          <div class="preview-about-section">
            <h4>{{ aboutData.story?.heading || 'Our Story' }}</h4>
            <p class="preview-story-p">{{ aboutData.story?.paragraph1 }}</p>
            <blockquote *ngIf="aboutData.story?.quote">"{{ aboutData.story?.quote }}"</blockquote>
          </div>
          <div class="preview-about-section" *ngIf="aboutData.team?.length">
            <h4>Team Leaders ({{ aboutData.team?.length }})</h4>
            <div class="preview-team-row">
              <div class="preview-team-pill" *ngFor="let t of aboutData.team">
                <img [src]="t.image" [alt]="t.name" (error)="$event.target.src = 'https://ui-avatars.com/api/?name=Trek'" />
                <span>{{ t.name }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- ACCORDION PREVIEW FOR OTHER PAGES -->
        <ng-container *ngIf="selectedKey !== 'about-us'">
          <div class="preview-outline" *ngIf="previewSections.length">
            <div class="preview-outline-head">
              <span>Section outline</span>
              <small>{{ previewSections.length }} items</small>
            </div>
            <div class="preview-outline-grid">
              <span class="preview-outline-chip" *ngFor="let section of previewSections">{{ section.title }}</span>
            </div>
          </div>

          <article class="preview-content content-html" [innerHTML]="previewContent || '<p>No content yet.</p>'"></article>
        </ng-container>
      </aside>
    </div>
  </div>
</app-admin-shell>
`, styles: ['@charset "UTF-8";\n\n/* src/app/static-pages/static-pages.component.scss */\n.static-pages-page {\n  display: grid;\n  gap: 18px;\n}\n.page-list-card,\n.template-card,\n.editor-card,\n.preview-card {\n  border-radius: 28px;\n  padding: 24px;\n}\n.section-head {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 18px;\n}\n.eyebrow {\n  margin: 0 0 6px;\n  text-transform: uppercase;\n  letter-spacing: 0.14em;\n  font-size: 0.72rem;\n  color: #557089;\n  font-weight: 700;\n}\n.section-head h2 {\n  margin: 0;\n  font-size: 1.25rem;\n  color: #10263c;\n}\n.page-list {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 12px;\n}\n.page-chip {\n  text-align: left;\n  border: 1px solid rgba(14, 27, 43, 0.08);\n  background: rgba(248, 250, 252, 0.9);\n  border-radius: 20px;\n  padding: 16px;\n  transition:\n    transform 0.2s ease,\n    border-color 0.2s ease,\n    box-shadow 0.2s ease;\n}\n.page-chip strong {\n  display: block;\n  color: #10263c;\n  margin-bottom: 6px;\n}\n.page-chip span {\n  display: block;\n  color: #58718a;\n  line-height: 1.45;\n}\n.page-chip.active {\n  border-color: rgba(13, 124, 134, 0.35);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(13, 124, 134, 0.12),\n      rgba(255, 255, 255, 0.94));\n  box-shadow: 0 18px 40px rgba(13, 124, 134, 0.12);\n  transform: translateY(-1px);\n}\n.template-card {\n  border-radius: 28px;\n  padding: 24px;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.96),\n      rgba(247, 251, 252, 0.96));\n  border: 1px solid rgba(14, 27, 43, 0.08);\n}\n.template-badge {\n  display: inline-flex;\n  align-items: center;\n  padding: 7px 12px;\n  border-radius: 999px;\n  background: rgba(13, 124, 134, 0.12);\n  color: #0d7c86;\n  font-weight: 800;\n}\n.template-copy {\n  margin: 0 0 16px;\n  color: #58718a;\n  line-height: 1.7;\n}\n.template-grid {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 12px;\n}\n.template-chip {\n  text-align: left;\n  padding: 16px;\n  border-radius: 20px;\n  border: 1px solid rgba(14, 27, 43, 0.08);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(252, 253, 254, 0.98),\n      rgba(247, 251, 252, 0.98));\n  transition:\n    transform 0.2s ease,\n    border-color 0.2s ease,\n    box-shadow 0.2s ease;\n}\n.template-chip strong {\n  display: block;\n  margin-bottom: 6px;\n  color: #10263c;\n  font-size: 1rem;\n}\n.template-chip span {\n  display: block;\n  color: #58718a;\n  line-height: 1.5;\n  margin-bottom: 10px;\n}\n.template-chip small {\n  display: inline-flex;\n  padding: 6px 10px;\n  border-radius: 999px;\n  background: rgba(13, 124, 134, 0.1);\n  color: #0d7c86;\n  font-weight: 700;\n}\n.template-chip:hover {\n  transform: translateY(-1px);\n  border-color: rgba(13, 124, 134, 0.28);\n  box-shadow: 0 16px 34px rgba(13, 124, 134, 0.1);\n}\n.editor-grid {\n  display: grid;\n  grid-template-columns: minmax(0, 1.2fr) minmax(320px, 0.8fr);\n  gap: 18px;\n  align-items: start;\n}\n.preview-card {\n  align-self: start;\n  position: sticky;\n  top: 90px;\n  max-height: calc(100vh - 120px);\n  overflow-y: auto;\n  scrollbar-width: thin;\n  scrollbar-color: rgba(13, 124, 134, 0.25) transparent;\n}\n.preview-card::-webkit-scrollbar {\n  width: 6px;\n}\n.preview-card::-webkit-scrollbar-thumb {\n  background: rgba(13, 124, 134, 0.2);\n  border-radius: 6px;\n}\n.field {\n  display: grid;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.field.compact {\n  margin-bottom: 12px;\n}\n.field label {\n  font-weight: 700;\n  color: #17324d;\n}\n.modern-input,\n.modern-textarea,\n.modern-select {\n  width: 100%;\n  padding: 10px 14px;\n  border-radius: 12px;\n  border: 1px solid rgba(14, 27, 43, 0.12);\n  background: #ffffff;\n  color: #10263c;\n  font-size: 0.92rem;\n  font-family: inherit;\n  transition: all 0.2s ease;\n  outline: none;\n}\n.modern-input:focus,\n.modern-textarea:focus,\n.modern-select:focus {\n  border-color: #0d7c86;\n  box-shadow: 0 0 0 3px rgba(13, 124, 134, 0.15);\n}\n.modern-textarea {\n  resize: vertical;\n  min-height: 80px;\n  line-height: 1.5;\n}\n.field-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.hint {\n  color: #5d748c;\n}\n.template-toolbar {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 10px;\n}\n.template-btn {\n  flex: 0 0 auto;\n}\n.template-note {\n  color: #6a8096;\n  font-size: 0.92rem;\n}\n.point-list {\n  display: grid;\n  gap: 14px;\n}\n.point-card {\n  border: 1px solid rgba(14, 27, 43, 0.08);\n  border-radius: 22px;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(252, 253, 254, 0.98),\n      rgba(247, 251, 252, 0.98));\n  padding: 16px;\n}\n.point-head {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 14px;\n}\n.point-head span {\n  display: inline-flex;\n  margin-bottom: 4px;\n  color: #0d7c86;\n  font-size: 0.82rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n}\n.point-head strong {\n  display: block;\n  color: #10263c;\n  font-size: 1rem;\n}\n.point-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.btn-app.ghost.danger {\n  color: #ad433e;\n  border-color: rgba(173, 67, 62, 0.2);\n}\n.empty-points {\n  padding: 20px;\n  border: 1px dashed rgba(13, 124, 134, 0.18);\n  border-radius: 20px;\n  background: rgba(255, 255, 255, 0.65);\n  display: grid;\n  gap: 12px;\n  justify-items: start;\n  color: #58718a;\n}\n.actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 18px;\n}\n.status-pill,\n.preview-key {\n  display: inline-flex;\n  align-items: center;\n  padding: 7px 12px;\n  border-radius: 999px;\n  background: rgba(13, 124, 134, 0.12);\n  color: #0d7c86;\n  font-weight: 700;\n  text-transform: capitalize;\n}\n.status-pill.inactive {\n  background: rgba(219, 83, 78, 0.12);\n  color: #ad433e;\n}\n.inline-state {\n  margin: 0 0 14px;\n  padding: 12px 14px;\n  border-radius: 16px;\n  background: rgba(13, 124, 134, 0.08);\n  color: #0d4f56;\n  font-weight: 600;\n}\n.inline-state.error {\n  background: rgba(219, 83, 78, 0.12);\n  color: #ad433e;\n}\n.inline-state.success {\n  background: rgba(31, 173, 93, 0.12);\n  color: #1e6e3e;\n}\n.preview-content {\n  min-height: 520px;\n  padding: 12px 0 0;\n  color: #17324d;\n}\n.preview-outline {\n  margin-bottom: 18px;\n  padding: 16px;\n  border-radius: 20px;\n  border: 1px solid rgba(13, 124, 134, 0.12);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(250, 252, 253, 0.98),\n      rgba(245, 250, 251, 0.98));\n}\n.preview-outline-head {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.preview-outline-head span {\n  font-weight: 800;\n  color: #10263c;\n}\n.preview-outline-head small {\n  color: #6a8096;\n  font-weight: 600;\n}\n.preview-outline-grid {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.preview-outline-chip {\n  display: inline-flex;\n  align-items: center;\n  padding: 7px 10px;\n  border-radius: 999px;\n  background: rgba(13, 124, 134, 0.1);\n  color: #0d7c86;\n  font-weight: 700;\n  font-size: 0.88rem;\n}\n.content-html :where(h1, h2, h3, h4) {\n  margin: 0 0 16px;\n  color: #0f253d;\n}\n.content-html :where(p, ul, ol) {\n  margin: 0 0 14px;\n  line-height: 1.75;\n}\n.content-html :where(ul, ol) {\n  padding-left: 22px;\n}\n.content-html :where(a) {\n  color: #0d7c86;\n  text-decoration: underline;\n}\n.content-html details {\n  position: relative;\n  margin: 0 0 14px;\n  overflow: hidden;\n  border: 1px solid rgba(13, 124, 134, 0.12);\n  border-radius: 18px;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(248, 251, 252, 0.98),\n      rgba(255, 255, 255, 0.98));\n  box-shadow: 0 10px 24px rgba(17, 38, 64, 0.05);\n  transition:\n    transform 0.24s ease,\n    box-shadow 0.24s ease,\n    border-color 0.24s ease,\n    background 0.24s ease;\n}\n.content-html details[open] {\n  border-color: rgba(13, 124, 134, 0.26);\n  background:\n    linear-gradient(\n      180deg,\n      rgb(244, 250, 251),\n      rgb(255, 255, 255));\n  box-shadow: 0 18px 42px rgba(13, 124, 134, 0.12);\n}\n.content-html details:hover {\n  transform: translateY(-1px);\n}\n.content-html summary {\n  list-style: none;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  position: relative;\n  cursor: pointer;\n  padding: 18px 52px 18px 18px;\n  font-weight: 800;\n  color: #10263c;\n  letter-spacing: -0.01em;\n  line-height: 1.35;\n}\n.content-html summary::-webkit-details-marker {\n  display: none;\n}\n.content-html summary::before {\n  content: "";\n  width: 10px;\n  height: 10px;\n  border-radius: 999px;\n  background: #0d7c86;\n  box-shadow: 0 0 0 6px rgba(13, 124, 134, 0.12);\n  flex: 0 0 auto;\n}\n.content-html summary::after {\n  content: "+";\n  position: absolute;\n  top: 50%;\n  right: 18px;\n  transform: translateY(-50%);\n  width: 28px;\n  height: 28px;\n  border-radius: 999px;\n  display: grid;\n  place-items: center;\n  background: rgba(13, 124, 134, 0.12);\n  color: #0d7c86;\n  font-size: 1.2rem;\n  line-height: 1;\n  transition:\n    transform 0.24s ease,\n    background 0.24s ease,\n    color 0.24s ease;\n  flex: 0 0 auto;\n}\n.content-html details[open] summary::after {\n  content: "\\2212";\n  color: #0b5f67;\n  background: rgba(13, 124, 134, 0.18);\n  transform: translateY(-50%) rotate(180deg);\n}\n.content-html details > :not(summary) {\n  margin: 0;\n  padding: 0 18px 18px;\n  color: #365269;\n}\n.content-html details > :not(summary):first-of-type {\n  padding-top: 0;\n}\n@media (max-width: 1100px) {\n  .page-list {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .template-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .editor-grid {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 720px) {\n  .page-list {\n    grid-template-columns: 1fr;\n  }\n  .section-head {\n    flex-direction: column;\n  }\n  .actions {\n    flex-direction: column;\n  }\n  .template-grid {\n    grid-template-columns: 1fr;\n  }\n  .preview-outline-head {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .field-head,\n  .point-head {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .point-actions {\n    width: 100%;\n  }\n}\n.about-builder {\n  margin-top: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.about-tabs-nav {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  padding: 6px;\n  background: rgba(14, 27, 43, 0.04);\n  border-radius: 16px;\n  border: 1px solid rgba(14, 27, 43, 0.06);\n}\n.about-nav-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  border-radius: 12px;\n  background: transparent;\n  border: none;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #4b6279;\n  cursor: pointer;\n  transition: all 0.18s ease;\n}\n.about-nav-btn span {\n  font-size: 1rem;\n}\n.about-nav-btn:hover {\n  background: rgba(255, 255, 255, 0.6);\n  color: #10263c;\n}\n.about-nav-btn.active {\n  background: #ffffff;\n  color: #0d7c86;\n  box-shadow: 0 4px 14px rgba(13, 124, 134, 0.12);\n}\n.about-tab-panel {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  animation: fadeIn 0.2s ease-in;\n}\n.field-grid-2 {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n}\n@media (max-width: 640px) {\n  .field-grid-2 {\n    grid-template-columns: 1fr;\n  }\n}\n.cards-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.team-editor-card .team-preview-badge {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.team-editor-card .team-preview-badge .team-mini-avatar {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 1px solid rgba(13, 124, 134, 0.2);\n}\n.stats-editor-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n}\n@media (max-width: 600px) {\n  .stats-editor-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.stat-editor-card {\n  padding: 14px;\n  border-radius: 16px;\n  background: rgba(248, 250, 252, 0.9);\n  border: 1px solid rgba(14, 27, 43, 0.08);\n  position: relative;\n}\n.stat-editor-card .stat-key-badge {\n  display: inline-block;\n  font-size: 0.68rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #0d7c86;\n  background: rgba(13, 124, 134, 0.1);\n  padding: 3px 8px;\n  border-radius: 6px;\n  margin-bottom: 8px;\n}\n.about-preview-panel {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 6px 0;\n}\n.preview-about-hero {\n  padding: 18px;\n  border-radius: 18px;\n  background:\n    linear-gradient(\n      135deg,\n      #0e2a3a 0%,\n      #16425b 100%);\n  color: #ffffff;\n}\n.preview-about-hero .preview-badge {\n  display: inline-block;\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #38bdf8;\n  margin-bottom: 8px;\n}\n.preview-about-hero h3 {\n  margin: 0 0 6px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  line-height: 1.35;\n  color: #ffffff;\n}\n.preview-about-hero p {\n  margin: 0;\n  font-size: 0.84rem;\n  opacity: 0.85;\n  line-height: 1.5;\n}\n.preview-stats-bar {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 8px;\n  background: rgba(13, 124, 134, 0.06);\n  padding: 12px;\n  border-radius: 16px;\n  border: 1px solid rgba(13, 124, 134, 0.12);\n}\n@media (max-width: 600px) {\n  .preview-stats-bar {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.preview-stats-bar .preview-stat-item {\n  text-align: center;\n}\n.preview-stats-bar .preview-stat-item strong {\n  display: block;\n  font-size: 1.05rem;\n  font-weight: 800;\n  color: #0d7c86;\n}\n.preview-stats-bar .preview-stat-item small {\n  display: block;\n  font-size: 0.68rem;\n  color: #557089;\n  margin-top: 2px;\n}\n.preview-about-section {\n  padding: 14px;\n  border-radius: 16px;\n  background: #f8fafc;\n  border: 1px solid rgba(14, 27, 43, 0.06);\n}\n.preview-about-section h4 {\n  margin: 0 0 8px;\n  font-size: 0.95rem;\n  color: #10263c;\n  font-weight: 700;\n}\n.preview-about-section .preview-story-p {\n  margin: 0 0 8px;\n  font-size: 0.82rem;\n  color: #475569;\n  line-height: 1.55;\n}\n.preview-about-section blockquote {\n  margin: 8px 0 0;\n  padding-left: 10px;\n  border-left: 3px solid #0d7c86;\n  font-style: italic;\n  font-size: 0.82rem;\n  color: #0d7c86;\n}\n.preview-team-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 8px;\n}\n.preview-team-row .preview-team-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 10px 4px 4px;\n  border-radius: 999px;\n  background: #ffffff;\n  border: 1px solid rgba(14, 27, 43, 0.08);\n  font-size: 0.78rem;\n  color: #1e293b;\n  font-weight: 600;\n}\n.preview-team-row .preview-team-pill img {\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n/*# sourceMappingURL=static-pages.component.css.map */\n'] }]
  }], () => [{ type: StaticPagesService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StaticPagesComponent, { className: "StaticPagesComponent", filePath: "src/app/static-pages/static-pages.component.ts", lineNumber: 43 });
})();

// src/app/static-pages/static-pages-module.ts
var routes = [{ path: "", component: StaticPagesComponent }];
var _StaticPagesModule = class _StaticPagesModule {
};
_StaticPagesModule.\u0275fac = function StaticPagesModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StaticPagesModule)();
};
_StaticPagesModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _StaticPagesModule });
_StaticPagesModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, RouterModule.forChild(routes), StaticPagesComponent] });
var StaticPagesModule = _StaticPagesModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StaticPagesModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule.forChild(routes), StaticPagesComponent]
    }]
  }], null, null);
})();
export {
  StaticPagesModule
};
//# sourceMappingURL=static-pages-module-2P2NCABD.js.map
