import React from "react";
import Ct_Img from "../Component/assets/img/cover.jpg";
import CatalogsInfo from "../Component/CatalogsInfo/CatalogsInfo";

function CatalogDetails() {
  return (
    <>
      <div className="catalog_details">
        <div className="card">
          <img src={Ct_Img} alt="" />
          <div className="c_top_info">
            <div className="icon-list">icon</div>
            <h2 className="mt-3">Track Title </h2>
            <p className="mt-2">By Artist</p>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <CatalogsInfo />
        <div className="btn_group mt-4">
          <button className="btn">Apply For Ringtone</button>
          <button className="btn_s">Edit</button>
        </div>
      </div>
    </>
  );
}

export default CatalogDetails;
