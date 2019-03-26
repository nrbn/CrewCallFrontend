import { Component, OnInit } from '@angular/core';
import { APIService } from '../../services/api.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {

  public files =  <any>[];
  constructor(private apiService: APIService) {
    this.apiService.getFiles()
      .subscribe(data => {
         this.files = Array.of(data);
      }, error => console.error(error));
  }

  ngOnInit() {
  }

}
