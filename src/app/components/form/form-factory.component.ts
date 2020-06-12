import {Component, Input, ViewChild} from '@angular/core';
import {EbaAbstractComponent} from '../factory/interfaces/eba-abstract-component';
import {FactoryComponent} from '../factory/factory.component';
import {FormFactoryShop} from './form-factory-shop';
import {FormFactory} from './form-factory';

@Component({
  selector: 'eba-form-factory',
  templateUrl: './form-factory.component.html',
  styleUrls: ['./form-factory.component.sass']
})
export class FormFactoryComponent implements EbaAbstractComponent {

  @Input() model: any;
  @ViewChild('factoryComponent', {read: FactoryComponent, static: false}) factoryComponent!: FactoryComponent;

  factory: FormFactory = new FormFactory();

  constructor() {}

  getName(): string {
    return 'form';
  }

  getChildren() {
    return FormFactoryShop;
  }
}
