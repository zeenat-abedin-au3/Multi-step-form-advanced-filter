import React from "react";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

const MenuIcon = ({ collapsed, onClick }) => (
  <div
    onClick={onClick}
    style={{
      display: "flex",
      alignItems: "center",
      paddingLeft: "15px",
      cursor: "pointer",
    }}
  >
    {collapsed ? (
      <MenuUnfoldOutlined style={{ fontSize: "30px" }} />
    ) : (
      <MenuFoldOutlined style={{ fontSize: "30px" }} />
    )}
  </div>
);

export default MenuIcon;
