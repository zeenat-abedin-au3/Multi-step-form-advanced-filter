import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { FormOutlined, FilterOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

import cLogo from "../../assets/logo.png";
import MenuIcon from "./MenuIcon";
import CustomTitle from "./CustomTitle";

import "./style.css";

const { Header, Sider, Content, Footer } = Layout;

const MasterLayout = ({ children }) => {
  const history = useHistory();
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <img src={cLogo} alt="pipesort" />
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item
            key="1"
            icon={<FormOutlined />}
            onClick={() => history.push("/form")}
          >
            Multi Step Form
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={<FilterOutlined />}
            onClick={() => history.push("/filter")}
          >
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
          <CustomTitle level={2} text="Pipesort" />
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
