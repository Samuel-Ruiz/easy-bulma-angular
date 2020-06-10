import {NavbarItemModel} from './navbarItem.model';
import {AbstractModel} from '../../intefaces/abstract.model';


export class HeaderModel implements AbstractModel {

  public id: string;
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
