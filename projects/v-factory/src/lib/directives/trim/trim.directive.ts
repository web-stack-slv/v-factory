import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';


@Directive({
  selector: '[trim]'
})
export class TrimDirective  {

    constructor(private ngControl: NgControl){}

    get ctrl() {
       return this.ngControl.control;
    }

    @HostListener('blur')
    onBlur() {
      this.ctrl.value && this.ctrl.setValue(this.ctrl.value.trim());
    }
}
