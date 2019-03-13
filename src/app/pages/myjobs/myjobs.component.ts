import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
declare var $: any;

@Component({
  selector: 'app-myjobs',
  templateUrl: './myjobs.component.html',
  styleUrls: ['./myjobs.component.css']
})
export class MyjobsComponent implements OnInit {
  public JobType = "confirmed";
  months;
  selectedMonth = -1;
  constructor(private dataService: DataService) {
    this.months = dataService.getMonthsList();
  }

  ngOnInit() {
    $('.selectpicker').selectpicker();
  }

  filterMonth(value) {
    this.selectedMonth = value;
  }

}
