import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-QNEZ2FH5.js";
import {
  AuthService
} from "./chunk-D4XXJJII.js";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  CommonModule,
  Component,
  EncryptionService,
  HostListener,
  HttpClient,
  Injectable,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  Router,
  RouterLink,
  __spreadProps,
  __spreadValues,
  environment,
  map,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-KQE4QDNK.js";

// src/app/notifications/notifications.service.ts
var _NotificationsService = class _NotificationsService {
  constructor(http, crypto) {
    this.http = http;
    this.crypto = crypto;
    this.API = `${environment.baseUrl}`;
  }
  getNotifications() {
    return this.http.get(`${this.API}/notifications`).pipe(map((res) => {
      if (res?.data && typeof res.data === "string") {
        const decrypted = this.crypto.decrypt(res.data);
        return __spreadProps(__spreadValues({}, res), {
          data: decrypted
        });
      }
      return res;
    }));
  }
  markAllRead() {
    return this.http.post(`${this.API}/notifications/read-all`, {});
  }
  markRead(id) {
    return this.http.post(`${this.API}/notifications/read`, { id });
  }
};
_NotificationsService.\u0275fac = function NotificationsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NotificationsService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(EncryptionService));
};
_NotificationsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotificationsService, factory: _NotificationsService.\u0275fac, providedIn: "root" });
var NotificationsService = _NotificationsService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationsService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }, { type: EncryptionService }], null);
})();

