import { VField } from "./v-field.model";

export class VImageField extends VField<string> {
    imageAspectRatio?: number;
    resizeToWidth?: number;

    constructor(opts: {
        name: string,
        imageAspectRatio?: number,
        resizeToWidth?: number,
        value?: string,
        label?: string
    }) {
        super(opts);
        this._vtype = 'vimagefield';
        this.imageAspectRatio = opts['imageAspectRatio'] ? opts['imageAspectRatio'] : 4/3;
        this.resizeToWidth = opts['resizeToWidth'] ? opts['resizeToWidth'] : 256;
    }
}
