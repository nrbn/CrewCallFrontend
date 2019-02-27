import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private confirm_jobs_count = new BehaviorSubject<number>(0);
  current_confirm_jobs_count = this.confirm_jobs_count.asObservable();

  private intersted_jobs_count = new BehaviorSubject<number>(0);
  current_intersted_jobs_count = this.intersted_jobs_count.asObservable();

  private notesArray = new BehaviorSubject<any>([]);
  currentNotesArray = this.notesArray.asObservable();

  constructor() { }

  changeConfirm_Jobs_Count(count: number) {
    this.confirm_jobs_count.next(count);
  }

  changeInterested_Jobs_Count(count: number) {
    this.intersted_jobs_count.next(count);
  }

  changeNotesArray(array: any) {
    this.notesArray.next(array);
  }
}
