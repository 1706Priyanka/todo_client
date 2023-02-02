import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/sidebar.css";

function Sidebar() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="side-bar">
        <div className="logout-container">
          <h3> Todo List</h3>
          <p
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("email");
              navigate("/");
              window.alert("logged out successfully");
              document.location.reload();
            }}
            className="logout"
          >
            LogOut
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
