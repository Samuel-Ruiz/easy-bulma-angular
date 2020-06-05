import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {TableModel} from '../../models/components/table/table.model';
import {TableModifierResolver} from '../../models/resolvers/table/tableModifier.resolver';
import {AlignmentResolver} from '../../models/resolvers/commons/alignment.resolver';
import {RelativePositionResolver} from '../../models/resolvers/commons/relative-position.resolver';
import {AbstractEbaComponent} from '../factory/interfaces/abstract-eba.component';
import {DataObserverService, ObserverService} from '../../services/observer.service';
import {Subject} from 'rxjs';
import {TableHeaderModel} from '../../models/components/table/table-header.model';
import {HeaderFactory} from '../header/header-factory';
import {FactoryWrapperComponent} from '../factory/factory-wrapper.component';

@Component({
  selector: 'eba-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements AbstractEbaComponent, OnInit, OnDestroy {

  @Input() selected = false;
  @Input() model: TableModel = new TableModel();
  tableModifier: TableModifierResolver = new TableModifierResolver();
  @ViewChild('table', {read: true, static: false}) table: ElementRef;
  @ViewChild('factoryWrapper', {static: false}) factoryWrapper!: FactoryWrapperComponent;
  factory: HeaderFactory = new HeaderFactory();

  positionResolver: RelativePositionResolver = new RelativePositionResolver();
  elementAlignment: AlignmentResolver = new AlignmentResolver();
  @Input() modifiers: string[] = [];
  @Input() actions: string[] = [];
  rowSelected = -1;
  componentData: Subject<DataObserverService> = new Subject<DataObserverService>();

  private headers: TableHeaderModel[] = [];
  private rows;

  constructor(private observerService: ObserverService) {
  }

  ngOnDestroy(): void {
    this.observerService.unregister(this.model.id);
  }

  ngOnInit() {
    console.log('Table component ->', this.model);
  }

  public getName(): string {
    return 'table';
  }

  public getChildren() {
    return null;
  }

  public setParams(tableConfig: TableModel) {
    this.model = tableConfig;

    if (this.model.modifier != null) {
      this.model.modifier.forEach(modifier => {
        if (this.tableModifier.getValue(modifier) !== '') {
          this.table.nativeElement.classList.add(this.tableModifier.getValue(modifier));
        }
      });
    }

    if (this.model.id != null) {
      this.observerService.register(this.model.id, this.componentData);
    }
    this.headers = this.model.columns.map(column => column.header);
    this.rows = this.model.data;
    console.log('Headers: ', this.headers);
    console.log('Data: ', this.rows);
    this.factoryWrapper.refresh();
  }

  public publishData(action: string) {
    this.componentData.next(new DataObserverService(this.model.id, action));
  }

  private getFields(object) {
    return this.getDataFields(object);
  }

  private getDataFields(object) {
    return Object.entries(object).filter(entries => {
      return this.model.columns.map(column => column.entryName).includes(entries[0]);
    });
  }

  private isSelected(index) {
    if (this.selected) {
      this.rowSelected = this.rowSelected === index ? -1 : index;
    }
  }

  private trackByFn(index) {
    return index;
  }

  private getElementStyle(index: number, tableData) {
    if (tableData != null && tableData.alignment != null) {
      return this.elementAlignment.getValue(tableData.alignment[index]);
    }
    return '';
  }

  private isFieldAnObject(field): boolean {
    return field != null && field[1] != null && field[1] instanceof Object;
  }

  private getFieldContent(field) {
    if (field[1] != null) {
      return field[1];
    }
    return '';
  }

  private getModifiers() {
    return this.modifiers.map((modifier) => {
      this.tableModifier.getValue(modifier);
    });
  }

  private fieldComponentConfig(field) {
    const tools = [];
    tools.push(field[1]['_tools']);
    return tools;
  }
}


