import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PGExplorerModule} from './my-playground/app/views/explorer/playground-explorer-components.module';
import {PGContainerComponent} from './my-playground/app/playground.component';

const routes: Routes = [
  {
    path: 'playground', component: PGContainerComponent, children: [
      {
        path: 'explorer', loadChildren: () => PGExplorerModule
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
