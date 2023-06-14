import React, { useState } from "react";
import { IoIosNotifications } from "react-icons/io";
import { FaBullhorn, FaTimes } from "react-icons/fa";

function Notification() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div>
      <div className="toggle_not_info">
        <IoIosNotifications className="icons" onClick={toggleMenu} />
        {isOpen && (
          <div className="menu_item">
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
