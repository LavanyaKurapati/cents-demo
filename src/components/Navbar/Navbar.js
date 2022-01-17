import React from "react";
import { Link } from "react-router-dom";
import { FaColumns, FaRegNewspaper } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { GiWashingMachine } from "react-icons/gi";

function Navbar() {
  return (
    <nav className="navbar-container">
      <Link to="/orders" className="link-item">
        <div className="navbar-item">
          <FaColumns className="navbar-icon" />
          <p>Orders</p>
        </div>
      </Link>
      <Link to="/customers" className="link-item">
        <div className="navbar-item">
          <CgProfile className="navbar-icon" />
          <p>Customers</p>
        </div>
      </Link>
      <Link to="/machines" className="link-item">
        <div className="navbar-item">
          <GiWashingMachine className="navbar-icon" />
          <p>Machines</p>
        </div>
      </Link>
      <Link to="/reports" className="link-item">
        <div className="navbar-item">
          <FaRegNewspaper className="navbar-icon" />
          <p>Reports</p>
        </div>
      </Link>
    </nav>
  );
}

export default Navbar;
