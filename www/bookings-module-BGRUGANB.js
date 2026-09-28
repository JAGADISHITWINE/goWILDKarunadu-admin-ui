import {
  Bookings
} from "./chunk-LO3D7BUV.js";
import {
  DropdownManagerService
} from "./chunk-2AIND2RX.js";
import {
  AdminShellComponent
} from "./chunk-GLAFLAWJ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
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
import "./chunk-D4XXJJII.js";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  CommonModule,
  Component,
  DecimalPipe,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  RouterModule,
  TitleCasePipe,
  UpperCasePipe,
  __spreadProps,
  __spreadValues,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
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

// src/app/bookings/bookings.component.ts
var _c0 = () => [1, 2, 3, 4, 5, 6, 7, 8];
function BookingsComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 54);
    \u0275\u0275listener("click", function BookingsComponent_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.searchQuery = "");
    });
    \u0275\u0275element(1, "i", 55);
    \u0275\u0275elementEnd();
  }
}
function BookingsComponent_option_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r3 = ctx.$implicit;
    \u0275\u0275property("value", s_r3.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r3.label, " ");
  }
}
function BookingsComponent_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    \u0275\u0275property("value", p_r4.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r4.label);
  }
}
function BookingsComponent_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 57);
    \u0275\u0275listener("click", function BookingsComponent_button_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDatePreset("all"));
    });
    \u0275\u0275element(1, "i", 58);
    \u0275\u0275elementEnd();
  }
}
function BookingsComponent_span_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 59);
    \u0275\u0275element(1, "i", 60);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedCount, " selected ");
  }
}
function BookingsComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 61)(1, "span", 62);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 63);
    \u0275\u0275listener("click", function BookingsComponent_div_46_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateSelectedStatus("confirmed"));
    });
    \u0275\u0275element(4, "i", 64);
    \u0275\u0275text(5, " Confirm ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 63);
    \u0275\u0275listener("click", function BookingsComponent_div_46_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateSelectedStatus("pending"));
    });
    \u0275\u0275element(7, "i", 65);
    \u0275\u0275text(8, " Pending ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 66);
    \u0275\u0275listener("click", function BookingsComponent_div_46_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateSelectedStatus("cancelled"));
    });
    \u0275\u0275element(10, "i", 67);
    \u0275\u0275text(11, " Cancel ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.selectedCount, " selected:");
  }
}
function BookingsComponent_option_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const size_r7 = ctx.$implicit;
    \u0275\u0275property("ngValue", size_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", size_r7, " rows");
  }
}
function BookingsComponent_div_64_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76);
    \u0275\u0275element(1, "div", 77)(2, "div", 72)(3, "div", 74)(4, "div", 73)(5, "div", 78)(6, "div", 72)(7, "div", 73);
    \u0275\u0275elementEnd();
  }
}
function BookingsComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "div", 70)(2, "div", 71);
    \u0275\u0275element(3, "div", 72)(4, "div", 73)(5, "div", 74)(6, "div", 73)(7, "div", 72)(8, "div", 72)(9, "div", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, BookingsComponent_div_64_div_10_Template, 8, 0, "div", 75);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c0));
  }
}
function BookingsComponent_div_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 79)(1, "div", 80);
    \u0275\u0275element(2, "i", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No Bookings Found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "No reservations match your current filter and search criteria.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 82);
    \u0275\u0275listener("click", function BookingsComponent_div_65_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resetFilters());
    });
    \u0275\u0275element(8, "i", 44);
    \u0275\u0275text(9, " Reset Filters ");
    \u0275\u0275elementEnd()();
  }
}
function BookingsComponent_div_66_tr_31_button_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 121);
    \u0275\u0275listener("click", function BookingsComponent_div_66_tr_31_button_40_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const booking_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.sendPaymentLinkWhatsApp(booking_r11, $event));
    });
    \u0275\u0275element(1, "i", 122);
    \u0275\u0275elementEnd();
  }
}
function BookingsComponent_div_66_tr_31_div_41_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 126);
    \u0275\u0275element(1, "i", 89);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const booking_r11 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getPaymentMethodIcon(booking_r11.paymentMethod));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", booking_r11.paymentMethod, " ");
  }
}
function BookingsComponent_div_66_tr_31_div_41_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 127);
    \u0275\u0275listener("click", function BookingsComponent_div_66_tr_31_div_41_span_2_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const booking_r11 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.copyTxnId(booking_r11.transactionId, $event));
    });
    \u0275\u0275text(1);
    \u0275\u0275element(2, "i", 89);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const booking_r11 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("title", ctx_r1.copiedTxnId === booking_r11.transactionId ? "Copied to clipboard!" : "Click to copy Txn ID");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", booking_r11.transactionId, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.copiedTxnId === booking_r11.transactionId ? "bi-check-all text-success" : "bi-clipboard");
  }
}
function BookingsComponent_div_66_tr_31_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 123);
    \u0275\u0275template(1, BookingsComponent_div_66_tr_31_div_41_span_1_Template, 3, 2, "span", 124)(2, BookingsComponent_div_66_tr_31_div_41_span_2_Template, 3, 3, "span", 125);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const booking_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", booking_r11.paymentMethod);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", booking_r11.transactionId);
  }
}
function BookingsComponent_div_66_tr_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 97);
    \u0275\u0275listener("click", function BookingsComponent_div_66_tr_31_Template_tr_click_0_listener() {
      const booking_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openDrawer(booking_r11));
    });
    \u0275\u0275elementStart(1, "td", 98);
    \u0275\u0275listener("click", function BookingsComponent_div_66_tr_31_Template_td_click_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "input", 99);
    \u0275\u0275listener("change", function BookingsComponent_div_66_tr_31_Template_input_change_2_listener() {
      const booking_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleBookingSelection(booking_r11.id));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "td")(4, "div", 100)(5, "strong", 101);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 102);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "td")(10, "div", 100)(11, "strong", 103);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 102);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "td")(16, "div", 100)(17, "strong", 104);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 102);
    \u0275\u0275element(20, "i", 105);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "td", 106)(23, "span", 107);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "td", 108)(26, "span", 109);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "td")(30, "span", 110);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "td")(34, "div", 111)(35, "div", 112)(36, "span", 113);
    \u0275\u0275element(37, "span", 114);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275template(40, BookingsComponent_div_66_tr_31_button_40_Template, 2, 0, "button", 115);
    \u0275\u0275elementEnd();
    \u0275\u0275template(41, BookingsComponent_div_66_tr_31_div_41_Template, 3, 2, "div", 116);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "td", 117);
    \u0275\u0275listener("click", function BookingsComponent_div_66_tr_31_Template_td_click_42_listener($event) {
      \u0275\u0275restoreView(_r10);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(43, "div", 118)(44, "button", 119);
    \u0275\u0275listener("click", function BookingsComponent_div_66_tr_31_Template_button_click_44_listener() {
      const booking_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openDrawer(booking_r11));
    });
    \u0275\u0275element(45, "i", 120);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const booking_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r1.selectedBookingIds.has(booking_r11.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r1.selectedBookingIds.has(booking_r11.id));
    \u0275\u0275attribute("aria-label", "Select booking #" + booking_r11.id);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("#", booking_r11.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(booking_r11.bookingDate));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(booking_r11.customerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(booking_r11.email);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(booking_r11.trekName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(booking_r11.date));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(booking_r11.participants);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(28, 19, booking_r11.amount, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", "status-" + ctx_r1.getStatusColor(booking_r11.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(32, 22, booking_r11.status), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", "status-" + ctx_r1.getPaymentColor(booking_r11.paymentStatus));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", booking_r11.paymentStatus);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(39, 24, booking_r11.paymentStatus === "partially_refunded" ? "Partial Refund" : booking_r11.paymentStatus), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", booking_r11.paymentStatus === "pending");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", booking_r11.paymentMethod || booking_r11.transactionId);
  }
}
function BookingsComponent_div_66_div_33_button_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 147);
    \u0275\u0275listener("click", function BookingsComponent_div_66_div_33_button_31_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r16);
      const booking_r15 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.sendPaymentLinkWhatsApp(booking_r15, $event));
    });
    \u0275\u0275element(1, "i", 122);
    \u0275\u0275elementEnd();
  }
}
function BookingsComponent_div_66_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 128);
    \u0275\u0275listener("click", function BookingsComponent_div_66_div_33_Template_div_click_0_listener() {
      const booking_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openDrawer(booking_r15));
    });
    \u0275\u0275elementStart(1, "div", 129)(2, "div", 130);
    \u0275\u0275listener("click", function BookingsComponent_div_66_div_33_Template_div_click_2_listener($event) {
      \u0275\u0275restoreView(_r14);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(3, "input", 99);
    \u0275\u0275listener("change", function BookingsComponent_div_66_div_33_Template_input_change_3_listener() {
      const booking_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleBookingSelection(booking_r15.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 101);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 131)(7, "span", 110);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "titlecase");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 132)(11, "h4", 133);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 134);
    \u0275\u0275element(14, "i", 135);
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 136);
    \u0275\u0275text(18, "\u2022");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 137);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 138);
    \u0275\u0275element(22, "i", 139);
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 140)(26, "div", 141)(27, "span", 113);
    \u0275\u0275element(28, "span", 114);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275template(31, BookingsComponent_div_66_div_33_button_31_Template, 2, 0, "button", 142);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 143)(33, "span", 144);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 145);
    \u0275\u0275listener("click", function BookingsComponent_div_66_div_33_Template_button_click_36_listener($event) {
      const booking_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.openDrawer(booking_r15));
    });
    \u0275\u0275element(37, "i", 146);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const booking_r15 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r1.selectedBookingIds.has(booking_r15.id));
    \u0275\u0275advance(3);
    \u0275\u0275property("checked", ctx_r1.selectedBookingIds.has(booking_r15.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", booking_r15.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", "status-" + ctx_r1.getStatusColor(booking_r15.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 15, booking_r15.status), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(booking_r15.trekName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(booking_r15.customerName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", booking_r15.participants, " pax");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Trek Date: ", ctx_r1.formatDate(booking_r15.date));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", "status-" + ctx_r1.getPaymentColor(booking_r15.paymentStatus));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", booking_r15.paymentStatus);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 17, booking_r15.paymentStatus === "partially_refunded" ? "Partial Refund" : booking_r15.paymentStatus), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", booking_r15.paymentStatus === "pending");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(35, 19, booking_r15.amount, "1.0-0"));
  }
}
function BookingsComponent_div_66_div_34_option_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 56);
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
function BookingsComponent_div_66_div_34_ng_container_24_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 161);
    \u0275\u0275text(1, "\u2026");
    \u0275\u0275elementEnd();
  }
}
function BookingsComponent_div_66_div_34_ng_container_24_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 162);
    \u0275\u0275listener("click", function BookingsComponent_div_66_div_34_ng_container_24_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const p_r20 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goToPage(p_r20));
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
function BookingsComponent_div_66_div_34_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, BookingsComponent_div_66_div_34_ng_container_24_span_1_Template, 2, 0, "span", 159)(2, BookingsComponent_div_66_div_34_ng_container_24_button_2_Template, 2, 3, "button", 160);
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
function BookingsComponent_div_66_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 148)(1, "div", 149)(2, "div", 150);
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
    \u0275\u0275text(12, " bookings ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 151)(14, "div", 152)(15, "label");
    \u0275\u0275text(16, "Per page:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "select", 153);
    \u0275\u0275twoWayListener("ngModelChange", function BookingsComponent_div_66_div_34_Template_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.pageSize, $event) || (ctx_r1.pageSize = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function BookingsComponent_div_66_div_34_Template_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageSizeChange($event));
    });
    \u0275\u0275template(18, BookingsComponent_div_66_div_34_option_18_Template, 2, 2, "option", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 154)(20, "button", 155);
    \u0275\u0275listener("click", function BookingsComponent_div_66_div_34_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.prevPage());
    });
    \u0275\u0275element(21, "i", 156);
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23, "Prev");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(24, BookingsComponent_div_66_div_34_ng_container_24_Template, 3, 2, "ng-container", 157);
    \u0275\u0275elementStart(25, "button", 158);
    \u0275\u0275listener("click", function BookingsComponent_div_66_div_34_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.nextPage());
    });
    \u0275\u0275elementStart(26, "span");
    \u0275\u0275text(27, "Next");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "i", 146);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r1.currentPage - 1) * ctx_r1.Number(ctx_r1.pageSize) + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.Math.min(ctx_r1.currentPage * ctx_r1.Number(ctx_r1.pageSize), ctx_r1.filteredBookings.length));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.filteredBookings.length);
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
function BookingsComponent_div_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 83)(1, "div", 84)(2, "table", 85)(3, "thead")(4, "tr")(5, "th", 86)(6, "input", 87);
    \u0275\u0275listener("change", function BookingsComponent_div_66_Template_input_change_6_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleVisibleSelection());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "th", 88);
    \u0275\u0275listener("click", function BookingsComponent_div_66_Template_th_click_7_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setSort("bookingDate"));
    });
    \u0275\u0275text(8, " Booked On ");
    \u0275\u0275element(9, "i", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 88);
    \u0275\u0275listener("click", function BookingsComponent_div_66_Template_th_click_10_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setSort("customerName"));
    });
    \u0275\u0275text(11, " Customer ");
    \u0275\u0275element(12, "i", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 88);
    \u0275\u0275listener("click", function BookingsComponent_div_66_Template_th_click_13_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setSort("trekName"));
    });
    \u0275\u0275text(14, " Trek ");
    \u0275\u0275element(15, "i", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 90);
    \u0275\u0275listener("click", function BookingsComponent_div_66_Template_th_click_16_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setSort("participants"));
    });
    \u0275\u0275text(17, " Pax ");
    \u0275\u0275element(18, "i", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 91);
    \u0275\u0275listener("click", function BookingsComponent_div_66_Template_th_click_19_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setSort("amount"));
    });
    \u0275\u0275text(20, " Amount ");
    \u0275\u0275element(21, "i", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th", 88);
    \u0275\u0275listener("click", function BookingsComponent_div_66_Template_th_click_22_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setSort("status"));
    });
    \u0275\u0275text(23, " Status ");
    \u0275\u0275element(24, "i", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th", 88);
    \u0275\u0275listener("click", function BookingsComponent_div_66_Template_th_click_25_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setSort("paymentStatus"));
    });
    \u0275\u0275text(26, " Payment ");
    \u0275\u0275element(27, "i", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "th", 92);
    \u0275\u0275text(29, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "tbody");
    \u0275\u0275template(31, BookingsComponent_div_66_tr_31_Template, 46, 26, "tr", 93);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 94);
    \u0275\u0275template(33, BookingsComponent_div_66_div_33_Template, 38, 22, "div", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275template(34, BookingsComponent_div_66_div_34_Template, 29, 8, "div", 96);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("checked", ctx_r1.isAllVisibleSelected)("disabled", ctx_r1.pagedBookings.length === 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.sortIcon("bookingDate"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.sortIcon("customerName"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.sortIcon("trekName"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.sortIcon("participants"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.sortIcon("amount"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.sortIcon("status"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.sortIcon("paymentStatus"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.pagedBookings);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.pagedBookings);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoading && ctx_r1.filteredBookings.length > 0);
  }
}
function BookingsComponent_aside_68_button_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 208);
    \u0275\u0275listener("click", function BookingsComponent_aside_68_button_72_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openRefundModal(ctx_r1.selectedBooking));
    });
    \u0275\u0275element(1, "i", 44);
    \u0275\u0275text(2, " Refund ");
    \u0275\u0275elementEnd();
  }
}
function BookingsComponent_aside_68_div_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 191)(1, "span", 192);
    \u0275\u0275element(2, "i", 209);
    \u0275\u0275text(3, " Forest Dept Eco-Permits");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 194);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(6, 1, ctx_r1.getFareBreakdown(ctx_r1.selectedBooking.amount).permitFee, "1.0-0"));
  }
}
function BookingsComponent_aside_68_div_111_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 180)(1, "span", 176);
    \u0275\u0275text(2, "Transaction / UTR ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 210);
    \u0275\u0275listener("click", function BookingsComponent_aside_68_div_111_Template_span_click_3_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.copyTxnId(ctx_r1.selectedBooking.transactionId, $event));
    });
    \u0275\u0275text(4);
    \u0275\u0275element(5, "i", 89);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedBooking.transactionId, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.copiedTxnId === ctx_r1.selectedBooking.transactionId ? "bi-check-all text-success" : "bi-clipboard");
  }
}
function BookingsComponent_aside_68_div_112_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 180)(1, "span", 176);
    \u0275\u0275text(2, "Payment Reminder");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 177)(4, "button", 211);
    \u0275\u0275listener("click", function BookingsComponent_aside_68_div_112_Template_button_click_4_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.sendPaymentLinkWhatsApp(ctx_r1.selectedBooking, $event));
    });
    \u0275\u0275element(5, "i", 122);
    \u0275\u0275text(6, " Send link via WhatsApp ");
    \u0275\u0275elementEnd()()();
  }
}
function BookingsComponent_aside_68_button_121_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 212);
    \u0275\u0275listener("click", function BookingsComponent_aside_68_button_121_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openRefundModal(ctx_r1.selectedBooking));
    });
    \u0275\u0275element(1, "i", 44);
    \u0275\u0275text(2, " Refund ");
    \u0275\u0275elementEnd();
  }
}
function BookingsComponent_aside_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "aside", 163)(1, "div", 164)(2, "div", 165)(3, "span", 166);
    \u0275\u0275text(4, "Booking Reference");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2", 167);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 168);
    \u0275\u0275listener("click", function BookingsComponent_aside_68_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDrawer());
    });
    \u0275\u0275element(8, "i", 169);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 170)(10, "div", 171)(11, "span", 110);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 113);
    \u0275\u0275element(15, "span", 114);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 172)(19, "h4", 173);
    \u0275\u0275element(20, "i", 135);
    \u0275\u0275text(21, " Customer Information ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 174)(23, "div", 175)(24, "span", 176);
    \u0275\u0275text(25, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 177);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 175)(29, "span", 176);
    \u0275\u0275text(30, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 178);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 175)(34, "span", 176);
    \u0275\u0275text(35, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 177);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(38, "div", 172)(39, "h4", 173);
    \u0275\u0275element(40, "i", 179);
    \u0275\u0275text(41, " Trek Expedition Details ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 174)(43, "div", 180)(44, "span", 176);
    \u0275\u0275text(45, "Trek Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span", 181);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 175)(49, "span", 176);
    \u0275\u0275text(50, "Expedition Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "span", 182);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 175)(54, "span", 176);
    \u0275\u0275text(55, "Trekkers (Pax)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "span", 177);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 175)(59, "span", 176);
    \u0275\u0275text(60, "Booked On");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "span", 177);
    \u0275\u0275text(62);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(63, "div", 172)(64, "div", 183)(65, "h4", 184);
    \u0275\u0275element(66, "i", 185);
    \u0275\u0275text(67, " Payment & Financial Ledger ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div", 186)(69, "button", 187);
    \u0275\u0275listener("click", function BookingsComponent_aside_68_Template_button_click_69_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openPaymentEditModal(ctx_r1.selectedBooking));
    });
    \u0275\u0275element(70, "i", 188);
    \u0275\u0275text(71, " Edit ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(72, BookingsComponent_aside_68_button_72_Template, 3, 0, "button", 189);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "div", 190)(74, "div", 191)(75, "span", 192);
    \u0275\u0275element(76, "i", 193);
    \u0275\u0275text(77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "span", 194);
    \u0275\u0275text(79);
    \u0275\u0275pipe(80, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(81, BookingsComponent_aside_68_div_81_Template, 7, 4, "div", 195);
    \u0275\u0275elementStart(82, "div", 191)(83, "span", 192);
    \u0275\u0275element(84, "i", 196);
    \u0275\u0275text(85, " GST @ 5% (SAC 998555)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "span", 194);
    \u0275\u0275text(87);
    \u0275\u0275pipe(88, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(89, "div", 197);
    \u0275\u0275elementStart(90, "div", 198)(91, "span", 192);
    \u0275\u0275text(92, "Net Booking Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "span", 199);
    \u0275\u0275text(94);
    \u0275\u0275pipe(95, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(96, "div", 174)(97, "div", 175)(98, "span", 176);
    \u0275\u0275text(99, "Payment Method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "span", 177);
    \u0275\u0275element(101, "i", 89);
    \u0275\u0275text(102);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(103, "div", 175)(104, "span", 176);
    \u0275\u0275text(105, "Payment Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "span", 177)(107, "span", 113);
    \u0275\u0275element(108, "span", 114);
    \u0275\u0275text(109);
    \u0275\u0275pipe(110, "titlecase");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(111, BookingsComponent_aside_68_div_111_Template, 6, 2, "div", 200)(112, BookingsComponent_aside_68_div_112_Template, 7, 0, "div", 200);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(113, "div", 201)(114, "div", 202)(115, "button", 203);
    \u0275\u0275listener("click", function BookingsComponent_aside_68_Template_button_click_115_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openPassModal(ctx_r1.selectedBooking));
    });
    \u0275\u0275element(116, "i", 204);
    \u0275\u0275text(117, " Invoice & Pass ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "button", 205);
    \u0275\u0275listener("click", function BookingsComponent_aside_68_Template_button_click_118_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openManifestModal(ctx_r1.selectedBooking));
    });
    \u0275\u0275element(119, "i", 206);
    \u0275\u0275text(120, " Manifest ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(121, BookingsComponent_aside_68_button_121_Template, 3, 0, "button", 207);
    \u0275\u0275elementStart(122, "button", 63);
    \u0275\u0275listener("click", function BookingsComponent_aside_68_Template_button_click_122_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDrawer());
    });
    \u0275\u0275text(123, "Close");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("open", ctx_r1.isDrawerOpen);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("#", ctx_r1.selectedBooking.id);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", "status-" + ctx_r1.getStatusColor(ctx_r1.selectedBooking.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 29, ctx_r1.selectedBooking.status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", "status-" + ctx_r1.getPaymentColor(ctx_r1.selectedBooking.paymentStatus));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.selectedBooking.paymentStatus);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 31, ctx_r1.selectedBooking.paymentStatus), " ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r1.selectedBooking.customerName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedBooking.email);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedBooking.phone || "\u2014");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.selectedBooking.trekName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.selectedBooking.date));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.selectedBooking.participants, " Participant(s)");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.selectedBooking.bookingDate));
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r1.selectedBooking.paymentStatus !== "refunded");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" Base Trek Package (x", ctx_r1.selectedBooking.participants, ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(80, 33, ctx_r1.getFareBreakdown(ctx_r1.selectedBooking.amount).baseFare, "1.0-0"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.getFareBreakdown(ctx_r1.selectedBooking.amount).permitFee > 0);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(88, 36, ctx_r1.getFareBreakdown(ctx_r1.selectedBooking.amount).gst5, "1.0-0"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(95, 39, ctx_r1.selectedBooking.amount, "1.0-0"));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngClass", ctx_r1.getPaymentMethodIcon(ctx_r1.selectedBooking.paymentMethod));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedBooking.paymentMethod || "Online Gateway", " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", "status-" + ctx_r1.getPaymentColor(ctx_r1.selectedBooking.paymentStatus));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.selectedBooking.paymentStatus);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(110, 42, ctx_r1.selectedBooking.paymentStatus), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.selectedBooking.transactionId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedBooking.phone);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r1.selectedBooking.paymentStatus !== "refunded");
  }
}
function BookingsComponent_ng_template_70_div_8_strong_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "strong");
    \u0275\u0275text(1, "90% refund (10% permit retention)");
    \u0275\u0275elementEnd();
  }
}
function BookingsComponent_ng_template_70_div_8_strong_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "strong");
    \u0275\u0275text(1, "50% refund");
    \u0275\u0275elementEnd();
  }
}
function BookingsComponent_ng_template_70_div_8_strong_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "strong");
    \u0275\u0275text(1, "0% refund (<7 days)");
    \u0275\u0275elementEnd();
  }
}
function BookingsComponent_ng_template_70_div_8_div_81_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 257)(1, "label", 233);
    \u0275\u0275text(2, "Custom Refund Amount (\u20B9)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 269)(4, "span", 270);
    \u0275\u0275text(5, "\u20B9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 271);
    \u0275\u0275twoWayListener("ngModelChange", function BookingsComponent_ng_template_70_div_8_div_81_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.refundForm.amount, $event) || (ctx_r1.refundForm.amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function BookingsComponent_ng_template_70_div_8_div_81_Template_input_ngModelChange_6_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onCustomAmountChange());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "small", 272);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.refundForm.amount);
    \u0275\u0275property("max", ctx_r1.refundBooking.amount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Maximum allowable refund: \u20B9", ctx_r1.refundBooking.amount);
  }
}
function BookingsComponent_ng_template_70_div_8_option_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r29 = ctx.$implicit;
    \u0275\u0275property("value", opt_r29);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r29);
  }
}
function BookingsComponent_ng_template_70_div_8_option_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r30 = ctx.$implicit;
    \u0275\u0275property("value", opt_r30);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r30);
  }
}
function BookingsComponent_ng_template_70_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 218)(1, "div", 219)(2, "div", 220)(3, "div", 221)(4, "div")(5, "span", 222);
    \u0275\u0275text(6, "Booking Reference");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h3", 223);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 224);
    \u0275\u0275element(10, "i", 225);
    \u0275\u0275text(11);
    \u0275\u0275element(12, "i", 226);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 227);
    \u0275\u0275element(15, "i", 228);
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 229)(19, "span", 222);
    \u0275\u0275text(20, "Gross Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "h2", 230);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 231);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(26, "div", 232)(27, "label", 233);
    \u0275\u0275text(28, "Select Cancellation / Refund Policy Tier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 234)(30, "div", 235);
    \u0275\u0275listener("click", function BookingsComponent_ng_template_70_div_8_Template_div_click_30_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.applyPolicyMode("policy"));
    });
    \u0275\u0275elementStart(31, "div", 236)(32, "span", 237);
    \u0275\u0275text(33, "Standard Policy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 238);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "p", 239);
    \u0275\u0275text(37);
    \u0275\u0275template(38, BookingsComponent_ng_template_70_div_8_strong_38_Template, 2, 0, "strong", 240)(39, BookingsComponent_ng_template_70_div_8_strong_39_Template, 2, 0, "strong", 240)(40, BookingsComponent_ng_template_70_div_8_strong_40_Template, 2, 0, "strong", 240);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 235);
    \u0275\u0275listener("click", function BookingsComponent_ng_template_70_div_8_Template_div_click_41_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.applyPolicyMode("full"));
    });
    \u0275\u0275elementStart(42, "div", 236)(43, "span", 241);
    \u0275\u0275text(44, "100% Full Waiver");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span", 238);
    \u0275\u0275text(46, "100% Refund");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "p", 239);
    \u0275\u0275text(48, "Special admin override: Weather alert, Forest dept closure, or trip cancelled by org.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 235);
    \u0275\u0275listener("click", function BookingsComponent_ng_template_70_div_8_Template_div_click_49_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.applyPolicyMode("custom"));
    });
    \u0275\u0275elementStart(50, "div", 236)(51, "span", 242);
    \u0275\u0275text(52, "Custom Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "span", 238);
    \u0275\u0275text(54, "Manual");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "p", 239);
    \u0275\u0275text(56, "Specify an arbitrary settlement or compensation amount with custom reason.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(57, "div", 243)(58, "h5", 244);
    \u0275\u0275element(59, "i", 245);
    \u0275\u0275text(60, " Financial Settlement Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div", 246)(62, "span");
    \u0275\u0275text(63, "Gross Booking Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "strong");
    \u0275\u0275text(65);
    \u0275\u0275pipe(66, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "div", 247)(68, "span");
    \u0275\u0275text(69, "Less: Cancellation Charges / Retained Fee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "strong");
    \u0275\u0275text(71);
    \u0275\u0275pipe(72, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(73, "div", 248);
    \u0275\u0275elementStart(74, "div", 249)(75, "span");
    \u0275\u0275text(76, "Net Customer Refund Payout");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "span", 250);
    \u0275\u0275text(78);
    \u0275\u0275pipe(79, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(80, "form", 251);
    \u0275\u0275listener("ngSubmit", function BookingsComponent_ng_template_70_div_8_Template_form_ngSubmit_80_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.submitRefund());
    });
    \u0275\u0275template(81, BookingsComponent_ng_template_70_div_8_div_81_Template, 9, 3, "div", 252);
    \u0275\u0275elementStart(82, "div", 253)(83, "div", 254)(84, "label", 233);
    \u0275\u0275text(85, "Reason for Cancellation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "select", 255);
    \u0275\u0275twoWayListener("ngModelChange", function BookingsComponent_ng_template_70_div_8_Template_select_ngModelChange_86_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.refundForm.reason, $event) || (ctx_r1.refundForm.reason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(87, BookingsComponent_ng_template_70_div_8_option_87_Template, 2, 2, "option", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(88, "div", 254)(89, "label", 233);
    \u0275\u0275text(90, "Refund Destination Channel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "select", 256);
    \u0275\u0275twoWayListener("ngModelChange", function BookingsComponent_ng_template_70_div_8_Template_select_ngModelChange_91_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.refundForm.refundMethod, $event) || (ctx_r1.refundForm.refundMethod = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(92, BookingsComponent_ng_template_70_div_8_option_92_Template, 2, 2, "option", 10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(93, "div", 257)(94, "div", 258)(95, "label", 259);
    \u0275\u0275text(96, "Refund Reference / Transaction ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "button", 260);
    \u0275\u0275listener("click", function BookingsComponent_ng_template_70_div_8_Template_button_click_97_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.generateRefundRef());
    });
    \u0275\u0275element(98, "i", 261);
    \u0275\u0275text(99, " Regenerate Ref ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(100, "input", 262);
    \u0275\u0275twoWayListener("ngModelChange", function BookingsComponent_ng_template_70_div_8_Template_input_ngModelChange_100_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.refundForm.refundTxnId, $event) || (ctx_r1.refundForm.refundTxnId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(101, "div", 263)(102, "label", 233);
    \u0275\u0275text(103, "Ops & Audit Log Note");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "textarea", 264);
    \u0275\u0275twoWayListener("ngModelChange", function BookingsComponent_ng_template_70_div_8_Template_textarea_ngModelChange_104_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.refundForm.note, $event) || (ctx_r1.refundForm.note = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(105, "div", 265)(106, "button", 266);
    \u0275\u0275listener("click", function BookingsComponent_ng_template_70_div_8_Template_button_click_106_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeRefundModal());
    });
    \u0275\u0275text(107, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "button", 267);
    \u0275\u0275element(109, "i", 268);
    \u0275\u0275text(110);
    \u0275\u0275pipe(111, "number");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("#", ctx_r1.refundBooking.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.refundBooking.customerName, " \u2022 ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.refundBooking.trekName, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("Trek Date: ", ctx_r1.formatDate(ctx_r1.refundBooking.date), " (", ctx_r1.getDaysUntilTrek(ctx_r1.refundBooking), " days to departure)");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(23, 33, ctx_r1.refundBooking.amount, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.refundBooking.paymentMethod || "Online Payment");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("active", ctx_r1.refundPolicyMode === "policy");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.getPolicyRefundPercentage(ctx_r1.refundBooking), "% Refund");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Auto-calculated for ", ctx_r1.getDaysUntilTrek(ctx_r1.refundBooking), " days before trek: ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getDaysUntilTrek(ctx_r1.refundBooking) >= 15);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getDaysUntilTrek(ctx_r1.refundBooking) >= 7 && ctx_r1.getDaysUntilTrek(ctx_r1.refundBooking) < 15);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getDaysUntilTrek(ctx_r1.refundBooking) < 7);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.refundPolicyMode === "full");
    \u0275\u0275advance(8);
    \u0275\u0275classProp("active", ctx_r1.refundPolicyMode === "custom");
    \u0275\u0275advance(16);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(66, 36, ctx_r1.refundBooking.amount, "1.0-0"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("-\u20B9", \u0275\u0275pipeBind2(72, 39, ctx_r1.refundForm.deduction, "1.0-0"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(79, 42, ctx_r1.refundForm.amount, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.refundPolicyMode === "custom");
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.refundForm.reason);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.refundReasonOptions);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.refundForm.refundMethod);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.refundMethodOptions);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.refundForm.refundTxnId);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.refundForm.note);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isProcessingRefund);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isProcessingRefund || ctx_r1.refundForm.amount <= 0);
    \u0275\u0275advance();
    \u0275\u0275classProp("spin", ctx_r1.isProcessingRefund);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isProcessingRefund ? "Processing Refund..." : "Authorize & Issue Refund (\u20B9" + \u0275\u0275pipeBind2(111, 45, ctx_r1.refundForm.amount, "1.0-0") + ")", " ");
  }
}
function BookingsComponent_ng_template_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-header")(1, "ion-toolbar", 213)(2, "ion-title");
    \u0275\u0275element(3, "i", 214);
    \u0275\u0275text(4, " Cancellation Policy & Refund Engine ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-buttons", 215)(6, "ion-button", 216);
    \u0275\u0275listener("click", function BookingsComponent_ng_template_70_Template_ion_button_click_6_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeRefundModal());
    });
    \u0275\u0275element(7, "i", 169);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(8, BookingsComponent_ng_template_70_div_8_Template, 112, 48, "div", 217);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.refundBooking);
  }
}
function BookingsComponent_ng_template_72_div_8_ng_container_22_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r33 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("value", p_r33.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r33.label);
  }
}
function BookingsComponent_ng_template_72_div_8_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, BookingsComponent_ng_template_72_div_8_ng_container_22_option_1_Template, 2, 2, "option", 281);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const p_r33 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r33.value !== "all");
  }
}
function BookingsComponent_ng_template_72_div_8_option_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r34 = ctx.$implicit;
    \u0275\u0275property("value", m_r34);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r34);
  }
}
function BookingsComponent_ng_template_72_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 218)(1, "div", 219)(2, "div", 220)(3, "div", 221)(4, "div")(5, "span", 222);
    \u0275\u0275text(6, "Booking");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h3", 223);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 224);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 229)(12, "span", 222);
    \u0275\u0275text(13, "Booking Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "h2", 230);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(17, "form", 251);
    \u0275\u0275listener("ngSubmit", function BookingsComponent_ng_template_72_div_8_Template_form_ngSubmit_17_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.submitPaymentUpdate());
    });
    \u0275\u0275elementStart(18, "div", 257)(19, "label", 233);
    \u0275\u0275text(20, "Payment Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "select", 274);
    \u0275\u0275twoWayListener("ngModelChange", function BookingsComponent_ng_template_72_div_8_Template_select_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r32);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.paymentEditForm.paymentStatus, $event) || (ctx_r1.paymentEditForm.paymentStatus = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(22, BookingsComponent_ng_template_72_div_8_ng_container_22_Template, 2, 1, "ng-container", 157);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 257)(24, "label", 233);
    \u0275\u0275text(25, "Payment Method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "select", 275);
    \u0275\u0275twoWayListener("ngModelChange", function BookingsComponent_ng_template_72_div_8_Template_select_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r32);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.paymentEditForm.paymentMethod, $event) || (ctx_r1.paymentEditForm.paymentMethod = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(27, BookingsComponent_ng_template_72_div_8_option_27_Template, 2, 2, "option", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 257)(29, "div", 258)(30, "label", 259);
    \u0275\u0275text(31, "Transaction / UTR / Order Reference ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 260);
    \u0275\u0275listener("click", function BookingsComponent_ng_template_72_div_8_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.generateMockUtr());
    });
    \u0275\u0275element(33, "i", 276);
    \u0275\u0275text(34, " Auto-Generate UTR ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "input", 277);
    \u0275\u0275twoWayListener("ngModelChange", function BookingsComponent_ng_template_72_div_8_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r32);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.paymentEditForm.transactionId, $event) || (ctx_r1.paymentEditForm.transactionId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 263)(37, "label", 233);
    \u0275\u0275text(38, "Settled / Collected Amount (\u20B9)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 269)(40, "span", 270);
    \u0275\u0275text(41, "\u20B9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "input", 278);
    \u0275\u0275twoWayListener("ngModelChange", function BookingsComponent_ng_template_72_div_8_Template_input_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r32);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.paymentEditForm.amount, $event) || (ctx_r1.paymentEditForm.amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 265)(44, "button", 266);
    \u0275\u0275listener("click", function BookingsComponent_ng_template_72_div_8_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closePaymentEditModal());
    });
    \u0275\u0275text(45, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "button", 279);
    \u0275\u0275element(47, "i", 280);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("#", ctx_r1.paymentEditBooking.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.paymentEditBooking.customerName, " \u2022 ", ctx_r1.paymentEditBooking.trekName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(16, 15, ctx_r1.paymentEditBooking.amount, "1.0-0"));
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.paymentEditForm.paymentStatus);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.paymentStatusOptions);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.paymentEditForm.paymentMethod);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.supportedPaymentMethods);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.paymentEditForm.transactionId);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.paymentEditForm.amount);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isUpdatingPayment);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isUpdatingPayment);
    \u0275\u0275advance();
    \u0275\u0275classProp("spin", ctx_r1.isUpdatingPayment);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isUpdatingPayment ? "Reconciling..." : "Save & Reconcile Payment", " ");
  }
}
function BookingsComponent_ng_template_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-header")(1, "ion-toolbar", 213)(2, "ion-title");
    \u0275\u0275element(3, "i", 273);
    \u0275\u0275text(4, " Record & Reconcile Payment ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-buttons", 215)(6, "ion-button", 216);
    \u0275\u0275listener("click", function BookingsComponent_ng_template_72_Template_ion_button_click_6_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePaymentEditModal());
    });
    \u0275\u0275element(7, "i", 169);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(8, BookingsComponent_ng_template_72_div_8_Template, 49, 18, "div", 217);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.paymentEditBooking);
  }
}
function BookingsComponent_ng_template_74_div_10_div_125_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 331);
    \u0275\u0275element(1, "i", 44);
    \u0275\u0275text(2, " TRANSACTION FULLY REFUNDED TO CUSTOMER ");
    \u0275\u0275elementEnd();
  }
}
function BookingsComponent_ng_template_74_div_10_div_126_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 332);
    \u0275\u0275element(1, "i", 44);
    \u0275\u0275text(2, " PARTIALLY REFUNDED ");
    \u0275\u0275elementEnd();
  }
}
function BookingsComponent_ng_template_74_div_10_div_131_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 333);
    \u0275\u0275text(1, "\u20B90.00 (Refunded)");
    \u0275\u0275elementEnd();
  }
}
function BookingsComponent_ng_template_74_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 286)(1, "div", 287)(2, "div", 288)(3, "div", 289);
    \u0275\u0275element(4, "img", 290);
    \u0275\u0275elementStart(5, "div")(6, "h1", 291);
    \u0275\u0275text(7, "goWILD\u2122 Karunadu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 292);
    \u0275\u0275text(9, "Eco-Treks & Wilderness Expeditions Karnataka");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "small", 293);
    \u0275\u0275text(11, "GSTIN: 29AAACG0123M1Z8 | Forest Dept Reg: KA-ECO-2024-884");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 294)(13, "span", 295);
    \u0275\u0275text(14, "OFFICIAL TREK PASS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 296);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 297);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "uppercase");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(20, "hr", 298);
    \u0275\u0275elementStart(21, "div", 299)(22, "div", 300)(23, "span", 301);
    \u0275\u0275text(24, "Booking Reference");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 302);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 300)(28, "span", 301);
    \u0275\u0275text(29, "Trek Expedition Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 303);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 300)(33, "span", 301);
    \u0275\u0275text(34, "Reporting Time & Basecamp");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 304);
    \u0275\u0275text(36, "06:00 AM \u2022 Designated Basecamp");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 300)(38, "span", 301);
    \u0275\u0275text(39, "Booking Issue Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "span", 304);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "div", 305)(43, "div", 306)(44, "h3", 307);
    \u0275\u0275element(45, "i", 308);
    \u0275\u0275text(46, " Trek Expedition Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 309)(48, "span", 310);
    \u0275\u0275text(49, "Expedition:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "span", 311);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 309)(53, "span", 310);
    \u0275\u0275text(54, "Total Trekkers:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "span", 311);
    \u0275\u0275text(56);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 309)(58, "span", 310);
    \u0275\u0275text(59, "Safety Desk / Helpline:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "span", 312);
    \u0275\u0275text(61, "+91 94800 12345 (24/7 Operations)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(62, "div", 306)(63, "h3", 307);
    \u0275\u0275element(64, "i", 313);
    \u0275\u0275text(65, " Primary Booker Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "div", 309)(67, "span", 310);
    \u0275\u0275text(68, "Lead Booker:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "span", 311);
    \u0275\u0275text(70);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "div", 309)(72, "span", 310);
    \u0275\u0275text(73, "Contact Email:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "span", 312);
    \u0275\u0275text(75);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "div", 309)(77, "span", 310);
    \u0275\u0275text(78, "Contact Phone:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "span", 312);
    \u0275\u0275text(80);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(81, "div", 314)(82, "h3", 307);
    \u0275\u0275element(83, "i", 196);
    \u0275\u0275text(84, " Tax Invoice & Fare Breakdown");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "table", 315)(86, "thead")(87, "tr")(88, "th");
    \u0275\u0275text(89, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "th", 106);
    \u0275\u0275text(91, "Qty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "th", 229);
    \u0275\u0275text(93, "Unit Price (\u20B9)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "th", 229);
    \u0275\u0275text(95, "Total (\u20B9)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(96, "tbody")(97, "tr")(98, "td")(99, "strong");
    \u0275\u0275text(100);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "div", 316);
    \u0275\u0275text(102, "Forest entry permit, certified wilderness guide, safety gear & meals");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(103, "td", 106);
    \u0275\u0275text(104);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "td", 229);
    \u0275\u0275text(106);
    \u0275\u0275pipe(107, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "td", 229);
    \u0275\u0275text(109);
    \u0275\u0275pipe(110, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(111, "tfoot")(112, "tr")(113, "td", 317);
    \u0275\u0275text(114, "Subtotal (Inclusive of Permits & Taxes)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(115, "td", 318);
    \u0275\u0275text(116);
    \u0275\u0275pipe(117, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(118, "tr", 319)(119, "td", 320)(120, "strong");
    \u0275\u0275text(121, "Total Amount Paid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(122, "div", 316);
    \u0275\u0275text(123);
    \u0275\u0275pipe(124, "uppercase");
    \u0275\u0275elementEnd();
    \u0275\u0275template(125, BookingsComponent_ng_template_74_div_10_div_125_Template, 3, 0, "div", 321)(126, BookingsComponent_ng_template_74_div_10_div_126_Template, 3, 0, "div", 322);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(127, "td", 323)(128, "span");
    \u0275\u0275text(129);
    \u0275\u0275pipe(130, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275template(131, BookingsComponent_ng_template_74_div_10_div_131_Template, 2, 0, "div", 324);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(132, "div", 325)(133, "div", 326)(134, "h4");
    \u0275\u0275element(135, "i", 209);
    \u0275\u0275text(136, " Important Expedition Guidelines");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(137, "ul")(138, "li");
    \u0275\u0275text(139, "Carry a valid Govt. Photo ID (Aadhaar / Driving License / Voter ID) for forest checkpoint verification.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(140, "li");
    \u0275\u0275text(141, "Strictly Zero-Litter Zone: All plastic wrappers and bottles must be packed back in personal backpacks.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(142, "li");
    \u0275\u0275text(143, "Consumption of alcohol or smoking is strictly prohibited during the trek.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(144, "div", 327)(145, "div", 328);
    \u0275\u0275element(146, "i", 329);
    \u0275\u0275elementStart(147, "span");
    \u0275\u0275text(148, "SCAN AT BASECAMP");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(149, "small", 330);
    \u0275\u0275text(150, "VERIFIED BY GOWILD OPS");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(16);
    \u0275\u0275textInterpolate1("PASS #GWK-", ctx_r1.passBooking.id.slice(-6).toUpperCase());
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "status-" + ctx_r1.getStatusColor(ctx_r1.passBooking.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 24, ctx_r1.passBooking.status), " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("#", ctx_r1.passBooking.id);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.passBooking.date));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.passBooking.bookingDate));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.passBooking.trekName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.passBooking.participants, " Participant(s)");
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(ctx_r1.passBooking.customerName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.passBooking.email);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.passBooking.phone || "N/A");
    \u0275\u0275advance(20);
    \u0275\u0275textInterpolate1("", ctx_r1.passBooking.trekName, " \u2014 Guided Trek Package");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.passBooking.participants);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(107, 26, ctx_r1.passBooking.amount / (ctx_r1.passBooking.participants || 1), "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(110, 29, ctx_r1.passBooking.amount, "1.2-2"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(117, 32, ctx_r1.passBooking.amount, "1.2-2"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("Payment Method: ", ctx_r1.passBooking.paymentMethod || "Online / Gateway", " (Status: ", \u0275\u0275pipeBind1(124, 35, ctx_r1.passBooking.paymentStatus), ")");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.passBooking.paymentStatus === "refunded");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.passBooking.paymentStatus === "partially_refunded");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("strikethrough", ctx_r1.passBooking.paymentStatus === "refunded");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u20B9", \u0275\u0275pipeBind2(130, 37, ctx_r1.passBooking.amount, "1.2-2"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.passBooking.paymentStatus === "refunded");
  }
}
function BookingsComponent_ng_template_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-header", 282)(1, "ion-toolbar")(2, "ion-title");
    \u0275\u0275text(3, "Customer Trek Pass & Tax Invoice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-buttons", 215)(5, "ion-button", 283);
    \u0275\u0275listener("click", function BookingsComponent_ng_template_74_Template_ion_button_click_5_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.printPass());
    });
    \u0275\u0275element(6, "i", 284);
    \u0275\u0275text(7, " Print / PDF ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "ion-button", 216);
    \u0275\u0275listener("click", function BookingsComponent_ng_template_74_Template_ion_button_click_8_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePassModal());
    });
    \u0275\u0275element(9, "i", 169);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(10, BookingsComponent_ng_template_74_div_10_Template, 151, 40, "div", 285);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r1.passBooking);
  }
}
function BookingsComponent_ng_template_76_div_11_tr_58_option_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const g_r40 = ctx.$implicit;
    \u0275\u0275property("value", g_r40);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(g_r40);
  }
}
function BookingsComponent_ng_template_76_div_11_tr_58_option_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r41 = ctx.$implicit;
    \u0275\u0275property("value", opt_r41);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r41);
  }
}
function BookingsComponent_ng_template_76_div_11_tr_58_option_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r42 = ctx.$implicit;
    \u0275\u0275property("value", opt_r42);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r42);
  }
}
function BookingsComponent_ng_template_76_div_11_tr_58_option_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r43 = ctx.$implicit;
    \u0275\u0275property("value", opt_r43);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r43);
  }
}
function BookingsComponent_ng_template_76_div_11_tr_58_option_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r44 = ctx.$implicit;
    \u0275\u0275property("value", opt_r44);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r44);
  }
}
function BookingsComponent_ng_template_76_div_11_tr_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 364);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "input", 365);
    \u0275\u0275twoWayListener("ngModelChange", function BookingsComponent_ng_template_76_div_11_tr_58_Template_input_ngModelChange_4_listener($event) {
      const p_r39 = \u0275\u0275restoreView(_r38).$implicit;
      \u0275\u0275twoWayBindingSet(p_r39.fullName, $event) || (p_r39.fullName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td")(6, "input", 366);
    \u0275\u0275twoWayListener("ngModelChange", function BookingsComponent_ng_template_76_div_11_tr_58_Template_input_ngModelChange_6_listener($event) {
      const p_r39 = \u0275\u0275restoreView(_r38).$implicit;
      \u0275\u0275twoWayBindingSet(p_r39.age, $event) || (p_r39.age = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "select", 367);
    \u0275\u0275twoWayListener("ngModelChange", function BookingsComponent_ng_template_76_div_11_tr_58_Template_select_ngModelChange_8_listener($event) {
      const p_r39 = \u0275\u0275restoreView(_r38).$implicit;
      \u0275\u0275twoWayBindingSet(p_r39.gender, $event) || (p_r39.gender = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(9, BookingsComponent_ng_template_76_div_11_tr_58_option_9_Template, 2, 2, "option", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "select", 367);
    \u0275\u0275twoWayListener("ngModelChange", function BookingsComponent_ng_template_76_div_11_tr_58_Template_select_ngModelChange_11_listener($event) {
      const p_r39 = \u0275\u0275restoreView(_r38).$implicit;
      \u0275\u0275twoWayBindingSet(p_r39.govtIdType, $event) || (p_r39.govtIdType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(12, BookingsComponent_ng_template_76_div_11_tr_58_option_12_Template, 2, 2, "option", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "input", 368);
    \u0275\u0275twoWayListener("ngModelChange", function BookingsComponent_ng_template_76_div_11_tr_58_Template_input_ngModelChange_14_listener($event) {
      const p_r39 = \u0275\u0275restoreView(_r38).$implicit;
      \u0275\u0275twoWayBindingSet(p_r39.govtIdNumber, $event) || (p_r39.govtIdNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td")(16, "select", 367);
    \u0275\u0275twoWayListener("ngModelChange", function BookingsComponent_ng_template_76_div_11_tr_58_Template_select_ngModelChange_16_listener($event) {
      const p_r39 = \u0275\u0275restoreView(_r38).$implicit;
      \u0275\u0275twoWayBindingSet(p_r39.bloodGroup, $event) || (p_r39.bloodGroup = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(17, BookingsComponent_ng_template_76_div_11_tr_58_option_17_Template, 2, 2, "option", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td")(19, "select", 367);
    \u0275\u0275twoWayListener("ngModelChange", function BookingsComponent_ng_template_76_div_11_tr_58_Template_select_ngModelChange_19_listener($event) {
      const p_r39 = \u0275\u0275restoreView(_r38).$implicit;
      \u0275\u0275twoWayBindingSet(p_r39.medicalConditions, $event) || (p_r39.medicalConditions = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(20, BookingsComponent_ng_template_76_div_11_tr_58_option_20_Template, 2, 2, "option", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td")(22, "input", 369);
    \u0275\u0275twoWayListener("ngModelChange", function BookingsComponent_ng_template_76_div_11_tr_58_Template_input_ngModelChange_22_listener($event) {
      const p_r39 = \u0275\u0275restoreView(_r38).$implicit;
      \u0275\u0275twoWayBindingSet(p_r39.emergencyContactPhone, $event) || (p_r39.emergencyContactPhone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td")(24, "select", 367);
    \u0275\u0275twoWayListener("ngModelChange", function BookingsComponent_ng_template_76_div_11_tr_58_Template_select_ngModelChange_24_listener($event) {
      const p_r39 = \u0275\u0275restoreView(_r38).$implicit;
      \u0275\u0275twoWayBindingSet(p_r39.dietaryPreference, $event) || (p_r39.dietaryPreference = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(25, BookingsComponent_ng_template_76_div_11_tr_58_option_25_Template, 2, 2, "option", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "td", 370)(27, "button", 371);
    \u0275\u0275listener("click", function BookingsComponent_ng_template_76_div_11_tr_58_Template_button_click_27_listener() {
      const i_r45 = \u0275\u0275restoreView(_r38).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeParticipantRow(i_r45));
    });
    \u0275\u0275element(28, "i", 372);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r39 = ctx.$implicit;
    const i_r45 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r45 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", p_r39.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", p_r39.age);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", p_r39.gender);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.genderOptions);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", p_r39.govtIdType);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.govtIdTypeOptions);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", p_r39.govtIdNumber);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", p_r39.bloodGroup);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.bloodGroupOptions);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-danger", p_r39.medicalConditions && !p_r39.medicalConditions.includes("Fit to Trek"));
    \u0275\u0275twoWayProperty("ngModel", p_r39.medicalConditions);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.medicalConditionOptions);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", p_r39.emergencyContactPhone);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", p_r39.dietaryPreference);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.dietaryOptions);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.participantsList.length <= 1);
  }
}
function BookingsComponent_ng_template_76_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 218)(1, "div", 335)(2, "div", 336)(3, "div", 337)(4, "h2", 338);
    \u0275\u0275text(5, "KARNATAKA FOREST DEPARTMENT \u2022 ECO-TOURISM EXPEDITION MANIFEST");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 339);
    \u0275\u0275text(7, "Official Permitted Trekker Verification & Medical Declaration Form (Reg: KA-ECO-2024-884)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 340)(9, "div", 341)(10, "strong");
    \u0275\u0275text(11, "Booking:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 341)(14, "strong");
    \u0275\u0275text(15, "Expedition:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 341)(18, "strong");
    \u0275\u0275text(19, "Date:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 341)(22, "strong");
    \u0275\u0275text(23, "Total Trekkers:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 342)(26, "span", 102);
    \u0275\u0275text(27, "All dropdown choices are loaded dynamically from the backend registry.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 343);
    \u0275\u0275listener("click", function BookingsComponent_ng_template_76_div_11_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r37);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addParticipantRow());
    });
    \u0275\u0275element(29, "i", 344);
    \u0275\u0275text(30, " Add Co-Trekker ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 345)(32, "table", 346)(33, "thead", 347)(34, "tr")(35, "th", 348);
    \u0275\u0275text(36, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "th", 349);
    \u0275\u0275text(38, "Full Name (As on Govt ID)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "th", 350);
    \u0275\u0275text(40, "Age");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "th", 351);
    \u0275\u0275text(42, "Gender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "th", 352);
    \u0275\u0275text(44, "Govt ID Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "th", 353);
    \u0275\u0275text(46, "ID Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "th", 354);
    \u0275\u0275text(48, "Blood Group");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "th", 355);
    \u0275\u0275text(50, "Medical Declarations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "th", 353);
    \u0275\u0275text(52, "Emergency Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "th", 356);
    \u0275\u0275text(54, "Diet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "th", 357);
    \u0275\u0275text(56, "Action");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(57, "tbody");
    \u0275\u0275template(58, BookingsComponent_ng_template_76_div_11_tr_58_Template, 29, 18, "tr", 157);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(59, "div", 358)(60, "div", 359)(61, "p", 360);
    \u0275\u0275text(62, "Certified Wilderness Guide / Trek Lead");
    \u0275\u0275elementEnd();
    \u0275\u0275element(63, "div", 361);
    \u0275\u0275elementStart(64, "small");
    \u0275\u0275text(65, "Name: ______________________ \u2022 Sign & Date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div", 359)(67, "p", 360);
    \u0275\u0275text(68, "Forest Department Checkpost Officer / Ranger");
    \u0275\u0275elementEnd();
    \u0275\u0275element(69, "div", 361);
    \u0275\u0275elementStart(70, "small");
    \u0275\u0275text(71, "Checkpoint: ___________________ \u2022 Official Seal");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(72, "div", 362)(73, "button", 266);
    \u0275\u0275listener("click", function BookingsComponent_ng_template_76_div_11_Template_button_click_73_listener() {
      \u0275\u0275restoreView(_r37);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeManifestModal());
    });
    \u0275\u0275text(74, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "button", 363);
    \u0275\u0275listener("click", function BookingsComponent_ng_template_76_div_11_Template_button_click_75_listener() {
      \u0275\u0275restoreView(_r37);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.saveManifest());
    });
    \u0275\u0275element(76, "i", 280);
    \u0275\u0275text(77);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1(" #", ctx_r1.manifestBooking.id);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.manifestBooking.trekName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate(ctx_r1.manifestBooking.date));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.participantsList.length, " Permitted");
    \u0275\u0275advance(34);
    \u0275\u0275property("ngForOf", ctx_r1.participantsList);
    \u0275\u0275advance(15);
    \u0275\u0275property("disabled", ctx_r1.isSavingParticipants);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSavingParticipants);
    \u0275\u0275advance();
    \u0275\u0275classProp("spin", ctx_r1.isSavingParticipants);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isSavingParticipants ? "Saving Manifest..." : "Save & Sync Manifest", " ");
  }
}
function BookingsComponent_ng_template_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-header", 282)(1, "ion-toolbar", 213)(2, "ion-title");
    \u0275\u0275element(3, "i", 334);
    \u0275\u0275text(4, " Forest Dept Entry Manifest & Medical Roster ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-buttons", 215)(6, "ion-button", 283);
    \u0275\u0275listener("click", function BookingsComponent_ng_template_76_Template_ion_button_click_6_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.printManifest());
    });
    \u0275\u0275element(7, "i", 284);
    \u0275\u0275text(8, " Print Official Manifest ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "ion-button", 216);
    \u0275\u0275listener("click", function BookingsComponent_ng_template_76_Template_ion_button_click_9_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeManifestModal());
    });
    \u0275\u0275element(10, "i", 169);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(11, BookingsComponent_ng_template_76_div_11_Template, 78, 10, "div", 217);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", ctx_r1.manifestBooking);
  }
}
var _BookingsComponent = class _BookingsComponent {
  constructor(bookingService, dropdownService) {
    this.bookingService = bookingService;
    this.dropdownService = dropdownService;
    this.Number = Number;
    this.Math = Math;
    this.searchQuery = "";
    this.selectedStatus = "all";
    this.selectedPayment = "all";
    this.bookings = [];
    this.startDate = "";
    this.endDate = "";
    this.activeDatePreset = "all";
    this.pageSize = 5;
    this.currentPage = 1;
    this.sortField = "bookingDate";
    this.sortDirection = "desc";
    this.selectedBookingIds = /* @__PURE__ */ new Set();
    this.pageSizeOptions = [5, 10, 20, 40];
    this.selectedBooking = null;
    this.isDrawerOpen = false;
    this.isLoading = true;
    this.showPassModal = false;
    this.passBooking = null;
    this.copiedTxnId = null;
    this.showManifestModal = false;
    this.manifestBooking = null;
    this.participantsList = [];
    this.isSavingParticipants = false;
    this.refundReasonOptions = [];
    this.refundMethodOptions = [];
    this.supportedPaymentMethods = [];
    this.govtIdTypeOptions = [];
    this.bloodGroupOptions = [];
    this.dietaryOptions = [];
    this.medicalConditionOptions = [];
    this.showRefundModal = false;
    this.refundBooking = null;
    this.isProcessingRefund = false;
    this.refundPolicyMode = "policy";
    this.refundForm = {
      refundType: "full",
      amount: 0,
      deduction: 0,
      reason: "Customer Cancellation (Personal Reasons)",
      refundMethod: "Online Gateway Reversal (Razorpay)",
      refundTxnId: "",
      notifyCustomer: true,
      note: ""
    };
    this.showPaymentEditModal = false;
    this.paymentEditBooking = null;
    this.isUpdatingPayment = false;
    this.paymentEditForm = {
      paymentStatus: "paid",
      paymentMethod: "UPI (GPay / PhonePe / Paytm / BHIM)",
      transactionId: "",
      amount: 0
    };
    this.statusOptions = [
      { value: "all", label: "All" }
    ];
    this.paymentStatusOptions = [
      { value: "all", label: "All Payments" },
      { value: "paid", label: "Paid" },
      { value: "pending", label: "Pending" },
      { value: "partially_refunded", label: "Partially Refunded" },
      { value: "refunded", label: "Refunded" },
      { value: "failed", label: "Failed" }
    ];
    this.genderOptions = ["Male", "Female", "Other"];
  }
  openPassModal(booking) {
    this.passBooking = booking;
    this.showPassModal = true;
  }
  closePassModal() {
    this.showPassModal = false;
    this.passBooking = null;
  }
  printPass() {
    window.print();
  }
  // ── Copy Txn ID with visual feedback ──
  copyTxnId(txnId, event) {
    if (event)
      event.stopPropagation();
    if (!txnId)
      return;
    navigator.clipboard.writeText(txnId).then(() => {
      this.copiedTxnId = txnId;
      setTimeout(() => {
        if (this.copiedTxnId === txnId)
          this.copiedTxnId = null;
      }, 2e3);
    });
  }
  // ── Send Payment Link via WhatsApp ──
  sendPaymentLinkWhatsApp(booking, event) {
    if (event)
      event.stopPropagation();
    let rawPhone = String(booking?.phone || "").replace(/\D/g, "");
    if (!rawPhone || rawPhone.length < 7) {
      alert("No valid phone number for customer.");
      return;
    }
    if (rawPhone.length === 10)
      rawPhone = "91" + rawPhone;
    const text = encodeURIComponent(`Hi ${booking.customerName},

Greetings from *goWILD\u2122 Karunadu*!

Here are your booking & payment details for *${booking.trekName}*:
\u2022 Booking Reference: *#${booking.id}*
\u2022 Date: *${this.formatDate(booking.date)}*
\u2022 Participants: *${booking.participants}*
\u2022 Total Amount: *\u20B9${booking.amount}*
\u2022 Payment Status: *${(booking.paymentStatus || "Pending").toUpperCase()}*

Please complete your payment confirmation to secure your trek permit slots. Reply to this message for any assistance or custom payment arrangements.`);
    window.open(`https://wa.me/${rawPhone}?text=${text}`, "_blank");
  }
  // ── Professional Refund & Cancellation Policy Engine ──
  getDaysUntilTrek(booking) {
    const dStr = booking?.date ? booking.date.split("-")[0].trim() : "";
    const trekDate = new Date(dStr || booking.bookingDate);
    if (isNaN(trekDate.getTime()))
      return 15;
    const diffTime = trekDate.getTime() - (/* @__PURE__ */ new Date()).getTime();
    return Math.ceil(diffTime / (1e3 * 60 * 60 * 24));
  }
  getPolicyRefundPercentage(booking) {
    const days = this.getDaysUntilTrek(booking);
    if (days >= 15)
      return 90;
    if (days >= 7)
      return 50;
    return 0;
  }
  openRefundModal(booking) {
    this.refundBooking = booking;
    const total = Number(booking.amount || 0);
    const policyPct = this.getPolicyRefundPercentage(booking);
    const policyRefund = Math.round(total * policyPct / 100);
    this.refundPolicyMode = "policy";
    this.refundForm = {
      refundType: policyPct === 100 ? "full" : "partial",
      amount: policyRefund,
      deduction: total - policyRefund,
      reason: "Customer Cancellation (Personal Reasons)",
      refundMethod: "Online Gateway Reversal (Razorpay)",
      refundTxnId: "REF-" + Date.now().toString().slice(-6),
      notifyCustomer: true,
      note: `Standard policy applied: ${policyPct}% refundable (${this.getDaysUntilTrek(booking)} days before departure).`
    };
    this.showRefundModal = true;
  }
  closeRefundModal() {
    this.showRefundModal = false;
    this.refundBooking = null;
    this.isProcessingRefund = false;
  }
  applyPolicyMode(mode) {
    if (!this.refundBooking)
      return;
    this.refundPolicyMode = mode;
    const total = Number(this.refundBooking.amount || 0);
    if (mode === "full") {
      this.refundForm.refundType = "full";
      this.refundForm.amount = total;
      this.refundForm.deduction = 0;
      this.refundForm.note = "100% Full refund authorized (Special waiver / Organiser cancellation).";
    } else if (mode === "policy") {
      const policyPct = this.getPolicyRefundPercentage(this.refundBooking);
      const policyRefund = Math.round(total * policyPct / 100);
      this.refundForm.refundType = policyPct === 100 ? "full" : "partial";
      this.refundForm.amount = policyRefund;
      this.refundForm.deduction = total - policyRefund;
      this.refundForm.note = `Standard policy applied: ${policyPct}% refundable (${this.getDaysUntilTrek(this.refundBooking)} days before departure).`;
    }
  }
  onCustomAmountChange() {
    if (!this.refundBooking)
      return;
    const total = Number(this.refundBooking.amount || 0);
    this.refundForm.amount = Math.min(total, Math.max(0, Number(this.refundForm.amount || 0)));
    this.refundForm.deduction = total - this.refundForm.amount;
    this.refundForm.refundType = this.refundForm.amount >= total ? "full" : "partial";
  }
  getPaymentMethodIcon(method) {
    const m = String(method || "").toLowerCase();
    if (m.includes("upi") || m.includes("gpay") || m.includes("phonepe") || m.includes("paytm"))
      return "bi-qr-code";
    if (m.includes("card") || m.includes("visa") || m.includes("mastercard"))
      return "bi-credit-card";
    if (m.includes("net") || m.includes("bank") || m.includes("neft") || m.includes("rtgs"))
      return "bi-bank";
    if (m.includes("cash") || m.includes("offline") || m.includes("basecamp"))
      return "bi-cash-stack";
    return "bi-wallet2";
  }
  getFareBreakdown(totalAmount) {
    const total = Number(totalAmount || 0);
    const permitFee = 200;
    const taxableBase = Math.max(0, (total - permitFee) / 1.05);
    const gst5 = Math.round(taxableBase * 0.05);
    const baseFare = Math.round(taxableBase);
    return {
      baseFare,
      permitFee: total > permitFee ? permitFee : 0,
      gst5,
      total
    };
  }
  generateMockUtr() {
    const prefixes = ["UPI/529", "HDFC/N", "ICIC/R", "pay_"];
    const randPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const randDigits = Math.floor(1e8 + Math.random() * 9e8);
    this.paymentEditForm.transactionId = `${randPrefix}${randDigits}`;
  }
  generateRefundRef() {
    this.refundForm.refundTxnId = `REF-GWK-${Date.now().toString().slice(-6)}-${Math.floor(100 + Math.random() * 900)}`;
  }
  onRefundTypeChange() {
    if (!this.refundBooking)
      return;
    if (this.refundForm.refundType === "full") {
      this.refundForm.amount = Number(this.refundBooking.amount || 0);
    }
  }
  submitRefund() {
    if (!this.refundBooking || this.refundForm.amount <= 0)
      return;
    this.isProcessingRefund = true;
    this.bookingService.processRefund(this.refundBooking.id, {
      amount: this.refundForm.amount,
      reason: this.refundForm.reason,
      refundMethod: this.refundForm.refundMethod,
      refundTxnId: this.refundForm.refundTxnId,
      note: this.refundForm.note
    }).subscribe({
      next: (res) => {
        this.isProcessingRefund = false;
        if (res?.success) {
          const updated = res.data;
          if (this.refundBooking) {
            this.refundBooking.paymentStatus = updated.paymentStatus;
            this.refundBooking.status = updated.bookingStatus;
          }
          if (this.selectedBooking && this.selectedBooking.id === updated.bookingId) {
            this.selectedBooking.paymentStatus = updated.paymentStatus;
            this.selectedBooking.status = updated.bookingStatus;
          }
          this.closeRefundModal();
          alert(`Refund of \u20B9${updated.amount} processed successfully! Reference: ${updated.refundTxnId}`);
        }
      },
      error: (err) => {
        this.isProcessingRefund = false;
        alert(err?.error?.message || "Failed to process refund. Please try again.");
      }
    });
  }
  // ── Payment Edit Handlers ──
  openPaymentEditModal(booking) {
    this.paymentEditBooking = booking;
    this.paymentEditForm = {
      paymentStatus: booking.paymentStatus || "paid",
      paymentMethod: booking.paymentMethod || "UPI (GPay / PhonePe / Paytm)",
      transactionId: booking.transactionId || "TXN-" + Date.now().toString().slice(-6),
      amount: Number(booking.amount || 0)
    };
    this.showPaymentEditModal = true;
  }
  closePaymentEditModal() {
    this.showPaymentEditModal = false;
    this.paymentEditBooking = null;
    this.isUpdatingPayment = false;
  }
  submitPaymentUpdate() {
    if (!this.paymentEditBooking)
      return;
    this.isUpdatingPayment = true;
    this.bookingService.updateBookingPayment(this.paymentEditBooking.id, {
      paymentStatus: this.paymentEditForm.paymentStatus,
      paymentMethod: this.paymentEditForm.paymentMethod,
      transactionId: this.paymentEditForm.transactionId,
      amount: this.paymentEditForm.amount
    }).subscribe({
      next: (res) => {
        this.isUpdatingPayment = false;
        if (res?.success) {
          const updated = res.data;
          if (this.paymentEditBooking) {
            this.paymentEditBooking.paymentStatus = updated.paymentStatus;
            this.paymentEditBooking.paymentMethod = updated.paymentMethod;
            this.paymentEditBooking.transactionId = updated.transactionId;
          }
          if (this.selectedBooking && this.selectedBooking.id === updated.bookingId) {
            this.selectedBooking.paymentStatus = updated.paymentStatus;
            this.selectedBooking.paymentMethod = updated.paymentMethod;
            this.selectedBooking.transactionId = updated.transactionId;
          }
          this.closePaymentEditModal();
          alert("Payment details updated successfully!");
        }
      },
      error: (err) => {
        this.isUpdatingPayment = false;
        alert(err?.error?.message || "Failed to update payment details.");
      }
    });
  }
  // ── Forest Dept Manifest & Medical Roster Handlers ──
  openManifestModal(booking) {
    this.manifestBooking = booking;
    this.showManifestModal = true;
    this.participantsList = [];
    this.bookingService.getBookingParticipants(booking.id).subscribe({
      next: (res) => {
        if (res?.success && Array.isArray(res.data) && res.data.length > 0) {
          this.participantsList = res.data;
        } else {
          const count = Math.max(1, Number(booking.participants || 1));
          this.participantsList = Array.from({ length: count }, (_, idx) => ({
            id: null,
            fullName: idx === 0 ? booking.customerName : `Trekker ${idx + 1}`,
            age: 24,
            gender: "Male",
            govtIdType: this.govtIdTypeOptions[0] || "Aadhaar Card",
            govtIdNumber: "",
            bloodGroup: this.bloodGroupOptions[0] || "O+",
            medicalConditions: this.medicalConditionOptions[0] || "None / Fit to Trek",
            emergencyContactName: booking.customerName,
            emergencyContactPhone: booking.phone || "",
            dietaryPreference: this.dietaryOptions[0] || "Vegetarian",
            checkedIn: false
          }));
        }
      },
      error: () => {
        this.participantsList = [{
          id: null,
          fullName: booking.customerName,
          age: 24,
          gender: "Male",
          govtIdType: "Aadhaar Card",
          govtIdNumber: "",
          bloodGroup: "O+",
          medicalConditions: "None / Fit to Trek",
          emergencyContactName: booking.customerName,
          emergencyContactPhone: booking.phone || "",
          dietaryPreference: "Vegetarian",
          checkedIn: false
        }];
      }
    });
  }
  closeManifestModal() {
    this.showManifestModal = false;
    this.manifestBooking = null;
    this.participantsList = [];
    this.isSavingParticipants = false;
  }
  addParticipantRow() {
    if (!this.manifestBooking)
      return;
    this.participantsList.push({
      id: null,
      fullName: `Trekker ${this.participantsList.length + 1}`,
      age: 22,
      gender: "Male",
      govtIdType: this.govtIdTypeOptions[0] || "Aadhaar Card",
      govtIdNumber: "",
      bloodGroup: this.bloodGroupOptions[0] || "O+",
      medicalConditions: this.medicalConditionOptions[0] || "None / Fit to Trek",
      emergencyContactName: this.manifestBooking.customerName,
      emergencyContactPhone: this.manifestBooking.phone || "",
      dietaryPreference: this.dietaryOptions[0] || "Vegetarian",
      checkedIn: false
    });
  }
  removeParticipantRow(index) {
    if (this.participantsList.length <= 1) {
      alert("Manifest must contain at least 1 lead participant.");
      return;
    }
    this.participantsList.splice(index, 1);
  }
  saveManifest() {
    if (!this.manifestBooking)
      return;
    this.isSavingParticipants = true;
    this.bookingService.saveBookingParticipants(this.manifestBooking.id, this.participantsList).subscribe({
      next: (res) => {
        this.isSavingParticipants = false;
        if (res?.success) {
          alert("Forest Department Entry Manifest & Medical Roster saved successfully!");
          this.closeManifestModal();
        }
      },
      error: (err) => {
        this.isSavingParticipants = false;
        alert(err?.error?.message || "Failed to save participant manifest.");
      }
    });
  }
  printManifest() {
    window.print();
  }
  ngOnInit() {
    this.isLoading = true;
    this.loadDropdownOptions();
    this.bookingService.getBookingData().subscribe({
      next: (res) => {
        if (res.success == true) {
          this.bookings = Array.isArray(res.data) ? res.data : [];
          this.currentPage = 1;
          this.selectedBookingIds.clear();
        }
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }
  loadDropdownOptions() {
    this.dropdownService.getGroupOptions("bookingStatus").pipe(take(1)).subscribe((opts) => {
      if (opts.length > 0) {
        this.statusOptions = [
          { value: "all", label: "All" },
          ...opts.map((opt) => ({ value: opt.value || opt.label.toLowerCase(), label: opt.label }))
        ];
      }
    });
    this.dropdownService.getGroupOptions("paymentStatus").pipe(take(1)).subscribe((opts) => {
      if (opts.length > 0) {
        this.paymentStatusOptions = [
          { value: "all", label: "All Payments" },
          ...opts.map((opt) => ({ value: opt.value || opt.label.toLowerCase(), label: opt.label }))
        ];
      }
    });
    this.dropdownService.getGroupOptions("gender").pipe(take(1)).subscribe((opts) => {
      if (opts.length > 0)
        this.genderOptions = opts.map((o) => o.label);
    });
    this.dropdownService.getGroupOptions("refundReason").pipe(take(1)).subscribe((opts) => {
      if (opts.length > 0)
        this.refundReasonOptions = opts.map((o) => o.label);
    });
    this.dropdownService.getGroupOptions("refundChannel").pipe(take(1)).subscribe((opts) => {
      if (opts.length > 0)
        this.refundMethodOptions = opts.map((o) => o.label);
    });
    this.dropdownService.getGroupOptions("paymentMethod").pipe(take(1)).subscribe((opts) => {
      if (opts.length > 0)
        this.supportedPaymentMethods = opts.map((o) => o.label);
    });
    this.dropdownService.getGroupOptions("govtIdType").pipe(take(1)).subscribe((opts) => {
      if (opts.length > 0)
        this.govtIdTypeOptions = opts.map((o) => o.label);
    });
    this.dropdownService.getGroupOptions("bloodGroup").pipe(take(1)).subscribe((opts) => {
      if (opts.length > 0)
        this.bloodGroupOptions = opts.map((o) => o.label);
    });
    this.dropdownService.getGroupOptions("dietaryPreference").pipe(take(1)).subscribe((opts) => {
      if (opts.length > 0)
        this.dietaryOptions = opts.map((o) => o.label);
    });
    this.dropdownService.getGroupOptions("trekMedicalConditions").pipe(take(1)).subscribe((opts) => {
      if (opts.length > 0)
        this.medicalConditionOptions = opts.map((o) => o.label);
    });
  }
  setDatePreset(preset) {
    this.activeDatePreset = preset;
    const now = /* @__PURE__ */ new Date();
    const fmt = (d) => d.toISOString().split("T")[0];
    if (preset === "today") {
      this.startDate = fmt(now);
      this.endDate = fmt(now);
    } else if (preset === "7d") {
      const past = /* @__PURE__ */ new Date();
      past.setDate(now.getDate() - 7);
      this.startDate = fmt(past);
      this.endDate = fmt(now);
    } else if (preset === "30d") {
      const past = /* @__PURE__ */ new Date();
      past.setDate(now.getDate() - 30);
      this.startDate = fmt(past);
      this.endDate = fmt(now);
    } else {
      this.startDate = "";
      this.endDate = "";
    }
  }
  get filteredBookings() {
    let list = [...this.bookings];
    if (this.selectedStatus !== "all") {
      list = list.filter((b) => b.status === this.selectedStatus);
    }
    if (this.selectedPayment !== "all") {
      list = list.filter((b) => b.paymentStatus === this.selectedPayment);
    }
    if (this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase();
      list = list.filter((b) => b.customerName.toLowerCase().includes(q) || b.email.toLowerCase().includes(q) || b.phone.includes(q) || b.trekName.toLowerCase().includes(q));
    }
    if (this.startDate || this.endDate) {
      const start = this.startDate ? new Date(this.startDate) : null;
      const end = this.endDate ? new Date(this.endDate) : null;
      list = list.filter((b) => {
        const booking = this.getSortDate(b);
        if (!booking)
          return false;
        if (start && booking < start)
          return false;
        if (end) {
          const endOfDay = new Date(end);
          endOfDay.setHours(23, 59, 59, 999);
          if (booking > endOfDay)
            return false;
        }
        return true;
      });
    }
    list.sort((a, b) => this.compareBookings(a, b));
    return list;
  }
  get pagedBookings() {
    const size = Number(this.pageSize) || 5;
    const page = Math.min(Math.max(1, this.currentPage), this.totalPages);
    const start = (page - 1) * size;
    return this.filteredBookings.slice(start, start + size);
  }
  get totalPages() {
    const size = Number(this.pageSize) || 5;
    return Math.max(1, Math.ceil(this.filteredBookings.length / size));
  }
  get selectedCount() {
    return this.selectedBookingIds.size;
  }
  get isAllVisibleSelected() {
    const visibleIds = this.pagedBookings.map((booking) => booking.id);
    return visibleIds.length > 0 && visibleIds.every((id) => this.selectedBookingIds.has(id));
  }
  get statusBreakdown() {
    const tally = { confirmed: 0, pending: 0, cancelled: 0 };
    this.filteredBookings.forEach((booking) => {
      if (booking.status in tally) {
        tally[booking.status] += 1;
      }
    });
    return tally;
  }
  get paymentBreakdown() {
    const tally = { paid: 0, pending: 0 };
    this.filteredBookings.forEach((booking) => {
      if (booking.paymentStatus in tally) {
        tally[booking.paymentStatus] += 1;
      }
    });
    return tally;
  }
  get pageLabel() {
    if (this.filteredBookings.length === 0)
      return "0 of 0";
    const start = (this.currentPage - 1) * this.pageSize + 1;
    const end = Math.min(this.currentPage * this.pageSize, this.filteredBookings.length);
    return `${start}-${end} of ${this.filteredBookings.length}`;
  }
  get pageNumbers() {
    return Array.from({ length: this.totalPages }, (_, index) => index + 1);
  }
  /** Truncated page numbers with ellipsis for responsive pagination */
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
  setSort(field) {
    if (this.sortField === field) {
      this.sortDirection = this.sortDirection === "asc" ? "desc" : "asc";
    } else {
      this.sortField = field;
      this.sortDirection = "desc";
    }
    this.currentPage = 1;
  }
  sortIcon(field) {
    if (this.sortField !== field)
      return "bi-arrow-down-up";
    return this.sortDirection === "asc" ? "bi-sort-up" : "bi-sort-down";
  }
  changePage(page) {
    this.currentPage = Math.min(Math.max(page, 1), this.totalPages);
  }
  goToPage(page) {
    if (page !== "...") {
      this.changePage(Number(page));
    }
  }
  prevPage() {
    this.changePage(this.currentPage - 1);
  }
  nextPage() {
    this.changePage(this.currentPage + 1);
  }
  onPageSizeChange(val) {
    if (val)
      this.pageSize = Number(val);
    this.currentPage = 1;
  }
  resetFilters() {
    this.searchQuery = "";
    this.selectedStatus = "all";
    this.selectedPayment = "all";
    this.startDate = "";
    this.endDate = "";
    this.sortField = "bookingDate";
    this.sortDirection = "desc";
    this.currentPage = 1;
    this.selectedBookingIds.clear();
  }
  toggleVisibleSelection() {
    if (this.isAllVisibleSelected) {
      this.pagedBookings.forEach((booking) => this.selectedBookingIds.delete(booking.id));
      return;
    }
    this.pagedBookings.forEach((booking) => this.selectedBookingIds.add(booking.id));
  }
  toggleBookingSelection(bookingId) {
    if (this.selectedBookingIds.has(bookingId)) {
      this.selectedBookingIds.delete(bookingId);
    } else {
      this.selectedBookingIds.add(bookingId);
    }
  }
  openDrawer(booking) {
    this.selectedBooking = booking;
    this.isDrawerOpen = true;
  }
  closeDrawer() {
    this.selectedBooking = null;
    this.isDrawerOpen = false;
  }
  updateSelectedStatus(status) {
    if (this.selectedBookingIds.size === 0)
      return;
    this.bookings = this.bookings.map((booking) => {
      if (this.selectedBookingIds.has(booking.id)) {
        return __spreadProps(__spreadValues({}, booking), { status });
      }
      return booking;
    });
  }
  exportSelected() {
    const rows = this.filteredBookings.filter((booking) => this.selectedBookingIds.has(booking.id));
    this.exportRows(rows.length > 0 ? rows : this.filteredBookings, rows.length > 0 ? "selected" : "filtered");
  }
  exportVisible() {
    this.exportRows(this.pagedBookings, "visible");
  }
  copySelectedIds() {
    const ids = Array.from(this.selectedBookingIds);
    if (ids.length === 0 || !navigator?.clipboard)
      return;
    navigator.clipboard.writeText(ids.join("\n")).catch(() => {
    });
  }
  exportRows(rows, label) {
    if (!rows.length)
      return;
    const csvRows = [
      ["Booking ID", "Customer", "Email", "Phone", "Trek", "Date", "Participants", "Amount", "Status", "Payment Status", "Booked On"],
      ...rows.map((row) => [
        row.id,
        row.customerName,
        row.email,
        row.phone,
        row.trekName,
        this.formatDate(row.date),
        row.participants,
        row.amount,
        row.status,
        row.paymentStatus,
        this.formatDate(row.bookingDate)
      ])
    ];
    const csv = csvRows.map((row) => row.map((value) => `"${String(value ?? "").replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `bookings-${label}-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  }
  formatDate(dateStr) {
    if (!dateStr)
      return "";
    const date = new Date(dateStr);
    return Number.isNaN(date.getTime()) ? dateStr : date.toISOString().split("T")[0];
  }
  getSortDate(booking) {
    const value = booking.createdAt || booking.bookingDate;
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? null : date;
  }
  compareBookings(a, b) {
    const direction = this.sortDirection === "asc" ? 1 : -1;
    const fields = {
      bookingDate: (booking) => this.getSortDate(booking),
      amount: (booking) => Number(booking.amount || 0),
      customerName: (booking) => (booking.customerName || "").toLowerCase(),
      trekName: (booking) => (booking.trekName || "").toLowerCase(),
      status: (booking) => (booking.status || "").toLowerCase(),
      paymentStatus: (booking) => (booking.paymentStatus || "").toLowerCase(),
      participants: (booking) => Number(booking.participants || 0)
    };
    const left = fields[this.sortField](a);
    const right = fields[this.sortField](b);
    if (left instanceof Date && right instanceof Date) {
      return (left.getTime() - right.getTime()) * direction;
    }
    if (typeof left === "number" && typeof right === "number") {
      return (left - right) * direction;
    }
    const leftText = String(left ?? "");
    const rightText = String(right ?? "");
    return leftText.localeCompare(rightText) * direction;
  }
  // Status and payment badge colors
  getStatusColor(status) {
    if (status === "confirmed" || status === "completed")
      return "success";
    if (status === "pending")
      return "warning";
    if (status === "refunded")
      return "danger";
    return "danger";
  }
  getPaymentColor(status) {
    if (status === "paid")
      return "success";
    if (status === "refunded")
      return "danger";
    if (status === "partially_refunded")
      return "warning";
    return "warning";
  }
};
_BookingsComponent.\u0275fac = function BookingsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BookingsComponent)(\u0275\u0275directiveInject(Bookings), \u0275\u0275directiveInject(DropdownManagerService));
};
_BookingsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookingsComponent, selectors: [["app-bookings"]], decls: 77, vars: 36, consts: [[1, "bookings-page"], ["sectionLabel", "Bookings", "title", "Manage Bookings", "subtitle", "Track trek reservations, payments, and status updates."], [1, "filters-card"], [1, "filter-search"], [1, "bi", "bi-search", "search-icon"], ["type", "text", "placeholder", "Search by name, trek, booking ID, email, or phone...", 3, "ngModelChange", "ngModel"], ["type", "button", "class", "clear-search-btn", "title", "Clear search", 3, "click", 4, "ngIf"], [1, "filter-select-group"], [1, "select-wrapper"], ["aria-label", "Filter by booking status", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "bi", "bi-chevron-down", "select-arrow"], ["aria-label", "Filter by payment status", 3, "ngModelChange", "ngModel"], [1, "date-range-box"], [1, "date-input-wrap"], [1, "bi", "bi-calendar3"], ["type", "date", "aria-label", "Start date", "title", "Start date", 3, "ngModelChange", "ngModel"], [1, "date-arrow"], ["type", "date", "aria-label", "End date", "title", "End date", 3, "ngModelChange", "ngModel"], ["type", "button", "class", "clear-date-btn", "title", "Clear date range", 3, "click", 4, "ngIf"], [1, "date-presets"], ["type", "button", 1, "preset-chip", 3, "click"], [1, "table-toolbar"], [1, "toolbar-meta"], [1, "meta-chip", "primary-chip"], [1, "bi", "bi-list-check"], ["class", "meta-chip selected-chip", 4, "ngIf"], [1, "meta-chip", "meta-chip-confirmed"], [1, "dot", "dot-success"], [1, "meta-chip", "meta-chip-paid"], [1, "dot", "dot-primary"], [1, "toolbar-actions"], ["class", "bulk-status-bar", 4, "ngIf"], [1, "rows-select-wrap"], ["aria-label", "Rows per page", 3, "ngModelChange", "change", "ngModel"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "action-btn-group"], ["type", "button", "title", "Export currently visible rows", 1, "btn-app", "ghost", "btn-sm", 3, "click"], [1, "bi", "bi-download"], ["type", "button", "title", "Export selected rows", 1, "btn-app", "ghost", "btn-sm", 3, "click", "disabled"], [1, "bi", "bi-file-earmark-spreadsheet"], ["type", "button", "title", "Copy selected booking IDs to clipboard", 1, "btn-app", "ghost", "btn-sm", 3, "click", "disabled"], [1, "bi", "bi-clipboard"], ["type", "button", "title", "Reset all filters", 1, "btn-app", "ghost", "btn-sm", 3, "click"], [1, "bi", "bi-arrow-counterclockwise"], ["class", "table-shell skeleton-shell", 4, "ngIf"], ["class", "empty-state surface-card", 4, "ngIf"], ["class", "table-shell", 4, "ngIf"], [1, "drawer-overlay", 3, "click"], ["class", "detail-drawer", 3, "open", 4, "ngIf"], ["cssClass", "refund-modal", 3, "didDismiss", "isOpen"], ["cssClass", "payment-edit-modal", 3, "didDismiss", "isOpen"], ["cssClass", "invoice-modal", 3, "didDismiss", "isOpen"], ["cssClass", "manifest-modal", 3, "didDismiss", "isOpen"], ["type", "button", "title", "Clear search", 1, "clear-search-btn", 3, "click"], [1, "bi", "bi-x-circle-fill"], [3, "value"], ["type", "button", "title", "Clear date range", 1, "clear-date-btn", 3, "click"], [1, "bi", "bi-x"], [1, "meta-chip", "selected-chip"], [1, "bi", "bi-check2-square"], [1, "bulk-status-bar"], [1, "bulk-label"], ["type", "button", 1, "btn-app", "ghost", "btn-sm", 3, "click"], [1, "bi", "bi-check-circle"], [1, "bi", "bi-clock"], ["type", "button", 1, "btn-app", "danger-ghost", "btn-sm", 3, "click"], [1, "bi", "bi-x-circle"], [3, "ngValue"], [1, "table-shell", "skeleton-shell"], [1, "skeleton-table"], [1, "skeleton-table-header"], [1, "skeleton-line", "sm", "shimmer"], [1, "skeleton-line", "md", "shimmer"], [1, "skeleton-line", "lg", "shimmer"], ["class", "skeleton-table-row", 4, "ngFor", "ngForOf"], [1, "skeleton-table-row"], [1, "skeleton-check", "shimmer"], [1, "skeleton-line", "xs", "shimmer"], [1, "empty-state", "surface-card"], [1, "empty-icon"], [1, "bi", "bi-journal-x"], ["type", "button", 1, "btn-app", "primary", 3, "click"], [1, "table-shell"], [1, "table-wrap"], [1, "booking-table"], [1, "col-check"], ["type", "checkbox", "aria-label", "Select all visible bookings", 3, "change", "checked", "disabled"], ["role", "button", "tabindex", "0", 3, "click"], [1, "bi", 3, "ngClass"], ["role", "button", "tabindex", "0", 1, "text-center", 3, "click"], ["role", "button", "tabindex", "0", 1, "text-end", 3, "click"], [1, "col-action", "text-end"], ["class", "clickable-row", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "mobile-bookings-grid"], ["class", "surface-card mobile-booking-card", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["class", "pagination-shell", 4, "ngIf"], [1, "clickable-row", 3, "click"], [1, "col-check", 3, "click"], ["type", "checkbox", 3, "change", "checked"], [1, "cell-stack"], [1, "booking-id-tag"], [1, "text-muted", "small"], [1, "customer-name"], [1, "trek-title"], [1, "bi", "bi-calendar-event", "me-1"], [1, "text-center"], [1, "pax-badge"], [1, "text-end", "amount-cell"], [1, "amount-value"], [1, "status-pill", 3, "ngClass"], [1, "payment-cell"], [1, "d-flex", "align-items-center", "gap-1"], [1, "payment-pill", 3, "ngClass"], [1, "status-pulse-dot", 3, "ngClass"], ["type", "button", "class", "btn-wa-reminder", "title", "Send Payment Reminder via WhatsApp", 3, "click", 4, "ngIf"], ["class", "payment-meta-row", 4, "ngIf"], [1, "col-action", "text-end", 3, "click"], [1, "row-actions"], ["type", "button", "title", "View booking details", 1, "icon-btn", "subtle", 3, "click"], [1, "bi", "bi-eye"], ["type", "button", "title", "Send Payment Reminder via WhatsApp", 1, "btn-wa-reminder", 3, "click"], [1, "bi", "bi-whatsapp"], [1, "payment-meta-row"], ["class", "method-tag", 4, "ngIf"], ["class", "copyable-txn", 3, "title", "click", 4, "ngIf"], [1, "method-tag"], [1, "copyable-txn", 3, "click", "title"], [1, "surface-card", "mobile-booking-card", 3, "click"], [1, "card-head"], [1, "head-left", 3, "click"], [1, "head-right"], [1, "card-body-content"], [1, "trek-name"], [1, "customer-row"], [1, "bi", "bi-person-circle"], [1, "dot-sep"], [1, "pax-tag"], [1, "date-row"], [1, "bi", "bi-calendar-check"], [1, "card-footer-content"], [1, "footer-left"], ["type", "button", "class", "btn-wa-reminder", "title", "Send Payment Link via WhatsApp", 3, "click", 4, "ngIf"], [1, "footer-right"], [1, "mobile-amount"], ["type", "button", 1, "icon-btn", "subtle", 3, "click"], [1, "bi", "bi-chevron-right"], ["type", "button", "title", "Send Payment Link via WhatsApp", 1, "btn-wa-reminder", 3, "click"], [1, "pagination-shell"], [1, "pagination-inner"], [1, "pagination-info"], [1, "pagination-controls"], [1, "page-size-selector"], [1, "pagination-select", 3, "ngModelChange", "ngModel"], [1, "page-actions"], ["type", "button", "title", "Previous Page", 1, "page-nav-btn", 3, "click", "disabled"], [1, "bi", "bi-chevron-left"], [4, "ngFor", "ngForOf"], ["type", "button", "title", "Next Page", 1, "page-nav-btn", 3, "click", "disabled"], ["class", "page-ellipsis", 4, "ngIf"], ["class", "page-btn", "type", "button", 3, "active", "click", 4, "ngIf"], [1, "page-ellipsis"], ["type", "button", 1, "page-btn", 3, "click"], [1, "detail-drawer"], [1, "drawer-header"], [1, "drawer-title-group"], [1, "drawer-label"], [1, "drawer-title"], ["type", "button", "aria-label", "Close details", 1, "drawer-close", 3, "click"], [1, "bi", "bi-x-lg"], [1, "drawer-body"], [1, "drawer-status-row"], [1, "drawer-section"], [1, "drawer-section-title"], [1, "drawer-info-grid"], [1, "dinfo"], [1, "dinfo-label"], [1, "dinfo-value"], [1, "dinfo-value", "mono-val"], [1, "bi", "bi-compass"], [1, "dinfo", "full-width"], [1, "dinfo-value", "font-weight-bold"], [1, "dinfo-value", "highlight-val"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2"], [1, "drawer-section-title", "mb-0"], [1, "bi", "bi-credit-card-2-front-fill", "text-success"], [1, "drawer-section-actions"], ["type", "button", "title", "Update payment details", 1, "btn-app", "ghost", "btn-xs", 3, "click"], [1, "bi", "bi-pencil-square"], ["class", "btn-app danger-ghost btn-xs ms-1", "type", "button", "title", "Issue policy-based refund", 3, "click", 4, "ngIf"], [1, "fare-breakdown-card", "mb-3"], [1, "fare-row"], [1, "fare-label"], [1, "bi", "bi-tree"], [1, "fare-val"], ["class", "fare-row", 4, "ngIf"], [1, "bi", "bi-receipt"], [1, "fare-divider"], [1, "fare-row", "total-row"], [1, "fare-val", "highlight"], ["class", "dinfo full-width", 4, "ngIf"], [1, "drawer-footer"], [1, "footer-btn-grid"], ["type", "button", 1, "btn-app", "primary", "btn-sm", 3, "click"], [1, "bi", "bi-file-earmark-text"], ["type", "button", 1, "btn-app", "secondary", "btn-sm", 3, "click"], [1, "bi", "bi-file-earmark-person-fill"], ["class", "btn-app danger btn-sm", "type", "button", 3, "click", 4, "ngIf"], ["type", "button", "title", "Issue policy-based refund", 1, "btn-app", "danger-ghost", "btn-xs", "ms-1", 3, "click"], [1, "bi", "bi-shield-check"], ["title", "Click to copy", 1, "dinfo-value", "mono", "copyable-txn", 3, "click"], ["type", "button", 1, "btn-app", "ghost", "btn-xs", "text-success", 3, "click"], ["type", "button", 1, "btn-app", "danger", "btn-sm", 3, "click"], ["color", "light"], [1, "bi", "bi-arrow-counterclockwise", "text-danger", "me-1"], ["slot", "end"], [3, "click"], ["class", "modal-form-content", 4, "ngIf"], [1, "modal-form-content"], [1, "refund-container"], [1, "refund-summary-card"], [1, "summary-top"], [1, "ref-label"], [1, "ref-id"], [1, "ref-sub"], [1, "bi", "bi-person-fill", "text-muted"], [1, "bi", "bi-compass", "text-muted"], [1, "ref-countdown-badge"], [1, "bi", "bi-calendar-event"], [1, "text-end"], [1, "ref-amount"], [1, "badge", "bg-light", "text-dark"], [1, "policy-tier-section", "mb-3"], [1, "form-label", "font-weight-bold"], [1, "policy-tier-cards"], [1, "tier-card", 3, "click"], [1, "tier-card-header"], [1, "tier-badge", "policy"], [1, "tier-pct"], [1, "tier-desc"], [4, "ngIf"], [1, "tier-badge", "full"], [1, "tier-badge", "custom"], [1, "settlement-breakdown-box", "mb-3"], [1, "breakdown-title"], [1, "bi", "bi-calculator-fill", "text-accent"], [1, "breakdown-row"], [1, "breakdown-row", "text-danger"], [1, "breakdown-divider"], [1, "breakdown-row", "net-payout"], [1, "payout-amount"], [1, "refund-form", 3, "ngSubmit"], ["class", "form-group mb-3", 4, "ngIf"], [1, "row", "g-2", "mb-3"], [1, "col-md-6"], ["name", "reason", 1, "form-select", 3, "ngModelChange", "ngModel"], ["name", "refundMethod", 1, "form-select", 3, "ngModelChange", "ngModel"], [1, "form-group", "mb-3"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-1"], [1, "form-label", "font-weight-bold", "mb-0"], ["type", "button", 1, "btn", "btn-link", "btn-xs", "text-decoration-none", "p-0", 3, "click"], [1, "bi", "bi-arrow-repeat"], ["type", "text", "name", "refundTxnId", "placeholder", "e.g. REF-GWK-891023-492", "required", "", 1, "form-control", "mono", 3, "ngModelChange", "ngModel"], [1, "form-group", "mb-4"], ["name", "note", "rows", "2", "placeholder", "Internal record / customer communication notes...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "modal-form-actions"], ["type", "button", 1, "btn-app", "ghost", 3, "click", "disabled"], ["type", "submit", 1, "btn-app", "danger", 3, "disabled"], [1, "bi", "bi-arrow-counterclockwise", "me-1"], [1, "input-prefix-wrapper"], [1, "prefix"], ["type", "number", "name", "amount", "min", "1", "required", "", 1, "form-control", "amount-input", 3, "ngModelChange", "ngModel", "max"], [1, "text-muted"], [1, "bi", "bi-credit-card-2-front", "text-success", "me-1"], ["name", "paymentStatus", 1, "form-select", 3, "ngModelChange", "ngModel"], ["name", "paymentMethod", 1, "form-select", 3, "ngModelChange", "ngModel"], [1, "bi", "bi-magic"], ["type", "text", "name", "transactionId", "placeholder", "e.g. UPI/529104829104 or pay_Qx91kd82j", "required", "", 1, "form-control", "mono", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "amount", "min", "0", "required", "", 1, "form-control", "amount-input", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn-app", "primary", 3, "disabled"], [1, "bi", "bi-check-circle", "me-1"], [3, "value", 4, "ngIf"], [1, "no-print"], ["color", "primary", 3, "click"], [1, "bi", "bi-printer-fill", "me-1"], ["class", "invoice-content", 4, "ngIf"], [1, "invoice-content"], ["id", "printable-invoice", 1, "invoice-document"], [1, "inv-header"], [1, "inv-brand"], ["src", "/assets/assets/logo.png", "alt", "goWILD Karunadu", 1, "inv-logo"], [1, "inv-title"], [1, "inv-tagline"], [1, "inv-gst"], [1, "inv-pass-badge"], [1, "pass-tag"], [1, "pass-number"], [1, "pass-status", 3, "ngClass"], [1, "inv-divider"], [1, "inv-meta-grid"], [1, "inv-meta-item"], [1, "meta-label"], [1, "meta-val", "mono"], [1, "meta-val", "highlight"], [1, "meta-val"], [1, "inv-two-col"], [1, "inv-box"], [1, "inv-box-title"], [1, "bi", "bi-map-fill"], [1, "inv-row"], [1, "label"], [1, "val", "bold"], [1, "val"], [1, "bi", "bi-person-badge-fill"], [1, "inv-table-section"], [1, "inv-table"], [1, "small-sub"], ["colspan", "3", 1, "text-end", "bold"], [1, "text-end", "bold"], [1, "inv-total-row"], ["colspan", "3", 1, "text-end"], ["class", "refund-stamp text-danger", 4, "ngIf"], ["class", "refund-stamp text-warning", 4, "ngIf"], [1, "text-end", "total-amount"], ["class", "text-danger small-sub", 4, "ngIf"], [1, "inv-footer-section"], [1, "inv-guidelines"], [1, "inv-qr-badge"], [1, "qr-box"], [1, "bi", "bi-qr-code"], [1, "stamp"], [1, "refund-stamp", "text-danger"], [1, "refund-stamp", "text-warning"], [1, "text-danger", "small-sub"], [1, "bi", "bi-file-earmark-person-fill", "text-success", "me-1"], ["id", "printable-manifest", 1, "manifest-container"], [1, "manifest-gov-header"], [1, "gov-title-group"], [1, "gov-title"], [1, "gov-sub"], [1, "manifest-meta-badge"], [1, "meta-line"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3", "no-print"], ["type", "button", 1, "btn-app", "ghost", "btn-xs", 3, "click"], [1, "bi", "bi-plus-circle", "me-1"], [1, "table-responsive", "manifest-table-wrap", "mb-4"], [1, "table", "table-bordered", "manifest-table", "align-middle"], [1, "table-light"], [2, "width", "40px"], [2, "min-width", "160px"], [2, "width", "70px"], [2, "width", "100px"], [2, "min-width", "140px"], [2, "min-width", "130px"], [2, "width", "90px"], [2, "min-width", "170px"], [2, "min-width", "120px"], [1, "no-print", 2, "width", "50px"], [1, "manifest-signoff-grid"], [1, "signoff-box"], [1, "sign-role"], [1, "sign-line"], [1, "modal-form-actions", "no-print", "mt-3"], ["type", "button", 1, "btn-app", "primary", 3, "click", "disabled"], [1, "text-center", "font-weight-bold"], ["type", "text", "placeholder", "Full legal name", "required", "", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "10", "max", "80", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], [1, "form-select", "form-select-sm", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "XXXX-XXXX-XXXX", 1, "form-control", "form-control-sm", "mono", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "+91 9XXXX XXXXX", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], [1, "no-print", "text-center"], ["type", "button", "title", "Remove", 1, "btn", "btn-sm", "btn-outline-danger", "p-1", 3, "click", "disabled"], [1, "bi", "bi-trash"]], template: function BookingsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "app-admin-shell", 1)(2, "div", 2)(3, "div", 3);
    \u0275\u0275element(4, "i", 4);
    \u0275\u0275elementStart(5, "input", 5);
    \u0275\u0275twoWayListener("ngModelChange", function BookingsComponent_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, BookingsComponent_button_6_Template, 2, 0, "button", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 7)(8, "div", 8)(9, "select", 9);
    \u0275\u0275twoWayListener("ngModelChange", function BookingsComponent_Template_select_ngModelChange_9_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.selectedStatus, $event) || (ctx.selectedStatus = $event);
      return $event;
    });
    \u0275\u0275template(10, BookingsComponent_option_10_Template, 2, 2, "option", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "i", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 8)(13, "select", 12);
    \u0275\u0275twoWayListener("ngModelChange", function BookingsComponent_Template_select_ngModelChange_13_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.selectedPayment, $event) || (ctx.selectedPayment = $event);
      return $event;
    });
    \u0275\u0275template(14, BookingsComponent_option_14_Template, 2, 2, "option", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "i", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 13)(17, "div", 14);
    \u0275\u0275element(18, "i", 15);
    \u0275\u0275elementStart(19, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function BookingsComponent_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.startDate, $event) || (ctx.startDate = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 17);
    \u0275\u0275text(21, "\u2192");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 18);
    \u0275\u0275twoWayListener("ngModelChange", function BookingsComponent_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.endDate, $event) || (ctx.endDate = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, BookingsComponent_button_23_Template, 2, 0, "button", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 20)(25, "button", 21);
    \u0275\u0275listener("click", function BookingsComponent_Template_button_click_25_listener() {
      return ctx.setDatePreset("today");
    });
    \u0275\u0275text(26, " Today ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 21);
    \u0275\u0275listener("click", function BookingsComponent_Template_button_click_27_listener() {
      return ctx.setDatePreset("7d");
    });
    \u0275\u0275text(28, " 7D ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 21);
    \u0275\u0275listener("click", function BookingsComponent_Template_button_click_29_listener() {
      return ctx.setDatePreset("30d");
    });
    \u0275\u0275text(30, " 30D ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 21);
    \u0275\u0275listener("click", function BookingsComponent_Template_button_click_31_listener() {
      return ctx.setDatePreset("all");
    });
    \u0275\u0275text(32, " All Time ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(33, "div", 22)(34, "div", 23)(35, "span", 24);
    \u0275\u0275element(36, "i", 25);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275template(38, BookingsComponent_span_38_Template, 3, 1, "span", 26);
    \u0275\u0275elementStart(39, "span", 27);
    \u0275\u0275element(40, "span", 28);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 29);
    \u0275\u0275element(43, "span", 30);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 31);
    \u0275\u0275template(46, BookingsComponent_div_46_Template, 12, 1, "div", 32);
    \u0275\u0275elementStart(47, "div", 33)(48, "select", 34);
    \u0275\u0275twoWayListener("ngModelChange", function BookingsComponent_Template_select_ngModelChange_48_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.pageSize, $event) || (ctx.pageSize = $event);
      return $event;
    });
    \u0275\u0275listener("change", function BookingsComponent_Template_select_change_48_listener() {
      return ctx.onPageSizeChange();
    });
    \u0275\u0275template(49, BookingsComponent_option_49_Template, 2, 2, "option", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275element(50, "i", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 36)(52, "button", 37);
    \u0275\u0275listener("click", function BookingsComponent_Template_button_click_52_listener() {
      return ctx.exportVisible();
    });
    \u0275\u0275element(53, "i", 38);
    \u0275\u0275text(54, " Export visible ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "button", 39);
    \u0275\u0275listener("click", function BookingsComponent_Template_button_click_55_listener() {
      return ctx.exportSelected();
    });
    \u0275\u0275element(56, "i", 40);
    \u0275\u0275text(57, " Export selected ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "button", 41);
    \u0275\u0275listener("click", function BookingsComponent_Template_button_click_58_listener() {
      return ctx.copySelectedIds();
    });
    \u0275\u0275element(59, "i", 42);
    \u0275\u0275text(60, " Copy IDs ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "button", 43);
    \u0275\u0275listener("click", function BookingsComponent_Template_button_click_61_listener() {
      return ctx.resetFilters();
    });
    \u0275\u0275element(62, "i", 44);
    \u0275\u0275text(63, " Reset ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(64, BookingsComponent_div_64_Template, 11, 2, "div", 45)(65, BookingsComponent_div_65_Template, 10, 0, "div", 46)(66, BookingsComponent_div_66_Template, 35, 12, "div", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "div", 48);
    \u0275\u0275listener("click", function BookingsComponent_Template_div_click_67_listener() {
      return ctx.closeDrawer();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(68, BookingsComponent_aside_68_Template, 124, 44, "aside", 49);
    \u0275\u0275elementStart(69, "ion-modal", 50);
    \u0275\u0275listener("didDismiss", function BookingsComponent_Template_ion_modal_didDismiss_69_listener() {
      return ctx.closeRefundModal();
    });
    \u0275\u0275template(70, BookingsComponent_ng_template_70_Template, 9, 1, "ng-template");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "ion-modal", 51);
    \u0275\u0275listener("didDismiss", function BookingsComponent_Template_ion_modal_didDismiss_71_listener() {
      return ctx.closePaymentEditModal();
    });
    \u0275\u0275template(72, BookingsComponent_ng_template_72_Template, 9, 1, "ng-template");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "ion-modal", 52);
    \u0275\u0275listener("didDismiss", function BookingsComponent_Template_ion_modal_didDismiss_73_listener() {
      return ctx.closePassModal();
    });
    \u0275\u0275template(74, BookingsComponent_ng_template_74_Template, 11, 1, "ng-template");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "ion-modal", 53);
    \u0275\u0275listener("didDismiss", function BookingsComponent_Template_ion_modal_didDismiss_75_listener() {
      return ctx.closeManifestModal();
    });
    \u0275\u0275template(76, BookingsComponent_ng_template_76_Template, 12, 1, "ng-template");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.searchQuery);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.selectedStatus);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.statusOptions);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.selectedPayment);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.paymentStatusOptions);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx.startDate);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.endDate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.startDate || ctx.endDate);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx.activeDatePreset === "today");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx.activeDatePreset === "7d");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx.activeDatePreset === "30d");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx.activeDatePreset === "all" && !ctx.startDate && !ctx.endDate);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx.filteredBookings.length, " results ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.selectedCount > 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx.statusBreakdown.confirmed, " confirmed ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx.paymentBreakdown.paid, " paid ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.selectedCount > 0);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx.pageSize);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.pageSizeOptions);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx.selectedCount === 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx.selectedCount === 0);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isLoading && ctx.filteredBookings.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isLoading && ctx.filteredBookings.length > 0);
    \u0275\u0275advance();
    \u0275\u0275classProp("open", ctx.isDrawerOpen);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.selectedBooking);
    \u0275\u0275advance();
    \u0275\u0275property("isOpen", ctx.showRefundModal);
    \u0275\u0275advance(2);
    \u0275\u0275property("isOpen", ctx.showPaymentEditModal);
    \u0275\u0275advance(2);
    \u0275\u0275property("isOpen", ctx.showPassModal);
    \u0275\u0275advance(2);
    \u0275\u0275property("isOpen", ctx.showManifestModal);
  }
}, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, MaxValidator, NgModel, NgForm, AdminShellComponent, UpperCasePipe, DecimalPipe, TitleCasePipe], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.bookings-page[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: -400px 0;\n  }\n  100% {\n    background-position: 400px 0;\n  }\n}\n.shimmer[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      rgba(0, 0, 0, 0.04) 25%,\n      rgba(0, 0, 0, 0.09) 50%,\n      rgba(0, 0, 0, 0.04) 75%);\n  background-size: 800px 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.5s infinite linear;\n  border-radius: 6px;\n}\n.skeleton-shell[_ngcontent-%COMP%] {\n  padding: 16px;\n  background: #fff;\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: var(--app-radius, 12px);\n  margin-bottom: 24px;\n}\n.skeleton-table[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.skeleton-table-header[_ngcontent-%COMP%], \n.skeleton-table-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 10px 12px;\n}\n.skeleton-table-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--app-border, #e5e7eb);\n}\n.skeleton-check[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border-radius: 4px;\n  flex-shrink: 0;\n}\n.skeleton-line[_ngcontent-%COMP%] {\n  height: 14px;\n  border-radius: 4px;\n}\n.skeleton-line.xs[_ngcontent-%COMP%] {\n  width: 32px;\n}\n.skeleton-line.sm[_ngcontent-%COMP%] {\n  width: 64px;\n}\n.skeleton-line.md[_ngcontent-%COMP%] {\n  width: 120px;\n}\n.skeleton-line.lg[_ngcontent-%COMP%] {\n  width: 180px;\n}\n.filters-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 12px;\n  background: #fff;\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: var(--app-radius, 14px);\n  padding: 12px 16px;\n  margin: 20px 0;\n  box-shadow: var(--app-shadow-soft, 0 2px 8px rgba(0, 0, 0, 0.04));\n}\n.filter-search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: var(--app-surface, #f9fafb);\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: 10px;\n  padding: 8px 12px;\n  flex: 1 1 240px;\n  min-width: 220px;\n  transition: border-color 0.15s ease, box-shadow 0.15s ease;\n}\n.filter-search[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--app-accent, #1d7a6d);\n  box-shadow: 0 0 0 3px rgba(29, 122, 109, 0.12);\n  background: #fff;\n}\n.filter-search[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  color: var(--app-ink-muted, #6b7280);\n  font-size: 0.95rem;\n  flex-shrink: 0;\n}\n.filter-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  flex: 1;\n  background: transparent;\n  font-size: 0.88rem;\n  color: var(--app-ink, #111827);\n}\n.filter-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--app-ink-muted, #9ca3af);\n}\n.filter-search[_ngcontent-%COMP%]   .clear-search-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: var(--app-ink-muted, #9ca3af);\n  padding: 0;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n}\n.filter-search[_ngcontent-%COMP%]   .clear-search-btn[_ngcontent-%COMP%]:hover {\n  color: var(--app-ink, #111827);\n}\n.filter-select-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.select-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.select-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  appearance: none;\n  -webkit-appearance: none;\n  background: var(--app-surface, #f9fafb);\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: 10px;\n  padding: 8px 32px 8px 12px;\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: var(--app-ink, #111827);\n  cursor: pointer;\n  outline: none;\n  min-width: 140px;\n  transition: all 0.15s ease;\n}\n.select-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:hover {\n  border-color: #cbd5e1;\n}\n.select-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: var(--app-accent, #1d7a6d);\n  box-shadow: 0 0 0 3px rgba(29, 122, 109, 0.12);\n  background: #fff;\n}\n.select-wrapper[_ngcontent-%COMP%]   .select-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  pointer-events: none;\n  color: var(--app-ink-muted, #6b7280);\n  font-size: 0.75rem;\n}\n.date-range-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n  margin-left: auto;\n}\n.date-input-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: var(--app-surface, #f9fafb);\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: 10px;\n  padding: 6px 10px;\n}\n.date-input-wrap[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--app-accent, #1d7a6d);\n  font-size: 0.9rem;\n  flex-shrink: 0;\n}\n.date-input-wrap[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%] {\n  border: none;\n  padding: 0;\n  font-size: 0.82rem;\n  color: var(--app-ink, #111827);\n  background: transparent;\n  outline: none;\n  cursor: pointer;\n  font-family: inherit;\n}\n.date-input-wrap[_ngcontent-%COMP%]   .date-arrow[_ngcontent-%COMP%] {\n  color: var(--app-ink-muted, #9ca3af);\n  font-size: 0.85rem;\n}\n.date-input-wrap[_ngcontent-%COMP%]   .clear-date-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  padding: 0;\n  color: var(--app-ink-muted, #9ca3af);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  font-size: 0.9rem;\n}\n.date-input-wrap[_ngcontent-%COMP%]   .clear-date-btn[_ngcontent-%COMP%]:hover {\n  color: #ef4444;\n}\n.date-presets[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  align-items: center;\n}\n.preset-chip[_ngcontent-%COMP%] {\n  background: rgba(29, 122, 109, 0.06);\n  border: 1px solid rgba(29, 122, 109, 0.15);\n  color: var(--app-ink, #374151);\n  font-size: 0.72rem;\n  font-weight: 600;\n  padding: 4px 9px;\n  border-radius: 999px;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  white-space: nowrap;\n}\n.preset-chip[_ngcontent-%COMP%]:hover {\n  background: rgba(29, 122, 109, 0.15);\n  color: var(--app-accent, #1d7a6d);\n}\n.preset-chip.active[_ngcontent-%COMP%] {\n  background: var(--app-accent, #1d7a6d);\n  color: #fff;\n  border-color: var(--app-accent, #1d7a6d);\n}\n.table-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n  align-items: center;\n  margin-bottom: 14px;\n  flex-wrap: wrap;\n}\n.toolbar-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.meta-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 10px;\n  border-radius: 8px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  background: #fff;\n  border: 1px solid var(--app-border, #e5e7eb);\n  color: var(--app-ink, #374151);\n}\n.meta-chip.primary-chip[_ngcontent-%COMP%] {\n  background: rgba(29, 122, 109, 0.08);\n  border-color: rgba(29, 122, 109, 0.2);\n  color: var(--app-accent, #1d7a6d);\n}\n.meta-chip.selected-chip[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n  color: #1d4ed8;\n}\n.meta-chip[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n}\n.meta-chip[_ngcontent-%COMP%]   .dot.dot-success[_ngcontent-%COMP%] {\n  background: #10b981;\n}\n.meta-chip[_ngcontent-%COMP%]   .dot.dot-primary[_ngcontent-%COMP%] {\n  background: #3b82f6;\n}\n.meta-chip[_ngcontent-%COMP%]   .dot.dot-warning[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.toolbar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  align-items: center;\n  margin-left: auto;\n}\n.bulk-status-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  border-radius: 10px;\n  padding: 3px 8px;\n}\n.bulk-status-bar[_ngcontent-%COMP%]   .bulk-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #166534;\n  margin-right: 4px;\n}\n.rows-select-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.rows-select-wrap[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  appearance: none;\n  -webkit-appearance: none;\n  background: #fff;\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: 8px;\n  padding: 6px 26px 6px 10px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--app-ink, #374151);\n  cursor: pointer;\n  outline: none;\n}\n.rows-select-wrap[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:hover {\n  border-color: #cbd5e1;\n}\n.rows-select-wrap[_ngcontent-%COMP%]   .select-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 8px;\n  pointer-events: none;\n  font-size: 0.7rem;\n  color: var(--app-ink-muted, #6b7280);\n}\n.action-btn-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.table-shell[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: var(--app-radius, 14px);\n  box-shadow: var(--app-shadow-soft, 0 2px 8px rgba(0, 0, 0, 0.04));\n  overflow: hidden;\n  margin-bottom: 24px;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.booking-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.88rem;\n  text-align: left;\n}\n.booking-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--app-surface, #f9fafb);\n  color: var(--app-ink-muted, #4b5563);\n  font-weight: 700;\n  font-size: 0.76rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  padding: 12px 14px;\n  border-bottom: 1px solid var(--app-border, #e5e7eb);\n  white-space: nowrap;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.booking-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[role=button][_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: color 0.15s ease;\n}\n.booking-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[role=button][_ngcontent-%COMP%]:hover {\n  color: var(--app-ink, #111827);\n}\n.booking-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   i.bi[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  font-size: 0.8rem;\n  opacity: 0.7;\n}\n.booking-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--app-border, #f1f5f9);\n  transition: background-color 0.15s ease;\n}\n.booking-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.booking-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.clickable-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.booking-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.clickable-row[_ngcontent-%COMP%]:hover {\n  background-color: rgba(29, 122, 109, 0.03);\n}\n.booking-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.selected[_ngcontent-%COMP%] {\n  background-color: #eff6ff;\n}\n.booking-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  vertical-align: middle;\n  color: var(--app-ink, #1f2937);\n}\n.booking-table[_ngcontent-%COMP%]   .col-check[_ngcontent-%COMP%] {\n  width: 36px;\n  text-align: center;\n  padding-left: 14px;\n  padding-right: 6px;\n}\n.booking-table[_ngcontent-%COMP%]   .col-check[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n  accent-color: var(--app-accent, #1d7a6d);\n}\n.booking-table[_ngcontent-%COMP%]   .col-action[_ngcontent-%COMP%] {\n  width: 48px;\n  text-align: right;\n  padding-right: 14px;\n}\n.cell-stack[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.cell-stack[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: var(--app-ink, #111827);\n}\n.cell-stack[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--app-ink-muted, #6b7280);\n}\n.booking-id-tag[_ngcontent-%COMP%] {\n  font-family: ui-monospace, monospace;\n  font-weight: 700;\n  color: var(--app-accent, #1d7a6d) !important;\n}\n.pax-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: var(--app-surface, #f3f4f6);\n  font-weight: 700;\n  font-size: 0.8rem;\n  color: var(--app-ink, #374151);\n}\n.amount-cell[_ngcontent-%COMP%]   .amount-value[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 0.92rem;\n  color: var(--app-ink, #111827);\n}\n.status-pill[_ngcontent-%COMP%], \n.payment-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 10px;\n  border-radius: 999px;\n  font-size: 0.74rem;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n  white-space: nowrap;\n}\n.status-pill.status-success[_ngcontent-%COMP%], \n.payment-pill.status-success[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #065f46;\n  border: 1px solid #a7f3d0;\n}\n.status-pill.status-warning[_ngcontent-%COMP%], \n.payment-pill.status-warning[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #92400e;\n  border: 1px solid #fde68a;\n}\n.status-pill.status-danger[_ngcontent-%COMP%], \n.payment-pill.status-danger[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #991b1b;\n  border: 1px solid #fecaca;\n}\n.status-pill.status-medium[_ngcontent-%COMP%], \n.payment-pill.status-medium[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #4b5563;\n  border: 1px solid #e5e7eb;\n}\n.status-pulse-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n}\n.status-pulse-dot.paid[_ngcontent-%COMP%] {\n  background: #10b981;\n}\n.status-pulse-dot.pending[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.status-pulse-dot.refunded[_ngcontent-%COMP%] {\n  background: #ef4444;\n}\n.status-pulse-dot.partially_refunded[_ngcontent-%COMP%] {\n  background: #f97316;\n}\n.status-pulse-dot.failed[_ngcontent-%COMP%] {\n  background: #dc2626;\n}\n.payment-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.btn-wa-reminder[_ngcontent-%COMP%] {\n  background: #25d366;\n  color: #fff;\n  border: none;\n  border-radius: 50%;\n  width: 22px;\n  height: 22px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n  cursor: pointer;\n  transition: transform 0.15s ease, background 0.15s ease;\n}\n.btn-wa-reminder[_ngcontent-%COMP%]:hover {\n  background: #1eb956;\n  transform: scale(1.1);\n}\n.payment-meta-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.74rem;\n  color: var(--app-ink-muted, #6b7280);\n  flex-wrap: wrap;\n}\n.payment-meta-row[_ngcontent-%COMP%]   .method-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  background: #f3f4f6;\n  padding: 1px 6px;\n  border-radius: 4px;\n  font-weight: 500;\n}\n.payment-meta-row[_ngcontent-%COMP%]   .copyable-txn[_ngcontent-%COMP%] {\n  font-family: ui-monospace, monospace;\n  background: rgba(0, 0, 0, 0.04);\n  padding: 1px 6px;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.payment-meta-row[_ngcontent-%COMP%]   .copyable-txn[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.08);\n}\n.icon-btn[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  border: 1px solid var(--app-border, #e5e7eb);\n  background: #fff;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: var(--app-ink, #374151);\n  transition: all 0.15s ease;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: var(--app-surface, #f9fafb);\n  border-color: #cbd5e1;\n  color: var(--app-accent, #1d7a6d);\n}\n.icon-btn.subtle[_ngcontent-%COMP%] {\n  border: 1px solid transparent;\n  background: transparent;\n  color: var(--app-ink-muted, #6b7280);\n}\n.icon-btn.subtle[_ngcontent-%COMP%]:hover {\n  background: var(--app-surface, #f3f4f6);\n  color: var(--app-ink, #111827);\n}\n.mobile-bookings-grid[_ngcontent-%COMP%] {\n  display: none;\n  flex-direction: column;\n  gap: 12px;\n  padding: 12px;\n}\n.mobile-booking-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: 12px;\n  padding: 14px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.03);\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  transition: border-color 0.15s ease, box-shadow 0.15s ease;\n}\n.mobile-booking-card.selected[_ngcontent-%COMP%] {\n  border-color: #bfdbfe;\n  background: #f8faff;\n}\n.mobile-booking-card[_ngcontent-%COMP%]   .card-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 8px;\n}\n.mobile-booking-card[_ngcontent-%COMP%]   .card-head[_ngcontent-%COMP%]   .head-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.mobile-booking-card[_ngcontent-%COMP%]   .card-head[_ngcontent-%COMP%]   .head-left[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  accent-color: var(--app-accent, #1d7a6d);\n}\n.mobile-booking-card[_ngcontent-%COMP%]   .card-body-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.mobile-booking-card[_ngcontent-%COMP%]   .card-body-content[_ngcontent-%COMP%]   .trek-name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.98rem;\n  font-weight: 700;\n  color: var(--app-ink, #111827);\n}\n.mobile-booking-card[_ngcontent-%COMP%]   .card-body-content[_ngcontent-%COMP%]   .customer-row[_ngcontent-%COMP%], \n.mobile-booking-card[_ngcontent-%COMP%]   .card-body-content[_ngcontent-%COMP%]   .date-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.82rem;\n  color: var(--app-ink-muted, #4b5563);\n}\n.mobile-booking-card[_ngcontent-%COMP%]   .card-body-content[_ngcontent-%COMP%]   .customer-row[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.mobile-booking-card[_ngcontent-%COMP%]   .card-body-content[_ngcontent-%COMP%]   .date-row[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--app-ink-muted, #9ca3af);\n}\n.mobile-booking-card[_ngcontent-%COMP%]   .card-body-content[_ngcontent-%COMP%]   .dot-sep[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n}\n.mobile-booking-card[_ngcontent-%COMP%]   .card-body-content[_ngcontent-%COMP%]   .pax-tag[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--app-accent, #1d7a6d);\n}\n.mobile-booking-card[_ngcontent-%COMP%]   .card-footer-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 10px;\n  border-top: 1px solid var(--app-border, #f1f5f9);\n}\n.mobile-booking-card[_ngcontent-%COMP%]   .card-footer-content[_ngcontent-%COMP%]   .footer-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.mobile-booking-card[_ngcontent-%COMP%]   .card-footer-content[_ngcontent-%COMP%]   .footer-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.mobile-booking-card[_ngcontent-%COMP%]   .card-footer-content[_ngcontent-%COMP%]   .footer-right[_ngcontent-%COMP%]   .mobile-amount[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1rem;\n  color: var(--app-ink, #111827);\n}\n.table-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 18px;\n  border-top: 1px solid var(--app-border, #e5e7eb);\n  background: var(--app-surface, #f9fafb);\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.table-footer[_ngcontent-%COMP%]   .page-info[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--app-ink-muted, #4b5563);\n  font-weight: 500;\n}\n.page-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.page-btn[_ngcontent-%COMP%] {\n  min-width: 32px;\n  height: 32px;\n  padding: 0 8px;\n  border: 1px solid var(--app-border, #e5e7eb);\n  background: #fff;\n  border-radius: 8px;\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--app-ink, #374151);\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s ease;\n}\n.page-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--app-accent, #1d7a6d);\n  color: var(--app-accent, #1d7a6d);\n}\n.page-btn.active[_ngcontent-%COMP%] {\n  background: var(--app-accent, #1d7a6d);\n  border-color: var(--app-accent, #1d7a6d);\n  color: #fff;\n}\n.page-ellipsis[_ngcontent-%COMP%] {\n  padding: 0 4px;\n  color: var(--app-ink-muted, #9ca3af);\n  font-weight: 700;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px 24px;\n  background: #fff;\n  border: 1px dashed var(--app-border, #cbd5e1);\n  border-radius: var(--app-radius, 14px);\n  margin-bottom: 24px;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  margin: 0 auto 16px;\n  border-radius: 50%;\n  background: rgba(29, 122, 109, 0.08);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: var(--app-accent, #1d7a6d);\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 6px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: var(--app-ink, #111827);\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 20px;\n  font-size: 0.9rem;\n  color: var(--app-ink-muted, #6b7280);\n}\n.drawer-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n  z-index: 1000;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.25s ease;\n}\n.drawer-overlay.open[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: auto;\n}\n.detail-drawer[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  width: 440px;\n  max-width: 100vw;\n  background: #fff;\n  z-index: 1001;\n  display: flex;\n  flex-direction: column;\n  box-shadow: -4px 0 24px rgba(0, 0, 0, 0.15);\n  transform: translateX(100%);\n  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.detail-drawer.open[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n.drawer-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 20px;\n  border-bottom: 1px solid var(--app-border, #e5e7eb);\n}\n.drawer-header[_ngcontent-%COMP%]   .drawer-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--app-ink-muted, #6b7280);\n}\n.drawer-header[_ngcontent-%COMP%]   .drawer-title[_ngcontent-%COMP%] {\n  margin: 2px 0 0;\n  font-size: 1.35rem;\n  font-weight: 800;\n  color: var(--app-accent, #1d7a6d);\n  font-family: ui-monospace, monospace;\n}\n.drawer-header[_ngcontent-%COMP%]   .drawer-close[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  font-size: 1.1rem;\n  color: var(--app-ink-muted, #6b7280);\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 6px;\n}\n.drawer-header[_ngcontent-%COMP%]   .drawer-close[_ngcontent-%COMP%]:hover {\n  background: var(--app-surface, #f3f4f6);\n  color: var(--app-ink, #111827);\n}\n.drawer-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.drawer-status-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.drawer-section[_ngcontent-%COMP%] {\n  background: var(--app-surface, #f9fafb);\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: 12px;\n  padding: 16px;\n}\n.drawer-section[_ngcontent-%COMP%]   .drawer-section-title[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--app-ink, #111827);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.drawer-info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n}\n.drawer-info-grid[_ngcontent-%COMP%]   .dinfo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.drawer-info-grid[_ngcontent-%COMP%]   .dinfo.full-width[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n.drawer-info-grid[_ngcontent-%COMP%]   .dinfo[_ngcontent-%COMP%]   .dinfo-label[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  font-weight: 600;\n  color: var(--app-ink-muted, #6b7280);\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n}\n.drawer-info-grid[_ngcontent-%COMP%]   .dinfo[_ngcontent-%COMP%]   .dinfo-value[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: var(--app-ink, #111827);\n  font-weight: 500;\n}\n.drawer-info-grid[_ngcontent-%COMP%]   .dinfo[_ngcontent-%COMP%]   .dinfo-value.highlight-val[_ngcontent-%COMP%] {\n  color: var(--app-accent, #1d7a6d);\n  font-weight: 700;\n}\n.drawer-info-grid[_ngcontent-%COMP%]   .dinfo[_ngcontent-%COMP%]   .dinfo-value.mono-val[_ngcontent-%COMP%] {\n  font-family: ui-monospace, monospace;\n  word-break: break-all;\n}\n.fare-breakdown-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: 10px;\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.fare-breakdown-card[_ngcontent-%COMP%]   .fare-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 0.82rem;\n}\n.fare-breakdown-card[_ngcontent-%COMP%]   .fare-row[_ngcontent-%COMP%]   .fare-label[_ngcontent-%COMP%] {\n  color: var(--app-ink-muted, #4b5563);\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.fare-breakdown-card[_ngcontent-%COMP%]   .fare-row[_ngcontent-%COMP%]   .fare-val[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--app-ink, #111827);\n}\n.fare-breakdown-card[_ngcontent-%COMP%]   .fare-row[_ngcontent-%COMP%]   .fare-val.highlight[_ngcontent-%COMP%] {\n  font-size: 0.98rem;\n  font-weight: 800;\n  color: var(--app-accent, #1d7a6d);\n}\n.fare-breakdown-card[_ngcontent-%COMP%]   .fare-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: var(--app-border, #e5e7eb);\n  margin: 2px 0;\n}\n.drawer-footer[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  border-top: 1px solid var(--app-border, #e5e7eb);\n  background: #fff;\n}\n.drawer-footer[_ngcontent-%COMP%]   .footer-btn-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 8px;\n}\n.modal-form-content[_ngcontent-%COMP%] {\n  --background: #f8fafc;\n}\n.refund-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 680px;\n  margin: 0 auto;\n}\n.refund-summary-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: 12px;\n  padding: 16px 20px;\n  margin-bottom: 20px;\n  box-shadow: var(--app-shadow-soft, 0 1px 4px rgba(0, 0, 0, 0.04));\n}\n.refund-summary-card[_ngcontent-%COMP%]   .summary-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 12px;\n}\n.refund-summary-card[_ngcontent-%COMP%]   .ref-label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: var(--app-ink-muted, #6b7280);\n}\n.refund-summary-card[_ngcontent-%COMP%]   .ref-id[_ngcontent-%COMP%] {\n  margin: 2px 0 4px;\n  font-size: 1.2rem;\n  font-weight: 800;\n  color: var(--app-ink, #111827);\n}\n.refund-summary-card[_ngcontent-%COMP%]   .ref-sub[_ngcontent-%COMP%] {\n  margin: 0 0 6px;\n  font-size: 0.88rem;\n  color: var(--app-ink-muted, #4b5563);\n}\n.refund-summary-card[_ngcontent-%COMP%]   .ref-amount[_ngcontent-%COMP%] {\n  margin: 2px 0 4px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: var(--app-accent, #1d7a6d);\n}\n.refund-summary-card[_ngcontent-%COMP%]   .ref-countdown-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 3px 8px;\n  background: #eff6ff;\n  color: #1d4ed8;\n  border-radius: 6px;\n  font-size: 0.78rem;\n  font-weight: 600;\n}\n.policy-tier-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n  margin-top: 8px;\n}\n.tier-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 2px solid var(--app-border, #e5e7eb);\n  border-radius: 10px;\n  padding: 12px;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.tier-card[_ngcontent-%COMP%]:hover {\n  border-color: #cbd5e1;\n}\n.tier-card.active[_ngcontent-%COMP%] {\n  border-color: var(--app-accent, #1d7a6d);\n  background: rgba(29, 122, 109, 0.04);\n}\n.tier-card[_ngcontent-%COMP%]   .tier-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 6px;\n}\n.tier-card[_ngcontent-%COMP%]   .tier-card-header[_ngcontent-%COMP%]   .tier-badge[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 700;\n  padding: 2px 6px;\n  border-radius: 4px;\n}\n.tier-card[_ngcontent-%COMP%]   .tier-card-header[_ngcontent-%COMP%]   .tier-badge.policy[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.tier-card[_ngcontent-%COMP%]   .tier-card-header[_ngcontent-%COMP%]   .tier-badge.full[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.tier-card[_ngcontent-%COMP%]   .tier-card-header[_ngcontent-%COMP%]   .tier-badge.custom[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.tier-card[_ngcontent-%COMP%]   .tier-card-header[_ngcontent-%COMP%]   .tier-pct[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 800;\n  color: var(--app-ink, #111827);\n}\n.tier-card[_ngcontent-%COMP%]   .tier-desc[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.76rem;\n  color: var(--app-ink-muted, #6b7280);\n  line-height: 1.35;\n}\n.settlement-breakdown-box[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: 10px;\n  padding: 14px 16px;\n}\n.settlement-breakdown-box[_ngcontent-%COMP%]   .breakdown-title[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: var(--app-ink, #111827);\n}\n.settlement-breakdown-box[_ngcontent-%COMP%]   .breakdown-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.85rem;\n  margin-bottom: 6px;\n}\n.settlement-breakdown-box[_ngcontent-%COMP%]   .breakdown-row.net-payout[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 0.95rem;\n  color: var(--app-ink, #111827);\n  margin-top: 8px;\n}\n.settlement-breakdown-box[_ngcontent-%COMP%]   .breakdown-row.net-payout[_ngcontent-%COMP%]   .payout-amount[_ngcontent-%COMP%] {\n  color: #10b981;\n  font-size: 1.15rem;\n  font-weight: 800;\n}\n.settlement-breakdown-box[_ngcontent-%COMP%]   .breakdown-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: var(--app-border, #e5e7eb);\n  margin: 8px 0;\n}\n.input-prefix-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.input-prefix-wrapper[_ngcontent-%COMP%]   .prefix[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  font-weight: 700;\n  color: var(--app-ink-muted, #6b7280);\n  pointer-events: none;\n}\n.input-prefix-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-left: 28px !important;\n}\n.modal-form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  margin-top: 24px;\n}\n.invoice-content[_ngcontent-%COMP%] {\n  --background: #f1f5f9;\n}\n.invoice-document[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 20px auto;\n  background: #fff;\n  padding: 36px;\n  border-radius: 12px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n  color: #111827;\n}\n.invoice-document[_ngcontent-%COMP%]   .inv-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 20px;\n}\n.invoice-document[_ngcontent-%COMP%]   .inv-brand[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  align-items: center;\n}\n.invoice-document[_ngcontent-%COMP%]   .inv-brand[_ngcontent-%COMP%]   .inv-logo[_ngcontent-%COMP%] {\n  width: 54px;\n  height: 54px;\n  object-fit: contain;\n}\n.invoice-document[_ngcontent-%COMP%]   .inv-brand[_ngcontent-%COMP%]   .inv-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #1d7a6d;\n}\n.invoice-document[_ngcontent-%COMP%]   .inv-brand[_ngcontent-%COMP%]   .inv-tagline[_ngcontent-%COMP%] {\n  margin: 2px 0 0;\n  font-size: 0.85rem;\n  color: #4b5563;\n}\n.invoice-document[_ngcontent-%COMP%]   .inv-brand[_ngcontent-%COMP%]   .inv-gst[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  color: #9ca3af;\n}\n.invoice-document[_ngcontent-%COMP%]   .inv-pass-badge[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.invoice-document[_ngcontent-%COMP%]   .inv-pass-badge[_ngcontent-%COMP%]   .pass-tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #1d7a6d;\n  color: #fff;\n  font-size: 0.72rem;\n  font-weight: 800;\n  padding: 3px 8px;\n  border-radius: 4px;\n  letter-spacing: 0.05em;\n}\n.invoice-document[_ngcontent-%COMP%]   .inv-pass-badge[_ngcontent-%COMP%]   .pass-number[_ngcontent-%COMP%] {\n  margin: 4px 0;\n  font-family: ui-monospace, monospace;\n  font-size: 1.1rem;\n  font-weight: 800;\n}\n.invoice-document[_ngcontent-%COMP%]   .inv-divider[_ngcontent-%COMP%] {\n  border: none;\n  height: 1px;\n  background: #e5e7eb;\n  margin: 20px 0;\n}\n.invoice-document[_ngcontent-%COMP%]   .inv-meta-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 12px;\n  background: #f9fafb;\n  padding: 12px 16px;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n  margin-bottom: 20px;\n}\n.invoice-document[_ngcontent-%COMP%]   .inv-meta-grid[_ngcontent-%COMP%]   .inv-meta-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.invoice-document[_ngcontent-%COMP%]   .inv-meta-grid[_ngcontent-%COMP%]   .inv-meta-item[_ngcontent-%COMP%]   .meta-label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #6b7280;\n  text-transform: uppercase;\n  font-weight: 600;\n}\n.invoice-document[_ngcontent-%COMP%]   .inv-meta-grid[_ngcontent-%COMP%]   .inv-meta-item[_ngcontent-%COMP%]   .meta-val[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n}\n.invoice-document[_ngcontent-%COMP%]   .inv-meta-grid[_ngcontent-%COMP%]   .inv-meta-item[_ngcontent-%COMP%]   .meta-val.highlight[_ngcontent-%COMP%] {\n  color: #1d7a6d;\n  font-weight: 700;\n}\n.invoice-document[_ngcontent-%COMP%]   .inv-two-col[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.invoice-document[_ngcontent-%COMP%]   .inv-two-col[_ngcontent-%COMP%]   .inv-box[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 14px;\n}\n.invoice-document[_ngcontent-%COMP%]   .inv-two-col[_ngcontent-%COMP%]   .inv-box[_ngcontent-%COMP%]   .inv-box-title[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: #111827;\n  border-bottom: 1px solid #f1f5f9;\n  padding-bottom: 6px;\n}\n.invoice-document[_ngcontent-%COMP%]   .inv-two-col[_ngcontent-%COMP%]   .inv-box[_ngcontent-%COMP%]   .inv-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.82rem;\n  margin-bottom: 6px;\n}\n.invoice-document[_ngcontent-%COMP%]   .inv-two-col[_ngcontent-%COMP%]   .inv-box[_ngcontent-%COMP%]   .inv-row[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.invoice-document[_ngcontent-%COMP%]   .inv-two-col[_ngcontent-%COMP%]   .inv-box[_ngcontent-%COMP%]   .inv-row[_ngcontent-%COMP%]   .val[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.invoice-document[_ngcontent-%COMP%]   .inv-table-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.invoice-document[_ngcontent-%COMP%]   .inv-table-section[_ngcontent-%COMP%]   .inv-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.invoice-document[_ngcontent-%COMP%]   .inv-table-section[_ngcontent-%COMP%]   .inv-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  padding: 10px 12px;\n  font-size: 0.78rem;\n  text-transform: uppercase;\n  border: 1px solid #e5e7eb;\n}\n.invoice-document[_ngcontent-%COMP%]   .inv-table-section[_ngcontent-%COMP%]   .inv-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px;\n  font-size: 0.85rem;\n  border: 1px solid #e5e7eb;\n}\n.invoice-document[_ngcontent-%COMP%]   .inv-table-section[_ngcontent-%COMP%]   .inv-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .small-sub[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.invoice-document[_ngcontent-%COMP%]   .inv-table-section[_ngcontent-%COMP%]   .inv-table[_ngcontent-%COMP%]   .inv-total-row[_ngcontent-%COMP%] {\n  background: #f9fafb;\n}\n.invoice-document[_ngcontent-%COMP%]   .inv-table-section[_ngcontent-%COMP%]   .inv-table[_ngcontent-%COMP%]   .inv-total-row[_ngcontent-%COMP%]   .total-amount[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  font-weight: 800;\n  color: #1d7a6d;\n}\n.invoice-document[_ngcontent-%COMP%]   .inv-footer-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-top: 1px dashed #cbd5e1;\n  padding-top: 20px;\n  gap: 20px;\n}\n.invoice-document[_ngcontent-%COMP%]   .inv-footer-section[_ngcontent-%COMP%]   .inv-guidelines[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.invoice-document[_ngcontent-%COMP%]   .inv-footer-section[_ngcontent-%COMP%]   .inv-guidelines[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 6px;\n  font-size: 0.82rem;\n  font-weight: 700;\n}\n.invoice-document[_ngcontent-%COMP%]   .inv-footer-section[_ngcontent-%COMP%]   .inv-guidelines[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 16px;\n  font-size: 0.75rem;\n  color: #4b5563;\n  line-height: 1.4;\n}\n.invoice-document[_ngcontent-%COMP%]   .inv-footer-section[_ngcontent-%COMP%]   .inv-qr-badge[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.invoice-document[_ngcontent-%COMP%]   .inv-footer-section[_ngcontent-%COMP%]   .inv-qr-badge[_ngcontent-%COMP%]   .qr-box[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border: 2px solid #111827;\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 28px;\n  margin: 0 auto 4px;\n}\n.invoice-document[_ngcontent-%COMP%]   .inv-footer-section[_ngcontent-%COMP%]   .inv-qr-badge[_ngcontent-%COMP%]   .qr-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.5rem;\n  font-weight: 800;\n}\n.invoice-document[_ngcontent-%COMP%]   .inv-footer-section[_ngcontent-%COMP%]   .inv-qr-badge[_ngcontent-%COMP%]   .stamp[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  color: #6b7280;\n  font-weight: 700;\n}\n.manifest-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  background: #fff;\n}\n.manifest-gov-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  border-bottom: 2px solid #166534;\n  padding-bottom: 12px;\n  margin-bottom: 16px;\n  gap: 16px;\n}\n.manifest-gov-header[_ngcontent-%COMP%]   .gov-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.05rem;\n  font-weight: 800;\n  color: #166534;\n}\n.manifest-gov-header[_ngcontent-%COMP%]   .gov-sub[_ngcontent-%COMP%] {\n  margin: 2px 0 0;\n  font-size: 0.8rem;\n  color: #4b5563;\n}\n.manifest-gov-header[_ngcontent-%COMP%]   .manifest-meta-badge[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  padding: 8px 12px;\n  border-radius: 8px;\n  font-size: 0.78rem;\n  white-space: nowrap;\n}\n.manifest-table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.manifest-table[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.manifest-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  background: #f8fafc;\n  white-space: nowrap;\n}\n.manifest-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 6px;\n}\n.manifest-signoff-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 24px;\n  margin-top: 32px;\n  padding-top: 16px;\n  border-top: 1px dashed #cbd5e1;\n}\n.manifest-signoff-grid[_ngcontent-%COMP%]   .signoff-box[_ngcontent-%COMP%]   .sign-role[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 0.82rem;\n  margin: 0 0 40px;\n}\n.manifest-signoff-grid[_ngcontent-%COMP%]   .signoff-box[_ngcontent-%COMP%]   .sign-line[_ngcontent-%COMP%] {\n  height: 1px;\n  background: #111827;\n  margin-bottom: 4px;\n}\n.manifest-signoff-grid[_ngcontent-%COMP%]   .signoff-box[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  color: #6b7280;\n}\n@media print {\n  .no-print[_ngcontent-%COMP%], \n   ion-header[_ngcontent-%COMP%], \n   .table-toolbar[_ngcontent-%COMP%], \n   .filters-card[_ngcontent-%COMP%], \n   .drawer-overlay[_ngcontent-%COMP%], \n   .detail-drawer[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  body[_ngcontent-%COMP%], \n   ion-content[_ngcontent-%COMP%] {\n    background: #fff !important;\n  }\n  .invoice-document[_ngcontent-%COMP%] {\n    box-shadow: none !important;\n    padding: 0 !important;\n    margin: 0 !important;\n    max-width: 100% !important;\n  }\n}\n@media (max-width: 1024px) {\n  .filters-card[_ngcontent-%COMP%] {\n    gap: 10px;\n  }\n  .date-range-box[_ngcontent-%COMP%] {\n    margin-left: 0;\n    width: 100%;\n  }\n  .policy-tier-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 768px) {\n  .filter-search[_ngcontent-%COMP%] {\n    flex: 1 1 100%;\n    min-width: 100%;\n  }\n  .filter-select-group[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .filter-select-group[_ngcontent-%COMP%]   .select-wrapper[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  .filter-select-group[_ngcontent-%COMP%]   .select-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .date-range-box[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .date-range-box[_ngcontent-%COMP%]   .date-input-wrap[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: space-between;\n  }\n  .table-toolbar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .table-toolbar[_ngcontent-%COMP%]   .toolbar-actions[_ngcontent-%COMP%] {\n    margin-left: 0;\n    justify-content: space-between;\n    width: 100%;\n  }\n  .booking-table[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .mobile-bookings-grid[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .detail-drawer[_ngcontent-%COMP%] {\n    top: auto;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n    max-height: 88vh;\n    border-radius: 20px 20px 0 0;\n    transform: translateY(100%);\n  }\n  .detail-drawer.open[_ngcontent-%COMP%] {\n    transform: translateY(0);\n  }\n  .drawer-info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .drawer-info-grid[_ngcontent-%COMP%]   .dinfo.full-width[_ngcontent-%COMP%] {\n    grid-column: span 1;\n  }\n  .inv-two-col[_ngcontent-%COMP%], \n   .inv-meta-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=bookings.component.css.map */'] });
var BookingsComponent = _BookingsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookingsComponent, [{
    type: Component,
    args: [{ selector: "app-bookings", standalone: true, imports: [CommonModule, FormsModule, AdminShellComponent], schemas: [CUSTOM_ELEMENTS_SCHEMA], template: `<div class="bookings-page">
  <app-admin-shell
    sectionLabel="Bookings"
    title="Manage Bookings"
    subtitle="Track trek reservations, payments, and status updates.">

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 FILTERS BAR \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <div class="filters-card">
      <div class="filter-search">
        <i class="bi bi-search search-icon"></i>
        <input
          type="text"
          placeholder="Search by name, trek, booking ID, email, or phone..."
          [(ngModel)]="searchQuery" />
        <button
          type="button"
          class="clear-search-btn"
          *ngIf="searchQuery"
          (click)="searchQuery = ''"
          title="Clear search">
          <i class="bi bi-x-circle-fill"></i>
        </button>
      </div>

      <div class="filter-select-group">
        <div class="select-wrapper">
          <select [(ngModel)]="selectedStatus" aria-label="Filter by booking status">
            <option *ngFor="let s of statusOptions" [value]="s.value">
              {{ s.label }}
            </option>
          </select>
          <i class="bi bi-chevron-down select-arrow"></i>
        </div>

        <div class="select-wrapper">
          <select [(ngModel)]="selectedPayment" aria-label="Filter by payment status">
            <option *ngFor="let p of paymentStatusOptions" [value]="p.value">{{ p.label }}</option>
          </select>
          <i class="bi bi-chevron-down select-arrow"></i>
        </div>
      </div>

      <!-- Enhanced Date Range Picker & Quick Presets -->
      <div class="date-range-box">
        <div class="date-input-wrap">
          <i class="bi bi-calendar3"></i>
          <input type="date" [(ngModel)]="startDate" aria-label="Start date" title="Start date" />
          <span class="date-arrow">&rarr;</span>
          <input type="date" [(ngModel)]="endDate" aria-label="End date" title="End date" />
          <button
            type="button"
            class="clear-date-btn"
            *ngIf="startDate || endDate"
            (click)="setDatePreset('all')"
            title="Clear date range">
            <i class="bi bi-x"></i>
          </button>
        </div>
        <div class="date-presets">
          <button
            type="button"
            class="preset-chip"
            [class.active]="activeDatePreset === 'today'"
            (click)="setDatePreset('today')">
            Today
          </button>
          <button
            type="button"
            class="preset-chip"
            [class.active]="activeDatePreset === '7d'"
            (click)="setDatePreset('7d')">
            7D
          </button>
          <button
            type="button"
            class="preset-chip"
            [class.active]="activeDatePreset === '30d'"
            (click)="setDatePreset('30d')">
            30D
          </button>
          <button
            type="button"
            class="preset-chip"
            [class.active]="activeDatePreset === 'all' && !startDate && !endDate"
            (click)="setDatePreset('all')">
            All Time
          </button>
        </div>
      </div>
    </div>

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 TOOLBAR & BULK ACTIONS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <div class="table-toolbar">
      <div class="toolbar-meta">
        <span class="meta-chip primary-chip">
          <i class="bi bi-list-check"></i>
          {{ filteredBookings.length }} results
        </span>
        <span class="meta-chip selected-chip" *ngIf="selectedCount > 0">
          <i class="bi bi-check2-square"></i>
          {{ selectedCount }} selected
        </span>
        <span class="meta-chip meta-chip-confirmed">
          <span class="dot dot-success"></span>
          {{ statusBreakdown.confirmed }} confirmed
        </span>
        <span class="meta-chip meta-chip-paid">
          <span class="dot dot-primary"></span>
          {{ paymentBreakdown.paid }} paid
        </span>
      </div>

      <div class="toolbar-actions">
        <!-- Bulk status change \u2014 visible only when rows are selected -->
        <div class="bulk-status-bar" *ngIf="selectedCount > 0">
          <span class="bulk-label">{{ selectedCount }} selected:</span>
          <button class="btn-app ghost btn-sm" type="button" (click)="updateSelectedStatus('confirmed')">
            <i class="bi bi-check-circle"></i> Confirm
          </button>
          <button class="btn-app ghost btn-sm" type="button" (click)="updateSelectedStatus('pending')">
            <i class="bi bi-clock"></i> Pending
          </button>
          <button class="btn-app danger-ghost btn-sm" type="button" (click)="updateSelectedStatus('cancelled')">
            <i class="bi bi-x-circle"></i> Cancel
          </button>
        </div>

        <div class="rows-select-wrap">
          <select [(ngModel)]="pageSize" (change)="onPageSizeChange()" aria-label="Rows per page">
            <option *ngFor="let size of pageSizeOptions" [ngValue]="size">{{ size }} rows</option>
          </select>
          <i class="bi bi-chevron-down select-arrow"></i>
        </div>

        <div class="action-btn-group">
          <button class="btn-app ghost btn-sm" type="button" (click)="exportVisible()" title="Export currently visible rows">
            <i class="bi bi-download"></i> Export visible
          </button>
          <button
            class="btn-app ghost btn-sm"
            type="button"
            (click)="exportSelected()"
            [disabled]="selectedCount === 0"
            title="Export selected rows">
            <i class="bi bi-file-earmark-spreadsheet"></i> Export selected
          </button>
          <button
            class="btn-app ghost btn-sm"
            type="button"
            (click)="copySelectedIds()"
            [disabled]="selectedCount === 0"
            title="Copy selected booking IDs to clipboard">
            <i class="bi bi-clipboard"></i> Copy IDs
          </button>
          <button class="btn-app ghost btn-sm" type="button" (click)="resetFilters()" title="Reset all filters">
            <i class="bi bi-arrow-counterclockwise"></i> Reset
          </button>
        </div>
      </div>
    </div>

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 SKELETON LOADING STATE \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <div class="table-shell skeleton-shell" *ngIf="isLoading">
      <div class="skeleton-table">
        <div class="skeleton-table-header">
          <div class="skeleton-line sm shimmer"></div>
          <div class="skeleton-line md shimmer"></div>
          <div class="skeleton-line lg shimmer"></div>
          <div class="skeleton-line md shimmer"></div>
          <div class="skeleton-line sm shimmer"></div>
          <div class="skeleton-line sm shimmer"></div>
          <div class="skeleton-line sm shimmer"></div>
        </div>
        <div class="skeleton-table-row" *ngFor="let i of [1,2,3,4,5,6,7,8]">
          <div class="skeleton-check shimmer"></div>
          <div class="skeleton-line sm shimmer"></div>
          <div class="skeleton-line lg shimmer"></div>
          <div class="skeleton-line md shimmer"></div>
          <div class="skeleton-line xs shimmer"></div>
          <div class="skeleton-line sm shimmer"></div>
          <div class="skeleton-line md shimmer"></div>
        </div>
      </div>
    </div>

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 EMPTY STATE \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <div class="empty-state surface-card" *ngIf="!isLoading && filteredBookings.length === 0">
      <div class="empty-icon">
        <i class="bi bi-journal-x"></i>
      </div>
      <h3>No Bookings Found</h3>
      <p>No reservations match your current filter and search criteria.</p>
      <button class="btn-app primary" type="button" (click)="resetFilters()">
        <i class="bi bi-arrow-counterclockwise"></i> Reset Filters
      </button>
    </div>

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 MAIN DESKTOP / TABLET TABLE \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <div class="table-shell" *ngIf="!isLoading && filteredBookings.length > 0">
      <div class="table-wrap">
        <table class="booking-table">
          <thead>
            <tr>
              <th class="col-check">
                <input
                  type="checkbox"
                  [checked]="isAllVisibleSelected"
                  (change)="toggleVisibleSelection()"
                  [disabled]="pagedBookings.length === 0"
                  aria-label="Select all visible bookings" />
              </th>
              <th (click)="setSort('bookingDate')" role="button" tabindex="0">
                Booked On <i class="bi" [ngClass]="sortIcon('bookingDate')"></i>
              </th>
              <th (click)="setSort('customerName')" role="button" tabindex="0">
                Customer <i class="bi" [ngClass]="sortIcon('customerName')"></i>
              </th>
              <th (click)="setSort('trekName')" role="button" tabindex="0">
                Trek <i class="bi" [ngClass]="sortIcon('trekName')"></i>
              </th>
              <th (click)="setSort('participants')" role="button" tabindex="0" class="text-center">
                Pax <i class="bi" [ngClass]="sortIcon('participants')"></i>
              </th>
              <th (click)="setSort('amount')" role="button" tabindex="0" class="text-end">
                Amount <i class="bi" [ngClass]="sortIcon('amount')"></i>
              </th>
              <th (click)="setSort('status')" role="button" tabindex="0">
                Status <i class="bi" [ngClass]="sortIcon('status')"></i>
              </th>
              <th (click)="setSort('paymentStatus')" role="button" tabindex="0">
                Payment <i class="bi" [ngClass]="sortIcon('paymentStatus')"></i>
              </th>
              <th class="col-action text-end">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr
              *ngFor="let booking of pagedBookings"
              [class.selected]="selectedBookingIds.has(booking.id)"
              (click)="openDrawer(booking)"
              class="clickable-row">
              <td class="col-check" (click)="$event.stopPropagation()">
                <input
                  type="checkbox"
                  [checked]="selectedBookingIds.has(booking.id)"
                  (change)="toggleBookingSelection(booking.id)"
                  [attr.aria-label]="'Select booking #' + booking.id" />
              </td>
              <td>
                <div class="cell-stack">
                  <strong class="booking-id-tag">#{{ booking.id }}</strong>
                  <span class="text-muted small">{{ formatDate(booking.bookingDate) }}</span>
                </div>
              </td>
              <td>
                <div class="cell-stack">
                  <strong class="customer-name">{{ booking.customerName }}</strong>
                  <span class="text-muted small">{{ booking.email }}</span>
                </div>
              </td>
              <td>
                <div class="cell-stack">
                  <strong class="trek-title">{{ booking.trekName }}</strong>
                  <span class="text-muted small"><i class="bi bi-calendar-event me-1"></i>{{ formatDate(booking.date) }}</span>
                </div>
              </td>
              <td class="text-center">
                <span class="pax-badge">{{ booking.participants }}</span>
              </td>
              <td class="text-end amount-cell">
                <span class="amount-value">\u20B9{{ booking.amount | number:'1.0-0' }}</span>
              </td>
              <td>
                <span class="status-pill" [ngClass]="'status-' + getStatusColor(booking.status)">
                  {{ booking.status | titlecase }}
                </span>
              </td>
              <td>
                <div class="payment-cell">
                  <div class="d-flex align-items-center gap-1">
                    <span class="payment-pill" [ngClass]="'status-' + getPaymentColor(booking.paymentStatus)">
                      <span class="status-pulse-dot" [ngClass]="booking.paymentStatus"></span>
                      {{ (booking.paymentStatus === 'partially_refunded' ? 'Partial Refund' : booking.paymentStatus) | titlecase }}
                    </span>
                    <button
                      *ngIf="booking.paymentStatus === 'pending'"
                      type="button"
                      class="btn-wa-reminder"
                      (click)="sendPaymentLinkWhatsApp(booking, $event)"
                      title="Send Payment Reminder via WhatsApp">
                      <i class="bi bi-whatsapp"></i>
                    </button>
                  </div>

                  <div class="payment-meta-row" *ngIf="booking.paymentMethod || booking.transactionId">
                    <span class="method-tag" *ngIf="booking.paymentMethod">
                      <i class="bi" [ngClass]="getPaymentMethodIcon(booking.paymentMethod)"></i>
                      {{ booking.paymentMethod }}
                    </span>
                    <span
                      *ngIf="booking.transactionId"
                      class="copyable-txn"
                      (click)="copyTxnId(booking.transactionId, $event)"
                      [title]="copiedTxnId === booking.transactionId ? 'Copied to clipboard!' : 'Click to copy Txn ID'">
                      {{ booking.transactionId }}
                      <i class="bi" [ngClass]="copiedTxnId === booking.transactionId ? 'bi-check-all text-success' : 'bi-clipboard'"></i>
                    </span>
                  </div>
                </div>
              </td>
              <td class="col-action text-end" (click)="$event.stopPropagation()">
                <div class="row-actions">
                  <button class="icon-btn subtle" type="button" (click)="openDrawer(booking)" title="View booking details">
                    <i class="bi bi-eye"></i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 MOBILE CARDS VIEW (<= 768px) \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
      <div class="mobile-bookings-grid">
        <div
          class="surface-card mobile-booking-card"
          *ngFor="let booking of pagedBookings"
          [class.selected]="selectedBookingIds.has(booking.id)"
          (click)="openDrawer(booking)">
          <div class="card-head">
            <div class="head-left" (click)="$event.stopPropagation()">
              <input
                type="checkbox"
                [checked]="selectedBookingIds.has(booking.id)"
                (change)="toggleBookingSelection(booking.id)" />
              <span class="booking-id-tag">#{{ booking.id }}</span>
            </div>
            <div class="head-right">
              <span class="status-pill" [ngClass]="'status-' + getStatusColor(booking.status)">
                {{ booking.status | titlecase }}
              </span>
            </div>
          </div>

          <div class="card-body-content">
            <h4 class="trek-name">{{ booking.trekName }}</h4>
            <div class="customer-row">
              <i class="bi bi-person-circle"></i>
              <span>{{ booking.customerName }}</span>
              <span class="dot-sep">&bull;</span>
              <span class="pax-tag">{{ booking.participants }} pax</span>
            </div>
            <div class="date-row">
              <i class="bi bi-calendar-check"></i>
              <span>Trek Date: {{ formatDate(booking.date) }}</span>
            </div>
          </div>

          <div class="card-footer-content">
            <div class="footer-left">
              <span class="payment-pill" [ngClass]="'status-' + getPaymentColor(booking.paymentStatus)">
                <span class="status-pulse-dot" [ngClass]="booking.paymentStatus"></span>
                {{ (booking.paymentStatus === 'partially_refunded' ? 'Partial Refund' : booking.paymentStatus) | titlecase }}
              </span>
              <button
                *ngIf="booking.paymentStatus === 'pending'"
                type="button"
                class="btn-wa-reminder"
                (click)="sendPaymentLinkWhatsApp(booking, $event)"
                title="Send Payment Link via WhatsApp">
                <i class="bi bi-whatsapp"></i>
              </button>
            </div>
            <div class="footer-right">
              <span class="mobile-amount">\u20B9{{ booking.amount | number:'1.0-0' }}</span>
              <button class="icon-btn subtle" type="button" (click)="$event.stopPropagation(); openDrawer(booking)">
                <i class="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 PAGINATION CONTROLS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <div class="pagination-shell" *ngIf="!isLoading && filteredBookings.length > 0">
      <div class="pagination-inner">
        <div class="pagination-info">
          Showing <strong>{{ (currentPage - 1) * Number(pageSize) + 1 }}</strong> to
          <strong>{{ Math.min(currentPage * Number(pageSize), filteredBookings.length) }}</strong> of
          <strong>{{ filteredBookings.length }}</strong> bookings
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
    </div>
  </app-admin-shell>
</div>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
     Booking Detail Drawer (Responsive Slide / Bottom Sheet)
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<div class="drawer-overlay" [class.open]="isDrawerOpen" (click)="closeDrawer()"></div>

<aside class="detail-drawer" [class.open]="isDrawerOpen" *ngIf="selectedBooking">
  <div class="drawer-header">
    <div class="drawer-title-group">
      <span class="drawer-label">Booking Reference</span>
      <h2 class="drawer-title">#{{ selectedBooking.id }}</h2>
    </div>
    <button class="drawer-close" type="button" (click)="closeDrawer()" aria-label="Close details">
      <i class="bi bi-x-lg"></i>
    </button>
  </div>

  <div class="drawer-body">
    <!-- Status Row -->
    <div class="drawer-status-row">
      <span class="status-pill" [ngClass]="'status-' + getStatusColor(selectedBooking.status)">
        {{ selectedBooking.status | titlecase }}
      </span>
      <span class="payment-pill" [ngClass]="'status-' + getPaymentColor(selectedBooking.paymentStatus)">
        <span class="status-pulse-dot" [ngClass]="selectedBooking.paymentStatus"></span>
        {{ selectedBooking.paymentStatus | titlecase }}
      </span>
    </div>

    <!-- Customer Info -->
    <div class="drawer-section">
      <h4 class="drawer-section-title">
        <i class="bi bi-person-circle"></i> Customer Information
      </h4>
      <div class="drawer-info-grid">
        <div class="dinfo">
          <span class="dinfo-label">Name</span>
          <span class="dinfo-value">{{ selectedBooking.customerName }}</span>
        </div>
        <div class="dinfo">
          <span class="dinfo-label">Email</span>
          <span class="dinfo-value mono-val">{{ selectedBooking.email }}</span>
        </div>
        <div class="dinfo">
          <span class="dinfo-label">Phone</span>
          <span class="dinfo-value">{{ selectedBooking.phone || '\u2014' }}</span>
        </div>
      </div>
    </div>

    <!-- Trek Info -->
    <div class="drawer-section">
      <h4 class="drawer-section-title">
        <i class="bi bi-compass"></i> Trek Expedition Details
      </h4>
      <div class="drawer-info-grid">
        <div class="dinfo full-width">
          <span class="dinfo-label">Trek Name</span>
          <span class="dinfo-value font-weight-bold">{{ selectedBooking.trekName }}</span>
        </div>
        <div class="dinfo">
          <span class="dinfo-label">Expedition Date</span>
          <span class="dinfo-value highlight-val">{{ formatDate(selectedBooking.date) }}</span>
        </div>
        <div class="dinfo">
          <span class="dinfo-label">Trekkers (Pax)</span>
          <span class="dinfo-value">{{ selectedBooking.participants }} Participant(s)</span>
        </div>
        <div class="dinfo">
          <span class="dinfo-label">Booked On</span>
          <span class="dinfo-value">{{ formatDate(selectedBooking.bookingDate) }}</span>
        </div>
      </div>
    </div>

    <!-- Payment & Financials Info -->
    <div class="drawer-section">
      <div class="d-flex justify-content-between align-items-center mb-2">
        <h4 class="drawer-section-title mb-0">
          <i class="bi bi-credit-card-2-front-fill text-success"></i> Payment & Financial Ledger
        </h4>
        <div class="drawer-section-actions">
          <button class="btn-app ghost btn-xs" type="button" (click)="openPaymentEditModal(selectedBooking)" title="Update payment details">
            <i class="bi bi-pencil-square"></i> Edit
          </button>
          <button
            class="btn-app danger-ghost btn-xs ms-1"
            type="button"
            *ngIf="selectedBooking.paymentStatus !== 'refunded'"
            (click)="openRefundModal(selectedBooking)"
            title="Issue policy-based refund">
            <i class="bi bi-arrow-counterclockwise"></i> Refund
          </button>
        </div>
      </div>

      <!-- Itemized Fare Breakdown Box -->
      <div class="fare-breakdown-card mb-3">
        <div class="fare-row">
          <span class="fare-label"><i class="bi bi-tree"></i> Base Trek Package (x{{ selectedBooking.participants }})</span>
          <span class="fare-val">\u20B9{{ getFareBreakdown(selectedBooking.amount).baseFare | number:'1.0-0' }}</span>
        </div>
        <div class="fare-row" *ngIf="getFareBreakdown(selectedBooking.amount).permitFee > 0">
          <span class="fare-label"><i class="bi bi-shield-check"></i> Forest Dept Eco-Permits</span>
          <span class="fare-val">\u20B9{{ getFareBreakdown(selectedBooking.amount).permitFee | number:'1.0-0' }}</span>
        </div>
        <div class="fare-row">
          <span class="fare-label"><i class="bi bi-receipt"></i> GST @ 5% (SAC 998555)</span>
          <span class="fare-val">\u20B9{{ getFareBreakdown(selectedBooking.amount).gst5 | number:'1.0-0' }}</span>
        </div>
        <div class="fare-divider"></div>
        <div class="fare-row total-row">
          <span class="fare-label">Net Booking Total</span>
          <span class="fare-val highlight">\u20B9{{ selectedBooking.amount | number:'1.0-0' }}</span>
        </div>
      </div>

      <div class="drawer-info-grid">
        <div class="dinfo">
          <span class="dinfo-label">Payment Method</span>
          <span class="dinfo-value">
            <i class="bi" [ngClass]="getPaymentMethodIcon(selectedBooking.paymentMethod)"></i>
            {{ selectedBooking.paymentMethod || 'Online Gateway' }}
          </span>
        </div>
        <div class="dinfo">
          <span class="dinfo-label">Payment Status</span>
          <span class="dinfo-value">
            <span class="payment-pill" [ngClass]="'status-' + getPaymentColor(selectedBooking.paymentStatus)">
              <span class="status-pulse-dot" [ngClass]="selectedBooking.paymentStatus"></span>
              {{ selectedBooking.paymentStatus | titlecase }}
            </span>
          </span>
        </div>
        <div class="dinfo full-width" *ngIf="selectedBooking.transactionId">
          <span class="dinfo-label">Transaction / UTR ID</span>
          <span class="dinfo-value mono copyable-txn" (click)="copyTxnId(selectedBooking.transactionId, $event)" title="Click to copy">
            {{ selectedBooking.transactionId }}
            <i class="bi" [ngClass]="copiedTxnId === selectedBooking.transactionId ? 'bi-check-all text-success' : 'bi-clipboard'"></i>
          </span>
        </div>
        <div class="dinfo full-width" *ngIf="selectedBooking.phone">
          <span class="dinfo-label">Payment Reminder</span>
          <span class="dinfo-value">
            <button class="btn-app ghost btn-xs text-success" type="button" (click)="sendPaymentLinkWhatsApp(selectedBooking, $event)">
              <i class="bi bi-whatsapp"></i> Send link via WhatsApp
            </button>
          </span>
        </div>
      </div>
    </div>
  </div>

  <div class="drawer-footer">
    <div class="footer-btn-grid">
      <button class="btn-app primary btn-sm" type="button" (click)="openPassModal(selectedBooking)">
        <i class="bi bi-file-earmark-text"></i> Invoice &amp; Pass
      </button>
      <button class="btn-app secondary btn-sm" type="button" (click)="openManifestModal(selectedBooking)">
        <i class="bi bi-file-earmark-person-fill"></i> Manifest
      </button>
      <button
        class="btn-app danger btn-sm"
        type="button"
        *ngIf="selectedBooking.paymentStatus !== 'refunded'"
        (click)="openRefundModal(selectedBooking)">
        <i class="bi bi-arrow-counterclockwise"></i> Refund
      </button>
      <button class="btn-app ghost btn-sm" type="button" (click)="closeDrawer()">Close</button>
    </div>
  </div>
</aside>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
     Interactive Refund Processing Modal (Cancellation Policy Engine)
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<ion-modal [isOpen]="showRefundModal" (didDismiss)="closeRefundModal()" cssClass="refund-modal">
  <ng-template>
    <ion-header>
      <ion-toolbar color="light">
        <ion-title>
          <i class="bi bi-arrow-counterclockwise text-danger me-1"></i>
          Cancellation Policy &amp; Refund Engine
        </ion-title>
        <ion-buttons slot="end">
          <ion-button (click)="closeRefundModal()">
            <i class="bi bi-x-lg"></i>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <div class="modal-form-content" *ngIf="refundBooking">
      <div class="refund-container">
        <!-- Booking Overview Card -->
        <div class="refund-summary-card">
          <div class="summary-top">
            <div>
              <span class="ref-label">Booking Reference</span>
              <h3 class="ref-id">#{{ refundBooking.id }}</h3>
              <p class="ref-sub">
                <i class="bi bi-person-fill text-muted"></i> {{ refundBooking.customerName }} &bull;
                <i class="bi bi-compass text-muted"></i> {{ refundBooking.trekName }}
              </p>
              <div class="ref-countdown-badge">
                <i class="bi bi-calendar-event"></i>
                <span>Trek Date: {{ formatDate(refundBooking.date) }} ({{ getDaysUntilTrek(refundBooking) }} days to departure)</span>
              </div>
            </div>
            <div class="text-end">
              <span class="ref-label">Gross Value</span>
              <h2 class="ref-amount">\u20B9{{ refundBooking.amount | number:'1.0-0' }}</h2>
              <span class="badge bg-light text-dark">{{ refundBooking.paymentMethod || 'Online Payment' }}</span>
            </div>
          </div>
        </div>

        <!-- 3-Tier Policy Selection Cards -->
        <div class="policy-tier-section mb-3">
          <label class="form-label font-weight-bold">Select Cancellation / Refund Policy Tier</label>
          <div class="policy-tier-cards">
            <!-- Tier 1: Standard Policy -->
            <div
              class="tier-card"
              [class.active]="refundPolicyMode === 'policy'"
              (click)="applyPolicyMode('policy')">
              <div class="tier-card-header">
                <span class="tier-badge policy">Standard Policy</span>
                <span class="tier-pct">{{ getPolicyRefundPercentage(refundBooking) }}% Refund</span>
              </div>
              <p class="tier-desc">
                Auto-calculated for {{ getDaysUntilTrek(refundBooking) }} days before trek:
                <strong *ngIf="getDaysUntilTrek(refundBooking) >= 15">90% refund (10% permit retention)</strong>
                <strong *ngIf="getDaysUntilTrek(refundBooking) >= 7 && getDaysUntilTrek(refundBooking) < 15">50% refund</strong>
                <strong *ngIf="getDaysUntilTrek(refundBooking) < 7">0% refund (&lt;7 days)</strong>
              </p>
            </div>

            <!-- Tier 2: 100% Full Admin Waiver -->
            <div
              class="tier-card"
              [class.active]="refundPolicyMode === 'full'"
              (click)="applyPolicyMode('full')">
              <div class="tier-card-header">
                <span class="tier-badge full">100% Full Waiver</span>
                <span class="tier-pct">100% Refund</span>
              </div>
              <p class="tier-desc">Special admin override: Weather alert, Forest dept closure, or trip cancelled by org.</p>
            </div>

            <!-- Tier 3: Custom Partial -->
            <div
              class="tier-card"
              [class.active]="refundPolicyMode === 'custom'"
              (click)="applyPolicyMode('custom')">
              <div class="tier-card-header">
                <span class="tier-badge custom">Custom Amount</span>
                <span class="tier-pct">Manual</span>
              </div>
              <p class="tier-desc">Specify an arbitrary settlement or compensation amount with custom reason.</p>
            </div>
          </div>
        </div>

        <!-- Live Financial Settlement Breakdown Box -->
        <div class="settlement-breakdown-box mb-3">
          <h5 class="breakdown-title"><i class="bi bi-calculator-fill text-accent"></i> Financial Settlement Summary</h5>
          <div class="breakdown-row">
            <span>Gross Booking Amount</span>
            <strong>\u20B9{{ refundBooking.amount | number:'1.0-0' }}</strong>
          </div>
          <div class="breakdown-row text-danger">
            <span>Less: Cancellation Charges / Retained Fee</span>
            <strong>-\u20B9{{ refundForm.deduction | number:'1.0-0' }}</strong>
          </div>
          <div class="breakdown-divider"></div>
          <div class="breakdown-row net-payout">
            <span>Net Customer Refund Payout</span>
            <span class="payout-amount">\u20B9{{ refundForm.amount | number:'1.0-0' }}</span>
          </div>
        </div>

        <!-- Refund Form -->
        <form (ngSubmit)="submitRefund()" class="refund-form">
          <div class="form-group mb-3" *ngIf="refundPolicyMode === 'custom'">
            <label class="form-label font-weight-bold">Custom Refund Amount (\u20B9)</label>
            <div class="input-prefix-wrapper">
              <span class="prefix">\u20B9</span>
              <input
                type="number"
                class="form-control amount-input"
                name="amount"
                [(ngModel)]="refundForm.amount"
                (ngModelChange)="onCustomAmountChange()"
                [max]="refundBooking.amount"
                min="1"
                required
              />
            </div>
            <small class="text-muted">Maximum allowable refund: \u20B9{{ refundBooking.amount }}</small>
          </div>

          <div class="row g-2 mb-3">
            <div class="col-md-6">
              <label class="form-label font-weight-bold">Reason for Cancellation</label>
              <select class="form-select" name="reason" [(ngModel)]="refundForm.reason">
                <option *ngFor="let opt of refundReasonOptions" [value]="opt">{{ opt }}</option>
              </select>
            </div>
            <div class="col-md-6">
              <label class="form-label font-weight-bold">Refund Destination Channel</label>
              <select class="form-select" name="refundMethod" [(ngModel)]="refundForm.refundMethod">
                <option *ngFor="let opt of refundMethodOptions" [value]="opt">{{ opt }}</option>
              </select>
            </div>
          </div>

          <div class="form-group mb-3">
            <div class="d-flex justify-content-between align-items-center mb-1">
              <label class="form-label font-weight-bold mb-0">Refund Reference / Transaction ID</label>
              <button type="button" class="btn btn-link btn-xs text-decoration-none p-0" (click)="generateRefundRef()">
                <i class="bi bi-arrow-repeat"></i> Regenerate Ref
              </button>
            </div>
            <input
              type="text"
              class="form-control mono"
              name="refundTxnId"
              [(ngModel)]="refundForm.refundTxnId"
              placeholder="e.g. REF-GWK-891023-492"
              required
            />
          </div>

          <div class="form-group mb-4">
            <label class="form-label font-weight-bold">Ops &amp; Audit Log Note</label>
            <textarea
              class="form-control"
              name="note"
              rows="2"
              [(ngModel)]="refundForm.note"
              placeholder="Internal record / customer communication notes..."
            ></textarea>
          </div>

          <div class="modal-form-actions">
            <button
              type="button"
              class="btn-app ghost"
              (click)="closeRefundModal()"
              [disabled]="isProcessingRefund">
              Cancel
            </button>
            <button
              type="submit"
              class="btn-app danger"
              [disabled]="isProcessingRefund || refundForm.amount <= 0">
              <i class="bi bi-arrow-counterclockwise me-1" [class.spin]="isProcessingRefund"></i>
              {{ isProcessingRefund ? 'Processing Refund...' : 'Authorize & Issue Refund (\u20B9' + (refundForm.amount | number:'1.0-0') + ')' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </ng-template>
</ion-modal>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
     Update Payment Details Modal (Professional Enterprise)
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<ion-modal [isOpen]="showPaymentEditModal" (didDismiss)="closePaymentEditModal()" cssClass="payment-edit-modal">
  <ng-template>
    <ion-header>
      <ion-toolbar color="light">
        <ion-title>
          <i class="bi bi-credit-card-2-front text-success me-1"></i>
          Record &amp; Reconcile Payment
        </ion-title>
        <ion-buttons slot="end">
          <ion-button (click)="closePaymentEditModal()">
            <i class="bi bi-x-lg"></i>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <div class="modal-form-content" *ngIf="paymentEditBooking">
      <div class="refund-container">
        <div class="refund-summary-card">
          <div class="summary-top">
            <div>
              <span class="ref-label">Booking</span>
              <h3 class="ref-id">#{{ paymentEditBooking.id }}</h3>
              <p class="ref-sub">{{ paymentEditBooking.customerName }} &bull; {{ paymentEditBooking.trekName }}</p>
            </div>
            <div class="text-end">
              <span class="ref-label">Booking Value</span>
              <h2 class="ref-amount">\u20B9{{ paymentEditBooking.amount | number:'1.0-0' }}</h2>
            </div>
          </div>
        </div>

        <form (ngSubmit)="submitPaymentUpdate()" class="refund-form">
          <div class="form-group mb-3">
            <label class="form-label font-weight-bold">Payment Status</label>
            <select class="form-select" name="paymentStatus" [(ngModel)]="paymentEditForm.paymentStatus">
              <ng-container *ngFor="let p of paymentStatusOptions">
                <option *ngIf="p.value !== 'all'" [value]="p.value">{{ p.label }}</option>
              </ng-container>
            </select>
          </div>

          <div class="form-group mb-3">
            <label class="form-label font-weight-bold">Payment Method</label>
            <select class="form-select" name="paymentMethod" [(ngModel)]="paymentEditForm.paymentMethod">
              <option *ngFor="let m of supportedPaymentMethods" [value]="m">{{ m }}</option>
            </select>
          </div>

          <div class="form-group mb-3">
            <div class="d-flex justify-content-between align-items-center mb-1">
              <label class="form-label font-weight-bold mb-0">Transaction / UTR / Order Reference ID</label>
              <button type="button" class="btn btn-link btn-xs text-decoration-none p-0" (click)="generateMockUtr()">
                <i class="bi bi-magic"></i> Auto-Generate UTR
              </button>
            </div>
            <input
              type="text"
              class="form-control mono"
              name="transactionId"
              [(ngModel)]="paymentEditForm.transactionId"
              placeholder="e.g. UPI/529104829104 or pay_Qx91kd82j"
              required
            />
          </div>

          <div class="form-group mb-4">
            <label class="form-label font-weight-bold">Settled / Collected Amount (\u20B9)</label>
            <div class="input-prefix-wrapper">
              <span class="prefix">\u20B9</span>
              <input
                type="number"
                class="form-control amount-input"
                name="amount"
                [(ngModel)]="paymentEditForm.amount"
                min="0"
                required
              />
            </div>
          </div>

          <div class="modal-form-actions">
            <button
              type="button"
              class="btn-app ghost"
              (click)="closePaymentEditModal()"
              [disabled]="isUpdatingPayment">
              Cancel
            </button>
            <button
              type="submit"
              class="btn-app primary"
              [disabled]="isUpdatingPayment">
              <i class="bi bi-check-circle me-1" [class.spin]="isUpdatingPayment"></i>
              {{ isUpdatingPayment ? 'Reconciling...' : 'Save & Reconcile Payment' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </ng-template>
</ion-modal>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
     Printable Trek Pass & Tax Invoice Modal
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<ion-modal [isOpen]="showPassModal" (didDismiss)="closePassModal()" cssClass="invoice-modal">
  <ng-template>
    <ion-header class="no-print">
      <ion-toolbar>
        <ion-title>Customer Trek Pass &amp; Tax Invoice</ion-title>
        <ion-buttons slot="end">
          <ion-button (click)="printPass()" color="primary">
            <i class="bi bi-printer-fill me-1"></i> Print / PDF
          </ion-button>
          <ion-button (click)="closePassModal()">
            <i class="bi bi-x-lg"></i>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <div class="invoice-content" *ngIf="passBooking">
      <div class="invoice-document" id="printable-invoice">
        <!-- Pass Header -->
        <div class="inv-header">
          <div class="inv-brand">
            <img src="/assets/assets/logo.png" alt="goWILD Karunadu" class="inv-logo" />
            <div>
              <h1 class="inv-title">goWILD\u2122 Karunadu</h1>
              <p class="inv-tagline">Eco-Treks &amp; Wilderness Expeditions Karnataka</p>
              <small class="inv-gst">GSTIN: 29AAACG0123M1Z8 | Forest Dept Reg: KA-ECO-2024-884</small>
            </div>
          </div>
          <div class="inv-pass-badge">
            <span class="pass-tag">OFFICIAL TREK PASS</span>
            <div class="pass-number">PASS #GWK-{{ passBooking.id.slice(-6).toUpperCase() }}</div>
            <span class="pass-status" [ngClass]="'status-' + getStatusColor(passBooking.status)">
              {{ passBooking.status | uppercase }}
            </span>
          </div>
        </div>

        <hr class="inv-divider" />

        <!-- Key Meta Grid -->
        <div class="inv-meta-grid">
          <div class="inv-meta-item">
            <span class="meta-label">Booking Reference</span>
            <span class="meta-val mono">#{{ passBooking.id }}</span>
          </div>
          <div class="inv-meta-item">
            <span class="meta-label">Trek Expedition Date</span>
            <span class="meta-val highlight">{{ formatDate(passBooking.date) }}</span>
          </div>
          <div class="inv-meta-item">
            <span class="meta-label">Reporting Time &amp; Basecamp</span>
            <span class="meta-val">06:00 AM \u2022 Designated Basecamp</span>
          </div>
          <div class="inv-meta-item">
            <span class="meta-label">Booking Issue Date</span>
            <span class="meta-val">{{ formatDate(passBooking.bookingDate) }}</span>
          </div>
        </div>

        <!-- Trek & Lead Participant Details -->
        <div class="inv-two-col">
          <div class="inv-box">
            <h3 class="inv-box-title"><i class="bi bi-map-fill"></i> Trek Expedition Details</h3>
            <div class="inv-row">
              <span class="label">Expedition:</span>
              <span class="val bold">{{ passBooking.trekName }}</span>
            </div>
            <div class="inv-row">
              <span class="label">Total Trekkers:</span>
              <span class="val bold">{{ passBooking.participants }} Participant(s)</span>
            </div>
            <div class="inv-row">
              <span class="label">Safety Desk / Helpline:</span>
              <span class="val">+91 94800 12345 (24/7 Operations)</span>
            </div>
          </div>

          <div class="inv-box">
            <h3 class="inv-box-title"><i class="bi bi-person-badge-fill"></i> Primary Booker Details</h3>
            <div class="inv-row">
              <span class="label">Lead Booker:</span>
              <span class="val bold">{{ passBooking.customerName }}</span>
            </div>
            <div class="inv-row">
              <span class="label">Contact Email:</span>
              <span class="val">{{ passBooking.email }}</span>
            </div>
            <div class="inv-row">
              <span class="label">Contact Phone:</span>
              <span class="val">{{ passBooking.phone || 'N/A' }}</span>
            </div>
          </div>
        </div>

        <!-- Invoice Breakdown Table -->
        <div class="inv-table-section">
          <h3 class="inv-box-title"><i class="bi bi-receipt"></i> Tax Invoice &amp; Fare Breakdown</h3>
          <table class="inv-table">
            <thead>
              <tr>
                <th>Description</th>
                <th class="text-center">Qty</th>
                <th class="text-end">Unit Price (\u20B9)</th>
                <th class="text-end">Total (\u20B9)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>{{ passBooking.trekName }} \u2014 Guided Trek Package</strong>
                  <div class="small-sub">Forest entry permit, certified wilderness guide, safety gear &amp; meals</div>
                </td>
                <td class="text-center">{{ passBooking.participants }}</td>
                <td class="text-end">{{ (passBooking.amount / (passBooking.participants || 1)) | number:'1.2-2' }}</td>
                <td class="text-end">{{ passBooking.amount | number:'1.2-2' }}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3" class="text-end bold">Subtotal (Inclusive of Permits &amp; Taxes)</td>
                <td class="text-end bold">\u20B9{{ passBooking.amount | number:'1.2-2' }}</td>
              </tr>
              <tr class="inv-total-row">
                <td colspan="3" class="text-end">
                  <strong>Total Amount Paid</strong>
                  <div class="small-sub">Payment Method: {{ passBooking.paymentMethod || 'Online / Gateway' }} (Status: {{ passBooking.paymentStatus | uppercase }})</div>
                  <div *ngIf="passBooking.paymentStatus === 'refunded'" class="refund-stamp text-danger">
                    <i class="bi bi-arrow-counterclockwise"></i> TRANSACTION FULLY REFUNDED TO CUSTOMER
                  </div>
                  <div *ngIf="passBooking.paymentStatus === 'partially_refunded'" class="refund-stamp text-warning">
                    <i class="bi bi-arrow-counterclockwise"></i> PARTIALLY REFUNDED
                  </div>
                </td>
                <td class="text-end total-amount">
                  <span [class.strikethrough]="passBooking.paymentStatus === 'refunded'">
                    \u20B9{{ passBooking.amount | number:'1.2-2' }}
                  </span>
                  <div *ngIf="passBooking.paymentStatus === 'refunded'" class="text-danger small-sub">\u20B90.00 (Refunded)</div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        <!-- Guidelines & Verification Foot -->
        <div class="inv-footer-section">
          <div class="inv-guidelines">
            <h4><i class="bi bi-shield-check"></i> Important Expedition Guidelines</h4>
            <ul>
              <li>Carry a valid Govt. Photo ID (Aadhaar / Driving License / Voter ID) for forest checkpoint verification.</li>
              <li>Strictly Zero-Litter Zone: All plastic wrappers and bottles must be packed back in personal backpacks.</li>
              <li>Consumption of alcohol or smoking is strictly prohibited during the trek.</li>
            </ul>
          </div>
          <div class="inv-qr-badge">
            <div class="qr-box">
              <i class="bi bi-qr-code"></i>
              <span>SCAN AT BASECAMP</span>
            </div>
            <small class="stamp">VERIFIED BY GOWILD OPS</small>
          </div>
        </div>
      </div>
    </div>
  </ng-template>
</ion-modal>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
     Forest Department Entry Manifest & Medical Roster Modal
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<ion-modal [isOpen]="showManifestModal" (didDismiss)="closeManifestModal()" cssClass="manifest-modal">
  <ng-template>
    <ion-header class="no-print">
      <ion-toolbar color="light">
        <ion-title>
          <i class="bi bi-file-earmark-person-fill text-success me-1"></i>
          Forest Dept Entry Manifest &amp; Medical Roster
        </ion-title>
        <ion-buttons slot="end">
          <ion-button (click)="printManifest()" color="primary">
            <i class="bi bi-printer-fill me-1"></i> Print Official Manifest
          </ion-button>
          <ion-button (click)="closeManifestModal()">
            <i class="bi bi-x-lg"></i>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <div class="modal-form-content" *ngIf="manifestBooking">
      <div class="manifest-container" id="printable-manifest">
        <!-- Official Government Header -->
        <div class="manifest-gov-header">
          <div class="gov-title-group">
            <h2 class="gov-title">KARNATAKA FOREST DEPARTMENT &bull; ECO-TOURISM EXPEDITION MANIFEST</h2>
            <p class="gov-sub">Official Permitted Trekker Verification &amp; Medical Declaration Form (Reg: KA-ECO-2024-884)</p>
          </div>
          <div class="manifest-meta-badge">
            <div class="meta-line"><strong>Booking:</strong> #{{ manifestBooking.id }}</div>
            <div class="meta-line"><strong>Expedition:</strong> {{ manifestBooking.trekName }}</div>
            <div class="meta-line"><strong>Date:</strong> {{ formatDate(manifestBooking.date) }}</div>
            <div class="meta-line"><strong>Total Trekkers:</strong> {{ participantsList.length }} Permitted</div>
          </div>
        </div>

        <!-- Action bar -->
        <div class="d-flex justify-content-between align-items-center mb-3 no-print">
          <span class="text-muted small">All dropdown choices are loaded dynamically from the backend registry.</span>
          <button type="button" class="btn-app ghost btn-xs" (click)="addParticipantRow()">
            <i class="bi bi-plus-circle me-1"></i> Add Co-Trekker
          </button>
        </div>

        <!-- Participants Table Editor -->
        <div class="table-responsive manifest-table-wrap mb-4">
          <table class="table table-bordered manifest-table align-middle">
            <thead class="table-light">
              <tr>
                <th style="width: 40px;">#</th>
                <th style="min-width: 160px;">Full Name (As on Govt ID)</th>
                <th style="width: 70px;">Age</th>
                <th style="width: 100px;">Gender</th>
                <th style="min-width: 140px;">Govt ID Type</th>
                <th style="min-width: 130px;">ID Number</th>
                <th style="width: 90px;">Blood Group</th>
                <th style="min-width: 170px;">Medical Declarations</th>
                <th style="min-width: 130px;">Emergency Phone</th>
                <th style="min-width: 120px;">Diet</th>
                <th style="width: 50px;" class="no-print">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let p of participantsList; let i = index">
                <td class="text-center font-weight-bold">{{ i + 1 }}</td>
                <td>
                  <input type="text" class="form-control form-control-sm" [(ngModel)]="p.fullName" placeholder="Full legal name" required />
                </td>
                <td>
                  <input type="number" class="form-control form-control-sm" [(ngModel)]="p.age" min="10" max="80" />
                </td>
                <td>
                  <select class="form-select form-select-sm" [(ngModel)]="p.gender">
                    <option *ngFor="let g of genderOptions" [value]="g">{{ g }}</option>
                  </select>
                </td>
                <td>
                  <select class="form-select form-select-sm" [(ngModel)]="p.govtIdType">
                    <option *ngFor="let opt of govtIdTypeOptions" [value]="opt">{{ opt }}</option>
                  </select>
                </td>
                <td>
                  <input type="text" class="form-control form-control-sm mono" [(ngModel)]="p.govtIdNumber" placeholder="XXXX-XXXX-XXXX" />
                </td>
                <td>
                  <select class="form-select form-select-sm" [(ngModel)]="p.bloodGroup">
                    <option *ngFor="let opt of bloodGroupOptions" [value]="opt">{{ opt }}</option>
                  </select>
                </td>
                <td>
                  <select class="form-select form-select-sm" [(ngModel)]="p.medicalConditions" [class.text-danger]="p.medicalConditions && !p.medicalConditions.includes('Fit to Trek')">
                    <option *ngFor="let opt of medicalConditionOptions" [value]="opt">{{ opt }}</option>
                  </select>
                </td>
                <td>
                  <input type="text" class="form-control form-control-sm" [(ngModel)]="p.emergencyContactPhone" placeholder="+91 9XXXX XXXXX" />
                </td>
                <td>
                  <select class="form-select form-select-sm" [(ngModel)]="p.dietaryPreference">
                    <option *ngFor="let opt of dietaryOptions" [value]="opt">{{ opt }}</option>
                  </select>
                </td>
                <td class="no-print text-center">
                  <button type="button" class="btn btn-sm btn-outline-danger p-1" (click)="removeParticipantRow(i)" [disabled]="participantsList.length <= 1" title="Remove">
                    <i class="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Official Sign-off & Verification Block (Printed on paper) -->
        <div class="manifest-signoff-grid">
          <div class="signoff-box">
            <p class="sign-role">Certified Wilderness Guide / Trek Lead</p>
            <div class="sign-line"></div>
            <small>Name: ______________________ &bull; Sign &amp; Date</small>
          </div>
          <div class="signoff-box">
            <p class="sign-role">Forest Department Checkpost Officer / Ranger</p>
            <div class="sign-line"></div>
            <small>Checkpoint: ___________________ &bull; Official Seal</small>
          </div>
        </div>

        <!-- Actions -->
        <div class="modal-form-actions no-print mt-3">
          <button type="button" class="btn-app ghost" (click)="closeManifestModal()" [disabled]="isSavingParticipants">
            Cancel
          </button>
          <button type="button" class="btn-app primary" (click)="saveManifest()" [disabled]="isSavingParticipants">
            <i class="bi bi-check-circle me-1" [class.spin]="isSavingParticipants"></i>
            {{ isSavingParticipants ? 'Saving Manifest...' : 'Save & Sync Manifest' }}
          </button>
        </div>
      </div>
    </div>
  </ng-template>
</ion-modal>
`, styles: ['@charset "UTF-8";\n\n/* src/app/bookings/bookings.component.scss */\n:host {\n  display: block;\n}\n.bookings-page {\n  --background: transparent;\n}\n@keyframes shimmer {\n  0% {\n    background-position: -400px 0;\n  }\n  100% {\n    background-position: 400px 0;\n  }\n}\n.shimmer {\n  background:\n    linear-gradient(\n      90deg,\n      rgba(0, 0, 0, 0.04) 25%,\n      rgba(0, 0, 0, 0.09) 50%,\n      rgba(0, 0, 0, 0.04) 75%);\n  background-size: 800px 100%;\n  animation: shimmer 1.5s infinite linear;\n  border-radius: 6px;\n}\n.skeleton-shell {\n  padding: 16px;\n  background: #fff;\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: var(--app-radius, 12px);\n  margin-bottom: 24px;\n}\n.skeleton-table {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.skeleton-table-header,\n.skeleton-table-row {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 10px 12px;\n}\n.skeleton-table-header {\n  border-bottom: 1px solid var(--app-border, #e5e7eb);\n}\n.skeleton-check {\n  width: 18px;\n  height: 18px;\n  border-radius: 4px;\n  flex-shrink: 0;\n}\n.skeleton-line {\n  height: 14px;\n  border-radius: 4px;\n}\n.skeleton-line.xs {\n  width: 32px;\n}\n.skeleton-line.sm {\n  width: 64px;\n}\n.skeleton-line.md {\n  width: 120px;\n}\n.skeleton-line.lg {\n  width: 180px;\n}\n.filters-card {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 12px;\n  background: #fff;\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: var(--app-radius, 14px);\n  padding: 12px 16px;\n  margin: 20px 0;\n  box-shadow: var(--app-shadow-soft, 0 2px 8px rgba(0, 0, 0, 0.04));\n}\n.filter-search {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: var(--app-surface, #f9fafb);\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: 10px;\n  padding: 8px 12px;\n  flex: 1 1 240px;\n  min-width: 220px;\n  transition: border-color 0.15s ease, box-shadow 0.15s ease;\n}\n.filter-search:focus-within {\n  border-color: var(--app-accent, #1d7a6d);\n  box-shadow: 0 0 0 3px rgba(29, 122, 109, 0.12);\n  background: #fff;\n}\n.filter-search .search-icon {\n  color: var(--app-ink-muted, #6b7280);\n  font-size: 0.95rem;\n  flex-shrink: 0;\n}\n.filter-search input {\n  border: none;\n  outline: none;\n  flex: 1;\n  background: transparent;\n  font-size: 0.88rem;\n  color: var(--app-ink, #111827);\n}\n.filter-search input::placeholder {\n  color: var(--app-ink-muted, #9ca3af);\n}\n.filter-search .clear-search-btn {\n  background: transparent;\n  border: none;\n  color: var(--app-ink-muted, #9ca3af);\n  padding: 0;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n}\n.filter-search .clear-search-btn:hover {\n  color: var(--app-ink, #111827);\n}\n.filter-select-group {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.select-wrapper {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.select-wrapper select {\n  appearance: none;\n  -webkit-appearance: none;\n  background: var(--app-surface, #f9fafb);\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: 10px;\n  padding: 8px 32px 8px 12px;\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: var(--app-ink, #111827);\n  cursor: pointer;\n  outline: none;\n  min-width: 140px;\n  transition: all 0.15s ease;\n}\n.select-wrapper select:hover {\n  border-color: #cbd5e1;\n}\n.select-wrapper select:focus {\n  border-color: var(--app-accent, #1d7a6d);\n  box-shadow: 0 0 0 3px rgba(29, 122, 109, 0.12);\n  background: #fff;\n}\n.select-wrapper .select-arrow {\n  position: absolute;\n  right: 10px;\n  pointer-events: none;\n  color: var(--app-ink-muted, #6b7280);\n  font-size: 0.75rem;\n}\n.date-range-box {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n  margin-left: auto;\n}\n.date-input-wrap {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: var(--app-surface, #f9fafb);\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: 10px;\n  padding: 6px 10px;\n}\n.date-input-wrap i {\n  color: var(--app-accent, #1d7a6d);\n  font-size: 0.9rem;\n  flex-shrink: 0;\n}\n.date-input-wrap input[type=date] {\n  border: none;\n  padding: 0;\n  font-size: 0.82rem;\n  color: var(--app-ink, #111827);\n  background: transparent;\n  outline: none;\n  cursor: pointer;\n  font-family: inherit;\n}\n.date-input-wrap .date-arrow {\n  color: var(--app-ink-muted, #9ca3af);\n  font-size: 0.85rem;\n}\n.date-input-wrap .clear-date-btn {\n  background: transparent;\n  border: none;\n  padding: 0;\n  color: var(--app-ink-muted, #9ca3af);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  font-size: 0.9rem;\n}\n.date-input-wrap .clear-date-btn:hover {\n  color: #ef4444;\n}\n.date-presets {\n  display: flex;\n  gap: 4px;\n  align-items: center;\n}\n.preset-chip {\n  background: rgba(29, 122, 109, 0.06);\n  border: 1px solid rgba(29, 122, 109, 0.15);\n  color: var(--app-ink, #374151);\n  font-size: 0.72rem;\n  font-weight: 600;\n  padding: 4px 9px;\n  border-radius: 999px;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  white-space: nowrap;\n}\n.preset-chip:hover {\n  background: rgba(29, 122, 109, 0.15);\n  color: var(--app-accent, #1d7a6d);\n}\n.preset-chip.active {\n  background: var(--app-accent, #1d7a6d);\n  color: #fff;\n  border-color: var(--app-accent, #1d7a6d);\n}\n.table-toolbar {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n  align-items: center;\n  margin-bottom: 14px;\n  flex-wrap: wrap;\n}\n.toolbar-meta {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.meta-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 10px;\n  border-radius: 8px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  background: #fff;\n  border: 1px solid var(--app-border, #e5e7eb);\n  color: var(--app-ink, #374151);\n}\n.meta-chip.primary-chip {\n  background: rgba(29, 122, 109, 0.08);\n  border-color: rgba(29, 122, 109, 0.2);\n  color: var(--app-accent, #1d7a6d);\n}\n.meta-chip.selected-chip {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n  color: #1d4ed8;\n}\n.meta-chip .dot {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n}\n.meta-chip .dot.dot-success {\n  background: #10b981;\n}\n.meta-chip .dot.dot-primary {\n  background: #3b82f6;\n}\n.meta-chip .dot.dot-warning {\n  background: #f59e0b;\n}\n.toolbar-actions {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  align-items: center;\n  margin-left: auto;\n}\n.bulk-status-bar {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  border-radius: 10px;\n  padding: 3px 8px;\n}\n.bulk-status-bar .bulk-label {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #166534;\n  margin-right: 4px;\n}\n.rows-select-wrap {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.rows-select-wrap select {\n  appearance: none;\n  -webkit-appearance: none;\n  background: #fff;\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: 8px;\n  padding: 6px 26px 6px 10px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--app-ink, #374151);\n  cursor: pointer;\n  outline: none;\n}\n.rows-select-wrap select:hover {\n  border-color: #cbd5e1;\n}\n.rows-select-wrap .select-arrow {\n  position: absolute;\n  right: 8px;\n  pointer-events: none;\n  font-size: 0.7rem;\n  color: var(--app-ink-muted, #6b7280);\n}\n.action-btn-group {\n  display: flex;\n  gap: 6px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.table-shell {\n  background: #fff;\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: var(--app-radius, 14px);\n  box-shadow: var(--app-shadow-soft, 0 2px 8px rgba(0, 0, 0, 0.04));\n  overflow: hidden;\n  margin-bottom: 24px;\n}\n.table-wrap {\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.booking-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.88rem;\n  text-align: left;\n}\n.booking-table thead th {\n  background: var(--app-surface, #f9fafb);\n  color: var(--app-ink-muted, #4b5563);\n  font-weight: 700;\n  font-size: 0.76rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  padding: 12px 14px;\n  border-bottom: 1px solid var(--app-border, #e5e7eb);\n  white-space: nowrap;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.booking-table thead th[role=button] {\n  cursor: pointer;\n  transition: color 0.15s ease;\n}\n.booking-table thead th[role=button]:hover {\n  color: var(--app-ink, #111827);\n}\n.booking-table thead th i.bi {\n  margin-left: 4px;\n  font-size: 0.8rem;\n  opacity: 0.7;\n}\n.booking-table tbody tr {\n  border-bottom: 1px solid var(--app-border, #f1f5f9);\n  transition: background-color 0.15s ease;\n}\n.booking-table tbody tr:last-child {\n  border-bottom: none;\n}\n.booking-table tbody tr.clickable-row {\n  cursor: pointer;\n}\n.booking-table tbody tr.clickable-row:hover {\n  background-color: rgba(29, 122, 109, 0.03);\n}\n.booking-table tbody tr.selected {\n  background-color: #eff6ff;\n}\n.booking-table td {\n  padding: 12px 14px;\n  vertical-align: middle;\n  color: var(--app-ink, #1f2937);\n}\n.booking-table .col-check {\n  width: 36px;\n  text-align: center;\n  padding-left: 14px;\n  padding-right: 6px;\n}\n.booking-table .col-check input[type=checkbox] {\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n  accent-color: var(--app-accent, #1d7a6d);\n}\n.booking-table .col-action {\n  width: 48px;\n  text-align: right;\n  padding-right: 14px;\n}\n.cell-stack {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.cell-stack strong {\n  font-size: 0.88rem;\n  color: var(--app-ink, #111827);\n}\n.cell-stack span {\n  font-size: 0.78rem;\n  color: var(--app-ink-muted, #6b7280);\n}\n.booking-id-tag {\n  font-family: ui-monospace, monospace;\n  font-weight: 700;\n  color: var(--app-accent, #1d7a6d) !important;\n}\n.pax-badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: var(--app-surface, #f3f4f6);\n  font-weight: 700;\n  font-size: 0.8rem;\n  color: var(--app-ink, #374151);\n}\n.amount-cell .amount-value {\n  font-weight: 700;\n  font-size: 0.92rem;\n  color: var(--app-ink, #111827);\n}\n.status-pill,\n.payment-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 10px;\n  border-radius: 999px;\n  font-size: 0.74rem;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n  white-space: nowrap;\n}\n.status-pill.status-success,\n.payment-pill.status-success {\n  background: #ecfdf5;\n  color: #065f46;\n  border: 1px solid #a7f3d0;\n}\n.status-pill.status-warning,\n.payment-pill.status-warning {\n  background: #fffbeb;\n  color: #92400e;\n  border: 1px solid #fde68a;\n}\n.status-pill.status-danger,\n.payment-pill.status-danger {\n  background: #fef2f2;\n  color: #991b1b;\n  border: 1px solid #fecaca;\n}\n.status-pill.status-medium,\n.payment-pill.status-medium {\n  background: #f3f4f6;\n  color: #4b5563;\n  border: 1px solid #e5e7eb;\n}\n.status-pulse-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n}\n.status-pulse-dot.paid {\n  background: #10b981;\n}\n.status-pulse-dot.pending {\n  background: #f59e0b;\n}\n.status-pulse-dot.refunded {\n  background: #ef4444;\n}\n.status-pulse-dot.partially_refunded {\n  background: #f97316;\n}\n.status-pulse-dot.failed {\n  background: #dc2626;\n}\n.payment-cell {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.btn-wa-reminder {\n  background: #25d366;\n  color: #fff;\n  border: none;\n  border-radius: 50%;\n  width: 22px;\n  height: 22px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n  cursor: pointer;\n  transition: transform 0.15s ease, background 0.15s ease;\n}\n.btn-wa-reminder:hover {\n  background: #1eb956;\n  transform: scale(1.1);\n}\n.payment-meta-row {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.74rem;\n  color: var(--app-ink-muted, #6b7280);\n  flex-wrap: wrap;\n}\n.payment-meta-row .method-tag {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  background: #f3f4f6;\n  padding: 1px 6px;\n  border-radius: 4px;\n  font-weight: 500;\n}\n.payment-meta-row .copyable-txn {\n  font-family: ui-monospace, monospace;\n  background: rgba(0, 0, 0, 0.04);\n  padding: 1px 6px;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.payment-meta-row .copyable-txn:hover {\n  background: rgba(0, 0, 0, 0.08);\n}\n.icon-btn {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  border: 1px solid var(--app-border, #e5e7eb);\n  background: #fff;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: var(--app-ink, #374151);\n  transition: all 0.15s ease;\n}\n.icon-btn:hover {\n  background: var(--app-surface, #f9fafb);\n  border-color: #cbd5e1;\n  color: var(--app-accent, #1d7a6d);\n}\n.icon-btn.subtle {\n  border: 1px solid transparent;\n  background: transparent;\n  color: var(--app-ink-muted, #6b7280);\n}\n.icon-btn.subtle:hover {\n  background: var(--app-surface, #f3f4f6);\n  color: var(--app-ink, #111827);\n}\n.mobile-bookings-grid {\n  display: none;\n  flex-direction: column;\n  gap: 12px;\n  padding: 12px;\n}\n.mobile-booking-card {\n  background: #fff;\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: 12px;\n  padding: 14px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.03);\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  transition: border-color 0.15s ease, box-shadow 0.15s ease;\n}\n.mobile-booking-card.selected {\n  border-color: #bfdbfe;\n  background: #f8faff;\n}\n.mobile-booking-card .card-head {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 8px;\n}\n.mobile-booking-card .card-head .head-left {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.mobile-booking-card .card-head .head-left input[type=checkbox] {\n  width: 18px;\n  height: 18px;\n  accent-color: var(--app-accent, #1d7a6d);\n}\n.mobile-booking-card .card-body-content {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.mobile-booking-card .card-body-content .trek-name {\n  margin: 0;\n  font-size: 0.98rem;\n  font-weight: 700;\n  color: var(--app-ink, #111827);\n}\n.mobile-booking-card .card-body-content .customer-row,\n.mobile-booking-card .card-body-content .date-row {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.82rem;\n  color: var(--app-ink-muted, #4b5563);\n}\n.mobile-booking-card .card-body-content .customer-row i,\n.mobile-booking-card .card-body-content .date-row i {\n  font-size: 0.85rem;\n  color: var(--app-ink-muted, #9ca3af);\n}\n.mobile-booking-card .card-body-content .dot-sep {\n  color: #cbd5e1;\n}\n.mobile-booking-card .card-body-content .pax-tag {\n  font-weight: 600;\n  color: var(--app-accent, #1d7a6d);\n}\n.mobile-booking-card .card-footer-content {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 10px;\n  border-top: 1px solid var(--app-border, #f1f5f9);\n}\n.mobile-booking-card .card-footer-content .footer-left {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.mobile-booking-card .card-footer-content .footer-right {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.mobile-booking-card .card-footer-content .footer-right .mobile-amount {\n  font-weight: 700;\n  font-size: 1rem;\n  color: var(--app-ink, #111827);\n}\n.table-footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 18px;\n  border-top: 1px solid var(--app-border, #e5e7eb);\n  background: var(--app-surface, #f9fafb);\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.table-footer .page-info {\n  font-size: 0.82rem;\n  color: var(--app-ink-muted, #4b5563);\n  font-weight: 500;\n}\n.page-actions {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.page-btn {\n  min-width: 32px;\n  height: 32px;\n  padding: 0 8px;\n  border: 1px solid var(--app-border, #e5e7eb);\n  background: #fff;\n  border-radius: 8px;\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--app-ink, #374151);\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s ease;\n}\n.page-btn:hover {\n  border-color: var(--app-accent, #1d7a6d);\n  color: var(--app-accent, #1d7a6d);\n}\n.page-btn.active {\n  background: var(--app-accent, #1d7a6d);\n  border-color: var(--app-accent, #1d7a6d);\n  color: #fff;\n}\n.page-ellipsis {\n  padding: 0 4px;\n  color: var(--app-ink-muted, #9ca3af);\n  font-weight: 700;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.empty-state {\n  text-align: center;\n  padding: 48px 24px;\n  background: #fff;\n  border: 1px dashed var(--app-border, #cbd5e1);\n  border-radius: var(--app-radius, 14px);\n  margin-bottom: 24px;\n}\n.empty-state .empty-icon {\n  width: 64px;\n  height: 64px;\n  margin: 0 auto 16px;\n  border-radius: 50%;\n  background: rgba(29, 122, 109, 0.08);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.empty-state .empty-icon i {\n  font-size: 28px;\n  color: var(--app-accent, #1d7a6d);\n}\n.empty-state h3 {\n  margin: 0 0 6px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: var(--app-ink, #111827);\n}\n.empty-state p {\n  margin: 0 0 20px;\n  font-size: 0.9rem;\n  color: var(--app-ink-muted, #6b7280);\n}\n.drawer-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n  z-index: 1000;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.25s ease;\n}\n.drawer-overlay.open {\n  opacity: 1;\n  pointer-events: auto;\n}\n.detail-drawer {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  width: 440px;\n  max-width: 100vw;\n  background: #fff;\n  z-index: 1001;\n  display: flex;\n  flex-direction: column;\n  box-shadow: -4px 0 24px rgba(0, 0, 0, 0.15);\n  transform: translateX(100%);\n  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.detail-drawer.open {\n  transform: translateX(0);\n}\n.drawer-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 20px;\n  border-bottom: 1px solid var(--app-border, #e5e7eb);\n}\n.drawer-header .drawer-label {\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--app-ink-muted, #6b7280);\n}\n.drawer-header .drawer-title {\n  margin: 2px 0 0;\n  font-size: 1.35rem;\n  font-weight: 800;\n  color: var(--app-accent, #1d7a6d);\n  font-family: ui-monospace, monospace;\n}\n.drawer-header .drawer-close {\n  background: transparent;\n  border: none;\n  font-size: 1.1rem;\n  color: var(--app-ink-muted, #6b7280);\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 6px;\n}\n.drawer-header .drawer-close:hover {\n  background: var(--app-surface, #f3f4f6);\n  color: var(--app-ink, #111827);\n}\n.drawer-body {\n  flex: 1;\n  overflow-y: auto;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.drawer-status-row {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.drawer-section {\n  background: var(--app-surface, #f9fafb);\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: 12px;\n  padding: 16px;\n}\n.drawer-section .drawer-section-title {\n  margin: 0 0 12px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--app-ink, #111827);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.drawer-info-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n}\n.drawer-info-grid .dinfo {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.drawer-info-grid .dinfo.full-width {\n  grid-column: span 2;\n}\n.drawer-info-grid .dinfo .dinfo-label {\n  font-size: 0.74rem;\n  font-weight: 600;\n  color: var(--app-ink-muted, #6b7280);\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n}\n.drawer-info-grid .dinfo .dinfo-value {\n  font-size: 0.88rem;\n  color: var(--app-ink, #111827);\n  font-weight: 500;\n}\n.drawer-info-grid .dinfo .dinfo-value.highlight-val {\n  color: var(--app-accent, #1d7a6d);\n  font-weight: 700;\n}\n.drawer-info-grid .dinfo .dinfo-value.mono-val {\n  font-family: ui-monospace, monospace;\n  word-break: break-all;\n}\n.fare-breakdown-card {\n  background: #fff;\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: 10px;\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.fare-breakdown-card .fare-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 0.82rem;\n}\n.fare-breakdown-card .fare-row .fare-label {\n  color: var(--app-ink-muted, #4b5563);\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.fare-breakdown-card .fare-row .fare-val {\n  font-weight: 600;\n  color: var(--app-ink, #111827);\n}\n.fare-breakdown-card .fare-row .fare-val.highlight {\n  font-size: 0.98rem;\n  font-weight: 800;\n  color: var(--app-accent, #1d7a6d);\n}\n.fare-breakdown-card .fare-divider {\n  height: 1px;\n  background: var(--app-border, #e5e7eb);\n  margin: 2px 0;\n}\n.drawer-footer {\n  padding: 16px 20px;\n  border-top: 1px solid var(--app-border, #e5e7eb);\n  background: #fff;\n}\n.drawer-footer .footer-btn-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 8px;\n}\n.modal-form-content {\n  --background: #f8fafc;\n}\n.refund-container {\n  padding: 20px;\n  max-width: 680px;\n  margin: 0 auto;\n}\n.refund-summary-card {\n  background: #fff;\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: 12px;\n  padding: 16px 20px;\n  margin-bottom: 20px;\n  box-shadow: var(--app-shadow-soft, 0 1px 4px rgba(0, 0, 0, 0.04));\n}\n.refund-summary-card .summary-top {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 12px;\n}\n.refund-summary-card .ref-label {\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: var(--app-ink-muted, #6b7280);\n}\n.refund-summary-card .ref-id {\n  margin: 2px 0 4px;\n  font-size: 1.2rem;\n  font-weight: 800;\n  color: var(--app-ink, #111827);\n}\n.refund-summary-card .ref-sub {\n  margin: 0 0 6px;\n  font-size: 0.88rem;\n  color: var(--app-ink-muted, #4b5563);\n}\n.refund-summary-card .ref-amount {\n  margin: 2px 0 4px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: var(--app-accent, #1d7a6d);\n}\n.refund-summary-card .ref-countdown-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 3px 8px;\n  background: #eff6ff;\n  color: #1d4ed8;\n  border-radius: 6px;\n  font-size: 0.78rem;\n  font-weight: 600;\n}\n.policy-tier-cards {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n  margin-top: 8px;\n}\n.tier-card {\n  background: #fff;\n  border: 2px solid var(--app-border, #e5e7eb);\n  border-radius: 10px;\n  padding: 12px;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.tier-card:hover {\n  border-color: #cbd5e1;\n}\n.tier-card.active {\n  border-color: var(--app-accent, #1d7a6d);\n  background: rgba(29, 122, 109, 0.04);\n}\n.tier-card .tier-card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 6px;\n}\n.tier-card .tier-card-header .tier-badge {\n  font-size: 0.72rem;\n  font-weight: 700;\n  padding: 2px 6px;\n  border-radius: 4px;\n}\n.tier-card .tier-card-header .tier-badge.policy {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.tier-card .tier-card-header .tier-badge.full {\n  background: #dcfce7;\n  color: #166534;\n}\n.tier-card .tier-card-header .tier-badge.custom {\n  background: #fef3c7;\n  color: #92400e;\n}\n.tier-card .tier-card-header .tier-pct {\n  font-size: 0.82rem;\n  font-weight: 800;\n  color: var(--app-ink, #111827);\n}\n.tier-card .tier-desc {\n  margin: 0;\n  font-size: 0.76rem;\n  color: var(--app-ink-muted, #6b7280);\n  line-height: 1.35;\n}\n.settlement-breakdown-box {\n  background: #fff;\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: 10px;\n  padding: 14px 16px;\n}\n.settlement-breakdown-box .breakdown-title {\n  margin: 0 0 10px;\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: var(--app-ink, #111827);\n}\n.settlement-breakdown-box .breakdown-row {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.85rem;\n  margin-bottom: 6px;\n}\n.settlement-breakdown-box .breakdown-row.net-payout {\n  font-weight: 700;\n  font-size: 0.95rem;\n  color: var(--app-ink, #111827);\n  margin-top: 8px;\n}\n.settlement-breakdown-box .breakdown-row.net-payout .payout-amount {\n  color: #10b981;\n  font-size: 1.15rem;\n  font-weight: 800;\n}\n.settlement-breakdown-box .breakdown-divider {\n  height: 1px;\n  background: var(--app-border, #e5e7eb);\n  margin: 8px 0;\n}\n.input-prefix-wrapper {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.input-prefix-wrapper .prefix {\n  position: absolute;\n  left: 12px;\n  font-weight: 700;\n  color: var(--app-ink-muted, #6b7280);\n  pointer-events: none;\n}\n.input-prefix-wrapper input {\n  padding-left: 28px !important;\n}\n.modal-form-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  margin-top: 24px;\n}\n.invoice-content {\n  --background: #f1f5f9;\n}\n.invoice-document {\n  max-width: 800px;\n  margin: 20px auto;\n  background: #fff;\n  padding: 36px;\n  border-radius: 12px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n  color: #111827;\n}\n.invoice-document .inv-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 20px;\n}\n.invoice-document .inv-brand {\n  display: flex;\n  gap: 14px;\n  align-items: center;\n}\n.invoice-document .inv-brand .inv-logo {\n  width: 54px;\n  height: 54px;\n  object-fit: contain;\n}\n.invoice-document .inv-brand .inv-title {\n  margin: 0;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #1d7a6d;\n}\n.invoice-document .inv-brand .inv-tagline {\n  margin: 2px 0 0;\n  font-size: 0.85rem;\n  color: #4b5563;\n}\n.invoice-document .inv-brand .inv-gst {\n  font-size: 0.74rem;\n  color: #9ca3af;\n}\n.invoice-document .inv-pass-badge {\n  text-align: right;\n}\n.invoice-document .inv-pass-badge .pass-tag {\n  display: inline-block;\n  background: #1d7a6d;\n  color: #fff;\n  font-size: 0.72rem;\n  font-weight: 800;\n  padding: 3px 8px;\n  border-radius: 4px;\n  letter-spacing: 0.05em;\n}\n.invoice-document .inv-pass-badge .pass-number {\n  margin: 4px 0;\n  font-family: ui-monospace, monospace;\n  font-size: 1.1rem;\n  font-weight: 800;\n}\n.invoice-document .inv-divider {\n  border: none;\n  height: 1px;\n  background: #e5e7eb;\n  margin: 20px 0;\n}\n.invoice-document .inv-meta-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 12px;\n  background: #f9fafb;\n  padding: 12px 16px;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n  margin-bottom: 20px;\n}\n.invoice-document .inv-meta-grid .inv-meta-item {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.invoice-document .inv-meta-grid .inv-meta-item .meta-label {\n  font-size: 0.72rem;\n  color: #6b7280;\n  text-transform: uppercase;\n  font-weight: 600;\n}\n.invoice-document .inv-meta-grid .inv-meta-item .meta-val {\n  font-size: 0.85rem;\n  font-weight: 600;\n}\n.invoice-document .inv-meta-grid .inv-meta-item .meta-val.highlight {\n  color: #1d7a6d;\n  font-weight: 700;\n}\n.invoice-document .inv-two-col {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.invoice-document .inv-two-col .inv-box {\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 14px;\n}\n.invoice-document .inv-two-col .inv-box .inv-box-title {\n  margin: 0 0 10px;\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: #111827;\n  border-bottom: 1px solid #f1f5f9;\n  padding-bottom: 6px;\n}\n.invoice-document .inv-two-col .inv-box .inv-row {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.82rem;\n  margin-bottom: 6px;\n}\n.invoice-document .inv-two-col .inv-box .inv-row .label {\n  color: #6b7280;\n}\n.invoice-document .inv-two-col .inv-box .inv-row .val {\n  font-weight: 500;\n}\n.invoice-document .inv-table-section {\n  margin-bottom: 24px;\n}\n.invoice-document .inv-table-section .inv-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.invoice-document .inv-table-section .inv-table th {\n  background: #f9fafb;\n  padding: 10px 12px;\n  font-size: 0.78rem;\n  text-transform: uppercase;\n  border: 1px solid #e5e7eb;\n}\n.invoice-document .inv-table-section .inv-table td {\n  padding: 12px;\n  font-size: 0.85rem;\n  border: 1px solid #e5e7eb;\n}\n.invoice-document .inv-table-section .inv-table td .small-sub {\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.invoice-document .inv-table-section .inv-table .inv-total-row {\n  background: #f9fafb;\n}\n.invoice-document .inv-table-section .inv-table .inv-total-row .total-amount {\n  font-size: 1.15rem;\n  font-weight: 800;\n  color: #1d7a6d;\n}\n.invoice-document .inv-footer-section {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-top: 1px dashed #cbd5e1;\n  padding-top: 20px;\n  gap: 20px;\n}\n.invoice-document .inv-footer-section .inv-guidelines {\n  flex: 1;\n}\n.invoice-document .inv-footer-section .inv-guidelines h4 {\n  margin: 0 0 6px;\n  font-size: 0.82rem;\n  font-weight: 700;\n}\n.invoice-document .inv-footer-section .inv-guidelines ul {\n  margin: 0;\n  padding-left: 16px;\n  font-size: 0.75rem;\n  color: #4b5563;\n  line-height: 1.4;\n}\n.invoice-document .inv-footer-section .inv-qr-badge {\n  text-align: center;\n}\n.invoice-document .inv-footer-section .inv-qr-badge .qr-box {\n  width: 72px;\n  height: 72px;\n  border: 2px solid #111827;\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 28px;\n  margin: 0 auto 4px;\n}\n.invoice-document .inv-footer-section .inv-qr-badge .qr-box span {\n  font-size: 0.5rem;\n  font-weight: 800;\n}\n.invoice-document .inv-footer-section .inv-qr-badge .stamp {\n  font-size: 0.65rem;\n  color: #6b7280;\n  font-weight: 700;\n}\n.manifest-container {\n  padding: 24px;\n  background: #fff;\n}\n.manifest-gov-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  border-bottom: 2px solid #166534;\n  padding-bottom: 12px;\n  margin-bottom: 16px;\n  gap: 16px;\n}\n.manifest-gov-header .gov-title {\n  margin: 0;\n  font-size: 1.05rem;\n  font-weight: 800;\n  color: #166534;\n}\n.manifest-gov-header .gov-sub {\n  margin: 2px 0 0;\n  font-size: 0.8rem;\n  color: #4b5563;\n}\n.manifest-gov-header .manifest-meta-badge {\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  padding: 8px 12px;\n  border-radius: 8px;\n  font-size: 0.78rem;\n  white-space: nowrap;\n}\n.manifest-table-wrap {\n  overflow-x: auto;\n}\n.manifest-table {\n  font-size: 0.8rem;\n}\n.manifest-table th {\n  font-size: 0.75rem;\n  font-weight: 700;\n  background: #f8fafc;\n  white-space: nowrap;\n}\n.manifest-table td {\n  padding: 6px;\n}\n.manifest-signoff-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 24px;\n  margin-top: 32px;\n  padding-top: 16px;\n  border-top: 1px dashed #cbd5e1;\n}\n.manifest-signoff-grid .signoff-box .sign-role {\n  font-weight: 700;\n  font-size: 0.82rem;\n  margin: 0 0 40px;\n}\n.manifest-signoff-grid .signoff-box .sign-line {\n  height: 1px;\n  background: #111827;\n  margin-bottom: 4px;\n}\n.manifest-signoff-grid .signoff-box small {\n  font-size: 0.74rem;\n  color: #6b7280;\n}\n@media print {\n  .no-print,\n  ion-header,\n  .table-toolbar,\n  .filters-card,\n  .drawer-overlay,\n  .detail-drawer {\n    display: none !important;\n  }\n  body,\n  ion-content {\n    background: #fff !important;\n  }\n  .invoice-document {\n    box-shadow: none !important;\n    padding: 0 !important;\n    margin: 0 !important;\n    max-width: 100% !important;\n  }\n}\n@media (max-width: 1024px) {\n  .filters-card {\n    gap: 10px;\n  }\n  .date-range-box {\n    margin-left: 0;\n    width: 100%;\n  }\n  .policy-tier-cards {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 768px) {\n  .filter-search {\n    flex: 1 1 100%;\n    min-width: 100%;\n  }\n  .filter-select-group {\n    width: 100%;\n  }\n  .filter-select-group .select-wrapper {\n    flex: 1;\n  }\n  .filter-select-group .select-wrapper select {\n    width: 100%;\n  }\n  .date-range-box {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .date-range-box .date-input-wrap {\n    width: 100%;\n    justify-content: space-between;\n  }\n  .table-toolbar {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .table-toolbar .toolbar-actions {\n    margin-left: 0;\n    justify-content: space-between;\n    width: 100%;\n  }\n  .booking-table {\n    display: none;\n  }\n  .mobile-bookings-grid {\n    display: flex;\n  }\n  .detail-drawer {\n    top: auto;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n    max-height: 88vh;\n    border-radius: 20px 20px 0 0;\n    transform: translateY(100%);\n  }\n  .detail-drawer.open {\n    transform: translateY(0);\n  }\n  .drawer-info-grid {\n    grid-template-columns: 1fr;\n  }\n  .drawer-info-grid .dinfo.full-width {\n    grid-column: span 1;\n  }\n  .inv-two-col,\n  .inv-meta-grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=bookings.component.css.map */\n'] }]
  }], () => [{ type: Bookings }, { type: DropdownManagerService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookingsComponent, { className: "BookingsComponent", filePath: "src/app/bookings/bookings.component.ts", lineNumber: 38 });
})();

// src/app/bookings/bookings-module.ts
var routes = [{ path: "", component: BookingsComponent }];
var _BookingsModule = class _BookingsModule {
};
_BookingsModule.\u0275fac = function BookingsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BookingsModule)();
};
_BookingsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _BookingsModule });
_BookingsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, BookingsComponent, RouterModule.forChild(routes)] });
var BookingsModule = _BookingsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookingsModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        CommonModule,
        BookingsComponent,
        RouterModule.forChild(routes)
      ]
    }]
  }], null, null);
})();
export {
  BookingsModule
};
//# sourceMappingURL=bookings-module-BGRUGANB.js.map
