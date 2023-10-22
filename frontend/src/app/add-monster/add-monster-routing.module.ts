import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddMonsterPage } from './add-monster.page';

const routes: Routes = [
  {
    path: '',
    component: AddMonsterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddMonsterPageRoutingModule {}
