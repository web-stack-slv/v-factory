import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VInputFieldComponent } from './v-input-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { TrimModule } from '../../directives/trim/trim.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [VInputFieldComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    TrimModule,
    MatButtonModule
  ]
})
export class VInputFieldModule { }
