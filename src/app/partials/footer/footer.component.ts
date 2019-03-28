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
    this.apiService.getJobs()
        .subscribe(data => {
          // this.jobs = Array.of(data);
          this.dataService.changeConfirm_Jobs_Count(data.assigned_count);
          this.dataService.changeMy_Jobs_Count(data.confirmed_count);
          this.dataService.changeSignup_Jobs_Count(data.opportunities_count);
          this.dataService.changeSignedup_Jobs_Count(data.interested_count);
        }, error => console.error(error));

    this.dataService.current_confirm_jobs_count.subscribe(count => this.confirm_count = count);
    this.dataService.current_myjob_count.subscribe(count => this.myjob_count = count);
    this.dataService.current_signup_jobs_count.subscribe(count => this.signup_count = count);
    }

  ngOnInit() {

  }

}
