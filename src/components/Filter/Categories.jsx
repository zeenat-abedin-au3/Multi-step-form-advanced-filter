import React, { useState, useEffect } from "react";
import { Checkbox } from "antd";

import data from "../../data/data.json";

import { CategoriesDiv, FilterSectionTitle, CheckboxDiv } from "./style";
import { ShowMore } from "../style/style";

const Categories = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  const [loadMore, setLoadMore] = useState(false);

  useEffect(() => {
    // will be coming from api
    const { mens_categories } = data;
    setCategoriesData(mens_categories);
  }, []);

  const onChange = (selectedValues) => {
    console.log(selectedValues);
  };

  const handleLoadMore = () => {
    setLoadMore(true);
  };

  const handleLess = () => {
    setLoadMore(false);
  };

  const lessData = categoriesData.slice(0, 5);
  return (
    <CategoriesDiv>
      <FilterSectionTitle>Categories</FilterSectionTitle>
      <CheckboxDiv>
        {categoriesData.length && (
          <Checkbox.Group
            options={loadMore ? categoriesData : lessData}
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
      {/* Todo: Load more data */}
      {loadMore ? (
        <ShowMore onClick={handleLess}>Show less</ShowMore>
      ) : (
        <ShowMore onClick={handleLoadMore}>
          Show {categoriesData.length - loadMore} More
        </ShowMore>
      )}
    </CategoriesDiv>
  );
};

export default Categories;
