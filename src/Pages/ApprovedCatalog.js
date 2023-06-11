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
      <div className="mt-5 ">
        <div className="table_title">
          <p>Show 4 entries</p>
          <SearchBar />
        </div>
        <ApprovedCardList />
      </div>
    </>
  );
}

export default ApprovedCatalog;
