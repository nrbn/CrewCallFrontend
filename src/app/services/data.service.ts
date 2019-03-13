import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private myjob_count = new BehaviorSubject<Number>(0);
  current_myjob_count = this.myjob_count.asObservable();

  private confirm_jobs_count = new BehaviorSubject<Number>(0);
  current_confirm_jobs_count = this.confirm_jobs_count.asObservable();

  private signup_jobs_count = new BehaviorSubject<Number>(0);
  current_signup_jobs_count = this.signup_jobs_count.asObservable();

  private signedup_jobs_count = new BehaviorSubject<Number>(0);
  current_signedup_jobs_count = this.signedup_jobs_count.asObservable();

  private notesArray = new BehaviorSubject<any>([]);
  currentNotesArray = this.notesArray.asObservable();

  constructor() { }

  changeMy_Jobs_Count(count: Number) {
    this.myjob_count.next(count);
  }

  changeConfirm_Jobs_Count(count: Number) {
    this.confirm_jobs_count.next(count);
  }

  changeSignup_Jobs_Count(count: Number) {
    this.signup_jobs_count.next(count);
  }

  changeSignedup_Jobs_Count(count: Number) {
    this.signedup_jobs_count.next(count);
  }

  changeNotesArray(array: any) {
    this.notesArray.next(array);
  }

  getMonthsList() {
    return ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];
  }
}
