
export class StyleResolver {

  constructor() {}

  getValue(value: string) {
    switch (value) {
      case 'isPrimary':
        return 'is-primary';
      case 'isDanger':
        return 'is-danger';
      case 'isDark':
        return 'is-dark';
      case 'isLink':
        return 'is-link';
      case 'isInfo':
        return 'is-info';
      case 'isSuccess':
        return 'is-success';
      case 'isWarning':
        return 'is-warning';
      default:
        return 'is-primary';
    }
  }
}
