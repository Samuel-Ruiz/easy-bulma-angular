import {
  AfterViewChecked, ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  Input,
  OnDestroy,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

@Component({
  selector: 'eba-factory',
  template: '<ng-template #container></ng-template>'
})
export class FactoryComponent implements AfterViewChecked, OnDestroy {
  @Input() model: any;
  @Input() factory: any;
  @ViewChild('container', {read: ViewContainerRef, static: false}) container: ViewContainerRef;
  componentRef: ComponentRef<any>;

  constructor(private resolver: ComponentFactoryResolver, private ref: ChangeDetectorRef) {
  }

  ngAfterViewChecked() {
    this.setContainerConfig();
    this.ref.detectChanges();
  }

  ngOnDestroy() {
    this.componentRef.destroy();
  }

  private setContainerConfig() {
    if (this.model?.component) {
      this.container.clear();
      const factory = this.resolver.resolveComponentFactory(this.factory.create(this.model?.component));
      this.componentRef = this.container.createComponent(factory);
      (this.componentRef.instance).model = this.model;
    }
  }

}
