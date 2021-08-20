import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VItem } from 'dist/v-factory/public-api';

@Component({
  selector: 'app-base-form',
  templateUrl: './base-form.component.html',
  styleUrls: ['./base-form.component.scss']
})
export class BaseFormComponent implements OnInit {

  title = 'Dynamic Form';
  form: FormGroup = new FormGroup({});
  formConfig: VItem[] = [];

  constructor() {}

  ngOnInit(): void {
  }

  submit(form: FormGroup) {
    console.log(form.value);
  }
}
