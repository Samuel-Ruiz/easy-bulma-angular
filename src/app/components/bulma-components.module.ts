import {ModuleWithProviders, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
import {NotificationComponent} from './notification/notification.component';
import {FooterComponent} from './footer/footer.component';
import {ContainerComponent} from './container/container.component';
import {NotificationService} from '../services/notification.service';
import {TableComponent} from './table/table.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {HeaderModule} from './header/header.module';

export {HeaderModule} from './header/header.module';

export { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
export { NotificationComponent } from './notification/notification.component';
export { FooterComponent } from './footer/footer.component';

export {ContainerComponent} from './container/container.component';
export { NotificationService } from '../services/notification.service';

@NgModule({
  declarations: [
    BreadcrumbComponent,
    NotificationComponent,
    FooterComponent,
    ContainerComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HeaderModule
  ],
  exports: [
    HeaderModule,
    FooterComponent,
    BreadcrumbComponent,
    NotificationComponent,
    ContainerComponent,
    FormsModule,
    TableComponent,
  ],
})
export class BulmaComponentsModule {
  static forRoot(): ModuleWithProviders {
    return  {
      ngModule: BulmaComponentsModule,
      providers: [ NotificationService ]
    };
  }
}
