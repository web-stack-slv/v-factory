import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VFileField } from '../../models';

@Component({
  selector: 'app-file-field',
  templateUrl: './v-file-field.component.html',
  styleUrls: ['./v-file-field.component.scss']
})
export class VFileFieldComponent {

  field: VFileField;
  group: FormGroup;

  onFileChange(event) {
    this.group.get(this.field.name).markAllAsTouched();
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.group.get(this.field.name).setValue(file);
    }
  }
}
