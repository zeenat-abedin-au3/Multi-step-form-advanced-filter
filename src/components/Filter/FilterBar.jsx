import React from "react";

import CustomTitle from "../Layout/CustomTitle";
import Price from "./Price";
import Brand from "./Brand";

import { FilterDiv } from "./style";
import CustomerRating from "./CustomerRating";
import Sizes from "./Sizes";
import Categories from "./Categories";

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
          paddingBottom: "20px",
          borderBottom: "1px solid #f0f0f0",
        }}
      />
      <Categories />
      <Price />
      <Brand />
      <CustomerRating />
      <Sizes />
    </FilterDiv>
  );
};

export default FilterBar;
