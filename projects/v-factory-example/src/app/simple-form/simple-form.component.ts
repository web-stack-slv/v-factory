import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, from, Observable } from 'rxjs';
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

  private _optionSource = new BehaviorSubject<Option[]>([]);
  options = this._optionSource.asObservable();

  formConfig = [
    new VInputField({
      label: 'Name',
      name: 'name',
      clearButton: true,
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
      options: this.options
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
    label: 'VSelectField Async',
    name: 'select',
    cls: 'hello',
    options: this._getOptions()
  }),
  new VSelectField({
    label: 'VSelectField Sync',
    name: 'select2',
    icons: true,
    options: this._getIconList()
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
    label: 'VTextField 2-10',
    rows: 2,
    maxRows: 10
  }),
  new VTextField({
    name: 'texts',
    label: 'VTextField > 3',
    rows: 3,
    value: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam cumque natus accusantium quos earum impedit consequatur et dolores corrupti repudiandae quo omnis quae, ad temporibus sed modi necessitatibus a ducimus!'
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

  ngOnInit(): void {
    this._loadOptions();
  }

  submit(form: FormGroup) {
    console.log(form.value);
  }

  private _loadOptions(): void {
    setTimeout(() => {
      const options = Array(2000).fill(null).map((x, idx) => {
        return {
          value: idx +1,
          label: this._getString()
        }
      });
      this._optionSource.next(options);
    }, 1000);
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

  private _getIconList(): Option[] {
    return [
      {value: '3d_rotation', label: '3D Rotation'},
      {value: 'android', label: 'Android'},
      {value: 'bug_report', label: 'Bugs'},
      {value: 'build', label: 'Build'},
      {value: 'card_giftcard', label: 'Giftcard'},
      {value: 'card_travel', label: 'Travel'},
      {value: 'euro_symbol', label: 'Euro Symbol'},
      {value: 'event_seat', label: 'Event Seat'},
      {value: 'explore', label: 'Explore'},
      {value: 'favorite', label: 'Favorite'},
      {value: 'fingerprint', label: 'Fingerprint'},
      {value: 'gavel', label: 'Gavel'},
      {value: 'invert_colors', label: 'Invert Colors'},
      {value: 'label_important', label: 'Label Important'},
      {value: 'language', label: 'Language'},
      {value: 'pan_tool', label: 'Pan Tool'},
      {value: 'pets', label: 'Pets'},
      {value: 'help_center', label: 'Help Center'},
      {value: 'receipt_long', label: 'Receipt Long'},
      {value: 'thumb_down_off_alt', label: 'Thumb Down Off Alt'},
      {value: 'block', label: 'Block'},
      {value: 'verified', label: 'Verified'}
    ];
  }



  codeHTML = `
  *********** simple-form.component.html *************

    <mat-card>
      <mat-card-header>
          <mat-card-title>SYMPLE FORM</mat-card-title>
      </mat-card-header>
      <mat-card-content>
          <v-v-factory 
              [formConfig]="formConfig" 
              [form]="form"
              (submit)="submit($event)"
          ></v-v-factory>
      </mat-card-content>
    </mat-card>
  `;

  codeTS = `
  *********** simple-form.component.ts *************

    import { Component, OnInit } from '@angular/core';
    import { FormGroup } from '@angular/forms';
    import { BehaviorSubject, from, Observable } from 'rxjs';
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
    
      private _optionSource = new BehaviorSubject<Option[]>([]);
      options = this._optionSource.asObservable();
    
      formConfig = [
        new VInputField({
          label: 'Name',
          name: 'name',
          clearButton: true,
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
          options: this.options
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
        label: 'VSelectField Async',
        name: 'select',
        cls: 'hello',
        options: this._getOptions()
      }),
      new VSelectField({
        label: 'VSelectField Sync',
        name: 'select2',
        icons: true,
        options: this._getIconList()
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
        label: 'VTextField 2-10',
        rows: 2,
        maxRows: 10
      }),
      new VTextField({
        name: 'texts',
        label: 'VTextField > 3',
        rows: 3,
        value: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.!'
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
    
      ngOnInit(): void {
        this._loadOptions();
      }
    
      submit(form: FormGroup) {
        console.log(form.value);
      }
    
      private _loadOptions(): void {
        setTimeout(() => {
          const options = Array(2000).fill(null).map((x, idx) => {
            return {
              value: idx +1,
              label: this._getString()
            }
          });
          this._optionSource.next(options);
        }, 1000);
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
    
      private _getIconList(): Option[] {
        return [
          {value: '3d_rotation', label: '3D Rotation'},
          {value: 'android', label: 'Android'},
          {value: 'bug_report', label: 'Bugs'},
          {value: 'build', label: 'Build'},
          {value: 'card_giftcard', label: 'Giftcard'},
          {value: 'card_travel', label: 'Travel'},
          {value: 'euro_symbol', label: 'Euro Symbol'},
          {value: 'event_seat', label: 'Event Seat'},
          {value: 'explore', label: 'Explore'},
          {value: 'favorite', label: 'Favorite'},
          {value: 'fingerprint', label: 'Fingerprint'},
          {value: 'gavel', label: 'Gavel'},
          {value: 'invert_colors', label: 'Invert Colors'},
          {value: 'label_important', label: 'Label Important'},
          {value: 'language', label: 'Language'},
          {value: 'pan_tool', label: 'Pan Tool'},
          {value: 'pets', label: 'Pets'},
          {value: 'help_center', label: 'Help Center'},
          {value: 'receipt_long', label: 'Receipt Long'},
          {value: 'thumb_down_off_alt', label: 'Thumb Down Off Alt'},
          {value: 'block', label: 'Block'},
          {value: 'verified', label: 'Verified'}
        ];
      }
    }
  `;
}
