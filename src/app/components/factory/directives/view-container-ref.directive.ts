import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ebaViewContainerRefDirective]',
})
export class ViewContainerRefDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
