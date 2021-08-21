import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { VItem } from './models/v-item.model';
import { VFactoryService } from './services/v-factory.service';

@Component({
  selector: 'v-v-factory',
  templateUrl: './v-factory.component.html',
  styleUrls: ['./v-factory.component.scss']
})
export class VFactoryComponent implements OnInit, OnDestroy {

  @Input() formConfig: VItem[] = [];
  @Input() form: FormGroup;

  @Output() submit: EventEmitter<any> = new EventEmitter<any>();

  formConfig$: Observable<VItem[]>;

  constructor(
    private _factoryService: VFactoryService
  ) {
    this.formConfig$ = this._factoryService.configEvent;
  }

  get value() {
    return this.form.value;
  }

  ngOnInit(): void {
    this._factoryService.updateConfig(this.formConfig, this.form);
  }

  onSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.form.valid) {
      this.submit.emit(this.form);
    }
  }

  ngOnDestroy(): void {
    this._factoryService.clearConfig();
  }
}
