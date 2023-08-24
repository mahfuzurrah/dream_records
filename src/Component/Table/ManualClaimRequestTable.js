import { Table } from "antd";
import React, { useState } from "react";
import TableFilter from "../Filter/TableFilter";
import FailedPopover from "../Popover/FailedPopover";
import SearchBar from "../SearchBar/SearchBar";

const columns = [
  {
    title: "Timing",
    dataIndex: "date",
  },
  {
    title: "ISRC",
    dataIndex: "ISRC",
  },
  {
    title: "Video Link",
    dataIndex: "channel_link",
  },
  {
    title: "Content ID Activated",
    dataIndex: "CIA",
  },
  {
    title: "UPC",
    dataIndex: "UPC",
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
];
const data = [
  {
    key: "1",
    date: "27-2001",
    ISRC: "ISRC",
    channel_link: "link",
    CIA: "No",
    UPC: "upc",
    status: "Approved",
  },
  {
    key: "2",
    date: "27-2001",
    ISRC: "ISRC",
    channel_link: "link",
    CIA: "Yes",
    UPC: "upc",
    status: "Pending",
  },
  {
    key: "3",
    date: "27-2001",
    ISRC: "ISRC",
    channel_link: "link",
    CIA: "No",
    UPC: "upc",
    status: "Failed",
  },
];

const ManualClaimRequestTable = () => {
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
      />
    </>
  );
};

export default ManualClaimRequestTable;
