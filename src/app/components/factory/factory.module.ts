import {NgModule} from '@angular/core';
import {ViewContainerRefDirective} from './directives/view-container-ref.directive';
import {FactoryComponent} from './factory.component';
import {FactoryWrapperComponent} from './factory-wrapper.component';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [
    ViewContainerRefDirective,
    FactoryComponent,
    FactoryWrapperComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ViewContainerRefDirective,
    FactoryComponent,
    FactoryWrapperComponent
  ],
})
export class FactoryModule {
}
