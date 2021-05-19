import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarSelectComponent } from './toolbar-select.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [ToolbarSelectComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [ToolbarSelectComponent]
})
export class ToolbarSelectModule { }
