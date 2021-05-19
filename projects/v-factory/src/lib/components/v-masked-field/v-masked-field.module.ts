import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VMaskedFieldComponent } from './v-masked-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MaskModule } from '../../directives/mask/mask.module';

@NgModule({
  declarations: [VMaskedFieldComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MaskModule
  ]
})
export class VMaskedFieldModule { }
