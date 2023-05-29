import React from "react";
import PrimaryArtistTable from "../Component/Table/PrimaryArtistTable";
import SearchBar from "../Component/SearchBar/SearchBar";

function PrimaryArtistManage() {

  return (
    <div>
      <div className="section_title">
        <div className="text_area">
          <h1>Primary Artist</h1>
          <p>A primary artist is the main or lead artist</p>
        </div>
      </div>
      <div className="table_content">
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
