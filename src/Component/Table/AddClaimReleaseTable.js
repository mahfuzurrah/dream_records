import { Table } from "antd";
import React, { useState } from "react";
import TableFilter from "../Filter/TableFilter";
import SearchBar from "../SearchBar/SearchBar";
import FailedPopover from "../Popover/FailedPopover";

const columns = [
  {
    title: "Date",
    dataIndex: "date",
  },
  {
    title: "URL",
    dataIndex: "url",
  },
  {
    title: "UPC/EAN",
    dataIndex: "UPC_EAN",
  },
  {
    title: "Lable Name (Who send a claim)",
    dataIndex: "LNS",
  },
  {
    title: "Lable Name (Who received a claim)",
    dataIndex: "LNR",
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
            {status === 'Failed' && <FailedPopover/>}
          </div>
      );
    },
  },
];
const data = [
  {
    key: "1",
    date: "27-10-2001",
    url: "url.com",
    UPC_EAN: "upc/ean",
    LNS: "name",
    LNR: "name",
    status: "Approved",
  },
  {
    key: "2",
    date: "27-10-2001",
    url: "url.com",
    UPC_EAN: "upc/ean",
    LNS: "name",
    LNR: "name",
    status: "Pending",
  },
  {
    key: "3",
    date: "27-10-2001",
    url: "url.com",
    UPC_EAN: "upc/ean",
    LNS: "name",
    LNR: "name",
    status: "Failed",
  },
];

const AddClaimReleaseTable = () => {
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

      <div className="table_title mt-5">
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

export default AddClaimReleaseTable;
