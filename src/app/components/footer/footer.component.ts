import {Component, OnInit} from '@angular/core';
import {EbaAbstractComponent} from '../factory/interfaces/eba-abstract-component';

@Component({
  selector: 'eba-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent extends EbaAbstractComponent implements OnInit {

  constructor() {
    super();
  }

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
