import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VButton } from '../../models';

@Component({
  selector: 'app-button',
  templateUrl: './v-button.component.html',
  styleUrls: ['./v-button.component.scss']
})
export class VButtonComponent implements OnInit {

  field: VButton;
  group: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }
}
