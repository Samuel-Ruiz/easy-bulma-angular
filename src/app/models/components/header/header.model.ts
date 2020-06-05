import {NavbarItemModel} from './navbarItem.model';


export class HeaderModel {
  public component?: string;
  public navBarLeft?: NavbarItemModel[];
  public navBarRight?: NavbarItemModel[];
  public title?: string;
  public subtitle?: string;
  public brandImg?: string;
  public brandRef?: string;
  public style?: string;

  constructor() {
  }

}
