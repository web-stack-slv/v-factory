import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EditorAction } from '../../editor-action.interface';

@Component({
  selector: 'app-toolbar-select',
  templateUrl: './toolbar-select.component.html',
  styleUrls: ['./toolbar-select.component.scss']
})
export class ToolbarSelectComponent implements OnInit {

  @Input() action: string;
  @Input() args: { value: string, label: string }[];

  @Output() exec: EventEmitter<EditorAction> = new EventEmitter<EditorAction>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(arg: string): void {
    this.exec.emit({ action: this.action,  arg })
  }

}
