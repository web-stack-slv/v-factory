import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VSliderField } from '../../models';

@Component({
  selector: 'app-slider-field',
  templateUrl: './v-slider-field.component.html',
  styleUrls: ['./v-slider-field.component.scss']
})
export class VSliderFieldComponent implements OnInit {

  field: VSliderField;
  group: FormGroup;

  getSliderTickInterval(): number | 'auto' {
    if (this.field.showTicks) {
      return this.field.autoTicks ? 'auto' : this.field.tickInterval;
    }
    return 0;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
