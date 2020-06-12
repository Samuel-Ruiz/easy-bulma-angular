import {Component, Input, OnInit} from '@angular/core';
import {WeightResolver} from '../../models/resolvers/commons/weight.resolver';
import {EbaAbstractComponent} from '../factory/interfaces/eba-abstract-component';

@Component({
  selector: 'eba-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.sass']
})
export class ContainerComponent extends  EbaAbstractComponent implements OnInit {

  @Input() options: string;
  weightResolver: WeightResolver = new WeightResolver();

  constructor() {
    super();
  }

  ngOnInit() {}

  getName(): string {
    return 'container';
  }

  setParams(config: any) {
  }

  getChildren() {
    return null;
  }
}
