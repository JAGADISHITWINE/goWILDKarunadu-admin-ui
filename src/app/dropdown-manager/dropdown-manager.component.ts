import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthService } from 'src/app/core/services/auth.service';
import { AdminShellComponent } from '../shared/admin-shell/admin-shell.component';
import {
  DropdownGroup,
  DropdownGroupPayload,
  DropdownGroupStatus,
  DropdownManagerService,
  DropdownOption,
  DropdownOptionPayload,
  DropdownOptionStatus,
} from './dropdown-manager.service';

@Component({
  selector: 'app-dropdown-manager',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, AdminShellComponent],
  templateUrl: './dropdown-manager.component.html',
  styleUrls: ['./dropdown-manager.component.scss'],
})
export class DropdownManagerComponent implements OnInit {
  groups: DropdownGroup[] = [];
  loading = false;
  saving = false;
  message = '';
  error = '';
  editorCollapsed = false;

  searchQuery = '';
  statusFilter: 'all' | DropdownGroupStatus = 'all';
  selectedGroupId = '';

  newGroup: DropdownGroupPayload = {
    groupKey: '',
    label: '',
    page: '',
    status: 'active',
    sortOrder: 0,
  };

  groupDraft: DropdownGroupPayload = {
    groupKey: '',
    label: '',
    page: '',
    status: 'active',
    sortOrder: 0,
  };

  newOption: DropdownOptionPayload = {
    groupId: '',
    label: '',
    optionValue: '',
    status: 'active',
    sortOrder: 0,
  };

  editingOptionId: string | null = null;
  optionDraft: DropdownOptionPayload & { label: string } = {
    groupId: '',
    label: '',
    optionValue: '',
    status: 'active',
    sortOrder: 0,
  };

  constructor(private dropdownService: DropdownManagerService, public authService: AuthService) {}

  ngOnInit(): void {
    this.loadGroups();
  }

  get filteredGroups(): DropdownGroup[] {
    return this.groups.filter((group) => {
      const matchesSearch = !this.searchQuery.trim()
        || [group.label, group.groupKey, group.page]
          .join(' ')
          .toLowerCase()
          .includes(this.searchQuery.trim().toLowerCase());
      const matchesStatus = this.statusFilter === 'all' || group.status === this.statusFilter;
      return matchesSearch && matchesStatus;
    });
  }

  get selectedGroup(): DropdownGroup | undefined {
    return this.groups.find((group) => group.id === this.selectedGroupId);
  }

  get totalOptions(): number {
    return this.groups.reduce((sum, group) => sum + (group.options?.length || 0), 0);
  }

  get selectedGroupOptionsCount(): number {
    return this.selectedGroup?.options?.length || 0;
  }

  get activeGroupCount(): number {
    return this.groups.filter((group) => group.status === 'active').length;
  }

  get inactiveGroupCount(): number {
    return this.groups.filter((group) => group.status === 'inactive').length;
  }

  loadGroups(selectGroupId?: string): void {
    this.loading = true;
    this.error = '';

    this.dropdownService.getManagementGroups().subscribe({
      next: (groups) => {
        this.groups = this.sortGroups(groups);
        const nextSelected =
          selectGroupId && this.groups.some((group) => group.id === selectGroupId)
            ? selectGroupId
            : this.selectedGroupId && this.groups.some((group) => group.id === this.selectedGroupId)
              ? this.selectedGroupId
              : this.groups[0]?.id || '';
        this.selectedGroupId = nextSelected;
        this.syncGroupDraft();
        this.syncOptionDraft();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.error = 'Failed to load dropdown groups';
      },
    });
  }

  selectGroup(groupId: string): void {
    this.selectedGroupId = groupId;
    this.editorCollapsed = false;
    this.syncGroupDraft();
    this.resetOptionDraft();
  }

  resetFilters(): void {
    this.searchQuery = '';
    this.statusFilter = 'all';
  }

  toggleEditorCollapse(): void {
    this.editorCollapsed = !this.editorCollapsed;
  }

