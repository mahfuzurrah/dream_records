import { Table } from "antd";
import { BiPencil} from "react-icons/bi";
import { Link } from "react-router-dom";
import UserImg from "../assets/img/user.png";
import DeletePopup from "../Modal/DeletePopup"

const columns = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    className: "p_header_title",
  },
  {
    title: "Spotify ID",
    dataIndex: "SId",
  },
  {
    title: "Apple ID",
    dataIndex: "AId",
  },
  {
    title: "Facebook URL",
    dataIndex: "FId",
  },
  {
    title: "Instagram ID",
    dataIndex: "IId",
  },
  {
    title: "YouTube Channel URL",
    render: () => <Link>Youtube channel Link</Link>,
  },
  {
    title: "Action",
    // dataIndex: "AId",
    render: () => (
      <div className="r_edit_delete">
        <Link className="pen">
          <BiPencil className="icons" />
        </Link>
        <DeletePopup/>
      </div>
    ),
  },
];
const data = [
  {
    key: "1",
    id: "01",
    name: (
      <div className="c_tune_table_title">
        <img src={UserImg} alt="" className="table_user_img" />
        <span>Name Here</span>
      </div>
    ),
    SId: 60,
    AId: 70,
    FId: 70,
    IId: 70,
  },
  {
    key: "2",
    id: "02",
    name: (
      <div className="c_tune_table_title">
        <img src={UserImg} alt="" className="table_user_img" />
        <span>Name Here</span>
      </div>
    ),
    SId: 66,
    AId: 89,
    FId: 89,
    IId: 89,
  },
  {
    key: "3",
    id: "03",
    name: (
      <div className="c_tune_table_title">
        <img src={UserImg} alt="" className="table_user_img" />
        <span>Name Here</span>
      </div>
    ),
    SId: 90,
    AId: 70,
    FId: 70,
    IId: 70,
  },
  {
    key: "4",
    id: "04",
    name: (
      <div className="c_tune_table_title">
        <img src={UserImg} alt="" className="table_user_img" />
        <span>Name Here</span>
      </div>
    ),
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
  <Table
    columns={columns}
    dataSource={data}
    onChange={onChange}
    scroll={{ x: 991 }}
  />
);

export default PrimaryArtistTable;
