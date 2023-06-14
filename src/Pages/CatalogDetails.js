import React from "react";
import Ct_Img from "../Component/assets/img/cover.jpg";
import CatalogsInfo from "../Component/CatalogsInfo/CatalogsInfo";
import RingtoneImg from "../Component/assets/icons/ringtone.svg";
import Approve from "../Component/assets/icons/S.svg";
import CallerTunePopup from "../Component/Modal/CallerTunePopup";

function CatalogDetails() {
  return (
    <>
      <div className="catalog_details">
        <div className="card">
          <img src={Ct_Img} alt="" />
          <div className="c_top_info">
            <div className="icon-list">
              <img src={Approve} className="ringtone" alt="" />
              <img src={RingtoneImg} className="ringtone" alt="" />
            </div>
            <h2 className="mt-3">Track Title </h2>
            <p className="mt-2">By Artist</p>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <CatalogsInfo />
        <div className="btn_group mt-4">
          <CallerTunePopup/>
          <button className="btn_s">Edit</button>
        </div>
      </div>
    </>
  );
}

export default CatalogDetails;
