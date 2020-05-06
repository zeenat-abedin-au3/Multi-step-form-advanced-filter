import React from "react";
import { Row, Col } from "antd";
import CustomTitle from "../Layout/CustomTitle";

const MultiStepForm = () => {
  return (
    <Row>
      <Col span={12} offset={6}>
        <CustomTitle level={4} text="Multi step form" />
      </Col>
    </Row>
  );
};

export default MultiStepForm;
