import React from "react";
import Card from "./Card";
import { MdCreateNewFolder, MdAlarm, MdDone } from "react-icons/md";

const DashboardCardList = () => {
  const cardData = [
    {
      icon: <MdCreateNewFolder className="icons" />,
      title: "Total Created Audio",
      bgTitle: "5",
    },
    {
      icon: <MdAlarm className="icons" />,
      title: "Total Pending Audio",
      bgTitle: "5",
    },
    {
      icon: <MdDone className="icons" />,
      title: "Total Pending Audio",
      bgTitle: "5",
    },
  ];

  return (
    <div className="row">
      {cardData.map((card, index) => (
        <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
          <Card
            icon={card.icon}
            title={card.title}
            bgTitle={card.bgTitle}
          />
        </div>
      ))}
    </div>
  );
};

export default DashboardCardList;
