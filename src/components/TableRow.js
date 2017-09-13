import React, { Component } from 'react';

const TableRow = ({ itemData }) => {

	if(!itemData) {
		return (
			<div>No Item Data...</div>
		);
	}

	return (

		<tr>
			<td>{ itemData.Product }</td>
			<td>{ itemData.Sales }</td>
		</tr>

	);

};

export default TableRow;
