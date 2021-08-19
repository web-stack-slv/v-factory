import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsyncFormComponent } from './async-form.component';
import { VFactoryModule } from 'v-factory';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [AsyncFormComponent],
  imports: [
    CommonModule,
    VFactoryModule,
    MatCardModule
  ],
  exports: [AsyncFormComponent]
})
export class AsyncFormModule { }
