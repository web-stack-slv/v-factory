import { Component } from '@angular/core';
import { VInputField, VImageField, VButton, VImage } from 'v-factory';
import { BaseFormComponent } from '../base-form/base-form.component';

@Component({
  selector: 'app-image-form',
  templateUrl: '../base-form/base-form.component.html',
  styleUrls: ['../base-form/base-form.component.scss']
})
export class ImageFormComponent extends BaseFormComponent {

  title = 'IMAGE FORM';
  subtitle = "For ImageField was used code base of ngx-image-cropper library. Original author Martijn Willekens. Thanks a lot!";

  formConfig = [
    new VImage({
      url: 'https://images.pexels.com/photos/266784/pexels-photo-266784.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    }),
    new VInputField({
      label: 'Image name',
      name: 'title'
    }),
    new VImageField({
      name: 'image',
      label: 'Image Field'
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

  *********** image-form.module.ts *************
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { ImageFormComponent } from './image-form.component';
  import { BaseFormModule } from '../base-form/base-form.module';


  @NgModule({
    declarations: [
      ImageFormComponent
    ],
    imports: [
      CommonModule,
      BaseFormModule
    ],
    exports: [ImageFormComponent]
  })
  export class ImageFormModule { }

  *********** image-form.component.ts *************

  import { Component } from '@angular/core';
  import { VInputField, VImageField, VButton, VImage } from 'v-factory';
  import { BaseFormComponent } from '../base-form/base-form.component';

  @Component({
    selector: 'app-image-form',
    templateUrl: '../base-form/base-form.component.html',
    styleUrls: ['../base-form/base-form.component.scss']
  })
  export class ImageFormComponent extends BaseFormComponent {

    title = 'IMAGE FORM';
    subtitle = "For ImageField was used code base of ngx-image-cropper library. Original author Martijn Willekens. Thanks a lot!";

    formConfig = [
      new VImage({
        url: 'https://images.pexels.com/photos/266784/pexels-photo-266784.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      }),
      new VInputField({
        label: 'Image name',
        name: 'title'
      }),
      new VImageField({
        name: 'image',
        label: 'Image Field'
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
