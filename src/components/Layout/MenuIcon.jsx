import React from "react";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { MenuIconX } from "../style/style";

const MenuIcon = ({ collapsed, onClick }) => (
  <MenuIconX onClick={onClick}>
    {collapsed ? (
      <MenuUnfoldOutlined style={{ fontSize: "30px" }} />
    ) : (
      <MenuFoldOutlined style={{ fontSize: "30px" }} />
    )}
  </MenuIconX>
);

export default MenuIcon;
