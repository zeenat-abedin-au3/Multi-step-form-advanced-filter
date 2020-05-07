import React from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "antd";

import CustomTitle from "../Layout/CustomTitle";
import UserNameDetails from "./UserNameDetails";
import UserMoreDetails from "./UserMoreDetails";
import UserAddDetails from "./UserAddDetails";
import Preview from "./Preview";
import { Wrapper } from "../style/style";
import SubmissionResult from "./Result";

const MultiStepForm = () => {
  const { step } = useSelector((state) => state.formReducer);

  return (
    <Row>
      <Col span={10} offset={6}>
        <CustomTitle level={4} text="Multi step form" />
        <Wrapper>
          {step === 1 && <UserNameDetails />}
          {step === 2 && <UserMoreDetails />}
          {step === 3 && <UserAddDetails />}
          {step === 4 && <Preview />}
          {step === 5 && <SubmissionResult />}
        </Wrapper>
      </Col>
    </Row>
  );
};

export default MultiStepForm;
