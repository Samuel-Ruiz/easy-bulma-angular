import {NavbarItemModel} from './navbarItem.model';
import {Optional} from '@angular/core';


export class HeaderModel {
  @Optional() public component?: string;
  @Optional() public navBarLeft?: NavbarItemModel[];
  @Optional() public navBarRight?: NavbarItemModel[];
  @Optional() public title?: string;
  @Optional() public subtitle?: string;
  @Optional() public brandImg?: string;
  @Optional() public brandRef?: string;
  @Optional() public style?: string;

  constructor() {}

}
