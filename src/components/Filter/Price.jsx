import React from "react";
import { Slider, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { FilterSectionTitle, PriceDiv } from "./style";
import { filterChange } from "../../redux/actions/filter";

const { Option } = Select;

const Price = () => {
  const dispatch = useDispatch();
  const { price } = useSelector((state) => state.filterReducer);

  const handleSlider = (value) => {
    dispatch(filterChange("price", value));
  };
  const handleMinValue = (value) => {
    dispatch(filterChange("price", [+value, +price[1]]));
  };
  const handleMaxValue = (value) => {
    dispatch(filterChange("price", [+price[0], +value]));
  };

  return (
    <PriceDiv>
      <FilterSectionTitle>Price</FilterSectionTitle>
      <Slider
        range
        step={500}
        defaultValue={price}
        min={0}
        max={8000}
        onChange={handleSlider}
      />
      <div className="min-max">
        <Select
          defaultValue={String(price[0])}
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
          defaultValue={String(price[1])}
          style={{ width: 80 }}
          onChange={handleMaxValue}
        >
          <Option value="3000">3000</Option>
          <Option value="6000" selected>
            6000
          </Option>
          <Option value="8000">8000</Option>
        </Select>
      </div>
    </PriceDiv>
  );
};

export default Price;
