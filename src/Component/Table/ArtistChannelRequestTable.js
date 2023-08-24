import { Table } from "antd";
import React, { useState } from "react";
import TableFilter from "../Filter/TableFilter";
import FailedPopover from "../Popover/FailedPopover";
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
    title: "UPC1",
    dataIndex: "UPCC1",
  },
  {
    title: "UPC2",
    dataIndex: "UPCC2",
  },
  {
    title: "UPC3",
    dataIndex: "UPCC3",
  },
  {
    title: "Status",
    dataIndex: "status",
    render: (status) => {
      let color;
      let className = "";

      if (status === "Pending") {
        color = "black";
        className = "pending";
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
    date: "27-10-2023",
    channel_link: "link",
    t_link: "link",
    UPCC1: "upc1 here",
    UPCC2: "upc2 here",
    UPCC3: "upc3 here",
    status: "Approved",
  },
  {
    key: "2",
    date: "27-10-2023",
    channel_link: "link",
    t_link: "link",
    UPCC1: "upc1 here",
    UPCC2: "upc2 here",
    UPCC3: "upc3 here",
    status: "Pending",
  },
  {
    key: "3",
    date: "27-10-2023",
    channel_link: "link",
    t_link: "link",
    UPCC1: "upc1 here",
    UPCC2: "upc2 here",
    UPCC3: "upc3 here",
    status: "Failed",
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
        scroll={{ x: 768 }}
      />
    </>
  );
};

export default ArtistChannelRequestTable;
