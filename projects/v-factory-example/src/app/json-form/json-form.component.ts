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

  codeHTML = `
  *********** base-form.component.html - common single html for all extended forms *************
  <mat-card>
    <mat-card-header>
        <mat-card-title>{{title}}</mat-card-title>
        <mat-card-subtitle>{{subtitle}}</mat-card-subtitle>
    </mat-card-header>
    <mat-card-content>
        <v-v-factory 
            [formConfig]="formConfig" 
            [form]="form"
            (submit)="submit($event)"
        ></v-v-factory>
    </mat-card-content>
</mat-card>
`;

codeTS = `
*********** base-form.component.ts *************
  import { Component, OnInit } from '@angular/core';
  import { FormGroup } from '@angular/forms';
  import { VItem } from 'dist/v-factory/public-api';

  @Component({
    selector: 'app-base-form',
    templateUrl: './base-form.component.html',
    styleUrls: ['./base-form.component.scss']
  })
  export class BaseFormComponent implements OnInit {

    title = 'Dynamic Form';
    subtitle = 'Short form description';
    form: FormGroup = new FormGroup({});
    formConfig: VItem[] = [];

    constructor() {}

    ngOnInit(): void {
      this.formInit();
    }

    formInit(): void {}

    submit(form: FormGroup) {
      console.log(form.value);
    }
  }

  *********** base-form.module.ts *************

  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { BaseFormComponent } from './base-form.component';
  import { VFactoryComponent, VFactoryModule } from 'v-factory';
  import { MatCardModule } from '@angular/material/card';
  import { FormsModule, ReactiveFormsModule } from '@angular/forms';
  import { MatTabsModule } from '@angular/material/tabs';

  @NgModule({
    declarations: [
      BaseFormComponent
    ],
    imports: [
      CommonModule,
      VFactoryModule,
      MatCardModule,
      FormsModule,
      ReactiveFormsModule,
      MatTabsModule
    ],
    exports: [
      VFactoryModule,
      MatCardModule,
      FormsModule,
      ReactiveFormsModule,
      MatTabsModule
    ],
    entryComponents: [
      VFactoryComponent
    ]
  })
  export class BaseFormModule { }

  *********** json-form.module.ts *************
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { JsonFormComponent } from './json-form.component';
  import { BaseFormModule } from '../base-form/base-form.module';

  @NgModule({
    declarations: [JsonFormComponent],
    imports: [
      CommonModule,
      BaseFormModule
    ],
    exports: [JsonFormComponent]
  })
  export class JsonFormModule { }

  *********** json-form.component.ts *************
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
  `;

}
