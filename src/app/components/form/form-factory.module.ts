import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FactoryModule} from '../factory/factory.module';
import {EbaPipesModule} from '../../pipes/eba-pipes.module';
import {FormFactoryComponent} from './form-factory.component';
import {SelectComponent} from './form-components/select/select.component';
import { CheckboxComponent } from './form-components/checkbox/checkbox.component';


@NgModule({
  declarations: [
    SelectComponent,
    FormFactoryComponent,
    CheckboxComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FactoryModule,
    EbaPipesModule
  ],
  exports: [
    SelectComponent,
    CheckboxComponent,
    FormFactoryComponent,
  ],
  entryComponents: [SelectComponent],
})
export class FormModule {
}
