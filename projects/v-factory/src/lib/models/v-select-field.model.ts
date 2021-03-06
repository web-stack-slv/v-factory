import { VField } from "./v-field.model";
import { Option, FactoryValidator, Style } from '../interfaces';
import { Observable } from 'rxjs';

export class VSelectField extends VField<string | number> {
    options: Option[] | Observable<Option[]>;
    multiple?: boolean;
    icons?: boolean;
    hint?: string;

    constructor(opts: {
        name: string,
        options: Option[] | Observable<Option[]>,
        label?: string,
        value?: string | number,
        multiple?: boolean,
        disabled?: boolean,
        hint?: string,
        validators?: FactoryValidator[],
        icons?: boolean,
        styles?: Style,
        cls?: string
    }) {
        super(opts);
        this._vtype = 'vselectfield';
        this.options = opts['options'] || [];
        this.multiple = opts['multiple'] || false;
        this.icons = opts['icons'] || false;
        this.hint = opts['hint'] || null;
    }
}
