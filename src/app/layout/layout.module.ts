import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { AboutComponent, PathNotFoundComponent, LoginComponent } from './components';

@NgModule({
  declarations: [
    AboutComponent,
    PathNotFoundComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ]
})
export class LayoutModule { }
