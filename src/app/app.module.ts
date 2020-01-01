import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';

import {BreadcrumbComponent, BulmaComponentsModule} from './components/bulma-components.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    BulmaComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [BulmaComponentsModule, BreadcrumbComponent],
})
export class AppModule { }
