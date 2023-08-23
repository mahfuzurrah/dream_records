import React, { useState } from "react";
import TableFilter from "../Filter/TableFilter";
import SearchBar from "../SearchBar/SearchBar";
import { Table } from "antd";
import { Link } from "react-router-dom";
import { BiDownload } from "react-icons/bi";
import AntPopover from "../Popover/AntPopover";

const WithdrawalTransactionTable = () => {
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

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Amount",
      dataIndex: "amount",
    },
    {
      title: "Bank Info",
      dataIndex: "bank",
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
          <span className={`status ${className}`} style={{ color }}>
            {status}
          </span>
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
        } else if (status === "Failed") {
          return (
            <AntPopover />
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
      date: "27-10-2001",
      amount: "₹1235",
      bank: "Bank Name",
      status: "Approved",
    },
    {
      key: "2",
      date: "27-10-2001",
      amount: "₹1235",
      bank: "Bank Name",
      status: "Pending",
    },
    {
      key: "3",
      date: "27-10-2001",
      amount: "₹1235",
      bank: "Bank Name",
      status: "Failed",
    },
  ];

  return (
    <>
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
        scroll={{ x: 991 }}
      />
    </>
  );
};

export default WithdrawalTransactionTable;
