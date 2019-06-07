import { Component, Input, OnInit } from '@angular/core';
import {HeaderModel} from '../../models/header/header.model';
import {ElementTypeModel} from '../../models/commons/elementType.model';
import {ElementStyleModel} from '../../models/commons/elementStyle.model';

@Component({
  selector: 'eba-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  @Input() toggleNav = false;
  @Input() headerConfig: HeaderModel = new HeaderModel();
  elementTypeModel: ElementTypeModel = new ElementTypeModel();
  elementStyleModel: ElementStyleModel = new ElementStyleModel();

  constructor() {
  }

  ngOnInit() {}

  setHeaderConfig(headerModel: HeaderModel) {
    this.headerConfig = headerModel;
  }
}
