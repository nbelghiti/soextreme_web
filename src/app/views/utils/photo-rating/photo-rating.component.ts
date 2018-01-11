import { Component, OnInit } from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import * as myGlobals from '../../../globals/index';

@Component({
  selector: 'app-photo-rating',
  templateUrl: './photo-rating.component.html',
  styleUrls: ['./photo-rating.component.css']
})
export class PhotoRatingComponent implements OnInit {
currentRate = 0;
  constructor(config: NgbRatingConfig) {
    config.max = myGlobals.RATING_PHOTO;
    config.resettable = true;
	
  }

  ngOnInit() {
  }

}
