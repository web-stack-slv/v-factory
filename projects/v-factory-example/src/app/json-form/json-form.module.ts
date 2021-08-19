import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonFormComponent } from './json-form.component';
import { VFactoryModule } from 'v-factory';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [JsonFormComponent],
  imports: [
    CommonModule,
    VFactoryModule,
    MatCardModule
  ],
  exports: [JsonFormComponent]
})
export class JsonFormModule { }
