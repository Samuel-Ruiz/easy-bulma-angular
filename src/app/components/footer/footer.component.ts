import { Component, OnInit } from '@angular/core';
import {AbstractEbaComponent} from '../factory/interfaces/abstract-eba.component';

@Component({
  selector: 'eba-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements AbstractEbaComponent, OnInit {

  constructor() { }

  ngOnInit() {
  }

  getName(): string {
    return 'footer';
  }

  setParams(config: any) {
  }

  getChildren() {
    return null;
  }

}
