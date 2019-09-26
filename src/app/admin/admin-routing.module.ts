import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdminDashboardComponent, ManageOrdersComponent, ManageProductsComponent } from './components';
import { ProductFormComponent } from '../products/';
import { AuthGuard } from './../core';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          {
            path: 'products',
            children: [
              { path: '', component: ManageProductsComponent },
              { path: 'add', component: ProductFormComponent },
              { path: 'edit/:productID', component: ProductFormComponent },
            ]
          },
          { path: 'orders', component: ManageOrdersComponent },
          { path: '', component: AdminDashboardComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
// export const adminRouterComponents = [AdminComponent, AdminDashboardComponent, ManageProductsComponent, ManageOrdersComponent];
