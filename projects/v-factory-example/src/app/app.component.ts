import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  VAutocompleteField,
  VButton,
  VCheckboxField,
  VColorField,
  VDatepickerField,
  VEditorField,
  VFileField,
  VInputField,
  VLabel,
  VMaskedField,
  VNumberField,
  VRadioField,
  VSelectField,
  VSliderField,
  VSlideToggleField,
  VTextField
} from 'v-factory';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'v-factory-example';

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
      options: [
        {value: 1, label: 'First'},
        {value: 2, label: 'Second'},
        {value: 3, label: 'Third'},
        {value: 4, label: 'Forth'},
      ]
    }),
    new VCheckboxField({
      name: 'check',
      label: 'VCheckboxField'
    }),
    new VColorField({
      name: 'color',
      label: 'VColorField'
    }),
    new VDatepickerField({
      name: 'date',
      label: 'VDatepickerField'
    }),
  new VSelectField({
    label: 'VSelectField',
    name: 'select',
    options: [
      {value: 1, label: 'First'},
      {value: 2, label: 'Second'},
      {value: 3, label: 'Third'},
      {value: 4, label: 'Forth'},
    ]
  }),
  new VLabel({
    text: 'VLabel'
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
  new VSliderField({
    name: 'slide',
    label: 'VSliderField'
  }),
  new VTextField({
    name: 'text',
    label: 'VTextField'
  }),
  new VSlideToggleField({
    name: 'slider',
    label: 'VSlideToggleField'
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
  new VEditorField({
    name: 'editor',
    label: 'Editor'
  }),
  new VButton({
    text: 'Save',
    styleType: 'raised',
    type: 'submit'
  })
];

  ngOnInit(): void {
    this.form = new FormGroup({});
    /*setTimeout(() => {
      this.formConfig = this._factoryService.fromJSON(this.jsonCfg);
      this._factoryService.updateConfig(this.formConfig);
    }, 5000);  */
  }

  submit(form: FormGroup) {
    console.log(form);
  }
}
