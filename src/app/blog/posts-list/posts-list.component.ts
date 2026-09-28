import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { PostEditor } from '../post-editor';
import { DropdownManagerService } from 'src/app/dropdown-manager/dropdown-manager.service';
import { take } from 'rxjs';
import { AdminShellComponent } from 'src/app/shared/admin-shell/admin-shell.component';
import { environment } from 'src/environments/environment';
import { MediaService } from 'src/app/core/media.service';
import { NotificationService } from 'src/app/core/services/notification.service';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  author: string;
  category: string;
  category_name?: string;
  status: 'published' | 'draft' | 'scheduled' | 'pending' | 'rejected';
  views: number;
  comments?: number;
  publishDate: string;
  image: string;
  featured_image?: string;
  tags?: string[];
  authorType?: "admin" | "user";
}

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, AdminShellComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PostsListComponent implements OnInit {
  readonly Math = Math;
  private readonly imageBaseUrl = (environment.mediaBaseUrl || '').replace(/\/?$/, '/');
  searchQuery: string = '';
  selectedStatus: string = 'all';
  selectedCategory: string = 'all';
  isLoading: boolean = false;
  viewMode: 'grid' | 'table' = 'grid';
  previewPost: BlogPost | null = null;

  readonly Number = Number;

  // Pagination
  currentPage = 1;
  pageSize = 9;
  pageSizeOptions = [9, 18, 36, 72];

  get totalPages(): number {
    const size = Number(this.pageSize) || 9;
    return Math.max(1, Math.ceil(this.filteredPosts.length / size));
  }

  get paginatedPosts(): BlogPost[] {
    const size = Number(this.pageSize) || 9;
    const page = Math.min(Math.max(1, this.currentPage), this.totalPages);
    const start = (page - 1) * size;
    return this.filteredPosts.slice(start, start + size);
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

  resetFilters() {
    this.searchQuery = '';
    this.selectedStatus = 'all';
    this.selectedCategory = 'all';
    this.currentPage = 1;
  }

  statusOptions = [
    { value: 'all', label: 'All Status' },
  ];

  categoryOptions: { value: string; label: string }[] = [
    { value: 'all', label: 'All Categories' }
  ];

  posts: BlogPost[] = [];

  constructor(
    private router: Router,
    private postEditorService: PostEditor,
    private dropdownService: DropdownManagerService,
    private notify: NotificationService,
    public authService: AuthService,
    private media: MediaService
  ) { }

  ngOnInit() {
    this.loadDropdownOptions();
    this.loadPosts();
    this.loadCategories();
  }

  get stats() {
    const total = this.posts.length;
    const published = this.posts.filter(p => p.status === 'published').length;
    const pending = this.posts.filter(p => p.status === 'pending' || p.status === 'draft').length;
    const views = this.posts.reduce((sum, p) => sum + (p.views || 0), 0);
    return { total, published, pending, views };
  }

  private loadDropdownOptions() {
    this.dropdownService.getGroupOptions('blogStatus').pipe(take(1)).subscribe((opts) => {
      if (opts.length === 0) return;
      this.statusOptions = [
        { value: 'all', label: 'All Status' },
        ...opts.map((opt) => ({ value: opt.value, label: opt.label }))
      ];
    });
  }

  async loadPosts() {
    this.isLoading = true;

    this.postEditorService.getAllPosts().subscribe({
      next: (res: any) => {
        this.posts = (res || []).map((post: any) => ({
          id: post.id!,
          title: post.title || 'Untitled',
          excerpt: post.excerpt || '',
          content: post.content,
          author: post.author_name || 'Admin',
          category: post.category_name || post.category || 'General',
          category_name: post.category_name,
          status: (post.status as any) || 'draft',
          views: post.views || 0,
          comments: 0,
          publishDate: this.formatDate(post.published_at || post.created_at),
          image: post.featured_image ? this.media.resolve(post.featured_image) : '',
          featured_image: post.featured_image ? this.media.resolve(post.featured_image) : '',
          tags: post.tags || [],
          authorType: String(post.author_type || "admin").toLowerCase() === "user" ? "user" : "admin"
        }));

        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        this.showToast('Failed to load posts', 'danger');
      }
    });
  }

  async loadCategories() {
    this.postEditorService.getCategories().subscribe({
      next: (categories) => {
        this.categoryOptions = [
          { value: 'all', label: 'All Categories' },
          ...(categories || []).map(cat => ({
            value: cat.slug || cat.name.toLowerCase().replace(/\s+/g, '-'),
            label: cat.name
          }))
        ];
      },
      error: (error) => {
      }
    });
  }

  get filteredPosts(): BlogPost[] {
    let filtered = this.posts;

    if (this.selectedStatus !== 'all') {
      filtered = filtered.filter(p => p.status === this.selectedStatus);
    }

    if (this.selectedCategory !== 'all') {
      filtered = filtered.filter(p => {
        const categorySlug = (p.category || '').toLowerCase().replace(/\s+/g, '-');
        return categorySlug === this.selectedCategory || (p.category_name || '').toLowerCase() === this.selectedCategory;
      });
    }

    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter(p =>
        (p.title || '').toLowerCase().includes(query) ||
        (p.excerpt || '').toLowerCase().includes(query) ||
        (p.category || '').toLowerCase().includes(query) ||
        (p.author || '').toLowerCase().includes(query)
      );
    }

    return filtered;
  }

  formatDate(dateString?: string): string {
    if (!dateString) return 'Not published';

    const date = new Date(dateString);
    if (isNaN(date.getTime())) return 'Not published';
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    };
    return date.toLocaleDateString('en-GB', options);
  }

  canApprovePost(post: BlogPost): boolean {
    return post.authorType === "user" && (post.status === "pending" || post.status === "rejected");
  }

  canPublishPost(post: BlogPost): boolean {
    if (post.status === "published") return false;
    if (post.authorType === "user") return post.status === "pending" || post.status === "rejected";
    return post.status === "draft" || post.status === "scheduled";
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'pending': return 'warning';
      case 'published': return 'success';
      case 'draft': return 'warning';
      case 'scheduled': return 'primary';
      case 'rejected': return 'danger';
      default: return 'medium';
    }
  }

  createPost() {
    this.router.navigate(['/admin/blog/editor']);
  }

  editPost(id: string) {
    this.router.navigate(['/admin/blog/editor', id]);
  }

  openPreview(post: BlogPost) {
    this.previewPost = post;
  }

  closePreview() {
    this.previewPost = null;
  }

  async deletePost(id: string) {
    if (window.confirm('Are you sure you want to delete this post? This action cannot be undone.')) {
      this.confirmDelete(id);
    }
  }

  async confirmDelete(id: string) {
    this.isLoading = true;

    this.postEditorService.deletePost(id).subscribe({
      next: () => {
        this.isLoading = false;
        this.showToast('Post deleted successfully', 'success');
        this.loadPosts();
      },
      error: (error) => {
        this.isLoading = false;
        this.showToast('Failed to delete post', 'danger');
      }
    });
  }

  async approvePost(post: BlogPost) {
    this.isLoading = true;

    this.updatePostStatus(post, 'published').subscribe({
      next: () => {
        this.isLoading = false;
        this.showToast('Post approved and published', 'success');
        this.loadPosts();
      },
      error: (error) => {
        this.isLoading = false;
        this.showToast('Failed to approve post', 'danger');
      }
    });
  }

  async rejectPost(post: BlogPost) {
    this.isLoading = true;

    this.updatePostStatus(post, 'rejected').subscribe({
      next: () => {
        this.isLoading = false;
        this.showToast('Post rejected', 'warning');
        this.loadPosts();
      },
      error: (error) => {
        this.isLoading = false;
        this.showToast('Failed to reject post', 'danger');
      }
    });
  }

  private updatePostStatus(post: BlogPost, status: BlogPost['status']) {
    const formData = new FormData();
    formData.append('title', post.title);
    formData.append('excerpt', post.excerpt);
    formData.append('content', post.content || '');
    formData.append('category', post.category);
    formData.append('status', status);
    formData.append('publishDate', new Date().toISOString());
    formData.append('author', post.author);
    formData.append('tags', JSON.stringify(post.tags || []));

    if (post.featured_image) {
      formData.append('existingImageUrl', post.featured_image);
    }

    return this.postEditorService.savePost(post.id, formData);
  }

  async showToast(message: string, color: 'success' | 'danger' | 'warning' = 'success') {
    const toast = this.notify.show('Operation completed.');
  }

  refreshPosts(event?: any) {
    this.loadPosts();
    if (event) {
      setTimeout(() => {
        event.target.complete();
      }, 1000);
    }
  }

  async publishPost(post: BlogPost) {
    this.isLoading = true;

    const formData = new FormData();
    formData.append('title', post.title);
    formData.append('excerpt', post.excerpt);
    formData.append('content', post.content || '');
    formData.append('category', post.category);
    formData.append('status', 'published');
    formData.append('publishDate', new Date().toISOString());
    formData.append('author', post.author);
    formData.append('tags', JSON.stringify(post.tags || []));

    if (post.featured_image) {
      formData.append('existingImageUrl', post.featured_image);
    }

    this.postEditorService.savePost(post.id, formData).subscribe({
      next: () => {
        this.isLoading = false;
        this.showToast('Post published successfully', 'success');
        this.loadPosts();
      },
      error: (error) => {
        this.isLoading = false;
        this.showToast('Failed to publish post', 'danger');
      }
    });
  }
}
