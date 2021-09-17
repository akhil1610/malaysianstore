import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurentsPageRoutingModule } from './restaurents-routing.module';

import { RestaurentsPage } from './restaurents.page';
import { SearchComponent } from './../../components/modals/searchs/search.component'
import { FiltersComponent } from './../../components/modals/filterss/filters.component';
import { DeliveryComponent } from './../../components/modals/deliverys/delivery.component';
import { MenuComponent } from './../../components/popoverss/menu/menu.component';
import { PlateDetailsComponent } from './../../components/modals/plate-detailss/plate-details.component';
import { CheckoutComponent } from './../../components/modals/checkouts/checkout.component';

import { ProductItemComponent } from './../../components/functinals/product-items/product-item.component';
import { SearchProductFilterPipe } from './../../pipess/search-product-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurentsPageRoutingModule
  ],
  declarations: [RestaurentsPage, SearchComponent, FiltersComponent, DeliveryComponent, MenuComponent, PlateDetailsComponent, CheckoutComponent, ProductItemComponent, SearchProductFilterPipe]
})
export class RestaurentsPageModule {}
