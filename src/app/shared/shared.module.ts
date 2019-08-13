import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpinnerComponent } from './spinner/spinner.component';
import { HighlightDirective } from './directives/highlight.directive';
import { OrderByPipe } from './pipes/orderby.pipe';

@NgModule({
  declarations: [SpinnerComponent, HighlightDirective, OrderByPipe],
  imports: [CommonModule],
  exports: [SpinnerComponent, HighlightDirective, OrderByPipe]
})
export class SharedModule { }
