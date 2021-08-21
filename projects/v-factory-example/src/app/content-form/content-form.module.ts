import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentFormComponent } from './content-form.component';
import { VFactoryModule } from 'v-factory';
import { MatCardModule } from '@angular/material/card';
import { SectionComponent } from './section/section.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [ContentFormComponent, SectionComponent],
  imports: [
    CommonModule,
    VFactoryModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  exports: [ContentFormComponent]
})
export class ContentFormModule { }
