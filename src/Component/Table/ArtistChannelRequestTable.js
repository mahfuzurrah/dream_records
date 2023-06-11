import { Table } from "antd";
const columns = [
  {
    title: "Date",
    dataIndex: "date",
  },
  {
    title: "Channel Link",
    dataIndex: "channel_link",
  },
  {
    title: "Topic Link",
    dataIndex: "t_link",
  },
  {
    title: "UPC/EAN1",
    dataIndex: "UPCC1",
  },
  {
    title: "UPC/EAN2",
    dataIndex: "UPCC2",
  },
  {
    title: "UPC/EAN3",
    dataIndex: "UPCC3",
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
    channel_link: "link",
    t_link: "link",
    UPCC1: "upc1 here",
    UPCC2: "upc2 here",
    UPCC3: "upc3 here",
    status: "Approved",
  },
  {
    key: "2",
    date: "27-10-2001",
    channel_link: "link",
    t_link: "link",
    UPCC1: "upc1 here",
    UPCC2: "upc2 here",
    UPCC3: "upc3 here",
    status: "Pending",
  },
  {
    key: "3",
    date: "27-10-2001",
    channel_link: "link",
    t_link: "link",
    UPCC1: "upc1 here",
    UPCC2: "upc2 here",
    UPCC3: "upc3 here",
    status: "Failed",
  },
];

const ArtistChannelRequestTable = () => (
  <Table columns={columns} dataSource={data} bordered scroll={{ x: 768}}/>
);

export default ArtistChannelRequestTable
