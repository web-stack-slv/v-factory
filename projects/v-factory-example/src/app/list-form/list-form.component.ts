import { Component } from '@angular/core';
import { BaseFormComponent } from '../base-form/base-form.component';
import { VList, VTextField, VButton, VLabel, VDragDropList } from 'v-factory';
import { Option } from 'projects/v-factory/src/public-api';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-list-form',
  templateUrl: '../base-form/base-form.component.html',
  styleUrls: ['../base-form/base-form.component.scss']
})
export class ListFormComponent extends BaseFormComponent {

  title = 'FORM WITH LIST';

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
      text: 'Save',
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
