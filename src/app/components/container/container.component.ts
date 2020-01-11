import {Component, Input, OnInit} from '@angular/core';
import {WeightResolver} from '../../models/resolvers/commons/weight.resolver';
import {EbaComponentInterface} from '../interfaces/eba-component.interface';

@Component({
  selector: 'eba-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.sass']
})
export class ContainerComponent implements EbaComponentInterface, OnInit {

  @Input() options: string;
  weightResolver: WeightResolver = new WeightResolver();

  constructor() { }

  ngOnInit() {}

  getName(): string {
    return 'container';
  }

  setConfig(config: any) {
  }

  getChildren() {
    return null;
  }
}
