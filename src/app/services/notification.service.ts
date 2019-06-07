import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  message: Subject<string> = new Subject<string>();
  style: Subject<string> = new Subject<string>();
  notification: Subject<boolean> = new Subject<boolean>();

  constructor() { }

  sendNotification(message: string, style: string) {
    this.message.next(message);
    this.style.next(style);
    this.notification.next(true);
  }

  getMessage() {
    return this.message;
  }

  getStyle() {
    return this.style;
  }

  getNotification() {
    return this.notification;
  }
}
