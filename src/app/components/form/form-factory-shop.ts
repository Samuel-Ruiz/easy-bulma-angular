import form from './form-factory.index';

export class FormFactoryShop {

  public static getItems() {
    return form.map(item => ({
      label: item.prototype.getName(),
      type: item,
      children: item.prototype.getChildren(),
    }));
  }

  public static getLabels() {
    return FormFactoryShop.getItems().map(item => {
      return item.label;
    });
  }
}
