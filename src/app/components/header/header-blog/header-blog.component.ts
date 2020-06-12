import {AfterViewInit, Component, Input} from '@angular/core';
import {HeaderModel} from '../../../models/components/header/header.model';
import {TypeResolver} from '../../../models/resolvers/commons/type.resolver';
import {StyleResolver} from '../../../models/resolvers/commons/style.resolver';
import {EbaAbstractComponent} from '../../factory/interfaces/eba-abstract-component';

@Component({
  selector: 'eba-header-blog',
  templateUrl: './header-blog.component.html',
  styleUrls: ['./header-blog.component.sass']
})
export class HeaderBlogComponent extends EbaAbstractComponent implements AfterViewInit {
  @Input() toggleNav = false;
  @Input() model: HeaderModel = new HeaderModel();
  typeResolver: TypeResolver = new TypeResolver();
  styleResolver: StyleResolver = new StyleResolver();

  constructor() {
    super();
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
