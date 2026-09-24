import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthService } from 'src/app/core/services/auth.service';
import { AdminShellComponent } from '../shared/admin-shell/admin-shell.component';
import {
  Category,
  CategoryManagerService,
  CategoryPayload,
  CategoryStatus,
} from './category-manager.service';

@Component({
  selector: 'app-category-manager',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, AdminShellComponent],
  templateUrl: './category-manager.component.html',
  styleUrls: ['./category-manager.component.scss'],
})
export class CategoryManagerComponent implements OnInit {
  categories: Category[] = [];
  loading = false;
  saving = false;
  message = '';
  error = '';

  searchQuery = '';
  statusFilter: 'all' | CategoryStatus = 'all';

  newCategory: CategoryPayload = {
    name: '',
    status: 'active',
    sortOrder: 0,
  };

  editingCategoryId: string | null = null;
  editDraft: CategoryPayload = {
    name: '',
    status: 'active',
    sortOrder: 0,
  };

  constructor(private categoryService: CategoryManagerService, public authService: AuthService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  get filteredCategories(): Category[] {
    return this.categories.filter((category) => {
      const matchesSearch = !this.searchQuery.trim()
        || [category.name, category.slug]
          .join(' ')
          .toLowerCase()
          .includes(this.searchQuery.trim().toLowerCase());
      const matchesStatus = this.statusFilter === 'all' || category.status === this.statusFilter;
      return matchesSearch && matchesStatus;
    });
  }

  get activeCount(): number {
    return this.categories.filter((category) => category.status === 'active').length;
  }

  get inactiveCount(): number {
    return this.categories.filter((category) => category.status === 'inactive').length;
  }

  loadCategories(): void {
    this.loading = true;
    this.error = '';

    this.categoryService.getCategories(true).subscribe({
      next: (res) => {
        this.categories = Array.isArray(res?.data) ? this.sortCategories(res.data) : [];
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.error = 'Failed to load categories';
      },
    });
  }

  createCategory(): void {
    const name = String(this.newCategory.name || '').trim();
    if (!name) {
      this.error = 'Category name is required';
      this.message = '';
      return;
    }

    const payload: CategoryPayload = {
      name,
      status: this.newCategory.status || 'active',
      sortOrder: Number(this.newCategory.sortOrder || 0),
    };

    this.saving = true;
    this.error = '';
    this.message = '';

    this.categoryService.createCategory(payload).subscribe({
      next: (res) => {
        this.saving = false;
        this.message = res?.message || 'Category created';
        this.resetCreateForm();
        this.loadCategories();
      },
      error: (err) => {
        this.saving = false;
        this.error = err?.error?.message || 'Failed to create category';
      },
    });
  }

  startEdit(category: Category): void {
    this.editingCategoryId = category.id;
    this.editDraft = {
      name: category.name,
      status: category.status,
      sortOrder: Number(category.sortOrder || 0),
    };
  }

  cancelEdit(): void {
    this.editingCategoryId = null;
    this.editDraft = {
      name: '',
      status: 'active',
      sortOrder: 0,
    };
  }

  saveEdit(category: Category): void {
    const name = String(this.editDraft.name || '').trim();
    if (!name) {
      this.error = 'Category name is required';
      this.message = '';
      return;
    }

    const payload: CategoryPayload = {
      name,
      status: this.editDraft.status || 'active',
      sortOrder: Number(this.editDraft.sortOrder || 0),
    };

    this.saving = true;
    this.error = '';
    this.message = '';

    this.categoryService.updateCategory(category.id, payload).subscribe({
      next: (res) => {
        this.saving = false;
        this.message = res?.message || 'Category updated';
        this.cancelEdit();
        this.loadCategories();
      },
      error: (err) => {
        this.saving = false;
        this.error = err?.error?.message || 'Failed to update category';
      },
    });
  }

  toggleStatus(category: Category): void {
    const nextStatus: CategoryStatus = category.status === 'active' ? 'inactive' : 'active';
    this.saving = true;
    this.error = '';
    this.message = '';

    this.categoryService.updateCategory(category.id, { status: nextStatus }).subscribe({
      next: (res) => {
        this.saving = false;
        this.message = res?.message || 'Category status updated';
        this.loadCategories();
      },
      error: (err) => {
        this.saving = false;
        this.error = err?.error?.message || 'Failed to update category';
      },
    });
  }

  deleteCategory(category: Category): void {
    const confirmed = confirm(`Delete category "${category.name}" permanently?`);
    if (!confirmed) return;

    this.saving = true;
    this.error = '';
    this.message = '';

    this.categoryService.deleteCategory(category.id).subscribe({
      next: (res) => {
        this.saving = false;
        this.message = res?.message || 'Category deleted';
        if (this.editingCategoryId === category.id) {
          this.cancelEdit();
        }
        this.loadCategories();
      },
      error: (err) => {
        this.saving = false;
        this.error = err?.error?.message || 'Failed to delete category';
      },
    });
  }

  resetCreateForm(): void {
    this.newCategory = {
      name: '',
      status: 'active',
      sortOrder: this.categories.length + 1,
    };
  }

  private sortCategories(rows: Category[]): Category[] {
    return [...rows].sort((a, b) => {
      const orderDiff = Number(a.sortOrder || 0) - Number(b.sortOrder || 0);
      if (orderDiff !== 0) return orderDiff;
      return String(a.name || '').localeCompare(String(b.name || ''));
    });
  }
}
