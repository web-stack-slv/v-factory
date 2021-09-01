import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VImageField } from '../../models';
import { Dimensions, ImageCroppedEvent, ImageTransform } from './image-cropper/interfaces';

@Component({
  selector: 'app-image-field',
  templateUrl: './v-image-field.component.html',
  styleUrls: ['./v-image-field.component.scss']
})
export class VImageFieldComponent implements OnInit {
    @ViewChild('fileInput', {static: false}) fileInput: ElementRef;

    field: VImageField;
    group: FormGroup;
    imageChangedEvent: any = '';
    croppedImage: any = '';
    canvasRotation = 0;
    rotation = 0;
    scale = 1;
    showCropper = false;
    containWithinAspectRatio = false;
    transform: ImageTransform = {};

    file: File;

    constructor() { }

    ngOnInit(): void {
    }

    fileChangeEvent(event: any): void {
      this.imageChangedEvent = event;
    }

    imageCropped(event: ImageCroppedEvent) {
        this.group.controls[this.field.name].setValue(event.base64);
        this.group.controls[this.field.name].markAsTouched();
    }

    imageLoaded() {
      this.showCropper = true;
    }

    cropperReady(sourceImageDimensions: Dimensions) {
        // cropper ready
    }

    loadImageFailed() {
        console.error('Fail to load image');
    }

    clearCropper() {
      this.imageChangedEvent = '';
      this.group.controls[this.field.name].setValue(null);
      this.group.controls[this.field.name].markAsUntouched();
      this.showCropper = false;
    }

    onUploadClick() {
      this.fileInput.nativeElement.click();
    }

    rotateLeft() {
      this.canvasRotation--;
      this.flipAfterRotate();
    }

    rotateRight() {
        this.canvasRotation++;
        this.flipAfterRotate();
    }

    private flipAfterRotate() {
        const flippedH = this.transform.flipH;
        const flippedV = this.transform.flipV;
        this.transform = {
            ...this.transform,
            flipH: flippedV,
            flipV: flippedH
        };
    }


  flipHorizontal() {
      this.transform = {
          ...this.transform,
          flipH: !this.transform.flipH
      };
  }

  flipVertical() {
      this.transform = {
          ...this.transform,
          flipV: !this.transform.flipV
      };
  }

  resetImage() {
      this.scale = 1;
      this.rotation = 0;
      this.canvasRotation = 0;
      this.transform = {};
  }

  zoomOut() {
      this.scale -= .1;
      this.transform = {
          ...this.transform,
          scale: this.scale
      };
  }

  zoomIn() {
      this.scale += .1;
      this.transform = {
          ...this.transform,
          scale: this.scale
      };
  }

  toggleContainWithinAspectRatio() {
      this.containWithinAspectRatio = !this.containWithinAspectRatio;
  }

  updateRotation() {
      this.transform = {
          ...this.transform,
          rotate: this.rotation
      };
  }
}
