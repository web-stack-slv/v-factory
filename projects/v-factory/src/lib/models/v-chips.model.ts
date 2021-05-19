import { VField } from "./v-field.model";
import { Option, Style } from '../interfaces';
import { Observable } from 'rxjs';

export class VChipsField extends VField<string | number> {
    options: Option[] | Observable<Option[]>;
    placeholder?: string;

    constructor(opts: {
        name: string,
        placeholder?: string,
        options: Option[] | Observable<Option[]>,
        label?: string,
        styles?: Style,
        cls?: string
    }) {
        super(opts);
        this._vtype = 'vchipsfield';
        this.options = opts['options'] || [];
        this.placeholder = opts['placeholder'] || '';
        this.name = '';
    }
}