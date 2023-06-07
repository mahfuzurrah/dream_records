import React from "react";

const Card = ({ icon, title, bgTitle }) => {
  return (
    <div className="Ds_card">
      <div className="card">
        <div className="Ds_icon">{ icon }</div>
        <p>{title}</p>
        <h1>{bgTitle}</h1>
      </div>
    </div>
  );
};

export default Card;
