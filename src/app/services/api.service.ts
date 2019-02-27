import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { INote, Jobs } from './interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  

  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  getNotes() {
    return this.http.get(this._getNotesUrl, { headers: this.headers });
  }

  getNotesInterface(): Observable<INote[]> {
    return this.http.get<INote[]>(this._getNotesUrl, { headers: this.headers });
  }

  getUserInfo() {
    return this.http.get(this._getUserInfoUrl, { headers: this.headers });
  }

  getJobs(): Observable<Jobs> {
    return this.http.get<Jobs>(this._getJobsUrl, { headers: this.headers });
  }

  getEvents() {
    return this.http.get(this._getEventsUrl, { headers: this.headers });
  }

  // public getEvents(): Observable<any> {
  //     const data: any = [{
  //             "id": 112,
  //             "title": '<div class="circle-orange"></div><div class="circle-green"></div><div class="circle-red"></div>',
  //             "start": "2019-03-25T08:00:00+01:00",
  //             "end": "2019-03-25T14:00:00+01:00",
  //             "color": "transparent"
  //     },
  //     {        "id": 113,
  //             "title": '<div class="circle-orange"></div><div class="circle-green"></div><div class="circle-red"></div>',
  //             "start": "2019-03-26T08:00:00+01:00",
  //             "end": "2019-03-26T14:00:00+01:00",
  //             "color": "transparent"
  //     },
  //     {        "id": 113,
  //             "title": '<div class="circle-orange"></div><div class="circle-green"></div></div>',
  //             "start": "2019-03-27T08:00:00+01:00",
  //             "end": "2019-03-28T14:00:00+01:00",
  //             "color": "transparent"
  //     }
  //   ];
  //     return of(data);
  // }
}
