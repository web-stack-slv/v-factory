import { Component } from '@angular/core';
import { BaseFormComponent } from '../base-form/base-form.component';
import { VList, VTextField, VButton, VLabel, VDragDropList, Option } from 'v-factory';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-list-form',
  templateUrl: '../base-form/base-form.component.html',
  styleUrls: ['../base-form/base-form.component.scss']
})
export class ListFormComponent extends BaseFormComponent {

  title = 'FORM WITH LIST (extended BaseForm)';
  subtitle = 'VList and VDragDropList its just for display data but they can interact with form';

  formConfig = [
    new VTextField({
      name: 'text',
      label: 'VTextField'
    }),
    new VLabel({
      text: 'Employees - VLabel'
    }), 
    new VList({
      label: 'VList',
      editHandler: (idx) =>this.editHandler(idx),
      deleteHandler: (idx) =>this.deleteHandler(idx),
      options: [
        {value: 1, label: 'John', data: { info: 'CEO  phone.(050)666-66-66' }},
        {value: 2, label: 'Cara', data: { info: 'Manager  phone.(050)666-66-66' }},
        {value: 3, label: 'Mario', data: { info: 'Assistant  phone.(050)666-66-66' }},
        {value: 4, label: 'Benny', data: { info: 'Manager  phone.(050)666-66-66' }},
      ]
    }),
    new VDragDropList({
      label: 'Drag & Drop',
      name: 'draganddrop',
      showAvatar: true,
      removable: true,
      showPreview: true,
      handler: (o: Option) => this._onDblClick(o),
      removeHandler: (o: Option) => this._removeStep(o),
      options: [
        {value: 1, label: 'John', data: { image: 'assets/images/fish/fish1.png' }},
        {value: 2, label: 'Cara', data: { image: 'assets/images/fish/fish2.png' }},
        {value: 3, label: 'Mario', data: { image: 'assets/images/fish/fish3.png' }},
        {value: 4, label: 'Benny', data: { image: 'assets/images/fish/fish4.png' }},
      ],
      styles: {
        width: '100%'
      }
    }),
    new VButton({
      text: 'SUBMIT',
      styleType: 'raised',
      type: 'submit'
    })
  ];

  get draganddrop(): FormControl {
    return this.form.get('draganddrop') as FormControl;
  }

  constructor() {
    super();
  }
  
  editHandler(idx: any): void {
    console.log(idx);
  }

  deleteHandler(idx: any): void {
    console.log(idx);
  }

  private _onDblClick(option: Option): void {
    console.log(option);
  }

  private _removeStep(option: Option): void {
    const stepId = +option.value;
    const dragdropList = this.formConfig.find(item => item.getName() === 'vdragdroplist') as VDragDropList;
    const idx = dragdropList.options.findIndex(o => o.value === stepId);
    dragdropList.options.splice(idx, 1);
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

  *********** list-form.module.ts *************
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { ListFormComponent } from './list-form.component';
  import { BaseFormModule } from '../base-form/base-form.module';


  @NgModule({
    declarations: [ListFormComponent],
    imports: [
      CommonModule,
      BaseFormModule
    ],
    exports: [ListFormComponent]
  })
  export class ListFormModule { }

  *********** list-form.component.ts *************

  import { Component } from '@angular/core';
  import { BaseFormComponent } from '../base-form/base-form.component';
  import { VList, VTextField, VButton, VLabel, VDragDropList, Option } from 'v-factory';
  import { FormControl } from '@angular/forms';

  @Component({
    selector: 'app-list-form',
    templateUrl: '../base-form/base-form.component.html',
    styleUrls: ['../base-form/base-form.component.scss']
  })
  export class ListFormComponent extends BaseFormComponent {

    title = 'FORM WITH LIST (extended BaseForm)';
    subtitle = 'VList and VDragDropList its just for display data but they can interact with form';

    formConfig = [
      new VTextField({
        name: 'text',
        label: 'VTextField'
      }),
      new VLabel({
        text: 'Employees - VLabel'
      }), 
      new VList({
        label: 'VList',
        editHandler: (idx) =>this.editHandler(idx),
        deleteHandler: (idx) =>this.deleteHandler(idx),
        options: [
          {value: 1, label: 'John', data: { info: 'CEO  phone.(050)666-66-66' }},
          {value: 2, label: 'Cara', data: { info: 'Manager  phone.(050)666-66-66' }},
          {value: 3, label: 'Mario', data: { info: 'Assistant  phone.(050)666-66-66' }},
          {value: 4, label: 'Benny', data: { info: 'Manager  phone.(050)666-66-66' }},
        ]
      }),
      new VDragDropList({
        label: 'Drag & Drop',
        name: 'draganddrop',
        showAvatar: true,
        removable: true,
        showPreview: true,
        handler: (o: Option) => this._onDblClick(o),
        removeHandler: (o: Option) => this._removeStep(o),
        options: [
          {value: 1, label: 'John', data: { image: 'assets/images/fish/fish1.png' }},
          {value: 2, label: 'Cara', data: { image: 'assets/images/fish/fish2.png' }},
          {value: 3, label: 'Mario', data: { image: 'assets/images/fish/fish3.png' }},
          {value: 4, label: 'Benny', data: { image: 'assets/images/fish/fish4.png' }},
        ],
        styles: {
          width: '100%'
        }
      }),
      new VButton({
        text: 'SUBMIT',
        styleType: 'raised',
        type: 'submit'
      })
    ];

    get draganddrop(): FormControl {
      return this.form.get('draganddrop') as FormControl;
    }

    constructor() {
      super();
    }
    
    editHandler(idx: any): void {
      console.log(idx);
    }

    deleteHandler(idx: any): void {
      console.log(idx);
    }

    private _onDblClick(option: Option): void {
      console.log(option);
    }

    private _removeStep(option: Option): void {
      const stepId = +option.value;
      const dragdropList = this.formConfig.find(item => item.getName() === 'vdragdroplist') as VDragDropList;
      const idx = dragdropList.options.findIndex(o => o.value === stepId);
      dragdropList.options.splice(idx, 1);
    }
  }
  `;

}
