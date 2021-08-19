import { VField } from "./v-field.model";
import { Style, FactoryValidator } from '../interfaces';

export class VFileField extends VField<any> {
    constructor(opts: {
        name: string,
        label?: string,
        disabled?: boolean,
        hidden?: boolean,
        styles?: Style,
        cls?: string,
        validators?: FactoryValidator[]
    }) {
        super(opts);
        this._vtype = 'vfilefield';
        this.readonly = opts['readonly'] || false;
    }
}
