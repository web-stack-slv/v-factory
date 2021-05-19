import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarColorComponent } from './toolbar-color.component';


@NgModule({
  declarations: [ToolbarColorComponent],
  imports: [
    CommonModule
  ],
  exports: [ToolbarColorComponent]
})
export class ToolbarColorModule { }
