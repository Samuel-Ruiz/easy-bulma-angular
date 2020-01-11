import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PGRoutingModule} from './my-playground/app/playground-routing.module';
import {BulmaRoutingModule} from './components/bulma-routing.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), PGRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
