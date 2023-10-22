import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-monsters',
    pathMatch: 'full'
  },
  {
    path: 'add-monster',
    loadChildren: () => import('./add-monster/add-monster.module').then( m => m.AddBicyclePageModule)
  },
  {
    path: 'list-monsters',
    loadChildren: () => import('./list-monsters/list-monsters.module').then( m => m.ListMonstersPageModule)
  },
  {
    path: 'update-monster/:id',
    loadChildren: () => import('./update-monster/update-monster.module').then( m => m.UpdateMonsterPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
