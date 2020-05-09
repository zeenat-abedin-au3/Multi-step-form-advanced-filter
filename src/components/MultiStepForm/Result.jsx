import React from "react";
import { Result, Button } from "antd";
import { useDispatch } from "react-redux";

import { clearForm } from "../../redux/actions/form";

const SubmissionResult = () => {
  const dispatch = useDispatch();
  return (
    <Result
      status="success"
      title="Successfully Submitted Multi step form data"
      subTitle="Thank you for registration"
      extra={[
        <Button
          type="primary"
          key="again"
          onClick={() => dispatch(clearForm())}
        >
          Do it again
        </Button>,
      ]}
    />
  );
};

export default SubmissionResult;
