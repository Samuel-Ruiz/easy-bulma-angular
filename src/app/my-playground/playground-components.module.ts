
import {PGAppComponent} from './app/app.component';
import {PGHomeComponent} from './app/views/home/home.component';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {PGRoutingModule} from './app/playground-routing.module';
import {PGToDoComponent} from './app/views/to-do/to-do.component';
import {PGTableComponent} from './app/views/table/table.component';
import {BulmaComponentsModule} from '../components/bulma-components.module';
import {PGHomeContainerComponent} from './app/views/home/playground.component';
import {PGToDoContainerComponent} from './app/views/to-do/playground.component';
import { PGTableContainerComponent } from './app/views/table/playground.component';

@NgModule({
  declarations: [
    PGAppComponent,
    PGHomeComponent,
    PGToDoComponent,
    PGTableComponent,
    PGAppComponent,
    PGHomeContainerComponent,
    PGToDoContainerComponent,
    PGTableContainerComponent,
  ],
  imports: [
    BulmaComponentsModule,
    HttpClientModule,
    BrowserModule,
    PGRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [PGAppComponent],
  exports: [
    PGAppComponent,
    PGRoutingModule,
    PGHomeComponent,
    PGTableComponent,
    PGHomeContainerComponent,
    PGToDoComponent
  ]
})
export class PGAppModule { }
