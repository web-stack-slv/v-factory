import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VFileFieldComponent } from './v-file-field.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [VFileFieldComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class VFileFieldModule { }
