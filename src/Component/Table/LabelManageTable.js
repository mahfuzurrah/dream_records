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
    title: "Title",
    dataIndex: "name",
    sorter: {
      compare: (a, b) => a.name - b.name,
      multiple: 3,
    },
  },
  {
    title: "Status",
    dataIndex: "status",
    sorter: {
      compare: (a, b) => a.status - b.status,
      multiple: 1,
    },
  },
  {
    title: "Action",
    // dataIndex: "status",
    render: () => <Link to="/action_primary_artist">action</Link>,
  },
];
const data = [
  {
    key: "1",
    id: "01",
    name: "Title Here",
    status: "New Label",
  },
  {
    key: "2",
    id: "02",
    name: "Title Here",
    status: "Approved",
  },
  {
    key: "3",
    id: "03",
    name: "Title Here",
    status: "Rejected",
  }
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};
const PrimaryArtistTable = () => (
  <Table
    columns={columns}
    dataSource={data}
    onChange={onChange}
    scroll={{ x: 991 }}
  />
);

export default PrimaryArtistTable;
