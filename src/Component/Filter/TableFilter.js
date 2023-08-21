import React from "react";

const TableFilter = ({ selectedStatus, handleFilter }) => {
  return (
    <div className="table_filter_btn border_bottom">
      <button
        onClick={() => handleFilter("all")}
        className={selectedStatus === "all" ? "active" : ""}
      >
        All
      </button>
      <button
        onClick={() => handleFilter("Approved")}
        className={selectedStatus === "Approved" ? "active" : ""}
      >
        Approved
      </button>
      <button
        onClick={() => handleFilter("Pending")}
        className={selectedStatus === "Pending" ? "active" : ""}
      >
        Pending
      </button>
      <button
        onClick={() => handleFilter("Failed")}
        className={selectedStatus === "Failed" ? "active" : "Failed all_r_d_none"}
      >
        Failed
      </button>
      <button
        onClick={() => handleFilter("Rejected")}
        className={selectedStatus === "Rejected" ? "active" : "rej"}
      >
        Rejected
      </button>
      <button
        onClick={() => handleFilter("Unfinished")}
        className={selectedStatus === "Unfinished" ? "active" : "draft"}
      >
        Unfinished
      </button>
      <button
        onClick={() => handleFilter("Correction Request")}
        className={selectedStatus === "Correction Request" ? "c_req" : ""}
        id="hide_c_request"
      >
        Correction Request
      </button>
    </div>
  );
};

export default TableFilter;
