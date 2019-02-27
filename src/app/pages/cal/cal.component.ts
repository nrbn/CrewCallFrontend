import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { APIService } from '../../services/api.service';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-cal',
  templateUrl: './cal.component.html',
  styleUrls: ['./cal.component.css']
})
export class CalComponent implements OnInit {
  data: any;
  private _eventSourceURL = 'https://leke.crewcall.no/uf/me_calendar';
  calendarOptions: Options;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;

  constructor(private apiService: APIService) { }

  ngOnInit() {
    // this.apiService.getEvents()
    //     .subscribe(response => {
    //       this.data = response;
    //     }, error => console.error(error));

    this.calendarOptions = {
      editable: false,
      eventLimit: false,
      weekNumbers: false,
      fixedWeekCount: false,
      lazyFetching: false,
      defaultView: 'month',
      navLinks: true,
      timeFormat: 'H(:mm)',
      allDaySlot: false,
      header: {
        left: 'prev', // today
        center: 'title',
        right: 'next, month, agendaDay' // month,listMonth, agendaWeek,agendaDay,
      },
      // firstDay: 1,
      dayNamesShort: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      // events: this.data
      eventSources: [
      {
          url: this._eventSourceURL,
          type: 'POST',
          data: {},
          error: function () {}
      }
      ],
    };
  }

  dayClick(event) {
    console.log(event);
    const date = event.date._d;
    // if (!$(event.jsEvent.target).hasClass("fc-content-skeleton")) {
    //   date = ($(event.jsEvent.target).attr("data-date"));
    //   if ($(event.jsEvent.target).hasClass("fc-day-number")) {
    //     date = ($(event.jsEvent.target.parentElement).attr("data-date"));
    //     $(".full-calendar-highlight-self").removeClass("full-calendar-highlight-self");
    //     $( ".fc-day.fc-widget-content[data-date*=" + date + "]").addClass("full-calendar-highlight-self");
    //   } else if ($(event.jsEvent.target).hasClass("fc-day-top")) {
    //     $(".full-calendar-highlight-self").removeClass("full-calendar-highlight-self");
    //     $( ".fc-day.fc-widget-content[data-date*=" + date + "]").addClass("full-calendar-highlight-self");
    //   } else {
    //     $(".full-calendar-highlight-self").removeClass("full-calendar-highlight-self");
    //     $(event.jsEvent.target).addClass("full-calendar-highlight-self");
    //   }
    // }
    // console.log(event.jsEvent.target); // div.fc-content-skeleton fc-day-number fc-day.fc-widget-content

    if (event.view.name !== 'month') {
       return;
    }
    console.log(new Date(date), date);

    this.ucCalendar.fullCalendar('changeView', 'agendaDay');
    this.ucCalendar.fullCalendar('gotoDate', (date));
  }

  eventClick(event) {
    console.log(event);
  }

  clickButton() {
  }

}

