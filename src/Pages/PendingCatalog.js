import React from "react";
import SearchBar from "../Component/SearchBar/SearchBar";
import PendingCardList from "../Component/CatalogsCard/PendingCardList";

function PendingCatalog() {
  return (
    <div className="pending_page">
      <div className="section_title">
        <div className="text_area">
          <h2>Pending Catalogs</h2>
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
        <PendingCardList/>
      </div>
    </div>
  );
}

export default PendingCatalog;
