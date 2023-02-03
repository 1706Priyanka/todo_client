import React, { useContext, useState } from "react";
import Table from "./Table";
import { context } from "../context/AuthContext";

function NavTable() {
  const [activity, setActivity] = useState("");
  const { postTodo } = useContext(context);
  const handleChange = (e) => {
    setActivity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activity.length) {
      postTodo({ todo: [{ activity }] });
      document.querySelector("input").value = "";
    }
  };
  return (
    <div>
      <div>
        <form method="POST">
          <div>
            <input type="text" onChange={handleChange} className="addTask" />
          </div>
          <button onClick={handleSubmit} className="addactivity">
            {" "}
            Add new Activity
          </button>
        </form>
        <Table />
      </div>
    </div>
  );
}

export default NavTable;
