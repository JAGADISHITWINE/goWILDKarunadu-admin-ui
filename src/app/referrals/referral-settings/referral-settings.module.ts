import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReferralSettingsComponent } from './referral-settings.component';

const routes: Routes = [{ path: '', component: ReferralSettingsComponent }];

@NgModule({
  imports: [ReferralSettingsComponent, RouterModule.forChild(routes)],
})
export class ReferralSettingsModule {}
