import {Optional} from '@angular/core';
import {TableColumnModel} from './table-column.model';
import {EbaAbstractModel} from '../../../components/factory/interfaces/eba-abstract-model';


export class TableModel implements EbaAbstractModel {

  id: string;
  component: string;
  @Optional() public columns?: TableColumnModel[];
  @Optional() public modifier?: string[];
  @Optional() public data: any[];

  constructor() {
  }
}
