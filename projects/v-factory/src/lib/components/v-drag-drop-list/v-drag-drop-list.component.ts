import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { VDragDropList } from '../../models';
import { FormGroup } from '@angular/forms';
import { Option } from '../../interfaces';

@Component({
  selector: 'app-drag-drop-list',
  templateUrl: './v-drag-drop-list.component.html',
  styleUrls: ['./v-drag-drop-list.component.scss']
})
export class VDragDropListComponent implements OnInit {

  field: VDragDropList;
  group: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<Option[]>) {
    moveItemInArray(this.field.options, event.previousIndex, event.currentIndex);
    this.group.controls[this.field.name].markAsTouched();
  }
}
