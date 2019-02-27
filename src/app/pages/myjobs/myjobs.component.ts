import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myjobs',
  templateUrl: './myjobs.component.html',
  styleUrls: ['./myjobs.component.css']
})
export class MyjobsComponent implements OnInit {
  public JobType = "confirmed";
  constructor() { }

  ngOnInit() {
  }

}
