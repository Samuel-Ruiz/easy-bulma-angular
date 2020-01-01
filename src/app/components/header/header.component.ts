import {Component, Input, OnInit} from '@angular/core';
import {HeaderModel} from '../../models/components/header/header.model';
import {TypeResolver} from '../../models/resolvers/commons/type.resolver';
import {StyleResolver} from '../../models/resolvers/commons/style.resolver';

@Component({
  selector: 'eba-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  @Input() toggleNav = false;
  @Input() headerConfig: HeaderModel = new HeaderModel();
  typeResolver: TypeResolver = new TypeResolver();
  styleResolver: StyleResolver = new StyleResolver();

  constructor() {}

  ngOnInit(): void {}

  public setConfig(headerModel: HeaderModel) {
    this.headerConfig = headerModel;
  }
}
