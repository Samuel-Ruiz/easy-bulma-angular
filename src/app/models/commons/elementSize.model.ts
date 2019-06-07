
export class ElementSizeModel {

  constructor() {}

  getValue(value: string) {
    switch (value) {
      case 'small':
        return 'is-small';
      case 'medium':
        return 'is-medium';
      case 'large':
        return 'is-large';
      default:
        return '';
    }
  }
}
