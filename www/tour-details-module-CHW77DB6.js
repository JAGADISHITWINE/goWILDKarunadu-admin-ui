import {
  AdminShellComponent
} from "./chunk-36TQFYFK.js";
import {
  FormsModule,
  ReactiveFormsModule
} from "./chunk-QNEZ2FH5.js";
import "./chunk-D4XXJJII.js";
import {
  ActivatedRoute,
  CUSTOM_ELEMENTS_SCHEMA,
  CommonModule,
  Component,
  DecimalPipe,
  EncryptionService,
  HttpClient,
  Injectable,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  Router,
  RouterLink,
  RouterModule,
  __spreadProps,
  __spreadValues,
  environment,
  map,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-KQE4QDNK.js";

// src/app/tour-details/tour-details.ts
var _TourDetails = class _TourDetails {
  constructor(http, crypto) {
    this.http = http;
    this.crypto = crypto;
    this.API = `${environment.baseUrl}`;
  }
  getTrekById(trekId) {
    return this.http.get(`${this.API}/getTrekById/${trekId}`).pipe(map((res) => {
      const decrypted = this.crypto.decrypt(res.data);
      return __spreadProps(__spreadValues({}, res), {
        data: decrypted
      });
    }));
  }
};
_TourDetails.\u0275fac = function TourDetails_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TourDetails)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(EncryptionService));
};
_TourDetails.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TourDetails, factory: _TourDetails.\u0275fac, providedIn: "root" });
var TourDetails = _TourDetails;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TourDetails, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: EncryptionService }], null);
})();

