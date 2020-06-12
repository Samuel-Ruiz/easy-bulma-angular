import {EbaOutputModel} from '../../../components/factory/interfaces/eba-ouput-component';


export class SelectModel implements EbaOutputModel {

  public id: string;
  public component: string;
  public modifier: string;
  public values?: string[];
  public newValue: string;

  constructor() {
  }
}
