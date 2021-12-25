import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './dynamic-form.component';
import { VFactoryModule } from 'v-factory';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [DynamicFormComponent],
  imports: [
    CommonModule,
    VFactoryModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatTabsModule
  ],
  exports: [DynamicFormComponent]
})
export class DynamicFormModule { }
