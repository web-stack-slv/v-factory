import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VColorField } from '../../models';

@Component({
  selector: 'app-v-color-field',
  templateUrl: './v-color-field.component.html',
  styleUrls: ['./v-color-field.component.scss']
})
export class VColorFieldComponent implements OnInit {

  field: VColorField;
  group: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
