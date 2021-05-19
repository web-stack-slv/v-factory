import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormGroup } from '@angular/forms';
import { VChipsField } from '../../models';
import { Option } from '../../interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-v-chips-field',
  templateUrl: './v-chips-field.component.html',
  styleUrls: ['./v-chips-field.component.scss']
})
export class VChipsFieldComponent implements OnInit {

  field: VChipsField;
  group: FormGroup;

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  options: Option[] = [];

  constructor() { }

  ngOnInit(): void {
    if(Array.isArray(this.field.options)) {
      this.options = this.field.options;
    } else if(this.field.options instanceof Observable){
      this.field.options
      .subscribe(res => {
        this.options = res;
      });
    }
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.options.push({value: '', label: value.trim()});
    }

    if (input) {
      input.value = '';
    }
  }

  remove(option: Option): void {
    const index = this.options.indexOf(option);

    if (index >= 0) {
      this.options.splice(index, 1);
    }
  }

}
