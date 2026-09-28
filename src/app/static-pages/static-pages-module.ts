import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaticPagesComponent } from './static-pages.component';

const routes: Routes = [{ path: '', component: StaticPagesComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), StaticPagesComponent],
})
export class StaticPagesModule {}
