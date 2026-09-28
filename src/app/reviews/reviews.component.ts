import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Reviews } from './reviews';
import { AdminShellComponent } from '../shared/admin-shell/admin-shell.component';
import { DropdownManagerService } from '../dropdown-manager/dropdown-manager.service';
import { take } from 'rxjs';

interface Review {
  id: string;
  customerName: string;
  trekName: string;
  likes: number;
  comment: string;
  date: string;
  avatar: string;
  status: 'pending' | 'approved' | 'rejected';
  adminReply?: string;
  repliedAt?: string;
}

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, AdminShellComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ReviewsComponent implements OnInit {
  readonly Number = Number;
  readonly Math = Math;
  searchQuery: string = '';
  selectedStatus: 'all' | 'pending' | 'approved' | 'rejected' = 'all';
  reviewStatusOptions: string[] = [];
  reviews: Review[] = [];
  loading: boolean = true;

  // Pagination
  currentPage = 1;
  pageSize = 5;
  pageSizeOptions = [5, 10, 20, 40];

  get totalPages(): number {
    const size = Number(this.pageSize) || 5;
    return Math.max(1, Math.ceil(this.filteredReviews.length / size));
  }

  get paginatedReviews(): Review[] {
    const size = Number(this.pageSize) || 5;
    const page = Math.min(Math.max(1, this.currentPage), this.totalPages);
    const start = (page - 1) * size;
    return this.filteredReviews.slice(start, start + size);
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

  // Bulk selection
  selectedReviewIds = new Set<string>();

  // Inline Reply state
  replyingReviewId: string | null = null;
  replyText: string = '';

  constructor(
    private reviewService: Reviews,
    private dropdownService: DropdownManagerService,
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.loadDropdownOptions();
    this.loadReviews();
  }

  get totalCount(): number {
    return this.reviews.length;
  }

  get approvedCount(): number {
    return this.reviews.filter(r => r.status === 'approved').length;
  }

  get pendingCount(): number {
    return this.reviews.filter(r => r.status === 'pending').length;
  }

  get rejectedCount(): number {
    return this.reviews.filter(r => r.status === 'rejected').length;
  }

  get averageRating(): string {
    if (this.reviews.length === 0) return '5.0';
    const sum = this.reviews.reduce((acc, r) => acc + (r.likes || 5), 0);
    return (sum / this.reviews.length).toFixed(1);
  }

  private loadDropdownOptions() {
    this.dropdownService.getGroupOptions('reviewStatus').pipe(take(1)).subscribe((opts) => {
      if (opts.length > 0) {
        this.reviewStatusOptions = opts.map((opt) => opt.value) as Array<'pending' | 'approved' | 'rejected'>;
      }
    });
  }

  loadReviews() {
    this.loading = true;

    this.reviewService.getAllReviews().subscribe({
      next: (res: any) => {
        if (res && res.success == true) {
          this.reviews = this.mapReviewData(res.data);
        }
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
      }
    });
  }

  mapReviewData(data: any[]): Review[] {
    return (data || []).map((item: any) => ({
      id: item.id || item.comment_id,
      customerName: item.author_name || item.customer_name || 'Trekker',
      trekName: item.trek_name || item.title || 'Trek Experience',
      likes: Number(item.likes ?? item.rating ?? 5),
      comment: item.comment || item.review || item.content || '',
      date: item.comment_date || item.created_at || 'Recently',
      avatar: item.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(item.author_name || item.customer_name || 'Trekker')}&size=100`,
      status: (item.status || item.review_status || 'approved') as 'pending' | 'approved' | 'rejected',
      adminReply: item.adminReply || item.admin_reply,
      repliedAt: item.repliedAt || item.replied_at
    }));
  }

  get filteredReviews(): Review[] {
    let filtered = this.reviews;

    if (this.selectedStatus !== 'all') {
      filtered = filtered.filter(r => r.status === this.selectedStatus);
    }

    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter(r =>
        r.customerName.toLowerCase().includes(query) ||
        r.trekName.toLowerCase().includes(query) ||
        r.comment.toLowerCase().includes(query)
      );
    }

    return filtered;
  }

  getStarArray(likes: number): boolean[] {
    const stars = Math.min(5, Math.max(0, Math.round(likes)));
    return Array.from({ length: 5 }, (_, i) => i < stars);
  }

  get selectedCount(): number {
    return this.selectedReviewIds.size;
  }

  get allVisibleSelected(): boolean {
    return this.filteredReviews.length > 0 &&
      this.filteredReviews.every(r => this.selectedReviewIds.has(r.id));
  }

  toggleReviewSelection(id: string) {
    if (this.selectedReviewIds.has(id)) {
      this.selectedReviewIds.delete(id);
    } else {
      this.selectedReviewIds.add(id);
    }
  }

  toggleSelectAll() {
    if (this.allVisibleSelected) {
      this.filteredReviews.forEach(r => this.selectedReviewIds.delete(r.id));
    } else {
      this.filteredReviews.forEach(r => this.selectedReviewIds.add(r.id));
    }
  }

  clearSelection() {
    this.selectedReviewIds.clear();
  }

  bulkApprove() {
    const ids = Array.from(this.selectedReviewIds);
    ids.forEach(id => {
      const review = this.reviews.find(r => r.id === id);
      if (review && review.status === 'pending') {
        this.updateReviewStatus(review, 'approved');
      }
    });
    this.selectedReviewIds.clear();
  }

  bulkReject() {
    const ids = Array.from(this.selectedReviewIds);
    ids.forEach(id => {
      const review = this.reviews.find(r => r.id === id);
      if (review && review.status === 'pending') {
        this.updateReviewStatus(review, 'rejected');
      }
    });
    this.selectedReviewIds.clear();
  }

  toggleReply(reviewId: string) {
    if (this.replyingReviewId === reviewId) {
      this.replyingReviewId = null;
      this.replyText = '';
    } else {
      this.replyingReviewId = reviewId;
      const review = this.reviews.find(r => r.id === reviewId);
      this.replyText = review?.adminReply || '';
    }
  }

  submitReply(review: Review) {
    if (!this.replyText.trim()) return;

    const reply = this.replyText.trim();
    const now = new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });

    this.reviewService.replyToReview(review.id, reply).subscribe({
      next: () => {
        this.reviews = this.reviews.map(item =>
          item.id === review.id
            ? { ...item, adminReply: reply, repliedAt: now }
            : item
        );
        this.replyingReviewId = null;
        this.replyText = '';
      },
      error: (err) => {
      }
    });
  }

  deleteReply(review: Review) {
    this.reviewService.replyToReview(review.id, '').subscribe({
      next: () => {
        this.reviews = this.reviews.map(item =>
          item.id === review.id
            ? { ...item, adminReply: undefined, repliedAt: undefined }
            : item
        );
      },
      error: (err) => {
      }
    });
  }

  updateReviewStatus(review: Review, status: 'approved' | 'rejected') {
    this.reviewService.updateReviewStatus(review.id, status).subscribe({
      next: () => {
        this.reviews = this.reviews.map((item) =>
          item.id === review.id ? { ...item, status } : item
        );
      },
      error: (err) => {
      }
    });
  }

  resetFilters() {
    this.searchQuery = '';
    this.selectedStatus = 'all';
    this.currentPage = 1;
    this.selectedReviewIds.clear();
  }
}
