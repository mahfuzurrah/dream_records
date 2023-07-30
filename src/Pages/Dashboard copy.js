import React from "react";
import { Link } from "react-router-dom";
import DashboardCardList from "../Component/DashboardCard/DashboardCardList";
import ApprovedCardList from "../Component/CatalogsCard/ApprovedCardList";
import RowCardList from "../Component/DashboardCard/RowCardList";

const Dashboard = () => {
  return (
    <>
      <div>
        <DashboardCardList />
      </div>
      <div className="mt-4">
        <h2>Latest Release</h2>
        <ApprovedCardList />
      </div>
      <div className="row mt-5">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="draft_list">
            <div className="draft_header">
              <h2>Latest Draft</h2>
              <Link to="/draft">See More</Link>
            </div>
            <div className="ps-3 pe-3 mt-1">
            <RowCardList />
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="draft_list">
            <div className="draft_header">
              <h2>Latest Pending</h2>
              <Link to="/pending">See More</Link>
            </div>
            <div className="ps-3 pe-3 mt-1">
            <RowCardList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
