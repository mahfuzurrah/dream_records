import { Table } from "antd";
const columns = [
  {
    title: "Date",
    dataIndex: "date",
  },
  {
    title: "UPC/EAN",
    dataIndex: "UPC_EAN",
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
    UPC_EAN: "UPC/EAN",
    status: "Approved",
  },
  {
    key: "2",
    date: "27-10-2001",
    UPC_EAN: "UPC/EAN",
    status: "Pending",
  },
  {
    key: "3",
    date: "27-10-2001",
    UPC_EAN: "UPC/EAN",
    status: "Rejected",
  },
];

const ContentIdRequestTable = () => (
  <Table columns={columns} dataSource={data} bordered scroll={{ x: 768 }} />
);

export default ContentIdRequestTable;
