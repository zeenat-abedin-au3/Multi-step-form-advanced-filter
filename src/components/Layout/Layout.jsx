import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { FormOutlined, FilterOutlined } from "@ant-design/icons";
import cLogo from "../../assets/logo.png";

import "./style.css";
import MenuIcon from "./MenuIcon";
import CustomTitle from "./CustomTitle";

const { Header, Sider, Content, Footer } = Layout;

const MasterLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <img src={cLogo} alt="pipesort" />
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<FormOutlined />}>
            Multi Step Form
          </Menu.Item>
          <Menu.Item key="2" icon={<FilterOutlined />}>
            Filter
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{ padding: 0, display: "flex", alignItems: "center" }}
        >
          <MenuIcon collapsed={collapsed} onClick={toggle} />
          <CustomTitle />
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px 0px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
        <Footer style={{ textAlign: "center", padding: "20px 50px" }}>
          Pipesort ©2020
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MasterLayout;
