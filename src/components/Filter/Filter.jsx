import React from "react";
import { Row, Col } from "antd";

import FilterBar from "./FilterBar";
import Preview from "./Preview";

const Filter = () => {
  return (
    <Row gutter={32}>
      <Col xs={24} sm={24} md={16} lg={10} xl={6}>
        <FilterBar />
      </Col>
      <Col xs={24} sm={24} md={7} lg={12} xl={16}>
        <Preview />
      </Col>
    </Row>
  );
};

export default Filter;
