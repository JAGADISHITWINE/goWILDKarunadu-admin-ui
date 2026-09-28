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
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  DestroyRef,
  NgForOf,
  NgIf,
  NgModule,
  Observable,
  Router,
  RouterModule,
  __spreadProps,
  __spreadValues,
  assertInInjectionContext,
  computed,
  inject,
  setClassMetadata,
  signal,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
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

// node_modules/@angular/core/fesm2022/rxjs-interop.mjs
function takeUntilDestroyed(destroyRef) {
  if (!destroyRef) {
    ngDevMode && assertInInjectionContext(takeUntilDestroyed);
    destroyRef = inject(DestroyRef);
  }
  const destroyed$ = new Observable((subscriber) => {
    if (destroyRef.destroyed) {
      subscriber.next();
      return;
    }
    const unregisterFn = destroyRef.onDestroy(subscriber.next.bind(subscriber));
    return unregisterFn;
  });
  return (source) => {
    return source.pipe(takeUntil(destroyed$));
  };
}

// src/app/notifications/notifications.component.ts
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.id;
function NotificationsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", ctx_r0.unreadCount() + " unread");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.unreadCount(), " ");
  }
}
function NotificationsComponent_Conditional_15_Conditional_12_ng_container_6_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 42);
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
function NotificationsComponent_Conditional_15_Conditional_12_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, NotificationsComponent_Conditional_15_Conditional_12_ng_container_6_option_1_Template, 2, 2, "option", 41);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.notificationTypeOptions);
  }
}
function NotificationsComponent_Conditional_15_Conditional_12_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 43);
    \u0275\u0275text(1, "Booking Update");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "option", 44);
    \u0275\u0275text(3, "Trek Alert");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "option", 45);
    \u0275\u0275text(5, "Weather Alert");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "option", 46);
    \u0275\u0275text(7, "Guide Notice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 47);
    \u0275\u0275text(9, "Special Offer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 48);
    \u0275\u0275text(11, "System Notice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 49);
    \u0275\u0275text(13, "Blog Story");
    \u0275\u0275elementEnd();
  }
}
function NotificationsComponent_Conditional_15_Conditional_12_ng_container_13_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r5 = ctx.$implicit;
    \u0275\u0275property("value", opt_r5.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r5.label);
  }
}
function NotificationsComponent_Conditional_15_Conditional_12_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, NotificationsComponent_Conditional_15_Conditional_12_ng_container_13_option_1_Template, 2, 2, "option", 41);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.notificationTargetOptions);
  }
}
function NotificationsComponent_Conditional_15_Conditional_12_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 50);
    \u0275\u0275text(1, "All Users");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "option", 51);
    \u0275\u0275text(3, "Active Trek Bookers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "option", 52);
    \u0275\u0275text(5, "Admins & Staff");
    \u0275\u0275elementEnd();
  }
}
function NotificationsComponent_Conditional_15_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 34)(2, "label")(3, "span");
    \u0275\u0275text(4, "Category / Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "select", 35);
    \u0275\u0275twoWayListener("ngModelChange", function NotificationsComponent_Conditional_15_Conditional_12_Template_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.composerForm.type, $event) || (ctx_r0.composerForm.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(6, NotificationsComponent_Conditional_15_Conditional_12_ng_container_6_Template, 2, 1, "ng-container", 36)(7, NotificationsComponent_Conditional_15_Conditional_12_ng_template_7_Template, 14, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "label")(10, "span");
    \u0275\u0275text(11, "Target Audience");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "select", 35);
    \u0275\u0275twoWayListener("ngModelChange", function NotificationsComponent_Conditional_15_Conditional_12_Template_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.composerForm.target, $event) || (ctx_r0.composerForm.target = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(13, NotificationsComponent_Conditional_15_Conditional_12_ng_container_13_Template, 2, 1, "ng-container", 36)(14, NotificationsComponent_Conditional_15_Conditional_12_ng_template_14_Template, 6, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "label")(17, "span");
    \u0275\u0275text(18, "Notification Title *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function NotificationsComponent_Conditional_15_Conditional_12_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.composerForm.title, $event) || (ctx_r0.composerForm.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "label")(21, "span");
    \u0275\u0275text(22, "Message Content *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "textarea", 38);
    \u0275\u0275twoWayListener("ngModelChange", function NotificationsComponent_Conditional_15_Conditional_12_Template_textarea_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.composerForm.message, $event) || (ctx_r0.composerForm.message = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 34)(25, "label")(26, "span");
    \u0275\u0275text(27, "Action Button Label");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 39);
    \u0275\u0275twoWayListener("ngModelChange", function NotificationsComponent_Conditional_15_Conditional_12_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.composerForm.actionLabel, $event) || (ctx_r0.composerForm.actionLabel = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "label")(30, "span");
    \u0275\u0275text(31, "Target URL / Route");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "input", 40);
    \u0275\u0275twoWayListener("ngModelChange", function NotificationsComponent_Conditional_15_Conditional_12_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.composerForm.actionUrl, $event) || (ctx_r0.composerForm.actionUrl = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const defaultNotificationTypes_r6 = \u0275\u0275reference(8);
    const defaultNotificationTargets_r7 = \u0275\u0275reference(15);
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.composerForm.type);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.notificationTypeOptions.length > 0)("ngIfElse", defaultNotificationTypes_r6);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.composerForm.target);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.notificationTargetOptions.length > 0)("ngIfElse", defaultNotificationTargets_r7);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.composerForm.title);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.composerForm.message);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.composerForm.actionLabel);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.composerForm.actionUrl);
  }
}
function NotificationsComponent_Conditional_15_Conditional_13_button_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 66);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.composerForm.actionLabel, " ");
  }
}
function NotificationsComponent_Conditional_15_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 53);
    \u0275\u0275element(2, "i", 54);
    \u0275\u0275text(3, " In-App Notification Live Preview:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 55);
    \u0275\u0275element(5, "div", 56);
    \u0275\u0275elementStart(6, "div", 57);
    \u0275\u0275element(7, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 58)(9, "div", 59)(10, "span", 60);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 61);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "p", 62);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 63)(17, "span", 64);
    \u0275\u0275text(18, "Just now");
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, NotificationsComponent_Conditional_15_Conditional_13_button_19_Template, 2, 1, "button", 65);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("type--booking", ctx_r0.composerForm.type === "booking")("type--weather", ctx_r0.composerForm.type === "weather")("type--trek", ctx_r0.composerForm.type === "trek")("type--guide", ctx_r0.composerForm.type === "guide")("type--offer", ctx_r0.composerForm.type === "offer")("type--blog", ctx_r0.composerForm.type === "blog")("type--system", ctx_r0.composerForm.type === "system");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r0.iconFor(ctx_r0.composerForm.type));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.composerForm.title || "Untitled Notification");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.labelFor(ctx_r0.composerForm.type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.composerForm.message || "Notification message will appear here...");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.composerForm.actionLabel);
  }
}
function NotificationsComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 22)(2, "h3");
    \u0275\u0275element(3, "i", 23);
    \u0275\u0275text(4, " Broadcast Notification");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 24)(6, "button", 25);
    \u0275\u0275listener("click", function NotificationsComponent_Conditional_15_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.composerPreview.set(false));
    });
    \u0275\u0275element(7, "i", 26);
    \u0275\u0275text(8, " Edit ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 25);
    \u0275\u0275listener("click", function NotificationsComponent_Conditional_15_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.composerPreview.set(true));
    });
    \u0275\u0275element(10, "i", 27);
    \u0275\u0275text(11, " Live Preview ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(12, NotificationsComponent_Conditional_15_Conditional_12_Template, 33, 10, "div", 28)(13, NotificationsComponent_Conditional_15_Conditional_13_Template, 20, 20, "div", 29);
    \u0275\u0275elementStart(14, "div", 30)(15, "button", 31);
    \u0275\u0275listener("click", function NotificationsComponent_Conditional_15_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleComposer());
    });
    \u0275\u0275text(16, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 32);
    \u0275\u0275listener("click", function NotificationsComponent_Conditional_15_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.sendNotification());
    });
    \u0275\u0275element(18, "i", 33);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275classProp("active", !ctx_r0.composerPreview());
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r0.composerPreview());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r0.composerPreview() ? 12 : 13);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", !ctx_r0.composerForm.title.trim() || !ctx_r0.composerForm.message.trim());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.composerSent() ? "Sent!" : "Send Notification", " ");
  }
}
function NotificationsComponent_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 67);
    \u0275\u0275listener("click", function NotificationsComponent_For_18_Template_button_click_0_listener() {
      const tab_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setTab(tab_r9.key));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r9 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r0.activeTab() === tab_r9.key);
    \u0275\u0275attribute("aria-selected", ctx_r0.activeTab() === tab_r9.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tab_r9.label, " ");
  }
}
function NotificationsComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 68);
    \u0275\u0275element(2, "span")(3, "span")(4, "span")(5, "span")(6, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, "Fetching trail updates\u2026");
    \u0275\u0275elementEnd()();
  }
}
function NotificationsComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 13);
    \u0275\u0275element(2, "path", 69)(3, "line", 70)(4, "line", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div")(6, "strong");
    \u0275\u0275text(7, "Couldn't reach base camp");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 72);
    \u0275\u0275listener("click", function NotificationsComponent_Conditional_20_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.fetchNotifications());
    });
    \u0275\u0275text(11, "Retry");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function NotificationsComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 73);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 74);
    \u0275\u0275element(3, "path", 75)(4, "circle", 76);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "p", 77);
    \u0275\u0275text(6, "All clear on the trail!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 78);
    \u0275\u0275text(8, "No notifications here. Time to plan your next adventure.");
    \u0275\u0275elementEnd()();
  }
}
function NotificationsComponent_Conditional_22_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 85);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 86);
    \u0275\u0275element(2, "path", 93)(3, "circle", 94);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const notif_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", notif_r12.meta, " ");
  }
}
function NotificationsComponent_Conditional_22_For_2_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 95);
    \u0275\u0275listener("click", function NotificationsComponent_Conditional_22_For_2_Conditional_19_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const notif_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onActionClick($event, notif_r12));
    });
    \u0275\u0275text(1);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 96);
    \u0275\u0275element(3, "path", 97);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const notif_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", notif_r12.actionLabel, " ");
  }
}
function NotificationsComponent_Conditional_22_For_2_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 92);
  }
}
function NotificationsComponent_Conditional_22_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 82);
    \u0275\u0275listener("click", function NotificationsComponent_Conditional_22_For_2_Template_li_click_0_listener() {
      const notif_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openNotification(notif_r12));
    });
    \u0275\u0275element(1, "div", 83);
    \u0275\u0275elementStart(2, "div", 84);
    \u0275\u0275element(3, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 58)(5, "div", 59)(6, "span", 60);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 61);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(10, NotificationsComponent_Conditional_22_For_2_Conditional_10_Template, 5, 1, "p", 85);
    \u0275\u0275elementStart(11, "p", 62);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 63)(14, "time", 64);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 86);
    \u0275\u0275element(16, "circle", 87)(17, "path", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(19, NotificationsComponent_Conditional_22_For_2_Conditional_19_Template, 4, 1, "button", 66);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(20, "button", 89);
    \u0275\u0275listener("click", function NotificationsComponent_Conditional_22_For_2_Template_button_click_20_listener($event) {
      const notif_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r0.dismiss(notif_r12.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(21, "svg", 90);
    \u0275\u0275element(22, "path", 91);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(23, NotificationsComponent_Conditional_22_For_2_Conditional_23_Template, 1, 0, "span", 92);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const notif_r12 = ctx.$implicit;
    const \u0275$index_269_r14 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("animation-delay", \u0275$index_269_r14 * 0.07 + "s");
    \u0275\u0275classProp("unread", !notif_r12.read)("type--booking", notif_r12.type === "booking")("type--weather", notif_r12.type === "weather")("type--trek", notif_r12.type === "trek")("type--guide", notif_r12.type === "guide")("type--offer", notif_r12.type === "offer")("type--blog", notif_r12.type === "blog")("type--comment", notif_r12.type === "comment")("type--system", notif_r12.type === "system");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r0.resolveIcon(notif_r12));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(notif_r12.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(notif_r12.typeLabel);
    \u0275\u0275advance();
    \u0275\u0275conditional(notif_r12.meta ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(notif_r12.message);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("datetime", notif_r12.dateIso);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", notif_r12.timeAgo, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(notif_r12.actionLabel ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "Dismiss " + notif_r12.title);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!notif_r12.read ? 23 : -1);
  }
}
function NotificationsComponent_Conditional_22_div_3_option_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 42);
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
function NotificationsComponent_Conditional_22_div_3_ng_container_24_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 112);
    \u0275\u0275text(1, "\u2026");
    \u0275\u0275elementEnd();
  }
}
function NotificationsComponent_Conditional_22_div_3_ng_container_24_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 113);
    \u0275\u0275listener("click", function NotificationsComponent_Conditional_22_div_3_ng_container_24_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const p_r18 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.goToPage(p_r18));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r18 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", p_r18 === ctx_r0.currentPage());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r18, " ");
  }
}
function NotificationsComponent_Conditional_22_div_3_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, NotificationsComponent_Conditional_22_div_3_ng_container_24_span_1_Template, 2, 0, "span", 110)(2, NotificationsComponent_Conditional_22_div_3_ng_container_24_button_2_Template, 2, 3, "button", 111);
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
function NotificationsComponent_Conditional_22_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 98)(1, "div", 99)(2, "div", 100);
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
    \u0275\u0275text(12, " notifications ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 101)(14, "div", 102)(15, "label");
    \u0275\u0275text(16, "Per page:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "select", 103);
    \u0275\u0275listener("change", function NotificationsComponent_Conditional_22_div_3_Template_select_change_17_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onPageSizeChange($event.target.value));
    });
    \u0275\u0275template(18, NotificationsComponent_Conditional_22_div_3_option_18_Template, 2, 2, "option", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 104)(20, "button", 105);
    \u0275\u0275listener("click", function NotificationsComponent_Conditional_22_div_3_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.prevPage());
    });
    \u0275\u0275element(21, "i", 106);
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23, "Prev");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(24, NotificationsComponent_Conditional_22_div_3_ng_container_24_Template, 3, 2, "ng-container", 107);
    \u0275\u0275elementStart(25, "button", 108);
    \u0275\u0275listener("click", function NotificationsComponent_Conditional_22_div_3_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.nextPage());
    });
    \u0275\u0275elementStart(26, "span");
    \u0275\u0275text(27, "Next");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "i", 109);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r0.currentPage() - 1) * ctx_r0.Number(ctx_r0.pageSize()) + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.Math.min(ctx_r0.currentPage() * ctx_r0.Number(ctx_r0.pageSize()), ctx_r0.notifications().length));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.notifications().length);
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ctx_r0.pageSize());
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.pageSizeOptions);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.currentPage() === 1);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.visiblePageNumbers());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.currentPage() === ctx_r0.totalPages());
  }
}
function NotificationsComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 79);
    \u0275\u0275repeaterCreate(1, NotificationsComponent_Conditional_22_For_2_Template, 24, 31, "li", 80, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, NotificationsComponent_Conditional_22_div_3_Template, 29, 8, "div", 81);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.paginatedNotifications());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.notifications().length > 0);
  }
}
function NotificationsComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "footer", 21)(1, "span", 114);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 115);
    \u0275\u0275text(4, " Explore all ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 116);
    \u0275\u0275element(6, "path", 97);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r0.notifications().length, " update", ctx_r0.notifications().length !== 1 ? "s" : "", " ");
  }
}
var _NotificationsComponent = class _NotificationsComponent {
  /* ============================
     COMPOSER ACTIONS
  ============================ */
  toggleComposer() {
    this.showComposer.update((v) => !v);
    this.composerPreview.set(false);
    this.composerSent.set(false);
  }
  togglePreview() {
    this.composerPreview.update((v) => !v);
  }
  sendNotification() {
    if (!this.composerForm.title.trim() || !this.composerForm.message.trim())
      return;
    const newNotif = {
      id: "notif_" + Date.now(),
      title: this.composerForm.title.trim(),
      message: this.composerForm.message.trim(),
      type: this.composerForm.type,
      date: /* @__PURE__ */ new Date(),
      read: false,
      actionLabel: this.composerForm.actionLabel,
      route: this.composerForm.actionUrl,
      icon: this.iconFor(this.composerForm.type),
      typeLabel: this.labelFor(this.composerForm.type),
      timeAgo: "Just now",
      dateIso: (/* @__PURE__ */ new Date()).toISOString()
    };
    this.allNotifications.update((list) => [newNotif, ...list]);
    this.composerSent.set(true);
    setTimeout(() => {
      this.showComposer.set(false);
      this.composerSent.set(false);
      this.composerForm = {
        title: "",
        message: "",
        type: "booking",
        target: "all",
        actionLabel: "View Details",
        actionUrl: "/admin/bookings"
      };
    }, 1500);
  }
  goToPage(page) {
    if (page !== "..." && page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
    }
  }
  prevPage() {
    if (this.currentPage() > 1) {
      this.currentPage.update((p) => p - 1);
    }
  }
  nextPage() {
    if (this.currentPage() < this.totalPages()) {
      this.currentPage.update((p) => p + 1);
    }
  }
  onPageSizeChange(size) {
    this.pageSize.set(Number(size) || 8);
    this.currentPage.set(1);
  }
  constructor(notificationsService, dropdownService, router) {
    this.notificationsService = notificationsService;
    this.dropdownService = dropdownService;
    this.router = router;
    this.loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
    this.error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
    this.activeTab = signal("all", ...ngDevMode ? [{ debugName: "activeTab" }] : []);
    this.showComposer = signal(false, ...ngDevMode ? [{ debugName: "showComposer" }] : []);
    this.composerPreview = signal(false, ...ngDevMode ? [{ debugName: "composerPreview" }] : []);
    this.composerSent = signal(false, ...ngDevMode ? [{ debugName: "composerSent" }] : []);
    this.composerForm = {
      title: "",
      message: "",
      type: "booking",
      target: "all",
      actionLabel: "View Details",
      actionUrl: "/admin/bookings"
    };
    this.allNotifications = signal([], ...ngDevMode ? [{ debugName: "allNotifications" }] : []);
    this.tabs = [
      { key: "all", label: "All" },
      { key: "unread", label: "Unread" },
      { key: "booking", label: "Bookings" },
      { key: "blog", label: "Blogs" },
      { key: "comment", label: "Comments" },
      { key: "trek", label: "Treks" },
      { key: "weather", label: "Weather" },
      { key: "offer", label: "Offers" }
    ];
    this.Math = Math;
    this.Number = Number;
    this.currentPage = signal(1, ...ngDevMode ? [{ debugName: "currentPage" }] : []);
    this.pageSize = signal(5, ...ngDevMode ? [{ debugName: "pageSize" }] : []);
    this.pageSizeOptions = [5, 10, 20, 40];
    this.notifications = computed(() => {
      const tab = this.activeTab();
      const all = this.allNotifications();
      if (tab === "all")
        return all;
      if (tab === "unread")
        return all.filter((n) => !n.read);
      return all.filter((n) => n.type === tab);
    }, ...ngDevMode ? [{ debugName: "notifications" }] : []);
    this.paginatedNotifications = computed(() => {
      const list = this.notifications();
      const size = Number(this.pageSize()) || 5;
      const total = Math.max(1, Math.ceil(list.length / size));
      const page = Math.min(Math.max(1, this.currentPage()), total);
      const start = (page - 1) * size;
      return list.slice(start, start + size);
    }, ...ngDevMode ? [{ debugName: "paginatedNotifications" }] : []);
    this.totalPages = computed(() => {
      const size = Number(this.pageSize()) || 5;
      return Math.max(1, Math.ceil(this.notifications().length / size));
    }, ...ngDevMode ? [{ debugName: "totalPages" }] : []);
    this.visiblePageNumbers = computed(() => {
      const total = this.totalPages();
      const current = Math.min(Math.max(1, this.currentPage()), total);
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
    }, ...ngDevMode ? [{ debugName: "visiblePageNumbers" }] : []);
    this.unreadCount = computed(() => this.allNotifications().filter((n) => !n.read).length, ...ngDevMode ? [{ debugName: "unreadCount" }] : []);
    this.notificationTypeOptions = [];
    this.notificationTargetOptions = [];
    this.destroyRef = inject(DestroyRef);
  }
  ngOnInit() {
    this.loadDropdowns();
    this.fetchNotifications();
  }
  loadDropdowns() {
    this.dropdownService.getGroupOptions("notificationType").subscribe((opts) => {
      if (opts.length > 0)
        this.notificationTypeOptions = opts;
    });
    this.dropdownService.getGroupOptions("notificationTarget").subscribe((opts) => {
      if (opts.length > 0)
        this.notificationTargetOptions = opts;
    });
    this.dropdownService.getGroupOptions("pageSizeOptions").subscribe((opts) => {
      if (opts.length > 0) {
        this.pageSizeOptions = opts.map((o) => Number(o.value || o.label)).filter((n) => !isNaN(n));
      }
    });
  }
  /* ============================
     API
  ============================ */
  fetchNotifications() {
    this.loading.set(true);
    this.error.set(null);
    this.notificationsService.getNotifications().pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (response) => {
        const rows = this.extractNotificationRows(response.data.notifications || response);
        const mapped = rows.map((n) => {
          const date = new Date(n.date || n.createdAt || n.created_at || Date.now());
          const type = this.mapType(n.type);
          const route = this.resolveRoute(n, type);
          return {
            id: String(n.id || `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`),
            type,
            title: n.title || "Notification",
            message: n.message || "",
            date,
            read: this.isRead(n.read),
            actionLabel: n.actionLabel || (route ? "Open" : void 0),
            meta: n.meta || n.reference || n.trekName || n.postTitle,
            route,
            icon: this.getIcon(type),
            typeLabel: this.getTypeLabel(type),
            timeAgo: this.timeAgo(date),
            dateIso: date.toISOString()
          };
        });
        this.allNotifications.set(mapped);
        this.loading.set(false);
      },
      error: () => {
        this.error.set("Failed to load notifications.");
        this.loading.set(false);
      }
    });
  }
  /* ============================
     ACTIONS
  ============================ */
  setTab(tab) {
    this.activeTab.set(tab);
    this.currentPage.set(1);
  }
  markAllRead() {
    const hadUnread = this.unreadCount() > 0;
    this.allNotifications.update((ns) => ns.map((n) => __spreadProps(__spreadValues({}, n), { read: true })));
    if (!hadUnread)
      return;
    this.notificationsService.markAllRead().pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      error: () => {
        this.fetchNotifications();
      }
    });
  }
  markRead(id) {
    let changed = false;
    this.allNotifications.update((ns) => ns.map((n) => {
      if (n.id === id && !n.read) {
        changed = true;
        return __spreadProps(__spreadValues({}, n), { read: true });
      }
      return n;
    }));
    if (!changed)
      return;
    this.notificationsService.markRead(id).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      error: () => {
        this.fetchNotifications();
      }
    });
  }
  dismiss(id) {
    this.allNotifications.update((ns) => ns.filter((n) => n.id !== id));
  }
  openNotification(notification) {
    this.markRead(notification.id);
    if (notification.route) {
      this.router.navigateByUrl(notification.route);
    }
  }
  onActionClick(event, notification) {
    event.stopPropagation();
    this.openNotification(notification);
  }
  iconFor(type) {
    return this.getIcon(type);
  }
  resolveIcon(notif) {
    if (notif.icon && notif.icon.startsWith("bi "))
      return notif.icon;
    if (notif.type)
      return this.iconFor(notif.type);
    return "bi bi-bell-fill";
  }
  labelFor(type) {
    return this.getTypeLabel(type);
  }
  getIcon(type) {
    const icons = {
      booking: "bi bi-ticket-perforated-fill",
      trek: "bi bi-compass-fill",
      blog: "bi bi-file-earmark-text-fill",
      comment: "bi bi-chat-dots-fill",
      weather: "bi bi-cloud-sun-fill",
      guide: "bi bi-person-badge-fill",
      offer: "bi bi-tag-fill",
      system: "bi bi-gear-fill"
    };
    return icons[type] || "bi bi-bell-fill";
  }
  getTypeLabel(type) {
    const labels = {
      booking: "Booking",
      trek: "Trek",
      blog: "Blog",
      comment: "Comment",
      weather: "Weather",
      guide: "Guide",
      offer: "Offer",
      system: "System"
    };
    return labels[type] || "Notice";
  }
  timeAgo(date) {
    const diff = Date.now() - new Date(date).getTime();
    const mins = Math.floor(diff / 6e4);
    const hours = Math.floor(diff / 36e5);
    const days = Math.floor(diff / 864e5);
    if (mins < 1)
      return "just now";
    if (mins < 60)
      return `${mins}m ago`;
    if (hours < 24)
      return `${hours}h ago`;
    if (days < 7)
      return `${days}d ago`;
    return new Date(date).toLocaleDateString();
  }
  mapType(type) {
    switch ((type || "").toLowerCase()) {
      case "booking":
      case "trek":
      case "weather":
      case "guide":
      case "offer":
      case "system":
      case "blog":
      case "comment":
        return type.toLowerCase();
      case "review":
        return "comment";
      case "post":
      case "content":
        return "blog";
      default:
        return "system";
    }
  }
  resolveRoute(notification, type) {
    const explicitRoute = notification?.route || notification?.path || notification?.url || notification?.actionUrl || notification?.targetUrl;
    if (explicitRoute) {
      return explicitRoute;
    }
    const entityId = notification?.postId || notification?.blogId || notification?.entityId || notification?.idRef;
    if (type === "blog") {
      return entityId ? `/admin/blog/editor/${entityId}` : "/admin/blog/posts";
    }
    if (type === "comment") {
      return "/admin/reviews";
    }
    if (type === "booking") {
      return "/admin/bookings";
    }
    return void 0;
  }
  trackById(_, n) {
    return n.id;
  }
  extractNotificationRows(response) {
    if (Array.isArray(response?.results))
      return response.results;
    if (Array.isArray(response?.data))
      return response.data;
    if (Array.isArray(response?.data?.results))
      return response.data.results;
    if (Array.isArray(response))
      return response;
    return [];
  }
  isRead(value) {
    if (value === true || value === 1)
      return true;
    if (typeof value === "string") {
      const normalized = value.trim().toLowerCase();
      return normalized === "1" || normalized === "true" || normalized === "yes";
    }
    return false;
  }
};
_NotificationsComponent.\u0275fac = function NotificationsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NotificationsComponent)(\u0275\u0275directiveInject(NotificationsService), \u0275\u0275directiveInject(DropdownManagerService), \u0275\u0275directiveInject(Router));
};
_NotificationsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotificationsComponent, selectors: [["app-notifications"]], features: [\u0275\u0275ProvidersFeature([NotificationsService])], decls: 24, vars: 11, consts: [["defaultNotificationTypes", ""], ["defaultNotificationTargets", ""], [1, "notifications-page"], ["title", "Notifications", "subtitle", "Stay in sync with bookings, treks, and system alerts.", "sectionLabel", "Operations"], [1, "app-shell"], ["role", "region", "aria-label", "Notifications", 1, "notif-panel"], [1, "notif-header"], [1, "header-brand"], [1, "unread-badge"], [1, "header-actions-group"], [1, "compose-btn", 3, "click"], [1, "bi", "bi-pencil-square"], ["aria-label", "Mark all as read", 1, "mark-all-btn", 3, "click", "disabled"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M20 6L9 17l-5-5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "composer-card"], ["role", "tablist", "aria-label", "Filter notifications", 1, "notif-tabs"], ["role", "tab", 1, "tab-btn", 3, "active"], ["aria-live", "polite", "role", "status", 1, "state-loading"], ["role", "alert", "aria-live", "assertive", 1, "state-error"], ["aria-live", "polite", 1, "state-empty"], [1, "notif-footer-bar"], [1, "composer-head"], [1, "bi", "bi-broadcast"], [1, "preview-mode-toggle"], [1, "mode-btn", 3, "click"], [1, "bi", "bi-pencil"], [1, "bi", "bi-eye"], [1, "composer-form"], [1, "live-preview-box"], [1, "composer-actions"], ["type", "button", 1, "btn-app", "ghost", 3, "click"], ["type", "button", 1, "btn-app", 3, "click", "disabled"], [1, "bi", "bi-send-fill"], [1, "cf-row"], [1, "form-select", 3, "ngModelChange", "ngModel"], [4, "ngIf", "ngIfElse"], ["type", "text", "placeholder", "e.g., Trail Update: Kudremukh Trek departure rescheduled", 1, "form-control", 3, "ngModelChange", "ngModel"], ["rows", "3", "placeholder", "Write the notification message...", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "e.g., View Details", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "e.g., /admin/bookings", 1, "form-control", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["value", "booking"], ["value", "trek"], ["value", "weather"], ["value", "guide"], ["value", "offer"], ["value", "system"], ["value", "blog"], ["value", "all"], ["value", "bookers"], ["value", "admins"], [1, "preview-device-label"], [1, "bi", "bi-phone"], [1, "notif-item", "preview-item"], [1, "notif-strip"], [1, "notif-icon"], [1, "notif-body"], [1, "notif-top"], [1, "notif-title"], [1, "notif-type-tag"], [1, "notif-message"], [1, "notif-footer"], [1, "notif-time"], ["class", "notif-action-btn", 4, "ngIf"], [1, "notif-action-btn"], ["role", "tab", 1, "tab-btn", 3, "click"], [1, "trail-loader"], ["d", "M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"], ["x1", "12", "y1", "9", "x2", "12", "y2", "13"], ["x1", "12", "y1", "17", "x2", "12.01", "y2", "17"], [1, "retry-btn", 3, "click"], [1, "empty-illustration"], ["viewBox", "0 0 80 60", "fill", "none"], ["d", "M10 50 L28 20 L40 35 L52 12 L70 50Z", "fill", "rgba(126,167,107,0.15)", "stroke", "rgba(126,167,107,0.4)", "stroke-width", "1.5", "stroke-linejoin", "round"], ["cx", "64", "cy", "14", "r", "6", "fill", "rgba(255,178,80,0.2)", "stroke", "rgba(255,178,80,0.5)", "stroke-width", "1.5"], [1, "empty-title"], [1, "empty-sub"], ["role", "list", 1, "notif-list"], ["role", "listitem", 1, "notif-item", 3, "unread", "type--booking", "type--weather", "type--trek", "type--guide", "type--offer", "type--blog", "type--comment", "type--system", "animation-delay"], ["class", "pagination-shell", 4, "ngIf"], ["role", "listitem", 1, "notif-item", 3, "click"], ["aria-hidden", "true", 1, "notif-strip"], ["aria-hidden", "true", 1, "notif-icon"], [1, "notif-meta-label"], ["viewBox", "0 0 16 16", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "width", "11", "height", "11"], ["cx", "8", "cy", "8", "r", "6.5"], ["d", "M8 4.5V8l2.5 2", "stroke-linecap", "round"], [1, "notif-dismiss", 3, "click"], ["viewBox", "0 0 16 16", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M4 4l8 8M12 4l-8 8", "stroke-linecap", "round"], ["aria-label", "Unread", 1, "unread-pip"], ["d", "M8 1.5C5.5 1.5 3.5 3.5 3.5 6c0 3.5 4.5 8.5 4.5 8.5S12.5 9.5 12.5 6c0-2.5-2-4.5-4.5-4.5z"], ["cx", "8", "cy", "6", "r", "1.5"], [1, "notif-action-btn", 3, "click"], ["viewBox", "0 0 16 16", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "width", "11", "height", "11"], ["d", "M3 8h10M9 4l4 4-4 4", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "pagination-shell"], [1, "pagination-inner"], [1, "pagination-info"], [1, "pagination-controls"], [1, "page-size-selector"], [1, "pagination-select", 3, "change", "value"], [1, "page-actions"], ["type", "button", "title", "Previous Page", 1, "page-nav-btn", 3, "click", "disabled"], [1, "bi", "bi-chevron-left"], [4, "ngFor", "ngForOf"], ["type", "button", "title", "Next Page", 1, "page-nav-btn", 3, "click", "disabled"], [1, "bi", "bi-chevron-right"], ["class", "page-ellipsis", 4, "ngIf"], ["class", "page-btn", "type", "button", 3, "active", "click", 4, "ngIf"], [1, "page-ellipsis"], ["type", "button", 1, "page-btn", 3, "click"], [1, "footer-count"], [1, "view-all-link"], ["viewBox", "0 0 16 16", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "width", "13", "height", "13"]], template: function NotificationsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "app-admin-shell", 3)(2, "div", 4)(3, "section", 5)(4, "header", 6)(5, "div", 7);
    \u0275\u0275conditionalCreate(6, NotificationsComponent_Conditional_6_Template, 2, 2, "span", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 9)(8, "button", 10);
    \u0275\u0275listener("click", function NotificationsComponent_Template_button_click_8_listener() {
      return ctx.toggleComposer();
    });
    \u0275\u0275element(9, "i", 11);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 12);
    \u0275\u0275listener("click", function NotificationsComponent_Template_button_click_11_listener() {
      return ctx.markAllRead();
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 13);
    \u0275\u0275element(13, "path", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " All read ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(15, NotificationsComponent_Conditional_15_Template, 20, 7, "div", 15);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(16, "nav", 16);
    \u0275\u0275repeaterCreate(17, NotificationsComponent_For_18_Template, 2, 4, "button", 17, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(19, NotificationsComponent_Conditional_19_Template, 9, 0, "div", 18);
    \u0275\u0275conditionalCreate(20, NotificationsComponent_Conditional_20_Template, 12, 1, "div", 19);
    \u0275\u0275conditionalCreate(21, NotificationsComponent_Conditional_21_Template, 9, 0, "div", 20);
    \u0275\u0275conditionalCreate(22, NotificationsComponent_Conditional_22_Template, 4, 1);
    \u0275\u0275conditionalCreate(23, NotificationsComponent_Conditional_23_Template, 7, 2, "footer", 21);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx.unreadCount() > 0 ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx.showComposer());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx.showComposer() ? "Close Composer" : "New Notification", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx.unreadCount() === 0);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx.showComposer() ? 15 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.tabs);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.loading() ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.error() ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.loading() && !ctx.error() && ctx.notifications().length === 0 ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.loading() && !ctx.error() && ctx.notifications().length > 0 ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.loading() && !ctx.error() ? 23 : -1);
  }
}, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, FormsModule, NgModel, AdminShellComponent], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.notifications-page[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n.notif-hero[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.crumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  color: var(--app-ink-muted);\n  margin-bottom: 8px;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 14px;\n  border: 1px solid var(--app-border);\n  background: #fff;\n  display: grid;\n  place-items: center;\n}\n.notif-panel[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid var(--app-border);\n  border-radius: 24px;\n  padding: 24px;\n  box-shadow: var(--app-shadow);\n}\n.notif-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 18px;\n}\n.header-actions-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.compose-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: rgba(29, 122, 109, 0.1);\n  border: 1px solid rgba(29, 122, 109, 0.3);\n  color: var(--app-accent, #1d7a6d);\n  font-weight: 600;\n  font-size: 0.85rem;\n  padding: 6px 14px;\n  border-radius: 999px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.compose-btn[_ngcontent-%COMP%]:hover, \n.compose-btn.active[_ngcontent-%COMP%] {\n  background: var(--app-accent, #1d7a6d);\n  color: #fff;\n}\n.composer-card[_ngcontent-%COMP%] {\n  background: #fdfbf8;\n  border: 1px solid rgba(29, 122, 109, 0.25);\n  border-radius: 18px;\n  padding: 20px;\n  margin-bottom: 20px;\n  animation: _ngcontent-%COMP%_slideDown 0.2s ease-out;\n}\n.composer-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.composer-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--app-ink);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.preview-mode-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  background: #f1f5f9;\n  border-radius: 999px;\n  padding: 2px;\n}\n.mode-btn[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  padding: 4px 12px;\n  border-radius: 999px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--app-ink-muted);\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  transition: all 0.15s ease;\n}\n.mode-btn.active[_ngcontent-%COMP%] {\n  background: #fff;\n  color: var(--app-ink);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.composer-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.composer-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.composer-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--app-ink-muted);\n}\n.cf-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n}\n.live-preview-box[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px dashed var(--app-border);\n  border-radius: 14px;\n  padding: 16px;\n  margin-bottom: 12px;\n}\n.preview-device-label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  color: var(--app-ink-muted);\n  margin-bottom: 10px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.preview-item[_ngcontent-%COMP%] {\n  background: #fff !important;\n  border-radius: 12px !important;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.composer-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  margin-top: 14px;\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.unread-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 34px;\n  height: 34px;\n  border-radius: 999px;\n  background: rgba(29, 122, 109, 0.12);\n  color: var(--app-accent);\n  font-weight: 700;\n}\n.mark-all-btn[_ngcontent-%COMP%] {\n  border: none;\n  background: var(--app-accent);\n  color: #fff;\n  padding: 10px 16px;\n  border-radius: 999px;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: 600;\n}\n.mark-all-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n}\n.notif-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  margin-bottom: 20px;\n}\n.tab-btn[_ngcontent-%COMP%] {\n  border: 1px solid var(--app-border);\n  background: var(--app-surface-2);\n  padding: 8px 14px;\n  border-radius: 999px;\n  font-weight: 600;\n  color: var(--app-ink-muted);\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  background: var(--app-accent);\n  color: #fff;\n}\n.state-loading[_ngcontent-%COMP%], \n.state-error[_ngcontent-%COMP%], \n.state-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 32px 12px;\n  color: var(--app-ink-muted);\n}\n.trail-loader[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 6px;\n  margin-bottom: 12px;\n}\n.trail-loader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 999px;\n  background: var(--app-accent);\n  animation: _ngcontent-%COMP%_pulse 0.8s ease-in-out infinite;\n}\n.trail-loader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.1s;\n}\n.trail-loader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.2s;\n}\n.trail-loader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: 0.3s;\n}\n.trail-loader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(5) {\n  animation-delay: 0.4s;\n}\n.state-error[_ngcontent-%COMP%] {\n  background: rgba(224, 106, 91, 0.08);\n  border: 1px solid rgba(224, 106, 91, 0.2);\n  border-radius: 16px;\n  display: grid;\n  gap: 12px;\n  justify-items: center;\n}\n.retry-btn[_ngcontent-%COMP%] {\n  border: none;\n  background: var(--ion-color-danger);\n  color: #fff;\n  padding: 8px 14px;\n  border-radius: 999px;\n}\n.notif-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: grid;\n  gap: 14px;\n}\n.notif-item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 6px 40px 1fr auto;\n  gap: 16px;\n  align-items: center;\n  padding: 16px;\n  border: 1px solid var(--app-border);\n  border-radius: 18px;\n  background: #fff;\n  box-shadow: var(--app-shadow-soft);\n  animation: _ngcontent-%COMP%_fadeUp 0.4s ease both;\n}\n.notif-item.unread[_ngcontent-%COMP%] {\n  border-color: rgba(29, 122, 109, 0.4);\n  background: rgba(29, 122, 109, 0.06);\n}\n.notif-strip[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 100%;\n  border-radius: 999px;\n  background: var(--app-accent);\n}\n.notif-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  background: rgba(29, 122, 109, 0.12);\n  display: grid;\n  place-items: center;\n  font-weight: 700;\n}\n.notif-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n}\n.notif-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.notif-type-tag[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--app-ink-muted);\n}\n.notif-meta-label[_ngcontent-%COMP%], \n.notif-message[_ngcontent-%COMP%] {\n  margin: 6px 0 0;\n  color: var(--app-ink-muted);\n}\n.notif-footer[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n  margin-top: 10px;\n  flex-wrap: wrap;\n}\n.notif-action-btn[_ngcontent-%COMP%] {\n  border: none;\n  background: var(--app-accent);\n  color: #fff;\n  border-radius: 999px;\n  padding: 6px 12px;\n  font-size: 0.85rem;\n  display: inline-flex;\n  gap: 6px;\n  align-items: center;\n}\n.notif-dismiss[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  color: var(--app-ink-muted);\n}\n.unread-pip[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 999px;\n  background: var(--app-accent);\n}\n.notif-footer-bar[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.view-all-link[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  color: var(--app-accent);\n  font-weight: 600;\n  display: inline-flex;\n  gap: 8px;\n  align-items: center;\n}\n@keyframes _ngcontent-%COMP%_fadeUp {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    transform: scale(0.8);\n    opacity: 0.4;\n  }\n  50% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@media (max-width: 720px) {\n  .notif-item[_ngcontent-%COMP%] {\n    grid-template-columns: 6px 1fr;\n    grid-template-areas: "strip body" "strip footer";\n  }\n}\n/*# sourceMappingURL=notifications.component.css.map */'], changeDetection: 0 });
var NotificationsComponent = _NotificationsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationsComponent, [{
    type: Component,
    args: [{ selector: "app-notifications", standalone: true, imports: [CommonModule, ReactiveFormsModule, FormsModule, AdminShellComponent], providers: [NotificationsService], changeDetection: ChangeDetectionStrategy.OnPush, schemas: [CUSTOM_ELEMENTS_SCHEMA], template: `<div class="notifications-page">
  <app-admin-shell title="Notifications" subtitle="Stay in sync with bookings, treks, and system alerts."
    sectionLabel="Operations">
    <div class="app-shell">
      <section class="notif-panel" role="region" aria-label="Notifications">
        <header class="notif-header">
          <div class="header-brand">
            @if (unreadCount() > 0) {
            <span class="unread-badge" [attr.aria-label]="unreadCount() + ' unread'">
              {{ unreadCount() }}
            </span>
            }
          </div>
          <div class="header-actions-group">
            <button class="compose-btn" (click)="toggleComposer()" [class.active]="showComposer()">
              <i class="bi bi-pencil-square"></i>
              {{ showComposer() ? 'Close Composer' : 'New Notification' }}
            </button>
            <button class="mark-all-btn" (click)="markAllRead()" [disabled]="unreadCount() === 0"
              aria-label="Mark all as read">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 6L9 17l-5-5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              All read
            </button>
          </div>
        </header>

        <!-- Notification Composer with Live Preview Mode -->
        @if (showComposer()) {
        <div class="composer-card">
          <div class="composer-head">
            <h3><i class="bi bi-broadcast"></i> Broadcast Notification</h3>
            <div class="preview-mode-toggle">
              <button class="mode-btn" [class.active]="!composerPreview()" (click)="composerPreview.set(false)">
                <i class="bi bi-pencil"></i> Edit
              </button>
              <button class="mode-btn" [class.active]="composerPreview()" (click)="composerPreview.set(true)">
                <i class="bi bi-eye"></i> Live Preview
              </button>
            </div>
          </div>

          @if (!composerPreview()) {
          <div class="composer-form">
            <div class="cf-row">
              <label>
                <span>Category / Type</span>
                <select class="form-select" [(ngModel)]="composerForm.type">
                  <ng-container *ngIf="notificationTypeOptions.length > 0; else defaultNotificationTypes">
                    <option *ngFor="let opt of notificationTypeOptions" [value]="opt.value">{{ opt.label }}</option>
                  </ng-container>
                  <ng-template #defaultNotificationTypes>
                    <option value="booking">Booking Update</option>
                    <option value="trek">Trek Alert</option>
                    <option value="weather">Weather Alert</option>
                    <option value="guide">Guide Notice</option>
                    <option value="offer">Special Offer</option>
                    <option value="system">System Notice</option>
                    <option value="blog">Blog Story</option>
                  </ng-template>
                </select>
              </label>
              <label>
                <span>Target Audience</span>
                <select class="form-select" [(ngModel)]="composerForm.target">
                  <ng-container *ngIf="notificationTargetOptions.length > 0; else defaultNotificationTargets">
                    <option *ngFor="let opt of notificationTargetOptions" [value]="opt.value">{{ opt.label }}</option>
                  </ng-container>
                  <ng-template #defaultNotificationTargets>
                    <option value="all">All Users</option>
                    <option value="bookers">Active Trek Bookers</option>
                    <option value="admins">Admins & Staff</option>
                  </ng-template>
                </select>
              </label>
            </div>

            <label>
              <span>Notification Title *</span>
              <input class="form-control" type="text" [(ngModel)]="composerForm.title" placeholder="e.g., Trail Update: Kudremukh Trek departure rescheduled" />
            </label>

            <label>
              <span>Message Content *</span>
              <textarea class="form-control" rows="3" [(ngModel)]="composerForm.message" placeholder="Write the notification message..."></textarea>
            </label>

            <div class="cf-row">
              <label>
                <span>Action Button Label</span>
                <input class="form-control" type="text" [(ngModel)]="composerForm.actionLabel" placeholder="e.g., View Details" />
              </label>
              <label>
                <span>Target URL / Route</span>
                <input class="form-control" type="text" [(ngModel)]="composerForm.actionUrl" placeholder="e.g., /admin/bookings" />
              </label>
            </div>
          </div>
          } @else {
          <!-- Live Preview Mode -->
          <div class="live-preview-box">
            <div class="preview-device-label"><i class="bi bi-phone"></i> In-App Notification Live Preview:</div>
            <div class="notif-item preview-item" [class.type--booking]="composerForm.type === 'booking'"
                 [class.type--weather]="composerForm.type === 'weather'" [class.type--trek]="composerForm.type === 'trek'"
                 [class.type--guide]="composerForm.type === 'guide'" [class.type--offer]="composerForm.type === 'offer'"
                 [class.type--blog]="composerForm.type === 'blog'" [class.type--system]="composerForm.type === 'system'">
              <div class="notif-strip"></div>
              <div class="notif-icon">
                <i [class]="iconFor(composerForm.type)"></i>
              </div>
              <div class="notif-body">
                <div class="notif-top">
                  <span class="notif-title">{{ composerForm.title || 'Untitled Notification' }}</span>
                  <span class="notif-type-tag">{{ labelFor(composerForm.type) }}</span>
                </div>
                <p class="notif-message">{{ composerForm.message || 'Notification message will appear here...' }}</p>
                <div class="notif-footer">
                  <span class="notif-time">Just now</span>
                  <button class="notif-action-btn" *ngIf="composerForm.actionLabel">
                    {{ composerForm.actionLabel }}
                  </button>
                </div>
              </div>
            </div>
          </div>
          }

          <div class="composer-actions">
            <button class="btn-app ghost" type="button" (click)="toggleComposer()">Cancel</button>
            <button class="btn-app" type="button" (click)="sendNotification()" [disabled]="!composerForm.title.trim() || !composerForm.message.trim()">
              <i class="bi bi-send-fill"></i>
              {{ composerSent() ? 'Sent!' : 'Send Notification' }}
            </button>
          </div>
        </div>
        }

        <nav class="notif-tabs" role="tablist" aria-label="Filter notifications">
          @for (tab of tabs; track tab.key) {
          <button class="tab-btn" role="tab" [class.active]="activeTab() === tab.key"
            [attr.aria-selected]="activeTab() === tab.key" (click)="setTab(tab.key)">
            {{ tab.label }}
          </button>
          }
        </nav>

        @if (loading()) {
        <div class="state-loading" aria-live="polite" role="status">
          <div class="trail-loader">
            <span></span><span></span><span></span><span></span><span></span>
          </div>
          <p>Fetching trail updates\u2026</p>
        </div>
        }

        @if (error()) {
        <div class="state-error" role="alert" aria-live="assertive">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
          <div>
            <strong>Couldn't reach base camp</strong>
            <p>{{ error() }}</p>
          </div>
          <button class="retry-btn" (click)="fetchNotifications()">Retry</button>
        </div>
        }

        @if (!loading() && !error() && notifications().length === 0) {
        <div class="state-empty" aria-live="polite">
          <div class="empty-illustration">
            <svg viewBox="0 0 80 60" fill="none">
              <path d="M10 50 L28 20 L40 35 L52 12 L70 50Z" fill="rgba(126,167,107,0.15)" stroke="rgba(126,167,107,0.4)"
                stroke-width="1.5" stroke-linejoin="round" />
              <circle cx="64" cy="14" r="6" fill="rgba(255,178,80,0.2)" stroke="rgba(255,178,80,0.5)"
                stroke-width="1.5" />
            </svg>
          </div>
          <p class="empty-title">All clear on the trail!</p>
          <p class="empty-sub">No notifications here. Time to plan your next adventure.</p>
        </div>
        }

        @if (!loading() && !error() && notifications().length > 0) {
        <ul class="notif-list" role="list">
          @for (notif of paginatedNotifications(); track notif.id; let i = $index) {
          <li class="notif-item" [class.unread]="!notif.read" [class.type--booking]="notif.type === 'booking'"
            [class.type--weather]="notif.type === 'weather'" [class.type--trek]="notif.type === 'trek'"
            [class.type--guide]="notif.type === 'guide'" [class.type--offer]="notif.type === 'offer'"
            [class.type--blog]="notif.type === 'blog'" [class.type--comment]="notif.type === 'comment'"
            [class.type--system]="notif.type === 'system'" [style.animation-delay]="(i * 0.07) + 's'"
            (click)="openNotification(notif)" role="listitem">

            <div class="notif-strip" aria-hidden="true"></div>

            <div class="notif-icon" aria-hidden="true">
              <i [class]="resolveIcon(notif)"></i>
            </div>

            <div class="notif-body">
              <div class="notif-top">
                <span class="notif-title">{{ notif.title }}</span>
                <span class="notif-type-tag">{{ notif.typeLabel }}</span>
              </div>
              @if (notif.meta) {
              <p class="notif-meta-label">
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" width="11" height="11">
                  <path d="M8 1.5C5.5 1.5 3.5 3.5 3.5 6c0 3.5 4.5 8.5 4.5 8.5S12.5 9.5 12.5 6c0-2.5-2-4.5-4.5-4.5z" />
                  <circle cx="8" cy="6" r="1.5" />
                </svg>
                {{ notif.meta }}
              </p>
              }
              <p class="notif-message">{{ notif.message }}</p>
              <div class="notif-footer">
                <time class="notif-time" [attr.datetime]="notif.dateIso">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" width="11" height="11">
                    <circle cx="8" cy="8" r="6.5" />
                    <path d="M8 4.5V8l2.5 2" stroke-linecap="round" />
                  </svg>
                  {{ notif.timeAgo }}
                </time>
                @if (notif.actionLabel) {
                <button class="notif-action-btn" (click)="onActionClick($event, notif)">
                  {{ notif.actionLabel }}
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" width="11" height="11">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
                }
              </div>
            </div>

            <button class="notif-dismiss" [attr.aria-label]="'Dismiss ' + notif.title"
              (click)="$event.stopPropagation(); dismiss(notif.id)">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4l8 8M12 4l-8 8" stroke-linecap="round" />
              </svg>
            </button>

            @if (!notif.read) {
            <span class="unread-pip" aria-label="Unread"></span>
            }

          </li>
          }
        </ul>

        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 PAGINATION CONTROLS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
        <div class="pagination-shell" *ngIf="notifications().length > 0">
          <div class="pagination-inner">
            <div class="pagination-info">
              Showing <strong>{{ (currentPage() - 1) * Number(pageSize()) + 1 }}</strong> to
              <strong>{{ Math.min(currentPage() * Number(pageSize()), notifications().length) }}</strong> of
              <strong>{{ notifications().length }}</strong> notifications
            </div>

            <div class="pagination-controls">
              <div class="page-size-selector">
                <label>Per page:</label>
                <select class="pagination-select" [value]="pageSize()" (change)="onPageSizeChange($any($event.target).value)">
                  <option *ngFor="let opt of pageSizeOptions" [value]="opt">{{ opt }}</option>
                </select>
              </div>

              <div class="page-actions">
                <button class="page-nav-btn" type="button" (click)="prevPage()" [disabled]="currentPage() === 1" title="Previous Page">
                  <i class="bi bi-chevron-left"></i> <span>Prev</span>
                </button>

                <ng-container *ngFor="let p of visiblePageNumbers()">
                  <span class="page-ellipsis" *ngIf="p === '...'">\u2026</span>
                  <button
                    class="page-btn"
                    type="button"
                    *ngIf="p !== '...'"
                    [class.active]="p === currentPage()"
                    (click)="goToPage(p)">
                    {{ p }}
                  </button>
                </ng-container>

                <button class="page-nav-btn" type="button" (click)="nextPage()" [disabled]="currentPage() === totalPages()" title="Next Page">
                  <span>Next</span> <i class="bi bi-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        }

        @if (!loading() && !error()) {
        <footer class="notif-footer-bar">
          <span class="footer-count">
            {{ notifications().length }} update{{ notifications().length !== 1 ? 's' : '' }}
          </span>
          <button class="view-all-link">
            Explore all
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13">
              <path d="M3 8h10M9 4l4 4-4 4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </footer>
        }

      </section>
    </div>
  </app-admin-shell>
</div>`, styles: ['@charset "UTF-8";\n\n/* src/app/notifications/notifications.component.scss */\n:host {\n  display: block;\n}\n.notifications-page {\n  --background: transparent;\n}\n.notif-hero {\n  margin-bottom: 24px;\n}\n.crumb {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  color: var(--app-ink-muted);\n  margin-bottom: 8px;\n}\n.icon-btn {\n  width: 42px;\n  height: 42px;\n  border-radius: 14px;\n  border: 1px solid var(--app-border);\n  background: #fff;\n  display: grid;\n  place-items: center;\n}\n.notif-panel {\n  background: #fff;\n  border: 1px solid var(--app-border);\n  border-radius: 24px;\n  padding: 24px;\n  box-shadow: var(--app-shadow);\n}\n.notif-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 18px;\n}\n.header-actions-group {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.compose-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: rgba(29, 122, 109, 0.1);\n  border: 1px solid rgba(29, 122, 109, 0.3);\n  color: var(--app-accent, #1d7a6d);\n  font-weight: 600;\n  font-size: 0.85rem;\n  padding: 6px 14px;\n  border-radius: 999px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.compose-btn:hover,\n.compose-btn.active {\n  background: var(--app-accent, #1d7a6d);\n  color: #fff;\n}\n.composer-card {\n  background: #fdfbf8;\n  border: 1px solid rgba(29, 122, 109, 0.25);\n  border-radius: 18px;\n  padding: 20px;\n  margin-bottom: 20px;\n  animation: slideDown 0.2s ease-out;\n}\n.composer-head {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.composer-head h3 {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--app-ink);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.preview-mode-toggle {\n  display: flex;\n  background: #f1f5f9;\n  border-radius: 999px;\n  padding: 2px;\n}\n.mode-btn {\n  border: none;\n  background: transparent;\n  padding: 4px 12px;\n  border-radius: 999px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--app-ink-muted);\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  transition: all 0.15s ease;\n}\n.mode-btn.active {\n  background: #fff;\n  color: var(--app-ink);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.composer-form {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.composer-form label {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.composer-form label span {\n  font-size: 0.76rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--app-ink-muted);\n}\n.cf-row {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n}\n.live-preview-box {\n  background: #f8fafc;\n  border: 1px dashed var(--app-border);\n  border-radius: 14px;\n  padding: 16px;\n  margin-bottom: 12px;\n}\n.preview-device-label {\n  font-size: 0.78rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  color: var(--app-ink-muted);\n  margin-bottom: 10px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.preview-item {\n  background: #fff !important;\n  border-radius: 12px !important;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.composer-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  margin-top: 14px;\n}\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.unread-badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 34px;\n  height: 34px;\n  border-radius: 999px;\n  background: rgba(29, 122, 109, 0.12);\n  color: var(--app-accent);\n  font-weight: 700;\n}\n.mark-all-btn {\n  border: none;\n  background: var(--app-accent);\n  color: #fff;\n  padding: 10px 16px;\n  border-radius: 999px;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: 600;\n}\n.mark-all-btn:disabled {\n  opacity: 0.6;\n}\n.notif-tabs {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  margin-bottom: 20px;\n}\n.tab-btn {\n  border: 1px solid var(--app-border);\n  background: var(--app-surface-2);\n  padding: 8px 14px;\n  border-radius: 999px;\n  font-weight: 600;\n  color: var(--app-ink-muted);\n}\n.tab-btn.active {\n  background: var(--app-accent);\n  color: #fff;\n}\n.state-loading,\n.state-error,\n.state-empty {\n  text-align: center;\n  padding: 32px 12px;\n  color: var(--app-ink-muted);\n}\n.trail-loader {\n  display: flex;\n  justify-content: center;\n  gap: 6px;\n  margin-bottom: 12px;\n}\n.trail-loader span {\n  width: 8px;\n  height: 8px;\n  border-radius: 999px;\n  background: var(--app-accent);\n  animation: pulse 0.8s ease-in-out infinite;\n}\n.trail-loader span:nth-child(2) {\n  animation-delay: 0.1s;\n}\n.trail-loader span:nth-child(3) {\n  animation-delay: 0.2s;\n}\n.trail-loader span:nth-child(4) {\n  animation-delay: 0.3s;\n}\n.trail-loader span:nth-child(5) {\n  animation-delay: 0.4s;\n}\n.state-error {\n  background: rgba(224, 106, 91, 0.08);\n  border: 1px solid rgba(224, 106, 91, 0.2);\n  border-radius: 16px;\n  display: grid;\n  gap: 12px;\n  justify-items: center;\n}\n.retry-btn {\n  border: none;\n  background: var(--ion-color-danger);\n  color: #fff;\n  padding: 8px 14px;\n  border-radius: 999px;\n}\n.notif-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: grid;\n  gap: 14px;\n}\n.notif-item {\n  display: grid;\n  grid-template-columns: 6px 40px 1fr auto;\n  gap: 16px;\n  align-items: center;\n  padding: 16px;\n  border: 1px solid var(--app-border);\n  border-radius: 18px;\n  background: #fff;\n  box-shadow: var(--app-shadow-soft);\n  animation: fadeUp 0.4s ease both;\n}\n.notif-item.unread {\n  border-color: rgba(29, 122, 109, 0.4);\n  background: rgba(29, 122, 109, 0.06);\n}\n.notif-strip {\n  width: 6px;\n  height: 100%;\n  border-radius: 999px;\n  background: var(--app-accent);\n}\n.notif-icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  background: rgba(29, 122, 109, 0.12);\n  display: grid;\n  place-items: center;\n  font-weight: 700;\n}\n.notif-top {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n}\n.notif-title {\n  font-weight: 700;\n}\n.notif-type-tag {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--app-ink-muted);\n}\n.notif-meta-label,\n.notif-message {\n  margin: 6px 0 0;\n  color: var(--app-ink-muted);\n}\n.notif-footer {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n  margin-top: 10px;\n  flex-wrap: wrap;\n}\n.notif-action-btn {\n  border: none;\n  background: var(--app-accent);\n  color: #fff;\n  border-radius: 999px;\n  padding: 6px 12px;\n  font-size: 0.85rem;\n  display: inline-flex;\n  gap: 6px;\n  align-items: center;\n}\n.notif-dismiss {\n  border: none;\n  background: transparent;\n  color: var(--app-ink-muted);\n}\n.unread-pip {\n  width: 10px;\n  height: 10px;\n  border-radius: 999px;\n  background: var(--app-accent);\n}\n.notif-footer-bar {\n  margin-top: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.view-all-link {\n  border: none;\n  background: transparent;\n  color: var(--app-accent);\n  font-weight: 600;\n  display: inline-flex;\n  gap: 8px;\n  align-items: center;\n}\n@keyframes fadeUp {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes pulse {\n  0%, 100% {\n    transform: scale(0.8);\n    opacity: 0.4;\n  }\n  50% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@media (max-width: 720px) {\n  .notif-item {\n    grid-template-columns: 6px 1fr;\n    grid-template-areas: "strip body" "strip footer";\n  }\n}\n/*# sourceMappingURL=notifications.component.css.map */\n'] }]
  }], () => [{ type: NotificationsService }, { type: DropdownManagerService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotificationsComponent, { className: "NotificationsComponent", filePath: "src/app/notifications/notifications.component.ts", lineNumber: 69 });
})();

// src/app/notifications/notifications.module.ts
var routes = [{ path: "", component: NotificationsComponent }];
var _NotificationsModule = class _NotificationsModule {
};
_NotificationsModule.\u0275fac = function NotificationsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NotificationsModule)();
};
_NotificationsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _NotificationsModule });
_NotificationsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, NotificationsComponent, RouterModule.forChild(routes)] });
var NotificationsModule = _NotificationsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationsModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, NotificationsComponent, RouterModule.forChild(routes)]
    }]
  }], null, null);
})();
export {
  NotificationsModule
};
/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
  (**
   * @license Angular v20.3.16
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
//# sourceMappingURL=notifications.module-G77FNCJX.js.map
