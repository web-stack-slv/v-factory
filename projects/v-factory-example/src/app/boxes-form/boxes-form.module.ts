import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxesFormComponent } from './boxes-form.component';
import { BaseFormModule } from '../base-form/base-form.module';


@NgModule({
  declarations: [BoxesFormComponent],
  imports: [
    CommonModule,
    BaseFormModule
  ],
  exports: [BoxesFormComponent]
})
export class BoxesFormModule { }
