import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'classResolver' })
export class ClassResolverPipe implements PipeTransform {
  transform(property: string, resolver): string {
    return resolver.getValue(property);
  }
}
