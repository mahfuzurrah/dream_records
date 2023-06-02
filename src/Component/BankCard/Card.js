import React, { useState, useEffect, useRef } from "react";
import { BsBank2 } from "react-icons/bs";
import { BiDotsVerticalRounded } from "react-icons/bi";

function Card({ bankName, accountNumber, companyName, activateCard, isActive }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const iconsRef = useRef(null);

  const handlePrimaryClick = () => {
    activateCard();
    setIsMenuOpen(false); // Close the menu when primary is clicked
  };

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (iconsRef.current && !iconsRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);



  return (
    <div className={`bank_card card ${isActive ? "active" : "inactive"}`}>
      <div className="d-flex align-items-center">
        <div className="bank_icon">
          <BsBank2 className="icons" />
        </div>
        <div className="bank_info ms-4">
          <p>{bankName}</p>
          <p>
            <span>....</span>
            {accountNumber}
          </p>
          <p>{companyName}</p>
        </div>
      </div>
      <div className="dot_toggle" ref={iconsRef}>
        <BiDotsVerticalRounded className="icons" onClick={handleMenuClick} />
        {isMenuOpen && (
          <div className="toggle_menu">
            <ul>
              <li className="primary" onClick={handlePrimaryClick}>
                Primary
              </li>
              <li className="mt-2" onClick={() => setIsMenuOpen(false)}>Edit</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
