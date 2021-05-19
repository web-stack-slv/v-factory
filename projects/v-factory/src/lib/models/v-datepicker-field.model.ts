import { VField } from "./v-field.model";
import { Style, FactoryValidator } from '../interfaces';
import { ThemePalette } from '@angular/material/core';

export class VDatepickerField extends VField<Date> {
    color?: ThemePalette;

    constructor(opts: {
        name: string,
        label?: string,
        value?: Date,
        disabled?: boolean,
        hidden?: boolean,
        color?: ThemePalette,       
        styles?: Style,
        cls?: string,
        placeholder?: string,
        validators?: FactoryValidator[]
    }) {
        super(opts);
        this._vtype = 'vdatepickerfield';
        this.color = opts['color'] || 'accent';
    }
}