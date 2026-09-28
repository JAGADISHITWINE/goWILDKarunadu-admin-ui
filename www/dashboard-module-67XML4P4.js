import {
  Chart,
  registerables
} from "./chunk-SILJTMT5.js";
import {
  Dashboard
} from "./chunk-AQ2URHKF.js";
import {
  Analytics
} from "./chunk-K2U6SD7G.js";
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
  ReactiveFormsModule,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-QNEZ2FH5.js";
import "./chunk-D4XXJJII.js";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectorRef,
  CommonModule,
  Component,
  CurrencyPipe,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  Router,
  RouterModule,
  TitleCasePipe,
  ViewChild,
  setClassMetadata,
  take,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-KQE4QDNK.js";

// src/app/dashboard/dashboard.component.ts
var _c0 = ["bookingsRevenueChart"];
var _c1 = ["trekRevenueChart"];
var _c2 = ["cancellationChart"];
var _c3 = ["growthChart"];
var _c4 = () => [1, 2, 3, 4, 5, 6, 7];
var _c5 = () => [1, 2, 3, 4, 5];
function DashboardComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29);
    \u0275\u0275element(2, "i", 30);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Unable to refresh live telemetry from server. Showing cached dashboard data.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 31);
    \u0275\u0275listener("click", function DashboardComponent_div_2_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.retryLoad());
    });
    \u0275\u0275element(6, "i", 32);
    \u0275\u0275text(7, " Retry Sync ");
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_section_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275element(1, "div", 36);
    \u0275\u0275elementStart(2, "div", 37);
    \u0275\u0275element(3, "div", 38)(4, "div", 39)(5, "div", 40);
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_section_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 33);
    \u0275\u0275template(1, DashboardComponent_section_3_div_1_Template, 6, 0, "div", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c4));
  }
}
function DashboardComponent_section_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275pipe(1, "currency");
    \u0275\u0275listener("click", function DashboardComponent_section_4_div_1_Template_div_click_0_listener() {
      const stat_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCardClick(stat_r4));
    });
    \u0275\u0275elementStart(2, "div", 43);
    \u0275\u0275element(3, "i", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 45)(5, "div", 46)(6, "div")(7, "h3");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 47);
    \u0275\u0275element(13, "i", 44);
    \u0275\u0275elementStart(14, "strong");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "p", 48);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const stat_r4 = ctx.$implicit;
    \u0275\u0275classProp("disabled", stat_r4.disabled);
    \u0275\u0275property("title", stat_r4.disabled ? "Disabled: " + stat_r4.note : stat_r4.title + ": " + (stat_r4.isCurrency ? \u0275\u0275pipeBind4(1, 13, stat_r4.value, "INR", "symbol", "1.0-0") : stat_r4.value) + " (" + stat_r4.change + ")");
    \u0275\u0275attribute("aria-disabled", stat_r4.disabled);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", "tone-" + stat_r4.color);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "bi-" + stat_r4.icon);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", stat_r4.isCurrency ? \u0275\u0275pipeBind4(9, 18, stat_r4.value, "INR", "symbol", "1.0-0") : stat_r4.value, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(stat_r4.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", stat_r4.trend);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", stat_r4.trend === "up" ? "bi-arrow-up-right" : "bi-arrow-down-right");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r4.change);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", stat_r4.note, " \xB7 ", stat_r4.changeLabel);
  }
}
function DashboardComponent_section_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 33);
    \u0275\u0275template(1, DashboardComponent_section_4_div_1_Template, 18, 23, "div", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.stats);
  }
}
function DashboardComponent_button_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 49);
    \u0275\u0275listener("click", function DashboardComponent_button_63_Template_button_click_0_listener() {
      const action_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openQuickAction(action_r6.route));
    });
    \u0275\u0275elementStart(1, "div", 50);
    \u0275\u0275element(2, "i", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "small");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const action_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "tone-" + action_r6.color);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "bi-" + action_r6.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(action_r6.label);
  }
}
function DashboardComponent_span_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", ctx_r1.recentBooking.length, " total");
  }
}
function DashboardComponent_div_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51)(1, "button", 52);
    \u0275\u0275listener("click", function DashboardComponent_div_72_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleViewAll());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.showAllBookings ? "Hide" : "View all", " ");
  }
}
function DashboardComponent_div_73_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275element(1, "div", 40)(2, "div", 39)(3, "div", 38)(4, "div", 40)(5, "div", 40)(6, "div", 57);
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_div_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "div", 54);
    \u0275\u0275template(2, DashboardComponent_div_73_div_2_Template, 7, 0, "div", 55);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c5));
  }
}
function DashboardComponent_div_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58)(1, "div", 59);
    \u0275\u0275element(2, "i", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4");
    \u0275\u0275text(4, "No bookings yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Bookings will appear here once customers start booking treks.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 61);
    \u0275\u0275listener("click", function DashboardComponent_div_74_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navigateTo("/admin/bookings"));
    });
    \u0275\u0275element(8, "i", 62);
    \u0275\u0275text(9, " Go to Bookings ");
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_div_75_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 65);
    \u0275\u0275listener("click", function DashboardComponent_div_75_tr_18_Template_tr_click_0_listener() {
      const booking_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openBookingModal(booking_r10));
    });
    \u0275\u0275elementStart(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 66);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "span", 67);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td")(16, "button", 68);
    \u0275\u0275listener("click", function DashboardComponent_div_75_tr_18_Template_button_click_16_listener($event) {
      const booking_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.openBookingModal(booking_r10));
    });
    \u0275\u0275element(17, "i", 69);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const booking_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", booking_r10.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(booking_r10.customerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(booking_r10.trekName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", booking_r10.bookingDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(11, 7, booking_r10.amount, "INR", "symbol", "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", "status-" + ctx_r1.getStatusColor(booking_r10.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", booking_r10.status, " ");
  }
}
function DashboardComponent_div_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "table", 63)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Booking ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Customer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Trek");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275template(18, DashboardComponent_div_75_tr_18_Template, 18, 12, "tr", 64);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275property("ngForOf", ctx_r1.recentBooking);
  }
}
function DashboardComponent_div_76_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275listener("click", function DashboardComponent_div_76_div_1_Template_div_click_0_listener() {
      const booking_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openBookingModal(booking_r12));
    });
    \u0275\u0275elementStart(1, "div", 73)(2, "span", 74);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 67);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "h6");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "small");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 75)(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 76);
    \u0275\u0275listener("click", function DashboardComponent_div_76_div_1_Template_button_click_14_listener($event) {
      const booking_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.openBookingModal(booking_r12));
    });
    \u0275\u0275element(15, "i", 69);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const booking_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", booking_r12.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "status-" + ctx_r1.getStatusColor(booking_r12.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", booking_r12.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(booking_r12.trekName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(booking_r12.bookingDate);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(13, 6, booking_r12.amount, "INR", "symbol", "1.0-0"));
  }
}
function DashboardComponent_div_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275template(1, DashboardComponent_div_76_div_1_Template, 16, 11, "div", 71);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.recentBooking);
  }
}
function DashboardComponent_div_77_option_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 88);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r14 = ctx.$implicit;
    \u0275\u0275property("value", opt_r14.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r14.label, " ");
  }
}
function DashboardComponent_div_77_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 89);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const size_r15 = ctx.$implicit;
    \u0275\u0275property("ngValue", size_r15);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(size_r15);
  }
}
function DashboardComponent_div_77_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 90)(1, "div", 91);
    \u0275\u0275element(2, "i", 92);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h5");
    \u0275\u0275text(4, "No matching bookings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Try adjusting your search or filter criteria.");
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_div_77_div_16_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 65);
    \u0275\u0275listener("click", function DashboardComponent_div_77_div_16_tr_17_Template_tr_click_0_listener() {
      const booking_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openBookingModal(booking_r18));
    });
    \u0275\u0275elementStart(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 66);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "span", 67);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const booking_r18 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", booking_r18.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(booking_r18.customerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(booking_r18.trekName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(booking_r18.bookingDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(11, 7, booking_r18.amount, "INR", "symbol", "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", "status-" + ctx_r1.getStatusColor(booking_r18.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", booking_r18.status, " ");
  }
}
function DashboardComponent_div_77_div_16_ng_container_25_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 103);
    \u0275\u0275text(1, "\u2026");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_div_77_div_16_ng_container_25_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 104);
    \u0275\u0275listener("click", function DashboardComponent_div_77_div_16_ng_container_25_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const p_r20 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setPage(+p_r20));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r20 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", p_r20 === ctx_r1.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r20, " ");
  }
}
function DashboardComponent_div_77_div_16_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, DashboardComponent_div_77_div_16_ng_container_25_span_1_Template, 2, 0, "span", 101)(2, DashboardComponent_div_77_div_16_ng_container_25_button_2_Template, 2, 3, "button", 102);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const p_r20 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r20 === "...");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r20 !== "...");
  }
}
function DashboardComponent_div_77_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 93)(1, "table", 63)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Booking ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Customer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Trek");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275template(17, DashboardComponent_div_77_div_16_tr_17_Template, 15, 12, "tr", 64);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 94)(19, "span", 95);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 96)(22, "button", 97);
    \u0275\u0275listener("click", function DashboardComponent_div_77_div_16_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.prevPage());
    });
    \u0275\u0275element(23, "i", 98);
    \u0275\u0275text(24, " Prev ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, DashboardComponent_div_77_div_16_ng_container_25_Template, 3, 2, "ng-container", 99);
    \u0275\u0275elementStart(26, "button", 97);
    \u0275\u0275listener("click", function DashboardComponent_div_77_div_16_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.nextPage());
    });
    \u0275\u0275text(27, " Next ");
    \u0275\u0275element(28, "i", 100);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "span", 95);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r1.pagedBookings);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" Showing ", ctx_r1.pagedBookings.length, " of ", ctx_r1.filteredBookings.length, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.visiblePageNumbers);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("Page ", ctx_r1.currentPage, " of ", ctx_r1.totalPages);
  }
}
function DashboardComponent_div_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 77)(1, "div", 78)(2, "div", 79);
    \u0275\u0275element(3, "i", 80);
    \u0275\u0275elementStart(4, "input", 81);
    \u0275\u0275twoWayListener("ngModelChange", function DashboardComponent_div_77_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchQuery, $event) || (ctx_r1.searchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 82)(6, "label");
    \u0275\u0275text(7, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "select", 83);
    \u0275\u0275twoWayListener("ngModelChange", function DashboardComponent_div_77_Template_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.statusFilter, $event) || (ctx_r1.statusFilter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(9, DashboardComponent_div_77_option_9_Template, 2, 2, "option", 84);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 82)(11, "label");
    \u0275\u0275text(12, "Rows");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "select", 83);
    \u0275\u0275twoWayListener("ngModelChange", function DashboardComponent_div_77_Template_select_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.pageSize, $event) || (ctx_r1.pageSize = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(14, DashboardComponent_div_77_option_14_Template, 2, 2, "option", 85);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(15, DashboardComponent_div_77_div_15_Template, 7, 0, "div", 86)(16, DashboardComponent_div_77_div_16_Template, 31, 8, "div", 87);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchQuery);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.statusFilter);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.bookingStatusOptions);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pageSize);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.rowOptions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredBookings.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredBookings.length > 0);
  }
}
function DashboardComponent_div_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 105);
    \u0275\u0275listener("click", function DashboardComponent_div_78_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetails());
    });
    \u0275\u0275elementStart(1, "div", 106);
    \u0275\u0275listener("click", function DashboardComponent_div_78_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r21);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 107)(3, "div")(4, "h3", 108);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 67);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 109);
    \u0275\u0275listener("click", function DashboardComponent_div_78_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetails());
    });
    \u0275\u0275text(10, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 110)(12, "div", 111)(13, "div", 112);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 113);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 114)(19, "div", 115)(20, "span", 116);
    \u0275\u0275text(21, "Customer Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 117);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 115)(25, "span", 116);
    \u0275\u0275text(26, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 117);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 115)(30, "span", 116);
    \u0275\u0275text(31, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 117);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 115)(35, "span", 116);
    \u0275\u0275text(36, "Booking Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 117);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 115)(40, "span", 116);
    \u0275\u0275text(41, "Participants");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 117);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 115)(45, "span", 116);
    \u0275\u0275text(46, "Payment Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "span", 118);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(49, "div", 119)(50, "button", 120);
    \u0275\u0275listener("click", function DashboardComponent_div_78_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetails());
    });
    \u0275\u0275text(51, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "button", 61);
    \u0275\u0275listener("click", function DashboardComponent_div_78_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToBookingsPage());
    });
    \u0275\u0275element(53, "i", 121);
    \u0275\u0275text(54, " Open in Bookings ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" Booking #", ctx_r1.selectedBooking.id, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "status-" + ctx_r1.getStatusColor(ctx_r1.selectedBooking.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 11, ctx_r1.selectedBooking.status), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.selectedBooking.trekName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(17, 13, ctx_r1.selectedBooking.amount, "INR", "symbol", "1.0-0"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.selectedBooking.customerName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedBooking.email || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedBooking.phone || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedBooking.bookingDate);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.selectedBooking.participants || 1, " person(s)");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedBooking.paymentStatus || "Pending");
  }
}
Chart.register(...registerables);
var _DashboardComponent = class _DashboardComponent {
  constructor(router, dashboardService, dropdownService, analyticsService, cdr) {
    this.router = router;
    this.dashboardService = dashboardService;
    this.dropdownService = dropdownService;
    this.analyticsService = analyticsService;
    this.cdr = cdr;
    this.stats = [];
    this.periodComparison = null;
    this.recentBooking = [];
    this.labels = [];
    this.bookingsData = [];
    this.revenueData = [];
    this.monthlyData = [];
    this.trekRevenue = [];
    this.cancellationData = [];
    this.monthlyGrowthLabel = "N/A";
    this.chartInstances = [];
    this.viewReady = false;
    this.isLoading = true;
    this.isChartsLoading = true;
    this.hasError = false;
    this.quickActions = [
      {
        label: "Add New Trek",
        icon: "plus-circle",
        route: "/admin/treks/add",
        color: "success"
      },
      {
        label: "View Bookings",
        icon: "calendar-event",
        route: "/admin/bookings",
        color: "primary"
      },
      {
        label: "Write Blog Post",
        icon: "file-text",
        route: "/admin/blog/editor",
        color: "warning"
      },
      {
        label: "Trek & Batch Management",
        icon: "layers",
        route: "/admin/batch-management",
        color: "secondary"
      },
      {
        label: "Operations Center",
        icon: "clipboard-data",
        route: "/admin/operations",
        color: "primary"
      }
    ];
    this.showAllBookings = false;
    this.searchQuery = "";
    this.statusFilter = "all";
    this.rowOptions = [];
    this.bookingStatusOptions = [
      { value: "all", label: "All" }
    ];
    this.pageSize = 0;
    this.currentPage = 1;
    this.renderRafId = null;
    this.selectedBookingIndex = null;
    this.selectedBooking = null;
  }
  ngOnInit() {
    this.stats = this.buildStats({});
    this.loadData();
  }
  retryLoad() {
    this.loadData(true);
  }
  loadData(force = false) {
    this.isLoading = true;
    this.isChartsLoading = true;
    this.hasError = false;
    this.loadDropdownOptions();
    this.dashboardService.getDashData(force).subscribe({
      next: (res) => {
        const data = res?.data || {};
        this.periodComparison = data.periodComparison || null;
        this.Total_users = data.totalUsers || 0;
        this.Total_active_users = data.totalactiveUsers || 0;
        this.Total_trek = data.totaltrekCount || 0;
        this.Total_bookings = data.totalbookingCount || 0;
        this.Total_Revenue = data.totalRevenue || 0;
        this.recentBooking = Array.isArray(data.recentBookings) ? data.recentBookings : [];
        this.currentPage = 1;
        this.Total_Blog = data.totalBlog || 0;
        this.Total_comments = data.totalComments || 0;
        this.labels = this.recentBooking.map((r) => r.month);
        this.bookingsData = this.recentBooking.map((r) => r.bookings);
        this.revenueData = this.recentBooking.map((r) => r.revenue);
        this.stats = this.buildStats(data);
        this.isLoading = false;
        this.cdr.detectChanges();
        if (this.viewReady && !this.isChartsLoading) {
          this.scheduleRenderCharts();
        }
      },
      error: (err) => {
        this.stats = this.buildStats({});
        this.monthlyData = [];
        this.trekRevenue = [];
        this.cancellationData = [];
        this.monthlyGrowthLabel = "N/A";
        this.isLoading = false;
        this.hasError = true;
        this.cdr.detectChanges();
      }
    });
    this.analyticsService.getRevenueData().subscribe({
      next: (res) => {
        const data = this.extractAnalyticsData(res);
        this.monthlyData = Array.isArray(data.monthlyData) ? data.monthlyData : [];
        this.trekRevenue = Array.isArray(data.trekRevenue) ? data.trekRevenue : [];
        this.cancellationData = Array.isArray(data.cancellationData) ? data.cancellationData : [];
        this.monthlyGrowthLabel = this.toGrowthLabel(data.monthlyGrowth, this.monthlyData);
        this.isChartsLoading = false;
        this.cdr.detectChanges();
        if (this.viewReady) {
          this.scheduleRenderCharts();
        }
      },
      error: (err) => {
        this.monthlyData = [];
        this.trekRevenue = [];
        this.cancellationData = [];
        this.monthlyGrowthLabel = "N/A";
        this.isChartsLoading = false;
        this.cdr.detectChanges();
        if (this.viewReady) {
          this.scheduleRenderCharts();
        }
      }
    });
  }
  scheduleRenderCharts() {
    if (this.renderRafId !== null) {
      cancelAnimationFrame(this.renderRafId);
    }
    this.renderRafId = requestAnimationFrame(() => {
      this.renderRafId = null;
      this.renderCharts();
    });
  }
  ngAfterViewInit() {
    this.viewReady = true;
    this.scheduleRenderCharts();
  }
  ngOnDestroy() {
    if (this.renderRafId !== null) {
      cancelAnimationFrame(this.renderRafId);
    }
    this.destroyCharts();
  }
  buildStats(data) {
    const comparison = (key) => {
      const current = Number(this.periodComparison?.[key]?.current ?? 0);
      const previous = Number(this.periodComparison?.[key]?.previous ?? 0);
      return { current, previous };
    };
    return [
      this.createStatCard({
        title: "Total Bookings",
        value: Number(data.totalbookingCount || 0),
        comparison: comparison("bookings"),
        icon: "calendar-event",
        color: "primary",
        route: "/admin/bookings",
        disabled: false,
        isCurrency: false
      }),
      this.createStatCard({
        title: "Revenue",
        value: Number(data.totalRevenue || 0),
        comparison: comparison("revenue"),
        icon: "cash",
        color: "success",
        route: "/admin/revenue",
        disabled: false,
        isCurrency: true
      }),
      this.createStatCard({
        title: "Active Users",
        value: Number(data.totalactiveUsers || 0),
        comparison: comparison("activeUsers"),
        icon: "person-check",
        color: "warning",
        route: "/admin/users",
        disabled: false,
        isCurrency: false
      }),
      this.createStatCard({
        title: "Total Users",
        value: Number(data.totalUsers || 0),
        comparison: comparison("users"),
        icon: "people-fill",
        color: "tertiary",
        route: "/admin/users",
        disabled: false,
        isCurrency: false
      }),
      this.createStatCard({
        title: "Total Treks",
        value: Number(data.totaltrekCount || 0),
        comparison: comparison("treks"),
        icon: "map",
        color: "secondary",
        route: "/admin/treks/list",
        disabled: false,
        isCurrency: false
      }),
      this.createStatCard({
        title: "Blog Posts",
        value: Number(data.totalBlog || 0),
        comparison: comparison("blogs"),
        icon: "journal-text",
        color: "medium",
        route: "/admin/blog/posts",
        disabled: false,
        isCurrency: false
      }),
      this.createStatCard({
        title: "Pending Reviews",
        value: Number(data.totalComments || 0),
        comparison: comparison("comments"),
        icon: "star",
        color: "danger",
        route: "/admin/reviews",
        disabled: false,
        isCurrency: false
      })
    ];
  }
  createStatCard(params) {
    const delta = params.comparison.current - params.comparison.previous;
    const trend = delta >= 0 ? "up" : "down";
    const percent = params.comparison.previous > 0 ? delta / params.comparison.previous * 100 : params.comparison.current > 0 ? 100 : 0;
    const change = `${delta >= 0 ? "+" : ""}${percent.toFixed(1)}%`;
    const noteDelta = delta >= 0 ? "+" : "-";
    const note = params.comparison.current > 0 ? `${noteDelta}${Math.abs(delta)} this month` : "No activity this month";
    return {
      title: params.title,
      value: params.value,
      change,
      changeLabel: this.periodComparison?.periodLabel || "vs last month",
      note,
      icon: params.icon,
      color: params.color,
      trend,
      route: params.route,
      disabled: params.disabled,
      isCurrency: params.isCurrency
    };
  }
  loadDropdownOptions() {
    this.dropdownService.getGroupOptions("bookingStatus").pipe(take(1)).subscribe((opts) => {
      if (opts.length === 0)
        return;
      this.bookingStatusOptions = [
        { value: "all", label: "All" },
        ...opts.map((opt) => ({ value: opt.value, label: opt.label }))
      ];
    });
    this.dropdownService.getGroupOptions("dashboardRows").pipe(take(1)).subscribe((opts) => {
      const mapped = opts.map((opt) => Number(opt.value || opt.label)).filter((num) => Number.isFinite(num) && num > 0);
      this.rowOptions = mapped;
      this.pageSize = mapped[0] || 0;
    });
  }
  extractAnalyticsData(res) {
    if (res?.data?.data && typeof res.data.data === "object")
      return res.data.data;
    if (res?.data && typeof res.data === "object")
      return res.data;
    if (res?.results && typeof res.results === "object")
      return res.results;
    return {};
  }
  toGrowthLabel(rawGrowth, monthlyData) {
    if (!Array.isArray(monthlyData) || monthlyData.length < 2) {
      return "N/A";
    }
    const value = String(rawGrowth ?? "").trim();
    if (!value || value === "0%" || value === "0.0%") {
      return "N/A";
    }
    return value;
  }
  renderCharts() {
    if (!this.viewReady)
      return;
    if (!this.bookingsRevenueChartRef?.nativeElement || !this.trekRevenueChartRef?.nativeElement || !this.cancellationChartRef?.nativeElement || !this.growthChartRef?.nativeElement) {
      return;
    }
    this.destroyCharts();
    let monthlyItems = [...this.monthlyData];
    if (monthlyItems.length === 0 && this.recentBooking.length > 0) {
      const monthMap = /* @__PURE__ */ new Map();
      this.recentBooking.forEach((b) => {
        const m = b.month || (b.bookingDate ? new Date(b.bookingDate).toLocaleString("en-US", { month: "short", year: "numeric" }) : "Recent");
        const curr = monthMap.get(m) || { month: m, bookings: 0, revenue: 0 };
        curr.bookings += 1;
        curr.revenue += Number(b.amount || 0);
        monthMap.set(m, curr);
      });
      monthlyItems = Array.from(monthMap.values());
    }
    const monthlyLabels = monthlyItems.length ? monthlyItems.map((item) => item.month || "") : ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
    const bookingCounts = monthlyItems.length ? monthlyItems.map((item) => Number(item.bookings || 0)) : [0, 0, 0, 0, 0, 0];
    const revenueValues = monthlyItems.length ? monthlyItems.map((item) => Number(item.amount ?? item.revenue ?? 0)) : [0, 0, 0, 0, 0, 0];
    const topTreks = [...this.trekRevenue].sort((a, b) => Number(b.revenue || 0) - Number(a.revenue || 0)).slice(0, 6);
    const topTrekLabels = topTreks.length ? topTreks.map((item) => item.name || "Trek") : ["Kudremukh", "Netravati", "Kumara Parvatha", "Tadiandamol"];
    const topTrekData = topTreks.length ? topTreks.map((item) => Number(item.revenue || 0)) : [0, 0, 0, 0];
    const cancellationLabels = this.cancellationData.length ? this.cancellationData.map((item) => item.month || "") : ["No cancellations"];
    const cancellationValues = this.cancellationData.length ? this.cancellationData.map((item) => Number(item.cancellations || 0)) : [1];
    const growthPoints = revenueValues.map((value, index) => {
      const previous = index > 0 ? revenueValues[index - 1] : value;
      if (!previous)
        return 0;
      return Number(((value - previous) / previous * 100).toFixed(1));
    });
    const bookingsRevenueCtx = this.bookingsRevenueChartRef.nativeElement.getContext("2d");
    const trekRevenueCtx = this.trekRevenueChartRef.nativeElement.getContext("2d");
    const cancellationCtx = this.cancellationChartRef.nativeElement.getContext("2d");
    const growthCtx = this.growthChartRef.nativeElement.getContext("2d");
    if (bookingsRevenueCtx) {
      this.chartInstances.push(new Chart(bookingsRevenueCtx, {
        type: "line",
        data: {
          labels: monthlyLabels,
          datasets: [
            {
              label: "Bookings",
              data: bookingCounts,
              borderColor: "#1d7a6d",
              backgroundColor: "rgba(29, 122, 109, 0.12)",
              tension: 0.35,
              fill: true,
              pointRadius: 4,
              pointHoverRadius: 6,
              yAxisID: "y"
            },
            {
              label: "Revenue (\u20B9)",
              data: revenueValues,
              borderColor: "#f1a64d",
              backgroundColor: "rgba(241, 166, 77, 0.14)",
              tension: 0.35,
              fill: true,
              pointRadius: 4,
              pointHoverRadius: 6,
              yAxisID: "y1"
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: { mode: "index", intersect: false },
          plugins: {
            legend: { position: "top" },
            tooltip: {
              callbacks: {
                label: (ctx) => {
                  const label = ctx.dataset.label || "";
                  const val = ctx.parsed.y ?? 0;
                  return label.includes("Revenue") ? `${label}: \u20B9${val.toLocaleString("en-IN")}` : `${label}: ${val}`;
                }
              }
            }
          },
          scales: {
            y: {
              type: "linear",
              position: "left",
              beginAtZero: true,
              grid: { color: "rgba(0,0,0,0.05)" },
              ticks: { precision: 0 }
            },
            y1: {
              type: "linear",
              position: "right",
              beginAtZero: true,
              grid: { drawOnChartArea: false },
              ticks: {
                callback: (val) => `\u20B9${Number(val).toLocaleString("en-IN")}`
              }
            },
            x: { grid: { display: false } }
          }
        }
      }));
    }
    if (trekRevenueCtx) {
      this.chartInstances.push(new Chart(trekRevenueCtx, {
        type: "bar",
        data: {
          labels: topTrekLabels,
          datasets: [{
            label: "Revenue (\u20B9)",
            data: topTrekData,
            backgroundColor: ["#1d7a6d", "#f1a64d", "#8c7ae6", "#2f9d6a", "#d94f41", "#6b7280"],
            borderRadius: 8,
            borderSkipped: false
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          indexAxis: "y",
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: (ctx) => `Revenue: \u20B9${Number(ctx.parsed.x ?? 0).toLocaleString("en-IN")}`
              }
            }
          },
          scales: {
            x: {
              beginAtZero: true,
              grid: { color: "rgba(0,0,0,0.05)" },
              ticks: {
                callback: (val) => `\u20B9${Number(val).toLocaleString("en-IN")}`
              }
            },
            y: { grid: { display: false } }
          }
        }
      }));
    }
    if (cancellationCtx) {
      this.chartInstances.push(new Chart(cancellationCtx, {
        type: "doughnut",
        data: {
          labels: cancellationLabels,
          datasets: [{
            data: cancellationValues,
            backgroundColor: cancellationValues.length && this.cancellationData.length ? ["#d94f41", "#f1a64d", "#1d7a6d", "#6b7280", "#8c7ae6"] : ["rgba(107,114,128,0.25)"],
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: "68%",
          plugins: {
            legend: { position: "bottom" }
          }
        }
      }));
    }
    if (growthCtx) {
      this.chartInstances.push(new Chart(growthCtx, {
        type: "line",
        data: {
          labels: monthlyLabels,
          datasets: [{
            label: "Monthly Growth %",
            data: growthPoints,
            borderColor: "#8c7ae6",
            backgroundColor: "rgba(140, 122, 230, 0.12)",
            tension: 0.35,
            fill: true,
            pointRadius: 4,
            pointHoverRadius: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: (ctx) => `Growth: ${ctx.parsed.y ?? 0}%`
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                callback: (value) => `${value}%`
              },
              grid: { color: "rgba(0,0,0,0.05)" }
            },
            x: { grid: { display: false } }
          }
        }
      }));
    }
  }
  destroyCharts() {
    this.chartInstances.forEach((instance) => instance.destroy());
    this.chartInstances = [];
  }
  onCardClick(stat) {
    if (stat.disabled) {
      return;
    }
    this.router.navigate([stat.route]);
  }
  getStatusColor(status) {
    switch (status) {
      case "confirmed":
        return "success";
      case "pending":
        return "warning";
      case "cancelled":
        return "danger";
      default:
        return "medium";
    }
  }
  navigateTo(route) {
    this.router.navigate([route]);
  }
  openQuickAction(route) {
    if (!route)
      return;
    this.navigateTo(route);
  }
  viewBooking(id) {
    this.router.navigate(["/admin/bookings", id]);
  }
  logout() {
    this.router.navigate([""]);
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("currentUser");
  }
  toggleDetails(index) {
    this.selectedBookingIndex = this.selectedBookingIndex === index ? null : index;
    this.selectedBooking = this.selectedBookingIndex !== null ? this.recentBooking[index] : null;
  }
  openBookingModal(booking) {
    this.selectedBooking = booking;
  }
  closeDetails() {
    this.selectedBookingIndex = null;
    this.selectedBooking = null;
  }
  goToBookingsPage() {
    this.closeDetails();
    this.router.navigate(["/admin/bookings"]);
  }
  toggleViewAll() {
    this.showAllBookings = !this.showAllBookings;
    this.currentPage = 1;
  }
  get filteredBookings() {
    const q = this.searchQuery.trim().toLowerCase();
    const status = this.statusFilter;
    return this.recentBooking.filter((b) => {
      const matchesStatus = status === "all" ? true : (b.status || "").toLowerCase() === status;
      if (!q)
        return matchesStatus;
      const haystack = [
        b.id,
        b.customerName,
        b.trekName,
        b.email,
        b.phone
      ].filter(Boolean).join(" ").toLowerCase();
      return matchesStatus && haystack.includes(q);
    });
  }
  get totalPages() {
    const size = this.effectivePageSize;
    return Math.max(1, Math.ceil(this.filteredBookings.length / size));
  }
  get pagedBookings() {
    const size = this.effectivePageSize;
    const start = (this.currentPage - 1) * size;
    return this.filteredBookings.slice(start, start + size);
  }
  /** Truncated page numbers with ellipsis for large datasets */
  get visiblePageNumbers() {
    const total = this.totalPages;
    const current = this.currentPage;
    if (total <= 7) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }
    const pages = [1];
    if (current > 3) {
      pages.push("...");
    }
    const start = Math.max(2, current - 1);
    const end = Math.min(total - 1, current + 1);
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    if (current < total - 2) {
      pages.push("...");
    }
    if (total > 1) {
      pages.push(total);
    }
    return pages;
  }
  /** Legacy getter kept for backward compat */
  get pageNumbers() {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
  setPage(page) {
    this.currentPage = Math.min(Math.max(page, 1), this.totalPages);
  }
  prevPage() {
    this.setPage(this.currentPage - 1);
  }
  nextPage() {
    this.setPage(this.currentPage + 1);
  }
  get effectivePageSize() {
    return this.pageSize > 0 ? this.pageSize : Math.max(1, this.filteredBookings.length);
  }
};
_DashboardComponent.\u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DashboardComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(Dashboard), \u0275\u0275directiveInject(DropdownManagerService), \u0275\u0275directiveInject(Analytics), \u0275\u0275directiveInject(ChangeDetectorRef));
};
_DashboardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], viewQuery: function DashboardComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
    \u0275\u0275viewQuery(_c1, 5);
    \u0275\u0275viewQuery(_c2, 5);
    \u0275\u0275viewQuery(_c3, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.bookingsRevenueChartRef = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.trekRevenueChartRef = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.cancellationChartRef = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.growthChartRef = _t.first);
  }
}, inputs: { labels: "labels", bookingsData: "bookingsData", revenueData: "revenueData" }, decls: 79, vars: 13, consts: [["bookingsRevenueChart", ""], ["trekRevenueChart", ""], ["cancellationChart", ""], ["growthChart", ""], [1, "dash-page"], ["sectionLabel", "Overview", "title", "Dashboard", "subtitle", "Real-time snapshots of treks, bookings, and operations."], ["class", "alert alert-warning d-flex align-items-center justify-content-between p-3 mt-3 mb-2 rounded-3 border-0 shadow-sm", 4, "ngIf"], ["class", "stats-grid", 4, "ngIf"], [1, "charts-section"], [1, "section-head"], [1, "chart-note"], [1, "charts-grid"], [1, "chart-card", "chart-card-wide"], [1, "chart-card-head"], [1, "chart-canvas-wrap"], [1, "chart-card"], [1, "quick-actions"], [1, "actions-grid"], ["class", "action-card", "type", "button", 3, "click", 4, "ngFor", "ngForOf"], [1, "bookings-section"], [1, "section-head", "row"], [4, "ngIf"], ["class", "d-flex justify-content-end align-items-center", 4, "ngIf"], ["class", "table-wrap", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "mobile-cards", 4, "ngIf"], ["class", "bookings-expanded", 4, "ngIf"], ["class", "modal-backdrop-custom", 3, "click", 4, "ngIf"], [1, "alert", "alert-warning", "d-flex", "align-items-center", "justify-content-between", "p-3", "mt-3", "mb-2", "rounded-3", "border-0", "shadow-sm"], [1, "d-flex", "align-items-center", "gap-2"], [1, "bi", "bi-exclamation-triangle-fill", "text-warning", "fs-5"], ["type", "button", 1, "btn", "btn-sm", "btn-dark", 3, "click"], [1, "bi", "bi-arrow-clockwise"], [1, "stats-grid"], ["class", "stat-card skeleton-card", 4, "ngFor", "ngForOf"], [1, "stat-card", "skeleton-card"], [1, "skeleton-icon", "shimmer"], [1, "skeleton-copy"], [1, "skeleton-line", "lg", "shimmer"], [1, "skeleton-line", "md", "shimmer"], [1, "skeleton-line", "sm", "shimmer"], ["class", "stat-card", "role", "button", 3, "disabled", "title", "click", 4, "ngFor", "ngForOf"], ["role", "button", 1, "stat-card", 3, "click", "title"], [1, "stat-icon", 3, "ngClass"], [1, "bi", 3, "ngClass"], [1, "stat-copy"], [1, "stat-top"], [1, "stat-trend", 3, "ngClass"], [1, "stat-note"], ["type", "button", 1, "action-card", 3, "click"], [1, "action-icon", 3, "ngClass"], [1, "d-flex", "justify-content-end", "align-items-center"], [1, "btn-app", "ghost", 3, "click"], [1, "table-wrap"], [1, "skeleton-table"], ["class", "skeleton-table-row", 4, "ngFor", "ngForOf"], [1, "skeleton-table-row"], [1, "skeleton-line", "xs", "shimmer"], [1, "empty-state"], [1, "empty-icon"], [1, "bi", "bi-calendar-x"], ["type", "button", 1, "btn-app", 3, "click"], [1, "bi", "bi-arrow-right"], [1, "table", "table-hover", "align-middle"], ["class", "clickable-row", 3, "click", 4, "ngFor", "ngForOf"], [1, "clickable-row", 3, "click"], [1, "fw-bold"], [1, "status-pill", 3, "ngClass"], ["type", "button", "title", "View details", 1, "icon-btn", "subtle", 3, "click"], [1, "bi", "bi-eye"], [1, "mobile-cards"], ["class", "surface-card booking-card", 3, "click", 4, "ngFor", "ngForOf"], [1, "surface-card", "booking-card", 3, "click"], [1, "booking-top"], [1, "fw-semibold"], [1, "booking-meta"], ["type", "button", 1, "icon-btn", "subtle", 3, "click"], [1, "bookings-expanded"], [1, "filters-bar"], [1, "search-field"], [1, "bi", "bi-search"], ["type", "text", "placeholder", "Search by name, trek, email, phone...", 3, "ngModelChange", "ngModel"], [1, "filter-group"], [3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["class", "empty-state compact", 4, "ngIf"], ["class", "table-wrap expanded-table", 4, "ngIf"], [3, "value"], [3, "ngValue"], [1, "empty-state", "compact"], [1, "empty-icon", "sm"], [1, "bi", "bi-funnel"], [1, "table-wrap", "expanded-table"], [1, "pagination-bar"], [1, "page-info"], [1, "page-actions"], [1, "btn-app", "ghost", "page-nav-btn", 3, "click", "disabled"], [1, "bi", "bi-chevron-left"], [4, "ngFor", "ngForOf"], [1, "bi", "bi-chevron-right"], ["class", "page-ellipsis", 4, "ngIf"], ["class", "page-btn", 3, "active", "click", 4, "ngIf"], [1, "page-ellipsis"], [1, "page-btn", 3, "click"], [1, "modal-backdrop-custom", 3, "click"], [1, "modal-dialog-custom", 3, "click"], [1, "modal-header-custom"], [1, "modal-title-custom"], ["type", "button", 1, "btn-close-custom", 3, "click"], [1, "modal-body-custom"], [1, "detail-summary-card"], [1, "summary-trek"], [1, "summary-amount"], [1, "detail-grid"], [1, "detail-item"], [1, "detail-label"], [1, "detail-value"], [1, "detail-value", "text-capitalize"], [1, "modal-footer-custom"], ["type", "button", 1, "btn-app", "ghost", 3, "click"], [1, "bi", "bi-box-arrow-up-right"]], template: function DashboardComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "app-admin-shell", 5);
    \u0275\u0275template(2, DashboardComponent_div_2_Template, 8, 0, "div", 6)(3, DashboardComponent_section_3_Template, 2, 2, "section", 7)(4, DashboardComponent_section_4_Template, 2, 1, "section", 7);
    \u0275\u0275elementStart(5, "section", 8)(6, "div", 9)(7, "div")(8, "h2");
    \u0275\u0275text(9, "Performance Charts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11, "Bookings, revenue, cancellation trends, and top trek contribution.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "span", 10);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 11)(15, "article", 12)(16, "div", 13)(17, "div")(18, "h3");
    \u0275\u0275text(19, "Bookings vs Revenue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p");
    \u0275\u0275text(21, "Monthly trend across the current revenue cycle.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 14);
    \u0275\u0275element(23, "canvas", null, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "article", 15)(26, "div", 13)(27, "div")(28, "h3");
    \u0275\u0275text(29, "Top Treks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "p");
    \u0275\u0275text(31, "Revenue contribution by trek.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 14);
    \u0275\u0275element(33, "canvas", null, 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "article", 15)(36, "div", 13)(37, "div")(38, "h3");
    \u0275\u0275text(39, "Cancellations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "p");
    \u0275\u0275text(41, "Cancelled bookings by month.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "div", 14);
    \u0275\u0275element(43, "canvas", null, 2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "article", 12)(46, "div", 13)(47, "div")(48, "h3");
    \u0275\u0275text(49, "Monthly Growth");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "p");
    \u0275\u0275text(51, "Revenue growth percentage month over month.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(52, "div", 14);
    \u0275\u0275element(53, "canvas", null, 3);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(55, "section", 16)(56, "div", 9)(57, "div")(58, "h2");
    \u0275\u0275text(59, "Quick Actions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "p");
    \u0275\u0275text(61, "Shortcuts to common workflows.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(62, "div", 17);
    \u0275\u0275template(63, DashboardComponent_button_63_Template, 6, 3, "button", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "section", 19)(65, "div", 20)(66, "div")(67, "h2");
    \u0275\u0275text(68, "Recent Bookings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "p");
    \u0275\u0275text(70, "Track the latest activity across treks");
    \u0275\u0275template(71, DashboardComponent_span_71_Template, 2, 1, "span", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(72, DashboardComponent_div_72_Template, 3, 1, "div", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275template(73, DashboardComponent_div_73_Template, 3, 2, "div", 23)(74, DashboardComponent_div_74_Template, 10, 0, "div", 24)(75, DashboardComponent_div_75_Template, 19, 1, "div", 23)(76, DashboardComponent_div_76_Template, 2, 1, "div", 25)(77, DashboardComponent_div_77_Template, 17, 7, "div", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(78, DashboardComponent_div_78_Template, 55, 18, "div", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.hasError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isLoading);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx.monthlyGrowthLabel === "N/A" ? "Growth data unavailable" : "Growth " + ctx.monthlyGrowthLabel);
    \u0275\u0275advance(50);
    \u0275\u0275property("ngForOf", ctx.quickActions);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", !ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.recentBooking.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isLoading && ctx.recentBooking.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isLoading && ctx.recentBooking.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isLoading && ctx.recentBooking.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.showAllBookings);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.selectedBooking);
  }
}, dependencies: [
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  FormsModule,
  NgSelectOption,
  \u0275NgSelectMultipleOption,
  DefaultValueAccessor,
  SelectControlValueAccessor,
  NgControlStatus,
  NgModel,
  ReactiveFormsModule,
  AdminShellComponent,
  TitleCasePipe,
  CurrencyPipe
], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  min-height: 100%;\n  font-family:\n    "Plus Jakarta Sans",\n    system-ui,\n    -apple-system,\n    sans-serif;\n  color: #0f172a;\n}\n.dash-page[_ngcontent-%COMP%] {\n  --background: #f8fafc;\n  background: #f8fafc;\n  min-height: 100%;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: -600px 0;\n  }\n  100% {\n    background-position: 600px 0;\n  }\n}\n.shimmer[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      rgba(226, 232, 240, 0.6) 0%,\n      rgba(203, 213, 225, 0.9) 50%,\n      rgba(226, 232, 240, 0.6) 100%);\n  background-size: 600px 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.5s ease-in-out infinite;\n  border-radius: 8px;\n}\n.skeleton-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: var(--app-radius, 16px);\n  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04);\n  display: flex;\n  gap: 14px;\n  align-items: flex-start;\n  padding: 16px 18px !important;\n}\n.skeleton-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 14px;\n  flex-shrink: 0;\n}\n.skeleton-copy[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.skeleton-line[_ngcontent-%COMP%] {\n  height: 12px;\n}\n.skeleton-line.xs[_ngcontent-%COMP%] {\n  width: 30%;\n}\n.skeleton-line.sm[_ngcontent-%COMP%] {\n  width: 45%;\n}\n.skeleton-line.md[_ngcontent-%COMP%] {\n  width: 65%;\n}\n.skeleton-line.lg[_ngcontent-%COMP%] {\n  width: 85%;\n  height: 18px;\n}\n.skeleton-chart-head[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.skeleton-chart-head[_ngcontent-%COMP%]   .skeleton-line.lg[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.skeleton-chart-head[_ngcontent-%COMP%]   .skeleton-line.md[_ngcontent-%COMP%] {\n  width: 70%;\n  height: 10px;\n}\n.skeleton-chart-area[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 220px;\n  border-radius: 12px;\n}\n.skeleton-table[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  padding: 8px 0;\n}\n.skeleton-table-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 0.5fr 1fr 1.5fr 0.8fr 0.6fr 0.5fr;\n  gap: 12px;\n  align-items: center;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 48px 24px;\n  background: #fff;\n  border: 1px dashed var(--app-border);\n  border-radius: var(--app-radius);\n}\n.empty-state[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 12px 0 4px;\n  color: var(--app-ink);\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--app-ink-muted);\n  margin: 0 0 16px;\n  max-width: 360px;\n  font-size: 0.92rem;\n}\n.empty-state.compact[_ngcontent-%COMP%] {\n  padding: 32px 20px;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background: rgba(31, 107, 87, 0.1);\n  display: grid;\n  place-items: center;\n  font-size: 1.6rem;\n  color: var(--app-accent);\n}\n.empty-icon.sm[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  font-size: 1.2rem;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: flex;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 6px;\n  margin-top: 6px;\n  scrollbar-width: thin;\n  overflow: auto;\n  min-width: 0;\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid var(--app-border);\n  border-radius: var(--app-radius);\n  padding: 16px 8px;\n  display: flex;\n  gap: 4px;\n  align-items: flex-start;\n  box-shadow: var(--app-shadow-soft);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n  cursor: pointer;\n}\n.stat-card.disabled[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  pointer-events: none;\n  cursor: default;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--app-shadow);\n}\n.stat-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 14px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n  flex-shrink: 0;\n  background: rgba(29, 122, 109, 0.12);\n  color: var(--app-accent);\n}\n.stat-icon.tone-success[_ngcontent-%COMP%] {\n  background: rgba(47, 157, 106, 0.16);\n  color: var(--ion-color-success);\n}\n.stat-icon.tone-warning[_ngcontent-%COMP%] {\n  background: rgba(231, 178, 59, 0.2);\n  color: #a56a00;\n}\n.stat-icon.tone-danger[_ngcontent-%COMP%] {\n  background: rgba(224, 106, 91, 0.18);\n  color: var(--ion-color-danger);\n}\n.stat-icon.tone-primary[_ngcontent-%COMP%] {\n  background: rgba(29, 122, 109, 0.16);\n  color: var(--ion-color-primary);\n}\n.stat-copy[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.stat-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n}\n.stat-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.55rem;\n  line-height: 1.05;\n  letter-spacing: -0.03em;\n}\n.stat-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--app-ink-muted);\n}\n.stat-trend[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 10px;\n  border-radius: 999px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.stat-trend.up[_ngcontent-%COMP%] {\n  background: rgba(47, 157, 106, 0.14);\n  color: var(--ion-color-success);\n}\n.stat-trend.down[_ngcontent-%COMP%] {\n  background: rgba(224, 106, 91, 0.14);\n  color: var(--ion-color-danger);\n}\n.stat-note[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  color: var(--app-ink-muted);\n  font-size: 0.84rem;\n}\n.charts-section[_ngcontent-%COMP%] {\n  margin-top: 28px;\n}\n.chart-note[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 8px 12px;\n  border-radius: 999px;\n  background: rgba(29, 122, 109, 0.1);\n  color: var(--app-accent);\n  font-weight: 700;\n  font-size: 0.82rem;\n  white-space: nowrap;\n}\n.charts-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px;\n}\n.chart-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid var(--app-border);\n  border-radius: var(--app-radius);\n  box-shadow: var(--app-shadow-soft);\n  padding: 16px 18px;\n  display: flex;\n  flex-direction: column;\n  min-height: 320px;\n}\n.chart-card-wide[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n.chart-card-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.chart-card-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 6px 0 0;\n  color: var(--app-ink-muted);\n  font-size: 0.9rem;\n}\n.chart-canvas-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-height: 260px;\n  height: 260px;\n  width: 100%;\n  margin-top: 12px;\n}\n.quick-actions[_ngcontent-%COMP%] {\n  margin-top: 28px;\n}\n.section-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 16px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.section-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 6px 0 0;\n  color: var(--app-ink-muted);\n}\n.actions-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n}\n.action-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--app-border);\n  border-radius: var(--app-radius);\n  background: #fff;\n  padding: 16px;\n  display: flex;\n  gap: 14px;\n  align-items: center;\n  text-align: left;\n  box-shadow: var(--app-shadow-soft);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n  cursor: pointer;\n}\n.action-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--app-shadow);\n}\n.action-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n  display: block;\n}\n.action-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--app-ink-muted);\n  font-weight: 600;\n}\n.action-icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  display: grid;\n  place-items: center;\n  flex-shrink: 0;\n  background: rgba(241, 166, 77, 0.2);\n  color: #a8671d;\n}\n.action-icon.tone-primary[_ngcontent-%COMP%] {\n  background: rgba(29, 122, 109, 0.18);\n  color: var(--app-accent);\n}\n.action-icon.tone-success[_ngcontent-%COMP%] {\n  background: rgba(47, 157, 106, 0.18);\n  color: var(--ion-color-success);\n}\n.action-icon.tone-warning[_ngcontent-%COMP%] {\n  background: rgba(231, 178, 59, 0.22);\n  color: #8a5f00;\n}\n.action-icon.tone-danger[_ngcontent-%COMP%] {\n  background: rgba(224, 106, 91, 0.2);\n  color: var(--ion-color-danger);\n}\n.bookings-section[_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid var(--app-border);\n  border-radius: var(--app-radius);\n  padding: 8px 12px;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  position: relative;\n  width: 44px;\n  height: 44px;\n  border-radius: 14px;\n  border: 1px solid var(--app-border);\n  background: #fff;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--app-ink);\n  box-shadow: var(--app-shadow-soft);\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: var(--app-surface-2);\n}\n.icon-btn.subtle[_ngcontent-%COMP%] {\n  box-shadow: none;\n  border-color: transparent;\n}\n.bookings-expanded[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  display: grid;\n  gap: 14px;\n}\n.filters-bar[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr repeat(2, minmax(120px, 1fr));\n  gap: 12px;\n  background: #fff;\n  border: 1px solid var(--app-border);\n  border-radius: 18px;\n  padding: 12px;\n}\n.search-field[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  border: 1px solid var(--app-border);\n  border-radius: 14px;\n  padding: 10px 12px;\n  background: var(--app-surface-2);\n}\n.search-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  outline: none;\n  width: 100%;\n}\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.8rem;\n  color: var(--app-ink-muted);\n  margin-bottom: 6px;\n}\n.filter-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border-radius: 14px;\n  border: 1px solid var(--app-border);\n  background: #fff;\n}\n.expanded-table[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n}\n.pagination-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n  margin-top: 12px;\n  flex-wrap: wrap;\n  padding: 8px 0 4px;\n  border-top: 1px solid var(--app-border);\n}\n.page-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.page-nav-btn[_ngcontent-%COMP%] {\n  font-size: 0.82rem !important;\n  padding: 0 12px !important;\n  min-height: 36px !important;\n  min-width: auto !important;\n  gap: 4px !important;\n}\n.page-nav-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.page-btn[_ngcontent-%COMP%] {\n  border: 1px solid var(--app-border);\n  background: #fff;\n  border-radius: 999px;\n  width: 36px;\n  height: 36px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 0.85rem;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.page-btn[_ngcontent-%COMP%]:hover:not(.active) {\n  background: var(--app-surface-2);\n}\n.page-btn.active[_ngcontent-%COMP%] {\n  background: var(--app-accent);\n  color: #fff;\n  border-color: transparent;\n}\n.page-ellipsis[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 36px;\n  color: var(--app-ink-muted);\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.page-info[_ngcontent-%COMP%] {\n  color: var(--app-ink-muted);\n  font-size: 0.85rem;\n  white-space: nowrap;\n}\n.status-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 6px 12px;\n  border-radius: 999px;\n  font-weight: 600;\n  font-size: 0.85rem;\n  background: rgba(29, 122, 109, 0.12);\n  color: var(--ion-color-primary);\n}\n.status-pill.status-success[_ngcontent-%COMP%] {\n  background: rgba(47, 157, 106, 0.15);\n  color: var(--ion-color-success);\n}\n.status-pill.status-danger[_ngcontent-%COMP%] {\n  background: rgba(224, 106, 91, 0.15);\n  color: var(--ion-color-danger);\n}\n.status-pill.status-warning[_ngcontent-%COMP%] {\n  background: rgba(231, 178, 59, 0.2);\n  color: #9c6a00;\n}\n.mobile-cards[_ngcontent-%COMP%] {\n  display: none;\n  gap: 12px;\n}\n.booking-card[_ngcontent-%COMP%] {\n  padding: 14px;\n}\n.booking-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.booking-meta[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 12px;\n}\n.clickable-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: background-color 0.15s ease;\n}\n.clickable-row[_ngcontent-%COMP%]:hover {\n  background-color: rgba(29, 122, 109, 0.05) !important;\n}\n.modal-backdrop-custom[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.6);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease-out;\n}\n.modal-dialog-custom[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 20px;\n  width: 100%;\n  max-width: 540px;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  animation: _ngcontent-%COMP%_slideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.modal-header-custom[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid var(--app-border, #e5e7eb);\n}\n.modal-header-custom[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.modal-header-custom[_ngcontent-%COMP%]   .modal-title-custom[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: var(--app-ink, #1e293b);\n}\n.btn-close-custom[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  font-size: 1.5rem;\n  line-height: 1;\n  color: var(--app-ink-muted, #64748b);\n  cursor: pointer;\n  padding: 4px 8px;\n  border-radius: 8px;\n  transition: all 0.15s ease;\n}\n.btn-close-custom[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n.modal-body-custom[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.detail-summary-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(29, 122, 109, 0.08) 0%,\n      rgba(29, 122, 109, 0.02) 100%);\n  border: 1px solid rgba(29, 122, 109, 0.2);\n  border-radius: 14px;\n  padding: 16px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.detail-summary-card[_ngcontent-%COMP%]   .summary-trek[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: var(--app-ink, #0f172a);\n}\n.detail-summary-card[_ngcontent-%COMP%]   .summary-amount[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 800;\n  color: var(--app-accent, #1d7a6d);\n}\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 14px;\n}\n.detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.detail-item[_ngcontent-%COMP%]   .detail-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--app-ink-muted, #64748b);\n  font-weight: 600;\n}\n.detail-item[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n  color: var(--app-ink, #0f172a);\n  font-weight: 500;\n}\n.modal-footer-custom[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  border-top: 1px solid var(--app-border, #e5e7eb);\n  background: #f8fafc;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(16px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 1024px) {\n  .charts-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .chart-card-wide[_ngcontent-%COMP%] {\n    grid-column: auto;\n  }\n  .chart-card[_ngcontent-%COMP%] {\n    min-height: 280px;\n  }\n  .chart-canvas-wrap[_ngcontent-%COMP%] {\n    min-height: 220px;\n  }\n  .filters-bar[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .filters-bar[_ngcontent-%COMP%]   .search-field[_ngcontent-%COMP%] {\n    grid-column: 1/-1;\n  }\n}\n@media (max-width: 768px) {\n  .table-wrap[_ngcontent-%COMP%]:not(.expanded-table) {\n    display: none;\n  }\n  .mobile-cards[_ngcontent-%COMP%] {\n    display: grid;\n  }\n  .section-head[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 10px;\n  }\n  .stat-card[_ngcontent-%COMP%] {\n    padding: 12px;\n    gap: 10px;\n  }\n  .stat-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .stat-trend[_ngcontent-%COMP%] {\n    padding: 4px 8px;\n    font-size: 0.72rem;\n  }\n  .stat-note[_ngcontent-%COMP%] {\n    font-size: 0.78rem;\n  }\n  .actions-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n  }\n  .action-card[_ngcontent-%COMP%] {\n    padding: 12px;\n    gap: 10px;\n  }\n  .pagination-bar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n  }\n  .page-info[_ngcontent-%COMP%]:last-child {\n    display: none;\n  }\n  .skeleton-table-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n  .modal-backdrop-custom[_ngcontent-%COMP%] {\n    padding: 12px;\n    align-items: flex-end;\n  }\n  .modal-dialog-custom[_ngcontent-%COMP%] {\n    border-radius: 20px 20px 0 0;\n    max-height: 90vh;\n    overflow-y: auto;\n  }\n  .detail-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .detail-summary-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n    align-items: flex-start;\n  }\n}\n@media (max-width: 480px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .actions-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .filters-bar[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .chart-note[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n    padding: 6px 10px;\n  }\n  .page-actions[_ngcontent-%COMP%] {\n    gap: 4px;\n  }\n  .page-btn[_ngcontent-%COMP%] {\n    width: 32px;\n    height: 32px;\n    font-size: 0.8rem;\n  }\n  .page-nav-btn[_ngcontent-%COMP%] {\n    font-size: 0.78rem !important;\n    padding: 0 8px !important;\n    min-height: 32px !important;\n  }\n}\n/*# sourceMappingURL=dashboard.component.css.map */'] });
var DashboardComponent = _DashboardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard", standalone: true, imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      AdminShellComponent
    ], schemas: [CUSTOM_ELEMENTS_SCHEMA], template: `<div class="dash-page">
  <app-admin-shell
    sectionLabel="Overview"
    title="Dashboard"
    subtitle="Real-time snapshots of treks, bookings, and operations.">

    <!-- Error Alert Banner with Retry -->
    <div class="alert alert-warning d-flex align-items-center justify-content-between p-3 mt-3 mb-2 rounded-3 border-0 shadow-sm" *ngIf="hasError">
      <div class="d-flex align-items-center gap-2">
        <i class="bi bi-exclamation-triangle-fill text-warning fs-5"></i>
        <span>Unable to refresh live telemetry from server. Showing cached dashboard data.</span>
      </div>
      <button class="btn btn-sm btn-dark" type="button" (click)="retryLoad()">
        <i class="bi bi-arrow-clockwise"></i> Retry Sync
      </button>
    </div>

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 STATS GRID \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <!-- Loading Skeletons -->
    <section class="stats-grid" *ngIf="isLoading">
      <div class="stat-card skeleton-card" *ngFor="let i of [1,2,3,4,5,6,7]">
        <div class="skeleton-icon shimmer"></div>
        <div class="skeleton-copy">
          <div class="skeleton-line lg shimmer"></div>
          <div class="skeleton-line md shimmer"></div>
          <div class="skeleton-line sm shimmer"></div>
        </div>
      </div>
    </section>

    <!-- Live Stats -->
    <section class="stats-grid" *ngIf="!isLoading">
      <div class="stat-card" *ngFor="let stat of stats" [class.disabled]="stat.disabled"
        [title]="stat.disabled ? ('Disabled: ' + stat.note) : (stat.title + ': ' + (stat.isCurrency ? (stat.value | currency:'INR':'symbol':'1.0-0') : stat.value) + ' (' + stat.change + ')') "
        [attr.aria-disabled]="stat.disabled" role="button" (click)="onCardClick(stat)">
        <div class="stat-icon" [ngClass]="'tone-' + stat.color">
          <i class="bi" [ngClass]="'bi-' + stat.icon"></i>
        </div>
        <div class="stat-copy">
          <div class="stat-top">
            <div>
              <h3>
                {{ stat.isCurrency
                ? (stat.value | currency:'INR':'symbol':'1.0-0')
                : stat.value }}
              </h3>
              <span>{{ stat.title }}</span>
            </div>
            <div class="stat-trend" [ngClass]="stat.trend">
              <i class="bi" [ngClass]="stat.trend === 'up' ? 'bi-arrow-up-right' : 'bi-arrow-down-right'"></i>
              <strong>{{ stat.change }}</strong>
            </div>
          </div>
          <p class="stat-note">{{ stat.note }} \xB7 {{ stat.changeLabel }}</p>
        </div>
      </div>
    </section>

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 CHARTS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <section class="charts-section">
      <div class="section-head">
        <div>
          <h2>Performance Charts</h2>
          <p>Bookings, revenue, cancellation trends, and top trek contribution.</p>
        </div>
        <span class="chart-note">{{ monthlyGrowthLabel === 'N/A' ? 'Growth data unavailable' : 'Growth ' + monthlyGrowthLabel }}</span>
      </div>

      <!-- Charts Grid (Canvas elements always mounted for ViewChild) -->
      <div class="charts-grid">
        <article class="chart-card chart-card-wide">
          <div class="chart-card-head">
            <div>
              <h3>Bookings vs Revenue</h3>
              <p>Monthly trend across the current revenue cycle.</p>
            </div>
          </div>
          <div class="chart-canvas-wrap">
            <canvas #bookingsRevenueChart></canvas>
          </div>
        </article>

        <article class="chart-card">
          <div class="chart-card-head">
            <div>
              <h3>Top Treks</h3>
              <p>Revenue contribution by trek.</p>
            </div>
          </div>
          <div class="chart-canvas-wrap">
            <canvas #trekRevenueChart></canvas>
          </div>
        </article>

        <article class="chart-card">
          <div class="chart-card-head">
            <div>
              <h3>Cancellations</h3>
              <p>Cancelled bookings by month.</p>
            </div>
          </div>
          <div class="chart-canvas-wrap">
            <canvas #cancellationChart></canvas>
          </div>
        </article>

        <article class="chart-card chart-card-wide">
          <div class="chart-card-head">
            <div>
              <h3>Monthly Growth</h3>
              <p>Revenue growth percentage month over month.</p>
            </div>
          </div>
          <div class="chart-canvas-wrap">
            <canvas #growthChart></canvas>
          </div>
        </article>
      </div>
    </section>

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 QUICK ACTIONS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <section class="quick-actions">
      <div class="section-head">
        <div>
          <h2>Quick Actions</h2>
          <p>Shortcuts to common workflows.</p>
        </div>
      </div>
      <div class="actions-grid">
        <button class="action-card" *ngFor="let action of quickActions" type="button" (click)="openQuickAction(action.route)">
          <div class="action-icon" [ngClass]="'tone-' + action.color">
            <i class="bi" [ngClass]="'bi-' + action.icon"></i>
          </div>
          <div>
            <small>{{ action.label }}</small>
          </div>
        </button>
      </div>
    </section>

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 RECENT BOOKINGS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <section class="bookings-section">
      <div class="section-head row">
        <div>
          <h2>Recent Bookings</h2>
          <p>Track the latest activity across treks<span *ngIf="!isLoading"> \xB7 {{ recentBooking.length }} total</span></p>
        </div>
        <div class="d-flex justify-content-end align-items-center" *ngIf="recentBooking.length > 0">
          <button class="btn-app ghost" (click)="toggleViewAll()">
            {{ showAllBookings ? 'Hide' : 'View all' }}
          </button>
        </div>
      </div>

      <!-- Bookings Loading Skeleton -->
      <div class="table-wrap" *ngIf="isLoading">
        <div class="skeleton-table">
          <div class="skeleton-table-row" *ngFor="let i of [1,2,3,4,5]">
            <div class="skeleton-line sm shimmer"></div>
            <div class="skeleton-line md shimmer"></div>
            <div class="skeleton-line lg shimmer"></div>
            <div class="skeleton-line sm shimmer"></div>
            <div class="skeleton-line sm shimmer"></div>
            <div class="skeleton-line xs shimmer"></div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div class="empty-state" *ngIf="!isLoading && recentBooking.length === 0">
        <div class="empty-icon">
          <i class="bi bi-calendar-x"></i>
        </div>
        <h4>No bookings yet</h4>
        <p>Bookings will appear here once customers start booking treks.</p>
        <button class="btn-app" type="button" (click)="navigateTo('/admin/bookings')">
          <i class="bi bi-arrow-right"></i>
          Go to Bookings
        </button>
      </div>

      <!-- Desktop Table -->
      <div class="table-wrap" *ngIf="!isLoading && recentBooking.length > 0">
        <table class="table table-hover align-middle">
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Customer</th>
              <th>Trek</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let booking of recentBooking; let i = index" class="clickable-row" (click)="openBookingModal(booking)">
              <td>#{{ booking.id }}</td>
              <td>{{ booking.customerName }}</td>
              <td>{{ booking.trekName }}</td>
              <td> {{ booking.bookingDate }}</td>
              <td class="fw-bold">{{ booking.amount | currency:'INR':'symbol':'1.0-0' }}</td>
              <td>
                <span class="status-pill" [ngClass]="'status-' + getStatusColor(booking.status)">
                  {{ booking.status }}
                </span>
              </td>
              <td>
                <button class="icon-btn subtle" (click)="$event.stopPropagation(); openBookingModal(booking)" type="button" title="View details">
                  <i class="bi bi-eye"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Mobile Cards -->
      <div class="mobile-cards" *ngIf="!isLoading && recentBooking.length > 0">
        <div class="surface-card booking-card" *ngFor="let booking of recentBooking; let i = index" (click)="openBookingModal(booking)">
          <div class="booking-top">
            <span class="fw-semibold">#{{ booking.id }}</span>
            <span class="status-pill" [ngClass]="'status-' + getStatusColor(booking.status)">
              {{ booking.status }}
            </span>
          </div>
          <h6>{{ booking.trekName }}</h6>
          <small>{{ booking.bookingDate }}</small>
          <div class="booking-meta">
            <span>{{ booking.amount | currency:'INR':'symbol':'1.0-0' }}</span>
            <button class="icon-btn subtle" (click)="$event.stopPropagation(); openBookingModal(booking)" type="button">
              <i class="bi bi-eye"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- Expanded Bookings with Filters + Pagination -->
      <div *ngIf="showAllBookings" class="bookings-expanded">
        <div class="filters-bar">
          <div class="search-field">
            <i class="bi bi-search"></i>
            <input type="text" [(ngModel)]="searchQuery" placeholder="Search by name, trek, email, phone..." />
          </div>
          <div class="filter-group">
            <label>Status</label>
            <select [(ngModel)]="statusFilter">
              <option *ngFor="let opt of bookingStatusOptions" [value]="opt.value">
                {{ opt.label }}
              </option>
            </select>
          </div>
          <div class="filter-group">
            <label>Rows</label>
            <select [(ngModel)]="pageSize">
              <option *ngFor="let size of rowOptions" [ngValue]="size">{{ size }}</option>
            </select>
          </div>
        </div>

        <!-- Expanded Table Empty State -->
        <div class="empty-state compact" *ngIf="filteredBookings.length === 0">
          <div class="empty-icon sm">
            <i class="bi bi-funnel"></i>
          </div>
          <h5>No matching bookings</h5>
          <p>Try adjusting your search or filter criteria.</p>
        </div>

        <div class="table-wrap expanded-table" *ngIf="filteredBookings.length > 0">
          <table class="table table-hover align-middle">
            <thead>
              <tr>
                <th>Booking ID</th>
                <th>Customer</th>
                <th>Trek</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let booking of pagedBookings" class="clickable-row" (click)="openBookingModal(booking)">
                <td>#{{ booking.id }}</td>
                <td>{{ booking.customerName }}</td>
                <td>{{ booking.trekName }}</td>
                <td>{{ booking.bookingDate }}</td>
                <td class="fw-bold">{{ booking.amount | currency:'INR':'symbol':'1.0-0' }}</td>
                <td>
                  <span class="status-pill" [ngClass]="'status-' + getStatusColor(booking.status)">
                    {{ booking.status }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>

          <div class="pagination-bar">
            <span class="page-info">
              Showing {{ pagedBookings.length }} of {{ filteredBookings.length }}
            </span>
            <div class="page-actions">
              <button class="btn-app ghost page-nav-btn" (click)="prevPage()" [disabled]="currentPage === 1">
                <i class="bi bi-chevron-left"></i> Prev
              </button>
              <ng-container *ngFor="let p of visiblePageNumbers">
                <span class="page-ellipsis" *ngIf="p === '...'">\u2026</span>
                <button
                  class="page-btn"
                  *ngIf="p !== '...'"
                  [class.active]="p === currentPage"
                  (click)="setPage(+p)">
                  {{ p }}
                </button>
              </ng-container>
              <button class="btn-app ghost page-nav-btn" (click)="nextPage()" [disabled]="currentPage === totalPages">
                Next <i class="bi bi-chevron-right"></i>
              </button>
            </div>
            <span class="page-info">Page {{ currentPage }} of {{ totalPages }}</span>
          </div>
        </div>
      </div>
    </section>
  </app-admin-shell>

  <!-- Modern Booking Detail Modal -->
  <div *ngIf="selectedBooking" class="modal-backdrop-custom" (click)="closeDetails()">
    <div class="modal-dialog-custom" (click)="$event.stopPropagation()">
      <div class="modal-header-custom">
        <div>
          <h3 class="modal-title-custom">
            Booking #{{ selectedBooking.id }}
          </h3>
          <span class="status-pill" [ngClass]="'status-' + getStatusColor(selectedBooking.status)">
            {{ selectedBooking.status | titlecase }}
          </span>
        </div>
        <button type="button" class="btn-close-custom" (click)="closeDetails()">&times;</button>
      </div>

      <div class="modal-body-custom">
        <div class="detail-summary-card">
          <div class="summary-trek">{{ selectedBooking.trekName }}</div>
          <div class="summary-amount">{{ selectedBooking.amount | currency:'INR':'symbol':'1.0-0' }}</div>
        </div>

        <div class="detail-grid">
          <div class="detail-item">
            <span class="detail-label">Customer Name</span>
            <span class="detail-value">{{ selectedBooking.customerName }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Email</span>
            <span class="detail-value">{{ selectedBooking.email || '\u2014' }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Phone</span>
            <span class="detail-value">{{ selectedBooking.phone || '\u2014' }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Booking Date</span>
            <span class="detail-value">{{ selectedBooking.bookingDate }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Participants</span>
            <span class="detail-value">{{ selectedBooking.participants || 1 }} person(s)</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Payment Status</span>
            <span class="detail-value text-capitalize">{{ selectedBooking.paymentStatus || 'Pending' }}</span>
          </div>
        </div>
      </div>

      <div class="modal-footer-custom">
        <button class="btn-app ghost" type="button" (click)="closeDetails()">Close</button>
        <button class="btn-app" type="button" (click)="goToBookingsPage()">
          <i class="bi bi-box-arrow-up-right"></i> Open in Bookings
        </button>
      </div>
    </div>
  </div>
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/dashboard/dashboard.component.scss */\n:host {\n  display: block;\n  width: 100%;\n  min-height: 100%;\n  font-family:\n    "Plus Jakarta Sans",\n    system-ui,\n    -apple-system,\n    sans-serif;\n  color: #0f172a;\n}\n.dash-page {\n  --background: #f8fafc;\n  background: #f8fafc;\n  min-height: 100%;\n}\n@keyframes shimmer {\n  0% {\n    background-position: -600px 0;\n  }\n  100% {\n    background-position: 600px 0;\n  }\n}\n.shimmer {\n  background:\n    linear-gradient(\n      90deg,\n      rgba(226, 232, 240, 0.6) 0%,\n      rgba(203, 213, 225, 0.9) 50%,\n      rgba(226, 232, 240, 0.6) 100%);\n  background-size: 600px 100%;\n  animation: shimmer 1.5s ease-in-out infinite;\n  border-radius: 8px;\n}\n.skeleton-card {\n  background: #ffffff;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: var(--app-radius, 16px);\n  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04);\n  display: flex;\n  gap: 14px;\n  align-items: flex-start;\n  padding: 16px 18px !important;\n}\n.skeleton-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 14px;\n  flex-shrink: 0;\n}\n.skeleton-copy {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.skeleton-line {\n  height: 12px;\n}\n.skeleton-line.xs {\n  width: 30%;\n}\n.skeleton-line.sm {\n  width: 45%;\n}\n.skeleton-line.md {\n  width: 65%;\n}\n.skeleton-line.lg {\n  width: 85%;\n  height: 18px;\n}\n.skeleton-chart-head {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.skeleton-chart-head .skeleton-line.lg {\n  width: 50%;\n}\n.skeleton-chart-head .skeleton-line.md {\n  width: 70%;\n  height: 10px;\n}\n.skeleton-chart-area {\n  flex: 1;\n  min-height: 220px;\n  border-radius: 12px;\n}\n.skeleton-table {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  padding: 8px 0;\n}\n.skeleton-table-row {\n  display: grid;\n  grid-template-columns: 0.5fr 1fr 1.5fr 0.8fr 0.6fr 0.5fr;\n  gap: 12px;\n  align-items: center;\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 48px 24px;\n  background: #fff;\n  border: 1px dashed var(--app-border);\n  border-radius: var(--app-radius);\n}\n.empty-state h4,\n.empty-state h5 {\n  margin: 12px 0 4px;\n  color: var(--app-ink);\n}\n.empty-state p {\n  color: var(--app-ink-muted);\n  margin: 0 0 16px;\n  max-width: 360px;\n  font-size: 0.92rem;\n}\n.empty-state.compact {\n  padding: 32px 20px;\n}\n.empty-icon {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background: rgba(31, 107, 87, 0.1);\n  display: grid;\n  place-items: center;\n  font-size: 1.6rem;\n  color: var(--app-accent);\n}\n.empty-icon.sm {\n  width: 48px;\n  height: 48px;\n  font-size: 1.2rem;\n}\n.stats-grid {\n  display: flex;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 6px;\n  margin-top: 6px;\n  scrollbar-width: thin;\n  overflow: auto;\n  min-width: 0;\n}\n.stat-card {\n  background: #fff;\n  border: 1px solid var(--app-border);\n  border-radius: var(--app-radius);\n  padding: 16px 8px;\n  display: flex;\n  gap: 4px;\n  align-items: flex-start;\n  box-shadow: var(--app-shadow-soft);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n  cursor: pointer;\n}\n.stat-card.disabled {\n  opacity: 0.6;\n  pointer-events: none;\n  cursor: default;\n}\n.stat-card:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--app-shadow);\n}\n.stat-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 14px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n  flex-shrink: 0;\n  background: rgba(29, 122, 109, 0.12);\n  color: var(--app-accent);\n}\n.stat-icon.tone-success {\n  background: rgba(47, 157, 106, 0.16);\n  color: var(--ion-color-success);\n}\n.stat-icon.tone-warning {\n  background: rgba(231, 178, 59, 0.2);\n  color: #a56a00;\n}\n.stat-icon.tone-danger {\n  background: rgba(224, 106, 91, 0.18);\n  color: var(--ion-color-danger);\n}\n.stat-icon.tone-primary {\n  background: rgba(29, 122, 109, 0.16);\n  color: var(--ion-color-primary);\n}\n.stat-copy {\n  flex: 1;\n  min-width: 0;\n}\n.stat-top {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n}\n.stat-card h3 {\n  margin: 0;\n  font-size: 1.55rem;\n  line-height: 1.05;\n  letter-spacing: -0.03em;\n}\n.stat-card span {\n  color: var(--app-ink-muted);\n}\n.stat-trend {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 10px;\n  border-radius: 999px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.stat-trend.up {\n  background: rgba(47, 157, 106, 0.14);\n  color: var(--ion-color-success);\n}\n.stat-trend.down {\n  background: rgba(224, 106, 91, 0.14);\n  color: var(--ion-color-danger);\n}\n.stat-note {\n  margin: 8px 0 0;\n  color: var(--app-ink-muted);\n  font-size: 0.84rem;\n}\n.charts-section {\n  margin-top: 28px;\n}\n.chart-note {\n  display: inline-flex;\n  align-items: center;\n  padding: 8px 12px;\n  border-radius: 999px;\n  background: rgba(29, 122, 109, 0.1);\n  color: var(--app-accent);\n  font-weight: 700;\n  font-size: 0.82rem;\n  white-space: nowrap;\n}\n.charts-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px;\n}\n.chart-card {\n  background: #fff;\n  border: 1px solid var(--app-border);\n  border-radius: var(--app-radius);\n  box-shadow: var(--app-shadow-soft);\n  padding: 16px 18px;\n  display: flex;\n  flex-direction: column;\n  min-height: 320px;\n}\n.chart-card-wide {\n  grid-column: span 2;\n}\n.chart-card-head h3 {\n  margin: 0;\n}\n.chart-card-head p {\n  margin: 6px 0 0;\n  color: var(--app-ink-muted);\n  font-size: 0.9rem;\n}\n.chart-canvas-wrap {\n  position: relative;\n  flex: 1;\n  min-height: 260px;\n  height: 260px;\n  width: 100%;\n  margin-top: 12px;\n}\n.quick-actions {\n  margin-top: 28px;\n}\n.section-head {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 16px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.section-head p {\n  margin: 6px 0 0;\n  color: var(--app-ink-muted);\n}\n.actions-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n}\n.action-card {\n  border: 1px solid var(--app-border);\n  border-radius: var(--app-radius);\n  background: #fff;\n  padding: 16px;\n  display: flex;\n  gap: 14px;\n  align-items: center;\n  text-align: left;\n  box-shadow: var(--app-shadow-soft);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n  cursor: pointer;\n}\n.action-card:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--app-shadow);\n}\n.action-card span {\n  font-weight: 600;\n  display: block;\n}\n.action-card small {\n  color: var(--app-ink-muted);\n  font-weight: 600;\n}\n.action-icon {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  display: grid;\n  place-items: center;\n  flex-shrink: 0;\n  background: rgba(241, 166, 77, 0.2);\n  color: #a8671d;\n}\n.action-icon.tone-primary {\n  background: rgba(29, 122, 109, 0.18);\n  color: var(--app-accent);\n}\n.action-icon.tone-success {\n  background: rgba(47, 157, 106, 0.18);\n  color: var(--ion-color-success);\n}\n.action-icon.tone-warning {\n  background: rgba(231, 178, 59, 0.22);\n  color: #8a5f00;\n}\n.action-icon.tone-danger {\n  background: rgba(224, 106, 91, 0.2);\n  color: var(--ion-color-danger);\n}\n.bookings-section {\n  margin-top: 32px;\n}\n.table-wrap {\n  background: #fff;\n  border: 1px solid var(--app-border);\n  border-radius: var(--app-radius);\n  padding: 8px 12px;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.icon-btn {\n  position: relative;\n  width: 44px;\n  height: 44px;\n  border-radius: 14px;\n  border: 1px solid var(--app-border);\n  background: #fff;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--app-ink);\n  box-shadow: var(--app-shadow-soft);\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.icon-btn:hover {\n  background: var(--app-surface-2);\n}\n.icon-btn.subtle {\n  box-shadow: none;\n  border-color: transparent;\n}\n.bookings-expanded {\n  margin-top: 18px;\n  display: grid;\n  gap: 14px;\n}\n.filters-bar {\n  display: grid;\n  grid-template-columns: 2fr repeat(2, minmax(120px, 1fr));\n  gap: 12px;\n  background: #fff;\n  border: 1px solid var(--app-border);\n  border-radius: 18px;\n  padding: 12px;\n}\n.search-field {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  border: 1px solid var(--app-border);\n  border-radius: 14px;\n  padding: 10px 12px;\n  background: var(--app-surface-2);\n}\n.search-field input {\n  border: none;\n  background: transparent;\n  outline: none;\n  width: 100%;\n}\n.filter-group label {\n  display: block;\n  font-size: 0.8rem;\n  color: var(--app-ink-muted);\n  margin-bottom: 6px;\n}\n.filter-group select {\n  width: 100%;\n  padding: 10px 12px;\n  border-radius: 14px;\n  border: 1px solid var(--app-border);\n  background: #fff;\n}\n.expanded-table {\n  padding: 12px 14px;\n}\n.pagination-bar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n  margin-top: 12px;\n  flex-wrap: wrap;\n  padding: 8px 0 4px;\n  border-top: 1px solid var(--app-border);\n}\n.page-actions {\n  display: flex;\n  gap: 6px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.page-nav-btn {\n  font-size: 0.82rem !important;\n  padding: 0 12px !important;\n  min-height: 36px !important;\n  min-width: auto !important;\n  gap: 4px !important;\n}\n.page-nav-btn:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.page-btn {\n  border: 1px solid var(--app-border);\n  background: #fff;\n  border-radius: 999px;\n  width: 36px;\n  height: 36px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 0.85rem;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.page-btn:hover:not(.active) {\n  background: var(--app-surface-2);\n}\n.page-btn.active {\n  background: var(--app-accent);\n  color: #fff;\n  border-color: transparent;\n}\n.page-ellipsis {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 36px;\n  color: var(--app-ink-muted);\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.page-info {\n  color: var(--app-ink-muted);\n  font-size: 0.85rem;\n  white-space: nowrap;\n}\n.status-pill {\n  display: inline-flex;\n  align-items: center;\n  padding: 6px 12px;\n  border-radius: 999px;\n  font-weight: 600;\n  font-size: 0.85rem;\n  background: rgba(29, 122, 109, 0.12);\n  color: var(--ion-color-primary);\n}\n.status-pill.status-success {\n  background: rgba(47, 157, 106, 0.15);\n  color: var(--ion-color-success);\n}\n.status-pill.status-danger {\n  background: rgba(224, 106, 91, 0.15);\n  color: var(--ion-color-danger);\n}\n.status-pill.status-warning {\n  background: rgba(231, 178, 59, 0.2);\n  color: #9c6a00;\n}\n.mobile-cards {\n  display: none;\n  gap: 12px;\n}\n.booking-card {\n  padding: 14px;\n}\n.booking-top {\n  display: flex;\n  justify-content: space-between;\n}\n.booking-meta {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 12px;\n}\n.clickable-row {\n  cursor: pointer;\n  transition: background-color 0.15s ease;\n}\n.clickable-row:hover {\n  background-color: rgba(29, 122, 109, 0.05) !important;\n}\n.modal-backdrop-custom {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.6);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  animation: fadeIn 0.2s ease-out;\n}\n.modal-dialog-custom {\n  background: #ffffff;\n  border-radius: 20px;\n  width: 100%;\n  max-width: 540px;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  animation: slideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.modal-header-custom {\n  padding: 20px 24px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid var(--app-border, #e5e7eb);\n}\n.modal-header-custom > div {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.modal-header-custom .modal-title-custom {\n  margin: 0;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: var(--app-ink, #1e293b);\n}\n.btn-close-custom {\n  background: transparent;\n  border: none;\n  font-size: 1.5rem;\n  line-height: 1;\n  color: var(--app-ink-muted, #64748b);\n  cursor: pointer;\n  padding: 4px 8px;\n  border-radius: 8px;\n  transition: all 0.15s ease;\n}\n.btn-close-custom:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n.modal-body-custom {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.detail-summary-card {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(29, 122, 109, 0.08) 0%,\n      rgba(29, 122, 109, 0.02) 100%);\n  border: 1px solid rgba(29, 122, 109, 0.2);\n  border-radius: 14px;\n  padding: 16px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.detail-summary-card .summary-trek {\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: var(--app-ink, #0f172a);\n}\n.detail-summary-card .summary-amount {\n  font-size: 1.25rem;\n  font-weight: 800;\n  color: var(--app-accent, #1d7a6d);\n}\n.detail-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 14px;\n}\n.detail-item {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.detail-item .detail-label {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--app-ink-muted, #64748b);\n  font-weight: 600;\n}\n.detail-item .detail-value {\n  font-size: 0.92rem;\n  color: var(--app-ink, #0f172a);\n  font-weight: 500;\n}\n.modal-footer-custom {\n  padding: 16px 24px;\n  border-top: 1px solid var(--app-border, #e5e7eb);\n  background: #f8fafc;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(16px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 1024px) {\n  .charts-grid {\n    grid-template-columns: 1fr;\n  }\n  .chart-card-wide {\n    grid-column: auto;\n  }\n  .chart-card {\n    min-height: 280px;\n  }\n  .chart-canvas-wrap {\n    min-height: 220px;\n  }\n  .filters-bar {\n    grid-template-columns: 1fr 1fr;\n  }\n  .filters-bar .search-field {\n    grid-column: 1/-1;\n  }\n}\n@media (max-width: 768px) {\n  .table-wrap:not(.expanded-table) {\n    display: none;\n  }\n  .mobile-cards {\n    display: grid;\n  }\n  .section-head {\n    flex-direction: column;\n  }\n  .stats-grid {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 10px;\n  }\n  .stat-card {\n    padding: 12px;\n    gap: 10px;\n  }\n  .stat-card h3 {\n    font-size: 1.25rem;\n  }\n  .stat-trend {\n    padding: 4px 8px;\n    font-size: 0.72rem;\n  }\n  .stat-note {\n    font-size: 0.78rem;\n  }\n  .actions-grid {\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n  }\n  .action-card {\n    padding: 12px;\n    gap: 10px;\n  }\n  .pagination-bar {\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n  }\n  .page-info:last-child {\n    display: none;\n  }\n  .skeleton-table-row {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n  .modal-backdrop-custom {\n    padding: 12px;\n    align-items: flex-end;\n  }\n  .modal-dialog-custom {\n    border-radius: 20px 20px 0 0;\n    max-height: 90vh;\n    overflow-y: auto;\n  }\n  .detail-grid {\n    grid-template-columns: 1fr;\n  }\n  .detail-summary-card {\n    flex-direction: column;\n    gap: 8px;\n    align-items: flex-start;\n  }\n}\n@media (max-width: 480px) {\n  .stats-grid {\n    grid-template-columns: 1fr;\n  }\n  .actions-grid {\n    grid-template-columns: 1fr;\n  }\n  .filters-bar {\n    grid-template-columns: 1fr;\n  }\n  .chart-note {\n    font-size: 0.75rem;\n    padding: 6px 10px;\n  }\n  .page-actions {\n    gap: 4px;\n  }\n  .page-btn {\n    width: 32px;\n    height: 32px;\n    font-size: 0.8rem;\n  }\n  .page-nav-btn {\n    font-size: 0.78rem !important;\n    padding: 0 8px !important;\n    min-height: 32px !important;\n  }\n}\n/*# sourceMappingURL=dashboard.component.css.map */\n'] }]
  }], () => [{ type: Router }, { type: Dashboard }, { type: DropdownManagerService }, { type: Analytics }, { type: ChangeDetectorRef }], { labels: [{
    type: Input
  }], bookingsData: [{
    type: Input
  }], revenueData: [{
    type: Input
  }], bookingsRevenueChartRef: [{
    type: ViewChild,
    args: ["bookingsRevenueChart"]
  }], trekRevenueChartRef: [{
    type: ViewChild,
    args: ["trekRevenueChart"]
  }], cancellationChartRef: [{
    type: ViewChild,
    args: ["cancellationChart"]
  }], growthChartRef: [{
    type: ViewChild,
    args: ["growthChart"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/dashboard/dashboard.component.ts", lineNumber: 59 });
})();

// src/app/dashboard/dashboard-module.ts
var routes = [{ path: "", component: DashboardComponent }];
var _DashboardModule = class _DashboardModule {
};
_DashboardModule.\u0275fac = function DashboardModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DashboardModule)();
};
_DashboardModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DashboardModule });
_DashboardModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, DashboardComponent, RouterModule.forChild(routes)] });
var DashboardModule = _DashboardModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        CommonModule,
        DashboardComponent,
        RouterModule.forChild(routes)
      ]
    }]
  }], null, null);
})();
export {
  DashboardModule
};
//# sourceMappingURL=dashboard-module-67XML4P4.js.map
