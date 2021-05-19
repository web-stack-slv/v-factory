import { VField } from "./v-field.model";
import { Style, FactoryValidator } from '../interfaces';

export class VNumberField extends VField<number> {
    type: 'number';
    prefix?: string;
    suffix?: string;
    hint?: string;
    min?: number;
    max?: number;
    step?: number;

    constructor(opts: {
        name: string,
        label?: string,
        value?: number,
        disabled?: boolean,
        readonly?: boolean,
        hidden?: boolean,
        min?: number,
        max?: number,
        step?: number,        
        styles?: Style,
        cls?: string,
        validators?: FactoryValidator[],
        prefix?: string,
        suffix?: string,
        hint?: string,
    }) {
        super(opts);
        this._vtype = 'vnumberfield';
        this.type = 'number';
        this.min = opts['min'] || 0;
        this.max = opts['max'] || 99999;
        this.step = opts['step'] || 1;
        this.prefix = opts['prefix'] || null;
        this.suffix = opts['suffix'] || null;
        this.hint = opts['hint'] || null;
    }
}
