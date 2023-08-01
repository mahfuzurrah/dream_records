import { Button, Layout, Menu } from "antd";
import React, { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsBank2, BsMusicNote } from "react-icons/bs";
import { Outlet, useNavigate } from "react-router-dom";
import "../Layout/Navbar.css";

import {
  FaCheckCircle,
  // FaClipboardList,
  FaClock,
  FaFirstdraft,
  // FaHeadset,
  // FaHome,
  FaOrcid,
  FaPhoneVolume,
  FaPlus,
  FaPlusSquare,
} from "react-icons/fa";
import Analytics from "../assets/icons/Analytics.svg";
import Cataog from "../assets/icons/Cataog.svg";
import Dashboard from "../assets/icons/Dashboard.svg";
import Earning from "../assets/icons/Earning.svg";
import Label from "../assets/icons/Label.svg";
import P_A_M from "../assets/icons/P_A_M.svg";
import Support_Center from "../assets/icons/Support Center.svg";
import Y_T from "../assets/icons/YouTube_Request.svg";
import Topbar from "./Topbar";

const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setCollapsed((prevCollapsed) => !prevCollapsed);
  };


  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        className={`fixed-sider ${collapsed ? "sider-collapsed" : ""}`}
        trigger={null}
        // collapsible
        // collapsed={collapsed}
        width={250}
      >
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
              key: "release-audio", // Unique key
              label: "Release Audio",
              icon: <FaPlus />,
              className: "release-audio",
            },
            {
              key: "dashboard", // Unique key
              icon: <img src={Dashboard} alt="" />,
              label: "Dashboard",
              className: "dashboard",
            },
            {
              key: "catalog", // Unique key
              icon: <img src={Cataog} alt="" />,
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
              icon: <img src={Analytics} alt="" />,
              label: "Analytics",
            },
            {
              key: "primary_artist_manage", // Unique key
              icon: <img src={P_A_M} alt="" />,
              label: "Primary Artist Manage",
            },
            {
              key: "label_manage", // Unique key
              icon: <img src={Label} alt="" />,
              label: "Label Manage",
            },
            {
              key: "youtube-request", // Unique key
              icon: <img src={Y_T} alt="" />,
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
              icon: <img src={Earning} alt="" />,
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
              icon: <img src={Support_Center} alt="" />,
              label: "Support Center",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="fixed-header"
          style={{
            padding: 0,
            minHeight: 100,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <BiX className="toggle_icons" /> : <BiMenu />}
            onClick={handleToggle}
            style={{
              fontSize: "30px",
              width: 58,
              height: 50,
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
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
