import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ebaTableDirective]',
})
export class TableDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
