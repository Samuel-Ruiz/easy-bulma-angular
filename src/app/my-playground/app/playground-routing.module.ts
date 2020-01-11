import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PGHomeContainerComponent} from './views/home/playground.component';
import {PGToDoContainerComponent} from './views/to-do/playground.component';
import {PGTableContainerComponent} from './views/table/playground.component';
import {PGBlogContainerComponent} from './views/blog/playground.component';
import {PGBlogModule} from './views/blog/playground-blog-components.module';
import {PGExplorerModule} from './views/explorer/playground-explorer-components.module';
import {PGExplorerContainerComponent} from './views/explorer/playground.component';

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
  },
  {
    path: 'playground/blog', component: PGBlogContainerComponent, loadChildren: () => PGBlogModule,
  },
  {
    path: 'playground/explorer', component: PGExplorerContainerComponent, loadChildren: () => PGExplorerModule,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PGRoutingModule {
}
