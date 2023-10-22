import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddMonsterPageRoutingModule } from './add-monster-routing.module';

import { AddMonsterPage } from './add-monster.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddMonsterPageRoutingModule
  ],
  declarations: [AddMonsterPage]
})
export class AddBicyclePageModule {}
