import {Optional} from '@angular/core';
import {TableColumnModel} from './table-column.model';
import {AbstractModel} from '../../intefaces/abstract.model';
import {TableHeaderModel} from './table-header.model';


export class TableModel implements AbstractModel {

  @Optional() public headers?: TableHeaderModel;
  @Optional() public columns?: TableColumnModel;
  @Optional() public modifier?: string[];
  @Optional() id: string;

  constructor() {}
}
