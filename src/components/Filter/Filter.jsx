import React from "react";
import { Row, Col } from "antd";

import FilterBar from "./FilterBar";

const Filter = () => {
  return (
    <Row>
      <Col xs={24} sm={24} md={8} lg={6}>
        <FilterBar />
      </Col>
    </Row>
  );
};

export default Filter;
