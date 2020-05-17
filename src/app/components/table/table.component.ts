import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {TableModel} from '../../models/components/table/table.model';
import {TableModifierResolver} from '../../models/resolvers/table/tableModifier.resolver';
import {TableDataModel} from '../../models/components/table/table-data.model';
import {AlignmentResolver} from '../../models/resolvers/commons/alignment.resolver';
import {TableHeaderModel} from '../../models/components/table/table-header.model';
import {RelativePositionResolver} from '../../models/resolvers/commons/relative-position.resolver';
import {EbaComponentInterface} from '../interfaces/eba-component.interface';

@Component({
  selector: 'eba-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements EbaComponentInterface, OnInit {
  @Input() selected = false;
  @Input() tableConfig: TableModel = new TableModel();
  tableModifier: TableModifierResolver = new TableModifierResolver();
  @ViewChild('table', {read: true, static: false}) table: ElementRef;

  positionResolver: RelativePositionResolver = new RelativePositionResolver();
  elementAlignment: AlignmentResolver = new AlignmentResolver();
  @Input() columns: TableDataModel = new TableDataModel();
  @Input() headers: TableHeaderModel = new TableHeaderModel();
  @Input() modifiers: string[];
  @Input() actions: string[];
  rowSelected = -1;

  constructor() {
  }

  ngOnInit() {
  }

  public getName(): string {
    return 'table';
  }

  public getChildren() {
    return null;
  }

  public setConfig(tableConfig: TableModel) {
    this.tableConfig = tableConfig;

    if (this.tableConfig.modifier != null) {
      this.tableConfig.modifier.forEach(modifier => {
        if (this.tableModifier.getValue(modifier) !== '') {
          this.table.nativeElement.classList.add(this.tableModifier.getValue(modifier));
        }
      });
    }
  }

  private getFields(object) {
    return Object.entries(object);
  }

  private isSelected(index) {
    if (this.selected) {
      this.rowSelected = this.rowSelected === index ? -1 : index;
    }
  }

  private trackByFn(index) {
    return index;
  }

  private getElementStyle(index: number, tableData: TableDataModel) {
    if (tableData != null && tableData.alignment != null && tableData.alignment[index] != null) {
      return this.elementAlignment.getValue(tableData.alignment[index]);
    }
    return '';
  }

  private getFieldContent(field) {
    if (field[1] != null) {
      return field[1];
    }
    return '';
  }

  private getModifiers() {
    const modifierList = [];
    this.modifiers.forEach((modifier) => {
      modifierList.push(this.tableModifier.getValue(modifier));
    });
    return modifierList;
  }

}
