import { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { BiArrowToRight, BiArrowToLeft } from "react-icons/bi";
import { Button, Layout, Menu } from "antd";
import "./Navbar.css";
import Logo from "../assets/img/Logo.svg"
import Bg_logo from "../assets/img/Bg_logo.png"
// Icons
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { FaHome, FaFolderPlus, FaTag, FaChartLine, FaUserPlus, FaYoutube, FaWallet, FaHeadset, FaOrcid, FaPlusSquare, FaRegShareSquare } from "react-icons/fa";

const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo">
          <h2 className="text-white fs-5 text-center mb-0">
            <span className="sm-logo"><img src={Logo} alt="Logo" /></span>
            <span className="lg-logo"><img src={Bg_logo} alt="Logo" /></span>
          </h2>
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={["/"]}
          onClick={({ key }) => {
            if (key == "signout") {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: "/",
              icon: <FaHome />,
              label: "Dashboard",
            },
            {
              key: "release-audio",
              icon: <FaFolderPlus />,
              label: "Release Audio",
            },
            {
              key: "catalog",
              icon: <FaTag />,
              label: "Catalog",
            },
            {
              key: "analytics",
              icon: <FaChartLine className="icons"/>,
              label: "Analytics",
            },
            {
              key: "primary_artist_manage",
              icon: <FaUserPlus />,
              label: "Primary Artist Manage",
            },
            {
              key: "",
              icon: <FaYoutube />,
              label: "YouTube Request",
              children: [
                {
                  key: "add_claim_release",
                  icon: <FaPlusSquare />,
                  label: "Add Claim Release",
                },
                {
                  key: "content_id_request",
                  icon: <FaOrcid />,
                  label: "Content Id Request",
                },
                {
                  key: "artist_channel_request",
                  icon: <FaRegShareSquare />,
                  label: "Artist Channel Request",
                },
              ],
            },
            {
              key: "earning",
              icon: <FaWallet />,
              label: "Earning",
            },
            {
              key: "",
              icon: <FaHeadset />,
              label: "Support Center",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header>
          <Button
            type="text"
            icon={collapsed ? <BiArrowToRight /> : <BiArrowToLeft />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "16px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
