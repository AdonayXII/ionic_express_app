import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListMonstersPage } from './list-monsters.page';

const routes: Routes = [
  {
    path: '',
    component: ListMonstersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListMonstersPageRoutingModule {}
