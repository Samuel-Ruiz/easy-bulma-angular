import {Optional} from '@angular/core';


export class NavbarItemModel {
  public style?: string;
  public type?: string;
  public itemName: string;
  public dropdowns?: NavbarItemModel[];
  public itemRef?: string;

  constructor() {
  }
}
