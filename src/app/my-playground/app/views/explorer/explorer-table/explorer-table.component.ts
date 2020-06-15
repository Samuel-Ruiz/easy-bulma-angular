import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {NotificationService} from '../../../../../services/notification.service';
import {HeaderComponent} from '../../../../../components/header/header.component';
import {EbaShop} from '../../../../../components/eba-shop';
import {TableComponent} from '../../../../../components/table/table.component';
import {RestService} from '../../../../api/rest/rest.service';
import {FormFactoryComponent} from '../../../../../components/form/form-factory.component';
import {SelectModel} from '../../../../../models/components/select/select.model';
import {CheckboxModel} from '../../../../../models/components/checkbox/checkbox.model';

@Component({
  selector: 'eba-pg-explorer-table',
  templateUrl: './explorer-table.component.html',
  styleUrls: ['./explorer-table.component.sass']
})
export class PGExplorerTableComponent implements AfterViewInit {
  @ViewChild('header', {static: false}) header: HeaderComponent;
  @ViewChild('table', {static: false}) table: TableComponent;

  message: string;
  styleString;
  styleList: string[];
  headerModel;
  tableModel;
  tableData;
  selectMap: Map<string, string>;
  checkboxMap: Map<string, string>;
  selectIds: any[];

  constructor(private restApi: RestService, private notify: NotificationService) {
    this.selectMap = new Map<string, string>();
    this.checkboxMap = new Map<string, string>();
    this.selectIds = [];

    this.styleString = 'basic';
    this.styleList = EbaShop.getItems().find(item => {
      return item.label === 'header';
    }).children.getLabels();

    this.getComments();
  }

  ngAfterViewInit() {
    console.log('--- Loading table ---');
    this.table.onChange.subscribe(change => {
      if (change.id.startsWith('select')) {
        this.selectMap.set(change.id, change.newValue);
      }
      if (change.id.startsWith('checkbox')) {
        this.checkboxMap.set(change.id, String(change.newValue));
      }
    });
  }

  sendNotification() {
    this.notify.sendNotification(this.buildMessage(), this.styleString);
    this.headerModel.component = this.styleString;
    this.headerModel.title = 'My company - ' + this.styleString;
    this.setTableParams();
  }

  buildMessage(): string {
    this.message = 'The selected style is [' + this.styleString + ']';
    return this.message;
  }

  private buildSelectModel(id, position) {
    const model = new SelectModel();
    model.id = 'select-' + id + '-' + position;
    model.component = 'select';
    model.modifier = 'isDanger';
    model.values = ['Value1', 'Value2', 'Value3'];
    model.newValue = 'Value1';
    this.selectMap.set(model.id, model.newValue);
    return model;
  }

  private buildCheckboxModel(id, position) {
    const model = new CheckboxModel();
    model.id = 'checkbox-' + id + '-' + position;
    model.component = 'checkbox';
    model.newValue = false;
    model.text = model.id;
    this.checkboxMap.set(model.id, String(model.newValue));
    return model;
  }

  private setTableParams() {
    this.tableData.push({id: 1, title: 'First title'}, {id: 2, title: 'Second title'});
    if (this.tableData) {
      this.tableData.forEach((e) => {
        const tools = [];
        const tool1 = new FormFactoryComponent();
        tool1.model = this.buildSelectModel(e.id, 1);

        const tool2 = new FormFactoryComponent();
        tool2.model = this.buildCheckboxModel(e.id, 2);
        tools.push(tool1, tool2);
        e.tools = tools;
      });

      this.tableModel = ({
        id: 'table',
        columns: [
          {
            header: {
              header: 'Id',
              alignment: '',
              icon: null
            },
            alignment: '',
            entryName: 'id'
          },
          {
            header: {
              header: 'Title',
              alignment: '',
              icon: null
            },
            alignment: '',
            entryName: 'title'
          },
          {
            header: {
              header: 'Tools',
              alignment: '',
              icon: null
            },
            alignment: '',
            entryName: 'tools'
          }
        ],
        data: this.tableData.filter((element, index) => {
          return index < 3;
        }),
        modifier: [
          'hoverable', 'striped', 'responsive'
        ]
      });
    }
  }

  private getComments() {
    this.tableData = [];
    this.setTableParams();
    /*
    this.restApi.getComments().pipe(delay(0)).subscribe(response => {
      this.tableData = response;
      this.setTableParams();
    });
     */
  }
}
