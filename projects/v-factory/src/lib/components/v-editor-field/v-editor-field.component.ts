import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { VEditorField } from '../../models';
import { FormGroup } from '@angular/forms';
import { DOCUMENT } from '@angular/common';
import { VEditorService } from './v-editor.service';
import { EditorAction } from './editor-action.interface';

@Component({
  selector: 'app-editor-field',
  templateUrl: './v-editor-field.component.html',
  styleUrls: ['./v-editor-field.component.scss']
})
export class VEditorFieldComponent implements OnInit {
  @ViewChild('texteditor', { static: true }) texteditor: ElementRef;

  field: VEditorField;
  group: FormGroup;

  isShowingSource = false;

  constructor(
    @Inject(DOCUMENT) private _doc: any,
    private _editorService: VEditorService
  ) { }

  ngOnInit(): void {
    this._editorService.btnAction
      .subscribe((action: EditorAction) => {
        switch (action.action) {
          case 'toggleSource':
            if(this.isShowingSource) {
              this.texteditor.nativeElement.innerHTML = this.texteditor.nativeElement.textContent;
            } else {
              this.texteditor.nativeElement.textContent = this.texteditor.nativeElement.innerHTML;
            }
            this.isShowingSource = !this.isShowingSource;
            break;
          case 'insertImage':
          case 'createLink':
            let imgUrl = prompt('Enter URL:', '');
            if(imgUrl) {
              this._doc.execCommand(action.action, false, imgUrl);
            }
            break;
          case 'insertVideo':
            let videoUrl = prompt('Enter URL:', '');
            if(videoUrl) {
              videoUrl = videoUrl.replace("watch?v=", "embed/");
              const embed = '<iframe src="'+videoUrl+'" allowfullscreen="true" width="480" frameborder="0" height="390">';
              this._doc.execCommand("insertHTML", false, embed);
            }
            break;
          default:
            this._doc.execCommand(action.action, false, action.arg? action.arg : null);
            break;
        }
      });
  }
}
