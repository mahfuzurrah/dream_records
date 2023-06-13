import { Table } from "antd";
import coverImg from '../assets/img/cover.jpg'
import airtelLogo from '../assets/img/Airtel.png'
import vodafoneLogo from '../assets/img/vodafone.png'
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
    title: "Upc/Catalogue Number",
    dataIndex: "ucn",
  },
  {
    title: "Stores",
    dataIndex: "stores",
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
        <div className="c_tune_table_title">
            <img src={coverImg} alt="" className="table_img"/>
        <span>
          Title Here
          <br /> By Name
        </span>
      </div>
    ),
    label: "no info",
    ucn: (
      <span>
        UPC: 10 <br /> CAT#: 10
      </span>
    ),
    stores: (
        <div className="sim_icons">
            <img src={airtelLogo} alt="" />
            <img src={vodafoneLogo} alt="" />
      </div>
    ),
    status: "Approved",
  },
  {
    key: "2",
    title: (
        <div className="c_tune_table_title">
            <img src={coverImg} alt="" className="table_img"/>
        <span>
          Title Here
          <br /> By Name
        </span>
      </div>
    ),
    label: "no info",
    ucn: (
      <span>
        UPC: 10 <br /> CAT#: 10
      </span>
    ),
    stores: (
        <div className="sim_icons">
            <img src={airtelLogo} alt="" />
            <img src={vodafoneLogo} alt="" />
      </div>
    ),
    status: "Pending",
  },
  {
    key: "3",
    title: (
        <div className="c_tune_table_title">
            <img src={coverImg} alt="" className="table_img"/>
        <span>
          Title Here
          <br /> By Name
        </span>
      </div>
    ),
    label: "no info",
    ucn: (
      <span>
        UPC: 10 <br /> CAT#: 10
      </span>
    ),
      stores: (
        <div className="sim_icons">
            <img src={airtelLogo} alt="" />
            <img src={vodafoneLogo} alt="" />
      </div>
    ),
    status: "Failed",
  },
];

const CallerTuneTable = () => (
  <Table columns={columns} dataSource={data} bordered scroll={{ x: 768 }} />
);

export default CallerTuneTable;
