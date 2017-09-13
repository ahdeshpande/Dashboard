import React from 'react';
import TableRow from './TableRow'

const DataTable = ({ data }) => {
  const rowItems = data.map((item) => {
    return (
      <TableRow itemData= { item } />
    );
  });

  return (
    <div className="row">
      <div className="col-md-12">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th className="col-md-4">Shoe Model</th>
              <th >Gross Sales</th>
            </tr>
          </thead>
          <tbody>
            { rowItems }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
