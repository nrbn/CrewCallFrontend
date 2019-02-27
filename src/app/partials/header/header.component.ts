import { Component, OnInit } from '@angular/core';
import { APIService } from '../../services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public meModel =  <any>[];
  public navbarModel = <any>{};
  constructor(private apiService: APIService) {
    this.apiService.getUserInfo()
      .subscribe(data => {
         this.meModel = Array.of(data);
         this.navbarModel.firstname =  this.meModel[0].firstname;
         this.navbarModel.lastname =  this.meModel[0].lastname;
         this.navbarModel.fullname = this.meModel[0].firstname + " " + this.meModel[0].lastname;
      }, error => console.error(error));
  }

  ngOnInit() {
  }
}
