import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {SelectModel} from '../../../../models/components/select/select.model';
import {StyleResolver} from '../../../../models/resolvers/commons/style.resolver';
import {EbaAbstractComponent} from '../../../factory/interfaces/eba-abstract-component';

@Component({
  selector: 'eba-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.sass']
})
export class SelectComponent extends EbaAbstractComponent implements OnInit {

  @Input() model: SelectModel;
  @Output() onChange = new EventEmitter<string>();
  @ViewChild('select', {read: true, static: false}) select: ElementRef;
  styleResolver: StyleResolver;

  constructor() {
    super();
    this.model = new SelectModel();
    this.styleResolver = new StyleResolver();
  }

  ngOnInit() {
    this.onModelChange(this.model.newValue);
  }

  getChildren(): null {
    return null;
  }

  getName(): string {
    return 'select';
  }

  onModelChange(newValue) {
    this.model.newValue = newValue;
    this.onChange.emit(newValue);
  }

}
