import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SourcesPageRoutingModule } from './sources-routing.module';

import { SourcesPage } from './sources.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SourcesPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [SourcesPage]
})
export class SourcesPageModule {}
