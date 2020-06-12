import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {EbaAbstractModel} from './interfaces/eba-abstract-model';
import {EbaFactoryInterface} from './interfaces/eba-factory.interface';
import {EbaOutputModel} from './interfaces/eba-ouput-component';

@Component({
  selector: 'eba-factory',
  template: '<ng-template #host></ng-template>'
})
export class FactoryComponent implements AfterViewChecked, OnDestroy {
  @Input() model: EbaAbstractModel;
  @Input() factory: EbaFactoryInterface;
  @Output() onChange: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('host', {read: ViewContainerRef, static: false}) container: ViewContainerRef;
  componentRef: ComponentRef<any>;
  nameComponentRef: string;

  constructor(private resolver: ComponentFactoryResolver, private ref: ChangeDetectorRef) {
  }

  ngAfterViewChecked() {
    this.setContainerConfig();
    this.ref.detectChanges();
  }

  ngOnDestroy() {
    this.componentRef.destroy();
  }

  public getComponentInstance() {
    return this.componentRef?.instance;
  }

  private setContainerConfig() {
    if (this.model?.component) {
      if (!this.isComponentInstantiated()) {
        this.createComponent();
      } else {
        if (this.hasComponentChanged()) {
          this.createComponent();
        }
      }
    }
  }

  private createComponent() {
    this.nameComponentRef = this.model.component;
    this.container.clear();
    const factory = this.resolver.resolveComponentFactory(this.factory.create(this.nameComponentRef));
    this.componentRef = this.container.createComponent(factory);
    (this.componentRef.instance).model = this.model;
    this.bindOutputEmitter();
  }

  private bindOutputEmitter() {
    if ('newValue' in this.model) {
      this.componentRef.instance.onChange.subscribe( newValue => {
        (this.model as EbaOutputModel).newValue = newValue;
        this.onChange.emit(newValue);
      });
    }
  }

  private isComponentInstantiated(): boolean {
    return this.componentRef != null && this.componentRef?.instance != null;
  }

  private hasComponentChanged(): boolean {
    return this.nameComponentRef !== this.model.component;
  }

}
