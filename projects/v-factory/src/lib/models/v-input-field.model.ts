import { VField } from "./v-field.model";
import { Style, FactoryValidator } from '../interfaces';

export class VInputField extends VField<string> {
    type?: string;
    prefix?: string;
    suffix?: string;
    hint?: string;
    unique?: boolean;
    readonly?: boolean;
    placeholder?: string;    

    constructor(opts: {
        name: string,
        type?: string,
        label?: string,
        value?: string,
        disabled?: boolean,
        hidden?: boolean,        
        styles?: Style,
        cls?: string,
        unique?: boolean,
        readonly?: boolean,
        placeholder?: string,
        prefix?: string,
        suffix?: string,
        hint?: string,
        clearButton?: boolean,
        validators?: FactoryValidator[]
    }) {
        super(opts);
        this._vtype = 'vinputfield';
        this.type = opts['type'] || 'text';
        this.prefix = opts['prefix'] || null;
        this.suffix = opts['suffix'] || null;
        this.hint = opts['hint'] || null;
        this.unique = opts['unique'] || false;
        this.readonly = opts['readonly'] || false;
        this.placeholder = opts['placeholder'] || '';
    }
}
