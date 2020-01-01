import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    // PGRoutingModule
  ],
  exports: [RouterModule]
})
export class BulmaRoutingModule { }
