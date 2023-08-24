import { Table } from "antd";
import React, { useState } from "react";
import { BiDownload } from "react-icons/bi";
import { Link } from "react-router-dom";
import TableFilter from "../Filter/TableFilter";
import FailedPopover from "../Popover/FailedPopover";
import SearchBar from "../SearchBar/SearchBar";

const columns = [
  {
    title: "Years",
    dataIndex: "years",
  },
  {
    title: "Months",
    dataIndex: "month",
  },
  {
    title: "Label",
    dataIndex: "label",
  },
  {
    title: "Status",
    dataIndex: "status",
    render: (status) => {
      let color;
      let className = ""; // Initialize className with an empty string

      if (status === "Pending") {
        color = "black";
        className = "pending"; // Set className to "pending" when status is "Pending"
      } else if (status === "Approved") {
        color = "black";
        className = "approved";
      } else if (status === "Failed") {
        color = "black";
        className = "filter_failed";
      } else {
        color = "black";
      }

      return (
        <div className="status_area">
          <span className={`status ${className}`} style={{ color }}>
            {status}
          </span>
          {status === "Failed" && <FailedPopover />}
        </div>
      );
    },
  },
  {
    title: "Action",
    render: (text, record) => {
      const { status } = record;

      if (status === "Approved") {
        return (
          <div className="r_edit_delete">
            <Link to="#" className="edit">
              <BiDownload className="icons" />
            </Link>
          </div>
        );
      } else {
        return null;
      }
    },
  },
];
const data = [
  {
    key: "1",
    years: "2023",
    month: "January",
    status: "Approved",
    label: "label",
  },
  {
    key: "2",
    years: "2023",
    month: "February",
    status: "Pending",
    label: "label",
  },
  {
    key: "3",
    years: "2023",
    month: "March",
    status: "Failed",
    label: "label",
  },
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const AnalyticsTable = () => {
  const [selectedStatus, setSelectedStatus] = useState("all");

  const handleFilter = (status) => {
    setSelectedStatus(status);
  };

  const getFilteredData = (data) => {
    if (selectedStatus === "all") {
      return data;
    } else {
      return data.filter((item) => item.status === selectedStatus);
    }
  };

  return (
    <>
      {/* Filter Area */}
      <TableFilter
        selectedStatus={selectedStatus}
        handleFilter={handleFilter}
      />

      <div className="table_title mt-3">
        <p>Show 4 entries</p>
        <SearchBar />
      </div>

      <Table
        columns={columns}
        dataSource={getFilteredData(data)}
        scroll={{ x: 768 }}
        onChange={onChange}
      />
    </>
  );
};

export default AnalyticsTable;
