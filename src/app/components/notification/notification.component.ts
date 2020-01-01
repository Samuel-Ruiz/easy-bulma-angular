import {Component, OnInit} from '@angular/core';
import {NotificationService} from '../../services/notification.service';
import {timer} from 'rxjs';
import {StyleResolver} from '../../models/resolvers/commons/style.resolver';

@Component({
  selector: 'eba-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.sass']
})
export class NotificationComponent implements OnInit {

  message: string;
  style: string;
  notification = false;
  styleResolver: StyleResolver = new StyleResolver();

  constructor(private notify: NotificationService) {}

 ngOnInit(): void {
   this.notify.getMessage().subscribe( res => {
     this.message = res;
   });
   this.notify.getStyle().subscribe( res => {
     this.style = this.styleResolver.getValue(res);
   });
   this.notify.getNotification().subscribe(res => {
     this.notification = res;
     timer(5000).subscribe( () => {
       if (this.notification) {
        this.toggleNotification();
       }
     });
   });
 }

  toggleNotification() {
    this.notification = !this.notification;
  }
}

