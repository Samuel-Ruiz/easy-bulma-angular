import {Component, Input, OnInit, Type} from '@angular/core';
import {HeaderModel} from '../../../models/components/header/header.model';
import {TypeResolver} from '../../../models/resolvers/commons/type.resolver';
import {StyleResolver} from '../../../models/resolvers/commons/style.resolver';
import {EbaComponentInterface} from '../../interfaces/eba-component.interface';
import {HeaderInterface} from '../../interfaces/header.interface';

@Component({
  selector: 'eba-header-basic',
  templateUrl: './header-basic.component.html',
  styleUrls: ['./header-basic.component.sass']
})
export class HeaderBasicComponent implements HeaderInterface, OnInit {

  constructor() {}
  @Input() toggleNav = false;
  @Input() headerConfig: HeaderModel = new HeaderModel();
  typeResolver: TypeResolver = new TypeResolver();
  styleResolver: StyleResolver = new StyleResolver();

  ngOnInit(): void {}

  public setConfig(headerModel: HeaderModel) {
    this.headerConfig = headerModel;
  }

  public getName(): string {
    return 'basic';
  }
}
