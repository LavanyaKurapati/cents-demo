import React from "react";
import "./header.css";
import { CgProfile } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import {
  MdOutlineLocalLaundryService,
  MdOutlineLocationCity,
} from "react-icons/md";

function Header() {
  return (
    <div className="header">
      <div className="left-part">
        <div className="admin">
          <FiSettings className="header-icon" />
          <p>Admin</p>
        </div>
        <div className="laundromat">
          <MdOutlineLocalLaundryService className="header-icon" />
          <p>Laundromats</p>
        </div>
      </div>
      <div className="middle-part">
        <div className="locations">
          <MdOutlineLocationCity className="header-icon" />
          <p>All Locations</p>
        </div>
      </div>
      <div className="right-part">
        <div className="right-sub-part">
          <img
            src="https://pngimg.com/uploads/letter_c/letter_c_PNG7.png"
            className="cents-image"
          />
          <p className="cents-text">Give your two cents</p>
        </div>
        <CgProfile className="icon" />
      </div>
    </div>
  );
}

export default Header;
