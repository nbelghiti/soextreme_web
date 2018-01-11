import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { CalendarEvent,  CalendarEventTimesChangedEvent, CalendarDateFormatter, DAYS_OF_WEEK} from 'angular-calendar';
import * as myGlobals from '../../../globals/index';
import { CustomDateFormatter } from './custom-date-formatter';

@Component({
  selector: 'app-admin-planning',
  templateUrl: './admin-planning.component.html',
  styleUrls: ['./admin-planning.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateFormatter
    }
  ]

})
export class AdminPlanningComponent implements OnInit {

  constructor() { }
 view: string = 'month';

  viewDate: Date = new Date();

  events: CalendarEvent[] = [
    {
      title: 'Draggable event',
      color: myGlobals.PLANNING_COLORS.yellow,
      start: new Date(),
      draggable: true
    },
    {
      title: 'A non draggable event',
      color: myGlobals.PLANNING_COLORS.blue,
      start: new Date()
    }
  ];

  refresh: Subject<any> = new Subject();

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.refresh.next();
  }
  ngOnInit() {
  }

}
