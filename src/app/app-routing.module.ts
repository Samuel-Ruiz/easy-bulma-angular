import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PGRoutingModule} from './playground/app/playground-routing.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), PGRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
