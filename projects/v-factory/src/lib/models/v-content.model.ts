import { VItem } from "./v-item.model";

export class VContent extends VItem {
  constructor(opts: {}) {
        super({});
        this._vtype = 'vcontent';
    }
}
