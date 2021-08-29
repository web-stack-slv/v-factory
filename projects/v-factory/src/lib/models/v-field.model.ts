import { VItem } from "./v-item.model";
import { Style, FactoryValidator, ValidatorMessage } from '../interfaces';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { validateFileExt } from "../utils/file-ext.validator";
import { validateFileSize } from "../utils/file-size.validator";

export class VField<T> extends VItem {

    private validatorMessages: ValidatorMessage[] = [];

    name: string;
    label?: string;
    value?: T;
    disabled?: boolean;
    readonly?: boolean;
    validators?: FactoryValidator[];

    constructor(opts: {
        name: string,
        label?: string,
        value?: T,
        disabled?: boolean,
        readonly?: boolean,
        validators?: FactoryValidator[],
        styles?: Style,
        cls?:string
    }) {
        super(opts);
        this._vtype = 'vfield';
        this.name = opts['name'] || '';
        this.label = opts['label'] || null;
        this.value = opts['value'] || null;
        this.disabled = opts['disabled'] || false;
        this.readonly = opts['readonly'] || false;
        this.validators = opts['validators'] || [];
    }

    createControl(group: FormGroup): void {
        if(!group.get(this.name)) {
            const control = new FormControl(
                this.value,
                this._bindValidations()
              );
            if(this.disabled) {
              control.disable();
            }
            group.addControl(this.name, control);
        }
    }

    private _bindValidations(): Validators | null {
        if (this.validators.length > 0) {
            const validations = [];
            this.validators.map(item => {
                const validatorCfg = this._getValidatorConfig(item);
                const { name, validator, message } = validatorCfg;
                validations.push(validator);
                this.validatorMessages.push({ name, message });
            })

            return Validators.compose(validations);
        }
        return null;
    }

    private _getValidatorConfig(item: FactoryValidator): { name: string, validator: any, message: string } {
        const vMap = new Map(Object.entries(item));
        const result = { name: null, validator: null, message: '' };

        vMap.forEach((v: any, k: string) => {
            switch (k) {
                case 'message':
                    result.message = v;
                    break;
                case 'validator':
                    result.validator = v;
                    break;
                default:
                    result.name = k;
                    if(!result.validator) {
                        result.validator = this._getValidatorByName(k,v);
                    }
                    break;
            }
        });
        return result;
    }

    getValMessage() {
        return this.validatorMessages;
    }

    removeControl(group: FormGroup): void {
        group.removeControl(this.name);
    }

    private _getValidatorByName(name: string, value?: number | string | string[]): any {
        switch (name) {
            case 'required':
                return Validators.required;
            case 'email':
                return Validators.email;
            case 'minlength':
                return Validators.minLength(value? +value : 3)
            case 'maxlength':
                return Validators.maxLength(value? +value : 100)
            case 'min':
                return Validators.min(value? +value : 1)
            case 'max':
                return Validators.max(value? +value : 100)
            case 'pattern':
                return Validators.pattern(value? new RegExp(`${value}`) : '');
            case 'fileExt':
                return (control: FormControl) => validateFileExt(control, value as string[]);
            case 'fileSize':
                return (control: FormControl) => validateFileSize(control, +value);
            default:
                return null;
        }
    }
}
