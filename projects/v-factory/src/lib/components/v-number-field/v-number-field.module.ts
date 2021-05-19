import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VNumberFieldComponent } from './v-number-field.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [VNumberFieldComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule
  ]
})
export class VNumberFieldModule { }
