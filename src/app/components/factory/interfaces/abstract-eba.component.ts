export abstract class AbstractEbaComponent {

  abstract setParams(config: any);

  abstract getName(): string;

  getChildren() {
    return null;
  }
}
