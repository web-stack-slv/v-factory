import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseFormComponent } from './base-form.component';
import { VFactoryComponent, VFactoryModule } from 'v-factory';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    BaseFormComponent
  ],
  imports: [
    CommonModule,
    VFactoryModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule
  ],
  exports: [
    VFactoryModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule
  ],
  entryComponents: [
    VFactoryComponent
  ]
})
export class BaseFormModule { }
