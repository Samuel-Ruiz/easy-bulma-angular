import {Optional} from '@angular/core';


export class BreadcrumbModel {

  @Optional() public orientation?: string;
  @Optional() public size?: string;
  @Optional() public separator?: string;
  @Optional() public rootName?: string;
  @Optional() public rootUrl?: string;

  constructor() {
  }

}
