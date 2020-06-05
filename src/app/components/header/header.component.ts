import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
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
export class HeaderComponent implements AfterViewInit, AbstractEbaComponent {

  @Input() model: HeaderModel = new HeaderModel();
  @ViewChild('factoryComponent', {static: false}) factoryComponent!: FactoryComponent;

  factory: HeaderFactory = new HeaderFactory();

  ngAfterViewInit() {
    console.log('Header component -> ', this.model, this.factoryComponent, this.factory);
    this.factoryComponent.publish(this.model, this.factory);
  }

  public setParams(config: HeaderModel) {
    this.model = config;
    this.factoryComponent.publish(config, new HeaderFactory());
  }

  getName(): string {
    return 'header';
  }

  getChildren() {
    return HeaderShop;
  }
}
