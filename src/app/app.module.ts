import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './core/interceptors';

import { AppRoutingModule } from './app-routing.module';
import { ProductsModule } from './products/products.module';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { CartModule } from './cart/cart.module';
import { AdminModule } from './admin/admin.module';
import { AppComponent } from './app.component';
import { OrdersModule } from './orders/orders.module';
import { RootStoreModule } from './core/@ngrx/root-store.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductsModule,
    LayoutModule,
    SharedModule,
    AdminModule,
    CoreModule,
    CartModule,
    OrdersModule,
    RootStoreModule,
    // AppRoutingModule MUST BE LAST
    AppRoutingModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
