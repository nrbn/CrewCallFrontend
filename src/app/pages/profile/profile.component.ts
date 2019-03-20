import { Component, OnInit } from '@angular/core';
import { APIService } from '../../services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public profileModel =  <any>[];
  constructor(private apiService: APIService) {
    this.apiService.getProfile()
      .subscribe(data => {
         this.profileModel = Array.of(data);
      }, error => console.error(error));
  }

  ngOnInit() {

  }

}
