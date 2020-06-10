import {Component, OnInit, ViewChild} from '@angular/core';
import {BreadcrumbComponent} from '../../components/breadcrumb/breadcrumb.component';
import {HeaderBasicComponent} from '../../components/header/header-basic/header-basic.component';

@Component({
  selector: 'eba-play-ground',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class PGContainerComponent implements OnInit {
  title = 'playground';
  @ViewChild('breadcrumb',  {read: true, static: false}) breadcrumb: BreadcrumbComponent;
  @ViewChild('header',  {read: true, static: false}) header: HeaderBasicComponent;

  constructor() {}

  ngOnInit() {
    console.log('--- Loading playgroung ---');
    /*
    this.header.setParams({
      id: 'header',
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
    this.breadcrumb.setParams({
      size: 'large',
      separator: 'bullet',
    });
     */
  }
}


