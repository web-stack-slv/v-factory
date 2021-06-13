import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VDividerComponent } from './v-divider.component';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [VDividerComponent],
  imports: [
    CommonModule,
    MatDividerModule
  ],
  exports: [VDividerComponent]
})
export class VDividerModule { }
