import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VEditorFieldComponent } from './v-editor-field.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { ToolbarModule } from './toolbar/toolbar.module';
import { VEditorService } from './v-editor.service';
import { ContenteditableModule } from '../../directives/contenteditable/contenteditable.module';

@NgModule({
  declarations: [VEditorFieldComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    ToolbarModule,
    ContenteditableModule
  ],
  providers: [VEditorService]
})
export class VEditorFieldModule { }
