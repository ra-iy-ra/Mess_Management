import React from 'react';
import './Table.css'

const Table = () => {


  return (
    <div className="contain-table" style={{margin:'50px'}}>
      <table className="striped-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Meal Plan</th>
            <th>Plan Type</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Payment Status</th>
            <th>Total Amount</th>
            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {/* employee data from db */}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
