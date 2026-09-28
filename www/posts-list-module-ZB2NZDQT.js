import {
  PostEditor
} from "./chunk-SOBAQ654.js";
import {
  MediaService
} from "./chunk-BXPKFK6Z.js";
import {
  NotificationService
} from "./chunk-SAB4OUIS.js";
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
  CUSTOM_ELEMENTS_SCHEMA,
  CommonModule,
  Component,
  DecimalPipe,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  Router,
  RouterModule,
  TitleCasePipe,
  UpperCasePipe,
  __async,
  environment,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-KQE4QDNK.js";

// src/app/blog/posts-list/posts-list.component.ts
var _c0 = () => [1, 2, 3, 4, 5, 6];
function PostsListComponent_button_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275listener("click", function PostsListComponent_button_51_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.searchQuery = "";
      return \u0275\u0275resetView(ctx_r1.onFilterChange());
    });
    \u0275\u0275element(1, "i", 46);
    \u0275\u0275elementEnd();
  }
}
function PostsListComponent_option_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r3 = ctx.$implicit;
    \u0275\u0275property("value", opt_r3.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r3.label);
  }
}
function PostsListComponent_option_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 47);
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
function PostsListComponent_button_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275listener("click", function PostsListComponent_button_69_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createPost());
    });
    \u0275\u0275element(1, "i", 49);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "New Story");
    \u0275\u0275elementEnd()();
  }
}
function PostsListComponent_button_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 50);
    \u0275\u0275listener("click", function PostsListComponent_button_79_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resetFilters());
    });
    \u0275\u0275element(1, "i", 51);
    \u0275\u0275text(2, " Reset filters ");
    \u0275\u0275elementEnd();
  }
}
function PostsListComponent_div_80_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275element(1, "div", 55);
    \u0275\u0275elementStart(2, "div", 56);
    \u0275\u0275element(3, "div", 57)(4, "div", 58)(5, "div", 59);
    \u0275\u0275elementEnd()();
  }
}
function PostsListComponent_div_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275template(1, PostsListComponent_div_80_div_1_Template, 6, 0, "div", 53);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c0));
  }
}
function PostsListComponent_div_81_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, " No posts matched your current search filters. Try clearing your filters or changing search keywords. ");
    \u0275\u0275elementEnd();
  }
}
function PostsListComponent_div_81_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, " You haven't written any blog articles yet. Start publishing inspiring travel stories and guides! ");
    \u0275\u0275elementEnd();
  }
}
function PostsListComponent_div_81_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 66);
    \u0275\u0275listener("click", function PostsListComponent_div_81_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.searchQuery = "";
      ctx_r1.selectedStatus = "all";
      return \u0275\u0275resetView(ctx_r1.selectedCategory = "all");
    });
    \u0275\u0275text(1, " Reset Filters ");
    \u0275\u0275elementEnd();
  }
}
function PostsListComponent_div_81_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275listener("click", function PostsListComponent_div_81_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.createPost());
    });
    \u0275\u0275element(1, "i", 49);
    \u0275\u0275text(2, " Create First Post ");
    \u0275\u0275elementEnd();
  }
}
function PostsListComponent_div_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 61);
    \u0275\u0275element(2, "i", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No Blog Posts Found");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, PostsListComponent_div_81_p_5_Template, 2, 0, "p", 63)(6, PostsListComponent_div_81_p_6_Template, 2, 0, "p", 63);
    \u0275\u0275elementStart(7, "div", 64);
    \u0275\u0275template(8, PostsListComponent_div_81_button_8_Template, 2, 0, "button", 65)(9, PostsListComponent_div_81_button_9_Template, 3, 0, "button", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.searchQuery || ctx_r1.selectedStatus !== "all" || ctx_r1.selectedCategory !== "all");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.searchQuery && ctx_r1.selectedStatus === "all" && ctx_r1.selectedCategory === "all");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.searchQuery || ctx_r1.selectedStatus !== "all" || ctx_r1.selectedCategory !== "all");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.authService.hasPermission("blog.manage"));
  }
}
function PostsListComponent_div_82_div_1_div_22_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 97);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("#", tag_r11);
  }
}
function PostsListComponent_div_82_div_1_div_22_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 98);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const post_r10 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("+", post_r10.tags.length - 3);
  }
}
function PostsListComponent_div_82_div_1_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 94);
    \u0275\u0275template(1, PostsListComponent_div_82_div_1_div_22_span_1_Template, 2, 1, "span", 95)(2, PostsListComponent_div_82_div_1_div_22_span_2_Template, 2, 1, "span", 96);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const post_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", post_r10.tags.slice(0, 3));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", post_r10.tags.length > 3);
  }
}
function PostsListComponent_div_82_div_1_button_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 99);
    \u0275\u0275listener("click", function PostsListComponent_div_82_div_1_button_31_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const post_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editPost(post_r10.id));
    });
    \u0275\u0275element(1, "i", 100);
    \u0275\u0275elementEnd();
  }
}
function PostsListComponent_div_82_div_1_button_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 101);
    \u0275\u0275listener("click", function PostsListComponent_div_82_div_1_button_32_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const post_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.approvePost(post_r10));
    });
    \u0275\u0275element(1, "i", 102);
    \u0275\u0275elementEnd();
  }
}
function PostsListComponent_div_82_div_1_button_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 103);
    \u0275\u0275listener("click", function PostsListComponent_div_82_div_1_button_33_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const post_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.publishPost(post_r10));
    });
    \u0275\u0275element(1, "i", 104);
    \u0275\u0275elementEnd();
  }
}
function PostsListComponent_div_82_div_1_button_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 105);
    \u0275\u0275listener("click", function PostsListComponent_div_82_div_1_button_34_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const post_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deletePost(post_r10.id));
    });
    \u0275\u0275element(1, "i", 106);
    \u0275\u0275elementEnd();
  }
}
function PostsListComponent_div_82_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69)(1, "div", 70)(2, "img", 71);
    \u0275\u0275listener("error", function PostsListComponent_div_82_div_1_Template_img_error_2_listener() {
      const post_r10 = \u0275\u0275restoreView(_r9).$implicit;
      return \u0275\u0275resetView(post_r10.image = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 72)(4, "span", 73);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 74);
    \u0275\u0275element(7, "span", 75);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 76)(11, "span", 77);
    \u0275\u0275element(12, "i", 78);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 79);
    \u0275\u0275element(15, "i", 80);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 81)(18, "h3", 82);
    \u0275\u0275listener("click", function PostsListComponent_div_82_div_1_Template_h3_click_18_listener() {
      const post_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openPreview(post_r10));
    });
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 83);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, PostsListComponent_div_82_div_1_div_22_Template, 3, 2, "div", 84);
    \u0275\u0275elementStart(23, "div", 85)(24, "div", 86)(25, "span", 87);
    \u0275\u0275element(26, "i", 18);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 88)(29, "button", 89);
    \u0275\u0275listener("click", function PostsListComponent_div_82_div_1_Template_button_click_29_listener() {
      const post_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openPreview(post_r10));
    });
    \u0275\u0275element(30, "i", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275template(31, PostsListComponent_div_82_div_1_button_31_Template, 2, 0, "button", 90)(32, PostsListComponent_div_82_div_1_button_32_Template, 2, 0, "button", 91)(33, PostsListComponent_div_82_div_1_button_33_Template, 2, 0, "button", 92)(34, PostsListComponent_div_82_div_1_button_34_Template, 2, 0, "button", 93);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const post_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", post_r10.image, \u0275\u0275sanitizeUrl)("alt", post_r10.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(post_r10.category);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "status-" + post_r10.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 17, post_r10.status), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", post_r10.authorType === "user" ? "bi-person" : "bi-shield-check");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", post_r10.author, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", post_r10.publishDate, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("title", post_r10.title);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(post_r10.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(post_r10.excerpt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", post_r10.tags && post_r10.tags.length > 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", post_r10.views);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.authService.hasPermission("blog.manage"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.authService.hasPermission("blog.manage") && ctx_r1.canApprovePost(post_r10));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.authService.hasPermission("blog.manage") && !ctx_r1.canApprovePost(post_r10) && ctx_r1.canPublishPost(post_r10));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.authService.hasPermission("blog.manage"));
  }
}
function PostsListComponent_div_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275template(1, PostsListComponent_div_82_div_1_Template, 35, 19, "div", 68);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.paginatedPosts);
  }
}
function PostsListComponent_div_83_tr_19_button_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 130);
    \u0275\u0275listener("click", function PostsListComponent_div_83_tr_19_button_33_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const post_r17 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editPost(post_r17.id));
    });
    \u0275\u0275element(1, "i", 100);
    \u0275\u0275elementEnd();
  }
}
function PostsListComponent_div_83_tr_19_button_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 131);
    \u0275\u0275listener("click", function PostsListComponent_div_83_tr_19_button_34_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const post_r17 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.approvePost(post_r17));
    });
    \u0275\u0275element(1, "i", 102);
    \u0275\u0275elementEnd();
  }
}
function PostsListComponent_div_83_tr_19_button_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 132);
    \u0275\u0275listener("click", function PostsListComponent_div_83_tr_19_button_35_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r20);
      const post_r17 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.publishPost(post_r17));
    });
    \u0275\u0275element(1, "i", 104);
    \u0275\u0275elementEnd();
  }
}
function PostsListComponent_div_83_tr_19_button_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 133);
    \u0275\u0275listener("click", function PostsListComponent_div_83_tr_19_button_36_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r21);
      const post_r17 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deletePost(post_r17.id));
    });
    \u0275\u0275element(1, "i", 106);
    \u0275\u0275elementEnd();
  }
}
function PostsListComponent_div_83_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 111)(2, "div", 112)(3, "img", 113);
    \u0275\u0275listener("error", function PostsListComponent_div_83_tr_19_Template_img_error_3_listener() {
      const post_r17 = \u0275\u0275restoreView(_r16).$implicit;
      return \u0275\u0275resetView(post_r17.image = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=120");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 114)(5, "span", 115);
    \u0275\u0275listener("click", function PostsListComponent_div_83_tr_19_Template_span_click_5_listener() {
      const post_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openPreview(post_r17));
    });
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 116);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(9, "td")(10, "span", 117);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td")(13, "div", 118)(14, "span", 119);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 120);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "uppercase");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "td")(20, "span", 121);
    \u0275\u0275element(21, "span", 75);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "td", 122);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "td", 123)(27, "strong");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "td")(30, "div", 124)(31, "button", 125);
    \u0275\u0275listener("click", function PostsListComponent_div_83_tr_19_Template_button_click_31_listener() {
      const post_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openPreview(post_r17));
    });
    \u0275\u0275element(32, "i", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275template(33, PostsListComponent_div_83_tr_19_button_33_Template, 2, 0, "button", 126)(34, PostsListComponent_div_83_tr_19_button_34_Template, 2, 0, "button", 127)(35, PostsListComponent_div_83_tr_19_button_35_Template, 2, 0, "button", 128)(36, PostsListComponent_div_83_tr_19_button_36_Template, 2, 0, "button", 129);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const post_r17 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", post_r17.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(post_r17.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(post_r17.excerpt);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(post_r17.category);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(post_r17.author);
    \u0275\u0275advance();
    \u0275\u0275classProp("user", post_r17.authorType === "user");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 16, post_r17.authorType));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", "status-" + post_r17.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 18, post_r17.status), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(post_r17.publishDate);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(post_r17.views);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.authService.hasPermission("blog.manage"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.authService.hasPermission("blog.manage") && ctx_r1.canApprovePost(post_r17));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.authService.hasPermission("blog.manage") && !ctx_r1.canApprovePost(post_r17) && ctx_r1.canPublishPost(post_r17));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.authService.hasPermission("blog.manage"));
  }
}
function PostsListComponent_div_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107)(1, "table", 108)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Story");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Author");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Published");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Views");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 109);
    \u0275\u0275text(17, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275template(19, PostsListComponent_div_83_tr_19_Template, 37, 20, "tr", 110);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(19);
    \u0275\u0275property("ngForOf", ctx_r1.paginatedPosts);
  }
}
function PostsListComponent_div_84_option_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r23 = ctx.$implicit;
    \u0275\u0275property("value", opt_r23);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r23);
  }
}
function PostsListComponent_div_84_ng_container_24_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 147);
    \u0275\u0275text(1, "\u2026");
    \u0275\u0275elementEnd();
  }
}
function PostsListComponent_div_84_ng_container_24_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 148);
    \u0275\u0275listener("click", function PostsListComponent_div_84_ng_container_24_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r24);
      const p_r25 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(p_r25));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r25 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", p_r25 === ctx_r1.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r25, " ");
  }
}
function PostsListComponent_div_84_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, PostsListComponent_div_84_ng_container_24_span_1_Template, 2, 0, "span", 145)(2, PostsListComponent_div_84_ng_container_24_button_2_Template, 2, 3, "button", 146);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const p_r25 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r25 === "...");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r25 !== "...");
  }
}
function PostsListComponent_div_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 134)(1, "div", 135)(2, "div", 136);
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
    \u0275\u0275text(12, " articles ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 137)(14, "div", 138)(15, "label");
    \u0275\u0275text(16, "Per page:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "select", 139);
    \u0275\u0275twoWayListener("ngModelChange", function PostsListComponent_div_84_Template_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.pageSize, $event) || (ctx_r1.pageSize = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function PostsListComponent_div_84_Template_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageSizeChange($event));
    });
    \u0275\u0275template(18, PostsListComponent_div_84_option_18_Template, 2, 2, "option", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 140)(20, "button", 141);
    \u0275\u0275listener("click", function PostsListComponent_div_84_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.prevPage());
    });
    \u0275\u0275element(21, "i", 142);
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23, "Prev");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(24, PostsListComponent_div_84_ng_container_24_Template, 3, 2, "ng-container", 110);
    \u0275\u0275elementStart(25, "button", 143);
    \u0275\u0275listener("click", function PostsListComponent_div_84_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nextPage());
    });
    \u0275\u0275elementStart(26, "span");
    \u0275\u0275text(27, "Next");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "i", 144);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r1.currentPage - 1) * ctx_r1.Number(ctx_r1.pageSize) + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.Math.min(ctx_r1.currentPage * ctx_r1.Number(ctx_r1.pageSize), ctx_r1.filteredPosts.length));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.filteredPosts.length);
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
function PostsListComponent_div_85_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 166);
    \u0275\u0275element(1, "img", 167);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.previewPost.image, \u0275\u0275sanitizeUrl)("alt", ctx_r1.previewPost.title);
  }
}
function PostsListComponent_div_85_div_31_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 97);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r27 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("#", t_r27);
  }
}
function PostsListComponent_div_85_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 168)(1, "strong");
    \u0275\u0275text(2, "Tags:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 169);
    \u0275\u0275template(4, PostsListComponent_div_85_div_31_span_4_Template, 2, 1, "span", 95);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.previewPost.tags);
  }
}
function PostsListComponent_div_85_button_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275listener("click", function PostsListComponent_div_85_button_35_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.editPost(ctx_r1.previewPost.id);
      return \u0275\u0275resetView(ctx_r1.closePreview());
    });
    \u0275\u0275element(1, "i", 100);
    \u0275\u0275text(2, " Edit Story ");
    \u0275\u0275elementEnd();
  }
}
function PostsListComponent_div_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 149);
    \u0275\u0275listener("click", function PostsListComponent_div_85_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePreview());
    });
    \u0275\u0275elementStart(1, "div", 150);
    \u0275\u0275listener("click", function PostsListComponent_div_85_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r26);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 151)(3, "div", 152)(4, "span", 74);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 73);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 153);
    \u0275\u0275listener("click", function PostsListComponent_div_85_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePreview());
    });
    \u0275\u0275element(10, "i", 154);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 155);
    \u0275\u0275template(12, PostsListComponent_div_85_div_12_Template, 2, 2, "div", 156);
    \u0275\u0275elementStart(13, "h1", 157);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 158)(16, "div", 159);
    \u0275\u0275element(17, "i", 160);
    \u0275\u0275elementStart(18, "div")(19, "strong");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "small");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 161)(24, "span");
    \u0275\u0275element(25, "i", 18);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 162)(28, "p");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(30, "div", 163);
    \u0275\u0275template(31, PostsListComponent_div_85_div_31_Template, 5, 1, "div", 164);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 165)(33, "button", 66);
    \u0275\u0275listener("click", function PostsListComponent_div_85_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePreview());
    });
    \u0275\u0275text(34, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275template(35, PostsListComponent_div_85_button_35_Template, 3, 0, "button", 35);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", "status-" + ctx_r1.previewPost.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 12, ctx_r1.previewPost.status));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.previewPost.category);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.previewPost.image);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.previewPost.title);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.previewPost.author);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.previewPost.publishDate);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.previewPost.views, " Views");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.previewPost.excerpt);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r1.previewPost.content || "<em>No article content available.</em>", \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.previewPost.tags && ctx_r1.previewPost.tags.length > 0);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.authService.hasPermission("blog.manage"));
  }
}
var _PostsListComponent = class _PostsListComponent {
  get totalPages() {
    const size = Number(this.pageSize) || 9;
    return Math.max(1, Math.ceil(this.filteredPosts.length / size));
  }
  get paginatedPosts() {
    const size = Number(this.pageSize) || 9;
    const page = Math.min(Math.max(1, this.currentPage), this.totalPages);
    const start = (page - 1) * size;
    return this.filteredPosts.slice(start, start + size);
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
  resetFilters() {
    this.searchQuery = "";
    this.selectedStatus = "all";
    this.selectedCategory = "all";
    this.currentPage = 1;
  }
  constructor(router, postEditorService, dropdownService, notify, authService, media) {
    this.router = router;
    this.postEditorService = postEditorService;
    this.dropdownService = dropdownService;
    this.notify = notify;
    this.authService = authService;
    this.media = media;
    this.Math = Math;
    this.imageBaseUrl = (environment.mediaBaseUrl || "").replace(/\/?$/, "/");
    this.searchQuery = "";
    this.selectedStatus = "all";
    this.selectedCategory = "all";
    this.isLoading = false;
    this.viewMode = "grid";
    this.previewPost = null;
    this.Number = Number;
    this.currentPage = 1;
    this.pageSize = 9;
    this.pageSizeOptions = [9, 18, 36, 72];
    this.statusOptions = [
      { value: "all", label: "All Status" }
    ];
    this.categoryOptions = [
      { value: "all", label: "All Categories" }
    ];
    this.posts = [];
  }
  ngOnInit() {
    this.loadDropdownOptions();
    this.loadPosts();
    this.loadCategories();
  }
  get stats() {
    const total = this.posts.length;
    const published = this.posts.filter((p) => p.status === "published").length;
    const pending = this.posts.filter((p) => p.status === "pending" || p.status === "draft").length;
    const views = this.posts.reduce((sum, p) => sum + (p.views || 0), 0);
    return { total, published, pending, views };
  }
  loadDropdownOptions() {
    this.dropdownService.getGroupOptions("blogStatus").pipe(take(1)).subscribe((opts) => {
      if (opts.length === 0)
        return;
      this.statusOptions = [
        { value: "all", label: "All Status" },
        ...opts.map((opt) => ({ value: opt.value, label: opt.label }))
      ];
    });
  }
  loadPosts() {
    return __async(this, null, function* () {
      this.isLoading = true;
      this.postEditorService.getAllPosts().subscribe({
        next: (res) => {
          this.posts = (res || []).map((post) => ({
            id: post.id,
            title: post.title || "Untitled",
            excerpt: post.excerpt || "",
            content: post.content,
            author: post.author_name || "Admin",
            category: post.category_name || post.category || "General",
            category_name: post.category_name,
            status: post.status || "draft",
            views: post.views || 0,
            comments: 0,
            publishDate: this.formatDate(post.published_at || post.created_at),
            image: post.featured_image ? this.media.resolve(post.featured_image) : "",
            featured_image: post.featured_image ? this.media.resolve(post.featured_image) : "",
            tags: post.tags || [],
            authorType: String(post.author_type || "admin").toLowerCase() === "user" ? "user" : "admin"
          }));
          this.isLoading = false;
        },
        error: (error) => {
          this.isLoading = false;
          this.showToast("Failed to load posts", "danger");
        }
      });
    });
  }
  loadCategories() {
    return __async(this, null, function* () {
      this.postEditorService.getCategories().subscribe({
        next: (categories) => {
          this.categoryOptions = [
            { value: "all", label: "All Categories" },
            ...(categories || []).map((cat) => ({
              value: cat.slug || cat.name.toLowerCase().replace(/\s+/g, "-"),
              label: cat.name
            }))
          ];
        },
        error: (error) => {
        }
      });
    });
  }
  get filteredPosts() {
    let filtered = this.posts;
    if (this.selectedStatus !== "all") {
      filtered = filtered.filter((p) => p.status === this.selectedStatus);
    }
    if (this.selectedCategory !== "all") {
      filtered = filtered.filter((p) => {
        const categorySlug = (p.category || "").toLowerCase().replace(/\s+/g, "-");
        return categorySlug === this.selectedCategory || (p.category_name || "").toLowerCase() === this.selectedCategory;
      });
    }
    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter((p) => (p.title || "").toLowerCase().includes(query) || (p.excerpt || "").toLowerCase().includes(query) || (p.category || "").toLowerCase().includes(query) || (p.author || "").toLowerCase().includes(query));
    }
    return filtered;
  }
  formatDate(dateString) {
    if (!dateString)
      return "Not published";
    const date = new Date(dateString);
    if (isNaN(date.getTime()))
      return "Not published";
    const options = {
      day: "2-digit",
      month: "short",
      year: "numeric"
    };
    return date.toLocaleDateString("en-GB", options);
  }
  canApprovePost(post) {
    return post.authorType === "user" && (post.status === "pending" || post.status === "rejected");
  }
  canPublishPost(post) {
    if (post.status === "published")
      return false;
    if (post.authorType === "user")
      return post.status === "pending" || post.status === "rejected";
    return post.status === "draft" || post.status === "scheduled";
  }
  getStatusColor(status) {
    switch (status) {
      case "pending":
        return "warning";
      case "published":
        return "success";
      case "draft":
        return "warning";
      case "scheduled":
        return "primary";
      case "rejected":
        return "danger";
      default:
        return "medium";
    }
  }
  createPost() {
    this.router.navigate(["/admin/blog/editor"]);
  }
  editPost(id) {
    this.router.navigate(["/admin/blog/editor", id]);
  }
  openPreview(post) {
    this.previewPost = post;
  }
  closePreview() {
    this.previewPost = null;
  }
  deletePost(id) {
    return __async(this, null, function* () {
      if (window.confirm("Are you sure you want to delete this post? This action cannot be undone.")) {
        this.confirmDelete(id);
      }
    });
  }
  confirmDelete(id) {
    return __async(this, null, function* () {
      this.isLoading = true;
      this.postEditorService.deletePost(id).subscribe({
        next: () => {
          this.isLoading = false;
          this.showToast("Post deleted successfully", "success");
          this.loadPosts();
        },
        error: (error) => {
          this.isLoading = false;
          this.showToast("Failed to delete post", "danger");
        }
      });
    });
  }
  approvePost(post) {
    return __async(this, null, function* () {
      this.isLoading = true;
      this.updatePostStatus(post, "published").subscribe({
        next: () => {
          this.isLoading = false;
          this.showToast("Post approved and published", "success");
          this.loadPosts();
        },
        error: (error) => {
          this.isLoading = false;
          this.showToast("Failed to approve post", "danger");
        }
      });
    });
  }
  rejectPost(post) {
    return __async(this, null, function* () {
      this.isLoading = true;
      this.updatePostStatus(post, "rejected").subscribe({
        next: () => {
          this.isLoading = false;
          this.showToast("Post rejected", "warning");
          this.loadPosts();
        },
        error: (error) => {
          this.isLoading = false;
          this.showToast("Failed to reject post", "danger");
        }
      });
    });
  }
  updatePostStatus(post, status) {
    const formData = new FormData();
    formData.append("title", post.title);
    formData.append("excerpt", post.excerpt);
    formData.append("content", post.content || "");
    formData.append("category", post.category);
    formData.append("status", status);
    formData.append("publishDate", (/* @__PURE__ */ new Date()).toISOString());
    formData.append("author", post.author);
    formData.append("tags", JSON.stringify(post.tags || []));
    if (post.featured_image) {
      formData.append("existingImageUrl", post.featured_image);
    }
    return this.postEditorService.savePost(post.id, formData);
  }
  showToast(message, color = "success") {
    return __async(this, null, function* () {
      const toast = this.notify.show("Operation completed.");
    });
  }
  refreshPosts(event) {
    this.loadPosts();
    if (event) {
      setTimeout(() => {
        event.target.complete();
      }, 1e3);
    }
  }
  publishPost(post) {
    return __async(this, null, function* () {
      this.isLoading = true;
      const formData = new FormData();
      formData.append("title", post.title);
      formData.append("excerpt", post.excerpt);
      formData.append("content", post.content || "");
      formData.append("category", post.category);
      formData.append("status", "published");
      formData.append("publishDate", (/* @__PURE__ */ new Date()).toISOString());
      formData.append("author", post.author);
      formData.append("tags", JSON.stringify(post.tags || []));
      if (post.featured_image) {
        formData.append("existingImageUrl", post.featured_image);
      }
      this.postEditorService.savePost(post.id, formData).subscribe({
        next: () => {
          this.isLoading = false;
          this.showToast("Post published successfully", "success");
          this.loadPosts();
        },
        error: (error) => {
          this.isLoading = false;
          this.showToast("Failed to publish post", "danger");
        }
      });
    });
  }
};
_PostsListComponent.\u0275fac = function PostsListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PostsListComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PostEditor), \u0275\u0275directiveInject(DropdownManagerService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(MediaService));
};
_PostsListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PostsListComponent, selectors: [["app-posts-list"]], decls: 86, vars: 26, consts: [[1, "posts-page"], ["sectionLabel", "Editorial & Content", "title", "Blog Posts & Stories", "subtitle", "Manage stories, editorial schedules, community submissions, and knowledge base articles."], ["slot", "fixed", 3, "ionRefresh"], [1, "metrics-grid"], [1, "metric-card"], [1, "metric-icon", "total"], [1, "bi", "bi-file-earmark-richtext"], [1, "metric-info"], [1, "metric-label"], [1, "metric-val"], [1, "metric-sub"], [1, "metric-icon", "published"], [1, "bi", "bi-check-circle"], [1, "metric-sub", "text-success"], [1, "metric-icon", "pending"], [1, "bi", "bi-clock-history"], [1, "metric-sub", "text-warning"], [1, "metric-icon", "views"], [1, "bi", "bi-eye"], [1, "controls-panel"], [1, "filters-row"], [1, "search-box"], [1, "bi", "bi-search"], ["type", "text", "placeholder", "Search by title, excerpt, author, tag...", 3, "ngModelChange", "ngModel"], ["class", "clear-search", "type", "button", 3, "click", 4, "ngIf"], [1, "filter-group"], [1, "filter-item"], [3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "actions-group"], [1, "view-toggle"], ["type", "button", "title", "Grid View", 3, "click"], [1, "bi", "bi-grid-3x3-gap-fill"], ["type", "button", "title", "Table View", 3, "click"], [1, "bi", "bi-list-ul"], ["class", "btn-app primary", 3, "click", 4, "ngIf"], [1, "filter-meta"], [1, "count-badge"], ["class", "btn-reset-filter", 3, "click", 4, "ngIf"], ["class", "skeleton-grid", 4, "ngIf"], ["class", "empty-state-card", 4, "ngIf"], ["class", "posts-grid", 4, "ngIf"], ["class", "table-container", 4, "ngIf"], ["class", "pagination-shell", 4, "ngIf"], ["class", "preview-backdrop", 3, "click", 4, "ngIf"], ["type", "button", 1, "clear-search", 3, "click"], [1, "bi", "bi-x"], [3, "value"], [1, "btn-app", "primary", 3, "click"], [1, "bi", "bi-plus-lg"], [1, "btn-reset-filter", 3, "click"], [1, "bi", "bi-arrow-counterclockwise"], [1, "skeleton-grid"], ["class", "skeleton-card", 4, "ngFor", "ngForOf"], [1, "skeleton-card"], [1, "skeleton-img"], [1, "skeleton-body"], [1, "skeleton-line", "full"], [1, "skeleton-line", "half"], [1, "skeleton-line", "short"], [1, "empty-state-card"], [1, "empty-icon-wrap"], [1, "bi", "bi-journal-x"], [4, "ngIf"], [1, "empty-actions"], ["class", "btn-app secondary", 3, "click", 4, "ngIf"], [1, "btn-app", "secondary", 3, "click"], [1, "posts-grid"], ["class", "post-card", 4, "ngFor", "ngForOf"], [1, "post-card"], [1, "post-cover"], ["loading", "lazy", "decoding", "async", 3, "error", "src", "alt"], [1, "cover-top-row"], [1, "category-badge"], [1, "status-badge", 3, "ngClass"], [1, "status-dot"], [1, "cover-bottom-overlay"], [1, "post-author"], [1, "bi", 3, "ngClass"], [1, "post-date"], [1, "bi", "bi-calendar-event"], [1, "post-body"], [1, "post-title", 3, "click", "title"], [1, "post-excerpt"], ["class", "post-tags", 4, "ngIf"], [1, "post-footer"], [1, "post-metrics"], ["title", "Total Views", 1, "metric-tag"], [1, "post-actions"], ["title", "Quick Preview", 1, "action-btn", "preview", 3, "click"], ["class", "action-btn edit", "title", "Edit Post", 3, "click", 4, "ngIf"], ["class", "action-btn approve", "title", "Approve & Publish", 3, "click", 4, "ngIf"], ["class", "action-btn publish", "title", "Publish Now", 3, "click", 4, "ngIf"], ["class", "action-btn delete", "title", "Delete Post", 3, "click", 4, "ngIf"], [1, "post-tags"], ["class", "tag-pill", 4, "ngFor", "ngForOf"], ["class", "tag-more", 4, "ngIf"], [1, "tag-pill"], [1, "tag-more"], ["title", "Edit Post", 1, "action-btn", "edit", 3, "click"], [1, "bi", "bi-pencil"], ["title", "Approve & Publish", 1, "action-btn", "approve", 3, "click"], [1, "bi", "bi-check2-circle"], ["title", "Publish Now", 1, "action-btn", "publish", 3, "click"], [1, "bi", "bi-send"], ["title", "Delete Post", 1, "action-btn", "delete", 3, "click"], [1, "bi", "bi-trash3"], [1, "table-container"], [1, "posts-table"], [1, "text-end"], [4, "ngFor", "ngForOf"], [1, "story-cell"], [1, "story-item"], ["alt", "", 1, "story-thumb", 3, "error", "src"], [1, "story-text"], [1, "story-title", 3, "click"], [1, "story-excerpt"], [1, "category-pill-sm"], [1, "author-meta"], [1, "author-name"], [1, "author-badge-sm"], [1, "status-badge-sm", 3, "ngClass"], [1, "text-nowrap", "text-muted"], [1, "text-nowrap"], [1, "table-actions"], ["title", "Preview", 1, "tbl-btn", "preview", 3, "click"], ["class", "tbl-btn edit", "title", "Edit", 3, "click", 4, "ngIf"], ["class", "tbl-btn approve", "title", "Approve", 3, "click", 4, "ngIf"], ["class", "tbl-btn publish", "title", "Publish", 3, "click", 4, "ngIf"], ["class", "tbl-btn delete", "title", "Delete", 3, "click", 4, "ngIf"], ["title", "Edit", 1, "tbl-btn", "edit", 3, "click"], ["title", "Approve", 1, "tbl-btn", "approve", 3, "click"], ["title", "Publish", 1, "tbl-btn", "publish", 3, "click"], ["title", "Delete", 1, "tbl-btn", "delete", 3, "click"], [1, "pagination-shell"], [1, "pagination-inner"], [1, "pagination-info"], [1, "pagination-controls"], [1, "page-size-selector"], [1, "pagination-select", 3, "ngModelChange", "ngModel"], [1, "page-actions"], ["type", "button", "title", "Previous Page", 1, "page-nav-btn", 3, "click", "disabled"], [1, "bi", "bi-chevron-left"], ["type", "button", "title", "Next Page", 1, "page-nav-btn", 3, "click", "disabled"], [1, "bi", "bi-chevron-right"], ["class", "page-ellipsis", 4, "ngIf"], ["class", "page-btn", "type", "button", 3, "active", "click", 4, "ngIf"], [1, "page-ellipsis"], ["type", "button", 1, "page-btn", 3, "click"], [1, "preview-backdrop", 3, "click"], [1, "preview-drawer", 3, "click"], [1, "drawer-header"], [1, "dh-meta"], [1, "drawer-close-btn", 3, "click"], [1, "bi", "bi-x-lg"], [1, "drawer-body"], ["class", "preview-hero-img", 4, "ngIf"], [1, "preview-title"], [1, "preview-byline"], [1, "author-info"], [1, "bi", "bi-person-circle"], [1, "preview-stats-row"], [1, "preview-excerpt-box"], [1, "preview-content-article", 3, "innerHTML"], ["class", "preview-tags-section", 4, "ngIf"], [1, "drawer-footer"], [1, "preview-hero-img"], [3, "src", "alt"], [1, "preview-tags-section"], [1, "tags-cluster"]], template: function PostsListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "app-admin-shell", 1)(2, "ion-refresher", 2);
    \u0275\u0275listener("ionRefresh", function PostsListComponent_Template_ion_refresher_ionRefresh_2_listener($event) {
      return ctx.refreshPosts($event);
    });
    \u0275\u0275element(3, "ion-refresher-content");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "div", 5);
    \u0275\u0275element(7, "i", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 7)(9, "span", 8);
    \u0275\u0275text(10, "Total Stories");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "h3", 9);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 10);
    \u0275\u0275text(14, "Across all categories");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 4)(16, "div", 11);
    \u0275\u0275element(17, "i", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 7)(19, "span", 8);
    \u0275\u0275text(20, "Published");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "h3", 9);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 13);
    \u0275\u0275text(24, "Live on site");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 4)(26, "div", 14);
    \u0275\u0275element(27, "i", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 7)(29, "span", 8);
    \u0275\u0275text(30, "Draft / Pending");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "h3", 9);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 16);
    \u0275\u0275text(34, "Requires attention");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 4)(36, "div", 17);
    \u0275\u0275element(37, "i", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 7)(39, "span", 8);
    \u0275\u0275text(40, "Total Views");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "h3", 9);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span", 10);
    \u0275\u0275text(45, "Reader engagement");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(46, "div", 19)(47, "div", 20)(48, "div", 21);
    \u0275\u0275element(49, "i", 22);
    \u0275\u0275elementStart(50, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function PostsListComponent_Template_input_ngModelChange_50_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function PostsListComponent_Template_input_ngModelChange_50_listener() {
      return ctx.onFilterChange();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(51, PostsListComponent_button_51_Template, 2, 0, "button", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 25)(53, "div", 26)(54, "label");
    \u0275\u0275text(55, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "select", 27);
    \u0275\u0275twoWayListener("ngModelChange", function PostsListComponent_Template_select_ngModelChange_56_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.selectedStatus, $event) || (ctx.selectedStatus = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function PostsListComponent_Template_select_ngModelChange_56_listener() {
      return ctx.onFilterChange();
    });
    \u0275\u0275template(57, PostsListComponent_option_57_Template, 2, 2, "option", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 26)(59, "label");
    \u0275\u0275text(60, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "select", 27);
    \u0275\u0275twoWayListener("ngModelChange", function PostsListComponent_Template_select_ngModelChange_61_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.selectedCategory, $event) || (ctx.selectedCategory = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function PostsListComponent_Template_select_ngModelChange_61_listener() {
      return ctx.onFilterChange();
    });
    \u0275\u0275template(62, PostsListComponent_option_62_Template, 2, 2, "option", 28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(63, "div", 29)(64, "div", 30)(65, "button", 31);
    \u0275\u0275listener("click", function PostsListComponent_Template_button_click_65_listener() {
      return ctx.viewMode = "grid";
    });
    \u0275\u0275element(66, "i", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "button", 33);
    \u0275\u0275listener("click", function PostsListComponent_Template_button_click_67_listener() {
      return ctx.viewMode = "table";
    });
    \u0275\u0275element(68, "i", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(69, PostsListComponent_button_69_Template, 4, 0, "button", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div", 36)(71, "span", 37);
    \u0275\u0275text(72, " Showing ");
    \u0275\u0275elementStart(73, "strong");
    \u0275\u0275text(74);
    \u0275\u0275elementEnd();
    \u0275\u0275text(75, " of ");
    \u0275\u0275elementStart(76, "strong");
    \u0275\u0275text(77);
    \u0275\u0275elementEnd();
    \u0275\u0275text(78, " posts ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(79, PostsListComponent_button_79_Template, 3, 0, "button", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(80, PostsListComponent_div_80_Template, 2, 2, "div", 39)(81, PostsListComponent_div_81_Template, 10, 4, "div", 40)(82, PostsListComponent_div_82_Template, 2, 1, "div", 41)(83, PostsListComponent_div_83_Template, 20, 1, "div", 42)(84, PostsListComponent_div_84_Template, 29, 8, "div", 43)(85, PostsListComponent_div_85_Template, 36, 14, "div", 44);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx.stats.total);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx.stats.published);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx.stats.pending);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 24, ctx.stats.views));
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.searchQuery);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx.selectedStatus);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.statusOptions);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.selectedCategory);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.categoryOptions);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx.viewMode === "grid");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx.viewMode === "table");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.authService.hasPermission("blog.manage"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx.filteredPosts.length);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.posts.length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.searchQuery || ctx.selectedStatus !== "all" || ctx.selectedCategory !== "all");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isLoading && ctx.filteredPosts.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isLoading && ctx.filteredPosts.length > 0 && ctx.viewMode === "grid");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isLoading && ctx.filteredPosts.length > 0 && ctx.viewMode === "table");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isLoading && ctx.filteredPosts.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.previewPost);
  }
}, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, AdminShellComponent, UpperCasePipe, DecimalPipe, TitleCasePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.posts-page[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n.metrics-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.metric-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: var(--app-radius-lg, 16px);\n  padding: 18px 20px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  box-shadow: var(--app-shadow-soft, 0 4px 16px rgba(0, 0, 0, 0.04));\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.metric-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--app-shadow, 0 8px 24px rgba(0, 0, 0, 0.08));\n}\n.metric-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 14px;\n  display: grid;\n  place-items: center;\n  font-size: 1.35rem;\n  flex-shrink: 0;\n}\n.metric-icon.total[_ngcontent-%COMP%] {\n  background: rgba(29, 122, 109, 0.12);\n  color: var(--app-accent, #1d7a6d);\n}\n.metric-icon.published[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.12);\n  color: #16a34a;\n}\n.metric-icon.pending[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n  color: #d97706;\n}\n.metric-icon.views[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.12);\n  color: #4f46e5;\n}\n.metric-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.metric-info[_ngcontent-%COMP%]   .metric-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--app-ink-muted, #64748b);\n}\n.metric-info[_ngcontent-%COMP%]   .metric-val[_ngcontent-%COMP%] {\n  margin: 2px 0 0;\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: var(--app-ink, #0f172a);\n  line-height: 1.2;\n}\n.metric-info[_ngcontent-%COMP%]   .metric-sub[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--app-ink-muted, #64748b);\n  margin-top: 2px;\n}\n.controls-panel[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: var(--app-radius-lg, 16px);\n  padding: 16px 20px;\n  margin-bottom: 24px;\n  box-shadow: var(--app-shadow-soft, 0 4px 16px rgba(0, 0, 0, 0.04));\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.filters-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: #f8fafc;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: 12px;\n  padding: 8px 14px;\n  flex: 1 1 280px;\n  min-width: 240px;\n  transition: border-color 0.15s ease, background 0.15s ease;\n}\n.search-box[_ngcontent-%COMP%]:focus-within {\n  background: #ffffff;\n  border-color: var(--app-accent, #1d7a6d);\n  box-shadow: 0 0 0 3px rgba(29, 122, 109, 0.12);\n}\n.search-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--app-ink-muted, #64748b);\n  font-size: 0.95rem;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  outline: none;\n  width: 100%;\n  font-size: 0.9rem;\n  color: var(--app-ink, #0f172a);\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.search-box[_ngcontent-%COMP%]   .clear-search[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  color: #94a3b8;\n  cursor: pointer;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  font-size: 1rem;\n}\n.search-box[_ngcontent-%COMP%]   .clear-search[_ngcontent-%COMP%]:hover {\n  color: var(--app-ink, #0f172a);\n}\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.filter-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.filter-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--app-ink-muted, #64748b);\n}\n.filter-item[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border: 1px solid var(--app-border, #e2e8f0);\n  background: #f8fafc;\n  border-radius: 10px;\n  padding: 7px 12px;\n  font-size: 0.85rem;\n  color: var(--app-ink, #0f172a);\n  outline: none;\n  cursor: pointer;\n  min-width: 140px;\n  transition: all 0.15s ease;\n}\n.filter-item[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  background: #ffffff;\n  border-color: var(--app-accent, #1d7a6d);\n}\n.actions-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.view-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  background: #f1f5f9;\n  border-radius: 10px;\n  padding: 3px;\n  gap: 2px;\n}\n.view-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  color: #64748b;\n  padding: 6px 10px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 0.95rem;\n  display: grid;\n  place-items: center;\n  transition: all 0.15s ease;\n}\n.view-toggle[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: var(--app-accent, #1d7a6d);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.filter-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-top: 1px solid #f1f5f9;\n  padding-top: 10px;\n  font-size: 0.82rem;\n  color: var(--app-ink-muted, #64748b);\n}\n.filter-meta[_ngcontent-%COMP%]   .btn-reset-filter[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  color: var(--app-accent, #1d7a6d);\n  font-weight: 600;\n  cursor: pointer;\n  padding: 0;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.filter-meta[_ngcontent-%COMP%]   .btn-reset-filter[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.posts-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 20px;\n  margin-bottom: 30px;\n}\n.post-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: var(--app-radius-lg, 16px);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  box-shadow: var(--app-shadow-soft, 0 4px 16px rgba(0, 0, 0, 0.04));\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease,\n    border-color 0.2s ease;\n}\n.post-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: var(--app-shadow, 0 10px 28px rgba(0, 0, 0, 0.08));\n  border-color: #cbd5e1;\n}\n.post-cover[_ngcontent-%COMP%] {\n  position: relative;\n  height: 190px;\n  background: #f1f5f9;\n  overflow: hidden;\n}\n.post-cover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.35s ease;\n}\n.post-cover[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.04);\n}\n.cover-top-row[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n  right: 12px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  z-index: 2;\n}\n.category-badge[_ngcontent-%COMP%] {\n  background: rgba(15, 23, 42, 0.75);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  color: #ffffff;\n  font-size: 0.75rem;\n  font-weight: 700;\n  padding: 4px 10px;\n  border-radius: 999px;\n  letter-spacing: 0.02em;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  padding: 4px 10px;\n  border-radius: 999px;\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n}\n.status-badge[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n}\n.status-badge.status-published[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.9);\n  color: #ffffff;\n}\n.status-badge.status-published[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: #ffffff;\n}\n.status-badge.status-draft[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.9);\n  color: #ffffff;\n}\n.status-badge.status-draft[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: #ffffff;\n}\n.status-badge.status-pending[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.9);\n  color: #ffffff;\n}\n.status-badge.status-pending[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: #ffffff;\n}\n.status-badge.status-scheduled[_ngcontent-%COMP%] {\n  background: rgba(139, 92, 246, 0.9);\n  color: #ffffff;\n}\n.status-badge.status-scheduled[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: #ffffff;\n}\n.status-badge.status-rejected[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.9);\n  color: #ffffff;\n}\n.status-badge.status-rejected[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: #ffffff;\n}\n.cover-bottom-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 24px 14px 8px;\n  background:\n    linear-gradient(\n      to top,\n      rgba(0, 0, 0, 0.75) 0%,\n      transparent 100%);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: #ffffff;\n  font-size: 0.75rem;\n  font-weight: 500;\n  z-index: 2;\n}\n.cover-bottom-overlay[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n}\n.post-body[_ngcontent-%COMP%] {\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n.post-title[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: var(--app-ink, #0f172a);\n  margin: 0 0 8px;\n  line-height: 1.35;\n  cursor: pointer;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.post-title[_ngcontent-%COMP%]:hover {\n  color: var(--app-accent, #1d7a6d);\n}\n.post-excerpt[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--app-ink-muted, #64748b);\n  line-height: 1.5;\n  margin: 0 0 12px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  flex: 1;\n}\n.post-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-bottom: 14px;\n}\n.post-tags[_ngcontent-%COMP%]   .tag-pill[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n  font-size: 0.72rem;\n  font-weight: 600;\n  padding: 2px 8px;\n  border-radius: 6px;\n}\n.post-tags[_ngcontent-%COMP%]   .tag-more[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #94a3b8;\n  font-weight: 600;\n  padding: 2px 4px;\n}\n.post-footer[_ngcontent-%COMP%] {\n  border-top: 1px solid #f1f5f9;\n  padding-top: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.post-metrics[_ngcontent-%COMP%]   .metric-tag[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--app-ink-muted, #64748b);\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.post-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.action-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  border: 1px solid var(--app-border, #e2e8f0);\n  background: #ffffff;\n  color: var(--app-ink, #0f172a);\n  display: grid;\n  place-items: center;\n  font-size: 0.85rem;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.action-btn.preview[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n.action-btn.edit[_ngcontent-%COMP%]:hover {\n  background: rgba(29, 122, 109, 0.1);\n  color: var(--app-accent, #1d7a6d);\n  border-color: var(--app-accent, #1d7a6d);\n}\n.action-btn.approve[_ngcontent-%COMP%]:hover {\n  background: rgba(34, 197, 94, 0.1);\n  color: #16a34a;\n  border-color: #16a34a;\n}\n.action-btn.publish[_ngcontent-%COMP%]:hover {\n  background: rgba(59, 130, 246, 0.1);\n  color: #2563eb;\n  border-color: #2563eb;\n}\n.action-btn.delete[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.1);\n  color: #dc2626;\n  border-color: #dc2626;\n}\n.table-container[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: var(--app-radius-lg, 16px);\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  box-shadow: var(--app-shadow-soft, 0 4px 16px rgba(0, 0, 0, 0.04));\n  margin-bottom: 30px;\n}\n.posts-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  text-align: left;\n  font-size: 0.88rem;\n}\n.posts-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  color: var(--app-ink-muted, #64748b);\n  font-weight: 700;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--app-border, #e2e8f0);\n}\n.posts-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  border-bottom: 1px solid #f1f5f9;\n  color: var(--app-ink, #0f172a);\n  vertical-align: middle;\n}\n.posts-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.posts-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #fafcff;\n}\n.story-cell[_ngcontent-%COMP%] {\n  min-width: 280px;\n}\n.story-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.story-thumb[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 42px;\n  border-radius: 8px;\n  object-fit: cover;\n  flex-shrink: 0;\n  border: 1px solid var(--app-border, #e2e8f0);\n}\n.story-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.story-text[_ngcontent-%COMP%]   .story-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--app-ink, #0f172a);\n  cursor: pointer;\n  line-height: 1.3;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.story-text[_ngcontent-%COMP%]   .story-title[_ngcontent-%COMP%]:hover {\n  color: var(--app-accent, #1d7a6d);\n}\n.story-text[_ngcontent-%COMP%]   .story-excerpt[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--app-ink-muted, #64748b);\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.category-pill-sm[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #334155;\n  font-size: 0.75rem;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 999px;\n  white-space: nowrap;\n}\n.author-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.author-meta[_ngcontent-%COMP%]   .author-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.85rem;\n}\n.author-meta[_ngcontent-%COMP%]   .author-badge-sm[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 700;\n  color: var(--app-accent, #1d7a6d);\n  letter-spacing: 0.04em;\n}\n.author-meta[_ngcontent-%COMP%]   .author-badge-sm.user[_ngcontent-%COMP%] {\n  color: #6366f1;\n}\n.status-badge-sm[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  padding: 3px 8px;\n  border-radius: 999px;\n}\n.status-badge-sm[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n}\n.status-badge-sm.status-published[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.12);\n  color: #16a34a;\n}\n.status-badge-sm.status-published[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: #16a34a;\n}\n.status-badge-sm.status-draft[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n  color: #d97706;\n}\n.status-badge-sm.status-draft[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: #d97706;\n}\n.status-badge-sm.status-pending[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.12);\n  color: #2563eb;\n}\n.status-badge-sm.status-pending[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: #2563eb;\n}\n.status-badge-sm.status-scheduled[_ngcontent-%COMP%] {\n  background: rgba(139, 92, 246, 0.12);\n  color: #7c3aed;\n}\n.status-badge-sm.status-scheduled[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: #7c3aed;\n}\n.status-badge-sm.status-rejected[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n  color: #dc2626;\n}\n.status-badge-sm.status-rejected[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: #dc2626;\n}\n.table-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 6px;\n}\n.tbl-btn[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 6px;\n  border: 1px solid var(--app-border, #e2e8f0);\n  background: #ffffff;\n  color: var(--app-ink, #0f172a);\n  display: grid;\n  place-items: center;\n  font-size: 0.8rem;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.tbl-btn.preview[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n}\n.tbl-btn.edit[_ngcontent-%COMP%]:hover {\n  background: rgba(29, 122, 109, 0.1);\n  color: var(--app-accent, #1d7a6d);\n  border-color: var(--app-accent, #1d7a6d);\n}\n.tbl-btn.approve[_ngcontent-%COMP%]:hover {\n  background: rgba(34, 197, 94, 0.1);\n  color: #16a34a;\n}\n.tbl-btn.publish[_ngcontent-%COMP%]:hover {\n  background: rgba(59, 130, 246, 0.1);\n  color: #2563eb;\n}\n.tbl-btn.delete[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.1);\n  color: #dc2626;\n}\n.skeleton-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 20px;\n}\n.skeleton-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: var(--app-radius-lg, 16px);\n  overflow: hidden;\n}\n.skeleton-card[_ngcontent-%COMP%]   .skeleton-img[_ngcontent-%COMP%] {\n  height: 180px;\n  background:\n    linear-gradient(\n      90deg,\n      #f1f5f9 25%,\n      #e2e8f0 50%,\n      #f1f5f9 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.5s infinite;\n}\n.skeleton-card[_ngcontent-%COMP%]   .skeleton-body[_ngcontent-%COMP%] {\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.skeleton-card[_ngcontent-%COMP%]   .skeleton-line[_ngcontent-%COMP%] {\n  height: 14px;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #f1f5f9 25%,\n      #e2e8f0 50%,\n      #f1f5f9 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.5s infinite;\n}\n.skeleton-card[_ngcontent-%COMP%]   .skeleton-line.full[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.skeleton-card[_ngcontent-%COMP%]   .skeleton-line.half[_ngcontent-%COMP%] {\n  width: 60%;\n}\n.skeleton-card[_ngcontent-%COMP%]   .skeleton-line.short[_ngcontent-%COMP%] {\n  width: 35%;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: -200% 0;\n  }\n  100% {\n    background-position: 200% 0;\n  }\n}\n.empty-state-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: var(--app-radius-lg, 16px);\n  padding: 48px 24px;\n  text-align: center;\n  box-shadow: var(--app-shadow-soft, 0 4px 16px rgba(0, 0, 0, 0.04));\n  max-width: 480px;\n  margin: 30px auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.empty-state-card[_ngcontent-%COMP%]   .empty-icon-wrap[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background: rgba(29, 122, 109, 0.1);\n  color: var(--app-accent, #1d7a6d);\n  display: grid;\n  place-items: center;\n  font-size: 1.8rem;\n  margin-bottom: 16px;\n}\n.empty-state-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 1.25rem;\n  font-weight: 700;\n}\n.empty-state-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 20px;\n  font-size: 0.9rem;\n  color: var(--app-ink-muted, #64748b);\n  line-height: 1.5;\n}\n.empty-state-card[_ngcontent-%COMP%]   .empty-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.preview-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.6);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  z-index: 9999;\n  display: flex;\n  justify-content: flex-end;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease;\n}\n.preview-drawer[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 640px;\n  background: #ffffff;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.15);\n  animation: _ngcontent-%COMP%_slideLeft 0.25s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.drawer-header[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--app-border, #e2e8f0);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.drawer-header[_ngcontent-%COMP%]   .dh-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.drawer-header[_ngcontent-%COMP%]   .drawer-close-btn[_ngcontent-%COMP%] {\n  border: none;\n  background: #f1f5f9;\n  color: #475569;\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  cursor: pointer;\n}\n.drawer-header[_ngcontent-%COMP%]   .drawer-close-btn[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n.drawer-body[_ngcontent-%COMP%] {\n  padding: 24px;\n  overflow-y: auto;\n  flex: 1;\n}\n.preview-hero-img[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  border-radius: 12px;\n  overflow: hidden;\n  height: 240px;\n  border: 1px solid var(--app-border, #e2e8f0);\n}\n.preview-hero-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.preview-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: var(--app-ink, #0f172a);\n  margin: 0 0 14px;\n  line-height: 1.3;\n}\n.preview-byline[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid #f1f5f9;\n  padding-bottom: 14px;\n  margin-bottom: 16px;\n}\n.preview-byline[_ngcontent-%COMP%]   .author-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.preview-byline[_ngcontent-%COMP%]   .author-info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  color: var(--app-accent, #1d7a6d);\n}\n.preview-byline[_ngcontent-%COMP%]   .author-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.preview-byline[_ngcontent-%COMP%]   .author-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.preview-byline[_ngcontent-%COMP%]   .author-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--app-ink-muted, #64748b);\n  font-size: 0.75rem;\n}\n.preview-byline[_ngcontent-%COMP%]   .preview-stats-row[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--app-ink-muted, #64748b);\n  font-weight: 600;\n}\n.preview-excerpt-box[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-left: 4px solid var(--app-accent, #1d7a6d);\n  padding: 12px 16px;\n  border-radius: 0 8px 8px 0;\n  margin-bottom: 20px;\n}\n.preview-excerpt-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.95rem;\n  font-style: italic;\n  color: #334155;\n  line-height: 1.5;\n}\n.preview-content-article[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  line-height: 1.7;\n  color: #1e293b;\n  white-space: pre-wrap;\n  margin-bottom: 24px;\n}\n.preview-tags-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  border-top: 1px solid #f1f5f9;\n  padding-top: 16px;\n}\n.preview-tags-section[_ngcontent-%COMP%]   .tags-cluster[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.drawer-footer[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  border-top: 1px solid var(--app-border, #e2e8f0);\n  background: #f8fafc;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideLeft {\n  from {\n    transform: translateX(100%);\n  }\n  to {\n    transform: translateX(0);\n  }\n}\n@media (max-width: 768px) {\n  .controls-panel[_ngcontent-%COMP%] {\n    padding: 14px;\n  }\n  .filters-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .filter-group[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .filter-item[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .actions-group[_ngcontent-%COMP%] {\n    justify-content: space-between;\n  }\n  .posts-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .preview-drawer[_ngcontent-%COMP%] {\n    max-width: 100%;\n    height: 90vh;\n    margin-top: auto;\n    border-radius: 20px 20px 0 0;\n  }\n}\n/*# sourceMappingURL=posts-list.component.css.map */"] });
var PostsListComponent = _PostsListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PostsListComponent, [{
    type: Component,
    args: [{ selector: "app-posts-list", standalone: true, imports: [CommonModule, FormsModule, AdminShellComponent], schemas: [CUSTOM_ELEMENTS_SCHEMA], template: `<div class="posts-page">
  <app-admin-shell sectionLabel="Editorial & Content" title="Blog Posts & Stories"
    subtitle="Manage stories, editorial schedules, community submissions, and knowledge base articles.">

    <ion-refresher slot="fixed" (ionRefresh)="refreshPosts($event)">
      <ion-refresher-content></ion-refresher-content>
    </ion-refresher>

    <!-- METRICS CARDS -->
    <div class="metrics-grid">
      <div class="metric-card">
        <div class="metric-icon total">
          <i class="bi bi-file-earmark-richtext"></i>
        </div>
        <div class="metric-info">
          <span class="metric-label">Total Stories</span>
          <h3 class="metric-val">{{ stats.total }}</h3>
          <span class="metric-sub">Across all categories</span>
        </div>
      </div>

      <div class="metric-card">
        <div class="metric-icon published">
          <i class="bi bi-check-circle"></i>
        </div>
        <div class="metric-info">
          <span class="metric-label">Published</span>
          <h3 class="metric-val">{{ stats.published }}</h3>
          <span class="metric-sub text-success">Live on site</span>
        </div>
      </div>

      <div class="metric-card">
        <div class="metric-icon pending">
          <i class="bi bi-clock-history"></i>
        </div>
        <div class="metric-info">
          <span class="metric-label">Draft / Pending</span>
          <h3 class="metric-val">{{ stats.pending }}</h3>
          <span class="metric-sub text-warning">Requires attention</span>
        </div>
      </div>

      <div class="metric-card">
        <div class="metric-icon views">
          <i class="bi bi-eye"></i>
        </div>
        <div class="metric-info">
          <span class="metric-label">Total Views</span>
          <h3 class="metric-val">{{ stats.views | number }}</h3>
          <span class="metric-sub">Reader engagement</span>
        </div>
      </div>
    </div>

    <!-- CONTROLS & FILTER BAR -->
    <div class="controls-panel">
      <div class="filters-row">
        <div class="search-box">
          <i class="bi bi-search"></i>
          <input type="text" [(ngModel)]="searchQuery" (ngModelChange)="onFilterChange()" placeholder="Search by title, excerpt, author, tag..." />
          <button *ngIf="searchQuery" class="clear-search" (click)="searchQuery = ''; onFilterChange()" type="button">
            <i class="bi bi-x"></i>
          </button>
        </div>

        <div class="filter-group">
          <div class="filter-item">
            <label>Status</label>
            <select [(ngModel)]="selectedStatus" (ngModelChange)="onFilterChange()">
              <option *ngFor="let opt of statusOptions" [value]="opt.value">{{ opt.label }}</option>
            </select>
          </div>

          <div class="filter-item">
            <label>Category</label>
            <select [(ngModel)]="selectedCategory" (ngModelChange)="onFilterChange()">
              <option *ngFor="let opt of categoryOptions" [value]="opt.value">{{ opt.label }}</option>
            </select>
          </div>
        </div>

        <div class="actions-group">
          <div class="view-toggle">
            <button type="button" [class.active]="viewMode === 'grid'" (click)="viewMode = 'grid'" title="Grid View">
              <i class="bi bi-grid-3x3-gap-fill"></i>
            </button>
            <button type="button" [class.active]="viewMode === 'table'" (click)="viewMode = 'table'" title="Table View">
              <i class="bi bi-list-ul"></i>
            </button>
          </div>

          <button *ngIf="authService.hasPermission('blog.manage')" class="btn-app primary" (click)="createPost()">
            <i class="bi bi-plus-lg"></i>
            <span>New Story</span>
          </button>
        </div>
      </div>

      <div class="filter-meta">
        <span class="count-badge">
          Showing <strong>{{ filteredPosts.length }}</strong> of <strong>{{ posts.length }}</strong> posts
        </span>
        <button *ngIf="searchQuery || selectedStatus !== 'all' || selectedCategory !== 'all'" 
                class="btn-reset-filter" 
                (click)="resetFilters()">
          <i class="bi bi-arrow-counterclockwise"></i> Reset filters
        </button>
      </div>
    </div>

    <!-- LOADING SKELETONS -->
    <div *ngIf="isLoading" class="skeleton-grid">
      <div class="skeleton-card" *ngFor="let item of [1,2,3,4,5,6]">
        <div class="skeleton-img"></div>
        <div class="skeleton-body">
          <div class="skeleton-line full"></div>
          <div class="skeleton-line half"></div>
          <div class="skeleton-line short"></div>
        </div>
      </div>
    </div>

    <!-- EMPTY STATE -->
    <div *ngIf="!isLoading && filteredPosts.length === 0" class="empty-state-card">
      <div class="empty-icon-wrap">
        <i class="bi bi-journal-x"></i>
      </div>
      <h3>No Blog Posts Found</h3>
      <p *ngIf="searchQuery || selectedStatus !== 'all' || selectedCategory !== 'all'">
        No posts matched your current search filters. Try clearing your filters or changing search keywords.
      </p>
      <p *ngIf="!searchQuery && selectedStatus === 'all' && selectedCategory === 'all'">
        You haven't written any blog articles yet. Start publishing inspiring travel stories and guides!
      </p>
      <div class="empty-actions">
        <button *ngIf="searchQuery || selectedStatus !== 'all' || selectedCategory !== 'all'"
                class="btn-app secondary" 
                (click)="searchQuery = ''; selectedStatus = 'all'; selectedCategory = 'all'">
          Reset Filters
        </button>
        <button *ngIf="authService.hasPermission('blog.manage')" class="btn-app primary" (click)="createPost()">
          <i class="bi bi-plus-lg"></i> Create First Post
        </button>
      </div>
    </div>

    <!-- GRID VIEW -->
    <div class="posts-grid" *ngIf="!isLoading && filteredPosts.length > 0 && viewMode === 'grid'">
      <div class="post-card" *ngFor="let post of paginatedPosts">
        <div class="post-cover">
          <img loading="lazy" decoding="async" [src]="post.image" [alt]="post.title"
            (error)="post.image = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600'" />
          
          <div class="cover-top-row">
            <span class="category-badge">{{ post.category }}</span>
            <span class="status-badge" [ngClass]="'status-' + post.status">
              <span class="status-dot"></span>
              {{ post.status | titlecase }}
            </span>
          </div>

          <div class="cover-bottom-overlay">
            <span class="post-author">
              <i class="bi" [ngClass]="post.authorType === 'user' ? 'bi-person' : 'bi-shield-check'"></i>
              {{ post.author }}
            </span>
            <span class="post-date">
              <i class="bi bi-calendar-event"></i>
              {{ post.publishDate }}
            </span>
          </div>
        </div>

        <div class="post-body">
          <h3 class="post-title" (click)="openPreview(post)" [title]="post.title">{{ post.title }}</h3>
          <p class="post-excerpt">{{ post.excerpt }}</p>

          <div class="post-tags" *ngIf="post.tags && post.tags.length > 0">
            <span class="tag-pill" *ngFor="let tag of post.tags.slice(0, 3)">#{{ tag }}</span>
            <span class="tag-more" *ngIf="post.tags.length > 3">+{{ post.tags.length - 3 }}</span>
          </div>

          <div class="post-footer">
            <div class="post-metrics">
              <span class="metric-tag" title="Total Views"><i class="bi bi-eye"></i> {{ post.views }}</span>
            </div>

            <div class="post-actions">
              <button class="action-btn preview" (click)="openPreview(post)" title="Quick Preview">
                <i class="bi bi-eye"></i>
              </button>

              <button *ngIf="authService.hasPermission('blog.manage')" class="action-btn edit" (click)="editPost(post.id)" title="Edit Post">
                <i class="bi bi-pencil"></i>
              </button>

              <button *ngIf="authService.hasPermission('blog.manage') && canApprovePost(post)" class="action-btn approve" (click)="approvePost(post)" title="Approve & Publish">
                <i class="bi bi-check2-circle"></i>
              </button>

              <button *ngIf="authService.hasPermission('blog.manage') && !canApprovePost(post) && canPublishPost(post)" class="action-btn publish" (click)="publishPost(post)" title="Publish Now">
                <i class="bi bi-send"></i>
              </button>

              <button *ngIf="authService.hasPermission('blog.manage')" class="action-btn delete" (click)="deletePost(post.id)" title="Delete Post">
                <i class="bi bi-trash3"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- TABLE VIEW -->
    <div class="table-container" *ngIf="!isLoading && filteredPosts.length > 0 && viewMode === 'table'">
      <table class="posts-table">
        <thead>
          <tr>
            <th>Story</th>
            <th>Category</th>
            <th>Author</th>
            <th>Status</th>
            <th>Published</th>
            <th>Views</th>
            <th class="text-end">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let post of paginatedPosts">
            <td class="story-cell">
              <div class="story-item">
                <img [src]="post.image" class="story-thumb" alt="" (error)="post.image = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=120'" />
                <div class="story-text">
                  <span class="story-title" (click)="openPreview(post)">{{ post.title }}</span>
                  <span class="story-excerpt">{{ post.excerpt }}</span>
                </div>
              </div>
            </td>
            <td>
              <span class="category-pill-sm">{{ post.category }}</span>
            </td>
            <td>
              <div class="author-meta">
                <span class="author-name">{{ post.author }}</span>
                <span class="author-badge-sm" [class.user]="post.authorType === 'user'">{{ post.authorType | uppercase }}</span>
              </div>
            </td>
            <td>
              <span class="status-badge-sm" [ngClass]="'status-' + post.status">
                <span class="status-dot"></span>
                {{ post.status | titlecase }}
              </span>
            </td>
            <td class="text-nowrap text-muted">{{ post.publishDate }}</td>
            <td class="text-nowrap">
              <strong>{{ post.views }}</strong>
            </td>
            <td>
              <div class="table-actions">
                <button class="tbl-btn preview" (click)="openPreview(post)" title="Preview">
                  <i class="bi bi-eye"></i>
                </button>
                <button *ngIf="authService.hasPermission('blog.manage')" class="tbl-btn edit" (click)="editPost(post.id)" title="Edit">
                  <i class="bi bi-pencil"></i>
                </button>
                <button *ngIf="authService.hasPermission('blog.manage') && canApprovePost(post)" class="tbl-btn approve" (click)="approvePost(post)" title="Approve">
                  <i class="bi bi-check2-circle"></i>
                </button>
                <button *ngIf="authService.hasPermission('blog.manage') && !canApprovePost(post) && canPublishPost(post)" class="tbl-btn publish" (click)="publishPost(post)" title="Publish">
                  <i class="bi bi-send"></i>
                </button>
                <button *ngIf="authService.hasPermission('blog.manage')" class="tbl-btn delete" (click)="deletePost(post.id)" title="Delete">
                  <i class="bi bi-trash3"></i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 PAGINATION CONTROLS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <div class="pagination-shell" *ngIf="!isLoading && filteredPosts.length > 0">
      <div class="pagination-inner">
        <div class="pagination-info">
          Showing <strong>{{ (currentPage - 1) * Number(pageSize) + 1 }}</strong> to
          <strong>{{ Math.min(currentPage * Number(pageSize), filteredPosts.length) }}</strong> of
          <strong>{{ filteredPosts.length }}</strong> articles
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

    <!-- QUICK PREVIEW DRAWER / MODAL -->
    <div class="preview-backdrop" *ngIf="previewPost" (click)="closePreview()">
      <div class="preview-drawer" (click)="$event.stopPropagation()">
        <div class="drawer-header">
          <div class="dh-meta">
            <span class="status-badge" [ngClass]="'status-' + previewPost.status">{{ previewPost.status | titlecase }}</span>
            <span class="category-badge">{{ previewPost.category }}</span>
          </div>
          <button class="drawer-close-btn" (click)="closePreview()">
            <i class="bi bi-x-lg"></i>
          </button>
        </div>

        <div class="drawer-body">
          <div class="preview-hero-img" *ngIf="previewPost.image">
            <img [src]="previewPost.image" [alt]="previewPost.title" />
          </div>

          <h1 class="preview-title">{{ previewPost.title }}</h1>

          <div class="preview-byline">
            <div class="author-info">
              <i class="bi bi-person-circle"></i>
              <div>
                <strong>{{ previewPost.author }}</strong>
                <small>{{ previewPost.publishDate }}</small>
              </div>
            </div>
            <div class="preview-stats-row">
              <span><i class="bi bi-eye"></i> {{ previewPost.views }} Views</span>
            </div>
          </div>

          <div class="preview-excerpt-box">
            <p>{{ previewPost.excerpt }}</p>
          </div>

          <div class="preview-content-article" [innerHTML]="previewPost.content || '<em>No article content available.</em>'"></div>

          <div class="preview-tags-section" *ngIf="previewPost.tags && previewPost.tags.length > 0">
            <strong>Tags:</strong>
            <div class="tags-cluster">
              <span class="tag-pill" *ngFor="let t of previewPost.tags">#{{ t }}</span>
            </div>
          </div>
        </div>

        <div class="drawer-footer">
          <button class="btn-app secondary" (click)="closePreview()">Close</button>
          <button *ngIf="authService.hasPermission('blog.manage')" class="btn-app primary" (click)="editPost(previewPost.id); closePreview()">
            <i class="bi bi-pencil"></i> Edit Story
          </button>
        </div>
      </div>
    </div>

  </app-admin-shell>
</div>

`, styles: ["/* src/app/blog/posts-list/posts-list.component.scss */\n:host {\n  display: block;\n}\n.posts-page {\n  --background: transparent;\n}\n.metrics-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.metric-card {\n  background: #ffffff;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: var(--app-radius-lg, 16px);\n  padding: 18px 20px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  box-shadow: var(--app-shadow-soft, 0 4px 16px rgba(0, 0, 0, 0.04));\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.metric-card:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--app-shadow, 0 8px 24px rgba(0, 0, 0, 0.08));\n}\n.metric-icon {\n  width: 48px;\n  height: 48px;\n  border-radius: 14px;\n  display: grid;\n  place-items: center;\n  font-size: 1.35rem;\n  flex-shrink: 0;\n}\n.metric-icon.total {\n  background: rgba(29, 122, 109, 0.12);\n  color: var(--app-accent, #1d7a6d);\n}\n.metric-icon.published {\n  background: rgba(34, 197, 94, 0.12);\n  color: #16a34a;\n}\n.metric-icon.pending {\n  background: rgba(245, 158, 11, 0.12);\n  color: #d97706;\n}\n.metric-icon.views {\n  background: rgba(99, 102, 241, 0.12);\n  color: #4f46e5;\n}\n.metric-info {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.metric-info .metric-label {\n  font-size: 0.8rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--app-ink-muted, #64748b);\n}\n.metric-info .metric-val {\n  margin: 2px 0 0;\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: var(--app-ink, #0f172a);\n  line-height: 1.2;\n}\n.metric-info .metric-sub {\n  font-size: 0.75rem;\n  color: var(--app-ink-muted, #64748b);\n  margin-top: 2px;\n}\n.controls-panel {\n  background: #ffffff;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: var(--app-radius-lg, 16px);\n  padding: 16px 20px;\n  margin-bottom: 24px;\n  box-shadow: var(--app-shadow-soft, 0 4px 16px rgba(0, 0, 0, 0.04));\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.filters-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.search-box {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: #f8fafc;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: 12px;\n  padding: 8px 14px;\n  flex: 1 1 280px;\n  min-width: 240px;\n  transition: border-color 0.15s ease, background 0.15s ease;\n}\n.search-box:focus-within {\n  background: #ffffff;\n  border-color: var(--app-accent, #1d7a6d);\n  box-shadow: 0 0 0 3px rgba(29, 122, 109, 0.12);\n}\n.search-box i {\n  color: var(--app-ink-muted, #64748b);\n  font-size: 0.95rem;\n}\n.search-box input {\n  border: none;\n  background: transparent;\n  outline: none;\n  width: 100%;\n  font-size: 0.9rem;\n  color: var(--app-ink, #0f172a);\n}\n.search-box input::placeholder {\n  color: #94a3b8;\n}\n.search-box .clear-search {\n  border: none;\n  background: transparent;\n  color: #94a3b8;\n  cursor: pointer;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  font-size: 1rem;\n}\n.search-box .clear-search:hover {\n  color: var(--app-ink, #0f172a);\n}\n.filter-group {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.filter-item {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.filter-item label {\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--app-ink-muted, #64748b);\n}\n.filter-item select {\n  border: 1px solid var(--app-border, #e2e8f0);\n  background: #f8fafc;\n  border-radius: 10px;\n  padding: 7px 12px;\n  font-size: 0.85rem;\n  color: var(--app-ink, #0f172a);\n  outline: none;\n  cursor: pointer;\n  min-width: 140px;\n  transition: all 0.15s ease;\n}\n.filter-item select:focus {\n  background: #ffffff;\n  border-color: var(--app-accent, #1d7a6d);\n}\n.actions-group {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.view-toggle {\n  display: flex;\n  background: #f1f5f9;\n  border-radius: 10px;\n  padding: 3px;\n  gap: 2px;\n}\n.view-toggle button {\n  border: none;\n  background: transparent;\n  color: #64748b;\n  padding: 6px 10px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 0.95rem;\n  display: grid;\n  place-items: center;\n  transition: all 0.15s ease;\n}\n.view-toggle button.active {\n  background: #ffffff;\n  color: var(--app-accent, #1d7a6d);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.filter-meta {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-top: 1px solid #f1f5f9;\n  padding-top: 10px;\n  font-size: 0.82rem;\n  color: var(--app-ink-muted, #64748b);\n}\n.filter-meta .btn-reset-filter {\n  border: none;\n  background: transparent;\n  color: var(--app-accent, #1d7a6d);\n  font-weight: 600;\n  cursor: pointer;\n  padding: 0;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.filter-meta .btn-reset-filter:hover {\n  text-decoration: underline;\n}\n.posts-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 20px;\n  margin-bottom: 30px;\n}\n.post-card {\n  background: #ffffff;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: var(--app-radius-lg, 16px);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  box-shadow: var(--app-shadow-soft, 0 4px 16px rgba(0, 0, 0, 0.04));\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease,\n    border-color 0.2s ease;\n}\n.post-card:hover {\n  transform: translateY(-3px);\n  box-shadow: var(--app-shadow, 0 10px 28px rgba(0, 0, 0, 0.08));\n  border-color: #cbd5e1;\n}\n.post-cover {\n  position: relative;\n  height: 190px;\n  background: #f1f5f9;\n  overflow: hidden;\n}\n.post-cover img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.35s ease;\n}\n.post-cover:hover img {\n  transform: scale(1.04);\n}\n.cover-top-row {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n  right: 12px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  z-index: 2;\n}\n.category-badge {\n  background: rgba(15, 23, 42, 0.75);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  color: #ffffff;\n  font-size: 0.75rem;\n  font-weight: 700;\n  padding: 4px 10px;\n  border-radius: 999px;\n  letter-spacing: 0.02em;\n}\n.status-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  padding: 4px 10px;\n  border-radius: 999px;\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n}\n.status-badge .status-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n}\n.status-badge.status-published {\n  background: rgba(34, 197, 94, 0.9);\n  color: #ffffff;\n}\n.status-badge.status-published .status-dot {\n  background: #ffffff;\n}\n.status-badge.status-draft {\n  background: rgba(245, 158, 11, 0.9);\n  color: #ffffff;\n}\n.status-badge.status-draft .status-dot {\n  background: #ffffff;\n}\n.status-badge.status-pending {\n  background: rgba(59, 130, 246, 0.9);\n  color: #ffffff;\n}\n.status-badge.status-pending .status-dot {\n  background: #ffffff;\n}\n.status-badge.status-scheduled {\n  background: rgba(139, 92, 246, 0.9);\n  color: #ffffff;\n}\n.status-badge.status-scheduled .status-dot {\n  background: #ffffff;\n}\n.status-badge.status-rejected {\n  background: rgba(239, 68, 68, 0.9);\n  color: #ffffff;\n}\n.status-badge.status-rejected .status-dot {\n  background: #ffffff;\n}\n.cover-bottom-overlay {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 24px 14px 8px;\n  background:\n    linear-gradient(\n      to top,\n      rgba(0, 0, 0, 0.75) 0%,\n      transparent 100%);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: #ffffff;\n  font-size: 0.75rem;\n  font-weight: 500;\n  z-index: 2;\n}\n.cover-bottom-overlay span {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n}\n.post-body {\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n.post-title {\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: var(--app-ink, #0f172a);\n  margin: 0 0 8px;\n  line-height: 1.35;\n  cursor: pointer;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.post-title:hover {\n  color: var(--app-accent, #1d7a6d);\n}\n.post-excerpt {\n  font-size: 0.85rem;\n  color: var(--app-ink-muted, #64748b);\n  line-height: 1.5;\n  margin: 0 0 12px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  flex: 1;\n}\n.post-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-bottom: 14px;\n}\n.post-tags .tag-pill {\n  background: #f1f5f9;\n  color: #475569;\n  font-size: 0.72rem;\n  font-weight: 600;\n  padding: 2px 8px;\n  border-radius: 6px;\n}\n.post-tags .tag-more {\n  font-size: 0.72rem;\n  color: #94a3b8;\n  font-weight: 600;\n  padding: 2px 4px;\n}\n.post-footer {\n  border-top: 1px solid #f1f5f9;\n  padding-top: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.post-metrics .metric-tag {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--app-ink-muted, #64748b);\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.post-actions {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.action-btn {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  border: 1px solid var(--app-border, #e2e8f0);\n  background: #ffffff;\n  color: var(--app-ink, #0f172a);\n  display: grid;\n  place-items: center;\n  font-size: 0.85rem;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.action-btn.preview:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n.action-btn.edit:hover {\n  background: rgba(29, 122, 109, 0.1);\n  color: var(--app-accent, #1d7a6d);\n  border-color: var(--app-accent, #1d7a6d);\n}\n.action-btn.approve:hover {\n  background: rgba(34, 197, 94, 0.1);\n  color: #16a34a;\n  border-color: #16a34a;\n}\n.action-btn.publish:hover {\n  background: rgba(59, 130, 246, 0.1);\n  color: #2563eb;\n  border-color: #2563eb;\n}\n.action-btn.delete:hover {\n  background: rgba(239, 68, 68, 0.1);\n  color: #dc2626;\n  border-color: #dc2626;\n}\n.table-container {\n  background: #ffffff;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: var(--app-radius-lg, 16px);\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  box-shadow: var(--app-shadow-soft, 0 4px 16px rgba(0, 0, 0, 0.04));\n  margin-bottom: 30px;\n}\n.posts-table {\n  width: 100%;\n  border-collapse: collapse;\n  text-align: left;\n  font-size: 0.88rem;\n}\n.posts-table th {\n  background: #f8fafc;\n  color: var(--app-ink-muted, #64748b);\n  font-weight: 700;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--app-border, #e2e8f0);\n}\n.posts-table td {\n  padding: 14px 16px;\n  border-bottom: 1px solid #f1f5f9;\n  color: var(--app-ink, #0f172a);\n  vertical-align: middle;\n}\n.posts-table tr:last-child td {\n  border-bottom: none;\n}\n.posts-table tbody tr:hover {\n  background: #fafcff;\n}\n.story-cell {\n  min-width: 280px;\n}\n.story-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.story-thumb {\n  width: 56px;\n  height: 42px;\n  border-radius: 8px;\n  object-fit: cover;\n  flex-shrink: 0;\n  border: 1px solid var(--app-border, #e2e8f0);\n}\n.story-text {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.story-text .story-title {\n  font-weight: 700;\n  color: var(--app-ink, #0f172a);\n  cursor: pointer;\n  line-height: 1.3;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.story-text .story-title:hover {\n  color: var(--app-accent, #1d7a6d);\n}\n.story-text .story-excerpt {\n  font-size: 0.78rem;\n  color: var(--app-ink-muted, #64748b);\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.category-pill-sm {\n  background: #f1f5f9;\n  color: #334155;\n  font-size: 0.75rem;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 999px;\n  white-space: nowrap;\n}\n.author-meta {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.author-meta .author-name {\n  font-weight: 600;\n  font-size: 0.85rem;\n}\n.author-meta .author-badge-sm {\n  font-size: 0.65rem;\n  font-weight: 700;\n  color: var(--app-accent, #1d7a6d);\n  letter-spacing: 0.04em;\n}\n.author-meta .author-badge-sm.user {\n  color: #6366f1;\n}\n.status-badge-sm {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  padding: 3px 8px;\n  border-radius: 999px;\n}\n.status-badge-sm .status-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n}\n.status-badge-sm.status-published {\n  background: rgba(34, 197, 94, 0.12);\n  color: #16a34a;\n}\n.status-badge-sm.status-published .status-dot {\n  background: #16a34a;\n}\n.status-badge-sm.status-draft {\n  background: rgba(245, 158, 11, 0.12);\n  color: #d97706;\n}\n.status-badge-sm.status-draft .status-dot {\n  background: #d97706;\n}\n.status-badge-sm.status-pending {\n  background: rgba(59, 130, 246, 0.12);\n  color: #2563eb;\n}\n.status-badge-sm.status-pending .status-dot {\n  background: #2563eb;\n}\n.status-badge-sm.status-scheduled {\n  background: rgba(139, 92, 246, 0.12);\n  color: #7c3aed;\n}\n.status-badge-sm.status-scheduled .status-dot {\n  background: #7c3aed;\n}\n.status-badge-sm.status-rejected {\n  background: rgba(239, 68, 68, 0.12);\n  color: #dc2626;\n}\n.status-badge-sm.status-rejected .status-dot {\n  background: #dc2626;\n}\n.table-actions {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 6px;\n}\n.tbl-btn {\n  width: 30px;\n  height: 30px;\n  border-radius: 6px;\n  border: 1px solid var(--app-border, #e2e8f0);\n  background: #ffffff;\n  color: var(--app-ink, #0f172a);\n  display: grid;\n  place-items: center;\n  font-size: 0.8rem;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.tbl-btn.preview:hover {\n  background: #f1f5f9;\n}\n.tbl-btn.edit:hover {\n  background: rgba(29, 122, 109, 0.1);\n  color: var(--app-accent, #1d7a6d);\n  border-color: var(--app-accent, #1d7a6d);\n}\n.tbl-btn.approve:hover {\n  background: rgba(34, 197, 94, 0.1);\n  color: #16a34a;\n}\n.tbl-btn.publish:hover {\n  background: rgba(59, 130, 246, 0.1);\n  color: #2563eb;\n}\n.tbl-btn.delete:hover {\n  background: rgba(239, 68, 68, 0.1);\n  color: #dc2626;\n}\n.skeleton-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 20px;\n}\n.skeleton-card {\n  background: #ffffff;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: var(--app-radius-lg, 16px);\n  overflow: hidden;\n}\n.skeleton-card .skeleton-img {\n  height: 180px;\n  background:\n    linear-gradient(\n      90deg,\n      #f1f5f9 25%,\n      #e2e8f0 50%,\n      #f1f5f9 75%);\n  background-size: 200% 100%;\n  animation: shimmer 1.5s infinite;\n}\n.skeleton-card .skeleton-body {\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.skeleton-card .skeleton-line {\n  height: 14px;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #f1f5f9 25%,\n      #e2e8f0 50%,\n      #f1f5f9 75%);\n  background-size: 200% 100%;\n  animation: shimmer 1.5s infinite;\n}\n.skeleton-card .skeleton-line.full {\n  width: 100%;\n}\n.skeleton-card .skeleton-line.half {\n  width: 60%;\n}\n.skeleton-card .skeleton-line.short {\n  width: 35%;\n}\n@keyframes shimmer {\n  0% {\n    background-position: -200% 0;\n  }\n  100% {\n    background-position: 200% 0;\n  }\n}\n.empty-state-card {\n  background: #ffffff;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: var(--app-radius-lg, 16px);\n  padding: 48px 24px;\n  text-align: center;\n  box-shadow: var(--app-shadow-soft, 0 4px 16px rgba(0, 0, 0, 0.04));\n  max-width: 480px;\n  margin: 30px auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.empty-state-card .empty-icon-wrap {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background: rgba(29, 122, 109, 0.1);\n  color: var(--app-accent, #1d7a6d);\n  display: grid;\n  place-items: center;\n  font-size: 1.8rem;\n  margin-bottom: 16px;\n}\n.empty-state-card h3 {\n  margin: 0 0 8px;\n  font-size: 1.25rem;\n  font-weight: 700;\n}\n.empty-state-card p {\n  margin: 0 0 20px;\n  font-size: 0.9rem;\n  color: var(--app-ink-muted, #64748b);\n  line-height: 1.5;\n}\n.empty-state-card .empty-actions {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.preview-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.6);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  z-index: 9999;\n  display: flex;\n  justify-content: flex-end;\n  animation: fadeIn 0.2s ease;\n}\n.preview-drawer {\n  width: 100%;\n  max-width: 640px;\n  background: #ffffff;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.15);\n  animation: slideLeft 0.25s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.drawer-header {\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--app-border, #e2e8f0);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.drawer-header .dh-meta {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.drawer-header .drawer-close-btn {\n  border: none;\n  background: #f1f5f9;\n  color: #475569;\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  cursor: pointer;\n}\n.drawer-header .drawer-close-btn:hover {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n.drawer-body {\n  padding: 24px;\n  overflow-y: auto;\n  flex: 1;\n}\n.preview-hero-img {\n  margin-bottom: 20px;\n  border-radius: 12px;\n  overflow: hidden;\n  height: 240px;\n  border: 1px solid var(--app-border, #e2e8f0);\n}\n.preview-hero-img img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.preview-title {\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: var(--app-ink, #0f172a);\n  margin: 0 0 14px;\n  line-height: 1.3;\n}\n.preview-byline {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid #f1f5f9;\n  padding-bottom: 14px;\n  margin-bottom: 16px;\n}\n.preview-byline .author-info {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.preview-byline .author-info i {\n  font-size: 1.8rem;\n  color: var(--app-accent, #1d7a6d);\n}\n.preview-byline .author-info div {\n  display: flex;\n  flex-direction: column;\n}\n.preview-byline .author-info div strong {\n  font-size: 0.9rem;\n}\n.preview-byline .author-info div small {\n  color: var(--app-ink-muted, #64748b);\n  font-size: 0.75rem;\n}\n.preview-byline .preview-stats-row {\n  font-size: 0.85rem;\n  color: var(--app-ink-muted, #64748b);\n  font-weight: 600;\n}\n.preview-excerpt-box {\n  background: #f8fafc;\n  border-left: 4px solid var(--app-accent, #1d7a6d);\n  padding: 12px 16px;\n  border-radius: 0 8px 8px 0;\n  margin-bottom: 20px;\n}\n.preview-excerpt-box p {\n  margin: 0;\n  font-size: 0.95rem;\n  font-style: italic;\n  color: #334155;\n  line-height: 1.5;\n}\n.preview-content-article {\n  font-size: 0.95rem;\n  line-height: 1.7;\n  color: #1e293b;\n  white-space: pre-wrap;\n  margin-bottom: 24px;\n}\n.preview-tags-section {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  border-top: 1px solid #f1f5f9;\n  padding-top: 16px;\n}\n.preview-tags-section .tags-cluster {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.drawer-footer {\n  padding: 16px 20px;\n  border-top: 1px solid var(--app-border, #e2e8f0);\n  background: #f8fafc;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes slideLeft {\n  from {\n    transform: translateX(100%);\n  }\n  to {\n    transform: translateX(0);\n  }\n}\n@media (max-width: 768px) {\n  .controls-panel {\n    padding: 14px;\n  }\n  .filters-row {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .filter-group {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .filter-item select {\n    width: 100%;\n  }\n  .actions-group {\n    justify-content: space-between;\n  }\n  .posts-grid {\n    grid-template-columns: 1fr;\n  }\n  .preview-drawer {\n    max-width: 100%;\n    height: 90vh;\n    margin-top: auto;\n    border-radius: 20px 20px 0 0;\n  }\n}\n/*# sourceMappingURL=posts-list.component.css.map */\n"] }]
  }], () => [{ type: Router }, { type: PostEditor }, { type: DropdownManagerService }, { type: NotificationService }, { type: AuthService }, { type: MediaService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PostsListComponent, { className: "PostsListComponent", filePath: "src/app/blog/posts-list/posts-list.component.ts", lineNumber: 40 });
})();

// src/app/blog/posts-list/posts-list-module.ts
var routes = [{ path: "", component: PostsListComponent }];
var _PostsListModule = class _PostsListModule {
};
_PostsListModule.\u0275fac = function PostsListModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PostsListModule)();
};
_PostsListModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PostsListModule });
_PostsListModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, PostsListComponent, RouterModule.forChild(routes)] });
var PostsListModule = _PostsListModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PostsListModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        CommonModule,
        PostsListComponent,
        RouterModule.forChild(routes)
      ]
    }]
  }], null, null);
})();
export {
  PostsListModule
};
//# sourceMappingURL=posts-list-module-ZB2NZDQT.js.map
