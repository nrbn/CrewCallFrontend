import { Component, OnInit } from '@angular/core';
import { APIService } from '../../services/api.service';

@Component({
  selector: 'app-jobslog',
  templateUrl: './jobslog.component.html',
  styleUrls: ['./jobslog.component.css']
})
export class JobslogComponent implements OnInit {

  public jobslog =  <any>[];
  constructor(private apiService: APIService) {
    this.apiService.getJobsLog()
      .subscribe(data => {
         this.jobslog = Array.of(data);
      }, error => console.error(error));
  }

  ngOnInit() {
  }

}
