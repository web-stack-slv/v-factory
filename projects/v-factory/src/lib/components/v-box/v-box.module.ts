import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VBoxComponent } from './v-box.component';
import { VFieldModule } from '../../directives/v-field/v-field.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [VBoxComponent],
  imports: [
    CommonModule,
    VFieldModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [VBoxComponent]
})
export class VBoxModule { }
