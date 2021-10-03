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