// src/app/tour-details/tour-details.component.ts
function TourDetailsComponent_div_2_div_73_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275element(1, "i", 38);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const highlight_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(highlight_r3);
  }
}
function TourDetailsComponent_div_2_div_73_img_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 39);
    \u0275\u0275listener("error", function TourDetailsComponent_div_2_div_73_img_15_Template_img_error_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.target.src = "assets/placeholder-trek.jpg");
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const photo_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r1.getImageUrl(photo_r5), \u0275\u0275sanitizeUrl);
  }
}
function TourDetailsComponent_div_2_div_73_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const date_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(date_r6);
  }
}
function TourDetailsComponent_div_2_div_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 30)(2, "h3");
    \u0275\u0275text(3, "About This Trek");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 30)(7, "h3");
    \u0275\u0275text(8, "Highlights");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 31);
    \u0275\u0275template(10, TourDetailsComponent_div_2_div_73_div_10_Template, 4, 1, "div", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 30)(12, "h3");
    \u0275\u0275text(13, "Photo Gallery");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 33);
    \u0275\u0275template(15, TourDetailsComponent_div_2_div_73_img_15_Template, 1, 1, "img", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 30)(17, "h3");
    \u0275\u0275text(18, "Available Dates");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 35);
    \u0275\u0275template(20, TourDetailsComponent_div_2_div_73_span_20_Template, 2, 1, "span", 36);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.tour.overview);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.tour.highlights);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.tour.gallery);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.tour.nextDates);
  }
}
function TourDetailsComponent_div_2_div_74_div_2_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "div", 51);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "div", 52);
    \u0275\u0275elementStart(4, "div", 53);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const activity_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatTime(activity_r7.activityTime));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(activity_r7.activityText);
  }
}
function TourDetailsComponent_div_2_div_74_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "h2", 43)(2, "button", 44)(3, "span", 45);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 46)(8, "div", 47)(9, "div", 48);
    \u0275\u0275template(10, TourDetailsComponent_div_2_div_74_div_2_div_10_Template, 6, 2, "div", 49);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const day_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    \u0275\u0275advance();
    \u0275\u0275property("id", "heading" + i_r9);
    \u0275\u0275advance();
    \u0275\u0275classProp("collapsed", i_r9 !== 0);
    \u0275\u0275attribute("data-bs-target", "#collapse" + i_r9)("aria-expanded", i_r9 === 0)("aria-controls", "collapse" + i_r9);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Day ", day_r8.day);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(day_r8.title);
    \u0275\u0275advance();
    \u0275\u0275classProp("show", i_r9 === 0);
    \u0275\u0275property("id", "collapse" + i_r9);
    \u0275\u0275attribute("aria-labelledby", "heading" + i_r9);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", day_r8.activities);
  }
}
function TourDetailsComponent_div_2_div_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 40);
    \u0275\u0275template(2, TourDetailsComponent_div_2_div_74_div_2_Template, 11, 13, "div", 41);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.tour.itinerary);
  }
}
function TourDetailsComponent_div_2_div_75_li_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "i", 57);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r10);
  }
}
function TourDetailsComponent_div_2_div_75_li_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "i", 58);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r11);
  }
}
function TourDetailsComponent_div_2_div_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 30)(2, "h3");
    \u0275\u0275text(3, "What's Included");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul", 54);
    \u0275\u0275template(5, TourDetailsComponent_div_2_div_75_li_5_Template, 3, 1, "li", 55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 30)(7, "h3");
    \u0275\u0275text(8, "What's Not Included");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "ul", 56);
    \u0275\u0275template(10, TourDetailsComponent_div_2_div_75_li_10_Template, 3, 1, "li", 55);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.tour.inclusions);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.tour.exclusions);
  }
}
function TourDetailsComponent_div_2_div_76_li_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "i", 61);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r12);
  }
}
function TourDetailsComponent_div_2_div_76_li_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const note_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(note_r13);
  }
}
function TourDetailsComponent_div_2_div_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 30)(2, "h3");
    \u0275\u0275text(3, "Things to Carry");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul", 59);
    \u0275\u0275template(5, TourDetailsComponent_div_2_div_76_li_5_Template, 3, 1, "li", 55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 60)(7, "h3");
    \u0275\u0275text(8, "Important Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "ul");
    \u0275\u0275template(10, TourDetailsComponent_div_2_div_76_li_10_Template, 2, 1, "li", 55);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.tour.thingsToCarry);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.tour.importantNotes);
  }
}
function TourDetailsComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 4)(2, "img", 5);
    \u0275\u0275listener("error", function TourDetailsComponent_div_2_Template_img_error_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.target.src = "assets/placeholder-trek.jpg");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 6)(4, "button", 7);
    \u0275\u0275element(5, "i", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 9);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 10)(9, "div", 11)(10, "div")(11, "h1");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 12);
    \u0275\u0275element(14, "i", 13);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 14)(17, "span", 15);
    \u0275\u0275element(18, "i", 16);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 17);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 18);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 19);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 20)(27, "span");
    \u0275\u0275text(28, "Starting from");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "strong");
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "small");
    \u0275\u0275text(33, "per person");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 21)(35, "div", 22);
    \u0275\u0275element(36, "i", 23);
    \u0275\u0275elementStart(37, "div")(38, "small");
    \u0275\u0275text(39, "Duration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "strong");
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "div", 22);
    \u0275\u0275element(43, "i", 24);
    \u0275\u0275elementStart(44, "div")(45, "small");
    \u0275\u0275text(46, "Difficulty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "strong");
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "div", 22);
    \u0275\u0275element(50, "i", 25);
    \u0275\u0275elementStart(51, "div")(52, "small");
    \u0275\u0275text(53, "Fitness");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "strong");
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(56, "div", 22);
    \u0275\u0275element(57, "i", 26);
    \u0275\u0275elementStart(58, "div")(59, "small");
    \u0275\u0275text(60, "Age Range");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "strong");
    \u0275\u0275text(62);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(63, "div", 27)(64, "button", 28);
    \u0275\u0275listener("click", function TourDetailsComponent_div_2_Template_button_click_64_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectedSegment = "overview");
    });
    \u0275\u0275text(65, "Overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "button", 28);
    \u0275\u0275listener("click", function TourDetailsComponent_div_2_Template_button_click_66_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectedSegment = "itinerary");
    });
    \u0275\u0275text(67, "Itinerary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "button", 28);
    \u0275\u0275listener("click", function TourDetailsComponent_div_2_Template_button_click_68_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectedSegment = "inclusions");
    });
    \u0275\u0275text(69, "Inclusions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "button", 28);
    \u0275\u0275listener("click", function TourDetailsComponent_div_2_Template_button_click_70_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectedSegment = "info");
    });
    \u0275\u0275text(71, "Info");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 29);
    \u0275\u0275template(73, TourDetailsComponent_div_2_div_73_Template, 21, 4, "div", 2)(74, TourDetailsComponent_div_2_div_74_Template, 3, 1, "div", 2)(75, TourDetailsComponent_div_2_div_75_Template, 11, 2, "div", 2)(76, TourDetailsComponent_div_2_div_76_Template, 11, 2, "div", 2);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r1.getImageUrl(ctx_r1.tour.image), \u0275\u0275sanitizeUrl)("alt", ctx_r1.tour.name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.tour.availableSlots, " slots available");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.tour.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.tour.location);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.tour.rating);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", ctx_r1.tour.reviewCount, " reviews)");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getDifficultyColor(ctx_r1.tour.difficulty));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.tour.difficulty);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.tour.category);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind1(31, 28, ctx_r1.tour.price));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r1.tour.duration);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.tour.difficulty);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.tour.fitnessLevel);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("", ctx_r1.tour.minAge, "-", ctx_r1.tour.maxAge);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.selectedSegment === "overview");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.selectedSegment === "itinerary");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.selectedSegment === "inclusions");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.selectedSegment === "info");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.selectedSegment === "overview");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedSegment === "itinerary");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedSegment === "inclusions");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedSegment === "info");
  }
}
function TourDetailsComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62)(1, "div", 63);
    \u0275\u0275element(2, "i", 64);
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Loading trek details...");
    \u0275\u0275elementEnd()()();
  }
}
function TourDetailsComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62)(1, "div", 65);
    \u0275\u0275element(2, "i", 66);
    \u0275\u0275elementStart(3, "h4");
    \u0275\u0275text(4, "Trek not found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "The trek you're looking for doesn't exist.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 67);
    \u0275\u0275text(8, "Back to Trek List");
    \u0275\u0275elementEnd()()();
  }
}
var _TourDetailsComponent = class _TourDetailsComponent {
  constructor(route, router, tourDetailsService) {
    this.route = route;
    this.router = router;
    this.tourDetailsService = tourDetailsService;
    this.tour = null;
    this.isLoading = true;
    this.tourId = "";
    this.selectedSegment = "overview";
    this.baseUrl = (environment.mediaBaseUrl || "").replace(/\/?$/, "/");
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = String(params.get("id") || "").trim();
      if (!id)
        return;
      this.tourId = id;
      this.isLoading = true;
      this.tour = null;
      this.loadTrekDetails();
    });
  }
  loadTrekDetails() {
    this.isLoading = true;
    this.tourDetailsService.getTrekById(this.tourId).subscribe((res) => {
      if (res.success) {
        this.isLoading = false;
        this.mapTourData(res.data);
      }
    });
  }
  mapTourData(result) {
    const firstBatch = result.batch;
    this.tour = {
      id: result.id,
      name: result.name,
      location: result.location,
      category: result.category,
      difficulty: result.difficulty,
      fitnessLevel: result.fitness_level,
      duration: firstBatch?.duration || "N/A",
      price: firstBatch ? Number(firstBatch.price) : 0,
      // Mock data for rating/reviews (replace with real data if available)
      rating: 4.8,
      reviewCount: 145,
      // Images
      image: result.cover_image,
      gallery: result.galleryImages || [],
      // Content
      overview: result.description,
      highlights: result.highlights || [],
      thingsToCarry: result.thingsToCarry || [],
      importantNotes: result.importantNotes || [],
      // Batch-specific data
      inclusions: firstBatch?.inclusions || [],
      exclusions: firstBatch?.exclusions || [],
      // Itinerary mapping
      itinerary: firstBatch?.itineraryDays?.map((day) => ({
        day: day.day_number,
        title: day.title,
        activities: day.activities || []
      })) || [],
      // Batch dates
      nextDates: result.batches?.map((b) => this.formatDate(b.start_date)) || [],
      // Additional info
      availableSlots: firstBatch?.availableSlots || 0,
      minAge: firstBatch?.min_age || 0,
      maxAge: firstBatch?.max_age || 0
    };
  }
  formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric"
    });
  }
  formatTime(timeString) {
    const [hours, minutes] = timeString.split(":");
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? "PM" : "AM";
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  }
  getDifficultyColor(difficulty) {
    const difficultyMap = {
      "Easy": "bg-success text-white",
      "Moderate": "bg-warning text-dark",
      "Difficult": "bg-danger text-white",
      "Challenging": "bg-dark text-white"
    };
    return difficultyMap[difficulty] || "bg-secondary text-white";
  }
  getImageUrl(path) {
    return `${this.baseUrl}${path}`;
  }
};
_TourDetailsComponent.\u0275fac = function TourDetailsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TourDetailsComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(TourDetails));
};
_TourDetailsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TourDetailsComponent, selectors: [["app-tour-details"]], decls: 5, vars: 3, consts: [["title", "Trek Details", "subtitle", "Review trek information, batches, ratings, and itinerary.", "sectionLabel", "Treks"], [1, "tour-page"], [4, "ngIf"], ["class", "state-center", 4, "ngIf"], [1, "hero-image"], ["loading", "lazy", "decoding", "async", 3, "error", "src", "alt"], [1, "hero-overlay"], ["routerLink", "/admin/treks/list", "aria-label", "Back", 1, "icon-btn"], [1, "bi", "bi-arrow-left", "text-dark"], [1, "hero-pill"], [1, "app-shell"], [1, "tour-header"], [1, "location"], [1, "bi", "bi-geo-alt"], [1, "tour-tags"], [1, "pill"], [1, "bi", "bi-star-fill"], [1, "muted"], [1, "badge", 3, "ngClass"], [1, "badge", "bg-info", "text-dark"], [1, "price-card"], [1, "quick-info"], [1, "info-card"], [1, "bi", "bi-clock"], [1, "bi", "bi-activity"], [1, "bi", "bi-heart-pulse"], [1, "bi", "bi-people"], [1, "tab-row"], [3, "click"], [1, "tab-content"], [1, "section-block"], [1, "highlight-list"], ["class", "highlight-item", 4, "ngFor", "ngForOf"], [1, "gallery-grid"], ["loading", "lazy", "decoding", "async", 3, "src", "error", 4, "ngFor", "ngForOf"], [1, "date-pills"], ["class", "pill", 4, "ngFor", "ngForOf"], [1, "highlight-item"], [1, "bi", "bi-check2-circle"], ["loading", "lazy", "decoding", "async", 3, "error", "src"], ["id", "itineraryAccordion", 1, "accordion"], ["class", "accordion-item", 4, "ngFor", "ngForOf"], [1, "accordion-item"], [1, "accordion-header", 3, "id"], ["type", "button", "data-bs-toggle", "collapse", 1, "accordion-button"], [1, "badge", "bg-primary", "me-2"], ["data-bs-parent", "#itineraryAccordion", 1, "accordion-collapse", "collapse", 3, "id"], [1, "accordion-body"], [1, "timeline"], ["class", "timeline-item", 4, "ngFor", "ngForOf"], [1, "timeline-item"], [1, "timeline-time"], [1, "timeline-dot"], [1, "timeline-content"], [1, "clean-list"], [4, "ngFor", "ngForOf"], [1, "clean-list", "danger"], [1, "bi", "bi-check-circle"], [1, "bi", "bi-x-circle"], [1, "clean-list", "info"], [1, "section-block", "warning-block"], [1, "bi", "bi-backpack"], [1, "state-center"], [1, "surface-card", "loading-card"], [1, "bi", "bi-hourglass-split"], [1, "surface-card", "empty-card"], [1, "bi", "bi-compass"], ["routerLink", "/admin/treks/list", 1, "btn-app"]], template: function TourDetailsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-admin-shell", 0)(1, "div", 1);
    \u0275\u0275template(2, TourDetailsComponent_div_2_Template, 77, 30, "div", 2)(3, TourDetailsComponent_div_3_Template, 5, 0, "div", 3)(4, TourDetailsComponent_div_4_Template, 9, 0, "div", 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.tour && !ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isLoading && !ctx.tour);
  }
}, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, ReactiveFormsModule, RouterLink, AdminShellComponent, DecimalPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.tour-page[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n.hero-image[_ngcontent-%COMP%] {\n  position: relative;\n  height: 360px;\n  overflow: hidden;\n}\n.hero-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.hero-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 20px;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(23, 24, 20, 0.55),\n      rgba(23, 24, 20, 0));\n}\n.hero-pill[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.92);\n  color: var(--app-accent);\n  padding: 8px 14px;\n  border-radius: 999px;\n  font-weight: 700;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 14px;\n  border: none;\n  background: #fff;\n  display: grid;\n  place-items: center;\n  box-shadow: var(--app-shadow-soft);\n}\n.tour-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n  align-items: flex-start;\n  margin-top: -48px;\n}\n.tour-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n}\n.location[_ngcontent-%COMP%] {\n  color: var(--app-ink-muted);\n  margin-bottom: 10px;\n}\n.tour-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  align-items: center;\n}\n.price-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid var(--app-border);\n  border-radius: 20px;\n  padding: 16px 20px;\n  min-width: 180px;\n  text-align: right;\n  box-shadow: var(--app-shadow-soft);\n}\n.price-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  display: block;\n}\n.quick-info[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 12px;\n  margin: 24px 0;\n}\n.info-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid var(--app-border);\n  border-radius: 16px;\n  padding: 14px;\n  display: flex;\n  gap: 12px;\n  align-items: center;\n  box-shadow: var(--app-shadow-soft);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.info-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--app-shadow);\n}\n.info-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--app-accent);\n  font-size: 1.2rem;\n}\n.tab-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin: 12px 0 24px;\n}\n.tab-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid var(--app-border);\n  background: var(--app-surface-2);\n  padding: 10px 16px;\n  border-radius: 999px;\n  font-weight: 600;\n}\n.tab-row[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: var(--app-accent);\n  color: #fff;\n}\n.section-block[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.section-block[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.highlight-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 10px;\n}\n.highlight-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  background: #fff;\n  border: 1px solid var(--app-border);\n  border-radius: 14px;\n  padding: 10px 12px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.highlight-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--app-shadow-soft);\n}\n.gallery-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 10px;\n}\n.gallery-grid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  aspect-ratio: 1;\n  object-fit: cover;\n  border-radius: 14px;\n}\n.date-pills[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.timeline[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n}\n.timeline-item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 80px 12px 1fr;\n  gap: 12px;\n  align-items: center;\n}\n.timeline-time[_ngcontent-%COMP%] {\n  color: var(--app-ink-muted);\n  font-weight: 600;\n}\n.timeline-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 999px;\n  background: var(--app-accent);\n}\n.clean-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: grid;\n  gap: 10px;\n}\n.clean-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: #fff;\n  border: 1px solid var(--app-border);\n  border-radius: 12px;\n  padding: 10px 12px;\n}\n.clean-list.danger[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--ion-color-danger);\n}\n.warning-block[_ngcontent-%COMP%] {\n  background: rgba(231, 178, 59, 0.12);\n  border: 1px solid rgba(231, 178, 59, 0.3);\n  border-radius: 16px;\n  padding: 16px;\n}\n.state-center[_ngcontent-%COMP%] {\n  min-height: 60vh;\n  display: grid;\n  place-items: center;\n}\n.loading-card[_ngcontent-%COMP%], \n.empty-card[_ngcontent-%COMP%] {\n  padding: 24px;\n  text-align: center;\n}\n@media (max-width: 800px) {\n  .tour-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .price-card[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n}\n/*# sourceMappingURL=tour-details.component.css.map */"] });
var TourDetailsComponent = _TourDetailsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TourDetailsComponent, [{
    type: Component,
    args: [{ selector: "app-tour-details", standalone: true, imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink, AdminShellComponent], schemas: [CUSTOM_ELEMENTS_SCHEMA], template: `<app-admin-shell
  title="Trek Details"
  subtitle="Review trek information, batches, ratings, and itinerary."
  sectionLabel="Treks">
<div class="tour-page">
  <div *ngIf="tour && !isLoading">
    <div class="hero-image">
      <img loading="lazy" decoding="async" [src]="getImageUrl(tour.image)" [alt]="tour.name" (error)="$event.target.src='assets/placeholder-trek.jpg'" />
      <div class="hero-overlay">
        <button class="icon-btn" routerLink="/admin/treks/list" aria-label="Back">
          <i class="bi bi-arrow-left text-dark"></i>
        </button>
        <span class="hero-pill">{{ tour.availableSlots }} slots available</span>
      </div>
    </div>

    <div class="app-shell">
      <div class="tour-header">
        <div>
          <h1>{{ tour.name }}</h1>
          <p class="location"><i class="bi bi-geo-alt"></i> {{ tour.location }}</p>
          <div class="tour-tags">
            <span class="pill"><i class="bi bi-star-fill"></i> {{ tour.rating }}</span>
            <span class="muted">({{ tour.reviewCount }} reviews)</span>
            <span class="badge" [ngClass]="getDifficultyColor(tour.difficulty)">{{ tour.difficulty }}</span>
            <span class="badge bg-info text-dark">{{ tour.category }}</span>
          </div>
        </div>
        <div class="price-card">
          <span>Starting from</span>
          <strong>\u20B9{{ tour.price | number }}</strong>
          <small>per person</small>
        </div>
      </div>

      <div class="quick-info">
        <div class="info-card">
          <i class="bi bi-clock"></i>
          <div>
            <small>Duration</small>
            <strong>{{ tour.duration }}</strong>
          </div>
        </div>
        <div class="info-card">
          <i class="bi bi-activity"></i>
          <div>
            <small>Difficulty</small>
            <strong>{{ tour.difficulty }}</strong>
          </div>
        </div>
        <div class="info-card">
          <i class="bi bi-heart-pulse"></i>
          <div>
            <small>Fitness</small>
            <strong>{{ tour.fitnessLevel }}</strong>
          </div>
        </div>
        <div class="info-card">
          <i class="bi bi-people"></i>
          <div>
            <small>Age Range</small>
            <strong>{{ tour.minAge }}-{{ tour.maxAge }}</strong>
          </div>
        </div>
      </div>

      <div class="tab-row">
        <button [class.active]="selectedSegment === 'overview'" (click)="selectedSegment='overview'">Overview</button>
        <button [class.active]="selectedSegment === 'itinerary'" (click)="selectedSegment='itinerary'">Itinerary</button>
        <button [class.active]="selectedSegment === 'inclusions'" (click)="selectedSegment='inclusions'">Inclusions</button>
        <button [class.active]="selectedSegment === 'info'" (click)="selectedSegment='info'">Info</button>
      </div>

      <div class="tab-content">
        <div *ngIf="selectedSegment === 'overview'">
          <div class="section-block">
            <h3>About This Trek</h3>
            <p>{{ tour.overview }}</p>
          </div>

          <div class="section-block">
            <h3>Highlights</h3>
            <div class="highlight-list">
              <div *ngFor="let highlight of tour.highlights" class="highlight-item">
                <i class="bi bi-check2-circle"></i>
                <span>{{ highlight }}</span>
              </div>
            </div>
          </div>

          <div class="section-block">
            <h3>Photo Gallery</h3>
            <div class="gallery-grid">
              <img loading="lazy" decoding="async" *ngFor="let photo of tour.gallery" [src]="getImageUrl(photo)"
                (error)="$event.target.src='assets/placeholder-trek.jpg'" />
            </div>
          </div>

          <div class="section-block">
            <h3>Available Dates</h3>
            <div class="date-pills">
              <span class="pill" *ngFor="let date of tour.nextDates">{{ date }}</span>
            </div>
          </div>
        </div>

        <div *ngIf="selectedSegment === 'itinerary'">
          <div class="accordion" id="itineraryAccordion">
            <div class="accordion-item" *ngFor="let day of tour.itinerary; let i = index">
              <h2 class="accordion-header" [id]="'heading' + i">
                <button class="accordion-button" [class.collapsed]="i !== 0" type="button" data-bs-toggle="collapse"
                  [attr.data-bs-target]="'#collapse' + i" [attr.aria-expanded]="i === 0"
                  [attr.aria-controls]="'collapse' + i">
                  <span class="badge bg-primary me-2">Day {{ day.day }}</span>
                  <strong>{{ day.title }}</strong>
                </button>
              </h2>
              <div [id]="'collapse' + i" class="accordion-collapse collapse" [class.show]="i === 0"
                [attr.aria-labelledby]="'heading' + i" data-bs-parent="#itineraryAccordion">
                <div class="accordion-body">
                  <div class="timeline">
                    <div class="timeline-item" *ngFor="let activity of day.activities">
                      <div class="timeline-time">{{ formatTime(activity.activityTime) }}</div>
                      <div class="timeline-dot"></div>
                      <div class="timeline-content">{{ activity.activityText }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div *ngIf="selectedSegment === 'inclusions'">
          <div class="section-block">
            <h3>What's Included</h3>
            <ul class="clean-list">
              <li *ngFor="let item of tour.inclusions"><i class="bi bi-check-circle"></i>{{ item }}</li>
            </ul>
          </div>

          <div class="section-block">
            <h3>What's Not Included</h3>
            <ul class="clean-list danger">
              <li *ngFor="let item of tour.exclusions"><i class="bi bi-x-circle"></i>{{ item }}</li>
            </ul>
          </div>
        </div>

        <div *ngIf="selectedSegment === 'info'">
          <div class="section-block">
            <h3>Things to Carry</h3>
            <ul class="clean-list info">
              <li *ngFor="let item of tour.thingsToCarry"><i class="bi bi-backpack"></i>{{ item }}</li>
            </ul>
          </div>
          <div class="section-block warning-block">
            <h3>Important Notes</h3>
            <ul>
              <li *ngFor="let note of tour.importantNotes">{{ note }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div *ngIf="isLoading" class="state-center">
    <div class="surface-card loading-card">
      <i class="bi bi-hourglass-split"></i>
      <p>Loading trek details...</p>
    </div>
  </div>

  <div *ngIf="!isLoading && !tour" class="state-center">
    <div class="surface-card empty-card">
      <i class="bi bi-compass"></i>
      <h4>Trek not found</h4>
      <p>The trek you're looking for doesn't exist.</p>
      <button class="btn-app" routerLink="/admin/treks/list">Back to Trek List</button>
    </div>
  </div>
</div>
</app-admin-shell>
`, styles: ["/* src/app/tour-details/tour-details.component.scss */\n:host {\n  display: block;\n}\n.tour-page {\n  --background: transparent;\n}\n.hero-image {\n  position: relative;\n  height: 360px;\n  overflow: hidden;\n}\n.hero-image img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.hero-overlay {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 20px;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(23, 24, 20, 0.55),\n      rgba(23, 24, 20, 0));\n}\n.hero-pill {\n  background: rgba(255, 255, 255, 0.92);\n  color: var(--app-accent);\n  padding: 8px 14px;\n  border-radius: 999px;\n  font-weight: 700;\n}\n.icon-btn {\n  width: 42px;\n  height: 42px;\n  border-radius: 14px;\n  border: none;\n  background: #fff;\n  display: grid;\n  place-items: center;\n  box-shadow: var(--app-shadow-soft);\n}\n.tour-header {\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n  align-items: flex-start;\n  margin-top: -48px;\n}\n.tour-header h1 {\n  margin: 0 0 8px;\n}\n.location {\n  color: var(--app-ink-muted);\n  margin-bottom: 10px;\n}\n.tour-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  align-items: center;\n}\n.price-card {\n  background: #fff;\n  border: 1px solid var(--app-border);\n  border-radius: 20px;\n  padding: 16px 20px;\n  min-width: 180px;\n  text-align: right;\n  box-shadow: var(--app-shadow-soft);\n}\n.price-card strong {\n  font-size: 1.4rem;\n  display: block;\n}\n.quick-info {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 12px;\n  margin: 24px 0;\n}\n.info-card {\n  background: #fff;\n  border: 1px solid var(--app-border);\n  border-radius: 16px;\n  padding: 14px;\n  display: flex;\n  gap: 12px;\n  align-items: center;\n  box-shadow: var(--app-shadow-soft);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.info-card:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--app-shadow);\n}\n.info-card i {\n  color: var(--app-accent);\n  font-size: 1.2rem;\n}\n.tab-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin: 12px 0 24px;\n}\n.tab-row button {\n  border: 1px solid var(--app-border);\n  background: var(--app-surface-2);\n  padding: 10px 16px;\n  border-radius: 999px;\n  font-weight: 600;\n}\n.tab-row button.active {\n  background: var(--app-accent);\n  color: #fff;\n}\n.section-block {\n  margin-bottom: 24px;\n}\n.section-block h3 {\n  margin-bottom: 12px;\n}\n.highlight-list {\n  display: grid;\n  gap: 10px;\n}\n.highlight-item {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  background: #fff;\n  border: 1px solid var(--app-border);\n  border-radius: 14px;\n  padding: 10px 12px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.highlight-item:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--app-shadow-soft);\n}\n.gallery-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 10px;\n}\n.gallery-grid img {\n  width: 100%;\n  aspect-ratio: 1;\n  object-fit: cover;\n  border-radius: 14px;\n}\n.date-pills {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.timeline {\n  display: grid;\n  gap: 12px;\n}\n.timeline-item {\n  display: grid;\n  grid-template-columns: 80px 12px 1fr;\n  gap: 12px;\n  align-items: center;\n}\n.timeline-time {\n  color: var(--app-ink-muted);\n  font-weight: 600;\n}\n.timeline-dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 999px;\n  background: var(--app-accent);\n}\n.clean-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: grid;\n  gap: 10px;\n}\n.clean-list li {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: #fff;\n  border: 1px solid var(--app-border);\n  border-radius: 12px;\n  padding: 10px 12px;\n}\n.clean-list.danger li i {\n  color: var(--ion-color-danger);\n}\n.warning-block {\n  background: rgba(231, 178, 59, 0.12);\n  border: 1px solid rgba(231, 178, 59, 0.3);\n  border-radius: 16px;\n  padding: 16px;\n}\n.state-center {\n  min-height: 60vh;\n  display: grid;\n  place-items: center;\n}\n.loading-card,\n.empty-card {\n  padding: 24px;\n  text-align: center;\n}\n@media (max-width: 800px) {\n  .tour-header {\n    flex-direction: column;\n  }\n  .price-card {\n    text-align: left;\n  }\n}\n/*# sourceMappingURL=tour-details.component.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: TourDetails }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TourDetailsComponent, { className: "TourDetailsComponent", filePath: "src/app/tour-details/tour-details.component.ts", lineNumber: 88 });
})();

// src/app/tour-details/tour-details-module.ts
var routes = [{ path: ":id", component: TourDetailsComponent }];
var _TourDetailsModule = class _TourDetailsModule {
};
_TourDetailsModule.\u0275fac = function TourDetailsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TourDetailsModule)();
};
_TourDetailsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _TourDetailsModule });
_TourDetailsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, TourDetailsComponent, RouterModule.forChild(routes), RouterModule] });
var TourDetailsModule = _TourDetailsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TourDetailsModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        CommonModule,
        TourDetailsComponent,
        RouterModule.forChild(routes)
      ],
      exports: [RouterModule]
    }]
  }], null, null);
})();
export {
  TourDetailsModule
};
//# sourceMappingURL=tour-details-module-CHW77DB6.js.map
