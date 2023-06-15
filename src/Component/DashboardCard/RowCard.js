import React from "react";

const RowCard = ({ rImg, title, name, date, dateTitle }) => {
  return (
    <div className="Ds_row_card">
      <div className="card">
        <div className="d-flex align-items-center">
          <img className="cover_img" src={rImg} alt={title} />
          <div>
            <p>{title}</p>
            <span>By {name}</span>
          </div>
        </div>
        <div>
          <span>{dateTitle}</span>
          <p className="date">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default RowCard;
