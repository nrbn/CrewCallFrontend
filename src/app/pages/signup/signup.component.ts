import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public JobType = "signup";
  signupActive = true;
  signedupActive = false;

  constructor() { }

  ngOnInit() {
  }
  changeJobType(event) {
    this.JobType = event.target.value;
    this.signedupActive = !this.signedupActive;
    this.signupActive = !this.signupActive;
  }
}
