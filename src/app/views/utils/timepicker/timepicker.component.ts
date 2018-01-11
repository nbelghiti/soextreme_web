import { Component, OnInit, Input } from '@angular/core';
import {NgbTimepickerConfig, NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup } from '@angular/forms';

@Component({
  selector: 'app-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.css'],
  providers: [NgbTimepickerConfig]
})

export class TimepickerComponent implements OnInit {
 @Input('group')
    public heure_in: FormGroup;

  minuteStep = 15; 	
  hourStep = 1;
  time: NgbTimeStruct = {hour: 13, minute: 30, second: 0};
  constructor(config: NgbTimepickerConfig) {
    // customize default values of ratings used by this component tree
    config.seconds = false;
    config.spinners = true;
  }

  ngOnInit() {

  }

}