  createGroup(): void {
    const payload = this.buildGroupPayload(this.newGroup);
    if (!payload.groupKey || !payload.label || !payload.page) {
      this.error = 'Group key, label, and page are required';
      this.message = '';
      return;
    }

    this.saving = true;
    this.error = '';
    this.message = '';

    this.dropdownService.createGroup({ ...payload, options: [] }).subscribe({
      next: (res) => {
        this.saving = false;
        this.message = res?.message || 'Dropdown group created';
        this.resetNewGroup();
        this.loadGroups();
      },
      error: (err) => {
        this.saving = false;
        this.error = err?.error?.message || 'Failed to create dropdown group';
      },
    });
  }

  saveGroup(): void {
    const group = this.selectedGroup;
    if (!group) return;

    const payload = this.buildGroupPayload(this.groupDraft);
    if (!payload.groupKey || !payload.label || !payload.page) {
      this.error = 'Group key, label, and page are required';
      this.message = '';
      return;
    }

    this.saving = true;
    this.error = '';
    this.message = '';

    this.dropdownService.updateGroup(group.id, payload).subscribe({
      next: (res) => {
        this.saving = false;
        this.message = res?.message || 'Dropdown group updated';
        this.loadGroups(group.id);
      },
      error: (err) => {
        this.saving = false;
        this.error = err?.error?.message || 'Failed to update dropdown group';
      },
    });
  }

  toggleGroupStatus(): void {
    const group = this.selectedGroup;
    if (!group) return;

    const nextStatus: DropdownGroupStatus = group.status === 'active' ? 'inactive' : 'active';
    this.saving = true;
    this.error = '';
    this.message = '';

    this.dropdownService.updateGroup(group.id, { status: nextStatus }).subscribe({
      next: (res) => {
        this.saving = false;
        this.message = res?.message || 'Dropdown group status updated';
        this.loadGroups(group.id);
      },
      error: (err) => {
        this.saving = false;
        this.error = err?.error?.message || 'Failed to update dropdown group';
      },
    });
  }

  deleteGroup(): void {
    const group = this.selectedGroup;
    if (!group) return;

    const confirmed = confirm(`Delete dropdown group "${group.label}" permanently?`);
    if (!confirmed) return;

    this.saving = true;
    this.error = '';
    this.message = '';

    this.dropdownService.deleteGroup(group.id).subscribe({
      next: (res) => {
        this.saving = false;
        this.message = res?.message || 'Dropdown group deleted';
        this.selectedGroupId = '';
        this.resetOptionDraft();
        this.loadGroups();
      },
      error: (err) => {
        this.saving = false;
        this.error = err?.error?.message || 'Failed to delete dropdown group';
      },
    });
  }

  createOption(): void {
    const group = this.selectedGroup;
    if (!group) return;

    const payload = this.buildOptionPayload(this.newOption, group.id);
    if (!payload.label || !payload.groupId) {
      this.error = 'Option label is required';
      this.message = '';
      return;
    }

    this.saving = true;
    this.error = '';
    this.message = '';

    this.dropdownService.createOption(payload).subscribe({
      next: (res) => {
        this.saving = false;
        this.message = res?.message || 'Dropdown option created';
        this.resetOptionDraft();
        this.loadGroups(group.id);
      },
      error: (err) => {
        this.saving = false;
        this.error = err?.error?.message || 'Failed to create dropdown option';
      },
    });
  }

  startEditOption(option: DropdownOption): void {
    const group = this.selectedGroup;
    if (!group) return;

    this.editingOptionId = option.id;
    this.optionDraft = {
      groupId: group.id,
      label: option.label,
      optionValue: option.value,
      status: option.status,
      sortOrder: Number(option.sortOrder || 0),
    };
  }

  cancelOptionEdit(): void {
    this.editingOptionId = null;
    this.resetOptionDraft();
  }

  saveOption(): void {
    const group = this.selectedGroup;
    const optionId = this.editingOptionId;
    if (!group) return;
    if (!optionId) return;

    const payload = this.buildOptionPayload(this.optionDraft, group.id);
    if (!payload.label || !payload.groupId) {
      this.error = 'Option label is required';
      this.message = '';
      return;
    }

    this.saving = true;
    this.error = '';
    this.message = '';

    this.dropdownService.updateOption(optionId, payload).subscribe({
      next: (res) => {
        this.saving = false;
        this.message = res?.message || 'Dropdown option updated';
        this.cancelOptionEdit();
        this.loadGroups(group.id);
      },
      error: (err) => {
        this.saving = false;
        this.error = err?.error?.message || 'Failed to update dropdown option';
      },
    });
  }

