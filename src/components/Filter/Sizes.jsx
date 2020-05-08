import React, { useState, useEffect } from "react";
import { Checkbox } from "antd";
import { useDispatch } from "react-redux";

import data from "../../data/data.json";
import { filterChange } from "../../redux/actions/filter";

import { SizesDiv, FilterSectionTitle, CheckboxDiv } from "./style";
import { ShowMore } from "../style/style";

const Sizes = () => {
  const dispatch = useDispatch();

  const [sizesData, setSizesData] = useState([]);
  const [loadMore, setLoadMore] = useState(false);

  useEffect(() => {
    // will be coming from api
    const { sizes } = data;
    setSizesData(sizes);
  }, []);

  const onChange = (selectedSizes) => {
    dispatch(filterChange("sizes", selectedSizes));
  };

  const handleLoadMore = () => {
    setLoadMore(true);
  };
  const handleLess = () => {
    setLoadMore(false);
  };

  return (
    <SizesDiv>
      <FilterSectionTitle>SIZE</FilterSectionTitle>
      <CheckboxDiv>
        {sizesData.length && (
          <Checkbox.Group
            options={loadMore ? sizesData : sizesData.slice(0, 5)}
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
          Show {sizesData.length - 5} More
        </ShowMore>
      )}
    </SizesDiv>
  );
};

export default Sizes;
