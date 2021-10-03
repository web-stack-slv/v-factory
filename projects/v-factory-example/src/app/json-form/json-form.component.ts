import { Component } from '@angular/core';
import { VFactoryService } from 'v-factory';
import { BaseFormComponent } from '../base-form/base-form.component';

@Component({
  selector: 'app-json-form',
  templateUrl: '../base-form/base-form.component.html',
  styleUrls: ['../base-form/base-form.component.scss']
})
export class JsonFormComponent extends BaseFormComponent {

  title = 'FORM FROM JSON CONFIG (extended BaseForm, delay 3 sec)';
  subtitle = 'We can load json configuration from server.';

  jsonCfg = [
    {
        vtype: 'vinputfield',
        label: 'VInputField',
        name: 'input',
        validators: [{
            required: true,
            message: 'Field is required'
        },{
            maxlength: 10,
            message: 'Max length 10 chars'
        }]
    },{
      vtype: 'vmaskedfield',
      name: 'masked',
      label: 'VMaskedField',
      mask: 'XXX-XXX-XXX'
    },{
      vtype: 'vradiofield',
      name: 'radio',
      label: 'VRadioField',
      options: [
        {value: 1, label: 'First'},
        {value: 2, label: 'Second'},
        {value: 3, label: 'Third'}
      ]
    },{
        vtype: 'vbutton',
        text: 'SUBMIT',
        styleType: 'raised',
        type: 'submit'
    }
  ];

  constructor(
    private _factoryService: VFactoryService
  ){
    super();
   }

  ngOnInit(): void {
    setTimeout(() => {
      this.formConfig = this._factoryService.fromJSON(this.jsonCfg);
      this._factoryService.updateConfig(this.formConfig, this.form);
    }, 3000);
  }
}
