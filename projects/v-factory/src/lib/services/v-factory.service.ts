import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import {
    VAccordion,
    VAutocompleteField,
    VBox,
    VButton,
    VCheckboxField,
    VChipsField,
    VColorField,
    VDatepickerField,
    VDragDropList,
    VEditorField,
    VFileField,
    VImage,
    VInputField,
    VItem,
    VLabel,
    VList,
    VMaskedField,
    VNumberField,
    VRadioField,
    VSelectField,
    VSliderField,
    VSlideToggleField,
    VTextField
} from '../models';

@Injectable({
  providedIn: 'root'
})
export class VFactoryService {

  private _configSubject = new BehaviorSubject<VItem[]>([]);
  configEvent = this._configSubject.asObservable();

  constructor() {}

  fromJSON(jsonCfg: any[] = []): VItem[] {
    return jsonCfg.map(item => {
        return this._createVItem(item);
    });
  }

  private _createVItem(item: any): VItem {
    switch (item.vtype) {
        case 'vinputfield':
            return new VInputField({...item});
        case 'vbox':
            item.items = item.items.map(child => {
                return this._createVItem(child);
            });
            return new VBox({...item});
        case 'vbutton':
            return new VButton({...item});
        case 'vselectfield':
            return new VSelectField({...item});
        case 'vtextfield':
            return new VTextField({...item});
        case 'vautocompletefield':
            return new VAutocompleteField({...item});
        case 'vcheckboxfield':
            return new VCheckboxField({...item});
        case 'vdatepickerfield':
            return new VDatepickerField({...item});
        case 'vimage':
            return new VImage({...item});
        case 'vmaskedfield':
            return new VMaskedField({...item});
        case 'vnumberfield':
            return new VNumberField({...item});
        case 'vradiofield':
            return new VRadioField({...item});
        case 'vslidetogglefield':
            return new VSlideToggleField({...item});
        case 'vsliderfield':
            return new VSliderField({...item});
        case 'vaccordion':
            item.items = item.items.map(child => {
                return this._createVItem(child);
            });
            return new VAccordion({...item});
        case 'vlabel':
            return new VLabel({...item});
        case 'vchipsfield':
            return new VChipsField({...item});
        case 'vdragdroplist':
            return new VDragDropList({...item});
        case 'vcolorfield':
            return new VColorField({...item});
        case 'vfilefield':
          return new VFileField({...item});
        case 'veditorfield':
          return new VEditorField({...item});
        case 'vlist':
          return new VList({...item});
        default:
            return null;
    }
  }

  updateConfig(formCfg: VItem[], form: FormGroup): void {
      this._configSubject.next(formCfg);
      this._createControls(form);
  }

  private _createControls(group: FormGroup) {
    this._configSubject.value.forEach(item => {
      item.createControl(group);      
    });
  }

  clearConfig(): void {
    this._configSubject.next([]);
  }
}
