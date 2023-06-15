import React, { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { BiArrowToRight, BiArrowToLeft } from "react-icons/bi";
import { BsMusicNote, BsBank2 } from "react-icons/bs";
import { Button, Layout } from "antd";
import { Menu } from 'antd';
import "../Layout/Navbar.css";
import Logo from "../assets/img/Logo.svg";

import {
  FaHome,
  FaFolderPlus,
  FaTag,
  FaChartLine,
  FaUserPlus,
  FaYoutube,
  FaWallet,
  FaHeadset,
  FaOrcid,
  FaPlusSquare,
  // FaRegShareSquare,
  FaClipboardList,
  FaCheckCircle,
  FaClock,
  FaFirstdraft,
  FaPhoneVolume
} from "react-icons/fa";
import Topbar from "./Topbar";

const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        className="fixed-sider"
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={250}
      >
        <div className="logo">
          <h2 className="text-white fs-5 text-center mb-0">
            <span className="sm-logo">
              <img src={Logo} alt="Logo" />
            </span>
          </h2>
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={["/"]}
          onClick={({ key }) => {
            if (key === "signout") {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: "/", // Unique key
              icon: <FaHome />,
              label: "Dashboard",
            },
            {
              key: "release-audio", // Unique key
              icon: <FaFolderPlus />,
              label: "Release Audio",
            },
            {
              key: "catalog", // Unique key
              icon: <FaClipboardList />,
              label: "Catalog",
              children: [
                {
                  key: "approved", // Unique key
                  icon: <FaCheckCircle />,
                  label: "Approved",
                },
                {
                  key: "draft", // Unique key
                  icon: <FaFirstdraft />,
                  label: "Draft",
                },
                {
                  key: "pending", // Unique key
                  icon: <FaClock />,
                  label: "Pending",
                },
                {
                  key: "caller_tune", // Unique key
                  icon: <FaPhoneVolume />,
                  label: "Caller Tune",
                },
              ],
            },
            {
              key: "analytics", // Unique key
              icon: <FaChartLine className="icons" />,
              label: "Analytics",
            },
            {
              key: "primary_artist_manage", // Unique key
              icon: <FaUserPlus />,
              label: "Primary Artist Manage",
            },
            {
              key: "label_manage", // Unique key
              icon: <FaTag />,
              label: "Label Manage",
            },
            {
              key: "youtube-request", // Unique key
              icon: <FaYoutube />,
              label: "YouTube Request",
              children: [
                {
                  key: "add_claim_release", // Unique key
                  icon: <FaPlusSquare />,
                  label: "Add Claim Release",
                },
                {
                  key: "content_id_request", // Unique key
                  icon: <FaOrcid />,
                  label: "Content Id Request",
                },
                {
                  key: "artist_channel_request", // Unique key
                  icon: <BsMusicNote />,
                  label: "Artist Channel Request",
                },
              ],
            },
            {
              key: "earning", // Unique key
              icon: <FaWallet />,
              label: "Earning",
              children: [
                {
                  key: "overview", // Unique key
                  icon: <FaPlusSquare />,
                  label: "Overview",
                },
                {
                  key: "withdraw", // Unique key
                  icon: <BsBank2 />,
                  label: "Withdraw",
                },
              ],
            },
            {
              key: "support_center", // Unique key
              icon: <FaHeadset />,
              label: "Support Center",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className={`fixed-header ${collapsed ? "collapsed" : ""}`}
          style={{
            margin: "24px 24px",
            padding: 0,
            minHeight: 100,
            marginLeft: collapsed ? 80 : 250,
          }}
        >
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
          <Topbar />
        </Header>
        <Content
          className="body_content"
          style={{
            margin: "24px 24px",
            padding: 24,
            minHeight: 100,
            marginLeft: collapsed
              ? 80
              : `calc(200px + ${collapsed ? 0 : 80}px)`,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
