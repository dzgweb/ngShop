import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConstantsService } from './services/constants.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: ConstantsService, useValue: { App: 'ngShop', Ver: '1.0'} }
  ]
})
export class CoreModule { }
