import {NgModule} from '@angular/core';
import {ClassResolverPipe} from './class-resolver.pipe';
import {ResolverAsArrayPipe} from './resolver-as-array.pipe';


@NgModule({
  declarations: [
    ClassResolverPipe,
    ResolverAsArrayPipe
  ],
  exports: [
    ClassResolverPipe,
    ResolverAsArrayPipe
  ],
  providers: [ClassResolverPipe]
})
export class EbaPipesModule {
}
