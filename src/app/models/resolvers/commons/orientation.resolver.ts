
export class OrientationResolver {

  constructor() {}

  getValue(value: string) {
    switch (value) {
      case 'centered':
        return 'is-centered';
      case 'right':
        return 'is-right';
      default:
        return '';
    }
  }
}
