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
    status: "Failed",
  },
];

const ContentIdRequestTable = () => (
  <Table columns={columns} dataSource={data} bordered scroll={{ x: 768}}/>
);

export default ContentIdRequestTable;
