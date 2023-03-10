import React from "react";
import NavTable from "./NavTable";
import Sidebar from "./Sidebar";
import "./styles/header.css";

function Header() {
  const user = localStorage.getItem("email").split("@")[0].toUpperCase();
  return (
    <>
      <div>
        <Sidebar />
        <nav className="header">
          <section className="user-container">
            <div className="user-details">
              <p
                style={{
                  fontSize: "20px",
                  color: "black",
                  marginLeft: "1200%",
                }}
              >
                {user}
              </p>
            </div>
          </section>
        </nav>
      </div>
      <div>
        <NavTable />
      </div>
    </>
  );
}

export default Header;
