import {NgModule} from '@angular/core';
import {HeaderComponent} from './header.component';
import {HeaderBasicComponent} from './header-basic/header-basic.component';
import {HeaderBlogComponent} from './header-blog/header-blog.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FactoryModule} from '../factory/factory.module';


@NgModule({
  declarations: [
    HeaderBasicComponent,
    HeaderBlogComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FactoryModule
  ],
  exports: [
    HeaderComponent,
    HeaderBasicComponent,
    HeaderBlogComponent,
  ],
  entryComponents: [ HeaderBlogComponent, HeaderBasicComponent ],
})
export class HeaderModule {
}
