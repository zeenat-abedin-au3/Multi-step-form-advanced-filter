import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Form, Button, Radio } from "antd";
import {
  UserOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  TagOutlined,
} from "@ant-design/icons";

import InputX from "../Common/InputX";
import { handleStepCount, handleChange } from "../../redux/actions/form";

const UserMoreDetails = () => {
  const dispatch = useDispatch();
  const { age, gender, occupation } = useSelector(
    (state) => state.formReducer.formData
  );

  const onChange = (e) => {
    dispatch(handleChange(e.target.name, e.target.value));
  };

  const disable = !age;
  return (
    <Fragment>
      <Form name="basic" style={{ width: "100%" }}>
        <InputX required={true} message="Please input your age" type="number">
          <Input
            prefix={<UserOutlined />}
            placeholder="Age"
            onChange={onChange}
            name="age"
            value={age}
            type="number"
            min={0}
          />
        </InputX>
        <InputX>
          <Radio.Group
            onChange={onChange}
            name="gender"
            defaultValue="female"
            value={gender}
          >
            <Radio.Button value="female">Female</Radio.Button>
            <Radio.Button value="male">Male</Radio.Button>
            <Radio.Button value="others">Others</Radio.Button>
          </Radio.Group>
        </InputX>

        <InputX>
          <Input
            prefix={<TagOutlined />}
            placeholder="Occupation"
            onChange={onChange}
            name="occupation"
            value={occupation}
          />
        </InputX>
      </Form>
      <div>
        <Button
          type="primary"
          onClick={() => dispatch(handleStepCount(3))}
          style={{ marginRight: "5px" }}
          disabled={disable}
        >
          Next {<ArrowRightOutlined />}
        </Button>
        <Button
          onClick={() => dispatch(handleStepCount(1))}
          style={{ marginLeft: "5px" }}
          icon={<ArrowLeftOutlined />}
        >
          Previous
        </Button>
      </div>
    </Fragment>
  );
};

export default UserMoreDetails;
