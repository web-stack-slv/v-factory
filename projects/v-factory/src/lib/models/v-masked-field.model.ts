import { VField } from "./v-field.model";
import { Style, FactoryValidator } from '../interfaces';

export class VMaskedField extends VField<string> {
    mask: string;
    type?: 'text';
    prefix?: string;
    suffix?: string;
    hint?: string;
    unique?: boolean;

    constructor(opts: {
        name: string,
        mask: string,
        type?: 'text',
        label?: string,
        value?: string,
        disabled?: boolean,
        hidden?: boolean,        
        styles?: Style,
        cls?: string,
        unique?: boolean,        
        prefix?: string,
        suffix?: string,
        hint?: string,
        validators?: FactoryValidator[],
    }) {
        super(opts);
        this._vtype = 'vmaskedfield';
        this.type = opts['type'] || 'text';
        this.prefix = opts['prefix'] || null;
        this.suffix = opts['suffix'] || null;
        this.hint = opts['hint'] || null;
        this.unique = opts['unique'] || false;
        this.mask = opts['mask'] || null;
    }
}
