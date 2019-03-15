import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { APIService } from '../../services/api.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
})
export class JobsComponent implements OnInit, OnChanges {
  currentMonth;
  initialized = false;
  @Input() public filter;
  filterValue: any;
  jobs:  Object[];

  signUpCSRF_TOKEN: string;
  signUpURL: string;
  deleteInterestCSRF_TOKEN: string;
  deleteInterestURL: string;

  confirmCSRF_TOKEN: string;
  confirmURL: string;

  @Input() public filterMonth;
  filter_month: any;
  googleMapsIconURL = "images/250px-GoogleMaps_logo.svg.png";


  @Input() limited;
  limit: Number;
  constructor(private apiService: APIService, private dataService: DataService) {
  }

  ngOnInit() {
    this.currentMonth = -1;
    this.filterValue = this.filter;
    this.filter_month = this.filterMonth;
    this.getJobs();
    this.initialized = true;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.currentMonth = -1;
    if (this.initialized) {
      if (typeof changes.filter !== "undefined") {
        this.filterValue = this.filter;
        this.filterValue = changes.filter.currentValue;
        this.getJobs();
      }

      if (typeof changes.filterMonth !== "undefined") {
        this.filter_month = this.filterMonth;
        this.filter_month = changes.filterMonth.currentValue;
        this.getJobsByMonth();
      }
    }
  }

  getJobs() {
    this.apiService.getJobs()
        .subscribe(data => {
          // this.jobs = Array.of(data);
          // this.jobs = data;
          this.setUpData(data);
          this.dataService.changeConfirm_Jobs_Count(data.assigned_count);
          this.dataService.changeMy_Jobs_Count(data.confirmed_count);
          this.dataService.changeSignup_Jobs_Count(data.opportunities_count);
          this.dataService.changeSignedup_Jobs_Count(data.interested_count);
        }, error => console.error(error));
  }

  getJobsByMonth() {
    const params = {month: + (Number(this.filter_month) + 1)};
    this.apiService.getJobsByMonth(params)
        .subscribe(data => {
          this.setUpData(data);
        }, error => console.error(error));
  }

  setUpData(data) {
    const opportunities = data.opportunities ? data.opportunities : [];
    const interested = data.interested ? data.interested : [];
    const confirmed = data.confirmed ? data.confirmed : [];
    const assigned = data.assigned ? data.assigned : [];

    this.signUpCSRF_TOKEN = data.signup_shift._csrf_token;
    this.signUpURL = data.signup_shift.url;

    this.deleteInterestCSRF_TOKEN = data.delete_interest._csrf_token;
    this.deleteInterestURL = data.delete_interest.url;

    this.confirmCSRF_TOKEN = data.confirm_job._csrf_token;
    this.confirmURL = data.confirm_job.url;

    if (this.filterValue === "all") {
      this.jobs = this.jobs.concat(opportunities, confirmed, confirm, assigned, interested);

    } else if (this.filterValue === "signup") {
      this.currentMonth = -1;
      this.jobs = opportunities;

    } else if (this.filterValue === "confirmed") {
      this.jobs = confirmed;

    } else if (this.filterValue === "assigned") {
      this.jobs = assigned;

    } else if (this.filterValue === "signedup") {
      this.jobs = interested;
    }

    if (this.limited) {
      this.limit = 5;
    } else {
      this.limit = this.jobs.length;
    }

  }

  sameDayCheck(from_, to_) {
    from_ = new Date(from_);
    to_ = new Date(to_);
    if (from_.getDate() === to_.getDate()) {
      return true;
    }
    return false;
  }

  setMonth(month) {
    this.currentMonth = month;
  }

  signUpSubmit(form: any) {
    if (form.valid) {
      const params = { _csrf_token: form.value.opportunity.csfr_token, comment: form.value.commentContent };
      let url = this.signUpURL;
      url = url.replace("ID", form.value.opportunity.id);
      this.apiService.postSignUpJob(url, params)
        .subscribe(data => {
          this.getJobs();
        }, error => console.error(error));
    }
  }

  deleteInterestJob(id) {
    const params = { _csrf_token: this.deleteInterestCSRF_TOKEN };
    let url = this.deleteInterestURL;
    url = url.replace("ID", id);
    this.apiService.deleteInterestJob(url, params)
        .subscribe(data => {
          this.getJobs();
        }, error => console.error(error));
  }

  confirmJob(id) {
    const params = { _csrf_token: this.confirmCSRF_TOKEN };
    let url = this.confirmURL;
    url = url.replace("ID", id);
    this.apiService.deleteInterestJob(url, params)
        .subscribe(data => {
          this.getJobs();
        }, error => console.error(error));
  }
}
