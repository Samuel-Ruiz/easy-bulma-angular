import {ModuleWithProviders, NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
export { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { NotificationComponent } from './notification/notification.component';
export { NotificationComponent } from './notification/notification.component';
import { HeaderBasicComponent } from './header/header-basic/header-basic.component';
export { HeaderBasicComponent } from './header/header-basic/header-basic.component';
import { FooterComponent } from './footer/footer.component';
export { FooterComponent } from './footer/footer.component';

import {ContainerComponent} from './container/container.component';
export {ContainerComponent} from './container/container.component';
import { NotificationService } from '../services/notification.service';
import { TableComponent } from './table/table.component';
import { HeaderBlogComponent } from './header/header-blog/header-blog.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
export { NotificationService } from '../services/notification.service';

@NgModule({
  declarations: [
    BreadcrumbComponent,
    NotificationComponent,
    HeaderBasicComponent,
    FooterComponent,
    ContainerComponent,
    TableComponent,
    HeaderBlogComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    HeaderBasicComponent,
    BreadcrumbComponent,
    NotificationComponent,
    ContainerComponent,
    FormsModule,
    TableComponent,
    HeaderBlogComponent,
  ],
  entryComponents: [ HeaderBlogComponent, HeaderBasicComponent ],
})
export class BulmaComponentsModule {
  static forRoot(): ModuleWithProviders {
    return  {
      ngModule: BulmaComponentsModule,
      providers: [ NotificationService ]
    };
  }
}
