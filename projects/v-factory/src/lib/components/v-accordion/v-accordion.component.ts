import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { VAccordion } from '../../models';

@Component({
  selector: 'app-v-accordion',
  templateUrl: './v-accordion.component.html',
  styleUrls: ['./v-accordion.component.scss']
})
export class VAccordionComponent implements OnInit {

  @Input() field: VAccordion;
  @Input() group: FormGroup;

  get formArray() {
    return this.group.get(this.field.name) as FormArray;
  }

  constructor() { }

  ngOnInit(): void {
  }
}
