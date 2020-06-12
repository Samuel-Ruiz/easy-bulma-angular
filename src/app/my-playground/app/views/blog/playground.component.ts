import {Component, OnInit, ViewChild} from '@angular/core';
import {BreadcrumbComponent} from '../../../../components/breadcrumb/breadcrumb.component';
import {HeaderBasicComponent} from '../../../../components/header/header-basic/header-basic.component';


@Component({
  selector: 'eba-pg-blog-container',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.sass']
})
export class PGBlogContainerComponent implements OnInit {
  title = 'playground';
  @ViewChild('breadcrumb', {read: true, static: false}) breadcrumb: BreadcrumbComponent;
  @ViewChild('header', {read: true, static: false}) header: HeaderBasicComponent;

  constructor() {
  }

  ngOnInit() {
    console.log('--- Loading eba-pg-blog-container ---');
    /*
    this.index.setParams({
      id: 'index',
      component: 'blog',
      title: 'My company',
      subtitle: 'Powered by me',
      brandImg: 'https://bulma.io/images/bulma-logo.png',
      brandRef: 'https://bulma.io/documentation/',
      style: 'isPrimary',
      navBarLeft: [
        {
          itemName: 'Home',
          itemRef: '/playground/blog/home',
        },
        {
          itemName: 'Recipes',
          itemRef: '/playground/blog/recipes',
        },        {
          itemName: 'Events',
          itemRef: '/playground/blog/events',
        },
        {
          itemName: 'About',
          itemRef: '/playground/blog/about',
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
      // TODO orientation!! or alignment?
      orientation: 'centered',
      size: 'large',
      separator: 'bullet',
    });
     */
  }
}
