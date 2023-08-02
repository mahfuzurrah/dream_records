import React from "react";

const TableFilter = ({ selectedStatus, handleFilter }) => {
    return (
      <div className="table_filter_btn">
        <button onClick={() => handleFilter("all")} className={selectedStatus === "all" ? "active" : ""}>
          All
        </button>
        <button onClick={() => handleFilter("Approved")} className={selectedStatus === "Approved" ? "active" : ""}>
          Approved
        </button>
        <button onClick={() => handleFilter("Pending")} className={selectedStatus === "Pending" ? "active" : ""}>
          Pending
        </button>
        <button onClick={() => handleFilter("Failed")} className={selectedStatus === "Failed" ? "active" : ""}>
          Failed
        </button>
      </div>
    );
  };
  
  export default TableFilter;
