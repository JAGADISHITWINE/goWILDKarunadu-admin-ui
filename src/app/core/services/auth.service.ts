import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';

export interface AdminUser {
  id: string | number;
  name?: string;
  email: string;
  role?: string;
  roleName?: string;
  permissions?: string[];
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly USER_KEY = 'currentUser';
  private readonly TOKEN_KEY = 'token';

  private readonly defaultRouteOrder: Array<{ permission: string; route: string }> = [
    { permission: 'dashboard.view', route: '/admin/dashboard' },
    { permission: 'bookings.view', route: '/admin/bookings' },
    { permission: 'treks.view', route: '/admin/treks/list' },
    { permission: 'operations.view', route: '/admin/operations' },
    { permission: 'referrals.manage', route: '/admin/referrals' },
    { permission: 'users.view', route: '/admin/users' },
    { permission: 'reviews.view', route: '/admin/reviews' },
    { permission: 'blog.manage', route: '/admin/content-pages' },
    { permission: 'blog.view', route: '/admin/blog/posts' },
    { permission: 'dropdowns.manage', route: '/admin/dropdowns' },
    { permission: 'finance.view', route: '/admin/revenue' },
    { permission: 'notifications.view', route: '/admin/notifications' },
  ];

  private cachedUser: AdminUser | null = null;

  setUser(user: AdminUser | null): void {
    if (!user) return;
    const normalized: AdminUser = {
      ...user,
      permissions: Array.isArray(user.permissions) ? user.permissions : [],
    };
    this.cachedUser = normalized;
    const json = JSON.stringify(normalized);
    try {
      sessionStorage.setItem(this.USER_KEY, json);
      localStorage.setItem(this.USER_KEY, json);
    } catch {}
  }

  getUser(): AdminUser | null {
    if (this.cachedUser) {
      return this.cachedUser;
    }
    let raw: string | null = null;
    try {
      raw = sessionStorage.getItem(this.USER_KEY) || localStorage.getItem(this.USER_KEY);
    } catch {}
    if (!raw) return null;

    try {
      const parsed = JSON.parse(raw);
      this.cachedUser = {
        ...parsed,
        permissions: Array.isArray(parsed?.permissions) ? parsed.permissions : [],
      } as AdminUser;
      return this.cachedUser;
    } catch {
      return null;
    }
  }

  clearUser(): void {
    this.cachedUser = null;
    try {
      sessionStorage.removeItem(this.USER_KEY);
      localStorage.removeItem(this.USER_KEY);
    } catch {}
  }

  clearSession(): void {
    this.clearUser();
    try {
      sessionStorage.removeItem(this.TOKEN_KEY);
      localStorage.removeItem(this.TOKEN_KEY);
      localStorage.removeItem('authToken');
    } catch {}
  }

  isAuthenticated(): boolean {
    const user = this.getUser();
    let token: string | null = null;
    try {
      token = sessionStorage.getItem(this.TOKEN_KEY) || localStorage.getItem(this.TOKEN_KEY) || localStorage.getItem('authToken');
    } catch {}
    return !!user && !!token;
  }

  hasPermission(permission: string | undefined | null): boolean {
    if (!permission) return true;
    const user = this.getUser();
    if (!user) return false;

    const permissions = user.permissions || [];
    if (permissions.includes(permission)) return true;

    const role = String(user.role || user.roleName || '').toLowerCase().trim();
    if (role === 'super_admin' || role === 'superadmin' || role === 'admin' || role === 'administrator') {
      return true;
    }

    return false;
  }

  getDefaultAuthorizedRoute(): string {
    const user = this.getUser();
    if (!user) return '/';

    for (const candidate of this.defaultRouteOrder) {
      if (this.hasPermission(candidate.permission)) {
        return candidate.route;
      }
    }
    return '/admin/dashboard';
  }

  getDefaultAuthorizedUrlTree(router: Router): UrlTree {
    return router.parseUrl(this.getDefaultAuthorizedRoute());
  }
}
