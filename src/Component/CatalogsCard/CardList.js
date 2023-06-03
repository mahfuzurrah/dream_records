import React from "react";
import Card from "./Card";
import CoverImg from "../assets/img/cover.jpg";
import Approve from "../assets/icons/S.svg";
import Draft from "../assets/icons/D.svg";
import Pending from "../assets/icons/P.svg";

const CardList = () => {
  const cardData = [
    {
      sImg: CoverImg,
      title: "Song Title",
      sTitle: "Song Title",
      status: Approve,
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
      status: Pending,
    },
    {
      sImg: CoverImg,
      title: "Song Title",
      sTitle: "Song Title",
      status: Approve,
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
      status: Approve,
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
      status: Pending,
    },
  ];

  return (
    <div className="row">
      {cardData.map((card, index) => (
        <div className="col-lg-3 col-md-6 col-sm-12">
          <Card
            key={index}
            sImg={card.sImg}
            title={card.title}
            sTitle={card.sTitle}
            status={card.status}
          />
        </div>
      ))}
    </div>
  );
};

export default CardList;
