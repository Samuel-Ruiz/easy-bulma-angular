import header from './header.index';

export class HeaderList {
  public static getItems() {
    return header.map(item => ({
      label: item.prototype.getName(),
      type: item, // Setting up a simple factory method for use when this item is selected in the list
    }));
  }
}
