import React from "react";
import { useSelector } from "react-redux";
import ReactJson from "react-json-view";

const Preview = () => {
  const { filterReducer } = useSelector((state) => state);

  return <ReactJson src={filterReducer} />;
};

export default Preview;
