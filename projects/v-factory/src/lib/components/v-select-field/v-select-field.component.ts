import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Option } from '../../interfaces';
import { VSelectField } from '../../models';

@Component({
  selector: 'app-select-field',
  templateUrl: './v-select-field.component.html',
  styleUrls: ['./v-select-field.component.scss']
})
export class VSelectFieldComponent implements OnInit, OnDestroy {

  private _selectSource =  new BehaviorSubject<Option[]>([]);
  options = this._selectSource.asObservable();

  field: VSelectField;
  group: FormGroup;

  sub:Subscription;

  constructor() {
  }

  ngOnInit(): void {
    if(this.field.options instanceof Observable) {
      this.sub = this.field.options.subscribe(res => {
        this._selectSource.next(res);
      });
    } else {
      this._selectSource.next(this.field.options);
    }    
  }

  get value(): string {
    return this.group.get(this.field.name).value || '';
  }

  get option(): Option {
    return this._selectSource.value.find(option => option.value === this.value);
  }

  get label(): string {
    return this.option ? this.option.label : '';
  }

  get hint(): string {
    return this.value && this.option ? this.option.data?.hint || '' : '';
  }

  get color(): string {
    return this.value && this.option ? this.option.data?.color || '' : '';
  }

  get icon(): string {
    return this.value && this.option ? this.option.data?.icon || '' : '';
  }

  ngOnDestroy(): void {
    this.sub && this.sub.unsubscribe();
  }
}
