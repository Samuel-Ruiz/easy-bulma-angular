import {NavbarItemModel} from './navbarItem.model';
import {EbaAbstractModel} from '../../../components/factory/interfaces/eba-abstract-model';


export class HeaderModel implements EbaAbstractModel {

  public id: string;
  public component: string;
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
