import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent, ProductDetailsComponent } from './components';
import { FeedbacksComponent } from '../layout/components/';
const routes: Routes = [
  {
    path: 'product-list',
    component: ProductListComponent,
  },
  {
    path: 'product/:productID',
    component: ProductDetailsComponent,
    // router-outlet is inside ProductDetailsComponent template => should be in children
    children: [
      {
        path: 'feedbacks',
        component: FeedbacksComponent,
        outlet: 'feedbacks'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
