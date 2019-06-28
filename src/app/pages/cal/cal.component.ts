import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { Locale } from 'fullcalendar/dist/locale-all';
import { APIService } from '../../services/api.service';
import * as moment from 'moment';

@Component({
  selector: 'app-cal',
  templateUrl: './cal.component.html',
  styleUrls: ['./cal.component.css']
})
export class CalComponent implements OnInit {
  data: any;
  private _eventSource = "../../uf/me_calendar";
  calendarOptions: Options;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  currentDate: any;
  visibleMonthLink = false;

  myJobsActive = false;
  confirmActive = false;
  signedUpActive = false;

  constructor(private apiService: APIService) { }

  ngOnInit() {
    // this.apiService.getEvents()
    //     .subscribe(response => {
    //       this.data = response;
    //       this.calendarOptions = {
    //         timeFormat: "HH:mm",
    //         slotLabelFormat: "HH:mm",
    //         editable: false,
    //         eventLimit: false,
    //         weekNumbers: false,
    //         fixedWeekCount: false,
    //         lazyFetching: false,
    //         defaultView: 'month',
    //         allDaySlot: false,
    //         header: {
    //           left: 'prev', // today
    //           center: 'title',
    //           right: 'next' // month,listMonth, agendaWeek,agendaDay,
    //         },
    //         // firstDay: 1,
    //         dayNamesShort: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    //         events: this.data
    //       };
    //     }, error => console.error(error));
    this.calendarOptions = {
      locale : 'locale',
      timeFormat: "HH:mm",
      slotLabelFormat: "HH:mm",
      editable: false,
      eventLimit: false,
      weekNumbers: false,
      fixedWeekCount: false,
      lazyFetching: false,
      defaultView: 'month',
      allDaySlot: false,
      header: {
        left: 'prev', // today
        center: 'title',
        right: 'next' // month,listMonth, agendaWeek,agendaDay,
      },
      firstDay: 1,
      dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      // events: this.data
      eventSources: [{
        url: this._eventSource,
        type: 'POST',
        data: {},
        error: function () {}
      }]
    };
  }

  dayClick(event) {
    const date = moment(event.date._d);
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
      console.log("not month");
       return;
    }
    // console.log(new Date(date), date);
    this.currentDate = date;
    this.ucCalendar.fullCalendar('changeView', 'agendaDay');
    this.ucCalendar.fullCalendar('gotoDate', (date));
    // this.ucCalendar.fullCalendar("next");
    // this.ucCalendar.fullCalendar("prev");
    this.visibleMonthLink = true;
  }

  eventClick(event) {
    // console.log(event);
  }

  clickButton() {
  }

  renderMonthview() {
    this.ucCalendar.fullCalendar('changeView', 'month');
    this.ucCalendar.fullCalendar("next");
    this.ucCalendar.fullCalendar("prev");
    this.visibleMonthLink = false;
  }

  eventRender(event) {
    return event;
  }

  filterJobs(event) {
    const state = event.target.value;
    if (state === "CONFIRMED") {
      this.myJobsActive = !this.myJobsActive;
      this.confirmActive = false;
      this.signedUpActive = false;

    } else if (state === "ASSIGNED") {
      this.confirmActive = !this.confirmActive;
      this.myJobsActive = false;
      this.signedUpActive = false;

    } else if (state === "INTERESTED") {
      this.signedUpActive = !this.signedUpActive;
      this.myJobsActive = false;
      this.confirmActive = false;
    }
    let _url = "../../uf/me_calendar?state=" + state;
    if (!this.myJobsActive && !this.confirmActive && !this.signedUpActive) {
      _url = "../../uf/me_calendar";
    }

    const eventSource = {
      url: _url,
      type: 'POST',
      data: {}
    };

    this.ucCalendar.fullCalendar( 'removeEventSources');
    this.ucCalendar.fullCalendar( 'addEventSource', eventSource);
    // this.ucCalendar.fullCalendar( 'refetchEvents' );
    this.ucCalendar.fullCalendar('rerenderEvents');
  }
}
