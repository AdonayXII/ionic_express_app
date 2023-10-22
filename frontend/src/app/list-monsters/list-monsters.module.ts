import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListMonstersPageRoutingModule } from './list-monsters-routing.module';

import { ListMonstersPage } from './list-monsters.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListMonstersPageRoutingModule
  ],
  declarations: [ListMonstersPage]
})
export class ListMonstersPageModule {}
