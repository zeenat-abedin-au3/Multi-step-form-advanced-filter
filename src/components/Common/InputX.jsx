import React from "react";
import { Form } from "antd";

const { Item } = Form;

const InputX = ({
  label,
  required,
  message,
  children,
  type,
  ...otherProps
}) => (
  <Item
    label={label}
    rules={[{ required: required, message: { message }, type: type }]}
    {...otherProps}
  >
    {children}
  </Item>
);

export default InputX;
