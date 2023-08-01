import React from "react";
import { Link } from "react-router-dom";
import Pending from "../assets/icons/P.svg";
import CoverImg from "../assets/img/cover.jpg";
import Card from "./Card";

const LatestReleaseCard = () => {
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
    <>
      {cardData.map((card, index) => (
        <Link to="/catalog_details">
          <Card
            key={index}
            sImg={card.sImg}
            title={card.title}
            sTitle={card.sTitle}
            status={card.status}
          />
        </Link>
      ))}
    </>
  );
};

export default LatestReleaseCard;
