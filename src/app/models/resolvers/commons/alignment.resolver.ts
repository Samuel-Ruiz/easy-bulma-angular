export class AlignmentResolver {

  constructor() {
  }

  getValue(value: string) {
    switch (value) {
      case 'centered':
        return 'has-text-centered';
      case 'justified':
        return 'has-text-justified';
      case 'left':
        return 'has-text-left';
      case 'right':
        return 'has-text-right';
      default:
        return '';
    }
  }
}
