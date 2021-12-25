import { Component } from '@angular/core';
import { BaseFormComponent } from '../base-form/base-form.component';
import { VBox, VInputField, VTextField, VAccordion, VFileField, VButton } from 'v-factory';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-expanded-form',
  templateUrl: '../base-form/base-form.component.html',
  styleUrls: ['../base-form/base-form.component.scss']
})
export class ExpandedFormComponent extends BaseFormComponent {

  title = 'EXPANDED FORM (extended BaseForm)';
  subtitle = 'VAccordion support form array control format';

  get documents(): FormArray {
    return this.form.get('documents') as FormArray;
  }

  formConfig = [
    new VAccordion({
      name:'documents',
      label: 'Documents',
      //initStep: -1,
      getItemTitle: (idx) => this._getItemTitle(idx),
      removeHandler: () => null,
      items: [
        new VBox({
          items: [
            new VInputField({
              label: 'Title',
              name: 'docTitle',
              validators: [{
                maxlength: 100,
                message: 'Max length 100 chars'
              }]
            }),
            new VTextField({
              name: 'docDescription',
              label: 'Description'
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
            })
          ]
        }),
        new VBox({
          items: [
            new VInputField({
              label: 'Title',
              name: 'docTitle',
              validators: [{
                maxlength: 100,
                message: 'Max length 100 chars'
              }]
            }),
            new VTextField({
              name: 'docDescription',
              label: 'Description'
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
            })
          ]
        })
        ]
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

  private _getItemTitle(idx: number) {
    const itemGroup = this.documents.controls[idx];
    return itemGroup.get('docTitle').value || `Document ${idx + 1}`;
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

    *********** expanded-form.module.ts *************
    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { ExpandedFormComponent } from './expanded-form.component';
    import { BaseFormModule } from '../base-form/base-form.module';


    @NgModule({
      declarations: [ExpandedFormComponent],
      imports: [
        CommonModule,
        BaseFormModule
      ],
      exports: [ExpandedFormComponent]
    })
    export class ExpandedFormModule { }

    *********** boxes-form.component.ts *************
    import { Component } from '@angular/core';
    import { BaseFormComponent } from '../base-form/base-form.component';
    import { VBox, VInputField, VTextField, VAccordion, VFileField, VButton } from 'v-factory';
    import { FormArray } from '@angular/forms';
    
    @Component({
      selector: 'app-expanded-form',
      templateUrl: '../base-form/base-form.component.html',
      styleUrls: ['../base-form/base-form.component.scss']
    })
    export class ExpandedFormComponent extends BaseFormComponent {
    
      title = 'EXPANDED FORM (extended BaseForm)';
      subtitle = 'VAccordion support form array control format';
    
      get documents(): FormArray {
        return this.form.get('documents') as FormArray;
      }
    
      formConfig = [
        new VAccordion({
          name:'documents',
          label: 'Documents',
          //initStep: -1,
          getItemTitle: (idx) => this._getItemTitle(idx),
          removeHandler: () => null,
          items: [
            new VBox({
              items: [
                new VInputField({
                  label: 'Title',
                  name: 'docTitle',
                  validators: [{
                    maxlength: 100,
                    message: 'Max length 100 chars'
                  }]
                }),
                new VTextField({
                  name: 'docDescription',
                  label: 'Description'
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
                })
              ]
            }),
            new VBox({
              items: [
                new VInputField({
                  label: 'Title',
                  name: 'docTitle',
                  validators: [{
                    maxlength: 100,
                    message: 'Max length 100 chars'
                  }]
                }),
                new VTextField({
                  name: 'docDescription',
                  label: 'Description'
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
                })
              ]
            })
            ]
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
    
      private _getItemTitle(idx: number) {
        const itemGroup = this.documents.controls[idx];
        return itemGroup.get('docTitle').value || 'Document $ {idx + 1}';
      }
    }
  `;
}
