import { Component, OnInit } from '@angular/core';
import { LOC_SOXTRM } from '../../../../globals/index';

@Component({
  selector: 'app-gmap-apropos',
  templateUrl: './gmap-apropos.component.html',
  styleUrls: ['./gmap-apropos.component.css']
})
export class GmapAproposComponent implements OnInit {
  position = LOC_SOXTRM;
  constructor() { }

  ngOnInit() {
  	console.log(this.position);
  }

}
