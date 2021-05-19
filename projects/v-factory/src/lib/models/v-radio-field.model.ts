import { Option } from '../interfaces'
import { VField } from "./v-field.model";

export class VRadioField extends VField<string | number> {
    options: Option[];

    constructor(opts: {
        name: string,
        options: Option[],
        value?: string | number,
        label?: string
    }) {
        super(opts);
        this._vtype = 'vradiofield';
        this.options = opts['options'] || [];
    }
}