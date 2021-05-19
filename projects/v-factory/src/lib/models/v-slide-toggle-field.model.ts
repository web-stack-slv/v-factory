import { VField } from "./v-field.model";
import { ThemePalette } from '@angular/material/core';

export class VSlideToggleField extends VField<number> {
    color?: ThemePalette;

    constructor(opts: {
        name: string,
        label?: string,
        disabled?: boolean,
        color?: ThemePalette
    }) {
        super(opts);
        this._vtype = 'vslidetogglefield';
        this.color = opts['color'] || 'accent';
    }
}