  toggleOptionStatus(option: DropdownOption): void {
    const group = this.selectedGroup;
    if (!group) return;

    const nextStatus: DropdownOptionStatus = option.status === 'active' ? 'inactive' : 'active';
    this.saving = true;
    this.error = '';
    this.message = '';

    this.dropdownService.setOptionStatus(group.id, option.id, nextStatus).subscribe({
      next: (res) => {
        this.saving = false;
        this.message = res?.message || 'Dropdown option status updated';
        this.loadGroups(group.id);
      },
      error: (err) => {
        this.saving = false;
        this.error = err?.error?.message || 'Failed to update dropdown option';
      },
    });
  }

  deleteOption(option: DropdownOption): void {
    const confirmed = confirm(`Delete option "${option.label}" permanently?`);
    if (!confirmed) return;

    const group = this.selectedGroup;
    if (!group) return;

    this.saving = true;
    this.error = '';
    this.message = '';

    this.dropdownService.deleteOption(option.id).subscribe({
      next: (res) => {
        this.saving = false;
        this.message = res?.message || 'Dropdown option deleted';
        if (this.editingOptionId === option.id) {
          this.cancelOptionEdit();
        }
        this.loadGroups(group.id);
      },
      error: (err) => {
        this.saving = false;
        this.error = err?.error?.message || 'Failed to delete dropdown option';
      },
    });
  }

  resetNewGroup(): void {
    this.newGroup = {
      groupKey: '',
      label: '',
      page: '',
      status: 'active',
      sortOrder: this.groups.length + 1,
    };
  }

  resetOptionDraft(): void {
    const group = this.selectedGroup;
    this.newOption = {
      groupId: group?.id || '',
      label: '',
      optionValue: '',
      status: 'active',
      sortOrder: group?.options.length ? group.options.length + 1 : 1,
    };

    if (this.editingOptionId) {
      this.optionDraft = {
        groupId: group?.id || '',
        label: '',
        optionValue: '',
        status: 'active',
        sortOrder: group?.options.length ? group.options.length + 1 : 1,
      };
    }
  }

  syncGroupDraft(): void {
    const group = this.selectedGroup;
    this.groupDraft = group
      ? {
          groupKey: group.groupKey,
          label: group.label,
          page: group.page,
          status: group.status,
          sortOrder: Number(group.sortOrder || 0),
        }
      : {
          groupKey: '',
          label: '',
          page: '',
          status: 'active',
          sortOrder: 0,
        };
  }

  private syncOptionDraft(): void {
    const group = this.selectedGroup;
    this.newOption = {
      groupId: group?.id || '',
      label: '',
      optionValue: '',
      status: 'active',
      sortOrder: group?.options.length ? group.options.length + 1 : 1,
    };
  }

  private buildGroupPayload(source: DropdownGroupPayload): DropdownGroupPayload {
    return {
      groupKey: String(source.groupKey || '').trim(),
      label: String(source.label || '').trim(),
      page: String(source.page || '').trim(),
      status: (source.status === 'inactive' ? 'inactive' : 'active') as DropdownGroupStatus,
      sortOrder: Number(source.sortOrder || 0),
      options: [],
    };
  }

  private buildOptionPayload(source: DropdownOptionPayload & { label: string }, groupId: string): DropdownOptionPayload {
    return {
      groupId,
      label: String(source.label || '').trim(),
      optionValue: String(source.optionValue || source.label || '').trim(),
      status: (source.status === 'inactive' ? 'inactive' : 'active') as DropdownOptionStatus,
      sortOrder: Number(source.sortOrder || 0),
    };
  }

  private sortGroups(rows: DropdownGroup[]): DropdownGroup[] {
    return [...rows].sort((a, b) => {
      const orderDiff = Number(a.sortOrder || 0) - Number(b.sortOrder || 0);
      if (orderDiff !== 0) return orderDiff;
      return String(a.label || '').localeCompare(String(b.label || ''));
    });
  }
}
