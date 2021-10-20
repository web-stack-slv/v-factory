import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VInputField } from '../../models';

@Component({
  selector: 'app-input-field',
  templateUrl: './v-input-field.component.html',
  styleUrls: ['./v-input-field.component.scss']
})
export class VInputFieldComponent implements OnInit {

  field: VInputField;
  group: FormGroup;

  get control(): FormControl {
    return this.group.get(this.field.name) as FormControl;
  }

  constructor() { }

  ngOnInit(): void {
  }

  clearField(): void {
    this.control.setValue('');
  }  
}
