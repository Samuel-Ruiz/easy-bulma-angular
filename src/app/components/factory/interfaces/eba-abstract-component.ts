import {EbaFactoryInterface} from './eba-factory.interface';
import {EbaAbstractModel} from './eba-abstract-model';

export abstract class EbaAbstractComponent {

  public model: EbaAbstractModel;
  public factory: EbaFactoryInterface;

  abstract getName(): string;

  getChildren() {
    return null;
  }
}
