import { VField } from "./v-field.model";

export class VImageField extends VField<string> {
    imageAspectRatio?: number;

    constructor(opts: {
        name: string,
        imageAspectRatio?: number,
        value?: string,
        label?: string
    }) {
        super(opts);
        this._vtype = 'vimagefield';
        this.imageAspectRatio = opts['imageAspectRatio'] ? opts['imageAspectRatio'] : 4/3;
    }
}
