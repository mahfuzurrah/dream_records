import React from "react";
import Card from "./Card";
import CoverImg from "../assets/img/cover.jpg";
import Approve from "../assets/icons/S.svg";
import { Link } from "react-router-dom";

const ApprovedCardList = () => {
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
      status: Approve,
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
      status: Approve,
    }
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

export default ApprovedCardList;
