import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderComponent, OrderFormComponent, OrderListComponent } from './components/';

@NgModule({
  declarations: [OrderFormComponent, OrderListComponent, OrderComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ],
  exports: [
    OrderFormComponent,
    OrderListComponent,
    OrderComponent
  ]
})
export class OrdersModule { }
