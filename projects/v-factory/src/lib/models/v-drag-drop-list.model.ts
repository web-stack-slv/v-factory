import { VItem } from "./v-item.model";
import { Option, Style } from '../interfaces';
import { FormGroup, FormControl } from '@angular/forms';

export class VDragDropList extends VItem {
  name: string;
  options: Option[];
  hidden?: boolean;
  handler?: Function;
  removeHandler?: Function;
  showPreview?: boolean;
  showAvatar?: boolean;
  removable?: boolean;

  constructor(opts: {
      name: string,
      options: any[],
      label?: string,
      hidden?: boolean,
      showPreview?: boolean,
      showAvatar?: boolean,
      removable?: boolean,
      handler?: Function,
      removeHandler?: Function,
      styles?: Style,
      cls?:string
    }) {
        super(opts);
        this._vtype = 'vdragdroplist';
        this.options = opts['options'] || [];
        this.name = opts['name'] || '';
        this.hidden = opts['hidden'] || false;
        this.showPreview = opts['showPreview'] || false;
        this.showAvatar = opts['showAvatar'] || false;
        this.removable = opts['removable'] || false;
        this.handler = opts['handler'] || function(){};
        this.removeHandler = opts['removeHandler'] || function(){};
    }

    createControl(group: FormGroup) {
        group.addControl(this.name, new FormControl(null));
    }
}