import React, { useState, useEffect } from "react";
import { Checkbox } from "antd";

import { BrandDiv, FilterSectionTitle, CheckboxDiv } from "./style";
import { ShowMore } from "../style/style";

import data from "../../data/data.json";

const Brand = () => {
  const [brandsData, setBrandsData] = useState([]);

  useEffect(() => {
    // Later data will be coming from api
    const { brands } = data;

    setBrandsData(brands);
  }, []);

  const onChange = (selectedValues) => {
    console.log(selectedValues);
  };
  return (
    <BrandDiv>
      <FilterSectionTitle>Brands</FilterSectionTitle>
      <CheckboxDiv>
        {brandsData.length && (
          <Checkbox.Group
            options={brandsData.splice(0, 5)}
            onChange={onChange}
            style={{ display: "flex", flexDirection: "column" }}
          />
        )}
      </CheckboxDiv>
      {/* Todo: Load more data */}
      <ShowMore>Show 10 More</ShowMore>
    </BrandDiv>
  );
};

export default Brand;
