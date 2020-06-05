import { Component, OnInit } from '@angular/core';
import {AbstractEbaComponent} from '../factory/interfaces/abstract-eba.component';

@Component({
  selector: 'eba-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.sass']
})
export class CalendarComponent implements AbstractEbaComponent, OnInit {

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

  setParams(config: any) {
  }

}
