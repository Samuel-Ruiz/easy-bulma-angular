import {Component, OnInit, ViewChild} from '@angular/core';
import {BreadcrumbComponent} from '../../components/breadcrumb/breadcrumb.component';
import {HeaderBasicComponent} from '../../components/header/header-basic/header-basic.component';
import {HeaderModel} from '../../models/components/header/header.model';
import {NavbarItemModel} from '../../models/components/header/navbarItem.model';

@Component({
  selector: 'eba-play-ground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.sass']
})
export class PGContainerComponent implements OnInit {
  title = 'playground';
  @ViewChild('breadcrumb',  {read: true, static: false}) breadcrumb: BreadcrumbComponent;
  @ViewChild('header',  {read: true, static: false}) header: HeaderBasicComponent;
  headerModel: HeaderModel;

  constructor() {
    this.headerModel = this.buildHeaderModel('basic');
  }

  ngOnInit() {
    console.log('--- Loading playgroung ---');
  }

  private buildHeaderModel(component) {
    const model = new HeaderModel();

    model.id = 'header';
    model.component = component;
    model.title = 'My company - ' + component;
    model.subtitle = 'Powered by me';
    model.brandImg = 'https://bulma.io/images/bulma-logo.png';
    model.brandRef = 'https://bulma.io/documentation/';
    model.style = 'isPrimary';

    const navBarLeft1 = new NavbarItemModel();
    navBarLeft1.itemName = 'Home';
    navBarLeft1.itemRef = '/playground/explorer/home';

    const navBarLeft2 = new NavbarItemModel();
    navBarLeft2.itemName = 'Table';
    navBarLeft2.itemRef = '/playground/explorer/table';
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

    model.navBarLeft = navBarLeft;
    model.navBarRight = navBarRight;

    return model;
  }
}


