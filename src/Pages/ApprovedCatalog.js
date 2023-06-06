import React from "react";
import SearchBar from "../Component/SearchBar/SearchBar";
import ApprovedCardList from "../Component/CatalogsCard/ApprovedCardList";

function ApprovedCatalog() {
  return (
    <>
      <div className="section_title">
        <div className="text_area">
          <h2>Approved Catalogs</h2>
          <p>Exploring our collections</p>
        </div>
        <div className="btn_area">
          <button className="btn">Create Release</button>
        </div>
      </div>
      <div className="row mt-5 catalog_card_list">
        <div className="table_title">
          <p>Show 4 entries</p>
          <SearchBar />
        </div>
        {/* <div className="col-lg-4"> */}
        <ApprovedCardList />
          {/* </div> */}
      </div>
    </>
  );
}

export default ApprovedCatalog;
