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
  },
  {
    title: "Last Update",
    dataIndex: "last_up",
  },
  {
    title: "Action",
    dataIndex: "reply",
    render: () => (
      <SupportReplyPopup/>
    ),
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
    status: "Failed",
  },
];

const SupportHistoryTable = () => (
  <Table columns={columns} dataSource={data} bordered scroll={{ x: 991}}/>
);

export default SupportHistoryTable;
