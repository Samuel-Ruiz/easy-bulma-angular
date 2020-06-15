import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BulmaComponentsModule} from '../../../../components/bulma-components.module';
import {PGExplorerHomeComponent} from './explorer-home/explorer-home.component';
import {PGExplorerTableComponent} from './explorer-table/explorer-table.component';
import {ExplorerRoutingModule} from './explorer-routing.module';


@NgModule({
  declarations: [
    PGExplorerHomeComponent,
    PGExplorerTableComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    BulmaComponentsModule,
  ],
  exports: [
    PGExplorerHomeComponent,
    PGExplorerTableComponent,
    ExplorerRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PGExplorerModule {
}
