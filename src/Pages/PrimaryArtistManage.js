import React from "react";
import PrimaryArtistTable from "../Component/Table/PrimaryArtistTable";
import SearchBar from "../Component/SearchBar/SearchBar";
import PrimaryArtistAddPopup from "../Component/Modal/PrimaryArtistAddPopup";

function PrimaryArtistManage() {

  return (
    <div>
      <div className="section_title border_bottom">
        <div className="text_area">
          <h1>Primary Artist</h1>
        </div>
        <hr className="mt-4" />
        <PrimaryArtistAddPopup/>
      </div>
      <div className="table_content mt-4">
        <div className="table_title">
          <p>Show 4 entries</p>
          <SearchBar/>
        </div>
        <PrimaryArtistTable />
      </div>
    </div>
  );
}

export default PrimaryArtistManage;
