import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import Student from './Student';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import '../bootstrap.min.css'

class TableComponent extends Component {
    
    render () {
        
        const students = this.props.students.map(student =>
			<Student key={student._links.self.href} student={student}
        />);
        return (
            <table class="table">
                <thead class="thead-dark"></thead>
                 
					<tr>
						<th>ID </th>
						<th>Firt Name</th>
						<th>Mobile</th>
					</tr>
                 
                    <tbody>
					{ students }
				</tbody>
			</table>
            
            // <NoDataTable students = { students } />
            
        );
    };
    
}


export default TableComponent
// render(<App />, document.getElementById('root'));