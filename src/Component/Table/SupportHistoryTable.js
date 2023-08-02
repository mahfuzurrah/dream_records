import { Table } from "antd";
import SupportReplyPopup from "../Modal/SupportReplyPopup";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "Title",
    dataIndex: "title",
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
    title: "Last Update",
    dataIndex: "last_up",
  },
  {
    title: "Action",
    dataIndex: "reply",
    render: () => <SupportReplyPopup />,
  },
];

const data = [
  {
    key: "1",
    id: "01",
    title: "title.com",
    last_up: "10-12-2023",
    status: "Approved",
  },
  {
    key: "2",
    id: "02",
    title: "title.com",
    last_up: "10-12-2023",
    status: "Pending",
  },
  {
    key: "3",
    id: "03",
    title: "title.com",
    last_up: "10-12-2023",
    status: "Rejected",
  },
];

const SupportHistoryTable = () => (
  <Table columns={columns} dataSource={data} scroll={{ x: 991 }} />
);

export default SupportHistoryTable;
