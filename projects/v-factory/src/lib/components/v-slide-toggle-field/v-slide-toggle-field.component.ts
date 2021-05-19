import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VSlideToggleField } from '../../models';

@Component({
  selector: 'app-slide-toggle-field',
  templateUrl: './v-slide-toggle-field.component.html',
  styleUrls: ['./v-slide-toggle-field.component.scss']
})
export class VSlideToggleFieldComponent implements OnInit {

  field: VSlideToggleField;
  group: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
