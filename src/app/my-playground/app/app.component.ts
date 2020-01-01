import {Component, OnInit, ViewChild} from '@angular/core';
import {BreadcrumbComponent} from '../../components/breadcrumb/breadcrumb.component';
import {HeaderComponent} from '../../components/header/header.component';

@Component({
  selector: 'eba-play-ground',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class PGAppComponent implements OnInit {
  title = 'playground';
  @ViewChild('breadcrumb') breadcrumb: BreadcrumbComponent;
  @ViewChild('header') header: HeaderComponent;

  constructor() {}

  ngOnInit() {
    console.log('--- Loading playgroung ---');
    this.header.setConfig({
      title: 'My company',
      subtitle: 'Powered by me',
      brandImg: 'https://bulma.io/images/bulma-logo.png',
      brandRef: 'https://bulma.io/documentation/',
      style: 'isPrimary',
      navBarLeft: [
        {
          itemName: 'Home',
          itemRef: '/home',
        },
        {
          itemName: 'ToDo',
          itemRef: '/todo',
        },
        {
          itemName: 'Table',
          itemRef: '/table',
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


