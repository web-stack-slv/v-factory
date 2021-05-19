import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VTextField } from '../../models';

@Component({
  selector: 'app-text-field',
  templateUrl: './v-text-field.component.html',
  styleUrls: ['./v-text-field.component.scss']
})
export class VTextFieldComponent implements OnInit {

  field: VTextField;
  group: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
