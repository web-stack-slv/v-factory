import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VLabelComponent } from './v-label.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [VLabelComponent],
  imports: [
    CommonModule,
    MatTooltipModule,
    MatIconModule
  ],
  exports: [VLabelComponent]
})
export class VLabelModule { }
