import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PGBlogHomeComponent} from './blog-home/blog-home.component';
import {PGBlogRecipesComponent} from './blog-recipes/blog-recipes.component';
import {PGBlogEventsComponent} from './blog-events/blog-events.component';
import {PGBlogAboutComponent} from './blog-about/blog-about.component';


const routes: Routes = [
  {
    path: '', component: PGBlogHomeComponent, data: {breadcrumb: 'Blog'},
  },
  {
    path: 'home', component: PGBlogHomeComponent, data: {breadcrumb: 'Home'},
  },
  {
    path: 'recipes', component: PGBlogRecipesComponent, data: {breadcrumb: 'Recipes'},
  },
  {
    path: 'events', component: PGBlogEventsComponent, data: {breadcrumb: 'Events'},
  },
  {
    path: 'about', component: PGBlogAboutComponent, data: {breadcrumb: 'About'},
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PGBlogRoutingModule { }
