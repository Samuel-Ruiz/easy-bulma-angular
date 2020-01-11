import {Component, ComponentFactoryResolver, ComponentRef, Input, OnDestroy, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {HeaderModel} from '../../models/components/header/header.model';
import {HeaderFactory} from './header-factory';
import {HeaderShop} from './header-shop';
import {EbaComponentInterface} from '../interfaces/eba-component.interface';

@Component({
  selector: 'eba-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements EbaComponentInterface, OnInit, OnDestroy {

  @Input() headerConfig: HeaderModel = new HeaderModel();
  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;
  componentRef: ComponentRef<EbaComponentInterface>;
  factory: HeaderFactory = new HeaderFactory();

  constructor(private resolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.setContainerConfig();
  }

  ngOnDestroy() {
    this.componentRef.destroy();
  }

  public setConfig(config: HeaderModel) {
    this.headerConfig = config;
  }

  public refresh(config: HeaderModel) {
    this.setConfig(config);
    this.setContainerConfig();
  }

  getName(): string {
    return 'header';
  }

  getChildren() {
    return HeaderShop;
  }

  private setContainerConfig() {
    this.container.clear();
    const factory = this.resolver.resolveComponentFactory(this.factory.create(this.headerConfig.component));
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.setConfig(this.headerConfig);
  }
}
