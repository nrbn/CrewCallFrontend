import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes, RouterModule } from '@angular/router';


@Component({
  selector: 'app-notespage',
  templateUrl: './notespage.component.html',
  styleUrls: ['./notespage.component.css']
})
export class NotespageComponent implements OnInit {
  public type = "";
  constructor(private route: ActivatedRoute) {
    this.route
      .data
      .subscribe(v => {
        this.type = v.type;
        console.log(this.type);
      });
  }

  ngOnInit() {
  }

}
