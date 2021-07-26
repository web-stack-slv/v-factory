import { Style } from "../interfaces";
import { VField } from "./v-field.model";

export class VSliderField extends VField<number> {
    showTicks?: boolean;
    autoTicks?: boolean;
    tickInterval?: number | 'auto';
    invert?: boolean;
    min?: number;
    max?: number;
    step?: number;
    thumbLabel?: boolean;
    vertical?: boolean;

    constructor(opts: {
        name: string,
        disabled?: boolean,
        label?: string,
        value?: number,
        showTicks?: boolean,
        autoTicks?: boolean,
        tickInterval?: number | 'auto',
        invert?: boolean,
        min?: number,
        max?: number,
        step?: number,
        thumbLabel?: boolean,
        vertical?: boolean,
        styles?: Style,
        cls?: string
    }) {
        super(opts);
        this._vtype = 'vsliderfield';
        this.showTicks = opts['showTicks'] || false;
        this.autoTicks = opts['autoTicks'] || false;
        this.tickInterval = opts['tickInterval'] || 'auto';
        this.invert = opts['invert'] || false;
        this.min = opts['min'] || 0;
        this.max = opts['max'] || 100;
        this.step = opts['step'] || 1;
        this.thumbLabel = opts['thumbLabel'] || false;
        this.vertical = opts['vertical'] || false;
    }
}
