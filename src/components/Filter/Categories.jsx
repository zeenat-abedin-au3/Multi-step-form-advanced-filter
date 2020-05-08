import React, { useState, useEffect } from "react";
import { Checkbox } from "antd";

import data from "../../data/data.json";

import { CategoriesDiv, FilterSectionTitle, CheckboxDiv } from "./style";
import { ShowMore } from "../style/style";

const Categories = () => {
  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    // will be coming from api
    const { mens_categories } = data;
    setCategoriesData(mens_categories);
  }, []);

  const onChange = (selectedValues) => {
    console.log(selectedValues);
  };

  return (
    <CategoriesDiv>
      <FilterSectionTitle>Categories</FilterSectionTitle>
      <CheckboxDiv>
        {categoriesData.length && (
          <Checkbox.Group
            options={categoriesData.splice(0, 5)}
            onChange={onChange}
            style={{ display: "flex", flexDirection: "column" }}
          />
        )}
      </CheckboxDiv>
      {/* Todo: Load more data */}
      <ShowMore>Show 5 More</ShowMore>
    </CategoriesDiv>
  );
};

export default Categories;
