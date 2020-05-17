import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {BreadcrumbComponent} from '../../../../components/breadcrumb/breadcrumb.component';
import {HeaderComponent} from '../../../../components/header/header.component';


@Component({
  selector: 'eba-pg-blog-container',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.sass']
})
export class PGExplorerContainerComponent implements AfterViewInit {
  title = 'playground';
  @ViewChild('breadcrumb', {static: false}) breadcrumb: BreadcrumbComponent;
  @ViewChild('header', {static: false}) header: HeaderComponent;

  constructor() {}

  ngAfterViewInit() {
    console.log('--- Loading eba-pg-explorer-container ---');
    console.log(this.header);
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
