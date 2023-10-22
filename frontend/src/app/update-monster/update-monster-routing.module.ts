import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateMonsterPage } from './update-monster.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateMonsterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateMonsterPageRoutingModule {}
