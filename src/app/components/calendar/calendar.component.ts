import {Component, OnInit} from '@angular/core';
import {EbaAbstractComponent} from '../factory/interfaces/eba-abstract-component';

@Component({
  selector: 'eba-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.sass']
})
export class CalendarComponent extends EbaAbstractComponent implements OnInit {

  viewDate: Date = new Date();
  events = [];

  constructor() {
    super();
  }

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
