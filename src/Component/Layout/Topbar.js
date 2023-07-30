import React, { useState} from "react";
import userImg from "../assets/img/user.png";
import { AiFillSetting } from "react-icons/ai";
import { Link } from "react-router-dom";
import ChangePasswordPopup from "../Modal/ChangePasswordPopup";
import Notification from "../Notification/Notification";
import Logo from "../assets/img/Logo.svg";

function Topbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // const handleOutsideClick = (e) => {
  //   if (menuRef.current && !menuRef.current.contains(e.target)) {
  //     setIsOpen(false);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleOutsideClick);

  //   return () => {
  //     document.removeEventListener("mousedown", handleOutsideClick);
  //   };
  // }, []);

  const handleSignOut = () => {
    setIsOpen(false);
  };

  return (
    <div className="topbar_item">
      <div className="logo">
          <h2 className="text-white fs-5 text-center mb-0">
            <span className="sm-logo">
              <img src={Logo} alt="Logo" />
            </span>
          </h2>
        </div>
      <div className="nav_right">
      <Notification />
      <Link to="/profile" className="account_info">
        <p className="name">Mahfuzur Rahman</p>
        <img src={userImg} alt="" />
      </Link>
      <div className="toggle_account_info">
        <AiFillSetting className="icons" onClick={toggleMenu} />
        {isOpen && (
          <div className="menu_item">
            <ChangePasswordPopup />
            <Link to="/" onClick={handleSignOut}>
              <p>Sign Out</p>
            </Link>
          </div>
        )}
      </div>
      </div>
    </div>
  );
}

export default Topbar;
