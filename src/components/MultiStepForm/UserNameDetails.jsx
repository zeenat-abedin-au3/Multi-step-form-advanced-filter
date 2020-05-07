import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Form, Button } from "antd";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  SafetyCertificateOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

import InputX from "../Common/InputX";
import { handleStepCount, handleChange } from "../../redux/actions/forn";

const UserNameDetails = () => {
  const dispatch = useDispatch();
  const { fullName, email, phone, password } = useSelector(
    (state) => state.formReducer.formData
  );

  const onChange = (e) => {
    dispatch(handleChange(e.target.name, e.target.value));
  };

  const disable = !fullName || !email || !phone || !password;
  return (
    <Fragment>
      <Form name="basic" style={{ width: "100%" }}>
        <InputX required={true} message="Please input your full name">
          <Input
            prefix={<UserOutlined />}
            placeholder="Full name"
            onChange={onChange}
            name="fullName"
            value={fullName}
          />
        </InputX>
        <InputX required={true} message="Please input your Email" type="email">
          <Input
            prefix={<MailOutlined />}
            placeholder="Email"
            name="email"
            value={email}
            onChange={onChange}
          />
        </InputX>
        <InputX required={true} message="Please input your phone number">
          <Input
            prefix={<PhoneOutlined />}
            placeholder="Phone"
            onChange={onChange}
            name="phone"
            value={phone}
            maxLength={10}
          />
        </InputX>
        <InputX required={true} message="Please input your phone number">
          <Input.Password
            prefix={<SafetyCertificateOutlined />}
            placeholder="Password"
            onChange={onChange}
            name="password"
            value={password}
          />
        </InputX>
      </Form>
      <div>
        <Button
          type="primary"
          onClick={() => dispatch(handleStepCount(2))}
          disabled={disable}
        >
          Next {<ArrowRightOutlined />}
        </Button>
      </div>
    </Fragment>
  );
};

export default UserNameDetails;
