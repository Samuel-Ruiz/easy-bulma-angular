import {Component, ComponentFactoryResolver, ComponentRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ViewContainerRefDirective} from './directives/view-container-ref.directive';

@Component({
  selector: 'eba-factory',
  template: '<ng-template ebaViewContainerRefDirective></ng-template>'
})
export class FactoryComponent implements OnDestroy {
  @Input() componentParams: any;
  @Input() factory: any;
  @ViewChild(ViewContainerRefDirective, {static: true}) container: ViewContainerRefDirective;
  componentRef: ComponentRef<any>;

  constructor(private resolver: ComponentFactoryResolver) {
  }

  ngOnDestroy() {
    this.componentRef.destroy();
  }

  public publish(config: any, factory: any) {
    this.componentParams = config;
    this.factory = factory;
    this.setContainerConfig();
  }

  private setContainerConfig() {
    console.log('Factory component -> ', this.factory);
    console.log('Factory component -> ', this.componentParams);
    if (this.componentParams?.component) {
      this.container.viewContainerRef.clear();
      const factory = this.resolver.resolveComponentFactory(this.factory.create(this.componentParams?.component));
      this.componentRef = this.container.viewContainerRef.createComponent(factory);
      this.componentRef.instance.setParams(this.componentParams);
    }
  }

}
