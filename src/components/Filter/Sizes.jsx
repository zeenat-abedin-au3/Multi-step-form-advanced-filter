import React, { useState, useEffect } from "react";
import { Checkbox } from "antd";

import data from "../../data/data.json";

import { SizesDiv, FilterSectionTitle, CheckboxDiv } from "./style";
import { ShowMore } from "../style/style";

const Sizes = () => {
  const [sizesData, setSizesData] = useState([]);

  useEffect(() => {
    // will be coming from api
    const { sizes } = data;
    setSizesData(sizes);
  }, []);

  const onChange = (selectedSizes) => {
    console.log(selectedSizes);
  };

  return (
    <SizesDiv>
      <FilterSectionTitle>SIZE</FilterSectionTitle>
      <CheckboxDiv>
        {sizesData.length && (
          <Checkbox.Group
            options={sizesData.splice(0, 5)}
            onChange={onChange}
            style={{ display: "flex", flexDirection: "column" }}
          />
        )}
      </CheckboxDiv>
      {/* Todo: Load more data */}
      <ShowMore>Show 7 More</ShowMore>
    </SizesDiv>
  );
};

export default Sizes;
