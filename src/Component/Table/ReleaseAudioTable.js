import { Divider, Radio, Table } from "antd";
import React, { useState } from "react";
import { BiPencil, BiTrashAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import TableFilter from "../Filter/TableFilter";
import SearchBar from "../SearchBar/SearchBar";
import coverImg from "../assets/img/cover.jpg";

const columns = [
  {
    title: "Title",
    dataIndex: "title",
  },
  {
    title: "Label",
    dataIndex: "label",
  },
  {
    title: "Artist",
    dataIndex: "artist",
  },
  {
    title: "Release Date",
    dataIndex: "releaseDate",
  },
  {
    title: "UPC",
    dataIndex: "upc",
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
      return (
        <span className="status" style={{ color }}>
          {status}
        </span>
      );
    },
  },
  {
    title: "Action",
    render: () => (
      <div className="r_edit_delete">
        <Link to="">
          <BiPencil className="icons edit" />
        </Link>
        <Link to="">
          <BiTrashAlt className="icons delete" />
        </Link>
      </div>
    ),
  },
];

const data = [
  {
    key: "Approved",
    title: (
      <Link to="/catalog_details" className="c_tune_table_title">
        <img src={coverImg} alt="" className="table_img" />
        <span>Title Here</span>
      </Link>
    ),
    label: "no info",
    artist: "name here",
    releaseDate: "22-6-2023",
    upc: <span>UPC: empty</span>,
    status: "Approved",
  },
  {
    key: "Pending",
    title: (
      <Link to="/catalog_details" className="c_tune_table_title">
        <img src={coverImg} alt="" className="table_img" />
        <span>Title Here</span>
      </Link>
    ),
    label: "no info",
    artist: "name here",
    releaseDate: "22-6-2023",
    upc: <span>UPC: empty</span>,
    status: "Pending",
  },
  {
    key: "Failed",
    title: (
      <Link to="/catalog_details" className="c_tune_table_title">
        <img src={coverImg} alt="" className="table_img" />
        <span>Title Here</span>
      </Link>
    ),
    label: "no info",
    artist: "name here",
    releaseDate: "22-6-2023",
    upc: <span>UPC: empty</span>,
    status: "Failed",
  },
];

const CallerTuneTable = () => {
  const [selectionType, setSelectionType] = useState("checkbox");
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
    <div>
            {/* Filter Area */}
      <TableFilter
        selectedStatus={selectedStatus}
        handleFilter={handleFilter}
      />

      <div className="table_title mt-5">
        <p>Show 4 entries</p>
        <SearchBar />
      </div>

      {/* Table Area */}
      <Radio.Group
        onChange={({ target: { value } }) => {
          setSelectionType(value);
        }}
        value={selectionType}
      ></Radio.Group>

      <Divider />

      <Table
        className="release_audio_table"
        rowSelection={{
          type: selectionType,
          onChange: (selectedRowKeys, selectedRows) => {
            console.log(
              `selectedRowKeys: ${selectedRowKeys}`,
              "selectedRows: ",
              selectedRows
            );
          },
          getCheckboxProps: (record) => ({
            disabled: record.name === "Disabled User",
            name: record.name,
          }),
        }}
        columns={columns}
        dataSource={getFilteredData(data)}
        scroll={{ x: 768 }}
      />
    </div>
  );
};

export default CallerTuneTable;
