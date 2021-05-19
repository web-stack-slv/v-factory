import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VAccordionComponent } from './v-accordion.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { VFieldModule } from '../../directives/v-field/v-field.module';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [VAccordionComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    VFieldModule,
    MatTooltipModule
  ],
  exports: [VAccordionComponent]
})
export class VAccordionModule { }
