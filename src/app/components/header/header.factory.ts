import {HeaderList} from './header-list';


export class HeaderFactory {

  public createHeader(component: string) {
    return HeaderList.getItems().find(item => {
      return item.label.toLowerCase() === component.toLowerCase();
    }).type;
  }
}
