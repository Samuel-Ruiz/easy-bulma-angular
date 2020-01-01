
export class WeightResolver {

  constructor() {}

  getValue(value: string) {
    switch (value) {
      case 'fluid':
        return 'is-fluid';
      case 'widescreen':
        return 'is-widescreen';
      case 'fullhd':
        return 'is-fullhd';
      default:
        return '';
    }
  }
}
