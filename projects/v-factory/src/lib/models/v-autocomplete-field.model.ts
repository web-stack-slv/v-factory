import { VField } from "./v-field.model";
import { Option, FactoryValidator, Style } from '../interfaces';
import { Observable } from 'rxjs';

export class VAutocompleteField extends VField<string | number> {
    options: Option[] | Observable<Option[]>;
    placeholder?: string;

    constructor(opts: {
        name: string,
        options: Option[] | Observable<Option[]>,
        label?: string,
        value?: string | number,
        placeholder?: string,
        validators?: FactoryValidator[],
        styles?: Style,
        cls?: string
    }) {
        super(opts);
        this._vtype = 'vautocompletefield';
        this.options = opts['options'] || [];
        this.placeholder = opts['placeholder'] || '';
    }
}