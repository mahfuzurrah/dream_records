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
    status: "Failed",
  },
];

const WithdrawalTransactionTable = () => (
  <Table columns={columns} dataSource={data} bordered scroll={{ x: 991}}/>
);

export default WithdrawalTransactionTable;
