import React from "react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import swiper_img from "../Component/assets/img/Swiper_img/Swiper-bg.png";
import artist_img from "../Component/assets/img/user.png";

import { FaBullhorn, FaPlus } from "react-icons/fa";
import DashboardCardList from "../Component/DashboardCard/DashboardCardList";

import Pending from "../Component/assets/icons/P.svg";
import CoverImg from "../Component/assets/img/cover.jpg";
import Card from "../Component/CatalogsCard/Card";

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
          <div className="col-lg-8">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="swipe_content">
                  <img src={swiper_img} alt="" />
                  <div className="text_content">
                    <p>Hello,</p>
                    <h1>Mahfuzur R.</h1>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swipe_content">
                  <img src={swiper_img} alt="" />
                  <div className="text_content">
                    <p>Hello,</p>
                    <h1>Mahfuzur R.</h1>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swipe_content">
                  <img src={swiper_img} alt="" />
                  <div className="text_content">
                    <p>Hello,</p>
                    <h1>Mahfuzur R.</h1>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swipe_content">
                  <img src={swiper_img} alt="" />
                  <div className="text_content">
                    <p>Hello,</p>
                    <h1>Mahfuzur R.</h1>
                  </div>
                </div>
              </SwiperSlide>
              {/* Add more slides here */}
            </Swiper>
          </div>
          <div className="col-lg-4">
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
        <div className="row mt-4">
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
              <div className="card_area">
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
        </div>
      </div>
    </>
  );
};

export default Dashboard;
