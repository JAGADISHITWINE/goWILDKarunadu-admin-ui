import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertController, IonicModule, LoadingController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Users } from './users';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DropdownManagerService } from '../dropdown-manager/dropdown-manager.service';
import { take } from 'rxjs';
import { AdminShellComponent } from '../shared/admin-shell/admin-shell.component';

export interface CrmNote {
  id: string;
  userId: string;
  adminName: string;
  content: string;
  createdAt: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  joinDate: string;
  totalBookings: number;
  totalSpent: number;
  status: 'active' | 'inactive' | 'blocked';
  avatar: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule, AdminShellComponent]
})
export class UsersComponent implements OnInit {
  searchQuery: string = '';
  selectedStatus: string = 'all';
  user: any = null;
  bookings: any[] = [];
  isLoading = true;
  isDetailView = false;
  selectedSegment = 'details';
  showFilterPanel = false;
  joinFrom: string = '';
  joinTo: string = '';

  // ── CRM Notes State ──
  selectedCrmUser: any = null;
  showCrmDrawer = false;
  userNotes: CrmNote[] = [];
  newNoteText = '';

  statusOptions = [
    { value: 'all', label: 'All Users' }
  ];

  users: User[] = [];

  constructor(
    private userService: Users,
    private route: ActivatedRoute,
    private router: Router,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private dropdownService: DropdownManagerService
  ) { }

  openWhatsApp(user: any, event?: Event) {
    if (event) event.stopPropagation();
    let rawPhone = String(user?.phone || user?.phone_number || '').replace(/\D/g, '');
    if (!rawPhone || rawPhone.length < 7) {
      alert('No valid phone number available for WhatsApp.');
      return;
    }
    // If 10 digits, prefix 91 (India)
    if (rawPhone.length === 10) {
      rawPhone = '91' + rawPhone;
    }
    const name = user?.name || 'there';
    const message = encodeURIComponent(`Hello ${name}, greetings from goWILD™ Karunadu Support & Operations team!`);
    const waUrl = `https://wa.me/${rawPhone}?text=${message}`;
    window.open(waUrl, '_blank');
  }

  // ── CRM Notes Handlers ──
  openCrmDrawer(user: any, event?: Event) {
    if (event) event.stopPropagation();
    this.selectedCrmUser = user;
    this.showCrmDrawer = true;
    this.newNoteText = '';
    this.loadNotesForUser(user.id);
  }

  closeCrmDrawer() {
    this.showCrmDrawer = false;
    this.selectedCrmUser = null;
    this.newNoteText = '';
  }

  loadNotesForUser(userId: string) {
    try {
      const stored = localStorage.getItem(`gowild_crm_notes_${userId}`);
      this.userNotes = stored ? JSON.parse(stored) : [];
    } catch {
      this.userNotes = [];
    }
  }

  addCrmNote() {
    if (!this.newNoteText.trim() || !this.selectedCrmUser) return;
    const newNote: CrmNote = {
      id: 'note_' + Date.now(),
      userId: this.selectedCrmUser.id,
      adminName: 'Admin Ops',
      content: this.newNoteText.trim(),
      createdAt: new Date().toISOString()
    };
    this.userNotes.unshift(newNote);
    localStorage.setItem(`gowild_crm_notes_${this.selectedCrmUser.id}`, JSON.stringify(this.userNotes));
    this.newNoteText = '';
  }

  deleteCrmNote(noteId: string) {
    if (!this.selectedCrmUser) return;
    this.userNotes = this.userNotes.filter(n => n.id !== noteId);
    localStorage.setItem(`gowild_crm_notes_${this.selectedCrmUser.id}`, JSON.stringify(this.userNotes));
  }

  getUserNoteCount(userId: string): number {
    try {
      const stored = localStorage.getItem(`gowild_crm_notes_${userId}`);
      if (!stored) return 0;
      const notes = JSON.parse(stored);
      return Array.isArray(notes) ? notes.length : 0;
    } catch {
      return 0;
    }
  }

  ngOnInit() {
    this.loadDropdownOptions();
    this.userService.getAllUsers().subscribe((res: any) => {
      const rows = this.extractUsers(res);
      this.users = rows.map((row: any) => this.normalizeUser(row));
      this.isLoading = false;
      this.isDetailView = false;
    })
  }

  private loadDropdownOptions() {
    this.dropdownService.getGroupOptions('userStatus').pipe(take(1)).subscribe((opts) => {
      if (opts.length === 0) return;
      this.statusOptions = [
        { value: 'all', label: 'All Users' },
        ...opts.map((opt) => ({ value: opt.value, label: opt.label }))
      ];
    });
  }

  get filteredUsers(): User[] {
    let filtered = this.users;

    if (this.selectedStatus !== 'all') {
      filtered = filtered.filter(u => this.statusCategory(u.status) === this.selectedStatus);
    }

    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter(u =>
        String(u?.name || '').toLowerCase().includes(query) ||
        String(u?.email || '').toLowerCase().includes(query) ||
        String(u?.phone || '').includes(query)
      );
    }

