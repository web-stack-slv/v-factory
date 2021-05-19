import { FormControl } from '@angular/forms';

export const validateFileSize = (control: FormControl, size: number) => {
  if(control.value) {
    return control.value.size > size ? { fileSize: true } : null;
  }
  return null;
}
