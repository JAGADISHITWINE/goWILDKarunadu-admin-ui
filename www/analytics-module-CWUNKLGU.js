import {
  Chart,
  registerables
} from "./chunk-SILJTMT5.js";
import {
  Analytics
} from "./chunk-K2U6SD7G.js";
import {
  utils,
  writeSync
} from "./chunk-XZDBCH3C.js";
import {
  AdminShellComponent
} from "./chunk-GLAFLAWJ.js";
import {
  FormsModule
} from "./chunk-QNEZ2FH5.js";
import "./chunk-D4XXJJII.js";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  CommonModule,
  Component,
  DecimalPipe,
  NgForOf,
  NgModule,
  RouterModule,
  ViewChild,
  __commonJS,
  __toESM,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-KQE4QDNK.js";

// node_modules/file-saver/dist/FileSaver.min.js
var require_FileSaver_min = __commonJS({
  "node_modules/file-saver/dist/FileSaver.min.js"(exports, module) {
    "use strict";
    (function(a, b) {
      if ("function" == typeof define && define.amd) define([], b);
      else if ("undefined" != typeof exports) b();
      else {
        b(), a.FileSaver = { exports: {} }.exports;
      }
    })(exports, function() {
      "use strict";
      function b(a2, b2) {
        return "undefined" == typeof b2 ? b2 = { autoBom: false } : "object" != typeof b2 && (console.warn("Deprecated: Expected third argument to be a object"), b2 = { autoBom: !b2 }), b2.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a2.type) ? new Blob(["\uFEFF", a2], { type: a2.type }) : a2;
      }
      function c(a2, b2, c2) {
        var d2 = new XMLHttpRequest();
        d2.open("GET", a2), d2.responseType = "blob", d2.onload = function() {
          g(d2.response, b2, c2);
        }, d2.onerror = function() {
          console.error("could not download file");
        }, d2.send();
      }
      function d(a2) {
        var b2 = new XMLHttpRequest();
        b2.open("HEAD", a2, false);
        try {
          b2.send();
        } catch (a3) {
        }
        return 200 <= b2.status && 299 >= b2.status;
      }
      function e(a2) {
        try {
          a2.dispatchEvent(new MouseEvent("click"));
        } catch (c2) {
          var b2 = document.createEvent("MouseEvents");
          b2.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null), a2.dispatchEvent(b2);
        }
      }
      var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof global && global.global === global ? global : void 0, a = f.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), g = f.saveAs || ("object" != typeof window || window !== f ? function() {
      } : "download" in HTMLAnchorElement.prototype && !a ? function(b2, g2, h) {
        var i = f.URL || f.webkitURL, j = document.createElement("a");
        g2 = g2 || b2.name || "download", j.download = g2, j.rel = "noopener", "string" == typeof b2 ? (j.href = b2, j.origin === location.origin ? e(j) : d(j.href) ? c(b2, g2, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b2), setTimeout(function() {
          i.revokeObjectURL(j.href);
        }, 4e4), setTimeout(function() {
          e(j);
        }, 0));
      } : "msSaveOrOpenBlob" in navigator ? function(f2, g2, h) {
        if (g2 = g2 || f2.name || "download", "string" != typeof f2) navigator.msSaveOrOpenBlob(b(f2, h), g2);
        else if (d(f2)) c(f2, g2, h);
        else {
          var i = document.createElement("a");
          i.href = f2, i.target = "_blank", setTimeout(function() {
            e(i);
          });
        }
      } : function(b2, d2, e2, g2) {
        if (g2 = g2 || open("", "_blank"), g2 && (g2.document.title = g2.document.body.innerText = "downloading..."), "string" == typeof b2) return c(b2, d2, e2);
        var h = "application/octet-stream" === b2.type, i = /constructor/i.test(f.HTMLElement) || f.safari, j = /CriOS\/[\d]+/.test(navigator.userAgent);
        if ((j || h && i || a) && "undefined" != typeof FileReader) {
          var k = new FileReader();
          k.onloadend = function() {
            var a2 = k.result;
            a2 = j ? a2 : a2.replace(/^data:[^;]*;/, "data:attachment/file;"), g2 ? g2.location.href = a2 : location = a2, g2 = null;
          }, k.readAsDataURL(b2);
        } else {
          var l = f.URL || f.webkitURL, m = l.createObjectURL(b2);
          g2 ? g2.location = m : location.href = m, g2 = null, setTimeout(function() {
            l.revokeObjectURL(m);
          }, 4e4);
        }
      });
      f.saveAs = g.saveAs = g, "undefined" != typeof module && (module.exports = g);
    });
  }
});

