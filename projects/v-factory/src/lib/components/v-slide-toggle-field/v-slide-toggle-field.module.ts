import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VSlideToggleFieldComponent } from './v-slide-toggle-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [VSlideToggleFieldComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSlideToggleModule
  ]
})
export class VSlideToggleFieldModule { }
