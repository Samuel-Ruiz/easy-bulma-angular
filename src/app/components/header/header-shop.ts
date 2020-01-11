import header from './header.index';

export class HeaderShop {

  public static getItems() {
    return header.map(item => ({
      label: item.prototype.getName(),
      type: item,
      children: item.prototype.getChildren(),
    }));
  }

  public static getLabels() {
    return HeaderShop.getItems().map(item => {
      return item.label;
    });
  }
}
