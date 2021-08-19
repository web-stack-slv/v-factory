import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseFormComponent } from './base-form.component';
import { VFactoryModule } from 'v-factory';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    BaseFormComponent
  ],
  imports: [
    CommonModule,
    VFactoryModule,
    MatCardModule
  ],
  exports: [
    VFactoryModule,
    MatCardModule
  ]
})
export class BaseFormModule { }
