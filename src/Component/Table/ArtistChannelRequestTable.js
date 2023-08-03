import { Table } from "antd";
import React, { useState } from "react";
import TableFilter from "../Filter/TableFilter";
import SearchBar from "../SearchBar/SearchBar";

const columns = [
  {
    title: "Date",
    dataIndex: "date",
  },
  {
    title: "Channel Link",
    dataIndex: "channel_link",
  },
  {
    title: "Topic Link",
    dataIndex: "t_link",
  },
  {
    title: "UPC/EAN1",
    dataIndex: "UPCC1",
  },
  {
    title: "UPC/EAN2",
    dataIndex: "UPCC2",
  },
  {
    title: "UPC/EAN3",
    dataIndex: "UPCC3",
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
      } else if (status === "Rejected") {
        color = "black";
        className = "Rejected";
      } else {
        color = "black";
      }

      return (
        <span className={`status ${className}`} style={{ color }}>
          {status}
        </span>
      );
    },
  },
];
const data = [
  {
    key: "1",
    date: "27-10-2001",
    channel_link: "link",
    t_link: "link",
    UPCC1: "upc1 here",
    UPCC2: "upc2 here",
    UPCC3: "upc3 here",
    status: "Approved",
  },
  {
    key: "2",
    date: "27-10-2001",
    channel_link: "link",
    t_link: "link",
    UPCC1: "upc1 here",
    UPCC2: "upc2 here",
    UPCC3: "upc3 here",
    status: "Pending",
  },
  {
    key: "3",
    date: "27-10-2001",
    channel_link: "link",
    t_link: "link",
    UPCC1: "upc1 here",
    UPCC2: "upc2 here",
    UPCC3: "upc3 here",
    status: "Rejected",
  },
];

const ArtistChannelRequestTable = () => {
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
        bordered
        scroll={{ x: 768 }}
      />
    </>
  );
};

export default ArtistChannelRequestTable;
