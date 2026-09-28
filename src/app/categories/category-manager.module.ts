import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryManagerComponent } from './category-manager.component';

const routes: Routes = [{ path: '', component: CategoryManagerComponent }];

@NgModule({
  imports: [CategoryManagerComponent, RouterModule.forChild(routes)],
})
export class CategoryManagerModule {}
