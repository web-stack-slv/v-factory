import { Component } from '@angular/core';
import { VFileField, VInputField, VButton } from 'v-factory';
import { BaseFormComponent } from '../base-form/base-form.component';

@Component({
  selector: 'app-file-form',
  templateUrl: '../base-form/base-form.component.html',
  styleUrls: ['../base-form/base-form.component.scss']
})
export class FileFormComponent extends BaseFormComponent {

  title = 'FORM WITH FILE FIELD (extended BaseForm)';
  subtitle = 'VFileField support only sigle file selection.';

  formConfig = [
    new VInputField({
      label: 'Title',
      name: 'title',
      validators: [{
        required: true,
        message: 'Field is required'
      },{
        maxlength: 50,
        message: 'Max length 10 chars'
      }]
    }),
    new VFileField({
      name: 'file',
      label: 'FileField',
      validators: [{
        fileExt: ['mp3', 'png', 'jpg'],
        message: 'Invalid file extension'
      },{
        fileSize: 2000000,
        message: 'Max file size 2M'
      }]
    }),
    new VButton({
      text: 'SUBMIT',
      styleType: 'raised',
      type: 'submit'
    })
  ];

  constructor() {
    super();
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

  *********** file-form.module.ts *************
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { FileFormComponent } from './file-form.component';
  import { BaseFormModule } from '../base-form/base-form.module';


  @NgModule({
    declarations: [FileFormComponent],
    imports: [
      CommonModule,
      BaseFormModule
    ],
    exports: [FileFormComponent]
  })
  export class FileFormModule { }

  *********** file-form.component.ts *************
  import { Component } from '@angular/core';
  import { VFileField, VInputField, VButton } from 'v-factory';
  import { BaseFormComponent } from '../base-form/base-form.component';

  @Component({
    selector: 'app-file-form',
    templateUrl: '../base-form/base-form.component.html',
    styleUrls: ['../base-form/base-form.component.scss']
  })
  export class FileFormComponent extends BaseFormComponent {

    title = 'FORM WITH FILE FIELD (extended BaseForm)';
    subtitle = 'VFileField support only sigle file selection.';

    formConfig = [
      new VInputField({
        label: 'Title',
        name: 'title',
        validators: [{
          required: true,
          message: 'Field is required'
        },{
          maxlength: 50,
          message: 'Max length 10 chars'
        }]
      }),
      new VFileField({
        name: 'file',
        label: 'FileField',
        validators: [{
          fileExt: ['mp3', 'png', 'jpg'],
          message: 'Invalid file extension'
        },{
          fileSize: 2000000,
          message: 'Max file size 2M'
        }]
      }),
      new VButton({
        text: 'SUBMIT',
        styleType: 'raised',
        type: 'submit'
      })
    ];

    constructor() {
      super();
    }
  }
  `;
}
