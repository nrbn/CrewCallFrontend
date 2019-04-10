import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var APIService = /** @class */ (function () {
    function APIService(http) {
        this.http = http;
        this._getNotesUrl = 'https://leke.crewcall.no/uf/me_messages';
        this._getUserInfoUrl = 'https://leke.crewcall.no/uf/me';
        this._getJobsUrl = "https://leke.crewcall.no/uf/me_jobs";
        this._getEventsUrl = 'https://leke.crewcall.no/uf/me_calendar';
        this.headers = new HttpHeaders().set('Content-Type', 'application/json');
    }
    APIService.prototype.getNotes = function () {
        return this.http.get(this._getNotesUrl, { headers: this.headers });
    };
    APIService.prototype.archiveNote = function (archiveNoteUrl) {
        return this.http.post(archiveNoteUrl, { headers: this.headers });
    };
    APIService.prototype.getNotesInterface = function () {
        return this.http.get(this._getNotesUrl, { headers: this.headers });
    };
    APIService.prototype.getUserInfo = function () {
        return this.http.get(this._getUserInfoUrl, { headers: this.headers });
    };
    // getJobs(): Observable<any> {
    //   const data: any = [{
    //     "signup_shift": {
    //       "_csrf_token": "pG2zIdfjho08dwfMt-rTvukB5zOiIRK3NiyKa2HiGvs",
    //       "url": "https://leke.crewcall.no/uf/signup/ID"
    //     },
    //     "opportunities": [
    //       {
    //         "name": "Stagecrew at Kopiforsøk 3 - Dag 2",
    //         "id": 109,
    //         "event": {
    //           "name": "Kopiforsøk 3 - Dag 2",
    //           "id": 42,
    //           "location": {
    //             "name": "Rockefeller - RF",
    //             "address": "Torggata 16, Oslo"
    //           },
    //           "organization": {
    //             "name": "ROK AS"
    //           }
    //         },
    //         "shift": {
    //           "name": "Stagecrew at Kopiforsøk 3 - Dag 2",
    //           "id": 109,
    //           "function": "Stagecrew",
    //           "start_date": "2019-03-26 08:00",
    //           "start_string": "26 Mar 08:00",
    //           "end_date": "2019-03-26 14:00",
    //           "end_string": "26 Mar 14:00"
    //         },
    //         "confirm_notes": [
    //           {
    //             "subject": "Vernesko!",
    //             "body": "Husk vernesko"
    //           }
    //         ]
    //       },
    //       {
    //         "name": "Stagehand (SH) at Kopiforsøk 3 - Dag 2",
    //         "id": 110,
    //         "event": {
    //           "name": "Kopiforsøk 3 - Dag 2",
    //           "id": 42,
    //           "location": {
    //             "name": "Rockefeller - RF",
    //             "address": "Torggata 16, Oslo"
    //           },
    //           "organization": {
    //             "name": "ROK AS"
    //           }
    //         },
    //         "shift": {
    //           "name": "Stagehand (SH) at Kopiforsøk 3 - Dag 2",
    //           "id": 110,
    //           "function": "Stagehand (SH)",
    //           "start_date": "2019-03-26 08:00",
    //           "start_string": "26 Mar 08:00",
    //           "end_date": "2019-03-26 14:00",
    //           "end_string": "26 Mar 14:00"
    //         },
    //         "confirm_notes": [
    //           {
    //             "subject": "Vernesko!",
    //             "body": "Husk vernesko"
    //           }
    //         ]
    //       },
    //       {
    //         "name": "Stagehand (SH) at Rammstein - Rammstein Stål 2",
    //         "id": 62,
    //         "event": {
    //           "name": "Rammstein - Rammstein Stål 2",
    //           "id": 24,
    //           "location": {
    //             "name": "Åhléns Youngstorget",
    //             "address": ", "
    //           },
    //           "organization": {
    //             "name": "Friction AS"
    //           }
    //         },
    //         "shift": {
    //           "name": "Stagehand (SH) at Rammstein - Rammstein Stål 2",
    //           "id": 62,
    //           "function": "Stagehand (SH)",
    //           "start_date": "2019-08-16 08:00",
    //           "start_string": "16 Aug 08:00",
    //           "end_date": "2019-08-16 18:00",
    //           "end_string": "16 Aug 18:00"
    //         },
    //         "confirm_notes": []
    //       }
    //     ],
    //     "delete_interest": {
    //       "_csrf_token": "Bp1aeo4afXX3239haBmE2TetKRAexJ3OLTBHXZAUyJg",
    //       "url": "https://leke.crewcall.no/uf/delete_interest/ID"
    //     },
    //     "interested": [
    //       {
    //         "name": "Gaffeltruck",
    //         "id": 115,
    //         "event": {
    //           "name": "Kopiforsøk 3 - Dag 2",
    //           "id": 42,
    //           "location": {
    //             "name": "Rockefeller - RF",
    //             "address": "Torggata 16, Oslo"
    //           },
    //           "organization": {
    //             "name": "ROK AS"
    //           }
    //         },
    //         "shift": {
    //           "name": "Gaffeltruck at Kopiforsøk 3 - Dag 2",
    //           "id": 108,
    //           "function": "Gaffeltruck",
    //           "start_date": "2019-03-26 08:00",
    //           "start_string": "26 Mar 08:00",
    //           "end_date": "2019-03-27 14:00",
    //           "end_string": "27 Mar 14:00"
    //         },
    //         "confirm_notes": [
    //           {
    //             "subject": "Vernesko!",
    //             "body": "Husk vernesko"
    //           }
    //         ],
    //         "overlap": false
    //       },
    //       {
    //         "name": "Rigger",
    //         "id": 105,
    //         "event": {
    //           "name": "Rammstein - Rammstein stål 1",
    //           "id": 8,
    //           "location": {
    //             "name": "Ullevål stadion",
    //             "address": ", "
    //           },
    //           "organization": {
    //             "name": "Friction AS"
    //           }
    //         },
    //         "shift": {
    //           "name": "Rigger at Rammstein - Rammstein stål 1",
    //           "id": 55,
    //           "function": "Rigger",
    //           "start_date": "2019-08-15 08:00",
    //           "start_string": "15 Aug 08:00",
    //           "end_date": "2019-08-15 18:00",
    //           "end_string": "15 Aug 18:00"
    //         },
    //         "confirm_notes": [],
    //         "overlap": false
    //       }
    //     ],
    //     "confirm_job": {
    //       "_csrf_token": "oMQ4CfurBXm8i50IZlvEJ8-vpbxswkiiHTOoKQoohJk",
    //       "url": "https://leke.crewcall.no/uf/confirm/ID"
    //     },
    //     "assigned": [
    //       {
    //         "name": "Gaffeltruck",
    //         "id": 114,
    //         "event": {
    //           "name": "Kopiforsøk 3 - Dag 1",
    //           "id": 43,
    //           "location": {
    //             "name": "Rockefeller - RF",
    //             "address": "Torggata 16, Oslo"
    //           },
    //           "organization": {
    //             "name": "ROK AS"
    //           }
    //         },
    //         "shift": {
    //           "name": "Gaffeltruck at Kopiforsøk 3 - Dag 1",
    //           "id": 112,
    //           "function": "Gaffeltruck",
    //           "start_date": "2019-03-25 08:00",
    //           "start_string": "25 Mar 08:00",
    //           "end_date": "2019-03-25 14:00",
    //           "end_string": "25 Mar 14:00"
    //         },
    //         "confirm_notes": [
    //           {
    //             "subject": "Vernesko!",
    //             "body": "Husk vernesko"
    //           }
    //         ],
    //         "overlap": false
    //       },
    //       {
    //         "name": "Stagehand (SH)",
    //         "id": 112,
    //         "event": {
    //           "name": "Kopiforsøk 3 - Dag 1",
    //           "id": 43,
    //           "location": {
    //             "name": "Rockefeller - RF",
    //             "address": "Torggata 16, Oslo"
    //           },
    //           "organization": {
    //             "name": "ROK AS"
    //           }
    //         },
    //         "shift": {
    //           "name": "Stagehand (SH) at Kopiforsøk 3 - Dag 1",
    //           "id": 114,
    //           "function": "Stagehand (SH)",
    //           "start_date": "2019-03-25 08:00",
    //           "start_string": "25 Mar 08:00",
    //           "end_date": "2019-03-25 14:00",
    //           "end_string": "25 Mar 14:00"
    //         },
    //         "confirm_notes": [
    //           {
    //             "subject": "Vernesko!",
    //             "body": "Husk vernesko"
    //           }
    //         ],
    //         "overlap": true
    //       }
    //     ],
    //     "confirmed": [
    //       {
    //         "name": "Stagecrew",
    //         "id": 113,
    //         "event": {
    //           "name": "Kopiforsøk 3 - Dag 1",
    //           "id": 43,
    //           "location": {
    //             "name": "Rockefeller - RF",
    //             "address": "Torggata 16, Oslo"
    //           },
    //           "organization": {
    //             "name": "ROK AS"
    //           }
    //         },
    //         "shift": {
    //           "name": "Stagecrew at Kopiforsøk 3 - Dag 1",
    //           "id": 113,
    //           "function": "Stagecrew",
    //           "start_date": "2019-03-25 08:00",
    //           "start_string": "25 Mar 08:00",
    //           "end_date": "2019-03-25 14:00",
    //           "end_string": "25 Mar 14:00"
    //         },
    //         "confirm_notes": [
    //           {
    //             "subject": "Vernesko!",
    //             "body": "Husk vernesko"
    //           }
    //         ],
    //         "overlap": false
    //       },
    //       {
    //         "name": "Stagecrew",
    //         "id": 104,
    //         "event": {
    //           "name": "Mensen reunion",
    //           "id": 11,
    //           "location": {
    //             "name": "Stavernfestivalen",
    //             "address": ", "
    //           },
    //           "organization": {
    //             "name": "Oslo Kru AS (internt)"
    //           }
    //         },
    //         "shift": {
    //           "name": "Stagecrew at Mensen reunion",
    //           "id": 21,
    //           "function": "Stagecrew",
    //           "start_date": "2019-07-20 10:00",
    //           "start_string": "20 Jul 10:00",
    //           "end_date": "2019-07-20 20:00",
    //           "end_string": "20 Jul 20:00"
    //         },
    //         "confirm_notes": [
    //           {
    //             "subject": "Also important!",
    //             "body": "This is a specific message for this job."
    //           }
    //         ],
    //         "overlap": false
    //       }
    //     ]
    //   }
    //       ];
    //       return data;
    // }
    APIService.prototype.getJobs = function () {
        return this.http.get(this._getJobsUrl, { headers: this.headers });
    };
    APIService.prototype.getEvents = function () {
        return this.http.get(this._getEventsUrl, { headers: this.headers });
    };
    APIService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], APIService);
    return APIService;
}());
export { APIService };
//# sourceMappingURL=api.service.js.map