import { Table } from "antd";
const columns = [
  {
    title: "Date",
    dataIndex: "date",
  },
  {
    title: "Month",
    dataIndex: "month",
  },
  {
    title: "Status",
    dataIndex: "amount"
  }
];
const data = [
  {
    key: "1",
    date: "27-10-2001",
    month: "January",
    amount: "₹ 2500",
  },
  {
    key: "2",
    date: "27-10-2001",
    month: "February",
    amount: "₹ 2500",
  },
  {
    key: "3",
    date: "27-10-2001",
    month: "March",
    amount: "₹ 2500",
  },
];

const EarningHistoryTable = () => (
  <Table columns={columns} dataSource={data} bordered scroll={{ x: 768}} />
);

export default EarningHistoryTable;
