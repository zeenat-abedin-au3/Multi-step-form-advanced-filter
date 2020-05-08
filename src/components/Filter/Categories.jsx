import React, { useState, useEffect } from "react";
import { Checkbox } from "antd";
import { useDispatch } from "react-redux";

import data from "../../data/data.json";

import { filterChange } from "../../redux/actions/filter";

import { CategoriesDiv, FilterSectionTitle, CheckboxDiv } from "./style";
import { ShowMore } from "../style/style";

const Categories = () => {
  const dispatch = useDispatch();

  const [categoriesData, setCategoriesData] = useState([]);
  const [loadMore, setLoadMore] = useState(false);

  useEffect(() => {
    // will be coming from api
    const { mens_categories } = data;
    setCategoriesData(mens_categories);
  }, []);

  const onChange = (selectedValues) => {
    dispatch(filterChange("categories", selectedValues));
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
      {loadMore ? (
        <ShowMore onClick={handleLess}>Show less</ShowMore>
      ) : (
        <ShowMore onClick={handleLoadMore}>
          Show {categoriesData.length - 5} More
        </ShowMore>
      )}
    </CategoriesDiv>
  );
};

export default Categories;
