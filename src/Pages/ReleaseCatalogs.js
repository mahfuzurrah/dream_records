import React from "react";
import { Link } from 'react-router-dom';
import ReleseAudioTable from "../Component/Table/ReleaseAudioTable"

function ReleaseCatalogs() {
  return (
    <>
      <div className="section_title">
        <div className="text_area">
          <h2>All Release Catalogs</h2>
        </div>
        <div className="btn_area">
          <Link to="/release-audio"><button className="btn">Create Release</button></Link>
        </div>
      </div>
      <div className="relese_audio_filter_btn_add  mt-4">
        <ReleseAudioTable/>
      </div>
    </>
  );
}

export default ReleaseCatalogs;
