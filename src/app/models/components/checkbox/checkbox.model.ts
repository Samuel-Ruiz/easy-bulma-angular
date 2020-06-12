import {EbaOutputModel} from '../../../components/factory/interfaces/eba-ouput-component';


export class CheckboxModel implements EbaOutputModel {

  public id: string;
  public component: string;
  public text?: string;
  public newValue: boolean;

  constructor() {
  }
}
