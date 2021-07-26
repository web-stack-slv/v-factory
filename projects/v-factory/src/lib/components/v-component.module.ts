import { NgModule } from '@angular/core';
import { VBoxModule } from './v-box/v-box.module';
import { VButtonModule } from './v-button/v-button.module';
import { VInputFieldModule } from './v-input-field/v-input-field.module';
import { VSelectFieldModule } from './v-select-field/v-select-field.module';
import { VTextFieldModule } from './v-text-field/v-text-field.module';
import { VAutocompleteFieldModule } from './v-autocomplete-field/v-autocomplete-field.module';
import { VCheckboxFieldModule } from './v-checkbox-field/v-checkbox-field.module';
import { VDatepickerFieldModule } from './v-datepicker-field/v-datepicker-field.module';
import { VImageModule } from './v-image/v-image.module';
import { VMaskedFieldModule } from './v-masked-field/v-masked-field.module';
import { VNumberFieldModule } from './v-number-field/v-number-field.module';
import { VRadioFieldModule } from './v-radio-field/v-radio-field.module';
import { VSlideToggleFieldModule } from './v-slide-toggle-field/v-slide-toggle-field.module';
import { VSliderFieldModule } from './v-slider-field/v-slider-field.module';
import { VAccordionModule } from './v-accordion/v-accordion.module';
import { VLabelModule } from './v-label/v-label.module';
import { VChipsFieldModule } from './v-chips-field/v-chips-field.module';
import { VDragDropListModule } from './v-drag-drop-list/v-drag-drop-list.module';
import { VColorFieldModule } from './v-color-field/v-color-field.module';
import { VEditorFieldModule } from './v-editor-field/v-editor-field.module';
import { VFileFieldModule } from './v-file-field/v-file-field.module';
import { VDividerModule } from './v-divider/v-divider.module';
import { VListModule } from './v-list/v-list.module';

@NgModule({
  imports: [
    VBoxModule,
    VButtonModule,
    VInputFieldModule,
    VSelectFieldModule,
    VTextFieldModule,
    VAutocompleteFieldModule,
    VCheckboxFieldModule,
    VDatepickerFieldModule,
    VImageModule,
    VMaskedFieldModule,
    VNumberFieldModule,
    VRadioFieldModule,
    VSlideToggleFieldModule,
    VSliderFieldModule,
    VAccordionModule,
    VLabelModule,
    VChipsFieldModule,
    VDragDropListModule,
    VColorFieldModule,
    VEditorFieldModule,
    VFileFieldModule,
    VDividerModule,
    VListModule
  ],
  exports: [
    VBoxModule,
    VButtonModule,
    VInputFieldModule,
    VSelectFieldModule,
    VTextFieldModule,
    VAutocompleteFieldModule,
    VCheckboxFieldModule,
    VDatepickerFieldModule,
    VImageModule,
    VMaskedFieldModule,
    VNumberFieldModule,
    VRadioFieldModule,
    VSlideToggleFieldModule,
    VSliderFieldModule,
    VAccordionModule,
    VLabelModule,
    VChipsFieldModule,
    VDragDropListModule,
    VColorFieldModule,
    VEditorFieldModule,
    VFileFieldModule,
    VDividerModule,
    VListModule
  ]
})
export class VComponentsModule { }
