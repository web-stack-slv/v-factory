import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VInputField } from '../../models';

@Component({
  selector: 'app-input-field',
  templateUrl: './v-input-field.component.html',
  styleUrls: ['./v-input-field.component.scss']
})
export class VInputFieldComponent implements OnInit {

  field: VInputField;
  group: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }
  
}
