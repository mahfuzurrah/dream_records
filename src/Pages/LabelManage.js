import React from "react";
import LabelManageTable from "../Component/Table/LabelManageTable";
import SearchBar from "../Component/SearchBar/SearchBar";

function LabelManage() {

  return (
    <div className="label_manage">
      <div className="section_title">
        <div className="text_area">
          <h1>Label Manage</h1>
        </div>
      </div>
      <div className="btn_area">
        <button className="btn add_label_btn">Add Label</button>
      </div>
      <div className="table_content">
        <div className="table_title">
          <p>Show 4 entries</p>
          <SearchBar/>
        </div>
        <LabelManageTable />
      </div>
    </div>
  );
}

export default LabelManage
