import { Component } from '@angular/core';
import { BaseFormComponent } from '../base-form/base-form.component';
import { VBox, VSliderField, VInputField, VDivider, VDatepickerField, VEditorField, VButton, VAutocompleteField, Option, VChipsField } from 'v-factory';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-boxes-form',
  templateUrl: '../base-form/base-form.component.html',
  styleUrls: ['../base-form/base-form.component.scss']
})
export class BoxesFormComponent extends BaseFormComponent {

  title = 'FORM WITH BOXES (extended BaseForm)';
  subtitle = `VBoxes support two layouts -  row | column (default) 
              and three form mode for items - plate (just format view), 
              group ( create nested form group), array (create form array, default)`;

  private _brandSource = new BehaviorSubject<Option[]>([]);
  brands = this._brandSource.asObservable();

  private _selectedSource = new BehaviorSubject<Option[]>([]);
  selected = this._selectedSource.asObservable();

  formConfig = [
    new VBox({
      items: [
        new VAutocompleteField({
          name: 'brands',
          label: 'Brands',
          options: this.brands
        }),
        new VChipsField({
          name: 'selected',
          removable: true,
          selectable: true,
          value: [{value: 1, label: 'SMART Inc.'}],
          options: this.brands
        })
      ]
    }),
    new VBox({
      layout: 'row',
      name: 'form-array',
      items:[
        new VSliderField({
          name: 'slide1',
          label: 'VSliderField1',
          styles: {
            flex: 1
          }
        }),
        new VSliderField({
          name: 'slide2',
          label: 'VSliderField2',
          styles: {
            flex: 1
          }
        })
      ]
    }),
    new VDivider({}),
    new VBox({
      layout: 'row',
      name: 'form-group',
      formMode: 'group',
      items:[
        new VInputField({
          name: 'input1',
          label: 'VInputField1',
          styles: {
            flex: 1,
            marginRight: '5px'
          }
        }),
        new VInputField({
          name: 'input2',
          label: 'VInputField2',
          styles: {
            flex: 1,
            marginLeft: '5px'
          }
        })
      ]
    }),
    new VDivider({}),
    new VDatepickerField({
      name: 'date',
      label: 'VDatepickerField',
      styles: {
        marginTop: '20px'
      }
    }),
    new VDivider({}),
    new VEditorField({
      name: 'editor',
      label: 'Editor'
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

  formInit(): void {
    this._loadBrands();
  }

  private _loadBrands(): void{
    setTimeout(() => {
      this._brandSource.next([
        {value: 1, label: 'SMART Inc.'},
        {value: 2, label: 'Dummy & Lame', data: { selected: true }},
        {value: 3, label: 'CLEVER TECH', data: { selected: true }},
        {value: 4, label: 'X-ABILITY', data: { selected: true }},
      ]);
    }, 2000);
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

  *********** boxes-form.module.ts *************
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { BoxesFormComponent } from './boxes-form.component';
  import { BaseFormModule } from '../base-form/base-form.module';


  @NgModule({
    declarations: [BoxesFormComponent],
    imports: [
      CommonModule,
      BaseFormModule
    ],
    exports: [BoxesFormComponent]
  })
  export class BoxesFormModule { }

  *********** boxes-form.component.ts *************

  import { Component } from '@angular/core';
  import { BaseFormComponent } from '../base-form/base-form.component';
  import { VBox, VSliderField, VInputField, VDivider, VDatepickerField, VEditorField, VButton, VAutocompleteField, Option, VChipsField } from 'v-factory';
  import { BehaviorSubject } from 'rxjs';
  
  @Component({
    selector: 'app-boxes-form',
    templateUrl: '../base-form/base-form.component.html',
    styleUrls: ['../base-form/base-form.component.scss']
  })
  export class BoxesFormComponent extends BaseFormComponent {
  
    title = 'FORM WITH BOXES (extended BaseForm)';
    subtitle = 'VBoxes support two layouts -  row | column (default) 
                and three form mode for items - plate (just format view), 
                group ( create nested form group), array (create form array, default)';
  
    private _brandSource = new BehaviorSubject<Option[]>([]);
    brands = this._brandSource.asObservable();
  
    private _selectedSource = new BehaviorSubject<Option[]>([]);
    selected = this._selectedSource.asObservable();
  
    formConfig = [
      new VBox({
        items: [
          new VAutocompleteField({
            name: 'brands',
            label: 'Brands',
            options: this.brands
          }),
          new VChipsField({
            name: 'selected',
            removable: true,
            selectable: true,
            value: [{value: 1, label: 'SMART Inc.'}],
            options: this.brands
          })
        ]
      }),
      new VBox({
        layout: 'row',
        name: 'form-array',
        items:[
          new VSliderField({
            name: 'slide1',
            label: 'VSliderField1',
            styles: {
              flex: 1
            }
          }),
          new VSliderField({
            name: 'slide2',
            label: 'VSliderField2',
            styles: {
              flex: 1
            }
          })
        ]
      }),
      new VDivider({}),
      new VBox({
        layout: 'row',
        name: 'form-group',
        formMode: 'group',
        items:[
          new VInputField({
            name: 'input1',
            label: 'VInputField1',
            styles: {
              flex: 1,
              marginRight: '5px'
            }
          }),
          new VInputField({
            name: 'input2',
            label: 'VInputField2',
            styles: {
              flex: 1,
              marginLeft: '5px'
            }
          })
        ]
      }),
      new VDivider({}),
      new VDatepickerField({
        name: 'date',
        label: 'VDatepickerField',
        styles: {
          marginTop: '20px'
        }
      }),
      new VDivider({}),
      new VEditorField({
        name: 'editor',
        label: 'Editor'
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
  
    formInit(): void {
      this._loadBrands();
    }
  
    private _loadBrands(): void{
      setTimeout(() => {
        this._brandSource.next([
          {value: 1, label: 'SMART Inc.'},
          {value: 2, label: 'Dummy & Lame', data: { selected: true }},
          {value: 3, label: 'CLEVER TECH', data: { selected: true }},
          {value: 4, label: 'X-ABILITY', data: { selected: true }},
        ]);
      }, 2000);
    }
  }
  `;
}
