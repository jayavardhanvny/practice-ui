import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/css/react-bootstrap-table.css'


let order = 'desc';

class SortTable extends React.Component {

    // revertSortFunc(a, b, order) {   // order is desc or asc
    //     if (order === 'desc') {
    //       return a.idNumber - b.idNumber;
    //     } else {
    //       return b.idNumber - a.idNumber;
    //     }
    //   }
    handleBtnClick = () => {
        if (order === 'desc') {
          this.refs.table.handleSort('asc', 'idNumber');
          order = 'asc';
        } else {
          this.refs.table.handleSort('desc', 'idNumber');
          order = 'desc';
        }
      }
    

  render() {
    const students = this.props.students;
    return (
      <div>
        <p style={ { color: 'red' } }>You cam click header to sort or click following button to perform a sorting by expose API</p>
        <button onClick={ this.handleBtnClick }>Sort Product Name</button>
        <BootstrapTable ref='table' data={ students } options={ { noDataText: 'This is custom text for empty data' } }>
            <TableHeaderColumn  dataField='idNumber' 
            isKey={ true } dataSort={ true } >ID</TableHeaderColumn>
            <TableHeaderColumn className='glyphicon glyphicon-triangle-top' dataField='firstName' dataSort={ true } >Student Name</TableHeaderColumn>
            <TableHeaderColumn dataField='mobile'>Student Mobile</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default SortTable