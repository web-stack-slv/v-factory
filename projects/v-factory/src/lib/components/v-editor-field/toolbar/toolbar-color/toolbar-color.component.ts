import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EditorAction } from '../../editor-action.interface';

@Component({
  selector: 'app-toolbar-color',
  templateUrl: './toolbar-color.component.html',
  styleUrls: ['./toolbar-color.component.scss']
})
export class ToolbarColorComponent implements OnInit {

  @Input() action: string;
  @Input() icon: string;
  @Input() value: string;

  @Output() exec: EventEmitter<EditorAction> = new EventEmitter<EditorAction>();

  constructor() { }

  ngOnInit(): void {
  }

  onPick(color: string): void {
    this.exec.emit({ action: this.action, arg: color });
  }

}
