import {Component, OnInit, ViewChild} from '@angular/core';
import {BreadcrumbComponent} from '../../../../components/breadcrumb/breadcrumb.component';
import {HeaderBasicComponent} from '../../../../components/header/header-basic/header-basic.component';


@Component({
  selector: 'eba-pg-blog-container',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.sass']
})
export class PGExplorerContainerComponent implements OnInit {
  title = 'playground';
  @ViewChild('breadcrumb') breadcrumb: BreadcrumbComponent;
  @ViewChild('header') header: HeaderBasicComponent;

  constructor() {}

  ngOnInit() {
    console.log('--- Loading eba-pg-explorer-container ---');
    this.header.setConfig({
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
        },        {
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
    this.breadcrumb.setConfig({
      // TODO orientation!! or aligment?
      orientation: 'centered',
      size: 'large',
      separator: 'bullet',
    });
  }
}
