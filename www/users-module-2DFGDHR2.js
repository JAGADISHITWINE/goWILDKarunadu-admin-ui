import {
  Users
} from "./chunk-VISOL5UA.js";
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
import "./chunk-D4XXJJII.js";
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
  TitleCasePipe,
  __async,
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
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-KQE4QDNK.js";

// src/app/users/users.component.ts
var _c0 = () => [1, 2, 3, 4];
var _c1 = () => [1, 2, 3, 4, 5, 6];
function UsersComponent_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39)(2, "div", 40);
    \u0275\u0275element(3, "i", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 42)(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, "Total Registered");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 39)(10, "div", 43);
    \u0275\u0275element(11, "i", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 42)(13, "h3");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p");
    \u0275\u0275text(16, "Active Users");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 39)(18, "div", 45);
    \u0275\u0275element(19, "i", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 42)(21, "h3");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p");
    \u0275\u0275text(24, "Blocked Users");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 39)(26, "div", 47);
    \u0275\u0275element(27, "i", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 42)(29, "h3");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p");
    \u0275\u0275text(32, "Pending / Inactive");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.totalUsersCount);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.activeUsersCount);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.blockedUsersCount);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.pendingUsersCount);
  }
}
function UsersComponent_div_2_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275element(1, "div", 51);
    \u0275\u0275elementStart(2, "div", 42);
    \u0275\u0275element(3, "div", 52)(4, "div", 53);
    \u0275\u0275elementEnd()();
  }
}
function UsersComponent_div_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275template(1, UsersComponent_div_2_div_2_div_1_Template, 5, 0, "div", 49);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c0));
  }
}
function UsersComponent_div_2_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 54);
    \u0275\u0275listener("click", function UsersComponent_div_2_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.searchQuery = "";
      return \u0275\u0275resetView(ctx_r1.onFilterChange());
    });
    \u0275\u0275element(1, "i", 55);
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_div_2_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 56);
  }
}
function UsersComponent_div_2_option_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 57);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r4 = ctx.$implicit;
    \u0275\u0275property("value", opt_r4.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r4.label);
  }
}
function UsersComponent_div_2_div_43_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 61);
    \u0275\u0275element(2, "div", 62);
    \u0275\u0275elementStart(3, "div", 63);
    \u0275\u0275element(4, "div", 52)(5, "div", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "div", 64);
    \u0275\u0275elementStart(7, "div", 65);
    \u0275\u0275element(8, "div", 53)(9, "div", 53)(10, "div", 53);
    \u0275\u0275elementEnd()();
  }
}
function UsersComponent_div_2_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275template(1, UsersComponent_div_2_div_43_div_1_Template, 11, 0, "div", 59);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c1));
  }
}
function UsersComponent_div_2_div_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 66)(1, "div", 67);
    \u0275\u0275element(2, "i", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No Users Found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "No user accounts match your search or filter criteria.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 69);
    \u0275\u0275listener("click", function UsersComponent_div_2_div_44_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.resetFilters());
    });
    \u0275\u0275element(8, "i", 32);
    \u0275\u0275text(9, " Reset Filters ");
    \u0275\u0275elementEnd()();
  }
}
function UsersComponent_div_2_div_45_div_1_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 96);
  }
  if (rf & 2) {
    const user_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", user_r7.avatar, \u0275\u0275sanitizeUrl)("alt", user_r7.name);
  }
}
function UsersComponent_div_2_div_45_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 97);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("background", ctx_r1.getAvatarColor(user_r7.name));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInitials(user_r7.name), " ");
  }
}
function UsersComponent_div_2_div_45_div_1_p_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 98);
    \u0275\u0275element(1, "i", 99);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r7.phone);
  }
}
function UsersComponent_div_2_div_45_div_1_button_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 100);
    \u0275\u0275listener("click", function UsersComponent_div_2_div_45_div_1_button_47_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const user_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.activateUser(user_r7));
    });
    \u0275\u0275element(1, "i", 101);
    \u0275\u0275text(2, " Activate ");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_div_2_div_45_div_1_button_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 102);
    \u0275\u0275listener("click", function UsersComponent_div_2_div_45_div_1_button_48_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const user_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.confirmBlock(user_r7));
    });
    \u0275\u0275element(1, "i", 103);
    \u0275\u0275text(2, " Block ");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_div_2_div_45_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 71)(1, "div", 61)(2, "div", 72);
    \u0275\u0275template(3, UsersComponent_div_2_div_45_div_1_img_3_Template, 1, 2, "img", 73)(4, UsersComponent_div_2_div_45_div_1_div_4_Template, 2, 3, "div", 74);
    \u0275\u0275element(5, "span", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 76)(7, "h3", 77);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 78);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, UsersComponent_div_2_div_45_div_1_p_11_Template, 3, 1, "p", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 80);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(15, "div", 64);
    \u0275\u0275elementStart(16, "div", 65)(17, "div", 81)(18, "span", 82);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 83);
    \u0275\u0275text(21, "Bookings");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(22, "div", 84);
    \u0275\u0275elementStart(23, "div", 81)(24, "span", 85);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 83);
    \u0275\u0275text(28, "Total Spent");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(29, "div", 84);
    \u0275\u0275elementStart(30, "div", 81)(31, "span", 86);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 83);
    \u0275\u0275text(35, "Joined");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(36, "div", 64);
    \u0275\u0275elementStart(37, "div", 87)(38, "button", 88);
    \u0275\u0275listener("click", function UsersComponent_div_2_div_45_div_1_Template_button_click_38_listener() {
      const user_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.viewUser(user_r7.id));
    });
    \u0275\u0275element(39, "i", 89);
    \u0275\u0275text(40, " View ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "button", 90);
    \u0275\u0275listener("click", function UsersComponent_div_2_div_45_div_1_Template_button_click_41_listener($event) {
      const user_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openWhatsApp(user_r7, $event));
    });
    \u0275\u0275element(42, "i", 91);
    \u0275\u0275text(43, " WhatsApp ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "button", 92);
    \u0275\u0275listener("click", function UsersComponent_div_2_div_45_div_1_Template_button_click_44_listener($event) {
      const user_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openCrmDrawer(user_r7, $event));
    });
    \u0275\u0275element(45, "i", 93);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd();
    \u0275\u0275template(47, UsersComponent_div_2_div_45_div_1_button_47_Template, 3, 0, "button", 94)(48, UsersComponent_div_2_div_45_div_1_button_48_Template, 3, 0, "button", 95);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", user_r7.avatar);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !user_r7.avatar);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", user_r7.status);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r7.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", user_r7.phone && user_r7.phone !== "-");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "status-" + ctx_r1.getStatusColor(user_r7.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 14, user_r7.status), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(user_r7.totalBookings);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(26, 16, user_r7.totalSpent, "1.0-0"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(33, 19, user_r7.joinDate, "MMM yyyy"));
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate1(" Notes (", ctx_r1.getUserNoteCount(user_r7.id), ") ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", user_r7.status !== "active");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", user_r7.status !== "blocked");
  }
}
function UsersComponent_div_2_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275template(1, UsersComponent_div_2_div_45_div_1_Template, 49, 22, "div", 70);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.paginatedUsers);
  }
}
function UsersComponent_div_2_div_46_tr_20_img_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 96);
  }
  if (rf & 2) {
    const user_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", user_r11.avatar, \u0275\u0275sanitizeUrl)("alt", user_r11.name);
  }
}
function UsersComponent_div_2_div_46_tr_20_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 125);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("background", ctx_r1.getAvatarColor(user_r11.name));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInitials(user_r11.name), " ");
  }
}
function UsersComponent_div_2_div_46_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 110);
    \u0275\u0275listener("click", function UsersComponent_div_2_div_46_tr_20_Template_tr_click_0_listener() {
      const user_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.viewUser(user_r11.id));
    });
    \u0275\u0275elementStart(1, "td")(2, "div", 111)(3, "div", 112);
    \u0275\u0275template(4, UsersComponent_div_2_div_46_tr_20_img_4_Template, 1, 2, "img", 73)(5, UsersComponent_div_2_div_46_tr_20_div_5_Template, 2, 3, "div", 113);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 114)(7, "strong", 115);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 116);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "td")(12, "div", 114)(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 116);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "td")(18, "span", 80);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td", 107)(22, "span", 117);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "td", 108)(25, "strong");
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "td")(29, "span", 116);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "td", 118);
    \u0275\u0275listener("click", function UsersComponent_div_2_div_46_tr_20_Template_td_click_32_listener($event) {
      \u0275\u0275restoreView(_r10);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(33, "div", 119)(34, "button", 120);
    \u0275\u0275listener("click", function UsersComponent_div_2_div_46_tr_20_Template_button_click_34_listener($event) {
      const user_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openWhatsApp(user_r11, $event));
    });
    \u0275\u0275element(35, "i", 121);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 122);
    \u0275\u0275listener("click", function UsersComponent_div_2_div_46_tr_20_Template_button_click_36_listener($event) {
      const user_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openCrmDrawer(user_r11, $event));
    });
    \u0275\u0275element(37, "i", 123);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "button", 124);
    \u0275\u0275listener("click", function UsersComponent_div_2_div_46_tr_20_Template_button_click_38_listener() {
      const user_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.viewUser(user_r11.id));
    });
    \u0275\u0275element(39, "i", 89);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const user_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", user_r11.avatar);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !user_r11.avatar);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r11.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", user_r11.id);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(user_r11.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r11.phone);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", "status-" + ctx_r1.getStatusColor(user_r11.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 11, user_r11.status), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(user_r11.totalBookings);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(27, 13, user_r11.totalSpent, "1.0-0"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(31, 16, user_r11.joinDate, "dd MMM yyyy"));
  }
}
function UsersComponent_div_2_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104)(1, "div", 105)(2, "table", 106)(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6, "User");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Contact");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 107);
    \u0275\u0275text(12, "Bookings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 108);
    \u0275\u0275text(14, "Total Spent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Joined");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 108);
    \u0275\u0275text(18, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275template(20, UsersComponent_div_2_div_46_tr_20_Template, 40, 19, "tr", 109);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(20);
    \u0275\u0275property("ngForOf", ctx_r1.paginatedUsers);
  }
}
function UsersComponent_div_2_div_47_option_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 57);
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
function UsersComponent_div_2_div_47_ng_container_24_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 140);
    \u0275\u0275text(1, "\u2026");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_div_2_div_47_ng_container_24_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 141);
    \u0275\u0275listener("click", function UsersComponent_div_2_div_47_ng_container_24_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const p_r15 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goToPage(p_r15));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r15 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", p_r15 === ctx_r1.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r15, " ");
  }
}
function UsersComponent_div_2_div_47_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, UsersComponent_div_2_div_47_ng_container_24_span_1_Template, 2, 0, "span", 138)(2, UsersComponent_div_2_div_47_ng_container_24_button_2_Template, 2, 3, "button", 139);
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
function UsersComponent_div_2_div_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 126)(1, "div", 127)(2, "div", 128);
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
    \u0275\u0275text(12, " users ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 129)(14, "div", 130)(15, "label");
    \u0275\u0275text(16, "Per page:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "select", 131);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_div_2_div_47_Template_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.pageSize, $event) || (ctx_r1.pageSize = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function UsersComponent_div_2_div_47_Template_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageSizeChange($event));
    });
    \u0275\u0275template(18, UsersComponent_div_2_div_47_option_18_Template, 2, 2, "option", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 132)(20, "button", 133);
    \u0275\u0275listener("click", function UsersComponent_div_2_div_47_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.prevPage());
    });
    \u0275\u0275element(21, "i", 134);
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23, "Prev");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(24, UsersComponent_div_2_div_47_ng_container_24_Template, 3, 2, "ng-container", 135);
    \u0275\u0275elementStart(25, "button", 136);
    \u0275\u0275listener("click", function UsersComponent_div_2_div_47_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.nextPage());
    });
    \u0275\u0275elementStart(26, "span");
    \u0275\u0275text(27, "Next");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "i", 137);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r1.currentPage - 1) * ctx_r1.Number(ctx_r1.pageSize) + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.Math.min(ctx_r1.currentPage * ctx_r1.Number(ctx_r1.pageSize), ctx_r1.filteredUsers.length));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.filteredUsers.length);
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
function UsersComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, UsersComponent_div_2_div_1_Template, 33, 4, "div", 5)(2, UsersComponent_div_2_div_2_Template, 2, 2, "div", 5);
    \u0275\u0275elementStart(3, "div", 6)(4, "div", 7)(5, "div", 8);
    \u0275\u0275element(6, "i", 9);
    \u0275\u0275elementStart(7, "input", 10);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_div_2_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchQuery, $event) || (ctx_r1.searchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function UsersComponent_div_2_Template_input_ngModelChange_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFilterChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, UsersComponent_div_2_button_8_Template, 2, 0, "button", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 12);
    \u0275\u0275listener("click", function UsersComponent_div_2_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleFilter());
    });
    \u0275\u0275element(10, "i", 13);
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "Filters");
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, UsersComponent_div_2_span_13_Template, 1, 0, "span", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 15)(15, "div", 16)(16, "button", 17);
    \u0275\u0275listener("click", function UsersComponent_div_2_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewMode = "grid");
    });
    \u0275\u0275element(17, "i", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 19);
    \u0275\u0275listener("click", function UsersComponent_div_2_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewMode = "table");
    });
    \u0275\u0275element(19, "i", 20);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(20, "div", 21)(21, "div", 22)(22, "div", 23)(23, "label", 24);
    \u0275\u0275text(24, "Account Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 25)(26, "select", 26);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_div_2_Template_select_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedStatus, $event) || (ctx_r1.selectedStatus = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function UsersComponent_div_2_Template_select_ngModelChange_26_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFilterChange());
    });
    \u0275\u0275template(27, UsersComponent_div_2_option_27_Template, 2, 2, "option", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "i", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 23)(30, "label");
    \u0275\u0275text(31, "Joined From");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_div_2_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.joinFrom, $event) || (ctx_r1.joinFrom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function UsersComponent_div_2_Template_input_ngModelChange_32_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFilterChange());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 23)(34, "label");
    \u0275\u0275text(35, "Joined To");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_div_2_Template_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.joinTo, $event) || (ctx_r1.joinTo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function UsersComponent_div_2_Template_input_ngModelChange_36_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFilterChange());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 30)(38, "button", 31);
    \u0275\u0275listener("click", function UsersComponent_div_2_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resetFilters());
    });
    \u0275\u0275element(39, "i", 32);
    \u0275\u0275text(40, " Reset ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 33);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(43, UsersComponent_div_2_div_43_Template, 2, 2, "div", 34)(44, UsersComponent_div_2_div_44_Template, 10, 0, "div", 35)(45, UsersComponent_div_2_div_45_Template, 2, 1, "div", 34)(46, UsersComponent_div_2_div_46_Template, 21, 1, "div", 36)(47, UsersComponent_div_2_div_47_Template, 29, 8, "div", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoading);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchQuery);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.searchQuery);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.showFilterPanel);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.selectedStatus !== "all" || ctx_r1.joinFrom || ctx_r1.joinTo);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.viewMode === "grid");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.viewMode === "table");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("open", ctx_r1.showFilterPanel);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedStatus);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.statusOptions);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.joinFrom);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.joinTo);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", ctx_r1.filteredUsers.length, " result", ctx_r1.filteredUsers.length !== 1 ? "s" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoading && ctx_r1.viewMode === "grid");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoading && ctx_r1.filteredUsers.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoading && ctx_r1.viewMode === "grid" && ctx_r1.filteredUsers.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoading && ctx_r1.viewMode === "table" && ctx_r1.filteredUsers.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoading && ctx_r1.filteredUsers.length > 0);
  }
}
function UsersComponent_div_3_div_5_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 116);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2022 ", ctx_r1.user.phone);
  }
}
function UsersComponent_div_3_div_5_div_44_button_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 186);
    \u0275\u0275listener("click", function UsersComponent_div_3_div_5_div_44_button_45_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.activateUser(ctx_r1.user));
    });
    \u0275\u0275element(1, "i", 187);
    \u0275\u0275text(2, " Activate User ");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_div_3_div_5_div_44_button_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 188);
    \u0275\u0275listener("click", function UsersComponent_div_3_div_5_div_44_button_46_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.confirmBlock(ctx_r1.user));
    });
    \u0275\u0275element(1, "i", 103);
    \u0275\u0275text(2, " Block User ");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_div_3_div_5_div_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 169)(1, "div", 170)(2, "div", 171)(3, "div", 172);
    \u0275\u0275element(4, "i", 173);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 174)(6, "span", 175);
    \u0275\u0275text(7, "Full Legal Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 176);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(10, "div", 177);
    \u0275\u0275elementStart(11, "div", 171)(12, "div", 172);
    \u0275\u0275element(13, "i", 178);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 174)(15, "span", 175);
    \u0275\u0275text(16, "Email Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 179);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(19, "div", 177);
    \u0275\u0275elementStart(20, "div", 171)(21, "div", 172);
    \u0275\u0275element(22, "i", 180);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 174)(24, "span", 175);
    \u0275\u0275text(25, "Phone Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 176);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(28, "div", 177);
    \u0275\u0275elementStart(29, "div", 171)(30, "div", 172);
    \u0275\u0275element(31, "i", 181);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 174)(33, "span", 175);
    \u0275\u0275text(34, "Account Created");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 176);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "date");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(38, "div", 182)(39, "button", 183);
    \u0275\u0275listener("click", function UsersComponent_div_3_div_5_div_44_Template_button_click_39_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openWhatsApp(ctx_r1.user, $event));
    });
    \u0275\u0275element(40, "i", 121);
    \u0275\u0275text(41, " WhatsApp User ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 31);
    \u0275\u0275listener("click", function UsersComponent_div_3_div_5_div_44_Template_button_click_42_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openCrmDrawer(ctx_r1.user, $event));
    });
    \u0275\u0275element(43, "i", 123);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275template(45, UsersComponent_div_3_div_5_div_44_button_45_Template, 3, 0, "button", 184)(46, UsersComponent_div_3_div_5_div_44_button_46_Template, 3, 0, "button", 185);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.user.name);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.user.email);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.user.phone || "\u2014");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(37, 7, ctx_r1.user.joinDate || ctx_r1.user.created_at, "dd MMM yyyy"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" CRM Notes (", ctx_r1.getUserNoteCount(ctx_r1.user.id), ") ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.user.status !== "active");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.user.status !== "blocked");
  }
}
function UsersComponent_div_3_div_5_div_45_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "div", 67);
    \u0275\u0275element(2, "i", 190);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No Bookings Yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "This user has not made any trek reservations yet.");
    \u0275\u0275elementEnd()();
  }
}
function UsersComponent_div_3_div_5_div_45_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 193)(1, "div", 194)(2, "div", 195)(3, "span", 196);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4", 197);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "small", 198);
    \u0275\u0275element(8, "i", 199);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "span", 80);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 200)(15, "div", 201);
    \u0275\u0275element(16, "i", 202);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 201);
    \u0275\u0275element(20, "i", 68);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 201);
    \u0275\u0275element(23, "i", 203);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "titlecase");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const booking_r21 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("#", booking_r21.booking_reference || booking_r21.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(booking_r21.trek_name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 8, booking_r21.booking_date || booking_r21.date, "dd MMM yyyy"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", "status-" + ctx_r1.getBookingStatusColor(booking_r21.booking_status || booking_r21.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 11, booking_r21.booking_status || booking_r21.status), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" \u20B9", \u0275\u0275pipeBind2(18, 13, booking_r21.total_amount || booking_r21.amount, "1.0-0"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", booking_r21.participants, " Trekkers ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 16, booking_r21.payment_status || "Pending"), " ");
  }
}
function UsersComponent_div_3_div_5_div_45_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 191);
    \u0275\u0275template(1, UsersComponent_div_3_div_5_div_45_div_2_div_1_Template, 26, 18, "div", 192);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.bookings);
  }
}
function UsersComponent_div_3_div_5_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 169);
    \u0275\u0275template(1, UsersComponent_div_3_div_5_div_45_div_1_Template, 7, 0, "div", 35)(2, UsersComponent_div_3_div_5_div_45_div_2_Template, 2, 1, "div", 189);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.bookings.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.bookings.length > 0);
  }
}
function UsersComponent_div_3_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 146)(2, "div", 147)(3, "div", 148);
    \u0275\u0275element(4, "img", 149)(5, "span", 150);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 151)(7, "h2", 152);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 153);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 154)(12, "span", 80);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, UsersComponent_div_3_div_5_span_15_Template, 2, 1, "span", 155);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 156)(17, "div", 157)(18, "span", 158);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 159);
    \u0275\u0275text(21, "Total Bookings");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(22, "div", 160);
    \u0275\u0275elementStart(23, "div", 157)(24, "span", 161);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 159);
    \u0275\u0275text(28, "Total Spent");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(29, "div", 160);
    \u0275\u0275elementStart(30, "div", 157)(31, "span", 162);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 159);
    \u0275\u0275text(35, "Member Since");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(36, "div", 163)(37, "div", 164)(38, "button", 165);
    \u0275\u0275listener("click", function UsersComponent_div_3_div_5_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectedSegment = "details");
    });
    \u0275\u0275element(39, "i", 166);
    \u0275\u0275text(40, " Account Details ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "button", 165);
    \u0275\u0275listener("click", function UsersComponent_div_3_div_5_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectedSegment = "bookings");
    });
    \u0275\u0275element(42, "i", 167);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(44, UsersComponent_div_3_div_5_div_44_Template, 47, 10, "div", 168)(45, UsersComponent_div_3_div_5_div_45_Template, 3, 2, "div", 168);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r1.getAvatar(ctx_r1.user), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "ring-" + ctx_r1.user.status);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.user.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.user.email);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", "status-" + ctx_r1.getStatusColor(ctx_r1.user.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 17, ctx_r1.user.status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.user.phone);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.user.totalBookings || ctx_r1.bookings.length);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(26, 19, ctx_r1.user.totalSpent || 0, "1.0-0"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(33, 22, ctx_r1.user.joinDate || ctx_r1.user.created_at, "dd MMM yyyy"));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("active", ctx_r1.selectedSegment === "details");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.selectedSegment === "bookings");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Booking History (", ctx_r1.bookings.length, ") ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedSegment === "details");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedSegment === "bookings");
  }
}
function UsersComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 142)(1, "div", 143)(2, "button", 144);
    \u0275\u0275listener("click", function UsersComponent_div_3_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275element(3, "i", 145);
    \u0275\u0275text(4, " Back to All Users ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, UsersComponent_div_3_div_5_Template, 46, 25, "div", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.user);
  }
}
function UsersComponent_div_4_aside_1_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 223);
    \u0275\u0275element(1, "i", 224);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "No internal notes yet for this user. Add the first note above.");
    \u0275\u0275elementEnd()();
  }
}
function UsersComponent_div_4_aside_1_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 225)(1, "div", 226)(2, "span", 227);
    \u0275\u0275element(3, "i", 228);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 229)(6, "span", 230);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 231);
    \u0275\u0275listener("click", function UsersComponent_div_4_aside_1_div_23_Template_button_click_9_listener() {
      const note_r25 = \u0275\u0275restoreView(_r24).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteCrmNote(note_r25.id));
    });
    \u0275\u0275element(10, "i", 232);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "p", 233);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const note_r25 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(note_r25.adminName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 3, note_r25.createdAt, "MMM dd, yyyy \xB7 hh:mm a"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(note_r25.content);
  }
}
function UsersComponent_div_4_aside_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "aside", 206);
    \u0275\u0275listener("click", function UsersComponent_div_4_aside_1_Template_aside_click_0_listener($event) {
      \u0275\u0275restoreView(_r23);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 207)(2, "div", 208)(3, "span", 209);
    \u0275\u0275text(4, "INTERNAL CRM NOTES");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3", 210);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 211);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 212);
    \u0275\u0275listener("click", function UsersComponent_div_4_aside_1_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeCrmDrawer());
    });
    \u0275\u0275element(10, "i", 213);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 214)(12, "textarea", 215);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_div_4_aside_1_Template_textarea_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newNoteText, $event) || (ctx_r1.newNoteText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(13, "      ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 216)(15, "button", 217);
    \u0275\u0275listener("click", function UsersComponent_div_4_aside_1_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addCrmNote());
    });
    \u0275\u0275element(16, "i", 218);
    \u0275\u0275text(17, " Add Note ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 219)(19, "div", 220)(20, "h4");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, UsersComponent_div_4_aside_1_div_22_Template, 4, 0, "div", 221)(23, UsersComponent_div_4_aside_1_div_23_Template, 13, 6, "div", 222);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.selectedCrmUser.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.selectedCrmUser.email, " \u2022 ", ctx_r1.selectedCrmUser.phone);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newNoteText);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r1.newNoteText.trim());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Note History (", ctx_r1.userNotes.length, ")");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.userNotes.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.userNotes);
  }
}
function UsersComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 204);
    \u0275\u0275listener("click", function UsersComponent_div_4_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCrmDrawer());
    });
    \u0275\u0275template(1, UsersComponent_div_4_aside_1_Template, 24, 8, "aside", 205);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCrmUser);
  }
}
var _UsersComponent = class _UsersComponent {
  get totalPages() {
    const size = Number(this.pageSize) || 5;
    return Math.max(1, Math.ceil(this.filteredUsers.length / size));
  }
  get paginatedUsers() {
    const size = Number(this.pageSize) || 5;
    const page = Math.min(Math.max(1, this.currentPage), this.totalPages);
    const start = (page - 1) * size;
    return this.filteredUsers.slice(start, start + size);
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
  constructor(userService, route, router, dropdownService) {
    this.userService = userService;
    this.route = route;
    this.router = router;
    this.dropdownService = dropdownService;
    this.Math = Math;
    this.searchQuery = "";
    this.selectedStatus = "all";
    this.user = null;
    this.bookings = [];
    this.isLoading = true;
    this.isDetailView = false;
    this.selectedSegment = "details";
    this.showFilterPanel = false;
    this.viewMode = "grid";
    this.joinFrom = "";
    this.joinTo = "";
    this.Number = Number;
    this.currentPage = 1;
    this.pageSize = 5;
    this.pageSizeOptions = [5, 10, 20, 40];
    this.selectedCrmUser = null;
    this.showCrmDrawer = false;
    this.userNotes = [];
    this.newNoteText = "";
    this.statusOptions = [
      { value: "all", label: "All Users" }
    ];
    this.users = [];
  }
  openWhatsApp(user, event) {
    if (event)
      event.stopPropagation();
    let rawPhone = String(user?.phone || user?.phone_number || "").replace(/\D/g, "");
    if (!rawPhone || rawPhone.length < 7) {
      alert("No valid phone number available for WhatsApp.");
      return;
    }
    if (rawPhone.length === 10) {
      rawPhone = "91" + rawPhone;
    }
    const name = user?.name || "there";
    const message = encodeURIComponent(`Hello ${name}, greetings from goWILD\u2122 Karunadu Support & Operations team!`);
    const waUrl = `https://wa.me/${rawPhone}?text=${message}`;
    window.open(waUrl, "_blank");
  }
  // ── CRM Notes Handlers ──
  openCrmDrawer(user, event) {
    if (event)
      event.stopPropagation();
    this.selectedCrmUser = user;
    this.showCrmDrawer = true;
    this.newNoteText = "";
    this.loadNotesForUser(user.id);
  }
  closeCrmDrawer() {
    this.showCrmDrawer = false;
    this.selectedCrmUser = null;
    this.newNoteText = "";
  }
  loadNotesForUser(userId) {
    try {
      const stored = localStorage.getItem(`gowild_crm_notes_${userId}`);
      this.userNotes = stored ? JSON.parse(stored) : [];
    } catch {
      this.userNotes = [];
    }
  }
  addCrmNote() {
    if (!this.newNoteText.trim() || !this.selectedCrmUser)
      return;
    const newNote = {
      id: "note_" + Date.now(),
      userId: this.selectedCrmUser.id,
      adminName: "Admin Ops",
      content: this.newNoteText.trim(),
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    this.userNotes.unshift(newNote);
    localStorage.setItem(`gowild_crm_notes_${this.selectedCrmUser.id}`, JSON.stringify(this.userNotes));
    this.newNoteText = "";
  }
  deleteCrmNote(noteId) {
    if (!this.selectedCrmUser)
      return;
    this.userNotes = this.userNotes.filter((n) => n.id !== noteId);
    localStorage.setItem(`gowild_crm_notes_${this.selectedCrmUser.id}`, JSON.stringify(this.userNotes));
  }
  getUserNoteCount(userId) {
    try {
      const stored = localStorage.getItem(`gowild_crm_notes_${userId}`);
      if (!stored)
        return 0;
      const notes = JSON.parse(stored);
      return Array.isArray(notes) ? notes.length : 0;
    } catch {
      return 0;
    }
  }
  ngOnInit() {
    this.isLoading = true;
    this.loadDropdownOptions();
    this.userService.getAllUsers().subscribe({
      next: (res) => {
        const rows = this.extractUsers(res);
        this.users = rows.map((row) => this.normalizeUser(row));
        this.isLoading = false;
        this.isDetailView = false;
      },
      error: () => {
        this.users = [];
        this.isLoading = false;
      }
    });
  }
  loadDropdownOptions() {
    this.dropdownService.getGroupOptions("userStatus").pipe(take(1)).subscribe((opts) => {
      if (opts.length === 0)
        return;
      this.statusOptions = [
        { value: "all", label: "All Users" },
        ...opts.map((opt) => ({ value: opt.value, label: opt.label }))
      ];
    });
  }
  get filteredUsers() {
    let filtered = this.users;
    if (this.selectedStatus !== "all") {
      filtered = filtered.filter((u) => this.statusCategory(u.status) === this.selectedStatus);
    }
    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter((u) => String(u?.name || "").toLowerCase().includes(query) || String(u?.email || "").toLowerCase().includes(query) || String(u?.phone || "").includes(query));
    }
    if (this.joinFrom || this.joinTo) {
      const from = this.joinFrom ? new Date(this.joinFrom) : null;
      const to = this.joinTo ? new Date(this.joinTo) : null;
      if (to)
        to.setHours(23, 59, 59, 999);
      filtered = filtered.filter((u) => {
        const joined = new Date(u.joinDate);
        if (isNaN(joined.getTime()))
          return true;
        if (from && joined < from)
          return false;
        if (to && joined > to)
          return false;
        return true;
      });
    }
    return filtered;
  }
  get totalUsersCount() {
    return this.users.length;
  }
  get activeUsersCount() {
    return this.users.filter((u) => this.statusCategory(u.status) === "active").length;
  }
  get blockedUsersCount() {
    return this.users.filter((u) => this.statusCategory(u.status) === "blocked").length;
  }
  get pendingUsersCount() {
    return this.users.filter((u) => this.statusCategory(u.status) === "pending").length;
  }
  viewUser(id) {
    return __async(this, null, function* () {
      const loading = this.userService.getUserById(id).subscribe({
        next: (res) => {
          this.isLoading = false;
          this.isLoading = false;
          const data = res?.data?.data || res?.data || res;
          const user = data?.user || data;
          const bookings = Array.isArray(data?.bookings) ? data.bookings : [];
          if (user) {
            this.user = user;
            this.bookings = bookings;
            this.isDetailView = true;
          }
        },
        error: () => {
          this.isLoading = false;
          this.isLoading = false;
          this.isDetailView = false;
        }
      });
    });
  }
  confirmBlock(user) {
    return __async(this, null, function* () {
      if (window.confirm("Are you sure you want to block ${user.name}? This will suspend booking privileges.")) {
      }
    });
  }
  blockUser(user) {
    this.userService.blockUser(user.id).subscribe((res) => {
      if (res.response || res.success) {
        if (this.user)
          this.user.status = "blocked";
        const found = this.users.find((u) => u.id === user.id);
        if (found)
          found.status = "blocked";
      }
    });
  }
  activateUser(user) {
    this.userService.activateUser(user.id).subscribe((res) => {
      if (res.response || res.success) {
        if (this.user)
          this.user.status = "active";
        const found = this.users.find((u) => u.id === user.id);
        if (found)
          found.status = "active";
      }
    });
  }
  getAvatar(user) {
    return user?.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || "U")}&background=1d7a6d&color=fff&size=128`;
  }
  getStatusColor(status) {
    const s = String(status || "").toLowerCase();
    return s === "active" ? "success" : s === "blocked" ? "danger" : "warning";
  }
  getBookingStatusColor(status) {
    const map = { confirmed: "success", pending: "warning", cancelled: "danger", completed: "primary" };
    return map[status] || "medium";
  }
  goBack() {
    this.isDetailView = false;
    this.isLoading = false;
    this.selectedSegment = "details";
    this.user = null;
    this.bookings = [];
  }
  toggleFilter() {
    this.showFilterPanel = !this.showFilterPanel;
  }
  resetFilters() {
    this.searchQuery = "";
    this.selectedStatus = "all";
    this.joinFrom = "";
    this.joinTo = "";
    this.currentPage = 1;
  }
  getInitials(name) {
    if (!name || name === "-")
      return "U";
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1)
      return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  getAvatarColor(name) {
    const colors = ["#1d7a6d", "#0284c7", "#7c3aed", "#d97706", "#db2777", "#059669", "#4f46e5"];
    let hash = 0;
    const str = name || "User";
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % colors.length;
    return colors[index];
  }
  normalizeUser(row) {
    const status = this.resolveStatus(row);
    return __spreadProps(__spreadValues({}, row), {
      id: String(row?.id || ""),
      name: row?.name || row?.full_name || "-",
      email: row?.email || "-",
      phone: row?.phone || row?.phone_number || "-",
      joinDate: row?.joinDate || row?.created_at || row?.createdAt || "-",
      totalBookings: Number(row?.totalBookings ?? row?.total_bookings ?? 0),
      totalSpent: Number(row?.totalSpent ?? row?.total_spent ?? 0),
      status,
      avatar: row?.avatar || ""
    });
  }
  resolveStatus(row) {
    const status = String(row?.status || "").toLowerCase();
    if (status === "active")
      return "active";
    if (status === "blocked")
      return "blocked";
    if (status === "inactive" || status === "pending")
      return "inactive";
    const isActive = row?.is_active ?? row?.isActive;
    if (isActive === 1 || isActive === true || isActive === "1")
      return "active";
    if (isActive === 0 || isActive === false || isActive === "0")
      return "inactive";
    return "inactive";
  }
  statusCategory(status) {
    const value = String(status || "").toLowerCase();
    if (value === "active")
      return "active";
    if (value === "blocked")
      return "blocked";
    return "pending";
  }
  extractUsers(res) {
    if (Array.isArray(res?.data))
      return res.data;
    if (Array.isArray(res?.data?.users))
      return res.data.users;
    if (Array.isArray(res?.users))
      return res.users;
    if (Array.isArray(res))
      return res;
    return [];
  }
};
_UsersComponent.\u0275fac = function UsersComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UsersComponent)(\u0275\u0275directiveInject(Users), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(DropdownManagerService));
};
_UsersComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsersComponent, selectors: [["app-users"]], decls: 5, vars: 3, consts: [[1, "users-page"], ["sectionLabel", "Users", "title", "Manage Users", "subtitle", "Monitor user accounts, customer profiles, booking history, and CRM notes from one place."], [4, "ngIf"], ["class", "detail-container", 4, "ngIf"], ["class", "crm-backdrop", 3, "click", 4, "ngIf"], ["class", "summary-strip", 4, "ngIf"], [1, "users-toolbar-card"], [1, "toolbar-left"], [1, "search-input-wrap"], [1, "bi", "bi-search"], ["type", "text", "placeholder", "Search by user name, email, or phone number...", 3, "ngModelChange", "ngModel"], ["type", "button", "class", "clear-btn", "title", "Clear search", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn-app", "ghost", "btn-sm", "filter-toggle-btn", 3, "click"], [1, "bi", "bi-sliders"], ["class", "active-dot", 4, "ngIf"], [1, "toolbar-right"], [1, "view-toggle"], ["type", "button", "title", "Grid view", 1, "toggle-btn", 3, "click"], [1, "bi", "bi-grid-fill"], ["type", "button", "title", "Table view", 1, "toggle-btn", 3, "click"], [1, "bi", "bi-list-ul"], [1, "filter-panel"], [1, "filter-panel-inner"], [1, "fp-group"], ["for", "userStatusFilter"], [1, "select-wrapper"], ["id", "userStatusFilter", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "bi", "bi-chevron-down", "select-arrow"], ["type", "date", 3, "ngModelChange", "ngModel"], [1, "fp-actions"], ["type", "button", 1, "btn-app", "ghost", "btn-sm", 3, "click"], [1, "bi", "bi-arrow-counterclockwise"], [1, "fp-count"], ["class", "users-grid", 4, "ngIf"], ["class", "empty-state surface-card", 4, "ngIf"], ["class", "table-shell", 4, "ngIf"], ["class", "pagination-shell", 4, "ngIf"], [1, "summary-strip"], [1, "summary-card"], [1, "summary-icon", "tone-primary"], [1, "bi", "bi-people-fill"], [1, "summary-copy"], [1, "summary-icon", "tone-success"], [1, "bi", "bi-person-check-fill"], [1, "summary-icon", "tone-danger"], [1, "bi", "bi-person-x-fill"], [1, "summary-icon", "tone-warning"], [1, "bi", "bi-person-dash-fill"], ["class", "summary-card skeleton-card", 4, "ngFor", "ngForOf"], [1, "summary-card", "skeleton-card"], [1, "skeleton-icon", "shimmer"], [1, "skeleton-line", "lg", "shimmer", "mb-1"], [1, "skeleton-line", "sm", "shimmer"], ["type", "button", "title", "Clear search", 1, "clear-btn", 3, "click"], [1, "bi", "bi-x-circle-fill"], [1, "active-dot"], [3, "value"], [1, "users-grid"], ["class", "user-card skeleton-card", 4, "ngFor", "ngForOf"], [1, "user-card", "skeleton-card"], [1, "card-top"], [1, "skeleton-avatar", "shimmer"], [1, "u-info", 2, "flex", "1"], [1, "card-rule"], [1, "card-stats"], [1, "empty-state", "surface-card"], [1, "empty-icon"], [1, "bi", "bi-people"], ["type", "button", 1, "btn-app", "ghost", 3, "click"], ["class", "user-card", 4, "ngFor", "ngForOf"], [1, "user-card"], [1, "u-avatar-wrap"], ["class", "u-avatar-img", 3, "src", "alt", 4, "ngIf"], ["class", "u-avatar-initials", 3, "background", 4, "ngIf"], [1, "status-dot-indicator", 3, "ngClass"], [1, "u-info"], [1, "u-name"], [1, "u-email"], ["class", "u-phone", 4, "ngIf"], [1, "status-pill", 3, "ngClass"], [1, "cs"], [1, "cs-val"], [1, "cs-lbl"], [1, "cs-sep"], [1, "cs-val", "green"], [1, "cs-val", "sm"], [1, "card-actions"], ["title", "View profile and bookings", 1, "ca-btn", "outline", "text-dark", 3, "click"], [1, "bi", "bi-eye"], ["title", "Direct WhatsApp message", 1, "ca-btn", "wa-btn", 3, "click"], [1, "bi", "bi-whatsapp"], ["title", "Internal Ops & CRM Notes", 1, "ca-btn", "crm-btn", 3, "click"], [1, "bi", "bi-journal-text"], ["class", "ca-btn success", 3, "click", 4, "ngIf"], ["class", "ca-btn danger", 3, "click", 4, "ngIf"], [1, "u-avatar-img", 3, "src", "alt"], [1, "u-avatar-initials"], [1, "u-phone"], [1, "bi", "bi-telephone", "me-1"], [1, "ca-btn", "success", 3, "click"], [1, "bi", "bi-check-lg"], [1, "ca-btn", "danger", 3, "click"], [1, "bi", "bi-slash-circle"], [1, "table-shell"], [1, "table-wrap"], [1, "users-table"], [1, "text-center"], [1, "text-end"], ["class", "clickable-row", 3, "click", 4, "ngFor", "ngForOf"], [1, "clickable-row", 3, "click"], [1, "d-flex", "align-items-center", "gap-2"], [1, "u-avatar-wrap", "sm"], ["class", "u-avatar-initials sm", 3, "background", 4, "ngIf"], [1, "cell-stack"], [1, "user-title"], [1, "text-muted", "small"], [1, "pax-badge"], [1, "text-end", 3, "click"], [1, "d-flex", "justify-content-end", "gap-1"], ["title", "WhatsApp user", 1, "icon-btn", "subtle", 3, "click"], [1, "bi", "bi-whatsapp", "text-success"], ["title", "CRM Notes", 1, "icon-btn", "subtle", 3, "click"], [1, "bi", "bi-journal-text", "text-primary"], ["title", "View profile", 1, "icon-btn", "subtle", 3, "click"], [1, "u-avatar-initials", "sm"], [1, "pagination-shell"], [1, "pagination-inner"], [1, "pagination-info"], [1, "pagination-controls"], [1, "page-size-selector"], [1, "pagination-select", 3, "ngModelChange", "ngModel"], [1, "page-actions"], ["type", "button", "title", "Previous Page", 1, "page-nav-btn", 3, "click", "disabled"], [1, "bi", "bi-chevron-left"], [4, "ngFor", "ngForOf"], ["type", "button", "title", "Next Page", 1, "page-nav-btn", 3, "click", "disabled"], [1, "bi", "bi-chevron-right"], ["class", "page-ellipsis", 4, "ngIf"], ["class", "page-btn", "type", "button", 3, "active", "click", 4, "ngIf"], [1, "page-ellipsis"], ["type", "button", 1, "page-btn", 3, "click"], [1, "detail-container"], [1, "detail-top-nav", "mb-3"], [1, "btn-app", "ghost", "btn-sm", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "profile-hero", "surface-card"], [1, "hero-inner"], [1, "hero-avatar-wrap"], ["loading", "lazy", "decoding", "async", 1, "hero-avatar", 3, "src"], [1, "hero-status-ring", 3, "ngClass"], [1, "hero-text"], [1, "hero-name"], [1, "hero-email"], [1, "d-flex", "align-items-center", "gap-2", "mt-1"], ["class", "text-muted small", 4, "ngIf"], [1, "hero-stats"], [1, "hs"], [1, "hs-val"], [1, "hs-lbl"], [1, "hs-sep"], [1, "hs-val", "text-success"], [1, "hs-val", "sm"], [1, "segment-wrapper", "mb-3"], [1, "custom-tab-bar"], ["type", "button", 1, "tab-btn", 3, "click"], [1, "bi", "bi-person-lines-fill", "me-1"], [1, "bi", "bi-receipt", "me-1"], ["class", "seg-content", 4, "ngIf"], [1, "seg-content"], [1, "info-card", "surface-card"], [1, "info-row"], [1, "info-icon-wrap"], [1, "bi", "bi-person"], [1, "info-text"], [1, "info-lbl"], [1, "info-val"], [1, "info-divider"], [1, "bi", "bi-envelope"], [1, "info-val", "mono"], [1, "bi", "bi-telephone"], [1, "bi", "bi-calendar-check"], [1, "detail-actions", "mt-3"], ["type", "button", 1, "btn-app", "ghost", "btn-sm", "wa-btn", 3, "click"], ["class", "btn-app secondary btn-sm", 3, "click", 4, "ngIf"], ["class", "btn-app danger-ghost btn-sm", 3, "click", 4, "ngIf"], [1, "btn-app", "secondary", "btn-sm", 3, "click"], [1, "bi", "bi-check-circle"], [1, "btn-app", "danger-ghost", "btn-sm", 3, "click"], ["class", "bookings-grid-list", 4, "ngIf"], [1, "bi", "bi-receipt"], [1, "bookings-grid-list"], ["class", "booking-card surface-card", 4, "ngFor", "ngForOf"], [1, "booking-card", "surface-card"], [1, "bc-top"], [1, "bc-left"], [1, "bc-ref"], [1, "bc-name"], [1, "text-muted"], [1, "bi", "bi-calendar-event", "me-1"], [1, "bc-pills"], [1, "bc-pill"], [1, "bi", "bi-cash"], [1, "bi", "bi-credit-card"], [1, "crm-backdrop", 3, "click"], ["class", "crm-drawer", 3, "click", 4, "ngIf"], [1, "crm-drawer", 3, "click"], [1, "crm-drawer-header"], [1, "crm-user-summary"], [1, "crm-badge"], [1, "crm-user-name"], [1, "crm-user-contact"], ["aria-label", "Close CRM notes", 1, "crm-close-btn", 3, "click"], [1, "bi", "bi-x-lg"], [1, "crm-composer"], ["placeholder", "Add an internal operations note (e.g. Special pickup request, dietary restriction, VIP trekker preference)...", "rows", "3", 1, "crm-textarea", 3, "ngModelChange", "ngModel"], [1, "crm-composer-footer"], [1, "btn-app", "primary", "btn-sm", 3, "click", "disabled"], [1, "bi", "bi-plus-lg", "me-1"], [1, "crm-notes-list"], [1, "crm-notes-header"], ["class", "crm-empty", 4, "ngIf"], ["class", "crm-note-item", 4, "ngFor", "ngForOf"], [1, "crm-empty"], [1, "bi", "bi-journal-x"], [1, "crm-note-item"], [1, "crm-note-top"], [1, "crm-admin-author"], [1, "bi", "bi-person-check-fill", "me-1"], [1, "crm-note-actions"], [1, "crm-note-date"], ["title", "Delete note", 1, "crm-del-btn", 3, "click"], [1, "bi", "bi-trash"], [1, "crm-note-text"]], template: function UsersComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "app-admin-shell", 1);
    \u0275\u0275template(2, UsersComponent_div_2_Template, 48, 24, "div", 2)(3, UsersComponent_div_3_Template, 6, 1, "div", 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, UsersComponent_div_4_Template, 2, 1, "div", 4);
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx.isDetailView);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isDetailView);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.showCrmDrawer);
  }
}, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule, AdminShellComponent, DecimalPipe, TitleCasePipe, DatePipe], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.users-page[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: -400px 0;\n  }\n  100% {\n    background-position: 400px 0;\n  }\n}\n.shimmer[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      rgba(0, 0, 0, 0.04) 25%,\n      rgba(0, 0, 0, 0.09) 50%,\n      rgba(0, 0, 0, 0.04) 75%);\n  background-size: 800px 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.5s infinite linear;\n  border-radius: 6px;\n}\n.skeleton-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  flex-shrink: 0;\n}\n.skeleton-avatar[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.skeleton-line[_ngcontent-%COMP%] {\n  height: 14px;\n  border-radius: 4px;\n}\n.skeleton-line.sm[_ngcontent-%COMP%] {\n  width: 64px;\n}\n.skeleton-line.md[_ngcontent-%COMP%] {\n  width: 120px;\n}\n.skeleton-line.lg[_ngcontent-%COMP%] {\n  width: 180px;\n}\n.summary-strip[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.summary-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: var(--app-radius, 14px);\n  padding: 16px 18px;\n  box-shadow: var(--app-shadow-soft, 0 2px 8px rgba(0, 0, 0, 0.04));\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  transition: transform 0.15s ease, box-shadow 0.15s ease;\n}\n.summary-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--app-shadow, 0 4px 14px rgba(0, 0, 0, 0.08));\n}\n.summary-card[_ngcontent-%COMP%]   .summary-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.25rem;\n  flex-shrink: 0;\n}\n.summary-card[_ngcontent-%COMP%]   .summary-icon.tone-primary[_ngcontent-%COMP%] {\n  background: rgba(29, 122, 109, 0.12);\n  color: var(--app-accent, #1d7a6d);\n}\n.summary-card[_ngcontent-%COMP%]   .summary-icon.tone-success[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #10b981;\n}\n.summary-card[_ngcontent-%COMP%]   .summary-icon.tone-danger[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #ef4444;\n}\n.summary-card[_ngcontent-%COMP%]   .summary-icon.tone-warning[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #f59e0b;\n}\n.summary-card[_ngcontent-%COMP%]   .summary-copy[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.summary-card[_ngcontent-%COMP%]   .summary-copy[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.45rem;\n  font-weight: 800;\n  color: var(--app-ink, #111827);\n  line-height: 1.2;\n}\n.summary-card[_ngcontent-%COMP%]   .summary-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 2px 0 0;\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: var(--app-ink-muted, #6b7280);\n}\n.users-toolbar-card[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n  background: #fff;\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: var(--app-radius, 14px);\n  padding: 12px 16px;\n  margin-bottom: 16px;\n  box-shadow: var(--app-shadow-soft, 0 2px 8px rgba(0, 0, 0, 0.04));\n  flex-wrap: wrap;\n}\n.toolbar-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex: 1 1 300px;\n  flex-wrap: wrap;\n}\n.search-input-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--app-surface, #f9fafb);\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: 10px;\n  padding: 8px 12px;\n  flex: 1 1 240px;\n  min-width: 200px;\n  transition: all 0.15s ease;\n}\n.search-input-wrap[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--app-accent, #1d7a6d);\n  box-shadow: 0 0 0 3px rgba(29, 122, 109, 0.12);\n  background: #fff;\n}\n.search-input-wrap[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-size: 0.9rem;\n  flex-shrink: 0;\n}\n.search-input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  flex: 1;\n  background: transparent;\n  font-size: 0.88rem;\n  color: var(--app-ink, #111827);\n}\n.search-input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.search-input-wrap[_ngcontent-%COMP%]   .clear-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: #9ca3af;\n  padding: 0;\n  cursor: pointer;\n}\n.filter-toggle-btn[_ngcontent-%COMP%] {\n  position: relative;\n}\n.filter-toggle-btn[_ngcontent-%COMP%]   .active-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--app-accent, #1d7a6d);\n  margin-left: 4px;\n}\n.toolbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-left: auto;\n}\n.view-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  background: var(--app-surface, #f3f4f6);\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: 10px;\n  padding: 3px;\n}\n.view-toggle[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  padding: 5px 9px;\n  border-radius: 7px;\n  font-size: 0.9rem;\n  color: var(--app-ink-muted, #6b7280);\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.view-toggle[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%]:hover {\n  color: #111827;\n}\n.view-toggle[_ngcontent-%COMP%]   .toggle-btn.active[_ngcontent-%COMP%] {\n  background: #fff;\n  color: var(--app-accent, #1d7a6d);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.filter-panel[_ngcontent-%COMP%] {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.25s ease-out, margin-bottom 0.25s ease;\n  margin-bottom: 0;\n}\n.filter-panel.open[_ngcontent-%COMP%] {\n  max-height: 200px;\n  margin-bottom: 20px;\n}\n.filter-panel[_ngcontent-%COMP%]   .filter-panel-inner[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: var(--app-radius, 14px);\n  padding: 16px;\n  display: flex;\n  align-items: flex-end;\n  gap: 16px;\n  flex-wrap: wrap;\n  box-shadow: var(--app-shadow-soft);\n}\n.filter-panel[_ngcontent-%COMP%]   .fp-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  flex: 1 1 160px;\n}\n.filter-panel[_ngcontent-%COMP%]   .fp-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  font-weight: 700;\n  color: #4b5563;\n  text-transform: uppercase;\n}\n.filter-panel[_ngcontent-%COMP%]   .fp-group[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%], \n.filter-panel[_ngcontent-%COMP%]   .fp-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  background: var(--app-surface, #f9fafb);\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: 8px;\n  padding: 7px 10px;\n  font-size: 0.85rem;\n  color: #111827;\n  outline: none;\n}\n.filter-panel[_ngcontent-%COMP%]   .fp-group[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%]:focus, \n.filter-panel[_ngcontent-%COMP%]   .fp-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: var(--app-accent, #1d7a6d);\n  background: #fff;\n}\n.filter-panel[_ngcontent-%COMP%]   .select-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.filter-panel[_ngcontent-%COMP%]   .select-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  appearance: none;\n  padding-right: 28px;\n  cursor: pointer;\n}\n.filter-panel[_ngcontent-%COMP%]   .select-wrapper[_ngcontent-%COMP%]   .select-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 8px;\n  pointer-events: none;\n  color: #6b7280;\n  font-size: 0.72rem;\n}\n.filter-panel[_ngcontent-%COMP%]   .fp-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-left: auto;\n}\n.filter-panel[_ngcontent-%COMP%]   .fp-actions[_ngcontent-%COMP%]   .fp-count[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--app-accent, #1d7a6d);\n  white-space: nowrap;\n}\n.users-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.user-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: var(--app-radius, 16px);\n  padding: 18px;\n  box-shadow: var(--app-shadow-soft, 0 2px 8px rgba(0, 0, 0, 0.04));\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease,\n    border-color 0.2s ease;\n}\n.user-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--app-shadow, 0 8px 20px rgba(0, 0, 0, 0.08));\n  border-color: #cbd5e1;\n}\n.card-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.card-top[_ngcontent-%COMP%]   .u-avatar-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  width: 48px;\n  height: 48px;\n  flex-shrink: 0;\n}\n.card-top[_ngcontent-%COMP%]   .u-avatar-wrap[_ngcontent-%COMP%]   .u-avatar-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.card-top[_ngcontent-%COMP%]   .u-avatar-wrap[_ngcontent-%COMP%]   .u-avatar-initials[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-weight: 800;\n  font-size: 1rem;\n}\n.card-top[_ngcontent-%COMP%]   .u-avatar-wrap[_ngcontent-%COMP%]   .status-dot-indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  border: 2px solid #fff;\n}\n.card-top[_ngcontent-%COMP%]   .u-avatar-wrap[_ngcontent-%COMP%]   .status-dot-indicator.active[_ngcontent-%COMP%] {\n  background: #10b981;\n}\n.card-top[_ngcontent-%COMP%]   .u-avatar-wrap[_ngcontent-%COMP%]   .status-dot-indicator.blocked[_ngcontent-%COMP%] {\n  background: #ef4444;\n}\n.card-top[_ngcontent-%COMP%]   .u-avatar-wrap[_ngcontent-%COMP%]   .status-dot-indicator.inactive[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.card-top[_ngcontent-%COMP%]   .u-info[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: hidden;\n}\n.card-top[_ngcontent-%COMP%]   .u-info[_ngcontent-%COMP%]   .u-name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--app-ink, #111827);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.card-top[_ngcontent-%COMP%]   .u-info[_ngcontent-%COMP%]   .u-email[_ngcontent-%COMP%] {\n  margin: 2px 0 0;\n  font-size: 0.8rem;\n  color: var(--app-ink-muted, #6b7280);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.card-top[_ngcontent-%COMP%]   .u-info[_ngcontent-%COMP%]   .u-phone[_ngcontent-%COMP%] {\n  margin: 2px 0 0;\n  font-size: 0.76rem;\n  color: var(--app-ink-muted, #9ca3af);\n}\n.card-rule[_ngcontent-%COMP%] {\n  height: 1px;\n  background: var(--app-border, #f1f5f9);\n}\n.card-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr auto 1fr auto 1fr;\n  align-items: center;\n  background: var(--app-surface, #f8fafc);\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: 10px;\n  padding: 10px;\n}\n.card-stats[_ngcontent-%COMP%]   .cs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 2px;\n}\n.card-stats[_ngcontent-%COMP%]   .cs[_ngcontent-%COMP%]   .cs-val[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.card-stats[_ngcontent-%COMP%]   .cs[_ngcontent-%COMP%]   .cs-val.green[_ngcontent-%COMP%] {\n  color: #059669;\n}\n.card-stats[_ngcontent-%COMP%]   .cs[_ngcontent-%COMP%]   .cs-val.sm[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n}\n.card-stats[_ngcontent-%COMP%]   .cs[_ngcontent-%COMP%]   .cs-lbl[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n}\n.card-stats[_ngcontent-%COMP%]   .cs-sep[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 24px;\n  background: #e2e8f0;\n}\n.card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.card-actions[_ngcontent-%COMP%]   .ca-btn[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  padding: 6px 10px;\n  border-radius: 8px;\n  font-size: 0.78rem;\n  font-weight: 700;\n  cursor: pointer;\n  border: 1px solid transparent;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  transition: all 0.15s ease;\n}\n.card-actions[_ngcontent-%COMP%]   .ca-btn.outline[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-color: #e2e8f0;\n  color: #334155;\n}\n.card-actions[_ngcontent-%COMP%]   .ca-btn.outline[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n}\n.card-actions[_ngcontent-%COMP%]   .ca-btn.wa-btn[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #065f46;\n  border-color: #a7f3d0;\n}\n.card-actions[_ngcontent-%COMP%]   .ca-btn.wa-btn[_ngcontent-%COMP%]:hover {\n  background: #d1fae5;\n}\n.card-actions[_ngcontent-%COMP%]   .ca-btn.crm-btn[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #1e40af;\n  border-color: #bfdbfe;\n}\n.card-actions[_ngcontent-%COMP%]   .ca-btn.crm-btn[_ngcontent-%COMP%]:hover {\n  background: #dbeafe;\n}\n.card-actions[_ngcontent-%COMP%]   .ca-btn.success[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #047857;\n  border-color: #a7f3d0;\n}\n.card-actions[_ngcontent-%COMP%]   .ca-btn.success[_ngcontent-%COMP%]:hover {\n  background: #047857;\n  color: #fff;\n}\n.card-actions[_ngcontent-%COMP%]   .ca-btn.danger[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #b91c1c;\n  border-color: #fecaca;\n}\n.card-actions[_ngcontent-%COMP%]   .ca-btn.danger[_ngcontent-%COMP%]:hover {\n  background: #b91c1c;\n  color: #fff;\n}\n.status-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 9px;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.status-pill.status-success[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #065f46;\n  border: 1px solid #a7f3d0;\n}\n.status-pill.status-danger[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #991b1b;\n  border: 1px solid #fecaca;\n}\n.status-pill.status-warning[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #92400e;\n  border: 1px solid #fde68a;\n}\n.status-pill.status-medium[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #4b5563;\n  border: 1px solid #e5e7eb;\n}\n.table-shell[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: var(--app-radius, 14px);\n  box-shadow: var(--app-shadow-soft);\n  overflow: hidden;\n  margin-bottom: 24px;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.users-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.88rem;\n}\n.users-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--app-surface, #f9fafb);\n  padding: 12px 14px;\n  font-size: 0.76rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #4b5563;\n  border-bottom: 1px solid #e5e7eb;\n  white-space: nowrap;\n}\n.users-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f1f5f9;\n  transition: background 0.15s ease;\n}\n.users-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.users-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.clickable-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.users-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.clickable-row[_ngcontent-%COMP%]:hover {\n  background: rgba(29, 122, 109, 0.03);\n}\n.users-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  vertical-align: middle;\n}\n.users-table[_ngcontent-%COMP%]   .u-avatar-wrap.sm[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n}\n.users-table[_ngcontent-%COMP%]   .u-avatar-wrap.sm[_ngcontent-%COMP%]   .u-avatar-initials.sm[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n}\n.pax-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: #f3f4f6;\n  font-weight: 700;\n  font-size: 0.8rem;\n  color: #374151;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  border: 1px solid transparent;\n  background: transparent;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #475569;\n  transition: all 0.15s ease;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n.detail-container[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n}\n.profile-hero[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: var(--app-radius, 16px);\n  padding: 24px;\n  margin-bottom: 20px;\n  box-shadow: var(--app-shadow-soft);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n.profile-hero[_ngcontent-%COMP%]   .hero-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n}\n.profile-hero[_ngcontent-%COMP%]   .hero-avatar-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  width: 72px;\n  height: 72px;\n}\n.profile-hero[_ngcontent-%COMP%]   .hero-avatar-wrap[_ngcontent-%COMP%]   .hero-avatar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  object-fit: cover;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.profile-hero[_ngcontent-%COMP%]   .hero-avatar-wrap[_ngcontent-%COMP%]   .hero-status-ring[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  border: 3px solid #fff;\n}\n.profile-hero[_ngcontent-%COMP%]   .hero-avatar-wrap[_ngcontent-%COMP%]   .hero-status-ring.ring-active[_ngcontent-%COMP%] {\n  background: #10b981;\n}\n.profile-hero[_ngcontent-%COMP%]   .hero-avatar-wrap[_ngcontent-%COMP%]   .hero-status-ring.ring-blocked[_ngcontent-%COMP%] {\n  background: #ef4444;\n}\n.profile-hero[_ngcontent-%COMP%]   .hero-avatar-wrap[_ngcontent-%COMP%]   .hero-status-ring.ring-inactive[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.profile-hero[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.profile-hero[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-email[_ngcontent-%COMP%] {\n  margin: 2px 0 0;\n  font-size: 0.9rem;\n  color: #64748b;\n}\n.profile-hero[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  background: var(--app-surface, #f8fafc);\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: 12px;\n  padding: 12px 20px;\n}\n.profile-hero[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%]   .hs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2px;\n}\n.profile-hero[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%]   .hs[_ngcontent-%COMP%]   .hs-val[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.profile-hero[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%]   .hs[_ngcontent-%COMP%]   .hs-val.sm[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n}\n.profile-hero[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%]   .hs[_ngcontent-%COMP%]   .hs-lbl[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n}\n.profile-hero[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%]   .hs-sep[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 28px;\n  background: #e2e8f0;\n}\n.custom-tab-bar[_ngcontent-%COMP%] {\n  display: inline-flex;\n  background: #f1f5f9;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 4px;\n  gap: 4px;\n}\n.custom-tab-bar[_ngcontent-%COMP%]   .tab-btn[_ngcontent-%COMP%] {\n  padding: 8px 18px;\n  border-radius: 8px;\n  border: none;\n  background: transparent;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #64748b;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.custom-tab-bar[_ngcontent-%COMP%]   .tab-btn.active[_ngcontent-%COMP%] {\n  background: #fff;\n  color: var(--app-accent, #1d7a6d);\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);\n}\n.info-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: var(--app-radius, 14px);\n  padding: 16px 20px;\n  box-shadow: var(--app-shadow-soft);\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.info-card[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.info-card[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .info-icon-wrap[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  background: rgba(29, 122, 109, 0.08);\n  color: var(--app-accent, #1d7a6d);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n  flex-shrink: 0;\n}\n.info-card[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.info-card[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%]   .info-lbl[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n}\n.info-card[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%]   .info-val[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: #0f172a;\n}\n.info-card[_ngcontent-%COMP%]   .info-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: #f1f5f9;\n}\n.detail-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.bookings-grid-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.booking-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: 12px;\n  padding: 14px 18px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.03);\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.booking-card[_ngcontent-%COMP%]   .bc-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 12px;\n}\n.booking-card[_ngcontent-%COMP%]   .bc-top[_ngcontent-%COMP%]   .bc-ref[_ngcontent-%COMP%] {\n  font-family: ui-monospace, monospace;\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: var(--app-accent, #1d7a6d);\n}\n.booking-card[_ngcontent-%COMP%]   .bc-top[_ngcontent-%COMP%]   .bc-name[_ngcontent-%COMP%] {\n  margin: 2px 0 0;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.booking-card[_ngcontent-%COMP%]   .bc-pills[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.booking-card[_ngcontent-%COMP%]   .bc-pills[_ngcontent-%COMP%]   .bc-pill[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 6px;\n  padding: 3px 8px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #334155;\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n}\n.crm-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n  z-index: 1000;\n}\n.crm-drawer[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  width: 420px;\n  max-width: 100vw;\n  background: #fff;\n  z-index: 1001;\n  display: flex;\n  flex-direction: column;\n  box-shadow: -4px 0 24px rgba(0, 0, 0, 0.15);\n}\n.crm-drawer-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 18px 20px;\n  border-bottom: 1px solid #e5e7eb;\n}\n.crm-drawer-header[_ngcontent-%COMP%]   .crm-badge[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 800;\n  color: var(--app-accent, #1d7a6d);\n  letter-spacing: 0.05em;\n}\n.crm-drawer-header[_ngcontent-%COMP%]   .crm-user-name[_ngcontent-%COMP%] {\n  margin: 2px 0 0;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #111827;\n}\n.crm-drawer-header[_ngcontent-%COMP%]   .crm-user-contact[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #6b7280;\n}\n.crm-drawer-header[_ngcontent-%COMP%]   .crm-close-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  font-size: 1rem;\n  color: #9ca3af;\n  cursor: pointer;\n}\n.crm-composer[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  background: #f8fafc;\n  border-bottom: 1px solid #e5e7eb;\n}\n.crm-composer[_ngcontent-%COMP%]   .crm-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #fff;\n  border: 1px solid #cbd5e1;\n  border-radius: 8px;\n  padding: 10px;\n  font-size: 0.85rem;\n  resize: vertical;\n  outline: none;\n}\n.crm-composer[_ngcontent-%COMP%]   .crm-textarea[_ngcontent-%COMP%]:focus {\n  border-color: var(--app-accent, #1d7a6d);\n}\n.crm-composer[_ngcontent-%COMP%]   .crm-composer-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 8px;\n}\n.crm-notes-list[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 16px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.crm-notes-list[_ngcontent-%COMP%]   .crm-notes-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: #374151;\n}\n.crm-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 30px 10px;\n  color: #9ca3af;\n}\n.crm-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n.crm-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  margin: 6px 0 0;\n}\n.crm-note-item[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 12px;\n}\n.crm-note-item[_ngcontent-%COMP%]   .crm-note-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 4px;\n}\n.crm-note-item[_ngcontent-%COMP%]   .crm-note-top[_ngcontent-%COMP%]   .crm-admin-author[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  font-weight: 700;\n  color: var(--app-accent, #1d7a6d);\n}\n.crm-note-item[_ngcontent-%COMP%]   .crm-note-top[_ngcontent-%COMP%]   .crm-note-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.crm-note-item[_ngcontent-%COMP%]   .crm-note-top[_ngcontent-%COMP%]   .crm-note-actions[_ngcontent-%COMP%]   .crm-note-date[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #9ca3af;\n}\n.crm-note-item[_ngcontent-%COMP%]   .crm-note-top[_ngcontent-%COMP%]   .crm-note-actions[_ngcontent-%COMP%]   .crm-del-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: #ef4444;\n  cursor: pointer;\n  padding: 0;\n}\n.crm-note-item[_ngcontent-%COMP%]   .crm-note-text[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.84rem;\n  color: #1f2937;\n  line-height: 1.4;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px 24px;\n  background: #fff;\n  border: 1px dashed var(--app-border, #cbd5e1);\n  border-radius: var(--app-radius, 14px);\n  margin-bottom: 24px;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  margin: 0 auto 16px;\n  border-radius: 50%;\n  background: rgba(29, 122, 109, 0.08);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: var(--app-accent, #1d7a6d);\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 6px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #111827;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 20px;\n  font-size: 0.9rem;\n  color: #6b7280;\n}\n@media (max-width: 1024px) {\n  .summary-strip[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .summary-strip[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 10px;\n  }\n  .users-toolbar-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .users-toolbar-card[_ngcontent-%COMP%]   .toolbar-left[_ngcontent-%COMP%], \n   .users-toolbar-card[_ngcontent-%COMP%]   .toolbar-right[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .users-toolbar-card[_ngcontent-%COMP%]   .toolbar-right[_ngcontent-%COMP%] {\n    justify-content: flex-end;\n  }\n  .search-input-wrap[_ngcontent-%COMP%] {\n    width: 100%;\n    flex: 1 1 100%;\n  }\n  .users-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .profile-hero[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .profile-hero[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: space-around;\n  }\n  .crm-drawer[_ngcontent-%COMP%] {\n    top: auto;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n    max-height: 85vh;\n    border-radius: 20px 20px 0 0;\n  }\n}\n/*# sourceMappingURL=users.component.css.map */'] });
var UsersComponent = _UsersComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsersComponent, [{
    type: Component,
    args: [{ selector: "app-users", standalone: true, imports: [CommonModule, FormsModule, RouterModule, AdminShellComponent], schemas: [CUSTOM_ELEMENTS_SCHEMA], template: `<div class="users-page">
  <app-admin-shell
    sectionLabel="Users"
    title="Manage Users"
    subtitle="Monitor user accounts, customer profiles, booking history, and CRM notes from one place.">

    <!-- ================= LIST VIEW ================= -->
    <div *ngIf="!isDetailView">

      <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 SUMMARY STRIP \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
      <div class="summary-strip" *ngIf="!isLoading">
        <div class="summary-card">
          <div class="summary-icon tone-primary">
            <i class="bi bi-people-fill"></i>
          </div>
          <div class="summary-copy">
            <h3>{{ totalUsersCount }}</h3>
            <p>Total Registered</p>
          </div>
        </div>

        <div class="summary-card">
          <div class="summary-icon tone-success">
            <i class="bi bi-person-check-fill"></i>
          </div>
          <div class="summary-copy">
            <h3>{{ activeUsersCount }}</h3>
            <p>Active Users</p>
          </div>
        </div>

        <div class="summary-card">
          <div class="summary-icon tone-danger">
            <i class="bi bi-person-x-fill"></i>
          </div>
          <div class="summary-copy">
            <h3>{{ blockedUsersCount }}</h3>
            <p>Blocked Users</p>
          </div>
        </div>

        <div class="summary-card">
          <div class="summary-icon tone-warning">
            <i class="bi bi-person-dash-fill"></i>
          </div>
          <div class="summary-copy">
            <h3>{{ pendingUsersCount }}</h3>
            <p>Pending / Inactive</p>
          </div>
        </div>
      </div>

      <!-- Skeleton Summary -->
      <div class="summary-strip" *ngIf="isLoading">
        <div class="summary-card skeleton-card" *ngFor="let i of [1,2,3,4]">
          <div class="skeleton-icon shimmer"></div>
          <div class="summary-copy">
            <div class="skeleton-line lg shimmer mb-1"></div>
            <div class="skeleton-line sm shimmer"></div>
          </div>
        </div>
      </div>

      <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 SEARCH & FILTERS BAR \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
      <div class="users-toolbar-card">
        <div class="toolbar-left">
          <div class="search-input-wrap">
            <i class="bi bi-search"></i>
            <input
              type="text"
              [(ngModel)]="searchQuery"
              (ngModelChange)="onFilterChange()"
              placeholder="Search by user name, email, or phone number..." />
            <button
              type="button"
              class="clear-btn"
              *ngIf="searchQuery"
              (click)="searchQuery = ''; onFilterChange()"
              title="Clear search">
              <i class="bi bi-x-circle-fill"></i>
            </button>
          </div>

          <button
            class="btn-app ghost btn-sm filter-toggle-btn"
            type="button"
            (click)="toggleFilter()"
            [class.active]="showFilterPanel">
            <i class="bi bi-sliders"></i>
            <span>Filters</span>
            <span class="active-dot" *ngIf="selectedStatus !== 'all' || joinFrom || joinTo"></span>
          </button>
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
        </div>
      </div>

      <!-- Collapsible Filter Panel -->
      <div class="filter-panel" [class.open]="showFilterPanel">
        <div class="filter-panel-inner">
          <div class="fp-group">
            <label for="userStatusFilter">Account Status</label>
            <div class="select-wrapper">
              <select id="userStatusFilter" [(ngModel)]="selectedStatus" (ngModelChange)="onFilterChange()">
                <option *ngFor="let opt of statusOptions" [value]="opt.value">{{ opt.label }}</option>
              </select>
              <i class="bi bi-chevron-down select-arrow"></i>
            </div>
          </div>
          <div class="fp-group">
            <label>Joined From</label>
            <input type="date" [(ngModel)]="joinFrom" (ngModelChange)="onFilterChange()" />
          </div>
          <div class="fp-group">
            <label>Joined To</label>
            <input type="date" [(ngModel)]="joinTo" (ngModelChange)="onFilterChange()" />
          </div>
          <div class="fp-actions">
            <button class="btn-app ghost btn-sm" type="button" (click)="resetFilters()">
              <i class="bi bi-arrow-counterclockwise"></i> Reset
            </button>
            <span class="fp-count">{{ filteredUsers.length }} result{{ filteredUsers.length !== 1 ? 's' : '' }}</span>
          </div>
        </div>
      </div>

      <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 SKELETON CARDS LOADING \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
      <div class="users-grid" *ngIf="isLoading && viewMode === 'grid'">
        <div class="user-card skeleton-card" *ngFor="let i of [1,2,3,4,5,6]">
          <div class="card-top">
            <div class="skeleton-avatar shimmer"></div>
            <div class="u-info" style="flex:1">
              <div class="skeleton-line lg shimmer mb-1"></div>
              <div class="skeleton-line sm shimmer"></div>
            </div>
          </div>
          <div class="card-rule"></div>
          <div class="card-stats">
            <div class="skeleton-line sm shimmer"></div>
            <div class="skeleton-line sm shimmer"></div>
            <div class="skeleton-line sm shimmer"></div>
          </div>
        </div>
      </div>

      <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 EMPTY STATE \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
      <div class="empty-state surface-card" *ngIf="!isLoading && filteredUsers.length === 0">
        <div class="empty-icon">
          <i class="bi bi-people"></i>
        </div>
        <h3>No Users Found</h3>
        <p>No user accounts match your search or filter criteria.</p>
        <button class="btn-app ghost" type="button" (click)="resetFilters()">
          <i class="bi bi-arrow-counterclockwise"></i> Reset Filters
        </button>
      </div>

      <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 USER CARDS GRID \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
      <div class="users-grid" *ngIf="!isLoading && viewMode === 'grid' && filteredUsers.length > 0">
        <div class="user-card" *ngFor="let user of paginatedUsers">
          <!-- Card Top -->
          <div class="card-top">
            <div class="u-avatar-wrap">
              <img *ngIf="user.avatar" [src]="user.avatar" [alt]="user.name" class="u-avatar-img" />
              <div *ngIf="!user.avatar" class="u-avatar-initials" [style.background]="getAvatarColor(user.name)">
                {{ getInitials(user.name) }}
              </div>
              <span class="status-dot-indicator" [ngClass]="user.status"></span>
            </div>
            <div class="u-info">
              <h3 class="u-name">{{ user.name }}</h3>
              <p class="u-email">{{ user.email }}</p>
              <p class="u-phone" *ngIf="user.phone && user.phone !== '-'"><i class="bi bi-telephone me-1"></i>{{ user.phone }}</p>
            </div>
            <span class="status-pill" [ngClass]="'status-' + getStatusColor(user.status)">
              {{ user.status | titlecase }}
            </span>
          </div>

          <!-- Divider -->
          <div class="card-rule"></div>

          <!-- Stats Row -->
          <div class="card-stats">
            <div class="cs">
              <span class="cs-val">{{ user.totalBookings }}</span>
              <span class="cs-lbl">Bookings</span>
            </div>
            <div class="cs-sep"></div>
            <div class="cs">
              <span class="cs-val green">\u20B9{{ user.totalSpent | number:'1.0-0' }}</span>
              <span class="cs-lbl">Total Spent</span>
            </div>
            <div class="cs-sep"></div>
            <div class="cs">
              <span class="cs-val sm">{{ user.joinDate | date:'MMM yyyy' }}</span>
              <span class="cs-lbl">Joined</span>
            </div>
          </div>

          <!-- Divider -->
          <div class="card-rule"></div>

          <!-- Actions -->
          <div class="card-actions">
            <button class="ca-btn outline text-dark" (click)="viewUser(user.id)" title="View profile and bookings">
              <i class="bi bi-eye"></i> View
            </button>
            <button class="ca-btn wa-btn" (click)="openWhatsApp(user, $event)" title="Direct WhatsApp message">
              <i class="bi bi-whatsapp"></i> WhatsApp
            </button>
            <button class="ca-btn crm-btn" (click)="openCrmDrawer(user, $event)" title="Internal Ops & CRM Notes">
              <i class="bi bi-journal-text"></i> Notes ({{ getUserNoteCount(user.id) }})
            </button>
            <button class="ca-btn success" (click)="activateUser(user)" *ngIf="user.status !== 'active'">
              <i class="bi bi-check-lg"></i> Activate
            </button>
            <button class="ca-btn danger" (click)="confirmBlock(user)" *ngIf="user.status !== 'blocked'">
              <i class="bi bi-slash-circle"></i> Block
            </button>
          </div>
        </div>
      </div>

      <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 TABLE VIEW \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
      <div class="table-shell" *ngIf="!isLoading && viewMode === 'table' && filteredUsers.length > 0">
        <div class="table-wrap">
          <table class="users-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Contact</th>
                <th>Status</th>
                <th class="text-center">Bookings</th>
                <th class="text-end">Total Spent</th>
                <th>Joined</th>
                <th class="text-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let user of paginatedUsers" class="clickable-row" (click)="viewUser(user.id)">
                <td>
                  <div class="d-flex align-items-center gap-2">
                    <div class="u-avatar-wrap sm">
                      <img *ngIf="user.avatar" [src]="user.avatar" [alt]="user.name" class="u-avatar-img" />
                      <div *ngIf="!user.avatar" class="u-avatar-initials sm" [style.background]="getAvatarColor(user.name)">
                        {{ getInitials(user.name) }}
                      </div>
                    </div>
                    <div class="cell-stack">
                      <strong class="user-title">{{ user.name }}</strong>
                      <span class="text-muted small">#{{ user.id }}</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="cell-stack">
                    <span>{{ user.email }}</span>
                    <span class="text-muted small">{{ user.phone }}</span>
                  </div>
                </td>
                <td>
                  <span class="status-pill" [ngClass]="'status-' + getStatusColor(user.status)">
                    {{ user.status | titlecase }}
                  </span>
                </td>
                <td class="text-center">
                  <span class="pax-badge">{{ user.totalBookings }}</span>
                </td>
                <td class="text-end">
                  <strong>\u20B9{{ user.totalSpent | number:'1.0-0' }}</strong>
                </td>
                <td>
                  <span class="text-muted small">{{ user.joinDate | date:'dd MMM yyyy' }}</span>
                </td>
                <td class="text-end" (click)="$event.stopPropagation()">
                  <div class="d-flex justify-content-end gap-1">
                    <button class="icon-btn subtle" (click)="openWhatsApp(user, $event)" title="WhatsApp user">
                      <i class="bi bi-whatsapp text-success"></i>
                    </button>
                    <button class="icon-btn subtle" (click)="openCrmDrawer(user, $event)" title="CRM Notes">
                      <i class="bi bi-journal-text text-primary"></i>
                    </button>
                    <button class="icon-btn subtle" (click)="viewUser(user.id)" title="View profile">
                      <i class="bi bi-eye"></i>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 PAGINATION CONTROLS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
      <div class="pagination-shell" *ngIf="!isLoading && filteredUsers.length > 0">
        <div class="pagination-inner">
          <div class="pagination-info">
            Showing <strong>{{ (currentPage - 1) * Number(pageSize) + 1 }}</strong> to
            <strong>{{ Math.min(currentPage * Number(pageSize), filteredUsers.length) }}</strong> of
            <strong>{{ filteredUsers.length }}</strong> users
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

    <!-- ================= DETAIL VIEW ================= -->
    <div *ngIf="isDetailView" class="detail-container">
      <div class="detail-top-nav mb-3">
        <button class="btn-app ghost btn-sm" (click)="goBack()">
          <i class="bi bi-arrow-left"></i> Back to All Users
        </button>
      </div>

      <div *ngIf="user">
        <!-- Profile Hero -->
        <div class="profile-hero surface-card">
          <div class="hero-inner">
            <div class="hero-avatar-wrap">
              <img loading="lazy" decoding="async" [src]="getAvatar(user)" class="hero-avatar" />
              <span class="hero-status-ring" [ngClass]="'ring-' + user.status"></span>
            </div>
            <div class="hero-text">
              <h2 class="hero-name">{{ user.name }}</h2>
              <p class="hero-email">{{ user.email }}</p>
              <div class="d-flex align-items-center gap-2 mt-1">
                <span class="status-pill" [ngClass]="'status-' + getStatusColor(user.status)">
                  {{ user.status | titlecase }}
                </span>
                <span class="text-muted small" *ngIf="user.phone">&bull; {{ user.phone }}</span>
              </div>
            </div>
          </div>

          <!-- Hero Stats -->
          <div class="hero-stats">
            <div class="hs">
              <span class="hs-val">{{ user.totalBookings || bookings.length }}</span>
              <span class="hs-lbl">Total Bookings</span>
            </div>
            <div class="hs-sep"></div>
            <div class="hs">
              <span class="hs-val text-success">\u20B9{{ user.totalSpent || 0 | number:'1.0-0' }}</span>
              <span class="hs-lbl">Total Spent</span>
            </div>
            <div class="hs-sep"></div>
            <div class="hs">
              <span class="hs-val sm">{{ user.joinDate || user.created_at | date:'dd MMM yyyy' }}</span>
              <span class="hs-lbl">Member Since</span>
            </div>
          </div>
        </div>

        <!-- Segment Tabs -->
        <div class="segment-wrapper mb-3">
          <div class="custom-tab-bar">
            <button
              type="button"
              class="tab-btn"
              [class.active]="selectedSegment === 'details'"
              (click)="selectedSegment = 'details'">
              <i class="bi bi-person-lines-fill me-1"></i> Account Details
            </button>
            <button
              type="button"
              class="tab-btn"
              [class.active]="selectedSegment === 'bookings'"
              (click)="selectedSegment = 'bookings'">
              <i class="bi bi-receipt me-1"></i> Booking History ({{ bookings.length }})
            </button>
          </div>
        </div>

        <!-- \u2500\u2500 DETAILS TAB \u2500\u2500 -->
        <div class="seg-content" *ngIf="selectedSegment === 'details'">
          <div class="info-card surface-card">
            <div class="info-row">
              <div class="info-icon-wrap">
                <i class="bi bi-person"></i>
              </div>
              <div class="info-text">
                <span class="info-lbl">Full Legal Name</span>
                <span class="info-val">{{ user.name }}</span>
              </div>
            </div>
            <div class="info-divider"></div>
            <div class="info-row">
              <div class="info-icon-wrap">
                <i class="bi bi-envelope"></i>
              </div>
              <div class="info-text">
                <span class="info-lbl">Email Address</span>
                <span class="info-val mono">{{ user.email }}</span>
              </div>
            </div>
            <div class="info-divider"></div>
            <div class="info-row">
              <div class="info-icon-wrap">
                <i class="bi bi-telephone"></i>
              </div>
              <div class="info-text">
                <span class="info-lbl">Phone Number</span>
                <span class="info-val">{{ user.phone || "\u2014" }}</span>
              </div>
            </div>
            <div class="info-divider"></div>
            <div class="info-row">
              <div class="info-icon-wrap">
                <i class="bi bi-calendar-check"></i>
              </div>
              <div class="info-text">
                <span class="info-lbl">Account Created</span>
                <span class="info-val">{{ user.joinDate || user.created_at | date:'dd MMM yyyy' }}</span>
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="detail-actions mt-3">
            <button class="btn-app ghost btn-sm wa-btn" type="button" (click)="openWhatsApp(user, $event)">
              <i class="bi bi-whatsapp text-success"></i>
              WhatsApp User
            </button>
            <button class="btn-app ghost btn-sm" type="button" (click)="openCrmDrawer(user, $event)">
              <i class="bi bi-journal-text text-primary"></i>
              CRM Notes ({{ getUserNoteCount(user.id) }})
            </button>
            <button class="btn-app secondary btn-sm" *ngIf="user.status !== 'active'" (click)="activateUser(user)">
              <i class="bi bi-check-circle"></i>
              Activate User
            </button>
            <button class="btn-app danger-ghost btn-sm" *ngIf="user.status !== 'blocked'" (click)="confirmBlock(user)">
              <i class="bi bi-slash-circle"></i>
              Block User
            </button>
          </div>
        </div>

        <!-- \u2500\u2500 BOOKINGS TAB \u2500\u2500 -->
        <div class="seg-content" *ngIf="selectedSegment === 'bookings'">
          <!-- No Bookings -->
          <div class="empty-state surface-card" *ngIf="bookings.length === 0">
            <div class="empty-icon">
              <i class="bi bi-receipt"></i>
            </div>
            <h3>No Bookings Yet</h3>
            <p>This user has not made any trek reservations yet.</p>
          </div>

          <!-- Booking Cards -->
          <div class="bookings-grid-list" *ngIf="bookings.length > 0">
            <div class="booking-card surface-card" *ngFor="let booking of bookings">
              <div class="bc-top">
                <div class="bc-left">
                  <span class="bc-ref">#{{ booking.booking_reference || booking.id }}</span>
                  <h4 class="bc-name">{{ booking.trek_name }}</h4>
                  <small class="text-muted"><i class="bi bi-calendar-event me-1"></i>{{ booking.booking_date || booking.date | date:'dd MMM yyyy' }}</small>
                </div>
                <span class="status-pill" [ngClass]="'status-' + getBookingStatusColor(booking.booking_status || booking.status)">
                  {{ (booking.booking_status || booking.status) | titlecase }}
                </span>
              </div>
              <div class="bc-pills">
                <div class="bc-pill">
                  <i class="bi bi-cash"></i>
                  \u20B9{{ booking.total_amount || booking.amount | number:'1.0-0' }}
                </div>
                <div class="bc-pill">
                  <i class="bi bi-people"></i>
                  {{ booking.participants }} Trekkers
                </div>
                <div class="bc-pill">
                  <i class="bi bi-credit-card"></i>
                  {{ (booking.payment_status || 'Pending') | titlecase }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </app-admin-shell>
</div>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
     Admin CRM Notes Slide-out Drawer Modal
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<div class="crm-backdrop" *ngIf="showCrmDrawer" (click)="closeCrmDrawer()">
  <aside class="crm-drawer" (click)="$event.stopPropagation()" *ngIf="selectedCrmUser">
    <div class="crm-drawer-header">
      <div class="crm-user-summary">
        <span class="crm-badge">INTERNAL CRM NOTES</span>
        <h3 class="crm-user-name">{{ selectedCrmUser.name }}</h3>
        <span class="crm-user-contact">{{ selectedCrmUser.email }} &bull; {{ selectedCrmUser.phone }}</span>
      </div>
      <button class="crm-close-btn" (click)="closeCrmDrawer()" aria-label="Close CRM notes">
        <i class="bi bi-x-lg"></i>
      </button>
    </div>

    <!-- Quick Note Composer -->
    <div class="crm-composer">
      <textarea
        class="crm-textarea"
        [(ngModel)]="newNoteText"
        placeholder="Add an internal operations note (e.g. Special pickup request, dietary restriction, VIP trekker preference)..."
        rows="3">
      </textarea>
      <div class="crm-composer-footer">
        <button class="btn-app primary btn-sm" (click)="addCrmNote()" [disabled]="!newNoteText.trim()">
          <i class="bi bi-plus-lg me-1"></i> Add Note
        </button>
      </div>
    </div>

    <!-- Notes List -->
    <div class="crm-notes-list">
      <div class="crm-notes-header">
        <h4>Note History ({{ userNotes.length }})</h4>
      </div>

      <div *ngIf="userNotes.length === 0" class="crm-empty">
        <i class="bi bi-journal-x"></i>
        <p>No internal notes yet for this user. Add the first note above.</p>
      </div>

      <div *ngFor="let note of userNotes" class="crm-note-item">
        <div class="crm-note-top">
          <span class="crm-admin-author"><i class="bi bi-person-check-fill me-1"></i>{{ note.adminName }}</span>
          <div class="crm-note-actions">
            <span class="crm-note-date">{{ note.createdAt | date:'MMM dd, yyyy \xB7 hh:mm a' }}</span>
            <button class="crm-del-btn" (click)="deleteCrmNote(note.id)" title="Delete note">
              <i class="bi bi-trash"></i>
            </button>
          </div>
        </div>
        <p class="crm-note-text">{{ note.content }}</p>
      </div>
    </div>
  </aside>
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/users/users.component.scss */\n:host {\n  display: block;\n}\n.users-page {\n  --background: transparent;\n}\n@keyframes shimmer {\n  0% {\n    background-position: -400px 0;\n  }\n  100% {\n    background-position: 400px 0;\n  }\n}\n.shimmer {\n  background:\n    linear-gradient(\n      90deg,\n      rgba(0, 0, 0, 0.04) 25%,\n      rgba(0, 0, 0, 0.09) 50%,\n      rgba(0, 0, 0, 0.04) 75%);\n  background-size: 800px 100%;\n  animation: shimmer 1.5s infinite linear;\n  border-radius: 6px;\n}\n.skeleton-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  flex-shrink: 0;\n}\n.skeleton-avatar {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.skeleton-line {\n  height: 14px;\n  border-radius: 4px;\n}\n.skeleton-line.sm {\n  width: 64px;\n}\n.skeleton-line.md {\n  width: 120px;\n}\n.skeleton-line.lg {\n  width: 180px;\n}\n.summary-strip {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.summary-card {\n  background: #fff;\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: var(--app-radius, 14px);\n  padding: 16px 18px;\n  box-shadow: var(--app-shadow-soft, 0 2px 8px rgba(0, 0, 0, 0.04));\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  transition: transform 0.15s ease, box-shadow 0.15s ease;\n}\n.summary-card:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--app-shadow, 0 4px 14px rgba(0, 0, 0, 0.08));\n}\n.summary-card .summary-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.25rem;\n  flex-shrink: 0;\n}\n.summary-card .summary-icon.tone-primary {\n  background: rgba(29, 122, 109, 0.12);\n  color: var(--app-accent, #1d7a6d);\n}\n.summary-card .summary-icon.tone-success {\n  background: #ecfdf5;\n  color: #10b981;\n}\n.summary-card .summary-icon.tone-danger {\n  background: #fef2f2;\n  color: #ef4444;\n}\n.summary-card .summary-icon.tone-warning {\n  background: #fffbeb;\n  color: #f59e0b;\n}\n.summary-card .summary-copy {\n  display: flex;\n  flex-direction: column;\n}\n.summary-card .summary-copy h3 {\n  margin: 0;\n  font-size: 1.45rem;\n  font-weight: 800;\n  color: var(--app-ink, #111827);\n  line-height: 1.2;\n}\n.summary-card .summary-copy p {\n  margin: 2px 0 0;\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: var(--app-ink-muted, #6b7280);\n}\n.users-toolbar-card {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n  background: #fff;\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: var(--app-radius, 14px);\n  padding: 12px 16px;\n  margin-bottom: 16px;\n  box-shadow: var(--app-shadow-soft, 0 2px 8px rgba(0, 0, 0, 0.04));\n  flex-wrap: wrap;\n}\n.toolbar-left {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex: 1 1 300px;\n  flex-wrap: wrap;\n}\n.search-input-wrap {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--app-surface, #f9fafb);\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: 10px;\n  padding: 8px 12px;\n  flex: 1 1 240px;\n  min-width: 200px;\n  transition: all 0.15s ease;\n}\n.search-input-wrap:focus-within {\n  border-color: var(--app-accent, #1d7a6d);\n  box-shadow: 0 0 0 3px rgba(29, 122, 109, 0.12);\n  background: #fff;\n}\n.search-input-wrap i {\n  color: #9ca3af;\n  font-size: 0.9rem;\n  flex-shrink: 0;\n}\n.search-input-wrap input {\n  border: none;\n  outline: none;\n  flex: 1;\n  background: transparent;\n  font-size: 0.88rem;\n  color: var(--app-ink, #111827);\n}\n.search-input-wrap input::placeholder {\n  color: #9ca3af;\n}\n.search-input-wrap .clear-btn {\n  background: transparent;\n  border: none;\n  color: #9ca3af;\n  padding: 0;\n  cursor: pointer;\n}\n.filter-toggle-btn {\n  position: relative;\n}\n.filter-toggle-btn .active-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--app-accent, #1d7a6d);\n  margin-left: 4px;\n}\n.toolbar-right {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-left: auto;\n}\n.view-toggle {\n  display: flex;\n  background: var(--app-surface, #f3f4f6);\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: 10px;\n  padding: 3px;\n}\n.view-toggle .toggle-btn {\n  background: transparent;\n  border: none;\n  padding: 5px 9px;\n  border-radius: 7px;\n  font-size: 0.9rem;\n  color: var(--app-ink-muted, #6b7280);\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.view-toggle .toggle-btn:hover {\n  color: #111827;\n}\n.view-toggle .toggle-btn.active {\n  background: #fff;\n  color: var(--app-accent, #1d7a6d);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.filter-panel {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.25s ease-out, margin-bottom 0.25s ease;\n  margin-bottom: 0;\n}\n.filter-panel.open {\n  max-height: 200px;\n  margin-bottom: 20px;\n}\n.filter-panel .filter-panel-inner {\n  background: #fff;\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: var(--app-radius, 14px);\n  padding: 16px;\n  display: flex;\n  align-items: flex-end;\n  gap: 16px;\n  flex-wrap: wrap;\n  box-shadow: var(--app-shadow-soft);\n}\n.filter-panel .fp-group {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  flex: 1 1 160px;\n}\n.filter-panel .fp-group label {\n  font-size: 0.76rem;\n  font-weight: 700;\n  color: #4b5563;\n  text-transform: uppercase;\n}\n.filter-panel .fp-group input[type=date],\n.filter-panel .fp-group select {\n  background: var(--app-surface, #f9fafb);\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: 8px;\n  padding: 7px 10px;\n  font-size: 0.85rem;\n  color: #111827;\n  outline: none;\n}\n.filter-panel .fp-group input[type=date]:focus,\n.filter-panel .fp-group select:focus {\n  border-color: var(--app-accent, #1d7a6d);\n  background: #fff;\n}\n.filter-panel .select-wrapper {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.filter-panel .select-wrapper select {\n  width: 100%;\n  appearance: none;\n  padding-right: 28px;\n  cursor: pointer;\n}\n.filter-panel .select-wrapper .select-arrow {\n  position: absolute;\n  right: 8px;\n  pointer-events: none;\n  color: #6b7280;\n  font-size: 0.72rem;\n}\n.filter-panel .fp-actions {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-left: auto;\n}\n.filter-panel .fp-actions .fp-count {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--app-accent, #1d7a6d);\n  white-space: nowrap;\n}\n.users-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.user-card {\n  background: #fff;\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: var(--app-radius, 16px);\n  padding: 18px;\n  box-shadow: var(--app-shadow-soft, 0 2px 8px rgba(0, 0, 0, 0.04));\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease,\n    border-color 0.2s ease;\n}\n.user-card:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--app-shadow, 0 8px 20px rgba(0, 0, 0, 0.08));\n  border-color: #cbd5e1;\n}\n.card-top {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.card-top .u-avatar-wrap {\n  position: relative;\n  width: 48px;\n  height: 48px;\n  flex-shrink: 0;\n}\n.card-top .u-avatar-wrap .u-avatar-img {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.card-top .u-avatar-wrap .u-avatar-initials {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-weight: 800;\n  font-size: 1rem;\n}\n.card-top .u-avatar-wrap .status-dot-indicator {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  border: 2px solid #fff;\n}\n.card-top .u-avatar-wrap .status-dot-indicator.active {\n  background: #10b981;\n}\n.card-top .u-avatar-wrap .status-dot-indicator.blocked {\n  background: #ef4444;\n}\n.card-top .u-avatar-wrap .status-dot-indicator.inactive {\n  background: #f59e0b;\n}\n.card-top .u-info {\n  flex: 1;\n  overflow: hidden;\n}\n.card-top .u-info .u-name {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--app-ink, #111827);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.card-top .u-info .u-email {\n  margin: 2px 0 0;\n  font-size: 0.8rem;\n  color: var(--app-ink-muted, #6b7280);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.card-top .u-info .u-phone {\n  margin: 2px 0 0;\n  font-size: 0.76rem;\n  color: var(--app-ink-muted, #9ca3af);\n}\n.card-rule {\n  height: 1px;\n  background: var(--app-border, #f1f5f9);\n}\n.card-stats {\n  display: grid;\n  grid-template-columns: 1fr auto 1fr auto 1fr;\n  align-items: center;\n  background: var(--app-surface, #f8fafc);\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: 10px;\n  padding: 10px;\n}\n.card-stats .cs {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 2px;\n}\n.card-stats .cs .cs-val {\n  font-size: 0.95rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.card-stats .cs .cs-val.green {\n  color: #059669;\n}\n.card-stats .cs .cs-val.sm {\n  font-size: 0.78rem;\n}\n.card-stats .cs .cs-lbl {\n  font-size: 0.7rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n}\n.card-stats .cs-sep {\n  width: 1px;\n  height: 24px;\n  background: #e2e8f0;\n}\n.card-actions {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.card-actions .ca-btn {\n  flex: 1 1 auto;\n  padding: 6px 10px;\n  border-radius: 8px;\n  font-size: 0.78rem;\n  font-weight: 700;\n  cursor: pointer;\n  border: 1px solid transparent;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  transition: all 0.15s ease;\n}\n.card-actions .ca-btn.outline {\n  background: #f8fafc;\n  border-color: #e2e8f0;\n  color: #334155;\n}\n.card-actions .ca-btn.outline:hover {\n  background: #e2e8f0;\n}\n.card-actions .ca-btn.wa-btn {\n  background: #ecfdf5;\n  color: #065f46;\n  border-color: #a7f3d0;\n}\n.card-actions .ca-btn.wa-btn:hover {\n  background: #d1fae5;\n}\n.card-actions .ca-btn.crm-btn {\n  background: #eff6ff;\n  color: #1e40af;\n  border-color: #bfdbfe;\n}\n.card-actions .ca-btn.crm-btn:hover {\n  background: #dbeafe;\n}\n.card-actions .ca-btn.success {\n  background: #ecfdf5;\n  color: #047857;\n  border-color: #a7f3d0;\n}\n.card-actions .ca-btn.success:hover {\n  background: #047857;\n  color: #fff;\n}\n.card-actions .ca-btn.danger {\n  background: #fef2f2;\n  color: #b91c1c;\n  border-color: #fecaca;\n}\n.card-actions .ca-btn.danger:hover {\n  background: #b91c1c;\n  color: #fff;\n}\n.status-pill {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 9px;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.status-pill.status-success {\n  background: #ecfdf5;\n  color: #065f46;\n  border: 1px solid #a7f3d0;\n}\n.status-pill.status-danger {\n  background: #fef2f2;\n  color: #991b1b;\n  border: 1px solid #fecaca;\n}\n.status-pill.status-warning {\n  background: #fffbeb;\n  color: #92400e;\n  border: 1px solid #fde68a;\n}\n.status-pill.status-medium {\n  background: #f3f4f6;\n  color: #4b5563;\n  border: 1px solid #e5e7eb;\n}\n.table-shell {\n  background: #fff;\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: var(--app-radius, 14px);\n  box-shadow: var(--app-shadow-soft);\n  overflow: hidden;\n  margin-bottom: 24px;\n}\n.table-wrap {\n  overflow-x: auto;\n}\n.users-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.88rem;\n}\n.users-table thead th {\n  background: var(--app-surface, #f9fafb);\n  padding: 12px 14px;\n  font-size: 0.76rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #4b5563;\n  border-bottom: 1px solid #e5e7eb;\n  white-space: nowrap;\n}\n.users-table tbody tr {\n  border-bottom: 1px solid #f1f5f9;\n  transition: background 0.15s ease;\n}\n.users-table tbody tr:last-child {\n  border-bottom: none;\n}\n.users-table tbody tr.clickable-row {\n  cursor: pointer;\n}\n.users-table tbody tr.clickable-row:hover {\n  background: rgba(29, 122, 109, 0.03);\n}\n.users-table td {\n  padding: 12px 14px;\n  vertical-align: middle;\n}\n.users-table .u-avatar-wrap.sm {\n  width: 36px;\n  height: 36px;\n}\n.users-table .u-avatar-wrap.sm .u-avatar-initials.sm {\n  font-size: 0.82rem;\n}\n.pax-badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: #f3f4f6;\n  font-weight: 700;\n  font-size: 0.8rem;\n  color: #374151;\n}\n.icon-btn {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  border: 1px solid transparent;\n  background: transparent;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #475569;\n  transition: all 0.15s ease;\n}\n.icon-btn:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n.detail-container {\n  max-width: 900px;\n  margin: 0 auto;\n}\n.profile-hero {\n  background: #fff;\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: var(--app-radius, 16px);\n  padding: 24px;\n  margin-bottom: 20px;\n  box-shadow: var(--app-shadow-soft);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n.profile-hero .hero-inner {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n}\n.profile-hero .hero-avatar-wrap {\n  position: relative;\n  width: 72px;\n  height: 72px;\n}\n.profile-hero .hero-avatar-wrap .hero-avatar {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  object-fit: cover;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.profile-hero .hero-avatar-wrap .hero-status-ring {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  border: 3px solid #fff;\n}\n.profile-hero .hero-avatar-wrap .hero-status-ring.ring-active {\n  background: #10b981;\n}\n.profile-hero .hero-avatar-wrap .hero-status-ring.ring-blocked {\n  background: #ef4444;\n}\n.profile-hero .hero-avatar-wrap .hero-status-ring.ring-inactive {\n  background: #f59e0b;\n}\n.profile-hero .hero-text .hero-name {\n  margin: 0;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.profile-hero .hero-text .hero-email {\n  margin: 2px 0 0;\n  font-size: 0.9rem;\n  color: #64748b;\n}\n.profile-hero .hero-stats {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  background: var(--app-surface, #f8fafc);\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: 12px;\n  padding: 12px 20px;\n}\n.profile-hero .hero-stats .hs {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2px;\n}\n.profile-hero .hero-stats .hs .hs-val {\n  font-size: 1.15rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.profile-hero .hero-stats .hs .hs-val.sm {\n  font-size: 0.88rem;\n}\n.profile-hero .hero-stats .hs .hs-lbl {\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n}\n.profile-hero .hero-stats .hs-sep {\n  width: 1px;\n  height: 28px;\n  background: #e2e8f0;\n}\n.custom-tab-bar {\n  display: inline-flex;\n  background: #f1f5f9;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 4px;\n  gap: 4px;\n}\n.custom-tab-bar .tab-btn {\n  padding: 8px 18px;\n  border-radius: 8px;\n  border: none;\n  background: transparent;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #64748b;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.custom-tab-bar .tab-btn.active {\n  background: #fff;\n  color: var(--app-accent, #1d7a6d);\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);\n}\n.info-card {\n  background: #fff;\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: var(--app-radius, 14px);\n  padding: 16px 20px;\n  box-shadow: var(--app-shadow-soft);\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.info-card .info-row {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.info-card .info-row .info-icon-wrap {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  background: rgba(29, 122, 109, 0.08);\n  color: var(--app-accent, #1d7a6d);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n  flex-shrink: 0;\n}\n.info-card .info-row .info-text {\n  display: flex;\n  flex-direction: column;\n}\n.info-card .info-row .info-text .info-lbl {\n  font-size: 0.74rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n}\n.info-card .info-row .info-text .info-val {\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: #0f172a;\n}\n.info-card .info-divider {\n  height: 1px;\n  background: #f1f5f9;\n}\n.detail-actions {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.bookings-grid-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.booking-card {\n  background: #fff;\n  border: 1px solid var(--app-border, #e5e7eb);\n  border-radius: 12px;\n  padding: 14px 18px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.03);\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.booking-card .bc-top {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 12px;\n}\n.booking-card .bc-top .bc-ref {\n  font-family: ui-monospace, monospace;\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: var(--app-accent, #1d7a6d);\n}\n.booking-card .bc-top .bc-name {\n  margin: 2px 0 0;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.booking-card .bc-pills {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.booking-card .bc-pills .bc-pill {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 6px;\n  padding: 3px 8px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #334155;\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n}\n.crm-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n  z-index: 1000;\n}\n.crm-drawer {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  width: 420px;\n  max-width: 100vw;\n  background: #fff;\n  z-index: 1001;\n  display: flex;\n  flex-direction: column;\n  box-shadow: -4px 0 24px rgba(0, 0, 0, 0.15);\n}\n.crm-drawer-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 18px 20px;\n  border-bottom: 1px solid #e5e7eb;\n}\n.crm-drawer-header .crm-badge {\n  font-size: 0.72rem;\n  font-weight: 800;\n  color: var(--app-accent, #1d7a6d);\n  letter-spacing: 0.05em;\n}\n.crm-drawer-header .crm-user-name {\n  margin: 2px 0 0;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #111827;\n}\n.crm-drawer-header .crm-user-contact {\n  font-size: 0.78rem;\n  color: #6b7280;\n}\n.crm-drawer-header .crm-close-btn {\n  background: transparent;\n  border: none;\n  font-size: 1rem;\n  color: #9ca3af;\n  cursor: pointer;\n}\n.crm-composer {\n  padding: 16px 20px;\n  background: #f8fafc;\n  border-bottom: 1px solid #e5e7eb;\n}\n.crm-composer .crm-textarea {\n  width: 100%;\n  background: #fff;\n  border: 1px solid #cbd5e1;\n  border-radius: 8px;\n  padding: 10px;\n  font-size: 0.85rem;\n  resize: vertical;\n  outline: none;\n}\n.crm-composer .crm-textarea:focus {\n  border-color: var(--app-accent, #1d7a6d);\n}\n.crm-composer .crm-composer-footer {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 8px;\n}\n.crm-notes-list {\n  flex: 1;\n  overflow-y: auto;\n  padding: 16px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.crm-notes-list .crm-notes-header h4 {\n  margin: 0;\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: #374151;\n}\n.crm-empty {\n  text-align: center;\n  padding: 30px 10px;\n  color: #9ca3af;\n}\n.crm-empty i {\n  font-size: 28px;\n}\n.crm-empty p {\n  font-size: 0.82rem;\n  margin: 6px 0 0;\n}\n.crm-note-item {\n  background: #f8fafc;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 12px;\n}\n.crm-note-item .crm-note-top {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 4px;\n}\n.crm-note-item .crm-note-top .crm-admin-author {\n  font-size: 0.76rem;\n  font-weight: 700;\n  color: var(--app-accent, #1d7a6d);\n}\n.crm-note-item .crm-note-top .crm-note-actions {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.crm-note-item .crm-note-top .crm-note-actions .crm-note-date {\n  font-size: 0.7rem;\n  color: #9ca3af;\n}\n.crm-note-item .crm-note-top .crm-note-actions .crm-del-btn {\n  background: transparent;\n  border: none;\n  color: #ef4444;\n  cursor: pointer;\n  padding: 0;\n}\n.crm-note-item .crm-note-text {\n  margin: 0;\n  font-size: 0.84rem;\n  color: #1f2937;\n  line-height: 1.4;\n}\n.empty-state {\n  text-align: center;\n  padding: 48px 24px;\n  background: #fff;\n  border: 1px dashed var(--app-border, #cbd5e1);\n  border-radius: var(--app-radius, 14px);\n  margin-bottom: 24px;\n}\n.empty-state .empty-icon {\n  width: 64px;\n  height: 64px;\n  margin: 0 auto 16px;\n  border-radius: 50%;\n  background: rgba(29, 122, 109, 0.08);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.empty-state .empty-icon i {\n  font-size: 28px;\n  color: var(--app-accent, #1d7a6d);\n}\n.empty-state h3 {\n  margin: 0 0 6px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #111827;\n}\n.empty-state p {\n  margin: 0 0 20px;\n  font-size: 0.9rem;\n  color: #6b7280;\n}\n@media (max-width: 1024px) {\n  .summary-strip {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .summary-strip {\n    grid-template-columns: 1fr;\n    gap: 10px;\n  }\n  .users-toolbar-card {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .users-toolbar-card .toolbar-left,\n  .users-toolbar-card .toolbar-right {\n    width: 100%;\n  }\n  .users-toolbar-card .toolbar-right {\n    justify-content: flex-end;\n  }\n  .search-input-wrap {\n    width: 100%;\n    flex: 1 1 100%;\n  }\n  .users-grid {\n    grid-template-columns: 1fr;\n  }\n  .profile-hero {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .profile-hero .hero-stats {\n    width: 100%;\n    justify-content: space-around;\n  }\n  .crm-drawer {\n    top: auto;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n    max-height: 85vh;\n    border-radius: 20px 20px 0 0;\n  }\n}\n/*# sourceMappingURL=users.component.css.map */\n'] }]
  }], () => [{ type: Users }, { type: ActivatedRoute }, { type: Router }, { type: DropdownManagerService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsersComponent, { className: "UsersComponent", filePath: "src/app/users/users.component.ts", lineNumber: 38 });
})();

// src/app/users/users-module.ts
var routes = [{ path: "", component: UsersComponent }];
var _UsersModule = class _UsersModule {
};
_UsersModule.\u0275fac = function UsersModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UsersModule)();
};
_UsersModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _UsersModule });
_UsersModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, UsersComponent, RouterModule.forChild(routes)] });
var UsersModule = _UsersModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsersModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        CommonModule,
        UsersComponent,
        RouterModule.forChild(routes)
      ]
    }]
  }], null, null);
})();
export {
  UsersModule
};
//# sourceMappingURL=users-module-2DFGDHR2.js.map
