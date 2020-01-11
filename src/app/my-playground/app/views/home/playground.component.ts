import {Component, OnInit, ViewChild} from '@angular/core';
import {BreadcrumbComponent} from '../../../../components/breadcrumb/breadcrumb.component';
import {HeaderBasicComponent} from '../../../../components/header/header-basic/header-basic.component';

@Component({
  selector: 'eba-pg-home-container',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.sass']
})
export class PGHomeContainerComponent implements OnInit {
  title = 'playground';
  @ViewChild('breadcrumb') breadcrumb: BreadcrumbComponent;
  @ViewChild('header') header: HeaderBasicComponent;

  constructor() {}

  ngOnInit() {
    console.log('--- Loading eba-pg-home-container ---');
    this.header.setConfig({
      title: 'My company',
      subtitle: 'Powered by me',
      brandImg: 'https://bulma.io/images/bulma-logo.png',
      brandRef: 'https://bulma.io/documentation/',
      style: 'isPrimary',
      navBarLeft: [
        {
          itemName: 'Home',
          itemRef: '/playground/home',
        },
        {
          itemName: 'ToDo',
          itemRef: '/playground/todo',
        },
        {
          itemName: 'Table',
          itemRef: '/playground/table',
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
    this.breadcrumb.setConfig({
      size: 'large',
      separator: 'bullet',
    });
  }
}
