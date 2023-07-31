import React from "react";

const Card = ({ d_bg, title, bgTitle }) => {
  return (
    <div className="Ds_card">
      <div className="card">
        <img src={d_bg} className="d_bg" alt="" />
        <div className="card-body">
        <h3>{title}</h3>
        <h1>{bgTitle}</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
