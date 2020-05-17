import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {HeaderDirective} from './header.directive';
import {HeaderComponent} from './header.component';
import {HeaderBasicComponent} from './header-basic/header-basic.component';
import {HeaderBlogComponent} from './header-blog/header-blog.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    HeaderBasicComponent,
    HeaderBlogComponent,
    HeaderComponent,
    HeaderDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
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
