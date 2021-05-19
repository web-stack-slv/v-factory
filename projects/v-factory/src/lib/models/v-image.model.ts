import { VItem } from "./v-item.model";
import { Style } from '../interfaces';

export class VImage extends VItem {
  url?: string;
  sourceField?: string;

  constructor(opts: {
      sourceField?: string,
      url?: string,
      styles?: Style,
      cls?:string
    }) {
        super(opts);
        this._vtype = 'vimage';
        this.url = opts['url'] || '';
        this.sourceField = opts['sourceField'] || '';
    }
}