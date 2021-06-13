import { VItem } from "./v-item.model";
import { Style } from '../interfaces';

export class VDivider extends VItem {

  constructor(opts: {
      styles?: Style,
      cls?:string
    }) {
        super(opts);
        this._vtype = 'vdivider';
    }
}
