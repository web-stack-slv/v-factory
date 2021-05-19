import { VField } from "./v-field.model";
import { Style, FactoryValidator } from '../interfaces';

export class VColorField extends VField<string> {
    type?: string;
    prefix?: string;
    suffix?: string;
    hint?: string;
    readonly?: boolean;

    constructor(opts: {
        name: string,
        type?: string,
        label?: string,
        value?: string,
        disabled?: boolean,
        hidden?: boolean,        
        styles?: Style,
        cls?: string,
        readonly?: boolean,
        prefix?: string,
        suffix?: string,
        hint?: string,
        validators?: FactoryValidator[]
    }) {
        super(opts);
        this._vtype = 'vcolorfield';
        this.type = opts['type'] || 'text';
        this.prefix = opts['prefix'] || null;
        this.suffix = opts['suffix'] || null;
        this.hint = opts['hint'] || null;
        this.readonly = opts['readonly'] || false;
    }
}
