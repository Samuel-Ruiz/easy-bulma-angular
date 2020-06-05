import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {NotificationService} from '../../../../../services/notification.service';
import {HeaderComponent} from '../../../../../components/header/header.component';
import {EbaShop} from '../../../../../components/eba-shop';
import {TableComponent} from '../../../../../components/table/table.component';
import {RestService} from '../../../../api/rest/rest.service';
import {HeaderBasicComponent} from '../../../../../components/header/header-basic/header-basic.component';
import {HeaderModel} from '../../../../../models/components/header/header.model';
import {NavbarItemModel} from '../../../../../models/components/header/navbarItem.model';
import {HeaderBlogComponent} from '../../../../../components/header/header-blog/header-blog.component';
import {TableModel} from '../../../../../models/components/table/table.model';

@Component({
  selector: 'eba-pg-explorer-home',
  templateUrl: './explorer-home.component.html',
  styleUrls: ['./explorer-home.component.sass']
})
export class PGExplorerHomeComponent implements AfterViewInit {
  @ViewChild('header', {static: false}) header: HeaderComponent;
  @ViewChild('table', {static: false}) table: TableComponent;

  message: string;
  styleString = 'basic';
  styleList: string[] = EbaShop.getItems().find(item => {
    return item.label === 'header';
  }).children.getLabels();
  headerModel = new HeaderModel();
  tableModel = new TableModel();
  tableData;

  constructor(private restApi: RestService, private notify: NotificationService) {
  }

  ngAfterViewInit() {
    console.log('--- Loading eba-pg-explorer-home ---');
    console.log(this.header);
    console.log('Type -> ', this.styleString, typeof this.styleString);
    this.headerModel.component = this.styleString;
    this.headerModel.title = 'My company';
    this.headerModel.subtitle = 'Powered by me';
    this.headerModel.brandImg = 'https://bulma.io/images/bulma-logo.png';
    this.headerModel.brandRef = 'https://bulma.io/documentation/';
    this.headerModel.style = 'isPrimary';

    const navBarLeft1 = new NavbarItemModel();
    navBarLeft1.itemName = 'Home';
    navBarLeft1.itemRef = '/playground/explorer/home';

    const navBarLeft2 = new NavbarItemModel();
    navBarLeft2.itemName = 'Recipes';
    navBarLeft2.itemRef = '/playground/explorer/recipes';
    const navBarLeft3 = new NavbarItemModel();
    navBarLeft3.itemName = 'Events';
    navBarLeft3.itemRef = '/playground/explorer/events';
    const navBarLeft4 = new NavbarItemModel();
    navBarLeft4.itemName = 'About';
    navBarLeft4.itemRef = '/playground/explorer/about';


    const navBarItemRight = new NavbarItemModel();
    navBarItemRight.type = 'isButton';
    navBarItemRight.itemName = 'Log in';
    navBarItemRight.style = 'isPrimary';


    const navBarLeft = [];
    navBarLeft.push(navBarLeft1);
    navBarLeft.push(navBarLeft2);
    navBarLeft.push(navBarLeft3);
    navBarLeft.push(navBarLeft4);

    const navBarRight = [];
    navBarRight.push(navBarItemRight);

    this.headerModel.navBarLeft = navBarLeft;
    this.headerModel.navBarRight = navBarRight;
    this.header.setParams(this.headerModel);
    this.getComments();
  }

  sendNotification() {
    this.notify.sendNotification(this.buildMessage(), this.styleString);
    this.refreshModel();
    this.header.setParams(this.headerModel);
    this.setTableParams();
  }

  buildMessage(): string {
    this.message = 'The selected style is [' + this.styleString + ']';
    return this.message;
  }

  private refreshModel() {
    this.headerModel.component = this.styleString;
  }

  private setTableParams() {
    if (this.tableData) {
      this.tableData.forEach((e) => {
        let _tools = new HeaderBasicComponent();
        if (this.styleString === 'blog') {
          _tools = new HeaderBlogComponent();
        }
        _tools.setParams(this.headerModel);
        e.tools = {_tools};
      });

      this.tableModel = ({
        id: 'table',
        columns: [
          {
            header: {
              header: 'Id',
              alignment: '',
              icon: null
            },
            alignment: '',
            entryName: 'id'
          },
          {
            header: {
              header: 'Title',
              alignment: '',
              icon: null
            },
            alignment: '',
            entryName: 'title'
          },
          {
            header: {
              header: 'Tools',
              alignment: '',
              icon: null
            },
            alignment: '',
            entryName: 'tools'
          }
        ],
        data: this.tableData.filter((element, index) => {
          return index < 3;
        }),
      });
      this.table.setParams(this.tableModel);
    }
  }

  private getComments() {
    this.restApi.getComments().subscribe(response => {
      this.tableData = response;
      this.setTableParams();
    });
  }
}
