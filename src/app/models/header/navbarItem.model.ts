import {Optional} from '@angular/core';


export class NavbarItemModel {
  @Optional() public style?: string;
  @Optional() public type?: string;
  itemName: string;
  @Optional() public dropdowns?: NavbarItemModel[];
  @Optional() public itemRef?: string;

  constructor() {
  }
}
