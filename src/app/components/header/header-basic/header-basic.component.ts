import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {HeaderModel} from '../../../models/components/header/header.model';
import {TypeResolver} from '../../../models/resolvers/commons/type.resolver';
import {StyleResolver} from '../../../models/resolvers/commons/style.resolver';
import {EbaComponentInterface} from '../../interfaces/eba-component.interface';

@Component({
  selector: 'eba-header-basic',
  templateUrl: './header-basic.component.html',
  styleUrls: ['./header-basic.component.sass']
})
export class HeaderBasicComponent implements EbaComponentInterface {

  @Input() toggleNav = false;
  @Input() headerConfig: HeaderModel = new HeaderModel();
  typeResolver: TypeResolver = new TypeResolver();
  styleResolver: StyleResolver = new StyleResolver();

  constructor() {
  }

  public setConfig(headerModel: HeaderModel) {
    this.headerConfig = headerModel;
  }

  public getName(): string {
    return 'basic';
  }

  public getChildren() {
    return null;
  }
}
