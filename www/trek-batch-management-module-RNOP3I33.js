import {
  TrekBatchManagement
} from "./chunk-53H7TVLO.js";
import {
  MediaService
} from "./chunk-BXPKFK6Z.js";
import {
  NotificationService
} from "./chunk-SAB4OUIS.js";
import {
  AdminShellComponent
} from "./chunk-GLAFLAWJ.js";
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
  TitleCasePipe,
  UpperCasePipe,
  __spreadProps,
  __spreadValues,
  catchError,
  finalize,
  forkJoin,
  map,
  of,
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
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-KQE4QDNK.js";

// src/app/trek-batch-management/trek-batch-management.component.ts
var _c0 = () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
var _c1 = () => [1, 2, 3, 4, 5, 6];
var _c2 = () => [1, 2, 3];
function TrekBatchManagementComponent_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2022 Last run: ", \u0275\u0275pipeBind2(2, 1, ctx_r0.autoCompleteStatus.last_run, "shortTime"), " ");
  }
}
function TrekBatchManagementComponent_button_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function TrekBatchManagementComponent_button_37_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToAddTrek());
    });
    \u0275\u0275element(1, "i", 31);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Add Trek");
    \u0275\u0275elementEnd()();
  }
}
function TrekBatchManagementComponent_section_38_option_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const trek_r4 = ctx.$implicit;
    \u0275\u0275property("value", trek_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(trek_r4.name);
  }
}
function TrekBatchManagementComponent_section_38_div_40_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275element(1, "div", 60)(2, "div", 61);
    \u0275\u0275elementEnd();
  }
}
function TrekBatchManagementComponent_section_38_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275template(1, TrekBatchManagementComponent_section_38_div_40_div_1_Template, 3, 0, "div", 58);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c0));
  }
}
function TrekBatchManagementComponent_section_38_div_41_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const wd_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", wd_r5, " ");
  }
}
function TrekBatchManagementComponent_section_38_div_41_div_3_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", day_r6.batches.length, " ", day_r6.batches.length === 1 ? "batch" : "batches", " ");
  }
}
function TrekBatchManagementComponent_section_38_div_41_div_3_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 74);
    \u0275\u0275listener("click", function TrekBatchManagementComponent_section_38_div_41_div_3_div_6_Template_div_click_0_listener() {
      const b_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.openCalendarBatchDetails(b_r8));
    });
    \u0275\u0275elementStart(1, "div", 75)(2, "span", 76);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 77);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 78)(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "span", 79);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r8 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngClass", ctx_r0.getSlotFillClass(b_r8))("title", b_r8.trek_name + " (" + (b_r8.booked_slots || 0) + "/" + b_r8.available_slots + " slots) - Click to view bookings");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(b_r8.trek_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(6, 8, b_r8.price, "1.0-0"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", b_r8.booked_slots || 0, "/", b_r8.available_slots, " booked");
    \u0275\u0275advance();
    \u0275\u0275classProp("inactive", b_r8.status === "inactive");
  }
}
function TrekBatchManagementComponent_section_38_div_41_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "div", 68)(2, "span", 69);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, TrekBatchManagementComponent_section_38_div_41_div_3_span_4_Template, 2, 2, "span", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 71);
    \u0275\u0275template(6, TrekBatchManagementComponent_section_38_div_41_div_3_div_6_Template, 11, 11, "div", 72);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const day_r6 = ctx.$implicit;
    \u0275\u0275classProp("other-month", !day_r6.isCurrentMonth)("is-today", day_r6.isToday);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(day_r6.dayNumber);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", day_r6.batches.length > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", day_r6.batches);
  }
}
function TrekBatchManagementComponent_section_38_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62)(1, "div", 63);
    \u0275\u0275template(2, TrekBatchManagementComponent_section_38_div_41_div_2_Template, 2, 1, "div", 64)(3, TrekBatchManagementComponent_section_38_div_41_div_3_Template, 7, 7, "div", 65);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.weekDays);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.calendarDays);
  }
}
function TrekBatchManagementComponent_section_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 32)(1, "div", 33)(2, "div", 34)(3, "button", 35);
    \u0275\u0275listener("click", function TrekBatchManagementComponent_section_38_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.prevMonth());
    });
    \u0275\u0275element(4, "i", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2", 37);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 38);
    \u0275\u0275listener("click", function TrekBatchManagementComponent_section_38_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.nextMonth());
    });
    \u0275\u0275element(8, "i", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 40);
    \u0275\u0275listener("click", function TrekBatchManagementComponent_section_38_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToToday());
    });
    \u0275\u0275text(10, "Today");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 41)(12, "div", 42);
    \u0275\u0275element(13, "i", 43);
    \u0275\u0275elementStart(14, "select", 44);
    \u0275\u0275twoWayListener("ngModelChange", function TrekBatchManagementComponent_section_38_Template_select_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.calendarSelectedTrekId, $event) || (ctx_r0.calendarSelectedTrekId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function TrekBatchManagementComponent_section_38_Template_select_ngModelChange_14_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onCalendarTrekFilterChange());
    });
    \u0275\u0275elementStart(15, "option", 45);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, TrekBatchManagementComponent_section_38_option_17_Template, 2, 2, "option", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "i", 47);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 48)(20, "div", 49)(21, "span", 50);
    \u0275\u0275text(22, "Batches This Month");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 51);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 49)(26, "span", 50);
    \u0275\u0275text(27, "Total Capacity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 51);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 49)(31, "span", 50);
    \u0275\u0275text(32, "Booked Slots");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 52);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 49)(36, "span", 50);
    \u0275\u0275text(37, "Occupancy Rate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 53);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(40, TrekBatchManagementComponent_section_38_div_40_Template, 2, 2, "div", 54)(41, TrekBatchManagementComponent_section_38_div_41_Template, 4, 2, "div", 55);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.calendarMonthLabel);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.calendarSelectedTrekId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("All Treks (", ctx_r0.treks.length, ")");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.treks);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.calendarMonthBatchesCount);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r0.calendarMonthCapacity.totalSlots, " slots");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r0.calendarMonthCapacity.bookedSlots, " slots");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r0.calendarMonthCapacity.occupancyRate, "%");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isLoadingCalendar);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoadingCalendar);
  }
}
function TrekBatchManagementComponent_section_39_article_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 82);
    \u0275\u0275element(1, "div", 83);
    \u0275\u0275elementStart(2, "div", 84);
    \u0275\u0275element(3, "div", 85)(4, "div", 86)(5, "div", 87);
    \u0275\u0275elementEnd()();
  }
}
function TrekBatchManagementComponent_section_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 80);
    \u0275\u0275template(1, TrekBatchManagementComponent_section_39_article_1_Template, 6, 0, "article", 81);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c1));
  }
}
function TrekBatchManagementComponent_section_40_article_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 106);
    \u0275\u0275element(1, "i", 107);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const trek_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", trek_r10.location, " ");
  }
}
function TrekBatchManagementComponent_section_40_article_1_button_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 108);
    \u0275\u0275listener("click", function TrekBatchManagementComponent_section_40_article_1_button_33_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const trek_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.downloadAllTrekBookings(trek_r10));
    });
    \u0275\u0275element(1, "i", 109);
    \u0275\u0275text(2, " Download All ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const trek_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("disabled", trek_r10.total_bookings === 0);
  }
}
function TrekBatchManagementComponent_section_40_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 89)(1, "div", 90);
    \u0275\u0275element(2, "div", 91);
    \u0275\u0275elementStart(3, "div", 92)(4, "span", 93);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, TrekBatchManagementComponent_section_40_article_1_span_6_Template, 3, 1, "span", 94);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 84)(8, "div", 95)(9, "h3", 96);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 97);
    \u0275\u0275listener("click", function TrekBatchManagementComponent_section_40_article_1_Template_button_click_11_listener() {
      const trek_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.viewBatches(trek_r10));
    });
    \u0275\u0275element(12, "i", 98);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 99)(14, "div", 100)(15, "span");
    \u0275\u0275text(16, "Total Batches");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "strong");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 100)(20, "span");
    \u0275\u0275text(21, "Bookings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "strong");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 100)(25, "span");
    \u0275\u0275text(26, "Active Batches");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "strong", 101);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 102)(30, "button", 103);
    \u0275\u0275listener("click", function TrekBatchManagementComponent_section_40_article_1_Template_button_click_30_listener() {
      const trek_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.viewBatches(trek_r10));
    });
    \u0275\u0275element(31, "i", 104);
    \u0275\u0275text(32, " Manage Batches ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(33, TrekBatchManagementComponent_section_40_article_1_button_33_Template, 3, 1, "button", 105);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const trek_r10 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-image", "url(" + ctx_r0.resolveImageUrl(trek_r10.cover_image || trek_r10.image_url || trek_r10.image, trek_r10.updated_at || trek_r10.created_at) + ")");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", "difficulty-" + (trek_r10.difficulty || "moderate").toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", trek_r10.difficulty || "Moderate", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", trek_r10.location);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(trek_r10.name);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(trek_r10.total_batches || 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(trek_r10.total_bookings || 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(trek_r10.active_batches || 0);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r0.authService.hasPermission("bookings.manage"));
  }
}
function TrekBatchManagementComponent_section_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 80);
    \u0275\u0275template(1, TrekBatchManagementComponent_section_40_article_1_Template, 34, 10, "article", 88);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.paginatedTreks);
  }
}
function TrekBatchManagementComponent_div_41_option_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 56);
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
function TrekBatchManagementComponent_div_41_ng_container_24_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 122);
    \u0275\u0275text(1, "\u2026");
    \u0275\u0275elementEnd();
  }
}
function TrekBatchManagementComponent_div_41_ng_container_24_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 123);
    \u0275\u0275listener("click", function TrekBatchManagementComponent_div_41_ng_container_24_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const p_r15 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goToPage(p_r15));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r15 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", p_r15 === ctx_r0.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r15, " ");
  }
}
function TrekBatchManagementComponent_div_41_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TrekBatchManagementComponent_div_41_ng_container_24_span_1_Template, 2, 0, "span", 120)(2, TrekBatchManagementComponent_div_41_ng_container_24_button_2_Template, 2, 3, "button", 121);
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
function TrekBatchManagementComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 110)(1, "div", 111)(2, "div", 112);
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
    \u0275\u0275text(12, " treks ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 113)(14, "div", 114)(15, "label");
    \u0275\u0275text(16, "Per page:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "select", 115);
    \u0275\u0275twoWayListener("ngModelChange", function TrekBatchManagementComponent_div_41_Template_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.pageSize, $event) || (ctx_r0.pageSize = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function TrekBatchManagementComponent_div_41_Template_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onPageSizeChange($event));
    });
    \u0275\u0275template(18, TrekBatchManagementComponent_div_41_option_18_Template, 2, 2, "option", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 116)(20, "button", 117);
    \u0275\u0275listener("click", function TrekBatchManagementComponent_div_41_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.prevPage());
    });
    \u0275\u0275element(21, "i", 36);
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23, "Prev");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(24, TrekBatchManagementComponent_div_41_ng_container_24_Template, 3, 2, "ng-container", 118);
    \u0275\u0275elementStart(25, "button", 119);
    \u0275\u0275listener("click", function TrekBatchManagementComponent_div_41_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.nextPage());
    });
    \u0275\u0275elementStart(26, "span");
    \u0275\u0275text(27, "Next");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "i", 39);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r0.currentPage - 1) * ctx_r0.Number(ctx_r0.pageSize) + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.Math.min(ctx_r0.currentPage * ctx_r0.Number(ctx_r0.pageSize), ctx_r0.treks.length));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.treks.length);
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
function TrekBatchManagementComponent_section_42_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function TrekBatchManagementComponent_section_42_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goToAddTrek());
    });
    \u0275\u0275element(1, "i", 31);
    \u0275\u0275text(2, " Add Trek ");
    \u0275\u0275elementEnd();
  }
}
function TrekBatchManagementComponent_section_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 124)(1, "div", 125)(2, "div", 126);
    \u0275\u0275element(3, "i", 127);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5, "No Treks Found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Create your first trek expedition to configure departure batches.");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, TrekBatchManagementComponent_section_42_button_8_Template, 3, 0, "button", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r0.authService.hasPermission("treks.manage"));
  }
}
function TrekBatchManagementComponent_ng_template_44_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 139);
    \u0275\u0275element(1, "div", 85)(2, "div", 86)(3, "div", 87);
    \u0275\u0275elementEnd();
  }
}
function TrekBatchManagementComponent_ng_template_44_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 137);
    \u0275\u0275template(1, TrekBatchManagementComponent_ng_template_44_div_10_div_1_Template, 4, 0, "div", 138);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c2));
  }
}
function TrekBatchManagementComponent_ng_template_44_div_11_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 145);
    \u0275\u0275listener("click", function TrekBatchManagementComponent_ng_template_44_div_11_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.batchSearchQuery = "");
    });
    \u0275\u0275element(1, "i", 146);
    \u0275\u0275elementEnd();
  }
}
function TrekBatchManagementComponent_ng_template_44_div_11_div_5_button_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 163);
    \u0275\u0275listener("click", function TrekBatchManagementComponent_ng_template_44_div_11_div_5_button_55_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r22);
      const batch_r21 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.downloadBatchBookings(batch_r21));
    });
    \u0275\u0275element(1, "i", 109);
    \u0275\u0275text(2, " Download ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const batch_r21 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("disabled", batch_r21.total_bookings === 0);
  }
}
function TrekBatchManagementComponent_ng_template_44_div_11_div_5_button_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 170);
    \u0275\u0275listener("click", function TrekBatchManagementComponent_ng_template_44_div_11_div_5_button_56_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r23);
      const batch_r21 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.stopBooking(batch_r21));
    });
    \u0275\u0275element(1, "i", 171);
    \u0275\u0275text(2, " Stop Booking ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const batch_r21 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r0.isBatchActionLoading(batch_r21));
  }
}
function TrekBatchManagementComponent_ng_template_44_div_11_div_5_button_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 172);
    \u0275\u0275listener("click", function TrekBatchManagementComponent_ng_template_44_div_11_div_5_button_57_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r24);
      const batch_r21 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.resumeBooking(batch_r21));
    });
    \u0275\u0275element(1, "i", 173);
    \u0275\u0275text(2, " Resume Booking ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const batch_r21 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r0.isBatchActionLoading(batch_r21));
  }
}
function TrekBatchManagementComponent_ng_template_44_div_11_div_5_button_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 174);
    \u0275\u0275listener("click", function TrekBatchManagementComponent_ng_template_44_div_11_div_5_button_58_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r25);
      const batch_r21 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.markBatchCompleted(batch_r21));
    });
    \u0275\u0275element(1, "i", 175);
    \u0275\u0275text(2, " Mark as Completed ");
    \u0275\u0275elementEnd();
  }
}
function TrekBatchManagementComponent_ng_template_44_div_11_div_5_span_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 176);
    \u0275\u0275element(1, "i", 177);
    \u0275\u0275text(2, " Trek Completed ");
    \u0275\u0275elementEnd();
  }
}
function TrekBatchManagementComponent_ng_template_44_div_11_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 147)(1, "div", 148)(2, "div", 149);
    \u0275\u0275element(3, "i", 21);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 150);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "uppercase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 151)(12, "div", 152)(13, "span", 50);
    \u0275\u0275text(14, "Price per person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 153);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 152)(19, "span", 50);
    \u0275\u0275text(20, "Total Capacity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 154);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 152)(24, "span", 50);
    \u0275\u0275text(25, "Booked Slots");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 155);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 152)(29, "span", 50);
    \u0275\u0275text(30, "Total Orders");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 154);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 152)(34, "span", 50);
    \u0275\u0275text(35, "Total Trekkers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 154);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 152)(39, "span", 50);
    \u0275\u0275text(40, "Confirmed Trekkers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 156);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 157)(44, "div", 158)(45, "span");
    \u0275\u0275text(46, "Capacity Fill");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "span", 159);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 160);
    \u0275\u0275element(50, "div", 161);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 162)(52, "button", 163);
    \u0275\u0275listener("click", function TrekBatchManagementComponent_ng_template_44_div_11_div_5_Template_button_click_52_listener() {
      const batch_r21 = \u0275\u0275restoreView(_r20).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.viewBookings(batch_r21));
    });
    \u0275\u0275element(53, "i", 164);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd();
    \u0275\u0275template(55, TrekBatchManagementComponent_ng_template_44_div_11_div_5_button_55_Template, 3, 1, "button", 165)(56, TrekBatchManagementComponent_ng_template_44_div_11_div_5_button_56_Template, 3, 1, "button", 166)(57, TrekBatchManagementComponent_ng_template_44_div_11_div_5_button_57_Template, 3, 1, "button", 167)(58, TrekBatchManagementComponent_ng_template_44_div_11_div_5_button_58_Template, 3, 0, "button", 168)(59, TrekBatchManagementComponent_ng_template_44_div_11_div_5_span_59_Template, 3, 0, "span", 169);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const batch_r21 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(6, 23, batch_r21.start_date, "MMM dd, yyyy"), " \u2192 ", \u0275\u0275pipeBind2(7, 26, batch_r21.end_date, "MMM dd, yyyy"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r0.getBatchStatusClass(batch_r21.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 29, batch_r21.status), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(17, 31, batch_r21.price, "1.0-0"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", batch_r21.available_slots, " slots");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(batch_r21.booked_slots || 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(batch_r21.total_bookings || 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(batch_r21.total_participants || 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(batch_r21.confirmed_participants || 0);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate3("", batch_r21.booked_slots || 0, " / ", batch_r21.available_slots || 0, " slots \u2022 ", ctx_r0.getSlotFillPercent(batch_r21), "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r0.getSlotFillPercent(batch_r21), "%");
    \u0275\u0275property("ngClass", ctx_r0.getSlotFillClass(batch_r21));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", batch_r21.total_bookings === 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" View Bookings (", batch_r21.total_bookings || 0, ") ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.authService.hasPermission("bookings.manage"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", batch_r21.status === "active" && !ctx_r0.isBatchEnded(batch_r21));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", batch_r21.status === "inactive");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (batch_r21.status === "active" || batch_r21.status === "full") && ctx_r0.isBatchEnded(batch_r21));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", batch_r21.status === "completed");
  }
}
function TrekBatchManagementComponent_ng_template_44_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 137)(1, "div", 140);
    \u0275\u0275element(2, "i", 141);
    \u0275\u0275elementStart(3, "input", 142);
    \u0275\u0275twoWayListener("ngModelChange", function TrekBatchManagementComponent_ng_template_44_div_11_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.batchSearchQuery, $event) || (ctx_r0.batchSearchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, TrekBatchManagementComponent_ng_template_44_div_11_button_4_Template, 2, 0, "button", 143);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, TrekBatchManagementComponent_ng_template_44_div_11_div_5_Template, 60, 34, "div", 144);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.batchSearchQuery);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.batchSearchQuery);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.filteredBatches);
  }
}
function TrekBatchManagementComponent_ng_template_44_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 178)(1, "div", 179);
    \u0275\u0275element(2, "i", 180);
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No Batches Found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "No departure batches have been configured for this trek yet.");
    \u0275\u0275elementEnd()()();
  }
}
function TrekBatchManagementComponent_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-header")(1, "ion-toolbar", 128)(2, "ion-title");
    \u0275\u0275element(3, "i", 129);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-buttons", 130)(6, "ion-button", 131);
    \u0275\u0275listener("click", function TrekBatchManagementComponent_ng_template_44_Template_ion_button_click_6_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeBatchesModal());
    });
    \u0275\u0275element(7, "i", 132);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(8, "div", 133)(9, "div", 134);
    \u0275\u0275template(10, TrekBatchManagementComponent_ng_template_44_div_10_Template, 2, 2, "div", 135)(11, TrekBatchManagementComponent_ng_template_44_div_11_Template, 6, 3, "div", 135)(12, TrekBatchManagementComponent_ng_template_44_div_12_Template, 7, 0, "div", 136);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.selectedTrek == null ? null : ctx_r0.selectedTrek.name, " \u2022 Batches ");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r0.isLoadingBatches);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoadingBatches);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoadingBatches && ctx_r0.batches.length === 0);
  }
}
function TrekBatchManagementComponent_ng_template_46_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 184);
    \u0275\u0275element(1, "ion-spinner");
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading bookings roster...");
    \u0275\u0275elementEnd()();
  }
}
function TrekBatchManagementComponent_ng_template_46_div_14_ng_container_22_tr_27_div_6_div_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 211);
    \u0275\u0275text(1, "Lead Booker");
    \u0275\u0275elementEnd();
  }
}
function TrekBatchManagementComponent_ng_template_46_div_14_ng_container_22_tr_27_div_6_div_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 207)(1, "span", 208);
    \u0275\u0275text(2, "Phone:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 209);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r29 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r29.phone);
  }
}
function TrekBatchManagementComponent_ng_template_46_div_14_ng_container_22_tr_27_div_6_div_1_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 207)(1, "span", 208);
    \u0275\u0275text(2, "Govt ID:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 212);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r29 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", p_r29.idType, " - ", p_r29.idNumber);
  }
}
function TrekBatchManagementComponent_ng_template_46_div_14_ng_container_22_tr_27_div_6_div_1_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 207)(1, "span", 208);
    \u0275\u0275text(2, "Medical:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 213);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r29 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r29.medicalInfo);
  }
}
function TrekBatchManagementComponent_ng_template_46_div_14_ng_container_22_tr_27_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 204)(1, "div", 205)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, TrekBatchManagementComponent_ng_template_46_div_14_ng_container_22_tr_27_div_6_div_1_span_4_Template, 2, 0, "span", 206);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 207)(6, "span", 208);
    \u0275\u0275text(7, "Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 209);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 207)(11, "span", 208);
    \u0275\u0275text(12, "Age / Gender:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 209);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, TrekBatchManagementComponent_ng_template_46_div_14_ng_container_22_tr_27_div_6_div_1_div_15_Template, 5, 1, "div", 210)(16, TrekBatchManagementComponent_ng_template_46_div_14_ng_container_22_tr_27_div_6_div_1_div_16_Template, 5, 2, "div", 210)(17, TrekBatchManagementComponent_ng_template_46_div_14_ng_container_22_tr_27_div_6_div_1_div_17_Template, 5, 1, "div", 210);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r29 = ctx.$implicit;
    const idx_r30 = ctx.index;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Participant ", idx_r30 + 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r29.isPrimary);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r29.name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", p_r29.age, " / ", p_r29.gender);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r29.phone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r29.idType || p_r29.idNumber);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r29.medicalInfo);
  }
}
function TrekBatchManagementComponent_ng_template_46_div_14_ng_container_22_tr_27_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 202);
    \u0275\u0275template(1, TrekBatchManagementComponent_ng_template_46_div_14_ng_container_22_tr_27_div_6_div_1_Template, 18, 8, "div", 203);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const booking_r28 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", booking_r28.participants);
  }
}
function TrekBatchManagementComponent_ng_template_46_div_14_ng_container_22_tr_27_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 214);
    \u0275\u0275text(1, "Detailed participant records have not been submitted for this booking.");
    \u0275\u0275elementEnd();
  }
}
function TrekBatchManagementComponent_ng_template_46_div_14_ng_container_22_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 197)(1, "td", 198)(2, "div", 199)(3, "h6");
    \u0275\u0275element(4, "i", 200);
    \u0275\u0275text(5, " Participant Roster & Declarations");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, TrekBatchManagementComponent_ng_template_46_div_14_ng_container_22_tr_27_div_6_Template, 2, 1, "div", 201)(7, TrekBatchManagementComponent_ng_template_46_div_14_ng_container_22_tr_27_ng_template_7_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const noParticipantData_r31 = \u0275\u0275reference(8);
    const booking_r28 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", (booking_r28.participants == null ? null : booking_r28.participants.length) > 0)("ngIfElse", noParticipantData_r31);
  }
}
function TrekBatchManagementComponent_ng_template_46_div_14_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "tr", 188);
    \u0275\u0275listener("click", function TrekBatchManagementComponent_ng_template_46_div_14_ng_container_22_Template_tr_click_1_listener() {
      const booking_r28 = \u0275\u0275restoreView(_r27).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.toggleBookingExpand(booking_r28));
    });
    \u0275\u0275elementStart(2, "td")(3, "button", 189);
    \u0275\u0275element(4, "i", 190);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "strong", 191);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "strong");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 192);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 193);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td")(18, "span", 194);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "td", 195);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td")(24, "span", 150);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "titlecase");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(27, TrekBatchManagementComponent_ng_template_46_div_14_ng_container_22_tr_27_Template, 9, 2, "tr", 196);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const booking_r28 = ctx.$implicit;
    const i_r32 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", booking_r28.expanded ? "bi-chevron-down" : "bi-chevron-right");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r32 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", booking_r28.booking_id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(booking_r28.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(booking_r28.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(booking_r28.phone);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(booking_r28.total_participants);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(22, 11, booking_r28.total_amount, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r0.getBookingStatusClass(booking_r28.booking_status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 14, booking_r28.booking_status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", booking_r28.expanded);
  }
}
function TrekBatchManagementComponent_ng_template_46_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 185)(1, "table", 186)(2, "thead")(3, "tr");
    \u0275\u0275element(4, "th", 187);
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Booking Ref");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Customer Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Phone Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Trekkers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Total Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "tbody");
    \u0275\u0275template(22, TrekBatchManagementComponent_ng_template_46_div_14_ng_container_22_Template, 28, 16, "ng-container", 118);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(22);
    \u0275\u0275property("ngForOf", ctx_r0.bookings);
  }
}
function TrekBatchManagementComponent_ng_template_46_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 178)(1, "div", 179);
    \u0275\u0275element(2, "i", 127);
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No Bookings Found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "No booking records are available for this departure batch.");
    \u0275\u0275elementEnd()()();
  }
}
function TrekBatchManagementComponent_ng_template_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-header")(1, "ion-toolbar", 128)(2, "ion-title");
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "span", 181);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "ion-buttons", 130)(9, "ion-button", 131);
    \u0275\u0275listener("click", function TrekBatchManagementComponent_ng_template_46_Template_ion_button_click_9_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeBookingsModal());
    });
    \u0275\u0275element(10, "i", 132);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "div", 133)(12, "div", 134);
    \u0275\u0275template(13, TrekBatchManagementComponent_ng_template_46_div_13_Template, 4, 0, "div", 182)(14, TrekBatchManagementComponent_ng_template_46_div_14_Template, 23, 1, "div", 183)(15, TrekBatchManagementComponent_ng_template_46_div_15_Template, 7, 0, "div", 136);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Bookings \u2022 ", ctx_r0.selectedBatch == null ? null : ctx_r0.selectedBatch.trek_name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" (", \u0275\u0275pipeBind2(6, 6, ctx_r0.selectedBatch == null ? null : ctx_r0.selectedBatch.start_date, "MMM dd"), " - ", \u0275\u0275pipeBind2(7, 9, ctx_r0.selectedBatch == null ? null : ctx_r0.selectedBatch.end_date, "MMM dd, yyyy"), ") ");
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r0.isLoadingBookings);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoadingBookings && ctx_r0.bookings.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoadingBookings && ctx_r0.bookings.length === 0);
  }
}
var _TrekBatchManagementComponent = class _TrekBatchManagementComponent {
  get totalPages() {
    const size = Number(this.pageSize) || 5;
    return Math.max(1, Math.ceil(this.treks.length / size));
  }
  get paginatedTreks() {
    const size = Number(this.pageSize) || 5;
    const page = Math.min(Math.max(1, this.currentPage), this.totalPages);
    const start = (page - 1) * size;
    return this.treks.slice(start, start + size);
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
    if (this.currentPage > 1)
      this.currentPage--;
  }
  nextPage() {
    if (this.currentPage < this.totalPages)
      this.currentPage++;
  }
  onPageSizeChange(val) {
    if (val)
      this.pageSize = Number(val);
    this.currentPage = 1;
  }
  constructor(trekMgmtService, authService, router, notificationService, media) {
    this.trekMgmtService = trekMgmtService;
    this.authService = authService;
    this.router = router;
    this.notificationService = notificationService;
    this.media = media;
    this.Math = Math;
    this.Number = Number;
    this.autoCompleting = false;
    this.treks = [];
    this.selectedTrek = null;
    this.batches = [];
    this.selectedBatch = null;
    this.bookings = [];
    this.isLoadingTreks = false;
    this.isLoadingBatches = false;
    this.isLoadingBookings = false;
    this.isLoadingCalendar = false;
    this.showBatchesModal = false;
    this.showBookingsModal = false;
    this.completionStats = null;
    this.batchActionLoadingId = null;
    this.isSweeping = false;
    this.autoCompleteStatus = null;
    this.currentPage = 1;
    this.pageSize = 5;
    this.pageSizeOptions = [5, 10, 20, 40];
    this.batchSearchQuery = "";
    this.viewMode = "treks";
    this.calendarCurrentDate = /* @__PURE__ */ new Date();
    this.calendarSelectedTrekId = "all";
    this.allCalendarBatches = [];
    this.calendarDays = [];
    this.weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  }
  resolveImageUrl(imagePath, cacheKey) {
    return this.media.resolve(imagePath || null, cacheKey);
  }
  ngOnInit() {
    this.loadTreks();
    this.loadCompletionStats();
    this.loadAutoCompleteStatus();
  }
  setViewMode(mode) {
    this.viewMode = mode;
    if (mode === "calendar" && this.allCalendarBatches.length === 0) {
      this.loadAllBatchesForCalendar();
    } else if (mode === "calendar") {
      this.generateCalendarGrid();
    }
  }
  loadAllBatchesForCalendar() {
    if (this.treks.length === 0)
      return;
    this.isLoadingCalendar = true;
    const reqs = this.treks.map((t) => this.trekMgmtService.getBatches(String(t.id)).pipe(map((res) => {
      if (res?.success && Array.isArray(res.data)) {
        return res.data.map((b) => __spreadProps(__spreadValues({}, b), {
          trek_name: t.name,
          trek_location: t.location,
          trek_difficulty: t.difficulty,
          trek_image_url: t.image_url
        }));
      }
      return [];
    }), catchError(() => of([]))));
    forkJoin(reqs).pipe(finalize(() => {
      this.isLoadingCalendar = false;
      this.generateCalendarGrid();
    })).subscribe({
      next: (results) => {
        const arr = Array.isArray(results) ? results : [];
        this.allCalendarBatches = arr.reduce((acc, curr) => acc.concat(Array.isArray(curr) ? curr : []), []);
        this.generateCalendarGrid();
      }
    });
  }
  generateCalendarGrid() {
    const year = this.calendarCurrentDate.getFullYear();
    const month = this.calendarCurrentDate.getMonth();
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const startingDayOfWeek = firstDayOfMonth.getDay();
    const daysInMonth = lastDayOfMonth.getDate();
    const days = [];
    const todayStr = (/* @__PURE__ */ new Date()).toDateString();
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      const d = new Date(year, month - 1, prevMonthLastDay - i);
      const dateKey = this.formatDateKey(d);
      days.push({
        date: d,
        dateKey,
        dayNumber: d.getDate(),
        isCurrentMonth: false,
        isToday: d.toDateString() === todayStr,
        batches: this.getBatchesForDate(d)
      });
    }
    for (let i = 1; i <= daysInMonth; i++) {
      const d = new Date(year, month, i);
      const dateKey = this.formatDateKey(d);
      days.push({
        date: d,
        dateKey,
        dayNumber: i,
        isCurrentMonth: true,
        isToday: d.toDateString() === todayStr,
        batches: this.getBatchesForDate(d)
      });
    }
    const remaining = 7 - days.length % 7;
    if (remaining < 7) {
      for (let i = 1; i <= remaining; i++) {
        const d = new Date(year, month + 1, i);
        const dateKey = this.formatDateKey(d);
        days.push({
          date: d,
          dateKey,
          dayNumber: i,
          isCurrentMonth: false,
          isToday: d.toDateString() === todayStr,
          batches: this.getBatchesForDate(d)
        });
      }
    }
    this.calendarDays = days;
  }
  formatDateKey(d) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  }
  getBatchesForDate(d) {
    const targetTime = new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
    return this.allCalendarBatches.filter((b) => {
      if (this.calendarSelectedTrekId !== "all" && String(b.trek_id) !== String(this.calendarSelectedTrekId)) {
        return false;
      }
      const s = new Date(b.start_date);
      const startTime = new Date(s.getFullYear(), s.getMonth(), s.getDate()).getTime();
      const e = new Date(b.end_date || b.start_date);
      const endTime = new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime();
      return targetTime >= startTime && targetTime <= endTime;
    });
  }
  prevMonth() {
    this.calendarCurrentDate = new Date(this.calendarCurrentDate.getFullYear(), this.calendarCurrentDate.getMonth() - 1, 1);
    this.generateCalendarGrid();
  }
  nextMonth() {
    this.calendarCurrentDate = new Date(this.calendarCurrentDate.getFullYear(), this.calendarCurrentDate.getMonth() + 1, 1);
    this.generateCalendarGrid();
  }
  goToToday() {
    this.calendarCurrentDate = /* @__PURE__ */ new Date();
    this.generateCalendarGrid();
  }
  onCalendarTrekFilterChange() {
    this.generateCalendarGrid();
  }
  get calendarMonthLabel() {
    return this.calendarCurrentDate.toLocaleString("default", { month: "long", year: "numeric" });
  }
  get calendarMonthBatchesCount() {
    const year = this.calendarCurrentDate.getFullYear();
    const month = this.calendarCurrentDate.getMonth();
    return this.allCalendarBatches.filter((b) => {
      if (this.calendarSelectedTrekId !== "all" && String(b.trek_id) !== String(this.calendarSelectedTrekId)) {
        return false;
      }
      const s = new Date(b.start_date);
      return s.getFullYear() === year && s.getMonth() === month;
    }).length;
  }
  get calendarMonthCapacity() {
    const year = this.calendarCurrentDate.getFullYear();
    const month = this.calendarCurrentDate.getMonth();
    const monthBatches = this.allCalendarBatches.filter((b) => {
      if (this.calendarSelectedTrekId !== "all" && String(b.trek_id) !== String(this.calendarSelectedTrekId)) {
        return false;
      }
      const s = new Date(b.start_date);
      return s.getFullYear() === year && s.getMonth() === month;
    });
    const totalSlots = monthBatches.reduce((sum, b) => sum + Number(b.available_slots || 0), 0);
    const bookedSlots = monthBatches.reduce((sum, b) => sum + Number(b.booked_slots || b.total_participants || 0), 0);
    const occupancyRate = totalSlots > 0 ? Math.round(bookedSlots / totalSlots * 100) : 0;
    return { totalSlots, bookedSlots, occupancyRate };
  }
  openCalendarBatchDetails(batch) {
    const trek = this.treks.find((t) => String(t.id) === String(batch.trek_id));
    if (trek) {
      this.selectedTrek = trek;
    } else {
      this.selectedTrek = { name: batch.trek_name || "Trek Details" };
    }
    this.viewBookings(batch);
  }
  /**
   * Load all treks
   */
  loadTreks() {
    this.isLoadingTreks = true;
    this.trekMgmtService.getTreks().subscribe({
      next: (response) => {
        if (response.success == true) {
          const rows = Array.isArray(response.data) ? response.data : [];
          this.treks = rows.filter((trek) => this.shouldShowTrek(trek));
        }
        this.isLoadingTreks = false;
      },
      error: (error) => {
        this.isLoadingTreks = false;
        this.notificationService.show("Failed to load treks", 3500);
      }
    });
  }
  /**
   * View batches for a trek
   */
  viewBatches(trek) {
    this.selectedTrek = trek;
    this.isLoadingBatches = true;
    this.showBatchesModal = true;
    this.trekMgmtService.getBatches(String(trek.id || "")).subscribe({
      next: (response) => {
        if (response.success == true) {
          const rows = Array.isArray(response.data) ? response.data : [];
          this.batches = rows.filter((batch) => {
            const status = String(batch?.status || "").toLowerCase();
            return status === "active" || status === "inactive" || status === "completed" || status === "full";
          });
          this.autoCompleteEndedBatches();
        }
        this.isLoadingBatches = false;
      },
      error: (error) => {
        this.isLoadingBatches = false;
        this.notificationService.show("Failed to load batches", 3500);
      }
    });
  }
  /**
   * View bookings for a batch
   */
  viewBookings(batch) {
    this.selectedBatch = batch;
    this.isLoadingBookings = true;
    this.showBookingsModal = true;
    this.trekMgmtService.getBatchBookings(String(batch.id || "")).subscribe({
      next: (response) => {
        const rows = this.extractBookingRows(response);
        this.bookings = rows.map((booking) => this.normalizeBookingRow(booking));
        this.isLoadingBookings = false;
      },
      error: (error) => {
        this.isLoadingBookings = false;
        this.notificationService.show("Failed to load bookings", 3500);
      }
    });
  }
  /**
   * Toggle booking row expansion to show/hide participant details
   */
  toggleBookingExpand(booking) {
    booking.expanded = !booking.expanded;
  }
  /**
   * Stop booking for a batch
   */
  stopBooking(batch) {
    if (this.batchActionLoadingId === String(batch?.id || ""))
      return;
    if (!confirm("Are you sure you want to stop bookings for this batch?\n\nTrek: " + this.selectedTrek.name + "\nDate: " + new Date(batch.start_date).toLocaleDateString())) {
      return;
    }
    this.batchActionLoadingId = String(batch.id || "");
    this.trekMgmtService.stopBooking(String(batch.id || "")).pipe(finalize(() => {
      this.batchActionLoadingId = null;
    })).subscribe({
      next: (response) => {
        if (response?.success === true) {
          this.notificationService.show("Booking stopped successfully!");
          const nextStatus = String(response?.batch?.status || "inactive").toLowerCase();
          batch.status = nextStatus;
          this.batches = [...this.batches];
          this.loadTreks();
          return;
        }
        this.notificationService.show(response?.message || "Failed to stop booking", 3500);
      },
      error: (error) => {
        this.notificationService.show(error?.error?.message || "Failed to stop booking", 3500);
      }
    });
  }
  /**
   * Resume booking for a batch
   */
  resumeBooking(batch) {
    if (this.batchActionLoadingId === String(batch?.id || ""))
      return;
    if (!confirm("Resume bookings for this batch?\n\nTrek: " + this.selectedTrek.name + "\nDate: " + new Date(batch.start_date).toLocaleDateString())) {
      return;
    }
    this.batchActionLoadingId = String(batch.id || "");
    this.trekMgmtService.resumeBooking(String(batch.id || "")).pipe(finalize(() => {
      this.batchActionLoadingId = null;
    })).subscribe({
      next: (response) => {
        if (response?.success === true) {
          this.notificationService.show("Booking resumed successfully!");
          const nextStatus = String(response?.batch?.status || "active").toLowerCase();
          batch.status = nextStatus;
          this.batches = [...this.batches];
          this.loadTreks();
          return;
        }
        this.notificationService.show(response?.message || "Failed to resume booking", 3500);
      },
      error: (error) => {
        this.notificationService.show(error?.error?.message || "Failed to resume booking", 3500);
      }
    });
  }
  isBatchActionLoading(batch) {
    return this.batchActionLoadingId === String(batch?.id || "");
  }
  /** Batches filtered by search query (date or status text) */
  get filteredBatches() {
    const q = this.batchSearchQuery.trim().toLowerCase();
    if (!q)
      return this.batches;
    return this.batches.filter((b) => {
      const start = String(b.start_date || "").toLowerCase();
      const end = String(b.end_date || "").toLowerCase();
      const status = String(b.status || "").toLowerCase();
      return start.includes(q) || end.includes(q) || status.includes(q);
    });
  }
  /**
   * Returns the percentage of slots filled (0–100), capped at 100.
   * Color thresholds are applied via CSS classes based on the return value.
   */
  getSlotFillPercent(batch) {
    const booked = Number(batch.booked_slots || batch.total_participants || 0);
    const total = Number(batch.available_slots || 0);
    if (total <= 0)
      return 0;
    return Math.min(100, Math.round(booked / total * 100));
  }
  getSlotFillClass(batch) {
    const pct = this.getSlotFillPercent(batch);
    if (pct >= 90)
      return "fill-danger";
    if (pct >= 70)
      return "fill-warning";
    return "fill-success";
  }
  /**
   * Download bookings for a batch
   */
  downloadBatchBookings(batch) {
    this.trekMgmtService.downloadBatchBookings(String(batch.id || "")).subscribe({
      next: (blob) => {
        const fileName = `${this.selectedTrek.name}_${new Date(batch.start_date).toISOString().split("T")[0]}_Bookings.xlsx`;
        this.trekMgmtService.triggerDownload(blob, fileName);
        this.notificationService.show("Download started!");
      },
      error: (error) => {
        this.notificationService.show("Failed to download bookings", 3500);
      }
    });
  }
  /**
   * Download all bookings for a trek
   */
  downloadAllTrekBookings(trek) {
    this.trekMgmtService.downloadAllTrekBookings(String(trek.id || "")).subscribe({
      next: (blob) => {
        const fileName = `${trek.name}_All_Bookings.xlsx`;
        this.trekMgmtService.triggerDownload(blob, fileName);
        this.notificationService.show("Download started!");
      },
      error: (error) => {
        this.notificationService.show("Failed to download all bookings", 3500);
      }
    });
  }
  goToAddTrek() {
    this.router.navigate(["/admin/treks/add"]);
  }
  /**
   * Close batches modal
   */
  closeBatchesModal() {
    this.showBatchesModal = false;
    this.selectedTrek = null;
    this.batches = [];
  }
  /**
   * Close bookings modal
   */
  closeBookingsModal() {
    this.showBookingsModal = false;
    this.selectedBatch = null;
    this.bookings = [];
  }
  /**
   * Get batch status badge class
   */
  getBatchStatusClass(status) {
    switch (status) {
      case "active":
        return "badge-success";
      case "inactive":
        return "badge-danger";
      case "full":
        return "badge-warning";
      case "completed":
        return "badge-secondary";
      default:
        return "badge-secondary";
    }
  }
  /**
   * Get booking status badge class
   */
  getBookingStatusClass(status) {
    switch (status) {
      case "confirmed":
        return "badge-success";
      case "pending":
        return "badge-warning";
      case "cancelled":
        return "badge-danger";
      case "completed":
        return "badge-info";
      default:
        return "badge-secondary";
    }
  }
  /**
   * Get payment status badge class
   */
  getPaymentStatusClass(status) {
    switch (status) {
      case "paid":
        return "badge-success";
      case "pending":
        return "badge-warning";
      case "partial":
        return "badge-info";
      case "refunded":
        return "badge-secondary";
      default:
        return "badge-secondary";
    }
  }
  ngOnDestroy() {
  }
  loadCompletionStats() {
    this.trekMgmtService.getCompletionStats().subscribe((response) => {
      if (response.success) {
        this.completionStats = response.data;
      }
    });
  }
  loadAutoCompleteStatus() {
    this.trekMgmtService.getAutoCompleteStatus().subscribe({
      next: (res) => {
        if (res?.success) {
          this.autoCompleteStatus = res.data;
        }
      },
      error: (err) => {
      }
    });
  }
  triggerAutoCompletionSweep() {
    if (this.isSweeping)
      return;
    this.isSweeping = true;
    this.notificationService.show("Running automated trek completion sweep...");
    this.trekMgmtService.runAutoCompleteSweep().pipe(finalize(() => {
      this.isSweeping = false;
    })).subscribe({
      next: (res) => {
        if (res?.success) {
          const bCount = res.batches_completed || 0;
          const bkCount = res.bookings_completed || 0;
          this.notificationService.show(`Auto-completion finished! ${bCount} batch(es) and ${bkCount} booking(s) marked completed.`);
          this.loadTreks();
          this.loadCompletionStats();
          this.loadAutoCompleteStatus();
          if (this.viewMode === "calendar") {
            this.loadAllBatchesForCalendar();
          }
          if (this.selectedTrek && this.showBatchesModal) {
            this.viewBatches(this.selectedTrek);
          }
        } else {
          this.notificationService.show(res?.message || "Sweep failed", 3500);
        }
      },
      error: (err) => {
        this.notificationService.show("Sweep error: " + (err?.error?.message || err.message), 3500);
      }
    });
  }
  /**
   * Check if batch has ended
   */
  isBatchEnded(batch) {
    if (!batch || !batch.end_date) {
      return false;
    }
    const endDate = new Date(batch.end_date);
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    endDate.setHours(0, 0, 0, 0);
    return endDate < today;
  }
  /**
   * Mark batch as completed
   */
  markBatchCompleted(batch) {
    if (!confirm(`Mark this batch as COMPLETED?

Trek: ${this.selectedTrek.name}
Date: ${new Date(batch.start_date).toLocaleDateString()} - ${new Date(batch.end_date).toLocaleDateString()}
Total Bookings: ${batch.total_bookings}

This will:
- Mark the batch as completed
- Update all confirmed bookings to completed status

Continue?`)) {
      return;
    }
    this.trekMgmtService.markBatchCompleted(batch.id).subscribe({
      next: (response) => {
        if (response.success) {
          this.notificationService.show(`Batch marked as completed! Updated bookings: ${response.updated_bookings || 0}`);
          batch.status = "completed";
          this.viewBatches(this.selectedTrek);
          this.loadCompletionStats();
        }
      },
      error: (error) => {
        this.notificationService.show("Failed to mark batch as completed", 3500);
      }
    });
  }
  autoCompleteEndedBatches() {
    if (this.autoCompleting || !Array.isArray(this.batches) || this.batches.length === 0) {
      return;
    }
    const endedBatches = this.batches.filter((batch) => this.isBatchEnded(batch) && this.isAutoCompletableStatus(batch.status));
    if (endedBatches.length === 0) {
      return;
    }
    this.autoCompleting = true;
    const requests = endedBatches.map((batch) => this.trekMgmtService.markBatchCompleted(batch.id).pipe(catchError(() => of(null))));
    forkJoin(requests).subscribe({
      next: (responses) => {
        let hasChanges = false;
        responses.forEach((res, idx) => {
          if (res?.success) {
            endedBatches[idx].status = "completed";
            hasChanges = true;
          }
        });
        if (hasChanges) {
          this.loadCompletionStats();
        }
      },
      complete: () => {
        this.autoCompleting = false;
      }
    });
  }
  isAutoCompletableStatus(status) {
    const current = String(status || "").toLowerCase();
    return current === "active" || current === "inactive" || current === "full";
  }
  shouldShowTrek(trek) {
    const totalBatches = Number(trek?.total_batches || 0);
    return totalBatches > 0;
  }
  extractBookingRows(response) {
    const data = response?.data;
    if (Array.isArray(data))
      return data;
    if (Array.isArray(data?.bookings))
      return data.bookings;
    if (Array.isArray(response?.results))
      return response.results;
    if (Array.isArray(response?.bookings))
      return response.bookings;
    return [];
  }
  normalizeBookingRow(booking) {
    const totalParticipants = Number(booking?.total_participants ?? booking?.participants_count ?? booking?.participants ?? 0);
    const participants = this.normalizeParticipants(booking);
    return __spreadProps(__spreadValues({}, booking), {
      booking_id: booking?.booking_id || booking?.booking_reference || booking?.bookingReference || `BK-${booking?.id ?? "-"}`,
      name: booking?.name || booking?.customer_name || booking?.customerName || "-",
      email: booking?.email || booking?.customer_email || booking?.customerEmail || "-",
      phone: booking?.phone || booking?.customer_phone || booking?.customerPhone || "-",
      total_participants: totalParticipants,
      total_amount: Number(booking?.total_amount ?? booking?.amount ?? booking?.subtotal ?? 0),
      payment_status: booking?.payment_status || booking?.paymentStatus || "pending",
      participants,
      expanded: false
    });
  }
  normalizeParticipants(booking) {
    const sources = [
      booking?.participants,
      booking?.participant_details,
      booking?.participant_data,
      booking?.participants_data,
      booking?.booking_participants,
      booking?.participants_json,
      booking?.participant_list
    ];
    const parsedRows = [];
    sources.forEach((source) => {
      const rows = this.parseParticipantsSource(source);
      rows.forEach((row) => {
        parsedRows.push({
          name: row?.name || row?.full_name || row?.participant_name || "-",
          age: row?.age ?? "-",
          gender: row?.gender || "-",
          phone: row?.phone || row?.phone_number || "-",
          idType: row?.id_type || row?.idType || "-",
          idNumber: row?.id_number || row?.idNumber || "-",
          medicalInfo: row?.medical_info || row?.medicalInfo || "-",
          isPrimary: !!(row?.is_primary_contact ?? row?.isPrimary)
        });
      });
    });
    if (parsedRows.length > 0) {
      return parsedRows;
    }
    const fallbackName = booking?.name || booking?.customer_name || booking?.customerName;
    if (fallbackName) {
      return [{
        name: fallbackName,
        age: booking?.age ?? "-",
        gender: booking?.gender || "-",
        phone: booking?.phone || booking?.customer_phone || booking?.customerPhone || "-",
        idType: booking?.id_type || "-",
        idNumber: booking?.id_number || "-",
        medicalInfo: booking?.medical_info || "-",
        isPrimary: true
      }];
    }
    return [];
  }
  parseParticipantsSource(source) {
    if (Array.isArray(source)) {
      return source;
    }
    if (typeof source === "string") {
      try {
        const parsed = JSON.parse(source);
        return Array.isArray(parsed) ? parsed : [];
      } catch {
        return [];
      }
    }
    return [];
  }
};
_TrekBatchManagementComponent.\u0275fac = function TrekBatchManagementComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TrekBatchManagementComponent)(\u0275\u0275directiveInject(TrekBatchManagement), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(MediaService));
};
_TrekBatchManagementComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TrekBatchManagementComponent, selectors: [["app-trek-batch-management"]], decls: 47, vars: 17, consts: [["noParticipantData", ""], [1, "trek-batch-page"], ["title", "Trek & Batch Management", "subtitle", "Control inventory, departure schedules, booking flows, and batch capacity from one command center.", "sectionLabel", "Operations"], [1, "app-shell"], [1, "automation-banner"], [1, "auto-badge-group"], [1, "auto-indicator-dot", "pulse"], [1, "auto-info"], [1, "auto-title"], [1, "badge-status-pill"], [1, "bi", "bi-clock-history"], [1, "auto-desc"], [1, "code"], ["class", "last-run-tag", 4, "ngIf"], [1, "auto-actions"], ["type", "button", "title", "Scan database and complete past batches and bookings immediately", 1, "btn-sweep", 3, "click", "disabled"], [1, "bi", "bi-arrow-repeat"], [1, "ops-actions"], [1, "view-mode-toggle"], ["type", "button", 1, "view-toggle-btn", 3, "click"], [1, "bi", "bi-grid-fill"], [1, "bi", "bi-calendar3"], ["class", "btn-app primary", "type", "button", 3, "click", 4, "ngIf"], ["class", "calendar-view-container", 4, "ngIf"], ["class", "treks-deck", 4, "ngIf"], ["class", "pagination-shell", 4, "ngIf"], ["class", "state-center", 4, "ngIf"], ["cssClass", "batches-modal-wide", 3, "didDismiss", "isOpen"], ["cssClass", "bookings-modal-large", 3, "didDismiss", "isOpen"], [1, "last-run-tag"], ["type", "button", 1, "btn-app", "primary", 3, "click"], [1, "bi", "bi-plus-circle"], [1, "calendar-view-container"], [1, "calendar-header-card"], [1, "cal-nav-group"], ["title", "Previous Month", "aria-label", "Previous Month", 1, "cal-nav-btn", 3, "click"], [1, "bi", "bi-chevron-left"], [1, "cal-month-title"], ["title", "Next Month", "aria-label", "Next Month", 1, "cal-nav-btn", 3, "click"], [1, "bi", "bi-chevron-right"], [1, "cal-today-btn", 3, "click"], [1, "cal-filter-group"], [1, "trek-filter-wrapper"], [1, "bi", "bi-funnel", "filter-icon"], ["aria-label", "Filter calendar by trek", 1, "cal-select", 3, "ngModelChange", "ngModel"], ["value", "all"], [3, "value", 4, "ngFor", "ngForOf"], [1, "bi", "bi-chevron-down", "select-arrow"], [1, "cal-metrics-banner"], [1, "metric-item"], [1, "label"], [1, "val"], [1, "val", "text-success"], [1, "val", "highlight-occupancy"], ["class", "calendar-grid skeleton-cal-grid", 4, "ngIf"], ["class", "calendar-grid-wrap", 4, "ngIf"], [3, "value"], [1, "calendar-grid", "skeleton-cal-grid"], ["class", "cal-day-cell skeleton-day", 4, "ngFor", "ngForOf"], [1, "cal-day-cell", "skeleton-day"], [1, "skeleton-line", "sm", "shimmer", "mb-2"], [1, "skeleton-line", "md", "shimmer"], [1, "calendar-grid-wrap"], [1, "calendar-grid"], ["class", "cal-weekday-header", 4, "ngFor", "ngForOf"], ["class", "cal-day-cell", 3, "other-month", "is-today", 4, "ngFor", "ngForOf"], [1, "cal-weekday-header"], [1, "cal-day-cell"], [1, "cal-day-top"], [1, "cal-day-number"], ["class", "cal-batch-count", 4, "ngIf"], [1, "cal-batches-stack"], ["class", "cal-batch-pill", 3, "ngClass", "title", "click", 4, "ngFor", "ngForOf"], [1, "cal-batch-count"], [1, "cal-batch-pill", 3, "click", "ngClass", "title"], [1, "cal-batch-row"], [1, "cal-batch-name"], [1, "cal-batch-price"], [1, "cal-batch-sub"], [1, "cal-status-dot"], [1, "treks-deck"], ["class", "trek-card skeleton-card", 4, "ngFor", "ngForOf"], [1, "trek-card", "skeleton-card"], [1, "skeleton-cover", "shimmer"], [1, "trek-content"], [1, "skeleton-line", "lg", "shimmer", "mb-2"], [1, "skeleton-line", "md", "shimmer", "mb-3"], [1, "skeleton-line", "sm", "shimmer"], ["class", "trek-card", 4, "ngFor", "ngForOf"], [1, "trek-card"], [1, "trek-cover"], [1, "trek-cover-overlay"], [1, "trek-cover-badges"], [1, "trek-difficulty", 3, "ngClass"], ["class", "location-badge", 4, "ngIf"], [1, "trek-head"], [1, "trek-title"], ["aria-label", "View batches", "title", "View departure batches", 1, "icon-btn", "subtle", 3, "click"], [1, "bi", "bi-arrow-up-right"], [1, "trek-stats"], [1, "stat-tile"], [1, "text-success"], [1, "trek-actions"], ["type", "button", 1, "btn-app", "primary", "btn-sm", 3, "click"], [1, "bi", "bi-list-ul"], ["class", "btn-app ghost btn-sm", "type", "button", "title", "Download complete booking roster", 3, "disabled", "click", 4, "ngIf"], [1, "location-badge"], [1, "bi", "bi-geo-alt-fill"], ["type", "button", "title", "Download complete booking roster", 1, "btn-app", "ghost", "btn-sm", 3, "click", "disabled"], [1, "bi", "bi-download"], [1, "pagination-shell"], [1, "pagination-inner"], [1, "pagination-info"], [1, "pagination-controls"], [1, "page-size-selector"], [1, "pagination-select", 3, "ngModelChange", "ngModel"], [1, "page-actions"], ["type", "button", "title", "Previous Page", 1, "page-nav-btn", 3, "click", "disabled"], [4, "ngFor", "ngForOf"], ["type", "button", "title", "Next Page", 1, "page-nav-btn", 3, "click", "disabled"], ["class", "page-ellipsis", 4, "ngIf"], ["class", "page-btn", "type", "button", 3, "active", "click", 4, "ngIf"], [1, "page-ellipsis"], ["type", "button", 1, "page-btn", 3, "click"], [1, "state-center"], [1, "empty-card", "surface-card"], [1, "empty-icon"], [1, "bi", "bi-inbox"], ["color", "light"], [1, "bi", "bi-layers-fill", "text-accent", "me-2"], ["slot", "end"], [3, "click"], [1, "bi", "bi-x-lg"], [1, "modal-form-content"], [1, "modal-container"], ["class", "batches-list", 4, "ngIf"], ["class", "state-center py-4", 4, "ngIf"], [1, "batches-list"], ["class", "batch-card skeleton-card", 4, "ngFor", "ngForOf"], [1, "batch-card", "skeleton-card"], [1, "batch-search-wrap"], [1, "bi", "bi-search"], ["type", "text", "placeholder", "Search by date (e.g. Oct 2024) or status...", 3, "ngModelChange", "ngModel"], ["type", "button", "class", "clear-btn", 3, "click", 4, "ngIf"], ["class", "batch-card", 4, "ngFor", "ngForOf"], ["type", "button", 1, "clear-btn", 3, "click"], [1, "bi", "bi-x-circle-fill"], [1, "batch-card"], [1, "batch-header"], [1, "batch-dates"], [1, "badge-status-pill", 3, "ngClass"], [1, "batch-info-grid"], [1, "info-item"], [1, "value", "highlight-val"], [1, "value"], [1, "value", "text-success", "font-weight-bold"], [1, "value", "text-success"], [1, "slot-fill-section"], [1, "slot-fill-labels"], [1, "slot-fill-pct"], [1, "slot-bar"], [1, "slot-fill", 3, "ngClass"], [1, "batch-actions"], [1, "btn-app", "ghost", "btn-sm", 3, "click", "disabled"], [1, "bi", "bi-eye"], ["class", "btn-app ghost btn-sm", 3, "disabled", "click", 4, "ngIf"], ["class", "btn-app danger-ghost btn-sm", 3, "disabled", "click", 4, "ngIf"], ["class", "btn-app secondary btn-sm", 3, "disabled", "click", 4, "ngIf"], ["class", "btn-app secondary btn-sm", 3, "click", 4, "ngIf"], ["class", "status-completed-pill", 4, "ngIf"], [1, "btn-app", "danger-ghost", "btn-sm", 3, "click", "disabled"], [1, "bi", "bi-stop-circle"], [1, "btn-app", "secondary", "btn-sm", 3, "click", "disabled"], [1, "bi", "bi-play-circle"], [1, "btn-app", "secondary", "btn-sm", 3, "click"], [1, "bi", "bi-check-circle"], [1, "status-completed-pill"], [1, "bi", "bi-check2-all"], [1, "state-center", "py-4"], [1, "empty-card"], [1, "bi", "bi-calendar-x"], [1, "sub-title-dates"], ["class", "state-center py-5", 4, "ngIf"], ["class", "bookings-table-container table-wrap", 4, "ngIf"], [1, "state-center", "py-5"], [1, "bookings-table-container", "table-wrap"], [1, "bookings-table"], [2, "width", "40px"], [1, "summary-row", 3, "click"], ["type", "button", "aria-label", "Expand booking details", 1, "expand-btn"], [1, "bi", 3, "ngClass"], [1, "mono-ref"], [1, "text-muted", "small"], [1, "cell-phone"], [1, "pax-pill"], [1, "cell-amount"], ["class", "detail-row", 4, "ngIf"], [1, "detail-row"], ["colspan", "9"], [1, "detail-box"], [1, "bi", "bi-people-fill", "me-1"], ["class", "participants-grid", 4, "ngIf", "ngIfElse"], [1, "participants-grid"], ["class", "participant-card", 4, "ngFor", "ngForOf"], [1, "participant-card"], [1, "participant-head"], ["class", "badge-primary-pill", 4, "ngIf"], [1, "p-info-row"], [1, "p-label"], [1, "p-val"], ["class", "p-info-row", 4, "ngIf"], [1, "badge-primary-pill"], [1, "p-val", "mono"], [1, "p-val", "text-danger"], [1, "empty-note"]], template: function TrekBatchManagementComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "app-admin-shell", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5);
    \u0275\u0275element(5, "span", 6);
    \u0275\u0275elementStart(6, "div", 7)(7, "div", 8)(8, "strong");
    \u0275\u0275text(9, "Automated Trek Completion Engine");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 9);
    \u0275\u0275element(11, "i", 10);
    \u0275\u0275text(12, " Runs Every 30 Mins");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 11);
    \u0275\u0275text(14, " Departure batches whose end date has passed (");
    \u0275\u0275elementStart(15, "span", 12);
    \u0275\u0275text(16, "end_date < today");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, ") and their confirmed bookings automatically transition to ");
    \u0275\u0275elementStart(18, "strong");
    \u0275\u0275text(19, "Completed");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, ". ");
    \u0275\u0275template(21, TrekBatchManagementComponent_span_21_Template, 3, 4, "span", 13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 14)(23, "button", 15);
    \u0275\u0275listener("click", function TrekBatchManagementComponent_Template_button_click_23_listener() {
      return ctx.triggerAutoCompletionSweep();
    });
    \u0275\u0275element(24, "i", 16);
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(27, "div", 17)(28, "div", 18)(29, "button", 19);
    \u0275\u0275listener("click", function TrekBatchManagementComponent_Template_button_click_29_listener() {
      return ctx.setViewMode("treks");
    });
    \u0275\u0275element(30, "i", 20);
    \u0275\u0275elementStart(31, "span");
    \u0275\u0275text(32, "Trek Cards");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "button", 19);
    \u0275\u0275listener("click", function TrekBatchManagementComponent_Template_button_click_33_listener() {
      return ctx.setViewMode("calendar");
    });
    \u0275\u0275element(34, "i", 21);
    \u0275\u0275elementStart(35, "span");
    \u0275\u0275text(36, "Batch Calendar / Scheduler");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(37, TrekBatchManagementComponent_button_37_Template, 4, 0, "button", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275template(38, TrekBatchManagementComponent_section_38_Template, 42, 10, "section", 23)(39, TrekBatchManagementComponent_section_39_Template, 2, 2, "section", 24)(40, TrekBatchManagementComponent_section_40_Template, 2, 1, "section", 24)(41, TrekBatchManagementComponent_div_41_Template, 29, 8, "div", 25)(42, TrekBatchManagementComponent_section_42_Template, 9, 1, "section", 26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "ion-modal", 27);
    \u0275\u0275listener("didDismiss", function TrekBatchManagementComponent_Template_ion_modal_didDismiss_43_listener() {
      return ctx.closeBatchesModal();
    });
    \u0275\u0275template(44, TrekBatchManagementComponent_ng_template_44_Template, 13, 4, "ng-template");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "ion-modal", 28);
    \u0275\u0275listener("didDismiss", function TrekBatchManagementComponent_Template_ion_modal_didDismiss_45_listener() {
      return ctx.closeBookingsModal();
    });
    \u0275\u0275template(46, TrekBatchManagementComponent_ng_template_46_Template, 16, 12, "ng-template");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(21);
    \u0275\u0275property("ngIf", ctx.autoCompleteStatus == null ? null : ctx.autoCompleteStatus.last_run);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx.isSweeping);
    \u0275\u0275advance();
    \u0275\u0275classProp("spin", ctx.isSweeping);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.isSweeping ? "Sweeping Database..." : "Run Auto-Completion Sweep");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx.viewMode === "treks");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx.viewMode === "calendar");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.authService.hasPermission("treks.manage"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.viewMode === "calendar");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.viewMode === "treks" && ctx.isLoadingTreks);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.viewMode === "treks" && !ctx.isLoadingTreks && ctx.treks.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.viewMode === "treks" && !ctx.isLoadingTreks && ctx.treks.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.viewMode === "treks" && !ctx.isLoadingTreks && ctx.treks.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("isOpen", ctx.showBatchesModal);
    \u0275\u0275advance(2);
    \u0275\u0275property("isOpen", ctx.showBookingsModal);
  }
}, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, AdminShellComponent, UpperCasePipe, DecimalPipe, TitleCasePipe, DatePipe], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.trek-batch-page[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: -400px 0;\n  }\n  100% {\n    background-position: 400px 0;\n  }\n}\n.shimmer[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      rgba(0, 0, 0, 0.04) 25%,\n      rgba(0, 0, 0, 0.09) 50%,\n      rgba(0, 0, 0, 0.04) 75%);\n  background-size: 800px 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.5s infinite linear;\n  border-radius: 6px;\n}\n.skeleton-cover[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 180px;\n}\n.skeleton-line[_ngcontent-%COMP%] {\n  height: 14px;\n  border-radius: 4px;\n}\n.skeleton-line.sm[_ngcontent-%COMP%] {\n  width: 64px;\n}\n.skeleton-line.md[_ngcontent-%COMP%] {\n  width: 120px;\n}\n.skeleton-line.lg[_ngcontent-%COMP%] {\n  width: 180px;\n}\n.automation-banner[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(29, 122, 109, 0.08),\n      rgba(241, 166, 77, 0.12));\n  border: 1px solid rgba(29, 122, 109, 0.2);\n  border-radius: var(--app-radius, 14px);\n  padding: 16px 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 20px;\n  box-shadow: var(--app-shadow-soft, 0 2px 8px rgba(0, 0, 0, 0.04));\n  flex-wrap: wrap;\n}\n.auto-badge-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  flex: 1 1 300px;\n}\n.auto-indicator-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #10b981;\n  margin-top: 5px;\n  flex-shrink: 0;\n}\n.auto-indicator-dot.pulse[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);\n  animation: _ngcontent-%COMP%_pulse-green 2s infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse-green {\n  0% {\n    transform: scale(0.95);\n    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);\n  }\n  70% {\n    transform: scale(1);\n    box-shadow: 0 0 0 8px rgba(16, 185, 129, 0);\n  }\n  100% {\n    transform: scale(0.95);\n    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);\n  }\n}\n.auto-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 2px;\n  flex-wrap: wrap;\n}\n.auto-title[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: var(--app-ink, #111827);\n}\n.badge-status-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 2px 8px;\n  background: #ecfdf5;\n  color: #065f46;\n  border: 1px solid #a7f3d0;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 700;\n}\n.auto-desc[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--app-ink-muted, #4b5563);\n  line-height: 1.4;\n}\n.auto-desc[_ngcontent-%COMP%]   .code[_ngcontent-%COMP%] {\n  font-family: ui-monospace, monospace;\n  background: rgba(0, 0, 0, 0.05);\n  padding: 1px 4px;\n  border-radius: 4px;\n  font-size: 0.78rem;\n}\n.btn-sweep[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: #fff;\n  border: 1px solid rgba(29, 122, 109, 0.3);\n  color: var(--app-accent, #1d7a6d);\n  padding: 8px 16px;\n  border-radius: 10px;\n  font-size: 0.84rem;\n  font-weight: 700;\n  cursor: pointer;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);\n  transition: all 0.15s ease;\n  white-space: nowrap;\n}\n.btn-sweep[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--app-accent, #1d7a6d);\n  color: #fff;\n  border-color: var(--app-accent, #1d7a6d);\n}\n.btn-sweep[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-sweep[_ngcontent-%COMP%]   i.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s infinite linear;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.ops-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n.view-mode-toggle[_ngcontent-%COMP%] {\n  display: inline-flex;\n  background: #f1f5f9;\n  border-radius: 12px;\n  padding: 4px;\n  gap: 4px;\n  border: 1px solid var(--app-border, #e2e8f0);\n}\n.view-mode-toggle[_ngcontent-%COMP%]   .view-toggle-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  border-radius: 9px;\n  border: none;\n  background: transparent;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--app-ink-muted, #64748b);\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.view-mode-toggle[_ngcontent-%COMP%]   .view-toggle-btn[_ngcontent-%COMP%]:hover {\n  color: #0f172a;\n}\n.view-mode-toggle[_ngcontent-%COMP%]   .view-toggle-btn.active[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: var(--app-accent, #1d7a6d);\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);\n}\n.calendar-view-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease-out;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.calendar-header-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: var(--app-radius, 14px);\n  padding: 14px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n  box-shadow: var(--app-shadow-soft, 0 2px 8px rgba(0, 0, 0, 0.04));\n}\n.cal-nav-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.cal-nav-group[_ngcontent-%COMP%]   .cal-month-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 800;\n  color: #0f172a;\n  min-width: 180px;\n  text-align: center;\n}\n.cal-nav-group[_ngcontent-%COMP%]   .cal-nav-btn[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  border: 1px solid #e2e8f0;\n  background: #f8fafc;\n  color: #334155;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.cal-nav-group[_ngcontent-%COMP%]   .cal-nav-btn[_ngcontent-%COMP%]:hover {\n  background: var(--app-accent, #1d7a6d);\n  color: #ffffff;\n  border-color: var(--app-accent, #1d7a6d);\n}\n.cal-nav-group[_ngcontent-%COMP%]   .cal-today-btn[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border-radius: 8px;\n  border: 1px solid #cbd5e1;\n  background: #ffffff;\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: #334155;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.cal-nav-group[_ngcontent-%COMP%]   .cal-today-btn[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n.cal-filter-group[_ngcontent-%COMP%]   .trek-filter-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.cal-filter-group[_ngcontent-%COMP%]   .trek-filter-wrapper[_ngcontent-%COMP%]   .filter-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  color: #94a3b8;\n  pointer-events: none;\n  font-size: 0.85rem;\n}\n.cal-filter-group[_ngcontent-%COMP%]   .trek-filter-wrapper[_ngcontent-%COMP%]   .cal-select[_ngcontent-%COMP%] {\n  appearance: none;\n  -webkit-appearance: none;\n  background: #f8fafc;\n  border: 1px solid #cbd5e1;\n  border-radius: 10px;\n  padding: 8px 32px 8px 30px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #1e293b;\n  cursor: pointer;\n  outline: none;\n  min-width: 200px;\n}\n.cal-filter-group[_ngcontent-%COMP%]   .trek-filter-wrapper[_ngcontent-%COMP%]   .cal-select[_ngcontent-%COMP%]:focus {\n  border-color: var(--app-accent, #1d7a6d);\n  background: #fff;\n}\n.cal-filter-group[_ngcontent-%COMP%]   .trek-filter-wrapper[_ngcontent-%COMP%]   .select-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  pointer-events: none;\n  color: #64748b;\n  font-size: 0.72rem;\n}\n.cal-metrics-banner[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 12px;\n}\n.cal-metrics-banner[_ngcontent-%COMP%]   .metric-item[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: 12px;\n  padding: 12px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03);\n}\n.cal-metrics-banner[_ngcontent-%COMP%]   .metric-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n}\n.cal-metrics-banner[_ngcontent-%COMP%]   .metric-item[_ngcontent-%COMP%]   .val[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.cal-metrics-banner[_ngcontent-%COMP%]   .metric-item[_ngcontent-%COMP%]   .val.highlight-occupancy[_ngcontent-%COMP%] {\n  color: var(--app-accent, #1d7a6d);\n}\n.calendar-grid-wrap[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: var(--app-radius, 14px);\n  overflow: hidden;\n  box-shadow: var(--app-shadow-soft, 0 2px 8px rgba(0, 0, 0, 0.04));\n}\n.calendar-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  background: #e2e8f0;\n  gap: 1px;\n}\n.calendar-grid[_ngcontent-%COMP%]   .cal-weekday-header[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  padding: 10px;\n  text-align: center;\n  font-size: 0.76rem;\n  font-weight: 700;\n  color: #475569;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.calendar-grid[_ngcontent-%COMP%]   .cal-day-cell[_ngcontent-%COMP%] {\n  background: #ffffff;\n  min-height: 110px;\n  padding: 8px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  transition: background 0.15s ease;\n}\n.calendar-grid[_ngcontent-%COMP%]   .cal-day-cell.other-month[_ngcontent-%COMP%] {\n  background: #fafbfc;\n  opacity: 0.5;\n}\n.calendar-grid[_ngcontent-%COMP%]   .cal-day-cell.is-today[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n}\n.calendar-grid[_ngcontent-%COMP%]   .cal-day-cell.is-today[_ngcontent-%COMP%]   .cal-day-number[_ngcontent-%COMP%] {\n  background: var(--app-accent, #1d7a6d);\n  color: #fff;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.calendar-grid[_ngcontent-%COMP%]   .cal-day-cell[_ngcontent-%COMP%]   .cal-day-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.calendar-grid[_ngcontent-%COMP%]   .cal-day-cell[_ngcontent-%COMP%]   .cal-day-top[_ngcontent-%COMP%]   .cal-day-number[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #1e293b;\n}\n.calendar-grid[_ngcontent-%COMP%]   .cal-day-cell[_ngcontent-%COMP%]   .cal-day-top[_ngcontent-%COMP%]   .cal-batch-count[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 600;\n  color: #94a3b8;\n}\n.cal-batches-stack[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.cal-batch-pill[_ngcontent-%COMP%] {\n  padding: 5px 8px;\n  border-radius: 6px;\n  font-size: 0.72rem;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  border-left: 3px solid transparent;\n}\n.cal-batch-pill.slot-fill-empty[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-left-color: #94a3b8;\n  color: #334155;\n}\n.cal-batch-pill.slot-fill-low[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  border-left-color: #3b82f6;\n  color: #1e40af;\n}\n.cal-batch-pill.slot-fill-medium[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  border-left-color: #10b981;\n  color: #065f46;\n}\n.cal-batch-pill.slot-fill-high[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  border-left-color: #f59e0b;\n  color: #92400e;\n}\n.cal-batch-pill.slot-fill-full[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border-left-color: #ef4444;\n  color: #991b1b;\n}\n.cal-batch-pill[_ngcontent-%COMP%]:hover {\n  filter: brightness(0.95);\n  transform: translateY(-1px);\n}\n.cal-batch-pill[_ngcontent-%COMP%]   .cal-batch-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-weight: 700;\n  gap: 4px;\n}\n.cal-batch-pill[_ngcontent-%COMP%]   .cal-batch-row[_ngcontent-%COMP%]   .cal-batch-name[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.cal-batch-pill[_ngcontent-%COMP%]   .cal-batch-sub[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 0.68rem;\n  opacity: 0.85;\n  margin-top: 1px;\n}\n.cal-batch-pill[_ngcontent-%COMP%]   .cal-batch-sub[_ngcontent-%COMP%]   .cal-status-dot[_ngcontent-%COMP%] {\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  background: #10b981;\n}\n.cal-batch-pill[_ngcontent-%COMP%]   .cal-batch-sub[_ngcontent-%COMP%]   .cal-status-dot.inactive[_ngcontent-%COMP%] {\n  background: #94a3b8;\n}\n.treks-deck[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.trek-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: var(--app-radius, 16px);\n  overflow: hidden;\n  box-shadow: var(--app-shadow-soft, 0 2px 8px rgba(0, 0, 0, 0.04));\n  display: flex;\n  flex-direction: column;\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease,\n    border-color 0.2s ease;\n}\n.trek-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: var(--app-shadow, 0 8px 20px rgba(0, 0, 0, 0.08));\n  border-color: #cbd5e1;\n}\n.trek-cover[_ngcontent-%COMP%] {\n  position: relative;\n  height: 180px;\n  background-size: cover;\n  background-position: center;\n  background-color: #f1f5f9;\n}\n.trek-cover[_ngcontent-%COMP%]   .trek-cover-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to top,\n      rgba(0, 0, 0, 0.65) 0%,\n      rgba(0, 0, 0, 0.1) 60%,\n      transparent 100%);\n}\n.trek-cover[_ngcontent-%COMP%]   .trek-cover-badges[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 12px;\n  left: 14px;\n  right: 14px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 8px;\n  z-index: 1;\n}\n.trek-cover[_ngcontent-%COMP%]   .trek-cover-badges[_ngcontent-%COMP%]   .trek-difficulty[_ngcontent-%COMP%] {\n  padding: 3px 8px;\n  border-radius: 6px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.trek-cover[_ngcontent-%COMP%]   .trek-cover-badges[_ngcontent-%COMP%]   .trek-difficulty.difficulty-easy[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.85);\n  color: #fff;\n}\n.trek-cover[_ngcontent-%COMP%]   .trek-cover-badges[_ngcontent-%COMP%]   .trek-difficulty.difficulty-moderate[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.85);\n  color: #fff;\n}\n.trek-cover[_ngcontent-%COMP%]   .trek-cover-badges[_ngcontent-%COMP%]   .trek-difficulty.difficulty-difficult[_ngcontent-%COMP%], \n.trek-cover[_ngcontent-%COMP%]   .trek-cover-badges[_ngcontent-%COMP%]   .trek-difficulty.difficulty-hard[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.85);\n  color: #fff;\n}\n.trek-cover[_ngcontent-%COMP%]   .trek-cover-badges[_ngcontent-%COMP%]   .location-badge[_ngcontent-%COMP%] {\n  background: rgba(15, 23, 42, 0.7);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  color: #fff;\n  font-size: 0.74rem;\n  font-weight: 600;\n  padding: 3px 8px;\n  border-radius: 6px;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.trek-content[_ngcontent-%COMP%] {\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  flex: 1;\n}\n.trek-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 10px;\n}\n.trek-head[_ngcontent-%COMP%]   .trek-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--app-ink, #111827);\n  line-height: 1.3;\n}\n.trek-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  background: var(--app-surface, #f8fafc);\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: 10px;\n  padding: 10px;\n}\n.trek-stats[_ngcontent-%COMP%]   .stat-tile[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 2px;\n}\n.trek-stats[_ngcontent-%COMP%]   .stat-tile[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n}\n.trek-stats[_ngcontent-%COMP%]   .stat-tile[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.trek-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-top: auto;\n}\n.trek-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.modal-form-content[_ngcontent-%COMP%] {\n  --background: #f8fafc;\n}\n.modal-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 900px;\n  margin: 0 auto;\n}\n.batches-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.batch-search-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fff;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: 10px;\n  padding: 8px 12px;\n  margin-bottom: 4px;\n}\n.batch-search-wrap[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 0.9rem;\n}\n.batch-search-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  flex: 1;\n  font-size: 0.88rem;\n  background: transparent;\n}\n.batch-search-wrap[_ngcontent-%COMP%]   .clear-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: #94a3b8;\n  cursor: pointer;\n  padding: 0;\n}\n.batch-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: 14px;\n  padding: 16px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.batch-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 10px;\n}\n.batch-header[_ngcontent-%COMP%]   .batch-dates[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: 700;\n  font-size: 0.95rem;\n  color: #0f172a;\n}\n.batch-header[_ngcontent-%COMP%]   .batch-dates[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--app-accent, #1d7a6d);\n}\n.batch-info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 10px 14px;\n}\n.batch-info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.batch-info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n}\n.batch-info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: #1e293b;\n}\n.batch-info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .value.highlight-val[_ngcontent-%COMP%] {\n  color: var(--app-accent, #1d7a6d);\n}\n.slot-fill-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.slot-fill-section[_ngcontent-%COMP%]   .slot-fill-labels[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.76rem;\n  font-weight: 600;\n  color: #475569;\n}\n.slot-fill-section[_ngcontent-%COMP%]   .slot-bar[_ngcontent-%COMP%] {\n  height: 8px;\n  background: #e2e8f0;\n  border-radius: 999px;\n  overflow: hidden;\n}\n.slot-fill-section[_ngcontent-%COMP%]   .slot-bar[_ngcontent-%COMP%]   .slot-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 999px;\n  transition: width 0.3s ease;\n}\n.slot-fill-section[_ngcontent-%COMP%]   .slot-bar[_ngcontent-%COMP%]   .slot-fill.slot-fill-empty[_ngcontent-%COMP%] {\n  background: #cbd5e1;\n}\n.slot-fill-section[_ngcontent-%COMP%]   .slot-bar[_ngcontent-%COMP%]   .slot-fill.slot-fill-low[_ngcontent-%COMP%] {\n  background: #3b82f6;\n}\n.slot-fill-section[_ngcontent-%COMP%]   .slot-bar[_ngcontent-%COMP%]   .slot-fill.slot-fill-medium[_ngcontent-%COMP%] {\n  background: #10b981;\n}\n.slot-fill-section[_ngcontent-%COMP%]   .slot-bar[_ngcontent-%COMP%]   .slot-fill.slot-fill-high[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.slot-fill-section[_ngcontent-%COMP%]   .slot-bar[_ngcontent-%COMP%]   .slot-fill.slot-fill-full[_ngcontent-%COMP%] {\n  background: #ef4444;\n}\n.batch-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.batch-actions[_ngcontent-%COMP%]   .status-completed-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 12px;\n  background: #f1f5f9;\n  color: #475569;\n  border-radius: 8px;\n  font-size: 0.8rem;\n  font-weight: 700;\n}\n.bookings-table-container[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  overflow: hidden;\n}\n.bookings-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.85rem;\n}\n.bookings-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  padding: 10px 12px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #475569;\n  border-bottom: 1px solid #e2e8f0;\n  white-space: nowrap;\n}\n.bookings-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.summary-row[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f1f5f9;\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.bookings-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.summary-row[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.bookings-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  vertical-align: middle;\n}\n.bookings-table[_ngcontent-%COMP%]   .expand-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: #64748b;\n  cursor: pointer;\n  padding: 2px 4px;\n  font-size: 0.9rem;\n}\n.bookings-table[_ngcontent-%COMP%]   .mono-ref[_ngcontent-%COMP%] {\n  font-family: ui-monospace, monospace;\n  color: var(--app-accent, #1d7a6d);\n}\n.bookings-table[_ngcontent-%COMP%]   .pax-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: #f1f5f9;\n  font-weight: 700;\n  font-size: 0.78rem;\n}\n.detail-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0;\n  background: #f8fafc;\n}\n.detail-box[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.detail-box[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.participants-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 12px;\n}\n.participant-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  font-size: 0.8rem;\n}\n.participant-card[_ngcontent-%COMP%]   .participant-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid #f1f5f9;\n  padding-bottom: 4px;\n  margin-bottom: 4px;\n}\n.participant-card[_ngcontent-%COMP%]   .participant-head[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 700;\n}\n.participant-card[_ngcontent-%COMP%]   .badge-primary-pill[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n  padding: 1px 6px;\n  border-radius: 4px;\n  font-size: 0.7rem;\n  font-weight: 700;\n}\n.participant-card[_ngcontent-%COMP%]   .p-info-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 6px;\n}\n.participant-card[_ngcontent-%COMP%]   .p-info-row[_ngcontent-%COMP%]   .p-label[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-weight: 500;\n}\n.participant-card[_ngcontent-%COMP%]   .p-info-row[_ngcontent-%COMP%]   .p-val[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 600;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  border: 1px solid var(--app-border, #e2e8f0);\n  background: #fff;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #334155;\n  transition: all 0.15s ease;\n}\n.icon-btn.subtle[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  color: #64748b;\n}\n.icon-btn.subtle[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n@media (max-width: 1024px) {\n  .cal-metrics-banner[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .automation-banner[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .automation-banner[_ngcontent-%COMP%]   .auto-actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .automation-banner[_ngcontent-%COMP%]   .auto-actions[_ngcontent-%COMP%]   .btn-sweep[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .ops-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .ops-actions[_ngcontent-%COMP%]   .view-mode-toggle[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .ops-actions[_ngcontent-%COMP%]   .view-toggle-btn[_ngcontent-%COMP%] {\n    flex: 1;\n    justify-content: center;\n  }\n  .ops-actions[_ngcontent-%COMP%]   .btn-app[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .calendar-header-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .calendar-header-card[_ngcontent-%COMP%]   .cal-nav-group[_ngcontent-%COMP%] {\n    justify-content: space-between;\n    width: 100%;\n  }\n  .calendar-header-card[_ngcontent-%COMP%]   .cal-filter-group[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .calendar-header-card[_ngcontent-%COMP%]   .cal-filter-group[_ngcontent-%COMP%]   .cal-select[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .cal-metrics-banner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .calendar-grid[_ngcontent-%COMP%]   .cal-day-cell[_ngcontent-%COMP%] {\n    min-height: 80px;\n    padding: 4px;\n  }\n  .treks-deck[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .batch-info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n/*# sourceMappingURL=trek-batch-management.component.css.map */'] });
var TrekBatchManagementComponent = _TrekBatchManagementComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrekBatchManagementComponent, [{
    type: Component,
    args: [{ selector: "app-trek-batch-management", standalone: true, imports: [CommonModule, FormsModule, AdminShellComponent], schemas: [CUSTOM_ELEMENTS_SCHEMA], template: `<div class="trek-batch-page">
  <app-admin-shell
    title="Trek & Batch Management"
    subtitle="Control inventory, departure schedules, booking flows, and batch capacity from one command center."
    sectionLabel="Operations">

    <div class="app-shell">
      <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 AUTOMATION BANNER \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
      <div class="automation-banner">
        <div class="auto-badge-group">
          <span class="auto-indicator-dot pulse"></span>
          <div class="auto-info">
            <div class="auto-title">
              <strong>Automated Trek Completion Engine</strong>
              <span class="badge-status-pill"><i class="bi bi-clock-history"></i> Runs Every 30 Mins</span>
            </div>
            <div class="auto-desc">
              Departure batches whose end date has passed (<span class="code">end_date &lt; today</span>) and their confirmed bookings automatically transition to <strong>Completed</strong>.
              <span *ngIf="autoCompleteStatus?.last_run" class="last-run-tag">
                &bull; Last run: {{ autoCompleteStatus.last_run | date:'shortTime' }}
              </span>
            </div>
          </div>
        </div>

        <div class="auto-actions">
          <button
            class="btn-sweep"
            type="button"
            (click)="triggerAutoCompletionSweep()"
            [disabled]="isSweeping"
            title="Scan database and complete past batches and bookings immediately">
            <i class="bi bi-arrow-repeat" [class.spin]="isSweeping"></i>
            <span>{{ isSweeping ? 'Sweeping Database...' : 'Run Auto-Completion Sweep' }}</span>
          </button>
        </div>
      </div>

      <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 VIEW MODE CONTROLS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
      <div class="ops-actions">
        <div class="view-mode-toggle">
          <button
            type="button"
            class="view-toggle-btn"
            [class.active]="viewMode === 'treks'"
            (click)="setViewMode('treks')">
            <i class="bi bi-grid-fill"></i>
            <span>Trek Cards</span>
          </button>
          <button
            type="button"
            class="view-toggle-btn"
            [class.active]="viewMode === 'calendar'"
            (click)="setViewMode('calendar')">
            <i class="bi bi-calendar3"></i>
            <span>Batch Calendar / Scheduler</span>
          </button>
        </div>

        <button
          *ngIf="authService.hasPermission('treks.manage')"
          class="btn-app primary"
          type="button"
          (click)="goToAddTrek()">
          <i class="bi bi-plus-circle"></i>
          <span>Add Trek</span>
        </button>
      </div>

      <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 BATCH CALENDAR VIEW \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
      <section *ngIf="viewMode === 'calendar'" class="calendar-view-container">
        <!-- Calendar Controls & Filter Header -->
        <div class="calendar-header-card">
          <div class="cal-nav-group">
            <button class="cal-nav-btn" (click)="prevMonth()" title="Previous Month" aria-label="Previous Month">
              <i class="bi bi-chevron-left"></i>
            </button>
            <h2 class="cal-month-title">{{ calendarMonthLabel }}</h2>
            <button class="cal-nav-btn" (click)="nextMonth()" title="Next Month" aria-label="Next Month">
              <i class="bi bi-chevron-right"></i>
            </button>
            <button class="cal-today-btn" (click)="goToToday()">Today</button>
          </div>

          <div class="cal-filter-group">
            <div class="trek-filter-wrapper">
              <i class="bi bi-funnel filter-icon"></i>
              <select [(ngModel)]="calendarSelectedTrekId" (ngModelChange)="onCalendarTrekFilterChange()" class="cal-select" aria-label="Filter calendar by trek">
                <option value="all">All Treks ({{ treks.length }})</option>
                <option *ngFor="let trek of treks" [value]="trek.id">{{ trek.name }}</option>
              </select>
              <i class="bi bi-chevron-down select-arrow"></i>
            </div>
          </div>
        </div>

        <!-- Month Metrics Banner -->
        <div class="cal-metrics-banner">
          <div class="metric-item">
            <span class="label">Batches This Month</span>
            <span class="val">{{ calendarMonthBatchesCount }}</span>
          </div>
          <div class="metric-item">
            <span class="label">Total Capacity</span>
            <span class="val">{{ calendarMonthCapacity.totalSlots }} slots</span>
          </div>
          <div class="metric-item">
            <span class="label">Booked Slots</span>
            <span class="val text-success">{{ calendarMonthCapacity.bookedSlots }} slots</span>
          </div>
          <div class="metric-item">
            <span class="label">Occupancy Rate</span>
            <span class="val highlight-occupancy">{{ calendarMonthCapacity.occupancyRate }}%</span>
          </div>
        </div>

        <!-- Calendar Loading Skeleton -->
        <div *ngIf="isLoadingCalendar" class="calendar-grid skeleton-cal-grid">
          <div class="cal-day-cell skeleton-day" *ngFor="let i of [1,2,3,4,5,6,7,8,9,10,11,12,13,14]">
            <div class="skeleton-line sm shimmer mb-2"></div>
            <div class="skeleton-line md shimmer"></div>
          </div>
        </div>

        <!-- 7-Day Month Grid -->
        <div *ngIf="!isLoadingCalendar" class="calendar-grid-wrap">
          <div class="calendar-grid">
            <!-- Weekday Headers -->
            <div class="cal-weekday-header" *ngFor="let wd of weekDays">
              {{ wd }}
            </div>

            <!-- Day Cells -->
            <div
              *ngFor="let day of calendarDays"
              class="cal-day-cell"
              [class.other-month]="!day.isCurrentMonth"
              [class.is-today]="day.isToday">
              
              <div class="cal-day-top">
                <span class="cal-day-number">{{ day.dayNumber }}</span>
                <span class="cal-batch-count" *ngIf="day.batches.length > 0">
                  {{ day.batches.length }} {{ day.batches.length === 1 ? 'batch' : 'batches' }}
                </span>
              </div>

              <div class="cal-batches-stack">
                <div
                  *ngFor="let b of day.batches"
                  class="cal-batch-pill"
                  [ngClass]="getSlotFillClass(b)"
                  (click)="openCalendarBatchDetails(b)"
                  [title]="b.trek_name + ' (' + (b.booked_slots || 0) + '/' + b.available_slots + ' slots) - Click to view bookings'">
                  
                  <div class="cal-batch-row">
                    <span class="cal-batch-name">{{ b.trek_name }}</span>
                    <span class="cal-batch-price">\u20B9{{ b.price | number:'1.0-0' }}</span>
                  </div>
                  <div class="cal-batch-sub">
                    <span>{{ b.booked_slots || 0 }}/{{ b.available_slots }} booked</span>
                    <span class="cal-status-dot" [class.inactive]="b.status === 'inactive'"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 TREK CARDS LIST VIEW \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
      <!-- Skeletons -->
      <section *ngIf="viewMode === 'treks' && isLoadingTreks" class="treks-deck">
        <article class="trek-card skeleton-card" *ngFor="let i of [1,2,3,4,5,6]">
          <div class="skeleton-cover shimmer"></div>
          <div class="trek-content">
            <div class="skeleton-line lg shimmer mb-2"></div>
            <div class="skeleton-line md shimmer mb-3"></div>
            <div class="skeleton-line sm shimmer"></div>
          </div>
        </article>
      </section>

      <section *ngIf="viewMode === 'treks' && !isLoadingTreks && treks.length > 0" class="treks-deck">
        <article class="trek-card" *ngFor="let trek of paginatedTreks">
          <div
            class="trek-cover"
            [style.backgroundImage]="'url(' + resolveImageUrl(trek.cover_image || trek.image_url || trek.image, trek.updated_at || trek.created_at) + ')'">
            <div class="trek-cover-overlay"></div>
            <div class="trek-cover-badges">
              <span class="trek-difficulty" [ngClass]="'difficulty-' + (trek.difficulty || 'moderate').toLowerCase()">
                {{ trek.difficulty || 'Moderate' }}
              </span>
              <span class="location-badge" *ngIf="trek.location">
                <i class="bi bi-geo-alt-fill"></i> {{ trek.location }}
              </span>
            </div>
          </div>

          <div class="trek-content">
            <div class="trek-head">
              <h3 class="trek-title">{{ trek.name }}</h3>
              <button class="icon-btn subtle" (click)="viewBatches(trek)" aria-label="View batches" title="View departure batches">
                <i class="bi bi-arrow-up-right"></i>
              </button>
            </div>

            <div class="trek-stats">
              <div class="stat-tile">
                <span>Total Batches</span>
                <strong>{{ trek.total_batches || 0 }}</strong>
              </div>
              <div class="stat-tile">
                <span>Bookings</span>
                <strong>{{ trek.total_bookings || 0 }}</strong>
              </div>
              <div class="stat-tile">
                <span>Active Batches</span>
                <strong class="text-success">{{ trek.active_batches || 0 }}</strong>
              </div>
            </div>

            <div class="trek-actions">
              <button class="btn-app primary btn-sm" (click)="viewBatches(trek)" type="button">
                <i class="bi bi-list-ul"></i>
                Manage Batches
              </button>
              <button
                *ngIf="authService.hasPermission('bookings.manage')"
                class="btn-app ghost btn-sm"
                type="button"
                (click)="downloadAllTrekBookings(trek)"
                [disabled]="trek.total_bookings === 0"
                title="Download complete booking roster">
                <i class="bi bi-download"></i>
                Download All
              </button>
            </div>
          </div>
        </article>
      </section>

      <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 PAGINATION CONTROLS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
      <div class="pagination-shell" *ngIf="viewMode === 'treks' && !isLoadingTreks && treks.length > 0">
        <div class="pagination-inner">
          <div class="pagination-info">
            Showing <strong>{{ (currentPage - 1) * Number(pageSize) + 1 }}</strong> to
            <strong>{{ Math.min(currentPage * Number(pageSize), treks.length) }}</strong> of
            <strong>{{ treks.length }}</strong> treks
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

      <!-- Empty State -->
      <section *ngIf="viewMode === 'treks' && !isLoadingTreks && treks.length === 0" class="state-center">
        <div class="empty-card surface-card">
          <div class="empty-icon">
            <i class="bi bi-inbox"></i>
          </div>
          <h3>No Treks Found</h3>
          <p>Create your first trek expedition to configure departure batches.</p>
          <button *ngIf="authService.hasPermission('treks.manage')" class="btn-app primary" type="button" (click)="goToAddTrek()">
            <i class="bi bi-plus-circle"></i> Add Trek
          </button>
        </div>
      </section>
    </div>
  </app-admin-shell>
</div>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
     Batches Modal for a Trek
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<ion-modal [isOpen]="showBatchesModal" (didDismiss)="closeBatchesModal()" cssClass="batches-modal-wide">
  <ng-template>
    <ion-header>
      <ion-toolbar color="light">
        <ion-title>
          <i class="bi bi-layers-fill text-accent me-2"></i>
          {{ selectedTrek?.name }} &bull; Batches
        </ion-title>
        <ion-buttons slot="end">
          <ion-button (click)="closeBatchesModal()">
            <i class="bi bi-x-lg"></i>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <div class="modal-form-content">
      <div class="modal-container">
        <!-- Modal Loading Skeletons -->
        <div *ngIf="isLoadingBatches" class="batches-list">
          <div class="batch-card skeleton-card" *ngFor="let i of [1,2,3]">
            <div class="skeleton-line lg shimmer mb-2"></div>
            <div class="skeleton-line md shimmer mb-3"></div>
            <div class="skeleton-line sm shimmer"></div>
          </div>
        </div>

        <div *ngIf="!isLoadingBatches" class="batches-list">
          <!-- Search inside modal -->
          <div class="batch-search-wrap">
            <i class="bi bi-search"></i>
            <input
              type="text"
              [(ngModel)]="batchSearchQuery"
              placeholder="Search by date (e.g. Oct 2024) or status..." />
            <button
              type="button"
              class="clear-btn"
              *ngIf="batchSearchQuery"
              (click)="batchSearchQuery = ''">
              <i class="bi bi-x-circle-fill"></i>
            </button>
          </div>

          <div class="batch-card" *ngFor="let batch of filteredBatches">
            <div class="batch-header">
              <div class="batch-dates">
                <i class="bi bi-calendar3"></i>
                <span>
                  {{ batch.start_date | date:'MMM dd, yyyy' }} &rarr;
                  {{ batch.end_date | date:'MMM dd, yyyy' }}
                </span>
              </div>
              <span class="badge-status-pill" [ngClass]="getBatchStatusClass(batch.status)">
                {{ batch.status | uppercase }}
              </span>
            </div>

            <div class="batch-info-grid">
              <div class="info-item">
                <span class="label">Price per person</span>
                <span class="value highlight-val">\u20B9{{ batch.price | number:'1.0-0' }}</span>
              </div>
              <div class="info-item">
                <span class="label">Total Capacity</span>
                <span class="value">{{ batch.available_slots }} slots</span>
              </div>
              <div class="info-item">
                <span class="label">Booked Slots</span>
                <span class="value text-success font-weight-bold">{{ batch.booked_slots || 0 }}</span>
              </div>
              <div class="info-item">
                <span class="label">Total Orders</span>
                <span class="value">{{ batch.total_bookings || 0 }}</span>
              </div>
              <div class="info-item">
                <span class="label">Total Trekkers</span>
                <span class="value">{{ batch.total_participants || 0 }}</span>
              </div>
              <div class="info-item">
                <span class="label">Confirmed Trekkers</span>
                <span class="value text-success">{{ batch.confirmed_participants || 0 }}</span>
              </div>
            </div>

            <!-- Slot Fill Progress Bar -->
            <div class="slot-fill-section">
              <div class="slot-fill-labels">
                <span>Capacity Fill</span>
                <span class="slot-fill-pct">{{ batch.booked_slots || 0 }} / {{ batch.available_slots || 0 }} slots &bull; {{ getSlotFillPercent(batch) }}%</span>
              </div>
              <div class="slot-bar">
                <div
                  class="slot-fill"
                  [ngClass]="getSlotFillClass(batch)"
                  [style.width.%]="getSlotFillPercent(batch)">
                </div>
              </div>
            </div>

            <div class="batch-actions">
              <button class="btn-app ghost btn-sm" (click)="viewBookings(batch)" [disabled]="batch.total_bookings === 0">
                <i class="bi bi-eye"></i>
                View Bookings ({{ batch.total_bookings || 0 }})
              </button>
              <button
                *ngIf="authService.hasPermission('bookings.manage')"
                class="btn-app ghost btn-sm"
                (click)="downloadBatchBookings(batch)"
                [disabled]="batch.total_bookings === 0">
                <i class="bi bi-download"></i>
                Download
              </button>
              <button
                *ngIf="batch.status === 'active' && !isBatchEnded(batch)"
                class="btn-app danger-ghost btn-sm"
                [disabled]="isBatchActionLoading(batch)"
                (click)="stopBooking(batch)">
                <i class="bi bi-stop-circle"></i>
                Stop Booking
              </button>
              <button
                *ngIf="batch.status === 'inactive'"
                class="btn-app secondary btn-sm"
                [disabled]="isBatchActionLoading(batch)"
                (click)="resumeBooking(batch)">
                <i class="bi bi-play-circle"></i>
                Resume Booking
              </button>
              <button
                *ngIf="(batch.status === 'active' || batch.status === 'full') && isBatchEnded(batch)"
                class="btn-app secondary btn-sm"
                (click)="markBatchCompleted(batch)">
                <i class="bi bi-check-circle"></i>
                Mark as Completed
              </button>
              <span *ngIf="batch.status === 'completed'" class="status-completed-pill">
                <i class="bi bi-check2-all"></i> Trek Completed
              </span>
            </div>
          </div>
        </div>

        <div *ngIf="!isLoadingBatches && batches.length === 0" class="state-center py-4">
          <div class="empty-card">
            <i class="bi bi-calendar-x"></i>
            <h3>No Batches Found</h3>
            <p>No departure batches have been configured for this trek yet.</p>
          </div>
        </div>
      </div>
    </div>
  </ng-template>
</ion-modal>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
     Batch Bookings Modal
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<ion-modal [isOpen]="showBookingsModal" (didDismiss)="closeBookingsModal()" cssClass="bookings-modal-large">
  <ng-template>
    <ion-header>
      <ion-toolbar color="light">
        <ion-title>
          Bookings &bull; {{ selectedBatch?.trek_name }}
          <span class="sub-title-dates">
            ({{ selectedBatch?.start_date | date:'MMM dd' }} - {{ selectedBatch?.end_date | date:'MMM dd, yyyy' }})
          </span>
        </ion-title>
        <ion-buttons slot="end">
          <ion-button (click)="closeBookingsModal()">
            <i class="bi bi-x-lg"></i>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <div class="modal-form-content">
      <div class="modal-container">
        <div *ngIf="isLoadingBookings" class="state-center py-5">
          <ion-spinner></ion-spinner>
          <p>Loading bookings roster...</p>
        </div>

        <div *ngIf="!isLoadingBookings && bookings.length > 0" class="bookings-table-container table-wrap">
          <table class="bookings-table">
            <thead>
              <tr>
                <th style="width: 40px;"></th>
                <th>#</th>
                <th>Booking Ref</th>
                <th>Customer Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Trekkers</th>
                <th>Total Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <ng-container *ngFor="let booking of bookings; let i = index">
                <tr class="summary-row" (click)="toggleBookingExpand(booking)">
                  <td>
                    <button class="expand-btn" type="button" aria-label="Expand booking details">
                      <i class="bi" [ngClass]="booking.expanded ? 'bi-chevron-down' : 'bi-chevron-right'"></i>
                    </button>
                  </td>
                  <td>{{ i + 1 }}</td>
                  <td><strong class="mono-ref">#{{ booking.booking_id }}</strong></td>
                  <td><strong>{{ booking.name }}</strong></td>
                  <td class="text-muted small">{{ booking.email }}</td>
                  <td class="cell-phone">{{ booking.phone }}</td>
                  <td><span class="pax-pill">{{ booking.total_participants }}</span></td>
                  <td class="cell-amount">\u20B9{{ booking.total_amount | number:'1.0-0' }}</td>
                  <td>
                    <span class="badge-status-pill" [ngClass]="getBookingStatusClass(booking.booking_status)">
                      {{ booking.booking_status | titlecase }}
                    </span>
                  </td>
                </tr>

                <tr class="detail-row" *ngIf="booking.expanded">
                  <td colspan="9">
                    <div class="detail-box">
                      <h6><i class="bi bi-people-fill me-1"></i> Participant Roster &amp; Declarations</h6>
                      <div class="participants-grid" *ngIf="booking.participants?.length > 0; else noParticipantData">
                        <div class="participant-card" *ngFor="let p of booking.participants; let idx = index">
                          <div class="participant-head">
                            <strong>Participant {{ idx + 1 }}</strong>
                            <span class="badge-primary-pill" *ngIf="p.isPrimary">Lead Booker</span>
                          </div>
                          <div class="p-info-row">
                            <span class="p-label">Name:</span>
                            <span class="p-val">{{ p.name }}</span>
                          </div>
                          <div class="p-info-row">
                            <span class="p-label">Age / Gender:</span>
                            <span class="p-val">{{ p.age }} / {{ p.gender }}</span>
                          </div>
                          <div class="p-info-row" *ngIf="p.phone">
                            <span class="p-label">Phone:</span>
                            <span class="p-val">{{ p.phone }}</span>
                          </div>
                          <div class="p-info-row" *ngIf="p.idType || p.idNumber">
                            <span class="p-label">Govt ID:</span>
                            <span class="p-val mono">{{ p.idType }} - {{ p.idNumber }}</span>
                          </div>
                          <div class="p-info-row" *ngIf="p.medicalInfo">
                            <span class="p-label">Medical:</span>
                            <span class="p-val text-danger">{{ p.medicalInfo }}</span>
                          </div>
                        </div>
                      </div>
                      <ng-template #noParticipantData>
                        <p class="empty-note">Detailed participant records have not been submitted for this booking.</p>
                      </ng-template>
                    </div>
                  </td>
                </tr>
              </ng-container>
            </tbody>
          </table>
        </div>

        <div *ngIf="!isLoadingBookings && bookings.length === 0" class="state-center py-4">
          <div class="empty-card">
            <i class="bi bi-inbox"></i>
            <h3>No Bookings Found</h3>
            <p>No booking records are available for this departure batch.</p>
          </div>
        </div>
      </div>
    </div>
  </ng-template>
</ion-modal>
`, styles: ['@charset "UTF-8";\n\n/* src/app/trek-batch-management/trek-batch-management.component.scss */\n:host {\n  display: block;\n}\n.trek-batch-page {\n  --background: transparent;\n}\n@keyframes shimmer {\n  0% {\n    background-position: -400px 0;\n  }\n  100% {\n    background-position: 400px 0;\n  }\n}\n.shimmer {\n  background:\n    linear-gradient(\n      90deg,\n      rgba(0, 0, 0, 0.04) 25%,\n      rgba(0, 0, 0, 0.09) 50%,\n      rgba(0, 0, 0, 0.04) 75%);\n  background-size: 800px 100%;\n  animation: shimmer 1.5s infinite linear;\n  border-radius: 6px;\n}\n.skeleton-cover {\n  width: 100%;\n  height: 180px;\n}\n.skeleton-line {\n  height: 14px;\n  border-radius: 4px;\n}\n.skeleton-line.sm {\n  width: 64px;\n}\n.skeleton-line.md {\n  width: 120px;\n}\n.skeleton-line.lg {\n  width: 180px;\n}\n.automation-banner {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(29, 122, 109, 0.08),\n      rgba(241, 166, 77, 0.12));\n  border: 1px solid rgba(29, 122, 109, 0.2);\n  border-radius: var(--app-radius, 14px);\n  padding: 16px 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 20px;\n  box-shadow: var(--app-shadow-soft, 0 2px 8px rgba(0, 0, 0, 0.04));\n  flex-wrap: wrap;\n}\n.auto-badge-group {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  flex: 1 1 300px;\n}\n.auto-indicator-dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #10b981;\n  margin-top: 5px;\n  flex-shrink: 0;\n}\n.auto-indicator-dot.pulse {\n  box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);\n  animation: pulse-green 2s infinite;\n}\n@keyframes pulse-green {\n  0% {\n    transform: scale(0.95);\n    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);\n  }\n  70% {\n    transform: scale(1);\n    box-shadow: 0 0 0 8px rgba(16, 185, 129, 0);\n  }\n  100% {\n    transform: scale(0.95);\n    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);\n  }\n}\n.auto-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 2px;\n  flex-wrap: wrap;\n}\n.auto-title strong {\n  font-size: 0.95rem;\n  color: var(--app-ink, #111827);\n}\n.badge-status-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 2px 8px;\n  background: #ecfdf5;\n  color: #065f46;\n  border: 1px solid #a7f3d0;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 700;\n}\n.auto-desc {\n  font-size: 0.82rem;\n  color: var(--app-ink-muted, #4b5563);\n  line-height: 1.4;\n}\n.auto-desc .code {\n  font-family: ui-monospace, monospace;\n  background: rgba(0, 0, 0, 0.05);\n  padding: 1px 4px;\n  border-radius: 4px;\n  font-size: 0.78rem;\n}\n.btn-sweep {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: #fff;\n  border: 1px solid rgba(29, 122, 109, 0.3);\n  color: var(--app-accent, #1d7a6d);\n  padding: 8px 16px;\n  border-radius: 10px;\n  font-size: 0.84rem;\n  font-weight: 700;\n  cursor: pointer;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);\n  transition: all 0.15s ease;\n  white-space: nowrap;\n}\n.btn-sweep:hover:not(:disabled) {\n  background: var(--app-accent, #1d7a6d);\n  color: #fff;\n  border-color: var(--app-accent, #1d7a6d);\n}\n.btn-sweep:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-sweep i.spin {\n  animation: spin 1s infinite linear;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.ops-actions {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n.view-mode-toggle {\n  display: inline-flex;\n  background: #f1f5f9;\n  border-radius: 12px;\n  padding: 4px;\n  gap: 4px;\n  border: 1px solid var(--app-border, #e2e8f0);\n}\n.view-mode-toggle .view-toggle-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  border-radius: 9px;\n  border: none;\n  background: transparent;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--app-ink-muted, #64748b);\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.view-mode-toggle .view-toggle-btn:hover {\n  color: #0f172a;\n}\n.view-mode-toggle .view-toggle-btn.active {\n  background: #ffffff;\n  color: var(--app-accent, #1d7a6d);\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);\n}\n.calendar-view-container {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  animation: fadeIn 0.2s ease-out;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.calendar-header-card {\n  background: #ffffff;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: var(--app-radius, 14px);\n  padding: 14px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n  box-shadow: var(--app-shadow-soft, 0 2px 8px rgba(0, 0, 0, 0.04));\n}\n.cal-nav-group {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.cal-nav-group .cal-month-title {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 800;\n  color: #0f172a;\n  min-width: 180px;\n  text-align: center;\n}\n.cal-nav-group .cal-nav-btn {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  border: 1px solid #e2e8f0;\n  background: #f8fafc;\n  color: #334155;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.cal-nav-group .cal-nav-btn:hover {\n  background: var(--app-accent, #1d7a6d);\n  color: #ffffff;\n  border-color: var(--app-accent, #1d7a6d);\n}\n.cal-nav-group .cal-today-btn {\n  padding: 6px 14px;\n  border-radius: 8px;\n  border: 1px solid #cbd5e1;\n  background: #ffffff;\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: #334155;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.cal-nav-group .cal-today-btn:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n.cal-filter-group .trek-filter-wrapper {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.cal-filter-group .trek-filter-wrapper .filter-icon {\n  position: absolute;\n  left: 10px;\n  color: #94a3b8;\n  pointer-events: none;\n  font-size: 0.85rem;\n}\n.cal-filter-group .trek-filter-wrapper .cal-select {\n  appearance: none;\n  -webkit-appearance: none;\n  background: #f8fafc;\n  border: 1px solid #cbd5e1;\n  border-radius: 10px;\n  padding: 8px 32px 8px 30px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #1e293b;\n  cursor: pointer;\n  outline: none;\n  min-width: 200px;\n}\n.cal-filter-group .trek-filter-wrapper .cal-select:focus {\n  border-color: var(--app-accent, #1d7a6d);\n  background: #fff;\n}\n.cal-filter-group .trek-filter-wrapper .select-arrow {\n  position: absolute;\n  right: 10px;\n  pointer-events: none;\n  color: #64748b;\n  font-size: 0.72rem;\n}\n.cal-metrics-banner {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 12px;\n}\n.cal-metrics-banner .metric-item {\n  background: #fff;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: 12px;\n  padding: 12px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03);\n}\n.cal-metrics-banner .metric-item .label {\n  font-size: 0.74rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n}\n.cal-metrics-banner .metric-item .val {\n  font-size: 1.15rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.cal-metrics-banner .metric-item .val.highlight-occupancy {\n  color: var(--app-accent, #1d7a6d);\n}\n.calendar-grid-wrap {\n  background: #fff;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: var(--app-radius, 14px);\n  overflow: hidden;\n  box-shadow: var(--app-shadow-soft, 0 2px 8px rgba(0, 0, 0, 0.04));\n}\n.calendar-grid {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  background: #e2e8f0;\n  gap: 1px;\n}\n.calendar-grid .cal-weekday-header {\n  background: #f8fafc;\n  padding: 10px;\n  text-align: center;\n  font-size: 0.76rem;\n  font-weight: 700;\n  color: #475569;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.calendar-grid .cal-day-cell {\n  background: #ffffff;\n  min-height: 110px;\n  padding: 8px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  transition: background 0.15s ease;\n}\n.calendar-grid .cal-day-cell.other-month {\n  background: #fafbfc;\n  opacity: 0.5;\n}\n.calendar-grid .cal-day-cell.is-today {\n  background: #f0fdf4;\n}\n.calendar-grid .cal-day-cell.is-today .cal-day-number {\n  background: var(--app-accent, #1d7a6d);\n  color: #fff;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.calendar-grid .cal-day-cell .cal-day-top {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.calendar-grid .cal-day-cell .cal-day-top .cal-day-number {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #1e293b;\n}\n.calendar-grid .cal-day-cell .cal-day-top .cal-batch-count {\n  font-size: 0.68rem;\n  font-weight: 600;\n  color: #94a3b8;\n}\n.cal-batches-stack {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.cal-batch-pill {\n  padding: 5px 8px;\n  border-radius: 6px;\n  font-size: 0.72rem;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  border-left: 3px solid transparent;\n}\n.cal-batch-pill.slot-fill-empty {\n  background: #f8fafc;\n  border-left-color: #94a3b8;\n  color: #334155;\n}\n.cal-batch-pill.slot-fill-low {\n  background: #eff6ff;\n  border-left-color: #3b82f6;\n  color: #1e40af;\n}\n.cal-batch-pill.slot-fill-medium {\n  background: #ecfdf5;\n  border-left-color: #10b981;\n  color: #065f46;\n}\n.cal-batch-pill.slot-fill-high {\n  background: #fffbeb;\n  border-left-color: #f59e0b;\n  color: #92400e;\n}\n.cal-batch-pill.slot-fill-full {\n  background: #fef2f2;\n  border-left-color: #ef4444;\n  color: #991b1b;\n}\n.cal-batch-pill:hover {\n  filter: brightness(0.95);\n  transform: translateY(-1px);\n}\n.cal-batch-pill .cal-batch-row {\n  display: flex;\n  justify-content: space-between;\n  font-weight: 700;\n  gap: 4px;\n}\n.cal-batch-pill .cal-batch-row .cal-batch-name {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.cal-batch-pill .cal-batch-sub {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 0.68rem;\n  opacity: 0.85;\n  margin-top: 1px;\n}\n.cal-batch-pill .cal-batch-sub .cal-status-dot {\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  background: #10b981;\n}\n.cal-batch-pill .cal-batch-sub .cal-status-dot.inactive {\n  background: #94a3b8;\n}\n.treks-deck {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.trek-card {\n  background: #ffffff;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: var(--app-radius, 16px);\n  overflow: hidden;\n  box-shadow: var(--app-shadow-soft, 0 2px 8px rgba(0, 0, 0, 0.04));\n  display: flex;\n  flex-direction: column;\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease,\n    border-color 0.2s ease;\n}\n.trek-card:hover {\n  transform: translateY(-3px);\n  box-shadow: var(--app-shadow, 0 8px 20px rgba(0, 0, 0, 0.08));\n  border-color: #cbd5e1;\n}\n.trek-cover {\n  position: relative;\n  height: 180px;\n  background-size: cover;\n  background-position: center;\n  background-color: #f1f5f9;\n}\n.trek-cover .trek-cover-overlay {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to top,\n      rgba(0, 0, 0, 0.65) 0%,\n      rgba(0, 0, 0, 0.1) 60%,\n      transparent 100%);\n}\n.trek-cover .trek-cover-badges {\n  position: absolute;\n  bottom: 12px;\n  left: 14px;\n  right: 14px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 8px;\n  z-index: 1;\n}\n.trek-cover .trek-cover-badges .trek-difficulty {\n  padding: 3px 8px;\n  border-radius: 6px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.trek-cover .trek-cover-badges .trek-difficulty.difficulty-easy {\n  background: rgba(16, 185, 129, 0.85);\n  color: #fff;\n}\n.trek-cover .trek-cover-badges .trek-difficulty.difficulty-moderate {\n  background: rgba(245, 158, 11, 0.85);\n  color: #fff;\n}\n.trek-cover .trek-cover-badges .trek-difficulty.difficulty-difficult,\n.trek-cover .trek-cover-badges .trek-difficulty.difficulty-hard {\n  background: rgba(239, 68, 68, 0.85);\n  color: #fff;\n}\n.trek-cover .trek-cover-badges .location-badge {\n  background: rgba(15, 23, 42, 0.7);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  color: #fff;\n  font-size: 0.74rem;\n  font-weight: 600;\n  padding: 3px 8px;\n  border-radius: 6px;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.trek-content {\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  flex: 1;\n}\n.trek-head {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 10px;\n}\n.trek-head .trek-title {\n  margin: 0;\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--app-ink, #111827);\n  line-height: 1.3;\n}\n.trek-stats {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  background: var(--app-surface, #f8fafc);\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: 10px;\n  padding: 10px;\n}\n.trek-stats .stat-tile {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 2px;\n}\n.trek-stats .stat-tile span {\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n}\n.trek-stats .stat-tile strong {\n  font-size: 1.05rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.trek-actions {\n  display: flex;\n  gap: 8px;\n  margin-top: auto;\n}\n.trek-actions button {\n  flex: 1;\n}\n.modal-form-content {\n  --background: #f8fafc;\n}\n.modal-container {\n  padding: 20px;\n  max-width: 900px;\n  margin: 0 auto;\n}\n.batches-list {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.batch-search-wrap {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fff;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: 10px;\n  padding: 8px 12px;\n  margin-bottom: 4px;\n}\n.batch-search-wrap i {\n  color: #94a3b8;\n  font-size: 0.9rem;\n}\n.batch-search-wrap input {\n  border: none;\n  outline: none;\n  flex: 1;\n  font-size: 0.88rem;\n  background: transparent;\n}\n.batch-search-wrap .clear-btn {\n  background: transparent;\n  border: none;\n  color: #94a3b8;\n  cursor: pointer;\n  padding: 0;\n}\n.batch-card {\n  background: #fff;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: 14px;\n  padding: 16px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.batch-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 10px;\n}\n.batch-header .batch-dates {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: 700;\n  font-size: 0.95rem;\n  color: #0f172a;\n}\n.batch-header .batch-dates i {\n  color: var(--app-accent, #1d7a6d);\n}\n.batch-info-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 10px 14px;\n}\n.batch-info-grid .info-item {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.batch-info-grid .info-item .label {\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n}\n.batch-info-grid .info-item .value {\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: #1e293b;\n}\n.batch-info-grid .info-item .value.highlight-val {\n  color: var(--app-accent, #1d7a6d);\n}\n.slot-fill-section {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.slot-fill-section .slot-fill-labels {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.76rem;\n  font-weight: 600;\n  color: #475569;\n}\n.slot-fill-section .slot-bar {\n  height: 8px;\n  background: #e2e8f0;\n  border-radius: 999px;\n  overflow: hidden;\n}\n.slot-fill-section .slot-bar .slot-fill {\n  height: 100%;\n  border-radius: 999px;\n  transition: width 0.3s ease;\n}\n.slot-fill-section .slot-bar .slot-fill.slot-fill-empty {\n  background: #cbd5e1;\n}\n.slot-fill-section .slot-bar .slot-fill.slot-fill-low {\n  background: #3b82f6;\n}\n.slot-fill-section .slot-bar .slot-fill.slot-fill-medium {\n  background: #10b981;\n}\n.slot-fill-section .slot-bar .slot-fill.slot-fill-high {\n  background: #f59e0b;\n}\n.slot-fill-section .slot-bar .slot-fill.slot-fill-full {\n  background: #ef4444;\n}\n.batch-actions {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.batch-actions .status-completed-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 12px;\n  background: #f1f5f9;\n  color: #475569;\n  border-radius: 8px;\n  font-size: 0.8rem;\n  font-weight: 700;\n}\n.bookings-table-container {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  overflow: hidden;\n}\n.bookings-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.85rem;\n}\n.bookings-table thead th {\n  background: #f8fafc;\n  padding: 10px 12px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #475569;\n  border-bottom: 1px solid #e2e8f0;\n  white-space: nowrap;\n}\n.bookings-table tbody tr.summary-row {\n  border-bottom: 1px solid #f1f5f9;\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.bookings-table tbody tr.summary-row:hover {\n  background: #f8fafc;\n}\n.bookings-table td {\n  padding: 10px 12px;\n  vertical-align: middle;\n}\n.bookings-table .expand-btn {\n  background: transparent;\n  border: none;\n  color: #64748b;\n  cursor: pointer;\n  padding: 2px 4px;\n  font-size: 0.9rem;\n}\n.bookings-table .mono-ref {\n  font-family: ui-monospace, monospace;\n  color: var(--app-accent, #1d7a6d);\n}\n.bookings-table .pax-pill {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: #f1f5f9;\n  font-weight: 700;\n  font-size: 0.78rem;\n}\n.detail-row td {\n  padding: 0;\n  background: #f8fafc;\n}\n.detail-box {\n  padding: 16px 20px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.detail-box h6 {\n  margin: 0 0 12px;\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.participants-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 12px;\n}\n.participant-card {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  font-size: 0.8rem;\n}\n.participant-card .participant-head {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid #f1f5f9;\n  padding-bottom: 4px;\n  margin-bottom: 4px;\n}\n.participant-card .participant-head strong {\n  color: #0f172a;\n  font-weight: 700;\n}\n.participant-card .badge-primary-pill {\n  background: #dbeafe;\n  color: #1e40af;\n  padding: 1px 6px;\n  border-radius: 4px;\n  font-size: 0.7rem;\n  font-weight: 700;\n}\n.participant-card .p-info-row {\n  display: flex;\n  justify-content: space-between;\n  gap: 6px;\n}\n.participant-card .p-info-row .p-label {\n  color: #64748b;\n  font-weight: 500;\n}\n.participant-card .p-info-row .p-val {\n  color: #0f172a;\n  font-weight: 600;\n}\n.icon-btn {\n  width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  border: 1px solid var(--app-border, #e2e8f0);\n  background: #fff;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #334155;\n  transition: all 0.15s ease;\n}\n.icon-btn.subtle {\n  border: none;\n  background: transparent;\n  color: #64748b;\n}\n.icon-btn.subtle:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n@media (max-width: 1024px) {\n  .cal-metrics-banner {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .automation-banner {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .automation-banner .auto-actions {\n    width: 100%;\n  }\n  .automation-banner .auto-actions .btn-sweep {\n    width: 100%;\n    justify-content: center;\n  }\n  .ops-actions {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .ops-actions .view-mode-toggle {\n    width: 100%;\n  }\n  .ops-actions .view-toggle-btn {\n    flex: 1;\n    justify-content: center;\n  }\n  .ops-actions .btn-app {\n    width: 100%;\n    justify-content: center;\n  }\n  .calendar-header-card {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .calendar-header-card .cal-nav-group {\n    justify-content: space-between;\n    width: 100%;\n  }\n  .calendar-header-card .cal-filter-group {\n    width: 100%;\n  }\n  .calendar-header-card .cal-filter-group .cal-select {\n    width: 100%;\n  }\n  .cal-metrics-banner {\n    grid-template-columns: 1fr;\n  }\n  .calendar-grid .cal-day-cell {\n    min-height: 80px;\n    padding: 4px;\n  }\n  .treks-deck {\n    grid-template-columns: 1fr;\n  }\n  .batch-info-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n/*# sourceMappingURL=trek-batch-management.component.css.map */\n'] }]
  }], () => [{ type: TrekBatchManagement }, { type: AuthService }, { type: Router }, { type: NotificationService }, { type: MediaService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TrekBatchManagementComponent, { className: "TrekBatchManagementComponent", filePath: "src/app/trek-batch-management/trek-batch-management.component.ts", lineNumber: 20 });
})();

// src/app/trek-batch-management/trek-batch-management-module.ts
var routes = [{ path: "", component: TrekBatchManagementComponent }];
var _TrekBatchManagementModule = class _TrekBatchManagementModule {
};
_TrekBatchManagementModule.\u0275fac = function TrekBatchManagementModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TrekBatchManagementModule)();
};
_TrekBatchManagementModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _TrekBatchManagementModule });
_TrekBatchManagementModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, TrekBatchManagementComponent, RouterModule.forChild(routes), RouterModule] });
var TrekBatchManagementModule = _TrekBatchManagementModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrekBatchManagementModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        CommonModule,
        TrekBatchManagementComponent,
        RouterModule.forChild(routes)
      ],
      exports: [RouterModule]
    }]
  }], null, null);
})();
export {
  TrekBatchManagementModule
};
//# sourceMappingURL=trek-batch-management-module-RNOP3I33.js.map
