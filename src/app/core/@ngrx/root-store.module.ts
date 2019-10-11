import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// @NgRx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from './../../../environments/environment';

import { ProductsStoreModule } from './products/products-store.module';
import { OrdersStoreModule } from './orders/orders-store.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(
      {},
      {
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
          strictStateSerializability: true,
          strictActionSerializability: true
        }
      }
    ),
    EffectsModule.forRoot([]),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    ProductsStoreModule,
    OrdersStoreModule
  ]
})
export class RootStoreModule { }
