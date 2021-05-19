import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VAutocompleteFieldComponent } from './v-autocomplete-field.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [VAutocompleteFieldComponent],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class VAutocompleteFieldModule { }
