import { Component, OnInit, Input } from '@angular/core';
import { APIService } from '../../services/api.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes$: any;
  @Input() public filter;
  @Input() public limited;
  limit: Number;
  constructor(private apiService: APIService, private dataService: DataService) {
  }

  ngOnInit() {
    this.limited = JSON.parse(this.limited);
    this.getNotes();
  }

  getNotes() {
    this.apiService.getNotes(this.limited)
    .subscribe(
      data => {
        this.notes$ = (data);
        this.dataService.changeNotesArray(data);
        if (this.filter === "personal") {
          this.notes$ = this.notes$.personal;
        } else if (this.filter === "general") {
          this.notes$ = this.notes$.general;
        }

        if (this.limited) {
          this.limit = 5;
        } else {
          this.limit = this.notes$.length;
        }
      }
    );

    this.dataService.currentNotesArray.subscribe(array => {
      // console.log(array);
    });
  }

  arhiveNote(url, index) {
    const element = document.getElementById("item-" + index);
    $(element).addClass("animated zoomOut");
    this.apiService.archiveNote(url)
      .subscribe(data => {
        this.getNotes();
      }, error => console.error(error));
  }
}

