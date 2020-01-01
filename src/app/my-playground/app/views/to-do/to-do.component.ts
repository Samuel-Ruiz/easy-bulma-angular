import { Component, OnInit } from '@angular/core';
import { RestService } from '../../../api/rest/rest.service';

@Component({
  selector: 'eba-pg-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.sass']
})
export class PGToDoComponent implements OnInit {

  rowSelected: number;
  comments: CommentModel[] = [];

  constructor(public api: RestService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.api.getComments().subscribe( response => {
      this.comments = response;
    });
  }

  isSelected(index) {
    this.rowSelected = this.rowSelected === index ? -1 : index;
  }
}
