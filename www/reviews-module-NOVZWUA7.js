import {
  Reviews
} from "./chunk-UANI3GZQ.js";
import {
  DropdownManagerService
} from "./chunk-2AIND2RX.js";
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
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  RouterModule,
  TitleCasePipe,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  take,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-KQE4QDNK.js";

// src/app/reviews/reviews.component.ts
var _c0 = () => [1, 2, 3, 4];
var _c1 = () => [1, 2, 3, 4, 5, 6];
function ReviewsComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19)(2, "div", 20);
    \u0275\u0275element(3, "i", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 22)(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, "Total Reviews");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 19)(10, "div", 23);
    \u0275\u0275element(11, "i", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 22)(13, "h3");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p");
    \u0275\u0275text(16, "Approved & Live");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 19)(18, "div", 25);
    \u0275\u0275element(19, "i", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 22)(21, "h3");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p");
    \u0275\u0275text(24, "Pending Moderation");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 19)(26, "div", 27);
    \u0275\u0275element(27, "i", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 22)(29, "h3");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p");
    \u0275\u0275text(32, "Average Rating");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.totalCount);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.approvedCount);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.pendingCount);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", ctx_r0.averageRating, " \u2605");
  }
}
function ReviewsComponent_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275element(1, "div", 31);
    \u0275\u0275elementStart(2, "div", 22);
    \u0275\u0275element(3, "div", 32)(4, "div", 33);
    \u0275\u0275elementEnd()();
  }
}
function ReviewsComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275template(1, ReviewsComponent_div_3_div_1_Template, 5, 0, "div", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c0));
  }
}
function ReviewsComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function ReviewsComponent_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.searchQuery = "";
      return \u0275\u0275resetView(ctx_r0.onFilterChange());
    });
    \u0275\u0275element(1, "i", 35);
    \u0275\u0275elementEnd();
  }
}
function ReviewsComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "span", 37);
    \u0275\u0275element(2, "i", 38);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 39)(5, "button", 40);
    \u0275\u0275listener("click", function ReviewsComponent_div_24_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.bulkApprove());
    });
    \u0275\u0275element(6, "i", 41);
    \u0275\u0275text(7, " Approve Selected ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 42);
    \u0275\u0275listener("click", function ReviewsComponent_div_24_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.bulkReject());
    });
    \u0275\u0275element(9, "i", 43);
    \u0275\u0275text(10, " Reject Selected ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 12);
    \u0275\u0275listener("click", function ReviewsComponent_div_24_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.clearSelection());
    });
    \u0275\u0275text(12, "Clear");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.selectedCount, " selected");
  }
}
function ReviewsComponent_div_25_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47);
    \u0275\u0275element(2, "div", 48);
    \u0275\u0275elementStart(3, "div", 49);
    \u0275\u0275element(4, "div", 50)(5, "div", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "div", 51)(7, "div", 52);
    \u0275\u0275elementEnd();
  }
}
function ReviewsComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275template(1, ReviewsComponent_div_25_div_1_Template, 8, 0, "div", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c1));
  }
}
function ReviewsComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53)(1, "div", 54);
    \u0275\u0275element(2, "i", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No Reviews Found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "No customer reviews match your search or filter criteria.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 56);
    \u0275\u0275listener("click", function ReviewsComponent_div_26_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.resetFilters());
    });
    \u0275\u0275element(8, "i", 57);
    \u0275\u0275text(9, " Reset Filters ");
    \u0275\u0275elementEnd()();
  }
}
function ReviewsComponent_div_27_div_1_i_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 81);
  }
  if (rf & 2) {
    const filled_r7 = ctx.$implicit;
    \u0275\u0275property("ngClass", filled_r7 ? "bi-star-fill star-filled" : "bi-star star-empty");
  }
}
function ReviewsComponent_div_27_div_1_div_21_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 88);
    \u0275\u0275listener("click", function ReviewsComponent_div_27_div_1_div_21_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const review_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.deleteReply(review_r6));
    });
    \u0275\u0275text(1, "\xD7");
    \u0275\u0275elementEnd();
  }
}
function ReviewsComponent_div_27_div_1_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82)(1, "div", 83)(2, "span");
    \u0275\u0275element(3, "i", 84);
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5, "Admin Response");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 85);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ReviewsComponent_div_27_div_1_div_21_button_8_Template, 2, 0, "button", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 87);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const review_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(review_r6.repliedAt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.authService.hasPermission("reviews.manage"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(review_r6.adminReply);
  }
}
function ReviewsComponent_div_27_div_1_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 89)(1, "textarea", 90);
    \u0275\u0275twoWayListener("ngModelChange", function ReviewsComponent_div_27_div_1_div_22_Template_textarea_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.replyText, $event) || (ctx_r0.replyText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(2, "          ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 91)(4, "button", 92);
    \u0275\u0275listener("click", function ReviewsComponent_div_27_div_1_div_22_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r9);
      const review_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleReply(review_r6.id));
    });
    \u0275\u0275text(5, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 93);
    \u0275\u0275listener("click", function ReviewsComponent_div_27_div_1_div_22_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r9);
      const review_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.submitReply(review_r6));
    });
    \u0275\u0275element(7, "i", 94);
    \u0275\u0275text(8, " Send Reply ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.replyText);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", !ctx_r0.replyText.trim());
  }
}
function ReviewsComponent_div_27_div_1_button_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 95);
    \u0275\u0275listener("click", function ReviewsComponent_div_27_div_1_button_29_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const review_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleReply(review_r6.id));
    });
    \u0275\u0275element(1, "i", 96);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const review_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", review_r6.adminReply ? "Edit Reply" : "Reply", " ");
  }
}
function ReviewsComponent_div_27_div_1_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 97)(1, "button", 98);
    \u0275\u0275listener("click", function ReviewsComponent_div_27_div_1_div_30_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r11);
      const review_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.updateReviewStatus(review_r6, "approved"));
    });
    \u0275\u0275element(2, "i", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 100);
    \u0275\u0275listener("click", function ReviewsComponent_div_27_div_1_div_30_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r11);
      const review_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.updateReviewStatus(review_r6, "rejected"));
    });
    \u0275\u0275element(4, "i", 101);
    \u0275\u0275elementEnd()();
  }
}
function ReviewsComponent_div_27_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59)(1, "label", 60)(2, "input", 61);
    \u0275\u0275listener("change", function ReviewsComponent_div_27_div_1_Template_input_change_2_listener() {
      const review_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleReviewSelection(review_r6.id));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 47)(4, "div", 62);
    \u0275\u0275element(5, "img", 63);
    \u0275\u0275elementStart(6, "div", 64)(7, "h4", 65);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 66);
    \u0275\u0275element(10, "i", 67);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 68);
    \u0275\u0275template(13, ReviewsComponent_div_27_div_1_i_13_Template, 1, 1, "i", 69);
    \u0275\u0275elementStart(14, "span", 70);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(16, "span", 71);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "p", 72);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, ReviewsComponent_div_27_div_1_div_21_Template, 11, 3, "div", 73)(22, ReviewsComponent_div_27_div_1_div_22_Template, 9, 2, "div", 74);
    \u0275\u0275elementStart(23, "div", 75)(24, "span", 76);
    \u0275\u0275element(25, "i", 77);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 78);
    \u0275\u0275template(29, ReviewsComponent_div_27_div_1_button_29_Template, 3, 1, "button", 79)(30, ReviewsComponent_div_27_div_1_div_30_Template, 5, 0, "div", 80);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const review_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("review-selected", ctx_r0.selectedReviewIds.has(review_r6.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r0.selectedReviewIds.has(review_r6.id));
    \u0275\u0275advance(3);
    \u0275\u0275property("src", review_r6.avatar, \u0275\u0275sanitizeUrl)("alt", review_r6.customerName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(review_r6.customerName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(review_r6.trekName);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.getStarArray(review_r6.likes));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", review_r6.likes, "/5");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "status-" + review_r6.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 17, review_r6.status), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(review_r6.comment);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", review_r6.adminReply);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.replyingReviewId === review_r6.id);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(27, 19, review_r6.date, "dd MMM yyyy"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.authService.hasPermission("reviews.manage"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", review_r6.status === "pending" && ctx_r0.authService.hasPermission("reviews.manage"));
  }
}
function ReviewsComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275template(1, ReviewsComponent_div_27_div_1_Template, 31, 22, "div", 58);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.paginatedReviews);
  }
}
function ReviewsComponent_div_28_option_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 115);
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
function ReviewsComponent_div_28_ng_container_24_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 118);
    \u0275\u0275text(1, "\u2026");
    \u0275\u0275elementEnd();
  }
}
function ReviewsComponent_div_28_ng_container_24_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 119);
    \u0275\u0275listener("click", function ReviewsComponent_div_28_ng_container_24_button_2_Template_button_click_0_listener() {
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
function ReviewsComponent_div_28_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ReviewsComponent_div_28_ng_container_24_span_1_Template, 2, 0, "span", 116)(2, ReviewsComponent_div_28_ng_container_24_button_2_Template, 2, 3, "button", 117);
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
function ReviewsComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 102)(1, "div", 103)(2, "div", 104);
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
    \u0275\u0275text(12, " reviews ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 105)(14, "div", 106)(15, "label");
    \u0275\u0275text(16, "Per page:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "select", 107);
    \u0275\u0275twoWayListener("ngModelChange", function ReviewsComponent_div_28_Template_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.pageSize, $event) || (ctx_r0.pageSize = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ReviewsComponent_div_28_Template_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onPageSizeChange($event));
    });
    \u0275\u0275template(18, ReviewsComponent_div_28_option_18_Template, 2, 2, "option", 108);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 109)(20, "button", 110);
    \u0275\u0275listener("click", function ReviewsComponent_div_28_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.prevPage());
    });
    \u0275\u0275element(21, "i", 111);
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23, "Prev");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(24, ReviewsComponent_div_28_ng_container_24_Template, 3, 2, "ng-container", 112);
    \u0275\u0275elementStart(25, "button", 113);
    \u0275\u0275listener("click", function ReviewsComponent_div_28_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.nextPage());
    });
    \u0275\u0275elementStart(26, "span");
    \u0275\u0275text(27, "Next");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "i", 114);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r0.currentPage - 1) * ctx_r0.Number(ctx_r0.pageSize) + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.Math.min(ctx_r0.currentPage * ctx_r0.Number(ctx_r0.pageSize), ctx_r0.filteredReviews.length));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.filteredReviews.length);
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
var _ReviewsComponent = class _ReviewsComponent {
  get totalPages() {
    const size = Number(this.pageSize) || 5;
    return Math.max(1, Math.ceil(this.filteredReviews.length / size));
  }
  get paginatedReviews() {
    const size = Number(this.pageSize) || 5;
    const page = Math.min(Math.max(1, this.currentPage), this.totalPages);
    const start = (page - 1) * size;
    return this.filteredReviews.slice(start, start + size);
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
  constructor(reviewService, dropdownService, authService) {
    this.reviewService = reviewService;
    this.dropdownService = dropdownService;
    this.authService = authService;
    this.Number = Number;
    this.Math = Math;
    this.searchQuery = "";
    this.selectedStatus = "all";
    this.reviewStatusOptions = [];
    this.reviews = [];
    this.loading = true;
    this.currentPage = 1;
    this.pageSize = 5;
    this.pageSizeOptions = [5, 10, 20, 40];
    this.selectedReviewIds = /* @__PURE__ */ new Set();
    this.replyingReviewId = null;
    this.replyText = "";
  }
  ngOnInit() {
    this.loadDropdownOptions();
    this.loadReviews();
  }
  get totalCount() {
    return this.reviews.length;
  }
  get approvedCount() {
    return this.reviews.filter((r) => r.status === "approved").length;
  }
  get pendingCount() {
    return this.reviews.filter((r) => r.status === "pending").length;
  }
  get rejectedCount() {
    return this.reviews.filter((r) => r.status === "rejected").length;
  }
  get averageRating() {
    if (this.reviews.length === 0)
      return "5.0";
    const sum = this.reviews.reduce((acc, r) => acc + (r.likes || 5), 0);
    return (sum / this.reviews.length).toFixed(1);
  }
  loadDropdownOptions() {
    this.dropdownService.getGroupOptions("reviewStatus").pipe(take(1)).subscribe((opts) => {
      if (opts.length > 0) {
        this.reviewStatusOptions = opts.map((opt) => opt.value);
      }
    });
  }
  loadReviews() {
    this.loading = true;
    this.reviewService.getAllReviews().subscribe({
      next: (res) => {
        if (res && res.success == true) {
          this.reviews = this.mapReviewData(res.data);
        }
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
      }
    });
  }
  mapReviewData(data) {
    return (data || []).map((item) => ({
      id: item.id || item.comment_id,
      customerName: item.author_name || item.customer_name || "Trekker",
      trekName: item.trek_name || item.title || "Trek Experience",
      likes: Number(item.likes ?? item.rating ?? 5),
      comment: item.comment || item.review || item.content || "",
      date: item.comment_date || item.created_at || "Recently",
      avatar: item.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(item.author_name || item.customer_name || "Trekker")}&size=100`,
      status: item.status || item.review_status || "approved",
      adminReply: item.adminReply || item.admin_reply,
      repliedAt: item.repliedAt || item.replied_at
    }));
  }
  get filteredReviews() {
    let filtered = this.reviews;
    if (this.selectedStatus !== "all") {
      filtered = filtered.filter((r) => r.status === this.selectedStatus);
    }
    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter((r) => r.customerName.toLowerCase().includes(query) || r.trekName.toLowerCase().includes(query) || r.comment.toLowerCase().includes(query));
    }
    return filtered;
  }
  getStarArray(likes) {
    const stars = Math.min(5, Math.max(0, Math.round(likes)));
    return Array.from({ length: 5 }, (_, i) => i < stars);
  }
  get selectedCount() {
    return this.selectedReviewIds.size;
  }
  get allVisibleSelected() {
    return this.filteredReviews.length > 0 && this.filteredReviews.every((r) => this.selectedReviewIds.has(r.id));
  }
  toggleReviewSelection(id) {
    if (this.selectedReviewIds.has(id)) {
      this.selectedReviewIds.delete(id);
    } else {
      this.selectedReviewIds.add(id);
    }
  }
  toggleSelectAll() {
    if (this.allVisibleSelected) {
      this.filteredReviews.forEach((r) => this.selectedReviewIds.delete(r.id));
    } else {
      this.filteredReviews.forEach((r) => this.selectedReviewIds.add(r.id));
    }
  }
  clearSelection() {
    this.selectedReviewIds.clear();
  }
  bulkApprove() {
    const ids = Array.from(this.selectedReviewIds);
    ids.forEach((id) => {
      const review = this.reviews.find((r) => r.id === id);
      if (review && review.status === "pending") {
        this.updateReviewStatus(review, "approved");
      }
    });
    this.selectedReviewIds.clear();
  }
  bulkReject() {
    const ids = Array.from(this.selectedReviewIds);
    ids.forEach((id) => {
      const review = this.reviews.find((r) => r.id === id);
      if (review && review.status === "pending") {
        this.updateReviewStatus(review, "rejected");
      }
    });
    this.selectedReviewIds.clear();
  }
  toggleReply(reviewId) {
    if (this.replyingReviewId === reviewId) {
      this.replyingReviewId = null;
      this.replyText = "";
    } else {
      this.replyingReviewId = reviewId;
      const review = this.reviews.find((r) => r.id === reviewId);
      this.replyText = review?.adminReply || "";
    }
  }
  submitReply(review) {
    if (!this.replyText.trim())
      return;
    const reply = this.replyText.trim();
    const now = (/* @__PURE__ */ new Date()).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
    this.reviewService.replyToReview(review.id, reply).subscribe({
      next: () => {
        this.reviews = this.reviews.map((item) => item.id === review.id ? __spreadProps(__spreadValues({}, item), { adminReply: reply, repliedAt: now }) : item);
        this.replyingReviewId = null;
        this.replyText = "";
      },
      error: (err) => {
      }
    });
  }
  deleteReply(review) {
    this.reviewService.replyToReview(review.id, "").subscribe({
      next: () => {
        this.reviews = this.reviews.map((item) => item.id === review.id ? __spreadProps(__spreadValues({}, item), { adminReply: void 0, repliedAt: void 0 }) : item);
      },
      error: (err) => {
      }
    });
  }
  updateReviewStatus(review, status) {
    this.reviewService.updateReviewStatus(review.id, status).subscribe({
      next: () => {
        this.reviews = this.reviews.map((item) => item.id === review.id ? __spreadProps(__spreadValues({}, item), { status }) : item);
      },
      error: (err) => {
      }
    });
  }
  resetFilters() {
    this.searchQuery = "";
    this.selectedStatus = "all";
    this.currentPage = 1;
    this.selectedReviewIds.clear();
  }
};
_ReviewsComponent.\u0275fac = function ReviewsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ReviewsComponent)(\u0275\u0275directiveInject(Reviews), \u0275\u0275directiveInject(DropdownManagerService), \u0275\u0275directiveInject(AuthService));
};
_ReviewsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReviewsComponent, selectors: [["app-reviews"]], decls: 29, vars: 23, consts: [[1, "reviews-page"], ["sectionLabel", "Reviews", "title", "Customer Reviews & Ratings", "subtitle", "Moderate trekker feedback, manage public reviews, and publish verified admin responses."], ["class", "reviews-summary", 4, "ngIf"], [1, "reviews-toolbar-card"], [1, "toolbar-left"], [1, "search-input-wrap"], [1, "bi", "bi-search"], ["type", "text", "placeholder", "Search by customer name, trek, or review comment...", 3, "ngModelChange", "ngModel"], ["type", "button", "class", "clear-btn", "title", "Clear search", 3, "click", 4, "ngIf"], [1, "status-chips"], ["type", "button", 1, "status-chip", 3, "click"], [1, "toolbar-right"], ["type", "button", 1, "btn-app", "ghost", "btn-sm", 3, "click"], [1, "bi", 3, "ngClass"], ["class", "bulk-bar", 4, "ngIf"], ["class", "reviews-grid", 4, "ngIf"], ["class", "empty-state surface-card", 4, "ngIf"], ["class", "pagination-shell", 4, "ngIf"], [1, "reviews-summary"], [1, "summary-card"], [1, "summary-icon", "tone-primary"], [1, "bi", "bi-chat-square-quote-fill"], [1, "summary-copy"], [1, "summary-icon", "tone-success"], [1, "bi", "bi-check-circle-fill"], [1, "summary-icon", "tone-warning"], [1, "bi", "bi-clock-history"], [1, "summary-icon", "tone-secondary"], [1, "bi", "bi-star-fill"], ["class", "summary-card skeleton-card", 4, "ngFor", "ngForOf"], [1, "summary-card", "skeleton-card"], [1, "skeleton-icon", "shimmer"], [1, "skeleton-line", "lg", "shimmer", "mb-1"], [1, "skeleton-line", "sm", "shimmer"], ["type", "button", "title", "Clear search", 1, "clear-btn", 3, "click"], [1, "bi", "bi-x-circle-fill"], [1, "bulk-bar"], [1, "bulk-label"], [1, "bi", "bi-check2-square", "me-1"], [1, "bulk-btn-group"], ["type", "button", 1, "btn-app", "primary", "btn-sm", 3, "click"], [1, "bi", "bi-check2-circle"], ["type", "button", 1, "btn-app", "danger", "btn-sm", 3, "click"], [1, "bi", "bi-x-circle"], [1, "reviews-grid"], ["class", "review-card skeleton-card", 4, "ngFor", "ngForOf"], [1, "review-card", "skeleton-card"], [1, "review-top"], [1, "skeleton-avatar", "shimmer"], [2, "flex", "1"], [1, "skeleton-line", "md", "shimmer", "mb-2"], [1, "skeleton-line", "lg", "shimmer", "mt-2"], [1, "skeleton-line", "md", "shimmer", "mt-1"], [1, "empty-state", "surface-card"], [1, "empty-icon"], [1, "bi", "bi-chat-square-quote"], ["type", "button", 1, "btn-app", "ghost", 3, "click"], [1, "bi", "bi-arrow-counterclockwise"], ["class", "review-card", 3, "review-selected", 4, "ngFor", "ngForOf"], [1, "review-card"], ["title", "Select for bulk moderation", 1, "review-select-check"], ["type", "checkbox", 3, "change", "checked"], [1, "customer-info"], ["loading", "lazy", "decoding", "async", 1, "avatar", 3, "src", "alt"], [1, "customer-meta"], [1, "customer-name"], [1, "trek-name"], [1, "bi", "bi-compass", "me-1"], [1, "star-row"], ["class", "bi star-icon", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "star-count"], [1, "status-pill", 3, "ngClass"], [1, "comment-text"], ["class", "admin-reply-box", 4, "ngIf"], ["class", "reply-input-panel", 4, "ngIf"], [1, "review-footer"], [1, "date"], [1, "bi", "bi-calendar-event"], [1, "footer-actions"], ["class", "reply-trigger-btn", 3, "click", 4, "ngIf"], ["class", "quick-mod-buttons", 4, "ngIf"], [1, "bi", "star-icon", 3, "ngClass"], [1, "admin-reply-box"], [1, "reply-head"], [1, "bi", "bi-shield-check", "text-accent"], [1, "reply-date"], ["class", "reply-del-btn", "title", "Delete reply", 3, "click", 4, "ngIf"], [1, "reply-content"], ["title", "Delete reply", 1, "reply-del-btn", 3, "click"], [1, "reply-input-panel"], ["rows", "2", "placeholder", "Write an official response to this guest review...", 1, "reply-textarea", 3, "ngModelChange", "ngModel"], [1, "reply-actions"], ["type", "button", 1, "btn-app", "ghost", "btn-xs", 3, "click"], ["type", "button", 1, "btn-app", "primary", "btn-xs", 3, "click", "disabled"], [1, "bi", "bi-send"], [1, "reply-trigger-btn", 3, "click"], [1, "bi", "bi-reply"], [1, "quick-mod-buttons"], ["title", "Approve review", 1, "icon-btn-pill", "success", 3, "click"], [1, "bi", "bi-check-lg"], ["title", "Reject review", 1, "icon-btn-pill", "danger", 3, "click"], [1, "bi", "bi-x-lg"], [1, "pagination-shell"], [1, "pagination-inner"], [1, "pagination-info"], [1, "pagination-controls"], [1, "page-size-selector"], [1, "pagination-select", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "page-actions"], ["type", "button", "title", "Previous Page", 1, "page-nav-btn", 3, "click", "disabled"], [1, "bi", "bi-chevron-left"], [4, "ngFor", "ngForOf"], ["type", "button", "title", "Next Page", 1, "page-nav-btn", 3, "click", "disabled"], [1, "bi", "bi-chevron-right"], [3, "value"], ["class", "page-ellipsis", 4, "ngIf"], ["class", "page-btn", "type", "button", 3, "active", "click", 4, "ngIf"], [1, "page-ellipsis"], ["type", "button", 1, "page-btn", 3, "click"]], template: function ReviewsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "app-admin-shell", 1);
    \u0275\u0275template(2, ReviewsComponent_div_2_Template, 33, 4, "div", 2)(3, ReviewsComponent_div_3_Template, 2, 2, "div", 2);
    \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "div", 5);
    \u0275\u0275element(7, "i", 6);
    \u0275\u0275elementStart(8, "input", 7);
    \u0275\u0275twoWayListener("ngModelChange", function ReviewsComponent_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function ReviewsComponent_Template_input_ngModelChange_8_listener() {
      return ctx.onFilterChange();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ReviewsComponent_button_9_Template, 2, 0, "button", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 9)(11, "button", 10);
    \u0275\u0275listener("click", function ReviewsComponent_Template_button_click_11_listener() {
      ctx.selectedStatus = "all";
      return ctx.onFilterChange();
    });
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 10);
    \u0275\u0275listener("click", function ReviewsComponent_Template_button_click_13_listener() {
      ctx.selectedStatus = "approved";
      return ctx.onFilterChange();
    });
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 10);
    \u0275\u0275listener("click", function ReviewsComponent_Template_button_click_15_listener() {
      ctx.selectedStatus = "pending";
      return ctx.onFilterChange();
    });
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 10);
    \u0275\u0275listener("click", function ReviewsComponent_Template_button_click_17_listener() {
      ctx.selectedStatus = "rejected";
      return ctx.onFilterChange();
    });
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 11)(20, "button", 12);
    \u0275\u0275listener("click", function ReviewsComponent_Template_button_click_20_listener() {
      return ctx.toggleSelectAll();
    });
    \u0275\u0275element(21, "i", 13);
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(24, ReviewsComponent_div_24_Template, 13, 1, "div", 14)(25, ReviewsComponent_div_25_Template, 2, 2, "div", 15)(26, ReviewsComponent_div_26_Template, 10, 0, "div", 16)(27, ReviewsComponent_div_27_Template, 2, 1, "div", 15)(28, ReviewsComponent_div_28_Template, 29, 8, "div", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.loading);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.searchQuery);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx.selectedStatus === "all");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" All (", ctx.reviews.length, ") ");
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx.selectedStatus === "approved");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Approved (", ctx.approvedCount, ") ");
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx.selectedStatus === "pending");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Pending (", ctx.pendingCount, ") ");
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx.selectedStatus === "rejected");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Rejected (", ctx.rejectedCount, ") ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx.allVisibleSelected ? "bi-check-square-fill text-accent" : "bi-square");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.allVisibleSelected ? "Deselect All" : "Select All");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.selectedCount > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading && ctx.filteredReviews.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading && ctx.filteredReviews.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading && ctx.filteredReviews.length > 0);
  }
}, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, AdminShellComponent, TitleCasePipe, DatePipe], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.reviews-page[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: -400px 0;\n  }\n  100% {\n    background-position: 400px 0;\n  }\n}\n.shimmer[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      rgba(0, 0, 0, 0.04) 25%,\n      rgba(0, 0, 0, 0.09) 50%,\n      rgba(0, 0, 0, 0.04) 75%);\n  background-size: 800px 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.5s infinite linear;\n  border-radius: 6px;\n}\n.skeleton-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  flex-shrink: 0;\n}\n.skeleton-avatar[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  flex-shrink: 0;\n}\n.skeleton-line[_ngcontent-%COMP%] {\n  height: 14px;\n  border-radius: 4px;\n}\n.skeleton-line.sm[_ngcontent-%COMP%] {\n  width: 64px;\n}\n.skeleton-line.md[_ngcontent-%COMP%] {\n  width: 120px;\n}\n.skeleton-line.lg[_ngcontent-%COMP%] {\n  width: 180px;\n}\n.reviews-summary[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.summary-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: var(--app-radius, 14px);\n  padding: 16px 18px;\n  box-shadow: var(--app-shadow-soft, 0 2px 8px rgba(0, 0, 0, 0.04));\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  transition: transform 0.15s ease, box-shadow 0.15s ease;\n}\n.summary-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--app-shadow, 0 4px 14px rgba(0, 0, 0, 0.08));\n}\n.summary-card[_ngcontent-%COMP%]   .summary-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.25rem;\n  flex-shrink: 0;\n}\n.summary-card[_ngcontent-%COMP%]   .summary-icon.tone-primary[_ngcontent-%COMP%] {\n  background: rgba(29, 122, 109, 0.12);\n  color: var(--app-accent, #1d7a6d);\n}\n.summary-card[_ngcontent-%COMP%]   .summary-icon.tone-success[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #10b981;\n}\n.summary-card[_ngcontent-%COMP%]   .summary-icon.tone-warning[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #f59e0b;\n}\n.summary-card[_ngcontent-%COMP%]   .summary-icon.tone-secondary[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #3b82f6;\n}\n.summary-card[_ngcontent-%COMP%]   .summary-copy[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.summary-card[_ngcontent-%COMP%]   .summary-copy[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.45rem;\n  font-weight: 800;\n  color: var(--app-ink, #111827);\n  line-height: 1.2;\n}\n.summary-card[_ngcontent-%COMP%]   .summary-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 2px 0 0;\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: var(--app-ink-muted, #6b7280);\n}\n.reviews-toolbar-card[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n  background: #fff;\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: var(--app-radius, 14px);\n  padding: 12px 16px;\n  margin-bottom: 20px;\n  box-shadow: var(--app-shadow-soft, 0 2px 8px rgba(0, 0, 0, 0.04));\n  flex-wrap: wrap;\n}\n.toolbar-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex: 1 1 320px;\n  flex-wrap: wrap;\n}\n.search-input-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--app-surface, #f9fafb);\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: 10px;\n  padding: 8px 12px;\n  flex: 1 1 240px;\n  min-width: 200px;\n  transition: all 0.15s ease;\n}\n.search-input-wrap[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--app-accent, #1d7a6d);\n  box-shadow: 0 0 0 3px rgba(29, 122, 109, 0.12);\n  background: #fff;\n}\n.search-input-wrap[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-size: 0.9rem;\n  flex-shrink: 0;\n}\n.search-input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  flex: 1;\n  background: transparent;\n  font-size: 0.88rem;\n  color: var(--app-ink, #111827);\n}\n.search-input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.search-input-wrap[_ngcontent-%COMP%]   .clear-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: #9ca3af;\n  padding: 0;\n  cursor: pointer;\n}\n.status-chips[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.status-chip[_ngcontent-%COMP%] {\n  background: var(--app-surface, #f3f4f6);\n  border: 1px solid var(--app-border, #e5e7eb);\n  color: var(--app-ink, #4b5563);\n  font-size: 0.78rem;\n  font-weight: 600;\n  padding: 5px 12px;\n  border-radius: 999px;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.status-chip[_ngcontent-%COMP%]:hover {\n  border-color: #cbd5e1;\n  color: #111827;\n}\n.status-chip.active[_ngcontent-%COMP%] {\n  background: var(--app-accent, #1d7a6d);\n  border-color: var(--app-accent, #1d7a6d);\n  color: #fff;\n}\n.toolbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n}\n.bulk-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  border-radius: var(--app-radius, 14px);\n  padding: 10px 16px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  animation: _ngcontent-%COMP%_slide-in-bar 0.2s ease;\n}\n@keyframes _ngcontent-%COMP%_slide-in-bar {\n  from {\n    opacity: 0;\n    transform: translateY(-6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.bulk-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #166534;\n}\n.bulk-btn-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.reviews-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.review-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: var(--app-radius, 16px);\n  padding: 18px;\n  box-shadow: var(--app-shadow-soft, 0 2px 8px rgba(0, 0, 0, 0.04));\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  position: relative;\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease,\n    border-color 0.2s ease;\n}\n.review-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--app-shadow, 0 8px 20px rgba(0, 0, 0, 0.08));\n  border-color: #cbd5e1;\n}\n.review-card.review-selected[_ngcontent-%COMP%] {\n  border-color: var(--app-accent, #1d7a6d);\n  background: rgba(29, 122, 109, 0.03);\n}\n.review-select-check[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 14px;\n  right: 14px;\n  cursor: pointer;\n  z-index: 1;\n}\n.review-select-check[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n  accent-color: var(--app-accent, #1d7a6d);\n}\n.review-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 12px;\n  padding-right: 28px;\n}\n.customer-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n}\n.customer-info[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 12px;\n  object-fit: cover;\n  flex-shrink: 0;\n  background: #f1f5f9;\n}\n.customer-info[_ngcontent-%COMP%]   .customer-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.customer-info[_ngcontent-%COMP%]   .customer-meta[_ngcontent-%COMP%]   .customer-name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.98rem;\n  font-weight: 700;\n  color: var(--app-ink, #111827);\n}\n.customer-info[_ngcontent-%COMP%]   .customer-meta[_ngcontent-%COMP%]   .trek-name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: var(--app-accent, #1d7a6d);\n}\n.star-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  margin-top: 2px;\n}\n.star-row[_ngcontent-%COMP%]   .star-icon[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n.star-row[_ngcontent-%COMP%]   .star-icon.star-filled[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.star-row[_ngcontent-%COMP%]   .star-icon.star-empty[_ngcontent-%COMP%] {\n  color: #d1d5db;\n}\n.star-row[_ngcontent-%COMP%]   .star-count[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #4b5563;\n  margin-left: 4px;\n}\n.status-pill[_ngcontent-%COMP%] {\n  border-radius: 999px;\n  padding: 3px 9px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.status-pill.status-approved[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #065f46;\n  border: 1px solid #a7f3d0;\n}\n.status-pill.status-pending[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #92400e;\n  border: 1px solid #fde68a;\n}\n.status-pill.status-rejected[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #991b1b;\n  border: 1px solid #fecaca;\n}\n.comment-text[_ngcontent-%COMP%] {\n  color: var(--app-ink, #1f2937);\n  font-size: 0.9rem;\n  line-height: 1.5;\n  margin: 0;\n}\n.admin-reply-box[_ngcontent-%COMP%] {\n  background: rgba(29, 122, 109, 0.06);\n  border-left: 3px solid var(--app-accent, #1d7a6d);\n  border-radius: 8px;\n  padding: 10px 12px;\n}\n.admin-reply-box[_ngcontent-%COMP%]   .reply-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.78rem;\n  color: var(--app-accent, #1d7a6d);\n  margin-bottom: 4px;\n}\n.admin-reply-box[_ngcontent-%COMP%]   .reply-head[_ngcontent-%COMP%]   .reply-date[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #6b7280;\n}\n.admin-reply-box[_ngcontent-%COMP%]   .reply-head[_ngcontent-%COMP%]   .reply-del-btn[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: none;\n  border: none;\n  font-size: 1.1rem;\n  color: #9ca3af;\n  cursor: pointer;\n  line-height: 1;\n  padding: 0 4px;\n}\n.admin-reply-box[_ngcontent-%COMP%]   .reply-head[_ngcontent-%COMP%]   .reply-del-btn[_ngcontent-%COMP%]:hover {\n  color: #ef4444;\n}\n.admin-reply-box[_ngcontent-%COMP%]   .reply-content[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.84rem;\n  color: #111827;\n  line-height: 1.4;\n}\n.reply-input-panel[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: 10px;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.reply-input-panel[_ngcontent-%COMP%]   .reply-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #fff;\n  border: 1px solid #cbd5e1;\n  border-radius: 8px;\n  padding: 8px 10px;\n  font-size: 0.85rem;\n  outline: none;\n  resize: vertical;\n}\n.reply-input-panel[_ngcontent-%COMP%]   .reply-textarea[_ngcontent-%COMP%]:focus {\n  border-color: var(--app-accent, #1d7a6d);\n}\n.reply-input-panel[_ngcontent-%COMP%]   .reply-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 6px;\n}\n.review-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-top: 1px solid var(--app-border, #f1f5f9);\n  padding-top: 10px;\n  margin-top: auto;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.review-footer[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--app-ink-muted, #6b7280);\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.review-footer[_ngcontent-%COMP%]   .footer-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.reply-trigger-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: 6px;\n  padding: 4px 8px;\n  font-size: 0.76rem;\n  font-weight: 600;\n  color: var(--app-accent, #1d7a6d);\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  transition: all 0.15s ease;\n}\n.reply-trigger-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(29, 122, 109, 0.08);\n  border-color: rgba(29, 122, 109, 0.25);\n}\n.quick-mod-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.icon-btn-pill[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  border: 1px solid transparent;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.8rem;\n  cursor: pointer;\n  transition: transform 0.15s ease;\n}\n.icon-btn-pill.success[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #047857;\n  border-color: #a7f3d0;\n}\n.icon-btn-pill.danger[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #b91c1c;\n  border-color: #fecaca;\n}\n.icon-btn-pill[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px 24px;\n  background: #fff;\n  border: 1px dashed var(--app-border, #cbd5e1);\n  border-radius: var(--app-radius, 14px);\n  margin-bottom: 24px;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  margin: 0 auto 16px;\n  border-radius: 50%;\n  background: rgba(29, 122, 109, 0.08);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: var(--app-accent, #1d7a6d);\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 6px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #111827;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 20px;\n  font-size: 0.9rem;\n  color: #6b7280;\n}\n@media (max-width: 1024px) {\n  .reviews-summary[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .reviews-summary[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 10px;\n  }\n  .reviews-toolbar-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .reviews-toolbar-card[_ngcontent-%COMP%]   .toolbar-left[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .reviews-toolbar-card[_ngcontent-%COMP%]   .toolbar-right[_ngcontent-%COMP%] {\n    justify-content: flex-end;\n  }\n  .search-input-wrap[_ngcontent-%COMP%] {\n    width: 100%;\n    flex: 1 1 100%;\n  }\n  .reviews-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=reviews.component.css.map */'] });
var ReviewsComponent = _ReviewsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReviewsComponent, [{
    type: Component,
    args: [{ selector: "app-reviews", standalone: true, imports: [CommonModule, FormsModule, AdminShellComponent], schemas: [CUSTOM_ELEMENTS_SCHEMA], template: `<div class="reviews-page">
  <app-admin-shell
    sectionLabel="Reviews"
    title="Customer Reviews & Ratings"
    subtitle="Moderate trekker feedback, manage public reviews, and publish verified admin responses.">

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 SUMMARY METRIC CARDS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <div class="reviews-summary" *ngIf="!loading">
      <div class="summary-card">
        <div class="summary-icon tone-primary">
          <i class="bi bi-chat-square-quote-fill"></i>
        </div>
        <div class="summary-copy">
          <h3>{{ totalCount }}</h3>
          <p>Total Reviews</p>
        </div>
      </div>

      <div class="summary-card">
        <div class="summary-icon tone-success">
          <i class="bi bi-check-circle-fill"></i>
        </div>
        <div class="summary-copy">
          <h3>{{ approvedCount }}</h3>
          <p>Approved &amp; Live</p>
        </div>
      </div>

      <div class="summary-card">
        <div class="summary-icon tone-warning">
          <i class="bi bi-clock-history"></i>
        </div>
        <div class="summary-copy">
          <h3>{{ pendingCount }}</h3>
          <p>Pending Moderation</p>
        </div>
      </div>

      <div class="summary-card">
        <div class="summary-icon tone-secondary">
          <i class="bi bi-star-fill"></i>
        </div>
        <div class="summary-copy">
          <h3>{{ averageRating }} \u2605</h3>
          <p>Average Rating</p>
        </div>
      </div>
    </div>

    <!-- Skeletons -->
    <div class="reviews-summary" *ngIf="loading">
      <div class="summary-card skeleton-card" *ngFor="let i of [1,2,3,4]">
        <div class="skeleton-icon shimmer"></div>
        <div class="summary-copy">
          <div class="skeleton-line lg shimmer mb-1"></div>
          <div class="skeleton-line sm shimmer"></div>
        </div>
      </div>
    </div>

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 SEARCH & FILTER TOOLBAR \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <div class="reviews-toolbar-card">
      <div class="toolbar-left">
        <div class="search-input-wrap">
          <i class="bi bi-search"></i>
          <input
            type="text"
            [(ngModel)]="searchQuery"
            (ngModelChange)="onFilterChange()"
            placeholder="Search by customer name, trek, or review comment..." />
          <button
            type="button"
            class="clear-btn"
            *ngIf="searchQuery"
            (click)="searchQuery = ''; onFilterChange()"
            title="Clear search">
            <i class="bi bi-x-circle-fill"></i>
          </button>
        </div>

        <div class="status-chips">
          <button
            type="button"
            class="status-chip"
            [class.active]="selectedStatus === 'all'"
            (click)="selectedStatus = 'all'; onFilterChange()">
            All ({{ reviews.length }})
          </button>
          <button
            type="button"
            class="status-chip"
            [class.active]="selectedStatus === 'approved'"
            (click)="selectedStatus = 'approved'; onFilterChange()">
            Approved ({{ approvedCount }})
          </button>
          <button
            type="button"
            class="status-chip"
            [class.active]="selectedStatus === 'pending'"
            (click)="selectedStatus = 'pending'; onFilterChange()">
            Pending ({{ pendingCount }})
          </button>
          <button
            type="button"
            class="status-chip"
            [class.active]="selectedStatus === 'rejected'"
            (click)="selectedStatus = 'rejected'; onFilterChange()">
            Rejected ({{ rejectedCount }})
          </button>
        </div>
      </div>

      <div class="toolbar-right">
        <button class="btn-app ghost btn-sm" type="button" (click)="toggleSelectAll()">
          <i class="bi" [ngClass]="allVisibleSelected ? 'bi-check-square-fill text-accent' : 'bi-square'"></i>
          <span>{{ allVisibleSelected ? 'Deselect All' : 'Select All' }}</span>
        </button>
      </div>
    </div>

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 BULK ACTION BAR \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <div class="bulk-bar" *ngIf="selectedCount > 0">
      <span class="bulk-label"><i class="bi bi-check2-square me-1"></i>{{ selectedCount }} selected</span>
      <div class="bulk-btn-group">
        <button class="btn-app primary btn-sm" type="button" (click)="bulkApprove()">
          <i class="bi bi-check2-circle"></i> Approve Selected
        </button>
        <button class="btn-app danger btn-sm" type="button" (click)="bulkReject()">
          <i class="bi bi-x-circle"></i> Reject Selected
        </button>
        <button class="btn-app ghost btn-sm" type="button" (click)="clearSelection()">Clear</button>
      </div>
    </div>

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 LOADING SKELETON (CARDS) \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <div class="reviews-grid" *ngIf="loading">
      <div class="review-card skeleton-card" *ngFor="let i of [1,2,3,4,5,6]">
        <div class="review-top">
          <div class="skeleton-avatar shimmer"></div>
          <div style="flex:1">
            <div class="skeleton-line md shimmer mb-2"></div>
            <div class="skeleton-line sm shimmer"></div>
          </div>
        </div>
        <div class="skeleton-line lg shimmer mt-2"></div>
        <div class="skeleton-line md shimmer mt-1"></div>
      </div>
    </div>

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 EMPTY STATE \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <div class="empty-state surface-card" *ngIf="!loading && filteredReviews.length === 0">
      <div class="empty-icon">
        <i class="bi bi-chat-square-quote"></i>
      </div>
      <h3>No Reviews Found</h3>
      <p>No customer reviews match your search or filter criteria.</p>
      <button class="btn-app ghost" type="button" (click)="resetFilters()">
        <i class="bi bi-arrow-counterclockwise"></i> Reset Filters
      </button>
    </div>

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 REVIEWS GRID \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <div class="reviews-grid" *ngIf="!loading && filteredReviews.length > 0">
      <div
        class="review-card"
        *ngFor="let review of paginatedReviews"
        [class.review-selected]="selectedReviewIds.has(review.id)">

        <!-- Selection Checkbox -->
        <label class="review-select-check" title="Select for bulk moderation">
          <input
            type="checkbox"
            [checked]="selectedReviewIds.has(review.id)"
            (change)="toggleReviewSelection(review.id)" />
        </label>

        <!-- Top Row: Avatar + Name + Stars -->
        <div class="review-top">
          <div class="customer-info">
            <img loading="lazy" decoding="async" [src]="review.avatar" [alt]="review.customerName" class="avatar" />
            <div class="customer-meta">
              <h4 class="customer-name">{{ review.customerName }}</h4>
              <p class="trek-name"><i class="bi bi-compass me-1"></i>{{ review.trekName }}</p>
              <!-- Star Rating -->
              <div class="star-row">
                <i
                  *ngFor="let filled of getStarArray(review.likes)"
                  class="bi star-icon"
                  [ngClass]="filled ? 'bi-star-fill star-filled' : 'bi-star star-empty'">
                </i>
                <span class="star-count">{{ review.likes }}/5</span>
              </div>
            </div>
          </div>
          <span class="status-pill" [ngClass]="'status-' + review.status">
            {{ review.status | titlecase }}
          </span>
        </div>

        <!-- Comment Body -->
        <p class="comment-text">{{ review.comment }}</p>

        <!-- Existing Admin Reply -->
        <div class="admin-reply-box" *ngIf="review.adminReply">
          <div class="reply-head">
            <span><i class="bi bi-shield-check text-accent"></i> <strong>Admin Response</strong></span>
            <span class="reply-date">{{ review.repliedAt }}</span>
            <button
              class="reply-del-btn"
              *ngIf="authService.hasPermission('reviews.manage')"
              (click)="deleteReply(review)"
              title="Delete reply">&times;</button>
          </div>
          <p class="reply-content">{{ review.adminReply }}</p>
        </div>

        <!-- Inline Reply Input Box -->
        <div class="reply-input-panel" *ngIf="replyingReviewId === review.id">
          <textarea
            class="reply-textarea"
            rows="2"
            [(ngModel)]="replyText"
            placeholder="Write an official response to this guest review...">
          </textarea>
          <div class="reply-actions">
            <button class="btn-app ghost btn-xs" type="button" (click)="toggleReply(review.id)">Cancel</button>
            <button class="btn-app primary btn-xs" type="button" (click)="submitReply(review)" [disabled]="!replyText.trim()">
              <i class="bi bi-send"></i> Send Reply
            </button>
          </div>
        </div>

        <!-- Card Footer -->
        <div class="review-footer">
          <span class="date">
            <i class="bi bi-calendar-event"></i>
            {{ review.date | date:'dd MMM yyyy' }}
          </span>

          <div class="footer-actions">
            <button
              class="reply-trigger-btn"
              *ngIf="authService.hasPermission('reviews.manage')"
              (click)="toggleReply(review.id)">
              <i class="bi bi-reply"></i>
              {{ review.adminReply ? 'Edit Reply' : 'Reply' }}
            </button>

            <!-- Pending status quick actions -->
            <div class="quick-mod-buttons" *ngIf="review.status === 'pending' && authService.hasPermission('reviews.manage')">
              <button class="icon-btn-pill success" (click)="updateReviewStatus(review, 'approved')" title="Approve review">
                <i class="bi bi-check-lg"></i>
              </button>
              <button class="icon-btn-pill danger" (click)="updateReviewStatus(review, 'rejected')" title="Reject review">
                <i class="bi bi-x-lg"></i>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 PAGINATION CONTROLS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <div class="pagination-shell" *ngIf="!loading && filteredReviews.length > 0">
      <div class="pagination-inner">
        <div class="pagination-info">
          Showing <strong>{{ (currentPage - 1) * Number(pageSize) + 1 }}</strong> to
          <strong>{{ Math.min(currentPage * Number(pageSize), filteredReviews.length) }}</strong> of
          <strong>{{ filteredReviews.length }}</strong> reviews
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
`, styles: ['@charset "UTF-8";\n\n/* src/app/reviews/reviews.component.scss */\n:host {\n  display: block;\n}\n.reviews-page {\n  --background: transparent;\n}\n@keyframes shimmer {\n  0% {\n    background-position: -400px 0;\n  }\n  100% {\n    background-position: 400px 0;\n  }\n}\n.shimmer {\n  background:\n    linear-gradient(\n      90deg,\n      rgba(0, 0, 0, 0.04) 25%,\n      rgba(0, 0, 0, 0.09) 50%,\n      rgba(0, 0, 0, 0.04) 75%);\n  background-size: 800px 100%;\n  animation: shimmer 1.5s infinite linear;\n  border-radius: 6px;\n}\n.skeleton-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  flex-shrink: 0;\n}\n.skeleton-avatar {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  flex-shrink: 0;\n}\n.skeleton-line {\n  height: 14px;\n  border-radius: 4px;\n}\n.skeleton-line.sm {\n  width: 64px;\n}\n.skeleton-line.md {\n  width: 120px;\n}\n.skeleton-line.lg {\n  width: 180px;\n}\n.reviews-summary {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.summary-card {\n  background: #fff;\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: var(--app-radius, 14px);\n  padding: 16px 18px;\n  box-shadow: var(--app-shadow-soft, 0 2px 8px rgba(0, 0, 0, 0.04));\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  transition: transform 0.15s ease, box-shadow 0.15s ease;\n}\n.summary-card:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--app-shadow, 0 4px 14px rgba(0, 0, 0, 0.08));\n}\n.summary-card .summary-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.25rem;\n  flex-shrink: 0;\n}\n.summary-card .summary-icon.tone-primary {\n  background: rgba(29, 122, 109, 0.12);\n  color: var(--app-accent, #1d7a6d);\n}\n.summary-card .summary-icon.tone-success {\n  background: #ecfdf5;\n  color: #10b981;\n}\n.summary-card .summary-icon.tone-warning {\n  background: #fffbeb;\n  color: #f59e0b;\n}\n.summary-card .summary-icon.tone-secondary {\n  background: #eff6ff;\n  color: #3b82f6;\n}\n.summary-card .summary-copy {\n  display: flex;\n  flex-direction: column;\n}\n.summary-card .summary-copy h3 {\n  margin: 0;\n  font-size: 1.45rem;\n  font-weight: 800;\n  color: var(--app-ink, #111827);\n  line-height: 1.2;\n}\n.summary-card .summary-copy p {\n  margin: 2px 0 0;\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: var(--app-ink-muted, #6b7280);\n}\n.reviews-toolbar-card {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n  background: #fff;\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: var(--app-radius, 14px);\n  padding: 12px 16px;\n  margin-bottom: 20px;\n  box-shadow: var(--app-shadow-soft, 0 2px 8px rgba(0, 0, 0, 0.04));\n  flex-wrap: wrap;\n}\n.toolbar-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex: 1 1 320px;\n  flex-wrap: wrap;\n}\n.search-input-wrap {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--app-surface, #f9fafb);\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: 10px;\n  padding: 8px 12px;\n  flex: 1 1 240px;\n  min-width: 200px;\n  transition: all 0.15s ease;\n}\n.search-input-wrap:focus-within {\n  border-color: var(--app-accent, #1d7a6d);\n  box-shadow: 0 0 0 3px rgba(29, 122, 109, 0.12);\n  background: #fff;\n}\n.search-input-wrap i {\n  color: #9ca3af;\n  font-size: 0.9rem;\n  flex-shrink: 0;\n}\n.search-input-wrap input {\n  border: none;\n  outline: none;\n  flex: 1;\n  background: transparent;\n  font-size: 0.88rem;\n  color: var(--app-ink, #111827);\n}\n.search-input-wrap input::placeholder {\n  color: #9ca3af;\n}\n.search-input-wrap .clear-btn {\n  background: transparent;\n  border: none;\n  color: #9ca3af;\n  padding: 0;\n  cursor: pointer;\n}\n.status-chips {\n  display: flex;\n  gap: 4px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.status-chip {\n  background: var(--app-surface, #f3f4f6);\n  border: 1px solid var(--app-border, #e5e7eb);\n  color: var(--app-ink, #4b5563);\n  font-size: 0.78rem;\n  font-weight: 600;\n  padding: 5px 12px;\n  border-radius: 999px;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.status-chip:hover {\n  border-color: #cbd5e1;\n  color: #111827;\n}\n.status-chip.active {\n  background: var(--app-accent, #1d7a6d);\n  border-color: var(--app-accent, #1d7a6d);\n  color: #fff;\n}\n.toolbar-right {\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n}\n.bulk-bar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  border-radius: var(--app-radius, 14px);\n  padding: 10px 16px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  animation: slide-in-bar 0.2s ease;\n}\n@keyframes slide-in-bar {\n  from {\n    opacity: 0;\n    transform: translateY(-6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.bulk-label {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #166534;\n}\n.bulk-btn-group {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.reviews-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.review-card {\n  background: #fff;\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: var(--app-radius, 16px);\n  padding: 18px;\n  box-shadow: var(--app-shadow-soft, 0 2px 8px rgba(0, 0, 0, 0.04));\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  position: relative;\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease,\n    border-color 0.2s ease;\n}\n.review-card:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--app-shadow, 0 8px 20px rgba(0, 0, 0, 0.08));\n  border-color: #cbd5e1;\n}\n.review-card.review-selected {\n  border-color: var(--app-accent, #1d7a6d);\n  background: rgba(29, 122, 109, 0.03);\n}\n.review-select-check {\n  position: absolute;\n  top: 14px;\n  right: 14px;\n  cursor: pointer;\n  z-index: 1;\n}\n.review-select-check input[type=checkbox] {\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n  accent-color: var(--app-accent, #1d7a6d);\n}\n.review-top {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 12px;\n  padding-right: 28px;\n}\n.customer-info {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n}\n.customer-info .avatar {\n  width: 46px;\n  height: 46px;\n  border-radius: 12px;\n  object-fit: cover;\n  flex-shrink: 0;\n  background: #f1f5f9;\n}\n.customer-info .customer-meta {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.customer-info .customer-meta .customer-name {\n  margin: 0;\n  font-size: 0.98rem;\n  font-weight: 700;\n  color: var(--app-ink, #111827);\n}\n.customer-info .customer-meta .trek-name {\n  margin: 0;\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: var(--app-accent, #1d7a6d);\n}\n.star-row {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  margin-top: 2px;\n}\n.star-row .star-icon {\n  font-size: 0.85rem;\n}\n.star-row .star-icon.star-filled {\n  color: #f59e0b;\n}\n.star-row .star-icon.star-empty {\n  color: #d1d5db;\n}\n.star-row .star-count {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #4b5563;\n  margin-left: 4px;\n}\n.status-pill {\n  border-radius: 999px;\n  padding: 3px 9px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.status-pill.status-approved {\n  background: #ecfdf5;\n  color: #065f46;\n  border: 1px solid #a7f3d0;\n}\n.status-pill.status-pending {\n  background: #fffbeb;\n  color: #92400e;\n  border: 1px solid #fde68a;\n}\n.status-pill.status-rejected {\n  background: #fef2f2;\n  color: #991b1b;\n  border: 1px solid #fecaca;\n}\n.comment-text {\n  color: var(--app-ink, #1f2937);\n  font-size: 0.9rem;\n  line-height: 1.5;\n  margin: 0;\n}\n.admin-reply-box {\n  background: rgba(29, 122, 109, 0.06);\n  border-left: 3px solid var(--app-accent, #1d7a6d);\n  border-radius: 8px;\n  padding: 10px 12px;\n}\n.admin-reply-box .reply-head {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.78rem;\n  color: var(--app-accent, #1d7a6d);\n  margin-bottom: 4px;\n}\n.admin-reply-box .reply-head .reply-date {\n  font-size: 0.72rem;\n  color: #6b7280;\n}\n.admin-reply-box .reply-head .reply-del-btn {\n  margin-left: auto;\n  background: none;\n  border: none;\n  font-size: 1.1rem;\n  color: #9ca3af;\n  cursor: pointer;\n  line-height: 1;\n  padding: 0 4px;\n}\n.admin-reply-box .reply-head .reply-del-btn:hover {\n  color: #ef4444;\n}\n.admin-reply-box .reply-content {\n  margin: 0;\n  font-size: 0.84rem;\n  color: #111827;\n  line-height: 1.4;\n}\n.reply-input-panel {\n  background: #f8fafc;\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: 10px;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.reply-input-panel .reply-textarea {\n  width: 100%;\n  background: #fff;\n  border: 1px solid #cbd5e1;\n  border-radius: 8px;\n  padding: 8px 10px;\n  font-size: 0.85rem;\n  outline: none;\n  resize: vertical;\n}\n.reply-input-panel .reply-textarea:focus {\n  border-color: var(--app-accent, #1d7a6d);\n}\n.reply-input-panel .reply-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 6px;\n}\n.review-footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-top: 1px solid var(--app-border, #f1f5f9);\n  padding-top: 10px;\n  margin-top: auto;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.review-footer .date {\n  font-size: 0.78rem;\n  color: var(--app-ink-muted, #6b7280);\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.review-footer .footer-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.reply-trigger-btn {\n  background: transparent;\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: 6px;\n  padding: 4px 8px;\n  font-size: 0.76rem;\n  font-weight: 600;\n  color: var(--app-accent, #1d7a6d);\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  transition: all 0.15s ease;\n}\n.reply-trigger-btn:hover {\n  background: rgba(29, 122, 109, 0.08);\n  border-color: rgba(29, 122, 109, 0.25);\n}\n.quick-mod-buttons {\n  display: flex;\n  gap: 4px;\n}\n.icon-btn-pill {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  border: 1px solid transparent;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.8rem;\n  cursor: pointer;\n  transition: transform 0.15s ease;\n}\n.icon-btn-pill.success {\n  background: #ecfdf5;\n  color: #047857;\n  border-color: #a7f3d0;\n}\n.icon-btn-pill.danger {\n  background: #fef2f2;\n  color: #b91c1c;\n  border-color: #fecaca;\n}\n.icon-btn-pill:hover {\n  transform: scale(1.1);\n}\n.empty-state {\n  text-align: center;\n  padding: 48px 24px;\n  background: #fff;\n  border: 1px dashed var(--app-border, #cbd5e1);\n  border-radius: var(--app-radius, 14px);\n  margin-bottom: 24px;\n}\n.empty-state .empty-icon {\n  width: 64px;\n  height: 64px;\n  margin: 0 auto 16px;\n  border-radius: 50%;\n  background: rgba(29, 122, 109, 0.08);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.empty-state .empty-icon i {\n  font-size: 28px;\n  color: var(--app-accent, #1d7a6d);\n}\n.empty-state h3 {\n  margin: 0 0 6px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #111827;\n}\n.empty-state p {\n  margin: 0 0 20px;\n  font-size: 0.9rem;\n  color: #6b7280;\n}\n@media (max-width: 1024px) {\n  .reviews-summary {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .reviews-summary {\n    grid-template-columns: 1fr;\n    gap: 10px;\n  }\n  .reviews-toolbar-card {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .reviews-toolbar-card .toolbar-left {\n    width: 100%;\n  }\n  .reviews-toolbar-card .toolbar-right {\n    justify-content: flex-end;\n  }\n  .search-input-wrap {\n    width: 100%;\n    flex: 1 1 100%;\n  }\n  .reviews-grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=reviews.component.css.map */\n'] }]
  }], () => [{ type: Reviews }, { type: DropdownManagerService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReviewsComponent, { className: "ReviewsComponent", filePath: "src/app/reviews/reviews.component.ts", lineNumber: 31 });
})();

// src/app/reviews/reviews-module.ts
var routes = [{ path: "", component: ReviewsComponent }];
var _ReviewsModule = class _ReviewsModule {
};
_ReviewsModule.\u0275fac = function ReviewsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ReviewsModule)();
};
_ReviewsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ReviewsModule });
_ReviewsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, ReviewsComponent, RouterModule.forChild(routes)] });
var ReviewsModule = _ReviewsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReviewsModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        CommonModule,
        ReviewsComponent,
        RouterModule.forChild(routes)
      ]
    }]
  }], null, null);
})();
export {
  ReviewsModule
};
//# sourceMappingURL=reviews-module-NOVZWUA7.js.map
