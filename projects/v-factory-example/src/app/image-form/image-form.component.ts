import { Component } from '@angular/core';
import { VInputField, VImageField, VButton, VImage } from 'v-factory';
import { BaseFormComponent } from '../base-form/base-form.component';

@Component({
  selector: 'app-image-form',
  templateUrl: '../base-form/base-form.component.html',
  styleUrls: ['../base-form/base-form.component.scss']
})
export class ImageFormComponent extends BaseFormComponent {

  title = 'IMAGE FORM';
  subtitle = "For ImageField was used code base of ngx-image-cropper library. Original author Martijn Willekens. Thanks a lot!";

  formConfig = [
    new VImage({
      url: 'https://images.pexels.com/photos/266784/pexels-photo-266784.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    }),
    new VInputField({
      label: 'Image name',
      name: 'title'
    }),
    new VImageField({
      name: 'image',
      label: 'Image Field'
    }),
    new VButton({
      text: 'SUBMIT',
      styleType: 'raised',
      type: 'submit'
    })
  ];
  
  
  constructor() {
    super();
  }  
}
