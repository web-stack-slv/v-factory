import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VDragDropListComponent } from './v-drag-drop-list.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [VDragDropListComponent],
  imports: [
    CommonModule,
    DragDropModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDividerModule,
    RouterModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [VDragDropListComponent]
})
export class VDragDropListModule { }
