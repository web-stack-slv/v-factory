import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageFormComponent } from './image-form.component';
import { BaseFormModule } from '../base-form/base-form.module';


@NgModule({
  declarations: [
    ImageFormComponent
  ],
  imports: [
    CommonModule,
    BaseFormModule
  ],
  exports: [ImageFormComponent]
})
export class ImageFormModule { }
