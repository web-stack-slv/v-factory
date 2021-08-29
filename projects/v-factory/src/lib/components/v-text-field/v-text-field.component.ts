import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { take } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { VTextField } from '../../models';

@Component({
  selector: 'app-text-field',
  templateUrl: './v-text-field.component.html',
  styleUrls: ['./v-text-field.component.scss']
})
export class VTextFieldComponent implements OnInit {
  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  field: VTextField;
  group: FormGroup;

  constructor(private _ngZone: NgZone) {}

  ngOnInit(): void {
  }

  triggerResize() {
    this._ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }
}


  

  