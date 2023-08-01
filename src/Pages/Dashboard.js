import React from "react";
import { Link } from "react-router-dom";

import artist_img from "../Component/assets/img/user.png";

import { FaBullhorn, FaPlus } from "react-icons/fa";
import DashboardCardList from "../Component/DashboardCard/DashboardCardList";

import Pending from "../Component/assets/icons/P.svg";
import CoverImg from "../Component/assets/img/cover.jpg";
import Card from "../Component/CatalogsCard/Card";
import DashboardSlider from "../Component/Slider/DashboardSlider";

const Dashboard = () => {
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
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-9 col-lg-7 col-md-6">
            <DashboardSlider/>
          </div>
          <div className="col-xl-3 col-lg-5 col-md-6">
            <div className="announcement">
              <div className="ann_header_title">
                <h2>
                  <FaBullhorn className="icons" />
                  Announcement
                </h2>
              </div>
              <div className="ann_area">
                <h1>The server will be down next Friday</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <DashboardCardList />
        </div>

        <div className="artist_row mt-4">
          <div className="section_title" style={{ border: "none" }}>
            <h3>Label Manage</h3>
          </div>
          <div className="artist_item">
            <ul className="mt-4">
              <li className="add_artist">
                <Link to="/primary_artist_manage">
                  <FaPlus />
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <img src={artist_img} alt="" />
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <img src={artist_img} alt="" />
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <img src={artist_img} alt="" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="row mt-4">
          <div className="section_title" style={{ border: "none" }}>
            <h3>Label Manage</h3>
          </div>
          <div className="relese_card_list">
            <Link to="/contact" className="add_realese">
              <FaPlus className="icons" />
            </Link>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
