import {Pipe, PipeTransform} from '@angular/core';
import {ClassResolverPipe} from './class-resolver.pipe';


@Pipe({name: 'resolverAsArray'})
export class ResolverAsArrayPipe implements PipeTransform {

  constructor(private classResolver: ClassResolverPipe) {
  }

  transform(array: any[], resolver) {
    return array ?
      array.map(element => {
        return this.classResolver.transform(element, resolver);
      }) : '';
  }
}
