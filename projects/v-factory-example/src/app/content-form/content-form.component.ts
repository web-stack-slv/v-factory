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
