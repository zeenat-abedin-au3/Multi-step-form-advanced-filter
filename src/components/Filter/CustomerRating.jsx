import React, { useState, useEffect } from "react";
import { Checkbox } from "antd";

import { RatingDiv, FilterSectionTitle, CheckboxDiv } from "./style";

import data from "../../data/data.json";

const CustomerRating = () => {
  const [ratingsData, setRatingsData] = useState([]);
  useEffect(() => {
    // will be coming from api
    const { ratings } = data;
    setRatingsData(ratings);
  }, []);
  const onChange = (selectdValues) => {
    console.log(selectdValues);
  };

  return (
    <RatingDiv>
      <FilterSectionTitle>Customer Ratings</FilterSectionTitle>
      <CheckboxDiv>
        {ratingsData.length && (
          <Checkbox.Group
            options={ratingsData}
            onChange={onChange}
            style={{ display: "flex", flexDirection: "column" }}
          />
        )}
      </CheckboxDiv>
    </RatingDiv>
  );
};

export default CustomerRating;
