import { Component, OnInit } from '@angular/core';
import {EbaComponentInterface} from '../interfaces/eba-component.interface';

@Component({
  selector: 'eba-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.sass']
})
export class CalendarComponent implements EbaComponentInterface, OnInit {

  viewDate: Date = new Date();
  events = [];

  constructor() { }

  ngOnInit(): void {
  }

  getChildren() {
    return null;
  }

  getName(): string {
    return 'calendar';
  }

  setConfig(config: any) {
  }

}
