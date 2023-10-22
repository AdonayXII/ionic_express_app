import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateMonsterPageRoutingModule } from './update-monster-routing.module';

import { UpdateMonsterPage } from './update-monster.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateMonsterPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UpdateMonsterPage]
})
export class UpdateMonsterPageModule {}
