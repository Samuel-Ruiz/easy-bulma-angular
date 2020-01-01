import {Component, Input, OnInit} from '@angular/core';
import {WeightResolver} from '../../models/resolvers/commons/weight.resolver';

@Component({
  selector: 'eba-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.sass']
})
export class ContainerComponent implements OnInit {

  @Input() options: string;
  weightResolver: WeightResolver = new WeightResolver();

  constructor() { }

  ngOnInit() {}
}
