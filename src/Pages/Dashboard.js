import React from "react";
import { Link } from "react-router-dom";
import artist_img from "../Component/assets/img/artist.png";
import { FaPlus} from "react-icons/fa";
import DashboardCardList from "../Component/DashboardCard/DashboardCardList";
import LatestReleaseCard from "../Component/CatalogsCard/LatestReleaseCard";
import DashboardSlider from "../Component/Slider/DashboardSlider";

const Dashboard = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <DashboardSlider />
          </div>
        </div>
        <div className="mt-4">
          <DashboardCardList />
        </div>
        <div className="artist_row mt-5">
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
            <button className="btn">Show More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
