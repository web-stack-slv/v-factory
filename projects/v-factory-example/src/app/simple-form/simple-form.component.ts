import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { from, Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import {
  VAutocompleteField,
  VButton,
  VCheckboxField,
  VColorField,
  VInputField,
  VMaskedField,
  VNumberField,
  VRadioField,
  VSelectField,
  VSlideToggleField,
  VTextField,
  Option
} from 'v-factory';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss']
})
export class SimpleFormComponent implements OnInit {
  form: FormGroup;

  formConfig = [
    new VInputField({
      label: 'Name',
      name: 'name',
      validators: [{
        required: true,
        message: 'Field is required'
      },{
        maxlength: 10,
        message: 'Max length 10 chars'
      }]
    }),
    new VInputField({
      label: 'E-mail',
      name: 'email',
      type: 'email',
      validators: [{
        email: true,
        message: 'Invalid E-mail'
      }]
    }),
    new VInputField({
      label: 'Password',
      name: 'password',
      type: 'password',
      validators: [{
        minlength: 10,
        message: 'Min 10 chars'
      }]
    }),
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
    new VAutocompleteField({
      name: 'autocpl',
      label: 'VAutocompleteField',
      options: Array(1000).fill(null).map((x, idx) => {
        return {
          value: idx +1,
          label: this._getString()
        }
      })
    }),
    new VCheckboxField({
      name: 'check',
      label: 'VCheckboxField',
      disabled: true
    }),
    new VColorField({
      name: 'color',
      label: 'VColorField'
    }),    
  new VSelectField({
    label: 'VSelectField',
    name: 'select',
    cls: 'hello',
    options: this._getOptions()
  }),   
  new VMaskedField({
    name: 'masked',
    label: 'VMaskedField',
    mask: 'XXX-XXX-XXX'
  }),
  new VRadioField({
    name: 'radio',
    label: 'VRadioField',
    options: [
      {value: 1, label: 'First'},
      {value: 2, label: 'Second'},
      {value: 3, label: 'Third'}
    ]
  }),  
  new VTextField({
    name: 'text',
    label: 'VTextField'
  }),
  new VSlideToggleField({
    name: 'slider',
    label: 'VSlideToggleField',
    disabled: true
  }),
  new VButton({
    text: 'Save',
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

  private _getOptions(): Observable<Option[]>{
    return from([[
      {value: 1, label: 'First', data: {hint: 'First Hint', color: 'red', icon: 'water_drop'}},
      {value: 2, label: 'Second', data: {hint: 'Second Hint', disabled: true}},
      {value: 3, label: 'Third', data: {hint: 'Third Hint', color: 'green', icon: 'sailing'}},
      {value: 4, label: 'Forth', data: {hint: 'Forth Hint'}},
    ]]).pipe(first());
  }

  private _getString(): string {
    return Array(10)
    .fill(null)
    .map(() => Math.round(Math.random() * 16).toString(16))
    .join('')
    .toUpperCase();
  }
}
