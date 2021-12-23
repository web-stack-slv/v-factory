import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VChips } from '../../models';
import { Option } from '../../interfaces';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-v-chips',
  templateUrl: './v-chips.component.html',
  styleUrls: ['./v-chips.component.scss']
})
export class VChipsComponent implements OnInit {

  field: VChips;
  group: FormGroup;

  private _optionSubject = new BehaviorSubject<Option[]>([]); 
  options = this._optionSubject.asObservable();

  constructor() { }

  ngOnInit(): void {
    if(this.field.options instanceof Observable) {
      this.field.options
      .pipe(
        map(x => this._transformOptions(x))
      )
      .subscribe(options => {
        this._optionSubject.next(options);
      });
    } else {
      this._optionSubject.next(this._transformOptions(this.field.options));
    }
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