// src/app/shared/admin-shell/admin-shell.component.ts
var _c0 = ["*"];
function AdminShellComponent_div_24_a_4_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngClass", item_r3.badgeClass || "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r3.badge, " ");
  }
}
function AdminShellComponent_div_24_a_4_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 55);
  }
}
function AdminShellComponent_div_24_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 48);
    \u0275\u0275listener("click", function AdminShellComponent_div_24_a_4_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeMobileMenu());
    });
    \u0275\u0275elementStart(1, "div", 49);
    \u0275\u0275element(2, "i", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 51);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, AdminShellComponent_div_24_a_4_span_5_Template, 2, 2, "span", 52)(6, AdminShellComponent_div_24_a_4_span_6_Template, 1, 0, "span", 53);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.isRouteActive(item_r3.route));
    \u0275\u0275property("routerLink", item_r3.route);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", "bi-" + item_r3.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r3.badge);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isRouteActive(item_r3.route));
  }
}
function AdminShellComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "span", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 46);
    \u0275\u0275template(4, AdminShellComponent_div_24_a_4_Template, 7, 7, "a", 47);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const section_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(section_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", section_r4.items);
  }
}
function AdminShellComponent_span_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.unreadNotifications > 99 ? "99+" : ctx_r1.unreadNotifications, " ");
  }
}
function AdminShellComponent_div_64_div_7_div_1_i_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 75);
  }
}
function AdminShellComponent_div_64_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275listener("mouseenter", function AdminShellComponent_div_64_div_7_div_1_Template_div_mouseenter_0_listener() {
      const i_r7 = \u0275\u0275restoreView(_r6).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.cmdSelectedIndex = i_r7);
    })("click", function AdminShellComponent_div_64_div_7_div_1_Template_div_click_0_listener() {
      const cmd_r8 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.executeCommand(cmd_r8));
    });
    \u0275\u0275elementStart(1, "div", 70);
    \u0275\u0275element(2, "i", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 71)(4, "span", 72);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 73);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, AdminShellComponent_div_64_div_7_div_1_i_8_Template, 1, 0, "i", 74);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cmd_r8 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", i_r7 === ctx_r1.cmdSelectedIndex);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", "bi-" + cmd_r8.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(cmd_r8.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cmd_r8.category);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", i_r7 === ctx_r1.cmdSelectedIndex);
  }
}
function AdminShellComponent_div_64_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275template(1, AdminShellComponent_div_64_div_7_div_1_Template, 9, 6, "div", 68);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.filteredCommands);
  }
}
function AdminShellComponent_div_64_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76);
    \u0275\u0275element(1, "i", 77);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1('No matching commands or pages found for "', ctx_r1.cmdSearch, '"');
  }
}
function AdminShellComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275listener("click", function AdminShellComponent_div_64_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCommandPalette());
    });
    \u0275\u0275elementStart(1, "div", 58);
    \u0275\u0275listener("click", function AdminShellComponent_div_64_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 59);
    \u0275\u0275element(3, "i", 60);
    \u0275\u0275elementStart(4, "input", 61);
    \u0275\u0275twoWayListener("ngModelChange", function AdminShellComponent_div_64_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.cmdSearch, $event) || (ctx_r1.cmdSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AdminShellComponent_div_64_Template_input_ngModelChange_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cmdSelectedIndex = 0);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 62);
    \u0275\u0275listener("click", function AdminShellComponent_div_64_Template_span_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCommandPalette());
    });
    \u0275\u0275text(6, "ESC");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, AdminShellComponent_div_64_div_7_Template, 2, 1, "div", 63)(8, AdminShellComponent_div_64_div_8_Template, 4, 1, "div", 64);
    \u0275\u0275elementStart(9, "div", 65)(10, "div", 66)(11, "kbd");
    \u0275\u0275text(12, "\u2191");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "kbd");
    \u0275\u0275text(14, "\u2193");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " to navigate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 66)(17, "kbd");
    \u0275\u0275text(18, "\u21B5");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " to select");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 66)(21, "kbd");
    \u0275\u0275text(22, "esc");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " to close");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.cmdSearch);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.filteredCommands.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredCommands.length === 0);
  }
}
function AdminShellComponent_button_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 78);
    \u0275\u0275listener("click", function AdminShellComponent_button_65_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMobileMenu());
    });
    \u0275\u0275elementEnd();
  }
}
var _AdminShellComponent = class _AdminShellComponent {
  handleGlobalKeydown(e) {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      this.toggleCommandPalette();
    } else if (e.key === "Escape" && this.isCmdPaletteOpen) {
      e.preventDefault();
      this.closeCommandPalette();
    } else if (this.isCmdPaletteOpen) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        this.cmdSelectedIndex = Math.min(this.filteredCommands.length - 1, this.cmdSelectedIndex + 1);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        this.cmdSelectedIndex = Math.max(0, this.cmdSelectedIndex - 1);
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (this.filteredCommands[this.cmdSelectedIndex]) {
          this.executeCommand(this.filteredCommands[this.cmdSelectedIndex]);
        }
      }
    }
  }
  get filteredCommands() {
    const q = this.cmdSearch.trim().toLowerCase();
    if (!q)
      return this.allCommands;
    return this.allCommands.filter((c) => c.title.toLowerCase().includes(q) || c.category.toLowerCase().includes(q));
  }
  get userInitial() {
    const name = this.currentUser?.name || this.currentUser?.email || "A";
    return name.charAt(0).toUpperCase();
  }
  get userDisplayName() {
    return this.currentUser?.name || this.currentUser?.email?.split("@")[0] || "Admin User";
  }
  get roleLabel() {
    return this.currentUser?.roleName || this.currentUser?.role || "Admin";
  }
  get permissionCount() {
    return Array.isArray(this.currentUser?.permissions) ? this.currentUser.permissions.length : 0;
  }
  constructor(router, notificationsService, authService) {
    this.router = router;
    this.notificationsService = notificationsService;
    this.authService = authService;
    this.title = "";
    this.subtitle = "";
    this.sectionLabel = "Admin";
    this.isMobileMenuOpen = false;
    this.unreadNotifications = 0;
    this.currentUser = null;
    this.isCmdPaletteOpen = false;
    this.cmdSearch = "";
    this.cmdSelectedIndex = 0;
    this.allCommands = [
      // Navigation
      { id: "nav-dash", title: "Dashboard", category: "Navigation", icon: "grid-1x2", route: "/admin/dashboard" },
      { id: "nav-operations", title: "Operations Center", category: "Navigation", icon: "clipboard-data", route: "/admin/operations" },
      { id: "nav-bookings", title: "Manage Bookings", category: "Navigation", icon: "calendar-event", route: "/admin/bookings" },
      { id: "nav-treks", title: "Treks Catalog", category: "Navigation", icon: "map", route: "/admin/treks/list" },
      { id: "nav-batches", title: "Batch Management & Slots", category: "Navigation", icon: "layers", route: "/admin/batch-management" },
      { id: "nav-coupons", title: "Coupon Manager", category: "Navigation", icon: "ticket-perforated", route: "/admin/coupons" },
      { id: "nav-referrals", title: "Referrals & Rewards", category: "Navigation", icon: "gift", route: "/admin/referrals" },
      { id: "nav-users", title: "Users & Customers", category: "Navigation", icon: "people", route: "/admin/users" },
      { id: "nav-reviews", title: "Reviews & Feedback", category: "Navigation", icon: "chat-square-quote", route: "/admin/reviews" },
      { id: "nav-blog", title: "Blog Stories", category: "Navigation", icon: "file-earmark-richtext", route: "/admin/blog/posts" },
      { id: "nav-static-pages", title: "Static Pages CMS", category: "Navigation", icon: "file-earmark-text", route: "/admin/content-pages" },
      { id: "nav-categories", title: "Taxonomy Categories", category: "Navigation", icon: "tags", route: "/admin/categories" },
      { id: "nav-notifications", title: "Notification Center", category: "Navigation", icon: "bell", route: "/admin/notifications" },
      { id: "nav-dropdowns", title: "Dropdown Manager", category: "Navigation", icon: "list-ul", route: "/admin/dropdowns" },
      { id: "nav-settings", title: "Brand & System Settings", category: "Navigation", icon: "gear", route: "/admin/settings" },
      // Quick Actions
      { id: "act-add-trek", title: "Create New Trek", category: "Action", icon: "plus-circle-fill", route: "/admin/treks/add" },
      { id: "act-add-batch", title: "Add Trek Batch", category: "Action", icon: "calendar-plus", route: "/admin/batch-management" },
      { id: "act-write-post", title: "Write Blog Story", category: "Action", icon: "pencil-square", route: "/admin/blog/editor" },
      { id: "act-new-coupon", title: "Create Coupon Code", category: "Action", icon: "tag-fill", route: "/admin/coupons" },
      { id: "act-broadcast", title: "Compose Notification", category: "Action", icon: "broadcast", route: "/admin/notifications" }
    ];
    this.navSections = [
      {
        title: "COMMAND & CONTROL",
        items: [
          { label: "Dashboard", icon: "grid-1x2", route: "/admin/dashboard", permission: "dashboard.view" },
          { label: "Operations Center", icon: "clipboard-data", route: "/admin/operations", permission: "operations.view", badge: "Live", badgeClass: "badge-emerald" }
        ]
      },
      {
        title: "EXPEDITIONS & BOOKINGS",
        items: [
          { label: "Bookings", icon: "calendar-event", route: "/admin/bookings", permission: "bookings.view" },
          { label: "Treks Catalog", icon: "map", route: "/admin/treks/list", permission: "treks.view" },
          { label: "Batch Management", icon: "layers", route: "/admin/batch-management", permission: "treks.view" },
          { label: "Coupons & Promos", icon: "ticket-perforated", route: "/admin/coupons", permission: "treks.manage" },
          { label: "Referrals & Rewards", icon: "gift", route: "/admin/referrals", permission: "referrals.manage" }
        ]
      },
      {
        title: "COMMUNITY & CRM",
        items: [
          { label: "Trekkers & Users", icon: "people", route: "/admin/users", permission: "users.view" },
          { label: "Reviews & Feedback", icon: "chat-square-quote", route: "/admin/reviews", permission: "reviews.view" },
          { label: "Notification Center", icon: "bell", route: "/admin/notifications", permission: "dashboard.view" }
        ]
      },
      {
        title: "SYSTEM & CMS",
        items: [
          { label: "Blog Stories", icon: "file-earmark-richtext", route: "/admin/blog/posts", permission: "blog.view" },
          { label: "Static Pages", icon: "file-earmark-text", route: "/admin/content-pages", permission: "blog.manage" },
          { label: "Categories", icon: "tags", route: "/admin/categories", permission: "dropdowns.manage" },
          { label: "Dropdown Manager", icon: "list-ul", route: "/admin/dropdowns", permission: "dropdowns.manage" },
          { label: "Brand & Settings", icon: "gear", route: "/admin/settings", permission: "dashboard.view" }
        ]
      }
    ];
    this.visibleNavSections = [];
  }
  ngOnInit() {
    this.currentUser = this.authService.getUser();
    this.updateVisibleNavSections();
    this.loadNotificationCount();
  }
  updateVisibleNavSections() {
    const user = this.currentUser || this.authService.getUser();
    if (!user) {
      this.visibleNavSections = this.navSections;
      return;
    }
    this.visibleNavSections = this.navSections.map((sec) => ({
      title: sec.title,
      items: sec.items.filter((item) => this.authService.hasPermission(item.permission))
    })).filter((sec) => sec.items.length > 0);
  }
  ngOnDestroy() {
  }
  toggleCommandPalette() {
    this.isCmdPaletteOpen = !this.isCmdPaletteOpen;
    if (this.isCmdPaletteOpen) {
      this.cmdSearch = "";
      this.cmdSelectedIndex = 0;
    }
  }
  closeCommandPalette() {
    this.isCmdPaletteOpen = false;
  }
  executeCommand(cmd) {
    this.closeCommandPalette();
    if (cmd.action) {
      cmd.action();
    } else if (cmd.route) {
      this.router.navigateByUrl(cmd.route);
    }
  }
  isRouteActive(route) {
    const current = (this.router.url || "").split("?")[0].split("#")[0];
    return current === route || current.startsWith(`${route}/`);
  }
  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
  logout() {
    this.authService.clearSession();
    this.router.navigate([""]);
  }
  openNotifications() {
    this.router.navigate(["/admin/notifications"]);
  }
  loadNotificationCount() {
    this.notificationsService.getNotifications().subscribe({
      next: (res) => {
        const rows = this.extractNotificationRows(res);
        this.unreadNotifications = rows.filter((n) => !this.isRead(n?.read)).length;
      },
      error: () => {
        this.unreadNotifications = 0;
      }
    });
  }
  extractNotificationRows(response) {
    if (Array.isArray(response?.data?.notifications))
      return response.data.notifications;
    if (Array.isArray(response?.notifications))
      return response.notifications;
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
_AdminShellComponent.\u0275fac = function AdminShellComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AdminShellComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(NotificationsService), \u0275\u0275directiveInject(AuthService));
};
_AdminShellComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminShellComponent, selectors: [["app-admin-shell"]], hostBindings: function AdminShellComponent_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("keydown", function AdminShellComponent_keydown_HostBindingHandler($event) {
      return ctx.handleGlobalKeydown($event);
    }, \u0275\u0275resolveWindow);
  }
}, inputs: { title: "title", subtitle: "subtitle", sectionLabel: "sectionLabel" }, ngContentSelectors: _c0, decls: 66, vars: 14, consts: [[1, "admin-shell"], [1, "admin-sidebar"], [1, "sidebar-brand-card"], [1, "brand-top-row"], [1, "brand-logo-wrap"], ["loading", "eager", "fetchpriority", "high", "decoding", "async", "src", "/assets/assets/logo.png", "alt", "goWILD\u2122 Karunadu", 1, "brand-logo"], [1, "brand-info"], [1, "brand-title-wrap"], [1, "brand-name"], [1, "tm"], [1, "brand-state"], [1, "brand-badge-pill"], [1, "badge-dot"], ["title", "Press Ctrl+K or \u2318K", 1, "sidebar-search-launcher", 3, "click"], [1, "bi", "bi-search"], ["aria-label", "Primary Navigation", 1, "admin-nav-grouped"], ["class", "nav-section", 4, "ngFor", "ngForOf"], [1, "sidebar-profile-card"], [1, "profile-left"], [1, "user-avatar-badge"], [1, "user-meta-details"], [1, "user-name-text"], [1, "user-role-tag"], ["type", "button", "title", "Sign out of Console", 1, "btn-sidebar-signout", 3, "click"], [1, "bi", "bi-box-arrow-right"], [1, "admin-main"], [1, "admin-header", "page-header"], ["type", "button", "aria-label", "Toggle menu", 1, "menu-btn", 3, "click"], [1, "bi", "bi-list"], [1, "pill"], [1, "page-title"], [1, "page-subtitle"], [1, "header-actions"], ["type", "button", "title", "Command Palette (Ctrl + K)", 1, "cmd-palette-trigger", 3, "click"], [1, "cmd-placeholder"], [1, "cmd-kbd"], [1, "user-summary"], [1, "role-pill"], ["type", "button", "aria-label", "Notifications", 1, "icon-btn", "notif-btn", 3, "click"], [1, "bi", "bi-bell"], ["class", "notif-badge", 4, "ngIf"], [1, "admin-content"], ["class", "cmd-backdrop", 3, "click", 4, "ngIf"], ["type", "button", "class", "mobile-overlay", "aria-label", "Close menu", 3, "click", 4, "ngIf"], [1, "nav-section"], [1, "nav-section-label"], [1, "nav-section-items"], ["class", "nav-item-link", 3, "routerLink", "active", "click", 4, "ngFor", "ngForOf"], [1, "nav-item-link", 3, "click", "routerLink"], [1, "nav-item-icon-box"], [1, "bi", 3, "ngClass"], [1, "nav-item-label"], ["class", "nav-item-badge", 3, "ngClass", 4, "ngIf"], ["class", "active-indicator", 4, "ngIf"], [1, "nav-item-badge", 3, "ngClass"], [1, "active-indicator"], [1, "notif-badge"], [1, "cmd-backdrop", 3, "click"], [1, "cmd-dialog", 3, "click"], [1, "cmd-search-box"], [1, "bi", "bi-search", "cmd-search-icon"], ["type", "text", "placeholder", "Type a command or jump to page...", "autofocus", "", 1, "cmd-input", 3, "ngModelChange", "ngModel"], [1, "cmd-esc-badge", 3, "click"], ["class", "cmd-results", 4, "ngIf"], ["class", "cmd-empty", 4, "ngIf"], [1, "cmd-footer"], [1, "cmd-shortcut-hint"], [1, "cmd-results"], ["class", "cmd-item", 3, "selected", "mouseenter", "click", 4, "ngFor", "ngForOf"], [1, "cmd-item", 3, "mouseenter", "click"], [1, "cmd-item-icon"], [1, "cmd-item-info"], [1, "cmd-item-title"], [1, "cmd-item-category"], ["class", "bi bi-arrow-return-left cmd-enter-icon", 4, "ngIf"], [1, "bi", "bi-arrow-return-left", "cmd-enter-icon"], [1, "cmd-empty"], [1, "bi", "bi-emoji-neutral"], ["type", "button", "aria-label", "Close menu", 1, "mobile-overlay", 3, "click"]], template: function AdminShellComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef();
    \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
    \u0275\u0275element(5, "img", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 6)(7, "div", 7)(8, "span", 8);
    \u0275\u0275text(9, "goWILD");
    \u0275\u0275elementStart(10, "span", 9);
    \u0275\u0275text(11, "\u2122");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "span", 10);
    \u0275\u0275text(13, "Karunadu");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "span", 11);
    \u0275\u0275element(15, "span", 12);
    \u0275\u0275text(16, " OPERATIONS DESK ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(17, "div", 13);
    \u0275\u0275listener("click", function AdminShellComponent_Template_div_click_17_listener() {
      return ctx.toggleCommandPalette();
    });
    \u0275\u0275element(18, "i", 14);
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20, "Jump to...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "kbd");
    \u0275\u0275text(22, "\u2318K");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "nav", 15);
    \u0275\u0275template(24, AdminShellComponent_div_24_Template, 5, 2, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 17)(26, "div", 18)(27, "div", 19);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 20)(30, "strong", 21);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 22);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "button", 23);
    \u0275\u0275listener("click", function AdminShellComponent_Template_button_click_34_listener() {
      return ctx.logout();
    });
    \u0275\u0275element(35, "i", 24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 25)(37, "header", 26)(38, "button", 27);
    \u0275\u0275listener("click", function AdminShellComponent_Template_button_click_38_listener() {
      return ctx.toggleMobileMenu();
    });
    \u0275\u0275element(39, "i", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div")(41, "span", 29);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "h1", 30);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "p", 31);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 32)(48, "button", 33);
    \u0275\u0275listener("click", function AdminShellComponent_Template_button_click_48_listener() {
      return ctx.toggleCommandPalette();
    });
    \u0275\u0275element(49, "i", 14);
    \u0275\u0275elementStart(50, "span", 34);
    \u0275\u0275text(51, "Search or jump to...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "kbd", 35);
    \u0275\u0275text(53, "\u2318K");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 36)(55, "span", 37);
    \u0275\u0275text(56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "small");
    \u0275\u0275text(58);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "button", 38);
    \u0275\u0275listener("click", function AdminShellComponent_Template_button_click_59_listener() {
      return ctx.openNotifications();
    });
    \u0275\u0275element(60, "i", 39);
    \u0275\u0275template(61, AdminShellComponent_span_61_Template, 2, 1, "span", 40);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(62, "main", 41);
    \u0275\u0275projection(63);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(64, AdminShellComponent_div_64_Template, 24, 3, "div", 42)(65, AdminShellComponent_button_65_Template, 1, 0, "button", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275classProp("mobile-nav-open", ctx.isMobileMenuOpen);
    \u0275\u0275advance(24);
    \u0275\u0275property("ngForOf", ctx.visibleNavSections);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx.userInitial, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.userDisplayName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.roleLabel);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx.sectionLabel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.subtitle);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx.roleLabel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx.permissionCount, " permissions active");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.unreadNotifications > 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.isCmdPaletteOpen);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isMobileMenuOpen);
  }
}, dependencies: [CommonModule, NgClass, NgForOf, NgIf, RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  font-family:\n    "Plus Jakarta Sans",\n    system-ui,\n    -apple-system,\n    sans-serif;\n}\n.admin-shell[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: grid;\n  grid-template-columns: 280px minmax(0, 1fr);\n  gap: 22px;\n  padding: 20px;\n  position: relative;\n  background: #f8fafc;\n}\n.admin-sidebar[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      175deg,\n      #052e24 0%,\n      #064033 40%,\n      #03211a 100%);\n  color: #f1f5f9;\n  border-radius: 22px;\n  padding: 20px 16px;\n  border: 1px solid rgba(52, 211, 153, 0.15);\n  box-shadow: 0 16px 40px rgba(3, 33, 26, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05);\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  position: sticky;\n  top: 20px;\n  height: calc(100vh - 40px);\n  overflow-y: auto;\n  scrollbar-width: thin;\n  scrollbar-color: rgba(52, 211, 153, 0.25) transparent;\n}\n.admin-sidebar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n}\n.admin-sidebar[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.admin-sidebar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(52, 211, 153, 0.2);\n  border-radius: 10px;\n}\n.sidebar-brand-card[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  border-radius: 16px;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  transition: transform 0.2s ease, background 0.2s ease;\n}\n.sidebar-brand-card[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.09);\n  transform: translateY(-1px);\n}\n.sidebar-brand-card[_ngcontent-%COMP%]   .brand-top-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.sidebar-brand-card[_ngcontent-%COMP%]   .brand-top-row[_ngcontent-%COMP%]   .brand-logo-wrap[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background: #ffffff;\n  padding: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  flex-shrink: 0;\n}\n.sidebar-brand-card[_ngcontent-%COMP%]   .brand-top-row[_ngcontent-%COMP%]   .brand-logo-wrap[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n.sidebar-brand-card[_ngcontent-%COMP%]   .brand-top-row[_ngcontent-%COMP%]   .brand-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.sidebar-brand-card[_ngcontent-%COMP%]   .brand-top-row[_ngcontent-%COMP%]   .brand-info[_ngcontent-%COMP%]   .brand-title-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 4px;\n}\n.sidebar-brand-card[_ngcontent-%COMP%]   .brand-top-row[_ngcontent-%COMP%]   .brand-info[_ngcontent-%COMP%]   .brand-title-wrap[_ngcontent-%COMP%]   .brand-name[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 900;\n  color: #ffffff;\n  letter-spacing: -0.02em;\n}\n.sidebar-brand-card[_ngcontent-%COMP%]   .brand-top-row[_ngcontent-%COMP%]   .brand-info[_ngcontent-%COMP%]   .brand-title-wrap[_ngcontent-%COMP%]   .brand-name[_ngcontent-%COMP%]   .tm[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  color: #34d399;\n  vertical-align: super;\n}\n.sidebar-brand-card[_ngcontent-%COMP%]   .brand-top-row[_ngcontent-%COMP%]   .brand-info[_ngcontent-%COMP%]   .brand-title-wrap[_ngcontent-%COMP%]   .brand-state[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: #a7f3d0;\n  letter-spacing: -0.01em;\n}\n.sidebar-brand-card[_ngcontent-%COMP%]   .brand-top-row[_ngcontent-%COMP%]   .brand-info[_ngcontent-%COMP%]   .brand-badge-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.64rem;\n  font-weight: 800;\n  letter-spacing: 0.06em;\n  color: #6ee7b7;\n  text-transform: uppercase;\n}\n.sidebar-brand-card[_ngcontent-%COMP%]   .brand-top-row[_ngcontent-%COMP%]   .brand-info[_ngcontent-%COMP%]   .brand-badge-pill[_ngcontent-%COMP%]   .badge-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #10b981;\n  box-shadow: 0 0 6px #34d399;\n}\n.sidebar-search-launcher[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  padding: 9px 14px;\n  background: rgba(0, 0, 0, 0.25);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 12px;\n  color: #94a3b8;\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.sidebar-search-launcher[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #34d399;\n}\n.sidebar-search-launcher[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 1;\n  color: #cbd5e1;\n}\n.sidebar-search-launcher[_ngcontent-%COMP%]   kbd[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 6px;\n  padding: 2px 6px;\n  font-size: 0.68rem;\n  font-family: inherit;\n  font-weight: 800;\n  color: #a7f3d0;\n}\n.sidebar-search-launcher[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.4);\n  border-color: rgba(52, 211, 153, 0.35);\n  color: #ffffff;\n  transform: translateY(-1px);\n}\n.admin-nav-grouped[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  flex: 1;\n}\n.admin-nav-grouped[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.admin-nav-grouped[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%]   .nav-section-label[_ngcontent-%COMP%] {\n  font-size: 0.66rem;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: rgba(167, 243, 208, 0.5);\n  padding: 0 10px 4px;\n}\n.admin-nav-grouped[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%]   .nav-section-items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.admin-nav-grouped[_ngcontent-%COMP%]   .nav-item-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px;\n  border-radius: 12px;\n  color: #cbd5e1;\n  font-size: 0.84rem;\n  font-weight: 600;\n  text-decoration: none;\n  position: relative;\n  border: 1px solid transparent;\n  transition: all 0.18s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.admin-nav-grouped[_ngcontent-%COMP%]   .nav-item-link[_ngcontent-%COMP%]   .nav-item-icon-box[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.95rem;\n  color: #94a3b8;\n  transition: all 0.18s ease;\n}\n.admin-nav-grouped[_ngcontent-%COMP%]   .nav-item-link[_ngcontent-%COMP%]   .nav-item-label[_ngcontent-%COMP%] {\n  flex: 1;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.admin-nav-grouped[_ngcontent-%COMP%]   .nav-item-link[_ngcontent-%COMP%]   .nav-item-badge[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 800;\n  padding: 2px 7px;\n  border-radius: 10px;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.admin-nav-grouped[_ngcontent-%COMP%]   .nav-item-link[_ngcontent-%COMP%]   .nav-item-badge.badge-emerald[_ngcontent-%COMP%] {\n  background: #10b981;\n  color: #022c22;\n  box-shadow: 0 0 8px rgba(16, 185, 129, 0.5);\n}\n.admin-nav-grouped[_ngcontent-%COMP%]   .nav-item-link[_ngcontent-%COMP%]   .active-indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #34d399;\n  box-shadow: 0 0 8px #34d399;\n}\n.admin-nav-grouped[_ngcontent-%COMP%]   .nav-item-link[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.07);\n  color: #ffffff;\n  transform: translateX(3px);\n}\n.admin-nav-grouped[_ngcontent-%COMP%]   .nav-item-link[_ngcontent-%COMP%]:hover   .nav-item-icon-box[_ngcontent-%COMP%] {\n  color: #34d399;\n  transform: scale(1.1);\n}\n.admin-nav-grouped[_ngcontent-%COMP%]   .nav-item-link.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(16, 185, 129, 0.22) 0%,\n      rgba(5, 150, 105, 0.12) 100%);\n  border-color: rgba(52, 211, 153, 0.35);\n  color: #ffffff;\n  font-weight: 700;\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);\n}\n.admin-nav-grouped[_ngcontent-%COMP%]   .nav-item-link.active[_ngcontent-%COMP%]   .nav-item-icon-box[_ngcontent-%COMP%] {\n  color: #34d399;\n}\n.sidebar-profile-card[_ngcontent-%COMP%] {\n  margin-top: auto;\n  padding: 10px 12px;\n  border-radius: 14px;\n  background: rgba(0, 0, 0, 0.3);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n}\n.sidebar-profile-card[_ngcontent-%COMP%]   .profile-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 0;\n}\n.sidebar-profile-card[_ngcontent-%COMP%]   .profile-left[_ngcontent-%COMP%]   .user-avatar-badge[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #059669 100%);\n  color: #ffffff;\n  font-size: 0.95rem;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 10px rgba(16, 185, 129, 0.3);\n  flex-shrink: 0;\n}\n.sidebar-profile-card[_ngcontent-%COMP%]   .profile-left[_ngcontent-%COMP%]   .user-meta-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n  min-width: 0;\n}\n.sidebar-profile-card[_ngcontent-%COMP%]   .profile-left[_ngcontent-%COMP%]   .user-meta-details[_ngcontent-%COMP%]   .user-name-text[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  font-weight: 700;\n  color: #ffffff;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sidebar-profile-card[_ngcontent-%COMP%]   .profile-left[_ngcontent-%COMP%]   .user-meta-details[_ngcontent-%COMP%]   .user-role-tag[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: #a7f3d0;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.sidebar-profile-card[_ngcontent-%COMP%]   .btn-sidebar-signout[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 10px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  background: rgba(255, 255, 255, 0.06);\n  color: #cbd5e1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 0.9rem;\n  transition: all 0.18s ease;\n}\n.sidebar-profile-card[_ngcontent-%COMP%]   .btn-sidebar-signout[_ngcontent-%COMP%]:hover {\n  background: #ef4444;\n  border-color: #ef4444;\n  color: #ffffff;\n  transform: scale(1.05);\n  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.35);\n}\n.admin-main[_ngcontent-%COMP%] {\n  min-width: 0;\n  display: grid;\n  grid-template-rows: auto 1fr;\n  gap: 18px;\n}\n.admin-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  background: #ffffff;\n  padding: 16px 22px;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 2px 10px rgba(15, 23, 42, 0.03);\n}\n.admin-header[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%] {\n  display: none;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  width: 38px;\n  height: 38px;\n  font-size: 1.25rem;\n  color: #334155;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n}\n.admin-header[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 0.72rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #065f46;\n  background: #d1fae5;\n  padding: 3px 9px;\n  border-radius: 12px;\n  margin-bottom: 4px;\n}\n.admin-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.35rem;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n  color: #0f172a;\n}\n.admin-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  margin: 2px 0 0;\n  font-size: 0.84rem;\n  color: #64748b;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-left: auto;\n}\n.header-actions[_ngcontent-%COMP%]   .cmd-palette-trigger[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 14px;\n  background: #f8fafc;\n  border: 1px solid #cbd5e1;\n  border-radius: 12px;\n  color: #64748b;\n  font-size: 0.84rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.header-actions[_ngcontent-%COMP%]   .cmd-palette-trigger[_ngcontent-%COMP%]:hover {\n  border-color: #064e3b;\n  color: #064e3b;\n  background: #ffffff;\n  box-shadow: 0 4px 12px rgba(6, 78, 59, 0.1);\n}\n.header-actions[_ngcontent-%COMP%]   .cmd-palette-trigger[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #059669;\n}\n.header-actions[_ngcontent-%COMP%]   .cmd-palette-trigger[_ngcontent-%COMP%]   .cmd-kbd[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  border: 1px solid #cbd5e1;\n  border-radius: 6px;\n  padding: 2px 6px;\n  font-size: 0.72rem;\n  font-weight: 800;\n  color: #334155;\n}\n.header-actions[_ngcontent-%COMP%]   .user-summary[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 2px;\n}\n.header-actions[_ngcontent-%COMP%]   .user-summary[_ngcontent-%COMP%]   .role-pill[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  font-weight: 800;\n  color: #065f46;\n  background: #ecfdf5;\n  border: 1px solid #a7f3d0;\n  padding: 3px 10px;\n  border-radius: 20px;\n  text-transform: capitalize;\n}\n.header-actions[_ngcontent-%COMP%]   .user-summary[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #94a3b8;\n}\n.header-actions[_ngcontent-%COMP%]   .notif-btn[_ngcontent-%COMP%] {\n  position: relative;\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  color: #475569;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.header-actions[_ngcontent-%COMP%]   .notif-btn[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n  border-color: #cbd5e1;\n}\n.header-actions[_ngcontent-%COMP%]   .notif-btn[_ngcontent-%COMP%]   .notif-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -4px;\n  right: -4px;\n  background: #ef4444;\n  color: #ffffff;\n  font-size: 0.65rem;\n  font-weight: 800;\n  padding: 2px 5px;\n  border-radius: 10px;\n  border: 2px solid #ffffff;\n  box-shadow: 0 2px 6px rgba(239, 68, 68, 0.4);\n}\n.cmd-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.6);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  z-index: 9999;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  padding-top: 12vh;\n  animation: _ngcontent-%COMP%_fadeIn 0.18s ease-out;\n}\n.cmd-dialog[_ngcontent-%COMP%] {\n  background: #ffffff;\n  width: min(580px, 92vw);\n  border-radius: 18px;\n  box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.35);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  max-height: 70vh;\n  animation: _ngcontent-%COMP%_slideUp 0.18s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.cmd-search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 16px 20px;\n  border-bottom: 1px solid #f1f5f9;\n  gap: 12px;\n}\n.cmd-search-box[_ngcontent-%COMP%]   .cmd-search-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: #059669;\n}\n.cmd-search-box[_ngcontent-%COMP%]   .cmd-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  font-size: 1rem;\n  color: #0f172a;\n  background: transparent;\n}\n.cmd-search-box[_ngcontent-%COMP%]   .cmd-input[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.cmd-search-box[_ngcontent-%COMP%]   .cmd-esc-badge[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  border: 1px solid #cbd5e1;\n  border-radius: 6px;\n  padding: 2px 7px;\n  font-size: 0.7rem;\n  font-weight: 800;\n  color: #64748b;\n  cursor: pointer;\n}\n.cmd-results[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  padding: 8px;\n  max-height: 380px;\n}\n.cmd-results[_ngcontent-%COMP%]   .cmd-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 14px;\n  border-radius: 12px;\n  cursor: pointer;\n  transition: all 0.12s ease;\n}\n.cmd-results[_ngcontent-%COMP%]   .cmd-item[_ngcontent-%COMP%]   .cmd-item-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background: #f8fafc;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.95rem;\n  color: #64748b;\n}\n.cmd-results[_ngcontent-%COMP%]   .cmd-item[_ngcontent-%COMP%]   .cmd-item-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.cmd-results[_ngcontent-%COMP%]   .cmd-item[_ngcontent-%COMP%]   .cmd-item-info[_ngcontent-%COMP%]   .cmd-item-title[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.cmd-results[_ngcontent-%COMP%]   .cmd-item[_ngcontent-%COMP%]   .cmd-item-info[_ngcontent-%COMP%]   .cmd-item-category[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #94a3b8;\n}\n.cmd-results[_ngcontent-%COMP%]   .cmd-item[_ngcontent-%COMP%]   .cmd-enter-icon[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #059669;\n}\n.cmd-results[_ngcontent-%COMP%]   .cmd-item[_ngcontent-%COMP%]:hover, \n.cmd-results[_ngcontent-%COMP%]   .cmd-item.selected[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n}\n.cmd-results[_ngcontent-%COMP%]   .cmd-item[_ngcontent-%COMP%]:hover   .cmd-item-icon[_ngcontent-%COMP%], \n.cmd-results[_ngcontent-%COMP%]   .cmd-item.selected[_ngcontent-%COMP%]   .cmd-item-icon[_ngcontent-%COMP%] {\n  background: #059669;\n  color: #ffffff;\n}\n.cmd-results[_ngcontent-%COMP%]   .cmd-item[_ngcontent-%COMP%]:hover   .cmd-item-title[_ngcontent-%COMP%], \n.cmd-results[_ngcontent-%COMP%]   .cmd-item.selected[_ngcontent-%COMP%]   .cmd-item-title[_ngcontent-%COMP%] {\n  color: #064e3b;\n}\n.cmd-empty[_ngcontent-%COMP%] {\n  padding: 36px 20px;\n  text-align: center;\n  color: #94a3b8;\n}\n.cmd-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 6px;\n  display: block;\n}\n.cmd-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.86rem;\n}\n.cmd-footer[_ngcontent-%COMP%] {\n  padding: 10px 18px;\n  background: #f8fafc;\n  border-top: 1px solid #f1f5f9;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.cmd-footer[_ngcontent-%COMP%]   .cmd-shortcut-hint[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #64748b;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.cmd-footer[_ngcontent-%COMP%]   .cmd-shortcut-hint[_ngcontent-%COMP%]   kbd[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #cbd5e1;\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-size: 0.68rem;\n  font-weight: 700;\n}\n.mobile-overlay[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 1024px) {\n  .admin-shell[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    padding: 14px;\n  }\n  .admin-header[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%] {\n    display: inline-flex;\n  }\n  .admin-sidebar[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    width: 290px;\n    height: 100vh;\n    border-radius: 0;\n    z-index: 10000;\n    transform: translateX(-100%);\n    transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);\n  }\n  .admin-shell.mobile-nav-open[_ngcontent-%COMP%]   .admin-sidebar[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n  .mobile-overlay[_ngcontent-%COMP%] {\n    display: block;\n    position: fixed;\n    inset: 0;\n    background: rgba(15, 23, 42, 0.6);\n    -webkit-backdrop-filter: blur(4px);\n    backdrop-filter: blur(4px);\n    z-index: 9998;\n    border: none;\n    cursor: pointer;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(12px) scale(0.98);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n/*# sourceMappingURL=admin-shell.component.css.map */'] });
var AdminShellComponent = _AdminShellComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminShellComponent, [{
    type: Component,
    args: [{ selector: "app-admin-shell", standalone: true, imports: [CommonModule, RouterLink, FormsModule], schemas: [CUSTOM_ELEMENTS_SCHEMA], template: `<div class="admin-shell" [class.mobile-nav-open]="isMobileMenuOpen">
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       ELEVATED MODERN ADMIN SIDEBAR
       \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <aside class="admin-sidebar">
    <!-- Brand Header Block -->
    <div class="sidebar-brand-card">
      <div class="brand-top-row">
        <div class="brand-logo-wrap">
          <img
            loading="eager"
            fetchpriority="high"
            decoding="async"
            src="/assets/assets/logo.png"
            alt="goWILD\u2122 Karunadu"
            class="brand-logo"
          />
        </div>
        <div class="brand-info">
          <div class="brand-title-wrap">
            <span class="brand-name">goWILD<span class="tm">\u2122</span></span>
            <span class="brand-state">Karunadu</span>
          </div>
          <span class="brand-badge-pill">
            <span class="badge-dot"></span>
            OPERATIONS DESK
          </span>
        </div>
      </div>
    </div>

    <!-- Quick Command Launcher Pill -->
    <div class="sidebar-search-launcher" (click)="toggleCommandPalette()" title="Press Ctrl+K or \u2318K">
      <i class="bi bi-search"></i>
      <span>Jump to...</span>
      <kbd>\u2318K</kbd>
    </div>

    <!-- Grouped Navigation Menu -->
    <nav class="admin-nav-grouped" aria-label="Primary Navigation">
      <div class="nav-section" *ngFor="let section of visibleNavSections">
        <span class="nav-section-label">{{ section.title }}</span>

        <div class="nav-section-items">
          <a
            *ngFor="let item of section.items"
            [routerLink]="item.route"
            (click)="closeMobileMenu()"
            class="nav-item-link"
            [class.active]="isRouteActive(item.route)">
            <div class="nav-item-icon-box">
              <i class="bi" [ngClass]="'bi-' + item.icon"></i>
            </div>
            <span class="nav-item-label">{{ item.label }}</span>
            <span class="nav-item-badge" *ngIf="item.badge" [ngClass]="item.badgeClass || ''">
              {{ item.badge }}
            </span>
            <span class="active-indicator" *ngIf="isRouteActive(item.route)"></span>
          </a>
        </div>
      </div>
    </nav>

    <!-- Sidebar Footer Profile Card -->
    <div class="sidebar-profile-card">
      <div class="profile-left">
        <div class="user-avatar-badge">
          {{ userInitial }}
        </div>
        <div class="user-meta-details">
          <strong class="user-name-text">{{ userDisplayName }}</strong>
          <span class="user-role-tag">{{ roleLabel }}</span>
        </div>
      </div>

      <button
        type="button"
        class="btn-sidebar-signout"
        (click)="logout()"
        title="Sign out of Console">
        <i class="bi bi-box-arrow-right"></i>
      </button>
    </div>
  </aside>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       MAIN APPLICATION VIEWPORT
       \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="admin-main">
    <header class="admin-header page-header">
      <button type="button" class="menu-btn" (click)="toggleMobileMenu()" aria-label="Toggle menu">
        <i class="bi bi-list"></i>
      </button>
      <div>
        <span class="pill">{{ sectionLabel }}</span>
        <h1 class="page-title">{{ title }}</h1>
        <p class="page-subtitle">{{ subtitle }}</p>
      </div>
      <div class="header-actions">
        <button type="button" class="cmd-palette-trigger" (click)="toggleCommandPalette()" title="Command Palette (Ctrl + K)">
          <i class="bi bi-search"></i>
          <span class="cmd-placeholder">Search or jump to...</span>
          <kbd class="cmd-kbd">\u2318K</kbd>
        </button>

        <div class="user-summary">
          <span class="role-pill">{{ roleLabel }}</span>
          <small>{{ permissionCount }} permissions active</small>
        </div>

        <button type="button" class="icon-btn notif-btn" (click)="openNotifications()" aria-label="Notifications">
          <i class="bi bi-bell"></i>
          <span class="notif-badge" *ngIf="unreadNotifications > 0">
            {{ unreadNotifications > 99 ? '99+' : unreadNotifications }}
          </span>
        </button>
      </div>
    </header>

    <main class="admin-content">
      <ng-content></ng-content>
    </main>
  </div>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       COMMAND PALETTE SPOTLIGHT MODAL OVERLAY
       \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="cmd-backdrop" *ngIf="isCmdPaletteOpen" (click)="closeCommandPalette()">
    <div class="cmd-dialog" (click)="$event.stopPropagation()">
      <div class="cmd-search-box">
        <i class="bi bi-search cmd-search-icon"></i>
        <input
          type="text"
          class="cmd-input"
          placeholder="Type a command or jump to page..."
          [(ngModel)]="cmdSearch"
          (ngModelChange)="cmdSelectedIndex = 0"
          autofocus
        />
        <span class="cmd-esc-badge" (click)="closeCommandPalette()">ESC</span>
      </div>

      <div class="cmd-results" *ngIf="filteredCommands.length > 0">
        <div
          *ngFor="let cmd of filteredCommands; let i = index"
          class="cmd-item"
          [class.selected]="i === cmdSelectedIndex"
          (mouseenter)="cmdSelectedIndex = i"
          (click)="executeCommand(cmd)">
          <div class="cmd-item-icon">
            <i class="bi" [ngClass]="'bi-' + cmd.icon"></i>
          </div>
          <div class="cmd-item-info">
            <span class="cmd-item-title">{{ cmd.title }}</span>
            <span class="cmd-item-category">{{ cmd.category }}</span>
          </div>
          <i class="bi bi-arrow-return-left cmd-enter-icon" *ngIf="i === cmdSelectedIndex"></i>
        </div>
      </div>

      <div class="cmd-empty" *ngIf="filteredCommands.length === 0">
        <i class="bi bi-emoji-neutral"></i>
        <p>No matching commands or pages found for "{{ cmdSearch }}"</p>
      </div>

      <div class="cmd-footer">
        <div class="cmd-shortcut-hint"><kbd>\u2191</kbd><kbd>\u2193</kbd> to navigate</div>
        <div class="cmd-shortcut-hint"><kbd>\u21B5</kbd> to select</div>
        <div class="cmd-shortcut-hint"><kbd>esc</kbd> to close</div>
      </div>
    </div>
  </div>

  <button
    type="button"
    class="mobile-overlay"
    *ngIf="isMobileMenuOpen"
    (click)="closeMobileMenu()"
    aria-label="Close menu">
  </button>
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/shared/admin-shell/admin-shell.component.scss */\n:host {\n  display: block;\n  font-family:\n    "Plus Jakarta Sans",\n    system-ui,\n    -apple-system,\n    sans-serif;\n}\n.admin-shell {\n  min-height: 100vh;\n  display: grid;\n  grid-template-columns: 280px minmax(0, 1fr);\n  gap: 22px;\n  padding: 20px;\n  position: relative;\n  background: #f8fafc;\n}\n.admin-sidebar {\n  background:\n    linear-gradient(\n      175deg,\n      #052e24 0%,\n      #064033 40%,\n      #03211a 100%);\n  color: #f1f5f9;\n  border-radius: 22px;\n  padding: 20px 16px;\n  border: 1px solid rgba(52, 211, 153, 0.15);\n  box-shadow: 0 16px 40px rgba(3, 33, 26, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05);\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  position: sticky;\n  top: 20px;\n  height: calc(100vh - 40px);\n  overflow-y: auto;\n  scrollbar-width: thin;\n  scrollbar-color: rgba(52, 211, 153, 0.25) transparent;\n}\n.admin-sidebar::-webkit-scrollbar {\n  width: 5px;\n}\n.admin-sidebar::-webkit-scrollbar-track {\n  background: transparent;\n}\n.admin-sidebar::-webkit-scrollbar-thumb {\n  background: rgba(52, 211, 153, 0.2);\n  border-radius: 10px;\n}\n.sidebar-brand-card {\n  padding: 12px 14px;\n  border-radius: 16px;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  transition: transform 0.2s ease, background 0.2s ease;\n}\n.sidebar-brand-card:hover {\n  background: rgba(255, 255, 255, 0.09);\n  transform: translateY(-1px);\n}\n.sidebar-brand-card .brand-top-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.sidebar-brand-card .brand-top-row .brand-logo-wrap {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background: #ffffff;\n  padding: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  flex-shrink: 0;\n}\n.sidebar-brand-card .brand-top-row .brand-logo-wrap .brand-logo {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n.sidebar-brand-card .brand-top-row .brand-info {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.sidebar-brand-card .brand-top-row .brand-info .brand-title-wrap {\n  display: flex;\n  align-items: baseline;\n  gap: 4px;\n}\n.sidebar-brand-card .brand-top-row .brand-info .brand-title-wrap .brand-name {\n  font-size: 1.05rem;\n  font-weight: 900;\n  color: #ffffff;\n  letter-spacing: -0.02em;\n}\n.sidebar-brand-card .brand-top-row .brand-info .brand-title-wrap .brand-name .tm {\n  font-size: 0.65rem;\n  color: #34d399;\n  vertical-align: super;\n}\n.sidebar-brand-card .brand-top-row .brand-info .brand-title-wrap .brand-state {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: #a7f3d0;\n  letter-spacing: -0.01em;\n}\n.sidebar-brand-card .brand-top-row .brand-info .brand-badge-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.64rem;\n  font-weight: 800;\n  letter-spacing: 0.06em;\n  color: #6ee7b7;\n  text-transform: uppercase;\n}\n.sidebar-brand-card .brand-top-row .brand-info .brand-badge-pill .badge-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #10b981;\n  box-shadow: 0 0 6px #34d399;\n}\n.sidebar-search-launcher {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  padding: 9px 14px;\n  background: rgba(0, 0, 0, 0.25);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 12px;\n  color: #94a3b8;\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.sidebar-search-launcher i {\n  font-size: 0.85rem;\n  color: #34d399;\n}\n.sidebar-search-launcher span {\n  flex: 1;\n  color: #cbd5e1;\n}\n.sidebar-search-launcher kbd {\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 6px;\n  padding: 2px 6px;\n  font-size: 0.68rem;\n  font-family: inherit;\n  font-weight: 800;\n  color: #a7f3d0;\n}\n.sidebar-search-launcher:hover {\n  background: rgba(0, 0, 0, 0.4);\n  border-color: rgba(52, 211, 153, 0.35);\n  color: #ffffff;\n  transform: translateY(-1px);\n}\n.admin-nav-grouped {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  flex: 1;\n}\n.admin-nav-grouped .nav-section {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.admin-nav-grouped .nav-section .nav-section-label {\n  font-size: 0.66rem;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: rgba(167, 243, 208, 0.5);\n  padding: 0 10px 4px;\n}\n.admin-nav-grouped .nav-section .nav-section-items {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.admin-nav-grouped .nav-item-link {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px;\n  border-radius: 12px;\n  color: #cbd5e1;\n  font-size: 0.84rem;\n  font-weight: 600;\n  text-decoration: none;\n  position: relative;\n  border: 1px solid transparent;\n  transition: all 0.18s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.admin-nav-grouped .nav-item-link .nav-item-icon-box {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.95rem;\n  color: #94a3b8;\n  transition: all 0.18s ease;\n}\n.admin-nav-grouped .nav-item-link .nav-item-label {\n  flex: 1;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.admin-nav-grouped .nav-item-link .nav-item-badge {\n  font-size: 0.68rem;\n  font-weight: 800;\n  padding: 2px 7px;\n  border-radius: 10px;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.admin-nav-grouped .nav-item-link .nav-item-badge.badge-emerald {\n  background: #10b981;\n  color: #022c22;\n  box-shadow: 0 0 8px rgba(16, 185, 129, 0.5);\n}\n.admin-nav-grouped .nav-item-link .active-indicator {\n  position: absolute;\n  right: 10px;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #34d399;\n  box-shadow: 0 0 8px #34d399;\n}\n.admin-nav-grouped .nav-item-link:hover {\n  background: rgba(255, 255, 255, 0.07);\n  color: #ffffff;\n  transform: translateX(3px);\n}\n.admin-nav-grouped .nav-item-link:hover .nav-item-icon-box {\n  color: #34d399;\n  transform: scale(1.1);\n}\n.admin-nav-grouped .nav-item-link.active {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(16, 185, 129, 0.22) 0%,\n      rgba(5, 150, 105, 0.12) 100%);\n  border-color: rgba(52, 211, 153, 0.35);\n  color: #ffffff;\n  font-weight: 700;\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);\n}\n.admin-nav-grouped .nav-item-link.active .nav-item-icon-box {\n  color: #34d399;\n}\n.sidebar-profile-card {\n  margin-top: auto;\n  padding: 10px 12px;\n  border-radius: 14px;\n  background: rgba(0, 0, 0, 0.3);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n}\n.sidebar-profile-card .profile-left {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 0;\n}\n.sidebar-profile-card .profile-left .user-avatar-badge {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #059669 100%);\n  color: #ffffff;\n  font-size: 0.95rem;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 10px rgba(16, 185, 129, 0.3);\n  flex-shrink: 0;\n}\n.sidebar-profile-card .profile-left .user-meta-details {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n  min-width: 0;\n}\n.sidebar-profile-card .profile-left .user-meta-details .user-name-text {\n  font-size: 0.84rem;\n  font-weight: 700;\n  color: #ffffff;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sidebar-profile-card .profile-left .user-meta-details .user-role-tag {\n  font-size: 0.68rem;\n  color: #a7f3d0;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.sidebar-profile-card .btn-sidebar-signout {\n  width: 34px;\n  height: 34px;\n  border-radius: 10px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  background: rgba(255, 255, 255, 0.06);\n  color: #cbd5e1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 0.9rem;\n  transition: all 0.18s ease;\n}\n.sidebar-profile-card .btn-sidebar-signout:hover {\n  background: #ef4444;\n  border-color: #ef4444;\n  color: #ffffff;\n  transform: scale(1.05);\n  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.35);\n}\n.admin-main {\n  min-width: 0;\n  display: grid;\n  grid-template-rows: auto 1fr;\n  gap: 18px;\n}\n.admin-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  background: #ffffff;\n  padding: 16px 22px;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 2px 10px rgba(15, 23, 42, 0.03);\n}\n.admin-header .menu-btn {\n  display: none;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  width: 38px;\n  height: 38px;\n  font-size: 1.25rem;\n  color: #334155;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n}\n.admin-header .pill {\n  display: inline-block;\n  font-size: 0.72rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #065f46;\n  background: #d1fae5;\n  padding: 3px 9px;\n  border-radius: 12px;\n  margin-bottom: 4px;\n}\n.admin-header .page-title {\n  margin: 0;\n  font-size: 1.35rem;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n  color: #0f172a;\n}\n.admin-header .page-subtitle {\n  margin: 2px 0 0;\n  font-size: 0.84rem;\n  color: #64748b;\n}\n.header-actions {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-left: auto;\n}\n.header-actions .cmd-palette-trigger {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 14px;\n  background: #f8fafc;\n  border: 1px solid #cbd5e1;\n  border-radius: 12px;\n  color: #64748b;\n  font-size: 0.84rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.header-actions .cmd-palette-trigger:hover {\n  border-color: #064e3b;\n  color: #064e3b;\n  background: #ffffff;\n  box-shadow: 0 4px 12px rgba(6, 78, 59, 0.1);\n}\n.header-actions .cmd-palette-trigger i {\n  font-size: 0.85rem;\n  color: #059669;\n}\n.header-actions .cmd-palette-trigger .cmd-kbd {\n  background: #e2e8f0;\n  border: 1px solid #cbd5e1;\n  border-radius: 6px;\n  padding: 2px 6px;\n  font-size: 0.72rem;\n  font-weight: 800;\n  color: #334155;\n}\n.header-actions .user-summary {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 2px;\n}\n.header-actions .user-summary .role-pill {\n  font-size: 0.74rem;\n  font-weight: 800;\n  color: #065f46;\n  background: #ecfdf5;\n  border: 1px solid #a7f3d0;\n  padding: 3px 10px;\n  border-radius: 20px;\n  text-transform: capitalize;\n}\n.header-actions .user-summary small {\n  font-size: 0.72rem;\n  color: #94a3b8;\n}\n.header-actions .notif-btn {\n  position: relative;\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  color: #475569;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.header-actions .notif-btn:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n  border-color: #cbd5e1;\n}\n.header-actions .notif-btn .notif-badge {\n  position: absolute;\n  top: -4px;\n  right: -4px;\n  background: #ef4444;\n  color: #ffffff;\n  font-size: 0.65rem;\n  font-weight: 800;\n  padding: 2px 5px;\n  border-radius: 10px;\n  border: 2px solid #ffffff;\n  box-shadow: 0 2px 6px rgba(239, 68, 68, 0.4);\n}\n.cmd-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.6);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  z-index: 9999;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  padding-top: 12vh;\n  animation: fadeIn 0.18s ease-out;\n}\n.cmd-dialog {\n  background: #ffffff;\n  width: min(580px, 92vw);\n  border-radius: 18px;\n  box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.35);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  max-height: 70vh;\n  animation: slideUp 0.18s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.cmd-search-box {\n  display: flex;\n  align-items: center;\n  padding: 16px 20px;\n  border-bottom: 1px solid #f1f5f9;\n  gap: 12px;\n}\n.cmd-search-box .cmd-search-icon {\n  font-size: 1.2rem;\n  color: #059669;\n}\n.cmd-search-box .cmd-input {\n  flex: 1;\n  border: none;\n  outline: none;\n  font-size: 1rem;\n  color: #0f172a;\n  background: transparent;\n}\n.cmd-search-box .cmd-input::placeholder {\n  color: #94a3b8;\n}\n.cmd-search-box .cmd-esc-badge {\n  background: #f1f5f9;\n  border: 1px solid #cbd5e1;\n  border-radius: 6px;\n  padding: 2px 7px;\n  font-size: 0.7rem;\n  font-weight: 800;\n  color: #64748b;\n  cursor: pointer;\n}\n.cmd-results {\n  overflow-y: auto;\n  padding: 8px;\n  max-height: 380px;\n}\n.cmd-results .cmd-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 14px;\n  border-radius: 12px;\n  cursor: pointer;\n  transition: all 0.12s ease;\n}\n.cmd-results .cmd-item .cmd-item-icon {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background: #f8fafc;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.95rem;\n  color: #64748b;\n}\n.cmd-results .cmd-item .cmd-item-info {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.cmd-results .cmd-item .cmd-item-info .cmd-item-title {\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.cmd-results .cmd-item .cmd-item-info .cmd-item-category {\n  font-size: 0.72rem;\n  color: #94a3b8;\n}\n.cmd-results .cmd-item .cmd-enter-icon {\n  font-size: 0.85rem;\n  color: #059669;\n}\n.cmd-results .cmd-item:hover,\n.cmd-results .cmd-item.selected {\n  background: #f0fdf4;\n}\n.cmd-results .cmd-item:hover .cmd-item-icon,\n.cmd-results .cmd-item.selected .cmd-item-icon {\n  background: #059669;\n  color: #ffffff;\n}\n.cmd-results .cmd-item:hover .cmd-item-title,\n.cmd-results .cmd-item.selected .cmd-item-title {\n  color: #064e3b;\n}\n.cmd-empty {\n  padding: 36px 20px;\n  text-align: center;\n  color: #94a3b8;\n}\n.cmd-empty i {\n  font-size: 2rem;\n  margin-bottom: 6px;\n  display: block;\n}\n.cmd-empty p {\n  margin: 0;\n  font-size: 0.86rem;\n}\n.cmd-footer {\n  padding: 10px 18px;\n  background: #f8fafc;\n  border-top: 1px solid #f1f5f9;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.cmd-footer .cmd-shortcut-hint {\n  font-size: 0.72rem;\n  color: #64748b;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.cmd-footer .cmd-shortcut-hint kbd {\n  background: #ffffff;\n  border: 1px solid #cbd5e1;\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-size: 0.68rem;\n  font-weight: 700;\n}\n.mobile-overlay {\n  display: none;\n}\n@media (max-width: 1024px) {\n  .admin-shell {\n    grid-template-columns: 1fr;\n    padding: 14px;\n  }\n  .admin-header .menu-btn {\n    display: inline-flex;\n  }\n  .admin-sidebar {\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    width: 290px;\n    height: 100vh;\n    border-radius: 0;\n    z-index: 10000;\n    transform: translateX(-100%);\n    transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);\n  }\n  .admin-shell.mobile-nav-open .admin-sidebar {\n    transform: translateX(0);\n  }\n  .mobile-overlay {\n    display: block;\n    position: fixed;\n    inset: 0;\n    background: rgba(15, 23, 42, 0.6);\n    -webkit-backdrop-filter: blur(4px);\n    backdrop-filter: blur(4px);\n    z-index: 9998;\n    border: none;\n    cursor: pointer;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(12px) scale(0.98);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n/*# sourceMappingURL=admin-shell.component.css.map */\n'] }]
  }], () => [{ type: Router }, { type: NotificationsService }, { type: AuthService }], { title: [{
    type: Input
  }], subtitle: [{
    type: Input
  }], sectionLabel: [{
    type: Input
  }], handleGlobalKeydown: [{
    type: HostListener,
    args: ["window:keydown", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminShellComponent, { className: "AdminShellComponent", filePath: "src/app/shared/admin-shell/admin-shell.component.ts", lineNumber: 40 });
})();

export {
  NotificationsService,
  AdminShellComponent
};
//# sourceMappingURL=chunk-GLAFLAWJ.js.map
