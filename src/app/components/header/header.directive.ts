import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ebaHeaderFactory]',
})
export class HeaderDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
