import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleFormComponent } from './simple-form.component';
import { VFactoryModule } from 'v-factory';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [SimpleFormComponent],
  imports: [
    CommonModule,
    VFactoryModule,
    MatCardModule
  ],
  exports: [SimpleFormComponent]
})
export class SimpleFormModule { }
