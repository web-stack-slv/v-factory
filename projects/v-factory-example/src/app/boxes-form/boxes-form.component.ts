import { Component } from '@angular/core';
import { BaseFormComponent } from '../base-form/base-form.component';
import { VBox, VSliderField, VInputField, VDivider, VDatepickerField, VEditorField, VButton } from 'v-factory';

@Component({
  selector: 'app-boxes-form',
  templateUrl: '../base-form/base-form.component.html',
  styleUrls: ['../base-form/base-form.component.scss']
})
export class BoxesFormComponent extends BaseFormComponent {

  title = 'FORM WITH BOXES';

  formConfig = [
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

}
