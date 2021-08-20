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

  title = 'EXPANDED FORM';

  get documents(): FormArray {
    return this.form.get('documents') as FormArray;
  }

  formConfig = [
    new VAccordion({
      name:'documents',
      label: 'Documents',
      getItemTitle: (idx) => this._getItemTitle(idx),
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
}
