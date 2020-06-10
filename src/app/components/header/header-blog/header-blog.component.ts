import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {HeaderModel} from '../../../models/components/header/header.model';
import {TypeResolver} from '../../../models/resolvers/commons/type.resolver';
import {StyleResolver} from '../../../models/resolvers/commons/style.resolver';
import {AbstractEbaComponent} from '../../factory/interfaces/abstract-eba.component';

@Component({
  selector: 'eba-header-blog',
  templateUrl: './header-blog.component.html',
  styleUrls: ['./header-blog.component.sass']
})
export class HeaderBlogComponent implements AbstractEbaComponent, AfterViewInit {
  @Input() toggleNav = false;
  @Input() model: HeaderModel = new HeaderModel();
  typeResolver: TypeResolver = new TypeResolver();
  styleResolver: StyleResolver = new StyleResolver();

  constructor() {
  }

  ngAfterViewInit(): void {
  }

  getName(): string {
    return 'blog';
  }

  getChildren() {
    return null;
  }
}
