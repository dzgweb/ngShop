import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpinnerComponent } from './spinner/spinner.component';
import { HighlightDirective } from './directives/highlight.directive';
import { OrderByPipe } from './pipes/orderby.pipe';
import { ScalefontDirective } from './directives/scalefont.directive';

@NgModule({
  declarations: [SpinnerComponent, HighlightDirective, OrderByPipe, ScalefontDirective],
  imports: [CommonModule],
  exports: [SpinnerComponent, HighlightDirective, OrderByPipe, ScalefontDirective]
})
export class SharedModule { }
