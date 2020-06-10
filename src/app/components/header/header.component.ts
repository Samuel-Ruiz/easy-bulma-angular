import {Component, Input, ViewChild} from '@angular/core';
import {HeaderModel} from '../../models/components/header/header.model';
import {HeaderFactory} from './header-factory';
import {HeaderShop} from './header-shop';
import {AbstractEbaComponent} from '../factory/interfaces/abstract-eba.component';
import {FactoryComponent} from '../factory/factory.component';

@Component({
  selector: 'eba-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements AbstractEbaComponent {

  @Input() model: HeaderModel;
  @ViewChild('factoryComponent', {read: FactoryComponent, static: false}) factoryComponent!: FactoryComponent;

  factory: HeaderFactory = new HeaderFactory();

  constructor() {
    this.model = new HeaderModel();
  }

  getName(): string {
    return 'header';
  }

  getChildren() {
    return HeaderShop;
  }
}
