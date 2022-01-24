import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VBoxComponent } from './v-box.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [VBoxComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [VBoxComponent]
})
export class VBoxModule { }
