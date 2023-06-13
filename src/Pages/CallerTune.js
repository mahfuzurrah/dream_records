import React from 'react'
import CallerTuneTable from "../Component/Table/CallerTuneTable";
import SearchBar from "../Component/SearchBar/SearchBar";

function CallerTune() {
  return (
    <>
      <div className="section_title">
        <div className="text_area">
          <h1>Caller Tune</h1>
        </div>
          </div>
          <div className="table_content">
        <div className="table_title">
          <p>Show 4 entries</p>
          <SearchBar/>
        </div>
        <CallerTuneTable />
      </div>
    </>
  )
}

export default CallerTune
