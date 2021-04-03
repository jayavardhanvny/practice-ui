/* eslint max-len: 0 */
/* eslint no-unused-vars: 0 */
/* eslint no-alert: 0 */
import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'
import Button from 'react-bootstrap/Button';
// import './../custom.css'


const products = [];

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      id: id,
      name: 'Item name ' + id,
      price: 2100 + i
    });
  }
}

addProducts(100);

function onInsertRow(row) {
  let newRowStr = ''
 
  for (const prop in row) {
    newRowStr += prop + ': ' + row[prop] + ' \n'
  }
  alert('You inserted:\n ' + newRowStr)
}
 
 
function onDeleteRow(rowKeys) {
  alert('You deleted: ' + rowKeys)
}

export default class AllStudents extends React.Component {
  
  createCustomToolBar = props => {
    return (
      <div style={ { margin: '15px' } }>
        { props.components.btnGroup }
        <div className='col-xs-8 col-sm-4 col-md-4 col-lg-2'>
          { props.components.searchPanel }
        </div>
      </div>
    );
  }
  onClickProductSelected(cell, row, rowIndex){
    console.log('Product #', rowIndex);
   }
  cellButton(cell, row, enumObject, rowIndex) {
  	return (
<Button variant="primary" size="sm" onClick={() => 
          this.onClickProductSelected(cell, row, rowIndex)} >
      Small button
    </Button>
      
    	// <button class="btn btn-outline-success" type="button" 
      // onClick={() => 
      // this.onClickProductSelected(cell, row, rowIndex)}>
      // 	Click me { rowIndex }
      // </button>
    )
  }
  


  render() {
    const students = this.props.students;
    const selectRow = {
      mode: 'checkbox',
      showOnlySelected: true
      
    };
    const options = {
      toolBar: this.createCustomToolBar
    };
   
    return (
      <div>
      <BootstrapTable ref='table' data={ students }
      
        insertRow={true}
        deleteRow={true}
        options={ { noDataText: 'This is custom text for empty data' } }
        selectRow={ selectRow }
        pagination={true}
        search
        >
        <TableHeaderColumn
data-sorter="alphanum" 
dataSort={ true } dataField='idNumber' isKey={ true }>Student ID</TableHeaderColumn>
        <TableHeaderColumn dataField='firstName'>Student Name</TableHeaderColumn>
        <TableHeaderColumn dataField='mobile'>Mobile</TableHeaderColumn>
        <TableHeaderColumn dataField='button' dataFormat={this.cellButton.bind(this)} 
        >Delete</TableHeaderColumn>
      </BootstrapTable>
      </div>
    );
  }
}