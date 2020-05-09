import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Form, Button } from "antd";
import {
  HomeOutlined,
  ArrowRightOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";

import InputX from "../Common/InputX";
import { handleStepCount, handleChange } from "../../redux/actions/form";

const UserAddDetails = () => {
  const dispatch = useDispatch();
  const { address, city, pincode, state } = useSelector(
    (state) => state.formReducer.formData
  );

  const onChange = (e) => {
    dispatch(handleChange(e.target.name, e.target.value));
  };

  const disable = !address || !city || !pincode || !state;
  return (
    <Fragment>
      <Form name="basic" style={{ width: "100%" }}>
        <InputX required={true} message="Please input your address">
          <Input
            prefix={<HomeOutlined />}
            placeholder="Address"
            onChange={onChange}
            name="address"
            value={address}
          />
        </InputX>
        <InputX required={true} message="Please input your city">
          <Input
            prefix={<HomeOutlined />}
            placeholder="City"
            onChange={onChange}
            name="city"
            value={city}
          />
        </InputX>
        <InputX required={true} message="Please input your pincode">
          <Input
            prefix={<HomeOutlined />}
            placeholder="Pincode"
            onChange={onChange}
            name="pincode"
            value={pincode}
            minLength={6}
            maxLength={8}
          />
        </InputX>
        <InputX required={true} message="Please input your state">
          <Input
            prefix={<HomeOutlined />}
            placeholder="State"
            onChange={onChange}
            name="state"
            value={state}
          />
        </InputX>
      </Form>
      <div>
        <Button
          type="primary"
          onClick={() => dispatch(handleStepCount(4))}
          style={{ marginRight: "5px" }}
          disabled={disable}
        >
          Preview {<ArrowRightOutlined />}
        </Button>
        <Button
          onClick={() => dispatch(handleStepCount(2))}
          style={{ marginLeft: "5px" }}
          icon={<ArrowLeftOutlined />}
        >
          Previous
        </Button>
      </div>
    </Fragment>
  );
};

export default UserAddDetails;
