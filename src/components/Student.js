
import React, { Component, useState } from 'react';
import { render } from 'react-dom';

class Student extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.student.idNumber}</td>
                <td>{this.props.student.firstName}</td>
				<td>{this.props.student.mobile}</td>
			</tr>
		)
	}
}

export default Student