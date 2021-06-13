import { Component, OnInit } from '@angular/core';
import { VDivider } from './../../models';

@Component({
  selector: 'app-v-divider',
  templateUrl: './v-divider.component.html',
  styleUrls: ['./v-divider.component.scss']
})
export class VDividerComponent implements OnInit {

  field: VDivider;

  constructor() { }

  ngOnInit(): void {
  }

}
