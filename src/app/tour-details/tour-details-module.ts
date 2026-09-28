import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TourDetailsComponent } from './tour-details.component';
const routes: Routes = [{ path: ':id', component: TourDetailsComponent }];

@NgModule({
  declarations: [],
  imports: [
   CommonModule, TourDetailsComponent, RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TourDetailsModule { }
