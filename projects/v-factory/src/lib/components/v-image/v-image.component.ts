import { Component, OnInit } from '@angular/core';
import { VImage } from '../../models';

@Component({
  selector: 'app-image',
  templateUrl: './v-image.component.html',
  styleUrls: ['./v-image.component.scss']
})
export class VImageComponent implements OnInit {

  field: VImage;

  constructor() { }

  ngOnInit(): void {    
  }
}
