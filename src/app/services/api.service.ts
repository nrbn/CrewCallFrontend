import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { INote, Jobs } from './interface';
import { Observable, of, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  private _getNotesUrl = '../../uf/me_notes';
  private _getUserInfoUrl = '../../uf/me';
  private _getJobsUrl = "../../uf/me_jobs";
  private _getUserProfile = '../../uf/me_profile';
  private _getJobsLog = '../../uf/me_joblog';
  private _getFiles = '../../uf/me_files';
  private _changePassword = '../../uf/me_password';
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  getNotes(limited) {
    const params = {"archive" : (limited ? 0 : 1).toString()};
    return this.http.get(this._getNotesUrl, { headers: this.headers, params: params });
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

  getJobs(): Observable<Jobs> {
    return this.http.get<Jobs>(this._getJobsUrl, { headers: this.headers });
  }

  getJobsByMonth(params): Observable<Jobs> {
    return this.http.get<Jobs>(this._getJobsUrl, { headers: this.headers, params });
  }

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

  public getCangePassword() {
    return this.http.get(this._changePassword, { headers: this.headers });
  }

  public postCangePassword(params) {
    return this.http.post(this._changePassword, params);
  }
}
