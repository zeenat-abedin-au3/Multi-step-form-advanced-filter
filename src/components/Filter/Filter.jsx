import React from "react";
import { Row, Col } from "antd";

import FilterBar from "./FilterBar";

const Filter = () => {
  return (
    <Row>
      <Col span={7}>
        <FilterBar />
      </Col>
    </Row>
  );
};

export default Filter;
