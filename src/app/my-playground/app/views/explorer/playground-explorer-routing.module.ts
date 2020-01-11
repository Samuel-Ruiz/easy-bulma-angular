import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PGExplorerHomeComponent} from './explorer-home/explorer-home.component';



const routes: Routes = [
  {
    path: '', component: PGExplorerHomeComponent, data: {breadcrumb: 'Explorer'},
  },
  {
    path: 'home', component: PGExplorerHomeComponent, data: {breadcrumb: 'Home'},
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PGExplorerRoutingModule { }
