import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Option } from '../../interfaces';
import { VSelectField } from '../../models';

@Component({
  selector: 'app-select-field',
  templateUrl: './v-select-field.component.html',
  styleUrls: ['./v-select-field.component.scss']
})
export class VSelectFieldComponent implements OnInit {

  field: VSelectField;
  group: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  get value(): string {
    return this.group.get(this.field.name).value || '';
  }

  get label(): string {
    return (this.field.options as Option[]).find(option => option.value === this.value).label || '';
  }

  get hint(): string {
    return this.value ? (this.field.options as Option[]).find(option => option.value === this.value).data?.hint || '' : '';
  }

  get color(): string {
    return this.value ? (this.field.options as Option[]).find(option => option.value === this.value).data?.color || '' : '';
  }

  get icon(): string {
    return this.value ? (this.field.options as Option[]).find(option => option.value === this.value).data?.icon || '' : '';
  }
}
