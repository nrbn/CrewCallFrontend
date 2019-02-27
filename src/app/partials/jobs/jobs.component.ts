import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange, ChangeDetectionStrategy } from '@angular/core';
import { APIService } from '../../services/api.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobsComponent implements OnInit, OnChanges {
  initialized = false;
  @Input() public filter;
  jobs:  Object[];

  constructor(private apiService: APIService) {
  }

  ngOnInit() {
    console.log("init", this.filter);
    this.initialized = true;
    this.getJobs();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.initialized) {
      console.log("test changes", changes);
      this.filter = changes.filter.currentValue;
      this.getJobs();
    }
  }

  getJobs() {
    this.apiService.getJobs()
        .subscribe(data => {
          // this.jobs = Array.of(data);
          // this.jobs = data;
          if (this.filter === "all") {
            const opportunities = data.opportunities ? data.opportunities : [];
            const interested = data.interested ? data.interested : [];
            const confirmed = data.confirmed ? data.confirmed : [];
            const confirm = data.confirm ? data.confirm : [];
            const assigned = data.assigned ? data.assigned : [];
            this.jobs = this.jobs.concat(opportunities, confirmed, confirm, assigned, interested);

          } else if (this.filter === "signup") {
            this.jobs = data.opportunities ? data.opportunities : [];
          } else if (this.filter === "confirmed") {
            this.jobs = data.confirmed ? data.confirmed : [];
          } else if (this.filter === "confirm") {
            this.jobs = data.confirm ? data.confirm : [];
          } else if (this.filter === "signedup") {
            this.jobs = data.confirm ? data.confirm : [];
          }
          console.log(this.filter);
        }, error => console.error(error));
  }
  sameDayCheck(from_, to_) {
    from_ = new Date(from_);
    to_ = new Date(to_);
    if (from_.getDate() === to_.getDate()) {
      return true;
    }
    return false;
  }
}
