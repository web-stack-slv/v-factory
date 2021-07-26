import { VItem } from "./v-item.model";
import { Style } from '../interfaces';
import { ThemePalette } from '@angular/material/core';

export class VLabel extends VItem {
    text?: string;
    icon?: string;
    color?: ThemePalette;

  constructor(opts: {
      text?: string,
      icon?: string,
      itemId?: string,
      hidden?: boolean,
      color?: ThemePalette,
      styles?: Style,
      cls?:string
    }) {
        super(opts);
        this._vtype = 'vlabel';
        this.text = opts['text'] || '';
        this.icon = opts['icon'] || null;
        this.color = opts['color'] || 'accent';
    }
}
