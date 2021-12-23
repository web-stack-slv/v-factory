import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VChipsFieldComponent } from './v-chips-field.component';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    VChipsFieldComponent
  ],
  imports: [
    CommonModule,
    MatChipsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule
  ],
  exports: [
    VChipsFieldComponent
  ]
})
export class VChipsFieldModule { }
