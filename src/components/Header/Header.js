import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div>
        <div className="admin">
          <p>Admin</p>
        </div>
        <div className="laundromats">
          <p>Laundromats</p>
        </div>
      </div>
      <div>
        <p>All Locations</p>
      </div>
    </div>
  );
}

export default Header;
