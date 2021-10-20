import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VNumberFieldComponent } from './v-number-field.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [VNumberFieldComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class VNumberFieldModule { }
