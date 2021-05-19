import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { EditorAction } from './editor-action.interface';

@Injectable()
export class VEditorService {

  btnAction = new Subject();

  constructor() {}

  execCommand(action: EditorAction): void {
    this.btnAction.next(action);
  }
  
}
