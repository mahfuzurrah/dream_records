import React from "react";
import CallerTuneTable from "../Component/Table/CallerTuneTable";

function CallerTune() {
  return (
    <>
      <div className="section_title">
        <div className="text_area">
          <h1>Caller Tune</h1>
        </div>
      </div>
      <div className="table_content">
        <CallerTuneTable/>
      </div>
    </>
  );
}

export default CallerTune;
