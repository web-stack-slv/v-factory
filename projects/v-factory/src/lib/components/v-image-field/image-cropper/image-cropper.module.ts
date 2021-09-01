/*
Original library: ngx-image-cropper
Original module author: Martijn Willekens
Original repository: https://github.com/Mawi137/ngx-image-cropper.git
Original homepage: https://github.com/Mawi137/ngx-image-cropper
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCropperComponent } from './component/image-cropper.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ImageCropperComponent
  ],
  exports: [
    ImageCropperComponent
  ]
})
export class ImageCropperModule {
}
