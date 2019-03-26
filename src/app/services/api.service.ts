import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { INote, Jobs } from './interface';
import { Observable, of, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  private _getNotesUrl = 'https://leke.crewcall.no/uf/me_messages';
  private _getUserInfoUrl = 'https://leke.crewcall.no/uf/me';
  private _getJobsUrl = "https://leke.crewcall.no/uf/me_jobs";
  private _getEventsUrl = 'https://leke.crewcall.no/uf/me_calendar';
  private _getUserProfile = 'https://leke.crewcall.no/uf/me_profile';
  private _getJobsLog = 'https://leke.crewcall.no/uf/me_joblog';
  private _getFiles = 'https://leke.crewcall.no/uf/me_files';
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  getNotes() {
    return this.http.get(this._getNotesUrl, { headers: this.headers });
  }

  archiveNote(archiveNoteUrl: any) {
    return this.http.post(archiveNoteUrl, { headers: this.headers });
  }

  getNotesInterface(): Observable<INote[]> {
    return this.http.get<INote[]>(this._getNotesUrl, { headers: this.headers });
  }

  getUserInfo() {
    return this.http.get(this._getUserInfoUrl, { headers: this.headers });
  }

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

  getJobs(): Observable<Jobs> {
    return this.http.get<Jobs>(this._getJobsUrl, { headers: this.headers });
  }


  getJobsByMonth(params): Observable<Jobs> {
    return this.http.get<Jobs>(this._getJobsUrl, { headers: this.headers, params });
  }

  // getEvents() {
  //   return this.http.get(this._getEventsUrl, { headers: this.headers });
  // }

  // public getEvents(): Observable<any> {
  //     const data: any = [{
  //             "id": 112,
  //             "title": 'test',
  //             "start": "2019-03-25T08:00:00+01:00",
  //             "end": "2019-03-25T14:00:00+01:00",
  //             "color": "red",
  //             "className": "visible"
  //     },
  //     {        "id": 113,
  //             "title": 'test',
  //             "start": "2019-03-26T08:00:00+01:00",
  //             "end": "2019-03-26T14:00:00+01:00",
  //             "color": "red",
  //             "className": "visible"
  //     },
  //     {        "id": 113,
  //             "title": 'test',
  //             "start": "2019-03-28T08:00:00+01:00",
  //             "end": "2019-03-28T14:00:00+01:00",
  //             "color": "blue",
  //             "className": "visible"
  //     }
  //   ];
  //     return of(data);
  // }

  public postSignUpJob(signUpURL, params) {
    return this.http.post(signUpURL, params);
  }

  public deleteInterestJob(deleteInterestJobURL, params) {
    return this.http.post(deleteInterestJobURL, params);
  }

  public getProfile() {
    return this.http.get(this._getUserProfile, { headers: this.headers });
  }

  public getJobsLog() {
    return this.http.get(this._getJobsLog, { headers: this.headers });
  }

  public getFiles() {
    return this.http.get(this._getFiles, { headers: this.headers });
  }
}
