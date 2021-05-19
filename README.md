# VFactory

*Library for create dynamic reactive forms into Angular apps.*

## Start

Angular CLI version 10.2.3.

need to install angular material:

`ng add @angular/material`

install v-factory:

`npm i @farawayslv/v-factory`


## Example

Full example: https://github.com/web-stack-slv/v-factory

### import v-factory to module: 

```javascript
import { VFactoryModule } from '@farawayslv/v-factory';

@NgModule({
  declarations: [
    ...
  ],
  imports: [
    VFactoryModule,
    ...
  ],
})
```
### component.html
insert html part to container or card:
```javascript
<v-v-factory  
      [formConfig]="formConfig" 
      [form]="form"
      (submit)="submit($event)"
	></v-v-factory>
```

# ##component.ts

in component need define new form and formConfig:
```javascript
form = new FormGroup({});

formConfig = [
    new VInputField({
      label: 'VInputField',
      name: 'input',
      validators: [{
        required: true,
        message: 'Field is required'
      },{
        maxlength: 10,
        message: 'Max length 10 chars'
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
    new VButton({
        text: 'Save',
        styleType: 'raised',
        type: 'submit'
    })
  ];
```
# List of available fields and containers:
    VAccordion,
    VAutocompleteField,
    VBox,
    VButton,
    VCheckboxField,
    VChipsField,
    VColorField,
    VDatepickerField,
    VDragDropList,
    VImage,
    VInputField,
    VLabel,
    VMaskedField,
    VNumberField,
    VRadioField,
    VSelectField,
    VSlideToggleField,
    VSliderField,
    VTextField
    VFileField
    VEditorField

### formConfig can be as array of items or objects like parsed json.

For json:

```javascript
constructor(
    private _factoryService: VFactoryService
){ }

jsonCfg = [
    {
        vtype: 'vinputfield',
        label: 'VInputField',
        name: 'input',
        validators: [{
            required: true,
            message: 'Field is required'
        },{
            maxlength: 10,
            message: 'Max length 10 chars'
        }]
    },
    {
        vtype: 'vbutton',
        text: 'Save',
        styleType: 'raised',
        type: 'submit'
    }
]


ngOnInit(): void {
    this.formConfig = this._factoryService.fromJSON(this.jsonCfg);
    this._factoryService.updateConfig(this.formConfig);
}
```
