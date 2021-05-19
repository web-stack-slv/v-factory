import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCheckboxFieldComponent } from './v-checkbox-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [VCheckboxFieldComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCheckboxModule
  ]
})
export class VCheckboxFieldModule { }
