import {ModuleWithProviders, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
import {NotificationComponent} from './notification/notification.component';
import {FooterComponent} from './footer/footer.component';
import {ContainerComponent} from './container/container.component';
import {NotificationService} from '../services/notification.service';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {HeaderModule} from './header/header.module';
import {TableComponent} from './table/table.component';
import {CalendarComponent} from './calendar/calendar.component';
import {CalendarModule} from 'angular-calendar';
import {FactoryModule} from './factory/factory.module';
import {SelectComponent} from './form/form-components/select/select.component';
import {EbaPipesModule} from '../pipes/eba-pipes.module';
import {FormModule} from './form/form-factory.module';

export {HeaderModule} from './header/header.module';

export {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
export {NotificationComponent} from './notification/notification.component';
export {FooterComponent} from './footer/footer.component';

export {ContainerComponent} from './container/container.component';
export {NotificationService} from '../services/notification.service';

@NgModule({
  declarations: [
    BreadcrumbComponent,
    NotificationComponent,
    FooterComponent,
    ContainerComponent,
    TableComponent,
    CalendarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HeaderModule,
    CalendarModule,
    FactoryModule,
    FormModule,
    EbaPipesModule
  ],
  exports: [
    HeaderModule,
    FormModule,
    FooterComponent,
    TableComponent,
    CalendarComponent,
    BreadcrumbComponent,
    NotificationComponent,
    ContainerComponent,
    FormsModule,
  ],
})
export class BulmaComponentsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BulmaComponentsModule,
      providers: [NotificationService]
    };
  }
}
