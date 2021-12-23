import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { map, startWith } from 'rxjs/operators';
import { VChipsField } from '../../models/v-chips-field.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Option } from '../../interfaces';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

@Component({
  selector: 'v-v-chips-field',
  templateUrl: './v-chips-field.component.html',
  styleUrls: ['./v-chips-field.component.scss']
})
export class VChipsFieldComponent implements OnInit {
  @ViewChild(MatAutocompleteTrigger, {read: MatAutocompleteTrigger}) trigger: MatAutocompleteTrigger;
  @ViewChild('chipsInput') chipsInput: ElementRef<HTMLInputElement>;

  field: VChipsField;
  group: FormGroup;
  filterControl = new FormControl('');
  separatorKeysCodes: number[] = [ENTER, COMMA];

  data: Option[] = [];
  idxs:any[] = [];

  get control(): FormControl {
    return this.group.get(this.field.name) as FormControl;
  }

  private _optionSubject = new BehaviorSubject<Option[]>([]); 
  options = this._optionSubject.asObservable();

  private _chipsSubject = new BehaviorSubject<Option[]>([]); 
  chips = this._chipsSubject.asObservable();

  constructor() {}

  ngOnInit(): void {
    if(this.field.options instanceof Observable) {
      this.field.options
      .pipe(
        map(x => this._transformOptions(x))
      )
      .subscribe(options => {
        this.data = options;
        this._optionSubject.next(this.data);
        this._chipsSubject.next(this.field.value);  
      });
    } else {
      this.data = this._transformOptions(this.field.options);
      this._optionSubject.next(this.data);
      this._chipsSubject.next(this.field.value);
    }

    this.filterControl.valueChanges
    .pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.label)),
      map(value => this._filter(value))
    )
    .subscribe(res => {
      this._optionSubject.next(res);
    });

    this.chips
    .subscribe(value => {
      this._filterOptions();
      this.control.setValue(value);
    });   
  }

  remove(item: Option): void {
    const chips = this._chipsSubject.value;    
    const index = chips.findIndex(x => x.value === item.value);

    if (index !== -1) {
      chips.splice(index, 1);
    }
    this._chipsSubject.next(chips);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    const value = event.option.value;
    const chips = this._chipsSubject.value;
    chips.push(value);
    this._chipsSubject.next(chips);    
    this.chipsInput?.nativeElement.blur();
  }

  private _filter(value: string): Option[] {    
    const filterValue = value.toLowerCase();
    const idxs = this._chipsSubject.value.map(x => x.value);
    return this.data
      .filter(option => option.label.toLowerCase().includes(filterValue) ||
        option.label.replace(' ', '').toLowerCase().includes(filterValue) || 
        option.label.toLowerCase().includes(filterValue.replace(' ', '')))
      .filter(option => idxs.indexOf(option.value) === -1)
      .sort((a,b) => {
        const aIdx = a.label?.toLowerCase().indexOf(filterValue),
        bIdx = b.label?.toLowerCase().indexOf(filterValue);
        return aIdx > bIdx ? 1 : -1;
    });
  }

  displayFn(option: Option): string {
    return option && option.label ? option.label : '';
  }

  trackByFn(index: any, item: any) {
    if(!item) return null;
    return index;
  }

  onFocus(): void {
    if(!this.filterControl.value || this.filterControl.value === '') {
      this.trigger?._onChange(''); 
      this.trigger?.openPanel();
    }
  }

  private _filterOptions(): void {
    const idxs = this._chipsSubject.value.map(x => x.value);
    const options = this.data
      .filter(x => idxs.indexOf(x.value) === -1);
    this._optionSubject.next(options);
  }

  private _transformOptions(options: Option[]): Option[] {
    return options.map(o => {
      return {
        ...o,
        data: {
          ...o.data,
          color: o.data?.color ?? 'accent',
          selected: o.data?.selected ?? false
        }
      }
    });
  }
}
