import { Table } from "antd";
import { Link } from "react-router-dom";

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
  {
    title: "Action",
    // dataIndex: "AId",
    render: () => <Link to="">Download</Link>,
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
    status: "Cancel",
    label: "label",
  },
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};
const AnalyticsTable = () => (
  <Table
    columns={columns}
    dataSource={data}
    scroll={{ x: 768 }}
    onChange={onChange}
    bordered
  />
);

export default AnalyticsTable;
