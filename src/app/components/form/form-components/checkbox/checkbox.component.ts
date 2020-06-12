import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {EbaAbstractComponent} from '../../../factory/interfaces/eba-abstract-component';
import {StyleResolver} from '../../../../models/resolvers/commons/style.resolver';
import {CheckboxModel} from '../../../../models/components/checkbox/checkbox.model';

@Component({
  selector: 'eba-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.sass']
})
export class CheckboxComponent extends EbaAbstractComponent {

  @Input() model: CheckboxModel;
  @Output() onChange = new EventEmitter<boolean>();
  @ViewChild('checkbox', {read: true, static: false}) checkbox: ElementRef;
  styleResolver: StyleResolver;

  constructor() {
    super();
    this.model = new CheckboxModel();
    this.styleResolver = new StyleResolver();
  }

  getChildren(): null {
    return null;
  }

  getName(): string {
    return 'checkbox';
  }

  onModelChange(newValue) {
    this.model.newValue = newValue;
    this.onChange.emit(newValue);
  }

}
