import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VColorFieldComponent } from './v-color-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [VColorFieldComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule
  ],
  exports: [VColorFieldComponent]
})
export class VColorFieldModule { }
