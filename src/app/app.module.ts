import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';

import {BreadcrumbComponent, BulmaComponentsModule} from './components/bulma-components.module';
import {PGAppModule} from './my-playground/playground-components.module';
import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    PGAppModule,
    BulmaComponentsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [BulmaComponentsModule, BreadcrumbComponent],
})
export class AppModule { }
