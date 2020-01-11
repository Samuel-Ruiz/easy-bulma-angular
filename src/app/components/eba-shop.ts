import header from './eba.index';

export class EbaShop {
  public static getItems() {
    return header.map(item => ({
      label: item.prototype.getName(),
      type: item,
      children: item.prototype.getChildren(),
    }));
  }

  public static getLabels() {
    return EbaShop.getItems().map(item => {
      return item.label;
    });
  }

  public static getChildrenFrom(item) {
    return EbaShop.getItems().find(element => {
      return element === item;
    }).children;
  }
}
