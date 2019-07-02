import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent, ProductListComponent, ProductDetailsComponent } from './components';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
