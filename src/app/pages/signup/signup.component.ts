import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
declare var $: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public JobType = "signup";
  signupActive = true;
  signedupActive = false;

  signup_count: Number;
  signedup_count: Number;

  months = [];
  selectedMonth = -1;
  constructor(private dataService: DataService) {
    this.dataService.current_signup_jobs_count.subscribe(count => this.signup_count = count);
    this.dataService.current_signedup_jobs_count.subscribe(count => this.signedup_count = count);
    this.months = dataService.getMonthsList();
  }

  ngOnInit() {
    $('.selectpicker').selectpicker();
  }
  changeJobType(event) {
    this.JobType = event.target.value;
    this.signedupActive = !this.signedupActive;
    this.signupActive = !this.signupActive;
  }

  filterMonth(value) {
    this.selectedMonth = value;
  }
}
