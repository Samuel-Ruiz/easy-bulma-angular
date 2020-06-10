import {Component, Input, ViewChildren} from '@angular/core';
import {FactoryComponent} from './factory.component';

@Component({
  selector: 'eba-factory-wrapper',
  template: '<eba-factory #factoryComponent *ngFor="let component of components" [factory]="component.factory" [model]="component.model"></eba-factory>'
})
export class FactoryWrapperComponent {

  @Input() components: any[] = [];
  @ViewChildren('factoryComponent', {read: FactoryComponent}) factoryComponent!: FactoryComponent;

}
