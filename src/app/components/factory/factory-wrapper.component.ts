import {AfterViewInit, Component, EventEmitter, Input, Output, QueryList, ViewChildren} from '@angular/core';
import {FactoryComponent} from './factory.component';
import {EbaAbstractComponent} from './interfaces/eba-abstract-component';

@Component({
  selector: 'eba-factory-wrapper',
  template: '<eba-factory #factoryComponent *ngFor="let component of components" [factory]="component.factory" [model]="component.model"></eba-factory>'
})
export class FactoryWrapperComponent implements AfterViewInit {

  @Input() components: EbaAbstractComponent[] = [];
  @Output() onChanges: EventEmitter<any> = new EventEmitter<{ id: string, newValue: any }>();
  @ViewChildren('factoryComponent', {read: FactoryComponent}) factoryComponent!: QueryList<FactoryComponent>;

  ngAfterViewInit() {
    this.bindOutputEmitterFromChildren();
  }

  private bindOutputEmitterFromChildren() {
    this.factoryComponent.forEach(factory => {
      factory.onChange.subscribe(change => {
        this.onChanges.emit({id: factory.model.id, newValue: change});
      });
    });
  }
}
