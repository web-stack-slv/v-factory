import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { VBox, VNumberField, VRadioField, VButton, VSliderField, VDivider, VAccordion } from 'v-factory';

export interface ITradeMargin {
  priceFrom?: number;
  priceTo?: number;
  margin: number;
  id?: number;
}

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit, AfterViewInit, AfterViewChecked {

  title = 'DYNAMIC FORM';  

  form: FormGroup = new FormGroup({});

  initData: ITradeMargin[] = [
    {priceFrom: null, priceTo: 1000, margin: 50},
    {priceFrom: 1001, priceTo: 2000, margin: 40},
    {priceFrom: 2001, priceTo: 3000, margin: 30},
    {priceFrom: 3001, priceTo: 4000, margin: 20},
  ];

  get settings(): FormArray {
    return this.form.get('settings') as FormArray;
  }

  get priceStep(): number {
    return this.settings.controls[0].get('priceStep').value;
  }

  get baseMargin(): number {
    return this.settings.controls[0].get('baseMargin').value;
  }

  get stepType(): string {
    return this.settings.controls[0].get('stepType').value;
  }

  get priceMax(): number {
    return this.settings.controls[0].get('priceMax').value;
  }

  get ranges(): FormArray {
    return this.form.get('ranges') as FormArray;
  }

  rangesBox = new VBox({
    name: 'ranges',
    items: [],
    groupValidators: [this.validateRequired],
  });

  formConfig = [
    new VAccordion({
      name: 'settings',
      getItemTitle: () => 'Trade Margin Settings',
      items: [
        new VBox({
          layout: 'row',
          styles: {
            padding: '0 5px'
          },
          items: [
            new VNumberField({
              label: 'Max.price',
              name: 'priceMax',
              min: 100,
              max: 100000,
              value: 10000,
              styles: {
                flex: 1,
                marginRight: '15px'
              }
            }),
            new VRadioField({
              name: 'stepType',
              options: [
                { value: 'summ', label: 'Summ' },
                { value: 'percent', label: '%' }
              ],
              value: 'summ'
            }),
            new VNumberField({
              label: 'Price step',
              name: 'priceStep',
              min: 1,
              max: 10000,
              value: 2000,
              styles: {
                flex: 1,
                marginLeft: '15px'
              }
            }),
            new VNumberField({
              label: 'Default margin',
              name: 'baseMargin',
              min: 0,
              max: 500,
              value: 20,
              styles: {
                flex: 1,
                margin: '0 10px'
              }
            }),
            new VButton({
              styleType: 'mini-fab',
              icon: 'calculate',
              text: 'Recalculate ranges',
              color: 'warn',
              styles: {
                width: '40px',
                marginLeft: '10px'
              },
              handler: () => this._calculateRanges()
            }),
            new VButton({
              styleType: 'mini-fab',
              icon: 'add',
              text: 'Add range',
              color:'primary',
              styles: {
                width: '40px',
                marginLeft: '10px'
              },
              handler: () => this._addNewRange()
            }),
            new VButton({
              styleType: 'mini-fab',
              icon: 'cancel',
              text: 'Reset changes',
              color: 'accent',
              styles: {
                width: '40px',
                marginLeft: '10px'
              },
              handler: () => this._resetRanges()
            }),
          ]
        })
      ]
    }),
    this.rangesBox,
    new VButton({
      text: 'SUBMIT',
      styleType: 'raised',
      type: 'submit'
    })
  ];

  constructor(
    private _fb: FormBuilder,
    private _changeDetectorRef: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    for (const { priceFrom, priceTo  } of this.initData) {
      this._addRange(this._getLabel(priceFrom, priceTo));
    }

    this.ranges.setValue(this.initData);
  }

  ngAfterViewChecked(): void {
    this._changeDetectorRef.detectChanges();
  }

  submit(form: FormGroup) {
    console.log(this.form.value);
  }

  validateRequired(arr: FormArray) {
    return arr.length > 0 ?
    null: {
      require: true
    }
  }

  _addRange(label: string): void {
    const idx  = Symbol('margin');
    const fg = this._fb.group({
      priceFrom: this._fb.control(0),
      priceTo: this._fb.control(0)
    });

    const box = new VBox({
      layout: 'row',
      itemId: idx,
      items: [
        new VSliderField({
          label: label,
          name: 'margin',
          min: 0,
          max: 500,
          showTicks: true,
          thumbLabel: true,
          styles: {
            flex: 1
          }
        }),
        new VButton({
          styleType: 'icon',
          text: 'Remove range',
          icon: 'clear',
          color: 'warn',
          handler: () => this._removeRange(idx)
        }),
        new VDivider({})
      ]
    });

    box.createControl(fg);
    this.ranges.push(fg);
    this.rangesBox.items.push(box);
  }

  private _calculateRanges(): void {
    const rangeList = [];
    this.ranges.controls = [];
    this.rangesBox.items = [];
    const stepAmount = this.stepType === 'percent' ? Math.ceil(this.priceMax*this.priceStep/100) : this.priceStep;
    const count = Math.ceil(this.priceMax/stepAmount);
    
    Array(count)
      .fill(null)
      .map((_, idx) => {
        const priceFrom  = idx ? rangeList[idx-1].priceTo + 1 : 0;
        const priceTo = (idx+1)*stepAmount <= this.priceMax ? (idx+1)*stepAmount : this.priceMax;
        rangeList.push({priceFrom, priceTo, margin: this.baseMargin});
        this._addRange(this._getLabel(priceFrom, priceTo));
      });
      this.ranges.setValue(rangeList);
  }

  private _getLabel(priceFrom: number, priceTo: number): string {
    return priceFrom ? `From ${priceFrom} To ${priceTo}` : `To ${priceTo}`;
  }

  _removeRange(idx: Symbol): void {
    this.rangesBox.items = this.rangesBox.items.filter((item, i) => {
      if(item['itemId'] === idx) {
        this.ranges.removeAt(i);
        return false;
      }
      return true;
    });
    this._resortRanges();
  }

  

  

  private _addNewRange(): void {
    const rangesList = this.ranges.value;

    const isExists = rangesList.find(c => c.priceTo === this.priceMax);
    if(isExists) {
      console.error('Range already exists');
      return;
    }

    if(this.ranges.controls.length >= 50) {
      console.error('Max range quantity - 50');
      return;
    }
    const priceTo = this.priceMax;
    this._addRange(this._getLabel(null, priceTo));
    rangesList.push({ priceFrom: null, priceTo, margin: this.baseMargin });
    this.ranges.setValue(rangesList);
    this._resortRanges();
  }

  private _resortRanges(): void {
    const rangesList = this.ranges.value.sort((a,b) => {
      return a.priceTo > b.priceTo ? 1 : -1;
    });

    this.ranges.controls = [];
    this.rangesBox.items = [];

    rangesList.map((r: ITradeMargin, idx: number) => {
      r.priceFrom = rangesList[idx-1] ? rangesList[idx-1].priceTo + 1 : 0;
      this._addRange(this._getLabel(r.priceFrom, r.priceTo));
    });
    this.ranges.setValue(rangesList);
  }

  private _resetRanges(): void {
    this.ranges.controls = [];
    this.rangesBox.items = [];
    this.initData.map(r => {
      this._addRange(this._getLabel(r.priceFrom, r.priceTo));
    });
    this.ranges.setValue(this.initData);
  }

  codeHTML = `
    *********** dynamic-form.component.html *************
    <mat-card>
        <mat-card-header>
          <mat-card-title>{{title}}</mat-card-title>
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
    **************** dynamic-form.component.ts ********************
    import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
    import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
    import { VBox, VNumberField, VRadioField, VButton, VSliderField, VDivider, VAccordion } from 'v-factory';

    export interface ITradeMargin {
      priceFrom?: number;
      priceTo?: number;
      margin: number;
      id?: number;
    }

    @Component({
      selector: 'app-dynamic-form',
      templateUrl: './dynamic-form.component.html',
      styleUrls: ['./dynamic-form.component.scss']
    })
    export class DynamicFormComponent implements OnInit, AfterViewInit, AfterViewChecked {

      title = 'DYNAMIC FORM';  

      form: FormGroup = new FormGroup({});

      initData: ITradeMargin[] = [
        {priceFrom: null, priceTo: 1000, margin: 50},
        {priceFrom: 1001, priceTo: 2000, margin: 40},
        {priceFrom: 2001, priceTo: 3000, margin: 30},
        {priceFrom: 3001, priceTo: 4000, margin: 20},
      ];

      get settings(): FormArray {
        return this.form.get('settings') as FormArray;
      }

      get priceStep(): number {
        return this.settings.controls[0].get('priceStep').value;
      }

      get baseMargin(): number {
        return this.settings.controls[0].get('baseMargin').value;
      }

      get stepType(): string {
        return this.settings.controls[0].get('stepType').value;
      }

      get priceMax(): number {
        return this.settings.controls[0].get('priceMax').value;
      }

      get ranges(): FormArray {
        return this.form.get('ranges') as FormArray;
      }

      rangesBox = new VBox({
        name: 'ranges',
        items: [],
        groupValidators: [this.validateRequired],
      });

      formConfig = [
        new VAccordion({
          name: 'settings',
          getItemTitle: () => 'Trade Margin Settings',
          items: [
            new VBox({
              layout: 'row',
              styles: {
                padding: '0 5px'
              },
              items: [
                new VNumberField({
                  label: 'Max.price',
                  name: 'priceMax',
                  min: 100,
                  max: 100000,
                  value: 10000,
                  styles: {
                    flex: 1,
                    marginRight: '15px'
                  }
                }),
                new VRadioField({
                  name: 'stepType',
                  options: [
                    { value: 'summ', label: 'Summ' },
                    { value: 'percent', label: '%' }
                  ],
                  value: 'summ'
                }),
                new VNumberField({
                  label: 'Price step',
                  name: 'priceStep',
                  min: 1,
                  max: 10000,
                  value: 2000,
                  styles: {
                    flex: 1,
                    marginLeft: '15px'
                  }
                }),
                new VNumberField({
                  label: 'Default margin',
                  name: 'baseMargin',
                  min: 0,
                  max: 500,
                  value: 20,
                  styles: {
                    flex: 1,
                    margin: '0 10px'
                  }
                }),
                new VButton({
                  styleType: 'mini-fab',
                  icon: 'calculate',
                  text: 'Recalculate ranges',
                  color: 'warn',
                  styles: {
                    width: '40px',
                    marginLeft: '10px'
                  },
                  handler: () => this._calculateRanges()
                }),
                new VButton({
                  styleType: 'mini-fab',
                  icon: 'add',
                  text: 'Add range',
                  color:'primary',
                  styles: {
                    width: '40px',
                    marginLeft: '10px'
                  },
                  handler: () => this._addNewRange()
                }),
                new VButton({
                  styleType: 'mini-fab',
                  icon: 'cancel',
                  text: 'Reset changes',
                  color: 'accent',
                  styles: {
                    width: '40px',
                    marginLeft: '10px'
                  },
                  handler: () => this._resetRanges()
                }),
              ]
            })
          ]
        }),
        this.rangesBox,
        new VButton({
          text: 'SUBMIT',
          styleType: 'raised',
          type: 'submit'
        })
      ];

      constructor(
        private _fb: FormBuilder,
        private _changeDetectorRef: ChangeDetectorRef
      ) {
      }

      ngOnInit(): void {
        
      }

      ngAfterViewInit(): void {
        for (const { priceFrom, priceTo  } of this.initData) {
          this._addRange(this._getLabel(priceFrom, priceTo));
        }

        this.ranges.setValue(this.initData);
      }

      ngAfterViewChecked(): void {
        this._changeDetectorRef.detectChanges();
      }

      submit(form: FormGroup) {
        console.log(this.form.value);
      }

      validateRequired(arr: FormArray) {
        return arr.length > 0 ?
        null: {
          require: true
        }
      }

      _addRange(label: string): void {
        const idx  = Symbol('margin');
        const fg = this._fb.group({
          priceFrom: this._fb.control(0),
          priceTo: this._fb.control(0)
        });

        const box = new VBox({
          layout: 'row',
          itemId: idx,
          items: [
            new VSliderField({
              label: label,
              name: 'margin',
              min: 0,
              max: 500,
              showTicks: true,
              thumbLabel: true,
              styles: {
                flex: 1
              }
            }),
            new VButton({
              styleType: 'icon',
              text: 'Remove range',
              icon: 'clear',
              color: 'warn',
              handler: () => this._removeRange(idx)
            }),
            new VDivider({})
          ]
        });

        box.createControl(fg);
        this.ranges.push(fg);
        this.rangesBox.items.push(box);
      }

      private _calculateRanges(): void {
        const rangeList = [];
        this.ranges.controls = [];
        this.rangesBox.items = [];
        const stepAmount = this.stepType === 'percent' ? Math.ceil(this.priceMax*this.priceStep/100) : this.priceStep;
        const count = Math.ceil(this.priceMax/stepAmount);
        
        Array(count)
          .fill(null)
          .map((_, idx) => {
            const priceFrom  = idx ? rangeList[idx-1].priceTo + 1 : 0;
            const priceTo = (idx+1)*stepAmount <= this.priceMax ? (idx+1)*stepAmount : this.priceMax;
            rangeList.push({priceFrom, priceTo, margin: this.baseMargin});
            this._addRange(this._getLabel(priceFrom, priceTo));
          });
          this.ranges.setValue(rangeList);
      }

      private _getLabel(priceFrom: number, priceTo: number): string {
        return priceFrom ? 'From priceFrom To priceTo' : 'To priceTo';
      }

      _removeRange(idx: Symbol): void {
        this.rangesBox.items = this.rangesBox.items.filter((item, i) => {
          if(item['itemId'] === idx) {
            this.ranges.removeAt(i);
            return false;
          }
          return true;
        });
        this._resortRanges();
      }

      

      

      private _addNewRange(): void {
        const rangesList = this.ranges.value;

        const isExists = rangesList.find(c => c.priceTo === this.priceMax);
        if(isExists) {
          console.error('Range already exists');
          return;
        }

        if(this.ranges.controls.length >= 50) {
          console.error('Max range quantity - 50');
          return;
        }
        const priceTo = this.priceMax;
        this._addRange(this._getLabel(null, priceTo));
        rangesList.push({ priceFrom: null, priceTo, margin: this.baseMargin });
        this.ranges.setValue(rangesList);
        this._resortRanges();
      }

      private _resortRanges(): void {
        const rangesList = this.ranges.value.sort((a,b) => {
          return a.priceTo > b.priceTo ? 1 : -1;
        });

        this.ranges.controls = [];
        this.rangesBox.items = [];

        rangesList.map((r: ITradeMargin, idx: number) => {
          r.priceFrom = rangesList[idx-1] ? rangesList[idx-1].priceTo + 1 : 0;
          this._addRange(this._getLabel(r.priceFrom, r.priceTo));
        });
        this.ranges.setValue(rangesList);
      }

      private _resetRanges(): void {
        this.ranges.controls = [];
        this.rangesBox.items = [];
        this.initData.map(r => {
          this._addRange(this._getLabel(r.priceFrom, r.priceTo));
        });
        this.ranges.setValue(this.initData);
      }
    }
  `;
}
