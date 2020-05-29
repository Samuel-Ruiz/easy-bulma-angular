import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObserverService {

  private subscriber: Map<string, Subject<any>> = new Map<string, Subject<any>>();

  constructor() {
  }

  register(id: string, subscriber: Subject<any>) {
    this.subscriber.set(id, subscriber);
  }

  unregister(id: string) {
    this.subscriber.delete(id);
  }

  getSubject(id: string) {
    return this.subscriber.get(id);
  }

  getSubscribers() {
    return this.subscriber;
  }
}

export class DataObserverService {
  id: string;
  timeStamp: number;
  action: string;

  constructor(id, action) {
    this.id = id;
    this.action = action;
    this.timeStamp = new Date().getTime();
  }
}
