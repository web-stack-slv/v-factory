import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VSliderFieldComponent } from './v-slider-field.component';
import { MatSliderModule } from '@angular/material/slider';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [VSliderFieldComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSliderModule
  ]
})
export class VSliderFieldModule { }
