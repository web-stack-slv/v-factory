import { VItem } from "./v-item.model";
import { Style } from '../interfaces';
import { FormGroup, FormArray, ValidatorFn, AbstractControlOptions } from '@angular/forms';

export class VBox extends VItem {
    name?: string;
    items: VItem[];
    formMode?: 'array' | 'group';
    layout?: 'row' | 'column' | '';
    groupValidators?: ValidatorFn | AbstractControlOptions | ValidatorFn[];

  constructor(opts: {
      items: any[],
      name?: string,
      label?: string;
      layout?: 'row' | 'column',
      formMode?: 'array' | 'group',
      itemId?: string | number | Symbol,
      styles?: Style,
      cls?:string,
      hidden?: boolean,
      groupValidators?: ValidatorFn | AbstractControlOptions | ValidatorFn[]
    }) {
        super(opts);
        this._vtype = 'vbox';
        this.items = opts['items'] || [];
        this.layout = opts['layout'] || '';
        this.formMode = opts['formMode'] || 'array';
        this.name = opts['name'] || null;
        this.groupValidators = opts['groupValidators'] || null;
        if(this.layout !== '') {
            this.cls = this.cls ? `${this.cls} ${this.layout}` : this.layout;
        }
    }

    createControl(group: FormGroup): void {
        if(this.name) {
            if(this.formMode === 'group') {
              const fg = new FormGroup({});
              group.addControl(this.name, fg);
              this.items.forEach(item => {
                  item.createControl(fg);
              });
            } else {
              const fa = new FormArray([], this.groupValidators);
              group.addControl(this.name, fa);
              this.items.forEach(item => {
                  const fg = new FormGroup({});
                  fa.push(fg);
                  item.createControl(fg);
              });
            }
        } else {
            this.items.forEach(item => item.createControl(group));
        }
    }

    removeItems(group: FormGroup): void {
        this.items.forEach(item => item.removeControl(group));
        this.items = [];
    }

    findByKey(key: string, value: string, items = this.items): VItem {
        let result;
        for (let i = 0; i < items.length; i++) {
            if(items[i].getConfig(key) === value) {
                result = items[i];
                break;
            } else if (items[i]['items']) {
                this.findByKey(key, value, items[i]['items']);
            }
        }
        return result;
    }
}
