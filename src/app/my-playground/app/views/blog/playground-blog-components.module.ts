import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {PGBlogComponent} from './blog.component';
import {PGBlogEventsComponent} from './blog-events/blog-events.component';
import {PGBlogRecipesComponent} from './blog-recipes/blog-recipes.component';
import {PGBlogAboutComponent} from './blog-about/blog-about.component';
import {PGBlogHomeComponent} from './blog-home/blog-home.component';
import {PGBlogRoutingModule} from './playground-blog-routing.module';
import {PGBlogContainerComponent} from './playground.component';
import {CommonModule} from '@angular/common';
import {BulmaComponentsModule} from '../../../../components/bulma-components.module';


@NgModule({
  declarations: [
    PGBlogComponent,
    PGBlogContainerComponent,
    PGBlogEventsComponent,
    PGBlogRecipesComponent,
    PGBlogAboutComponent,
    PGBlogHomeComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    PGBlogRoutingModule,
    FormsModule,
    BulmaComponentsModule,
  ],
  providers: [],
  bootstrap: [PGBlogContainerComponent],
  exports: [
    PGBlogRoutingModule,
    PGBlogContainerComponent,
    PGBlogHomeComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PGBlogModule {
}
