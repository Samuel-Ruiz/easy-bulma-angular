import { BrowserModule } from '@angular/platform-browser';
import {ModuleWithProviders, NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
export { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { NotificationComponent } from './notification/notification.component';
export { NotificationComponent } from './notification/notification.component';
import { HeaderComponent } from './header/header.component';
export { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
export { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
export { AppRoutingModule } from '../app-routing.module';
import {ContainerComponent} from './container/container.component';
export {ContainerComponent} from './container/container.component';
import { NotificationService } from '../services/notification.service';
export { NotificationService } from '../services/notification.service';

@NgModule({
  declarations: [
    BreadcrumbComponent,
    NotificationComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    BreadcrumbComponent,
    NotificationComponent,
    ContainerComponent,
    FormsModule,
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
