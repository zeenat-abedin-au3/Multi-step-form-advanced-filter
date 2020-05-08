import React, { useState, useEffect } from "react";
import { Checkbox } from "antd";
import { useDispatch } from "react-redux";

import { BrandDiv, FilterSectionTitle, CheckboxDiv } from "./style";
import { ShowMore } from "../style/style";

import data from "../../data/data.json";
import { filterChange } from "../../redux/actions/filter";

const Brand = () => {
  const dispatch = useDispatch();

  const [brandsData, setBrandsData] = useState([]);
  const [loadMore, setLoadMore] = useState(false);

  useEffect(() => {
    // Later data will be coming from api
    const { brands } = data;

    setBrandsData(brands);
  }, []);

  const onChange = (selectedValues) => {
    dispatch(filterChange("brands", selectedValues));
  };

  const handleLoadMore = () => {
    setLoadMore(true);
  };
  const handleLess = () => {
    setLoadMore(false);
  };
  return (
    <BrandDiv>
      <FilterSectionTitle>Brands</FilterSectionTitle>
      <CheckboxDiv>
        {brandsData.length && (
          <Checkbox.Group
            options={loadMore ? brandsData : brandsData.slice(0, 5)}
            onChange={onChange}
            style={{
              display: "flex",
              flexDirection: "column",
              maxHeight: "120px",
              overflowY: "auto",
            }}
          />
        )}
      </CheckboxDiv>
      {loadMore ? (
        <ShowMore onClick={handleLess}>Show less</ShowMore>
      ) : (
        <ShowMore onClick={handleLoadMore}>
          Show {brandsData.length - 5} More
        </ShowMore>
      )}
    </BrandDiv>
  );
};

export default Brand;
