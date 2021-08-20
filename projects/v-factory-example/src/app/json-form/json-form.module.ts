import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonFormComponent } from './json-form.component';
import { BaseFormModule } from '../base-form/base-form.module';

@NgModule({
  declarations: [JsonFormComponent],
  imports: [
    CommonModule,
    BaseFormModule
  ],
  exports: [JsonFormComponent]
})
export class JsonFormModule { }
