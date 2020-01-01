import {Optional} from '@angular/core';
import {TableDataModel} from './table-data.model';


export class TableModel {

  @Optional() public headers?: TableDataModel;
  @Optional() public columns?: TableDataModel;
  @Optional() public modifier?: string[];

  constructor() {}

}
