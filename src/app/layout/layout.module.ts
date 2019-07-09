import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent, PathNotFoundComponent, LoginComponent } from './components';

@NgModule({
  declarations: [
    AboutComponent,
    PathNotFoundComponent,
    LoginComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
