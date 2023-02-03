import React, { useContext } from "react";
import { context } from "../context/AuthContext";

function Table() {
  const { todo } = useContext(context);
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Activity</th>
            <th>Status</th>
            <th>Time taken</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todo &&
            todo?.map((item, idx) => {
              return (
                <tr key={idx}>
                  <td>{item.activity}</td>
                  <td>Pending</td>
                  <td></td>
                  <td>Start</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
