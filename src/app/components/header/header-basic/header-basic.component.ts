import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {HeaderModel} from '../../../models/components/header/header.model';
import {TypeResolver} from '../../../models/resolvers/commons/type.resolver';
import {StyleResolver} from '../../../models/resolvers/commons/style.resolver';
import {EbaAbstractComponent} from '../../factory/interfaces/eba-abstract-component';

@Component({
  selector: 'eba-header-basic',
  templateUrl: './header-basic.component.html',
  styleUrls: ['./header-basic.component.sass']
})
export class HeaderBasicComponent extends EbaAbstractComponent {

  @Input() toggleNav = false;
  @Input() model: HeaderModel = new HeaderModel();
  typeResolver: TypeResolver = new TypeResolver();
  styleResolver: StyleResolver = new StyleResolver();

  constructor() {
    super();
  }

  public getName(): string {
    return 'basic';
  }

  public getChildren() {
    return null;
  }
}
