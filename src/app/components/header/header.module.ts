import {NgModule} from '@angular/core';
import {HeaderComponent} from './header.component';
import {HeaderBasicComponent} from './header-basic/header-basic.component';
import {HeaderBlogComponent} from './header-blog/header-blog.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FactoryModule} from '../factory/factory.module';
import {EbaPipesModule} from '../../pipes/eba-pipes.module';


@NgModule({
  declarations: [
    HeaderBasicComponent,
    HeaderBlogComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FactoryModule,
    EbaPipesModule
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
