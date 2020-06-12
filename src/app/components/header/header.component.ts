import {Component, Input, ViewChild} from '@angular/core';
import {HeaderModel} from '../../models/components/header/header.model';
import {HeaderFactory} from './header-factory';
import {HeaderShop} from './header-shop';
import {EbaAbstractComponent} from '../factory/interfaces/eba-abstract-component';
import {FactoryComponent} from '../factory/factory.component';

@Component({
  selector: 'eba-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent extends EbaAbstractComponent {

  @Input() model: HeaderModel;
  @ViewChild('factoryComponent', {read: FactoryComponent, static: false}) factoryComponent!: FactoryComponent;

  factory: HeaderFactory = new HeaderFactory();

  constructor() {
    super();
    this.model = new HeaderModel();
  }

  getName(): string {
    return 'header';
  }

  getChildren() {
    return HeaderShop;
  }
}
