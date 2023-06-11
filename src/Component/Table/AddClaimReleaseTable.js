import { Table } from "antd";
const columns = [
  {
    title: "Date",
    dataIndex: "date",
  },
  {
    title: "URL",
    dataIndex: "url",
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
    url: "url.com",
    UPC_EAN: "upc/ean",
    status: "Approved",
  },
  {
    key: "2",
    date: "27-10-2001",
    url: "url.com",
    UPC_EAN: "upc/ean",
    status: "Pending",
  },
  {
    key: "3",
    date: "27-10-2001",
    url: "url.com",
    UPC_EAN: "upc/ean",
    status: "Failed",
  },
];

const AddClaimReleaseTable = () => (
  <Table columns={columns} dataSource={data} bordered scroll={{ x: 768}}/>
);

export default AddClaimReleaseTable;
