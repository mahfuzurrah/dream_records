import React from "react";

const Card = ({ sImg, title, sTitle, status }) => {
  return (
    <div className="catalog_card">
      <div className="card position-relative">
        <img src={status} alt={title} className="status_icon" />
        <img className="cover_img" src={sImg} alt={title} />
        <h2>{title}</h2>
        <p>{sTitle}</p>
      </div>
    </div>
  );
};

export default Card;
