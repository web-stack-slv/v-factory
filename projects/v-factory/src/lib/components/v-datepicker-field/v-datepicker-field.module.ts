import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VDatepickerFieldComponent } from './v-datepicker-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [VDatepickerFieldComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule
  ],
  providers: [MatNativeDateModule]
})
export class VDatepickerFieldModule { }
