import React from "react";
import { Slider, Select } from "antd";

import { FilterSectionTitle, PriceDiv } from "./style";

const { Option } = Select;

const Price = () => {
  const handleSlider = (value) => {
    console.log(value);
  };
  const handleMinValue = (value) => {
    console.log(value);
  };
  const handleMaxValue = (value) => {
    console.log(value);
  };
  return (
    <PriceDiv>
      <FilterSectionTitle>Price</FilterSectionTitle>
      <Slider
        range
        step={500}
        defaultValue={[0, 8000]}
        min={0}
        max={8000}
        onChange={handleSlider}
      />
      <div className="min-max">
        <Select
          defaultValue="0"
          style={{ width: 80 }}
          onChange={handleMinValue}
        >
          <Option value="0">0</Option>
          <Option value="500">500</Option>
          <Option value="1500">1500</Option>
          <Option value="2000">2000</Option>
          <Option value="2500">2500</Option>
        </Select>
        <span>to</span>
        <Select
          defaultValue="8000"
          style={{ width: 80 }}
          onChange={handleMaxValue}
        >
          <Option value="3000">3000</Option>
          <Option value="6000">6000</Option>
          <Option value="8000">8000</Option>
        </Select>
      </div>
    </PriceDiv>
  );
};

export default Price;
