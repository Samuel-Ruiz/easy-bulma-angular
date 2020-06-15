import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'eba-pg-explorer-home',
  templateUrl: './explorer-home.component.html',
  styleUrls: ['./explorer-home.component.sass']
})
export class PGExplorerHomeComponent implements OnInit {

  ngOnInit() {
    console.log('--- Loading Home ---');
  }
}
