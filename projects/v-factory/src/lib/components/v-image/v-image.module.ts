import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VImageComponent } from './v-image.component';

@NgModule({
  declarations: [VImageComponent],
  imports: [
    CommonModule
  ],
  exports: [VImageComponent]
})
export class VImageModule { }
