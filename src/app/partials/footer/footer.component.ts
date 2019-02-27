import { Component, OnInit, Input } from '@angular/core';
import { APIService } from '../../services/api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() myjobs;
  public jobs =  <any>[];
  confirm_count: number;
  interested_count: number;

  constructor(private apiService: APIService) {
    this.apiService.getJobs()
        .subscribe(data => {
          this.jobs = Array.of(data);
          this.confirm_count = (typeof this.jobs[0].confirm_job.length === 'undefined') ? 0 : this.jobs[0].confirm_job.length;
          this.interested_count = (typeof this.jobs[0].interested.length === 'undefined') ? 0 : this.jobs[0].interested.length;
        }, error => console.error(error));
    }

  ngOnInit() {
  }

}
