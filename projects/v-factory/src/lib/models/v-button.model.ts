import { VItem } from "./v-item.model";
import { Style } from '../interfaces';
import { ThemePalette } from '@angular/material/core';

export class VButton extends VItem {
    text?: string;
    icon?: string;
    handler?: Function;
    type?: 'button' | 'submit' | 'reset';
    styleType?: 'raised' | 'stroked' | 'flat' | 'icon' | 'fab' | 'mini-fab';
    color?: ThemePalette;
    disabled?: boolean;    

  constructor(opts: {
      text?: string,
      icon?: string,
      itemId?: string,
      handler?: Function,
      type?: 'button' | 'submit' | 'reset',
      disabled?: boolean,
      styleType?: 'raised' | 'stroked' | 'flat' | 'icon' | 'fab' | 'mini-fab',
      color?: ThemePalette,
      styles?: Style,
      cls?:string
    }) {
        super(opts);
        this._vtype = 'vbutton'; 
        this.text = opts['text'] || '';
        this.icon = opts['icon'] || null;
        this.handler = opts['handler'] || function(){};
        this.type = opts['type'] || 'button';
        this.styleType = opts['styleType'] || 'raised';
        this.color = opts['color'] || 'accent';
        this.disabled = opts['disabled'] || false;
    }
}