    // Join date range filter
    if (this.joinFrom || this.joinTo) {
      const from = this.joinFrom ? new Date(this.joinFrom) : null;
      const to   = this.joinTo   ? new Date(this.joinTo)   : null;
      if (to) to.setHours(23, 59, 59, 999);
      filtered = filtered.filter(u => {
        const joined = new Date(u.joinDate);
        if (isNaN(joined.getTime())) return true;
        if (from && joined < from) return false;
        if (to   && joined > to)   return false;
        return true;
      });
    }

    return filtered;
  }

  get totalUsersCount(): number {
    return this.users.length;
  }

  get activeUsersCount(): number {
    return this.users.filter((u) => this.statusCategory(u.status) === 'active').length;
  }

  get blockedUsersCount(): number {
    return this.users.filter((u) => this.statusCategory(u.status) === 'blocked').length;
  }

  get pendingUsersCount(): number {
    return this.users.filter((u) => this.statusCategory(u.status) === 'pending').length;
  }


  async viewUser(id: string) {
    const loading = await this.loadingCtrl.create({ message: 'Loading...' });
    await loading.present();

    this.userService.getUserById(id).subscribe({
      next: (res: any) => {
        loading.dismiss();
        this.isLoading = false;
        const data = res?.data?.data || res?.data || res;
        const user = data?.user || data;
        const bookings = Array.isArray(data?.bookings) ? data.bookings : [];
        if (user) {
          this.user     = user;
          this.bookings = bookings;
          this.isDetailView = true;
        }
      },
      error: () => {
        loading.dismiss();
        this.isLoading = false;
        this.isDetailView = false;
      }
    });
  }

  async confirmBlock(user: any) {
    const alert = await this.alertCtrl.create({
      header:  'Block User',
      message: `Are you sure you want to block ${user.name}?`,
      buttons: [
        { text: 'Cancel', role: 'cancel' },
        {
          text: 'Block',
          role: 'destructive',
          handler: () => this.blockUser(user)
        }
      ]
    });
    await alert.present();
  }

  blockUser(user: any) {
    this.userService.blockUser(user.id).subscribe((res: any) => {
      if (res.response) {
        this.user.status = 'blocked';
      }
    });
  }

  activateUser(user: any) {
    this.userService.activateUser(user.id).subscribe((res: any) => {
      if (res.response) {
        this.user.status = 'active';
      }
    });
  }

  getAvatar(user: any) {
    return user?.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || 'U')}&background=667eea&color=fff&size=128`;
  }

  getStatusColor(status: string) {
    return status === 'active' ? 'success' : status === 'blocked' ? 'danger' : 'medium';
  }

  getBookingStatusColor(status: string) {
    const map: any = { confirmed: 'success', pending: 'warning', cancelled: 'danger', completed: 'primary' };
    return map[status] || 'medium';
  }

  goBack(){
    this.isDetailView = false;
    this.isLoading = false;
    this.selectedSegment = 'details';
    this.user = null;
    this.bookings = [];
  }

  toggleFilter() {
    this.showFilterPanel = !this.showFilterPanel;
  }

  resetFilters() {
    this.searchQuery = '';
    this.selectedStatus = 'all';
    this.joinFrom = '';
    this.joinTo = '';
  }

  getInitials(name: string): string {
    if (!name || name === '-') return 'U';
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }

  getAvatarColor(name: string): string {
    const colors = ['#1d7a6d', '#0284c7', '#7c3aed', '#d97706', '#db2777', '#059669', '#4f46e5'];
    let hash = 0;
    const str = name || 'User';
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % colors.length;
    return colors[index];
  }

  private normalizeUser(row: any): User {
    const status = this.resolveStatus(row);
    return {
      ...row,
      id: String(row?.id || ''),
      name: row?.name || row?.full_name || '-',
      email: row?.email || '-',
      phone: row?.phone || row?.phone_number || '-',
      joinDate: row?.joinDate || row?.created_at || row?.createdAt || '-',
      totalBookings: Number(row?.totalBookings ?? row?.total_bookings ?? 0),
      totalSpent: Number(row?.totalSpent ?? row?.total_spent ?? 0),
      status,
      avatar: row?.avatar || '',
    };
  }

  private resolveStatus(row: any): 'active' | 'inactive' | 'blocked' {
    const status = String(row?.status || '').toLowerCase();
    if (status === 'active') return 'active';
    if (status === 'blocked') return 'blocked';
    if (status === 'inactive' || status === 'pending') return 'inactive';

    const isActive = row?.is_active ?? row?.isActive;
    if (isActive === 1 || isActive === true || isActive === '1') return 'active';
    if (isActive === 0 || isActive === false || isActive === '0') return 'inactive';

    return 'inactive';
  }

  private statusCategory(status: string): 'active' | 'blocked' | 'pending' {
    const value = String(status || '').toLowerCase();
    if (value === 'active') return 'active';
    if (value === 'blocked') return 'blocked';
    return 'pending';
  }

  private extractUsers(res: any): any[] {
    if (Array.isArray(res?.data)) return res.data;
    if (Array.isArray(res?.data?.users)) return res.data.users;
    if (Array.isArray(res?.users)) return res.users;
    if (Array.isArray(res)) return res;
    return [];
  }

}
