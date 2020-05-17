import {AfterContentInit, AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {NotificationService} from '../../../../../services/notification.service';
import {HeaderComponent} from '../../../../../components/header/header.component';
import {EbaShop} from '../../../../../components/eba-shop';

@Component({
  selector: 'eba-pg-explorer-home',
  templateUrl: './explorer-home.component.html',
  styleUrls: ['./explorer-home.component.sass']
})
export class PGExplorerHomeComponent implements OnInit {
  @ViewChild('header', {static: true}) header: HeaderComponent;

  message: string;
  styleString: string;
  styleList: string[];

  constructor(private notify: NotificationService) {
    this.styleList = ['isPrimary', 'isDanger', 'isDark', 'isLink', 'isInfo', 'isSuccess', 'isWarning'];
  }

  ngOnInit() {
    console.log('--- Loading eba-pg-explorer-home ---');
    console.log(this.header);
    this.styleList = EbaShop.getLabels();

    this.styleList = EbaShop.getItems().find(item => {
      return item.label === 'header';
    }).children.getLabels();

    this.header.refresh({
      component: 'blog',
      title: 'My company',
      subtitle: 'Powered by me',
      brandImg: 'https://bulma.io/images/bulma-logo.png',
      brandRef: 'https://bulma.io/documentation/',
      style: 'isPrimary',
      navBarLeft: [
        {
          itemName: 'Home',
          itemRef: '/playground/explorer/home',
        },
        {
          itemName: 'Recipes',
          itemRef: '/playground/explorer/recipes',
        }, {
          itemName: 'Events',
          itemRef: '/playground/explorer/events',
        },
        {
          itemName: 'About',
          itemRef: '/playground/explorer/about',
        },
      ],
      navBarRight: [
        {
          type: 'isButton',
          itemName: 'Log in',
          style: 'isPrimary'
        }
      ]
    });
  }

  sendNotification() {
    this.notify.sendNotification(this.buildMessage(), this.styleString);
    this.header.refresh({
      component: this.styleString,
      title: 'My company',
      subtitle: 'Powered by me',
      brandImg: 'https://bulma.io/images/bulma-logo.png',
      brandRef: 'https://bulma.io/documentation/',
      style: 'isPrimary',
      navBarLeft: [
        {
          itemName: 'Home',
          itemRef: '/playground/explorer/home',
        },
        {
          itemName: 'Recipes',
          itemRef: '/playground/explorer/recipes',
        }, {
          itemName: 'Events',
          itemRef: '/playground/explorer/events',
        },
        {
          itemName: 'About',
          itemRef: '/playground/explorer/about',
        },
      ],
      navBarRight: [
        {
          type: 'isButton',
          itemName: 'Log in',
          style: 'isPrimary'
        }
      ]
    });
  }

  buildMessage(): string {
    this.message = 'The selected style is [' + this.styleString + ']';
    return this.message;
  }
}
