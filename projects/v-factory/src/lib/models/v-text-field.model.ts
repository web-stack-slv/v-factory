import { VField } from "./v-field.model";
import { Style, FactoryValidator } from '../interfaces';

export class VTextField extends VField<string> {
    rows?: number;

    constructor(opts: {
        name: string,
        rows?: number,
        label?: string,
        value?: string,
        disabled?: boolean,
        hidden?: boolean,        
        styles?: Style,
        cls?: string,
        placeholder?: string,
        validators?: FactoryValidator[]
    }) {
        super(opts);
        this._vtype = 'vtextfield';
        this.rows = opts['rows'] ? opts['rows'] : 5;
    }
}
