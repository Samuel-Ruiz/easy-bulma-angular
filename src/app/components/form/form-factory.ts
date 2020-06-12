import {EbaFactoryInterface} from '../factory/interfaces/eba-factory.interface';
import {FormFactoryShop} from './form-factory-shop';


export class FormFactory implements EbaFactoryInterface {

  public create(component: string) {
    return FormFactoryShop.getItems().find(item => {
      return item.label !== null ? item.label.toLowerCase() === component.toLowerCase() : '';
    })?.type;
  }
}
