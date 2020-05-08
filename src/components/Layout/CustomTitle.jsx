import React from "react";
import { TitleX } from "../style/style";

const CustomTitle = ({ level, text, ...otherProps }) => (
  <TitleX {...otherProps} level={level}>
    {text}{" "}
  </TitleX>
);

export default CustomTitle;
