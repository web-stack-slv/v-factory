import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpandedFormComponent } from './expanded-form.component';
import { BaseFormModule } from '../base-form/base-form.module';


@NgModule({
  declarations: [ExpandedFormComponent],
  imports: [
    CommonModule,
    BaseFormModule
  ],
  exports: [ExpandedFormComponent]
})
export class ExpandedFormModule { }
