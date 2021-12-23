import { Component } from '@angular/core';
import { BaseFormComponent } from '../base-form/base-form.component';
import { VBox, VSliderField, VInputField, VDivider, VDatepickerField, VEditorField, VButton, VAutocompleteField, Option, VChipsField } from 'v-factory';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-boxes-form',
  templateUrl: '../base-form/base-form.component.html',
  styleUrls: ['../base-form/base-form.component.scss']
})
export class BoxesFormComponent extends BaseFormComponent {

  title = 'FORM WITH BOXES (extended BaseForm)';
  subtitle = `VBoxes support two layouts -  row | column (default) 
              and three form mode for items - plate (just format view), 
              group ( create nested form group), array (create form array, default)`;

  private _brandSource = new BehaviorSubject<Option[]>([]);
  brands = this._brandSource.asObservable();

  private _selectedSource = new BehaviorSubject<Option[]>([]);
  selected = this._selectedSource.asObservable();

  formConfig = [
    new VBox({
      items: [
        new VAutocompleteField({
          name: 'brands',
          label: 'Brands',
          options: this.brands
        }),
        new VChipsField({
          name: 'selected',
          removable: true,
          selectable: true,
          value: [{value: 1, label: 'SMART Inc.'}],
          options: this.brands
        })
      ]
    }),
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
    new VDivider({}),
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

  formInit(): void {
    this._loadBrands();
  }

  private _loadBrands(): void{
    setTimeout(() => {
      this._brandSource.next([
        {value: 1, label: 'SMART Inc.'},
        {value: 2, label: 'Dummy & Lame', data: { selected: true }},
        {value: 3, label: 'CLEVER TECH', data: { selected: true }},
        {value: 4, label: 'X-ABILITY', data: { selected: true }},
      ]);
    }, 2000);
  }
}
