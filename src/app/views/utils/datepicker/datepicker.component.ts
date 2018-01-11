import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import {NgbDateStruct, NgbDatepickerConfig,NgbDatepickerI18n,NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import {CustomNgdatepicker} from '../ngdatepicker/index';
import {NgbDateFRParserFormatter} from '../datepicker-format-date/ng-date-frparser-formatter';
import * as myGlobals from '../../../globals/index';
import {FormGroup } from '@angular/forms';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css'],
  providers: [{provide: NgbDatepickerI18n, useClass: CustomNgdatepicker},
              {provide: NgbDateParserFormatter, useClass: NgbDateFRParserFormatter}] 

})
export class DatepickerComponent implements OnInit {
   model: NgbDateStruct;
    @Input('group')
    public date: FormGroup;
	 now = myGlobals.NOW;
 selectToday() {
    this.model = {year: this.now.getFullYear(), month: this.now.getMonth() + 1, day: this.now.getDate()};

  }
  constructor(config:NgbDatepickerConfig,
              private datePipe: DatePipe,    
              private ngbDateParserFormatter: NgbDateParserFormatter) { 
    

	  config.minDate = {year: this.now.getFullYear(), month: this.now.getMonth() + 1, day: this.now.getDate()};
    config.outsideDays = 'hidden';

  }
  

  ngOnInit() {
	  
	  this.selectToday();
  }

}
