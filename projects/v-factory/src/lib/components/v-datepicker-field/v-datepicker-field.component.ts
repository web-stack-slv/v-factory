import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VDatepickerField } from '../../models';

@Component({
  selector: 'app-datepicker-field',
  templateUrl: './v-datepicker-field.component.html',
  styleUrls: ['./v-datepicker-field.component.scss']
})
export class VDatepickerFieldComponent implements OnInit {

  field: VDatepickerField;
  group: FormGroup;

  constructor() { }

  ngOnInit(): void {}
}
