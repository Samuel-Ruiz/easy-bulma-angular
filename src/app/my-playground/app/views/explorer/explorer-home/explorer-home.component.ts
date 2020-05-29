import {Component, OnInit, ViewChild} from '@angular/core';
import {NotificationService} from '../../../../../services/notification.service';
import {HeaderComponent} from '../../../../../components/header/header.component';
import {EbaShop} from '../../../../../components/eba-shop';
import {TableComponent} from '../../../../../components/table/table.component';
import {RestService} from '../../../../api/rest/rest.service';

@Component({
  selector: 'eba-pg-explorer-home',
  templateUrl: './explorer-home.component.html',
  styleUrls: ['./explorer-home.component.sass']
})
export class PGExplorerHomeComponent implements OnInit {
  @ViewChild('header', {static: true}) header: HeaderComponent;
  @ViewChild('table', {static: true}) table: TableComponent;

  message: string;
  styleString: string;
  styleList: string[];

  constructor(private restApi: RestService, private notify: NotificationService) {
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

    this.configTable();
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

  private configTable() {
    const header = ['id', 'title'];
    const columnsData = ['id', 'title'];
    this.restApi.getComments().subscribe(response => {
      this.table.setConfig({
        id: 'table',
        columns: {
          displayedColumns: columnsData,
          rows: response,
          alignment: [''],
        },
        headers: {
          headers: header,
          alignment: [''],
          icon: []
        },
      });
    });
  }
}
