import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { APIService } from '../../services/api.service';
var CalComponent = /** @class */ (function () {
    function CalComponent(apiService) {
        this.apiService = apiService;
        this._eventSourceURL = 'https://leke.crewcall.no/uf/me_calendar';
        this.currentDate = new Date();
    }
    CalComponent.prototype.ngOnInit = function () {
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
            timeFormat: 'H(:mm)',
            allDaySlot: false,
            header: {
                left: 'prev',
                center: 'title',
                right: 'next' // month,listMonth, agendaWeek,agendaDay,
            },
            // firstDay: 1,
            dayNamesShort: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            // events: this.data
            eventSources: [
                {
                    url: this._eventSourceURL,
                    type: 'POST',
                    data: {},
                    error: function () { }
                }
            ]
        };
    };
    CalComponent.prototype.dayClick = function (event) {
        console.log(event);
        var date = event.date._d;
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
        // console.log(new Date(date), date);
        this.currentDate = date;
        this.ucCalendar.fullCalendar('changeView', 'agendaDay');
        this.ucCalendar.fullCalendar('gotoDate', (date));
    };
    CalComponent.prototype.eventClick = function (event) {
        // console.log(event);
    };
    CalComponent.prototype.clickButton = function () {
    };
    CalComponent.prototype.renderMonthview = function () {
        this.ucCalendar.fullCalendar('changeView', 'month');
        this.ucCalendar.fullCalendar("next");
        this.ucCalendar.fullCalendar("prev");
    };
    tslib_1.__decorate([
        ViewChild(CalendarComponent),
        tslib_1.__metadata("design:type", CalendarComponent)
    ], CalComponent.prototype, "ucCalendar", void 0);
    CalComponent = tslib_1.__decorate([
        Component({
            selector: 'app-cal',
            templateUrl: './cal.component.html',
            styleUrls: ['./cal.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [APIService])
    ], CalComponent);
    return CalComponent;
}());
export { CalComponent };
//# sourceMappingURL=cal.component.js.map