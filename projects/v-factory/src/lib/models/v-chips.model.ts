import { Option, Style } from '../interfaces';
import { Observable } from 'rxjs';
import { VItem } from ".";

export class VChips extends VItem {
    options: Option[] | Observable<Option[]>;
    color?: string;

    constructor(opts: {
        options: Option[] | Observable<Option[]>,
        label?: string,
        styles?: Style,
        color?: string,
        cls?: string
    }) {
        super(opts);
        this._vtype = 'vchips';
        this.options = opts['options'] || [];
        this.color = opts['color'] || 'accent';
    }
}