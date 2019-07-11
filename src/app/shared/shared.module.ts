import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Этот компонент надо задекларировать => declarations, exports
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
