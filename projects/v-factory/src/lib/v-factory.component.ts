import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VItem } from './models/v-item.model';
import { VFactoryService } from './services/v-factory.service';

@Component({
  selector: 'v-v-factory',
  templateUrl: './v-factory.component.html',
  styleUrls: ['./v-factory.component.scss']
})
export class VFactoryComponent implements OnInit {

  @Input() formConfig: VItem[] = [];
  @Input() form: FormGroup;

  @Output() submit: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private _factoryService: VFactoryService
  ) { 
    this._factoryService.configEvent
      .subscribe(res => {
        this.formConfig = res;
        this._createControls(this.form)
      });
  }

  get value() {
    return this.form.value;
  }

  ngOnInit(): void {
    this._createControls(this.form);    
  }

  private _createControls(group: FormGroup) {
    this.formConfig.forEach(item => {
      item.createControl(group);      
    });
  }

  onSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.form.valid) {
      this.submit.emit(this.form);
    }
  }
}
