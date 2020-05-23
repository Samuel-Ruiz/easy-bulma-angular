import {PGContainerComponent} from './app/app.component';
import {PGHomeComponent} from './app/views/home/home.component';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {PGRoutingModule} from './app/playground-routing.module';
import {PGToDoComponent} from './app/views/to-do/to-do.component';
import {PGTableComponent} from './app/views/table/table.component';
import {BulmaComponentsModule} from '../components/bulma-components.module';
import {PGHomeContainerComponent} from './app/views/home/playground.component';
import {PGToDoContainerComponent} from './app/views/to-do/playground.component';
import {PGTableContainerComponent} from './app/views/table/playground.component';
import {PGBlogModule} from './app/views/blog/playground-blog-components.module';
import {CommonModule} from '@angular/common';
import {PGExplorerModule} from './app/views/explorer/playground-explorer-components.module';
import {CalendarModule} from 'angular-calendar';


@NgModule({
  declarations: [
    PGContainerComponent,
    PGHomeComponent,
    PGToDoComponent,
    PGTableComponent,
    PGContainerComponent,
    PGHomeContainerComponent,
    PGToDoContainerComponent,
    PGTableContainerComponent,
  ],
  imports: [
    BulmaComponentsModule,
    CalendarModule,
    HttpClientModule,
    CommonModule,
    PGRoutingModule,
    FormsModule,
    PGBlogModule,
    PGExplorerModule
  ],
  exports: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PGAppModule {
}
