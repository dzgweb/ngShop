import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartListComponent, CartItemComponent } from './components';

@NgModule({
  declarations: [
    CartListComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CartModule { }
