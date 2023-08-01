import { Table } from "antd";
import coverImg from "../assets/img/cover.jpg";
import { Link } from 'react-router-dom';



const columns = [
  {
    title: "Title",
    dataIndex: "title",
  },
  {
    title: "Label",
    dataIndex: "label",
  },
  {
    title: "Artist",
    dataIndex: "artist",
  },
  {
    title: "Release Date",
    dataIndex: "releaseDate",
  },
  {
    title: "UPC",
    dataIndex: "upc",
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
    title: (
      <Link to="/catalog_details" className="c_tune_table_title">
        <img src={coverImg} alt="" className="table_img" />
        <span>
          Title Here
        </span>
      </Link>
    ),
    label: "no info",
    artist: "name here",
    releaseDate: "22-6-2023",
    upc: (
      <span>
        UPC: empty
      </span>
    ),
    status: "Approved",
  },
  {
    key: "2",
    title: (
      <Link to="/catalog_details" className="c_tune_table_title">
        <img src={coverImg} alt="" className="table_img" />
        <span>
          Title Here
        </span>
      </Link>
    ),
    label: "no info",
    artist: "name here",
    releaseDate: "22-6-2023",
    upc: (
      <span>
        UPC: empty
      </span>
    ),
    status: "Pending",
  },
  {
    key: "3",
    title: (
      <Link to="/catalog_details" className="c_tune_table_title">
        <img src={coverImg} alt="" className="table_img" />
        <span>
          Title Here
        </span>
      </Link>
    ),
    label: "no info",
    artist: "name here",
    releaseDate: "22-6-2023",
    upc: (
      <span>
        UPC: empty
      </span>
    ),
    status: "Failed",
  },
];

const CallerTuneTable = () => (
  <Table columns={columns} dataSource={data} bordered scroll={{ x: 768 }} />
);

export default CallerTuneTable;
