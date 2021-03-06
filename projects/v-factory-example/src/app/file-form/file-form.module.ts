import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileFormComponent } from './file-form.component';
import { BaseFormModule } from '../base-form/base-form.module';


@NgModule({
  declarations: [FileFormComponent],
  imports: [
    CommonModule,
    BaseFormModule
  ],
  exports: [FileFormComponent]
})
export class FileFormModule { }
