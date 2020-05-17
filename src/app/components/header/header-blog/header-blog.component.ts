import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {HeaderModel} from '../../../models/components/header/header.model';
import {TypeResolver} from '../../../models/resolvers/commons/type.resolver';
import {StyleResolver} from '../../../models/resolvers/commons/style.resolver';
import {EbaComponentInterface} from '../../interfaces/eba-component.interface';

@Component({
  selector: 'eba-header-blog',
  templateUrl: './header-blog.component.html',
  styleUrls: ['./header-blog.component.sass']
})
export class HeaderBlogComponent implements EbaComponentInterface, AfterViewInit {
  @Input() toggleNav = false;
  @Input() headerConfig: HeaderModel = new HeaderModel();
  typeResolver: TypeResolver = new TypeResolver();
  styleResolver: StyleResolver = new StyleResolver();

  constructor() {
  }

  ngAfterViewInit(): void {
  }

  public setConfig(headerModel: HeaderModel) {
    this.headerConfig = headerModel;
  }

  getName(): string {
    return 'blog';
  }

  getChildren() {
    return null;
  }
}
