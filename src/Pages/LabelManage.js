import React from "react";
import LabelManageTable from "../Component/Table/LabelManageTable";
import SearchBar from "../Component/SearchBar/SearchBar";
import LabelManagePopup from "../Component/Modal/LabelManagePopup";

function LabelManage() {

  return (
    <div className="label_manage">
      <div className="section_title">
        <div className="text_area">
          <h1>Label Manage</h1>
        </div>
      </div>
        <LabelManagePopup/>
      <div className="table_content mt-3">
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
