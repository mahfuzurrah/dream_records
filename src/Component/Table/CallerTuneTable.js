import { Table } from "antd";
import React, { useState } from "react";
import TableFilter from "../Filter/TableFilter";
import SearchBar from "../SearchBar/SearchBar";
import airtelLogo from "../assets/img/Airtel.png";
import coverImg from "../assets/img/cover.jpg";
import vodafoneLogo from "../assets/img/vodafone.png";

const columns = [
  {
    title: "Title",
    dataIndex: "title",
    className: "header_title"
  },
  {
    title: "Label",
    dataIndex: "label",
  },
  {
    title: "Upc/Catalogue Number",
    dataIndex: "ucn",
  },
  {
    title: "Stores",
    dataIndex: "stores",
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
    title: (
      <div className="c_tune_table_title">
        <img src={coverImg} alt="" className="table_img" />
        <span>
          Title Here
          <br /> By Name
        </span>
      </div>
    ),
    label: "no info",
    ucn: (
      <span>
        UPC: 10 <br /> CAT#: 10
      </span>
    ),
    stores: (
      <div className="sim_icons">
        <img src={airtelLogo} alt="" />
        <img src={vodafoneLogo} alt="" />
      </div>
    ),
    status: "Approved",
  },
  {
    key: "2",
    title: (
      <div className="c_tune_table_title">
        <img src={coverImg} alt="" className="table_img" />
        <span>
          Title Here
          <br /> By Name
        </span>
      </div>
    ),
    label: "no info",
    ucn: (
      <span>
        UPC: 10 <br /> CAT#: 10
      </span>
    ),
    stores: (
      <div className="sim_icons">
        <img src={airtelLogo} alt="" />
        <img src={vodafoneLogo} alt="" />
      </div>
    ),
    status: "Pending",
  },
  {
    key: "3",
    title: (
      <div className="c_tune_table_title">
        <img src={coverImg} alt="" className="table_img" />
        <span>
          Title Here
          <br /> By Name
        </span>
      </div>
    ),
    label: "no info",
    ucn: (
      <span>
        UPC: 10 <br /> CAT#: 10
      </span>
    ),
    stores: (
      <div className="sim_icons">
        <img src={airtelLogo} alt="" />
        <img src={vodafoneLogo} alt="" />
      </div>
    ),
    status: "Rejected",
  },
];

const CallerTuneTable = () => {
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
        bordered
        scroll={{ x: 768 }}
      />
    </>
  );
};

export default CallerTuneTable;
