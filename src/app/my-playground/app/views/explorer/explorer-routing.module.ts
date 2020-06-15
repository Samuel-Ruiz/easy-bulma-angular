import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PGExplorerHomeComponent} from './explorer-home/explorer-home.component';
import {PGExplorerTableComponent} from './explorer-table/explorer-table.component';

const routes: Routes = [
  {
    path: 'home',
    component: PGExplorerHomeComponent
  },
  {
    path: 'table',
    component: PGExplorerTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExplorerRoutingModule {
}
