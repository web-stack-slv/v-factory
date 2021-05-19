import { Component, OnInit } from '@angular/core';
import { EditorAction } from '../editor-action.interface';
import { VEditorService } from '../v-editor.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  

  formatBlockArgs = [
      {value: '', label: 'Heading'},
      {value: 'H1', label: 'Heading 1'},
      {value: 'H2', label: 'Heading 2'}, 
      {value: 'H3', label: 'Heading 3'}, 
      {value: 'H4', label: 'Heading 4'}, 
      {value: 'H5', label: 'Heading 5'}, 
      {value: 'H6', label: 'Heading 6'}
    ];

  fontNameArgs = [
    {value: '', label: 'Font Type'},
    {value: 'Arial', label: 'Arial'},
    {value: 'Comic Sans CS', label: 'Comic Sans CS'},
    {value: 'Courier', label: 'Courier'},
    {value: 'Georgia', label: 'Georgia'},
    {value: 'Tahoma', label: 'Tahoma'},
    {value: 'Times New Roman', label: 'Times New Roman'},
    {value: 'Verdana', label: 'Verdana'}
   ];

  fontSizeArgs = [
      {value: '', label: 'Font Size'},
      {value: '1', label: '1'},
      {value: '2', label: '2'},
      {value: '3', label: '3'},
      {value: '4', label: '4'},
      {value: '5', label: '5'},
      {value: '6', label: '6'},
      {value: '7', label: '7'}
    ];

  constructor(
    private _editorService: VEditorService
  ) { }

  ngOnInit(): void {
  }

  execCmd(action: EditorAction): void {
    this._editorService.execCommand(action);
  }
}
