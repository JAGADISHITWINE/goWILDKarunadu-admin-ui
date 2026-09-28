import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { TrekList } from './trek-list';
import { AdminShellComponent } from 'src/app/shared/admin-shell/admin-shell.component';
import { environment } from 'src/environments/environment';
import { MediaService } from 'src/app/core/media.service';
import { DropdownManagerService } from 'src/app/dropdown-manager/dropdown-manager.service';

@Component({
  selector: 'app-trek-list',
  templateUrl: './trek-list.component.html',
  styleUrls: ['./trek-list.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, AdminShellComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TrekListComponent implements OnInit {
  readonly Math = Math;
  readonly mediaBaseUrl = (environment.mediaBaseUrl || '').replace(/\/?$/, '/');
  searchQuery: string = '';
  selectedStatus: 'all' | 'active' | 'draft' | 'inactive' = 'all';
  selectedCategory: string = 'all';
  viewMode: 'grid' | 'table' = 'grid';
  treks: any[] = [];
  categories: string[] = [];
  activeCount = 0;
  isLoading = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private trekService: TrekList,
    public authService: AuthService,
    private media: MediaService,
    private dropdownService: DropdownManagerService
  ) { }

  ngOnInit() {
    this.loadDropdowns();
    this.route.queryParamMap.subscribe(() => {
      this.loadTreks(true);
    });
  }

  private loadDropdowns() {
    this.dropdownService.getGroupOptions('trekCategory').subscribe(opts => {
      if (opts.length > 0) {
        this.categories = Array.from(new Set([...this.categories, ...opts.map(o => o.label)])).sort();
      }
    });

    this.dropdownService.getGroupOptions('pageSizeOptions').subscribe(opts => {
      if (opts.length > 0) {
        this.pageSizeOptions = opts.map(o => Number(o.value || o.label)).filter(n => !isNaN(n));
      }
    });
  }

  get activeTreksCount(): number {
    return this.treks.filter((t) => String(t.status || '').toLowerCase() === 'active').length;
  }

  get draftTreksCount(): number {
    return this.treks.filter((t) => String(t.status || '').toLowerCase() === 'draft').length;
  }

  get filteredTreks(): any[] {
    let list = [...this.treks];

    // Status filter
    if (this.selectedStatus !== 'all') {
      list = list.filter((t) => String(t.status || '').toLowerCase() === this.selectedStatus);
    }

    // Category filter
    if (this.selectedCategory !== 'all') {
      list = list.filter((t) => String(t.category || t.collection || '').toLowerCase() === this.selectedCategory.toLowerCase());
    }

    // Search query
    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase();
      list = list.filter((t) => {
        const haystack = [
          t?.name,
          t?.location,
          t?.category,
          t?.collection,
          t?.difficulty,
          t?.fitness_level,
          t?.id,
        ]
          .filter(Boolean)
          .map((value: any) => String(value).toLowerCase())
          .join(' ');

        return haystack.includes(query);
      });
    }

    return list;
  }

  readonly Number = Number;

  // Pagination
  currentPage = 1;
  pageSize = 5;
  pageSizeOptions = [5, 10, 20, 40];

  get totalPages(): number {
    const size = Number(this.pageSize) || 5;
    return Math.max(1, Math.ceil(this.filteredTreks.length / size));
  }

  get paginatedTreks(): any[] {
    const size = Number(this.pageSize) || 5;
    const page = Math.min(Math.max(1, this.currentPage), this.totalPages);
    const start = (page - 1) * size;
    return this.filteredTreks.slice(start, start + size);
  }

  get visibleTreks(): any[] {
    return this.paginatedTreks;
  }

  get visiblePageNumbers(): (number | '...')[] {
    const total = this.totalPages;
    const current = Math.min(Math.max(1, this.currentPage), total);

    if (total <= 7) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }

    const pages: (number | '...')[] = [1];
    if (current > 3) pages.push('...');

    const start = Math.max(2, current - 1);
    const end = Math.min(total - 1, current + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (current < total - 2) pages.push('...');
    if (total > 1) pages.push(total);

    return pages;
  }

  goToPage(page: number | '...') {
    if (page !== '...' && page >= 1 && page <= this.totalPages) {
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

  onPageSizeChange(val?: any) {
    if (val) this.pageSize = Number(val);
    this.currentPage = 1;
  }

  onFilterChange() {
    this.currentPage = 1;
  }

  getTotalRevenue(trek: any): number {
    return (trek.activeBookings || 0) * (trek.price || 0);
  }

  get totalActiveBookings(): number {
    return this.treks?.reduce((sum, t) => sum + (t.activeBookings || 0), 0) || 0;
  }

  loadTreks(forceRefresh: boolean = false) {
    this.isLoading = true;
    this.trekService.getAllTreks(forceRefresh).subscribe({
      next: (res: any) => {
        this.treks = res.data?.result || [];
        this.activeCount = res.data?.activeTrekCount || 0;
        this.extractCategories();
        this.isLoading = false;
      },
      error: () => {
        this.treks = [];
        this.activeCount = 0;
        this.isLoading = false;
      }
    });
  }

  private extractCategories() {
    const set = new Set<string>();
    this.treks.forEach((t) => {
      if (t.category) set.add(t.category);
      if (t.collection) set.add(t.collection);
    });
    this.categories = Array.from(set).sort();
  }

  resolveImageUrl(imagePath: string | null | undefined, cacheKey?: string | number | null): string {
    return this.media.resolve(imagePath || null, cacheKey);
  }

  getVisibleBatches(trek: any): any[] {
    const rows = Array.isArray(trek?.batches) ? trek.batches : [];
    if (rows.length === 0) return [];

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return rows.filter((batch: any) => {
      const status = String(batch?.status || batch?.batchStatus || '').toLowerCase();
      if (status !== 'active' && status !== 'inactive') return false;

      const start = batch?.startDate ? new Date(batch.startDate) : null;
      if (!start || Number.isNaN(start.getTime())) return true;

      start.setHours(0, 0, 0, 0);
      return start >= today;
    });
  }

  getBatchStatusCount(trek: any, targetStatus: 'active' | 'inactive'): number {
    const rows = this.getVisibleBatches(trek);
    return rows.filter((batch: any) => {
      const status = String(batch?.status || batch?.batchStatus || '').toLowerCase();
      return status === targetStatus;
    }).length;
  }

  getBatchStatusLabel(batch: any): string {
    return String(batch?.status || batch?.batchStatus || '').toLowerCase() || 'inactive';
  }

  getStatusColor(status: string) {
    const s = String(status || '').toLowerCase();
    switch (s) {
      case 'active': return 'success';
      case 'draft': return 'warning';
      case 'inactive': return 'medium';
      default: return 'primary';
    }
  }

  resetFilters() {
    this.searchQuery = '';
    this.selectedStatus = 'all';
    this.selectedCategory = 'all';
    this.currentPage = 1;
  }

  viewTrek(id: any) {
    if (!id) return;
    this.router.navigate(['/admin/trek-details', id]);
  }

  editTrek(id: string, event?: Event) {
    if (event) event.stopPropagation();
    if (!String(id || '').trim()) return;
    this.router.navigate([`/admin/treks/edit/${id}`]);
  }

  goToAddTrek(): void {
    this.router.navigate(['/admin/treks/add']);
  }
}
