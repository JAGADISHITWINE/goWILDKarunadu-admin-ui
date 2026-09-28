import {
  MediaService
} from "./chunk-BXPKFK6Z.js";
import {
  TrekList
} from "./chunk-B5I2JPD2.js";
import {
  DropdownManagerService
} from "./chunk-2AIND2RX.js";
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
import {
  AuthService
} from "./chunk-D4XXJJII.js";
import {
  ActivatedRoute,
  CUSTOM_ELEMENTS_SCHEMA,
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  Router,
  RouterModule,
  UpperCasePipe,
  environment,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-KQE4QDNK.js";

// src/app/treks/trek-list/trek-list.component.ts
var _c0 = () => [1, 2, 3, 4];
var _c1 = () => [1, 2, 3, 4, 5, 6];
function TrekListComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "div", 25);
    \u0275\u0275element(3, "i", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 27)(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, "Total Treks");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 24)(10, "div", 28);
    \u0275\u0275element(11, "i", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 27)(13, "h3");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p");
    \u0275\u0275text(16, "Active Treks");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 24)(18, "div", 30);
    \u0275\u0275element(19, "i", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 27)(21, "h3");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p");
    \u0275\u0275text(24, "Draft Treks");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 24)(26, "div", 32);
    \u0275\u0275element(27, "i", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 27)(29, "h3");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p");
    \u0275\u0275text(32, "Active Batches");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.treks.length);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.activeTreksCount);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.draftTreksCount);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.activeCount);
  }
}
function TrekListComponent_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275element(1, "div", 36);
    \u0275\u0275elementStart(2, "div", 37);
    \u0275\u0275element(3, "div", 38)(4, "div", 39);
    \u0275\u0275elementEnd()();
  }
}
function TrekListComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275template(1, TrekListComponent_div_3_div_1_Template, 5, 0, "div", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c0));
  }
}
function TrekListComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function TrekListComponent_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.searchQuery = "";
      return \u0275\u0275resetView(ctx_r0.onFilterChange());
    });
    \u0275\u0275element(1, "i", 41);
    \u0275\u0275elementEnd();
  }
}
function TrekListComponent_div_10_option_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r4 = ctx.$implicit;
    \u0275\u0275property("value", cat_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r4);
  }
}
function TrekListComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "select", 43);
    \u0275\u0275twoWayListener("ngModelChange", function TrekListComponent_div_10_Template_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.selectedCategory, $event) || (ctx_r0.selectedCategory = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function TrekListComponent_div_10_Template_select_ngModelChange_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onFilterChange());
    });
    \u0275\u0275elementStart(2, "option", 44);
    \u0275\u0275text(3, "All Categories");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, TrekListComponent_div_10_option_4_Template, 2, 2, "option", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "i", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.selectedCategory);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.categories);
  }
}
function TrekListComponent_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275listener("click", function TrekListComponent_button_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToAddTrek());
    });
    \u0275\u0275element(1, "i", 49);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Add Trek");
    \u0275\u0275elementEnd()();
  }
}
function TrekListComponent_div_25_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275element(1, "div", 53);
    \u0275\u0275elementStart(2, "div", 54);
    \u0275\u0275element(3, "div", 38)(4, "div", 55)(5, "div", 39);
    \u0275\u0275elementEnd()();
  }
}
function TrekListComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275template(1, TrekListComponent_div_25_div_1_Template, 6, 0, "div", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c1));
  }
}
function TrekListComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56)(1, "div", 57);
    \u0275\u0275element(2, "i", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No Treks Found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "No trek expeditions match your current search or filter criteria.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 59);
    \u0275\u0275listener("click", function TrekListComponent_div_26_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.resetFilters());
    });
    \u0275\u0275element(8, "i", 60);
    \u0275\u0275text(9, " Reset Filters ");
    \u0275\u0275elementEnd()();
  }
}
function TrekListComponent_div_27_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 78);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const trek_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", trek_r8.difficulty, " ");
  }
}
function TrekListComponent_div_27_div_1_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 79);
    \u0275\u0275listener("click", function TrekListComponent_div_27_div_1_button_12_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const trek_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.editTrek(trek_r8.id, $event));
    });
    \u0275\u0275element(1, "i", 80);
    \u0275\u0275elementEnd();
  }
}
function TrekListComponent_div_27_div_1_p_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 81);
    \u0275\u0275element(1, "i", 82);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const trek_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", trek_r8.location, " ");
  }
}
function TrekListComponent_div_27_div_1_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 83);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const trek_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getBatchStatusCount(trek_r8, "inactive"), " Inactive ");
  }
}
function TrekListComponent_div_27_div_1_div_19_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 86);
    \u0275\u0275listener("click", function TrekListComponent_div_27_div_1_div_19_button_1_Template_button_click_0_listener($event) {
      const batch_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r0.viewTrek(batch_r11.id));
    });
    \u0275\u0275element(1, "span", 87);
    \u0275\u0275elementStart(2, "span", 88);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 89);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const batch_r11 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.getBatchStatusLabel(batch_r11));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 4, batch_r11.startDate, "dd MMM yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("\xB7 \u23F1 ", batch_r11.duration, " \xB7 \u20B9", \u0275\u0275pipeBind2(7, 7, batch_r11.price, "1.0-0"));
  }
}
function TrekListComponent_div_27_div_1_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275template(1, TrekListComponent_div_27_div_1_div_19_button_1_Template, 8, 10, "button", 85);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const trek_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.getVisibleBatches(trek_r8));
  }
}
function TrekListComponent_div_27_div_1_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 90)(1, "span", 91);
    \u0275\u0275element(2, "i", 92);
    \u0275\u0275text(3, "No upcoming departure batches");
    \u0275\u0275elementEnd()();
  }
}
function TrekListComponent_div_27_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275listener("click", function TrekListComponent_div_27_div_1_Template_div_click_0_listener() {
      const trek_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.editTrek(trek_r8.id));
    });
    \u0275\u0275elementStart(1, "div", 63);
    \u0275\u0275element(2, "img", 64);
    \u0275\u0275elementStart(3, "span", 65);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "uppercase");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, TrekListComponent_div_27_div_1_span_6_Template, 2, 1, "span", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 54)(8, "div", 67)(9, "h4", 68);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 69);
    \u0275\u0275listener("click", function TrekListComponent_div_27_div_1_Template_div_click_11_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275template(12, TrekListComponent_div_27_div_1_button_12_Template, 2, 0, "button", 70);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, TrekListComponent_div_27_div_1_p_13_Template, 3, 1, "p", 71);
    \u0275\u0275elementStart(14, "div", 72)(15, "span", 73);
    \u0275\u0275element(16, "span", 74);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, TrekListComponent_div_27_div_1_span_18_Template, 2, 1, "span", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, TrekListComponent_div_27_div_1_div_19_Template, 2, 1, "div", 76)(20, TrekListComponent_div_27_div_1_div_20_Template, 4, 0, "div", 77);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const trek_r8 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r0.resolveImageUrl(trek_r8.cover_image, trek_r8.updated_at || trek_r8.created_at), \u0275\u0275sanitizeUrl)("alt", trek_r8.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "status-" + ctx_r0.getStatusColor(trek_r8.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 12, trek_r8.status || "draft"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", trek_r8.difficulty);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(trek_r8.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.authService.hasPermission("treks.manage"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", trek_r8.location);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.getBatchStatusCount(trek_r8, "active"), " Active batches ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getBatchStatusCount(trek_r8, "inactive") > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getVisibleBatches(trek_r8).length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getVisibleBatches(trek_r8).length === 0);
  }
}
function TrekListComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275template(1, TrekListComponent_div_27_div_1_Template, 21, 14, "div", 61);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.visibleTreks);
  }
}
function TrekListComponent_div_28_tr_22_button_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 111);
    \u0275\u0275listener("click", function TrekListComponent_div_28_tr_22_button_31_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const trek_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.editTrek(trek_r13.id, $event));
    });
    \u0275\u0275element(1, "i", 80);
    \u0275\u0275elementEnd();
  }
}
function TrekListComponent_div_28_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 99);
    \u0275\u0275listener("click", function TrekListComponent_div_28_tr_22_Template_tr_click_0_listener() {
      const trek_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.editTrek(trek_r13.id));
    });
    \u0275\u0275elementStart(1, "td")(2, "div", 100);
    \u0275\u0275element(3, "img", 101);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "div", 102)(6, "strong", 68);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 103);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "td")(11, "span", 91);
    \u0275\u0275element(12, "i", 104);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td")(15, "span", 105);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td")(18, "span", 106);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "td")(21, "span", 107)(22, "strong");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, " active ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "td")(26, "span", 65);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "uppercase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "td", 108);
    \u0275\u0275listener("click", function TrekListComponent_div_28_tr_22_Template_td_click_29_listener($event) {
      \u0275\u0275restoreView(_r12);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(30, "div", 109);
    \u0275\u0275template(31, TrekListComponent_div_28_tr_22_button_31_Template, 2, 0, "button", 110);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const trek_r13 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r0.resolveImageUrl(trek_r13.cover_image, trek_r13.updated_at || trek_r13.created_at), \u0275\u0275sanitizeUrl)("alt", trek_r13.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(trek_r13.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", trek_r13.id);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(trek_r13.location || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(trek_r13.category || trek_r13.collection || "General");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", (trek_r13.difficulty || "Moderate").toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", trek_r13.difficulty || "Moderate", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.getBatchStatusCount(trek_r13, "active"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", "status-" + ctx_r0.getStatusColor(trek_r13.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 12, trek_r13.status || "draft"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.authService.hasPermission("treks.manage"));
  }
}
function TrekListComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 93)(1, "div", 94)(2, "table", 95)(3, "thead")(4, "tr")(5, "th", 96);
    \u0275\u0275text(6, "Cover");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Trek Expedition");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Difficulty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Batches");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 97);
    \u0275\u0275text(20, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "tbody");
    \u0275\u0275template(22, TrekListComponent_div_28_tr_22_Template, 32, 14, "tr", 98);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(22);
    \u0275\u0275property("ngForOf", ctx_r0.visibleTreks);
  }
}
function TrekListComponent_div_29_option_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r16 = ctx.$implicit;
    \u0275\u0275property("value", opt_r16);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r16);
  }
}
function TrekListComponent_div_29_ng_container_24_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 126);
    \u0275\u0275text(1, "\u2026");
    \u0275\u0275elementEnd();
  }
}
function TrekListComponent_div_29_ng_container_24_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 127);
    \u0275\u0275listener("click", function TrekListComponent_div_29_ng_container_24_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const p_r18 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goToPage(p_r18));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r18 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", p_r18 === ctx_r0.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r18, " ");
  }
}
function TrekListComponent_div_29_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TrekListComponent_div_29_ng_container_24_span_1_Template, 2, 0, "span", 124)(2, TrekListComponent_div_29_ng_container_24_button_2_Template, 2, 3, "button", 125);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const p_r18 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r18 === "...");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r18 !== "...");
  }
}
function TrekListComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 112)(1, "div", 113)(2, "div", 114);
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
    \u0275\u0275text(12, " expeditions ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 115)(14, "div", 116)(15, "label");
    \u0275\u0275text(16, "Per page:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "select", 117);
    \u0275\u0275twoWayListener("ngModelChange", function TrekListComponent_div_29_Template_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.pageSize, $event) || (ctx_r0.pageSize = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function TrekListComponent_div_29_Template_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onPageSizeChange($event));
    });
    \u0275\u0275template(18, TrekListComponent_div_29_option_18_Template, 2, 2, "option", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 118)(20, "button", 119);
    \u0275\u0275listener("click", function TrekListComponent_div_29_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.prevPage());
    });
    \u0275\u0275element(21, "i", 120);
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23, "Prev");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(24, TrekListComponent_div_29_ng_container_24_Template, 3, 2, "ng-container", 121);
    \u0275\u0275elementStart(25, "button", 122);
    \u0275\u0275listener("click", function TrekListComponent_div_29_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.nextPage());
    });
    \u0275\u0275elementStart(26, "span");
    \u0275\u0275text(27, "Next");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "i", 123);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r0.currentPage - 1) * ctx_r0.Number(ctx_r0.pageSize) + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.Math.min(ctx_r0.currentPage * ctx_r0.Number(ctx_r0.pageSize), ctx_r0.filteredTreks.length));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.filteredTreks.length);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.pageSize);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.pageSizeOptions);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.currentPage === 1);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.visiblePageNumbers);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.currentPage === ctx_r0.totalPages);
  }
}
var _TrekListComponent = class _TrekListComponent {
  constructor(router, route, trekService, authService, media, dropdownService) {
    this.router = router;
    this.route = route;
    this.trekService = trekService;
    this.authService = authService;
    this.media = media;
    this.dropdownService = dropdownService;
    this.Math = Math;
    this.mediaBaseUrl = (environment.mediaBaseUrl || "").replace(/\/?$/, "/");
    this.searchQuery = "";
    this.selectedStatus = "all";
    this.selectedCategory = "all";
    this.viewMode = "grid";
    this.treks = [];
    this.categories = [];
    this.activeCount = 0;
    this.isLoading = true;
    this.Number = Number;
    this.currentPage = 1;
    this.pageSize = 5;
    this.pageSizeOptions = [5, 10, 20, 40];
  }
  ngOnInit() {
    this.loadDropdowns();
    this.route.queryParamMap.subscribe(() => {
      this.loadTreks(true);
    });
  }
  loadDropdowns() {
    this.dropdownService.getGroupOptions("trekCategory").subscribe((opts) => {
      if (opts.length > 0) {
        this.categories = Array.from(/* @__PURE__ */ new Set([...this.categories, ...opts.map((o) => o.label)])).sort();
      }
    });
    this.dropdownService.getGroupOptions("pageSizeOptions").subscribe((opts) => {
      if (opts.length > 0) {
        this.pageSizeOptions = opts.map((o) => Number(o.value || o.label)).filter((n) => !isNaN(n));
      }
    });
  }
  get activeTreksCount() {
    return this.treks.filter((t) => String(t.status || "").toLowerCase() === "active").length;
  }
  get draftTreksCount() {
    return this.treks.filter((t) => String(t.status || "").toLowerCase() === "draft").length;
  }
  get filteredTreks() {
    let list = [...this.treks];
    if (this.selectedStatus !== "all") {
      list = list.filter((t) => String(t.status || "").toLowerCase() === this.selectedStatus);
    }
    if (this.selectedCategory !== "all") {
      list = list.filter((t) => String(t.category || t.collection || "").toLowerCase() === this.selectedCategory.toLowerCase());
    }
    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase();
      list = list.filter((t) => {
        const haystack = [
          t?.name,
          t?.location,
          t?.category,
          t?.collection,
          t?.difficulty,
          t?.fitness_level,
          t?.id
        ].filter(Boolean).map((value) => String(value).toLowerCase()).join(" ");
        return haystack.includes(query);
      });
    }
    return list;
  }
  get totalPages() {
    const size = Number(this.pageSize) || 5;
    return Math.max(1, Math.ceil(this.filteredTreks.length / size));
  }
  get paginatedTreks() {
    const size = Number(this.pageSize) || 5;
    const page = Math.min(Math.max(1, this.currentPage), this.totalPages);
    const start = (page - 1) * size;
    return this.filteredTreks.slice(start, start + size);
  }
  get visibleTreks() {
    return this.paginatedTreks;
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
  onFilterChange() {
    this.currentPage = 1;
  }
  getTotalRevenue(trek) {
    return (trek.activeBookings || 0) * (trek.price || 0);
  }
  get totalActiveBookings() {
    return this.treks?.reduce((sum, t) => sum + (t.activeBookings || 0), 0) || 0;
  }
  loadTreks(forceRefresh = false) {
    this.isLoading = true;
    this.trekService.getAllTreks(forceRefresh).subscribe({
      next: (res) => {
        this.treks = res.data?.result || [];
        this.activeCount = res.data?.activeTrekCount || 0;
        this.extractCategories();
        this.isLoading = false;
      },
      error: () => {
        this.treks = [];
        this.activeCount = 0;
        this.isLoading = false;
      }
    });
  }
  extractCategories() {
    const set = /* @__PURE__ */ new Set();
    this.treks.forEach((t) => {
      if (t.category)
        set.add(t.category);
      if (t.collection)
        set.add(t.collection);
    });
    this.categories = Array.from(set).sort();
  }
  resolveImageUrl(imagePath, cacheKey) {
    return this.media.resolve(imagePath || null, cacheKey);
  }
  getVisibleBatches(trek) {
    const rows = Array.isArray(trek?.batches) ? trek.batches : [];
    if (rows.length === 0)
      return [];
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    return rows.filter((batch) => {
      const status = String(batch?.status || batch?.batchStatus || "").toLowerCase();
      if (status !== "active" && status !== "inactive")
        return false;
      const start = batch?.startDate ? new Date(batch.startDate) : null;
      if (!start || Number.isNaN(start.getTime()))
        return true;
      start.setHours(0, 0, 0, 0);
      return start >= today;
    });
  }
  getBatchStatusCount(trek, targetStatus) {
    const rows = this.getVisibleBatches(trek);
    return rows.filter((batch) => {
      const status = String(batch?.status || batch?.batchStatus || "").toLowerCase();
      return status === targetStatus;
    }).length;
  }
  getBatchStatusLabel(batch) {
    return String(batch?.status || batch?.batchStatus || "").toLowerCase() || "inactive";
  }
  getStatusColor(status) {
    const s = String(status || "").toLowerCase();
    switch (s) {
      case "active":
        return "success";
      case "draft":
        return "warning";
      case "inactive":
        return "medium";
      default:
        return "primary";
    }
  }
  resetFilters() {
    this.searchQuery = "";
    this.selectedStatus = "all";
    this.selectedCategory = "all";
    this.currentPage = 1;
  }
  viewTrek(id) {
    if (!id)
      return;
    this.router.navigate(["/admin/trek-details", id]);
  }
  editTrek(id, event) {
    if (event)
      event.stopPropagation();
    if (!String(id || "").trim())
      return;
    this.router.navigate([`/admin/treks/edit/${id}`]);
  }
  goToAddTrek() {
    this.router.navigate(["/admin/treks/add"]);
  }
};
_TrekListComponent.\u0275fac = function TrekListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TrekListComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(TrekList), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(MediaService), \u0275\u0275directiveInject(DropdownManagerService));
};
_TrekListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TrekListComponent, selectors: [["app-trek-list"]], decls: 30, vars: 21, consts: [[1, "treks-page"], ["sectionLabel", "Treks", "title", "Trek Expeditions", "subtitle", "Browse expeditions, manage active departure batches, and configure trek packages."], ["class", "trek-summary", 4, "ngIf"], [1, "trek-toolbar-card"], [1, "toolbar-left"], [1, "search-input-wrap"], [1, "bi", "bi-search"], ["type", "text", "placeholder", "Search by trek name, location, difficulty, category...", 3, "ngModelChange", "ngModel"], ["type", "button", "class", "clear-btn", "title", "Clear search", 3, "click", 4, "ngIf"], ["class", "filter-select", 4, "ngIf"], [1, "status-chips"], ["type", "button", 1, "status-chip", 3, "click"], [1, "toolbar-right"], [1, "view-toggle"], ["type", "button", "title", "Grid view", 1, "toggle-btn", 3, "click"], [1, "bi", "bi-grid-fill"], ["type", "button", "title", "Table view", 1, "toggle-btn", 3, "click"], [1, "bi", "bi-list-ul"], ["class", "btn-app primary", "type", "button", 3, "click", 4, "ngIf"], ["class", "trek-grid", 4, "ngIf"], ["class", "empty-state surface-card", 4, "ngIf"], ["class", "table-shell", 4, "ngIf"], ["class", "pagination-shell", 4, "ngIf"], [1, "trek-summary"], [1, "summary-card"], [1, "summary-icon", "tone-primary"], [1, "bi", "bi-map-fill"], [1, "summary-copy"], [1, "summary-icon", "tone-success"], [1, "bi", "bi-check-circle-fill"], [1, "summary-icon", "tone-warning"], [1, "bi", "bi-file-earmark-text-fill"], [1, "summary-icon", "tone-secondary"], [1, "bi", "bi-calendar-range-fill"], ["class", "summary-card skeleton-card", 4, "ngFor", "ngForOf"], [1, "summary-card", "skeleton-card"], [1, "skeleton-icon", "shimmer"], [1, "skeleton-copy"], [1, "skeleton-line", "lg", "shimmer"], [1, "skeleton-line", "sm", "shimmer"], ["type", "button", "title", "Clear search", 1, "clear-btn", 3, "click"], [1, "bi", "bi-x-circle-fill"], [1, "filter-select"], ["aria-label", "Filter by category", 3, "ngModelChange", "ngModel"], ["value", "all"], [3, "value", 4, "ngFor", "ngForOf"], [1, "bi", "bi-chevron-down", "select-arrow"], [3, "value"], ["type", "button", 1, "btn-app", "primary", 3, "click"], [1, "bi", "bi-plus-circle"], [1, "trek-grid"], ["class", "trek-card skeleton-card", 4, "ngFor", "ngForOf"], [1, "trek-card", "skeleton-card"], [1, "skeleton-cover", "shimmer"], [1, "trek-body"], [1, "skeleton-line", "md", "shimmer"], [1, "empty-state", "surface-card"], [1, "empty-icon"], [1, "bi", "bi-compass"], ["type", "button", 1, "btn-app", "ghost", 3, "click"], [1, "bi", "bi-arrow-counterclockwise"], ["class", "trek-card", 3, "click", 4, "ngFor", "ngForOf"], [1, "trek-card", 3, "click"], [1, "trek-cover"], ["loading", "lazy", "decoding", "async", 3, "src", "alt"], [1, "status-pill", 3, "ngClass"], ["class", "difficulty-tag", 4, "ngIf"], [1, "trek-top"], [1, "trek-title"], [1, "card-actions", 3, "click"], ["class", "icon-btn subtle", "title", "Edit trek settings", 3, "click", 4, "ngIf"], ["class", "trek-location", 4, "ngIf"], [1, "batch-count-bar"], [1, "count-badge", "active"], [1, "dot", "dot-success"], ["class", "count-badge inactive", 4, "ngIf"], ["class", "batch-pills", 4, "ngIf"], ["class", "batch-pills-empty", 4, "ngIf"], [1, "difficulty-tag"], ["title", "Edit trek settings", 1, "icon-btn", "subtle", 3, "click"], [1, "bi", "bi-pencil"], [1, "trek-location"], [1, "bi", "bi-geo-alt-fill", "text-accent"], [1, "count-badge", "inactive"], [1, "batch-pills"], ["type", "button", "class", "batch-chip", "title", "View batch details", 3, "click", 4, "ngFor", "ngForOf"], ["type", "button", "title", "View batch details", 1, "batch-chip", 3, "click"], [1, "batch-status-dot", 3, "ngClass"], [1, "batch-date"], [1, "batch-meta"], [1, "batch-pills-empty"], [1, "text-muted", "small"], [1, "bi", "bi-info-circle", "me-1"], [1, "table-shell"], [1, "table-wrap"], [1, "trek-table"], [2, "width", "70px"], [1, "text-end"], ["class", "clickable-row", 3, "click", 4, "ngFor", "ngForOf"], [1, "clickable-row", 3, "click"], [1, "table-thumb"], ["loading", "lazy", 3, "src", "alt"], [1, "cell-stack"], [1, "text-muted", "small", "mono"], [1, "bi", "bi-geo-alt", "me-1"], [1, "category-tag"], [1, "difficulty-badge", 3, "ngClass"], [1, "batch-indicator"], [1, "text-end", 3, "click"], [1, "d-flex", "justify-content-end", "gap-1"], ["class", "icon-btn subtle", "title", "Edit trek", 3, "click", 4, "ngIf"], ["title", "Edit trek", 1, "icon-btn", "subtle", 3, "click"], [1, "pagination-shell"], [1, "pagination-inner"], [1, "pagination-info"], [1, "pagination-controls"], [1, "page-size-selector"], [1, "pagination-select", 3, "ngModelChange", "ngModel"], [1, "page-actions"], ["type", "button", "title", "Previous Page", 1, "page-nav-btn", 3, "click", "disabled"], [1, "bi", "bi-chevron-left"], [4, "ngFor", "ngForOf"], ["type", "button", "title", "Next Page", 1, "page-nav-btn", 3, "click", "disabled"], [1, "bi", "bi-chevron-right"], ["class", "page-ellipsis", 4, "ngIf"], ["class", "page-btn", "type", "button", 3, "active", "click", 4, "ngIf"], [1, "page-ellipsis"], ["type", "button", 1, "page-btn", 3, "click"]], template: function TrekListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "app-admin-shell", 1);
    \u0275\u0275template(2, TrekListComponent_div_2_Template, 33, 4, "div", 2)(3, TrekListComponent_div_3_Template, 2, 2, "div", 2);
    \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "div", 5);
    \u0275\u0275element(7, "i", 6);
    \u0275\u0275elementStart(8, "input", 7);
    \u0275\u0275twoWayListener("ngModelChange", function TrekListComponent_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function TrekListComponent_Template_input_ngModelChange_8_listener() {
      return ctx.onFilterChange();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, TrekListComponent_button_9_Template, 2, 0, "button", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, TrekListComponent_div_10_Template, 6, 2, "div", 9);
    \u0275\u0275elementStart(11, "div", 10)(12, "button", 11);
    \u0275\u0275listener("click", function TrekListComponent_Template_button_click_12_listener() {
      ctx.selectedStatus = "all";
      return ctx.onFilterChange();
    });
    \u0275\u0275text(13, " All ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 11);
    \u0275\u0275listener("click", function TrekListComponent_Template_button_click_14_listener() {
      ctx.selectedStatus = "active";
      return ctx.onFilterChange();
    });
    \u0275\u0275text(15, " Active ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 11);
    \u0275\u0275listener("click", function TrekListComponent_Template_button_click_16_listener() {
      ctx.selectedStatus = "draft";
      return ctx.onFilterChange();
    });
    \u0275\u0275text(17, " Draft ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 12)(19, "div", 13)(20, "button", 14);
    \u0275\u0275listener("click", function TrekListComponent_Template_button_click_20_listener() {
      return ctx.viewMode = "grid";
    });
    \u0275\u0275element(21, "i", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 16);
    \u0275\u0275listener("click", function TrekListComponent_Template_button_click_22_listener() {
      return ctx.viewMode = "table";
    });
    \u0275\u0275element(23, "i", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(24, TrekListComponent_button_24_Template, 4, 0, "button", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(25, TrekListComponent_div_25_Template, 2, 2, "div", 19)(26, TrekListComponent_div_26_Template, 10, 0, "div", 20)(27, TrekListComponent_div_27_Template, 2, 1, "div", 19)(28, TrekListComponent_div_28_Template, 23, 1, "div", 21)(29, TrekListComponent_div_29_Template, 29, 8, "div", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isLoading);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.searchQuery);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.categories.length > 0);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx.selectedStatus === "all");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx.selectedStatus === "active");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx.selectedStatus === "draft");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx.viewMode === "grid");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx.viewMode === "table");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.authService.hasPermission("treks.manage"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isLoading && ctx.viewMode === "grid");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isLoading && ctx.visibleTreks.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isLoading && ctx.viewMode === "grid" && ctx.visibleTreks.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isLoading && ctx.viewMode === "table" && ctx.visibleTreks.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isLoading && ctx.filteredTreks.length > 0);
  }
}, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, AdminShellComponent, UpperCasePipe, DecimalPipe, DatePipe], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.treks-page[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: -400px 0;\n  }\n  100% {\n    background-position: 400px 0;\n  }\n}\n.shimmer[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      rgba(0, 0, 0, 0.04) 25%,\n      rgba(0, 0, 0, 0.09) 50%,\n      rgba(0, 0, 0, 0.04) 75%);\n  background-size: 800px 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.5s infinite linear;\n  border-radius: 6px;\n}\n.skeleton-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  flex-shrink: 0;\n}\n.skeleton-cover[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 190px;\n}\n.skeleton-line[_ngcontent-%COMP%] {\n  height: 14px;\n  border-radius: 4px;\n}\n.skeleton-line.sm[_ngcontent-%COMP%] {\n  width: 64px;\n}\n.skeleton-line.md[_ngcontent-%COMP%] {\n  width: 120px;\n}\n.skeleton-line.lg[_ngcontent-%COMP%] {\n  width: 180px;\n}\n.trek-summary[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.summary-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: var(--app-radius, 14px);\n  padding: 16px 18px;\n  box-shadow: var(--app-shadow-soft, 0 2px 8px rgba(0, 0, 0, 0.04));\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  transition: transform 0.15s ease, box-shadow 0.15s ease;\n}\n.summary-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--app-shadow, 0 4px 14px rgba(0, 0, 0, 0.08));\n}\n.summary-card[_ngcontent-%COMP%]   .summary-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.25rem;\n  flex-shrink: 0;\n}\n.summary-card[_ngcontent-%COMP%]   .summary-icon.tone-primary[_ngcontent-%COMP%] {\n  background: rgba(29, 122, 109, 0.12);\n  color: var(--app-accent, #1d7a6d);\n}\n.summary-card[_ngcontent-%COMP%]   .summary-icon.tone-success[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #10b981;\n}\n.summary-card[_ngcontent-%COMP%]   .summary-icon.tone-warning[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #f59e0b;\n}\n.summary-card[_ngcontent-%COMP%]   .summary-icon.tone-secondary[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #3b82f6;\n}\n.summary-card[_ngcontent-%COMP%]   .summary-copy[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.summary-card[_ngcontent-%COMP%]   .summary-copy[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.45rem;\n  font-weight: 800;\n  color: var(--app-ink, #111827);\n  line-height: 1.2;\n}\n.summary-card[_ngcontent-%COMP%]   .summary-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 2px 0 0;\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: var(--app-ink-muted, #6b7280);\n}\n.trek-toolbar-card[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n  background: #fff;\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: var(--app-radius, 14px);\n  padding: 12px 16px;\n  margin-bottom: 20px;\n  box-shadow: var(--app-shadow-soft, 0 2px 8px rgba(0, 0, 0, 0.04));\n  flex-wrap: wrap;\n}\n.toolbar-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex: 1 1 300px;\n  flex-wrap: wrap;\n}\n.search-input-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--app-surface, #f9fafb);\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: 10px;\n  padding: 8px 12px;\n  flex: 1 1 220px;\n  min-width: 200px;\n  transition: all 0.15s ease;\n}\n.search-input-wrap[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--app-accent, #1d7a6d);\n  box-shadow: 0 0 0 3px rgba(29, 122, 109, 0.12);\n  background: #fff;\n}\n.search-input-wrap[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--app-ink-muted, #9ca3af);\n  font-size: 0.9rem;\n  flex-shrink: 0;\n}\n.search-input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  flex: 1;\n  background: transparent;\n  font-size: 0.88rem;\n  color: var(--app-ink, #111827);\n}\n.search-input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--app-ink-muted, #9ca3af);\n}\n.search-input-wrap[_ngcontent-%COMP%]   .clear-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: #9ca3af;\n  padding: 0;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n}\n.search-input-wrap[_ngcontent-%COMP%]   .clear-btn[_ngcontent-%COMP%]:hover {\n  color: #111827;\n}\n.filter-select[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.filter-select[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  appearance: none;\n  -webkit-appearance: none;\n  background: var(--app-surface, #f9fafb);\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: 10px;\n  padding: 8px 30px 8px 12px;\n  font-size: 0.84rem;\n  font-weight: 500;\n  color: var(--app-ink, #374151);\n  cursor: pointer;\n  outline: none;\n  transition: all 0.15s ease;\n}\n.filter-select[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:hover {\n  border-color: #cbd5e1;\n}\n.filter-select[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: var(--app-accent, #1d7a6d);\n  background: #fff;\n}\n.filter-select[_ngcontent-%COMP%]   .select-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  pointer-events: none;\n  color: #6b7280;\n  font-size: 0.72rem;\n}\n.status-chips[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  align-items: center;\n}\n.status-chip[_ngcontent-%COMP%] {\n  background: var(--app-surface, #f3f4f6);\n  border: 1px solid var(--app-border, #e5e7eb);\n  color: var(--app-ink, #4b5563);\n  font-size: 0.78rem;\n  font-weight: 600;\n  padding: 5px 12px;\n  border-radius: 999px;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.status-chip[_ngcontent-%COMP%]:hover {\n  border-color: #cbd5e1;\n  color: #111827;\n}\n.status-chip.active[_ngcontent-%COMP%] {\n  background: var(--app-accent, #1d7a6d);\n  border-color: var(--app-accent, #1d7a6d);\n  color: #fff;\n}\n.toolbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-left: auto;\n}\n.view-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  background: var(--app-surface, #f3f4f6);\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: 10px;\n  padding: 3px;\n}\n.view-toggle[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  padding: 5px 9px;\n  border-radius: 7px;\n  font-size: 0.9rem;\n  color: var(--app-ink-muted, #6b7280);\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.view-toggle[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%]:hover {\n  color: #111827;\n}\n.view-toggle[_ngcontent-%COMP%]   .toggle-btn.active[_ngcontent-%COMP%] {\n  background: #fff;\n  color: var(--app-accent, #1d7a6d);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.trek-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.trek-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: var(--app-radius, 16px);\n  overflow: hidden;\n  box-shadow: var(--app-shadow-soft, 0 2px 8px rgba(0, 0, 0, 0.04));\n  display: flex;\n  flex-direction: column;\n  cursor: pointer;\n  transition:\n    transform 0.2s cubic-bezier(0.16, 1, 0.3, 1),\n    box-shadow 0.2s cubic-bezier(0.16, 1, 0.3, 1),\n    border-color 0.2s ease;\n}\n.trek-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: var(--app-shadow, 0 8px 20px rgba(0, 0, 0, 0.09));\n  border-color: #cbd5e1;\n}\n.trek-card[_ngcontent-%COMP%]:hover   .trek-cover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.04);\n}\n.trek-cover[_ngcontent-%COMP%] {\n  position: relative;\n  height: 190px;\n  overflow: hidden;\n  background: #f1f5f9;\n}\n.trek-cover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s ease;\n}\n.trek-cover[_ngcontent-%COMP%]   .status-pill[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  padding: 4px 10px;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.03em;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.trek-cover[_ngcontent-%COMP%]   .difficulty-tag[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 12px;\n  left: 12px;\n  background: rgba(17, 24, 39, 0.75);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  color: #fff;\n  font-size: 0.72rem;\n  font-weight: 600;\n  padding: 3px 8px;\n  border-radius: 6px;\n}\n.status-pill.status-success[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.9);\n  color: #fff;\n}\n.status-pill.status-warning[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.9);\n  color: #fff;\n}\n.status-pill.status-medium[_ngcontent-%COMP%] {\n  background: rgba(107, 114, 128, 0.9);\n  color: #fff;\n}\n.status-pill.status-primary[_ngcontent-%COMP%] {\n  background: rgba(29, 122, 109, 0.9);\n  color: #fff;\n}\n.trek-body[_ngcontent-%COMP%] {\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  flex: 1;\n}\n.trek-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 10px;\n}\n.trek-top[_ngcontent-%COMP%]   .trek-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: var(--app-ink, #111827);\n  line-height: 1.3;\n}\n.trek-location[_ngcontent-%COMP%] {\n  color: var(--app-ink-muted, #4b5563);\n  font-size: 0.82rem;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.batch-count-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.batch-count-bar[_ngcontent-%COMP%]   .count-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  padding: 2px 8px;\n  border-radius: 6px;\n}\n.batch-count-bar[_ngcontent-%COMP%]   .count-badge.active[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #065f46;\n  border: 1px solid #a7f3d0;\n}\n.batch-count-bar[_ngcontent-%COMP%]   .count-badge.inactive[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #4b5563;\n}\n.batch-count-bar[_ngcontent-%COMP%]   .count-badge[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n}\n.batch-count-bar[_ngcontent-%COMP%]   .count-badge[_ngcontent-%COMP%]   .dot.dot-success[_ngcontent-%COMP%] {\n  background: #10b981;\n}\n.batch-pills[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-top: 4px;\n}\n.batch-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: var(--app-surface, #f9fafb);\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: 8px;\n  padding: 6px 10px;\n  font-size: 0.76rem;\n  color: var(--app-ink, #374151);\n  text-align: left;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.batch-chip[_ngcontent-%COMP%]:hover {\n  background: rgba(29, 122, 109, 0.08);\n  border-color: rgba(29, 122, 109, 0.25);\n  color: var(--app-accent, #1d7a6d);\n}\n.batch-chip[_ngcontent-%COMP%]   .batch-status-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.batch-chip[_ngcontent-%COMP%]   .batch-status-dot.active[_ngcontent-%COMP%] {\n  background: #10b981;\n}\n.batch-chip[_ngcontent-%COMP%]   .batch-status-dot.inactive[_ngcontent-%COMP%] {\n  background: #9ca3af;\n}\n.batch-chip[_ngcontent-%COMP%]   .batch-date[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.batch-chip[_ngcontent-%COMP%]   .batch-meta[_ngcontent-%COMP%] {\n  color: var(--app-ink-muted, #6b7280);\n}\n.batch-pills-empty[_ngcontent-%COMP%] {\n  padding: 6px 0;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  border: 1px solid var(--app-border, #e5e7eb);\n  background: #fff;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: var(--app-ink, #374151);\n  transition: all 0.15s ease;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: var(--app-surface, #f3f4f6);\n  color: var(--app-accent, #1d7a6d);\n}\n.icon-btn.subtle[_ngcontent-%COMP%] {\n  border: 1px solid transparent;\n  background: transparent;\n  color: var(--app-ink-muted, #6b7280);\n}\n.icon-btn.subtle[_ngcontent-%COMP%]:hover {\n  background: var(--app-surface, #f3f4f6);\n  color: var(--app-ink, #111827);\n}\n.table-shell[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: var(--app-radius, 14px);\n  box-shadow: var(--app-shadow-soft, 0 2px 8px rgba(0, 0, 0, 0.04));\n  overflow: hidden;\n  margin-bottom: 24px;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.trek-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.88rem;\n  text-align: left;\n}\n.trek-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--app-surface, #f9fafb);\n  color: var(--app-ink-muted, #4b5563);\n  font-weight: 700;\n  font-size: 0.76rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  padding: 12px 14px;\n  border-bottom: 1px solid var(--app-border, #e5e7eb);\n  white-space: nowrap;\n}\n.trek-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--app-border, #f1f5f9);\n  transition: background-color 0.15s ease;\n}\n.trek-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.trek-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.clickable-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.trek-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.clickable-row[_ngcontent-%COMP%]:hover {\n  background-color: rgba(29, 122, 109, 0.03);\n}\n.trek-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  vertical-align: middle;\n}\n.table-thumb[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 8px;\n  overflow: hidden;\n  background: #f1f5f9;\n}\n.table-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.category-tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #f3f4f6;\n  padding: 3px 8px;\n  border-radius: 6px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #374151;\n}\n.difficulty-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 8px;\n  border-radius: 6px;\n  font-size: 0.74rem;\n  font-weight: 700;\n}\n.difficulty-badge.easy[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.difficulty-badge.moderate[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.difficulty-badge.difficult[_ngcontent-%COMP%], \n.difficulty-badge.hard[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.batch-indicator[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #4b5563;\n}\n.batch-indicator[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--app-accent, #1d7a6d);\n  font-weight: 700;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px 24px;\n  background: #fff;\n  border: 1px dashed var(--app-border, #cbd5e1);\n  border-radius: var(--app-radius, 14px);\n  margin-bottom: 24px;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  margin: 0 auto 16px;\n  border-radius: 50%;\n  background: rgba(29, 122, 109, 0.08);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: var(--app-accent, #1d7a6d);\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 6px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: var(--app-ink, #111827);\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 20px;\n  font-size: 0.9rem;\n  color: var(--app-ink-muted, #6b7280);\n}\n@media (max-width: 1024px) {\n  .trek-summary[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .trek-summary[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 10px;\n  }\n  .trek-toolbar-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .trek-toolbar-card[_ngcontent-%COMP%]   .toolbar-left[_ngcontent-%COMP%], \n   .trek-toolbar-card[_ngcontent-%COMP%]   .toolbar-right[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .trek-toolbar-card[_ngcontent-%COMP%]   .toolbar-right[_ngcontent-%COMP%] {\n    justify-content: space-between;\n  }\n  .search-input-wrap[_ngcontent-%COMP%] {\n    width: 100%;\n    flex: 1 1 100%;\n  }\n  .filter-select[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .filter-select[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .trek-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 480px) {\n  .trek-cover[_ngcontent-%COMP%] {\n    height: 160px;\n  }\n  .trek-body[_ngcontent-%COMP%] {\n    padding: 14px;\n  }\n}\n/*# sourceMappingURL=trek-list.component.css.map */'] });
var TrekListComponent = _TrekListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrekListComponent, [{
    type: Component,
    args: [{ selector: "app-trek-list", standalone: true, imports: [CommonModule, FormsModule, AdminShellComponent], schemas: [CUSTOM_ELEMENTS_SCHEMA], template: `<div class="treks-page">
  <app-admin-shell
    sectionLabel="Treks"
    title="Trek Expeditions"
    subtitle="Browse expeditions, manage active departure batches, and configure trek packages.">

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 STATS SUMMARY \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <div class="trek-summary" *ngIf="!isLoading">
      <div class="summary-card">
        <div class="summary-icon tone-primary">
          <i class="bi bi-map-fill"></i>
        </div>
        <div class="summary-copy">
          <h3>{{ treks.length }}</h3>
          <p>Total Treks</p>
        </div>
      </div>

      <div class="summary-card">
        <div class="summary-icon tone-success">
          <i class="bi bi-check-circle-fill"></i>
        </div>
        <div class="summary-copy">
          <h3>{{ activeTreksCount }}</h3>
          <p>Active Treks</p>
        </div>
      </div>

      <div class="summary-card">
        <div class="summary-icon tone-warning">
          <i class="bi bi-file-earmark-text-fill"></i>
        </div>
        <div class="summary-copy">
          <h3>{{ draftTreksCount }}</h3>
          <p>Draft Treks</p>
        </div>
      </div>

      <div class="summary-card">
        <div class="summary-icon tone-secondary">
          <i class="bi bi-calendar-range-fill"></i>
        </div>
        <div class="summary-copy">
          <h3>{{ activeCount }}</h3>
          <p>Active Batches</p>
        </div>
      </div>
    </div>

    <!-- Skeleton Summary -->
    <div class="trek-summary" *ngIf="isLoading">
      <div class="summary-card skeleton-card" *ngFor="let i of [1,2,3,4]">
        <div class="skeleton-icon shimmer"></div>
        <div class="skeleton-copy">
          <div class="skeleton-line lg shimmer"></div>
          <div class="skeleton-line sm shimmer"></div>
        </div>
      </div>
    </div>

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 TOOLBAR & FILTERS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <div class="trek-toolbar-card">
      <div class="toolbar-left">
        <div class="search-input-wrap">
          <i class="bi bi-search"></i>
          <input
            type="text"
            [(ngModel)]="searchQuery"
            (ngModelChange)="onFilterChange()"
            placeholder="Search by trek name, location, difficulty, category..." />
          <button
            type="button"
            class="clear-btn"
            *ngIf="searchQuery"
            (click)="searchQuery = ''; onFilterChange()"
            title="Clear search">
            <i class="bi bi-x-circle-fill"></i>
          </button>
        </div>

        <div class="filter-select" *ngIf="categories.length > 0">
          <select [(ngModel)]="selectedCategory" (ngModelChange)="onFilterChange()" aria-label="Filter by category">
            <option value="all">All Categories</option>
            <option *ngFor="let cat of categories" [value]="cat">{{ cat }}</option>
          </select>
          <i class="bi bi-chevron-down select-arrow"></i>
        </div>

        <div class="status-chips">
          <button
            type="button"
            class="status-chip"
            [class.active]="selectedStatus === 'all'"
            (click)="selectedStatus = 'all'; onFilterChange()">
            All
          </button>
          <button
            type="button"
            class="status-chip"
            [class.active]="selectedStatus === 'active'"
            (click)="selectedStatus = 'active'; onFilterChange()">
            Active
          </button>
          <button
            type="button"
            class="status-chip"
            [class.active]="selectedStatus === 'draft'"
            (click)="selectedStatus = 'draft'; onFilterChange()">
            Draft
          </button>
        </div>
      </div>

      <div class="toolbar-right">
        <div class="view-toggle">
          <button
            type="button"
            class="toggle-btn"
            [class.active]="viewMode === 'grid'"
            (click)="viewMode = 'grid'"
            title="Grid view">
            <i class="bi bi-grid-fill"></i>
          </button>
          <button
            type="button"
            class="toggle-btn"
            [class.active]="viewMode === 'table'"
            (click)="viewMode = 'table'"
            title="Table view">
            <i class="bi bi-list-ul"></i>
          </button>
        </div>

        <button
          *ngIf="authService.hasPermission('treks.manage')"
          class="btn-app primary"
          (click)="goToAddTrek()"
          type="button">
          <i class="bi bi-plus-circle"></i>
          <span>Add Trek</span>
        </button>
      </div>
    </div>

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 LOADING SKELETON (GRID) \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <div class="trek-grid" *ngIf="isLoading && viewMode === 'grid'">
      <div class="trek-card skeleton-card" *ngFor="let i of [1,2,3,4,5,6]">
        <div class="skeleton-cover shimmer"></div>
        <div class="trek-body">
          <div class="skeleton-line lg shimmer"></div>
          <div class="skeleton-line md shimmer"></div>
          <div class="skeleton-line sm shimmer"></div>
        </div>
      </div>
    </div>

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 EMPTY STATE \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <div *ngIf="!isLoading && visibleTreks.length === 0" class="empty-state surface-card">
      <div class="empty-icon">
        <i class="bi bi-compass"></i>
      </div>
      <h3>No Treks Found</h3>
      <p>No trek expeditions match your current search or filter criteria.</p>
      <button class="btn-app ghost" type="button" (click)="resetFilters()">
        <i class="bi bi-arrow-counterclockwise"></i> Reset Filters
      </button>
    </div>

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 GRID VIEW \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <div class="trek-grid" *ngIf="!isLoading && viewMode === 'grid' && visibleTreks.length > 0">
      <div
        class="trek-card"
        *ngFor="let trek of visibleTreks"
        (click)="editTrek(trek.id)">
        <div class="trek-cover">
          <img
            loading="lazy"
            decoding="async"
            [src]="resolveImageUrl(trek.cover_image, trek.updated_at || trek.created_at)"
            [alt]="trek.name" />
          <span
            class="status-pill"
            [ngClass]="'status-' + getStatusColor(trek.status)">
            {{ (trek.status || 'draft') | uppercase }}
          </span>
          <span class="difficulty-tag" *ngIf="trek.difficulty">
            {{ trek.difficulty }}
          </span>
        </div>

        <div class="trek-body">
          <div class="trek-top">
            <h4 class="trek-title">{{ trek.name }}</h4>
            <div class="card-actions" (click)="$event.stopPropagation()">
              <button
                *ngIf="authService.hasPermission('treks.manage')"
                class="icon-btn subtle"
                (click)="editTrek(trek.id, $event)"
                title="Edit trek settings">
                <i class="bi bi-pencil"></i>
              </button>
            </div>
          </div>

          <p class="trek-location" *ngIf="trek.location">
            <i class="bi bi-geo-alt-fill text-accent"></i> {{ trek.location }}
          </p>

          <div class="batch-count-bar">
            <span class="count-badge active">
              <span class="dot dot-success"></span>
              {{ getBatchStatusCount(trek, 'active') }} Active batches
            </span>
            <span class="count-badge inactive" *ngIf="getBatchStatusCount(trek, 'inactive') > 0">
              {{ getBatchStatusCount(trek, 'inactive') }} Inactive
            </span>
          </div>

          <div class="batch-pills" *ngIf="getVisibleBatches(trek).length > 0">
            <button
              type="button"
              class="batch-chip"
              *ngFor="let batch of getVisibleBatches(trek)"
              (click)="$event.stopPropagation(); viewTrek(batch.id)"
              title="View batch details">
              <span class="batch-status-dot" [ngClass]="getBatchStatusLabel(batch)"></span>
              <span class="batch-date">{{ batch.startDate | date: 'dd MMM yyyy' }}</span>
              <span class="batch-meta">\xB7 \u23F1 {{ batch.duration }} \xB7 \u20B9{{ batch.price | number:'1.0-0' }}</span>
            </button>
          </div>

          <div class="batch-pills-empty" *ngIf="getVisibleBatches(trek).length === 0">
            <span class="text-muted small"><i class="bi bi-info-circle me-1"></i>No upcoming departure batches</span>
          </div>
        </div>
      </div>
    </div>

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 TABLE VIEW \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <div class="table-shell" *ngIf="!isLoading && viewMode === 'table' && visibleTreks.length > 0">
      <div class="table-wrap">
        <table class="trek-table">
          <thead>
            <tr>
              <th style="width: 70px;">Cover</th>
              <th>Trek Expedition</th>
              <th>Location</th>
              <th>Category</th>
              <th>Difficulty</th>
              <th>Batches</th>
              <th>Status</th>
              <th class="text-end">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr
              *ngFor="let trek of visibleTreks"
              class="clickable-row"
              (click)="editTrek(trek.id)">
              <td>
                <div class="table-thumb">
                  <img
                    loading="lazy"
                    [src]="resolveImageUrl(trek.cover_image, trek.updated_at || trek.created_at)"
                    [alt]="trek.name" />
                </div>
              </td>
              <td>
                <div class="cell-stack">
                  <strong class="trek-title">{{ trek.name }}</strong>
                  <span class="text-muted small mono">#{{ trek.id }}</span>
                </div>
              </td>
              <td>
                <span class="text-muted small"><i class="bi bi-geo-alt me-1"></i>{{ trek.location || '\u2014' }}</span>
              </td>
              <td>
                <span class="category-tag">{{ trek.category || trek.collection || 'General' }}</span>
              </td>
              <td>
                <span class="difficulty-badge" [ngClass]="(trek.difficulty || 'Moderate').toLowerCase()">
                  {{ trek.difficulty || 'Moderate' }}
                </span>
              </td>
              <td>
                <span class="batch-indicator">
                  <strong>{{ getBatchStatusCount(trek, 'active') }}</strong> active
                </span>
              </td>
              <td>
                <span class="status-pill" [ngClass]="'status-' + getStatusColor(trek.status)">
                  {{ (trek.status || 'draft') | uppercase }}
                </span>
              </td>
              <td class="text-end" (click)="$event.stopPropagation()">
                <div class="d-flex justify-content-end gap-1">
                  <button
                    *ngIf="authService.hasPermission('treks.manage')"
                    class="icon-btn subtle"
                    (click)="editTrek(trek.id, $event)"
                    title="Edit trek">
                    <i class="bi bi-pencil"></i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 PAGINATION CONTROLS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <div class="pagination-shell" *ngIf="!isLoading && filteredTreks.length > 0">
      <div class="pagination-inner">
        <div class="pagination-info">
          Showing <strong>{{ (currentPage - 1) * Number(pageSize) + 1 }}</strong> to
          <strong>{{ Math.min(currentPage * Number(pageSize), filteredTreks.length) }}</strong> of
          <strong>{{ filteredTreks.length }}</strong> expeditions
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

  </app-admin-shell>
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/treks/trek-list/trek-list.component.scss */\n:host {\n  display: block;\n}\n.treks-page {\n  --background: transparent;\n}\n@keyframes shimmer {\n  0% {\n    background-position: -400px 0;\n  }\n  100% {\n    background-position: 400px 0;\n  }\n}\n.shimmer {\n  background:\n    linear-gradient(\n      90deg,\n      rgba(0, 0, 0, 0.04) 25%,\n      rgba(0, 0, 0, 0.09) 50%,\n      rgba(0, 0, 0, 0.04) 75%);\n  background-size: 800px 100%;\n  animation: shimmer 1.5s infinite linear;\n  border-radius: 6px;\n}\n.skeleton-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  flex-shrink: 0;\n}\n.skeleton-cover {\n  width: 100%;\n  height: 190px;\n}\n.skeleton-line {\n  height: 14px;\n  border-radius: 4px;\n}\n.skeleton-line.sm {\n  width: 64px;\n}\n.skeleton-line.md {\n  width: 120px;\n}\n.skeleton-line.lg {\n  width: 180px;\n}\n.trek-summary {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.summary-card {\n  background: #fff;\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: var(--app-radius, 14px);\n  padding: 16px 18px;\n  box-shadow: var(--app-shadow-soft, 0 2px 8px rgba(0, 0, 0, 0.04));\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  transition: transform 0.15s ease, box-shadow 0.15s ease;\n}\n.summary-card:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--app-shadow, 0 4px 14px rgba(0, 0, 0, 0.08));\n}\n.summary-card .summary-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.25rem;\n  flex-shrink: 0;\n}\n.summary-card .summary-icon.tone-primary {\n  background: rgba(29, 122, 109, 0.12);\n  color: var(--app-accent, #1d7a6d);\n}\n.summary-card .summary-icon.tone-success {\n  background: #ecfdf5;\n  color: #10b981;\n}\n.summary-card .summary-icon.tone-warning {\n  background: #fffbeb;\n  color: #f59e0b;\n}\n.summary-card .summary-icon.tone-secondary {\n  background: #eff6ff;\n  color: #3b82f6;\n}\n.summary-card .summary-copy {\n  display: flex;\n  flex-direction: column;\n}\n.summary-card .summary-copy h3 {\n  margin: 0;\n  font-size: 1.45rem;\n  font-weight: 800;\n  color: var(--app-ink, #111827);\n  line-height: 1.2;\n}\n.summary-card .summary-copy p {\n  margin: 2px 0 0;\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: var(--app-ink-muted, #6b7280);\n}\n.trek-toolbar-card {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n  background: #fff;\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: var(--app-radius, 14px);\n  padding: 12px 16px;\n  margin-bottom: 20px;\n  box-shadow: var(--app-shadow-soft, 0 2px 8px rgba(0, 0, 0, 0.04));\n  flex-wrap: wrap;\n}\n.toolbar-left {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex: 1 1 300px;\n  flex-wrap: wrap;\n}\n.search-input-wrap {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--app-surface, #f9fafb);\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: 10px;\n  padding: 8px 12px;\n  flex: 1 1 220px;\n  min-width: 200px;\n  transition: all 0.15s ease;\n}\n.search-input-wrap:focus-within {\n  border-color: var(--app-accent, #1d7a6d);\n  box-shadow: 0 0 0 3px rgba(29, 122, 109, 0.12);\n  background: #fff;\n}\n.search-input-wrap i {\n  color: var(--app-ink-muted, #9ca3af);\n  font-size: 0.9rem;\n  flex-shrink: 0;\n}\n.search-input-wrap input {\n  border: none;\n  outline: none;\n  flex: 1;\n  background: transparent;\n  font-size: 0.88rem;\n  color: var(--app-ink, #111827);\n}\n.search-input-wrap input::placeholder {\n  color: var(--app-ink-muted, #9ca3af);\n}\n.search-input-wrap .clear-btn {\n  background: transparent;\n  border: none;\n  color: #9ca3af;\n  padding: 0;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n}\n.search-input-wrap .clear-btn:hover {\n  color: #111827;\n}\n.filter-select {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.filter-select select {\n  appearance: none;\n  -webkit-appearance: none;\n  background: var(--app-surface, #f9fafb);\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: 10px;\n  padding: 8px 30px 8px 12px;\n  font-size: 0.84rem;\n  font-weight: 500;\n  color: var(--app-ink, #374151);\n  cursor: pointer;\n  outline: none;\n  transition: all 0.15s ease;\n}\n.filter-select select:hover {\n  border-color: #cbd5e1;\n}\n.filter-select select:focus {\n  border-color: var(--app-accent, #1d7a6d);\n  background: #fff;\n}\n.filter-select .select-arrow {\n  position: absolute;\n  right: 10px;\n  pointer-events: none;\n  color: #6b7280;\n  font-size: 0.72rem;\n}\n.status-chips {\n  display: flex;\n  gap: 4px;\n  align-items: center;\n}\n.status-chip {\n  background: var(--app-surface, #f3f4f6);\n  border: 1px solid var(--app-border, #e5e7eb);\n  color: var(--app-ink, #4b5563);\n  font-size: 0.78rem;\n  font-weight: 600;\n  padding: 5px 12px;\n  border-radius: 999px;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.status-chip:hover {\n  border-color: #cbd5e1;\n  color: #111827;\n}\n.status-chip.active {\n  background: var(--app-accent, #1d7a6d);\n  border-color: var(--app-accent, #1d7a6d);\n  color: #fff;\n}\n.toolbar-right {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-left: auto;\n}\n.view-toggle {\n  display: flex;\n  background: var(--app-surface, #f3f4f6);\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: 10px;\n  padding: 3px;\n}\n.view-toggle .toggle-btn {\n  background: transparent;\n  border: none;\n  padding: 5px 9px;\n  border-radius: 7px;\n  font-size: 0.9rem;\n  color: var(--app-ink-muted, #6b7280);\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.view-toggle .toggle-btn:hover {\n  color: #111827;\n}\n.view-toggle .toggle-btn.active {\n  background: #fff;\n  color: var(--app-accent, #1d7a6d);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.trek-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.trek-card {\n  background: #fff;\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: var(--app-radius, 16px);\n  overflow: hidden;\n  box-shadow: var(--app-shadow-soft, 0 2px 8px rgba(0, 0, 0, 0.04));\n  display: flex;\n  flex-direction: column;\n  cursor: pointer;\n  transition:\n    transform 0.2s cubic-bezier(0.16, 1, 0.3, 1),\n    box-shadow 0.2s cubic-bezier(0.16, 1, 0.3, 1),\n    border-color 0.2s ease;\n}\n.trek-card:hover {\n  transform: translateY(-3px);\n  box-shadow: var(--app-shadow, 0 8px 20px rgba(0, 0, 0, 0.09));\n  border-color: #cbd5e1;\n}\n.trek-card:hover .trek-cover img {\n  transform: scale(1.04);\n}\n.trek-cover {\n  position: relative;\n  height: 190px;\n  overflow: hidden;\n  background: #f1f5f9;\n}\n.trek-cover img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s ease;\n}\n.trek-cover .status-pill {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  padding: 4px 10px;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.03em;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.trek-cover .difficulty-tag {\n  position: absolute;\n  bottom: 12px;\n  left: 12px;\n  background: rgba(17, 24, 39, 0.75);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  color: #fff;\n  font-size: 0.72rem;\n  font-weight: 600;\n  padding: 3px 8px;\n  border-radius: 6px;\n}\n.status-pill.status-success {\n  background: rgba(16, 185, 129, 0.9);\n  color: #fff;\n}\n.status-pill.status-warning {\n  background: rgba(245, 158, 11, 0.9);\n  color: #fff;\n}\n.status-pill.status-medium {\n  background: rgba(107, 114, 128, 0.9);\n  color: #fff;\n}\n.status-pill.status-primary {\n  background: rgba(29, 122, 109, 0.9);\n  color: #fff;\n}\n.trek-body {\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  flex: 1;\n}\n.trek-top {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 10px;\n}\n.trek-top .trek-title {\n  margin: 0;\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: var(--app-ink, #111827);\n  line-height: 1.3;\n}\n.trek-location {\n  color: var(--app-ink-muted, #4b5563);\n  font-size: 0.82rem;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.batch-count-bar {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.batch-count-bar .count-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  padding: 2px 8px;\n  border-radius: 6px;\n}\n.batch-count-bar .count-badge.active {\n  background: #ecfdf5;\n  color: #065f46;\n  border: 1px solid #a7f3d0;\n}\n.batch-count-bar .count-badge.inactive {\n  background: #f3f4f6;\n  color: #4b5563;\n}\n.batch-count-bar .count-badge .dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n}\n.batch-count-bar .count-badge .dot.dot-success {\n  background: #10b981;\n}\n.batch-pills {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-top: 4px;\n}\n.batch-chip {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: var(--app-surface, #f9fafb);\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: 8px;\n  padding: 6px 10px;\n  font-size: 0.76rem;\n  color: var(--app-ink, #374151);\n  text-align: left;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.batch-chip:hover {\n  background: rgba(29, 122, 109, 0.08);\n  border-color: rgba(29, 122, 109, 0.25);\n  color: var(--app-accent, #1d7a6d);\n}\n.batch-chip .batch-status-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.batch-chip .batch-status-dot.active {\n  background: #10b981;\n}\n.batch-chip .batch-status-dot.inactive {\n  background: #9ca3af;\n}\n.batch-chip .batch-date {\n  font-weight: 700;\n}\n.batch-chip .batch-meta {\n  color: var(--app-ink-muted, #6b7280);\n}\n.batch-pills-empty {\n  padding: 6px 0;\n}\n.icon-btn {\n  width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  border: 1px solid var(--app-border, #e5e7eb);\n  background: #fff;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: var(--app-ink, #374151);\n  transition: all 0.15s ease;\n}\n.icon-btn:hover {\n  background: var(--app-surface, #f3f4f6);\n  color: var(--app-accent, #1d7a6d);\n}\n.icon-btn.subtle {\n  border: 1px solid transparent;\n  background: transparent;\n  color: var(--app-ink-muted, #6b7280);\n}\n.icon-btn.subtle:hover {\n  background: var(--app-surface, #f3f4f6);\n  color: var(--app-ink, #111827);\n}\n.table-shell {\n  background: #fff;\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: var(--app-radius, 14px);\n  box-shadow: var(--app-shadow-soft, 0 2px 8px rgba(0, 0, 0, 0.04));\n  overflow: hidden;\n  margin-bottom: 24px;\n}\n.table-wrap {\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.trek-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.88rem;\n  text-align: left;\n}\n.trek-table thead th {\n  background: var(--app-surface, #f9fafb);\n  color: var(--app-ink-muted, #4b5563);\n  font-weight: 700;\n  font-size: 0.76rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  padding: 12px 14px;\n  border-bottom: 1px solid var(--app-border, #e5e7eb);\n  white-space: nowrap;\n}\n.trek-table tbody tr {\n  border-bottom: 1px solid var(--app-border, #f1f5f9);\n  transition: background-color 0.15s ease;\n}\n.trek-table tbody tr:last-child {\n  border-bottom: none;\n}\n.trek-table tbody tr.clickable-row {\n  cursor: pointer;\n}\n.trek-table tbody tr.clickable-row:hover {\n  background-color: rgba(29, 122, 109, 0.03);\n}\n.trek-table td {\n  padding: 12px 14px;\n  vertical-align: middle;\n}\n.table-thumb {\n  width: 48px;\n  height: 48px;\n  border-radius: 8px;\n  overflow: hidden;\n  background: #f1f5f9;\n}\n.table-thumb img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.category-tag {\n  display: inline-block;\n  background: #f3f4f6;\n  padding: 3px 8px;\n  border-radius: 6px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #374151;\n}\n.difficulty-badge {\n  display: inline-block;\n  padding: 3px 8px;\n  border-radius: 6px;\n  font-size: 0.74rem;\n  font-weight: 700;\n}\n.difficulty-badge.easy {\n  background: #dcfce7;\n  color: #166534;\n}\n.difficulty-badge.moderate {\n  background: #fef3c7;\n  color: #92400e;\n}\n.difficulty-badge.difficult,\n.difficulty-badge.hard {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.batch-indicator {\n  font-size: 0.82rem;\n  color: #4b5563;\n}\n.batch-indicator strong {\n  color: var(--app-accent, #1d7a6d);\n  font-weight: 700;\n}\n.empty-state {\n  text-align: center;\n  padding: 48px 24px;\n  background: #fff;\n  border: 1px dashed var(--app-border, #cbd5e1);\n  border-radius: var(--app-radius, 14px);\n  margin-bottom: 24px;\n}\n.empty-state .empty-icon {\n  width: 64px;\n  height: 64px;\n  margin: 0 auto 16px;\n  border-radius: 50%;\n  background: rgba(29, 122, 109, 0.08);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.empty-state .empty-icon i {\n  font-size: 28px;\n  color: var(--app-accent, #1d7a6d);\n}\n.empty-state h3 {\n  margin: 0 0 6px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: var(--app-ink, #111827);\n}\n.empty-state p {\n  margin: 0 0 20px;\n  font-size: 0.9rem;\n  color: var(--app-ink-muted, #6b7280);\n}\n@media (max-width: 1024px) {\n  .trek-summary {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .trek-summary {\n    grid-template-columns: 1fr;\n    gap: 10px;\n  }\n  .trek-toolbar-card {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .trek-toolbar-card .toolbar-left,\n  .trek-toolbar-card .toolbar-right {\n    width: 100%;\n  }\n  .trek-toolbar-card .toolbar-right {\n    justify-content: space-between;\n  }\n  .search-input-wrap {\n    width: 100%;\n    flex: 1 1 100%;\n  }\n  .filter-select {\n    width: 100%;\n  }\n  .filter-select select {\n    width: 100%;\n  }\n  .trek-grid {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 480px) {\n  .trek-cover {\n    height: 160px;\n  }\n  .trek-body {\n    padding: 14px;\n  }\n}\n/*# sourceMappingURL=trek-list.component.css.map */\n'] }]
  }], () => [{ type: Router }, { type: ActivatedRoute }, { type: TrekList }, { type: AuthService }, { type: MediaService }, { type: DropdownManagerService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TrekListComponent, { className: "TrekListComponent", filePath: "src/app/treks/trek-list/trek-list.component.ts", lineNumber: 20 });
})();

// src/app/treks/trek-list/trek-list-module.ts
var routes = [{ path: "", component: TrekListComponent }];
var _TrekListModule = class _TrekListModule {
};
_TrekListModule.\u0275fac = function TrekListModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TrekListModule)();
};
_TrekListModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _TrekListModule });
_TrekListModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, TrekListComponent, RouterModule.forChild(routes)] });
var TrekListModule = _TrekListModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrekListModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        CommonModule,
        TrekListComponent,
        RouterModule.forChild(routes)
      ]
    }]
  }], null, null);
})();
export {
  TrekListModule
};
//# sourceMappingURL=trek-list-module-5XQP4UCY.js.map
