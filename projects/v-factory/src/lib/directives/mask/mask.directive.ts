import { Directive, HostListener, ElementRef, Input, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: 'input[mask]'
})
export class MaskDirective implements OnInit {
  @Input() mask: string;

  maskChar: string;

  constructor(
    private el: ElementRef,
    private ngControl: NgControl
    ){}

    ngOnInit(): void {
      this.maskChar = this.mask ? this.getMaskChar() : null;
    }

    get ctrl() {
       return this.ngControl.control;
    }

    @HostListener('keydown', ['$event'])
    onKeyDown(event: KeyboardEvent): boolean {
      const key = event.key;
      return key.length > 1 || /\d/.test(key);
    }

    @HostListener('keyup', ['$event'])
    onKeyUp(event:KeyboardEvent): void {      
      const keyCode = this.getCode(event);
      if([37, 39].indexOf(keyCode) !== -1) return;
      this.applyMask();
    }

    private applyMask(): void {
      if(this.ctrl.value && this.mask) {
        const value = this.ctrl.value.replace(/\D/g, '');
        
        let newValue = this.mask,
        cursorPos = this.getCursorPosition();

        for (let i = 0; i < value.length; i++) {
          const idx = newValue.indexOf(this.maskChar);
          newValue = `${newValue.substring(0, idx)}${value[i]}${newValue.substring(idx+1, newValue.length)}`;
        }

        let idx = newValue.indexOf(this.maskChar);
        if( idx !== -1 ) {      
          newValue = newValue.substring(0, idx);
        }

        if(!/\d/.test(newValue[cursorPos]) || cursorPos === 1) {
            cursorPos++;
        }

        this.ctrl.setValue(newValue, { emitEvent: false });
        this.setCursorPosition(cursorPos);
      }  
    }

    private getMaskChar(): string {
      const chars = {};
      let maskChar:string, max = 0;

      for (let i = 0; i < this.mask.length; i++) {
        if(Object.keys(chars).indexOf(this.mask[i]) === -1) {
          chars[this.mask[i]] = 1;
        } else {
          chars[this.mask[i]]++;
        }
        if(chars[this.mask[i]] > max)  {
          max = chars[this.mask[i]];
          maskChar = this.mask[i];
        }
      }
      return maskChar
    }

    private getCursorPosition(): number {
      return this.el.nativeElement.selectionStart;
    }

    private setCursorPosition(start: number, end: number = start): void {
        this.el.nativeElement.setSelectionRange(start, end);
    }

    private getCode(event: KeyboardEvent): number {
      return event.keyCode || event.charCode;
    }
}
