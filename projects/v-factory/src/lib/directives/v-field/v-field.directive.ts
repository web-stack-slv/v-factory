import { Directive, Input, ComponentFactoryResolver, ViewContainerRef, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VAccordionComponent } from '../../components/v-accordion/v-accordion.component';
import { VAutocompleteFieldComponent } from '../../components/v-autocomplete-field/v-autocomplete-field.component';
import { VBoxComponent } from '../../components/v-box/v-box.component';
import { VButtonComponent } from '../../components/v-button/v-button.component';
import { VCheckboxFieldComponent } from '../../components/v-checkbox-field/v-checkbox-field.component';
import { VChipsFieldComponent } from '../../components/v-chips-field/v-chips-field.component';
import { VColorFieldComponent } from '../../components/v-color-field/v-color-field.component';
import { VDatepickerFieldComponent } from '../../components/v-datepicker-field/v-datepicker-field.component';
import { VDividerComponent } from '../../components/v-divider/v-divider.component';
import { VDragDropListComponent } from '../../components/v-drag-drop-list/v-drag-drop-list.component';
import { VEditorFieldComponent } from '../../components/v-editor-field/v-editor-field.component';
import { VFileFieldComponent } from '../../components/v-file-field/v-file-field.component';
import { VImageComponent } from '../../components/v-image/v-image.component';
import { VInputFieldComponent } from '../../components/v-input-field/v-input-field.component';
import { VLabelComponent } from '../../components/v-label/v-label.component';
import { VListComponent } from '../../components/v-list/v-list.component';
import { VMaskedFieldComponent } from '../../components/v-masked-field/v-masked-field.component';
import { VNumberFieldComponent } from '../../components/v-number-field/v-number-field.component';
import { VRadioFieldComponent } from '../../components/v-radio-field/v-radio-field.component';
import { VSelectFieldComponent } from '../../components/v-select-field/v-select-field.component';
import { VSlideToggleFieldComponent } from '../../components/v-slide-toggle-field/v-slide-toggle-field.component';
import { VSliderFieldComponent } from '../../components/v-slider-field/v-slider-field.component';
import { VTextFieldComponent } from '../../components/v-text-field/v-text-field.component';
import { VField } from './../../models/v-field.model';

const componentMapper = {
    vinputfield: VInputFieldComponent,
    vbox: VBoxComponent,
    vbutton: VButtonComponent,
    vselectfield: VSelectFieldComponent,
    vtextfield: VTextFieldComponent,
    vautocompletefield: VAutocompleteFieldComponent,
    vcheckboxfield: VCheckboxFieldComponent,
    vdatepickerfield: VDatepickerFieldComponent,
    vimage: VImageComponent,
    vmaskedfield: VMaskedFieldComponent,
    vnumberfield: VNumberFieldComponent,
    vradiofield: VRadioFieldComponent,
    vslidetogglefield: VSlideToggleFieldComponent,
    vsliderfield: VSliderFieldComponent,
    vaccordion: VAccordionComponent,
    vlabel: VLabelComponent,
    vchipsfield: VChipsFieldComponent,
    vdragdroplist: VDragDropListComponent,
    vcolorfield: VColorFieldComponent,
    veditorfield: VEditorFieldComponent,
    vfilefield: VFileFieldComponent,
    vdivider: VDividerComponent,
    vlist: VListComponent
};

@Directive({
  selector: '[appVField]'
})
export class VFieldDirective implements OnInit {
  @Input() field: VField<any>;
  @Input() group: FormGroup;

  componentRef: any;

  constructor(
    private _resolver: ComponentFactoryResolver,
    private _container: ViewContainerRef
  ) { }

  ngOnInit() {
    const factory = this._resolver.resolveComponentFactory(
      componentMapper[this.field.getName()]
    );

    this.componentRef = this._container.createComponent(factory);

    this._applyStyles();

    this.componentRef.instance.field = this.field;
    this.componentRef.instance.group = this.group;
  }

  private _applyStyles() {
    let element: HTMLElement = <HTMLElement>this.componentRef.location.nativeElement;
    if (this.field.styles) {
      Object.keys(this.field.styles).map(k =>{
        element.style[this._getStyle(k)] = this.field.styles[k].toString();
      });
    }

    if (this.field.cls) {
      this.field.cls.split(' ').map(cls => {
        if(cls.trim() !== '') {
          element.classList.add(cls);
        }
      });
    }
  }
  private _getStyle(key: string): string {
    switch (key) {
      case 'marginLeft':
        return 'margin-left';
      case 'marginRight':
        return 'margin-right';
      case 'marginTop':
        return 'margin-top';
      case 'marginBottom':
        return 'margin-bottom'
      case 'bgColor':
        return 'background-color';
      default:
        return key;
    }
  }
}
