import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent, ProductListComponent, ProductDetailsComponent, ProductFormComponent} from './components';
import { FeedbacksComponent } from '../layout/components';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductDetailsComponent,
    FeedbacksComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ProductsRoutingModule
  ],
  exports: [
    ProductListComponent,
    ProductComponent,
    ProductFormComponent
  ]
})
export class ProductsModule { }
