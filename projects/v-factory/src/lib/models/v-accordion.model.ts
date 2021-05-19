import { VItem } from "./v-item.model";
import { Style } from '../interfaces';
import { FormGroup, FormArray } from '@angular/forms';

export class VAccordion extends VItem {
    name: string;
    items: VItem[];
    nextHandler?: Function;
    prevHandler?: Function;
    removeHandler?: Function;
    isDefaultHandler = false;

  private _step = 0;

  constructor(opts: {
      items: any[],
      name: string,
      label?: string;
      itemId?: string | number | Symbol,
      nextHandler?: Function,
      prevHandler?: Function,
      removeHandler?: Function,
      styles?: Style,
      cls?:string
    }) {
        super(opts);
        this._vtype = 'vaccordion';
        this.name = opts['name'];
        this.items = opts['items'] || [];  

        if(opts['nextHandler']) {
            this.nextHandler = opts['nextHandler']
        } else {
            this.isDefaultHandler = true;
            this.nextHandler = () => { this.nextStep(); }
        }

        if(opts['prevHandler']) {
            this.prevHandler = opts['prevHandler']
        } else {
            this.isDefaultHandler = true;
            this.prevHandler = () => { this.prevStep(); }
        }
                 
        this.removeHandler = opts['removeHandler'] || null;     
    }

    createControl(group: FormGroup): void {
        const fa = new FormArray([]);
        group.addControl(this.name, fa);
        this.items.forEach(item => {
            const fg = new FormGroup({});
            fa.push(fg);
            item.createControl(fg);
        });       
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

    getStep():number {
        return this._step;
    }

    setStep(step: number): void {
        this._step = step;
    }

    nextStep(): void {
        this._step++;
    }

    prevStep(): void {
        this._step--;
    }
}