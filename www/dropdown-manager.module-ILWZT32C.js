import {
  DropdownManagerService
} from "./chunk-2AIND2RX.js";
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
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  RouterModule,
  UpperCasePipe,
  __spreadProps,
  __spreadValues,
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
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
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

// src/app/dropdown-manager/dropdown-manager.component.ts
function DropdownManagerComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 7);
    \u0275\u0275element(2, "i", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9)(4, "span", 10);
    \u0275\u0275text(5, "Inactive Groups");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 11);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 48);
    \u0275\u0275text(9, "Temporarily hidden");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.inactiveGroupCount);
  }
}
function DropdownManagerComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275element(1, "i", 50);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 51);
    \u0275\u0275listener("click", function DropdownManagerComponent_div_34_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.message = "");
    });
    \u0275\u0275element(5, "i", 52);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.message);
  }
}
function DropdownManagerComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275element(1, "i", 54);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 51);
    \u0275\u0275listener("click", function DropdownManagerComponent_div_35_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.error = "");
    });
    \u0275\u0275element(5, "i", 52);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function DropdownManagerComponent_button_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 55);
    \u0275\u0275listener("click", function DropdownManagerComponent_button_41_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.searchQuery = "");
    });
    \u0275\u0275element(1, "i", 56);
    \u0275\u0275elementEnd();
  }
}
function DropdownManagerComponent_div_42_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 58);
    \u0275\u0275listener("click", function DropdownManagerComponent_div_42_button_3_Template_button_click_0_listener() {
      const p_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectedPageFilter = p_r8);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.selectedPageFilter.toLowerCase() === p_r8.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r8, " ");
  }
}
function DropdownManagerComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57)(1, "button", 58);
    \u0275\u0275listener("click", function DropdownManagerComponent_div_42_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectedPageFilter = "all");
    });
    \u0275\u0275text(2, " All Modules ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, DropdownManagerComponent_div_42_button_3_Template, 2, 3, "button", 59);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.selectedPageFilter === "all");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.availablePages);
  }
}
function DropdownManagerComponent_button_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 60);
    \u0275\u0275listener("click", function DropdownManagerComponent_button_52_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCreateGroupModal());
    });
    \u0275\u0275element(1, "i", 61);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "New Group");
    \u0275\u0275elementEnd()();
  }
}
function DropdownManagerComponent_button_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 62);
    \u0275\u0275listener("click", function DropdownManagerComponent_button_59_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.resetFilters();
      return \u0275\u0275resetView(ctx_r1.selectedPageFilter = "all");
    });
    \u0275\u0275text(1, " Reset ");
    \u0275\u0275elementEnd();
  }
}
function DropdownManagerComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275listener("click", function DropdownManagerComponent_div_61_Template_div_click_0_listener() {
      const group_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectGroup(group_r12.id));
    });
    \u0275\u0275element(1, "div", 64);
    \u0275\u0275elementStart(2, "div", 65);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 66)(5, "div", 67)(6, "span", 68);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 69);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 70)(11, "code", 71);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 72);
    \u0275\u0275element(14, "i", 73);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 74);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const group_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", group_r12.id === ctx_r1.selectedGroupId);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (group_r12.label || "G").charAt(0).toUpperCase(), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(group_r12.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "badge-" + group_r12.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(group_r12.status);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(group_r12.groupKey);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", group_r12.page);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", group_r12.options.length, " items");
  }
}
function DropdownManagerComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 75);
    \u0275\u0275element(1, "i", 76);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "No matching dropdown groups");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 77);
    \u0275\u0275listener("click", function DropdownManagerComponent_div_62_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.resetFilters();
      return \u0275\u0275resetView(ctx_r1.selectedPageFilter = "all");
    });
    \u0275\u0275text(5, "Clear Filters");
    \u0275\u0275elementEnd()();
  }
}
function DropdownManagerComponent_main_63_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 115)(1, "button", 116);
    \u0275\u0275listener("click", function DropdownManagerComponent_main_63_div_27_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleEditorCollapse());
    });
    \u0275\u0275element(2, "i", 93);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 116);
    \u0275\u0275listener("click", function DropdownManagerComponent_main_63_div_27_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleGroupStatus());
    });
    \u0275\u0275element(6, "i", 93);
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 117);
    \u0275\u0275listener("click", function DropdownManagerComponent_main_63_div_27_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteGroup());
    });
    \u0275\u0275element(10, "i", 118);
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "Delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const group_r15 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.editorCollapsed ? "bi-chevron-down" : "bi-sliders");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.editorCollapsed ? "Edit Schema" : "Hide Schema");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", group_r15.status === "active" ? "bi-pause-circle-fill text-warning" : "bi-play-circle-fill text-success");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(group_r15.status === "active" ? "Deactivate" : "Activate");
  }
}
function DropdownManagerComponent_main_63_div_28_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 128)(1, "button", 129);
    \u0275\u0275listener("click", function DropdownManagerComponent_main_63_div_28_div_30_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.saveGroup());
    });
    \u0275\u0275element(2, "i", 130);
    \u0275\u0275text(3, " Save Changes ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 131);
    \u0275\u0275listener("click", function DropdownManagerComponent_main_63_div_28_div_30_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.syncGroupDraft());
    });
    \u0275\u0275text(5, "Reset");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.saving);
  }
}
function DropdownManagerComponent_main_63_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 119)(1, "div", 120)(2, "h4");
    \u0275\u0275element(3, "i", 121);
    \u0275\u0275text(4, " Edit Group Properties");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 122)(6, "div", 123)(7, "label");
    \u0275\u0275text(8, "Group Identifier Key");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 124);
    \u0275\u0275twoWayListener("ngModelChange", function DropdownManagerComponent_main_63_div_28_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.groupDraft.groupKey, $event) || (ctx_r1.groupDraft.groupKey = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 123)(11, "label");
    \u0275\u0275text(12, "Display Label");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 124);
    \u0275\u0275twoWayListener("ngModelChange", function DropdownManagerComponent_main_63_div_28_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.groupDraft.label, $event) || (ctx_r1.groupDraft.label = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 123)(15, "label");
    \u0275\u0275text(16, "Target Page / Module");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 124);
    \u0275\u0275twoWayListener("ngModelChange", function DropdownManagerComponent_main_63_div_28_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.groupDraft.page, $event) || (ctx_r1.groupDraft.page = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 123)(19, "label");
    \u0275\u0275text(20, "Sort Order Index");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 125);
    \u0275\u0275twoWayListener("ngModelChange", function DropdownManagerComponent_main_63_div_28_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.groupDraft.sortOrder, $event) || (ctx_r1.groupDraft.sortOrder = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 123)(23, "label");
    \u0275\u0275text(24, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "select", 126);
    \u0275\u0275twoWayListener("ngModelChange", function DropdownManagerComponent_main_63_div_28_Template_select_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.groupDraft.status, $event) || (ctx_r1.groupDraft.status = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(26, "option", 32);
    \u0275\u0275text(27, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "option", 33);
    \u0275\u0275text(29, "Inactive");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(30, DropdownManagerComponent_main_63_div_28_div_30_Template, 6, 1, "div", 127);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.groupDraft.groupKey);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.groupDraft.label);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.groupDraft.page);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.groupDraft.sortOrder);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.groupDraft.status);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.authService.hasPermission("dropdowns.manage"));
  }
}
function DropdownManagerComponent_main_63_option_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 132);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r19 = ctx.$implicit;
    \u0275\u0275property("value", opt_r19.value)("disabled", opt_r19.status === "inactive");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", opt_r19.label, " ", opt_r19.status === "inactive" ? "(Inactive)" : "", " ");
  }
}
function DropdownManagerComponent_main_63_div_55_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 136)(2, "div", 137)(3, "input", 138);
    \u0275\u0275twoWayListener("ngModelChange", function DropdownManagerComponent_main_63_div_55_ng_container_5_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.optionDraft.label, $event) || (ctx_r1.optionDraft.label = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 137)(5, "input", 139);
    \u0275\u0275twoWayListener("ngModelChange", function DropdownManagerComponent_main_63_div_55_ng_container_5_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.optionDraft.optionValue, $event) || (ctx_r1.optionDraft.optionValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 140)(7, "input", 141);
    \u0275\u0275twoWayListener("ngModelChange", function DropdownManagerComponent_main_63_div_55_ng_container_5_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.optionDraft.sortOrder, $event) || (ctx_r1.optionDraft.sortOrder = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 140)(9, "select", 126);
    \u0275\u0275twoWayListener("ngModelChange", function DropdownManagerComponent_main_63_div_55_ng_container_5_Template_select_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.optionDraft.status, $event) || (ctx_r1.optionDraft.status = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(10, "option", 32);
    \u0275\u0275text(11, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 33);
    \u0275\u0275text(13, "Inactive");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 142)(15, "button", 129);
    \u0275\u0275listener("click", function DropdownManagerComponent_main_63_div_55_ng_container_5_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.saveOption());
    });
    \u0275\u0275element(16, "i", 143);
    \u0275\u0275text(17, " Update ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 131);
    \u0275\u0275listener("click", function DropdownManagerComponent_main_63_div_55_ng_container_5_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.cancelOptionEdit());
    });
    \u0275\u0275text(19, "Cancel");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.optionDraft.label);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.optionDraft.optionValue);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.optionDraft.sortOrder);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.optionDraft.status);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.saving);
  }
}
function DropdownManagerComponent_main_63_div_55_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 136)(1, "div", 137)(2, "input", 144);
    \u0275\u0275twoWayListener("ngModelChange", function DropdownManagerComponent_main_63_div_55_ng_template_6_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.newOption.label, $event) || (ctx_r1.newOption.label = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 137)(4, "input", 145);
    \u0275\u0275twoWayListener("ngModelChange", function DropdownManagerComponent_main_63_div_55_ng_template_6_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.newOption.optionValue, $event) || (ctx_r1.newOption.optionValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 140)(6, "input", 141);
    \u0275\u0275twoWayListener("ngModelChange", function DropdownManagerComponent_main_63_div_55_ng_template_6_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.newOption.sortOrder, $event) || (ctx_r1.newOption.sortOrder = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 140)(8, "select", 126);
    \u0275\u0275twoWayListener("ngModelChange", function DropdownManagerComponent_main_63_div_55_ng_template_6_Template_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.newOption.status, $event) || (ctx_r1.newOption.status = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(9, "option", 32);
    \u0275\u0275text(10, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option", 33);
    \u0275\u0275text(12, "Inactive");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 142)(14, "button", 129);
    \u0275\u0275listener("click", function DropdownManagerComponent_main_63_div_55_ng_template_6_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.createOption());
    });
    \u0275\u0275element(15, "i", 61);
    \u0275\u0275text(16, " Add Value ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newOption.label);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newOption.optionValue);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newOption.sortOrder);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newOption.status);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.saving || !ctx_r1.newOption.label);
  }
}
function DropdownManagerComponent_main_63_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 133)(1, "div", 134);
    \u0275\u0275element(2, "i", 93);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, DropdownManagerComponent_main_63_div_55_ng_container_5_Template, 20, 5, "ng-container", 135)(6, DropdownManagerComponent_main_63_div_55_ng_template_6_Template, 17, 5, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const newOptionComposer_r22 = \u0275\u0275reference(7);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.editingOptionId ? "bi-pencil-fill text-warning" : "bi-plus-circle-fill text-success");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.editingOptionId ? "Edit Selected Value" : "Add New Value");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.editingOptionId !== null)("ngIfElse", newOptionComposer_r22);
  }
}
function DropdownManagerComponent_main_63_div_56_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 152);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function DropdownManagerComponent_main_63_div_56_tr_14_td_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 159)(1, "div", 160)(2, "button", 161);
    \u0275\u0275listener("click", function DropdownManagerComponent_main_63_div_56_tr_14_td_15_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r25);
      const opt_r24 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.startEditOption(opt_r24));
    });
    \u0275\u0275element(3, "i", 162);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 163);
    \u0275\u0275listener("click", function DropdownManagerComponent_main_63_div_56_tr_14_td_15_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r25);
      const opt_r24 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteOption(opt_r24));
    });
    \u0275\u0275element(5, "i", 118);
    \u0275\u0275elementEnd()()();
  }
}
function DropdownManagerComponent_main_63_div_56_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 153);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "strong", 154);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "code", 155);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "button", 156);
    \u0275\u0275listener("click", function DropdownManagerComponent_main_63_div_56_tr_14_Template_button_click_11_listener() {
      const opt_r24 = \u0275\u0275restoreView(_r23).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleOptionStatus(opt_r24));
    });
    \u0275\u0275element(12, "span", 157);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "uppercase");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, DropdownManagerComponent_main_63_div_56_tr_14_td_15_Template, 6, 0, "td", 158);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r24 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("row-editing", ctx_r1.editingOptionId === opt_r24.id)("row-inactive", opt_r24.status === "inactive");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", opt_r24.sortOrder);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(opt_r24.label);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(opt_r24.value || opt_r24.label);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", "status-" + opt_r24.status)("disabled", !ctx_r1.authService.hasPermission("dropdowns.manage") || ctx_r1.saving)("title", "Click to toggle " + (opt_r24.status === "active" ? "Inactive" : "Active"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 12, opt_r24.status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.authService.hasPermission("dropdowns.manage"));
  }
}
function DropdownManagerComponent_main_63_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 146)(1, "table", 147)(2, "thead")(3, "tr")(4, "th", 148);
    \u0275\u0275text(5, "Sort");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Option Label");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Raw / Stored Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 149);
    \u0275\u0275text(11, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, DropdownManagerComponent_main_63_div_56_th_12_Template, 2, 0, "th", 150);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275template(14, DropdownManagerComponent_main_63_div_56_tr_14_Template, 16, 14, "tr", 151);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(12);
    \u0275\u0275property("ngIf", ctx_r1.authService.hasPermission("dropdowns.manage"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.filteredOptions);
  }
}
function DropdownManagerComponent_main_63_ng_template_57_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1('No options matching "', ctx_r1.optionSearchQuery, '"');
  }
}
function DropdownManagerComponent_main_63_ng_template_57_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "This dropdown group does not have any options yet. Add one above.");
    \u0275\u0275elementEnd();
  }
}
function DropdownManagerComponent_main_63_ng_template_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 164)(1, "div", 165);
    \u0275\u0275element(2, "i", 166);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4");
    \u0275\u0275text(4, "No Options Found");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, DropdownManagerComponent_main_63_ng_template_57_p_5_Template, 2, 1, "p", 167)(6, DropdownManagerComponent_main_63_ng_template_57_p_6_Template, 2, 0, "p", 167);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.optionSearchQuery);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.optionSearchQuery);
  }
}
function DropdownManagerComponent_main_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 78)(1, "div", 79)(2, "div", 80)(3, "div", 81)(4, "span", 82);
    \u0275\u0275element(5, "span", 83);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "uppercase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 84);
    \u0275\u0275element(9, "i", 85);
    \u0275\u0275text(10, " Module: ");
    \u0275\u0275elementStart(11, "strong");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "span", 86);
    \u0275\u0275element(14, "i", 87);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "h2", 88);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 89)(19, "span", 90);
    \u0275\u0275text(20, "API Key:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "code", 91);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 92);
    \u0275\u0275listener("click", function DropdownManagerComponent_main_63_Template_button_click_23_listener() {
      const group_r15 = \u0275\u0275restoreView(_r14).ngIf;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.copyGroupKey(group_r15.groupKey));
    });
    \u0275\u0275element(24, "i", 93);
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(27, DropdownManagerComponent_main_63_div_27_Template, 13, 4, "div", 94);
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, DropdownManagerComponent_main_63_div_28_Template, 31, 6, "div", 95);
    \u0275\u0275elementStart(29, "div", 96)(30, "div", 97);
    \u0275\u0275element(31, "i", 98);
    \u0275\u0275elementStart(32, "span");
    \u0275\u0275text(33, "Live Dropdown Preview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "small", 99);
    \u0275\u0275text(35, "(How this dropdown renders in application forms)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 100)(37, "select", 101)(38, "option", 102);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275template(40, DropdownManagerComponent_main_63_option_40_Template, 2, 4, "option", 103);
    \u0275\u0275elementEnd();
    \u0275\u0275element(41, "i", 104);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 105)(43, "div", 106)(44, "div", 107)(45, "h3");
    \u0275\u0275element(46, "i", 108);
    \u0275\u0275text(47, " Configured Values ");
    \u0275\u0275elementStart(48, "span", 109);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "p", 110);
    \u0275\u0275text(51, "Add, edit, reorder or toggle status for individual lookup items.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 111);
    \u0275\u0275element(53, "i", 24);
    \u0275\u0275elementStart(54, "input", 112);
    \u0275\u0275twoWayListener("ngModelChange", function DropdownManagerComponent_main_63_Template_input_ngModelChange_54_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.optionSearchQuery, $event) || (ctx_r1.optionSearchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(55, DropdownManagerComponent_main_63_div_55_Template, 8, 4, "div", 113)(56, DropdownManagerComponent_main_63_div_56_Template, 15, 2, "div", 114)(57, DropdownManagerComponent_main_63_ng_template_57_Template, 7, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const group_r15 = ctx.ngIf;
    const emptyOptionsTpl_r26 = \u0275\u0275reference(58);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", "badge-" + group_r15.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 19, group_r15.status), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(group_r15.page);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Sort Order: ", group_r15.sortOrder, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(group_r15.label);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(group_r15.groupKey);
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r1.copiedKey ? "Copied!" : "Copy Key");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.copiedKey ? "bi-check-all text-success" : "bi-clipboard");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.copiedKey ? "Copied!" : "Copy");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.authService.hasPermission("dropdowns.manage"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.editorCollapsed);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate2("-- Select ", group_r15.label, " (", group_r15.options.length, " options) --");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", group_r15.options);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.filteredOptions.length);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.optionSearchQuery);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.authService.hasPermission("dropdowns.manage"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredOptions.length > 0)("ngIfElse", emptyOptionsTpl_r26);
  }
}
function DropdownManagerComponent_ng_template_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 168);
    \u0275\u0275element(1, "i", 169);
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3, "Select a Dropdown Group");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Choose any taxonomy group from the left sidebar to manage its dynamic values and configuration.");
    \u0275\u0275elementEnd()();
  }
}
function DropdownManagerComponent_div_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 170)(1, "div", 171)(2, "div", 172)(3, "div", 173)(4, "div", 174);
    \u0275\u0275element(5, "i", 175);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "h3");
    \u0275\u0275text(8, "Create New Dropdown Group");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10, "Add a new taxonomy schema for dynamic selection lists");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "button", 176);
    \u0275\u0275listener("click", function DropdownManagerComponent_div_66_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCreateGroupModal());
    });
    \u0275\u0275element(12, "i", 177);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 178)(14, "div", 179)(15, "div", 180)(16, "label");
    \u0275\u0275text(17, "Group Identifier Key ");
    \u0275\u0275elementStart(18, "span", 181);
    \u0275\u0275text(19, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "input", 182);
    \u0275\u0275twoWayListener("ngModelChange", function DropdownManagerComponent_div_66_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newGroup.groupKey, $event) || (ctx_r1.newGroup.groupKey = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "small", 183);
    \u0275\u0275text(22, "Unique camelCase identifier queried by frontend components.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 180)(24, "label");
    \u0275\u0275text(25, "Display Label ");
    \u0275\u0275elementStart(26, "span", 181);
    \u0275\u0275text(27, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "input", 184);
    \u0275\u0275twoWayListener("ngModelChange", function DropdownManagerComponent_div_66_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newGroup.label, $event) || (ctx_r1.newGroup.label = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 123)(30, "label");
    \u0275\u0275text(31, "Target Module / Page ");
    \u0275\u0275elementStart(32, "span", 181);
    \u0275\u0275text(33, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "input", 185);
    \u0275\u0275twoWayListener("ngModelChange", function DropdownManagerComponent_div_66_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newGroup.page, $event) || (ctx_r1.newGroup.page = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 123)(36, "label");
    \u0275\u0275text(37, "Sort Order");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "input", 125);
    \u0275\u0275twoWayListener("ngModelChange", function DropdownManagerComponent_div_66_Template_input_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newGroup.sortOrder, $event) || (ctx_r1.newGroup.sortOrder = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 180)(40, "label");
    \u0275\u0275text(41, "Initial Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "select", 126);
    \u0275\u0275twoWayListener("ngModelChange", function DropdownManagerComponent_div_66_Template_select_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newGroup.status, $event) || (ctx_r1.newGroup.status = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(43, "option", 32);
    \u0275\u0275text(44, "Active (Available across forms)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "option", 33);
    \u0275\u0275text(46, "Inactive (Draft)");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(47, "div", 186)(48, "button", 116);
    \u0275\u0275listener("click", function DropdownManagerComponent_div_66_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCreateGroupModal());
    });
    \u0275\u0275text(49, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "button", 187);
    \u0275\u0275listener("click", function DropdownManagerComponent_div_66_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createGroup());
    });
    \u0275\u0275element(51, "i", 130);
    \u0275\u0275elementStart(52, "span");
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(20);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newGroup.groupKey);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newGroup.label);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newGroup.page);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newGroup.sortOrder);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newGroup.status);
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", ctx_r1.saving || !ctx_r1.newGroup.groupKey || !ctx_r1.newGroup.label || !ctx_r1.newGroup.page);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.saving ? "Creating..." : "Create Taxonomy Group");
  }
}
var _DropdownManagerComponent = class _DropdownManagerComponent {
  constructor(dropdownService, authService) {
    this.dropdownService = dropdownService;
    this.authService = authService;
    this.groups = [];
    this.loading = false;
    this.saving = false;
    this.message = "";
    this.error = "";
    this.editorCollapsed = false;
    this.searchQuery = "";
    this.statusFilter = "all";
    this.selectedPageFilter = "all";
    this.optionSearchQuery = "";
    this.selectedGroupId = "";
    this.showCreateGroupModal = false;
    this.copiedKey = false;
    this.newGroup = {
      groupKey: "",
      label: "",
      page: "Treks",
      status: "active",
      sortOrder: 0
    };
    this.groupDraft = {
      groupKey: "",
      label: "",
      page: "",
      status: "active",
      sortOrder: 0
    };
    this.newOption = {
      groupId: "",
      label: "",
      optionValue: "",
      status: "active",
      sortOrder: 0
    };
    this.editingOptionId = null;
    this.optionDraft = {
      groupId: "",
      label: "",
      optionValue: "",
      status: "active",
      sortOrder: 0
    };
  }
  ngOnInit() {
    this.loadGroups();
  }
  get availablePages() {
    const set = /* @__PURE__ */ new Set();
    this.groups.forEach((g) => {
      if (g.page)
        set.add(g.page.trim());
    });
    return Array.from(set).sort();
  }
  get filteredGroups() {
    return this.groups.filter((group) => {
      const matchesSearch = !this.searchQuery.trim() || [group.label, group.groupKey, group.page].join(" ").toLowerCase().includes(this.searchQuery.trim().toLowerCase());
      const matchesStatus = this.statusFilter === "all" || group.status === this.statusFilter;
      const matchesPage = this.selectedPageFilter === "all" || group.page.toLowerCase() === this.selectedPageFilter.toLowerCase();
      return matchesSearch && matchesStatus && matchesPage;
    });
  }
  get selectedGroup() {
    return this.groups.find((group) => group.id === this.selectedGroupId);
  }
  get filteredOptions() {
    const group = this.selectedGroup;
    if (!group || !Array.isArray(group.options))
      return [];
    if (!this.optionSearchQuery.trim())
      return group.options;
    const query = this.optionSearchQuery.trim().toLowerCase();
    return group.options.filter((opt) => opt.label.toLowerCase().includes(query) || (opt.value || "").toLowerCase().includes(query));
  }
  get totalOptions() {
    return this.groups.reduce((sum, group) => sum + (group.options?.length || 0), 0);
  }
  get selectedGroupOptionsCount() {
    return this.selectedGroup?.options?.length || 0;
  }
  get activeGroupCount() {
    return this.groups.filter((group) => group.status === "active").length;
  }
  get inactiveGroupCount() {
    return this.groups.filter((group) => group.status === "inactive").length;
  }
  copyGroupKey(key) {
    if (!key)
      return;
    navigator.clipboard?.writeText(key);
    this.copiedKey = true;
    setTimeout(() => {
      this.copiedKey = false;
    }, 2e3);
  }
  openCreateGroupModal() {
    this.resetNewGroup();
    this.showCreateGroupModal = true;
  }
  closeCreateGroupModal() {
    this.showCreateGroupModal = false;
  }
  loadGroups(selectGroupId) {
    this.loading = true;
    this.error = "";
    this.dropdownService.getManagementGroups().subscribe({
      next: (groups) => {
        this.groups = this.sortGroups(groups);
        const nextSelected = selectGroupId && this.groups.some((group) => group.id === selectGroupId) ? selectGroupId : this.selectedGroupId && this.groups.some((group) => group.id === this.selectedGroupId) ? this.selectedGroupId : this.groups[0]?.id || "";
        this.selectedGroupId = nextSelected;
        this.syncGroupDraft();
        this.syncOptionDraft();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.error = "Failed to load dropdown groups";
      }
    });
  }
  selectGroup(groupId) {
    this.selectedGroupId = groupId;
    this.editorCollapsed = false;
    this.syncGroupDraft();
    this.resetOptionDraft();
  }
  resetFilters() {
    this.searchQuery = "";
    this.statusFilter = "all";
  }
  toggleEditorCollapse() {
    this.editorCollapsed = !this.editorCollapsed;
  }
  createGroup() {
    const payload = this.buildGroupPayload(this.newGroup);
    if (!payload.groupKey || !payload.label || !payload.page) {
      this.error = "Group key, label, and page are required";
      this.message = "";
      return;
    }
    this.saving = true;
    this.error = "";
    this.message = "";
    this.dropdownService.createGroup(__spreadProps(__spreadValues({}, payload), { options: [] })).subscribe({
      next: (res) => {
        this.saving = false;
        this.message = res?.message || "Dropdown group created";
        this.showCreateGroupModal = false;
        this.resetNewGroup();
        this.loadGroups();
      },
      error: (err) => {
        this.saving = false;
        this.error = err?.error?.message || "Failed to create dropdown group";
      }
    });
  }
  saveGroup() {
    const group = this.selectedGroup;
    if (!group)
      return;
    const payload = this.buildGroupPayload(this.groupDraft);
    if (!payload.groupKey || !payload.label || !payload.page) {
      this.error = "Group key, label, and page are required";
      this.message = "";
      return;
    }
    this.saving = true;
    this.error = "";
    this.message = "";
    this.dropdownService.updateGroup(group.id, payload).subscribe({
      next: (res) => {
        this.saving = false;
        this.message = res?.message || "Dropdown group updated";
        this.loadGroups(group.id);
      },
      error: (err) => {
        this.saving = false;
        this.error = err?.error?.message || "Failed to update dropdown group";
      }
    });
  }
  toggleGroupStatus() {
    const group = this.selectedGroup;
    if (!group)
      return;
    const nextStatus = group.status === "active" ? "inactive" : "active";
    this.saving = true;
    this.error = "";
    this.message = "";
    this.dropdownService.updateGroup(group.id, { status: nextStatus }).subscribe({
      next: (res) => {
        this.saving = false;
        this.message = res?.message || "Dropdown group status updated";
        this.loadGroups(group.id);
      },
      error: (err) => {
        this.saving = false;
        this.error = err?.error?.message || "Failed to update dropdown group";
      }
    });
  }
  deleteGroup() {
    const group = this.selectedGroup;
    if (!group)
      return;
    const confirmed = confirm(`Delete dropdown group "${group.label}" permanently?`);
    if (!confirmed)
      return;
    this.saving = true;
    this.error = "";
    this.message = "";
    this.dropdownService.deleteGroup(group.id).subscribe({
      next: (res) => {
        this.saving = false;
        this.message = res?.message || "Dropdown group deleted";
        this.selectedGroupId = "";
        this.resetOptionDraft();
        this.loadGroups();
      },
      error: (err) => {
        this.saving = false;
        this.error = err?.error?.message || "Failed to delete dropdown group";
      }
    });
  }
  createOption() {
    const group = this.selectedGroup;
    if (!group)
      return;
    const payload = this.buildOptionPayload(this.newOption, group.id);
    if (!payload.label || !payload.groupId) {
      this.error = "Option label is required";
      this.message = "";
      return;
    }
    this.saving = true;
    this.error = "";
    this.message = "";
    this.dropdownService.createOption(payload).subscribe({
      next: (res) => {
        this.saving = false;
        this.message = res?.message || "Dropdown option created";
        this.resetOptionDraft();
        this.loadGroups(group.id);
      },
      error: (err) => {
        this.saving = false;
        this.error = err?.error?.message || "Failed to create dropdown option";
      }
    });
  }
  startEditOption(option) {
    const group = this.selectedGroup;
    if (!group)
      return;
    this.editingOptionId = option.id;
    this.optionDraft = {
      groupId: group.id,
      label: option.label,
      optionValue: option.value,
      status: option.status,
      sortOrder: Number(option.sortOrder || 0)
    };
  }
  cancelOptionEdit() {
    this.editingOptionId = null;
    this.resetOptionDraft();
  }
  saveOption() {
    const group = this.selectedGroup;
    const optionId = this.editingOptionId;
    if (!group)
      return;
    if (!optionId)
      return;
    const payload = this.buildOptionPayload(this.optionDraft, group.id);
    if (!payload.label || !payload.groupId) {
      this.error = "Option label is required";
      this.message = "";
      return;
    }
    this.saving = true;
    this.error = "";
    this.message = "";
    this.dropdownService.updateOption(optionId, payload).subscribe({
      next: (res) => {
        this.saving = false;
        this.message = res?.message || "Dropdown option updated";
        this.cancelOptionEdit();
        this.loadGroups(group.id);
      },
      error: (err) => {
        this.saving = false;
        this.error = err?.error?.message || "Failed to update dropdown option";
      }
    });
  }
  toggleOptionStatus(option) {
    const group = this.selectedGroup;
    if (!group)
      return;
    const nextStatus = option.status === "active" ? "inactive" : "active";
    this.saving = true;
    this.error = "";
    this.message = "";
    this.dropdownService.setOptionStatus(group.id, option.id, nextStatus).subscribe({
      next: (res) => {
        this.saving = false;
        this.message = res?.message || "Dropdown option status updated";
        this.loadGroups(group.id);
      },
      error: (err) => {
        this.saving = false;
        this.error = err?.error?.message || "Failed to update dropdown option";
      }
    });
  }
  deleteOption(option) {
    const confirmed = confirm(`Delete option "${option.label}" permanently?`);
    if (!confirmed)
      return;
    const group = this.selectedGroup;
    if (!group)
      return;
    this.saving = true;
    this.error = "";
    this.message = "";
    this.dropdownService.deleteOption(option.id).subscribe({
      next: (res) => {
        this.saving = false;
        this.message = res?.message || "Dropdown option deleted";
        if (this.editingOptionId === option.id) {
          this.cancelOptionEdit();
        }
        this.loadGroups(group.id);
      },
      error: (err) => {
        this.saving = false;
        this.error = err?.error?.message || "Failed to delete dropdown option";
      }
    });
  }
  resetNewGroup() {
    this.newGroup = {
      groupKey: "",
      label: "",
      page: "",
      status: "active",
      sortOrder: this.groups.length + 1
    };
  }
  resetOptionDraft() {
    const group = this.selectedGroup;
    this.newOption = {
      groupId: group?.id || "",
      label: "",
      optionValue: "",
      status: "active",
      sortOrder: group?.options.length ? group.options.length + 1 : 1
    };
    if (this.editingOptionId) {
      this.optionDraft = {
        groupId: group?.id || "",
        label: "",
        optionValue: "",
        status: "active",
        sortOrder: group?.options.length ? group.options.length + 1 : 1
      };
    }
  }
  syncGroupDraft() {
    const group = this.selectedGroup;
    this.groupDraft = group ? {
      groupKey: group.groupKey,
      label: group.label,
      page: group.page,
      status: group.status,
      sortOrder: Number(group.sortOrder || 0)
    } : {
      groupKey: "",
      label: "",
      page: "",
      status: "active",
      sortOrder: 0
    };
  }
  syncOptionDraft() {
    const group = this.selectedGroup;
    this.newOption = {
      groupId: group?.id || "",
      label: "",
      optionValue: "",
      status: "active",
      sortOrder: group?.options.length ? group.options.length + 1 : 1
    };
  }
  buildGroupPayload(source) {
    return {
      groupKey: String(source.groupKey || "").trim(),
      label: String(source.label || "").trim(),
      page: String(source.page || "").trim(),
      status: source.status === "inactive" ? "inactive" : "active",
      sortOrder: Number(source.sortOrder || 0),
      options: []
    };
  }
  buildOptionPayload(source, groupId) {
    return {
      groupId,
      label: String(source.label || "").trim(),
      optionValue: String(source.optionValue || source.label || "").trim(),
      status: source.status === "inactive" ? "inactive" : "active",
      sortOrder: Number(source.sortOrder || 0)
    };
  }
  sortGroups(rows) {
    return [...rows].sort((a, b) => {
      const orderDiff = Number(a.sortOrder || 0) - Number(b.sortOrder || 0);
      if (orderDiff !== 0)
        return orderDiff;
      return String(a.label || "").localeCompare(String(b.label || ""));
    });
  }
};
_DropdownManagerComponent.\u0275fac = function DropdownManagerComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DropdownManagerComponent)(\u0275\u0275directiveInject(DropdownManagerService), \u0275\u0275directiveInject(AuthService));
};
_DropdownManagerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DropdownManagerComponent, selectors: [["app-dropdown-manager"]], decls: 67, vars: 18, consts: [["noGroupSelected", ""], ["emptyOptionsTpl", ""], ["newOptionComposer", ""], [1, "dropdown-page"], ["sectionLabel", "Taxonomy & Dynamic Config", "title", "Dropdown & Lookup Manager", "subtitle", "Manage dynamic enum lists, lookup taxonomies, status options, and metadata across all user and admin modules."], [1, "metrics-grid"], [1, "metric-card", "metric-primary"], [1, "metric-icon-wrap"], [1, "bi", "bi-diagram-3-fill"], [1, "metric-content"], [1, "metric-label"], [1, "metric-val"], [1, "metric-sub"], [1, "metric-card", "metric-success"], [1, "bi", "bi-check2-circle"], [1, "metric-sub", "text-success"], ["class", "metric-card metric-warning", 4, "ngIf"], [1, "metric-card", "metric-accent"], [1, "bi", "bi-collection-fill"], ["class", "toast-banner success", 4, "ngIf"], ["class", "toast-banner error", 4, "ngIf"], [1, "ops-toolbar"], [1, "toolbar-left"], [1, "search-box"], [1, "bi", "bi-search"], ["type", "search", "placeholder", "Search taxonomies, group keys, or modules...", 3, "ngModelChange", "ngModel"], ["class", "clear-btn", 3, "click", 4, "ngIf"], ["class", "page-pills-bar", 4, "ngIf"], [1, "toolbar-right"], [1, "status-select-wrap"], [1, "modern-select-sm", 3, "ngModelChange", "ngModel"], ["value", "all"], ["value", "active"], ["value", "inactive"], ["class", "btn-gradient-primary", "type", "button", 3, "click", 4, "ngIf"], [1, "manager-workspace"], [1, "groups-sidebar"], [1, "sidebar-header"], [1, "sidebar-title"], [1, "bi", "bi-list-nested"], ["class", "btn-text-sm", 3, "click", 4, "ngIf"], [1, "groups-scroll-list"], ["class", "group-card", 3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "empty-list-card", 4, "ngIf"], ["class", "group-detail-panel", 4, "ngIf", "ngIfElse"], ["class", "modal-backdrop-custom", 4, "ngIf"], [1, "metric-card", "metric-warning"], [1, "bi", "bi-pause-circle"], [1, "metric-sub", "text-muted"], [1, "toast-banner", "success"], [1, "bi", "bi-check-circle-fill"], ["type", "button", 1, "toast-close", 3, "click"], [1, "bi", "bi-x"], [1, "toast-banner", "error"], [1, "bi", "bi-exclamation-triangle-fill"], [1, "clear-btn", 3, "click"], [1, "bi", "bi-x-circle-fill"], [1, "page-pills-bar"], ["type", "button", 1, "filter-pill", 3, "click"], ["type", "button", "class", "filter-pill", 3, "active", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn-gradient-primary", 3, "click"], [1, "bi", "bi-plus-lg"], [1, "btn-text-sm", 3, "click"], [1, "group-card", 3, "click"], [1, "group-card-indicator"], [1, "group-card-avatar"], [1, "group-card-body"], [1, "group-card-title-row"], [1, "group-label"], [1, "badge-status", 3, "ngClass"], [1, "group-card-meta"], [1, "group-key-pill"], [1, "page-chip"], [1, "bi", "bi-window"], [1, "options-count"], [1, "empty-list-card"], [1, "bi", "bi-folder-x"], [1, "btn-app", "ghost", "btn-sm", 3, "click"], [1, "group-detail-panel"], [1, "group-hero-card"], [1, "hero-main"], [1, "hero-tags"], [1, "badge-status-lg", 3, "ngClass"], [1, "pulse-dot"], [1, "module-badge"], [1, "bi", "bi-grid-fill"], [1, "sort-badge"], [1, "bi", "bi-sort-numeric-down"], [1, "hero-title"], [1, "hero-key-row"], [1, "key-label"], [1, "key-code"], ["type", "button", 1, "btn-copy-key", 3, "click", "title"], [1, "bi", 3, "ngClass"], ["class", "hero-actions", 4, "ngIf"], ["class", "schema-editor-card", 4, "ngIf"], [1, "preview-sandbox-card"], [1, "sandbox-title"], [1, "bi", "bi-eye-fill"], [1, "text-muted"], [1, "sandbox-select-wrap"], [1, "sandbox-select"], ["value", "", "disabled", "", "selected", ""], [3, "value", "disabled", 4, "ngFor", "ngForOf"], [1, "bi", "bi-chevron-down", "select-chevron"], [1, "options-container-card"], [1, "options-section-head"], [1, "section-title-wrap"], [1, "bi", "bi-list-check"], [1, "count-pill"], [1, "section-desc"], [1, "option-search-box"], ["type", "search", "placeholder", "Filter options...", 3, "ngModelChange", "ngModel"], ["class", "fast-composer-bar", 4, "ngIf"], ["class", "table-responsive-wrapper", 4, "ngIf", "ngIfElse"], [1, "hero-actions"], ["type", "button", 1, "btn-action-ghost", 3, "click"], ["type", "button", 1, "btn-action-danger", 3, "click"], [1, "bi", "bi-trash3-fill"], [1, "schema-editor-card"], [1, "schema-header"], [1, "bi", "bi-sliders2"], [1, "schema-grid"], [1, "form-field"], ["type", "text", 1, "modern-input", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", 1, "modern-input", 3, "ngModelChange", "ngModel"], [1, "modern-select", 3, "ngModelChange", "ngModel"], ["class", "schema-actions", 4, "ngIf"], [1, "schema-actions"], [1, "btn-gradient-primary", "btn-sm", 3, "click", "disabled"], [1, "bi", "bi-check2"], [1, "btn-action-ghost", "btn-sm", 3, "click"], [3, "value", "disabled"], [1, "fast-composer-bar"], [1, "composer-title-tag"], [4, "ngIf", "ngIfElse"], [1, "composer-fields"], [1, "composer-field", "flex-2"], ["type", "text", "placeholder", "Display Label (e.g. Challenging)", 1, "modern-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Stored Value (e.g. challenging)", 1, "modern-input", 3, "ngModelChange", "ngModel"], [1, "composer-field", "flex-1"], ["type", "number", "placeholder", "Sort #", 1, "modern-input", 3, "ngModelChange", "ngModel"], [1, "composer-btn-group"], [1, "bi", "bi-check-lg"], ["type", "text", "placeholder", "New Option Label (e.g. Western Ghats)", 1, "modern-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Stored Value (Optional slug)", 1, "modern-input", 3, "ngModelChange", "ngModel"], [1, "table-responsive-wrapper"], [1, "modern-table"], [2, "width", "70px"], [2, "width", "120px"], ["style", "width: 140px;", "class", "text-end", 4, "ngIf"], [3, "row-editing", "row-inactive", 4, "ngFor", "ngForOf"], [1, "text-end", 2, "width", "140px"], [1, "rank-badge"], [1, "option-label-text"], [1, "option-value-code"], ["type", "button", 1, "status-toggle-btn", 3, "click", "ngClass", "disabled", "title"], [1, "status-indicator"], ["class", "text-end", 4, "ngIf"], [1, "text-end"], [1, "action-buttons-cell"], ["type", "button", "title", "Edit Option", 1, "btn-row-action", "edit", 3, "click"], [1, "bi", "bi-pencil-fill"], ["type", "button", "title", "Delete Option", 1, "btn-row-action", "delete", 3, "click"], [1, "empty-state-box"], [1, "empty-state-icon"], [1, "bi", "bi-tags"], [4, "ngIf"], [1, "no-selection-card"], [1, "bi", "bi-hand-index-thumb"], [1, "modal-backdrop-custom"], [1, "modal-dialog-custom"], [1, "modal-header-custom"], [1, "modal-title-wrap"], [1, "modal-avatar"], [1, "bi", "bi-folder-plus"], ["type", "button", 1, "btn-close-custom", 3, "click"], [1, "bi", "bi-x-lg"], [1, "modal-body-custom"], [1, "modal-form-grid"], [1, "form-field", "full-width"], [1, "req"], ["type", "text", "placeholder", "e.g. trailDifficulty, mealType", 1, "modern-input", 3, "ngModelChange", "ngModel"], [1, "field-hint"], ["type", "text", "placeholder", "e.g. Trail Difficulty Level", 1, "modern-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "e.g. Treks, Bookings, Operations", 1, "modern-input", 3, "ngModelChange", "ngModel"], [1, "modal-footer-custom"], ["type", "button", 1, "btn-gradient-primary", 3, "click", "disabled"]], template: function DropdownManagerComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "app-admin-shell", 4)(2, "div", 5)(3, "div", 6)(4, "div", 7);
    \u0275\u0275element(5, "i", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 9)(7, "span", 10);
    \u0275\u0275text(8, "Dropdown Groups");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 11);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 12);
    \u0275\u0275text(12, "Configured schema sets");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 13)(14, "div", 7);
    \u0275\u0275element(15, "i", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 9)(17, "span", 10);
    \u0275\u0275text(18, "Active Taxonomies");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 11);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 15);
    \u0275\u0275text(22, "Live in user & admin views");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(23, DropdownManagerComponent_div_23_Template, 10, 1, "div", 16);
    \u0275\u0275elementStart(24, "div", 17)(25, "div", 7);
    \u0275\u0275element(26, "i", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 9)(28, "span", 10);
    \u0275\u0275text(29, "Total Dynamic Values");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 11);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 12);
    \u0275\u0275text(33, "Database-driven options");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(34, DropdownManagerComponent_div_34_Template, 6, 1, "div", 19)(35, DropdownManagerComponent_div_35_Template, 6, 1, "div", 20);
    \u0275\u0275elementStart(36, "div", 21)(37, "div", 22)(38, "div", 23);
    \u0275\u0275element(39, "i", 24);
    \u0275\u0275elementStart(40, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function DropdownManagerComponent_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(41, DropdownManagerComponent_button_41_Template, 2, 0, "button", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275template(42, DropdownManagerComponent_div_42_Template, 4, 3, "div", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 28)(44, "div", 29)(45, "select", 30);
    \u0275\u0275twoWayListener("ngModelChange", function DropdownManagerComponent_Template_select_ngModelChange_45_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.statusFilter, $event) || (ctx.statusFilter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(46, "option", 31);
    \u0275\u0275text(47, "All Statuses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "option", 32);
    \u0275\u0275text(49, "Active Only");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "option", 33);
    \u0275\u0275text(51, "Inactive Only");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(52, DropdownManagerComponent_button_52_Template, 4, 0, "button", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 35)(54, "aside", 36)(55, "div", 37)(56, "span", 38);
    \u0275\u0275element(57, "i", 39);
    \u0275\u0275text(58);
    \u0275\u0275elementEnd();
    \u0275\u0275template(59, DropdownManagerComponent_button_59_Template, 2, 0, "button", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 41);
    \u0275\u0275template(61, DropdownManagerComponent_div_61_Template, 18, 9, "div", 42)(62, DropdownManagerComponent_div_62_Template, 6, 0, "div", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(63, DropdownManagerComponent_main_63_Template, 59, 21, "main", 44)(64, DropdownManagerComponent_ng_template_64_Template, 6, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275template(66, DropdownManagerComponent_div_66_Template, 54, 7, "div", 45);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const noGroupSelected_r28 = \u0275\u0275reference(65);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx.groups.length);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx.activeGroupCount);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.inactiveGroupCount > 0);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx.totalOptions);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.message);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.error);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.searchQuery);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.availablePages.length > 0);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.statusFilter);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx.authService.hasPermission("dropdowns.manage"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" Taxonomy Groups (", ctx.filteredGroups.length, ") ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.searchQuery || ctx.selectedPageFilter !== "all" || ctx.statusFilter !== "all");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx.filteredGroups);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.filteredGroups.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.selectedGroup)("ngIfElse", noGroupSelected_r28);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.showCreateGroupModal);
  }
}, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, AdminShellComponent, UpperCasePipe], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.dropdown-page[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n.metrics-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.metric-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  background: #ffffff;\n  border-radius: 16px;\n  padding: 18px 20px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.metric-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);\n}\n.metric-card[_ngcontent-%COMP%]   .metric-icon-wrap[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.35rem;\n  flex-shrink: 0;\n}\n.metric-card.metric-primary[_ngcontent-%COMP%]   .metric-icon-wrap[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #059669;\n}\n.metric-card.metric-success[_ngcontent-%COMP%]   .metric-icon-wrap[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #16a34a;\n}\n.metric-card.metric-warning[_ngcontent-%COMP%]   .metric-icon-wrap[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #d97706;\n}\n.metric-card.metric-accent[_ngcontent-%COMP%]   .metric-icon-wrap[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #2563eb;\n}\n.metric-card[_ngcontent-%COMP%]   .metric-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.metric-card[_ngcontent-%COMP%]   .metric-label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #64748b;\n}\n.metric-card[_ngcontent-%COMP%]   .metric-val[_ngcontent-%COMP%] {\n  font-size: 1.65rem;\n  font-weight: 800;\n  color: #0f172a;\n  line-height: 1.1;\n}\n.metric-card[_ngcontent-%COMP%]   .metric-sub[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  color: #94a3b8;\n}\n.toast-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 18px;\n  border-radius: 12px;\n  margin-bottom: 20px;\n  font-size: 0.88rem;\n  font-weight: 600;\n  animation: _ngcontent-%COMP%_slideIn 0.25s ease-out;\n}\n.toast-banner.success[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  border: 1px solid #a7f3d0;\n  color: #065f46;\n}\n.toast-banner.error[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #991b1b;\n}\n.toast-banner[_ngcontent-%COMP%]   .toast-close[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 1.1rem;\n  color: inherit;\n  opacity: 0.7;\n}\n.toast-banner[_ngcontent-%COMP%]   .toast-close[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.ops-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 16px;\n  padding: 14px 18px;\n  margin-bottom: 24px;\n  box-shadow: 0 2px 12px rgba(15, 23, 42, 0.03);\n}\n.ops-toolbar[_ngcontent-%COMP%]   .toolbar-left[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 12px;\n  flex: 1;\n}\n.ops-toolbar[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 240px;\n  max-width: 320px;\n  flex: 1;\n}\n.ops-toolbar[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   i.bi-search[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #94a3b8;\n  font-size: 0.88rem;\n}\n.ops-toolbar[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 9px 32px 9px 34px;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  font-size: 0.86rem;\n  background: #f8fafc;\n  color: #0f172a;\n  transition: all 0.2s ease;\n}\n.ops-toolbar[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  background: #ffffff;\n  border-color: #059669;\n  box-shadow: 0 0 0 3px rgba(5, 150, 105, 0.12);\n}\n.ops-toolbar[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   .clear-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  color: #94a3b8;\n  cursor: pointer;\n  font-size: 0.95rem;\n}\n.ops-toolbar[_ngcontent-%COMP%]   .page-pills-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  overflow-x: auto;\n  max-width: 100%;\n  scrollbar-width: none;\n}\n.ops-toolbar[_ngcontent-%COMP%]   .filter-pill[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border-radius: 20px;\n  border: 1px solid #e2e8f0;\n  background: #f8fafc;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #475569;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: all 0.2s ease;\n}\n.ops-toolbar[_ngcontent-%COMP%]   .filter-pill[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n.ops-toolbar[_ngcontent-%COMP%]   .filter-pill.active[_ngcontent-%COMP%] {\n  background: #133f39;\n  border-color: #133f39;\n  color: #ffffff;\n  box-shadow: 0 2px 8px rgba(19, 63, 57, 0.2);\n}\n.ops-toolbar[_ngcontent-%COMP%]   .toolbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.ops-toolbar[_ngcontent-%COMP%]   .modern-select-sm[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  border-radius: 10px;\n  border: 1px solid #e2e8f0;\n  background: #f8fafc;\n  font-size: 0.84rem;\n  font-weight: 600;\n  color: #334155;\n  cursor: pointer;\n  outline: none;\n}\n.ops-toolbar[_ngcontent-%COMP%]   .modern-select-sm[_ngcontent-%COMP%]:focus {\n  border-color: #059669;\n}\n.ops-toolbar[_ngcontent-%COMP%]   .btn-gradient-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 18px;\n  border-radius: 10px;\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      #133f39 0%,\n      #059669 100%);\n  color: #ffffff;\n  font-size: 0.86rem;\n  font-weight: 700;\n  cursor: pointer;\n  box-shadow: 0 4px 14px rgba(5, 150, 105, 0.25);\n  transition: all 0.2s ease;\n}\n.ops-toolbar[_ngcontent-%COMP%]   .btn-gradient-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 18px rgba(5, 150, 105, 0.35);\n}\n.ops-toolbar[_ngcontent-%COMP%]   .btn-gradient-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n}\n.manager-workspace[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 340px 1fr;\n  gap: 24px;\n  align-items: start;\n}\n@media (max-width: 992px) {\n  .manager-workspace[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.groups-sidebar[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 18px;\n  overflow: hidden;\n  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.04);\n  display: flex;\n  flex-direction: column;\n}\n.groups-sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 18px;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n}\n.groups-sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .sidebar-title[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #475569;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.groups-sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .sidebar-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #059669;\n}\n.groups-sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .btn-text-sm[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #059669;\n  font-size: 0.8rem;\n  font-weight: 700;\n  cursor: pointer;\n  padding: 0;\n}\n.groups-sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .btn-text-sm[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.groups-sidebar[_ngcontent-%COMP%]   .groups-scroll-list[_ngcontent-%COMP%] {\n  max-height: 720px;\n  overflow-y: auto;\n  padding: 8px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.groups-sidebar[_ngcontent-%COMP%]   .group-card[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 14px 14px 14px 16px;\n  border-radius: 12px;\n  background: #ffffff;\n  border: 1px solid transparent;\n  cursor: pointer;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.groups-sidebar[_ngcontent-%COMP%]   .group-card[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  border-color: #e2e8f0;\n}\n.groups-sidebar[_ngcontent-%COMP%]   .group-card.active[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  border-color: #86efac;\n  box-shadow: 0 2px 10px rgba(5, 150, 105, 0.08);\n}\n.groups-sidebar[_ngcontent-%COMP%]   .group-card.active[_ngcontent-%COMP%]   .group-card-indicator[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scaleY(1);\n}\n.groups-sidebar[_ngcontent-%COMP%]   .group-card.active[_ngcontent-%COMP%]   .group-card-avatar[_ngcontent-%COMP%] {\n  background: #133f39;\n  color: #ffffff;\n}\n.groups-sidebar[_ngcontent-%COMP%]   .group-card.active[_ngcontent-%COMP%]   .group-label[_ngcontent-%COMP%] {\n  color: #064e3b;\n  font-weight: 800;\n}\n.groups-sidebar[_ngcontent-%COMP%]   .group-card[_ngcontent-%COMP%]   .group-card-indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 4px;\n  top: 10px;\n  bottom: 10px;\n  width: 4px;\n  border-radius: 4px;\n  background: #059669;\n  opacity: 0;\n  transform: scaleY(0.4);\n  transition: all 0.2s ease;\n}\n.groups-sidebar[_ngcontent-%COMP%]   .group-card[_ngcontent-%COMP%]   .group-card-avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background: #f1f5f9;\n  color: #334155;\n  font-weight: 800;\n  font-size: 0.95rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: all 0.2s ease;\n}\n.groups-sidebar[_ngcontent-%COMP%]   .group-card[_ngcontent-%COMP%]   .group-card-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.groups-sidebar[_ngcontent-%COMP%]   .group-card[_ngcontent-%COMP%]   .group-card-title-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 6px;\n}\n.groups-sidebar[_ngcontent-%COMP%]   .group-card[_ngcontent-%COMP%]   .group-label[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: #0f172a;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.groups-sidebar[_ngcontent-%COMP%]   .group-card[_ngcontent-%COMP%]   .group-card-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 6px;\n}\n.groups-sidebar[_ngcontent-%COMP%]   .group-card[_ngcontent-%COMP%]   .group-key-pill[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    monospace;\n  background: #f1f5f9;\n  color: #475569;\n  padding: 2px 6px;\n  border-radius: 6px;\n}\n.groups-sidebar[_ngcontent-%COMP%]   .group-card[_ngcontent-%COMP%]   .page-chip[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #64748b;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.groups-sidebar[_ngcontent-%COMP%]   .group-card[_ngcontent-%COMP%]   .options-count[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: #059669;\n  background: #ecfdf5;\n  padding: 2px 7px;\n  border-radius: 12px;\n}\n.groups-sidebar[_ngcontent-%COMP%]   .empty-list-card[_ngcontent-%COMP%] {\n  padding: 36px 18px;\n  text-align: center;\n  color: #94a3b8;\n}\n.groups-sidebar[_ngcontent-%COMP%]   .empty-list-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.groups-sidebar[_ngcontent-%COMP%]   .empty-list-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 8px 0 12px;\n  font-size: 0.84rem;\n}\n.group-detail-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.group-hero-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 18px;\n  padding: 24px;\n  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.04);\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n}\n.group-hero-card[_ngcontent-%COMP%]   .hero-main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.group-hero-card[_ngcontent-%COMP%]   .hero-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 8px;\n}\n.group-hero-card[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: #0f172a;\n  letter-spacing: -0.02em;\n}\n.group-hero-card[_ngcontent-%COMP%]   .hero-key-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.84rem;\n}\n.group-hero-card[_ngcontent-%COMP%]   .hero-key-row[_ngcontent-%COMP%]   .key-label[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-weight: 600;\n}\n.group-hero-card[_ngcontent-%COMP%]   .hero-key-row[_ngcontent-%COMP%]   .key-code[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  border: 1px solid #e2e8f0;\n  color: #0f172a;\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    monospace;\n  padding: 3px 8px;\n  border-radius: 6px;\n  font-size: 0.82rem;\n}\n.group-hero-card[_ngcontent-%COMP%]   .hero-key-row[_ngcontent-%COMP%]   .btn-copy-key[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 6px;\n  padding: 3px 8px;\n  font-size: 0.76rem;\n  font-weight: 700;\n  color: #475569;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.group-hero-card[_ngcontent-%COMP%]   .hero-key-row[_ngcontent-%COMP%]   .btn-copy-key[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  border-color: #cbd5e1;\n  color: #0f172a;\n}\n.group-hero-card[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 8px;\n}\n.group-hero-card[_ngcontent-%COMP%]   .btn-action-ghost[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  border-radius: 10px;\n  border: 1px solid #e2e8f0;\n  background: #ffffff;\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: #334155;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.group-hero-card[_ngcontent-%COMP%]   .btn-action-ghost[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  border-color: #cbd5e1;\n  color: #0f172a;\n}\n.group-hero-card[_ngcontent-%COMP%]   .btn-action-danger[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  border-radius: 10px;\n  border: 1px solid #fee2e2;\n  background: #fef2f2;\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: #dc2626;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.group-hero-card[_ngcontent-%COMP%]   .btn-action-danger[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.badge-status[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 0.7rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  padding: 2px 8px;\n  border-radius: 12px;\n}\n.badge-status.badge-active[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #059669;\n}\n.badge-status.badge-inactive[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #94a3b8;\n}\n.badge-status-lg[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.74rem;\n  font-weight: 800;\n  letter-spacing: 0.05em;\n  padding: 4px 12px;\n  border-radius: 20px;\n}\n.badge-status-lg[_ngcontent-%COMP%]   .pulse-dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n}\n.badge-status-lg.badge-active[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #059669;\n}\n.badge-status-lg.badge-active[_ngcontent-%COMP%]   .pulse-dot[_ngcontent-%COMP%] {\n  background: #10b981;\n  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.25);\n}\n.badge-status-lg.badge-inactive[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #64748b;\n}\n.badge-status-lg.badge-inactive[_ngcontent-%COMP%]   .pulse-dot[_ngcontent-%COMP%] {\n  background: #94a3b8;\n}\n.module-badge[_ngcontent-%COMP%], \n.sort-badge[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  font-weight: 600;\n  color: #475569;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  padding: 4px 10px;\n  border-radius: 20px;\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n}\n.schema-editor-card[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 16px;\n  padding: 18px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease-out;\n}\n.schema-editor-card[_ngcontent-%COMP%]   .schema-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #334155;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.schema-editor-card[_ngcontent-%COMP%]   .schema-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #059669;\n}\n.schema-editor-card[_ngcontent-%COMP%]   .schema-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 12px;\n}\n.schema-editor-card[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.schema-editor-card[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  font-weight: 700;\n  color: #64748b;\n  text-transform: uppercase;\n}\n.schema-editor-card[_ngcontent-%COMP%]   .schema-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.preview-sandbox-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f0fdf4 0%,\n      #ecfdf5 100%);\n  border: 1px solid #a7f3d0;\n  border-radius: 16px;\n  padding: 16px 20px;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n}\n.preview-sandbox-card[_ngcontent-%COMP%]   .sandbox-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: #064e3b;\n}\n.preview-sandbox-card[_ngcontent-%COMP%]   .sandbox-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #059669;\n}\n.preview-sandbox-card[_ngcontent-%COMP%]   .sandbox-select-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 280px;\n  flex: 1;\n  max-width: 420px;\n}\n.preview-sandbox-card[_ngcontent-%COMP%]   .sandbox-select-wrap[_ngcontent-%COMP%]   .sandbox-select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 9px 34px 9px 14px;\n  border-radius: 10px;\n  border: 1px solid #6ee7b7;\n  background: #ffffff;\n  font-size: 0.86rem;\n  font-weight: 600;\n  color: #0f172a;\n  outline: none;\n  cursor: pointer;\n  box-shadow: 0 2px 8px rgba(5, 150, 105, 0.08);\n}\n.preview-sandbox-card[_ngcontent-%COMP%]   .sandbox-select-wrap[_ngcontent-%COMP%]   .sandbox-select[_ngcontent-%COMP%]:focus {\n  border-color: #059669;\n  box-shadow: 0 0 0 3px rgba(5, 150, 105, 0.15);\n}\n.preview-sandbox-card[_ngcontent-%COMP%]   .sandbox-select-wrap[_ngcontent-%COMP%]   .select-chevron[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #059669;\n  pointer-events: none;\n  font-size: 0.82rem;\n}\n.options-container-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 18px;\n  overflow: hidden;\n  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.04);\n}\n.options-container-card[_ngcontent-%COMP%]   .options-section-head[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  padding: 20px 24px;\n  border-bottom: 1px solid #f1f5f9;\n}\n.options-container-card[_ngcontent-%COMP%]   .options-section-head[_ngcontent-%COMP%]   .section-title-wrap[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 1.15rem;\n  font-weight: 800;\n  color: #0f172a;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.options-container-card[_ngcontent-%COMP%]   .options-section-head[_ngcontent-%COMP%]   .section-title-wrap[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #059669;\n}\n.options-container-card[_ngcontent-%COMP%]   .options-section-head[_ngcontent-%COMP%]   .section-title-wrap[_ngcontent-%COMP%]   .count-pill[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  font-weight: 800;\n  background: #ecfdf5;\n  color: #059669;\n  padding: 2px 8px;\n  border-radius: 12px;\n}\n.options-container-card[_ngcontent-%COMP%]   .options-section-head[_ngcontent-%COMP%]   .section-title-wrap[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.8rem;\n  color: #64748b;\n}\n.options-container-card[_ngcontent-%COMP%]   .options-section-head[_ngcontent-%COMP%]   .option-search-box[_ngcontent-%COMP%] {\n  position: relative;\n  width: 220px;\n}\n.options-container-card[_ngcontent-%COMP%]   .options-section-head[_ngcontent-%COMP%]   .option-search-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #94a3b8;\n  font-size: 0.8rem;\n}\n.options-container-card[_ngcontent-%COMP%]   .options-section-head[_ngcontent-%COMP%]   .option-search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 7px 10px 7px 30px;\n  border-radius: 8px;\n  border: 1px solid #e2e8f0;\n  background: #f8fafc;\n  font-size: 0.82rem;\n  outline: none;\n}\n.options-container-card[_ngcontent-%COMP%]   .options-section-head[_ngcontent-%COMP%]   .option-search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #059669;\n  background: #ffffff;\n}\n.fast-composer-bar[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n  padding: 16px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.fast-composer-bar[_ngcontent-%COMP%]   .composer-title-tag[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #475569;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.fast-composer-bar[_ngcontent-%COMP%]   .composer-fields[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 10px;\n}\n.fast-composer-bar[_ngcontent-%COMP%]   .composer-fields[_ngcontent-%COMP%]   .composer-field.flex-1[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 100px;\n}\n.fast-composer-bar[_ngcontent-%COMP%]   .composer-fields[_ngcontent-%COMP%]   .composer-field.flex-2[_ngcontent-%COMP%] {\n  flex: 2;\n  min-width: 160px;\n}\n.fast-composer-bar[_ngcontent-%COMP%]   .composer-fields[_ngcontent-%COMP%]   .composer-btn-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.table-responsive-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.modern-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  text-align: left;\n  font-size: 0.86rem;\n}\n.modern-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n}\n.modern-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 18px;\n  font-size: 0.74rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #64748b;\n}\n.modern-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f1f5f9;\n  transition: background 0.15s ease;\n}\n.modern-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #fafbfc;\n}\n.modern-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.row-editing[_ngcontent-%COMP%] {\n  background: #fffbeb !important;\n}\n.modern-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.row-inactive[_ngcontent-%COMP%] {\n  opacity: 0.65;\n}\n.modern-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 18px;\n  vertical-align: middle;\n  color: #1e293b;\n}\n.modern-table[_ngcontent-%COMP%]   .rank-badge[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  font-weight: 700;\n  color: #64748b;\n  background: #f1f5f9;\n  padding: 3px 8px;\n  border-radius: 6px;\n}\n.modern-table[_ngcontent-%COMP%]   .option-label-text[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.modern-table[_ngcontent-%COMP%]   .option-value-code[_ngcontent-%COMP%] {\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    monospace;\n  font-size: 0.8rem;\n  background: #f1f5f9;\n  color: #475569;\n  padding: 2px 7px;\n  border-radius: 6px;\n}\n.modern-table[_ngcontent-%COMP%]   .status-toggle-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 3px 10px;\n  border-radius: 20px;\n  border: 1px solid transparent;\n  font-size: 0.72rem;\n  font-weight: 800;\n  letter-spacing: 0.04em;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.modern-table[_ngcontent-%COMP%]   .status-toggle-btn[_ngcontent-%COMP%]   .status-indicator[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n}\n.modern-table[_ngcontent-%COMP%]   .status-toggle-btn.status-active[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  border-color: #a7f3d0;\n  color: #059669;\n}\n.modern-table[_ngcontent-%COMP%]   .status-toggle-btn.status-active[_ngcontent-%COMP%]   .status-indicator[_ngcontent-%COMP%] {\n  background: #10b981;\n}\n.modern-table[_ngcontent-%COMP%]   .status-toggle-btn.status-active[_ngcontent-%COMP%]:hover {\n  background: #d1fae5;\n}\n.modern-table[_ngcontent-%COMP%]   .status-toggle-btn.status-inactive[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  border-color: #e2e8f0;\n  color: #64748b;\n}\n.modern-table[_ngcontent-%COMP%]   .status-toggle-btn.status-inactive[_ngcontent-%COMP%]   .status-indicator[_ngcontent-%COMP%] {\n  background: #94a3b8;\n}\n.modern-table[_ngcontent-%COMP%]   .status-toggle-btn.status-inactive[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n}\n.modern-table[_ngcontent-%COMP%]   .action-buttons-cell[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.modern-table[_ngcontent-%COMP%]   .btn-row-action[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  border: 1px solid #e2e8f0;\n  background: #ffffff;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 0.82rem;\n  color: #475569;\n  transition: all 0.15s ease;\n}\n.modern-table[_ngcontent-%COMP%]   .btn-row-action.edit[_ngcontent-%COMP%]:hover {\n  border-color: #cbd5e1;\n  background: #f8fafc;\n  color: #0f172a;\n}\n.modern-table[_ngcontent-%COMP%]   .btn-row-action.delete[_ngcontent-%COMP%]:hover {\n  border-color: #fee2e2;\n  background: #fef2f2;\n  color: #dc2626;\n}\n.empty-state-box[_ngcontent-%COMP%] {\n  padding: 48px 24px;\n  text-align: center;\n  color: #94a3b8;\n}\n.empty-state-box[_ngcontent-%COMP%]   .empty-state-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-bottom: 8px;\n  color: #cbd5e1;\n}\n.empty-state-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 6px;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #475569;\n}\n.empty-state-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.84rem;\n}\n.no-selection-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 2px dashed #cbd5e1;\n  border-radius: 18px;\n  padding: 64px 24px;\n  text-align: center;\n  color: #64748b;\n}\n.no-selection-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: #059669;\n}\n.no-selection-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 12px 0 6px;\n  font-size: 1.25rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.no-selection-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 400px;\n  font-size: 0.88rem;\n  color: #64748b;\n}\n.modern-input[_ngcontent-%COMP%], \n.modern-select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid #cbd5e1;\n  border-radius: 9px;\n  background: #ffffff;\n  font-size: 0.84rem;\n  color: #0f172a;\n  outline: none;\n  transition: all 0.15s ease;\n}\n.modern-input[_ngcontent-%COMP%]:focus, \n.modern-select[_ngcontent-%COMP%]:focus {\n  border-color: #059669;\n  box-shadow: 0 0 0 3px rgba(5, 150, 105, 0.12);\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 6px 12px !important;\n  font-size: 0.8rem !important;\n}\n.modal-backdrop-custom[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 1050;\n  background: rgba(15, 23, 42, 0.6);\n  -webkit-backdrop-filter: blur(6px);\n  backdrop-filter: blur(6px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease-out;\n}\n.modal-dialog-custom[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 20px;\n  width: 100%;\n  max-width: 520px;\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  animation: _ngcontent-%COMP%_slideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.modal-header-custom[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 24px;\n  border-bottom: 1px solid #f1f5f9;\n}\n.modal-header-custom[_ngcontent-%COMP%]   .modal-title-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.modal-header-custom[_ngcontent-%COMP%]   .modal-title-wrap[_ngcontent-%COMP%]   .modal-avatar[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  background: #ecfdf5;\n  color: #059669;\n  font-size: 1.25rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal-header-custom[_ngcontent-%COMP%]   .modal-title-wrap[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.modal-header-custom[_ngcontent-%COMP%]   .modal-title-wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 2px 0 0;\n  font-size: 0.78rem;\n  color: #64748b;\n}\n.modal-header-custom[_ngcontent-%COMP%]   .btn-close-custom[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.1rem;\n  color: #94a3b8;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 8px;\n}\n.modal-header-custom[_ngcontent-%COMP%]   .btn-close-custom[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n.modal-body-custom[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  max-height: 70vh;\n  overflow-y: auto;\n}\n.modal-body-custom[_ngcontent-%COMP%]   .modal-form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.modal-body-custom[_ngcontent-%COMP%]   .modal-form-grid[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.modal-body-custom[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.modal-body-custom[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: #334155;\n}\n.modal-body-custom[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .req[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.modal-body-custom[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-hint[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #94a3b8;\n}\n.modal-footer-custom[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 16px 24px;\n  background: #f8fafc;\n  border-top: 1px solid #f1f5f9;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n/*# sourceMappingURL=dropdown-manager.component.css.map */'] });
var DropdownManagerComponent = _DropdownManagerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownManagerComponent, [{
    type: Component,
    args: [{ selector: "app-dropdown-manager", standalone: true, imports: [CommonModule, FormsModule, AdminShellComponent], schemas: [CUSTOM_ELEMENTS_SCHEMA], template: `<div class="dropdown-page">
  <app-admin-shell
    sectionLabel="Taxonomy & Dynamic Config"
    title="Dropdown & Lookup Manager"
    subtitle="Manage dynamic enum lists, lookup taxonomies, status options, and metadata across all user and admin modules.">

    <!-- HERO METRICS -->
    <div class="metrics-grid">
      <div class="metric-card metric-primary">
        <div class="metric-icon-wrap">
          <i class="bi bi-diagram-3-fill"></i>
        </div>
        <div class="metric-content">
          <span class="metric-label">Dropdown Groups</span>
          <div class="metric-val">{{ groups.length }}</div>
          <span class="metric-sub">Configured schema sets</span>
        </div>
      </div>

      <div class="metric-card metric-success">
        <div class="metric-icon-wrap">
          <i class="bi bi-check2-circle"></i>
        </div>
        <div class="metric-content">
          <span class="metric-label">Active Taxonomies</span>
          <div class="metric-val">{{ activeGroupCount }}</div>
          <span class="metric-sub text-success">Live in user & admin views</span>
        </div>
      </div>

      <div class="metric-card metric-warning" *ngIf="inactiveGroupCount > 0">
        <div class="metric-icon-wrap">
          <i class="bi bi-pause-circle"></i>
        </div>
        <div class="metric-content">
          <span class="metric-label">Inactive Groups</span>
          <div class="metric-val">{{ inactiveGroupCount }}</div>
          <span class="metric-sub text-muted">Temporarily hidden</span>
        </div>
      </div>

      <div class="metric-card metric-accent">
        <div class="metric-icon-wrap">
          <i class="bi bi-collection-fill"></i>
        </div>
        <div class="metric-content">
          <span class="metric-label">Total Dynamic Values</span>
          <div class="metric-val">{{ totalOptions }}</div>
          <span class="metric-sub">Database-driven options</span>
        </div>
      </div>
    </div>

    <!-- NOTIFICATION BANNERS -->
    <div class="toast-banner success" *ngIf="message">
      <i class="bi bi-check-circle-fill"></i>
      <span>{{ message }}</span>
      <button type="button" class="toast-close" (click)="message = ''"><i class="bi bi-x"></i></button>
    </div>
    <div class="toast-banner error" *ngIf="error">
      <i class="bi bi-exclamation-triangle-fill"></i>
      <span>{{ error }}</span>
      <button type="button" class="toast-close" (click)="error = ''"><i class="bi bi-x"></i></button>
    </div>

    <!-- CONTROLS & FILTER TOOLBAR -->
    <div class="ops-toolbar">
      <div class="toolbar-left">
        <div class="search-box">
          <i class="bi bi-search"></i>
          <input
            type="search"
            [(ngModel)]="searchQuery"
            placeholder="Search taxonomies, group keys, or modules..." />
          <button *ngIf="searchQuery" class="clear-btn" (click)="searchQuery = ''"><i class="bi bi-x-circle-fill"></i></button>
        </div>

        <div class="page-pills-bar" *ngIf="availablePages.length > 0">
          <button
            type="button"
            class="filter-pill"
            [class.active]="selectedPageFilter === 'all'"
            (click)="selectedPageFilter = 'all'">
            All Modules
          </button>
          <button
            type="button"
            class="filter-pill"
            *ngFor="let p of availablePages"
            [class.active]="selectedPageFilter.toLowerCase() === p.toLowerCase()"
            (click)="selectedPageFilter = p">
            {{ p }}
          </button>
        </div>
      </div>

      <div class="toolbar-right">
        <div class="status-select-wrap">
          <select [(ngModel)]="statusFilter" class="modern-select-sm">
            <option value="all">All Statuses</option>
            <option value="active">Active Only</option>
            <option value="inactive">Inactive Only</option>
          </select>
        </div>

        <button
          *ngIf="authService.hasPermission('dropdowns.manage')"
          class="btn-gradient-primary"
          type="button"
          (click)="openCreateGroupModal()">
          <i class="bi bi-plus-lg"></i>
          <span>New Group</span>
        </button>
      </div>
    </div>

    <!-- MAIN TWO-COLUMN WORKSPACE -->
    <div class="manager-workspace">
      <!-- LEFT MASTER COLUMN: GROUPS LIST -->
      <aside class="groups-sidebar">
        <div class="sidebar-header">
          <span class="sidebar-title">
            <i class="bi bi-list-nested"></i>
            Taxonomy Groups ({{ filteredGroups.length }})
          </span>
          <button *ngIf="searchQuery || selectedPageFilter !== 'all' || statusFilter !== 'all'" class="btn-text-sm" (click)="resetFilters(); selectedPageFilter = 'all'">
            Reset
          </button>
        </div>

        <div class="groups-scroll-list">
          <div
            *ngFor="let group of filteredGroups"
            class="group-card"
            [class.active]="group.id === selectedGroupId"
            (click)="selectGroup(group.id)">
            <div class="group-card-indicator"></div>
            <div class="group-card-avatar">
              {{ (group.label || 'G').charAt(0).toUpperCase() }}
            </div>
            <div class="group-card-body">
              <div class="group-card-title-row">
                <span class="group-label">{{ group.label }}</span>
                <span class="badge-status" [ngClass]="'badge-' + group.status">{{ group.status }}</span>
              </div>
              <div class="group-card-meta">
                <code class="group-key-pill">{{ group.groupKey }}</code>
                <span class="page-chip"><i class="bi bi-window"></i> {{ group.page }}</span>
                <span class="options-count">{{ group.options.length }} items</span>
              </div>
            </div>
          </div>

          <div class="empty-list-card" *ngIf="filteredGroups.length === 0">
            <i class="bi bi-folder-x"></i>
            <p>No matching dropdown groups</p>
            <button class="btn-app ghost btn-sm" (click)="resetFilters(); selectedPageFilter = 'all'">Clear Filters</button>
          </div>
        </div>
      </aside>

      <!-- RIGHT DETAIL COLUMN: GROUP & OPTIONS MANAGER -->
      <main class="group-detail-panel" *ngIf="selectedGroup as group; else noGroupSelected">
        <!-- GROUP DETAIL HERO BANNER -->
        <div class="group-hero-card">
          <div class="hero-main">
            <div class="hero-tags">
              <span class="badge-status-lg" [ngClass]="'badge-' + group.status">
                <span class="pulse-dot"></span>
                {{ group.status | uppercase }}
              </span>
              <span class="module-badge">
                <i class="bi bi-grid-fill"></i> Module: <strong>{{ group.page }}</strong>
              </span>
              <span class="sort-badge">
                <i class="bi bi-sort-numeric-down"></i> Sort Order: {{ group.sortOrder }}
              </span>
            </div>
            <h2 class="hero-title">{{ group.label }}</h2>
            <div class="hero-key-row">
              <span class="key-label">API Key:</span>
              <code class="key-code">{{ group.groupKey }}</code>
              <button
                type="button"
                class="btn-copy-key"
                (click)="copyGroupKey(group.groupKey)"
                [title]="copiedKey ? 'Copied!' : 'Copy Key'">
                <i class="bi" [ngClass]="copiedKey ? 'bi-check-all text-success' : 'bi-clipboard'"></i>
                <span>{{ copiedKey ? 'Copied!' : 'Copy' }}</span>
              </button>
            </div>
          </div>

          <div class="hero-actions" *ngIf="authService.hasPermission('dropdowns.manage')">
            <button class="btn-action-ghost" type="button" (click)="toggleEditorCollapse()">
              <i class="bi" [ngClass]="editorCollapsed ? 'bi-chevron-down' : 'bi-sliders'"></i>
              <span>{{ editorCollapsed ? 'Edit Schema' : 'Hide Schema' }}</span>
            </button>
            <button class="btn-action-ghost" type="button" (click)="toggleGroupStatus()">
              <i class="bi" [ngClass]="group.status === 'active' ? 'bi-pause-circle-fill text-warning' : 'bi-play-circle-fill text-success'"></i>
              <span>{{ group.status === 'active' ? 'Deactivate' : 'Activate' }}</span>
            </button>
            <button class="btn-action-danger" type="button" (click)="deleteGroup()">
              <i class="bi bi-trash3-fill"></i>
              <span>Delete</span>
            </button>
          </div>
        </div>

        <!-- COLLAPSIBLE GROUP SCHEMA SETTINGS -->
        <div class="schema-editor-card" *ngIf="!editorCollapsed">
          <div class="schema-header">
            <h4><i class="bi bi-sliders2"></i> Edit Group Properties</h4>
          </div>
          <div class="schema-grid">
            <div class="form-field">
              <label>Group Identifier Key</label>
              <input type="text" [(ngModel)]="groupDraft.groupKey" class="modern-input" />
            </div>
            <div class="form-field">
              <label>Display Label</label>
              <input type="text" [(ngModel)]="groupDraft.label" class="modern-input" />
            </div>
            <div class="form-field">
              <label>Target Page / Module</label>
              <input type="text" [(ngModel)]="groupDraft.page" class="modern-input" />
            </div>
            <div class="form-field">
              <label>Sort Order Index</label>
              <input type="number" min="0" [(ngModel)]="groupDraft.sortOrder" class="modern-input" />
            </div>
            <div class="form-field">
              <label>Status</label>
              <select [(ngModel)]="groupDraft.status" class="modern-select">
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>
          <div class="schema-actions" *ngIf="authService.hasPermission('dropdowns.manage')">
            <button class="btn-gradient-primary btn-sm" [disabled]="saving" (click)="saveGroup()">
              <i class="bi bi-check2"></i> Save Changes
            </button>
            <button class="btn-action-ghost btn-sm" (click)="syncGroupDraft()">Reset</button>
          </div>
        </div>

        <!-- INTERACTIVE LIVE PREVIEW SANDBOX -->
        <div class="preview-sandbox-card">
          <div class="sandbox-title">
            <i class="bi bi-eye-fill"></i>
            <span>Live Dropdown Preview</span>
            <small class="text-muted">(How this dropdown renders in application forms)</small>
          </div>
          <div class="sandbox-select-wrap">
            <select class="sandbox-select">
              <option value="" disabled selected>-- Select {{ group.label }} ({{ group.options.length }} options) --</option>
              <option *ngFor="let opt of group.options" [value]="opt.value" [disabled]="opt.status === 'inactive'">
                {{ opt.label }} {{ opt.status === 'inactive' ? '(Inactive)' : '' }}
              </option>
            </select>
            <i class="bi bi-chevron-down select-chevron"></i>
          </div>
        </div>

        <!-- OPTIONS MANAGEMENT SECTION -->
        <div class="options-container-card">
          <!-- SECTION HEADER & INLINE ADD COMPOSER -->
          <div class="options-section-head">
            <div class="section-title-wrap">
              <h3>
                <i class="bi bi-list-check"></i>
                Configured Values
                <span class="count-pill">{{ filteredOptions.length }}</span>
              </h3>
              <p class="section-desc">Add, edit, reorder or toggle status for individual lookup items.</p>
            </div>

            <div class="option-search-box">
              <i class="bi bi-search"></i>
              <input type="search" [(ngModel)]="optionSearchQuery" placeholder="Filter options..." />
            </div>
          </div>

          <!-- FAST INLINE ADD / EDIT BAR -->
          <div class="fast-composer-bar" *ngIf="authService.hasPermission('dropdowns.manage')">
            <div class="composer-title-tag">
              <i class="bi" [ngClass]="editingOptionId ? 'bi-pencil-fill text-warning' : 'bi-plus-circle-fill text-success'"></i>
              <span>{{ editingOptionId ? 'Edit Selected Value' : 'Add New Value' }}</span>
            </div>

            <ng-container *ngIf="editingOptionId !== null; else newOptionComposer">
              <div class="composer-fields">
                <div class="composer-field flex-2">
                  <input type="text" [(ngModel)]="optionDraft.label" class="modern-input" placeholder="Display Label (e.g. Challenging)" />
                </div>
                <div class="composer-field flex-2">
                  <input type="text" [(ngModel)]="optionDraft.optionValue" class="modern-input" placeholder="Stored Value (e.g. challenging)" />
                </div>
                <div class="composer-field flex-1">
                  <input type="number" [(ngModel)]="optionDraft.sortOrder" class="modern-input" placeholder="Sort #" />
                </div>
                <div class="composer-field flex-1">
                  <select [(ngModel)]="optionDraft.status" class="modern-select">
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
                <div class="composer-btn-group">
                  <button class="btn-gradient-primary btn-sm" [disabled]="saving" (click)="saveOption()">
                    <i class="bi bi-check-lg"></i> Update
                  </button>
                  <button class="btn-action-ghost btn-sm" (click)="cancelOptionEdit()">Cancel</button>
                </div>
              </div>
            </ng-container>

            <ng-template #newOptionComposer>
              <div class="composer-fields">
                <div class="composer-field flex-2">
                  <input type="text" [(ngModel)]="newOption.label" class="modern-input" placeholder="New Option Label (e.g. Western Ghats)" />
                </div>
                <div class="composer-field flex-2">
                  <input type="text" [(ngModel)]="newOption.optionValue" class="modern-input" placeholder="Stored Value (Optional slug)" />
                </div>
                <div class="composer-field flex-1">
                  <input type="number" [(ngModel)]="newOption.sortOrder" class="modern-input" placeholder="Sort #" />
                </div>
                <div class="composer-field flex-1">
                  <select [(ngModel)]="newOption.status" class="modern-select">
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
                <div class="composer-btn-group">
                  <button class="btn-gradient-primary btn-sm" [disabled]="saving || !newOption.label" (click)="createOption()">
                    <i class="bi bi-plus-lg"></i> Add Value
                  </button>
                </div>
              </div>
            </ng-template>
          </div>

          <!-- VALUES DATA TABLE -->
          <div class="table-responsive-wrapper" *ngIf="filteredOptions.length > 0; else emptyOptionsTpl">
            <table class="modern-table">
              <thead>
                <tr>
                  <th style="width: 70px;">Sort</th>
                  <th>Option Label</th>
                  <th>Raw / Stored Value</th>
                  <th style="width: 120px;">Status</th>
                  <th style="width: 140px;" class="text-end" *ngIf="authService.hasPermission('dropdowns.manage')">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let opt of filteredOptions" [class.row-editing]="editingOptionId === opt.id" [class.row-inactive]="opt.status === 'inactive'">
                  <td>
                    <span class="rank-badge">#{{ opt.sortOrder }}</span>
                  </td>
                  <td>
                    <strong class="option-label-text">{{ opt.label }}</strong>
                  </td>
                  <td>
                    <code class="option-value-code">{{ opt.value || opt.label }}</code>
                  </td>
                  <td>
                    <button
                      type="button"
                      class="status-toggle-btn"
                      [ngClass]="'status-' + opt.status"
                      [disabled]="!authService.hasPermission('dropdowns.manage') || saving"
                      (click)="toggleOptionStatus(opt)"
                      [title]="'Click to toggle ' + (opt.status === 'active' ? 'Inactive' : 'Active')">
                      <span class="status-indicator"></span>
                      {{ opt.status | uppercase }}
                    </button>
                  </td>
                  <td class="text-end" *ngIf="authService.hasPermission('dropdowns.manage')">
                    <div class="action-buttons-cell">
                      <button
                        type="button"
                        class="btn-row-action edit"
                        (click)="startEditOption(opt)"
                        title="Edit Option">
                        <i class="bi bi-pencil-fill"></i>
                      </button>
                      <button
                        type="button"
                        class="btn-row-action delete"
                        (click)="deleteOption(opt)"
                        title="Delete Option">
                        <i class="bi bi-trash3-fill"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <ng-template #emptyOptionsTpl>
            <div class="empty-state-box">
              <div class="empty-state-icon">
                <i class="bi bi-tags"></i>
              </div>
              <h4>No Options Found</h4>
              <p *ngIf="optionSearchQuery">No options matching "{{ optionSearchQuery }}"</p>
              <p *ngIf="!optionSearchQuery">This dropdown group does not have any options yet. Add one above.</p>
            </div>
          </ng-template>
        </div>
      </main>

      <ng-template #noGroupSelected>
        <div class="no-selection-card">
          <i class="bi bi-hand-index-thumb"></i>
          <h3>Select a Dropdown Group</h3>
          <p>Choose any taxonomy group from the left sidebar to manage its dynamic values and configuration.</p>
        </div>
      </ng-template>
    </div>

    <!-- CREATE GROUP MODAL -->
    <div class="modal-backdrop-custom" *ngIf="showCreateGroupModal">
      <div class="modal-dialog-custom">
        <div class="modal-header-custom">
          <div class="modal-title-wrap">
            <div class="modal-avatar"><i class="bi bi-folder-plus"></i></div>
            <div>
              <h3>Create New Dropdown Group</h3>
              <p>Add a new taxonomy schema for dynamic selection lists</p>
            </div>
          </div>
          <button type="button" class="btn-close-custom" (click)="closeCreateGroupModal()"><i class="bi bi-x-lg"></i></button>
        </div>

        <div class="modal-body-custom">
          <div class="modal-form-grid">
            <div class="form-field full-width">
              <label>Group Identifier Key <span class="req">*</span></label>
              <input type="text" [(ngModel)]="newGroup.groupKey" placeholder="e.g. trailDifficulty, mealType" class="modern-input" />
              <small class="field-hint">Unique camelCase identifier queried by frontend components.</small>
            </div>

            <div class="form-field full-width">
              <label>Display Label <span class="req">*</span></label>
              <input type="text" [(ngModel)]="newGroup.label" placeholder="e.g. Trail Difficulty Level" class="modern-input" />
            </div>

            <div class="form-field">
              <label>Target Module / Page <span class="req">*</span></label>
              <input type="text" [(ngModel)]="newGroup.page" placeholder="e.g. Treks, Bookings, Operations" class="modern-input" />
            </div>

            <div class="form-field">
              <label>Sort Order</label>
              <input type="number" min="0" [(ngModel)]="newGroup.sortOrder" class="modern-input" />
            </div>

            <div class="form-field full-width">
              <label>Initial Status</label>
              <select [(ngModel)]="newGroup.status" class="modern-select">
                <option value="active">Active (Available across forms)</option>
                <option value="inactive">Inactive (Draft)</option>
              </select>
            </div>
          </div>
        </div>

        <div class="modal-footer-custom">
          <button type="button" class="btn-action-ghost" (click)="closeCreateGroupModal()">Cancel</button>
          <button
            type="button"
            class="btn-gradient-primary"
            [disabled]="saving || !newGroup.groupKey || !newGroup.label || !newGroup.page"
            (click)="createGroup()">
            <i class="bi bi-check2"></i>
            <span>{{ saving ? 'Creating...' : 'Create Taxonomy Group' }}</span>
          </button>
        </div>
      </div>
    </div>

  </app-admin-shell>
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/dropdown-manager/dropdown-manager.component.scss */\n:host {\n  display: block;\n}\n.dropdown-page {\n  --background: transparent;\n}\n.metrics-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.metric-card {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  background: #ffffff;\n  border-radius: 16px;\n  padding: 18px 20px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.metric-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);\n}\n.metric-card .metric-icon-wrap {\n  width: 48px;\n  height: 48px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.35rem;\n  flex-shrink: 0;\n}\n.metric-card.metric-primary .metric-icon-wrap {\n  background: #ecfdf5;\n  color: #059669;\n}\n.metric-card.metric-success .metric-icon-wrap {\n  background: #f0fdf4;\n  color: #16a34a;\n}\n.metric-card.metric-warning .metric-icon-wrap {\n  background: #fffbeb;\n  color: #d97706;\n}\n.metric-card.metric-accent .metric-icon-wrap {\n  background: #eff6ff;\n  color: #2563eb;\n}\n.metric-card .metric-content {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.metric-card .metric-label {\n  font-size: 0.78rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #64748b;\n}\n.metric-card .metric-val {\n  font-size: 1.65rem;\n  font-weight: 800;\n  color: #0f172a;\n  line-height: 1.1;\n}\n.metric-card .metric-sub {\n  font-size: 0.76rem;\n  color: #94a3b8;\n}\n.toast-banner {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 18px;\n  border-radius: 12px;\n  margin-bottom: 20px;\n  font-size: 0.88rem;\n  font-weight: 600;\n  animation: slideIn 0.25s ease-out;\n}\n.toast-banner.success {\n  background: #ecfdf5;\n  border: 1px solid #a7f3d0;\n  color: #065f46;\n}\n.toast-banner.error {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #991b1b;\n}\n.toast-banner .toast-close {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 1.1rem;\n  color: inherit;\n  opacity: 0.7;\n}\n.toast-banner .toast-close:hover {\n  opacity: 1;\n}\n.ops-toolbar {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 16px;\n  padding: 14px 18px;\n  margin-bottom: 24px;\n  box-shadow: 0 2px 12px rgba(15, 23, 42, 0.03);\n}\n.ops-toolbar .toolbar-left {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 12px;\n  flex: 1;\n}\n.ops-toolbar .search-box {\n  position: relative;\n  min-width: 240px;\n  max-width: 320px;\n  flex: 1;\n}\n.ops-toolbar .search-box i.bi-search {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #94a3b8;\n  font-size: 0.88rem;\n}\n.ops-toolbar .search-box input {\n  width: 100%;\n  padding: 9px 32px 9px 34px;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  font-size: 0.86rem;\n  background: #f8fafc;\n  color: #0f172a;\n  transition: all 0.2s ease;\n}\n.ops-toolbar .search-box input:focus {\n  outline: none;\n  background: #ffffff;\n  border-color: #059669;\n  box-shadow: 0 0 0 3px rgba(5, 150, 105, 0.12);\n}\n.ops-toolbar .search-box .clear-btn {\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  color: #94a3b8;\n  cursor: pointer;\n  font-size: 0.95rem;\n}\n.ops-toolbar .page-pills-bar {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  overflow-x: auto;\n  max-width: 100%;\n  scrollbar-width: none;\n}\n.ops-toolbar .filter-pill {\n  padding: 6px 14px;\n  border-radius: 20px;\n  border: 1px solid #e2e8f0;\n  background: #f8fafc;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #475569;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: all 0.2s ease;\n}\n.ops-toolbar .filter-pill:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n.ops-toolbar .filter-pill.active {\n  background: #133f39;\n  border-color: #133f39;\n  color: #ffffff;\n  box-shadow: 0 2px 8px rgba(19, 63, 57, 0.2);\n}\n.ops-toolbar .toolbar-right {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.ops-toolbar .modern-select-sm {\n  padding: 8px 14px;\n  border-radius: 10px;\n  border: 1px solid #e2e8f0;\n  background: #f8fafc;\n  font-size: 0.84rem;\n  font-weight: 600;\n  color: #334155;\n  cursor: pointer;\n  outline: none;\n}\n.ops-toolbar .modern-select-sm:focus {\n  border-color: #059669;\n}\n.ops-toolbar .btn-gradient-primary {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 18px;\n  border-radius: 10px;\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      #133f39 0%,\n      #059669 100%);\n  color: #ffffff;\n  font-size: 0.86rem;\n  font-weight: 700;\n  cursor: pointer;\n  box-shadow: 0 4px 14px rgba(5, 150, 105, 0.25);\n  transition: all 0.2s ease;\n}\n.ops-toolbar .btn-gradient-primary:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 18px rgba(5, 150, 105, 0.35);\n}\n.ops-toolbar .btn-gradient-primary:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n}\n.manager-workspace {\n  display: grid;\n  grid-template-columns: 340px 1fr;\n  gap: 24px;\n  align-items: start;\n}\n@media (max-width: 992px) {\n  .manager-workspace {\n    grid-template-columns: 1fr;\n  }\n}\n.groups-sidebar {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 18px;\n  overflow: hidden;\n  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.04);\n  display: flex;\n  flex-direction: column;\n}\n.groups-sidebar .sidebar-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 18px;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n}\n.groups-sidebar .sidebar-header .sidebar-title {\n  font-size: 0.85rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #475569;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.groups-sidebar .sidebar-header .sidebar-title i {\n  color: #059669;\n}\n.groups-sidebar .sidebar-header .btn-text-sm {\n  background: none;\n  border: none;\n  color: #059669;\n  font-size: 0.8rem;\n  font-weight: 700;\n  cursor: pointer;\n  padding: 0;\n}\n.groups-sidebar .sidebar-header .btn-text-sm:hover {\n  text-decoration: underline;\n}\n.groups-sidebar .groups-scroll-list {\n  max-height: 720px;\n  overflow-y: auto;\n  padding: 8px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.groups-sidebar .group-card {\n  position: relative;\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 14px 14px 14px 16px;\n  border-radius: 12px;\n  background: #ffffff;\n  border: 1px solid transparent;\n  cursor: pointer;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.groups-sidebar .group-card:hover {\n  background: #f8fafc;\n  border-color: #e2e8f0;\n}\n.groups-sidebar .group-card.active {\n  background: #f0fdf4;\n  border-color: #86efac;\n  box-shadow: 0 2px 10px rgba(5, 150, 105, 0.08);\n}\n.groups-sidebar .group-card.active .group-card-indicator {\n  opacity: 1;\n  transform: scaleY(1);\n}\n.groups-sidebar .group-card.active .group-card-avatar {\n  background: #133f39;\n  color: #ffffff;\n}\n.groups-sidebar .group-card.active .group-label {\n  color: #064e3b;\n  font-weight: 800;\n}\n.groups-sidebar .group-card .group-card-indicator {\n  position: absolute;\n  left: 4px;\n  top: 10px;\n  bottom: 10px;\n  width: 4px;\n  border-radius: 4px;\n  background: #059669;\n  opacity: 0;\n  transform: scaleY(0.4);\n  transition: all 0.2s ease;\n}\n.groups-sidebar .group-card .group-card-avatar {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background: #f1f5f9;\n  color: #334155;\n  font-weight: 800;\n  font-size: 0.95rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: all 0.2s ease;\n}\n.groups-sidebar .group-card .group-card-body {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.groups-sidebar .group-card .group-card-title-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 6px;\n}\n.groups-sidebar .group-card .group-label {\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: #0f172a;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.groups-sidebar .group-card .group-card-meta {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 6px;\n}\n.groups-sidebar .group-card .group-key-pill {\n  font-size: 0.72rem;\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    monospace;\n  background: #f1f5f9;\n  color: #475569;\n  padding: 2px 6px;\n  border-radius: 6px;\n}\n.groups-sidebar .group-card .page-chip {\n  font-size: 0.72rem;\n  color: #64748b;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.groups-sidebar .group-card .options-count {\n  margin-left: auto;\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: #059669;\n  background: #ecfdf5;\n  padding: 2px 7px;\n  border-radius: 12px;\n}\n.groups-sidebar .empty-list-card {\n  padding: 36px 18px;\n  text-align: center;\n  color: #94a3b8;\n}\n.groups-sidebar .empty-list-card i {\n  font-size: 2rem;\n}\n.groups-sidebar .empty-list-card p {\n  margin: 8px 0 12px;\n  font-size: 0.84rem;\n}\n.group-detail-panel {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.group-hero-card {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 18px;\n  padding: 24px;\n  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.04);\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n}\n.group-hero-card .hero-main {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.group-hero-card .hero-tags {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 8px;\n}\n.group-hero-card .hero-title {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: #0f172a;\n  letter-spacing: -0.02em;\n}\n.group-hero-card .hero-key-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.84rem;\n}\n.group-hero-card .hero-key-row .key-label {\n  color: #64748b;\n  font-weight: 600;\n}\n.group-hero-card .hero-key-row .key-code {\n  background: #f1f5f9;\n  border: 1px solid #e2e8f0;\n  color: #0f172a;\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    monospace;\n  padding: 3px 8px;\n  border-radius: 6px;\n  font-size: 0.82rem;\n}\n.group-hero-card .hero-key-row .btn-copy-key {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 6px;\n  padding: 3px 8px;\n  font-size: 0.76rem;\n  font-weight: 700;\n  color: #475569;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.group-hero-card .hero-key-row .btn-copy-key:hover {\n  background: #f8fafc;\n  border-color: #cbd5e1;\n  color: #0f172a;\n}\n.group-hero-card .hero-actions {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 8px;\n}\n.group-hero-card .btn-action-ghost {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  border-radius: 10px;\n  border: 1px solid #e2e8f0;\n  background: #ffffff;\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: #334155;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.group-hero-card .btn-action-ghost:hover {\n  background: #f8fafc;\n  border-color: #cbd5e1;\n  color: #0f172a;\n}\n.group-hero-card .btn-action-danger {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  border-radius: 10px;\n  border: 1px solid #fee2e2;\n  background: #fef2f2;\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: #dc2626;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.group-hero-card .btn-action-danger:hover {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.badge-status {\n  display: inline-block;\n  font-size: 0.7rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  padding: 2px 8px;\n  border-radius: 12px;\n}\n.badge-status.badge-active {\n  background: #ecfdf5;\n  color: #059669;\n}\n.badge-status.badge-inactive {\n  background: #f1f5f9;\n  color: #94a3b8;\n}\n.badge-status-lg {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.74rem;\n  font-weight: 800;\n  letter-spacing: 0.05em;\n  padding: 4px 12px;\n  border-radius: 20px;\n}\n.badge-status-lg .pulse-dot {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n}\n.badge-status-lg.badge-active {\n  background: #ecfdf5;\n  color: #059669;\n}\n.badge-status-lg.badge-active .pulse-dot {\n  background: #10b981;\n  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.25);\n}\n.badge-status-lg.badge-inactive {\n  background: #f1f5f9;\n  color: #64748b;\n}\n.badge-status-lg.badge-inactive .pulse-dot {\n  background: #94a3b8;\n}\n.module-badge,\n.sort-badge {\n  font-size: 0.74rem;\n  font-weight: 600;\n  color: #475569;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  padding: 4px 10px;\n  border-radius: 20px;\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n}\n.schema-editor-card {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 16px;\n  padding: 18px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  animation: fadeIn 0.2s ease-out;\n}\n.schema-editor-card .schema-header h4 {\n  margin: 0;\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #334155;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.schema-editor-card .schema-header h4 i {\n  color: #059669;\n}\n.schema-editor-card .schema-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 12px;\n}\n.schema-editor-card .form-field {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.schema-editor-card .form-field label {\n  font-size: 0.76rem;\n  font-weight: 700;\n  color: #64748b;\n  text-transform: uppercase;\n}\n.schema-editor-card .schema-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.preview-sandbox-card {\n  background:\n    linear-gradient(\n      135deg,\n      #f0fdf4 0%,\n      #ecfdf5 100%);\n  border: 1px solid #a7f3d0;\n  border-radius: 16px;\n  padding: 16px 20px;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n}\n.preview-sandbox-card .sandbox-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: #064e3b;\n}\n.preview-sandbox-card .sandbox-title i {\n  font-size: 1.1rem;\n  color: #059669;\n}\n.preview-sandbox-card .sandbox-select-wrap {\n  position: relative;\n  min-width: 280px;\n  flex: 1;\n  max-width: 420px;\n}\n.preview-sandbox-card .sandbox-select-wrap .sandbox-select {\n  width: 100%;\n  padding: 9px 34px 9px 14px;\n  border-radius: 10px;\n  border: 1px solid #6ee7b7;\n  background: #ffffff;\n  font-size: 0.86rem;\n  font-weight: 600;\n  color: #0f172a;\n  outline: none;\n  cursor: pointer;\n  box-shadow: 0 2px 8px rgba(5, 150, 105, 0.08);\n}\n.preview-sandbox-card .sandbox-select-wrap .sandbox-select:focus {\n  border-color: #059669;\n  box-shadow: 0 0 0 3px rgba(5, 150, 105, 0.15);\n}\n.preview-sandbox-card .sandbox-select-wrap .select-chevron {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #059669;\n  pointer-events: none;\n  font-size: 0.82rem;\n}\n.options-container-card {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 18px;\n  overflow: hidden;\n  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.04);\n}\n.options-container-card .options-section-head {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  padding: 20px 24px;\n  border-bottom: 1px solid #f1f5f9;\n}\n.options-container-card .options-section-head .section-title-wrap h3 {\n  margin: 0 0 4px;\n  font-size: 1.15rem;\n  font-weight: 800;\n  color: #0f172a;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.options-container-card .options-section-head .section-title-wrap h3 i {\n  color: #059669;\n}\n.options-container-card .options-section-head .section-title-wrap .count-pill {\n  font-size: 0.74rem;\n  font-weight: 800;\n  background: #ecfdf5;\n  color: #059669;\n  padding: 2px 8px;\n  border-radius: 12px;\n}\n.options-container-card .options-section-head .section-title-wrap .section-desc {\n  margin: 0;\n  font-size: 0.8rem;\n  color: #64748b;\n}\n.options-container-card .options-section-head .option-search-box {\n  position: relative;\n  width: 220px;\n}\n.options-container-card .options-section-head .option-search-box i {\n  position: absolute;\n  left: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #94a3b8;\n  font-size: 0.8rem;\n}\n.options-container-card .options-section-head .option-search-box input {\n  width: 100%;\n  padding: 7px 10px 7px 30px;\n  border-radius: 8px;\n  border: 1px solid #e2e8f0;\n  background: #f8fafc;\n  font-size: 0.82rem;\n  outline: none;\n}\n.options-container-card .options-section-head .option-search-box input:focus {\n  border-color: #059669;\n  background: #ffffff;\n}\n.fast-composer-bar {\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n  padding: 16px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.fast-composer-bar .composer-title-tag {\n  font-size: 0.78rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #475569;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.fast-composer-bar .composer-fields {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 10px;\n}\n.fast-composer-bar .composer-fields .composer-field.flex-1 {\n  flex: 1;\n  min-width: 100px;\n}\n.fast-composer-bar .composer-fields .composer-field.flex-2 {\n  flex: 2;\n  min-width: 160px;\n}\n.fast-composer-bar .composer-fields .composer-btn-group {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.table-responsive-wrapper {\n  overflow-x: auto;\n}\n.modern-table {\n  width: 100%;\n  border-collapse: collapse;\n  text-align: left;\n  font-size: 0.86rem;\n}\n.modern-table thead {\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n}\n.modern-table thead th {\n  padding: 12px 18px;\n  font-size: 0.74rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #64748b;\n}\n.modern-table tbody tr {\n  border-bottom: 1px solid #f1f5f9;\n  transition: background 0.15s ease;\n}\n.modern-table tbody tr:hover {\n  background: #fafbfc;\n}\n.modern-table tbody tr.row-editing {\n  background: #fffbeb !important;\n}\n.modern-table tbody tr.row-inactive {\n  opacity: 0.65;\n}\n.modern-table tbody tr td {\n  padding: 14px 18px;\n  vertical-align: middle;\n  color: #1e293b;\n}\n.modern-table .rank-badge {\n  font-size: 0.76rem;\n  font-weight: 700;\n  color: #64748b;\n  background: #f1f5f9;\n  padding: 3px 8px;\n  border-radius: 6px;\n}\n.modern-table .option-label-text {\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.modern-table .option-value-code {\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    monospace;\n  font-size: 0.8rem;\n  background: #f1f5f9;\n  color: #475569;\n  padding: 2px 7px;\n  border-radius: 6px;\n}\n.modern-table .status-toggle-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 3px 10px;\n  border-radius: 20px;\n  border: 1px solid transparent;\n  font-size: 0.72rem;\n  font-weight: 800;\n  letter-spacing: 0.04em;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.modern-table .status-toggle-btn .status-indicator {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n}\n.modern-table .status-toggle-btn.status-active {\n  background: #ecfdf5;\n  border-color: #a7f3d0;\n  color: #059669;\n}\n.modern-table .status-toggle-btn.status-active .status-indicator {\n  background: #10b981;\n}\n.modern-table .status-toggle-btn.status-active:hover {\n  background: #d1fae5;\n}\n.modern-table .status-toggle-btn.status-inactive {\n  background: #f1f5f9;\n  border-color: #e2e8f0;\n  color: #64748b;\n}\n.modern-table .status-toggle-btn.status-inactive .status-indicator {\n  background: #94a3b8;\n}\n.modern-table .status-toggle-btn.status-inactive:hover {\n  background: #e2e8f0;\n}\n.modern-table .action-buttons-cell {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.modern-table .btn-row-action {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  border: 1px solid #e2e8f0;\n  background: #ffffff;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 0.82rem;\n  color: #475569;\n  transition: all 0.15s ease;\n}\n.modern-table .btn-row-action.edit:hover {\n  border-color: #cbd5e1;\n  background: #f8fafc;\n  color: #0f172a;\n}\n.modern-table .btn-row-action.delete:hover {\n  border-color: #fee2e2;\n  background: #fef2f2;\n  color: #dc2626;\n}\n.empty-state-box {\n  padding: 48px 24px;\n  text-align: center;\n  color: #94a3b8;\n}\n.empty-state-box .empty-state-icon {\n  font-size: 2.5rem;\n  margin-bottom: 8px;\n  color: #cbd5e1;\n}\n.empty-state-box h4 {\n  margin: 0 0 6px;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #475569;\n}\n.empty-state-box p {\n  margin: 0;\n  font-size: 0.84rem;\n}\n.no-selection-card {\n  background: #ffffff;\n  border: 2px dashed #cbd5e1;\n  border-radius: 18px;\n  padding: 64px 24px;\n  text-align: center;\n  color: #64748b;\n}\n.no-selection-card i {\n  font-size: 3rem;\n  color: #059669;\n}\n.no-selection-card h3 {\n  margin: 12px 0 6px;\n  font-size: 1.25rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.no-selection-card p {\n  margin: 0 auto;\n  max-width: 400px;\n  font-size: 0.88rem;\n  color: #64748b;\n}\n.modern-input,\n.modern-select {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid #cbd5e1;\n  border-radius: 9px;\n  background: #ffffff;\n  font-size: 0.84rem;\n  color: #0f172a;\n  outline: none;\n  transition: all 0.15s ease;\n}\n.modern-input:focus,\n.modern-select:focus {\n  border-color: #059669;\n  box-shadow: 0 0 0 3px rgba(5, 150, 105, 0.12);\n}\n.btn-sm {\n  padding: 6px 12px !important;\n  font-size: 0.8rem !important;\n}\n.modal-backdrop-custom {\n  position: fixed;\n  inset: 0;\n  z-index: 1050;\n  background: rgba(15, 23, 42, 0.6);\n  -webkit-backdrop-filter: blur(6px);\n  backdrop-filter: blur(6px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n  animation: fadeIn 0.2s ease-out;\n}\n.modal-dialog-custom {\n  background: #ffffff;\n  border-radius: 20px;\n  width: 100%;\n  max-width: 520px;\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  animation: slideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.modal-header-custom {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 24px;\n  border-bottom: 1px solid #f1f5f9;\n}\n.modal-header-custom .modal-title-wrap {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.modal-header-custom .modal-title-wrap .modal-avatar {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  background: #ecfdf5;\n  color: #059669;\n  font-size: 1.25rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal-header-custom .modal-title-wrap h3 {\n  margin: 0;\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.modal-header-custom .modal-title-wrap p {\n  margin: 2px 0 0;\n  font-size: 0.78rem;\n  color: #64748b;\n}\n.modal-header-custom .btn-close-custom {\n  background: none;\n  border: none;\n  font-size: 1.1rem;\n  color: #94a3b8;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 8px;\n}\n.modal-header-custom .btn-close-custom:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n.modal-body-custom {\n  padding: 20px 24px;\n  max-height: 70vh;\n  overflow-y: auto;\n}\n.modal-body-custom .modal-form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.modal-body-custom .modal-form-grid .full-width {\n  grid-column: 1/-1;\n}\n.modal-body-custom .form-field {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.modal-body-custom .form-field label {\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: #334155;\n}\n.modal-body-custom .form-field label .req {\n  color: #dc2626;\n}\n.modal-body-custom .form-field .field-hint {\n  font-size: 0.72rem;\n  color: #94a3b8;\n}\n.modal-footer-custom {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 16px 24px;\n  background: #f8fafc;\n  border-top: 1px solid #f1f5f9;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n/*# sourceMappingURL=dropdown-manager.component.css.map */\n'] }]
  }], () => [{ type: DropdownManagerService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DropdownManagerComponent, { className: "DropdownManagerComponent", filePath: "src/app/dropdown-manager/dropdown-manager.component.ts", lineNumber: 24 });
})();

// src/app/dropdown-manager/dropdown-manager.module.ts
var routes = [{ path: "", component: DropdownManagerComponent }];
var _DropdownManagerModule = class _DropdownManagerModule {
};
_DropdownManagerModule.\u0275fac = function DropdownManagerModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DropdownManagerModule)();
};
_DropdownManagerModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DropdownManagerModule });
_DropdownManagerModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, DropdownManagerComponent, RouterModule.forChild(routes)] });
var DropdownManagerModule = _DropdownManagerModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownManagerModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [CommonModule, DropdownManagerComponent, RouterModule.forChild(routes)]
    }]
  }], null, null);
})();
export {
  DropdownManagerModule
};
//# sourceMappingURL=dropdown-manager.module-ILWZT32C.js.map
