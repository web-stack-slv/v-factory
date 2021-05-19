import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VRadioField } from '../../models';

@Component({
  selector: 'app-radio-field',
  templateUrl: './v-radio-field.component.html',
  styleUrls: ['./v-radio-field.component.scss']
})
export class VRadioFieldComponent implements OnInit {

  field: VRadioField;
  group: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
