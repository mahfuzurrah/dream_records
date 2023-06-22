import React from "react";
import SearchBar from "../Component/SearchBar/SearchBar";
import DraftCardList from "../Component/CatalogsCard/DraftCardList";
import PaginationList from "../Component/Pagination/PaginationList";

function DraftCatalog() {
  return (
    <div className="draft_page">
      <div className="section_title">
        <div className="text_area">
          <h2>Draft Catalogs</h2>
          <p>Exploring our collections</p>
        </div>
        <div className="btn_area">
          <button className="btn">Create Release</button>
        </div>
      </div>
      <div className="mt-5">
        <div className="table_title">
          <p>Show 4 entries</p>
          <SearchBar />
        </div>
        <DraftCardList />
        <div className="mt-5">
          <PaginationList/>
        </div>
      </div>
    </div>
  );
}

export default DraftCatalog;
