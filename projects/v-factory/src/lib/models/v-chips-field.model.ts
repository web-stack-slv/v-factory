import { VField } from "./v-field.model";
import { Option, Style } from '../interfaces';
import { Observable } from 'rxjs';

export class VChipsField extends VField<Option[]> {
    options: Option[] | Observable<Option[]>;
    placeholder?: string;
    color?: string;
    removable?: boolean;
    selectable?: boolean;

    constructor(opts: {
        name: string,
        placeholder?: string,
        options: Option[] | Observable<Option[]>,
        value?: Option[],
        label?: string,
        styles?: Style,
        color?: string,
        removable?: boolean,
        selectable?: boolean,
        cls?: string
    }) {
        super(opts);
        this._vtype = 'vchipsfield';
        this.options = opts['options'] || [];
        this.value = opts['value'] || [];
        this.placeholder = opts['placeholder'] || '';
        this.color = opts['color'] || 'accent';
        this.removable = opts['removable'] || false;
        this.selectable = opts['selectable'] || false;
        this.name = opts['name'] || '';
    }
}