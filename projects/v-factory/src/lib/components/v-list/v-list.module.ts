import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VListComponent } from './v-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [VListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatIconModule,
    MatListModule
  ],
  exports: [VListComponent]
})
export class VListModule { }
