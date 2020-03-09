import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeadlinePage } from './headline.page';

const routes: Routes = [
  {
    path: '',
    component: HeadlinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeadlinePageRoutingModule {}
