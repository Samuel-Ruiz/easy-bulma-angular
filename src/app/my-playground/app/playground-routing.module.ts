import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PGTableComponent} from './views/table/table.component';
import {PGHomeContainerComponent} from './views/home/playground.component';
import {PGToDoContainerComponent} from './views/to-do/playground.component';
import {PGTableContainerComponent} from './views/table/playground.component';

const routes: Routes = [
  {
    path: 'playground/home', component: PGHomeContainerComponent, data: {breadcrumb: 'My Home', icon: 'fa fa-home'},
  },
  {
    path: 'playground/', component: PGHomeContainerComponent, data: {breadcrumb: ''},
  },
  {
    path: 'playground/table', component: PGTableContainerComponent, data: {breadcrumb: 'Table', icon: 'fa fa-table'},
  },
  {
    path: 'playground/todo', component: PGToDoContainerComponent, data: {breadcrumb: 'ToDo'},
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PGRoutingModule { }
