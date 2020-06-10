import {HeaderShop} from './header-shop';
import {EbaFactoryInterface} from '../factory/interfaces/eba-factory.interface';


export class HeaderFactory implements EbaFactoryInterface {

  public create(component: string) {
    return HeaderShop.getItems().find(item => {
      return item.label !== null ? item.label.toLowerCase() === component.toLowerCase() : '';
    })?.type;
  }
}
