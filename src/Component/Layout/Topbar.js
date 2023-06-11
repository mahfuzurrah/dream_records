import React, { useState } from "react";
import userImg from "../assets/img/user.png";
import { AiFillSetting } from "react-icons/ai";
import { Link } from "react-router-dom";
import ChangePasswordPopup from "../Modal/ChangePasswordPopup";

function Topbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  

  return (
    <div className="topbar_item">
      <div className="account_info">
        <p className="name">Mahfuzur Rahman</p>
        <img src={userImg} alt="" />
      </div>
      <div className="toggle_account_info">
        <AiFillSetting className="icons" onClick={toggleMenu} />
        {isOpen && (
          <div className="menu_item">
            <ChangePasswordPopup/>
            <Link><p>Sign Out</p></Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Topbar;
