import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpinnerComponent } from './spinner/spinner.component';
import { HighlightDirective } from './directives/highlight.directive';


@NgModule({
  declarations: [SpinnerComponent, HighlightDirective],
  imports: [
    CommonModule
  ],
  exports: [SpinnerComponent, HighlightDirective]
})
export class SharedModule { }
