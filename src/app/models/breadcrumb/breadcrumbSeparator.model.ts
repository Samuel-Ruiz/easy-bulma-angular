
export class BreadcrumbSeparatorModel {

  constructor() {}

  getValue(value: string) {
    switch (value) {
      case 'arrow':
        return 'has-arrow-separator';
      case 'bullet':
        return 'has-bullet-separator';
      case 'dot':
        return 'has-dot-separator';
      case 'succeeds':
        return 'has-succeeds-separator';
      default:
        return '';
    }
  }
}
