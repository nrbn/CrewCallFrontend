import { Component, OnInit, Input } from '@angular/core';
import { APIService } from '../../services/api.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes$: any;
  @Input() public filter;

  constructor(private apiService: APIService) {
  }

  ngOnInit() {
    this.getNotes();
  }

  getNotes() {
    this.apiService.getNotes()
    .subscribe(
      data => {
        this.notes$ = (data);
        if (this.filter === "personal") {
          this.notes$ = this.notes$.personal;
        } else if (this.filter === "general") {
          this.notes$ = this.notes$.general;
        }
      }
    );
  }

  arhiveNote(url) {
    this.apiService.archiveNote(url)
    .subscribe(data => {
      // console.log("data", data);
      this.getNotes();
    }, error => console.error(error));
  }
}

