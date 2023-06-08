import React from "react";

const Card = ({ sImg, title, sTitle, status, ringtone }) => {
  return (
    <div className="catalog_card">
      <div className="card position-relative">
        <div className="status_icon">
        <img src={status} alt={title} className="status" />
        <img src={ringtone} alt={title} className="ringtone"/>
        </div>
        <img className="cover_img" src={sImg} alt={title} />
        <h2>{title}</h2>
        <p>{sTitle}</p>
      </div>
    </div>
  );
};

export default Card;
