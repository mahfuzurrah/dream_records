import React from "react";
import Card from "./Card";
import CoverImg from "../assets/img/cover.jpg";
import Draft from "../assets/icons/D.svg";
import { Link } from "react-router-dom";

const DraftCardList = () => {
  const cardData = [
    {
      sImg: CoverImg,
      title: "Song Title",
      sTitle: "Song Title",
      status: Draft,
    },
    {
      sImg: CoverImg,
      title: "Song Title",
      sTitle: "Song Title",
      status: Draft,
    },
    {
      sImg: CoverImg,
      title: "Song Title",
      sTitle: "Song Title",
      status: Draft,
    },
    {
      sImg: CoverImg,
      title: "Song Title",
      sTitle: "Song Title",
      status: Draft,
    },
  ];

  return (
    <div className="row">
      {cardData.map((card, index) => (
        <div className="col-lg-3 col-md-6 col-sm-12">
        <Link to='/catalog_details'>
          <Card
            key={index}
            sImg={card.sImg}
            title={card.title}
            sTitle={card.sTitle}
            status={card.status}
          />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default DraftCardList;
