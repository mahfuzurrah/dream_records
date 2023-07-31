import React from "react";
import { Link } from "react-router-dom";
import Pending from "../assets/icons/P.svg";
import CoverImg from "../assets/img/cover.jpg";
import Card from "./Card";

const Latest_Release_Card = () => {
  const cardData = [
    {
      sImg: CoverImg,
      title: "Song Title",
      sTitle: "Song Title",
      status: Pending,
    },
    {
      sImg: CoverImg,
      title: "Song Title",
      sTitle: "Song Title",
      status: Pending,
    },
    {
      sImg: CoverImg,
      title: "Song Title",
      sTitle: "Song Title",
      status: Pending,
    },
    {
      sImg: CoverImg,
      title: "Song Title",
      sTitle: "Song Title",
      status: Pending,
    },
  ];

  return (
    <div className="row">
      {cardData.map((card, index) => (
        <div className="col-lg-3 col-md-6 col-sm-12">
          <Link to="/catalog_details">
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

export default Latest_Release_Card;
