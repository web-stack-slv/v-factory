import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VChipsComponent } from './v-chips.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [VChipsComponent],
  imports: [
    CommonModule,
    MatChipsModule,
    MatIconModule
  ],
  exports: [VChipsComponent]
})
export class VChipsModule { }
