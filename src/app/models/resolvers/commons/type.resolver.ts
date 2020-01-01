
export class TypeResolver {

  constructor() {}

  getValue(value: string) {
    switch (value) {
      case 'isButton':
        return 'is-button';
      case 'hasDropdown':
        return 'has-dropdown';
      case 'isDivider':
        return 'is-divider';
      default:
        return 'default';
    }
  }
}


