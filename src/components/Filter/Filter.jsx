import React from "react";
import { Row, Col } from "antd";

import FilterBar from "./FilterBar";

const Filter = () => {
  return (
    <Row>
      <Col span={6}>
        <FilterBar />
      </Col>
    </Row>
  );
};

export default Filter;
