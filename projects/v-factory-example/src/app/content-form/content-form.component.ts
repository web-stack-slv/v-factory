import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VContent, VTextField, VSlideToggleField, VNumberField, VButton, VBox, VInputField } from 'v-factory';

@Component({
  selector: 'app-content-form',
  templateUrl: './content-form.component.html',
  styleUrls: ['./content-form.component.scss']
})
export class ContentFormComponent implements OnInit {
  form: FormGroup;

  formConfig = [
    new VTextField({
      name: 'text',
      label: 'VTextField'
    }),
    new VSlideToggleField({
      name: 'slider',
      label: 'VSlideToggleField'
    }), 
    new VContent({}),   
    new VNumberField({
      name: 'number',
      label: 'VNumberField',
      validators: [{
        min: 10,
        message: 'Min value 10'
      },{
        max: 20,
        message: 'Max value 20'
      }]
    }),
    new VButton({
      text: 'SUBMIT',
      styleType: 'raised',
      type: 'submit'
    })
  ];


  constructor(){
    this.form = new FormGroup({});
  }
  
  ngOnInit(): void {}

  submit(form: FormGroup) {
    console.log(form);
  }

  codeHTML = `
    <mat-card>
        <mat-card-header>
            <mat-card-title>CONTENT FORM</mat-card-title>
        </mat-card-header>
        <mat-card-content>
            <v-v-factory 
                [formConfig]="formConfig" 
                [form]="form"
                (submit)="submit($event)"
            >
            <app-section></app-section>
        </v-v-factory>
        </mat-card-content>
    </mat-card>
  `;
  codeTS = `
  ************* content-form.module.ts *********************
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { ContentFormComponent } from './content-form.component';
  import { VFactoryModule } from 'v-factory';
  import { MatCardModule } from '@angular/material/card';
  import { SectionComponent } from './section/section.component';
  import { MatTableModule } from '@angular/material/table';
  import { MatTabsModule } from '@angular/material/tabs';

  @NgModule({
    declarations: [
      ContentFormComponent, 
      SectionComponent
    ],
    imports: [
      CommonModule,
      VFactoryModule,
      MatCardModule,
      MatTableModule,
      MatTabsModule
    ],
    exports: [ContentFormComponent]
  })
  export class ContentFormModule { }
  
  ************* content-form.component.ts *********************
  import { Component, OnInit } from '@angular/core';
  import { FormGroup } from '@angular/forms';
  import { VContent, VTextField, VSlideToggleField, VNumberField, VButton, VBox, VInputField } from 'v-factory';

  @Component({
    selector: 'app-content-form',
    templateUrl: './content-form.component.html',
    styleUrls: ['./content-form.component.scss']
  })
  export class ContentFormComponent implements OnInit {
    form: FormGroup;

    formConfig = [
      new VTextField({
        name: 'text',
        label: 'VTextField'
      }),
      new VSlideToggleField({
        name: 'slider',
        label: 'VSlideToggleField'
      }), 
      new VContent({}),   
      new VNumberField({
        name: 'number',
        label: 'VNumberField',
        validators: [{
          min: 10,
          message: 'Min value 10'
        },{
          max: 20,
          message: 'Max value 20'
        }]
      }),
      new VButton({
        text: 'SUBMIT',
        styleType: 'raised',
        type: 'submit'
      })
    ];


    constructor(){
      this.form = new FormGroup({});
    }
    
    ngOnInit(): void {}

    submit(form: FormGroup) {
      console.log(form);
    }
  }
  `;

}
