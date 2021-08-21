import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VAutocompleteField } from '../../models';
import { Observable, isObservable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Option } from '../../interfaces';

@Component({
  selector: 'app-autocomplete-field',
  templateUrl: './v-autocomplete-field.component.html',
  styleUrls: ['./v-autocomplete-field.component.scss']
})
export class VAutocompleteFieldComponent implements OnInit {

  field: VAutocompleteField;
  group: FormGroup;
  data: any = [];

  filteredOptions: Observable<Option[]>;

  constructor() { }

  ngOnInit(): void {
    if(isObservable(this.field.options)) {
      this.field.options
      .subscribe(res => {
        this.data = res;
      });
    } else {
      this.data = this.field.options;
    }    
    
    this.filteredOptions = this.group.get(this.field.name)
    .valueChanges.pipe(
      startWith(''),
      map(value => this.filter(value))
    );
  }

  filter(value: string): Option[] | undefined {    
    if (typeof value === 'string' && value.trim() !== '') {
      const filterValue = value.toLowerCase();
      return this.data.filter((item: any) => item.label.toLowerCase().includes(filterValue)
      );
    }
    return this.data;
  }

  displayFn(option: Option): string {
    return option && option.label ? option.label : '';
  }

  trackByFn(index, item) {
    if(!item) return null;
    return index;
  }
}
