import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent, ManageOrdersComponent, ManageProductsComponent } from './components';
import { ProductsModule } from '../products/products.module';

@NgModule({
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    ManageOrdersComponent,
    ManageProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsModule,
    FormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
