import { Table } from "antd";
const columns = [
  {
    title: "Issue Date",
    dataIndex: "date",
  },
  {
    title: "Years",
    dataIndex: "years",
  },
  {
    title: "Month",
    dataIndex: "month",
  },
  {
    title: "Status",
    dataIndex: "amount",
  },
];
const data = [
  {
    key: "1",
    years: "2024",
    month: "January",
    date: "27-10-2023",
    amount: "₹ 2500",
  },
  {
    key: "2",
    years: "2024",
    month: "February",
    date: "27-10-2023",
    amount: "₹ 2500",
  },
  {
    key: "3",
    years: "2024",
    month: "March",
    date: "27-10-2023",
    amount: "₹ 2500",
  },
];

const EarningHistoryTable = () => (
  <Table columns={columns} dataSource={data} scroll={{ x: 768 }} />
);

export default EarningHistoryTable;
