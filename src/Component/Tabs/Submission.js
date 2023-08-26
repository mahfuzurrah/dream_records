import React from "react";
import AssetsTable from "../Table/AssetsTable";
import sub_img from "../assets/img/cover.jpg";

function Submission() {
  return (
    <div className="submission_page-info s_info">
      <div className="row">
        <h2 className="mb-4">Release Information</h2>
        <div className="col-xl-4 col-lg-6 col-md-12 mt-3">
          <img src={sub_img} alt="" className="submission_img" />
        </div>
        <div className="col-xl-4 col-lg-6 col-md-12 mt-3">
          <div className="input_value">
            <p className="input_name">Release Title</p> <span>Not Found</span>
          </div>
          <div className="input_value">
            <p className="input_name">Version/Subtitle</p>{" "}
            <span>Not Found</span>
          </div>
          <div className="input_value">
            <p className="input_name">Primary Artist</p> <span>Not Found</span>
          </div>
          <div className="input_value">
            <p className="input_name">Featuring</p> <span>Not Found</span>
          </div>
          <div className="input_value">
            <p className="input_name">Remixer</p> <span>Not Found</span>
          </div>
          <div className="input_value">
            <p className="input_name">Various Artists / Compilation</p>{" "}
            <span>Not Found</span>
          </div>
          <div className="input_value">
            <p className="input_name">Genre</p> <span>Not Found</span>
          </div>
          <div className="input_value">
            <p className="input_name">Subgenre</p> <span>Not Found</span>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-12 mt-3">
          <div className="input_value">
            <p className="input_name">Label Name</p> <span>Not Found</span>
          </div>
          <div className="input_value">
            <p className="input_name">Format</p> <span>Not Found</span>
          </div>
          <div className="input_value">
            <p className="input_name">Original Release Date</p>{" "}
            <span>Not Found</span>
          </div>
          <div className="input_value">
            <p className="input_name">℗ line</p> <span>Not Found</span>
          </div>
          <div className="input_value">
            <p className="input_name">℗ line</p> <span>Not Found</span>
          </div>
          <div className="input_value">
            <p className="input_name">Production Year</p> <span>Not Found</span>
          </div>
          <div className="input_value">
            <p className="input_name">UPC/EAN</p> <span>Not Found</span>
          </div>
          <div className="input_value">
            <p className="input_name">Producer Catalogue Number</p>
            <span>Not Found</span>
          </div>
        </div>
      </div>
      <hr />
      <div className="row mt-3">
        <div className="col-lg-4 col-md-12">
          <h2 className="mb-3">Release Date</h2>
          <div className="input_value">
            <p className="input_name">Main Release Date</p>
            <span>12-12-2023</span>
          </div>
        </div>
      </div>
      <hr />
      <div className="row mt-3">
        <div className="col-lg-12 col-md-12">
          <h2 className="mb-3">Assets</h2>
          <AssetsTable />
        </div>
      </div>
    </div>
  );
}

export default Submission;
