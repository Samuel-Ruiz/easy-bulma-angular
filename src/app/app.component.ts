import {Component, OnInit} from '@angular/core';
import {PGAppComponent} from './my-playground/app/app.component';

@Component({
  selector: 'eba-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  constructor() {
    console.log('--- HOLA ---');
  }

  ngOnInit(): void {}
}

