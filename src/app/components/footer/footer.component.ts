import { Component, OnInit } from '@angular/core';
import {EbaComponentInterface} from '../interfaces/eba-component.interface';

@Component({
  selector: 'eba-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements EbaComponentInterface, OnInit {

  constructor() { }

  ngOnInit() {
  }

  getName(): string {
    return 'footer';
  }

  setConfig(config: any) {
  }

  getChildren() {
    return null;
  }

}
