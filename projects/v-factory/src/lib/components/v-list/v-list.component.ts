import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VList } from '../../models';

@Component({
  selector: 'app-v-list',
  templateUrl: './v-list.component.html',
  styleUrls: ['./v-list.component.scss']
})
export class VListComponent implements OnInit {

  field: VList;
  group: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }
}
