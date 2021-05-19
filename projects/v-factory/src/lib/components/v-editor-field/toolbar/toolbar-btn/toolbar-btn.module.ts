import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarBtnComponent } from './toolbar-btn.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [ToolbarBtnComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [ToolbarBtnComponent]
})
export class ToolbarBtnModule { }
