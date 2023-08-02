import React, { useState } from "react";
import { Table } from "antd";
import TableFilter from "../Filter/TableFilter";
import SearchBar from "../SearchBar/SearchBar";

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
      if (status === "Pending") {
        color = "orange";
      } else if (status === "Approved") {
        color = "green";
      } else if (status === "Failed") {
        color = "red";
      } else {
        color = "black";
      }
      return <span style={{ color }}>{status}</span>;
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
      <Table columns={columns} dataSource={getFilteredData(data)} bordered scroll={{ x: 768 }} />
    </>
  );
};

export default AddClaimReleaseTable;
