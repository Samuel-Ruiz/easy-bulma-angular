import {Component, Input, OnInit} from '@angular/core';
import {ElementWeightModel} from '../../models/commons/elementWeight.model';
import {ContainerModel} from '../../models/contatiner/container.model';

@Component({
  selector: 'eba-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.sass']
})
export class ContainerComponent implements OnInit {

  @Input() containerConfig: ContainerModel = new ContainerModel();
  elementWeightModel: ElementWeightModel = new ElementWeightModel();

  constructor() { }

  ngOnInit() {
  }

  setConfig(containerConfig: ContainerModel) {
    this.containerConfig = containerConfig;
  }

}
