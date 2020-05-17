import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  Input,
  OnDestroy, OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {HeaderModel} from '../../models/components/header/header.model';
import {HeaderFactory} from './header-factory';
import {HeaderShop} from './header-shop';
import {EbaComponentInterface} from '../interfaces/eba-component.interface';
import {HeaderDirective} from './header.directive';

@Component({
  selector: 'eba-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements EbaComponentInterface, OnDestroy {

  @Input() headerConfig: HeaderModel = new HeaderModel();
  @ViewChild(HeaderDirective, {static: true}) container: HeaderDirective;
  componentRef: ComponentRef<EbaComponentInterface>;
  factory: HeaderFactory = new HeaderFactory();

  constructor(private resolver: ComponentFactoryResolver) {
  }

  ngOnDestroy() {
    this.componentRef.destroy();
  }

  public publish() {
    this.setContainerConfig();
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
    this.container.viewContainerRef.clear();
    console.log(this.factory);
    console.log(this.headerConfig.component);
    const factory = this.resolver.resolveComponentFactory(this.factory.create(this.headerConfig.component));
    this.componentRef = this.container.viewContainerRef.createComponent(factory);
    this.componentRef.instance.setConfig(this.headerConfig);
  }
}
