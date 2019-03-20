import { Component, OnInit } from '@angular/core';
import { APIService } from '../../services/api.service';

@Component({
  selector: 'app-absence',
  templateUrl: './absence.component.html',
  styleUrls: ['./absence.component.css']
})
export class AbsenceComponent implements OnInit {
  public absences =  <any>[];
  constructor(private apiService: APIService) {
    this.apiService.getProfile()
      .subscribe(data => {
         this.absences = Array.of(data);
      }, error => console.error(error));
  }

  ngOnInit() {
  }

}
