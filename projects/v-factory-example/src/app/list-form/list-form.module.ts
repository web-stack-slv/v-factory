import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFormComponent } from './list-form.component';
import { BaseFormModule } from '../base-form/base-form.module';


@NgModule({
  declarations: [ListFormComponent],
  imports: [
    CommonModule,
    BaseFormModule
  ],
  exports: [ListFormComponent]
})
export class ListFormModule { }
