import React from "react";

import CustomTitle from "../Layout/CustomTitle";
import Price from "./Price";
import Brand from "./Brand";

import { FilterDiv } from "./style";

const FilterBar = () => {
  return (
    <FilterDiv>
      <CustomTitle
        level={4}
        text="Filter"
        style={{
          textAlign: "center",
          textTransform: "uppercase",
          color: "#aaa",
          marginBottom: "20px",
        }}
      />
      <Price />
      <Brand />
    </FilterDiv>
  );
};

export default FilterBar;
