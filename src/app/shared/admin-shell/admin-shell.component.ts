import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, OnDestroy, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NotificationsService } from 'src/app/notifications/notifications.service';
import { AuthService, AdminUser } from 'src/app/core/services/auth.service';

export interface CommandItem {
  id: string;
  title: string;
  category: 'Navigation' | 'Action' | 'Quick Link';
  icon: string;
  shortcut?: string;
  route?: string;
  action?: () => void;
}

export interface AdminNavItem {
  label: string;
  icon: string;
  route: string;
  permission: string;
  badge?: string;
  badgeClass?: string;
}

export interface NavSection {
  title: string;
  items: AdminNavItem[];
}

@Component({
  selector: 'app-admin-shell',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './admin-shell.component.html',
  styleUrls: ['./admin-shell.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminShellComponent implements OnInit, OnDestroy {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() sectionLabel = 'Admin';

  isMobileMenuOpen = false;
  unreadNotifications = 0;
  currentUser: AdminUser | null = null;

  // ── Command Palette State ──
  isCmdPaletteOpen = false;
  cmdSearch = '';
  cmdSelectedIndex = 0;

  readonly allCommands: CommandItem[] = [
    // Navigation
    { id: 'nav-dash', title: 'Dashboard', category: 'Navigation', icon: 'grid-1x2', route: '/admin/dashboard' },
    { id: 'nav-operations', title: 'Operations Center', category: 'Navigation', icon: 'clipboard-data', route: '/admin/operations' },
    { id: 'nav-bookings', title: 'Manage Bookings', category: 'Navigation', icon: 'calendar-event', route: '/admin/bookings' },
    { id: 'nav-treks', title: 'Treks Catalog', category: 'Navigation', icon: 'map', route: '/admin/treks/list' },
    { id: 'nav-batches', title: 'Batch Management & Slots', category: 'Navigation', icon: 'layers', route: '/admin/batch-management' },
    { id: 'nav-coupons', title: 'Coupon Manager', category: 'Navigation', icon: 'ticket-perforated', route: '/admin/coupons' },
    { id: 'nav-referrals', title: 'Referrals & Rewards', category: 'Navigation', icon: 'gift', route: '/admin/referrals' },
    { id: 'nav-users', title: 'Users & Customers', category: 'Navigation', icon: 'people', route: '/admin/users' },
    { id: 'nav-reviews', title: 'Reviews & Feedback', category: 'Navigation', icon: 'chat-square-quote', route: '/admin/reviews' },
    { id: 'nav-blog', title: 'Blog Stories', category: 'Navigation', icon: 'file-earmark-richtext', route: '/admin/blog/posts' },
    { id: 'nav-static-pages', title: 'Static Pages CMS', category: 'Navigation', icon: 'file-earmark-text', route: '/admin/content-pages' },
    { id: 'nav-categories', title: 'Taxonomy Categories', category: 'Navigation', icon: 'tags', route: '/admin/categories' },
    { id: 'nav-notifications', title: 'Notification Center', category: 'Navigation', icon: 'bell', route: '/admin/notifications' },
    { id: 'nav-dropdowns', title: 'Dropdown Manager', category: 'Navigation', icon: 'list-ul', route: '/admin/dropdowns' },
    { id: 'nav-settings', title: 'Brand & System Settings', category: 'Navigation', icon: 'gear', route: '/admin/settings' },
    
    // Quick Actions
    { id: 'act-add-trek', title: 'Create New Trek', category: 'Action', icon: 'plus-circle-fill', route: '/admin/treks/add' },
    { id: 'act-add-batch', title: 'Add Trek Batch', category: 'Action', icon: 'calendar-plus', route: '/admin/batch-management' },
    { id: 'act-write-post', title: 'Write Blog Story', category: 'Action', icon: 'pencil-square', route: '/admin/blog/editor' },
    { id: 'act-new-coupon', title: 'Create Coupon Code', category: 'Action', icon: 'tag-fill', route: '/admin/coupons' },
    { id: 'act-broadcast', title: 'Compose Notification', category: 'Action', icon: 'broadcast', route: '/admin/notifications' },
  ];

  readonly navSections: NavSection[] = [
    {
      title: 'COMMAND & CONTROL',
      items: [
        { label: 'Dashboard', icon: 'grid-1x2', route: '/admin/dashboard', permission: 'dashboard.view' },
        { label: 'Operations Center', icon: 'clipboard-data', route: '/admin/operations', permission: 'operations.view', badge: 'Live', badgeClass: 'badge-emerald' },
      ]
    },
    {
      title: 'EXPEDITIONS & BOOKINGS',
      items: [
        { label: 'Bookings', icon: 'calendar-event', route: '/admin/bookings', permission: 'bookings.view' },
        { label: 'Treks Catalog', icon: 'map', route: '/admin/treks/list', permission: 'treks.view' },
        { label: 'Batch Management', icon: 'layers', route: '/admin/batch-management', permission: 'treks.view' },
        { label: 'Coupons & Promos', icon: 'ticket-perforated', route: '/admin/coupons', permission: 'treks.manage' },
        { label: 'Referrals & Rewards', icon: 'gift', route: '/admin/referrals', permission: 'referrals.manage' },
      ]
    },
    {
      title: 'COMMUNITY & CRM',
      items: [
        { label: 'Trekkers & Users', icon: 'people', route: '/admin/users', permission: 'users.view' },
        { label: 'Reviews & Feedback', icon: 'chat-square-quote', route: '/admin/reviews', permission: 'reviews.view' },
        { label: 'Notification Center', icon: 'bell', route: '/admin/notifications', permission: 'dashboard.view' },
      ]
    },
    {
      title: 'SYSTEM & CMS',
      items: [
        { label: 'Blog Stories', icon: 'file-earmark-richtext', route: '/admin/blog/posts', permission: 'blog.view' },
        { label: 'Static Pages', icon: 'file-earmark-text', route: '/admin/content-pages', permission: 'blog.manage' },
        { label: 'Categories', icon: 'tags', route: '/admin/categories', permission: 'dropdowns.manage' },
        { label: 'Dropdown Manager', icon: 'list-ul', route: '/admin/dropdowns', permission: 'dropdowns.manage' },
        { label: 'Brand & Settings', icon: 'gear', route: '/admin/settings', permission: 'dashboard.view' },
      ]
    }
  ];

  @HostListener('window:keydown', ['$event'])
  handleGlobalKeydown(e: KeyboardEvent) {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      this.toggleCommandPalette();
    } else if (e.key === 'Escape' && this.isCmdPaletteOpen) {
      e.preventDefault();
      this.closeCommandPalette();
    } else if (this.isCmdPaletteOpen) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        this.cmdSelectedIndex = Math.min(this.filteredCommands.length - 1, this.cmdSelectedIndex + 1);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        this.cmdSelectedIndex = Math.max(0, this.cmdSelectedIndex - 1);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (this.filteredCommands[this.cmdSelectedIndex]) {
          this.executeCommand(this.filteredCommands[this.cmdSelectedIndex]);
        }
      }
    }
  }

  get filteredCommands(): CommandItem[] {
    const q = this.cmdSearch.trim().toLowerCase();
    if (!q) return this.allCommands;
    return this.allCommands.filter(c =>
      c.title.toLowerCase().includes(q) ||
      c.category.toLowerCase().includes(q)
    );
  }

  visibleNavSections: NavSection[] = [];

  get userInitial(): string {
    const name = this.currentUser?.name || this.currentUser?.email || 'A';
    return name.charAt(0).toUpperCase();
  }

  get userDisplayName(): string {
    return this.currentUser?.name || this.currentUser?.email?.split('@')[0] || 'Admin User';
  }

  get roleLabel(): string {
    return this.currentUser?.roleName || this.currentUser?.role || 'Admin';
  }

  get permissionCount(): number {
    return Array.isArray(this.currentUser?.permissions) ? this.currentUser!.permissions!.length : 0;
  }

  constructor(
    private router: Router,
    private notificationsService: NotificationsService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getUser();
    this.updateVisibleNavSections();
    this.loadNotificationCount();
  }

  private updateVisibleNavSections(): void {
    const user = this.currentUser || this.authService.getUser();
    if (!user) {
      this.visibleNavSections = this.navSections;
      return;
    }
    this.visibleNavSections = this.navSections.map(sec => ({
      title: sec.title,
      items: sec.items.filter(item => this.authService.hasPermission(item.permission))
    })).filter(sec => sec.items.length > 0);
  }

  ngOnDestroy(): void {}

  toggleCommandPalette(): void {
    this.isCmdPaletteOpen = !this.isCmdPaletteOpen;
    if (this.isCmdPaletteOpen) {
      this.cmdSearch = '';
      this.cmdSelectedIndex = 0;
    }
  }

  closeCommandPalette(): void {
    this.isCmdPaletteOpen = false;
  }

  executeCommand(cmd: CommandItem): void {
    this.closeCommandPalette();
    if (cmd.action) {
      cmd.action();
    } else if (cmd.route) {
      this.router.navigateByUrl(cmd.route);
    }
  }

  isRouteActive(route: string): boolean {
    const current = (this.router.url || '').split('?')[0].split('#')[0];
    return current === route || current.startsWith(`${route}/`);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  logout(): void {
    this.authService.clearSession();
    this.router.navigate(['']);
  }

  openNotifications(): void {
    this.router.navigate(['/admin/notifications']);
  }

  private loadNotificationCount(): void {
    this.notificationsService.getNotifications().subscribe({
      next: (res: any) => {
        const rows = this.extractNotificationRows(res);
        this.unreadNotifications = rows.filter((n: any) => !this.isRead(n?.read)).length;
      },
      error: () => {
        this.unreadNotifications = 0;
      }
    });
  }

  private extractNotificationRows(response: any): any[] {
    if (Array.isArray(response?.data?.notifications)) return response.data.notifications;
    if (Array.isArray(response?.notifications)) return response.notifications;
    if (Array.isArray(response?.results)) return response.results;
    if (Array.isArray(response?.data)) return response.data;
    if (Array.isArray(response?.data?.results)) return response.data.results;
    if (Array.isArray(response)) return response;
    return [];
  }

  private isRead(value: any): boolean {
    if (value === true || value === 1) return true;
    if (typeof value === 'string') {
      const normalized = value.trim().toLowerCase();
      return normalized === '1' || normalized === 'true' || normalized === 'yes';
    }
    return false;
  }
}
