import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BulmaComponentsModule} from '../../../../components/bulma-components.module';
import {PGExplorerContainerComponent} from './playground.component';
import {PGExplorerRoutingModule} from './playground-explorer-routing.module';
import {PGExplorerHomeComponent} from './explorer-home/explorer-home.component';
import {CalendarDayModule, CalendarModule} from 'angular-calendar';


@NgModule({
  declarations: [
    PGExplorerContainerComponent,
    PGExplorerHomeComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    PGExplorerRoutingModule,
    FormsModule,
    BulmaComponentsModule,
  ],
  providers: [],
  bootstrap: [PGExplorerContainerComponent],
  exports: [
    PGExplorerRoutingModule,
    PGExplorerContainerComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PGExplorerModule {
}
