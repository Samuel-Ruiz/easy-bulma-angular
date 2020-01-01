import {Component, OnInit} from '@angular/core';
import {NotificationService} from '../../../../services/notification.service';

@Component({
  selector: 'eba-pg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class PGHomeComponent implements OnInit {

  message: string;
  styleString: string;
  styleList: ['isPrimary', 'isDanger', 'isDark', 'isLink', 'isInfo', 'isSuccess', 'isWarning'];
  constructor(private notify: NotificationService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
  }

  sendNotification() {
    this.notify.sendNotification(this.message, this.styleString);
  }
}
