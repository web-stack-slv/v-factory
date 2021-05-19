import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VRadioFieldComponent } from './v-radio-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';


@NgModule({
  declarations: [VRadioFieldComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatRadioModule
  ]
})
export class VRadioFieldModule { }
