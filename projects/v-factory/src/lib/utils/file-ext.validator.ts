import { FormControl } from '@angular/forms';

export const validateFileExt = (control: FormControl, extentions: string[]) => {
  if(control.value) {
    const ext = control.value?.name?.split('.').pop();
    return extentions.indexOf(ext) === -1 ? { fileExt: true } : null;
  }
  return null;
}
