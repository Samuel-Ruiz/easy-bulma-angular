
export class TableModifierResolver {

  constructor() {}

  getValue(value: string) {
    switch (value) {
      case 'bordered':
        return 'is-bordered';
      case 'striped':
        return 'is-striped';
      case 'narrow':
        return 'is-narrow';
      case 'hoverable':
        return 'is-hoverable';
      case 'fullwidth':
        return 'is-fullwidth';
      case 'responsive':
        return 'is-responsive';
      default:
        return '';
    }
  }
}
