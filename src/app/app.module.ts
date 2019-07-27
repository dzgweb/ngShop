import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {Router} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { ProductsModule } from './products/products.module';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { CartModule } from './cart/cart.module';
import { AdminModule } from './admin/admin.module';
import { AppComponent } from './app.component';
import { OrdersModuleModule } from './orders-module/orders-module.module';
import { SpinnerComponent } from './shared/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    LayoutModule,
    SharedModule,
    CartModule,
    AdminModule,
    OrdersModuleModule,
    CoreModule,
    // AppRoutingModule MUST BE LAST
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(router: Router) {
  //   console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  // }
}
