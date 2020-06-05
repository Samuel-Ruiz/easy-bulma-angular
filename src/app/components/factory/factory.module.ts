import {NgModule} from '@angular/core';
import {ViewContainerRefDirective} from './directives/view-container-ref.directive';
import {FactoryComponent} from './factory.component';
import {FactoryWrapperComponent} from './factory-wrapper.component';


@NgModule({
  declarations: [
    ViewContainerRefDirective,
    FactoryComponent,
    FactoryWrapperComponent
  ],
  exports: [
    ViewContainerRefDirective,
    FactoryComponent,
    FactoryWrapperComponent
  ],
})
export class FactoryModule {
}
