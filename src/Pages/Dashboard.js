import React from "react";
import { Link } from "react-router-dom";

import artist_img from "../Component/assets/img/artist.png";

import { FaBullhorn, FaCheckCircle, FaPlus, FaUserPlus } from "react-icons/fa";
import DashboardCardList from "../Component/DashboardCard/DashboardCardList";

import LatestReleaseCard from "../Component/CatalogsCard/LatestReleaseCard";
import DashboardSlider from "../Component/Slider/DashboardSlider";

const Dashboard = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-9 col-lg-7 col-md-6">
            <DashboardSlider />
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

        <div className="artist_row mt-5">
          <div className="section_title d_title" style={{ border: "none" }}>
            <h3 className="mb-4">
              <FaUserPlus className="icons" />
              Primary Artist
            </h3>
          </div>
          <div className="artist_item">
            <ul className="mt-2">
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

        <div className="row mt-5">
          <div className="section_title d_title" style={{ border: "none" }}>
            <h3 className="mb-4">
              <FaCheckCircle className="icons circle" />
              Latest Release
            </h3>
          </div>
          <div className="relese_card_list mt-2">
            <Link to="/release-audio" className="add_realese">
              <FaPlus className="icons" />
              <p>Create New Release</p>
            </Link>
            <LatestReleaseCard />
          </div>
          <div className="f_performance mt-5">
            <h3>
              Your <br />
              Financial <br />
              Performance
            </h3>
            <h1><span>₹</span> 00.00</h1>
            <button className="btn">Show more</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
