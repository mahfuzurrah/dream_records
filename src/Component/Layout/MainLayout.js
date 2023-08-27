import { Button, Layout, Menu } from "antd";
import React, { useEffect, useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsBank2 } from "react-icons/bs";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "../Layout/Navbar.css";

import { FaPlus, FaPlusSquare } from "react-icons/fa";
import Analytics from "../assets/icons/Analytics.svg";
import Cataog from "../assets/icons/Cataog.svg";
import Dashboard from "../assets/icons/Dashboard.svg";
import Earning from "../assets/icons/Earning.svg";
import Label from "../assets/icons/Label.svg";
import P_A_M from "../assets/icons/P_A_M.svg";
import Support_Center from "../assets/icons/Support Center.svg";
import Y_T from "../assets/icons/YouTube_Request.svg";
import Topbar from "./Topbar";

const { Header, Sider, Content, Footer } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("dashboard");

  useEffect(() => {
    const currentPath = location.pathname.split("/")[1];
    setActiveItem(currentPath || "dashboard");
  }, [location.pathname]);

  const handleToggle = () => {
    setCollapsed((prevCollapsed) => !prevCollapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        className={`fixed-sider ${collapsed ? "sider-collapsed" : ""}`}
        trigger={null}
        width={250}
      >
        <Menu
          mode="inline"
          selectedKeys={[activeItem]}
          onClick={({ key }) => {
            if (key === "signout") {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: "release-audio",
              label: "Release Audio",
              icon: <FaPlus />,
              className: "release-audio",
            },
            {
              key: "dashboard",
              icon: <img src={Dashboard} alt="" />,
              label: "Dashboard",
              className: "dashboard",
            },
            {
              key: "catalog",
              icon: <img src={Cataog} alt="" />,
              label: "Catalog",
              children: [
                {
                  key: "all-release",
                  label: "All Release",
                },
                {
                  key: "caller_tune",
                  label: "Caller Tune",
                },
              ],
            },
            {
              key: "analytics",
              icon: <img src={Analytics} alt="" />,
              label: "Analytics",
            },
            {
              key: "primary_artist_manage",
              icon: <img src={P_A_M} alt="" />,
              label: "Primary Artist Manage",
            },
            {
              key: "label_manage",
              icon: <img src={Label} alt="" />,
              label: "Label Manage",
            },
            {
              key: "youtube-request",
              icon: <img src={Y_T} alt="" />,
              label: "YouTube Request",
              children: [
                {
                  key: "add_claim_release",
                  label: "Claim Release",
                },
                {
                  key: "content_id_request",
                  label: "Content ID",
                },
                {
                  key: "artist_channel_request",
                  label: "Artist Channel",
                },
                {
                  key: "manual_laim_request",
                  label: "Manual Claim",
                },
              ],
            },
            {
              key: "earning",
              icon: <img src={Earning} alt="" />,
              label: "Earning",
              children: [
                {
                  key: "overview",
                  icon: <FaPlusSquare />,
                  label: "Overview",
                },
                {
                  key: "withdraw",
                  icon: <BsBank2 />,
                  label: "Withdraw",
                },
              ],
            },
            {
              key: "support_center",
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
        <Footer
          className="footer"
        >
          <p>Dream Record ©2023 Created by Subhamay Karjee</p>
          <div className="sponsored_by">
          Partnered by
          </div>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
