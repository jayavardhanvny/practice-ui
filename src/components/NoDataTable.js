import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'


class NoDataTable extends React.Component {
  
    render() {
      const students = this.props.students;
      return (
        <BootstrapTable ref='table' data={ students } options={ { noDataText: 'This is custom text for empty data' } }>
            <TableHeaderColumn dataField='idNumber' isKey={ true }>ID</TableHeaderColumn>
            <TableHeaderColumn dataField='firstName'>Student Name</TableHeaderColumn>
            <TableHeaderColumn dataField='mobile'>Student Mobile</TableHeaderColumn>
        </BootstrapTable>
      );
    }
  }

  export default NoDataTable