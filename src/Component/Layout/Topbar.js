import React, { useState, useEffect, useRef } from "react";
import userImg from "../assets/img/user.png";
import { AiFillSetting } from "react-icons/ai";
import { Link } from "react-router-dom";
import ChangePasswordPopup from "../Modal/ChangePasswordPopup";
import Notification from "../Notification/Notification";

function Topbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleSignOut = () => {
    setIsOpen(false);
    // Perform sign out logic here
  };

  return (
    <div className="topbar_item">
      <Notification />
      <Link to="/profile" className="account_info">
        <p className="name">Mahfuzur Rahman</p>
        <img src={userImg} alt="" />
      </Link>
      <div className="toggle_account_info">
        <AiFillSetting className="icons" onClick={toggleMenu} />
        {isOpen && (
          <div className="menu_item" ref={menuRef}>
            <ChangePasswordPopup />
            <Link onClick={handleSignOut}>
              <p>Sign Out</p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Topbar;
