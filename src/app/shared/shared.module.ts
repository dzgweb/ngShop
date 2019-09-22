import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpinnerComponent } from './spinner/spinner.component';
import { HighlightDirective } from './directives/highlight.directive';
import { OrderByPipe, EnumPipe } from './pipes/';
import { ScalefontDirective } from './directives/scalefont.directive';


@NgModule({
  declarations: [SpinnerComponent, HighlightDirective, OrderByPipe, ScalefontDirective, EnumPipe],
  imports: [CommonModule],
  exports: [SpinnerComponent, HighlightDirective, OrderByPipe, ScalefontDirective, EnumPipe]
})
export class SharedModule { }
