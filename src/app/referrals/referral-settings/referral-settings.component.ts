import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AdminShellComponent } from '../../shared/admin-shell/admin-shell.component';
import { ReferralSettings, ReferralSettingsPayload, ReferralSettingsService } from '../referral-settings.service';

interface StatCard {
  label: string;
  value: string;
  helper?: string;
  accent?: 'primary' | 'accent' | 'warning';
}

@Component({
  selector: 'app-referral-settings',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, IonicModule, AdminShellComponent],
  templateUrl: './referral-settings.component.html',
  styleUrls: ['./referral-settings.component.scss'],
})
export class ReferralSettingsComponent implements OnInit {
  form: FormGroup;
  loading = false;
  saving = false;
  message = '';
  error = '';
  statCards: StatCard[] = [];
  settings: ReferralSettings | null = null;

  constructor(private fb: FormBuilder, private referralService: ReferralSettingsService) {
    this.form = this.fb.group({
      baseDiscount: [200, [Validators.required, Validators.min(0)]],
      bonusDiscount: [500, [Validators.required, Validators.min(0)]],
      bonusParticipantThreshold: [5, [Validators.required, Validators.min(1)]],
      freeSlotThreshold: [5, [Validators.required, Validators.min(1)]],
      freeSlotValue: [1, [Validators.required, Validators.min(1)]],
      isEnabled: [true],
    });
  }

  ngOnInit(): void {
    this.loadSettings();
  }

  get statusLabel(): string {
    return this.form.get('isEnabled')?.value ? 'Program Active' : 'Program Paused';
  }

  get statusClass(): string {
    return this.form.get('isEnabled')?.value ? 'active' : 'inactive';
  }

  get lastUpdatedLabel(): string {
    if (!this.settings?.updatedAt) return 'Not updated yet';
    const date = new Date(this.settings.updatedAt);
    const formatted = Number.isNaN(date.getTime()) ? this.settings.updatedAt : date.toLocaleString();
    const by = this.settings?.updatedBy?.name || this.settings?.updatedBy?.email || 'Admin';
    return `Updated ${formatted} by ${by}`;
  }

  loadSettings(): void {
    this.loading = true;
    this.error = '';
    this.referralService.getSettings().subscribe({
      next: (res) => {
        const data = res?.data;
        if (data) {
          this.settings = data;
          this.form.patchValue({
            baseDiscount: data.baseDiscount,
            bonusDiscount: data.bonusDiscount,
            bonusParticipantThreshold: data.bonusParticipantThreshold,
            freeSlotThreshold: data.freeSlotThreshold,
            freeSlotValue: data.freeSlotValue,
            isEnabled: data.isEnabled !== 0,
          });
          this.buildStatCards(data);
        }
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.error = 'Failed to load referral settings';
      },
    });
  }

  saveSettings(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.error = 'Please fix the highlighted fields';
      this.message = '';
      return;
    }
    const payload = this.buildPayload();
    this.saving = true;
    this.message = '';
    this.error = '';
    this.referralService.updateSettings(payload).subscribe({
      next: (res) => {
        this.saving = false;
        this.message = res?.message || 'Referral settings updated';
        this.settings = res?.data || payload;
        if (this.settings) {
          this.form.patchValue({
            baseDiscount: this.settings.baseDiscount,
            bonusDiscount: this.settings.bonusDiscount,
            bonusParticipantThreshold: this.settings.bonusParticipantThreshold,
            freeSlotThreshold: this.settings.freeSlotThreshold,
            freeSlotValue: this.settings.freeSlotValue,
            isEnabled: this.settings.isEnabled !== 0,
          });
          this.buildStatCards(this.settings);
        }
      },
      error: (err) => {
        this.saving = false;
        this.error = err?.error?.message || 'Failed to update referral settings';
      },
    });
  }

  getFieldError(name: string): string {
    const control = this.form.get(name);
    if (!control || !control.touched || !control.errors) return '';
    if (control.errors['required']) return 'Required';
    if (control.errors['min']) return `Minimum value is ${control.errors['min'].min}`;
    return 'Invalid value';
  }

  private buildPayload(): ReferralSettingsPayload {
    return {
      baseDiscount: Number(this.form.get('baseDiscount')?.value || 0),
      bonusDiscount: Number(this.form.get('bonusDiscount')?.value || 0),
      bonusParticipantThreshold: Number(this.form.get('bonusParticipantThreshold')?.value || 0),
      freeSlotThreshold: Number(this.form.get('freeSlotThreshold')?.value || 0),
      freeSlotValue: Number(this.form.get('freeSlotValue')?.value || 0),
      isEnabled: !!this.form.get('isEnabled')?.value,
    };
  }

  private buildStatCards(data: ReferralSettings): void {
    const active = data.isEnabled !== 0;
    this.statCards = [
      {
        label: 'Base Discount',
        value: this.formatCurrency(data.baseDiscount),
        helper: 'per successful referral',
        accent: 'primary',
      },
      {
        label: 'Bonus Discount',
        value: this.formatCurrency(data.bonusDiscount),
        helper: `when bringing ${data.bonusParticipantThreshold}+ participants`,
        accent: 'accent',
      },
      {
        label: 'Free Trek Reward',
        value: `${data.freeSlotValue} slot${data.freeSlotValue > 1 ? 's' : ''}`,
        helper: `after ${data.freeSlotThreshold} successful referrals`,
        accent: 'warning',
      },
      {
        label: 'Program Status',
        value: active ? 'Active' : 'Paused',
        helper: active ? 'Users can apply referral codes' : 'Referral codes disabled',
      },
    ];
  }

  private formatCurrency(amount: number): string {
    const value = Number(amount || 0);
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(value);
  }
}
