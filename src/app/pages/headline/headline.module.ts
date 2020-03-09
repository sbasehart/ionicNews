import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeadlinePageRoutingModule } from './headline-routing.module';

import { HeadlinePage } from './headline.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeadlinePageRoutingModule,
    ComponentsModule
  ],
  declarations: [HeadlinePage]
})
export class HeadlinePageModule {}
