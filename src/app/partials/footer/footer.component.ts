import { Component, OnInit, Input } from '@angular/core';
import { APIService } from '../../services/api.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() myjobs;
  confirm_count: Number;
  myjob_count: Number;
  signup_count: Number;

  constructor(private apiService: APIService, private dataService: DataService) {
    // this.apiService.getJobs()
    //     .subscribe(data => {
    //       this.jobs = Array.of(data);
    //       this.confirm_count = (typeof this.jobs[0].confirm_job.length === 'undefined') ? 0 : this.jobs[0].confirm_job.length;
    //       this.interested_count = (typeof this.jobs[0].interested.length === 'undefined') ? 0 : this.jobs[0].interested.length;
    //     }, error => console.error(error));

    this.dataService.current_confirm_jobs_count.subscribe(count => this.confirm_count = count);
    this.dataService.current_myjob_count.subscribe(count => this.myjob_count = count);
    this.dataService.current_signup_jobs_count.subscribe(count => this.signup_count = count);
    }

  ngOnInit() {
  }

}
