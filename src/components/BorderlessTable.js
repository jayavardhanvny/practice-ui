import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


class BorderlessTable extends React.Component {
  
    render() {
      const students = this.props.students;
      console.log("dfasdf; "+students)
      return (
        <BootstrapTable data={ students } options={ { noDataText: 'This is custom text for empty data' } }>
            <TableHeaderColumn dataField='idNumber' isKey={ true }>ID</TableHeaderColumn>
            <TableHeaderColumn dataField='firstName'>Student Name</TableHeaderColumn>
            <TableHeaderColumn dataField='mobile'>Student Mobile</TableHeaderColumn>
        </BootstrapTable>
      );
    }
  }

  export default BorderlessTable