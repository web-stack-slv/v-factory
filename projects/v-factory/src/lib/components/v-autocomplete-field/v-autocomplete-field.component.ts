import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VAutocompleteField } from '../../models';
import { isObservable, BehaviorSubject } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Option } from '../../interfaces';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';

@Component({
  selector: 'app-autocomplete-field',
  templateUrl: './v-autocomplete-field.component.html',
  styleUrls: ['./v-autocomplete-field.component.scss']
})
export class VAutocompleteFieldComponent implements OnInit {
  @ViewChild(MatAutocompleteTrigger, {read: MatAutocompleteTrigger}) trigger: MatAutocompleteTrigger;

  field: VAutocompleteField;
  group: FormGroup;
  data: any = [];

  private _optionSubject = new BehaviorSubject<Option[]>([]);
  filteredOptions = this._optionSubject.asObservable();

  constructor() { }

  get control(): FormControl {
    return this.group.get(this.field.name) as FormControl;
  }

  ngOnInit(): void {
    if(isObservable(this.field.options)) {
      this.field.options
      .subscribe(res => {
        this.data = res;
        this._optionSubject.next(this.data);
      });
    } else {
      this.data = this.field.options;
      this._optionSubject.next(this.data);
    }
    
    this.control.valueChanges
    .pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.label)),
      map(value => this._filter(value))
    )
    .subscribe(res => {
      this._optionSubject.next(res);
    });
  }

  private _filter(value: string): Option[] {    
    const filterValue = value.toLowerCase();
    return this.data
      .filter(option => option.label.toLowerCase().includes(filterValue) ||
        option.label.replace(' ', '').toLowerCase().includes(filterValue) || 
        option.label.toLowerCase().includes(filterValue.replace(' ', '')))
      .filter(this.field.filter)
      .sort((a,b) => {
        const aIdx = a.label?.toLowerCase().indexOf(filterValue),
        bIdx = b.label?.toLowerCase().indexOf(filterValue);
        return aIdx > bIdx ? 1 : -1;
    });
  }

  displayFn(option: Option): string {
    return option && option.label ? option.label : '';
  }

  trackByFn(index, item) {
    if(!item) return null;
    return index;
  }

  onFocus(): void {
    if(!this.control.value || this.control.value === '') {
      this.trigger._onChange(''); 
      this.trigger.openPanel();
    }
  }
}