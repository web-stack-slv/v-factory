import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VCheckboxField } from '../../models';

@Component({
  selector: 'app-checkbox-field',
  templateUrl: './v-checkbox-field.component.html',
  styleUrls: ['./v-checkbox-field.component.scss']
})
export class VCheckboxFieldComponent implements OnInit {

  field: VCheckboxField;
  group: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
