import React from "react";
import Card from "./Card";
import CoverImg from "../assets/img/cover.jpg";
import RingtoneImg from "../assets/icons/ringtone.svg";
import Approve from "../assets/icons/S.svg";
import { Link } from "react-router-dom";

const ApprovedCardList = () => {
  const cardData = [
    {
      sImg: CoverImg,
      title: "Song Title",
      sTitle: "Song Title",
      status: Approve,
      ringtone: RingtoneImg
    },
    {
      sImg: CoverImg,
      title: "Song Title",
      sTitle: "Song Title",
      status: Approve,
      ringtone: RingtoneImg,
    },
    {
      sImg: CoverImg,
      title: "Song Title",
      sTitle: "Song Title",
      status: Approve,
      ringtone: RingtoneImg,
    },
    {
      sImg: CoverImg,
      title: "Song Title",
      sTitle: "Song Title",
      status: Approve,
      ringtone: RingtoneImg,
    }
  ];

  return (
    <div className="row">
      {cardData.map((card, index) => (
        <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
          <Link to='/catalog_details'>
            <Card
              sImg={card.sImg}
              title={card.title}
              sTitle={card.sTitle}
              status={card.status}
              ringtone={card.ringtone}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ApprovedCardList;
