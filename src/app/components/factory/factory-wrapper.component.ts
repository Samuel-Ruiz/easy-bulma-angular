import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {FactoryComponent} from './factory.component';

@Component({
  selector: 'eba-factory-wrapper',
  template: '<eba-factory #factoryComponent ></eba-factory>'
})
export class FactoryWrapperComponent implements AfterViewInit {

  @Input() components: any[] = [];
  @Input() factory: any;
  @ViewChild('factoryComponent', {static: false}) factoryComponent!: FactoryComponent;

  ngAfterViewInit(): void {
    this.refresh();
  }

  public refresh() {
    console.log('Factory Wrapper -> ', this.components);
    console.log('Factory Wrapper -> ', this.factory);
    console.log('Factory Child -> ', this.factoryComponent);
    this.components.forEach(component => {
      this.factoryComponent.publish(component.model, this.factory);
    });
  }
}
