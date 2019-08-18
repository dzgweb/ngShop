import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConstantService } from './services';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: ConstantService, useValue: { App: 'ngShop', Ver: '1.0'} }
  ]
})
export class CoreModule { }
