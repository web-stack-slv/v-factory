import { VField } from "./v-field.model";
import { FactoryValidator } from '../interfaces';

export class VEditorField extends VField<string> {
    placeholder?: string;

    constructor(opts: {
        name: string,
        value?: string,
        label?: string,
        placeholder?: string,
        validators?: FactoryValidator[]
    }) {
        super(opts);
        this._vtype = 'veditorfield';
        this.placeholder = opts['placeholder'] ? opts['placeholder'] : 'Введите здесь текст ...'
    }
}
