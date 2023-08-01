import React from "react";
import { Link } from 'react-router-dom';
import SearchBar from "../Component/SearchBar/SearchBar";
import ReleseAudioTable from "../Component/Table/ReleaseAudioTable"

function ApprovedCatalog() {
  return (
    <>
      <div className="section_title">
        <div className="text_area">
          <h2>All Release Catalogs</h2>
          <p>Exploring our collections</p>
        </div>
        <div className="btn_area">
          <Link to="/release-audio"><button className="btn">Create Release</button></Link>
        </div>
      </div>
      <div className="mt-5">
        <div className="table_title">
          <p>Show 4 entries</p>
          <SearchBar />
        </div>
        <ReleseAudioTable/>
      </div>
    </>
  );
}

export default ApprovedCatalog;
