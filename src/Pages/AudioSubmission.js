import React from "react";
import { Link } from 'react-router-dom';
import CatalogsInfo from "../Component/CatalogsInfo/CatalogsInfo";
import { BiMusic } from "react-icons/bi";
import Cover_img from '../Component/assets/img/cover.jpg'
import SubmitConfirmationPopup from "../Component/Modal/SubmitConfirmationPopup";

const AudioSubmission = () => {
  return (
    <>
      <div className="section_title">
        <div className="text_area">
          <h1>Submission</h1>
          <p>Release your submission</p>
        </div>
        <div className="btn_area">
          <SubmitConfirmationPopup />
          <Link to="/release-audio" className="btn_s">Edit</Link>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-9 col-md-12">
          <CatalogsInfo />
          <div className="row s_info mt-5">
            <h2 className="mb-4">Release Information</h2>
            <div className="col-lg-3">
              <div className="items">
                <div className="item">
                  <div className="input_value">
                    <p className="input_name">Main Release Date</p>{" "}
                    <span>: 12-12-2023</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-12 mt-5 upload_info">
          <div className="card audio">
            <BiMusic className="icons"/>
            <p>Song Name Here</p>
          </div>
          <div className="card mt-4">
            <img src={Cover_img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AudioSubmission;
