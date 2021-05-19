import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { ToolbarBtnModule } from './toolbar-btn/toolbar-btn.module';
import { ToolbarSelectModule } from './toolbar-select/toolbar-select.module';
import { ToolbarColorModule } from './toolbar-color/toolbar-color.module';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    ToolbarBtnModule,
    ToolbarSelectModule,
    ToolbarColorModule
  ],
  exports: [ToolbarComponent]
})
export class ToolbarModule { }
