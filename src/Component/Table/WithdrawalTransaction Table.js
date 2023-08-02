import { Table } from "antd";
import { Link } from "react-router-dom";
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
    date: "27-10-2001",
    amount: "₹1235",
    status: "Approved",
  },
  {
    key: "2",
    date: "27-10-2001",
    amount: "₹1235",
    status: "Pending",
  },
  {
    key: "3",
    date: "27-10-2001",
    amount: "₹1235",
    status: "Rejected",
  },
];

const WithdrawalTransactionTable = () => (
  <Table columns={columns} dataSource={data} scroll={{ x: 991 }} />
);

export default WithdrawalTransactionTable;
