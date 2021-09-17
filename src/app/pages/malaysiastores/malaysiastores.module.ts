import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MalaysiastoresPageRoutingModule } from './malaysiastores-routing.module';

import { MalaysiastoresPage } from './malaysiastores.page';

import { SearchClientFilterPipe } from './../../pipess/search-client-filter.pipe'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MalaysiastoresPageRoutingModule
  ],
  declarations: [MalaysiastoresPage, SearchClientFilterPipe]
})
export class MalaysiastoresPageModule {}
