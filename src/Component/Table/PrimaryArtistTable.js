import { Table } from "antd";
import { Link } from "react-router-dom";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    sorter: {
      compare: (a, b) => a.SId - b.SId,
      multiple: 2,
    },
  },
  {
    title: "Name",
    dataIndex: "name",
    sorter: {
      compare: (a, b) => a.name - b.name,
      multiple: 3,
    },
  },
  {
    title: "Spotify ID",
    dataIndex: "SId",
    sorter: {
      compare: (a, b) => a.SId - b.SId,
      multiple: 2,
    },
  },
  {
    title: "Apple ID",
    dataIndex: "AId",
    sorter: {
      compare: (a, b) => a.AId - b.AId,
      multiple: 1,
    },
  },
  {
    title: "Facebook URL",
    dataIndex: "FId",
    sorter: {
      compare: (a, b) => a.AId - b.AId,
      multiple: 1,
    },
  },
  {
    title: "Instagram ID",
    dataIndex: "IId",
    sorter: {
      compare: (a, b) => a.AId - b.AId,
      multiple: 1,
    },
  },
  {
    title: "YouTube Channel URL",
    render: () => <Link>Youtube channel Link</Link>,
  },
  {
    title: "Action",
    // dataIndex: "AId",
    render: () => <Link to="/edit_primary_artist">Edit</Link>,
  },
];
const data = [
  {
    key: "1",
    id: "01",
    name: "Name Here",
    SId: 60,
    AId: 70,
    FId: 70,
    IId: 70,
  },
  {
    key: "2",
    id: "02",
    name: "Name Here",
    SId: 66,
    AId: 89,
    FId: 89,
    IId: 89,
  },
  {
    key: "3",
    id: "03",
    name: "Name Here",
    SId: 90,
    AId: 70,
    FId: 70,
    IId: 70,
  },
  {
    key: "4",
    id: "04",
    name: "Name Here",
    SId: 99,
    AId: 89,
    FId: 89,
    IId: 89,
  },
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};
const PrimaryArtistTable = () => (
  <Table columns={columns} dataSource={data} onChange={onChange} scroll={{ x: 991}}/>
);

export default PrimaryArtistTable;
