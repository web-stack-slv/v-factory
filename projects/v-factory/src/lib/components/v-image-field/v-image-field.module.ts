import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { VImageFieldComponent } from './v-image-field.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ImageCropperModule } from './image-cropper/image-cropper.module';

@NgModule({
  declarations: [VImageFieldComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ImageCropperModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTooltipModule
  ]
})
export class VImageFieldModule { }
