import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VNumberField } from '../../models';

@Component({
  selector: 'app-number-field',
  templateUrl: './v-number-field.component.html',
  styleUrls: ['./v-number-field.component.scss']
})
export class VNumberFieldComponent implements OnInit {

  field: VNumberField;
  group: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
