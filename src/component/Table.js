import React from "react";

function Table() {
  return (
    <div className="table">
      <table>
        <tr>
          <th>Activity</th>
          <th>Status</th>
          <th>Time taken</th>
          <th>Action</th>
        </tr>
        <tr>
          <td>Running</td>
          <td>Pending</td>
          <td></td>
          <td>Start</td>
        </tr>
      </table>
    </div>
  );
}

export default Table;
