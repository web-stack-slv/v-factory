import { Style, FactoryValidator } from '../interfaces';
import { FormGroup } from '@angular/forms';

export class VItem {
    protected _vtype: string;

    itemId?: string | number | Symbol;
    styles?: Style;
    cls?:string;
    validators?: FactoryValidator[];
    label?: string;
    hidden?: boolean;

    constructor(opts: {
        itemId?: string | number | Symbol,
        styles?: Style,
        cls?:string,
        validators?: FactoryValidator[],
        label?: string,
        hidden?: boolean,
    }) {
        this._vtype = 'vitem';
        this.itemId = opts['itemId'] || null;
        this.styles = opts['styles'] || null;
        this.validators = opts['validators'] || [];
        this.label = opts['label'] || null;
        if(opts['cls']) {
            this.cls = opts['cls'] ? this.cls ? `${this.cls} ${opts['cls']}` : opts['cls'] : '';
        }

        if(opts['hidden']) {
            this.cls += ' hidden';
        }
    }

    getName(): string {
        return this._vtype;
    }

    getConfig(key: string): any {
        return this[key];
    }

    setConfig(key: string, value: any): void {
        this[key] = value;
    }

    createControl(group: FormGroup): void {}

    removeControl(group: FormGroup): void {}
}
