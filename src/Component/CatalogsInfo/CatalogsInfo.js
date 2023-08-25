import React from "react";
import AssetsTable from "../Table/AssetsTable";
import sub_img from "../assets/img/cover.jpg";

const CatalogsInfo = () => {
  return (
    <div className="submission_page-info s_info">
      <div className="row">
        <h2 className="mb-4">Release Information</h2>
        <div className="col-lg-4 col-md-12">
          <div className="input_value">
            <p className="input_name">Release Title</p> <span>: Not Found</span>
          </div>
          <div className="input_value">
            <p className="input_name">Version/Subtitle</p>{" "}
            <span>: Not Found</span>
          </div>
          <div className="input_value">
            <p className="input_name">Primary Artist</p>{" "}
            <span>: Not Found</span>
          </div>
          <div className="input_value">
            <p className="input_name">Featuring</p> <span>: Not Found</span>
          </div>
          <div className="input_value">
            <p className="input_name">Remixer</p> <span>: Not Found</span>
          </div>
          <div className="input_value">
            <p className="input_name">Song Writer</p> <span>: Not Found</span>
          </div>
          <div className="input_value">
            <p className="input_name">Composer</p> <span>: Not Found</span>
          </div>
          <div className="input_value">
            <p className="input_name">Main Release Date</p>{" "}
            <span>: Not Found</span>
          </div>
          <div className="input_value">
            <p className="input_name">Arranger</p> <span>: Not Found</span>
          </div>
          <div className="input_value">
            <p className="input_name">Producer</p> <span>: Not Found</span>
          </div>
          <div className="input_value">
            <p className="input_name">Original Release Date</p>{" "}
            <span>: Not Found</span>
          </div>
        </div>
        <div className="col-lg-4 col-md-12">
          <div className="input_value">
            <p className="input_name">Lyrics Language</p>{" "}
            <span>: Not Found</span>
          </div>
          <div className="input_value">
            <p className="input_name">Genre</p> <span>: Not Found</span>
          </div>
          <div className="input_value">
            <p className="input_name">Subgenre</p> <span>: Not Found</span>
          </div>
          <div className="input_value">
            <p className="input_name">Label Name</p> <span>: Not Found</span>
          </div>
          <div className="input_value">
            <p className="input_name">Format</p> <span>: Not Found</span>
          </div>
          <div className="input_value">
            <p className="input_name">℗ line</p> <span>: Not Found</span>
          </div>
          <div className="input_value">
            <p className="input_name">© line</p> <span>: Not Found</span>
          </div>
          <div className="input_value">
            <p className="input_name">UPC/EAN</p> <span>: Not Found</span>
          </div>
          <div className="input_value">
            <p className="input_name">ISRC</p> <span>: Not Found</span>
          </div>
          <div className="input_value">
            <p className="input_name">Parental Advisory</p>
            <span>: Not Found</span>
          </div>
          <div className="input_value">
            <p className="input_name">Producer Catalogue Number</p>
            <span>: Lorem ipsum dolor sit amet</span>
          </div>
        </div>
        <div className="col-lg-4 col-md-12">
          <img src={sub_img} alt="" className="submission_img" />
          <h2 className="mt-3">Release Album</h2>
        </div>
      </div>
      <hr />
      <div className="row mt-3">
        <div className="col-lg-4 col-md-12">
          <h2 className="mb-3">Release Date & time</h2>
          <div className="input_value">
            <p className="input_name">Choose a main price tier</p>
            <span>:Not Found</span>
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
};

export default CatalogsInfo;
