import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  constructor(private toastCtrl: ToastController) {}

  async show(message: string, duration = 3000) {
    try {
      const t = await this.toastCtrl.create({
        message,
        duration,
        position: 'bottom'
      });
      await t.present();
    } catch (e) {
      console.warn('Toast failed', e, message);
    }
  }
}
