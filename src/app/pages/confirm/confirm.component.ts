import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
declare var $: any;

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
  public JobType = "assigned";
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
