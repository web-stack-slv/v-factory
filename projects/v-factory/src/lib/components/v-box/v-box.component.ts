import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { VBox } from '../../models';

@Component({
  selector: 'app-box',
  templateUrl: './v-box.component.html',
  styleUrls: ['./v-box.component.scss']
})
export class VBoxComponent implements OnInit {

  @Input() field: VBox;
  @Input() group: FormGroup;

  boxFormArray: FormArray;
  isFormArray = false;

  get formArray() {
    return this.group.get(this.field.name) as FormArray;
  }

  constructor() {    
  }

  ngOnInit(): void {
  }
}
