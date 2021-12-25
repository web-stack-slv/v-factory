import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentFormComponent } from './content-form.component';
import { VFactoryModule } from 'v-factory';
import { MatCardModule } from '@angular/material/card';
import { SectionComponent } from './section/section.component';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    ContentFormComponent, 
    SectionComponent
  ],
  imports: [
    CommonModule,
    VFactoryModule,
    MatCardModule,
    MatTableModule,
    MatTabsModule
  ],
  exports: [ContentFormComponent]
})
export class ContentFormModule { }
