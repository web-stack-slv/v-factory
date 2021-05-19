import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VChipsFieldComponent } from './v-chips-field.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [VChipsFieldComponent],
  imports: [
    CommonModule,
    MatChipsModule,
    MatIconModule
  ],
  exports: [VChipsFieldComponent]
})
export class VChipsFieldModule { }
