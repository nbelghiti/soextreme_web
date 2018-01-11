import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-planning-header',
  templateUrl: './admin-planning-header.component.html',
  styleUrls: ['./admin-planning-header.component.css']
})
export class AdminPlanningHeaderComponent implements OnInit {
	  @Input() view: string;

  @Input() viewDate: Date;

  @Input() locale: string = 'en';

  @Output() viewChange: EventEmitter<string> = new EventEmitter();

  @Output() viewDateChange: EventEmitter<Date> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
