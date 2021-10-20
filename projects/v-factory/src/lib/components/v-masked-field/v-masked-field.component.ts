import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VMaskedField } from '../../models/v-masked-field.model';

@Component({
  selector: 'app-masked-field',
  templateUrl: './v-masked-field.component.html',
  styleUrls: ['./v-masked-field.component.scss']
})
export class VMaskedFieldComponent implements OnInit {

  field: VMaskedField;
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
