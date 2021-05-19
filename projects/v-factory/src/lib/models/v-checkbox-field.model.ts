import { VField } from "./v-field.model";
import { Style } from '../interfaces';

export class VCheckboxField extends VField<boolean> {
    labelPosition?: 'before' | 'after';

    constructor(opts: {
        name: string,
        label?: string,
        value?: true | false,
        disabled?: boolean,      
        styles?: Style,
        cls?: string,
        labelPosition?: 'before' | 'after'
    }) {
        super(opts);
        this._vtype = 'vcheckboxfield';
        this.labelPosition = opts['labelPosition'] || 'after';
    }
}