// src/app/analytics/analytics.component.ts
var import_file_saver = __toESM(require_FileSaver_min());
var _c0 = ["revenueChart"];
function AnalyticsComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33)(2, "div", 34);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 35);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 36)(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 37);
    \u0275\u0275element(14, "div", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r2.month);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind1(6, 6, data_r2.amount || data_r2.revenue || 0));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", data_r2.bookings || 0, " bookings");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(12, 8, (data_r2.amount || data_r2.revenue || 0) / (data_r2.bookings || 1), "1.0-0"), " avg");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx_r2.getProgressPercent(data_r2), "%");
  }
}
function AnalyticsComponent_div_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 40);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 41)(4, "h4");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 42)(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 43);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 44);
    \u0275\u0275element(13, "div", 38);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const trek_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r5 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(trek_r4.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", trek_r4.bookings, " bookings");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind1(11, 6, trek_r4.revenue || trek_r4.amount || 0));
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", (trek_r4.revenue || trek_r4.amount || 0) / ctx_r2.maxMonthlyAmount * 100, "%");
  }
}
Chart.register(...registerables);
var _AnalyticsComponent = class _AnalyticsComponent {
  constructor(analyticService) {
    this.analyticService = analyticService;
    this.totalBookings = 0;
    this.totalRevenue = 0;
    this.averageBookingValue = 0;
    this.monthlyData = [];
    this.trekRevenue = [];
    this.monthlyGrowth = 0;
    this.monthlyGrowthLabel = "N/A";
    this.selectedRange = "12m";
    this.revenueChart = null;
    this.dataLoaded = false;
  }
  ngOnInit() {
    this.analyticService.getRevenueData().subscribe((res) => {
      const data = this.extractAnalyticsData(res);
      this.monthlyData = Array.isArray(data.monthlyData) ? data.monthlyData : [];
      this.trekRevenue = Array.isArray(data.trekRevenue) ? data.trekRevenue : [];
      this.totalBookings = Number(data.totalBooking ?? data.totalBookings ?? data.total_bookings ?? 0);
      this.totalRevenue = Number(data.totalRevenue ?? data.total_revenue ?? this.monthlyData.reduce((sum, row) => sum + Number(row?.amount || row?.revenue || 0), 0) ?? 0);
      this.averageBookingValue = Number(data.averageBookingValue ?? data.avgBookingValue ?? data.average_booking_value ?? (this.totalBookings > 0 ? this.totalRevenue / this.totalBookings : 0));
      this.monthlyGrowth = data.monthlyGrowth ?? data.growth ?? 0;
      this.monthlyGrowthLabel = this.toGrowthLabel(this.monthlyGrowth, this.monthlyData);
      this.dataLoaded = true;
      this.buildChart();
    });
  }
  ngAfterViewInit() {
    if (this.dataLoaded) {
      this.buildChart();
    }
  }
  ngOnDestroy() {
    this.revenueChart?.destroy();
  }
  // ──────────────── Range filter ────────────────
  get filteredMonthlyData() {
    if (!this.monthlyData.length)
      return [];
    const count = this.selectedRange === "3m" ? 3 : this.selectedRange === "6m" ? 6 : 12;
    return this.monthlyData.slice(-count);
  }
  setRange(range) {
    this.selectedRange = range;
    this.buildChart();
  }
  // ──────────────── Dynamic max for progress bars ────────────────
  get maxMonthlyAmount() {
    if (!this.monthlyData.length)
      return 1;
    return Math.max(...this.monthlyData.map((d) => Number(d?.amount || d?.revenue || 0)), 1);
  }
  getProgressPercent(data) {
    const val = Number(data?.amount || data?.revenue || 0);
    return Math.round(val / this.maxMonthlyAmount * 100);
  }
  // ──────────────── Chart.js ────────────────
  buildChart() {
    if (!this.revenueChartRef?.nativeElement)
      return;
    this.revenueChart?.destroy();
    const data = this.filteredMonthlyData;
    if (!data.length)
      return;
    const labels = data.map((d) => d.month || d.label || "");
    const bookings = data.map((d) => Number(d.bookings || 0));
    const revenue = data.map((d) => Number(d.amount || d.revenue || 0));
    this.revenueChart = new Chart(this.revenueChartRef.nativeElement, {
      type: "bar",
      data: {
        labels,
        datasets: [
          {
            label: "Revenue (\u20B9)",
            data: revenue,
            backgroundColor: "rgba(29, 122, 109, 0.75)",
            borderColor: "rgba(29, 122, 109, 1)",
            borderWidth: 1,
            borderRadius: 8,
            yAxisID: "y"
          },
          {
            label: "Bookings",
            data: bookings,
            type: "line",
            borderColor: "rgba(241, 166, 77, 1)",
            backgroundColor: "rgba(241, 166, 77, 0.15)",
            borderWidth: 2.5,
            pointRadius: 5,
            pointHoverRadius: 7,
            tension: 0.4,
            fill: true,
            yAxisID: "y1"
          }
        ]
      },
      options: {
        responsive: true,
        interaction: { mode: "index", intersect: false },
        plugins: {
          legend: { position: "top" },
          tooltip: {
            callbacks: {
              label: (ctx) => {
                const label = ctx.dataset.label || "";
                const value = ctx.parsed.y ?? 0;
                return label.includes("Revenue") ? `${label}: \u20B9${value.toLocaleString("en-IN")}` : `${label}: ${value}`;
              }
            }
          }
        },
        scales: {
          y: {
            type: "linear",
            position: "left",
            ticks: {
              callback: (value) => `\u20B9${Number(value).toLocaleString("en-IN")}`
            },
            grid: { color: "rgba(0,0,0,0.04)" }
          },
          y1: {
            type: "linear",
            position: "right",
            grid: { drawOnChartArea: false },
            ticks: { stepSize: 1 }
          }
        }
      }
    });
  }
  // ──────────────── Export ────────────────
  exportReport() {
    const monthlySheet = utils.json_to_sheet(this.monthlyData);
    const trekSheet = utils.json_to_sheet(this.trekRevenue);
    const workbook = {
      Sheets: {
        "Monthly Revenue": monthlySheet,
        "Trek Revenue": trekSheet
      },
      SheetNames: ["Monthly Revenue", "Trek Revenue"]
    };
    const excelBuffer = writeSync(workbook, { bookType: "xlsx", type: "array" });
    const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
    (0, import_file_saver.saveAs)(blob, `Revenue_Report_${(/* @__PURE__ */ new Date()).getFullYear()}.xlsx`);
  }
  toGrowthLabel(rawGrowth, monthlyData) {
    if (!Array.isArray(monthlyData) || monthlyData.length < 2)
      return "N/A";
    const value = String(rawGrowth ?? "").trim();
    if (!value || value === "0%" || value === "0.0%")
      return "N/A";
    return value;
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
};
_AnalyticsComponent.\u0275fac = function AnalyticsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AnalyticsComponent)(\u0275\u0275directiveInject(Analytics));
};
_AnalyticsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AnalyticsComponent, selectors: [["app-analytics"]], viewQuery: function AnalyticsComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.revenueChartRef = _t.first);
  }
}, decls: 69, vars: 18, consts: [["revenueChart", ""], [1, "analytics-page"], ["sectionLabel", "Revenue", "title", "Revenue Reports", "subtitle", "Track earnings, booking performance, and trek-wise contribution in real time."], [1, "app-shell"], [1, "header-row", "mb-3", "d-flex", "justify-content-end"], [1, "btn-app", "ghost", 3, "click"], [1, "bi", "bi-download"], [1, "summary-section"], [1, "revenue-card"], [1, "pill"], [1, "revenue-amount"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-icon", "tone-primary"], [1, "bi", "bi-ticket"], [1, "stat-value"], [1, "stat-label"], [1, "stat-icon", "tone-warning"], [1, "bi", "bi-graph-up"], [1, "chart-section"], [1, "section-head", "chart-head"], [1, "range-chips"], [1, "range-chip", 3, "click"], [1, "chart-card"], [1, "chart-canvas-wrap"], [1, "monthly-section"], [1, "section-head"], [1, "month-grid"], ["class", "month-card", 4, "ngFor", "ngForOf"], [1, "trek-revenue-section"], [1, "surface-card", "trek-panel"], ["class", "trek-item", 4, "ngFor", "ngForOf"], [1, "month-card"], [1, "month-header"], [1, "month-name"], [1, "month-amount"], [1, "month-details"], [1, "progress-bar"], [1, "progress"], [1, "trek-item"], [1, "trek-rank"], [1, "trek-info", 2, "flex", "1"], [1, "trek-stats"], [1, "revenue-value"], [1, "progress-bar", 2, "margin-top", "8px"]], template: function AnalyticsComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "app-admin-shell", 2)(2, "div", 3)(3, "div", 4)(4, "button", 5);
    \u0275\u0275listener("click", function AnalyticsComponent_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.exportReport());
    });
    \u0275\u0275element(5, "i", 6);
    \u0275\u0275text(6, " Export report ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "section", 7)(8, "div", 8)(9, "div")(10, "h3");
    \u0275\u0275text(11, "Total Revenue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 9);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 10);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 11)(18, "div", 12)(19, "div", 13);
    \u0275\u0275element(20, "i", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div")(22, "div", 15);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 16);
    \u0275\u0275text(25, "Total Bookings");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 12)(27, "div", 17);
    \u0275\u0275element(28, "i", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div")(30, "div", 15);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 16);
    \u0275\u0275text(34, "Avg Booking Value");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(35, "section", 19)(36, "div", 20)(37, "div")(38, "h2");
    \u0275\u0275text(39, "Revenue vs Bookings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "p");
    \u0275\u0275text(41, "Monthly trend for the selected period.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 21)(43, "button", 22);
    \u0275\u0275listener("click", function AnalyticsComponent_Template_button_click_43_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setRange("3m"));
    });
    \u0275\u0275text(44, "3M");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "button", 22);
    \u0275\u0275listener("click", function AnalyticsComponent_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setRange("6m"));
    });
    \u0275\u0275text(46, "6M");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "button", 22);
    \u0275\u0275listener("click", function AnalyticsComponent_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setRange("12m"));
    });
    \u0275\u0275text(48, "12M");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "div", 23)(50, "div", 24);
    \u0275\u0275element(51, "canvas", null, 0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(53, "section", 25)(54, "div", 26)(55, "h2");
    \u0275\u0275text(56, "Monthly Breakdown");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "p");
    \u0275\u0275text(58);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 27);
    \u0275\u0275template(60, AnalyticsComponent_div_60_Template, 15, 11, "div", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "section", 29)(62, "div", 26)(63, "h2");
    \u0275\u0275text(64, "Revenue by Trek");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "p");
    \u0275\u0275text(66, "Top performers this season.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "div", 30);
    \u0275\u0275template(68, AnalyticsComponent_div_68_Template, 14, 8, "div", 31);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx.monthlyGrowthLabel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind1(16, 13, ctx.totalRevenue));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx.totalBookings);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(32, 15, ctx.averageBookingValue, "1.0-0"));
    \u0275\u0275advance(12);
    \u0275\u0275classProp("active", ctx.selectedRange === "3m");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx.selectedRange === "6m");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx.selectedRange === "12m");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1("Quick glance at the last ", ctx.selectedRange === "3m" ? 3 : ctx.selectedRange === "6m" ? 6 : 12, " months.");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx.filteredMonthlyData);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx.trekRevenue);
  }
}, dependencies: [CommonModule, NgForOf, FormsModule, AdminShellComponent, DecimalPipe], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.analytics-page[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n.analytics-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.crumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  color: var(--app-ink-muted);\n  margin-bottom: 10px;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 14px;\n  border: 1px solid var(--app-border);\n  background: #fff;\n  display: grid;\n  place-items: center;\n}\n.header-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n}\n.summary-section[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 16px;\n}\n.chart-section[_ngcontent-%COMP%] {\n  margin-top: 28px;\n}\n.chart-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-bottom: 16px;\n}\n.chart-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid var(--app-border);\n  border-radius: 20px;\n  padding: 20px;\n  box-shadow: var(--app-shadow-soft);\n}\n.chart-canvas-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 300px;\n}\n.chart-canvas-wrap[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: 100% !important;\n}\n.range-chips[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.range-chip[_ngcontent-%COMP%] {\n  border: 1px solid var(--app-border);\n  background: #fff;\n  border-radius: 999px;\n  padding: 6px 16px;\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--app-ink-muted);\n  cursor: pointer;\n  transition:\n    background 0.15s,\n    color 0.15s,\n    border-color 0.15s;\n}\n.range-chip[_ngcontent-%COMP%]:hover {\n  background: rgba(29, 122, 109, 0.07);\n  border-color: rgba(29, 122, 109, 0.3);\n  color: var(--app-accent);\n}\n.range-chip.active[_ngcontent-%COMP%] {\n  background: var(--app-accent);\n  color: #fff;\n  border-color: transparent;\n}\n.revenue-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      120deg,\n      rgba(29, 122, 109, 0.15),\n      rgba(241, 166, 77, 0.2));\n  border: 1px solid var(--app-border);\n  border-radius: var(--app-radius-lg);\n  padding: 20px 24px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: var(--app-shadow-soft);\n}\n.revenue-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 6px;\n}\n.revenue-amount[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 16px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid var(--app-border);\n  border-radius: var(--app-radius);\n  padding: 16px;\n  display: flex;\n  gap: 12px;\n  align-items: center;\n  box-shadow: var(--app-shadow-soft);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--app-shadow);\n}\n.stat-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 14px;\n  display: grid;\n  place-items: center;\n  background: rgba(29, 122, 109, 0.12);\n  color: var(--app-accent);\n}\n.stat-icon.tone-primary[_ngcontent-%COMP%] {\n  background: rgba(29, 122, 109, 0.18);\n  color: var(--app-accent);\n}\n.stat-icon.tone-warning[_ngcontent-%COMP%] {\n  background: rgba(231, 178, 59, 0.22);\n  color: #8a5f00;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.stat-label[_ngcontent-%COMP%] {\n  color: var(--app-ink-muted);\n}\n.monthly-section[_ngcontent-%COMP%], \n.trek-revenue-section[_ngcontent-%COMP%] {\n  margin-top: 28px;\n}\n.section-head[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.section-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--app-ink-muted);\n  margin: 6px 0 0;\n}\n.month-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 16px;\n}\n.month-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid var(--app-border);\n  border-radius: var(--app-radius);\n  padding: 16px;\n  box-shadow: var(--app-shadow-soft);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.month-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--app-shadow);\n}\n.month-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 6px;\n}\n.month-details[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  color: var(--app-ink-muted);\n  font-size: 0.9rem;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  height: 8px;\n  background: #f1e8dd;\n  border-radius: 999px;\n  margin-top: 12px;\n  overflow: hidden;\n}\n.progress[_ngcontent-%COMP%] {\n  height: 100%;\n  background: var(--app-accent);\n  border-radius: 999px;\n}\n.trek-panel[_ngcontent-%COMP%] {\n  padding: 18px;\n  display: grid;\n  gap: 12px;\n}\n.trek-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  align-items: center;\n  padding: 12px;\n  border-radius: 16px;\n  background: var(--app-surface-2);\n}\n.trek-rank[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 12px;\n  background: #fff;\n  display: grid;\n  place-items: center;\n  font-weight: 700;\n}\n.trek-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 6px;\n}\n.trek-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  color: var(--app-ink-muted);\n}\n.revenue-value[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--app-ink);\n}\n@media (max-width: 720px) {\n  .header-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .revenue-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n}\n/*# sourceMappingURL=analytics.component.css.map */'] });
var AnalyticsComponent = _AnalyticsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnalyticsComponent, [{
    type: Component,
    args: [{ selector: "app-analytics", standalone: true, imports: [CommonModule, FormsModule, AdminShellComponent], schemas: [CUSTOM_ELEMENTS_SCHEMA], template: `<div class="analytics-page">
  <app-admin-shell
    sectionLabel="Revenue"
    title="Revenue Reports"
    subtitle="Track earnings, booking performance, and trek-wise contribution in real time.">

    <div class="app-shell">
      <div class="header-row mb-3 d-flex justify-content-end">
        <button class="btn-app ghost" (click)="exportReport()">
          <i class="bi bi-download"></i>
          Export report
        </button>
      </div>

      <!-- \u2500\u2500 Summary \u2500\u2500 -->
      <section class="summary-section">
        <div class="revenue-card">
          <div>
            <h3>Total Revenue</h3>
            <span class="pill">{{ monthlyGrowthLabel }}</span>
          </div>
          <div class="revenue-amount">\u20B9{{ totalRevenue | number }}</div>
        </div>

        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-icon tone-primary">
              <i class="bi bi-ticket"></i>
            </div>
            <div>
              <div class="stat-value">{{ totalBookings }}</div>
              <div class="stat-label">Total Bookings</div>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon tone-warning">
              <i class="bi bi-graph-up"></i>
            </div>
            <div>
              <div class="stat-value">\u20B9{{ averageBookingValue | number:'1.0-0' }}</div>
              <div class="stat-label">Avg Booking Value</div>
            </div>
          </div>
        </div>
      </section>

      <!-- \u2500\u2500 Revenue vs Bookings Chart \u2500\u2500 -->
      <section class="chart-section">
        <div class="section-head chart-head">
          <div>
            <h2>Revenue vs Bookings</h2>
            <p>Monthly trend for the selected period.</p>
          </div>
          <div class="range-chips">
            <button class="range-chip" [class.active]="selectedRange === '3m'" (click)="setRange('3m')">3M</button>
            <button class="range-chip" [class.active]="selectedRange === '6m'" (click)="setRange('6m')">6M</button>
            <button class="range-chip" [class.active]="selectedRange === '12m'" (click)="setRange('12m')">12M</button>
          </div>
        </div>
        <div class="chart-card">
          <div class="chart-canvas-wrap">
            <canvas #revenueChart></canvas>
          </div>
        </div>
      </section>

      <!-- \u2500\u2500 Monthly Revenue Grid \u2500\u2500 -->
      <section class="monthly-section">
        <div class="section-head">
          <h2>Monthly Breakdown</h2>
          <p>Quick glance at the last {{ selectedRange === '3m' ? 3 : selectedRange === '6m' ? 6 : 12 }} months.</p>
        </div>
        <div class="month-grid">
          <div *ngFor="let data of filteredMonthlyData" class="month-card">
            <div class="month-header">
              <div class="month-name">{{ data.month }}</div>
              <div class="month-amount">\u20B9{{ (data.amount || data.revenue || 0) | number }}</div>
            </div>
            <div class="month-details">
              <span>{{ data.bookings || 0 }} bookings</span>
              <span>\u20B9{{ ((data.amount || data.revenue || 0) / (data.bookings || 1)) | number:'1.0-0' }} avg</span>
            </div>
            <div class="progress-bar">
              <div class="progress" [style.width.%]="getProgressPercent(data)"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- \u2500\u2500 Trek Revenue \u2500\u2500 -->
      <section class="trek-revenue-section">
        <div class="section-head">
          <h2>Revenue by Trek</h2>
          <p>Top performers this season.</p>
        </div>
        <div class="surface-card trek-panel">
          <div class="trek-item" *ngFor="let trek of trekRevenue; let i = index">
            <div class="trek-rank">{{ i + 1 }}</div>
            <div class="trek-info" style="flex:1">
              <h4>{{ trek.name }}</h4>
              <div class="trek-stats">
                <span>{{ trek.bookings }} bookings</span>
                <span class="revenue-value">\u20B9{{ (trek.revenue || trek.amount || 0) | number }}</span>
              </div>
              <div class="progress-bar" style="margin-top:8px">
                <div class="progress" [style.width.%]="((trek.revenue || trek.amount || 0) / maxMonthlyAmount) * 100"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </app-admin-shell>
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/analytics/analytics.component.scss */\n:host {\n  display: block;\n}\n.analytics-page {\n  --background: transparent;\n}\n.analytics-header {\n  margin-bottom: 24px;\n}\n.crumb {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  color: var(--app-ink-muted);\n  margin-bottom: 10px;\n}\n.icon-btn {\n  width: 42px;\n  height: 42px;\n  border-radius: 14px;\n  border: 1px solid var(--app-border);\n  background: #fff;\n  display: grid;\n  place-items: center;\n}\n.header-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n}\n.summary-section {\n  display: grid;\n  gap: 16px;\n}\n.chart-section {\n  margin-top: 28px;\n}\n.chart-head {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-bottom: 16px;\n}\n.chart-card {\n  background: #fff;\n  border: 1px solid var(--app-border);\n  border-radius: 20px;\n  padding: 20px;\n  box-shadow: var(--app-shadow-soft);\n}\n.chart-canvas-wrap {\n  position: relative;\n  width: 100%;\n  height: 300px;\n}\n.chart-canvas-wrap canvas {\n  width: 100% !important;\n  height: 100% !important;\n}\n.range-chips {\n  display: flex;\n  gap: 6px;\n}\n.range-chip {\n  border: 1px solid var(--app-border);\n  background: #fff;\n  border-radius: 999px;\n  padding: 6px 16px;\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--app-ink-muted);\n  cursor: pointer;\n  transition:\n    background 0.15s,\n    color 0.15s,\n    border-color 0.15s;\n}\n.range-chip:hover {\n  background: rgba(29, 122, 109, 0.07);\n  border-color: rgba(29, 122, 109, 0.3);\n  color: var(--app-accent);\n}\n.range-chip.active {\n  background: var(--app-accent);\n  color: #fff;\n  border-color: transparent;\n}\n.revenue-card {\n  background:\n    linear-gradient(\n      120deg,\n      rgba(29, 122, 109, 0.15),\n      rgba(241, 166, 77, 0.2));\n  border: 1px solid var(--app-border);\n  border-radius: var(--app-radius-lg);\n  padding: 20px 24px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: var(--app-shadow-soft);\n}\n.revenue-card h3 {\n  margin: 0 0 6px;\n}\n.revenue-amount {\n  font-size: 2rem;\n  font-weight: 700;\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 16px;\n}\n.stat-card {\n  background: #fff;\n  border: 1px solid var(--app-border);\n  border-radius: var(--app-radius);\n  padding: 16px;\n  display: flex;\n  gap: 12px;\n  align-items: center;\n  box-shadow: var(--app-shadow-soft);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.stat-card:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--app-shadow);\n}\n.stat-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 14px;\n  display: grid;\n  place-items: center;\n  background: rgba(29, 122, 109, 0.12);\n  color: var(--app-accent);\n}\n.stat-icon.tone-primary {\n  background: rgba(29, 122, 109, 0.18);\n  color: var(--app-accent);\n}\n.stat-icon.tone-warning {\n  background: rgba(231, 178, 59, 0.22);\n  color: #8a5f00;\n}\n.stat-value {\n  font-weight: 700;\n}\n.stat-label {\n  color: var(--app-ink-muted);\n}\n.monthly-section,\n.trek-revenue-section {\n  margin-top: 28px;\n}\n.section-head {\n  margin-bottom: 16px;\n}\n.section-head p {\n  color: var(--app-ink-muted);\n  margin: 6px 0 0;\n}\n.month-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 16px;\n}\n.month-card {\n  background: #fff;\n  border: 1px solid var(--app-border);\n  border-radius: var(--app-radius);\n  padding: 16px;\n  box-shadow: var(--app-shadow-soft);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.month-card:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--app-shadow);\n}\n.month-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 6px;\n}\n.month-details {\n  display: flex;\n  justify-content: space-between;\n  color: var(--app-ink-muted);\n  font-size: 0.9rem;\n}\n.progress-bar {\n  height: 8px;\n  background: #f1e8dd;\n  border-radius: 999px;\n  margin-top: 12px;\n  overflow: hidden;\n}\n.progress {\n  height: 100%;\n  background: var(--app-accent);\n  border-radius: 999px;\n}\n.trek-panel {\n  padding: 18px;\n  display: grid;\n  gap: 12px;\n}\n.trek-item {\n  display: flex;\n  gap: 16px;\n  align-items: center;\n  padding: 12px;\n  border-radius: 16px;\n  background: var(--app-surface-2);\n}\n.trek-rank {\n  width: 36px;\n  height: 36px;\n  border-radius: 12px;\n  background: #fff;\n  display: grid;\n  place-items: center;\n  font-weight: 700;\n}\n.trek-info h4 {\n  margin: 0 0 6px;\n}\n.trek-stats {\n  display: flex;\n  gap: 12px;\n  color: var(--app-ink-muted);\n}\n.revenue-value {\n  font-weight: 700;\n  color: var(--app-ink);\n}\n@media (max-width: 720px) {\n  .header-row {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .revenue-card {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n}\n/*# sourceMappingURL=analytics.component.css.map */\n'] }]
  }], () => [{ type: Analytics }], { revenueChartRef: [{
    type: ViewChild,
    args: ["revenueChart"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AnalyticsComponent, { className: "AnalyticsComponent", filePath: "src/app/analytics/analytics.component.ts", lineNumber: 20 });
})();

// src/app/analytics/analytics-module.ts
var routes = [{ path: "", component: AnalyticsComponent }];
var _AnalyticsModule = class _AnalyticsModule {
};
_AnalyticsModule.\u0275fac = function AnalyticsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AnalyticsModule)();
};
_AnalyticsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AnalyticsModule });
_AnalyticsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, AnalyticsComponent, RouterModule.forChild(routes)] });
var AnalyticsModule = _AnalyticsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnalyticsModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        CommonModule,
        AnalyticsComponent,
        RouterModule.forChild(routes)
      ]
    }]
  }], null, null);
})();
export {
  AnalyticsModule
};
//# sourceMappingURL=analytics-module-CWUNKLGU.js.map
