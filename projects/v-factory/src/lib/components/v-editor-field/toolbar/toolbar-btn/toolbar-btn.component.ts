import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EditorAction } from '../../editor-action.interface';

@Component({
  selector: 'app-toolbar-btn',
  templateUrl: './toolbar-btn.component.html',
  styleUrls: ['./toolbar-btn.component.scss']
})
export class ToolbarBtnComponent {

  isActive: boolean = false;

  @Input() action: string;
  @Input() icon: string;

  @Output() exec: EventEmitter<EditorAction> = new EventEmitter<EditorAction>();

  execCmd(): void {
    this.exec.emit({ action: this.action });
    this.isActive = !this.isActive;
  }

}
