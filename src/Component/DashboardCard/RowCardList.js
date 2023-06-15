import React from "react";
import RowCard from "./RowCard";
import Approve from "../assets/img/cover.jpg";
import { Link } from "react-router-dom";

const RowCardList = () => {
  const cardData = [
    {
      rImg: Approve,
      title: "Song Title",
      name: "Mahfuzur Rahman",
      dateTitle: 'Release Date',
      date: "27-10-2001",
    },
    {
      rImg: Approve,
      title: "Song Title",
      name: "Mahfuzur Rahman",
      dateTitle: 'Release Date',
      date: "27-10-2001",
    },
    {
      rImg: Approve,
      title: "Song Title",
      name: "Mahfuzur Rahman",
      dateTitle: 'Release Date',
      date: "27-10-2001",
    },
    {
      rImg: Approve,
      title: "Song Title",
      name: "Mahfuzur Rahman",
      dateTitle: 'Release Date',
      date: "27-10-2001",
    },
  ];

  return (
    <div className="row">
      {cardData.map((card, index) => (
        <div className="col-lg-12" key={index}>
          <Link to="/draft">
            <RowCard
              rImg={card.rImg}
              title={card.title}
              name={card.name}
              dateTitle= {card.dateTitle}
              date={card.date}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RowCardList;
