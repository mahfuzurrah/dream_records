import React, { useState, useEffect, useRef } from "react";
import { IoIosNotifications } from "react-icons/io";
import { FaBullhorn, FaTimes } from "react-icons/fa";

function Notification() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsVisible(false);
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

  return (
    <div>
      <div className="toggle_not_info">
        <IoIosNotifications className="icons" onClick={toggleMenu} />
        {isOpen && (
          <div className="menu_item" ref={menuRef}>
            {isVisible && (
              <div className="news">
                <FaBullhorn className="icons" />
                <p>Saturday & Sunday is our off day</p>
                <FaTimes className="icons" onClick={handleClose} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Notification;
