import React from "react";
import LabelManageTable from "../Component/Table/LabelManageTable";
import LabelManagePopup from "../Component/Modal/LabelManagePopup";

function LabelManage() {

  return (
    <div className="label_manage">
      <div className="section_title">
        <div className="text_area">
          <h1>Label Manage</h1>
        </div>
        <LabelManagePopup/>
      </div>
      <div className="table_content mt-4">
        <LabelManageTable />
      </div>
    </div>
  );
}

export default LabelManage
