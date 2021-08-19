import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileFormComponent } from './file-form.component';
import { VFactoryModule } from 'v-factory';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [FileFormComponent],
  imports: [
    CommonModule,
    VFactoryModule,
    MatCardModule
  ],
  exports: [FileFormComponent]
})
export class FileFormModule { }
