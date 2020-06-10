import {
  AfterContentInit,
  AfterViewChecked, AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input, OnChanges,
  OnDestroy,
  OnInit,
  QueryList, SimpleChanges,
  ViewChild,
  ViewChildren
} from '@angular/core';
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
export class TableComponent implements AbstractEbaComponent, OnChanges, OnDestroy {

  @Input() selected;
  @Input() model: TableModel;
  @ViewChild('table', {read: true, static: false}) table: ElementRef;
  @ViewChildren('factoryWrapperComponent', {read: FactoryWrapperComponent}) factoryWrapper!: QueryList<FactoryWrapperComponent>;

  tableModifier: TableModifierResolver;
  positionResolver: RelativePositionResolver;
  elementAlignment: AlignmentResolver;

  @Input() modifiers: string[] = [];
  @Input() actions: string[] = [];

  rowSelected:number ;
  componentData: Subject<DataObserverService> = new Subject<DataObserverService>();

  headers: TableHeaderModel[];
  rows: Row[][];

  constructor(private observerService: ObserverService) {
    this.selected = false;
    this.model = new TableModel();

    this.headers = [];
    this.rows = [];
    this.rowSelected = -1;
    this.tableModifier = new TableModifierResolver();
    this.positionResolver = new RelativePositionResolver();
    this.elementAlignment = new AlignmentResolver();

  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.model.currentValue) {
      this.refresh();
    }
  }

  ngOnDestroy(): void {
    this.observerService.unregister(this.model.id);
  }

  public getName(): string {
    return 'table';
  }

  public getChildren() {
    return null;
  }

  public getInstantiatedComponent(byId) {
    console.log('factory wrapper -> ', this.factoryWrapper);
    return this.factoryWrapper
      .filter(factory => factory.components.find(component => component.model.id === byId))
      .map(factory => factory.components.filter(component => component.model.id === byId));
  }

  public publishData(action: string) {
    this.componentData.next(new DataObserverService(this.model.id, action));
  }

  private refresh() {
    if (this.model.columns && this.model.data) {
      this.headers = this.model.columns.map(column => column.header);
      this.rows = this.buildRows();
    }
  }

  private buildRows() {
    return this.model.data.map(dataColumn => {
      return Object.entries(dataColumn)
        .filter(entries => {
          return this.model.columns.map(column => column.entryName).includes(entries[0]);
        })
        .map((filteredColumn, index) => {
          return new Row(filteredColumn[0], index, filteredColumn[1]);
        });
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

  private getModifiers() {
    return this.modifiers.map((modifier) => {
      this.tableModifier.getValue(modifier);
    });
  }
}

class Row {
  private column: string;
  private row: number;
  private cell: any;

  constructor(column, row, cell) {
    this.column = column;
    this.row = row;
    this.cell = cell;
  }
}


