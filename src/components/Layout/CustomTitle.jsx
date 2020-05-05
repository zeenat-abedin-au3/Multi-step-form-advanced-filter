import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

const CustomTitle = () => (
  <Title level={2} style={{ textAlign: "center", flex: 1, margin: "0px" }}>
    Pipesort{" "}
  </Title>
);

export default CustomTitle;
