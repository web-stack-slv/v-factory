import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VTextFieldComponent } from './v-text-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { TrimModule } from '../../directives/trim/trim.module';
import { TextFieldModule } from '@angular/cdk/text-field';

@NgModule({
  declarations: [VTextFieldComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    TextFieldModule,
    TrimModule
  ]
})
export class VTextFieldModule { }
