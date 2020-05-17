import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ebaHeaderDirective]',
})
export class HeaderDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
