import './index.css';
import * as React from 'react';
import { TreeGridComponent, ColumnsDirective, ColumnDirective, Page, Filter, Inject} from '@syncfusion/ej2-react-treegrid';
import { sampleData } from './data';
import { SampleBase } from './sample-base';

export class Filtering extends SampleBase {
    onChange(sel) {
        let mode = sel.value.toString();
        this.treegridInstance.filterSettings.hierarchyMode = mode;
        this.treegridInstance.clearFiltering();
    }
    render() {
        return (
          
      <div className='control-pane'>
        <div className='control-section'>
          <div className='col-md-12'>
           <TreeGridComponent dataSource={sampleData} ref={treegrid => this.treegridInstance = treegrid} 
           treeColumnIndex={1} childMapping='subtasks' height='450' allowPaging='true' allowFiltering='true' 
           filterSettings={{ mode: 'Immediate', type: 'FilterBar', hierarchyMode: 'Parent' }}>
            <ColumnsDirective>
              <ColumnDirective field='taskID' headerText='ID' width='40' ></ColumnDirective>
              <ColumnDirective field='taskName' headerText='Numéro' width='90'></ColumnDirective>
              <ColumnDirective field='startDate' headerText='Hiérarchie' width='90' format='yMd' />
              <ColumnDirective field='duration' headerText='Libéllé' width='200' />
              <ColumnDirective field='progress' headerText='Catégorie' width='100'/>
            </ColumnsDirective>
            <Inject services={[Filter, Page]}/>
          </TreeGridComponent>
        </div>
       </div>
        </div>
        );
    }
}
