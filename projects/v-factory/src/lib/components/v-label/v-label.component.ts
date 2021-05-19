import { Component, OnInit } from '@angular/core';
import { VLabel } from '../../models';

@Component({
  selector: 'app-v-label',
  templateUrl: './v-label.component.html',
  styleUrls: ['./v-label.component.scss']
})
export class VLabelComponent implements OnInit {
 
  field: VLabel;

  constructor() { }

  ngOnInit(): void {
  }

}
