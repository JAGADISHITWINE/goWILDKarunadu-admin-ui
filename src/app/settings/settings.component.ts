import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AdminShellComponent } from '../shared/admin-shell/admin-shell.component';
import { SettingsService, BrandSettings } from '../core/services/settings.service';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, AdminShellComponent],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  loading = false;
  saving = false;
  successMessage = '';
  errorMessage = '';

  settings: BrandSettings = {
    brandName: 'goWILD Karunadu',
    brandSubtitle: 'ಕರುನಾಡು',
    brandTagline: 'Wilderness Expeditions & Western Ghats Trails',
    supportPhone: '+91 98765 43210',
    supportPhoneRaw: '+919876543210',
    whatsappNumber: '+91 98765 43210',
    whatsappNumberRaw: '919876543210',
    supportEmail: 'info@gowildkarunadu.com',
    contactLocation: 'Bengaluru, Karnataka',
    legalName: 'goWILD Karunadu Eco-Adventures Pvt Ltd',
    gstin: '29AAGCW9123K1Z8',
    address: 'Forest Trailway Plaza, Indiranagar, Bengaluru, Karnataka 560038',
    socialFacebook: 'https://facebook.com/gowildkarunadu',
    socialInstagram: 'https://instagram.com/gowildkarunadu',
    socialYoutube: 'https://youtube.com/@gowildkarunadu',
    aboutText: "Karnataka's leading trekking and adventure travel company. Guiding passionate explorers through breathtaking Western Ghats trails.",
  };

  currentYear = new Date().getFullYear();

  constructor(private settingsService: SettingsService) {}

  ngOnInit(): void {
    this.loadSettings();
  }

  loadSettings(): void {
    this.loading = true;
    this.errorMessage = '';
    this.settingsService.getSettings().subscribe({
      next: (res) => {
        this.loading = false;
        if (res?.data) {
          this.settings = { ...this.settings, ...res.data };
        }
      },
      error: (err) => {
        this.loading = false;
        console.error('Failed to load settings:', err);
        this.errorMessage = 'Could not load settings from server. Displaying defaults.';
      }
    });
  }

  saveSettings(): void {
    this.saving = true;
    this.successMessage = '';
    this.errorMessage = '';

    if (this.settings.supportPhone) {
      this.settings.supportPhoneRaw = this.settings.supportPhone.replace(/[^0-9+]/g, '');
    }
    if (this.settings.whatsappNumber) {
      this.settings.whatsappNumberRaw = this.settings.whatsappNumber.replace(/[^0-9]/g, '');
    }

    this.settingsService.updateSettings(this.settings).subscribe({
      next: (res) => {
        this.saving = false;
        this.successMessage = 'Settings saved successfully! Brand name, phone number, and email have propagated to the website, emails, receipts, and passes.';
        setTimeout(() => this.successMessage = '', 6000);
      },
      error: (err) => {
        this.saving = false;
        console.error('Failed to save settings:', err);
        this.errorMessage = err?.error?.message || 'Failed to save settings. Please try again.';
      }
    });
  }
}
