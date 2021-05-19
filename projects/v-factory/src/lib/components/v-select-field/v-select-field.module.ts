import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VSelectFieldComponent } from './v-select-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [VSelectFieldComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatIconModule
  ]
})
export class VSelectFieldModule { }
