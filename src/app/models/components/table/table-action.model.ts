import {IconModel} from '../icons/icon.model';


export class TableActionModel {

  public name: string;
  public icon: IconModel;
  public action: (...args: any[]) => any;

  constructor() {}
}
